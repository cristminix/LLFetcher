var S=Object.defineProperty;var b=(c,n,t)=>n in c?S(c,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):c[n]=t;var r=(c,n,t)=>(b(c,typeof n!="symbol"?n+"":n,t),t);import{a as x,A as v,B as M,S as w}from"./font-awesome.min-TzyFBro6.js";import{r as A,s as j,b as a,d as T,R as P}from"./index-FvUh_8TE.js";class C extends A.Component{constructor(){super(...arguments);r(this,"commandListener",(t,e)=>{this.onMessageCommand(t,e)})}async sendMessageAsync(t,e,s="content"){return new Promise((o,i)=>{const l=(u,g)=>{chrome.runtime.onMessage.removeListener(l),o([u,g])};try{chrome.runtime.onMessage.addListener(l),j(t,e,s)}catch(u){i(u)}})}async getFromMessage(t,e,s){const[o,i]=await this.sendMessageAsync(t,e,s);return o.name===t?o.data:null}async onMessageCommand(t,e){}onMessage(){try{chrome.runtime.onMessage.removeListener(this.commandListener),chrome.runtime.onMessage.addListener(this.commandListener)}catch(t){console.log(t)}}initMessaging(){this.onMessage()}}class F extends C{constructor(t){super(t);r(this,"mApp",null);r(this,"mCourse",null);r(this,"mAuthor",null);r(this,"store",null);r(this,"courseAuthors",[]);const{store:e}=t;this.store=e,this.mApp=e.get("App"),this.mCourse=e.get("Course"),this.mAuthor=e.get("Author"),this.state={greeting:"LLFetcher 3.0+",lastCourseList:{},fetchBtnState:0,loading:!1,courseInfo:null,validCoursePage:!1,disableFetchBtn:!1,isLogin:!1}}async addToLastCourseList(t){this.setState({courseInfo:t});const e=t.slug,s=await this.createCourse(t);Object.keys(this.state.lastCourseList).includes(e)||this.populateLastCourseList(),await this.props.onSelectCourse(s,this.courseAuthors)}onMessageCommand(t,e){t.name==="cmd.validCoursePageAuto"&&this.setState({validCoursePage:t.data})}populateLastCourseList(){const t=this.mCourse.getList();let e={};for(let s in t)e[t[s].slug]=t[s];this.setState({lastCourseList:e})}async componentDidMount(){this.populateLastCourseList(),this.initMessaging(),await this.getValidCourseMessage()}async getValidCourseMessage(){const t="cmd.validCoursePage",e=await this.getFromMessage(t);this.setState({validCoursePage:e})}async getIsLoginMessage(){const t="cmd.isLogin",e=await this.getFromMessage(t);this.seState({isLogin:e})}async getCourseInfoMessage(){const t="cmd.getCourseInfo";this.setState({fetchBtnState:1});const e=await this.getFromMessage(t);await this.addToLastCourseList(e)}async getCurrentTabUrl(){return new Promise((t,e)=>{chrome.tabs.query({active:!0,currentWindow:!0},function(s){let i=s[0].url;t(i)})})}async activateAddCourseOptionTab(t){const e="src/option-pages/",s=chrome.runtime.getURL(`${e}options.html`),o=`${s}#/course/add/${t}`;(await chrome.tabs.query({url:`${s}*`})).length>0?chrome.runtime.sendMessage({action:"activateTab",url:o,optionPageBaseUrl:e}):chrome.tabs.create({url:o})}async addCourseFromCurrentUrl(){const e=(await this.getCurrentTabUrl()).replace("https://www.linkedin.com/learning/","").split("/")[0];this.activateAddCourseOptionTab(e)}async onSelectCourse(t){this.activateAddCourseOptionTab(t)}render(){const{isLogin:t,greeting:e,lastCourseList:s,fetchBtnState:o,validCoursePage:i,loading:l,disableFetchBtn:u}=this.state,g=Object.keys(s),L=o==0?"fa-plus":o==1?"fa-spin fa-spinner":o==2?"fa-refresh":"fa-hand-o-right",h=g.map(m=>{const d=s[m],f=d.slug,y=d.title;return{value:f,text:y}});return a.jsx(a.Fragment,{children:a.jsxs("div",{className:"welcome-page page gap-2 flex flex-col items-center pt-2",children:[a.jsxs("div",{className:"flex gap-2",children:[a.jsx("div",{children:a.jsx("img",{src:x})}),a.jsx("div",{children:a.jsx("p",{className:"font-bold pt-2 pb-4 text-center text-lg",style:{fontFamily:"Monoton, cursive"},children:e})})]}),a.jsxs("div",{className:"action-cnt w-full",children:[h.length>0?a.jsx(a.Fragment,{children:a.jsx(v,{data:h,label:"Load Last Course",onSelect:m=>this.onSelectCourse(m)})}):"",i?a.jsx("div",{className:"btn-cnt text-center  p-2",children:a.jsx(M,{disabled:o==1||!i||u,className:"mx-auto btn btn-primary",onClick:m=>this.addCourseFromCurrentUrl(),icon:`fa ${L}`,caption:"Add This Course"})}):""]})]})})}}class U extends C{constructor(t){super(t);r(this,"store",null);r(this,"mApp",null);r(this,"mAuthor",null);r(this,"mSection",null);r(this,"mToc",null);r(this,"mCourse",null);const{store:e}=t;this.store=e,this.mApp=e.get("App"),this.mAuthor=e.get("Author"),this.mSection=e.get("Section"),this.mToc=e.get("Toc"),this.mCourse=e.get("Course"),this.state={course:null,courseAuthors:null,courseSectionInfoStr:"[]",courseSectionStr:"[]",courseTocsStr:"[]",nav:"welcome"}}onNavUpdate(t){this.setState({nav:t})}async loadCourseSections(){if(console.log("Popup.createCourseSections() empty csi "),console.log("try to load from database "),this.state.course){const t=this.mSection.getList(this.state.course.id);let e={};for(let s in t){const o=t[s];e[o.slug]=this.mToc.getListBySectionId(o.id)}await this.updateCourseData(t,e)}}async activateOptionTab(t){const e=chrome.runtime.getURL(`options.html#/manager/${t}`);(await chrome.tabs.query({url:`${chrome.runtime.getURL("options.html")}*`})).length>0?chrome.runtime.sendMessage({action:"activateTab",url:e}):chrome.tabs.create({url:e}),setTimeout(o=>window.close(),100)}async updateCourseData(t,e){const s=JSON.stringify(t),o=JSON.stringify(e);this.setState({courseSectionStr:s,courseTocsStr:o},async()=>{this.state.course.slug!==""&&(await this.mCourse.setLastSlug(this.state.course.slug),this.setState({nav:"course"},()=>{const{course:i,sections:l,tocs:u}=this.state;console.log(i,l,u)}),this.activateOptionTab(this.state.course.slug))})}}class B extends U{constructor(n){super(n)}async onSelectCourse(n){console.log(n)}componentDidMount(){}render(){const{store:n}=this;return a.jsx("div",{className:"app-container w-[300px] py-4 px-2 dark:bg-gray-700 dark:text-gray-200",children:a.jsx(F,{store:n})})}}const p=w.getInstance();p.ready(()=>{T.createRoot(document.getElementById("popup")).render(a.jsx(P.StrictMode,{children:a.jsx(B,{store:p})}))});