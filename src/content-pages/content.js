import ContentScript from "./ContentScript"
import { sendMessage } from "../global/fn"
const injectScript = (file_path, tag , callback = f=>f, error= f=>f) => {
    let node = document.getElementsByTagName(tag)[0];
    let script = document.createElement('script');
        script.addEventListener("load", () => {
            console.log(`${script.src} loaded`)
            callback(script)
        })
        script.addEventListener("error", (ev) => {
            console.log("Error on loading file", ev)
            error(ev)
        });
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', file_path);
    node.appendChild(script);
}

const injectScriptAsync = async(src, callback=f=>f)=>{
    return new Promise((resolve, reject) => {
        injectScript(chrome.runtime.getURL(src), 'body', (el)=>{
            if(typeof callback === 'function'){
                callback()
            }
            resolve(el)
        },(ev)=>{
            reject(ev)
        })
    })
}

const main = async () => {
    // const scripts = []
    window.contentScript = new ContentScript()
    await injectScriptAsync('src/content-pages/dist/content-inject.js',()=>{
        setTimeout(()=>{
            window.contentScript.executeTopScript('getCookie').then(cookies=>{
                console.log(cookies)
                sendMessage('content.cookie.set', {cookies}, 'background', (response)=>{
                    console.log(response)
                })
            })
        },1000)
    })
    
}

main()