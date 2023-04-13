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
const injectScript = (file_path, tag ) => {
    let node = document.getElementsByTagName(tag)[0];
    let script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', file_path);
    node.appendChild(script);
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

                case 'console.log':
                    evt.data.map(item => console.log(item));
                break 
            }
            console.log(evt, source);
        });
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
        this.setInputScriptContent(is);
        this.getExecuteBtn().click();
        this.waitForScriptOutput(is.ocls, callback);
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

    onCommand(command){
        const cmd = command.replace(/^cmd\./,'');
        const ocls = `ocls-${(new Date).getTime()}`;
        const is = {
            cmd, 
            ocls
        };
        this.executeScriptContent(is, data => {
            // console.log(data)
            sendMessage(`${command}`, data);
        });
    }
}
const main = async () => {
    injectScript(chrome.runtime.getURL('learning.js'), 'body');
    injectScript(chrome.runtime.getURL('lib/react.development.js'), 'body');
    injectScript(chrome.runtime.getURL('lib/react-dom.development.js'), 'body');
    injectScript(chrome.runtime.getURL('app.js'), 'body');

    const contentScript = new ContentScript();    
};


main();
