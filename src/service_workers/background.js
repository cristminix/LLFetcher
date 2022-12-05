import chromeStorageDB from '../libs/chromeStorageDB';

const db = new chromeStorageDB('course','sync');

db.isNew((isNew)=>{
    if(isNew){
        const schema = {
            course : ["title", "slug", "duration", "sourceCodeRepository", "description",'authorIds'],
            author : ["name","slug","biography", "shortBiography","courseIds"],
            exerciseFile : ["courseId","name","url","size"],
            section : ["courseId","slug","title"],
            toc : ["sectionId","title","slug","url","duration","captionUrl","captionFmt","streamLocationIds"],
            streamLocation : ["tocId","fmt","url"],
            downloadConfig : ["courseId","fmtList","selectedFmtList"],
            downloads : ["tocId","downloadId","filename","progress","status"],
            app: ["version","state","lastCourseSlug"]
        };
        Object.keys(schema).forEach((table)=>{
            if(!db.tableExists(table)){
                db.createTable(table, schema[table]);
    
            }
        });
        db.commit();
    }
})   


let ENV = 'development';

if(ENV === 'production'){
    chrome.action.disable();
}

function _isValidCoursePage  (url ) {
    const urlPathArray = url.split('?')[0].split("/").filter(item => item);
    let validCoursePage = false;
    if(urlPathArray.length >= 4){
        if(urlPathArray[2] === 'learning'){
            validCoursePage = true;
        }
    }
    return validCoursePage;
}
function _sendCoookieMessage() {
    chrome.cookies.getAll({domain: "linkedin.com"}, function(_cookie) {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs ) {
            try{
                const tab = tabs[0];
                chrome.tabs.sendMessage(tab.id, {event: 'sendCoookie',cookie: _cookie}, (r) => {});
            }catch(e){}
        });
    });
};

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) =>{
	if(changeInfo.status == "complete"){
		if(_isValidCoursePage(tab.url )){
            if(ENV === 'production'){
                chrome.action.enable(tabId);
            }
            chrome.tabs.sendMessage(tab.id , {event: 'onTabUpdated',url: tab.url}, (r) => { });
            
            _sendCoookieMessage();
		}
		else{
            if(ENV === 'production'){
			    chrome.action.disable(tabId);
            }    
        }
    }
});

chrome.webNavigation.onHistoryStateUpdated.addListener(function(tab) {

        if(_isValidCoursePage(tab.url)){
            if(ENV === 'production'){
                chrome.action.enable(tab.tabId);
            }
            chrome.tabs.sendMessage(tab.tabId, {event: 'onHistoryStateUpdated',url: tab.url}, (r) => { });
            _sendCoookieMessage();
        }
        else{
            if(ENV === 'production'){
			    chrome.action.disable(tab.tabId);
		    }
        }
});
setTimeout(()=>{
console.log(db)

},1000)
