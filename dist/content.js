function injectScript(file_path, tag ) {
    let node = document.getElementsByTagName(tag)[0];
    let script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', file_path);
    node.appendChild(script);
}

injectScript(chrome.runtime.getURL('learning.js'), 'body');
injectScript(chrome.runtime.getURL('lib/react.development.js'), 'body');
injectScript(chrome.runtime.getURL('lib/react-dom.development.js'), 'body');

injectScript(chrome.runtime.getURL('app.js'), 'body');