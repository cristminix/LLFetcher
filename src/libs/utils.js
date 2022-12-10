import _ from 'underscore';
import { io } from "socket.io-client";
// import Proxy from "./proxy";

export class LogServer{
 
  constructor(clientName){

    this.clientName = clientName;
    const socket = io('ws://localhost:2002');
    socket.on('connection',(r)=>{
      console.log(r) 
    })


    socket.on("connect", () => {
      console.log(socket.id); // x8WIv7-mJelg7on_ALbx
    });

    socket.on("disconnect", (reason) => {
      if (reason === "io server disconnect") {
        // the disconnection was initiated by the server, you need to reconnect manually
        socket.connect();
      }
      // else the socket will automatically try to reconnect
    }); 
    this.socket = socket;
  }

   log(data,lineNumber){
    const src = this.clientName;
    let consoleArgs = {data,src,lineNumber};
    
    
    try{
      this.socket.emit('log',consoleArgs);
    }catch(e){console.log(e)}
  }
  logWeb(data){
    data.src = this.clientName;
    const data64 = btoa(JSON.stringify(data));
    const url = 'http://localhost:2002/log?data='+data64;
    // Proxy.post(url,data,(r)=>{},(r)=>{});
    setTimeout(()=>{
      fetch(url)
    // .then((response) => response.json())
    // .then((data) => console.log(data));
    },100);
    
    
  }
}

export function formatBytes(bytes) {
  if (bytes > 1024) return (bytes / 1024).toFixed(1) + 'K'
  return String(bytes)
}



export function findItems(searchTerm, source){
  let __searchTerm__ = searchTerm;
  let __results__ = [];

  function resultExist(resultItem){
    for(let index in __results__){
        if(_.isEqual(resultItem, __results__[index])){
            return true;
        }
    }
    return false;
  }
  function searchItem(item) { 
    if('undefined' == typeof item || item == null){
        return;
    }
    Object.keys(item).forEach(key => {
      if (typeof item[key] === "object") {
        searchItem(item[key])
      }
      if (typeof item[key] === "string") {
        let searchAsRegEx = new RegExp(__searchTerm__, "gi");
        if (item[key].match(searchAsRegEx)) {
          if(!resultExist(item)){
              __results__.push(item);
          }
        }
      }
    });   
  }
  searchItem(source);

  return __results__;
}

// findBpr('$type','com.linkedin.learning.api.deco.content.ExerciseFile',bprStore,['sizeInBytes','name','url'],false)
export function findDS(k,v,src,props,list){
  list = 'undefined' === typeof list ? false : list;
  let lists = [];
  for(let i in src){
      const obj = src[i];
      if('undefined' !== typeof obj[k]){
          if(obj[k] === v){
              let rets = {};
              for(let j in props){
                  const prop = props[j];
                  if('undefined' !== typeof obj[prop]){
                      rets[prop] = obj[prop];
                  }else{
                      rets[prop] = null;
                  }
              }
              if(!list){
                  return rets;
              }else{
                  lists.push(rets);
              }  
          }
      }
  }
  return lists;
}

export function getFmt(url){
  let str = url.split('?')[0].split('/').filter(item => item !== '')[4].replace(/^learning-original-video-/,'');
  
  let matches = ['audio','360','720','480','1080','540','hls'];

  for( let m in matches){
      if(str.match(matches[m])){
          return matches[m];
      }
  }
  return str;
}

export function makeTitle(slug) {
  const words = slug.split('-');
  
  for (let i = 0; i < words.length; i++) {
      let word = words[i];
      words[i] = word.charAt(0).toUpperCase() + word.slice(1);
  }
  
  return words.join(' ');
}

export function makeSlug(str) {
    const words = str.replace(/\W+/g,' ').split(' ');
    return words.join('-').toLowerCase();
}

export function sendMessageSaveDataCodesToLS(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        const tab = tabs[0];
        chrome.tabs.sendMessage(tab.id, {event: 'SaveDataCodesToLS'}, (r) => {});

    });
}

export function contentConsoleLog(data){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        const tab = tabs[0];
        chrome.tabs.sendMessage(tab.id, {event: 'ContentConsoleLog',param:data}, (r) => {});

    });
}

export function attachListener(fn){
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) =>{
    // console.log(request, sender, sendResponse);
    fn(request, sender, sendResponse);  
  });
}

export function sendMessageBg(data){
  chrome.runtime.sendMessage(data,function(response){});
}

export function myLogServer(){
  const logServer = {
      logContent:(data)=>{
          chrome.tabs.query({active: true, currentWindow: true}, function(tabs ) {
              try{
                  const tab = tabs[0];
                  chrome.tabs.sendMessage(tab.id, {event: 'LogServer',data}, (r) => {});
              }catch(e){}
          });
      },
      logWeb:(data)=>{
          // if(typeof data !== 'object'){
          //     data = {data};
          // }
          logServer.logContent(data);
          // chrome.runtime.sendMessage({cmd: "logServer",data});
      }
  };
  return logServer;
}