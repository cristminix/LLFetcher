import jQuery from "jquery";
const createReactRootElement = f => {
    jQuery(document.body).prepend(`<div id="app-container"><div id="content-script-root">ROOT</div></div>`)
}

const waitForElm = selector => {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector))
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        })
    })
}

/**
 * Example route
 * /search
 * URL changed to /search?contentBy=urn%3Ali%3Aorganization%3A1337&difficultyLevel=BEGINNER&durations=BETWEEN_0_TO_10_MIN&entityType=COURSE&keywords=puppeteer&u=95231473
 * */
const getParams = ()=>{
    
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    });
    // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
    // let value = params.some_key; // "some_value"
    // console.log(params)
}

const attachRouteChangesEvent = (callback)=>{
    let previousUrl = '';

    let observer = new MutationObserver(function(mutations) {
    if (location.href !== previousUrl) {
          previousUrl = location.href;
          const path = location.href.replace(/https\:\/\/www\.linkedin\.com\/learning/,'')
          callback(path)
        }
    });

    const config = {subtree: true, childList: true};
    observer.observe(document, config);    
}

const detectVideoJs = (callback)=>{
    waitForElm('.video-js').then((elm) => {
        // console.log('.video-js is ready');
        callback(elm)
    });
}
const isCoursePage = ()=>{
	let valid = jQuery('div[data-avail-test]').attr('data-avail-test') === 'page:course'

    return valid
}
// function getCourseSlug(){
// 	const ci = getCourseInfo()
// 	return ci.slug
// }

const getCourseSlugByPath = (path)=>{
	let slug = ''
	try{
		path.split('/')
		slug = path.split('/')[1]
	}catch(e){}

	return slug
}
const redirectNoAutoPlay = ()=>{

}
const pauseVideo=(timeout=5000)=>{
	detectVideoJs(()=>{
        setTimeout(()=>{
            document.querySelector('video').pause()
        },timeout)
    })
}

export {
    createReactRootElement,
    waitForElm,
    getParams,
    attachRouteChangesEvent,
    isCoursePage,
    detectVideoJs,
    getCourseSlugByPath,
    pauseVideo
}