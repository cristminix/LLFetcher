const waitForElm = (selector) => {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
};
const MsgEvt = (name, data = null) => {
    return {name, data}
};
const sendMessage = (eventName, data, target='popup', callback = f => f) => {
    const evt = MsgEvt(eventName, data);
    chrome.runtime.sendMessage(evt, callback);
};
const onMessage = (callback) => {
    chrome.runtime.onMessage.addListener((evt, source)=>{
        callback(evt, source);
    });
};
const injectScript = (file_path, tag , callback = f=>f, error= f=>f) => {
    let node = document.getElementsByTagName(tag)[0];
    let script = document.createElement('script');
        script.addEventListener("load", () => {
            console.log(`${script.src} loaded`);
            callback(script);
        });
        script.addEventListener("error", (ev) => {
            console.log("Error on loading file", ev);
            error(ev);
        });
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', file_path);
    node.appendChild(script);
};
const injectScriptAsync = async(src)=>{
    return new Promise((resolve, reject) => {
        injectScript(chrome.runtime.getURL(src), 'body', (el)=>{
            resolve(el);
        },(ev)=>{
            reject(ev);
        });
    })
};

class ContentScript {
    constructor(){
        this.initController();
    }

    initController(){
        onMessage((evt, source) => {
            switch(evt.name){
                case 'cmd.getCourseInfo':
                    this.onCommand(evt.name);
                break
                case 'cmd.getCourseSections':
                    this.onCommand(evt.name, evt.data);
                break
                case 'cmd.validCoursePage':
                    this.onCommand(evt.name);
                break

                case 'console.log':
                    evt.data.map(item => console.log(item));
                break 
            }
            // console.log(evt, source);
        });

        this.waitForCheckerElm();
    }

    getExecuteBtn(){
        return document.getElementById('exec-button')
    }
    getInputScriptEl(){
        return document.getElementById('input-script')
    }
    getOutputScriptEl(){
        return document.getElementById('output-script')
    }
    setInputScriptContent(is){
        this.getInputScriptEl().value = JSON.stringify(is);
    }
    executeScriptContent(is, callback){
        try{
            this.setInputScriptContent(is);
            this.getExecuteBtn().click();
            this.waitForScriptOutput(is.ocls, callback);
        }catch(e){
            // console.log(e)
        }
        
        
    }
    waitForScriptOutput(ocls, callback){
        waitForElm(`.${ocls}`).then((elm) => {
            const data = JSON.parse(elm.value);
            callback(data);
        });
    }
    /*onGetCourseInfo(){
        const ocls = `ocls-${(new Date).getTime()}`
        const is = {
            cmd : 'getCourseInfo',
            ocls
        }
        
        this.executeScriptContent(is, data => {
            // console.log(data)
            sendMessage(`cmd.${is.cmd}`, data)
        })

    }*/
    waitForCheckerElm(){
        waitForElm('.course-checker-last').then(el => {
            // console.log(el)
            
            if(el){
                el.setAttribute('class','_blank');
                setTimeout(()=>{
                    this.onCommand('cmd.validCoursePage');
                    this.waitForCheckerElm();

                },3000);
    
            }
        });
    }

    onCommand(command, param){
        const cmd = command.replace(/^cmd\./,'');
        const ocls = `ocls-${(new Date).getTime()}`;
        const is = {
            cmd, 
            ocls,
            param
        };
        this.executeScriptContent(is, data => {
            // console.log(data)
            sendMessage(`${command}`, data);
        });
    }

    
}


const main = async () => {
    const scripts = ['learning.js', 'lib/react.development.js', 
        'lib/react-dom.development.js', 'app.js'];
    for(let i in scripts){
        const src =  scripts[i];
        await injectScriptAsync(src);
    }
   
    const contentScript = new ContentScript();   
};


main();
