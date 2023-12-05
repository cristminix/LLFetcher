var b=Object.defineProperty;var k=(n,t,e)=>t in n?b(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var S=(n,t,e)=>(k(n,typeof t!="symbol"?t+"":t,e),e);import{o as v,c as x,s as w,a as R,r as l,j as o,b as I}from"./index-H9g6PPaV.js";import{j as u}from"./index-default-FtYdW2tD.js";const j=n=>{u(document.body).prepend('<div id="app-container"><div id="content-script-root">ROOT</div></div>')},d=n=>new Promise(t=>{if(document.querySelector(n))return t(document.querySelector(n));const e=new MutationObserver(s=>{document.querySelector(n)&&(t(document.querySelector(n)),e.disconnect())});e.observe(document.body,{childList:!0,subtree:!0})}),E=n=>{let t="",e=new MutationObserver(function(c){if(location.href!==t){t=location.href;const r=location.href.replace(/https\:\/\/www\.linkedin\.com\/learning/,"");n(r)}});const s={subtree:!0,childList:!0};e.observe(document,s)},T=n=>{d(".video-js").then(t=>{n(t)})},P=()=>u("div[data-avail-test]").attr("data-avail-test")==="page:course",O=n=>{let t="";try{n.split("/"),t=n.split("/")[1]}catch{}return t},D=(n=5e3)=>{T(()=>{setTimeout(()=>{document.querySelector("video").pause()},n)})};class F{constructor(){this.initController()}initController(){v((t,e)=>{switch(t.name){case"cmd.getCourseInfo":this.onCommand(t.name);break;case"cmd.getCourseSections":this.onCommand(t.name,t.data);break;case"cmd.getCourseToc":this.onCommand(t.name,t.data);break;case"cmd.getCookie":this.onCommand(t.name,t.data);break;case"cmd.isLogin":this.onCommand(t.name,t.data);break;case"cmd.validCoursePage":case"cmd.validCoursePageAuto":this.onCommand(t.name);break;case"console.log":t.data.map(s=>console.log(s));break}}),this.waitForCheckerElm()}getExecuteBtn(){return document.getElementById("exec-button")}getInputScriptEl(){return document.getElementById("input-script")}getOutputScriptEl(){return document.getElementById("output-script")}setInputScriptContent(t){this.getInputScriptEl().value=JSON.stringify(t)}executeScriptContent(t,e){try{this.setInputScriptContent(t),this.getExecuteBtn().click(),this.waitForScriptOutput(t.ocls,e)}catch{}}waitForScriptOutput(t,e){d(`.${t}`).then(s=>{const c=JSON.parse(s.value);e(c)})}waitForCheckerElm(){d(".course-checker-last").then(t=>{t&&(t.setAttribute("class","_blank"),setTimeout(()=>{this.onCommand("cmd.validCoursePageAuto"),this.waitForCheckerElm()},3e3))})}createRandCls(){const t=new Date().getTime().toString();return`os-${x.crc32(t).toString(16)}`}onCommand(t,e){const s=t.replace(/^cmd\./,""),c=this.createRandCls(),r={cmd:s,ocls:c,param:e};this.executeScriptContent(r,i=>{w(`${t}`,i,"popup")})}}R(u);class A extends l.Component{constructor(t){super(t),this.state={validCoursePage:!1,slug:"",outputScriptCls:"default",outputScript:"",display:"flex"}}async getCourseInfo(){return getCourseInfo(this.state.slug)}async validCoursePage(){return this.state.validCoursePage}async isLogin(){return u('a:containsRegex("sign in")').length>0?!1:(u("div.nav-bar__item-text:contains(Me)").length>0,!0)}async getCookie(){return cookiesToJSON()}async validCoursePageAuto(){return this.state.validCoursePage}async getCourseToc(t){console.log(t)}async getCourseSections(t){console.log(t)}}const y=({children:n,hasChildren:t})=>{const e=t?"course-checker":"course-checker-last";return o.jsx("span",{className:e,children:n})},B=({validCoursePage:n})=>{const[t,e]=l.useState("[]"),[s,c]=l.useState(0);l.useEffect(()=>{console.log(n),console.log(chrome);let a=s;a+=1,c(a),r(a)},[n]);const r=a=>{const g=[];let h=g;console.log(a);let m=[],C=0;for(;a--;)console.log(a),h.length===0&&(m.push([]),h.push(m[C]),h=m[C],C++);let f=JSON.stringify(g);console.log(f),e(f)},i=a=>{const g=n?"This is valid course page":"This is not course page";return a.length?o.jsx(y,{hasChildren:!0,children:i(a.pop())}):o.jsx(y,{hasChildren:!1,children:g})},p=JSON.parse(t);return o.jsx(o.Fragment,{children:i(p)})};class J extends A{constructor(e){super(e);S(this,"inputScriptRef",null);this.inputScriptRef=l.createRef(null)}getData(){console.log("ContentScriptApp.getData()")}componentDidMount(){setTimeout(()=>{this.setState({display:"none"})},5e3)}createRandCls(){const e=new Date().getTime().toString();return`os-${x.crc32(e).toString(16)}`}async runScript(){let e={cmd:"getCourseInfo",param:null,ocls:this.createRandCls()};try{e=JSON.parse(this.inputScriptRef.current.value);const s=e.cmd,c=e.param||null,r=e.ocls||"default";if(typeof this[s]=="function"){const i=await this[s](c);this.setState({outputScript:JSON.stringify(i,null,4),outputScriptCls:r})}else console.error(`ContentScriptApp doesnt have any method called ${s}`);console.log(e)}catch(s){console.error(s)}}onInputScriptChange(e){}render(){const{display:e}=this.state,{appContainerId:s}=this.props,c=JSON.stringify({cmd:"getCourseInfo",param:null,ocls:this.createRandCls()});return o.jsx(o.Fragment,{children:o.jsxs("div",{id:s,style:{display:e,flexDirection:"column",width:"400px",position:"absolute",background:"#000",color:"#fff",zIndex:2001,opacity:.7,fontFamily:"monospace",marginTop:"3.1em",marginLeft:"22%",padding:"1em"},children:[this.state.validCoursePage?o.jsx(o.Fragment,{children:o.jsx("span",{children:this.state.slug})}):"Extension is ready",o.jsx("textarea",{id:"input-script",style:{color:"#fff"},defaultValue:c,onChange:r=>this.onInputScriptChange(r),ref:this.inputScriptRef}),o.jsx("textarea",{id:"output-script",style:{color:"#fff"},className:this.state.outputScriptCls,onChange:r=>r,value:this.state.outputScript}),o.jsx("div",{style:{width:"100%",textAlign:"right"},children:o.jsx("button",{style:{padding:"1em",background:"#fff",color:"#000"},id:"exec-button",onClick:r=>{this.runScript()},children:"Execute Page Fn"})}),o.jsx(B,{validCoursePage:this.state.validCoursePage})]})})}}console.log("this is content script");console.log("src/content-pages/content.js");const N=async()=>{const n="content-script-root",t="content-script-app",e=l.createRef(null);let s=null;E(async i=>{console.log(`URL changed to ${i}`),s||(await d(`#${t}`),s=e.current);const p=P(),a=O(i);s.setState({validCoursePage:p,slug:a}),p&&D()}),j();const c=await d(`#${n}`);I.createRoot(c).render(o.jsx(J,{ref:e,appContainerId:t})),new F};N();
