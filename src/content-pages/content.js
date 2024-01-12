import ContentScript from "./ContentScript"
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

const injectScriptAsync = async(src)=>{
    return new Promise((resolve, reject) => {
        injectScript(chrome.runtime.getURL(src), 'body', (el)=>{
            resolve(el)
        },(ev)=>{
            reject(ev)
        })
    })
}

const main = async () => {
    // const scripts = []
    await injectScriptAsync('src/content-pages/dist/content-inject.js')
    window.contentScript = new ContentScript()

}

main()