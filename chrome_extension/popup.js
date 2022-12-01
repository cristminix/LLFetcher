/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/libs/utils.js":
/*!***************************!*\
  !*** ./src/libs/utils.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contentConsoleLog": () => (/* binding */ contentConsoleLog),
/* harmony export */   "findDS": () => (/* binding */ findDS),
/* harmony export */   "findItems": () => (/* binding */ findItems),
/* harmony export */   "formatBytes": () => (/* binding */ formatBytes),
/* harmony export */   "getFmt": () => (/* binding */ getFmt),
/* harmony export */   "makeSlug": () => (/* binding */ makeSlug),
/* harmony export */   "makeTitle": () => (/* binding */ makeTitle),
/* harmony export */   "sendMessageSaveDataCodesToLS": () => (/* binding */ sendMessageSaveDataCodesToLS)
/* harmony export */ });
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function formatBytes(bytes) {
  if (bytes > 1024) return (bytes / 1024).toFixed(1) + 'K';
  return String(bytes);
}
function findItems(searchTerm, source) {
  var __searchTerm__ = searchTerm;
  var __results__ = [];
  function resultExist(resultItem) {
    for (var index in __results__) {
      if (underscore__WEBPACK_IMPORTED_MODULE_0__["default"].isEqual(resultItem, __results__[index])) {
        return true;
      }
    }
    return false;
  }
  function searchItem(item) {
    if ('undefined' == typeof item || item == null) {
      return;
    }
    Object.keys(item).forEach(function (key) {
      if (_typeof(item[key]) === "object") {
        searchItem(item[key]);
      }
      if (typeof item[key] === "string") {
        var searchAsRegEx = new RegExp(__searchTerm__, "gi");
        if (item[key].match(searchAsRegEx)) {
          if (!resultExist(item)) {
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
function findDS(k, v, src, props, list) {
  list = 'undefined' === typeof list ? false : list;
  var lists = [];
  for (var i in src) {
    var obj = src[i];
    if ('undefined' !== typeof obj[k]) {
      if (obj[k] === v) {
        var rets = {};
        for (var j in props) {
          var prop = props[j];
          if ('undefined' !== typeof obj[prop]) {
            rets[prop] = obj[prop];
          } else {
            rets[prop] = null;
          }
        }
        if (!list) {
          return rets;
        } else {
          lists.push(rets);
        }
      }
    }
  }
  return lists;
}
function getFmt(url) {
  var str = url.split('?')[0].split('/').filter(function (item) {
    return item !== '';
  })[4].replace(/^learning-original-video-/, '');
  var matches = ['audio', '360', '720', '480', '1080', '540', 'hls'];
  for (var m in matches) {
    if (str.match(matches[m])) {
      return matches[m];
    }
  }
  return str;
}
function makeTitle(slug) {
  var words = slug.split('-');
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    words[i] = word.charAt(0).toUpperCase() + word.slice(1);
  }
  return words.join(' ');
}
function makeSlug(str) {
  var words = str.replace(/\W+/g, ' ').split(' ');
  return words.join('-').toLowerCase();
}
function sendMessageSaveDataCodesToLS() {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function (tabs) {
    var tab = tabs[0];
    chrome.tabs.sendMessage(tab.id, {
      event: 'SaveDataCodesToLS'
    }, function (r) {});
  });
}
function contentConsoleLog(data) {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function (tabs) {
    var tab = tabs[0];
    chrome.tabs.sendMessage(tab.id, {
      event: 'ContentConsoleLog',
      param: data
    }, function (r) {});
  });
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/Popup.vue?vue&type=style&index=0&id=5f4bbcc0&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/Popup.vue?vue&type=style&index=0&id=5f4bbcc0&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n#popup[data-v-5f4bbcc0] {\r\n    width : 680px;\r\n    min-height: 480px;\r\n    padding: 1em;\r\n    background: rgb(249, 242, 249);\r\n    border: solid 1px #ddd;\n}\n.page[data-v-5f4bbcc0]{\r\n  margin :0 2em 2em;\r\n  /*border: solid 1px #dedede;*/\r\n  padding: 1em;\r\n  border-radius: 4px;\n}\r\n", "",{"version":3,"sources":["webpack://./src/popup/Popup.vue"],"names":[],"mappings":";AA+FA;IACI,aAAa;IACb,iBAAiB;IACjB,YAAY;IACZ,8BAA8B;IAC9B,sBAAsB;AAC1B;AAEA;EACE,iBAAiB;EACjB,6BAA6B;EAC7B,YAAY;EACZ,kBAAkB;AACpB","sourcesContent":["<template>\r\n  <div class=\"app-container\">\r\n    <PageNavigation @update=\"onNavUpdate($event)\" :nav=\"nav\" ref=\"pageNavigation\"/>\r\n    <WelcomePage v-if=\"nav=='welcome'\"/>\r\n    <LoadingPage v-if=\"nav=='loading'\" text=\"Fetching Course Data\"/>\r\n    <HomePage v-if=\"nav=='home'\"/>\r\n    <CoursePage @update=\"onCourseUpdate($event)\" v-if=\"nav=='course'\" :course=\"course\"  ref=\"coursePage\"/>\r\n    <DownloadPage v-if=\"nav=='downloads'\"/>\r\n    <HelpPage v-if=\"nav=='help'\"/>\r\n    <AboutPage v-if=\"nav=='about'\"/>\r\n    <div class=\"console\" v-show=\"message.length>0\">\r\n      <highlightjs\r\n          language=\"console\"\r\n          :code=\"JSON.stringify(message,null,2)\"\r\n      />\r\n    </div>\r\n  </div>\r\n</template>\r\n\r\n<script lang=\"ts\">\r\nimport {defineComponent, ref} from 'vue';\r\nimport NavTerm from '../types/navterm'; \r\nimport Course from '../types/course';\r\n\r\nimport PageNavigation from './components/PageNavigation.vue';\r\nimport WelcomePage from './views/WelcomePage.vue'\r\nimport HomePage from './views/HomePage.vue'\r\nimport LoadingPage from './views/LoadingPage.vue'\r\nimport CoursePage from './views/CoursePage.vue'\r\nimport DownloadPage from './views/DownloadPage.vue'\r\nimport AboutPage from './views/AboutPage.vue'\r\nimport HelpPage from './views/HelpPage.vue'\r\nimport Store from '../libs/store';\r\n\r\nexport default defineComponent({\r\n  name: 'Popup',\r\n  components: {\r\n    PageNavigation,\r\n    WelcomePage,\r\n    LoadingPage,\r\n    HomePage,\r\n    CoursePage,\r\n    DownloadPage,\r\n    AboutPage,\r\n    HelpPage\r\n  },\r\n  setup(){\r\n    const nav = ref<NavTerm>('welcome');\r\n    const course = ref({} as Course);\r\n\r\n    const onNavUpdate = (target : NavTerm) => {\r\n      nav.value = target;\r\n    };\r\n    \r\n    \r\n    const onCourseUpdate = (target:any) => {\r\n      console.log(target);\r\n      // this.rebuildCourseInfo(sectionIndex, tocIndex, toc);\r\n    };\r\n    const message = ref('');\r\n    const app = ref({state:0})\r\n    return {nav, course, onNavUpdate, onCourseUpdate, message,app};\r\n  },\r\n  mounted(){\r\n    console.log('App Entry Point Start here...');\r\n    Store.prepareAppStorage();\r\n\r\n    setTimeout(()=>{ \r\n      const db = Store.db();\r\n      console.log(db);\r\n      db.subscribe('app',(row)=>{\r\n        // console.log(row);\r\n        this.app = row;\r\n        this.log(`AppState:${row.state}`);\r\n      });\r\n    },1000)\r\n\r\n  },\r\n  methods:{\r\n    log(message:string){\r\n      this.message = message;\r\n\r\n    },\r\n    setCourse(course){\r\n      this.course = course;\r\n      setTimeout(()=>{\r\n        this.nav = this.$refs.pageNavigation.nav = 'course';\r\n      },250);\r\n    }\r\n  }\r\n})\r\n</script>\r\n\r\n\r\n<style scoped>\r\n#popup {\r\n    width : 680px;\r\n    min-height: 480px;\r\n    padding: 1em;\r\n    background: rgb(249, 242, 249);\r\n    border: solid 1px #ddd;\r\n}\r\n\r\n.page{\r\n  margin :0 2em 2em;\r\n  /*border: solid 1px #dedede;*/\r\n  padding: 1em;\r\n  border-radius: 4px;\r\n}\r\n</style>\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/CourseData.vue?vue&type=style&index=0&id=3bb2619c&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/CourseData.vue?vue&type=style&index=0&id=3bb2619c&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.course-data > ul[data-v-3bb2619c]{\r\n  list-style:none;\r\n  padding:0;\n}\r\n\r\n", "",{"version":3,"sources":["webpack://./src/popup/components/CourseData.vue"],"names":[],"mappings":";AAgFA;EACE,eAAe;EACf,SAAS;AACX","sourcesContent":["<template>\r\n    <div class=\"course-data\">\r\n      <ul>\r\n        <li>\r\n          <div class=\"data-title\">COURSE</div>\r\n          <div class=\"data-content\">\r\n\r\n            <highlightjs\r\n                language=\"json\"\r\n                :code=\"JSON.stringify(course,null,2)\"\r\n            />\r\n          </div>\r\n        </li>\r\n\r\n      </ul>\r\n    </div>\r\n</template>\r\n\r\n<script lang=\"ts\">\r\nimport { defineComponent, ref } from 'vue';\r\n\r\nimport jQuery from 'jquery';\r\nimport Store from '../../libs/store';\r\nexport default defineComponent({\r\n\r\n    setup(props) {\r\n        const courseData = ref({});\r\n        const course = ref({});\r\n        const sections = ref([]);\r\n        const authors = ref([]);\r\n        const tocs = ref([]);\r\n        return {courseData,course,sections,tocs,authors};\r\n    },\r\n    mounted(){\r\n      // this.initCourseData();\r\n    },\r\n    methods:{\r\n      initCourseData(){\r\n        /*\r\n        // moved to src/libs/Store.ts\r\n        const courseTmp = this.$parent.course;\r\n        const sections = this.$parent.sections;\r\n        const authors = this.$parent.authors;\r\n        Store.init();\r\n\r\n        const course = Store.createCourse(courseTmp.title, courseTmp.slug, courseTmp.duration, courseTmp.sourceCodeRepository, courseTmp.description);\r\n        \r\n        \r\n\r\n        this.course = course;\r\n        sections.map((sectionTmp)=>{\r\n          const section = Store.createSection(this.course.ID,sectionTmp.title);\r\n          this.sections.push(section);\r\n          sectionTmp.items.map((tocTmp)=>{\r\n            const toc = Store.createToc(section.ID,tocTmp.title,tocTmp.slug,tocTmp.duration);\r\n            this.tocs.push(toc);\r\n          });\r\n        });\r\n        Store.createAuthorList(course.slug,authors);\r\n        this.updateItemFromLS();\r\n\r\n         */\r\n      },\r\n      updateItemFromLS(){\r\n        console.log('Please update everything from localStorage here..');\r\n      },\r\n      updateItems(exerciseFile,toc){\r\n        this.exerciseFile = Store.createExerciseFile(this.course.ID, exerciseFile.name, exerciseFile.url, exerciseFile.sizeInBytes);\r\n        console.log(exerciseFile,toc);\r\n\r\n        // update toc caption\r\n        Store.updateTocCaption(toc.slug,toc.captionUrl,toc.captionFmt);\r\n        // Update or create streaming location\r\n        Store.createStreamLocationList(toc.slug,toc.streamLocations);\r\n      }\r\n    }\r\n})\r\n</script>\r\n\r\n<style scoped>\r\n.course-data > ul{\r\n  list-style:none;\r\n  padding:0;\r\n}\r\n\r\n</style>"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/FetchQueue.vue?vue&type=style&index=0&id=18a8fe44&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/FetchQueue.vue?vue&type=style&index=0&id=18a8fe44&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.btn-fetch[data-v-18a8fe44]{\r\n    margin-top:-8px;\r\n    padding:0;\r\n    border:none !important;\n}\n.fetch-queue[data-v-18a8fe44]{\r\n    margin-bottom: 1em;\n}\n.btn-fetch-cnt[data-v-18a8fe44]{\r\n    width: 25px;\r\n    position: absolute;\r\n    right: 90px;\r\n    margin-top: -18px;\n}\r\n", "",{"version":3,"sources":["webpack://./src/popup/components/FetchQueue.vue"],"names":[],"mappings":";AA6CA;IACI,eAAe;IACf,SAAS;IACT,sBAAsB;AAC1B;AACA;IACI,kBAAkB;AACtB;AACA;IACI,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,iBAAiB;AACrB","sourcesContent":["<template>\r\n    <div class=\"fetch-queue\">\r\n        <div style=\"width:90%;height:15px\">\r\n            <div class=\"progress\" v-show=\"percentage > 0\">\r\n                <div class=\"progress-bar\" role=\"progressbar\" :style=\"{width:percentage+'%'}\" :aria-valuenow=\"percentage\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"btn-fetch-cnt\">\r\n            <button :disabled=\"btnState!=1&&btnState!=4\" @click=\"startQueue()\" class=\"btn btn-sm btn-fetch\"><i class=\"fa\" :class=\"{'fa-play':btnState==1,'fa-spin fa-spinner':btnState==2,'fa-check':btnState==3,'fa-refresh':btnState==4}\"></i></button>\r\n        </div>\r\n    </div>\r\n</template>\r\n\r\n<script lang=\"ts\">\r\nimport {defineComponent,ref} from 'vue'\r\nexport default defineComponent({\r\n  props:{\r\n\r\n  },\r\n  setup(props){\r\n    let queueSlugs = ref([]);\r\n    let excludeSlugs = ref([]);\r\n    let percentage = ref(0);\r\n    let btnState = ref(1);\r\n    let lastTocIndex = ref(0);\r\n    return {queueSlugs,excludeSlugs,percentage,btnState,lastTocIndex};\r\n  },\r\n  methods:{\r\n    setProgress(lastTocIndex:number,percentage:number){\r\n        this.lastTocIndex = lastTocIndex;\r\n        this.percentage = percentage;\r\n        if(percentage==100){\r\n            this.btnState = 3;\r\n        }\r\n        console.log(percentage)\r\n    },\r\n    startQueue(){\r\n        this.percentage = this.percentage==0?1:this.percentage;\r\n        this.btnState = 2;\r\n        this.$parent.triggerFetchQueue(this.lastTocIndex==0?-1:this.lastTocIndex);\r\n    }\r\n  }\r\n});\r\n</script>\r\n<style scoped>\r\n.btn-fetch{\r\n    margin-top:-8px;\r\n    padding:0;\r\n    border:none !important;\r\n}\r\n.fetch-queue{\r\n    margin-bottom: 1em;\r\n}\r\n.btn-fetch-cnt{\r\n    width: 25px;\r\n    position: absolute;\r\n    right: 90px;\r\n    margin-top: -18px;\r\n}\r\n</style>"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/FetchQueueBar.vue?vue&type=style&index=0&id=905aec42&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/FetchQueueBar.vue?vue&type=style&index=0&id=905aec42&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.fetch-queue-pb[data-v-905aec42]{\r\n    width: 102px;\r\n    height: 24px;\r\n    padding: 4px 0;\r\n    float:right;\r\n    clear:both;\n}\n.btn-fetch[data-v-905aec42]{\r\n    margin-top:-8px;\r\n    padding:0;\r\n    border:none !important;\r\n    font-size: 10px;\n}\n.fetch-queue[data-v-905aec42]{\r\n    margin-bottom: 1em;\n}\n.btn-fetch-cnt[data-v-905aec42]{\r\n   width: 25px;\r\n    position: absolute;\r\n    right: 38px;\r\n    margin-top: 2.5px;\n}\r\n", "",{"version":3,"sources":["webpack://./src/popup/components/FetchQueueBar.vue"],"names":[],"mappings":";AAkDA;IACI,YAAY;IACZ,YAAY;IACZ,cAAc;IACd,WAAW;IACX,UAAU;AACd;AACA;IACI,eAAe;IACf,SAAS;IACT,sBAAsB;IACtB,eAAe;AACnB;AACA;IACI,kBAAkB;AACtB;AACA;GACG,WAAW;IACV,kBAAkB;IAClB,WAAW;IACX,iBAAiB;AACrB","sourcesContent":["<template>\r\n    <div class=\"fetch-queue-bar\">\r\n        <div class=\"fetch-queue-pb\">\r\n            <div class=\"progress\" v-show=\"percentage > 0\">\r\n                <div class=\"progress-bar bg-info\" role=\"progressbar\" :style=\"{width:percentage+'%'}\" :aria-valuenow=\"percentage\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"btn-fetch-cnt\">\r\n            <button :style=\"{color:btnState==3?'white':'inherit'}\" :disabled=\"btnState!=1&&btnState!=4\" @click=\"startQueue()\" class=\"btn btn-sm btn-fetch\"><i class=\"fa\" :class=\"{'fa-play':btnState==1,'fa-spin fa-spinner':btnState==2,'fa-check':btnState==3,'fa-refresh':btnState==4}\"></i></button>\r\n        </div>\r\n    </div>\r\n</template>\r\n\r\n<script lang=\"ts\">\r\nimport {defineComponent,ref} from 'vue'\r\nexport default defineComponent({\r\n  props:{\r\n    sectionIndex:{\r\n        required : true,\r\n        type: Number\r\n    }\r\n  },\r\n  setup(props){\r\n    let queueSlugs = ref([]);\r\n    let excludeSlugs = ref([]);\r\n    let percentage = ref(0);\r\n    let btnState = ref(1);\r\n    let lastTocIndex = ref(0);\r\n    const sectionIndex = ref(props.sectionIndex);\r\n    return {queueSlugs,excludeSlugs,percentage,btnState,lastTocIndex,sectionIndex};\r\n  },\r\n  methods:{\r\n    setProgress(lastTocIndex:number,percentage:number){\r\n        this.lastTocIndex = lastTocIndex;\r\n        this.percentage = percentage;\r\n        if(percentage==100){\r\n            this.btnState = 3;\r\n        }\r\n        this.$parent.fetchSectionQueue.report(this.sectionIndex,lastTocIndex,0);\r\n        console.log(percentage)\r\n    },\r\n    startQueue(){\r\n        this.percentage = this.percentage==0?1:this.percentage;\r\n        this.btnState = 2;\r\n        this.$parent.tocItems[this.sectionIndex].triggerFetchQueue(this.lastTocIndex==0?-1:this.lastTocIndex);\r\n    }\r\n  }\r\n});\r\n</script>\r\n<style scoped>\r\n.fetch-queue-pb{\r\n    width: 102px;\r\n    height: 24px;\r\n    padding: 4px 0;\r\n    float:right;\r\n    clear:both;\r\n}\r\n.btn-fetch{\r\n    margin-top:-8px;\r\n    padding:0;\r\n    border:none !important;\r\n    font-size: 10px;\r\n}\r\n.fetch-queue{\r\n    margin-bottom: 1em;\r\n}\r\n.btn-fetch-cnt{\r\n   width: 25px;\r\n    position: absolute;\r\n    right: 38px;\r\n    margin-top: 2.5px;\r\n}\r\n</style>"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/FetchSectionQueue.vue?vue&type=style&index=0&id=6afda649&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/FetchSectionQueue.vue?vue&type=style&index=0&id=6afda649&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.data-codes[data-v-6afda649]{\r\n    background: yellow;\n}\n.fetch-section-queue-pb[data-v-6afda649]{\r\n    width: 102px;\r\n    height: 24px;\r\n    padding: 4px 0;\r\n    float:right;\r\n    clear:both;\n}\n.btn-fetch-section-queue[data-v-6afda649]{\r\n    margin-top:-8px;\r\n    padding:0;\r\n    border:none !important;\r\n    font-size: 10px;\n}\n.fetch-section-queue[data-v-6afda649]{\r\n    position: absolute;\r\n    right: 49px;\r\n    margin-top: 12px;\n}\n.btn-fetch-section-queue-cnt[data-v-6afda649]{\r\n   width: 25px;\r\n    position: absolute;\r\n    right: -12px;\r\n    margin-top: 2.5px;\n}\r\n", "",{"version":3,"sources":["webpack://./src/popup/components/FetchSectionQueue.vue"],"names":[],"mappings":";AAkFA;IACI,kBAAkB;AACtB;AACA;IACI,YAAY;IACZ,YAAY;IACZ,cAAc;IACd,WAAW;IACX,UAAU;AACd;AACA;IACI,eAAe;IACf,SAAS;IACT,sBAAsB;IACtB,eAAe;AACnB;AACA;IACI,kBAAkB;IAClB,WAAW;IACX,gBAAgB;AACpB;AACA;GACG,WAAW;IACV,kBAAkB;IAClB,YAAY;IACZ,iBAAiB;AACrB","sourcesContent":["<template>\r\n    <div class=\"fetch-section-queue\">\r\n        <div class=\"fsqbc\">\r\n            <div class=\"fetch-section-queue-bar\">\r\n                <div class=\"fetch-section-queue-pb\">\r\n                    <div class=\"progress\" v-show=\"percentage > 0\">\r\n                        <div class=\"progress-bar bg-success\" role=\"progressbar\" :style=\"{width:percentage+'%'}\" :aria-valuenow=\"percentage\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"btn-fetch-section-queue-cnt\">\r\n                    <button :style=\"{color:btnState==3?'white':'inherit'}\" :disabled=\"btnState!=1&&btnState!=4\" @click=\"startQueue()\" class=\"btn btn-sm btn-fetch-section-queue\"><i class=\"fa\" :class=\"{'fa-play':btnState==1,'fa-spin fa-spinner':btnState==2,'fa-check':btnState==3,'fa-refresh':btnState==4}\"></i></button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n       <code v-if=\"showData\" class=\"data-codes\">{{toJSONStr(queueSlugs)}}</code>\r\n    </div>\r\n</template>\r\n\r\n<script lang=\"ts\">\r\nimport { defineComponent, ref } from 'vue';\r\n\r\nexport default defineComponent({\r\n\r\n    setup() {\r\n        const queueSlugs = ref([]);\r\n        const showData = ref(false);\r\n        const btnState = ref(1);\r\n        const percentage = ref(0);\r\n        const lastSectionIndex = ref(0);\r\n        const sectionIndexQueues = ref([]);\r\n        return {queueSlugs,showData,btnState,percentage,lastSectionIndex,sectionIndexQueues};\r\n    },\r\n    mounted(){\r\n        setTimeout(()=> {\r\n            this.sectionIndexQueues =  Object.keys(this.$parent.sections);\r\n        },250)\r\n    },\r\n    methods:{\r\n        toJSONStr(obj:any){\r\n            return JSON.stringify(obj);\r\n        },\r\n        calculatePercentageQueue(callback:Function){\r\n            const peak = this.queueSlugs.length;\r\n            const maxPeak = this.$parent.getTotalTocs();\r\n            const percentage = Math.round(peak / maxPeak * 100);\r\n\r\n            if('function' == typeof callback){\r\n                callback(percentage,peak,maxPeak);\r\n            }\r\n        },\r\n        report(sectionIndex:number,tocIndex:number,status:number){\r\n            const section = this.$parent.sections[sectionIndex];\r\n            const slug = section.items[tocIndex].slug;\r\n            if(!this.queueSlugs.includes(slug)){\r\n                this.queueSlugs.push(slug);\r\n            }\r\n            const remainingText = `${this.queueSlugs.length} of ${this.$parent.getTotalTocs()}`\r\n            this.$parent.logBar.log(`${section.title} : ${slug} ${remainingText}`,status);\r\n\r\n            this.calculatePercentageQueue((percentage)=>this.percentage=percentage);\r\n\r\n            if(this.$parent.fetchQueueBar[sectionIndex].percentage==100){\r\n                this.processQueue();\r\n            }\r\n        },\r\n        processQueue(){\r\n            if(this.sectionIndexQueues.length > 0){\r\n                this.lastSectionIndex = this.sectionIndexQueues.shift();\r\n                this.$parent.fetchQueueBar[this.lastSectionIndex].startQueue();\r\n            }else{\r\n                this.btnState = 3;\r\n            }\r\n        },\r\n        startQueue(){\r\n            this.btnState = 2;\r\n            this.processQueue();\r\n        }\r\n    }\r\n})\r\n</script>\r\n\r\n<style scoped>\r\n.data-codes{\r\n    background: yellow;\r\n}    \r\n.fetch-section-queue-pb{\r\n    width: 102px;\r\n    height: 24px;\r\n    padding: 4px 0;\r\n    float:right;\r\n    clear:both;\r\n}\r\n.btn-fetch-section-queue{\r\n    margin-top:-8px;\r\n    padding:0;\r\n    border:none !important;\r\n    font-size: 10px;\r\n}\r\n.fetch-section-queue{\r\n    position: absolute;\r\n    right: 49px;\r\n    margin-top: 12px;\r\n}\r\n.btn-fetch-section-queue-cnt{\r\n   width: 25px;\r\n    position: absolute;\r\n    right: -12px;\r\n    margin-top: 2.5px;\r\n}\r\n</style>"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/LogBar.vue?vue&type=style&index=0&id=5c8a287c&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/LogBar.vue?vue&type=style&index=0&id=5c8a287c&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.log-message[data-v-5c8a287c]{\r\n    font-family: monospace;\r\n    padding: .25em .5em;\r\n    border-radius: 5px;\r\n    text-align: center;\r\n    font-size: 10px;\n}\n.log-message.error[data-v-5c8a287c]{\r\n    color:#fff;\r\n    background: red;\n}\n.log-message.success[data-v-5c8a287c]{\r\n    color:#fff;\r\n    background: green;\n}\n.log-message.warning[data-v-5c8a287c]{\r\n    color:maroon;\r\n    background: yellow;\n}\r\n", "",{"version":3,"sources":["webpack://./src/popup/components/LogBar.vue"],"names":[],"mappings":";AA6BA;IACI,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;AACnB;AACA;IACI,UAAU;IACV,eAAe;AACnB;AACA;IACI,UAAU;IACV,iBAAiB;AACrB;AACA;IACI,YAAY;IACZ,kBAAkB;AACtB","sourcesContent":["<template>\r\n    <div class=\"log-bar\">\r\n        <div class=\"log-message\" :class=\"{error:mode==1,success:mode==0,warning:mode==2}\">\r\n            <span>{{message}}</span>\r\n        </div>\r\n    </div>\r\n</template>\r\n\r\n<script lang=\"ts\">\r\nimport {defineComponent,ref} from 'vue';\r\n\r\nexport default defineComponent({\r\n    setup(){\r\n        const mode = ref(-1);\r\n        const message = ref('');\r\n\r\n        return {mode,message};\r\n    },\r\n    \r\n    methods:{\r\n        log(message:string,mode:number){\r\n            this.message = message;\r\n            this.mode = mode;\r\n        }\r\n    }\r\n})\r\n</script>\r\n\r\n<style scoped>\r\n.log-message{\r\n    font-family: monospace;\r\n    padding: .25em .5em;\r\n    border-radius: 5px;\r\n    text-align: center;\r\n    font-size: 10px;\r\n}    \r\n.log-message.error{\r\n    color:#fff;\r\n    background: red;\r\n}\r\n.log-message.success{\r\n    color:#fff;\r\n    background: green;\r\n}\r\n.log-message.warning{\r\n    color:maroon;\r\n    background: yellow;\r\n}\r\n</style>"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/TocItem.vue?vue&type=style&index=0&id=3c3574fe&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/TocItem.vue?vue&type=style&index=0&id=3c3574fe&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\ntd.fcc[data-v-3c3574fe]{\r\n    text-align: right;\r\n    width:2.5em;\n}\nul.toc-item-list[data-v-3c3574fe]{\r\n  list-style-type:none;\r\n  margin:0;\r\n  padding:0;\n}\ntable.toc-item-list[data-v-3c3574fe]{\r\n    width: 100%;\n}\n.toc-item-view[data-v-3c3574fe]{\r\n    padding: 0 2em;\r\n    font-size: 80%;\r\n    padding-bottom: 1em;\r\n    padding-right: 0;\n}\r\n\r\n\r\n", "",{"version":3,"sources":["webpack://./src/popup/components/TocItem.vue"],"names":[],"mappings":";AAqJA;IACI,iBAAiB;IACjB,WAAW;AACf;AACA;EACE,oBAAoB;EACpB,QAAQ;EACR,SAAS;AACX;AACA;IACI,WAAW;AACf;AACA;IACI,cAAc;IACd,cAAc;IACd,mBAAmB;IACnB,gBAAgB;AACpB","sourcesContent":["<template>\r\n  <div class=\"toc-item-view\">\r\n    <FetchQueue v-show=\"false\" ref=\"fetchQueue\"/>\r\n    <table class=\"toc-item-list\">\r\n        <thead>\r\n            <tr>\r\n                <th colspan=\"2\"><label><input @click=\"onCheckAll()\" v-model=\"checkAll\" class=\"form-check-input\" type=\"checkbox\"/> <span style=\"padding-left:.5em\">Check All</span></label></th>\r\n               \r\n                <th></th>\r\n                <th class=\"text-center\" style=\"width:80px\"></th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr v-for=\"(toc,tocIndex) in items\" class=\"toc-item\" :class=\"{ods:tocIndex%2==0}\" :key=\"tocIndex\">\r\n            <td class=\"fcc\">\r\n                <input @click=\"tgQueue(tocIndex)\" class=\"form-check-input\" type=\"checkbox\" v-model=\"checkedQueues[tocIndex]\"/> \r\n            </td>\r\n            <td style=\"padding-left:.5em\">{{toc.title}}</td>\r\n            <td colspan=\"2\" style=\"text-align: right;\"><FetchButton @update=\"onFetchUpdate($event)\" :sectionIndex=\"sectionIndex\" :tocIndex=\"tocIndex\" :toc=\"toc\" checkedQueues=\"checkedQueues\" ref=\"fetchBtns\"/></td>\r\n        </tr>\r\n        </tbody>\r\n    </table>\r\n  </div>\r\n</template>\r\n<script lang=\"ts\">\r\nimport { defineComponent, ref, PropType } from 'vue';\r\nimport FetchButton from '../components/FetchButton.vue';\r\nimport FetchQueue from '../components/FetchQueue.vue';\r\nimport Toc from '../../types/toc';\r\n\r\nexport default defineComponent({\r\n    components:{\r\n        FetchButton,FetchQueue\r\n    },\r\n    props:{\r\n        items: {\r\n            required : true,\r\n            type : Array as PropType<Toc[]>\r\n        },\r\n        sectionIndex : {\r\n            requied : true,\r\n            type : Number\r\n        }\r\n    },\r\n    setup(props) {\r\n        const items = ref(props.items as Toc[]);\r\n        const sectionIndex = ref(props.sectionIndex as number);\r\n        const checkAll = ref(false);\r\n        const checkedQueues = ref([]);\r\n        const excludeQueues = ref([]);\r\n        let fetchBtns = ref([]);\r\n        let fetchQueue= ref();\r\n        return {items, sectionIndex, checkedQueues, excludeQueues,fetchBtns,checkAll,fetchQueue};\r\n    },\r\n    mounted(){\r\n        setTimeout(()=>{\r\n            this.checkAll = true;\r\n            for(let tocIndex in this.items){\r\n                this.checkedQueues[tocIndex] = true;\r\n            }\r\n        },250);\r\n    },\r\n    methods:{\r\n        triggerFailedFetchQueue(tocIndex:number){\r\n            setTimeout(()=>{\r\n                this.fetchQueue.btnState=4;\r\n            },1000);\r\n            \r\n        },\r\n        calculatePercentageQueue(callback){\r\n            const peak = this.excludeQueues.length;\r\n            const maxPeak = this.items.length;\r\n            const percentage = Math.round(peak / maxPeak * 100);\r\n\r\n            if('function' == typeof callback){\r\n                callback(percentage,peak,maxPeak);\r\n            }\r\n        },\r\n        triggerExcludeFetchQueue(tocIndex:number, fetchQueueEnabled:boolean){\r\n            console.log(tocIndex);\r\n            if(this.excludeQueues.indexOf(tocIndex) == -1){\r\n                this.excludeQueues.push(tocIndex);\r\n            }\r\n            if(fetchQueueEnabled){\r\n                this.calculatePercentageQueue((percentage)=>{\r\n                    setTimeout(()=>{\r\n                        this.fetchQueue.setProgress(tocIndex,percentage);\r\n                        this.$parent.fetchQueueBar[this.sectionIndex].setProgress(tocIndex,percentage);\r\n                    },500);\r\n                });\r\n            }\r\n            \r\n            this.checkedQueues[tocIndex] = false;\r\n            this.checkAll = false;\r\n       \r\n        },\r\n        triggerFetchQueue(tocIndex:number){\r\n            console.log(tocIndex);\r\n            const nextTocIndex = tocIndex + 1;\r\n            if(nextTocIndex < this.checkedQueues.length){\r\n                // process next fetch button\r\n                \r\n                this.fetchBtns[nextTocIndex].fetchToc(true);\r\n                // console.log();\r\n            }else{\r\n                this.calculatePercentageQueue((percentage)=>{\r\n                    setTimeout(()=>{\r\n                        this.fetchQueue.setProgress(tocIndex,percentage);\r\n                        this.$parent.fetchQueueBar[this.sectionIndex].setProgress(tocIndex,percentage);\r\n                    },500);\r\n                });\r\n                setTimeout(()=>{\r\n                    this.fetchQueue.btnState=this.fetchQueue.percentage==100?3:1;\r\n                    this.fetchQueue.lastTocIndex=0;\r\n\r\n                    this.$parent.fetchQueueBar[this.sectionIndex].btnState=this.$parent.fetchQueueBar[this.sectionIndex].percentage==100?3:1;\r\n                    this.$parent.fetchQueueBar[this.sectionIndex].lastTocIndex=0;\r\n                },1000);\r\n            }\r\n            // calling fetch button next index\r\n            // this.$ref\r\n\r\n        },\r\n        onFetchUpdate(target:any){\r\n            // console.log(target)\r\n            this.$emit('update',target);\r\n        },\r\n        onCheckAll(){\r\n            setTimeout(()=>{\r\n                console.log(this.checkAll);\r\n                for(let tocIndex in this.items){\r\n                    this.checkedQueues[tocIndex] = this.checkAll;\r\n                }\r\n            },250);\r\n            \r\n        },\r\n        tgQueue(tocIndex:number){\r\n            setTimeout(()=>{\r\n                // this.$refs.fetchBtns[tocIndex].isQueued =this.checkedQueues[tocIndex];\r\n                // console.log(this.$refs.fetchBtns);\r\n                console.log(this.checkedQueues[tocIndex]);\r\n            },250);\r\n        }\r\n        \r\n    }\r\n})\r\n</script>\r\n\r\n<style scoped>\r\ntd.fcc{\r\n    text-align: right;\r\n    width:2.5em;\r\n}\r\nul.toc-item-list{\r\n  list-style-type:none;\r\n  margin:0;\r\n  padding:0;\r\n}\r\ntable.toc-item-list{\r\n    width: 100%;\r\n}\r\n.toc-item-view{\r\n    padding: 0 2em;\r\n    font-size: 80%;\r\n    padding-bottom: 1em;\r\n    padding-right: 0;\r\n}\r\n\r\n\r\n</style>"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/CoursePage.vue?vue&type=style&index=0&id=6c17fec7&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/CoursePage.vue?vue&type=style&index=0&id=6c17fec7&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.course[data-v-6c17fec7]{\r\n  margin-bottom:1em;\n}\n.course-section[data-v-6c17fec7]{\r\n  padding:.5em 0;\n}\n.accordion-button[data-v-6c17fec7]:focus {\r\n    z-index: 3;\r\n    border-color: transparent;\r\n    outline: 0;\r\n    box-shadow: none;\n}\n.accordion-button[data-v-6c17fec7]:not(.collapsed) {\r\n    color: inherit; \r\n    background-color: transparent;\r\n    box-shadow: none;\n}\n.accordion-button[data-v-6c17fec7]:not(.collapsed),\r\n.accordion-button.collapsed[data-v-6c17fec7],\r\n.accordion-button[data-v-6c17fec7]:not(.collapsed)::after,\r\n.accordion-button.collapsed[data-v-6c17fec7]::after{\r\n  background:none;\n}\n.accordion-button.custom[data-v-6c17fec7] {\r\nposition: absolute;\r\n    width: 24px;\r\n    padding: 0px 6px;\r\n    left: 51px;\r\n    margin-top: 3px;\r\n    background: none;\r\n    font-size: 10px;\n}\n.accordion-body[data-v-6c17fec7]{\r\n  padding:0;\n}\r\n", "",{"version":3,"sources":["webpack://./src/popup/views/CoursePage.vue"],"names":[],"mappings":";AA8HA;EACE,iBAAiB;AACnB;AACA;EACE,cAAc;AAChB;AACA;IACI,UAAU;IACV,yBAAyB;IACzB,UAAU;IACV,gBAAgB;AACpB;AACA;IACI,cAAc;IACd,6BAA6B;IAC7B,gBAAgB;AACpB;AACA;;;;EAIE,eAAe;AACjB;AACA;AACA,kBAAkB;IACd,WAAW;IACX,gBAAgB;IAChB,UAAU;IACV,eAAe;IACf,gBAAgB;IAChB,eAAe;AAClB;AACA;EACC,SAAS;AACV","sourcesContent":["<template>\r\n  <div class=\"course-page page\">\r\n    <div class=\"fsqc\">\r\n      <FetchSectionQueue ref=\"fetchSectionQueue\"/>\r\n    </div>\r\n    <div class=\"course\">\r\n      <h2><i class=\"fa fa-bookmark\"></i> {{course.title}} by <span v-for=\"author in authors\">{{makeTitle(author.slug)}}</span></h2>\r\n    </div>\r\n    <div class=\"accordion accordion-flush\" id=\"accordionCourse\">\r\n    <div v-for=\"(section,sectionIndex ) in sections\" :key=\"sectionIndex\" class=\"accordion-item\">\r\n      <div class=\"accordion-header\" :id=\"'heading'+sectionIndex\">\r\n        <div class=\"row course-section\">\r\n        <button class=\"btn btn-default accordion-button custom btn-collapse\" data-bs-toggle=\"collapse\" :data-bs-target=\"'#collapse'+sectionIndex\" aria-expanded=\"false\" :aria-controls=\"'collapse'+sectionIndex\"><i class=\"fa fa-plus\"></i></button>\r\n\r\n          <div class=\"col-md-8\" style=\"padding-left:2.5em\">{{section.title}}</div>\r\n          <div class=\"col-md-4\"><FetchQueueBar ref=\"fetchQueueBar\" :sectionIndex=\"sectionIndex\"/></div>\r\n        </div>\r\n      </div>\r\n      <div :id=\"'collapse'+sectionIndex\" class=\"accordion-collapse collapse\" :aria-labelledby=\"'heading'+sectionIndex\" data-bs-parent=\"#accordionCourse\">\r\n        <div class=\"accordion-body\">\r\n          <TocItem :items=\"section.items\" :sectionIndex=\"sectionIndex\" @update=\"onTocUpdate($event)\" ref=\"tocItems\"/>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    </div>\r\n    <div class=\"lbc\">\r\n      <LogBar ref=\"logBar\"/>\r\n    </div>\r\n  </div>\r\n</template>\r\n<script lang=\"ts\">\r\nimport { defineComponent,ref,PropType } from 'vue';\r\nimport Course from '../../types/course';\r\nimport Toc from '../../types/toc';\r\nimport Section from '../../types/section';\r\nimport Author from '../../types/author';\r\nimport ExerciseFile from '../../types/ExerciseFile';\r\nimport TocItem from '../components/TocItem.vue';\r\nimport FetchQueueBar from '../components/FetchQueueBar.vue';\r\nimport FetchSectionQueue from '../components/FetchSectionQueue.vue';\r\nimport LogBar from '../components/LogBar.vue';\r\nimport CourseData from '../components/CourseData.vue';\r\nimport {makeTitle} from '../../libs/utils';\r\nimport $ from 'jquery';\r\nimport Store from \"../../libs/store\";\r\n\r\nexport default defineComponent({\r\n  components:{\r\n    TocItem,FetchQueueBar,FetchSectionQueue,LogBar,CourseData\r\n  },\r\n  props:{\r\n    course : {\r\n      required : true,\r\n      type : Object as PropType<Course>\r\n    }\r\n  },\r\n  setup(props) {\r\n    const course = ref(props.course);\r\n    const authors = ref([] as Author[]);\r\n    const sections = ref([] as Section[]);\r\n    const exerciseFile = ref({} as ExerciseFile);\r\n    const tocItems = ref([]);\r\n    const fetchQueueBar = ref([]);\r\n    const fetchSectionQueue=ref({});\r\n    const logBar=ref({});\r\n    const courseData=ref({});\r\n    return {course,authors,sections,exerciseFile,tocItems,\r\n    fetchQueueBar,fetchSectionQueue,logBar,courseData};\r\n  },\r\n  mounted(){\r\n    $('.btn-collapse').click(function() {\r\n        $(this).find('i').toggleClass('fa fa-plus fa fa-minus');\r\n        $('.btn-collapse').not(this).find('i').removeClass('fa-minus').addClass('fa-plus ');\r\n    });\r\n    try{\r\n      this.loadCourseData();\r\n    }catch(e){}\r\n  },\r\n  methods:{\r\n    loadCourseData(){\r\n      const courseSlug = this.course.slug;\r\n      this.course = Store.getCourse(courseSlug)[0];\r\n      const sections = Store.getSectionByCourseId(this.course.ID);\r\n      sections.map((sectionTmp)=>{\r\n        const sectionId = sectionTmp.ID;\r\n        let section = sectionTmp ;\r\n        section.items = Store.getTocBySectionId(section.ID) ;\r\n        this.sections.push(section);\r\n      });\r\n      console.log(this.course);\r\n      this.course.authorIds.map((ID)=>{\r\n        this.authors.push(Store.getAuthorById(ID)[0]);\r\n      })\r\n      // this.authors =\r\n    },\r\n    updateTocItems(exerciseFile,toc){\r\n      this.exerciseFile = Store.createExerciseFile(this.course.ID, exerciseFile.name, exerciseFile.url, exerciseFile.sizeInBytes);\r\n      console.log(exerciseFile,toc);\r\n\r\n      // update toc caption\r\n      Store.updateTocCaption(toc.slug,toc.captionUrl,toc.captionFmt);\r\n      // Update or create streaming location\r\n      Store.createStreamLocationList(toc.slug,toc.streamLocations);\r\n    },\r\n    onTocUpdate(evt:any){\r\n      if(evt.src === 'Popup.CoursePage.TocItem.FetchButton'){\r\n        this.updateTocItems(evt.exerciseFile, evt.toc);\r\n      }\r\n\r\n      this.$emit('update',evt);\r\n    },\r\n    makeTitle(slug : string) {\r\n        return makeTitle(slug);\r\n    },\r\n    getTotalTocs(){\r\n        let totalTocs =0;\r\n        this.sections.map((s)=>{\r\n          totalTocs += s.items.length;\r\n        });\r\n        return totalTocs;\r\n    }\r\n  }\r\n})\r\n</script>\r\n\r\n<style scoped>\r\n.course{\r\n  margin-bottom:1em;\r\n}\r\n.course-section{\r\n  padding:.5em 0;\r\n}\r\n.accordion-button:focus {\r\n    z-index: 3;\r\n    border-color: transparent;\r\n    outline: 0;\r\n    box-shadow: none;\r\n}\r\n.accordion-button:not(.collapsed) {\r\n    color: inherit; \r\n    background-color: transparent;\r\n    box-shadow: none; \r\n}\r\n.accordion-button:not(.collapsed),\r\n.accordion-button.collapsed,\r\n.accordion-button:not(.collapsed)::after,\r\n.accordion-button.collapsed::after{\r\n  background:none;\r\n}\r\n.accordion-button.custom {\r\nposition: absolute;\r\n    width: 24px;\r\n    padding: 0px 6px;\r\n    left: 51px;\r\n    margin-top: 3px;\r\n    background: none;\r\n    font-size: 10px;\r\n }\r\n .accordion-body{\r\n  padding:0;\r\n }\r\n</style>"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/WelcomePage.vue?vue&type=style&index=0&id=62aa4038&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/WelcomePage.vue?vue&type=style&index=0&id=62aa4038&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.action-cnt[data-v-62aa4038]{\r\n  text-align:center;\r\n  padding:.5em;\n}\n.btn-cnt[data-v-62aa4038]{\r\n  margin:1em;\n}\r\n", "",{"version":3,"sources":["webpack://./src/popup/views/WelcomePage.vue"],"names":[],"mappings":";AA0DA;EACE,iBAAiB;EACjB,YAAY;AACd;AACA;EACE,UAAU;AACZ","sourcesContent":["<template>\r\n  <div class=\"welcome-page page\">\r\n    <p>{{greeting}}</p>\r\n    <div class=\"action-cnt\">\r\n      <div class=\"dropdown\" v-if=\"lastCourseList.length>0\">\r\n        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"recentCourseButton\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n          <i class=\"fa fa-history\"></i> Load Recent Course\r\n        </button>\r\n        <ul class=\"dropdown-menu\" aria-labelledby=\"recentCourseButton\">\r\n          <li v-for=\"course in lastCourseList\"><a class=\"dropdown-item\" href=\"javascript:;\" @click=\"fetchCourseLS(course)\">{{ course.title }}</a></li>\r\n        </ul>\r\n      </div>\r\n\r\n      <div class=\"btn-cnt\">\r\n        <button class=\"btn btn-primary\"><i class=\"fa fa-hand-o-right\"></i> Fetch This Course</button>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</template>\r\n<script lang=\"ts\">\r\nimport { defineComponent,ref } from 'vue';\r\nimport Store from '../../libs/store';\r\n\r\nexport default defineComponent({\r\n  setup() {\r\n    const nav = ref('welcome');\r\n    const greeting = ref('Welcome to LLFetcher, what do you want to do ?');\r\n    const lastCourseList = ref([\r\n\r\n    ]);\r\n    return {\r\n      nav,greeting,lastCourseList\r\n    }\r\n  },\r\n  mounted(){\r\n    setTimeout(()=>{\r\n      const appInfo = Store.getAppInfo();\r\n      \r\n      const lastCourses = Store.getLastCourses();\r\n      if(lastCourses.length > 0){\r\n        this.lastCourseList = [];\r\n        lastCourses.map((course)=>{\r\n            this.lastCourseList.push(course);\r\n        });\r\n      }\r\n    },1000);\r\n\r\n  },\r\n  methods:{\r\n    fetchCourseLS(course){\r\n      console.log(course);\r\n    }\r\n  }\r\n})\r\n</script>\r\n\r\n<style scoped>\r\n.action-cnt{\r\n  text-align:center;\r\n  padding:.5em;\r\n}\r\n.btn-cnt{\r\n  margin:1em;\r\n}\r\n</style>"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/popup.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/popup.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/Popup.vue?vue&type=style&index=0&id=5f4bbcc0&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/Popup.vue?vue&type=style&index=0&id=5f4bbcc0&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_Popup_vue_vue_type_style_index_0_id_5f4bbcc0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./Popup.vue?vue&type=style&index=0&id=5f4bbcc0&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/Popup.vue?vue&type=style&index=0&id=5f4bbcc0&scoped=true&lang=css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_Popup_vue_vue_type_style_index_0_id_5f4bbcc0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_Popup_vue_vue_type_style_index_0_id_5f4bbcc0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_Popup_vue_vue_type_style_index_0_id_5f4bbcc0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_Popup_vue_vue_type_style_index_0_id_5f4bbcc0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_Popup_vue_vue_type_style_index_0_id_5f4bbcc0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./Popup.vue?vue&type=style&index=0&id=5f4bbcc0&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/Popup.vue?vue&type=style&index=0&id=5f4bbcc0&scoped=true&lang=css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_Popup_vue_vue_type_style_index_0_id_5f4bbcc0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./Popup.vue?vue&type=style&index=0&id=5f4bbcc0&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/Popup.vue?vue&type=style&index=0&id=5f4bbcc0&scoped=true&lang=css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_Popup_vue_vue_type_style_index_0_id_5f4bbcc0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_Popup_vue_vue_type_style_index_0_id_5f4bbcc0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_Popup_vue_vue_type_style_index_0_id_5f4bbcc0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_Popup_vue_vue_type_style_index_0_id_5f4bbcc0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_Popup_vue_vue_type_style_index_0_id_5f4bbcc0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_Popup_vue_vue_type_style_index_0_id_5f4bbcc0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_Popup_vue_vue_type_style_index_0_id_5f4bbcc0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_Popup_vue_vue_type_style_index_0_id_5f4bbcc0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/CourseData.vue?vue&type=style&index=0&id=3bb2619c&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/CourseData.vue?vue&type=style&index=0&id=3bb2619c&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_CourseData_vue_vue_type_style_index_0_id_3bb2619c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./CourseData.vue?vue&type=style&index=0&id=3bb2619c&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/CourseData.vue?vue&type=style&index=0&id=3bb2619c&scoped=true&lang=css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_CourseData_vue_vue_type_style_index_0_id_3bb2619c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_CourseData_vue_vue_type_style_index_0_id_3bb2619c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_CourseData_vue_vue_type_style_index_0_id_3bb2619c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_CourseData_vue_vue_type_style_index_0_id_3bb2619c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_CourseData_vue_vue_type_style_index_0_id_3bb2619c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./CourseData.vue?vue&type=style&index=0&id=3bb2619c&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/CourseData.vue?vue&type=style&index=0&id=3bb2619c&scoped=true&lang=css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_CourseData_vue_vue_type_style_index_0_id_3bb2619c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./CourseData.vue?vue&type=style&index=0&id=3bb2619c&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/CourseData.vue?vue&type=style&index=0&id=3bb2619c&scoped=true&lang=css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_CourseData_vue_vue_type_style_index_0_id_3bb2619c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_CourseData_vue_vue_type_style_index_0_id_3bb2619c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_CourseData_vue_vue_type_style_index_0_id_3bb2619c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_CourseData_vue_vue_type_style_index_0_id_3bb2619c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_CourseData_vue_vue_type_style_index_0_id_3bb2619c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_CourseData_vue_vue_type_style_index_0_id_3bb2619c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_CourseData_vue_vue_type_style_index_0_id_3bb2619c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_CourseData_vue_vue_type_style_index_0_id_3bb2619c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/FetchQueue.vue?vue&type=style&index=0&id=18a8fe44&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/FetchQueue.vue?vue&type=style&index=0&id=18a8fe44&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchQueue_vue_vue_type_style_index_0_id_18a8fe44_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./FetchQueue.vue?vue&type=style&index=0&id=18a8fe44&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/FetchQueue.vue?vue&type=style&index=0&id=18a8fe44&scoped=true&lang=css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchQueue_vue_vue_type_style_index_0_id_18a8fe44_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchQueue_vue_vue_type_style_index_0_id_18a8fe44_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchQueue_vue_vue_type_style_index_0_id_18a8fe44_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchQueue_vue_vue_type_style_index_0_id_18a8fe44_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchQueue_vue_vue_type_style_index_0_id_18a8fe44_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./FetchQueue.vue?vue&type=style&index=0&id=18a8fe44&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/FetchQueue.vue?vue&type=style&index=0&id=18a8fe44&scoped=true&lang=css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchQueue_vue_vue_type_style_index_0_id_18a8fe44_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./FetchQueue.vue?vue&type=style&index=0&id=18a8fe44&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/FetchQueue.vue?vue&type=style&index=0&id=18a8fe44&scoped=true&lang=css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchQueue_vue_vue_type_style_index_0_id_18a8fe44_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchQueue_vue_vue_type_style_index_0_id_18a8fe44_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchQueue_vue_vue_type_style_index_0_id_18a8fe44_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchQueue_vue_vue_type_style_index_0_id_18a8fe44_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchQueue_vue_vue_type_style_index_0_id_18a8fe44_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchQueue_vue_vue_type_style_index_0_id_18a8fe44_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchQueue_vue_vue_type_style_index_0_id_18a8fe44_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchQueue_vue_vue_type_style_index_0_id_18a8fe44_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/FetchQueueBar.vue?vue&type=style&index=0&id=905aec42&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/FetchQueueBar.vue?vue&type=style&index=0&id=905aec42&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchQueueBar_vue_vue_type_style_index_0_id_905aec42_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./FetchQueueBar.vue?vue&type=style&index=0&id=905aec42&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/FetchQueueBar.vue?vue&type=style&index=0&id=905aec42&scoped=true&lang=css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchQueueBar_vue_vue_type_style_index_0_id_905aec42_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchQueueBar_vue_vue_type_style_index_0_id_905aec42_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchQueueBar_vue_vue_type_style_index_0_id_905aec42_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchQueueBar_vue_vue_type_style_index_0_id_905aec42_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchQueueBar_vue_vue_type_style_index_0_id_905aec42_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./FetchQueueBar.vue?vue&type=style&index=0&id=905aec42&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/FetchQueueBar.vue?vue&type=style&index=0&id=905aec42&scoped=true&lang=css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchQueueBar_vue_vue_type_style_index_0_id_905aec42_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./FetchQueueBar.vue?vue&type=style&index=0&id=905aec42&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/FetchQueueBar.vue?vue&type=style&index=0&id=905aec42&scoped=true&lang=css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchQueueBar_vue_vue_type_style_index_0_id_905aec42_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchQueueBar_vue_vue_type_style_index_0_id_905aec42_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchQueueBar_vue_vue_type_style_index_0_id_905aec42_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchQueueBar_vue_vue_type_style_index_0_id_905aec42_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchQueueBar_vue_vue_type_style_index_0_id_905aec42_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchQueueBar_vue_vue_type_style_index_0_id_905aec42_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchQueueBar_vue_vue_type_style_index_0_id_905aec42_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchQueueBar_vue_vue_type_style_index_0_id_905aec42_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/FetchSectionQueue.vue?vue&type=style&index=0&id=6afda649&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/FetchSectionQueue.vue?vue&type=style&index=0&id=6afda649&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchSectionQueue_vue_vue_type_style_index_0_id_6afda649_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./FetchSectionQueue.vue?vue&type=style&index=0&id=6afda649&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/FetchSectionQueue.vue?vue&type=style&index=0&id=6afda649&scoped=true&lang=css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchSectionQueue_vue_vue_type_style_index_0_id_6afda649_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchSectionQueue_vue_vue_type_style_index_0_id_6afda649_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchSectionQueue_vue_vue_type_style_index_0_id_6afda649_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchSectionQueue_vue_vue_type_style_index_0_id_6afda649_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchSectionQueue_vue_vue_type_style_index_0_id_6afda649_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./FetchSectionQueue.vue?vue&type=style&index=0&id=6afda649&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/FetchSectionQueue.vue?vue&type=style&index=0&id=6afda649&scoped=true&lang=css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchSectionQueue_vue_vue_type_style_index_0_id_6afda649_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./FetchSectionQueue.vue?vue&type=style&index=0&id=6afda649&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/FetchSectionQueue.vue?vue&type=style&index=0&id=6afda649&scoped=true&lang=css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchSectionQueue_vue_vue_type_style_index_0_id_6afda649_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchSectionQueue_vue_vue_type_style_index_0_id_6afda649_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchSectionQueue_vue_vue_type_style_index_0_id_6afda649_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchSectionQueue_vue_vue_type_style_index_0_id_6afda649_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchSectionQueue_vue_vue_type_style_index_0_id_6afda649_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchSectionQueue_vue_vue_type_style_index_0_id_6afda649_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchSectionQueue_vue_vue_type_style_index_0_id_6afda649_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchSectionQueue_vue_vue_type_style_index_0_id_6afda649_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/LogBar.vue?vue&type=style&index=0&id=5c8a287c&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/LogBar.vue?vue&type=style&index=0&id=5c8a287c&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_LogBar_vue_vue_type_style_index_0_id_5c8a287c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./LogBar.vue?vue&type=style&index=0&id=5c8a287c&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/LogBar.vue?vue&type=style&index=0&id=5c8a287c&scoped=true&lang=css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_LogBar_vue_vue_type_style_index_0_id_5c8a287c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_LogBar_vue_vue_type_style_index_0_id_5c8a287c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_LogBar_vue_vue_type_style_index_0_id_5c8a287c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_LogBar_vue_vue_type_style_index_0_id_5c8a287c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_LogBar_vue_vue_type_style_index_0_id_5c8a287c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./LogBar.vue?vue&type=style&index=0&id=5c8a287c&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/LogBar.vue?vue&type=style&index=0&id=5c8a287c&scoped=true&lang=css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_LogBar_vue_vue_type_style_index_0_id_5c8a287c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./LogBar.vue?vue&type=style&index=0&id=5c8a287c&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/LogBar.vue?vue&type=style&index=0&id=5c8a287c&scoped=true&lang=css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_LogBar_vue_vue_type_style_index_0_id_5c8a287c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_LogBar_vue_vue_type_style_index_0_id_5c8a287c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_LogBar_vue_vue_type_style_index_0_id_5c8a287c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_LogBar_vue_vue_type_style_index_0_id_5c8a287c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_LogBar_vue_vue_type_style_index_0_id_5c8a287c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_LogBar_vue_vue_type_style_index_0_id_5c8a287c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_LogBar_vue_vue_type_style_index_0_id_5c8a287c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_LogBar_vue_vue_type_style_index_0_id_5c8a287c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/TocItem.vue?vue&type=style&index=0&id=3c3574fe&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/TocItem.vue?vue&type=style&index=0&id=3c3574fe&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_TocItem_vue_vue_type_style_index_0_id_3c3574fe_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./TocItem.vue?vue&type=style&index=0&id=3c3574fe&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/TocItem.vue?vue&type=style&index=0&id=3c3574fe&scoped=true&lang=css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_TocItem_vue_vue_type_style_index_0_id_3c3574fe_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_TocItem_vue_vue_type_style_index_0_id_3c3574fe_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_TocItem_vue_vue_type_style_index_0_id_3c3574fe_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_TocItem_vue_vue_type_style_index_0_id_3c3574fe_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_TocItem_vue_vue_type_style_index_0_id_3c3574fe_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./TocItem.vue?vue&type=style&index=0&id=3c3574fe&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/TocItem.vue?vue&type=style&index=0&id=3c3574fe&scoped=true&lang=css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_TocItem_vue_vue_type_style_index_0_id_3c3574fe_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./TocItem.vue?vue&type=style&index=0&id=3c3574fe&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/TocItem.vue?vue&type=style&index=0&id=3c3574fe&scoped=true&lang=css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_TocItem_vue_vue_type_style_index_0_id_3c3574fe_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_TocItem_vue_vue_type_style_index_0_id_3c3574fe_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_TocItem_vue_vue_type_style_index_0_id_3c3574fe_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_TocItem_vue_vue_type_style_index_0_id_3c3574fe_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_TocItem_vue_vue_type_style_index_0_id_3c3574fe_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_TocItem_vue_vue_type_style_index_0_id_3c3574fe_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_TocItem_vue_vue_type_style_index_0_id_3c3574fe_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_TocItem_vue_vue_type_style_index_0_id_3c3574fe_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/CoursePage.vue?vue&type=style&index=0&id=6c17fec7&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/CoursePage.vue?vue&type=style&index=0&id=6c17fec7&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_CoursePage_vue_vue_type_style_index_0_id_6c17fec7_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./CoursePage.vue?vue&type=style&index=0&id=6c17fec7&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/CoursePage.vue?vue&type=style&index=0&id=6c17fec7&scoped=true&lang=css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_CoursePage_vue_vue_type_style_index_0_id_6c17fec7_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_CoursePage_vue_vue_type_style_index_0_id_6c17fec7_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_CoursePage_vue_vue_type_style_index_0_id_6c17fec7_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_CoursePage_vue_vue_type_style_index_0_id_6c17fec7_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_CoursePage_vue_vue_type_style_index_0_id_6c17fec7_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./CoursePage.vue?vue&type=style&index=0&id=6c17fec7&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/CoursePage.vue?vue&type=style&index=0&id=6c17fec7&scoped=true&lang=css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_CoursePage_vue_vue_type_style_index_0_id_6c17fec7_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./CoursePage.vue?vue&type=style&index=0&id=6c17fec7&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/CoursePage.vue?vue&type=style&index=0&id=6c17fec7&scoped=true&lang=css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_CoursePage_vue_vue_type_style_index_0_id_6c17fec7_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_CoursePage_vue_vue_type_style_index_0_id_6c17fec7_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_CoursePage_vue_vue_type_style_index_0_id_6c17fec7_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_CoursePage_vue_vue_type_style_index_0_id_6c17fec7_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_CoursePage_vue_vue_type_style_index_0_id_6c17fec7_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_CoursePage_vue_vue_type_style_index_0_id_6c17fec7_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_CoursePage_vue_vue_type_style_index_0_id_6c17fec7_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_CoursePage_vue_vue_type_style_index_0_id_6c17fec7_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/WelcomePage.vue?vue&type=style&index=0&id=62aa4038&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/WelcomePage.vue?vue&type=style&index=0&id=62aa4038&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_WelcomePage_vue_vue_type_style_index_0_id_62aa4038_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./WelcomePage.vue?vue&type=style&index=0&id=62aa4038&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/WelcomePage.vue?vue&type=style&index=0&id=62aa4038&scoped=true&lang=css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_WelcomePage_vue_vue_type_style_index_0_id_62aa4038_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_WelcomePage_vue_vue_type_style_index_0_id_62aa4038_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_WelcomePage_vue_vue_type_style_index_0_id_62aa4038_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_WelcomePage_vue_vue_type_style_index_0_id_62aa4038_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_WelcomePage_vue_vue_type_style_index_0_id_62aa4038_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./WelcomePage.vue?vue&type=style&index=0&id=62aa4038&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/WelcomePage.vue?vue&type=style&index=0&id=62aa4038&scoped=true&lang=css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_WelcomePage_vue_vue_type_style_index_0_id_62aa4038_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./WelcomePage.vue?vue&type=style&index=0&id=62aa4038&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/WelcomePage.vue?vue&type=style&index=0&id=62aa4038&scoped=true&lang=css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_WelcomePage_vue_vue_type_style_index_0_id_62aa4038_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_WelcomePage_vue_vue_type_style_index_0_id_62aa4038_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_WelcomePage_vue_vue_type_style_index_0_id_62aa4038_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_WelcomePage_vue_vue_type_style_index_0_id_62aa4038_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_WelcomePage_vue_vue_type_style_index_0_id_62aa4038_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_WelcomePage_vue_vue_type_style_index_0_id_62aa4038_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_WelcomePage_vue_vue_type_style_index_0_id_62aa4038_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_WelcomePage_vue_vue_type_style_index_0_id_62aa4038_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/popup.css":
/*!******************************!*\
  !*** ./src/styles/popup.css ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./popup.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/popup.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../node_modules/css-loader/dist/cjs.js!./popup.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/popup.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./popup.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/popup.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/Popup.vue?vue&type=script&lang=ts":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/Popup.vue?vue&type=script&lang=ts ***!
  \****************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _components_PageNavigation_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/PageNavigation.vue */ "./src/popup/components/PageNavigation.vue");
/* harmony import */ var _views_WelcomePage_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/WelcomePage.vue */ "./src/popup/views/WelcomePage.vue");
/* harmony import */ var _views_HomePage_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/HomePage.vue */ "./src/popup/views/HomePage.vue");
/* harmony import */ var _views_LoadingPage_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/LoadingPage.vue */ "./src/popup/views/LoadingPage.vue");
/* harmony import */ var _views_CoursePage_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/CoursePage.vue */ "./src/popup/views/CoursePage.vue");
/* harmony import */ var _views_DownloadPage_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/DownloadPage.vue */ "./src/popup/views/DownloadPage.vue");
/* harmony import */ var _views_AboutPage_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/AboutPage.vue */ "./src/popup/views/AboutPage.vue");
/* harmony import */ var _views_HelpPage_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/HelpPage.vue */ "./src/popup/views/HelpPage.vue");
/* harmony import */ var _libs_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../libs/store */ "./src/libs/store.ts");










/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'Popup',
    components: {
        PageNavigation: _components_PageNavigation_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
        WelcomePage: _views_WelcomePage_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
        LoadingPage: _views_LoadingPage_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
        HomePage: _views_HomePage_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
        CoursePage: _views_CoursePage_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
        DownloadPage: _views_DownloadPage_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
        AboutPage: _views_AboutPage_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
        HelpPage: _views_HelpPage_vue__WEBPACK_IMPORTED_MODULE_8__["default"]
    },
    setup() {
        const nav = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('welcome');
        const course = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({});
        const onNavUpdate = (target) => {
            nav.value = target;
        };
        const onCourseUpdate = (target) => {
            console.log(target);
            // this.rebuildCourseInfo(sectionIndex, tocIndex, toc);
        };
        const message = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
        const app = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({ state: 0 });
        return { nav, course, onNavUpdate, onCourseUpdate, message, app };
    },
    mounted() {
        console.log('App Entry Point Start here...');
        _libs_store__WEBPACK_IMPORTED_MODULE_9__["default"].prepareAppStorage();
        setTimeout(() => {
            const db = _libs_store__WEBPACK_IMPORTED_MODULE_9__["default"].db();
            console.log(db);
            db.subscribe('app', (row) => {
                // console.log(row);
                this.app = row;
                this.log(`AppState:${row.state}`);
            });
        }, 1000);
    },
    methods: {
        log(message) {
            this.message = message;
        },
        setCourse(course) {
            this.course = course;
            setTimeout(() => {
                this.nav = this.$refs.pageNavigation.nav = 'course';
            }, 250);
        }
    }
}));


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/CourseData.vue?vue&type=script&lang=ts":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/CourseData.vue?vue&type=script&lang=ts ***!
  \********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _libs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/store */ "./src/libs/store.ts");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    setup(props) {
        const courseData = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({});
        const course = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({});
        const sections = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
        const authors = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
        const tocs = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
        return { courseData, course, sections, tocs, authors };
    },
    mounted() {
        // this.initCourseData();
    },
    methods: {
        initCourseData() {
            /*
            // moved to src/libs/Store.ts
            const courseTmp = this.$parent.course;
            const sections = this.$parent.sections;
            const authors = this.$parent.authors;
            Store.init();
    
            const course = Store.createCourse(courseTmp.title, courseTmp.slug, courseTmp.duration, courseTmp.sourceCodeRepository, courseTmp.description);
            
            
    
            this.course = course;
            sections.map((sectionTmp)=>{
              const section = Store.createSection(this.course.ID,sectionTmp.title);
              this.sections.push(section);
              sectionTmp.items.map((tocTmp)=>{
                const toc = Store.createToc(section.ID,tocTmp.title,tocTmp.slug,tocTmp.duration);
                this.tocs.push(toc);
              });
            });
            Store.createAuthorList(course.slug,authors);
            this.updateItemFromLS();
    
             */
        },
        updateItemFromLS() {
            console.log('Please update everything from localStorage here..');
        },
        updateItems(exerciseFile, toc) {
            this.exerciseFile = _libs_store__WEBPACK_IMPORTED_MODULE_1__["default"].createExerciseFile(this.course.ID, exerciseFile.name, exerciseFile.url, exerciseFile.sizeInBytes);
            console.log(exerciseFile, toc);
            // update toc caption
            _libs_store__WEBPACK_IMPORTED_MODULE_1__["default"].updateTocCaption(toc.slug, toc.captionUrl, toc.captionFmt);
            // Update or create streaming location
            _libs_store__WEBPACK_IMPORTED_MODULE_1__["default"].createStreamLocationList(toc.slug, toc.streamLocations);
        }
    }
}));


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/FetchButton.vue?vue&type=script&lang=ts":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/FetchButton.vue?vue&type=script&lang=ts ***!
  \*********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _libs_proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/proxy */ "./src/libs/proxy.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _libs_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../libs/utils */ "./src/libs/utils.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    props: {
        toc: {
            required: true,
            type: Object
        },
        sectionIndex: {
            required: true,
            type: Number
        },
        tocIndex: {
            required: true,
            type: Number
        }
    },
    setup(props) {
        const toc = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.toc);
        const sectionIndex = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.sectionIndex);
        const tocIndex = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.tocIndex);
        let exerciseFile = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({ name: '', url: '' });
        const btnState = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(1);
        return { toc, sectionIndex, tocIndex, exerciseFile, btnState };
    },
    methods: {
        isQueued(fetchQueueEnabled) {
            return fetchQueueEnabled ? (this.$parent.checkedQueues[this.tocIndex] && this.$parent.excludeQueues.indexOf(this.tocIndex) == -1) : (this.btnState == 1 || this.btnState == 4);
        },
        fetchToc(fetchQueueEnabled) {
            // 0. check if queues
            const isQueued = this.isQueued(fetchQueueEnabled);
            console.log('isQueued:', isQueued);
            if (isQueued) {
                // 1. set btn state icon to [loading]
                this.btnState = 2;
                // const url = '/content.html?rand='+(Math.random().toString());
                const url = this.toc.url;
                _libs_proxy__WEBPACK_IMPORTED_MODULE_1__["default"].get(url, (responseText) => {
                    let validResource = this.parseToc(responseText);
                    if (validResource) {
                        // 3. set btn state to [checked]
                        this.btnState = 3;
                        this.$emit('update', { src: 'Popup.CoursePage.TocItem.FetchButton', toc: this.toc, exerciseFile: this.exerciseFile });
                        if (fetchQueueEnabled) {
                            console.log('Queue Complete: triggering next fetchToc from parent, lastTocIndex:', this.tocIndex);
                            this.$parent.triggerFetchQueue(this.tocIndex);
                        }
                        // addToParent excludeQueue
                        this.$parent.triggerExcludeFetchQueue(this.tocIndex, fetchQueueEnabled);
                    }
                    else {
                        // 3. set btn state to icon [retry]
                        this.btnState = 4;
                        if (fetchQueueEnabled) {
                            this.$parent.triggerFailedFetchQueue(this.tocIndex);
                            console.log('Queue Failed: triggering fetchToc from FetchButton, lastTocIndex:', this.tocIndex);
                        }
                    }
                }, (r) => {
                    // 3. set btn state to icon [retry]
                    this.btnState = 4;
                    if (fetchQueueEnabled) {
                        this.$parent.triggerFailedFetchQueue(this.tocIndex);
                        console.log('Queue Failed: triggering fetchToc from FetchButton, lastTocIndex:', this.tocIndex);
                    }
                });
            }
            else {
                if (fetchQueueEnabled) {
                    this.$parent.triggerFetchQueue(this.tocIndex);
                }
            }
        },
        // Rebuild toc data to populate 
        // StreamLocations
        // ExerciseFile
        parseToc(responseText) {
            let validResource = false;
            const elDiv = jquery__WEBPACK_IMPORTED_MODULE_2___default()(`<div>${responseText}</div>`);
            const elCodes = elDiv.find('code');
            let dataCodes = [];
            let toc = Object.assign({}, this.toc);
            toc.streamLocations = [];
            for (let codeIndex in elCodes) {
                let elCode = elCodes[codeIndex];
                try {
                    if (elCode.id.match(/^bpr-guid/)) {
                        dataCodes.push(JSON.parse(elCode.textContent));
                    }
                }
                catch (e) { }
            }
            if (dataCodes.length > 0) {
                // console.log(dataCodes);
                const searchTerms = [
                    "com.linkedin.learning.api.deco.content.ExerciseFile",
                    "com.linkedin.videocontent.Transcript",
                    "com.linkedin.videocontent.StreamingLocation"
                ];
                for (let searchTermIdx = 0; searchTermIdx < searchTerms.length; searchTermIdx++) {
                    const query = searchTerms[searchTermIdx];
                    const results = (0,_libs_utils__WEBPACK_IMPORTED_MODULE_3__.findItems)(query, dataCodes);
                    if (searchTermIdx == 0) {
                        // exerciseFile
                        try {
                            const exerciseFileObj = (0,_libs_utils__WEBPACK_IMPORTED_MODULE_3__.findDS)('$type', 'com.linkedin.learning.api.deco.content.ExerciseFile', results, ['sizeInBytes', 'name', 'url']);
                            this.exerciseFile = exerciseFileObj;
                        }
                        catch (e) { }
                    }
                    else if (searchTermIdx == 1) {
                        // transcript
                        const transcriptObj = (0,_libs_utils__WEBPACK_IMPORTED_MODULE_3__.findDS)('$type', "com.linkedin.videocontent.Transcript", results, ['captionFile', 'captionFormat']);
                        if ('object' === typeof transcriptObj) {
                            toc.captionUrl = transcriptObj.captionFile;
                            toc.captionFmt = transcriptObj.captionFormat;
                        }
                    }
                    if (searchTermIdx == 2) {
                        // streamLocations
                        const streamLocationObjs = (0,_libs_utils__WEBPACK_IMPORTED_MODULE_3__.findDS)('$type', "com.linkedin.videocontent.StreamingLocation", results, ['expiresAt', 'url'], true);
                        if (streamLocationObjs.length > 0) {
                            for (let stlIdx in streamLocationObjs) {
                                const url = streamLocationObjs[stlIdx].url;
                                const fmt = (0,_libs_utils__WEBPACK_IMPORTED_MODULE_3__.getFmt)(url);
                                toc.streamLocations.push({ url, fmt });
                            }
                        }
                    }
                }
            }
            if (toc.captionUrl.length > 0 && toc.streamLocations.length > 0) {
                validResource = true;
                this.toc = toc;
            }
            return validResource;
        }
    }
}));


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/FetchQueue.vue?vue&type=script&lang=ts":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/FetchQueue.vue?vue&type=script&lang=ts ***!
  \********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    props: {},
    setup(props) {
        let queueSlugs = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
        let excludeSlugs = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
        let percentage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
        let btnState = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(1);
        let lastTocIndex = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
        return { queueSlugs, excludeSlugs, percentage, btnState, lastTocIndex };
    },
    methods: {
        setProgress(lastTocIndex, percentage) {
            this.lastTocIndex = lastTocIndex;
            this.percentage = percentage;
            if (percentage == 100) {
                this.btnState = 3;
            }
            console.log(percentage);
        },
        startQueue() {
            this.percentage = this.percentage == 0 ? 1 : this.percentage;
            this.btnState = 2;
            this.$parent.triggerFetchQueue(this.lastTocIndex == 0 ? -1 : this.lastTocIndex);
        }
    }
}));


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/FetchQueueBar.vue?vue&type=script&lang=ts":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/FetchQueueBar.vue?vue&type=script&lang=ts ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    props: {
        sectionIndex: {
            required: true,
            type: Number
        }
    },
    setup(props) {
        let queueSlugs = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
        let excludeSlugs = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
        let percentage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
        let btnState = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(1);
        let lastTocIndex = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
        const sectionIndex = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.sectionIndex);
        return { queueSlugs, excludeSlugs, percentage, btnState, lastTocIndex, sectionIndex };
    },
    methods: {
        setProgress(lastTocIndex, percentage) {
            this.lastTocIndex = lastTocIndex;
            this.percentage = percentage;
            if (percentage == 100) {
                this.btnState = 3;
            }
            this.$parent.fetchSectionQueue.report(this.sectionIndex, lastTocIndex, 0);
            console.log(percentage);
        },
        startQueue() {
            this.percentage = this.percentage == 0 ? 1 : this.percentage;
            this.btnState = 2;
            this.$parent.tocItems[this.sectionIndex].triggerFetchQueue(this.lastTocIndex == 0 ? -1 : this.lastTocIndex);
        }
    }
}));


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/FetchSectionQueue.vue?vue&type=script&lang=ts":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/FetchSectionQueue.vue?vue&type=script&lang=ts ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    setup() {
        const queueSlugs = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
        const showData = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        const btnState = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(1);
        const percentage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
        const lastSectionIndex = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
        const sectionIndexQueues = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
        return { queueSlugs, showData, btnState, percentage, lastSectionIndex, sectionIndexQueues };
    },
    mounted() {
        setTimeout(() => {
            this.sectionIndexQueues = Object.keys(this.$parent.sections);
        }, 250);
    },
    methods: {
        toJSONStr(obj) {
            return JSON.stringify(obj);
        },
        calculatePercentageQueue(callback) {
            const peak = this.queueSlugs.length;
            const maxPeak = this.$parent.getTotalTocs();
            const percentage = Math.round(peak / maxPeak * 100);
            if ('function' == typeof callback) {
                callback(percentage, peak, maxPeak);
            }
        },
        report(sectionIndex, tocIndex, status) {
            const section = this.$parent.sections[sectionIndex];
            const slug = section.items[tocIndex].slug;
            if (!this.queueSlugs.includes(slug)) {
                this.queueSlugs.push(slug);
            }
            const remainingText = `${this.queueSlugs.length} of ${this.$parent.getTotalTocs()}`;
            this.$parent.logBar.log(`${section.title} : ${slug} ${remainingText}`, status);
            this.calculatePercentageQueue((percentage) => this.percentage = percentage);
            if (this.$parent.fetchQueueBar[sectionIndex].percentage == 100) {
                this.processQueue();
            }
        },
        processQueue() {
            if (this.sectionIndexQueues.length > 0) {
                this.lastSectionIndex = this.sectionIndexQueues.shift();
                this.$parent.fetchQueueBar[this.lastSectionIndex].startQueue();
            }
            else {
                this.btnState = 3;
            }
        },
        startQueue() {
            this.btnState = 2;
            this.processQueue();
        }
    }
}));


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/LogBar.vue?vue&type=script&lang=ts":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/LogBar.vue?vue&type=script&lang=ts ***!
  \****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    setup() {
        const mode = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(-1);
        const message = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
        return { mode, message };
    },
    methods: {
        log(message, mode) {
            this.message = message;
            this.mode = mode;
        }
    }
}));


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/PageNavigation.vue?vue&type=script&lang=ts":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/PageNavigation.vue?vue&type=script&lang=ts ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    props: {
        nav: {
            required: true,
            type: String
        }
    },
    setup(props) {
        const nav = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.nav);
        return { nav };
    },
    methods: {
        onNavClick(target) {
            console.log(target);
            this.nav = target;
            this.$emit('update', target);
        }
    }
}));


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/TocItem.vue?vue&type=script&lang=ts":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/TocItem.vue?vue&type=script&lang=ts ***!
  \*****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _components_FetchButton_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/FetchButton.vue */ "./src/popup/components/FetchButton.vue");
/* harmony import */ var _components_FetchQueue_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/FetchQueue.vue */ "./src/popup/components/FetchQueue.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    components: {
        FetchButton: _components_FetchButton_vue__WEBPACK_IMPORTED_MODULE_1__["default"], FetchQueue: _components_FetchQueue_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
    },
    props: {
        items: {
            required: true,
            type: Array
        },
        sectionIndex: {
            requied: true,
            type: Number
        }
    },
    setup(props) {
        const items = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.items);
        const sectionIndex = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.sectionIndex);
        const checkAll = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        const checkedQueues = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
        const excludeQueues = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
        let fetchBtns = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
        let fetchQueue = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();
        return { items, sectionIndex, checkedQueues, excludeQueues, fetchBtns, checkAll, fetchQueue };
    },
    mounted() {
        setTimeout(() => {
            this.checkAll = true;
            for (let tocIndex in this.items) {
                this.checkedQueues[tocIndex] = true;
            }
        }, 250);
    },
    methods: {
        triggerFailedFetchQueue(tocIndex) {
            setTimeout(() => {
                this.fetchQueue.btnState = 4;
            }, 1000);
        },
        calculatePercentageQueue(callback) {
            const peak = this.excludeQueues.length;
            const maxPeak = this.items.length;
            const percentage = Math.round(peak / maxPeak * 100);
            if ('function' == typeof callback) {
                callback(percentage, peak, maxPeak);
            }
        },
        triggerExcludeFetchQueue(tocIndex, fetchQueueEnabled) {
            console.log(tocIndex);
            if (this.excludeQueues.indexOf(tocIndex) == -1) {
                this.excludeQueues.push(tocIndex);
            }
            if (fetchQueueEnabled) {
                this.calculatePercentageQueue((percentage) => {
                    setTimeout(() => {
                        this.fetchQueue.setProgress(tocIndex, percentage);
                        this.$parent.fetchQueueBar[this.sectionIndex].setProgress(tocIndex, percentage);
                    }, 500);
                });
            }
            this.checkedQueues[tocIndex] = false;
            this.checkAll = false;
        },
        triggerFetchQueue(tocIndex) {
            console.log(tocIndex);
            const nextTocIndex = tocIndex + 1;
            if (nextTocIndex < this.checkedQueues.length) {
                // process next fetch button
                this.fetchBtns[nextTocIndex].fetchToc(true);
                // console.log();
            }
            else {
                this.calculatePercentageQueue((percentage) => {
                    setTimeout(() => {
                        this.fetchQueue.setProgress(tocIndex, percentage);
                        this.$parent.fetchQueueBar[this.sectionIndex].setProgress(tocIndex, percentage);
                    }, 500);
                });
                setTimeout(() => {
                    this.fetchQueue.btnState = this.fetchQueue.percentage == 100 ? 3 : 1;
                    this.fetchQueue.lastTocIndex = 0;
                    this.$parent.fetchQueueBar[this.sectionIndex].btnState = this.$parent.fetchQueueBar[this.sectionIndex].percentage == 100 ? 3 : 1;
                    this.$parent.fetchQueueBar[this.sectionIndex].lastTocIndex = 0;
                }, 1000);
            }
            // calling fetch button next index
            // this.$ref
        },
        onFetchUpdate(target) {
            // console.log(target)
            this.$emit('update', target);
        },
        onCheckAll() {
            setTimeout(() => {
                console.log(this.checkAll);
                for (let tocIndex in this.items) {
                    this.checkedQueues[tocIndex] = this.checkAll;
                }
            }, 250);
        },
        tgQueue(tocIndex) {
            setTimeout(() => {
                // this.$refs.fetchBtns[tocIndex].isQueued =this.checkedQueues[tocIndex];
                // console.log(this.$refs.fetchBtns);
                console.log(this.checkedQueues[tocIndex]);
            }, 250);
        }
    }
}));


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/AboutPage.vue?vue&type=script&lang=ts":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/AboutPage.vue?vue&type=script&lang=ts ***!
  \**************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _libs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/store */ "./src/libs/store.ts");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    setup() {
        const nav = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('about');
        const app = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({ version: 0 });
        return {
            nav,
            app
        };
    },
    mounted() {
        // setTimeout(()=>{
        this.app = _libs_store__WEBPACK_IMPORTED_MODULE_1__["default"].getAppInfo();
        console.log(this.app);
        // },1000);
    }
}));


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/CoursePage.vue?vue&type=script&lang=ts":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/CoursePage.vue?vue&type=script&lang=ts ***!
  \***************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _components_TocItem_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TocItem.vue */ "./src/popup/components/TocItem.vue");
/* harmony import */ var _components_FetchQueueBar_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/FetchQueueBar.vue */ "./src/popup/components/FetchQueueBar.vue");
/* harmony import */ var _components_FetchSectionQueue_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/FetchSectionQueue.vue */ "./src/popup/components/FetchSectionQueue.vue");
/* harmony import */ var _components_LogBar_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/LogBar.vue */ "./src/popup/components/LogBar.vue");
/* harmony import */ var _components_CourseData_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/CourseData.vue */ "./src/popup/components/CourseData.vue");
/* harmony import */ var _libs_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../libs/utils */ "./src/libs/utils.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _libs_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../libs/store */ "./src/libs/store.ts");









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    components: {
        TocItem: _components_TocItem_vue__WEBPACK_IMPORTED_MODULE_1__["default"], FetchQueueBar: _components_FetchQueueBar_vue__WEBPACK_IMPORTED_MODULE_2__["default"], FetchSectionQueue: _components_FetchSectionQueue_vue__WEBPACK_IMPORTED_MODULE_3__["default"], LogBar: _components_LogBar_vue__WEBPACK_IMPORTED_MODULE_4__["default"], CourseData: _components_CourseData_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
    },
    props: {
        course: {
            required: true,
            type: Object
        }
    },
    setup(props) {
        const course = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.course);
        const authors = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
        const sections = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
        const exerciseFile = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({});
        const tocItems = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
        const fetchQueueBar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
        const fetchSectionQueue = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({});
        const logBar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({});
        const courseData = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({});
        return { course, authors, sections, exerciseFile, tocItems,
            fetchQueueBar, fetchSectionQueue, logBar, courseData };
    },
    mounted() {
        jquery__WEBPACK_IMPORTED_MODULE_7___default()('.btn-collapse').click(function () {
            jquery__WEBPACK_IMPORTED_MODULE_7___default()(this).find('i').toggleClass('fa fa-plus fa fa-minus');
            jquery__WEBPACK_IMPORTED_MODULE_7___default()('.btn-collapse').not(this).find('i').removeClass('fa-minus').addClass('fa-plus ');
        });
        try {
            this.loadCourseData();
        }
        catch (e) { }
    },
    methods: {
        loadCourseData() {
            const courseSlug = this.course.slug;
            this.course = _libs_store__WEBPACK_IMPORTED_MODULE_8__["default"].getCourse(courseSlug)[0];
            const sections = _libs_store__WEBPACK_IMPORTED_MODULE_8__["default"].getSectionByCourseId(this.course.ID);
            sections.map((sectionTmp) => {
                const sectionId = sectionTmp.ID;
                let section = sectionTmp;
                section.items = _libs_store__WEBPACK_IMPORTED_MODULE_8__["default"].getTocBySectionId(section.ID);
                this.sections.push(section);
            });
            console.log(this.course);
            this.course.authorIds.map((ID) => {
                this.authors.push(_libs_store__WEBPACK_IMPORTED_MODULE_8__["default"].getAuthorById(ID)[0]);
            });
            // this.authors =
        },
        updateTocItems(exerciseFile, toc) {
            this.exerciseFile = _libs_store__WEBPACK_IMPORTED_MODULE_8__["default"].createExerciseFile(this.course.ID, exerciseFile.name, exerciseFile.url, exerciseFile.sizeInBytes);
            console.log(exerciseFile, toc);
            // update toc caption
            _libs_store__WEBPACK_IMPORTED_MODULE_8__["default"].updateTocCaption(toc.slug, toc.captionUrl, toc.captionFmt);
            // Update or create streaming location
            _libs_store__WEBPACK_IMPORTED_MODULE_8__["default"].createStreamLocationList(toc.slug, toc.streamLocations);
        },
        onTocUpdate(evt) {
            if (evt.src === 'Popup.CoursePage.TocItem.FetchButton') {
                this.updateTocItems(evt.exerciseFile, evt.toc);
            }
            this.$emit('update', evt);
        },
        makeTitle(slug) {
            return (0,_libs_utils__WEBPACK_IMPORTED_MODULE_6__.makeTitle)(slug);
        },
        getTotalTocs() {
            let totalTocs = 0;
            this.sections.map((s) => {
                totalTocs += s.items.length;
            });
            return totalTocs;
        }
    }
}));


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/DownloadPage.vue?vue&type=script&lang=ts":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/DownloadPage.vue?vue&type=script&lang=ts ***!
  \*****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    data() {
        return {
            nav: 'downloads'
        };
    }
}));


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/HelpPage.vue?vue&type=script&lang=ts":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/HelpPage.vue?vue&type=script&lang=ts ***!
  \*************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    data() {
        return {
            nav: 'help'
        };
    },
    methods: {
        syncLS() {
            const db_learning = localStorage['db_learning'];
            chrome.storage.sync.set({ db_learning });
        }
    }
}));


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/HomePage.vue?vue&type=script&lang=ts":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/HomePage.vue?vue&type=script&lang=ts ***!
  \*************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _libs_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/utils */ "./src/libs/utils.js");
/* harmony import */ var _libs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../libs/store */ "./src/libs/store.ts");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    data() {
        return {
            nav: 'home',
            btnRetrieveState: 0
        };
    },
    methods: {
        retrieveDataCodesFromContent() {
            this.btnRetrieveState = 1;
            // send data code from content script to LS
            (0,_libs_utils__WEBPACK_IMPORTED_MODULE_1__.sendMessageSaveDataCodesToLS)();
            // load data codes from ls
            _libs_store__WEBPACK_IMPORTED_MODULE_2__["default"].getDataCodesLS((dataCodes) => {
                this.btnRetrieveState = 2;
                // console.log(dataCodes)
                _libs_store__WEBPACK_IMPORTED_MODULE_2__["default"].saveDataCodes(dataCodes);
                this.$parent.setCourse(dataCodes.course);
                // contentConsoleLog(dataCodes);
            });
        }
    }
}));


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/LoadingPage.vue?vue&type=script&lang=ts":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/LoadingPage.vue?vue&type=script&lang=ts ***!
  \****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    props: {
        text: {
            required: false,
            type: String
        }
    },
    setup(props) {
        const text = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.text);
        return { text };
    }
}));


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/WelcomePage.vue?vue&type=script&lang=ts":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/WelcomePage.vue?vue&type=script&lang=ts ***!
  \****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _libs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/store */ "./src/libs/store.ts");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    setup() {
        const nav = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('welcome');
        const greeting = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('Welcome to LLFetcher, what do you want to do ?');
        const lastCourseList = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
        return {
            nav, greeting, lastCourseList
        };
    },
    mounted() {
        setTimeout(() => {
            const appInfo = _libs_store__WEBPACK_IMPORTED_MODULE_1__["default"].getAppInfo();
            const lastCourses = _libs_store__WEBPACK_IMPORTED_MODULE_1__["default"].getLastCourses();
            if (lastCourses.length > 0) {
                this.lastCourseList = [];
                lastCourses.map((course) => {
                    this.lastCourseList.push(course);
                });
            }
        }, 1000);
    },
    methods: {
        fetchCourseLS(course) {
            console.log(course);
        }
    }
}));


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/Popup.vue?vue&type=template&id=5f4bbcc0&scoped=true&ts=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/Popup.vue?vue&type=template&id=5f4bbcc0&scoped=true&ts=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-5f4bbcc0"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);
const _hoisted_1 = { class: "app-container" };
const _hoisted_2 = { class: "console" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_PageNavigation = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PageNavigation");
    const _component_WelcomePage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("WelcomePage");
    const _component_LoadingPage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("LoadingPage");
    const _component_HomePage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("HomePage");
    const _component_CoursePage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CoursePage");
    const _component_DownloadPage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DownloadPage");
    const _component_HelpPage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("HelpPage");
    const _component_AboutPage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("AboutPage");
    const _component_highlightjs = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("highlightjs");
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_PageNavigation, {
            onUpdate: _cache[0] || (_cache[0] = ($event) => (_ctx.onNavUpdate($event))),
            nav: _ctx.nav,
            ref: "pageNavigation"
        }, null, 8 /* PROPS */, ["nav"]),
        (_ctx.nav == 'welcome')
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_WelcomePage, { key: 0 }))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        (_ctx.nav == 'loading')
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_LoadingPage, {
                key: 1,
                text: "Fetching Course Data"
            }))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        (_ctx.nav == 'home')
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_HomePage, { key: 2 }))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        (_ctx.nav == 'course')
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_CoursePage, {
                key: 3,
                onUpdate: _cache[1] || (_cache[1] = ($event) => (_ctx.onCourseUpdate($event))),
                course: _ctx.course,
                ref: "coursePage"
            }, null, 8 /* PROPS */, ["course"]))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        (_ctx.nav == 'downloads')
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_DownloadPage, { key: 4 }))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        (_ctx.nav == 'help')
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_HelpPage, { key: 5 }))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        (_ctx.nav == 'about')
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_AboutPage, { key: 6 }))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_highlightjs, {
                language: "console",
                code: JSON.stringify(_ctx.message, null, 2)
            }, null, 8 /* PROPS */, ["code"])
        ], 512 /* NEED_PATCH */), [
            [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, _ctx.message.length > 0]
        ])
    ]));
}


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/CourseData.vue?vue&type=template&id=3bb2619c&scoped=true&ts=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/CourseData.vue?vue&type=template&id=3bb2619c&scoped=true&ts=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-3bb2619c"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);
const _hoisted_1 = { class: "course-data" };
const _hoisted_2 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "data-title" }, "COURSE", -1 /* HOISTED */));
const _hoisted_3 = { class: "data-content" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_highlightjs = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("highlightjs");
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", null, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [
                _hoisted_2,
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_highlightjs, {
                        language: "json",
                        code: JSON.stringify(_ctx.course, null, 2)
                    }, null, 8 /* PROPS */, ["code"])
                ])
            ])
        ])
    ]));
}


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/FetchButton.vue?vue&type=template&id=bc2b9de2&ts=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/FetchButton.vue?vue&type=template&id=bc2b9de2&ts=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = { class: "btn-group" };
const _hoisted_2 = ["disabled", "title"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
            style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({ border: (_ctx.btnState != 1 && _ctx.btnState != 4 ? 'none' : 'inherit') }),
            disabled: _ctx.btnState > 1 && _ctx.btnState < 4,
            onClick: _cache[0] || (_cache[0] = ($event) => (_ctx.fetchToc(false))),
            class: "btn btn-sm",
            title: 'Click to fetch TOC resources ' + _ctx.toc.title
        }, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
                class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["fa", { 'fa-play': _ctx.btnState == 1, 'fa-spin fa-spinner': _ctx.btnState == 2, 'fa-check': _ctx.btnState == 3, 'fa-refresh': _ctx.btnState == 4 }])
            }, null, 2 /* CLASS */)
        ], 12 /* STYLE, PROPS */, _hoisted_2)
    ]));
}


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/FetchQueue.vue?vue&type=template&id=18a8fe44&scoped=true&ts=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/FetchQueue.vue?vue&type=template&id=18a8fe44&scoped=true&ts=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-18a8fe44"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);
const _hoisted_1 = { class: "fetch-queue" };
const _hoisted_2 = { style: { "width": "90%", "height": "15px" } };
const _hoisted_3 = { class: "progress" };
const _hoisted_4 = ["aria-valuenow"];
const _hoisted_5 = { class: "btn-fetch-cnt" };
const _hoisted_6 = ["disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
                    class: "progress-bar",
                    role: "progressbar",
                    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({ width: _ctx.percentage + '%' }),
                    "aria-valuenow": _ctx.percentage,
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                }, null, 12 /* STYLE, PROPS */, _hoisted_4)
            ], 512 /* NEED_PATCH */), [
                [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, _ctx.percentage > 0]
            ])
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                disabled: _ctx.btnState != 1 && _ctx.btnState != 4,
                onClick: _cache[0] || (_cache[0] = ($event) => (_ctx.startQueue())),
                class: "btn btn-sm btn-fetch"
            }, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
                    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["fa", { 'fa-play': _ctx.btnState == 1, 'fa-spin fa-spinner': _ctx.btnState == 2, 'fa-check': _ctx.btnState == 3, 'fa-refresh': _ctx.btnState == 4 }])
                }, null, 2 /* CLASS */)
            ], 8 /* PROPS */, _hoisted_6)
        ])
    ]));
}


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/FetchQueueBar.vue?vue&type=template&id=905aec42&scoped=true&ts=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/FetchQueueBar.vue?vue&type=template&id=905aec42&scoped=true&ts=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-905aec42"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);
const _hoisted_1 = { class: "fetch-queue-bar" };
const _hoisted_2 = { class: "fetch-queue-pb" };
const _hoisted_3 = { class: "progress" };
const _hoisted_4 = ["aria-valuenow"];
const _hoisted_5 = { class: "btn-fetch-cnt" };
const _hoisted_6 = ["disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
                    class: "progress-bar bg-info",
                    role: "progressbar",
                    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({ width: _ctx.percentage + '%' }),
                    "aria-valuenow": _ctx.percentage,
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                }, null, 12 /* STYLE, PROPS */, _hoisted_4)
            ], 512 /* NEED_PATCH */), [
                [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, _ctx.percentage > 0]
            ])
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({ color: _ctx.btnState == 3 ? 'white' : 'inherit' }),
                disabled: _ctx.btnState != 1 && _ctx.btnState != 4,
                onClick: _cache[0] || (_cache[0] = ($event) => (_ctx.startQueue())),
                class: "btn btn-sm btn-fetch"
            }, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
                    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["fa", { 'fa-play': _ctx.btnState == 1, 'fa-spin fa-spinner': _ctx.btnState == 2, 'fa-check': _ctx.btnState == 3, 'fa-refresh': _ctx.btnState == 4 }])
                }, null, 2 /* CLASS */)
            ], 12 /* STYLE, PROPS */, _hoisted_6)
        ])
    ]));
}


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/FetchSectionQueue.vue?vue&type=template&id=6afda649&scoped=true&ts=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/FetchSectionQueue.vue?vue&type=template&id=6afda649&scoped=true&ts=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-6afda649"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);
const _hoisted_1 = { class: "fetch-section-queue" };
const _hoisted_2 = { class: "fsqbc" };
const _hoisted_3 = { class: "fetch-section-queue-bar" };
const _hoisted_4 = { class: "fetch-section-queue-pb" };
const _hoisted_5 = { class: "progress" };
const _hoisted_6 = ["aria-valuenow"];
const _hoisted_7 = { class: "btn-fetch-section-queue-cnt" };
const _hoisted_8 = ["disabled"];
const _hoisted_9 = {
    key: 0,
    class: "data-codes"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
                            class: "progress-bar bg-success",
                            role: "progressbar",
                            style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({ width: _ctx.percentage + '%' }),
                            "aria-valuenow": _ctx.percentage,
                            "aria-valuemin": "0",
                            "aria-valuemax": "100"
                        }, null, 12 /* STYLE, PROPS */, _hoisted_6)
                    ], 512 /* NEED_PATCH */), [
                        [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, _ctx.percentage > 0]
                    ])
                ]),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                        style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({ color: _ctx.btnState == 3 ? 'white' : 'inherit' }),
                        disabled: _ctx.btnState != 1 && _ctx.btnState != 4,
                        onClick: _cache[0] || (_cache[0] = ($event) => (_ctx.startQueue())),
                        class: "btn btn-sm btn-fetch-section-queue"
                    }, [
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
                            class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["fa", { 'fa-play': _ctx.btnState == 1, 'fa-spin fa-spinner': _ctx.btnState == 2, 'fa-check': _ctx.btnState == 3, 'fa-refresh': _ctx.btnState == 4 }])
                        }, null, 2 /* CLASS */)
                    ], 12 /* STYLE, PROPS */, _hoisted_8)
                ])
            ])
        ]),
        (_ctx.showData)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("code", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.toJSONStr(_ctx.queueSlugs)), 1 /* TEXT */))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
    ]));
}


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/LogBar.vue?vue&type=template&id=5c8a287c&scoped=true&ts=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/LogBar.vue?vue&type=template&id=5c8a287c&scoped=true&ts=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-5c8a287c"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);
const _hoisted_1 = { class: "log-bar" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
            class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["log-message", { error: _ctx.mode == 1, success: _ctx.mode == 0, warning: _ctx.mode == 2 }])
        }, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.message), 1 /* TEXT */)
        ], 2 /* CLASS */)
    ]));
}


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/PageNavigation.vue?vue&type=template&id=fbb75d60&ts=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/PageNavigation.vue?vue&type=template&id=fbb75d60&ts=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = { class: "page-navigation text-center" };
const _hoisted_2 = { class: "btn-group" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_2, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
                onClick: _cache[0] || (_cache[0] = ($event) => (_ctx.onNavClick('welcome'))),
                class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["btn btn-sm btn-primary", { active: _ctx.nav == 'welcome' }])
            }, "Welcome", 2 /* CLASS */),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
                onClick: _cache[1] || (_cache[1] = ($event) => (_ctx.onNavClick('loading'))),
                class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["btn btn-sm btn-primary", { active: _ctx.nav == 'loading' }])
            }, "Loading", 2 /* CLASS */),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
                onClick: _cache[2] || (_cache[2] = ($event) => (_ctx.onNavClick('home'))),
                class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["btn btn-sm btn-primary", { active: _ctx.nav == 'home' }])
            }, "Home", 2 /* CLASS */),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
                onClick: _cache[3] || (_cache[3] = ($event) => (_ctx.onNavClick('course'))),
                class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["btn btn-sm btn-primary", { active: _ctx.nav == 'course' }])
            }, "Course", 2 /* CLASS */),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
                onClick: _cache[4] || (_cache[4] = ($event) => (_ctx.onNavClick('downloads'))),
                class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["btn btn-sm btn-primary", { active: _ctx.nav == 'downloads' }])
            }, "Downloads", 2 /* CLASS */),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
                onClick: _cache[5] || (_cache[5] = ($event) => (_ctx.onNavClick('help'))),
                class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["btn btn-sm btn-primary", { active: _ctx.nav == 'help' }])
            }, "Helps", 2 /* CLASS */),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
                onClick: _cache[6] || (_cache[6] = ($event) => (_ctx.onNavClick('about'))),
                class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["btn btn-sm btn-primary", { active: _ctx.nav == 'about' }])
            }, "About", 2 /* CLASS */)
        ])
    ]));
}


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/TocItem.vue?vue&type=template&id=3c3574fe&scoped=true&ts=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/TocItem.vue?vue&type=template&id=3c3574fe&scoped=true&ts=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-3c3574fe"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);
const _hoisted_1 = { class: "toc-item-view" };
const _hoisted_2 = { class: "toc-item-list" };
const _hoisted_3 = { colspan: "2" };
const _hoisted_4 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", { style: { "padding-left": ".5em" } }, "Check All", -1 /* HOISTED */));
const _hoisted_5 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, null, -1 /* HOISTED */));
const _hoisted_6 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    class: "text-center",
    style: { "width": "80px" }
}, null, -1 /* HOISTED */));
const _hoisted_7 = { class: "fcc" };
const _hoisted_8 = ["onClick", "onUpdate:modelValue"];
const _hoisted_9 = { style: { "padding-left": ".5em" } };
const _hoisted_10 = {
    colspan: "2",
    style: { "text-align": "right" }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_FetchQueue = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("FetchQueue");
    const _component_FetchButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("FetchButton");
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FetchQueue, { ref: "fetchQueue" }, null, 512 /* NEED_PATCH */), [
            [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, false]
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_2, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_3, [
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, [
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                onClick: _cache[0] || (_cache[0] = ($event) => (_ctx.onCheckAll())),
                                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => ((_ctx.checkAll) = $event)),
                                class: "form-check-input",
                                type: "checkbox"
                            }, null, 512 /* NEED_PATCH */), [
                                [vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, _ctx.checkAll]
                            ]),
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(),
                            _hoisted_4
                        ])
                    ]),
                    _hoisted_5,
                    _hoisted_6
                ])
            ]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [
                ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.items, (toc, tocIndex) => {
                    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
                        class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["toc-item", { ods: tocIndex % 2 == 0 }]),
                        key: tocIndex
                    }, [
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_7, [
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                onClick: ($event) => (_ctx.tgQueue(tocIndex)),
                                class: "form-check-input",
                                type: "checkbox",
                                "onUpdate:modelValue": ($event) => ((_ctx.checkedQueues[tocIndex]) = $event)
                            }, null, 8 /* PROPS */, _hoisted_8), [
                                [vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, _ctx.checkedQueues[tocIndex]]
                            ])
                        ]),
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(toc.title), 1 /* TEXT */),
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_10, [
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FetchButton, {
                                onUpdate: _cache[2] || (_cache[2] = ($event) => (_ctx.onFetchUpdate($event))),
                                sectionIndex: _ctx.sectionIndex,
                                tocIndex: tocIndex,
                                toc: toc,
                                checkedQueues: "checkedQueues",
                                ref_for: true,
                                ref: "fetchBtns"
                            }, null, 8 /* PROPS */, ["sectionIndex", "tocIndex", "toc"])
                        ])
                    ], 2 /* CLASS */));
                }), 128 /* KEYED_FRAGMENT */))
            ])
        ])
    ]));
}


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/AboutPage.vue?vue&type=template&id=4230ffcf&ts=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/AboutPage.vue?vue&type=template&id=4230ffcf&ts=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = { class: "about-page page" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" version "),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.app.version), 1 /* TEXT */)
    ]));
}


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/CoursePage.vue?vue&type=template&id=6c17fec7&scoped=true&ts=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/CoursePage.vue?vue&type=template&id=6c17fec7&scoped=true&ts=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-6c17fec7"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);
const _hoisted_1 = { class: "course-page page" };
const _hoisted_2 = { class: "fsqc" };
const _hoisted_3 = { class: "course" };
const _hoisted_4 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", { class: "fa fa-bookmark" }, null, -1 /* HOISTED */));
const _hoisted_5 = {
    class: "accordion accordion-flush",
    id: "accordionCourse"
};
const _hoisted_6 = ["id"];
const _hoisted_7 = { class: "row course-section" };
const _hoisted_8 = ["data-bs-target", "aria-controls"];
const _hoisted_9 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", { class: "fa fa-plus" }, null, -1 /* HOISTED */));
const _hoisted_10 = [
    _hoisted_9
];
const _hoisted_11 = {
    class: "col-md-8",
    style: { "padding-left": "2.5em" }
};
const _hoisted_12 = { class: "col-md-4" };
const _hoisted_13 = ["id", "aria-labelledby"];
const _hoisted_14 = { class: "accordion-body" };
const _hoisted_15 = { class: "lbc" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_FetchSectionQueue = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("FetchSectionQueue");
    const _component_FetchQueueBar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("FetchQueueBar");
    const _component_TocItem = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("TocItem");
    const _component_LogBar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("LogBar");
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FetchSectionQueue, { ref: "fetchSectionQueue" }, null, 512 /* NEED_PATCH */)
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, [
                _hoisted_4,
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.course.title) + " by ", 1 /* TEXT */),
                ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.authors, (author) => {
                    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.makeTitle(author.slug)), 1 /* TEXT */));
                }), 256 /* UNKEYED_FRAGMENT */))
            ])
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [
            ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.sections, (section, sectionIndex) => {
                return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
                    key: sectionIndex,
                    class: "accordion-item"
                }, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
                        class: "accordion-header",
                        id: 'heading' + sectionIndex
                    }, [
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                                class: "btn btn-default accordion-button custom btn-collapse",
                                "data-bs-toggle": "collapse",
                                "data-bs-target": '#collapse' + sectionIndex,
                                "aria-expanded": "false",
                                "aria-controls": 'collapse' + sectionIndex
                            }, _hoisted_10, 8 /* PROPS */, _hoisted_8),
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(section.title), 1 /* TEXT */),
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [
                                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FetchQueueBar, {
                                    ref_for: true,
                                    ref: "fetchQueueBar",
                                    sectionIndex: sectionIndex
                                }, null, 8 /* PROPS */, ["sectionIndex"])
                            ])
                        ])
                    ], 8 /* PROPS */, _hoisted_6),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
                        id: 'collapse' + sectionIndex,
                        class: "accordion-collapse collapse",
                        "aria-labelledby": 'heading' + sectionIndex,
                        "data-bs-parent": "#accordionCourse"
                    }, [
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_TocItem, {
                                items: section.items,
                                sectionIndex: sectionIndex,
                                onUpdate: _cache[0] || (_cache[0] = ($event) => (_ctx.onTocUpdate($event))),
                                ref_for: true,
                                ref: "tocItems"
                            }, null, 8 /* PROPS */, ["items", "sectionIndex"])
                        ])
                    ], 8 /* PROPS */, _hoisted_13)
                ]));
            }), 128 /* KEYED_FRAGMENT */))
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_LogBar, { ref: "logBar" }, null, 512 /* NEED_PATCH */)
        ])
    ]));
}


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/DownloadPage.vue?vue&type=template&id=7976c4f4&ts=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/DownloadPage.vue?vue&type=template&id=7976c4f4&ts=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = { class: "download-page page" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, " DOWNLOAD "));
}


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/HelpPage.vue?vue&type=template&id=0d5c1d2d&ts=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/HelpPage.vue?vue&type=template&id=0d5c1d2d&ts=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = { class: "help-page page" };
const _hoisted_2 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", { class: "fa fa-sync" }, null, -1 /* HOISTED */);
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" HELP "),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                class: "btn btn-danger",
                onClick: _cache[0] || (_cache[0] = ($event) => (_ctx.syncLS()))
            }, [
                _hoisted_2,
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Sync LS")
            ])
        ])
    ]));
}


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/HomePage.vue?vue&type=template&id=73a3c4cb&ts=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/HomePage.vue?vue&type=template&id=73a3c4cb&ts=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = { class: "home-page page" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
            class: "btn btn-primary",
            onClick: _cache[0] || (_cache[0] = ($event) => (_ctx.retrieveDataCodesFromContent()))
        }, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
                class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["fa", { 'fa-handshake-o': _ctx.btnRetrieveState == 0, 'fa-spin fa-spinner': _ctx.btnRetrieveState == 1, 'fa-refresh': _ctx.btnRetrieveState == 2 }])
            }, null, 2 /* CLASS */),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Retrieve Data Codes")
        ])
    ]));
}


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/LoadingPage.vue?vue&type=template&id=2c6dabbe&ts=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/LoadingPage.vue?vue&type=template&id=2c6dabbe&ts=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = { class: "loading-page page" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.text), 1 /* TEXT */));
}


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/WelcomePage.vue?vue&type=template&id=62aa4038&scoped=true&ts=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/WelcomePage.vue?vue&type=template&id=62aa4038&scoped=true&ts=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-62aa4038"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);
const _hoisted_1 = { class: "welcome-page page" };
const _hoisted_2 = { class: "action-cnt" };
const _hoisted_3 = {
    key: 0,
    class: "dropdown"
};
const _hoisted_4 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    class: "btn btn-secondary dropdown-toggle",
    type: "button",
    id: "recentCourseButton",
    "data-bs-toggle": "dropdown",
    "aria-expanded": "false"
}, [
    /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", { class: "fa fa-history" }),
    /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Load Recent Course ")
], -1 /* HOISTED */));
const _hoisted_5 = {
    class: "dropdown-menu",
    "aria-labelledby": "recentCourseButton"
};
const _hoisted_6 = ["onClick"];
const _hoisted_7 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "btn-cnt" }, [
    /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", { class: "btn btn-primary" }, [
        /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", { class: "fa fa-hand-o-right" }),
        /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Fetch This Course")
    ])
], -1 /* HOISTED */));
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.greeting), 1 /* TEXT */),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
            (_ctx.lastCourseList.length > 0)
                ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [
                    _hoisted_4,
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_5, [
                        ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.lastCourseList, (course) => {
                            return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", null, [
                                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
                                    class: "dropdown-item",
                                    href: "javascript:;",
                                    onClick: ($event) => (_ctx.fetchCourseLS(course))
                                }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(course.title), 9 /* TEXT, PROPS */, _hoisted_6)
                            ]));
                        }), 256 /* UNKEYED_FRAGMENT */))
                    ])
                ]))
                : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
            _hoisted_7
        ])
    ]));
}


/***/ }),

/***/ "./src/libs/proxy.ts":
/*!***************************!*\
  !*** ./src/libs/proxy.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");

class Proxy {
    static async create(url, method, postData) {
        let headers = {
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*'
        };
        let options = {
            method: method,
            url: url,
            headers: headers,
        };
        if (method == 'post') {
            var formData = new FormData();
            for (let key in postData) {
                formData.append(key, postData[key]);
            }
            options.headers['Content-Type'] = 'multipart/form-data';
            options['data'] = formData;
        }
        let response = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])(options).then((response) => {
            return response;
        }).then((response) => {
            return response;
        });
        return response;
    }
    static get(url, cbSuccess, cbError) {
        (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            method: 'get',
            url: url,
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
        })
            .then((response) => {
            if ('function' === typeof cbSuccess) {
                cbSuccess(response.data);
            }
        })
            .catch((error) => {
            if ('function' === typeof cbError) {
                cbError(error);
            }
            console.log(error);
        });
    }
    static post(url, postData, cbSuccess, cbError, optArgs) {
        var formData = new FormData();
        for (let key in postData) {
            formData.append(key, postData[key]);
        }
        try {
            if (typeof optArgs === 'object') {
                for (let n in optArgs) {
                    let f = optArgs[n];
                    formData.append(n, f);
                }
            }
        }
        catch (e) {
            console.log(e);
        }
        (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            method: 'post',
            url: url,
            data: formData,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
                'Access-Control-Allow-Origin': '*'
            },
        })
            .then((response) => {
            if ('function' === typeof cbSuccess) {
                cbSuccess(response.data);
            }
        })
            .catch((error) => {
            if ('function' === typeof cbError) {
                cbError(error);
            }
            console.log(error);
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Proxy);


/***/ }),

/***/ "./src/libs/store.ts":
/*!***************************!*\
  !*** ./src/libs/store.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var localStorageDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! localStorageDB */ "./node_modules/localStorageDB/localstoragedb.js");
/* harmony import */ var localStorageDB__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(localStorageDB__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./proxy */ "./src/libs/proxy.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/libs/utils.js");



class MyLS {
    db;
    subscribers = {};
    lastTable = '';
    lastTablePk;
    constructor(db, engine) {
        this.db = new (localStorageDB__WEBPACK_IMPORTED_MODULE_0___default())(db, engine);
    }
    subscribe(table, fn) {
        this.subscribers[table] = fn;
    }
    update(table, query, update) {
        const ret = this.db.update(table, query, update);
        this.lastTable = table;
        this.lastTablePk = ret;
        return ret;
    }
    insert(a, b) {
        return this.db.insert(a, b);
    }
    queryAll(a, b) {
        return this.db.queryAll(a, b);
    }
    getRow(table, ID) {
        return this.db.queryAll(table, { ID })[0];
    }
    commit() {
        const ret = this.db.commit();
        if (this.lastTable !== '') {
            if (typeof this.subscribers[this.lastTable] === 'function') {
                const row = this.getRow(this.lastTable, this.lastTablePk);
                this.subscribers[this.lastTable](row);
                this.lastTable = '';
                this.lastTablePk = -1;
            }
        }
        return ret;
    }
    isNew() {
        return this.db.isNew();
    }
    createTable(a, b) {
        return this.db.createTable(a, b);
    }
}
class Store {
    static __db__;
    static db() {
        if (typeof Store.__db__ === 'undefined') {
            Store.__db__ = new MyLS("learning", 'localStorage');
        }
        return Store.__db__;
    }
    static init() {
        const db = Store.db();
        if (db.isNew()) {
            const schema = {
                course: ["title", "slug", "duration", "sourceCodeRepository", "description", 'authorIds'],
                author: ["name", "slug", "biography", "shortBiography", "courseIds"],
                exerciseFile: ["courseId", "name", "url", "size"],
                section: ["courseId", "slug", "title"],
                toc: ["sectionId", "title", "slug", "url", "duration", "captionUrl", "captionFmt", "streamLocationIds"],
                streamLocation: ["tocId", "fmt", "url"],
                downloadConfig: ["courseId", "fmtList", "selectedFmtList"],
                downloads: ["tocId", "downloadId", "filename", "progress", "status"],
                app: ["version", "state", "lastCourseSlug"]
            };
            Object.keys(schema).map((table) => {
                db.createTable(table, schema[table]);
            });
            db.commit();
        }
    }
    static getExerciseFile(courseId) {
        const db = Store.db();
        return db.queryAll('exerciseFile', { query: { courseId } });
    }
    static getCourse(slug) {
        const db = Store.db();
        return db.queryAll('course', { query: { slug } });
    }
    static getLastCourses() {
        const db = Store.db();
        const appState = Store.getAppState();
        return db.queryAll('course', { query: (row) => {
                if (row.slug !== appState.lastCourseSlug) {
                    return true;
                }
            }
        });
    }
    static getCourseById(ID) {
        const db = Store.db();
        return db.queryAll('course', { query: { ID } });
    }
    static getSection(slug) {
        const db = Store.db();
        return db.queryAll('section', { query: { slug } });
    }
    static getSectionByCourseId(courseId) {
        const db = Store.db();
        return db.queryAll('section', { query: { courseId } });
    }
    static getTocBySectionId(sectionId) {
        const db = Store.db();
        return db.queryAll('toc', { query: { sectionId } });
    }
    static getToc(slug) {
        const db = Store.db();
        return db.queryAll('toc', { query: { slug } });
    }
    static getAuthor(slug) {
        const db = Store.db();
        return db.queryAll('author', { query: { slug } });
    }
    static getAuthorById(ID) {
        const db = Store.db();
        return db.queryAll('author', { query: { ID } });
    }
    static createAuthor(name, slug, biography, shortBiography, courseId) {
        const db = Store.db();
        const authors = Store.getAuthor(slug);
        let author = null;
        if (authors.length > 0) {
            author = authors[0];
            if (typeof courseId === 'number') {
                const courseIds = author.courseIds;
                if (!courseIds.includes(courseId)) {
                    courseIds.push(courseId);
                    db.update('author', { slug }, (row) => {
                        row.courseIds = courseIds;
                        return row;
                    });
                    setTimeout(() => { db.commit(); }, 100);
                    author.courseIds = courseIds;
                }
            }
        }
        else {
            const courseIds = [];
            if (typeof courseId === 'number') {
                courseIds.push(courseId);
            }
            const ID = 0;
            author = { ID, name, slug, biography, shortBiography, courseIds };
            author.ID = db.insert('author', author);
            setTimeout(() => { db.commit(); }, 100);
        }
        return author;
    }
    static createAuthorList(courseSlug, authors) {
        const db = Store.db();
        const courses = Store.getCourse(courseSlug);
        if (courses.length > 0) {
            const course = courses[0];
            let authorIds = course.authorIds;
            authors.map((authorTmp) => {
                console.log(authorTmp);
                const name = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.makeTitle)(authorTmp.slug);
                const author = Store.createAuthor(name, authorTmp.slug, authorTmp.biography, authorTmp.shortBiography, course.ID);
                if (!authorIds.includes(author.ID)) {
                    authorIds.push(author.ID);
                }
            });
            db.update('course', { slug: courseSlug }, (row) => {
                row.authorIds = authorIds;
                return row;
            });
            db.commit();
        }
    }
    static updateTocCaption(slug, captionUrl, captionFmt) {
        const db = Store.db();
        const tocs = Store.getToc(slug);
        if (tocs.length > 0) {
            const toc = tocs[0];
            db.update("toc", { slug }, function (newToc) {
                newToc.captionUrl = captionUrl;
                newToc.captionFmt = captionFmt;
                return newToc;
            });
            db.commit();
        }
    }
    static getStreamLocation(tocId, fmt) {
        const db = Store.db();
        return db.queryAll('streamLocation', { query: { tocId, fmt } });
    }
    static createStreamLocation(tocId, fmt, url) {
        const db = Store.db();
        const streamLocations = Store.getStreamLocation(tocId, fmt);
        let streamLoc = null;
        if (streamLocations.length > 0) {
            streamLoc = streamLocations[0];
            streamLoc.url = url;
            db.update('streamLocation', (row) => {
                row.url = url;
                return row;
            });
        }
        else {
            const ID = 0;
            streamLoc = { ID, tocId, fmt, url };
            streamLoc.ID = db.insert('streamLocation', streamLoc);
        }
        setTimeout(() => db.commit(), 100);
        return streamLoc;
    }
    static createStreamLocationList(slug, streamLocations) {
        const db = Store.db();
        const tocs = Store.getToc(slug);
        if (tocs.length > 0) {
            const toc = tocs[0];
            const streamLocationIds = toc.streamLocationIds;
            streamLocations.map((streamLocation) => {
                console.log(streamLocation);
                const streamLoc = Store.createStreamLocation(toc.ID, streamLocation.fmt, streamLocation.url);
                if (!streamLocationIds.includes(streamLoc.ID)) {
                    streamLocationIds.push(streamLoc.ID);
                }
            });
            db.update('toc', { slug }, (row) => {
                row.streamLocationIds = streamLocationIds;
                return row;
            });
            db.commit();
        }
    }
    static createExerciseFile(courseId, name, url, size) {
        const db = Store.db();
        const exerciseFiles = Store.getExerciseFile(courseId);
        let exerciseFile = null;
        if (exerciseFiles.length === 0) {
            const ID = 0;
            exerciseFile = { ID, courseId, name, url, size };
            exerciseFile.ID = db.insert('exerciseFile', exerciseFile);
            db.commit();
        }
        else {
            exerciseFile = exerciseFiles[0];
        }
        return exerciseFile;
    }
    static createSection(courseId, title) {
        const db = Store.db();
        const slug = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.makeSlug)(title);
        const sections = Store.getSection(slug);
        let section = null;
        if (sections.length === 0) {
            const ID = 0;
            section = { ID, courseId, title, slug };
            section.ID = db.insert('section', section);
            db.commit();
        }
        else {
            section = sections[0];
        }
        return section;
    }
    static createToc(sectionId, title, slug, url, duration, captionUrl, captionFmt) {
        const db = Store.db();
        const tocs = Store.getToc(slug);
        let toc = null;
        if (tocs.length === 0) {
            const ID = 0;
            const streamLocationIds = [];
            toc = { ID, sectionId, title, slug, url, duration, captionUrl, captionFmt, streamLocationIds };
            toc.ID = db.insert('toc', toc);
            db.commit();
        }
        else {
            toc = tocs[0];
        }
        return toc;
    }
    static createCourse(title, slug, duration, sourceCodeRepository, description) {
        const db = Store.db();
        const courses = Store.getCourse(slug);
        let course = null;
        if (courses.length === 0) {
            const ID = 0;
            const authorIds = [];
            course = { ID, title, slug, duration, sourceCodeRepository, description, authorIds };
            course.ID = db.insert('course', course);
            db.commit();
        }
        else {
            course = courses[0];
        }
        return course;
    }
    static getCourseJson(callback) {
        _proxy__WEBPACK_IMPORTED_MODULE_1__["default"].get('/data/course.json', (r) => {
            // console.log(r);
            if ('function' === typeof callback) {
                callback(r);
            }
        });
    }
    static getDataCodesLS(callback) {
        setTimeout(() => {
            chrome.storage.sync.get(['dataCodes'], (r) => { callback(JSON.parse(r.dataCodes)); });
        }, 1000);
    }
    static saveDataCodes(dataCodes) {
        const courseTmp = dataCodes.course;
        const authors = courseTmp.authors;
        const course = Store.createCourse(courseTmp.title, courseTmp.slug, courseTmp.duration, courseTmp.sourceCodeRepository, courseTmp.description);
        const sections = dataCodes.sections;
        sections.map((sectionTmp) => {
            const section = Store.createSection(course.ID, sectionTmp.title);
            sectionTmp.items.map((tocTmp) => {
                tocTmp.url = `https://www.linkedin.com/learning/${course.slug}/${tocTmp.slug}`;
                const toc = Store.createToc(section.ID, tocTmp.title, tocTmp.slug, tocTmp.url, tocTmp.duration);
            });
        });
        Store.createAuthorList(course.slug, authors);
        Store.setAppState(1, course.slug);
        return course;
    }
    static prepareAppStorage() {
        Store.init();
        Store.initApp('');
    }
    static initApp(courseSlug) {
        const db = Store.db();
        const version = '1.0';
        const apps = db.queryAll('app', { version });
        let app = null;
        if (apps.length === 0) {
            const state = 0;
            const ID = 0;
            const lastCourseSlug = courseSlug;
            app = { ID, state, version, lastCourseSlug };
            app.ID = db.insert('app', app);
            db.commit();
        }
        else {
            app = apps[0];
            if (app.lastCourseSlug !== courseSlug && courseSlug !== '') {
                app.lastCourseSlug = courseSlug;
                db.update('app', { version }, (row) => {
                    row.lastCourseSlug = courseSlug;
                    return row;
                });
                db.commit();
            }
        }
        return app;
    }
    static getAppState() {
        const db = Store.db();
        //let appState = 0;
        const version = '1.0';
        const apps = db.queryAll('app', { version });
        let app = null;
        if (apps.length > 0) {
            app = apps[0];
            //appState = app.state;
        }
        return app;
    }
    static setAppState(state, courseSlug) {
        const db = Store.db();
        const version = '1.0';
        const apps = db.queryAll('app', { version });
        if (apps.length > 0) {
            db.update('app', { version }, (row) => {
                row.state = state;
                if (typeof courseSlug !== 'undefined') {
                    row.lastCourseSlug = courseSlug;
                }
                return row;
            });
            db.commit();
        }
    }
    static getAppInfo() {
        const db = Store.db();
        const version = '1.0';
        const apps = db.queryAll('app', { version });
        if (apps.length > 0) {
            return apps[0];
        }
        return null;
    }
}
Store.init();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Store);


/***/ }),

/***/ "./src/popup/popup.ts":
/*!****************************!*\
  !*** ./src/popup/popup.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _Popup_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Popup.vue */ "./src/popup/Popup.vue");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_js_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap_dist_js_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var fontawesome_4_7_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fontawesome-4.7/css/font-awesome.min.css */ "./node_modules/fontawesome-4.7/css/font-awesome.min.css");
/* harmony import */ var _styles_popup_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/popup.css */ "./src/styles/popup.css");
/* harmony import */ var highlight_js_styles_default_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! highlight.js/styles/default.css */ "./node_modules/highlight.js/styles/default.css");
/* harmony import */ var highlight_js_styles_androidstudio_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! highlight.js/styles/androidstudio.css */ "./node_modules/highlight.js/styles/androidstudio.css");
/* harmony import */ var highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! highlight.js/lib/core */ "./node_modules/highlight.js/es/core.js");
/* harmony import */ var highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! highlight.js/lib/languages/javascript */ "./node_modules/highlight.js/es/languages/javascript.js");
/* harmony import */ var _highlightjs_vue_plugin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @highlightjs/vue-plugin */ "./node_modules/@highlightjs/vue-plugin/dist/highlightjs-vue.esm.min.js");











highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_8__["default"].registerLanguage('javascript', highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_9__["default"]);
const app = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_Popup_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);
app.use(_highlightjs_vue_plugin__WEBPACK_IMPORTED_MODULE_10__["default"]);
app.mount('#popup');


/***/ }),

/***/ "./src/popup/Popup.vue":
/*!*****************************!*\
  !*** ./src/popup/Popup.vue ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Popup_vue_vue_type_template_id_5f4bbcc0_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.vue?vue&type=template&id=5f4bbcc0&scoped=true&ts=true */ "./src/popup/Popup.vue?vue&type=template&id=5f4bbcc0&scoped=true&ts=true");
/* harmony import */ var _Popup_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Popup.vue?vue&type=script&lang=ts */ "./src/popup/Popup.vue?vue&type=script&lang=ts");
/* harmony import */ var _Popup_vue_vue_type_style_index_0_id_5f4bbcc0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Popup.vue?vue&type=style&index=0&id=5f4bbcc0&scoped=true&lang=css */ "./src/popup/Popup.vue?vue&type=style&index=0&id=5f4bbcc0&scoped=true&lang=css");
/* harmony import */ var C_Users_Ratu_Desktop_LLFetcher_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Users_Ratu_Desktop_LLFetcher_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Popup_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Popup_vue_vue_type_template_id_5f4bbcc0_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-5f4bbcc0"],['__file',"src/popup/Popup.vue"]])
/* hot reload */
if (true) {
  __exports__.__hmrId = "5f4bbcc0"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('5f4bbcc0', __exports__)) {
    api.reload('5f4bbcc0', __exports__)
  }
  
  module.hot.accept(/*! ./Popup.vue?vue&type=template&id=5f4bbcc0&scoped=true&ts=true */ "./src/popup/Popup.vue?vue&type=template&id=5f4bbcc0&scoped=true&ts=true", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _Popup_vue_vue_type_template_id_5f4bbcc0_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.vue?vue&type=template&id=5f4bbcc0&scoped=true&ts=true */ "./src/popup/Popup.vue?vue&type=template&id=5f4bbcc0&scoped=true&ts=true");
(() => {
    api.rerender('5f4bbcc0', _Popup_vue_vue_type_template_id_5f4bbcc0_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); })

}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/popup/components/CourseData.vue":
/*!*********************************************!*\
  !*** ./src/popup/components/CourseData.vue ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CourseData_vue_vue_type_template_id_3bb2619c_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CourseData.vue?vue&type=template&id=3bb2619c&scoped=true&ts=true */ "./src/popup/components/CourseData.vue?vue&type=template&id=3bb2619c&scoped=true&ts=true");
/* harmony import */ var _CourseData_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CourseData.vue?vue&type=script&lang=ts */ "./src/popup/components/CourseData.vue?vue&type=script&lang=ts");
/* harmony import */ var _CourseData_vue_vue_type_style_index_0_id_3bb2619c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CourseData.vue?vue&type=style&index=0&id=3bb2619c&scoped=true&lang=css */ "./src/popup/components/CourseData.vue?vue&type=style&index=0&id=3bb2619c&scoped=true&lang=css");
/* harmony import */ var C_Users_Ratu_Desktop_LLFetcher_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Users_Ratu_Desktop_LLFetcher_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_CourseData_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CourseData_vue_vue_type_template_id_3bb2619c_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-3bb2619c"],['__file',"src/popup/components/CourseData.vue"]])
/* hot reload */
if (true) {
  __exports__.__hmrId = "3bb2619c"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('3bb2619c', __exports__)) {
    api.reload('3bb2619c', __exports__)
  }
  
  module.hot.accept(/*! ./CourseData.vue?vue&type=template&id=3bb2619c&scoped=true&ts=true */ "./src/popup/components/CourseData.vue?vue&type=template&id=3bb2619c&scoped=true&ts=true", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _CourseData_vue_vue_type_template_id_3bb2619c_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CourseData.vue?vue&type=template&id=3bb2619c&scoped=true&ts=true */ "./src/popup/components/CourseData.vue?vue&type=template&id=3bb2619c&scoped=true&ts=true");
(() => {
    api.rerender('3bb2619c', _CourseData_vue_vue_type_template_id_3bb2619c_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); })

}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/popup/components/FetchButton.vue":
/*!**********************************************!*\
  !*** ./src/popup/components/FetchButton.vue ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FetchButton_vue_vue_type_template_id_bc2b9de2_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FetchButton.vue?vue&type=template&id=bc2b9de2&ts=true */ "./src/popup/components/FetchButton.vue?vue&type=template&id=bc2b9de2&ts=true");
/* harmony import */ var _FetchButton_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FetchButton.vue?vue&type=script&lang=ts */ "./src/popup/components/FetchButton.vue?vue&type=script&lang=ts");
/* harmony import */ var C_Users_Ratu_Desktop_LLFetcher_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_Ratu_Desktop_LLFetcher_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_FetchButton_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_FetchButton_vue_vue_type_template_id_bc2b9de2_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/popup/components/FetchButton.vue"]])
/* hot reload */
if (true) {
  __exports__.__hmrId = "bc2b9de2"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('bc2b9de2', __exports__)) {
    api.reload('bc2b9de2', __exports__)
  }
  
  module.hot.accept(/*! ./FetchButton.vue?vue&type=template&id=bc2b9de2&ts=true */ "./src/popup/components/FetchButton.vue?vue&type=template&id=bc2b9de2&ts=true", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _FetchButton_vue_vue_type_template_id_bc2b9de2_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FetchButton.vue?vue&type=template&id=bc2b9de2&ts=true */ "./src/popup/components/FetchButton.vue?vue&type=template&id=bc2b9de2&ts=true");
(() => {
    api.rerender('bc2b9de2', _FetchButton_vue_vue_type_template_id_bc2b9de2_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); })

}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/popup/components/FetchQueue.vue":
/*!*********************************************!*\
  !*** ./src/popup/components/FetchQueue.vue ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FetchQueue_vue_vue_type_template_id_18a8fe44_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FetchQueue.vue?vue&type=template&id=18a8fe44&scoped=true&ts=true */ "./src/popup/components/FetchQueue.vue?vue&type=template&id=18a8fe44&scoped=true&ts=true");
/* harmony import */ var _FetchQueue_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FetchQueue.vue?vue&type=script&lang=ts */ "./src/popup/components/FetchQueue.vue?vue&type=script&lang=ts");
/* harmony import */ var _FetchQueue_vue_vue_type_style_index_0_id_18a8fe44_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FetchQueue.vue?vue&type=style&index=0&id=18a8fe44&scoped=true&lang=css */ "./src/popup/components/FetchQueue.vue?vue&type=style&index=0&id=18a8fe44&scoped=true&lang=css");
/* harmony import */ var C_Users_Ratu_Desktop_LLFetcher_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Users_Ratu_Desktop_LLFetcher_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_FetchQueue_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_FetchQueue_vue_vue_type_template_id_18a8fe44_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-18a8fe44"],['__file',"src/popup/components/FetchQueue.vue"]])
/* hot reload */
if (true) {
  __exports__.__hmrId = "18a8fe44"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('18a8fe44', __exports__)) {
    api.reload('18a8fe44', __exports__)
  }
  
  module.hot.accept(/*! ./FetchQueue.vue?vue&type=template&id=18a8fe44&scoped=true&ts=true */ "./src/popup/components/FetchQueue.vue?vue&type=template&id=18a8fe44&scoped=true&ts=true", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _FetchQueue_vue_vue_type_template_id_18a8fe44_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FetchQueue.vue?vue&type=template&id=18a8fe44&scoped=true&ts=true */ "./src/popup/components/FetchQueue.vue?vue&type=template&id=18a8fe44&scoped=true&ts=true");
(() => {
    api.rerender('18a8fe44', _FetchQueue_vue_vue_type_template_id_18a8fe44_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); })

}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/popup/components/FetchQueueBar.vue":
/*!************************************************!*\
  !*** ./src/popup/components/FetchQueueBar.vue ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FetchQueueBar_vue_vue_type_template_id_905aec42_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FetchQueueBar.vue?vue&type=template&id=905aec42&scoped=true&ts=true */ "./src/popup/components/FetchQueueBar.vue?vue&type=template&id=905aec42&scoped=true&ts=true");
/* harmony import */ var _FetchQueueBar_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FetchQueueBar.vue?vue&type=script&lang=ts */ "./src/popup/components/FetchQueueBar.vue?vue&type=script&lang=ts");
/* harmony import */ var _FetchQueueBar_vue_vue_type_style_index_0_id_905aec42_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FetchQueueBar.vue?vue&type=style&index=0&id=905aec42&scoped=true&lang=css */ "./src/popup/components/FetchQueueBar.vue?vue&type=style&index=0&id=905aec42&scoped=true&lang=css");
/* harmony import */ var C_Users_Ratu_Desktop_LLFetcher_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Users_Ratu_Desktop_LLFetcher_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_FetchQueueBar_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_FetchQueueBar_vue_vue_type_template_id_905aec42_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-905aec42"],['__file',"src/popup/components/FetchQueueBar.vue"]])
/* hot reload */
if (true) {
  __exports__.__hmrId = "905aec42"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('905aec42', __exports__)) {
    api.reload('905aec42', __exports__)
  }
  
  module.hot.accept(/*! ./FetchQueueBar.vue?vue&type=template&id=905aec42&scoped=true&ts=true */ "./src/popup/components/FetchQueueBar.vue?vue&type=template&id=905aec42&scoped=true&ts=true", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _FetchQueueBar_vue_vue_type_template_id_905aec42_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FetchQueueBar.vue?vue&type=template&id=905aec42&scoped=true&ts=true */ "./src/popup/components/FetchQueueBar.vue?vue&type=template&id=905aec42&scoped=true&ts=true");
(() => {
    api.rerender('905aec42', _FetchQueueBar_vue_vue_type_template_id_905aec42_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); })

}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/popup/components/FetchSectionQueue.vue":
/*!****************************************************!*\
  !*** ./src/popup/components/FetchSectionQueue.vue ***!
  \****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FetchSectionQueue_vue_vue_type_template_id_6afda649_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FetchSectionQueue.vue?vue&type=template&id=6afda649&scoped=true&ts=true */ "./src/popup/components/FetchSectionQueue.vue?vue&type=template&id=6afda649&scoped=true&ts=true");
/* harmony import */ var _FetchSectionQueue_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FetchSectionQueue.vue?vue&type=script&lang=ts */ "./src/popup/components/FetchSectionQueue.vue?vue&type=script&lang=ts");
/* harmony import */ var _FetchSectionQueue_vue_vue_type_style_index_0_id_6afda649_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FetchSectionQueue.vue?vue&type=style&index=0&id=6afda649&scoped=true&lang=css */ "./src/popup/components/FetchSectionQueue.vue?vue&type=style&index=0&id=6afda649&scoped=true&lang=css");
/* harmony import */ var C_Users_Ratu_Desktop_LLFetcher_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Users_Ratu_Desktop_LLFetcher_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_FetchSectionQueue_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_FetchSectionQueue_vue_vue_type_template_id_6afda649_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-6afda649"],['__file',"src/popup/components/FetchSectionQueue.vue"]])
/* hot reload */
if (true) {
  __exports__.__hmrId = "6afda649"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('6afda649', __exports__)) {
    api.reload('6afda649', __exports__)
  }
  
  module.hot.accept(/*! ./FetchSectionQueue.vue?vue&type=template&id=6afda649&scoped=true&ts=true */ "./src/popup/components/FetchSectionQueue.vue?vue&type=template&id=6afda649&scoped=true&ts=true", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _FetchSectionQueue_vue_vue_type_template_id_6afda649_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FetchSectionQueue.vue?vue&type=template&id=6afda649&scoped=true&ts=true */ "./src/popup/components/FetchSectionQueue.vue?vue&type=template&id=6afda649&scoped=true&ts=true");
(() => {
    api.rerender('6afda649', _FetchSectionQueue_vue_vue_type_template_id_6afda649_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); })

}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/popup/components/LogBar.vue":
/*!*****************************************!*\
  !*** ./src/popup/components/LogBar.vue ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LogBar_vue_vue_type_template_id_5c8a287c_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LogBar.vue?vue&type=template&id=5c8a287c&scoped=true&ts=true */ "./src/popup/components/LogBar.vue?vue&type=template&id=5c8a287c&scoped=true&ts=true");
/* harmony import */ var _LogBar_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LogBar.vue?vue&type=script&lang=ts */ "./src/popup/components/LogBar.vue?vue&type=script&lang=ts");
/* harmony import */ var _LogBar_vue_vue_type_style_index_0_id_5c8a287c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LogBar.vue?vue&type=style&index=0&id=5c8a287c&scoped=true&lang=css */ "./src/popup/components/LogBar.vue?vue&type=style&index=0&id=5c8a287c&scoped=true&lang=css");
/* harmony import */ var C_Users_Ratu_Desktop_LLFetcher_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Users_Ratu_Desktop_LLFetcher_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_LogBar_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_LogBar_vue_vue_type_template_id_5c8a287c_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-5c8a287c"],['__file',"src/popup/components/LogBar.vue"]])
/* hot reload */
if (true) {
  __exports__.__hmrId = "5c8a287c"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('5c8a287c', __exports__)) {
    api.reload('5c8a287c', __exports__)
  }
  
  module.hot.accept(/*! ./LogBar.vue?vue&type=template&id=5c8a287c&scoped=true&ts=true */ "./src/popup/components/LogBar.vue?vue&type=template&id=5c8a287c&scoped=true&ts=true", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _LogBar_vue_vue_type_template_id_5c8a287c_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LogBar.vue?vue&type=template&id=5c8a287c&scoped=true&ts=true */ "./src/popup/components/LogBar.vue?vue&type=template&id=5c8a287c&scoped=true&ts=true");
(() => {
    api.rerender('5c8a287c', _LogBar_vue_vue_type_template_id_5c8a287c_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); })

}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/popup/components/PageNavigation.vue":
/*!*************************************************!*\
  !*** ./src/popup/components/PageNavigation.vue ***!
  \*************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PageNavigation_vue_vue_type_template_id_fbb75d60_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageNavigation.vue?vue&type=template&id=fbb75d60&ts=true */ "./src/popup/components/PageNavigation.vue?vue&type=template&id=fbb75d60&ts=true");
/* harmony import */ var _PageNavigation_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageNavigation.vue?vue&type=script&lang=ts */ "./src/popup/components/PageNavigation.vue?vue&type=script&lang=ts");
/* harmony import */ var C_Users_Ratu_Desktop_LLFetcher_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_Ratu_Desktop_LLFetcher_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_PageNavigation_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PageNavigation_vue_vue_type_template_id_fbb75d60_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/popup/components/PageNavigation.vue"]])
/* hot reload */
if (true) {
  __exports__.__hmrId = "fbb75d60"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('fbb75d60', __exports__)) {
    api.reload('fbb75d60', __exports__)
  }
  
  module.hot.accept(/*! ./PageNavigation.vue?vue&type=template&id=fbb75d60&ts=true */ "./src/popup/components/PageNavigation.vue?vue&type=template&id=fbb75d60&ts=true", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _PageNavigation_vue_vue_type_template_id_fbb75d60_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageNavigation.vue?vue&type=template&id=fbb75d60&ts=true */ "./src/popup/components/PageNavigation.vue?vue&type=template&id=fbb75d60&ts=true");
(() => {
    api.rerender('fbb75d60', _PageNavigation_vue_vue_type_template_id_fbb75d60_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); })

}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/popup/components/TocItem.vue":
/*!******************************************!*\
  !*** ./src/popup/components/TocItem.vue ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TocItem_vue_vue_type_template_id_3c3574fe_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TocItem.vue?vue&type=template&id=3c3574fe&scoped=true&ts=true */ "./src/popup/components/TocItem.vue?vue&type=template&id=3c3574fe&scoped=true&ts=true");
/* harmony import */ var _TocItem_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TocItem.vue?vue&type=script&lang=ts */ "./src/popup/components/TocItem.vue?vue&type=script&lang=ts");
/* harmony import */ var _TocItem_vue_vue_type_style_index_0_id_3c3574fe_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TocItem.vue?vue&type=style&index=0&id=3c3574fe&scoped=true&lang=css */ "./src/popup/components/TocItem.vue?vue&type=style&index=0&id=3c3574fe&scoped=true&lang=css");
/* harmony import */ var C_Users_Ratu_Desktop_LLFetcher_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Users_Ratu_Desktop_LLFetcher_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_TocItem_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_TocItem_vue_vue_type_template_id_3c3574fe_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-3c3574fe"],['__file',"src/popup/components/TocItem.vue"]])
/* hot reload */
if (true) {
  __exports__.__hmrId = "3c3574fe"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('3c3574fe', __exports__)) {
    api.reload('3c3574fe', __exports__)
  }
  
  module.hot.accept(/*! ./TocItem.vue?vue&type=template&id=3c3574fe&scoped=true&ts=true */ "./src/popup/components/TocItem.vue?vue&type=template&id=3c3574fe&scoped=true&ts=true", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _TocItem_vue_vue_type_template_id_3c3574fe_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TocItem.vue?vue&type=template&id=3c3574fe&scoped=true&ts=true */ "./src/popup/components/TocItem.vue?vue&type=template&id=3c3574fe&scoped=true&ts=true");
(() => {
    api.rerender('3c3574fe', _TocItem_vue_vue_type_template_id_3c3574fe_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); })

}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/popup/views/AboutPage.vue":
/*!***************************************!*\
  !*** ./src/popup/views/AboutPage.vue ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AboutPage_vue_vue_type_template_id_4230ffcf_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AboutPage.vue?vue&type=template&id=4230ffcf&ts=true */ "./src/popup/views/AboutPage.vue?vue&type=template&id=4230ffcf&ts=true");
/* harmony import */ var _AboutPage_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AboutPage.vue?vue&type=script&lang=ts */ "./src/popup/views/AboutPage.vue?vue&type=script&lang=ts");
/* harmony import */ var C_Users_Ratu_Desktop_LLFetcher_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_Ratu_Desktop_LLFetcher_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_AboutPage_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AboutPage_vue_vue_type_template_id_4230ffcf_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/popup/views/AboutPage.vue"]])
/* hot reload */
if (true) {
  __exports__.__hmrId = "4230ffcf"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('4230ffcf', __exports__)) {
    api.reload('4230ffcf', __exports__)
  }
  
  module.hot.accept(/*! ./AboutPage.vue?vue&type=template&id=4230ffcf&ts=true */ "./src/popup/views/AboutPage.vue?vue&type=template&id=4230ffcf&ts=true", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _AboutPage_vue_vue_type_template_id_4230ffcf_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AboutPage.vue?vue&type=template&id=4230ffcf&ts=true */ "./src/popup/views/AboutPage.vue?vue&type=template&id=4230ffcf&ts=true");
(() => {
    api.rerender('4230ffcf', _AboutPage_vue_vue_type_template_id_4230ffcf_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); })

}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/popup/views/CoursePage.vue":
/*!****************************************!*\
  !*** ./src/popup/views/CoursePage.vue ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CoursePage_vue_vue_type_template_id_6c17fec7_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CoursePage.vue?vue&type=template&id=6c17fec7&scoped=true&ts=true */ "./src/popup/views/CoursePage.vue?vue&type=template&id=6c17fec7&scoped=true&ts=true");
/* harmony import */ var _CoursePage_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CoursePage.vue?vue&type=script&lang=ts */ "./src/popup/views/CoursePage.vue?vue&type=script&lang=ts");
/* harmony import */ var _CoursePage_vue_vue_type_style_index_0_id_6c17fec7_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CoursePage.vue?vue&type=style&index=0&id=6c17fec7&scoped=true&lang=css */ "./src/popup/views/CoursePage.vue?vue&type=style&index=0&id=6c17fec7&scoped=true&lang=css");
/* harmony import */ var C_Users_Ratu_Desktop_LLFetcher_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Users_Ratu_Desktop_LLFetcher_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_CoursePage_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CoursePage_vue_vue_type_template_id_6c17fec7_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-6c17fec7"],['__file',"src/popup/views/CoursePage.vue"]])
/* hot reload */
if (true) {
  __exports__.__hmrId = "6c17fec7"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('6c17fec7', __exports__)) {
    api.reload('6c17fec7', __exports__)
  }
  
  module.hot.accept(/*! ./CoursePage.vue?vue&type=template&id=6c17fec7&scoped=true&ts=true */ "./src/popup/views/CoursePage.vue?vue&type=template&id=6c17fec7&scoped=true&ts=true", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _CoursePage_vue_vue_type_template_id_6c17fec7_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CoursePage.vue?vue&type=template&id=6c17fec7&scoped=true&ts=true */ "./src/popup/views/CoursePage.vue?vue&type=template&id=6c17fec7&scoped=true&ts=true");
(() => {
    api.rerender('6c17fec7', _CoursePage_vue_vue_type_template_id_6c17fec7_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); })

}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/popup/views/DownloadPage.vue":
/*!******************************************!*\
  !*** ./src/popup/views/DownloadPage.vue ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DownloadPage_vue_vue_type_template_id_7976c4f4_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DownloadPage.vue?vue&type=template&id=7976c4f4&ts=true */ "./src/popup/views/DownloadPage.vue?vue&type=template&id=7976c4f4&ts=true");
/* harmony import */ var _DownloadPage_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DownloadPage.vue?vue&type=script&lang=ts */ "./src/popup/views/DownloadPage.vue?vue&type=script&lang=ts");
/* harmony import */ var C_Users_Ratu_Desktop_LLFetcher_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_Ratu_Desktop_LLFetcher_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_DownloadPage_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_DownloadPage_vue_vue_type_template_id_7976c4f4_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/popup/views/DownloadPage.vue"]])
/* hot reload */
if (true) {
  __exports__.__hmrId = "7976c4f4"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('7976c4f4', __exports__)) {
    api.reload('7976c4f4', __exports__)
  }
  
  module.hot.accept(/*! ./DownloadPage.vue?vue&type=template&id=7976c4f4&ts=true */ "./src/popup/views/DownloadPage.vue?vue&type=template&id=7976c4f4&ts=true", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _DownloadPage_vue_vue_type_template_id_7976c4f4_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DownloadPage.vue?vue&type=template&id=7976c4f4&ts=true */ "./src/popup/views/DownloadPage.vue?vue&type=template&id=7976c4f4&ts=true");
(() => {
    api.rerender('7976c4f4', _DownloadPage_vue_vue_type_template_id_7976c4f4_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); })

}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/popup/views/HelpPage.vue":
/*!**************************************!*\
  !*** ./src/popup/views/HelpPage.vue ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HelpPage_vue_vue_type_template_id_0d5c1d2d_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HelpPage.vue?vue&type=template&id=0d5c1d2d&ts=true */ "./src/popup/views/HelpPage.vue?vue&type=template&id=0d5c1d2d&ts=true");
/* harmony import */ var _HelpPage_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HelpPage.vue?vue&type=script&lang=ts */ "./src/popup/views/HelpPage.vue?vue&type=script&lang=ts");
/* harmony import */ var C_Users_Ratu_Desktop_LLFetcher_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_Ratu_Desktop_LLFetcher_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_HelpPage_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_HelpPage_vue_vue_type_template_id_0d5c1d2d_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/popup/views/HelpPage.vue"]])
/* hot reload */
if (true) {
  __exports__.__hmrId = "0d5c1d2d"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('0d5c1d2d', __exports__)) {
    api.reload('0d5c1d2d', __exports__)
  }
  
  module.hot.accept(/*! ./HelpPage.vue?vue&type=template&id=0d5c1d2d&ts=true */ "./src/popup/views/HelpPage.vue?vue&type=template&id=0d5c1d2d&ts=true", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _HelpPage_vue_vue_type_template_id_0d5c1d2d_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HelpPage.vue?vue&type=template&id=0d5c1d2d&ts=true */ "./src/popup/views/HelpPage.vue?vue&type=template&id=0d5c1d2d&ts=true");
(() => {
    api.rerender('0d5c1d2d', _HelpPage_vue_vue_type_template_id_0d5c1d2d_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); })

}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/popup/views/HomePage.vue":
/*!**************************************!*\
  !*** ./src/popup/views/HomePage.vue ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HomePage_vue_vue_type_template_id_73a3c4cb_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomePage.vue?vue&type=template&id=73a3c4cb&ts=true */ "./src/popup/views/HomePage.vue?vue&type=template&id=73a3c4cb&ts=true");
/* harmony import */ var _HomePage_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomePage.vue?vue&type=script&lang=ts */ "./src/popup/views/HomePage.vue?vue&type=script&lang=ts");
/* harmony import */ var C_Users_Ratu_Desktop_LLFetcher_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_Ratu_Desktop_LLFetcher_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_HomePage_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_HomePage_vue_vue_type_template_id_73a3c4cb_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/popup/views/HomePage.vue"]])
/* hot reload */
if (true) {
  __exports__.__hmrId = "73a3c4cb"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('73a3c4cb', __exports__)) {
    api.reload('73a3c4cb', __exports__)
  }
  
  module.hot.accept(/*! ./HomePage.vue?vue&type=template&id=73a3c4cb&ts=true */ "./src/popup/views/HomePage.vue?vue&type=template&id=73a3c4cb&ts=true", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _HomePage_vue_vue_type_template_id_73a3c4cb_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomePage.vue?vue&type=template&id=73a3c4cb&ts=true */ "./src/popup/views/HomePage.vue?vue&type=template&id=73a3c4cb&ts=true");
(() => {
    api.rerender('73a3c4cb', _HomePage_vue_vue_type_template_id_73a3c4cb_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); })

}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/popup/views/LoadingPage.vue":
/*!*****************************************!*\
  !*** ./src/popup/views/LoadingPage.vue ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LoadingPage_vue_vue_type_template_id_2c6dabbe_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoadingPage.vue?vue&type=template&id=2c6dabbe&ts=true */ "./src/popup/views/LoadingPage.vue?vue&type=template&id=2c6dabbe&ts=true");
/* harmony import */ var _LoadingPage_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoadingPage.vue?vue&type=script&lang=ts */ "./src/popup/views/LoadingPage.vue?vue&type=script&lang=ts");
/* harmony import */ var C_Users_Ratu_Desktop_LLFetcher_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_Ratu_Desktop_LLFetcher_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_LoadingPage_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_LoadingPage_vue_vue_type_template_id_2c6dabbe_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/popup/views/LoadingPage.vue"]])
/* hot reload */
if (true) {
  __exports__.__hmrId = "2c6dabbe"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('2c6dabbe', __exports__)) {
    api.reload('2c6dabbe', __exports__)
  }
  
  module.hot.accept(/*! ./LoadingPage.vue?vue&type=template&id=2c6dabbe&ts=true */ "./src/popup/views/LoadingPage.vue?vue&type=template&id=2c6dabbe&ts=true", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _LoadingPage_vue_vue_type_template_id_2c6dabbe_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoadingPage.vue?vue&type=template&id=2c6dabbe&ts=true */ "./src/popup/views/LoadingPage.vue?vue&type=template&id=2c6dabbe&ts=true");
(() => {
    api.rerender('2c6dabbe', _LoadingPage_vue_vue_type_template_id_2c6dabbe_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); })

}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/popup/views/WelcomePage.vue":
/*!*****************************************!*\
  !*** ./src/popup/views/WelcomePage.vue ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _WelcomePage_vue_vue_type_template_id_62aa4038_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WelcomePage.vue?vue&type=template&id=62aa4038&scoped=true&ts=true */ "./src/popup/views/WelcomePage.vue?vue&type=template&id=62aa4038&scoped=true&ts=true");
/* harmony import */ var _WelcomePage_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WelcomePage.vue?vue&type=script&lang=ts */ "./src/popup/views/WelcomePage.vue?vue&type=script&lang=ts");
/* harmony import */ var _WelcomePage_vue_vue_type_style_index_0_id_62aa4038_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WelcomePage.vue?vue&type=style&index=0&id=62aa4038&scoped=true&lang=css */ "./src/popup/views/WelcomePage.vue?vue&type=style&index=0&id=62aa4038&scoped=true&lang=css");
/* harmony import */ var C_Users_Ratu_Desktop_LLFetcher_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Users_Ratu_Desktop_LLFetcher_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_WelcomePage_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_WelcomePage_vue_vue_type_template_id_62aa4038_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-62aa4038"],['__file',"src/popup/views/WelcomePage.vue"]])
/* hot reload */
if (true) {
  __exports__.__hmrId = "62aa4038"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('62aa4038', __exports__)) {
    api.reload('62aa4038', __exports__)
  }
  
  module.hot.accept(/*! ./WelcomePage.vue?vue&type=template&id=62aa4038&scoped=true&ts=true */ "./src/popup/views/WelcomePage.vue?vue&type=template&id=62aa4038&scoped=true&ts=true", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _WelcomePage_vue_vue_type_template_id_62aa4038_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WelcomePage.vue?vue&type=template&id=62aa4038&scoped=true&ts=true */ "./src/popup/views/WelcomePage.vue?vue&type=template&id=62aa4038&scoped=true&ts=true");
(() => {
    api.rerender('62aa4038', _WelcomePage_vue_vue_type_template_id_62aa4038_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); })

}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/popup/Popup.vue?vue&type=style&index=0&id=5f4bbcc0&scoped=true&lang=css":
/*!*************************************************************************************!*\
  !*** ./src/popup/Popup.vue?vue&type=style&index=0&id=5f4bbcc0&scoped=true&lang=css ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_Popup_vue_vue_type_style_index_0_id_5f4bbcc0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./Popup.vue?vue&type=style&index=0&id=5f4bbcc0&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/Popup.vue?vue&type=style&index=0&id=5f4bbcc0&scoped=true&lang=css");


/***/ }),

/***/ "./src/popup/components/CourseData.vue?vue&type=style&index=0&id=3bb2619c&scoped=true&lang=css":
/*!*****************************************************************************************************!*\
  !*** ./src/popup/components/CourseData.vue?vue&type=style&index=0&id=3bb2619c&scoped=true&lang=css ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_CourseData_vue_vue_type_style_index_0_id_3bb2619c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./CourseData.vue?vue&type=style&index=0&id=3bb2619c&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/CourseData.vue?vue&type=style&index=0&id=3bb2619c&scoped=true&lang=css");


/***/ }),

/***/ "./src/popup/components/FetchQueue.vue?vue&type=style&index=0&id=18a8fe44&scoped=true&lang=css":
/*!*****************************************************************************************************!*\
  !*** ./src/popup/components/FetchQueue.vue?vue&type=style&index=0&id=18a8fe44&scoped=true&lang=css ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchQueue_vue_vue_type_style_index_0_id_18a8fe44_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./FetchQueue.vue?vue&type=style&index=0&id=18a8fe44&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/FetchQueue.vue?vue&type=style&index=0&id=18a8fe44&scoped=true&lang=css");


/***/ }),

/***/ "./src/popup/components/FetchQueueBar.vue?vue&type=style&index=0&id=905aec42&scoped=true&lang=css":
/*!********************************************************************************************************!*\
  !*** ./src/popup/components/FetchQueueBar.vue?vue&type=style&index=0&id=905aec42&scoped=true&lang=css ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchQueueBar_vue_vue_type_style_index_0_id_905aec42_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./FetchQueueBar.vue?vue&type=style&index=0&id=905aec42&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/FetchQueueBar.vue?vue&type=style&index=0&id=905aec42&scoped=true&lang=css");


/***/ }),

/***/ "./src/popup/components/FetchSectionQueue.vue?vue&type=style&index=0&id=6afda649&scoped=true&lang=css":
/*!************************************************************************************************************!*\
  !*** ./src/popup/components/FetchSectionQueue.vue?vue&type=style&index=0&id=6afda649&scoped=true&lang=css ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchSectionQueue_vue_vue_type_style_index_0_id_6afda649_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./FetchSectionQueue.vue?vue&type=style&index=0&id=6afda649&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/FetchSectionQueue.vue?vue&type=style&index=0&id=6afda649&scoped=true&lang=css");


/***/ }),

/***/ "./src/popup/components/LogBar.vue?vue&type=style&index=0&id=5c8a287c&scoped=true&lang=css":
/*!*************************************************************************************************!*\
  !*** ./src/popup/components/LogBar.vue?vue&type=style&index=0&id=5c8a287c&scoped=true&lang=css ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_LogBar_vue_vue_type_style_index_0_id_5c8a287c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./LogBar.vue?vue&type=style&index=0&id=5c8a287c&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/LogBar.vue?vue&type=style&index=0&id=5c8a287c&scoped=true&lang=css");


/***/ }),

/***/ "./src/popup/components/TocItem.vue?vue&type=style&index=0&id=3c3574fe&scoped=true&lang=css":
/*!**************************************************************************************************!*\
  !*** ./src/popup/components/TocItem.vue?vue&type=style&index=0&id=3c3574fe&scoped=true&lang=css ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_TocItem_vue_vue_type_style_index_0_id_3c3574fe_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./TocItem.vue?vue&type=style&index=0&id=3c3574fe&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/TocItem.vue?vue&type=style&index=0&id=3c3574fe&scoped=true&lang=css");


/***/ }),

/***/ "./src/popup/views/CoursePage.vue?vue&type=style&index=0&id=6c17fec7&scoped=true&lang=css":
/*!************************************************************************************************!*\
  !*** ./src/popup/views/CoursePage.vue?vue&type=style&index=0&id=6c17fec7&scoped=true&lang=css ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_CoursePage_vue_vue_type_style_index_0_id_6c17fec7_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./CoursePage.vue?vue&type=style&index=0&id=6c17fec7&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/CoursePage.vue?vue&type=style&index=0&id=6c17fec7&scoped=true&lang=css");


/***/ }),

/***/ "./src/popup/views/WelcomePage.vue?vue&type=style&index=0&id=62aa4038&scoped=true&lang=css":
/*!*************************************************************************************************!*\
  !*** ./src/popup/views/WelcomePage.vue?vue&type=style&index=0&id=62aa4038&scoped=true&lang=css ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_WelcomePage_vue_vue_type_style_index_0_id_62aa4038_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./WelcomePage.vue?vue&type=style&index=0&id=62aa4038&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/WelcomePage.vue?vue&type=style&index=0&id=62aa4038&scoped=true&lang=css");


/***/ }),

/***/ "./src/popup/Popup.vue?vue&type=script&lang=ts":
/*!*****************************************************!*\
  !*** ./src/popup/Popup.vue?vue&type=script&lang=ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_Popup_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_Popup_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./Popup.vue?vue&type=script&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/Popup.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./src/popup/components/CourseData.vue?vue&type=script&lang=ts":
/*!*********************************************************************!*\
  !*** ./src/popup/components/CourseData.vue?vue&type=script&lang=ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_CourseData_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_CourseData_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./CourseData.vue?vue&type=script&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/CourseData.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./src/popup/components/FetchButton.vue?vue&type=script&lang=ts":
/*!**********************************************************************!*\
  !*** ./src/popup/components/FetchButton.vue?vue&type=script&lang=ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchButton_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchButton_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./FetchButton.vue?vue&type=script&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/FetchButton.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./src/popup/components/FetchQueue.vue?vue&type=script&lang=ts":
/*!*********************************************************************!*\
  !*** ./src/popup/components/FetchQueue.vue?vue&type=script&lang=ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchQueue_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchQueue_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./FetchQueue.vue?vue&type=script&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/FetchQueue.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./src/popup/components/FetchQueueBar.vue?vue&type=script&lang=ts":
/*!************************************************************************!*\
  !*** ./src/popup/components/FetchQueueBar.vue?vue&type=script&lang=ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchQueueBar_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchQueueBar_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./FetchQueueBar.vue?vue&type=script&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/FetchQueueBar.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./src/popup/components/FetchSectionQueue.vue?vue&type=script&lang=ts":
/*!****************************************************************************!*\
  !*** ./src/popup/components/FetchSectionQueue.vue?vue&type=script&lang=ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchSectionQueue_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchSectionQueue_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./FetchSectionQueue.vue?vue&type=script&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/FetchSectionQueue.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./src/popup/components/LogBar.vue?vue&type=script&lang=ts":
/*!*****************************************************************!*\
  !*** ./src/popup/components/LogBar.vue?vue&type=script&lang=ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_LogBar_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_LogBar_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./LogBar.vue?vue&type=script&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/LogBar.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./src/popup/components/PageNavigation.vue?vue&type=script&lang=ts":
/*!*************************************************************************!*\
  !*** ./src/popup/components/PageNavigation.vue?vue&type=script&lang=ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_PageNavigation_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_PageNavigation_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./PageNavigation.vue?vue&type=script&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/PageNavigation.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./src/popup/components/TocItem.vue?vue&type=script&lang=ts":
/*!******************************************************************!*\
  !*** ./src/popup/components/TocItem.vue?vue&type=script&lang=ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_TocItem_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_TocItem_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./TocItem.vue?vue&type=script&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/TocItem.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./src/popup/views/AboutPage.vue?vue&type=script&lang=ts":
/*!***************************************************************!*\
  !*** ./src/popup/views/AboutPage.vue?vue&type=script&lang=ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_AboutPage_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_AboutPage_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./AboutPage.vue?vue&type=script&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/AboutPage.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./src/popup/views/CoursePage.vue?vue&type=script&lang=ts":
/*!****************************************************************!*\
  !*** ./src/popup/views/CoursePage.vue?vue&type=script&lang=ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_CoursePage_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_CoursePage_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./CoursePage.vue?vue&type=script&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/CoursePage.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./src/popup/views/DownloadPage.vue?vue&type=script&lang=ts":
/*!******************************************************************!*\
  !*** ./src/popup/views/DownloadPage.vue?vue&type=script&lang=ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_DownloadPage_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_DownloadPage_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./DownloadPage.vue?vue&type=script&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/DownloadPage.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./src/popup/views/HelpPage.vue?vue&type=script&lang=ts":
/*!**************************************************************!*\
  !*** ./src/popup/views/HelpPage.vue?vue&type=script&lang=ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_HelpPage_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_HelpPage_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./HelpPage.vue?vue&type=script&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/HelpPage.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./src/popup/views/HomePage.vue?vue&type=script&lang=ts":
/*!**************************************************************!*\
  !*** ./src/popup/views/HomePage.vue?vue&type=script&lang=ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_HomePage_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_HomePage_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./HomePage.vue?vue&type=script&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/HomePage.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./src/popup/views/LoadingPage.vue?vue&type=script&lang=ts":
/*!*****************************************************************!*\
  !*** ./src/popup/views/LoadingPage.vue?vue&type=script&lang=ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_LoadingPage_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_LoadingPage_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./LoadingPage.vue?vue&type=script&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/LoadingPage.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./src/popup/views/WelcomePage.vue?vue&type=script&lang=ts":
/*!*****************************************************************!*\
  !*** ./src/popup/views/WelcomePage.vue?vue&type=script&lang=ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_WelcomePage_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_WelcomePage_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./WelcomePage.vue?vue&type=script&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/WelcomePage.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./src/popup/Popup.vue?vue&type=template&id=5f4bbcc0&scoped=true&ts=true":
/*!*******************************************************************************!*\
  !*** ./src/popup/Popup.vue?vue&type=template&id=5f4bbcc0&scoped=true&ts=true ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_Popup_vue_vue_type_template_id_5f4bbcc0_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_Popup_vue_vue_type_template_id_5f4bbcc0_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./Popup.vue?vue&type=template&id=5f4bbcc0&scoped=true&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/Popup.vue?vue&type=template&id=5f4bbcc0&scoped=true&ts=true");


/***/ }),

/***/ "./src/popup/components/CourseData.vue?vue&type=template&id=3bb2619c&scoped=true&ts=true":
/*!***********************************************************************************************!*\
  !*** ./src/popup/components/CourseData.vue?vue&type=template&id=3bb2619c&scoped=true&ts=true ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_CourseData_vue_vue_type_template_id_3bb2619c_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_CourseData_vue_vue_type_template_id_3bb2619c_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./CourseData.vue?vue&type=template&id=3bb2619c&scoped=true&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/CourseData.vue?vue&type=template&id=3bb2619c&scoped=true&ts=true");


/***/ }),

/***/ "./src/popup/components/FetchButton.vue?vue&type=template&id=bc2b9de2&ts=true":
/*!************************************************************************************!*\
  !*** ./src/popup/components/FetchButton.vue?vue&type=template&id=bc2b9de2&ts=true ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchButton_vue_vue_type_template_id_bc2b9de2_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchButton_vue_vue_type_template_id_bc2b9de2_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./FetchButton.vue?vue&type=template&id=bc2b9de2&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/FetchButton.vue?vue&type=template&id=bc2b9de2&ts=true");


/***/ }),

/***/ "./src/popup/components/FetchQueue.vue?vue&type=template&id=18a8fe44&scoped=true&ts=true":
/*!***********************************************************************************************!*\
  !*** ./src/popup/components/FetchQueue.vue?vue&type=template&id=18a8fe44&scoped=true&ts=true ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchQueue_vue_vue_type_template_id_18a8fe44_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchQueue_vue_vue_type_template_id_18a8fe44_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./FetchQueue.vue?vue&type=template&id=18a8fe44&scoped=true&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/FetchQueue.vue?vue&type=template&id=18a8fe44&scoped=true&ts=true");


/***/ }),

/***/ "./src/popup/components/FetchQueueBar.vue?vue&type=template&id=905aec42&scoped=true&ts=true":
/*!**************************************************************************************************!*\
  !*** ./src/popup/components/FetchQueueBar.vue?vue&type=template&id=905aec42&scoped=true&ts=true ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchQueueBar_vue_vue_type_template_id_905aec42_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchQueueBar_vue_vue_type_template_id_905aec42_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./FetchQueueBar.vue?vue&type=template&id=905aec42&scoped=true&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/FetchQueueBar.vue?vue&type=template&id=905aec42&scoped=true&ts=true");


/***/ }),

/***/ "./src/popup/components/FetchSectionQueue.vue?vue&type=template&id=6afda649&scoped=true&ts=true":
/*!******************************************************************************************************!*\
  !*** ./src/popup/components/FetchSectionQueue.vue?vue&type=template&id=6afda649&scoped=true&ts=true ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchSectionQueue_vue_vue_type_template_id_6afda649_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_FetchSectionQueue_vue_vue_type_template_id_6afda649_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./FetchSectionQueue.vue?vue&type=template&id=6afda649&scoped=true&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/FetchSectionQueue.vue?vue&type=template&id=6afda649&scoped=true&ts=true");


/***/ }),

/***/ "./src/popup/components/LogBar.vue?vue&type=template&id=5c8a287c&scoped=true&ts=true":
/*!*******************************************************************************************!*\
  !*** ./src/popup/components/LogBar.vue?vue&type=template&id=5c8a287c&scoped=true&ts=true ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_LogBar_vue_vue_type_template_id_5c8a287c_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_LogBar_vue_vue_type_template_id_5c8a287c_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./LogBar.vue?vue&type=template&id=5c8a287c&scoped=true&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/LogBar.vue?vue&type=template&id=5c8a287c&scoped=true&ts=true");


/***/ }),

/***/ "./src/popup/components/PageNavigation.vue?vue&type=template&id=fbb75d60&ts=true":
/*!***************************************************************************************!*\
  !*** ./src/popup/components/PageNavigation.vue?vue&type=template&id=fbb75d60&ts=true ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_PageNavigation_vue_vue_type_template_id_fbb75d60_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_PageNavigation_vue_vue_type_template_id_fbb75d60_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./PageNavigation.vue?vue&type=template&id=fbb75d60&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/PageNavigation.vue?vue&type=template&id=fbb75d60&ts=true");


/***/ }),

/***/ "./src/popup/components/TocItem.vue?vue&type=template&id=3c3574fe&scoped=true&ts=true":
/*!********************************************************************************************!*\
  !*** ./src/popup/components/TocItem.vue?vue&type=template&id=3c3574fe&scoped=true&ts=true ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_TocItem_vue_vue_type_template_id_3c3574fe_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_TocItem_vue_vue_type_template_id_3c3574fe_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./TocItem.vue?vue&type=template&id=3c3574fe&scoped=true&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/components/TocItem.vue?vue&type=template&id=3c3574fe&scoped=true&ts=true");


/***/ }),

/***/ "./src/popup/views/AboutPage.vue?vue&type=template&id=4230ffcf&ts=true":
/*!*****************************************************************************!*\
  !*** ./src/popup/views/AboutPage.vue?vue&type=template&id=4230ffcf&ts=true ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_AboutPage_vue_vue_type_template_id_4230ffcf_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_AboutPage_vue_vue_type_template_id_4230ffcf_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./AboutPage.vue?vue&type=template&id=4230ffcf&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/AboutPage.vue?vue&type=template&id=4230ffcf&ts=true");


/***/ }),

/***/ "./src/popup/views/CoursePage.vue?vue&type=template&id=6c17fec7&scoped=true&ts=true":
/*!******************************************************************************************!*\
  !*** ./src/popup/views/CoursePage.vue?vue&type=template&id=6c17fec7&scoped=true&ts=true ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_CoursePage_vue_vue_type_template_id_6c17fec7_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_CoursePage_vue_vue_type_template_id_6c17fec7_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./CoursePage.vue?vue&type=template&id=6c17fec7&scoped=true&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/CoursePage.vue?vue&type=template&id=6c17fec7&scoped=true&ts=true");


/***/ }),

/***/ "./src/popup/views/DownloadPage.vue?vue&type=template&id=7976c4f4&ts=true":
/*!********************************************************************************!*\
  !*** ./src/popup/views/DownloadPage.vue?vue&type=template&id=7976c4f4&ts=true ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_DownloadPage_vue_vue_type_template_id_7976c4f4_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_DownloadPage_vue_vue_type_template_id_7976c4f4_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./DownloadPage.vue?vue&type=template&id=7976c4f4&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/DownloadPage.vue?vue&type=template&id=7976c4f4&ts=true");


/***/ }),

/***/ "./src/popup/views/HelpPage.vue?vue&type=template&id=0d5c1d2d&ts=true":
/*!****************************************************************************!*\
  !*** ./src/popup/views/HelpPage.vue?vue&type=template&id=0d5c1d2d&ts=true ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_HelpPage_vue_vue_type_template_id_0d5c1d2d_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_HelpPage_vue_vue_type_template_id_0d5c1d2d_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./HelpPage.vue?vue&type=template&id=0d5c1d2d&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/HelpPage.vue?vue&type=template&id=0d5c1d2d&ts=true");


/***/ }),

/***/ "./src/popup/views/HomePage.vue?vue&type=template&id=73a3c4cb&ts=true":
/*!****************************************************************************!*\
  !*** ./src/popup/views/HomePage.vue?vue&type=template&id=73a3c4cb&ts=true ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_HomePage_vue_vue_type_template_id_73a3c4cb_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_HomePage_vue_vue_type_template_id_73a3c4cb_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./HomePage.vue?vue&type=template&id=73a3c4cb&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/HomePage.vue?vue&type=template&id=73a3c4cb&ts=true");


/***/ }),

/***/ "./src/popup/views/LoadingPage.vue?vue&type=template&id=2c6dabbe&ts=true":
/*!*******************************************************************************!*\
  !*** ./src/popup/views/LoadingPage.vue?vue&type=template&id=2c6dabbe&ts=true ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_LoadingPage_vue_vue_type_template_id_2c6dabbe_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_LoadingPage_vue_vue_type_template_id_2c6dabbe_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./LoadingPage.vue?vue&type=template&id=2c6dabbe&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/LoadingPage.vue?vue&type=template&id=2c6dabbe&ts=true");


/***/ }),

/***/ "./src/popup/views/WelcomePage.vue?vue&type=template&id=62aa4038&scoped=true&ts=true":
/*!*******************************************************************************************!*\
  !*** ./src/popup/views/WelcomePage.vue?vue&type=template&id=62aa4038&scoped=true&ts=true ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_WelcomePage_vue_vue_type_template_id_62aa4038_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_WelcomePage_vue_vue_type_template_id_62aa4038_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./WelcomePage.vue?vue&type=template&id=62aa4038&scoped=true&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/WelcomePage.vue?vue&type=template&id=62aa4038&scoped=true&ts=true");


/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e":
/*!******************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e":
/*!*********************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e ***!
  \*********************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e":
/*!******************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e":
/*!***********************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e ***!
  \***********************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%230c63e4%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%230c63e4%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%230c63e4%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23212529%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23212529%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23212529%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%280, 0, 0, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%280, 0, 0, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%280, 0, 0, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("popup." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("1dd2d74115dbc6baa21f")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "llfetcher-ts:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			};
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"popup": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatellfetcher_ts"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkllfetcher_ts"] = self["webpackChunkllfetcher_ts"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_bootstrap_dist_js_bootstrap_js-node_modules_jquery_dist_jquery_js-node_m-d7d92b"], () => (__webpack_require__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=9000&pathname=%2Fws&logging=info&overlay=true&reconnect=10&hot=true&live-reload=true")))
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_bootstrap_dist_js_bootstrap_js-node_modules_jquery_dist_jquery_js-node_m-d7d92b"], () => (__webpack_require__("./node_modules/webpack/hot/dev-server.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_bootstrap_dist_js_bootstrap_js-node_modules_jquery_dist_jquery_js-node_m-d7d92b"], () => (__webpack_require__("./src/popup/popup.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxtQkFBbUIsMkJBQTJCO1dBQzlDO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBLGtCQUFrQixjQUFjO1dBQ2hDO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQSxjQUFjLE1BQU07V0FDcEI7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxjQUFjLGFBQWE7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtX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Q0Y7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1dDemhCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9saWJzL3V0aWxzLmpzIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC9Qb3B1cC52dWU/OGUwOSIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvY29tcG9uZW50cy9Db3Vyc2VEYXRhLnZ1ZT84NGU1Iiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC9jb21wb25lbnRzL0ZldGNoUXVldWUudnVlPzg1NGQiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL2NvbXBvbmVudHMvRmV0Y2hRdWV1ZUJhci52dWU/NmFmMiIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvY29tcG9uZW50cy9GZXRjaFNlY3Rpb25RdWV1ZS52dWU/MmM0YyIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvY29tcG9uZW50cy9Mb2dCYXIudnVlPzQzODkiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL2NvbXBvbmVudHMvVG9jSXRlbS52dWU/NDMzZCIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvdmlld3MvQ291cnNlUGFnZS52dWU/MzE3MiIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvdmlld3MvV2VsY29tZVBhZ2UudnVlP2FlZDkiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3N0eWxlcy9wb3B1cC5jc3MiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL1BvcHVwLnZ1ZT9iMjQ5Iiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC9jb21wb25lbnRzL0NvdXJzZURhdGEudnVlPzk2ZjAiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL2NvbXBvbmVudHMvRmV0Y2hRdWV1ZS52dWU/MGVhYyIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvY29tcG9uZW50cy9GZXRjaFF1ZXVlQmFyLnZ1ZT82MjBkIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC9jb21wb25lbnRzL0ZldGNoU2VjdGlvblF1ZXVlLnZ1ZT9lZDkzIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC9jb21wb25lbnRzL0xvZ0Jhci52dWU/NGZkZiIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvY29tcG9uZW50cy9Ub2NJdGVtLnZ1ZT9iYmExIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC92aWV3cy9Db3Vyc2VQYWdlLnZ1ZT9lMTQ5Iiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC92aWV3cy9XZWxjb21lUGFnZS52dWU/NzVhNSIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvc3R5bGVzL3BvcHVwLmNzcz81MWUwIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC9Qb3B1cC52dWU/Y2IxZiIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvY29tcG9uZW50cy9Db3Vyc2VEYXRhLnZ1ZT81NzU2Iiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC9jb21wb25lbnRzL0ZldGNoQnV0dG9uLnZ1ZT9mMTZkIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC9jb21wb25lbnRzL0ZldGNoUXVldWUudnVlPzI0MjUiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL2NvbXBvbmVudHMvRmV0Y2hRdWV1ZUJhci52dWU/YjNjYyIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvY29tcG9uZW50cy9GZXRjaFNlY3Rpb25RdWV1ZS52dWU/NWVkOCIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvY29tcG9uZW50cy9Mb2dCYXIudnVlPzBmMGUiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL2NvbXBvbmVudHMvUGFnZU5hdmlnYXRpb24udnVlPzIyM2QiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL2NvbXBvbmVudHMvVG9jSXRlbS52dWU/ZTdmMCIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvdmlld3MvQWJvdXRQYWdlLnZ1ZT8zNWEyIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC92aWV3cy9Db3Vyc2VQYWdlLnZ1ZT82ZmM4Iiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC92aWV3cy9Eb3dubG9hZFBhZ2UudnVlP2FhYjciLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL3ZpZXdzL0hlbHBQYWdlLnZ1ZT80NjgzIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC92aWV3cy9Ib21lUGFnZS52dWU/ZmY2ZiIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvdmlld3MvTG9hZGluZ1BhZ2UudnVlPzcxNjkiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL3ZpZXdzL1dlbGNvbWVQYWdlLnZ1ZT9mNjg4Iiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC9Qb3B1cC52dWU/MmQ3YyIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvY29tcG9uZW50cy9Db3Vyc2VEYXRhLnZ1ZT8xYjhmIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC9jb21wb25lbnRzL0ZldGNoQnV0dG9uLnZ1ZT9iMmE5Iiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC9jb21wb25lbnRzL0ZldGNoUXVldWUudnVlPzlhNzciLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL2NvbXBvbmVudHMvRmV0Y2hRdWV1ZUJhci52dWU/NGJjMCIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvY29tcG9uZW50cy9GZXRjaFNlY3Rpb25RdWV1ZS52dWU/ZGM4OCIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvY29tcG9uZW50cy9Mb2dCYXIudnVlP2Y0ZDEiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL2NvbXBvbmVudHMvUGFnZU5hdmlnYXRpb24udnVlP2ExNzgiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL2NvbXBvbmVudHMvVG9jSXRlbS52dWU/NDc3OCIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvdmlld3MvQWJvdXRQYWdlLnZ1ZT80YjU4Iiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC92aWV3cy9Db3Vyc2VQYWdlLnZ1ZT9mOTcwIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC92aWV3cy9Eb3dubG9hZFBhZ2UudnVlP2U2OTIiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL3ZpZXdzL0hlbHBQYWdlLnZ1ZT85Mjk3Iiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC92aWV3cy9Ib21lUGFnZS52dWU/YmE0NCIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvdmlld3MvTG9hZGluZ1BhZ2UudnVlP2MwZDUiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL3ZpZXdzL1dlbGNvbWVQYWdlLnZ1ZT8zYTkxIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9saWJzL3Byb3h5LnRzIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9saWJzL3N0b3JlLnRzIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC9wb3B1cC50cyIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvUG9wdXAudnVlIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC9jb21wb25lbnRzL0NvdXJzZURhdGEudnVlIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC9jb21wb25lbnRzL0ZldGNoQnV0dG9uLnZ1ZSIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvY29tcG9uZW50cy9GZXRjaFF1ZXVlLnZ1ZSIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvY29tcG9uZW50cy9GZXRjaFF1ZXVlQmFyLnZ1ZSIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvY29tcG9uZW50cy9GZXRjaFNlY3Rpb25RdWV1ZS52dWUiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL2NvbXBvbmVudHMvTG9nQmFyLnZ1ZSIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvY29tcG9uZW50cy9QYWdlTmF2aWdhdGlvbi52dWUiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL2NvbXBvbmVudHMvVG9jSXRlbS52dWUiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL3ZpZXdzL0Fib3V0UGFnZS52dWUiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL3ZpZXdzL0NvdXJzZVBhZ2UudnVlIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC92aWV3cy9Eb3dubG9hZFBhZ2UudnVlIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC92aWV3cy9IZWxwUGFnZS52dWUiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL3ZpZXdzL0hvbWVQYWdlLnZ1ZSIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvdmlld3MvTG9hZGluZ1BhZ2UudnVlIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC92aWV3cy9XZWxjb21lUGFnZS52dWUiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL1BvcHVwLnZ1ZT80YjA1Iiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC9jb21wb25lbnRzL0NvdXJzZURhdGEudnVlPzNiYjUiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL2NvbXBvbmVudHMvRmV0Y2hRdWV1ZS52dWU/NjNlNyIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvY29tcG9uZW50cy9GZXRjaFF1ZXVlQmFyLnZ1ZT9kMTkxIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC9jb21wb25lbnRzL0ZldGNoU2VjdGlvblF1ZXVlLnZ1ZT84MGNjIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC9jb21wb25lbnRzL0xvZ0Jhci52dWU/Y2E4YyIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvY29tcG9uZW50cy9Ub2NJdGVtLnZ1ZT9jZTYwIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC92aWV3cy9Db3Vyc2VQYWdlLnZ1ZT9kMzk5Iiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC92aWV3cy9XZWxjb21lUGFnZS52dWU/YTE4NSIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvUG9wdXAudnVlP2UwMTAiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL2NvbXBvbmVudHMvQ291cnNlRGF0YS52dWU/YmU3ZSIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvY29tcG9uZW50cy9GZXRjaEJ1dHRvbi52dWU/NTUxZiIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvY29tcG9uZW50cy9GZXRjaFF1ZXVlLnZ1ZT84NzcxIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC9jb21wb25lbnRzL0ZldGNoUXVldWVCYXIudnVlP2NhOTMiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL2NvbXBvbmVudHMvRmV0Y2hTZWN0aW9uUXVldWUudnVlP2ZmNDIiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL2NvbXBvbmVudHMvTG9nQmFyLnZ1ZT85M2M5Iiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC9jb21wb25lbnRzL1BhZ2VOYXZpZ2F0aW9uLnZ1ZT8yMWQxIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC9jb21wb25lbnRzL1RvY0l0ZW0udnVlP2YwZjciLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL3ZpZXdzL0Fib3V0UGFnZS52dWU/NWY3YiIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvdmlld3MvQ291cnNlUGFnZS52dWU/ZWU3NiIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvdmlld3MvRG93bmxvYWRQYWdlLnZ1ZT9lMGFiIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC92aWV3cy9IZWxwUGFnZS52dWU/YjFkZCIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvdmlld3MvSG9tZVBhZ2UudnVlP2U2M2MiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL3ZpZXdzL0xvYWRpbmdQYWdlLnZ1ZT8yMWYzIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC92aWV3cy9XZWxjb21lUGFnZS52dWU/NzBhNCIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvUG9wdXAudnVlP2U2ZTYiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL2NvbXBvbmVudHMvQ291cnNlRGF0YS52dWU/N2U1YyIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvY29tcG9uZW50cy9GZXRjaEJ1dHRvbi52dWU/ZjczMyIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvY29tcG9uZW50cy9GZXRjaFF1ZXVlLnZ1ZT9kZWUxIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC9jb21wb25lbnRzL0ZldGNoUXVldWVCYXIudnVlPzJhYTMiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL2NvbXBvbmVudHMvRmV0Y2hTZWN0aW9uUXVldWUudnVlPzVjOGIiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL2NvbXBvbmVudHMvTG9nQmFyLnZ1ZT9kMmVhIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC9jb21wb25lbnRzL1BhZ2VOYXZpZ2F0aW9uLnZ1ZT83NTE2Iiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC9jb21wb25lbnRzL1RvY0l0ZW0udnVlPzZjM2IiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL3ZpZXdzL0Fib3V0UGFnZS52dWU/YzY0NSIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvdmlld3MvQ291cnNlUGFnZS52dWU/ZTM1MyIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvdmlld3MvRG93bmxvYWRQYWdlLnZ1ZT85ZTNlIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC92aWV3cy9IZWxwUGFnZS52dWU/Y2NkMiIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvdmlld3MvSG9tZVBhZ2UudnVlPzZmYzUiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL3ZpZXdzL0xvYWRpbmdQYWdlLnZ1ZT80NDBhIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC92aWV3cy9XZWxjb21lUGFnZS52dWU/YmZiOCIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2xsZmV0Y2hlci10cy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzL3dlYnBhY2svcnVudGltZS9nZXQgamF2YXNjcmlwdCB1cGRhdGUgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzL3dlYnBhY2svcnVudGltZS9nZXQgdXBkYXRlIG1hbmlmZXN0IGZpbGVuYW1lIiwid2VicGFjazovL2xsZmV0Y2hlci10cy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzL3dlYnBhY2svcnVudGltZS9sb2FkIHNjcmlwdCIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvd2VicGFjay9ydW50aW1lL2hvdCBtb2R1bGUgcmVwbGFjZW1lbnQiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2xsZmV0Y2hlci10cy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2xsZmV0Y2hlci10cy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2xsZmV0Y2hlci10cy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICd1bmRlcnNjb3JlJztcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0Qnl0ZXMoYnl0ZXMpIHtcclxuICBpZiAoYnl0ZXMgPiAxMDI0KSByZXR1cm4gKGJ5dGVzIC8gMTAyNCkudG9GaXhlZCgxKSArICdLJ1xyXG4gIHJldHVybiBTdHJpbmcoYnl0ZXMpXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRJdGVtcyhzZWFyY2hUZXJtLCBzb3VyY2Upe1xyXG4gIGxldCBfX3NlYXJjaFRlcm1fXyA9IHNlYXJjaFRlcm07XHJcbiAgbGV0IF9fcmVzdWx0c19fID0gW107XHJcblxyXG4gIGZ1bmN0aW9uIHJlc3VsdEV4aXN0KHJlc3VsdEl0ZW0pe1xyXG4gICAgZm9yKGxldCBpbmRleCBpbiBfX3Jlc3VsdHNfXyl7XHJcbiAgICAgICAgaWYoXy5pc0VxdWFsKHJlc3VsdEl0ZW0sIF9fcmVzdWx0c19fW2luZGV4XSkpe1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHNlYXJjaEl0ZW0oaXRlbSkgeyBcclxuICAgIGlmKCd1bmRlZmluZWQnID09IHR5cGVvZiBpdGVtIHx8IGl0ZW0gPT0gbnVsbCl7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmtleXMoaXRlbSkuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICBpZiAodHlwZW9mIGl0ZW1ba2V5XSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgIHNlYXJjaEl0ZW0oaXRlbVtrZXldKVxyXG4gICAgICB9XHJcbiAgICAgIGlmICh0eXBlb2YgaXRlbVtrZXldID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgbGV0IHNlYXJjaEFzUmVnRXggPSBuZXcgUmVnRXhwKF9fc2VhcmNoVGVybV9fLCBcImdpXCIpO1xyXG4gICAgICAgIGlmIChpdGVtW2tleV0ubWF0Y2goc2VhcmNoQXNSZWdFeCkpIHtcclxuICAgICAgICAgIGlmKCFyZXN1bHRFeGlzdChpdGVtKSl7XHJcbiAgICAgICAgICAgICAgX19yZXN1bHRzX18ucHVzaChpdGVtKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pOyAgIFxyXG4gIH1cclxuICBzZWFyY2hJdGVtKHNvdXJjZSk7XHJcblxyXG4gIHJldHVybiBfX3Jlc3VsdHNfXztcclxufVxyXG5cclxuLy8gZmluZEJwcignJHR5cGUnLCdjb20ubGlua2VkaW4ubGVhcm5pbmcuYXBpLmRlY28uY29udGVudC5FeGVyY2lzZUZpbGUnLGJwclN0b3JlLFsnc2l6ZUluQnl0ZXMnLCduYW1lJywndXJsJ10sZmFsc2UpXHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kRFMoayx2LHNyYyxwcm9wcyxsaXN0KXtcclxuICBsaXN0ID0gJ3VuZGVmaW5lZCcgPT09IHR5cGVvZiBsaXN0ID8gZmFsc2UgOiBsaXN0O1xyXG4gIGxldCBsaXN0cyA9IFtdO1xyXG4gIGZvcihsZXQgaSBpbiBzcmMpe1xyXG4gICAgICBjb25zdCBvYmogPSBzcmNbaV07XHJcbiAgICAgIGlmKCd1bmRlZmluZWQnICE9PSB0eXBlb2Ygb2JqW2tdKXtcclxuICAgICAgICAgIGlmKG9ialtrXSA9PT0gdil7XHJcbiAgICAgICAgICAgICAgbGV0IHJldHMgPSB7fTtcclxuICAgICAgICAgICAgICBmb3IobGV0IGogaW4gcHJvcHMpe1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBwcm9wID0gcHJvcHNbal07XHJcbiAgICAgICAgICAgICAgICAgIGlmKCd1bmRlZmluZWQnICE9PSB0eXBlb2Ygb2JqW3Byb3BdKXtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHNbcHJvcF0gPSBvYmpbcHJvcF07XHJcbiAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0c1twcm9wXSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYoIWxpc3Qpe1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gcmV0cztcclxuICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgbGlzdHMucHVzaChyZXRzKTtcclxuICAgICAgICAgICAgICB9ICBcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gIH1cclxuICByZXR1cm4gbGlzdHM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRGbXQodXJsKXtcclxuICBsZXQgc3RyID0gdXJsLnNwbGl0KCc/JylbMF0uc3BsaXQoJy8nKS5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSAnJylbNF0ucmVwbGFjZSgvXmxlYXJuaW5nLW9yaWdpbmFsLXZpZGVvLS8sJycpO1xyXG4gIFxyXG4gIGxldCBtYXRjaGVzID0gWydhdWRpbycsJzM2MCcsJzcyMCcsJzQ4MCcsJzEwODAnLCc1NDAnLCdobHMnXTtcclxuXHJcbiAgZm9yKCBsZXQgbSBpbiBtYXRjaGVzKXtcclxuICAgICAgaWYoc3RyLm1hdGNoKG1hdGNoZXNbbV0pKXtcclxuICAgICAgICAgIHJldHVybiBtYXRjaGVzW21dO1xyXG4gICAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBzdHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlVGl0bGUoc2x1Zykge1xyXG4gIGNvbnN0IHdvcmRzID0gc2x1Zy5zcGxpdCgnLScpO1xyXG4gIFxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgd29yZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IHdvcmQgPSB3b3Jkc1tpXTtcclxuICAgICAgd29yZHNbaV0gPSB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKTtcclxuICB9XHJcbiAgXHJcbiAgcmV0dXJuIHdvcmRzLmpvaW4oJyAnKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VTbHVnKHN0cikge1xyXG4gICAgY29uc3Qgd29yZHMgPSBzdHIucmVwbGFjZSgvXFxXKy9nLCcgJykuc3BsaXQoJyAnKTtcclxuICAgIHJldHVybiB3b3Jkcy5qb2luKCctJykudG9Mb3dlckNhc2UoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlbmRNZXNzYWdlU2F2ZURhdGFDb2Rlc1RvTFMoKXtcclxuICAgIGNocm9tZS50YWJzLnF1ZXJ5KHthY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWV9LCBmdW5jdGlvbih0YWJzKSB7XHJcbiAgICAgICAgY29uc3QgdGFiID0gdGFic1swXTtcclxuICAgICAgICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIHtldmVudDogJ1NhdmVEYXRhQ29kZXNUb0xTJ30sIChyKSA9PiB7fSk7XHJcblxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb250ZW50Q29uc29sZUxvZyhkYXRhKXtcclxuICAgIGNocm9tZS50YWJzLnF1ZXJ5KHthY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWV9LCBmdW5jdGlvbih0YWJzKSB7XHJcbiAgICAgICAgY29uc3QgdGFiID0gdGFic1swXTtcclxuICAgICAgICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIHtldmVudDogJ0NvbnRlbnRDb25zb2xlTG9nJyxwYXJhbTpkYXRhfSwgKHIpID0+IHt9KTtcclxuXHJcbiAgICB9KTtcclxufSIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuI3BvcHVwW2RhdGEtdi01ZjRiYmNjMF0ge1xcclxcbiAgICB3aWR0aCA6IDY4MHB4O1xcclxcbiAgICBtaW4taGVpZ2h0OiA0ODBweDtcXHJcXG4gICAgcGFkZGluZzogMWVtO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQ5LCAyNDIsIDI0OSk7XFxyXFxuICAgIGJvcmRlcjogc29saWQgMXB4ICNkZGQ7XFxufVxcbi5wYWdlW2RhdGEtdi01ZjRiYmNjMF17XFxyXFxuICBtYXJnaW4gOjAgMmVtIDJlbTtcXHJcXG4gIC8qYm9yZGVyOiBzb2xpZCAxcHggI2RlZGVkZTsqL1xcclxcbiAgcGFkZGluZzogMWVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcG9wdXAvUG9wdXAudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUErRkE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsc0JBQXNCO0FBQzFCO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiYXBwLWNvbnRhaW5lclxcXCI+XFxyXFxuICAgIDxQYWdlTmF2aWdhdGlvbiBAdXBkYXRlPVxcXCJvbk5hdlVwZGF0ZSgkZXZlbnQpXFxcIiA6bmF2PVxcXCJuYXZcXFwiIHJlZj1cXFwicGFnZU5hdmlnYXRpb25cXFwiLz5cXHJcXG4gICAgPFdlbGNvbWVQYWdlIHYtaWY9XFxcIm5hdj09J3dlbGNvbWUnXFxcIi8+XFxyXFxuICAgIDxMb2FkaW5nUGFnZSB2LWlmPVxcXCJuYXY9PSdsb2FkaW5nJ1xcXCIgdGV4dD1cXFwiRmV0Y2hpbmcgQ291cnNlIERhdGFcXFwiLz5cXHJcXG4gICAgPEhvbWVQYWdlIHYtaWY9XFxcIm5hdj09J2hvbWUnXFxcIi8+XFxyXFxuICAgIDxDb3Vyc2VQYWdlIEB1cGRhdGU9XFxcIm9uQ291cnNlVXBkYXRlKCRldmVudClcXFwiIHYtaWY9XFxcIm5hdj09J2NvdXJzZSdcXFwiIDpjb3Vyc2U9XFxcImNvdXJzZVxcXCIgIHJlZj1cXFwiY291cnNlUGFnZVxcXCIvPlxcclxcbiAgICA8RG93bmxvYWRQYWdlIHYtaWY9XFxcIm5hdj09J2Rvd25sb2FkcydcXFwiLz5cXHJcXG4gICAgPEhlbHBQYWdlIHYtaWY9XFxcIm5hdj09J2hlbHAnXFxcIi8+XFxyXFxuICAgIDxBYm91dFBhZ2Ugdi1pZj1cXFwibmF2PT0nYWJvdXQnXFxcIi8+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnNvbGVcXFwiIHYtc2hvdz1cXFwibWVzc2FnZS5sZW5ndGg+MFxcXCI+XFxyXFxuICAgICAgPGhpZ2hsaWdodGpzXFxyXFxuICAgICAgICAgIGxhbmd1YWdlPVxcXCJjb25zb2xlXFxcIlxcclxcbiAgICAgICAgICA6Y29kZT1cXFwiSlNPTi5zdHJpbmdpZnkobWVzc2FnZSxudWxsLDIpXFxcIlxcclxcbiAgICAgIC8+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgPC9kaXY+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG5cXHJcXG48c2NyaXB0IGxhbmc9XFxcInRzXFxcIj5cXHJcXG5pbXBvcnQge2RlZmluZUNvbXBvbmVudCwgcmVmfSBmcm9tICd2dWUnO1xcclxcbmltcG9ydCBOYXZUZXJtIGZyb20gJy4uL3R5cGVzL25hdnRlcm0nOyBcXHJcXG5pbXBvcnQgQ291cnNlIGZyb20gJy4uL3R5cGVzL2NvdXJzZSc7XFxyXFxuXFxyXFxuaW1wb3J0IFBhZ2VOYXZpZ2F0aW9uIGZyb20gJy4vY29tcG9uZW50cy9QYWdlTmF2aWdhdGlvbi52dWUnO1xcclxcbmltcG9ydCBXZWxjb21lUGFnZSBmcm9tICcuL3ZpZXdzL1dlbGNvbWVQYWdlLnZ1ZSdcXHJcXG5pbXBvcnQgSG9tZVBhZ2UgZnJvbSAnLi92aWV3cy9Ib21lUGFnZS52dWUnXFxyXFxuaW1wb3J0IExvYWRpbmdQYWdlIGZyb20gJy4vdmlld3MvTG9hZGluZ1BhZ2UudnVlJ1xcclxcbmltcG9ydCBDb3Vyc2VQYWdlIGZyb20gJy4vdmlld3MvQ291cnNlUGFnZS52dWUnXFxyXFxuaW1wb3J0IERvd25sb2FkUGFnZSBmcm9tICcuL3ZpZXdzL0Rvd25sb2FkUGFnZS52dWUnXFxyXFxuaW1wb3J0IEFib3V0UGFnZSBmcm9tICcuL3ZpZXdzL0Fib3V0UGFnZS52dWUnXFxyXFxuaW1wb3J0IEhlbHBQYWdlIGZyb20gJy4vdmlld3MvSGVscFBhZ2UudnVlJ1xcclxcbmltcG9ydCBTdG9yZSBmcm9tICcuLi9saWJzL3N0b3JlJztcXHJcXG5cXHJcXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xcclxcbiAgbmFtZTogJ1BvcHVwJyxcXHJcXG4gIGNvbXBvbmVudHM6IHtcXHJcXG4gICAgUGFnZU5hdmlnYXRpb24sXFxyXFxuICAgIFdlbGNvbWVQYWdlLFxcclxcbiAgICBMb2FkaW5nUGFnZSxcXHJcXG4gICAgSG9tZVBhZ2UsXFxyXFxuICAgIENvdXJzZVBhZ2UsXFxyXFxuICAgIERvd25sb2FkUGFnZSxcXHJcXG4gICAgQWJvdXRQYWdlLFxcclxcbiAgICBIZWxwUGFnZVxcclxcbiAgfSxcXHJcXG4gIHNldHVwKCl7XFxyXFxuICAgIGNvbnN0IG5hdiA9IHJlZjxOYXZUZXJtPignd2VsY29tZScpO1xcclxcbiAgICBjb25zdCBjb3Vyc2UgPSByZWYoe30gYXMgQ291cnNlKTtcXHJcXG5cXHJcXG4gICAgY29uc3Qgb25OYXZVcGRhdGUgPSAodGFyZ2V0IDogTmF2VGVybSkgPT4ge1xcclxcbiAgICAgIG5hdi52YWx1ZSA9IHRhcmdldDtcXHJcXG4gICAgfTtcXHJcXG4gICAgXFxyXFxuICAgIFxcclxcbiAgICBjb25zdCBvbkNvdXJzZVVwZGF0ZSA9ICh0YXJnZXQ6YW55KSA9PiB7XFxyXFxuICAgICAgY29uc29sZS5sb2codGFyZ2V0KTtcXHJcXG4gICAgICAvLyB0aGlzLnJlYnVpbGRDb3Vyc2VJbmZvKHNlY3Rpb25JbmRleCwgdG9jSW5kZXgsIHRvYyk7XFxyXFxuICAgIH07XFxyXFxuICAgIGNvbnN0IG1lc3NhZ2UgPSByZWYoJycpO1xcclxcbiAgICBjb25zdCBhcHAgPSByZWYoe3N0YXRlOjB9KVxcclxcbiAgICByZXR1cm4ge25hdiwgY291cnNlLCBvbk5hdlVwZGF0ZSwgb25Db3Vyc2VVcGRhdGUsIG1lc3NhZ2UsYXBwfTtcXHJcXG4gIH0sXFxyXFxuICBtb3VudGVkKCl7XFxyXFxuICAgIGNvbnNvbGUubG9nKCdBcHAgRW50cnkgUG9pbnQgU3RhcnQgaGVyZS4uLicpO1xcclxcbiAgICBTdG9yZS5wcmVwYXJlQXBwU3RvcmFnZSgpO1xcclxcblxcclxcbiAgICBzZXRUaW1lb3V0KCgpPT57IFxcclxcbiAgICAgIGNvbnN0IGRiID0gU3RvcmUuZGIoKTtcXHJcXG4gICAgICBjb25zb2xlLmxvZyhkYik7XFxyXFxuICAgICAgZGIuc3Vic2NyaWJlKCdhcHAnLChyb3cpPT57XFxyXFxuICAgICAgICAvLyBjb25zb2xlLmxvZyhyb3cpO1xcclxcbiAgICAgICAgdGhpcy5hcHAgPSByb3c7XFxyXFxuICAgICAgICB0aGlzLmxvZyhgQXBwU3RhdGU6JHtyb3cuc3RhdGV9YCk7XFxyXFxuICAgICAgfSk7XFxyXFxuICAgIH0sMTAwMClcXHJcXG5cXHJcXG4gIH0sXFxyXFxuICBtZXRob2RzOntcXHJcXG4gICAgbG9nKG1lc3NhZ2U6c3RyaW5nKXtcXHJcXG4gICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xcclxcblxcclxcbiAgICB9LFxcclxcbiAgICBzZXRDb3Vyc2UoY291cnNlKXtcXHJcXG4gICAgICB0aGlzLmNvdXJzZSA9IGNvdXJzZTtcXHJcXG4gICAgICBzZXRUaW1lb3V0KCgpPT57XFxyXFxuICAgICAgICB0aGlzLm5hdiA9IHRoaXMuJHJlZnMucGFnZU5hdmlnYXRpb24ubmF2ID0gJ2NvdXJzZSc7XFxyXFxuICAgICAgfSwyNTApO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufSlcXHJcXG48L3NjcmlwdD5cXHJcXG5cXHJcXG5cXHJcXG48c3R5bGUgc2NvcGVkPlxcclxcbiNwb3B1cCB7XFxyXFxuICAgIHdpZHRoIDogNjgwcHg7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDQ4MHB4O1xcclxcbiAgICBwYWRkaW5nOiAxZW07XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYigyNDksIDI0MiwgMjQ5KTtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2RkZDtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2V7XFxyXFxuICBtYXJnaW4gOjAgMmVtIDJlbTtcXHJcXG4gIC8qYm9yZGVyOiBzb2xpZCAxcHggI2RlZGVkZTsqL1xcclxcbiAgcGFkZGluZzogMWVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG48L3N0eWxlPlxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5jb3Vyc2UtZGF0YSA+IHVsW2RhdGEtdi0zYmIyNjE5Y117XFxyXFxuICBsaXN0LXN0eWxlOm5vbmU7XFxyXFxuICBwYWRkaW5nOjA7XFxufVxcclxcblxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9wb3B1cC9jb21wb25lbnRzL0NvdXJzZURhdGEudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFnRkE7RUFDRSxlQUFlO0VBQ2YsU0FBUztBQUNYXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY291cnNlLWRhdGFcXFwiPlxcclxcbiAgICAgIDx1bD5cXHJcXG4gICAgICAgIDxsaT5cXHJcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGF0YS10aXRsZVxcXCI+Q09VUlNFPC9kaXY+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRhdGEtY29udGVudFxcXCI+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPGhpZ2hsaWdodGpzXFxyXFxuICAgICAgICAgICAgICAgIGxhbmd1YWdlPVxcXCJqc29uXFxcIlxcclxcbiAgICAgICAgICAgICAgICA6Y29kZT1cXFwiSlNPTi5zdHJpbmdpZnkoY291cnNlLG51bGwsMilcXFwiXFxyXFxuICAgICAgICAgICAgLz5cXHJcXG4gICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2xpPlxcclxcblxcclxcbiAgICAgIDwvdWw+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvdGVtcGxhdGU+XFxyXFxuXFxyXFxuPHNjcmlwdCBsYW5nPVxcXCJ0c1xcXCI+XFxyXFxuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnO1xcclxcblxcclxcbmltcG9ydCBqUXVlcnkgZnJvbSAnanF1ZXJ5JztcXHJcXG5pbXBvcnQgU3RvcmUgZnJvbSAnLi4vLi4vbGlicy9zdG9yZSc7XFxyXFxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcXHJcXG5cXHJcXG4gICAgc2V0dXAocHJvcHMpIHtcXHJcXG4gICAgICAgIGNvbnN0IGNvdXJzZURhdGEgPSByZWYoe30pO1xcclxcbiAgICAgICAgY29uc3QgY291cnNlID0gcmVmKHt9KTtcXHJcXG4gICAgICAgIGNvbnN0IHNlY3Rpb25zID0gcmVmKFtdKTtcXHJcXG4gICAgICAgIGNvbnN0IGF1dGhvcnMgPSByZWYoW10pO1xcclxcbiAgICAgICAgY29uc3QgdG9jcyA9IHJlZihbXSk7XFxyXFxuICAgICAgICByZXR1cm4ge2NvdXJzZURhdGEsY291cnNlLHNlY3Rpb25zLHRvY3MsYXV0aG9yc307XFxyXFxuICAgIH0sXFxyXFxuICAgIG1vdW50ZWQoKXtcXHJcXG4gICAgICAvLyB0aGlzLmluaXRDb3Vyc2VEYXRhKCk7XFxyXFxuICAgIH0sXFxyXFxuICAgIG1ldGhvZHM6e1xcclxcbiAgICAgIGluaXRDb3Vyc2VEYXRhKCl7XFxyXFxuICAgICAgICAvKlxcclxcbiAgICAgICAgLy8gbW92ZWQgdG8gc3JjL2xpYnMvU3RvcmUudHNcXHJcXG4gICAgICAgIGNvbnN0IGNvdXJzZVRtcCA9IHRoaXMuJHBhcmVudC5jb3Vyc2U7XFxyXFxuICAgICAgICBjb25zdCBzZWN0aW9ucyA9IHRoaXMuJHBhcmVudC5zZWN0aW9ucztcXHJcXG4gICAgICAgIGNvbnN0IGF1dGhvcnMgPSB0aGlzLiRwYXJlbnQuYXV0aG9ycztcXHJcXG4gICAgICAgIFN0b3JlLmluaXQoKTtcXHJcXG5cXHJcXG4gICAgICAgIGNvbnN0IGNvdXJzZSA9IFN0b3JlLmNyZWF0ZUNvdXJzZShjb3Vyc2VUbXAudGl0bGUsIGNvdXJzZVRtcC5zbHVnLCBjb3Vyc2VUbXAuZHVyYXRpb24sIGNvdXJzZVRtcC5zb3VyY2VDb2RlUmVwb3NpdG9yeSwgY291cnNlVG1wLmRlc2NyaXB0aW9uKTtcXHJcXG4gICAgICAgIFxcclxcbiAgICAgICAgXFxyXFxuXFxyXFxuICAgICAgICB0aGlzLmNvdXJzZSA9IGNvdXJzZTtcXHJcXG4gICAgICAgIHNlY3Rpb25zLm1hcCgoc2VjdGlvblRtcCk9PntcXHJcXG4gICAgICAgICAgY29uc3Qgc2VjdGlvbiA9IFN0b3JlLmNyZWF0ZVNlY3Rpb24odGhpcy5jb3Vyc2UuSUQsc2VjdGlvblRtcC50aXRsZSk7XFxyXFxuICAgICAgICAgIHRoaXMuc2VjdGlvbnMucHVzaChzZWN0aW9uKTtcXHJcXG4gICAgICAgICAgc2VjdGlvblRtcC5pdGVtcy5tYXAoKHRvY1RtcCk9PntcXHJcXG4gICAgICAgICAgICBjb25zdCB0b2MgPSBTdG9yZS5jcmVhdGVUb2Moc2VjdGlvbi5JRCx0b2NUbXAudGl0bGUsdG9jVG1wLnNsdWcsdG9jVG1wLmR1cmF0aW9uKTtcXHJcXG4gICAgICAgICAgICB0aGlzLnRvY3MucHVzaCh0b2MpO1xcclxcbiAgICAgICAgICB9KTtcXHJcXG4gICAgICAgIH0pO1xcclxcbiAgICAgICAgU3RvcmUuY3JlYXRlQXV0aG9yTGlzdChjb3Vyc2Uuc2x1ZyxhdXRob3JzKTtcXHJcXG4gICAgICAgIHRoaXMudXBkYXRlSXRlbUZyb21MUygpO1xcclxcblxcclxcbiAgICAgICAgICovXFxyXFxuICAgICAgfSxcXHJcXG4gICAgICB1cGRhdGVJdGVtRnJvbUxTKCl7XFxyXFxuICAgICAgICBjb25zb2xlLmxvZygnUGxlYXNlIHVwZGF0ZSBldmVyeXRoaW5nIGZyb20gbG9jYWxTdG9yYWdlIGhlcmUuLicpO1xcclxcbiAgICAgIH0sXFxyXFxuICAgICAgdXBkYXRlSXRlbXMoZXhlcmNpc2VGaWxlLHRvYyl7XFxyXFxuICAgICAgICB0aGlzLmV4ZXJjaXNlRmlsZSA9IFN0b3JlLmNyZWF0ZUV4ZXJjaXNlRmlsZSh0aGlzLmNvdXJzZS5JRCwgZXhlcmNpc2VGaWxlLm5hbWUsIGV4ZXJjaXNlRmlsZS51cmwsIGV4ZXJjaXNlRmlsZS5zaXplSW5CeXRlcyk7XFxyXFxuICAgICAgICBjb25zb2xlLmxvZyhleGVyY2lzZUZpbGUsdG9jKTtcXHJcXG5cXHJcXG4gICAgICAgIC8vIHVwZGF0ZSB0b2MgY2FwdGlvblxcclxcbiAgICAgICAgU3RvcmUudXBkYXRlVG9jQ2FwdGlvbih0b2Muc2x1Zyx0b2MuY2FwdGlvblVybCx0b2MuY2FwdGlvbkZtdCk7XFxyXFxuICAgICAgICAvLyBVcGRhdGUgb3IgY3JlYXRlIHN0cmVhbWluZyBsb2NhdGlvblxcclxcbiAgICAgICAgU3RvcmUuY3JlYXRlU3RyZWFtTG9jYXRpb25MaXN0KHRvYy5zbHVnLHRvYy5zdHJlYW1Mb2NhdGlvbnMpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbn0pXFxyXFxuPC9zY3JpcHQ+XFxyXFxuXFxyXFxuPHN0eWxlIHNjb3BlZD5cXHJcXG4uY291cnNlLWRhdGEgPiB1bHtcXHJcXG4gIGxpc3Qtc3R5bGU6bm9uZTtcXHJcXG4gIHBhZGRpbmc6MDtcXHJcXG59XFxyXFxuXFxyXFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uYnRuLWZldGNoW2RhdGEtdi0xOGE4ZmU0NF17XFxyXFxuICAgIG1hcmdpbi10b3A6LThweDtcXHJcXG4gICAgcGFkZGluZzowO1xcclxcbiAgICBib3JkZXI6bm9uZSAhaW1wb3J0YW50O1xcbn1cXG4uZmV0Y2gtcXVldWVbZGF0YS12LTE4YThmZTQ0XXtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cXG4uYnRuLWZldGNoLWNudFtkYXRhLXYtMThhOGZlNDRde1xcclxcbiAgICB3aWR0aDogMjVweDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICByaWdodDogOTBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogLTE4cHg7XFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9wb3B1cC9jb21wb25lbnRzL0ZldGNoUXVldWUudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUE2Q0E7SUFDSSxlQUFlO0lBQ2YsU0FBUztJQUNULHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmZXRjaC1xdWV1ZVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IHN0eWxlPVxcXCJ3aWR0aDo5MCU7aGVpZ2h0OjE1cHhcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2dyZXNzXFxcIiB2LXNob3c9XFxcInBlcmNlbnRhZ2UgPiAwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvZ3Jlc3MtYmFyXFxcIiByb2xlPVxcXCJwcm9ncmVzc2JhclxcXCIgOnN0eWxlPVxcXCJ7d2lkdGg6cGVyY2VudGFnZSsnJSd9XFxcIiA6YXJpYS12YWx1ZW5vdz1cXFwicGVyY2VudGFnZVxcXCIgYXJpYS12YWx1ZW1pbj1cXFwiMFxcXCIgYXJpYS12YWx1ZW1heD1cXFwiMTAwXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYnRuLWZldGNoLWNudFxcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiA6ZGlzYWJsZWQ9XFxcImJ0blN0YXRlIT0xJiZidG5TdGF0ZSE9NFxcXCIgQGNsaWNrPVxcXCJzdGFydFF1ZXVlKClcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNtIGJ0bi1mZXRjaFxcXCI+PGkgY2xhc3M9XFxcImZhXFxcIiA6Y2xhc3M9XFxcInsnZmEtcGxheSc6YnRuU3RhdGU9PTEsJ2ZhLXNwaW4gZmEtc3Bpbm5lcic6YnRuU3RhdGU9PTIsJ2ZhLWNoZWNrJzpidG5TdGF0ZT09MywnZmEtcmVmcmVzaCc6YnRuU3RhdGU9PTR9XFxcIj48L2k+PC9idXR0b24+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG5cXHJcXG48c2NyaXB0IGxhbmc9XFxcInRzXFxcIj5cXHJcXG5pbXBvcnQge2RlZmluZUNvbXBvbmVudCxyZWZ9IGZyb20gJ3Z1ZSdcXHJcXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xcclxcbiAgcHJvcHM6e1xcclxcblxcclxcbiAgfSxcXHJcXG4gIHNldHVwKHByb3BzKXtcXHJcXG4gICAgbGV0IHF1ZXVlU2x1Z3MgPSByZWYoW10pO1xcclxcbiAgICBsZXQgZXhjbHVkZVNsdWdzID0gcmVmKFtdKTtcXHJcXG4gICAgbGV0IHBlcmNlbnRhZ2UgPSByZWYoMCk7XFxyXFxuICAgIGxldCBidG5TdGF0ZSA9IHJlZigxKTtcXHJcXG4gICAgbGV0IGxhc3RUb2NJbmRleCA9IHJlZigwKTtcXHJcXG4gICAgcmV0dXJuIHtxdWV1ZVNsdWdzLGV4Y2x1ZGVTbHVncyxwZXJjZW50YWdlLGJ0blN0YXRlLGxhc3RUb2NJbmRleH07XFxyXFxuICB9LFxcclxcbiAgbWV0aG9kczp7XFxyXFxuICAgIHNldFByb2dyZXNzKGxhc3RUb2NJbmRleDpudW1iZXIscGVyY2VudGFnZTpudW1iZXIpe1xcclxcbiAgICAgICAgdGhpcy5sYXN0VG9jSW5kZXggPSBsYXN0VG9jSW5kZXg7XFxyXFxuICAgICAgICB0aGlzLnBlcmNlbnRhZ2UgPSBwZXJjZW50YWdlO1xcclxcbiAgICAgICAgaWYocGVyY2VudGFnZT09MTAwKXtcXHJcXG4gICAgICAgICAgICB0aGlzLmJ0blN0YXRlID0gMztcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIGNvbnNvbGUubG9nKHBlcmNlbnRhZ2UpXFxyXFxuICAgIH0sXFxyXFxuICAgIHN0YXJ0UXVldWUoKXtcXHJcXG4gICAgICAgIHRoaXMucGVyY2VudGFnZSA9IHRoaXMucGVyY2VudGFnZT09MD8xOnRoaXMucGVyY2VudGFnZTtcXHJcXG4gICAgICAgIHRoaXMuYnRuU3RhdGUgPSAyO1xcclxcbiAgICAgICAgdGhpcy4kcGFyZW50LnRyaWdnZXJGZXRjaFF1ZXVlKHRoaXMubGFzdFRvY0luZGV4PT0wPy0xOnRoaXMubGFzdFRvY0luZGV4KTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn0pO1xcclxcbjwvc2NyaXB0PlxcclxcbjxzdHlsZSBzY29wZWQ+XFxyXFxuLmJ0bi1mZXRjaHtcXHJcXG4gICAgbWFyZ2luLXRvcDotOHB4O1xcclxcbiAgICBwYWRkaW5nOjA7XFxyXFxuICAgIGJvcmRlcjpub25lICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcbi5mZXRjaC1xdWV1ZXtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcclxcbn1cXHJcXG4uYnRuLWZldGNoLWNudHtcXHJcXG4gICAgd2lkdGg6IDI1cHg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDkwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IC0xOHB4O1xcclxcbn1cXHJcXG48L3N0eWxlPlwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5mZXRjaC1xdWV1ZS1wYltkYXRhLXYtOTA1YWVjNDJde1xcclxcbiAgICB3aWR0aDogMTAycHg7XFxyXFxuICAgIGhlaWdodDogMjRweDtcXHJcXG4gICAgcGFkZGluZzogNHB4IDA7XFxyXFxuICAgIGZsb2F0OnJpZ2h0O1xcclxcbiAgICBjbGVhcjpib3RoO1xcbn1cXG4uYnRuLWZldGNoW2RhdGEtdi05MDVhZWM0Ml17XFxyXFxuICAgIG1hcmdpbi10b3A6LThweDtcXHJcXG4gICAgcGFkZGluZzowO1xcclxcbiAgICBib3JkZXI6bm9uZSAhaW1wb3J0YW50O1xcclxcbiAgICBmb250LXNpemU6IDEwcHg7XFxufVxcbi5mZXRjaC1xdWV1ZVtkYXRhLXYtOTA1YWVjNDJde1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcbi5idG4tZmV0Y2gtY250W2RhdGEtdi05MDVhZWM0Ml17XFxyXFxuICAgd2lkdGg6IDI1cHg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDM4cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIuNXB4O1xcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcG9wdXAvY29tcG9uZW50cy9GZXRjaFF1ZXVlQmFyLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBa0RBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixjQUFjO0lBQ2QsV0FBVztJQUNYLFVBQVU7QUFDZDtBQUNBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7R0FDRyxXQUFXO0lBQ1Ysa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmZXRjaC1xdWV1ZS1iYXJcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmV0Y2gtcXVldWUtcGJcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2dyZXNzXFxcIiB2LXNob3c9XFxcInBlcmNlbnRhZ2UgPiAwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvZ3Jlc3MtYmFyIGJnLWluZm9cXFwiIHJvbGU9XFxcInByb2dyZXNzYmFyXFxcIiA6c3R5bGU9XFxcInt3aWR0aDpwZXJjZW50YWdlKyclJ31cXFwiIDphcmlhLXZhbHVlbm93PVxcXCJwZXJjZW50YWdlXFxcIiBhcmlhLXZhbHVlbWluPVxcXCIwXFxcIiBhcmlhLXZhbHVlbWF4PVxcXCIxMDBcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJidG4tZmV0Y2gtY250XFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIDpzdHlsZT1cXFwie2NvbG9yOmJ0blN0YXRlPT0zPyd3aGl0ZSc6J2luaGVyaXQnfVxcXCIgOmRpc2FibGVkPVxcXCJidG5TdGF0ZSE9MSYmYnRuU3RhdGUhPTRcXFwiIEBjbGljaz1cXFwic3RhcnRRdWV1ZSgpXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zbSBidG4tZmV0Y2hcXFwiPjxpIGNsYXNzPVxcXCJmYVxcXCIgOmNsYXNzPVxcXCJ7J2ZhLXBsYXknOmJ0blN0YXRlPT0xLCdmYS1zcGluIGZhLXNwaW5uZXInOmJ0blN0YXRlPT0yLCdmYS1jaGVjayc6YnRuU3RhdGU9PTMsJ2ZhLXJlZnJlc2gnOmJ0blN0YXRlPT00fVxcXCI+PC9pPjwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvdGVtcGxhdGU+XFxyXFxuXFxyXFxuPHNjcmlwdCBsYW5nPVxcXCJ0c1xcXCI+XFxyXFxuaW1wb3J0IHtkZWZpbmVDb21wb25lbnQscmVmfSBmcm9tICd2dWUnXFxyXFxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcXHJcXG4gIHByb3BzOntcXHJcXG4gICAgc2VjdGlvbkluZGV4OntcXHJcXG4gICAgICAgIHJlcXVpcmVkIDogdHJ1ZSxcXHJcXG4gICAgICAgIHR5cGU6IE51bWJlclxcclxcbiAgICB9XFxyXFxuICB9LFxcclxcbiAgc2V0dXAocHJvcHMpe1xcclxcbiAgICBsZXQgcXVldWVTbHVncyA9IHJlZihbXSk7XFxyXFxuICAgIGxldCBleGNsdWRlU2x1Z3MgPSByZWYoW10pO1xcclxcbiAgICBsZXQgcGVyY2VudGFnZSA9IHJlZigwKTtcXHJcXG4gICAgbGV0IGJ0blN0YXRlID0gcmVmKDEpO1xcclxcbiAgICBsZXQgbGFzdFRvY0luZGV4ID0gcmVmKDApO1xcclxcbiAgICBjb25zdCBzZWN0aW9uSW5kZXggPSByZWYocHJvcHMuc2VjdGlvbkluZGV4KTtcXHJcXG4gICAgcmV0dXJuIHtxdWV1ZVNsdWdzLGV4Y2x1ZGVTbHVncyxwZXJjZW50YWdlLGJ0blN0YXRlLGxhc3RUb2NJbmRleCxzZWN0aW9uSW5kZXh9O1xcclxcbiAgfSxcXHJcXG4gIG1ldGhvZHM6e1xcclxcbiAgICBzZXRQcm9ncmVzcyhsYXN0VG9jSW5kZXg6bnVtYmVyLHBlcmNlbnRhZ2U6bnVtYmVyKXtcXHJcXG4gICAgICAgIHRoaXMubGFzdFRvY0luZGV4ID0gbGFzdFRvY0luZGV4O1xcclxcbiAgICAgICAgdGhpcy5wZXJjZW50YWdlID0gcGVyY2VudGFnZTtcXHJcXG4gICAgICAgIGlmKHBlcmNlbnRhZ2U9PTEwMCl7XFxyXFxuICAgICAgICAgICAgdGhpcy5idG5TdGF0ZSA9IDM7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICB0aGlzLiRwYXJlbnQuZmV0Y2hTZWN0aW9uUXVldWUucmVwb3J0KHRoaXMuc2VjdGlvbkluZGV4LGxhc3RUb2NJbmRleCwwKTtcXHJcXG4gICAgICAgIGNvbnNvbGUubG9nKHBlcmNlbnRhZ2UpXFxyXFxuICAgIH0sXFxyXFxuICAgIHN0YXJ0UXVldWUoKXtcXHJcXG4gICAgICAgIHRoaXMucGVyY2VudGFnZSA9IHRoaXMucGVyY2VudGFnZT09MD8xOnRoaXMucGVyY2VudGFnZTtcXHJcXG4gICAgICAgIHRoaXMuYnRuU3RhdGUgPSAyO1xcclxcbiAgICAgICAgdGhpcy4kcGFyZW50LnRvY0l0ZW1zW3RoaXMuc2VjdGlvbkluZGV4XS50cmlnZ2VyRmV0Y2hRdWV1ZSh0aGlzLmxhc3RUb2NJbmRleD09MD8tMTp0aGlzLmxhc3RUb2NJbmRleCk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59KTtcXHJcXG48L3NjcmlwdD5cXHJcXG48c3R5bGUgc2NvcGVkPlxcclxcbi5mZXRjaC1xdWV1ZS1wYntcXHJcXG4gICAgd2lkdGg6IDEwMnB4O1xcclxcbiAgICBoZWlnaHQ6IDI0cHg7XFxyXFxuICAgIHBhZGRpbmc6IDRweCAwO1xcclxcbiAgICBmbG9hdDpyaWdodDtcXHJcXG4gICAgY2xlYXI6Ym90aDtcXHJcXG59XFxyXFxuLmJ0bi1mZXRjaHtcXHJcXG4gICAgbWFyZ2luLXRvcDotOHB4O1xcclxcbiAgICBwYWRkaW5nOjA7XFxyXFxuICAgIGJvcmRlcjpub25lICFpbXBvcnRhbnQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXHJcXG59XFxyXFxuLmZldGNoLXF1ZXVle1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxyXFxufVxcclxcbi5idG4tZmV0Y2gtY250e1xcclxcbiAgIHdpZHRoOiAyNXB4O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiAzOHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAyLjVweDtcXHJcXG59XFxyXFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uZGF0YS1jb2Rlc1tkYXRhLXYtNmFmZGE2NDlde1xcclxcbiAgICBiYWNrZ3JvdW5kOiB5ZWxsb3c7XFxufVxcbi5mZXRjaC1zZWN0aW9uLXF1ZXVlLXBiW2RhdGEtdi02YWZkYTY0OV17XFxyXFxuICAgIHdpZHRoOiAxMDJweDtcXHJcXG4gICAgaGVpZ2h0OiAyNHB4O1xcclxcbiAgICBwYWRkaW5nOiA0cHggMDtcXHJcXG4gICAgZmxvYXQ6cmlnaHQ7XFxyXFxuICAgIGNsZWFyOmJvdGg7XFxufVxcbi5idG4tZmV0Y2gtc2VjdGlvbi1xdWV1ZVtkYXRhLXYtNmFmZGE2NDlde1xcclxcbiAgICBtYXJnaW4tdG9wOi04cHg7XFxyXFxuICAgIHBhZGRpbmc6MDtcXHJcXG4gICAgYm9yZGVyOm5vbmUgIWltcG9ydGFudDtcXHJcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcbn1cXG4uZmV0Y2gtc2VjdGlvbi1xdWV1ZVtkYXRhLXYtNmFmZGE2NDlde1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiA0OXB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xcbn1cXG4uYnRuLWZldGNoLXNlY3Rpb24tcXVldWUtY250W2RhdGEtdi02YWZkYTY0OV17XFxyXFxuICAgd2lkdGg6IDI1cHg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IC0xMnB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAyLjVweDtcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3BvcHVwL2NvbXBvbmVudHMvRmV0Y2hTZWN0aW9uUXVldWUudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFrRkE7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osY0FBYztJQUNkLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGVBQWU7SUFDZixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCO0FBQ0E7R0FDRyxXQUFXO0lBQ1Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmZXRjaC1zZWN0aW9uLXF1ZXVlXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZzcWJjXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmZXRjaC1zZWN0aW9uLXF1ZXVlLWJhclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZldGNoLXNlY3Rpb24tcXVldWUtcGJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvZ3Jlc3NcXFwiIHYtc2hvdz1cXFwicGVyY2VudGFnZSA+IDBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2dyZXNzLWJhciBiZy1zdWNjZXNzXFxcIiByb2xlPVxcXCJwcm9ncmVzc2JhclxcXCIgOnN0eWxlPVxcXCJ7d2lkdGg6cGVyY2VudGFnZSsnJSd9XFxcIiA6YXJpYS12YWx1ZW5vdz1cXFwicGVyY2VudGFnZVxcXCIgYXJpYS12YWx1ZW1pbj1cXFwiMFxcXCIgYXJpYS12YWx1ZW1heD1cXFwiMTAwXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYnRuLWZldGNoLXNlY3Rpb24tcXVldWUtY250XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gOnN0eWxlPVxcXCJ7Y29sb3I6YnRuU3RhdGU9PTM/J3doaXRlJzonaW5oZXJpdCd9XFxcIiA6ZGlzYWJsZWQ9XFxcImJ0blN0YXRlIT0xJiZidG5TdGF0ZSE9NFxcXCIgQGNsaWNrPVxcXCJzdGFydFF1ZXVlKClcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNtIGJ0bi1mZXRjaC1zZWN0aW9uLXF1ZXVlXFxcIj48aSBjbGFzcz1cXFwiZmFcXFwiIDpjbGFzcz1cXFwieydmYS1wbGF5JzpidG5TdGF0ZT09MSwnZmEtc3BpbiBmYS1zcGlubmVyJzpidG5TdGF0ZT09MiwnZmEtY2hlY2snOmJ0blN0YXRlPT0zLCdmYS1yZWZyZXNoJzpidG5TdGF0ZT09NH1cXFwiPjwvaT48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgPGNvZGUgdi1pZj1cXFwic2hvd0RhdGFcXFwiIGNsYXNzPVxcXCJkYXRhLWNvZGVzXFxcIj57e3RvSlNPTlN0cihxdWV1ZVNsdWdzKX19PC9jb2RlPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L3RlbXBsYXRlPlxcclxcblxcclxcbjxzY3JpcHQgbGFuZz1cXFwidHNcXFwiPlxcclxcbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJztcXHJcXG5cXHJcXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xcclxcblxcclxcbiAgICBzZXR1cCgpIHtcXHJcXG4gICAgICAgIGNvbnN0IHF1ZXVlU2x1Z3MgPSByZWYoW10pO1xcclxcbiAgICAgICAgY29uc3Qgc2hvd0RhdGEgPSByZWYoZmFsc2UpO1xcclxcbiAgICAgICAgY29uc3QgYnRuU3RhdGUgPSByZWYoMSk7XFxyXFxuICAgICAgICBjb25zdCBwZXJjZW50YWdlID0gcmVmKDApO1xcclxcbiAgICAgICAgY29uc3QgbGFzdFNlY3Rpb25JbmRleCA9IHJlZigwKTtcXHJcXG4gICAgICAgIGNvbnN0IHNlY3Rpb25JbmRleFF1ZXVlcyA9IHJlZihbXSk7XFxyXFxuICAgICAgICByZXR1cm4ge3F1ZXVlU2x1Z3Msc2hvd0RhdGEsYnRuU3RhdGUscGVyY2VudGFnZSxsYXN0U2VjdGlvbkluZGV4LHNlY3Rpb25JbmRleFF1ZXVlc307XFxyXFxuICAgIH0sXFxyXFxuICAgIG1vdW50ZWQoKXtcXHJcXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XFxyXFxuICAgICAgICAgICAgdGhpcy5zZWN0aW9uSW5kZXhRdWV1ZXMgPSAgT2JqZWN0LmtleXModGhpcy4kcGFyZW50LnNlY3Rpb25zKTtcXHJcXG4gICAgICAgIH0sMjUwKVxcclxcbiAgICB9LFxcclxcbiAgICBtZXRob2RzOntcXHJcXG4gICAgICAgIHRvSlNPTlN0cihvYmo6YW55KXtcXHJcXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqKTtcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBjYWxjdWxhdGVQZXJjZW50YWdlUXVldWUoY2FsbGJhY2s6RnVuY3Rpb24pe1xcclxcbiAgICAgICAgICAgIGNvbnN0IHBlYWsgPSB0aGlzLnF1ZXVlU2x1Z3MubGVuZ3RoO1xcclxcbiAgICAgICAgICAgIGNvbnN0IG1heFBlYWsgPSB0aGlzLiRwYXJlbnQuZ2V0VG90YWxUb2NzKCk7XFxyXFxuICAgICAgICAgICAgY29uc3QgcGVyY2VudGFnZSA9IE1hdGgucm91bmQocGVhayAvIG1heFBlYWsgKiAxMDApO1xcclxcblxcclxcbiAgICAgICAgICAgIGlmKCdmdW5jdGlvbicgPT0gdHlwZW9mIGNhbGxiYWNrKXtcXHJcXG4gICAgICAgICAgICAgICAgY2FsbGJhY2socGVyY2VudGFnZSxwZWFrLG1heFBlYWspO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICByZXBvcnQoc2VjdGlvbkluZGV4Om51bWJlcix0b2NJbmRleDpudW1iZXIsc3RhdHVzOm51bWJlcil7XFxyXFxuICAgICAgICAgICAgY29uc3Qgc2VjdGlvbiA9IHRoaXMuJHBhcmVudC5zZWN0aW9uc1tzZWN0aW9uSW5kZXhdO1xcclxcbiAgICAgICAgICAgIGNvbnN0IHNsdWcgPSBzZWN0aW9uLml0ZW1zW3RvY0luZGV4XS5zbHVnO1xcclxcbiAgICAgICAgICAgIGlmKCF0aGlzLnF1ZXVlU2x1Z3MuaW5jbHVkZXMoc2x1Zykpe1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXVlU2x1Z3MucHVzaChzbHVnKTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgY29uc3QgcmVtYWluaW5nVGV4dCA9IGAke3RoaXMucXVldWVTbHVncy5sZW5ndGh9IG9mICR7dGhpcy4kcGFyZW50LmdldFRvdGFsVG9jcygpfWBcXHJcXG4gICAgICAgICAgICB0aGlzLiRwYXJlbnQubG9nQmFyLmxvZyhgJHtzZWN0aW9uLnRpdGxlfSA6ICR7c2x1Z30gJHtyZW1haW5pbmdUZXh0fWAsc3RhdHVzKTtcXHJcXG5cXHJcXG4gICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZVBlcmNlbnRhZ2VRdWV1ZSgocGVyY2VudGFnZSk9PnRoaXMucGVyY2VudGFnZT1wZXJjZW50YWdlKTtcXHJcXG5cXHJcXG4gICAgICAgICAgICBpZih0aGlzLiRwYXJlbnQuZmV0Y2hRdWV1ZUJhcltzZWN0aW9uSW5kZXhdLnBlcmNlbnRhZ2U9PTEwMCl7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc1F1ZXVlKCk7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIHByb2Nlc3NRdWV1ZSgpe1xcclxcbiAgICAgICAgICAgIGlmKHRoaXMuc2VjdGlvbkluZGV4UXVldWVzLmxlbmd0aCA+IDApe1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RTZWN0aW9uSW5kZXggPSB0aGlzLnNlY3Rpb25JbmRleFF1ZXVlcy5zaGlmdCgpO1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQuZmV0Y2hRdWV1ZUJhclt0aGlzLmxhc3RTZWN0aW9uSW5kZXhdLnN0YXJ0UXVldWUoKTtcXHJcXG4gICAgICAgICAgICB9ZWxzZXtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5idG5TdGF0ZSA9IDM7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIHN0YXJ0UXVldWUoKXtcXHJcXG4gICAgICAgICAgICB0aGlzLmJ0blN0YXRlID0gMjtcXHJcXG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NRdWV1ZSgpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufSlcXHJcXG48L3NjcmlwdD5cXHJcXG5cXHJcXG48c3R5bGUgc2NvcGVkPlxcclxcbi5kYXRhLWNvZGVze1xcclxcbiAgICBiYWNrZ3JvdW5kOiB5ZWxsb3c7XFxyXFxufSAgICBcXHJcXG4uZmV0Y2gtc2VjdGlvbi1xdWV1ZS1wYntcXHJcXG4gICAgd2lkdGg6IDEwMnB4O1xcclxcbiAgICBoZWlnaHQ6IDI0cHg7XFxyXFxuICAgIHBhZGRpbmc6IDRweCAwO1xcclxcbiAgICBmbG9hdDpyaWdodDtcXHJcXG4gICAgY2xlYXI6Ym90aDtcXHJcXG59XFxyXFxuLmJ0bi1mZXRjaC1zZWN0aW9uLXF1ZXVle1xcclxcbiAgICBtYXJnaW4tdG9wOi04cHg7XFxyXFxuICAgIHBhZGRpbmc6MDtcXHJcXG4gICAgYm9yZGVyOm5vbmUgIWltcG9ydGFudDtcXHJcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcclxcbn1cXHJcXG4uZmV0Y2gtc2VjdGlvbi1xdWV1ZXtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICByaWdodDogNDlweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTJweDtcXHJcXG59XFxyXFxuLmJ0bi1mZXRjaC1zZWN0aW9uLXF1ZXVlLWNudHtcXHJcXG4gICB3aWR0aDogMjVweDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICByaWdodDogLTEycHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIuNXB4O1xcclxcbn1cXHJcXG48L3N0eWxlPlwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5sb2ctbWVzc2FnZVtkYXRhLXYtNWM4YTI4N2Nde1xcclxcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcclxcbiAgICBwYWRkaW5nOiAuMjVlbSAuNWVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcbn1cXG4ubG9nLW1lc3NhZ2UuZXJyb3JbZGF0YS12LTVjOGEyODdjXXtcXHJcXG4gICAgY29sb3I6I2ZmZjtcXHJcXG4gICAgYmFja2dyb3VuZDogcmVkO1xcbn1cXG4ubG9nLW1lc3NhZ2Uuc3VjY2Vzc1tkYXRhLXYtNWM4YTI4N2Nde1xcclxcbiAgICBjb2xvcjojZmZmO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBncmVlbjtcXG59XFxuLmxvZy1tZXNzYWdlLndhcm5pbmdbZGF0YS12LTVjOGEyODdjXXtcXHJcXG4gICAgY29sb3I6bWFyb29uO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB5ZWxsb3c7XFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9wb3B1cC9jb21wb25lbnRzL0xvZ0Jhci52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQTZCQTtJQUNJLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImxvZy1iYXJcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibG9nLW1lc3NhZ2VcXFwiIDpjbGFzcz1cXFwie2Vycm9yOm1vZGU9PTEsc3VjY2Vzczptb2RlPT0wLHdhcm5pbmc6bW9kZT09Mn1cXFwiPlxcclxcbiAgICAgICAgICAgIDxzcGFuPnt7bWVzc2FnZX19PC9zcGFuPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvdGVtcGxhdGU+XFxyXFxuXFxyXFxuPHNjcmlwdCBsYW5nPVxcXCJ0c1xcXCI+XFxyXFxuaW1wb3J0IHtkZWZpbmVDb21wb25lbnQscmVmfSBmcm9tICd2dWUnO1xcclxcblxcclxcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XFxyXFxuICAgIHNldHVwKCl7XFxyXFxuICAgICAgICBjb25zdCBtb2RlID0gcmVmKC0xKTtcXHJcXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSByZWYoJycpO1xcclxcblxcclxcbiAgICAgICAgcmV0dXJuIHttb2RlLG1lc3NhZ2V9O1xcclxcbiAgICB9LFxcclxcbiAgICBcXHJcXG4gICAgbWV0aG9kczp7XFxyXFxuICAgICAgICBsb2cobWVzc2FnZTpzdHJpbmcsbW9kZTpudW1iZXIpe1xcclxcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XFxyXFxuICAgICAgICAgICAgdGhpcy5tb2RlID0gbW9kZTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn0pXFxyXFxuPC9zY3JpcHQ+XFxyXFxuXFxyXFxuPHN0eWxlIHNjb3BlZD5cXHJcXG4ubG9nLW1lc3NhZ2V7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxyXFxuICAgIHBhZGRpbmc6IC4yNWVtIC41ZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDEwcHg7XFxyXFxufSAgICBcXHJcXG4ubG9nLW1lc3NhZ2UuZXJyb3J7XFxyXFxuICAgIGNvbG9yOiNmZmY7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJlZDtcXHJcXG59XFxyXFxuLmxvZy1tZXNzYWdlLnN1Y2Nlc3N7XFxyXFxuICAgIGNvbG9yOiNmZmY7XFxyXFxuICAgIGJhY2tncm91bmQ6IGdyZWVuO1xcclxcbn1cXHJcXG4ubG9nLW1lc3NhZ2Uud2FybmluZ3tcXHJcXG4gICAgY29sb3I6bWFyb29uO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB5ZWxsb3c7XFxyXFxufVxcclxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxudGQuZmNjW2RhdGEtdi0zYzM1NzRmZV17XFxyXFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgICB3aWR0aDoyLjVlbTtcXG59XFxudWwudG9jLWl0ZW0tbGlzdFtkYXRhLXYtM2MzNTc0ZmVde1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOm5vbmU7XFxyXFxuICBtYXJnaW46MDtcXHJcXG4gIHBhZGRpbmc6MDtcXG59XFxudGFibGUudG9jLWl0ZW0tbGlzdFtkYXRhLXYtM2MzNTc0ZmVde1xcclxcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuLnRvYy1pdGVtLXZpZXdbZGF0YS12LTNjMzU3NGZlXXtcXHJcXG4gICAgcGFkZGluZzogMCAyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogODAlO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xcbn1cXHJcXG5cXHJcXG5cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcG9wdXAvY29tcG9uZW50cy9Ub2NJdGVtLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBcUpBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLFFBQVE7RUFDUixTQUFTO0FBQ1g7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcInRvYy1pdGVtLXZpZXdcXFwiPlxcclxcbiAgICA8RmV0Y2hRdWV1ZSB2LXNob3c9XFxcImZhbHNlXFxcIiByZWY9XFxcImZldGNoUXVldWVcXFwiLz5cXHJcXG4gICAgPHRhYmxlIGNsYXNzPVxcXCJ0b2MtaXRlbS1saXN0XFxcIj5cXHJcXG4gICAgICAgIDx0aGVhZD5cXHJcXG4gICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgIDx0aCBjb2xzcGFuPVxcXCIyXFxcIj48bGFiZWw+PGlucHV0IEBjbGljaz1cXFwib25DaGVja0FsbCgpXFxcIiB2LW1vZGVsPVxcXCJjaGVja0FsbFxcXCIgY2xhc3M9XFxcImZvcm0tY2hlY2staW5wdXRcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIi8+IDxzcGFuIHN0eWxlPVxcXCJwYWRkaW5nLWxlZnQ6LjVlbVxcXCI+Q2hlY2sgQWxsPC9zcGFuPjwvbGFiZWw+PC90aD5cXHJcXG4gICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgPHRoPjwvdGg+XFxyXFxuICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiIHN0eWxlPVxcXCJ3aWR0aDo4MHB4XFxcIj48L3RoPlxcclxcbiAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICA8L3RoZWFkPlxcclxcbiAgICAgICAgPHRib2R5PlxcclxcbiAgICAgICAgPHRyIHYtZm9yPVxcXCIodG9jLHRvY0luZGV4KSBpbiBpdGVtc1xcXCIgY2xhc3M9XFxcInRvYy1pdGVtXFxcIiA6Y2xhc3M9XFxcIntvZHM6dG9jSW5kZXglMj09MH1cXFwiIDprZXk9XFxcInRvY0luZGV4XFxcIj5cXHJcXG4gICAgICAgICAgICA8dGQgY2xhc3M9XFxcImZjY1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCBAY2xpY2s9XFxcInRnUXVldWUodG9jSW5kZXgpXFxcIiBjbGFzcz1cXFwiZm9ybS1jaGVjay1pbnB1dFxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiIHYtbW9kZWw9XFxcImNoZWNrZWRRdWV1ZXNbdG9jSW5kZXhdXFxcIi8+IFxcclxcbiAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgPHRkIHN0eWxlPVxcXCJwYWRkaW5nLWxlZnQ6LjVlbVxcXCI+e3t0b2MudGl0bGV9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgPHRkIGNvbHNwYW49XFxcIjJcXFwiIHN0eWxlPVxcXCJ0ZXh0LWFsaWduOiByaWdodDtcXFwiPjxGZXRjaEJ1dHRvbiBAdXBkYXRlPVxcXCJvbkZldGNoVXBkYXRlKCRldmVudClcXFwiIDpzZWN0aW9uSW5kZXg9XFxcInNlY3Rpb25JbmRleFxcXCIgOnRvY0luZGV4PVxcXCJ0b2NJbmRleFxcXCIgOnRvYz1cXFwidG9jXFxcIiBjaGVja2VkUXVldWVzPVxcXCJjaGVja2VkUXVldWVzXFxcIiByZWY9XFxcImZldGNoQnRuc1xcXCIvPjwvdGQ+XFxyXFxuICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgPC90Ym9keT5cXHJcXG4gICAgPC90YWJsZT5cXHJcXG4gIDwvZGl2PlxcclxcbjwvdGVtcGxhdGU+XFxyXFxuPHNjcmlwdCBsYW5nPVxcXCJ0c1xcXCI+XFxyXFxuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYsIFByb3BUeXBlIH0gZnJvbSAndnVlJztcXHJcXG5pbXBvcnQgRmV0Y2hCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9GZXRjaEJ1dHRvbi52dWUnO1xcclxcbmltcG9ydCBGZXRjaFF1ZXVlIGZyb20gJy4uL2NvbXBvbmVudHMvRmV0Y2hRdWV1ZS52dWUnO1xcclxcbmltcG9ydCBUb2MgZnJvbSAnLi4vLi4vdHlwZXMvdG9jJztcXHJcXG5cXHJcXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xcclxcbiAgICBjb21wb25lbnRzOntcXHJcXG4gICAgICAgIEZldGNoQnV0dG9uLEZldGNoUXVldWVcXHJcXG4gICAgfSxcXHJcXG4gICAgcHJvcHM6e1xcclxcbiAgICAgICAgaXRlbXM6IHtcXHJcXG4gICAgICAgICAgICByZXF1aXJlZCA6IHRydWUsXFxyXFxuICAgICAgICAgICAgdHlwZSA6IEFycmF5IGFzIFByb3BUeXBlPFRvY1tdPlxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIHNlY3Rpb25JbmRleCA6IHtcXHJcXG4gICAgICAgICAgICByZXF1aWVkIDogdHJ1ZSxcXHJcXG4gICAgICAgICAgICB0eXBlIDogTnVtYmVyXFxyXFxuICAgICAgICB9XFxyXFxuICAgIH0sXFxyXFxuICAgIHNldHVwKHByb3BzKSB7XFxyXFxuICAgICAgICBjb25zdCBpdGVtcyA9IHJlZihwcm9wcy5pdGVtcyBhcyBUb2NbXSk7XFxyXFxuICAgICAgICBjb25zdCBzZWN0aW9uSW5kZXggPSByZWYocHJvcHMuc2VjdGlvbkluZGV4IGFzIG51bWJlcik7XFxyXFxuICAgICAgICBjb25zdCBjaGVja0FsbCA9IHJlZihmYWxzZSk7XFxyXFxuICAgICAgICBjb25zdCBjaGVja2VkUXVldWVzID0gcmVmKFtdKTtcXHJcXG4gICAgICAgIGNvbnN0IGV4Y2x1ZGVRdWV1ZXMgPSByZWYoW10pO1xcclxcbiAgICAgICAgbGV0IGZldGNoQnRucyA9IHJlZihbXSk7XFxyXFxuICAgICAgICBsZXQgZmV0Y2hRdWV1ZT0gcmVmKCk7XFxyXFxuICAgICAgICByZXR1cm4ge2l0ZW1zLCBzZWN0aW9uSW5kZXgsIGNoZWNrZWRRdWV1ZXMsIGV4Y2x1ZGVRdWV1ZXMsZmV0Y2hCdG5zLGNoZWNrQWxsLGZldGNoUXVldWV9O1xcclxcbiAgICB9LFxcclxcbiAgICBtb3VudGVkKCl7XFxyXFxuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XFxyXFxuICAgICAgICAgICAgdGhpcy5jaGVja0FsbCA9IHRydWU7XFxyXFxuICAgICAgICAgICAgZm9yKGxldCB0b2NJbmRleCBpbiB0aGlzLml0ZW1zKXtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja2VkUXVldWVzW3RvY0luZGV4XSA9IHRydWU7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfSwyNTApO1xcclxcbiAgICB9LFxcclxcbiAgICBtZXRob2RzOntcXHJcXG4gICAgICAgIHRyaWdnZXJGYWlsZWRGZXRjaFF1ZXVlKHRvY0luZGV4Om51bWJlcil7XFxyXFxuICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLmZldGNoUXVldWUuYnRuU3RhdGU9NDtcXHJcXG4gICAgICAgICAgICB9LDEwMDApO1xcclxcbiAgICAgICAgICAgIFxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIGNhbGN1bGF0ZVBlcmNlbnRhZ2VRdWV1ZShjYWxsYmFjayl7XFxyXFxuICAgICAgICAgICAgY29uc3QgcGVhayA9IHRoaXMuZXhjbHVkZVF1ZXVlcy5sZW5ndGg7XFxyXFxuICAgICAgICAgICAgY29uc3QgbWF4UGVhayA9IHRoaXMuaXRlbXMubGVuZ3RoO1xcclxcbiAgICAgICAgICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSBNYXRoLnJvdW5kKHBlYWsgLyBtYXhQZWFrICogMTAwKTtcXHJcXG5cXHJcXG4gICAgICAgICAgICBpZignZnVuY3Rpb24nID09IHR5cGVvZiBjYWxsYmFjayl7XFxyXFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHBlcmNlbnRhZ2UscGVhayxtYXhQZWFrKTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgdHJpZ2dlckV4Y2x1ZGVGZXRjaFF1ZXVlKHRvY0luZGV4Om51bWJlciwgZmV0Y2hRdWV1ZUVuYWJsZWQ6Ym9vbGVhbil7XFxyXFxuICAgICAgICAgICAgY29uc29sZS5sb2codG9jSW5kZXgpO1xcclxcbiAgICAgICAgICAgIGlmKHRoaXMuZXhjbHVkZVF1ZXVlcy5pbmRleE9mKHRvY0luZGV4KSA9PSAtMSl7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuZXhjbHVkZVF1ZXVlcy5wdXNoKHRvY0luZGV4KTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgaWYoZmV0Y2hRdWV1ZUVuYWJsZWQpe1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZVBlcmNlbnRhZ2VRdWV1ZSgocGVyY2VudGFnZSk9PntcXHJcXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZldGNoUXVldWUuc2V0UHJvZ3Jlc3ModG9jSW5kZXgscGVyY2VudGFnZSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcGFyZW50LmZldGNoUXVldWVCYXJbdGhpcy5zZWN0aW9uSW5kZXhdLnNldFByb2dyZXNzKHRvY0luZGV4LHBlcmNlbnRhZ2UpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfSw1MDApO1xcclxcbiAgICAgICAgICAgICAgICB9KTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgdGhpcy5jaGVja2VkUXVldWVzW3RvY0luZGV4XSA9IGZhbHNlO1xcclxcbiAgICAgICAgICAgIHRoaXMuY2hlY2tBbGwgPSBmYWxzZTtcXHJcXG4gICAgICAgXFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgdHJpZ2dlckZldGNoUXVldWUodG9jSW5kZXg6bnVtYmVyKXtcXHJcXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0b2NJbmRleCk7XFxyXFxuICAgICAgICAgICAgY29uc3QgbmV4dFRvY0luZGV4ID0gdG9jSW5kZXggKyAxO1xcclxcbiAgICAgICAgICAgIGlmKG5leHRUb2NJbmRleCA8IHRoaXMuY2hlY2tlZFF1ZXVlcy5sZW5ndGgpe1xcclxcbiAgICAgICAgICAgICAgICAvLyBwcm9jZXNzIG5leHQgZmV0Y2ggYnV0dG9uXFxyXFxuICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICB0aGlzLmZldGNoQnRuc1tuZXh0VG9jSW5kZXhdLmZldGNoVG9jKHRydWUpO1xcclxcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygpO1xcclxcbiAgICAgICAgICAgIH1lbHNle1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZVBlcmNlbnRhZ2VRdWV1ZSgocGVyY2VudGFnZSk9PntcXHJcXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZldGNoUXVldWUuc2V0UHJvZ3Jlc3ModG9jSW5kZXgscGVyY2VudGFnZSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcGFyZW50LmZldGNoUXVldWVCYXJbdGhpcy5zZWN0aW9uSW5kZXhdLnNldFByb2dyZXNzKHRvY0luZGV4LHBlcmNlbnRhZ2UpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfSw1MDApO1xcclxcbiAgICAgICAgICAgICAgICB9KTtcXHJcXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mZXRjaFF1ZXVlLmJ0blN0YXRlPXRoaXMuZmV0Y2hRdWV1ZS5wZXJjZW50YWdlPT0xMDA/MzoxO1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mZXRjaFF1ZXVlLmxhc3RUb2NJbmRleD0wO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcGFyZW50LmZldGNoUXVldWVCYXJbdGhpcy5zZWN0aW9uSW5kZXhdLmJ0blN0YXRlPXRoaXMuJHBhcmVudC5mZXRjaFF1ZXVlQmFyW3RoaXMuc2VjdGlvbkluZGV4XS5wZXJjZW50YWdlPT0xMDA/MzoxO1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcGFyZW50LmZldGNoUXVldWVCYXJbdGhpcy5zZWN0aW9uSW5kZXhdLmxhc3RUb2NJbmRleD0wO1xcclxcbiAgICAgICAgICAgICAgICB9LDEwMDApO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAvLyBjYWxsaW5nIGZldGNoIGJ1dHRvbiBuZXh0IGluZGV4XFxyXFxuICAgICAgICAgICAgLy8gdGhpcy4kcmVmXFxyXFxuXFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgb25GZXRjaFVwZGF0ZSh0YXJnZXQ6YW55KXtcXHJcXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0YXJnZXQpXFxyXFxuICAgICAgICAgICAgdGhpcy4kZW1pdCgndXBkYXRlJyx0YXJnZXQpO1xcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIG9uQ2hlY2tBbGwoKXtcXHJcXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XFxyXFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY2hlY2tBbGwpO1xcclxcbiAgICAgICAgICAgICAgICBmb3IobGV0IHRvY0luZGV4IGluIHRoaXMuaXRlbXMpe1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja2VkUXVldWVzW3RvY0luZGV4XSA9IHRoaXMuY2hlY2tBbGw7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9LDI1MCk7XFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgdGdRdWV1ZSh0b2NJbmRleDpudW1iZXIpe1xcclxcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcXHJcXG4gICAgICAgICAgICAgICAgLy8gdGhpcy4kcmVmcy5mZXRjaEJ0bnNbdG9jSW5kZXhdLmlzUXVldWVkID10aGlzLmNoZWNrZWRRdWV1ZXNbdG9jSW5kZXhdO1xcclxcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLiRyZWZzLmZldGNoQnRucyk7XFxyXFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY2hlY2tlZFF1ZXVlc1t0b2NJbmRleF0pO1xcclxcbiAgICAgICAgICAgIH0sMjUwKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIFxcclxcbiAgICB9XFxyXFxufSlcXHJcXG48L3NjcmlwdD5cXHJcXG5cXHJcXG48c3R5bGUgc2NvcGVkPlxcclxcbnRkLmZjY3tcXHJcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICAgIHdpZHRoOjIuNWVtO1xcclxcbn1cXHJcXG51bC50b2MtaXRlbS1saXN0e1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOm5vbmU7XFxyXFxuICBtYXJnaW46MDtcXHJcXG4gIHBhZGRpbmc6MDtcXHJcXG59XFxyXFxudGFibGUudG9jLWl0ZW0tbGlzdHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbi50b2MtaXRlbS12aWV3e1xcclxcbiAgICBwYWRkaW5nOiAwIDJlbTtcXHJcXG4gICAgZm9udC1zaXplOiA4MCU7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxZW07XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcblxcclxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmNvdXJzZVtkYXRhLXYtNmMxN2ZlYzdde1xcclxcbiAgbWFyZ2luLWJvdHRvbToxZW07XFxufVxcbi5jb3Vyc2Utc2VjdGlvbltkYXRhLXYtNmMxN2ZlYzdde1xcclxcbiAgcGFkZGluZzouNWVtIDA7XFxufVxcbi5hY2NvcmRpb24tYnV0dG9uW2RhdGEtdi02YzE3ZmVjN106Zm9jdXMge1xcclxcbiAgICB6LWluZGV4OiAzO1xcclxcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBvdXRsaW5lOiAwO1xcclxcbiAgICBib3gtc2hhZG93OiBub25lO1xcbn1cXG4uYWNjb3JkaW9uLWJ1dHRvbltkYXRhLXYtNmMxN2ZlYzddOm5vdCguY29sbGFwc2VkKSB7XFxyXFxuICAgIGNvbG9yOiBpbmhlcml0OyBcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcbi5hY2NvcmRpb24tYnV0dG9uW2RhdGEtdi02YzE3ZmVjN106bm90KC5jb2xsYXBzZWQpLFxcclxcbi5hY2NvcmRpb24tYnV0dG9uLmNvbGxhcHNlZFtkYXRhLXYtNmMxN2ZlYzddLFxcclxcbi5hY2NvcmRpb24tYnV0dG9uW2RhdGEtdi02YzE3ZmVjN106bm90KC5jb2xsYXBzZWQpOjphZnRlcixcXHJcXG4uYWNjb3JkaW9uLWJ1dHRvbi5jb2xsYXBzZWRbZGF0YS12LTZjMTdmZWM3XTo6YWZ0ZXJ7XFxyXFxuICBiYWNrZ3JvdW5kOm5vbmU7XFxufVxcbi5hY2NvcmRpb24tYnV0dG9uLmN1c3RvbVtkYXRhLXYtNmMxN2ZlYzddIHtcXHJcXG5wb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAyNHB4O1xcclxcbiAgICBwYWRkaW5nOiAwcHggNnB4O1xcclxcbiAgICBsZWZ0OiA1MXB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAzcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXG59XFxuLmFjY29yZGlvbi1ib2R5W2RhdGEtdi02YzE3ZmVjN117XFxyXFxuICBwYWRkaW5nOjA7XFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9wb3B1cC92aWV3cy9Db3Vyc2VQYWdlLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBOEhBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGNBQWM7SUFDZCw2QkFBNkI7SUFDN0IsZ0JBQWdCO0FBQ3BCO0FBQ0E7Ozs7RUFJRSxlQUFlO0FBQ2pCO0FBQ0E7QUFDQSxrQkFBa0I7SUFDZCxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbEI7QUFDQTtFQUNDLFNBQVM7QUFDVlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJjb3Vyc2UtcGFnZSBwYWdlXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZnNxY1xcXCI+XFxyXFxuICAgICAgPEZldGNoU2VjdGlvblF1ZXVlIHJlZj1cXFwiZmV0Y2hTZWN0aW9uUXVldWVcXFwiLz5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvdXJzZVxcXCI+XFxyXFxuICAgICAgPGgyPjxpIGNsYXNzPVxcXCJmYSBmYS1ib29rbWFya1xcXCI+PC9pPiB7e2NvdXJzZS50aXRsZX19IGJ5IDxzcGFuIHYtZm9yPVxcXCJhdXRob3IgaW4gYXV0aG9yc1xcXCI+e3ttYWtlVGl0bGUoYXV0aG9yLnNsdWcpfX08L3NwYW4+PC9oMj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImFjY29yZGlvbiBhY2NvcmRpb24tZmx1c2hcXFwiIGlkPVxcXCJhY2NvcmRpb25Db3Vyc2VcXFwiPlxcclxcbiAgICA8ZGl2IHYtZm9yPVxcXCIoc2VjdGlvbixzZWN0aW9uSW5kZXggKSBpbiBzZWN0aW9uc1xcXCIgOmtleT1cXFwic2VjdGlvbkluZGV4XFxcIiBjbGFzcz1cXFwiYWNjb3JkaW9uLWl0ZW1cXFwiPlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImFjY29yZGlvbi1oZWFkZXJcXFwiIDppZD1cXFwiJ2hlYWRpbmcnK3NlY3Rpb25JbmRleFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3cgY291cnNlLXNlY3Rpb25cXFwiPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0IGFjY29yZGlvbi1idXR0b24gY3VzdG9tIGJ0bi1jb2xsYXBzZVxcXCIgZGF0YS1icy10b2dnbGU9XFxcImNvbGxhcHNlXFxcIiA6ZGF0YS1icy10YXJnZXQ9XFxcIicjY29sbGFwc2UnK3NlY3Rpb25JbmRleFxcXCIgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiIDphcmlhLWNvbnRyb2xzPVxcXCInY29sbGFwc2UnK3NlY3Rpb25JbmRleFxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLXBsdXNcXFwiPjwvaT48L2J1dHRvbj5cXHJcXG5cXHJcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLThcXFwiIHN0eWxlPVxcXCJwYWRkaW5nLWxlZnQ6Mi41ZW1cXFwiPnt7c2VjdGlvbi50aXRsZX19PC9kaXY+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC00XFxcIj48RmV0Y2hRdWV1ZUJhciByZWY9XFxcImZldGNoUXVldWVCYXJcXFwiIDpzZWN0aW9uSW5kZXg9XFxcInNlY3Rpb25JbmRleFxcXCIvPjwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgICAgPGRpdiA6aWQ9XFxcIidjb2xsYXBzZScrc2VjdGlvbkluZGV4XFxcIiBjbGFzcz1cXFwiYWNjb3JkaW9uLWNvbGxhcHNlIGNvbGxhcHNlXFxcIiA6YXJpYS1sYWJlbGxlZGJ5PVxcXCInaGVhZGluZycrc2VjdGlvbkluZGV4XFxcIiBkYXRhLWJzLXBhcmVudD1cXFwiI2FjY29yZGlvbkNvdXJzZVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhY2NvcmRpb24tYm9keVxcXCI+XFxyXFxuICAgICAgICAgIDxUb2NJdGVtIDppdGVtcz1cXFwic2VjdGlvbi5pdGVtc1xcXCIgOnNlY3Rpb25JbmRleD1cXFwic2VjdGlvbkluZGV4XFxcIiBAdXBkYXRlPVxcXCJvblRvY1VwZGF0ZSgkZXZlbnQpXFxcIiByZWY9XFxcInRvY0l0ZW1zXFxcIi8+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJsYmNcXFwiPlxcclxcbiAgICAgIDxMb2dCYXIgcmVmPVxcXCJsb2dCYXJcXFwiLz5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICA8L2Rpdj5cXHJcXG48L3RlbXBsYXRlPlxcclxcbjxzY3JpcHQgbGFuZz1cXFwidHNcXFwiPlxcclxcbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCxyZWYsUHJvcFR5cGUgfSBmcm9tICd2dWUnO1xcclxcbmltcG9ydCBDb3Vyc2UgZnJvbSAnLi4vLi4vdHlwZXMvY291cnNlJztcXHJcXG5pbXBvcnQgVG9jIGZyb20gJy4uLy4uL3R5cGVzL3RvYyc7XFxyXFxuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi4vLi4vdHlwZXMvc2VjdGlvbic7XFxyXFxuaW1wb3J0IEF1dGhvciBmcm9tICcuLi8uLi90eXBlcy9hdXRob3InO1xcclxcbmltcG9ydCBFeGVyY2lzZUZpbGUgZnJvbSAnLi4vLi4vdHlwZXMvRXhlcmNpc2VGaWxlJztcXHJcXG5pbXBvcnQgVG9jSXRlbSBmcm9tICcuLi9jb21wb25lbnRzL1RvY0l0ZW0udnVlJztcXHJcXG5pbXBvcnQgRmV0Y2hRdWV1ZUJhciBmcm9tICcuLi9jb21wb25lbnRzL0ZldGNoUXVldWVCYXIudnVlJztcXHJcXG5pbXBvcnQgRmV0Y2hTZWN0aW9uUXVldWUgZnJvbSAnLi4vY29tcG9uZW50cy9GZXRjaFNlY3Rpb25RdWV1ZS52dWUnO1xcclxcbmltcG9ydCBMb2dCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9Mb2dCYXIudnVlJztcXHJcXG5pbXBvcnQgQ291cnNlRGF0YSBmcm9tICcuLi9jb21wb25lbnRzL0NvdXJzZURhdGEudnVlJztcXHJcXG5pbXBvcnQge21ha2VUaXRsZX0gZnJvbSAnLi4vLi4vbGlicy91dGlscyc7XFxyXFxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcXHJcXG5pbXBvcnQgU3RvcmUgZnJvbSBcXFwiLi4vLi4vbGlicy9zdG9yZVxcXCI7XFxyXFxuXFxyXFxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcXHJcXG4gIGNvbXBvbmVudHM6e1xcclxcbiAgICBUb2NJdGVtLEZldGNoUXVldWVCYXIsRmV0Y2hTZWN0aW9uUXVldWUsTG9nQmFyLENvdXJzZURhdGFcXHJcXG4gIH0sXFxyXFxuICBwcm9wczp7XFxyXFxuICAgIGNvdXJzZSA6IHtcXHJcXG4gICAgICByZXF1aXJlZCA6IHRydWUsXFxyXFxuICAgICAgdHlwZSA6IE9iamVjdCBhcyBQcm9wVHlwZTxDb3Vyc2U+XFxyXFxuICAgIH1cXHJcXG4gIH0sXFxyXFxuICBzZXR1cChwcm9wcykge1xcclxcbiAgICBjb25zdCBjb3Vyc2UgPSByZWYocHJvcHMuY291cnNlKTtcXHJcXG4gICAgY29uc3QgYXV0aG9ycyA9IHJlZihbXSBhcyBBdXRob3JbXSk7XFxyXFxuICAgIGNvbnN0IHNlY3Rpb25zID0gcmVmKFtdIGFzIFNlY3Rpb25bXSk7XFxyXFxuICAgIGNvbnN0IGV4ZXJjaXNlRmlsZSA9IHJlZih7fSBhcyBFeGVyY2lzZUZpbGUpO1xcclxcbiAgICBjb25zdCB0b2NJdGVtcyA9IHJlZihbXSk7XFxyXFxuICAgIGNvbnN0IGZldGNoUXVldWVCYXIgPSByZWYoW10pO1xcclxcbiAgICBjb25zdCBmZXRjaFNlY3Rpb25RdWV1ZT1yZWYoe30pO1xcclxcbiAgICBjb25zdCBsb2dCYXI9cmVmKHt9KTtcXHJcXG4gICAgY29uc3QgY291cnNlRGF0YT1yZWYoe30pO1xcclxcbiAgICByZXR1cm4ge2NvdXJzZSxhdXRob3JzLHNlY3Rpb25zLGV4ZXJjaXNlRmlsZSx0b2NJdGVtcyxcXHJcXG4gICAgZmV0Y2hRdWV1ZUJhcixmZXRjaFNlY3Rpb25RdWV1ZSxsb2dCYXIsY291cnNlRGF0YX07XFxyXFxuICB9LFxcclxcbiAgbW91bnRlZCgpe1xcclxcbiAgICAkKCcuYnRuLWNvbGxhcHNlJykuY2xpY2soZnVuY3Rpb24oKSB7XFxyXFxuICAgICAgICAkKHRoaXMpLmZpbmQoJ2knKS50b2dnbGVDbGFzcygnZmEgZmEtcGx1cyBmYSBmYS1taW51cycpO1xcclxcbiAgICAgICAgJCgnLmJ0bi1jb2xsYXBzZScpLm5vdCh0aGlzKS5maW5kKCdpJykucmVtb3ZlQ2xhc3MoJ2ZhLW1pbnVzJykuYWRkQ2xhc3MoJ2ZhLXBsdXMgJyk7XFxyXFxuICAgIH0pO1xcclxcbiAgICB0cnl7XFxyXFxuICAgICAgdGhpcy5sb2FkQ291cnNlRGF0YSgpO1xcclxcbiAgICB9Y2F0Y2goZSl7fVxcclxcbiAgfSxcXHJcXG4gIG1ldGhvZHM6e1xcclxcbiAgICBsb2FkQ291cnNlRGF0YSgpe1xcclxcbiAgICAgIGNvbnN0IGNvdXJzZVNsdWcgPSB0aGlzLmNvdXJzZS5zbHVnO1xcclxcbiAgICAgIHRoaXMuY291cnNlID0gU3RvcmUuZ2V0Q291cnNlKGNvdXJzZVNsdWcpWzBdO1xcclxcbiAgICAgIGNvbnN0IHNlY3Rpb25zID0gU3RvcmUuZ2V0U2VjdGlvbkJ5Q291cnNlSWQodGhpcy5jb3Vyc2UuSUQpO1xcclxcbiAgICAgIHNlY3Rpb25zLm1hcCgoc2VjdGlvblRtcCk9PntcXHJcXG4gICAgICAgIGNvbnN0IHNlY3Rpb25JZCA9IHNlY3Rpb25UbXAuSUQ7XFxyXFxuICAgICAgICBsZXQgc2VjdGlvbiA9IHNlY3Rpb25UbXAgO1xcclxcbiAgICAgICAgc2VjdGlvbi5pdGVtcyA9IFN0b3JlLmdldFRvY0J5U2VjdGlvbklkKHNlY3Rpb24uSUQpIDtcXHJcXG4gICAgICAgIHRoaXMuc2VjdGlvbnMucHVzaChzZWN0aW9uKTtcXHJcXG4gICAgICB9KTtcXHJcXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmNvdXJzZSk7XFxyXFxuICAgICAgdGhpcy5jb3Vyc2UuYXV0aG9ySWRzLm1hcCgoSUQpPT57XFxyXFxuICAgICAgICB0aGlzLmF1dGhvcnMucHVzaChTdG9yZS5nZXRBdXRob3JCeUlkKElEKVswXSk7XFxyXFxuICAgICAgfSlcXHJcXG4gICAgICAvLyB0aGlzLmF1dGhvcnMgPVxcclxcbiAgICB9LFxcclxcbiAgICB1cGRhdGVUb2NJdGVtcyhleGVyY2lzZUZpbGUsdG9jKXtcXHJcXG4gICAgICB0aGlzLmV4ZXJjaXNlRmlsZSA9IFN0b3JlLmNyZWF0ZUV4ZXJjaXNlRmlsZSh0aGlzLmNvdXJzZS5JRCwgZXhlcmNpc2VGaWxlLm5hbWUsIGV4ZXJjaXNlRmlsZS51cmwsIGV4ZXJjaXNlRmlsZS5zaXplSW5CeXRlcyk7XFxyXFxuICAgICAgY29uc29sZS5sb2coZXhlcmNpc2VGaWxlLHRvYyk7XFxyXFxuXFxyXFxuICAgICAgLy8gdXBkYXRlIHRvYyBjYXB0aW9uXFxyXFxuICAgICAgU3RvcmUudXBkYXRlVG9jQ2FwdGlvbih0b2Muc2x1Zyx0b2MuY2FwdGlvblVybCx0b2MuY2FwdGlvbkZtdCk7XFxyXFxuICAgICAgLy8gVXBkYXRlIG9yIGNyZWF0ZSBzdHJlYW1pbmcgbG9jYXRpb25cXHJcXG4gICAgICBTdG9yZS5jcmVhdGVTdHJlYW1Mb2NhdGlvbkxpc3QodG9jLnNsdWcsdG9jLnN0cmVhbUxvY2F0aW9ucyk7XFxyXFxuICAgIH0sXFxyXFxuICAgIG9uVG9jVXBkYXRlKGV2dDphbnkpe1xcclxcbiAgICAgIGlmKGV2dC5zcmMgPT09ICdQb3B1cC5Db3Vyc2VQYWdlLlRvY0l0ZW0uRmV0Y2hCdXR0b24nKXtcXHJcXG4gICAgICAgIHRoaXMudXBkYXRlVG9jSXRlbXMoZXZ0LmV4ZXJjaXNlRmlsZSwgZXZ0LnRvYyk7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZScsZXZ0KTtcXHJcXG4gICAgfSxcXHJcXG4gICAgbWFrZVRpdGxlKHNsdWcgOiBzdHJpbmcpIHtcXHJcXG4gICAgICAgIHJldHVybiBtYWtlVGl0bGUoc2x1Zyk7XFxyXFxuICAgIH0sXFxyXFxuICAgIGdldFRvdGFsVG9jcygpe1xcclxcbiAgICAgICAgbGV0IHRvdGFsVG9jcyA9MDtcXHJcXG4gICAgICAgIHRoaXMuc2VjdGlvbnMubWFwKChzKT0+e1xcclxcbiAgICAgICAgICB0b3RhbFRvY3MgKz0gcy5pdGVtcy5sZW5ndGg7XFxyXFxuICAgICAgICB9KTtcXHJcXG4gICAgICAgIHJldHVybiB0b3RhbFRvY3M7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59KVxcclxcbjwvc2NyaXB0PlxcclxcblxcclxcbjxzdHlsZSBzY29wZWQ+XFxyXFxuLmNvdXJzZXtcXHJcXG4gIG1hcmdpbi1ib3R0b206MWVtO1xcclxcbn1cXHJcXG4uY291cnNlLXNlY3Rpb257XFxyXFxuICBwYWRkaW5nOi41ZW0gMDtcXHJcXG59XFxyXFxuLmFjY29yZGlvbi1idXR0b246Zm9jdXMge1xcclxcbiAgICB6LWluZGV4OiAzO1xcclxcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBvdXRsaW5lOiAwO1xcclxcbiAgICBib3gtc2hhZG93OiBub25lO1xcclxcbn1cXHJcXG4uYWNjb3JkaW9uLWJ1dHRvbjpub3QoLmNvbGxhcHNlZCkge1xcclxcbiAgICBjb2xvcjogaW5oZXJpdDsgXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3gtc2hhZG93OiBub25lOyBcXHJcXG59XFxyXFxuLmFjY29yZGlvbi1idXR0b246bm90KC5jb2xsYXBzZWQpLFxcclxcbi5hY2NvcmRpb24tYnV0dG9uLmNvbGxhcHNlZCxcXHJcXG4uYWNjb3JkaW9uLWJ1dHRvbjpub3QoLmNvbGxhcHNlZCk6OmFmdGVyLFxcclxcbi5hY2NvcmRpb24tYnV0dG9uLmNvbGxhcHNlZDo6YWZ0ZXJ7XFxyXFxuICBiYWNrZ3JvdW5kOm5vbmU7XFxyXFxufVxcclxcbi5hY2NvcmRpb24tYnV0dG9uLmN1c3RvbSB7XFxyXFxucG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMjRweDtcXHJcXG4gICAgcGFkZGluZzogMHB4IDZweDtcXHJcXG4gICAgbGVmdDogNTFweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogM3B4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDEwcHg7XFxyXFxuIH1cXHJcXG4gLmFjY29yZGlvbi1ib2R5e1xcclxcbiAgcGFkZGluZzowO1xcclxcbiB9XFxyXFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uYWN0aW9uLWNudFtkYXRhLXYtNjJhYTQwMzhde1xcclxcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XFxyXFxuICBwYWRkaW5nOi41ZW07XFxufVxcbi5idG4tY250W2RhdGEtdi02MmFhNDAzOF17XFxyXFxuICBtYXJnaW46MWVtO1xcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcG9wdXAvdmlld3MvV2VsY29tZVBhZ2UudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUEwREE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxVQUFVO0FBQ1pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwid2VsY29tZS1wYWdlIHBhZ2VcXFwiPlxcclxcbiAgICA8cD57e2dyZWV0aW5nfX08L3A+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImFjdGlvbi1jbnRcXFwiPlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duXFxcIiB2LWlmPVxcXCJsYXN0Q291cnNlTGlzdC5sZW5ndGg+MFxcXCI+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXNlY29uZGFyeSBkcm9wZG93bi10b2dnbGVcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgaWQ9XFxcInJlY2VudENvdXJzZUJ1dHRvblxcXCIgZGF0YS1icy10b2dnbGU9XFxcImRyb3Bkb3duXFxcIiBhcmlhLWV4cGFuZGVkPVxcXCJmYWxzZVxcXCI+XFxyXFxuICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1oaXN0b3J5XFxcIj48L2k+IExvYWQgUmVjZW50IENvdXJzZVxcclxcbiAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICA8dWwgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwicmVjZW50Q291cnNlQnV0dG9uXFxcIj5cXHJcXG4gICAgICAgICAgPGxpIHYtZm9yPVxcXCJjb3Vyc2UgaW4gbGFzdENvdXJzZUxpc3RcXFwiPjxhIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIEBjbGljaz1cXFwiZmV0Y2hDb3Vyc2VMUyhjb3Vyc2UpXFxcIj57eyBjb3Vyc2UudGl0bGUgfX08L2E+PC9saT5cXHJcXG4gICAgICAgIDwvdWw+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiYnRuLWNudFxcXCI+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1oYW5kLW8tcmlnaHRcXFwiPjwvaT4gRmV0Y2ggVGhpcyBDb3Vyc2U8L2J1dHRvbj5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICA8L2Rpdj5cXHJcXG48L3RlbXBsYXRlPlxcclxcbjxzY3JpcHQgbGFuZz1cXFwidHNcXFwiPlxcclxcbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCxyZWYgfSBmcm9tICd2dWUnO1xcclxcbmltcG9ydCBTdG9yZSBmcm9tICcuLi8uLi9saWJzL3N0b3JlJztcXHJcXG5cXHJcXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xcclxcbiAgc2V0dXAoKSB7XFxyXFxuICAgIGNvbnN0IG5hdiA9IHJlZignd2VsY29tZScpO1xcclxcbiAgICBjb25zdCBncmVldGluZyA9IHJlZignV2VsY29tZSB0byBMTEZldGNoZXIsIHdoYXQgZG8geW91IHdhbnQgdG8gZG8gPycpO1xcclxcbiAgICBjb25zdCBsYXN0Q291cnNlTGlzdCA9IHJlZihbXFxyXFxuXFxyXFxuICAgIF0pO1xcclxcbiAgICByZXR1cm4ge1xcclxcbiAgICAgIG5hdixncmVldGluZyxsYXN0Q291cnNlTGlzdFxcclxcbiAgICB9XFxyXFxuICB9LFxcclxcbiAgbW91bnRlZCgpe1xcclxcbiAgICBzZXRUaW1lb3V0KCgpPT57XFxyXFxuICAgICAgY29uc3QgYXBwSW5mbyA9IFN0b3JlLmdldEFwcEluZm8oKTtcXHJcXG4gICAgICBcXHJcXG4gICAgICBjb25zdCBsYXN0Q291cnNlcyA9IFN0b3JlLmdldExhc3RDb3Vyc2VzKCk7XFxyXFxuICAgICAgaWYobGFzdENvdXJzZXMubGVuZ3RoID4gMCl7XFxyXFxuICAgICAgICB0aGlzLmxhc3RDb3Vyc2VMaXN0ID0gW107XFxyXFxuICAgICAgICBsYXN0Q291cnNlcy5tYXAoKGNvdXJzZSk9PntcXHJcXG4gICAgICAgICAgICB0aGlzLmxhc3RDb3Vyc2VMaXN0LnB1c2goY291cnNlKTtcXHJcXG4gICAgICAgIH0pO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfSwxMDAwKTtcXHJcXG5cXHJcXG4gIH0sXFxyXFxuICBtZXRob2RzOntcXHJcXG4gICAgZmV0Y2hDb3Vyc2VMUyhjb3Vyc2Upe1xcclxcbiAgICAgIGNvbnNvbGUubG9nKGNvdXJzZSk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59KVxcclxcbjwvc2NyaXB0PlxcclxcblxcclxcbjxzdHlsZSBzY29wZWQ+XFxyXFxuLmFjdGlvbi1jbnR7XFxyXFxuICB0ZXh0LWFsaWduOmNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6LjVlbTtcXHJcXG59XFxyXFxuLmJ0bi1jbnR7XFxyXFxuICBtYXJnaW46MWVtO1xcclxcbn1cXHJcXG48L3N0eWxlPlwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0udXNlWzBdIS4vUG9wdXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWY0YmJjYzAmc2NvcGVkPXRydWUmbGFuZz1jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHA7XG5cbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0udXNlWzBdIS4vUG9wdXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWY0YmJjYzAmc2NvcGVkPXRydWUmbGFuZz1jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzhdLnVzZVswXSEuL1BvcHVwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVmNGJiY2MwJnNjb3BlZD10cnVlJmxhbmc9Y3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzhdLnVzZVswXSEuL0NvdXJzZURhdGEudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2JiMjYxOWMmc2NvcGVkPXRydWUmbGFuZz1jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHA7XG5cbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0udXNlWzBdIS4vQ291cnNlRGF0YS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zYmIyNjE5YyZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0udXNlWzBdIS4vQ291cnNlRGF0YS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zYmIyNjE5YyZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s4XS51c2VbMF0hLi9GZXRjaFF1ZXVlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTE4YThmZTQ0JnNjb3BlZD10cnVlJmxhbmc9Y3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzhdLnVzZVswXSEuL0ZldGNoUXVldWUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MThhOGZlNDQmc2NvcGVkPXRydWUmbGFuZz1jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzhdLnVzZVswXSEuL0ZldGNoUXVldWUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MThhOGZlNDQmc2NvcGVkPXRydWUmbGFuZz1jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0udXNlWzBdIS4vRmV0Y2hRdWV1ZUJhci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD05MDVhZWM0MiZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s4XS51c2VbMF0hLi9GZXRjaFF1ZXVlQmFyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTkwNWFlYzQyJnNjb3BlZD10cnVlJmxhbmc9Y3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s4XS51c2VbMF0hLi9GZXRjaFF1ZXVlQmFyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTkwNWFlYzQyJnNjb3BlZD10cnVlJmxhbmc9Y3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzhdLnVzZVswXSEuL0ZldGNoU2VjdGlvblF1ZXVlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTZhZmRhNjQ5JnNjb3BlZD10cnVlJmxhbmc9Y3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzhdLnVzZVswXSEuL0ZldGNoU2VjdGlvblF1ZXVlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTZhZmRhNjQ5JnNjb3BlZD10cnVlJmxhbmc9Y3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s4XS51c2VbMF0hLi9GZXRjaFNlY3Rpb25RdWV1ZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02YWZkYTY0OSZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s4XS51c2VbMF0hLi9Mb2dCYXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWM4YTI4N2Mmc2NvcGVkPXRydWUmbGFuZz1jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHA7XG5cbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0udXNlWzBdIS4vTG9nQmFyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVjOGEyODdjJnNjb3BlZD10cnVlJmxhbmc9Y3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s4XS51c2VbMF0hLi9Mb2dCYXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWM4YTI4N2Mmc2NvcGVkPXRydWUmbGFuZz1jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0udXNlWzBdIS4vVG9jSXRlbS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zYzM1NzRmZSZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s4XS51c2VbMF0hLi9Ub2NJdGVtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNjMzU3NGZlJnNjb3BlZD10cnVlJmxhbmc9Y3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s4XS51c2VbMF0hLi9Ub2NJdGVtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNjMzU3NGZlJnNjb3BlZD10cnVlJmxhbmc9Y3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzhdLnVzZVswXSEuL0NvdXJzZVBhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmMxN2ZlYzcmc2NvcGVkPXRydWUmbGFuZz1jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHA7XG5cbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0udXNlWzBdIS4vQ291cnNlUGFnZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02YzE3ZmVjNyZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0udXNlWzBdIS4vQ291cnNlUGFnZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02YzE3ZmVjNyZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s4XS51c2VbMF0hLi9XZWxjb21lUGFnZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02MmFhNDAzOCZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s4XS51c2VbMF0hLi9XZWxjb21lUGFnZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02MmFhNDAzOCZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0udXNlWzBdIS4vV2VsY29tZVBhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjJhYTQwMzgmc2NvcGVkPXRydWUmbGFuZz1jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcG9wdXAuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BvcHVwLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcG9wdXAuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnO1xyXG5pbXBvcnQgUGFnZU5hdmlnYXRpb24gZnJvbSAnLi9jb21wb25lbnRzL1BhZ2VOYXZpZ2F0aW9uLnZ1ZSc7XHJcbmltcG9ydCBXZWxjb21lUGFnZSBmcm9tICcuL3ZpZXdzL1dlbGNvbWVQYWdlLnZ1ZSc7XHJcbmltcG9ydCBIb21lUGFnZSBmcm9tICcuL3ZpZXdzL0hvbWVQYWdlLnZ1ZSc7XHJcbmltcG9ydCBMb2FkaW5nUGFnZSBmcm9tICcuL3ZpZXdzL0xvYWRpbmdQYWdlLnZ1ZSc7XHJcbmltcG9ydCBDb3Vyc2VQYWdlIGZyb20gJy4vdmlld3MvQ291cnNlUGFnZS52dWUnO1xyXG5pbXBvcnQgRG93bmxvYWRQYWdlIGZyb20gJy4vdmlld3MvRG93bmxvYWRQYWdlLnZ1ZSc7XHJcbmltcG9ydCBBYm91dFBhZ2UgZnJvbSAnLi92aWV3cy9BYm91dFBhZ2UudnVlJztcclxuaW1wb3J0IEhlbHBQYWdlIGZyb20gJy4vdmlld3MvSGVscFBhZ2UudnVlJztcclxuaW1wb3J0IFN0b3JlIGZyb20gJy4uL2xpYnMvc3RvcmUnO1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xyXG4gICAgbmFtZTogJ1BvcHVwJyxcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICBQYWdlTmF2aWdhdGlvbixcclxuICAgICAgICBXZWxjb21lUGFnZSxcclxuICAgICAgICBMb2FkaW5nUGFnZSxcclxuICAgICAgICBIb21lUGFnZSxcclxuICAgICAgICBDb3Vyc2VQYWdlLFxyXG4gICAgICAgIERvd25sb2FkUGFnZSxcclxuICAgICAgICBBYm91dFBhZ2UsXHJcbiAgICAgICAgSGVscFBhZ2VcclxuICAgIH0sXHJcbiAgICBzZXR1cCgpIHtcclxuICAgICAgICBjb25zdCBuYXYgPSByZWYoJ3dlbGNvbWUnKTtcclxuICAgICAgICBjb25zdCBjb3Vyc2UgPSByZWYoe30pO1xyXG4gICAgICAgIGNvbnN0IG9uTmF2VXBkYXRlID0gKHRhcmdldCkgPT4ge1xyXG4gICAgICAgICAgICBuYXYudmFsdWUgPSB0YXJnZXQ7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBvbkNvdXJzZVVwZGF0ZSA9ICh0YXJnZXQpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGFyZ2V0KTtcclxuICAgICAgICAgICAgLy8gdGhpcy5yZWJ1aWxkQ291cnNlSW5mbyhzZWN0aW9uSW5kZXgsIHRvY0luZGV4LCB0b2MpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IHJlZignJyk7XHJcbiAgICAgICAgY29uc3QgYXBwID0gcmVmKHsgc3RhdGU6IDAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHsgbmF2LCBjb3Vyc2UsIG9uTmF2VXBkYXRlLCBvbkNvdXJzZVVwZGF0ZSwgbWVzc2FnZSwgYXBwIH07XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnQXBwIEVudHJ5IFBvaW50IFN0YXJ0IGhlcmUuLi4nKTtcclxuICAgICAgICBTdG9yZS5wcmVwYXJlQXBwU3RvcmFnZSgpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkYiA9IFN0b3JlLmRiKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRiKTtcclxuICAgICAgICAgICAgZGIuc3Vic2NyaWJlKCdhcHAnLCAocm93KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyb3cpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHAgPSByb3c7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZyhgQXBwU3RhdGU6JHtyb3cuc3RhdGV9YCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBsb2cobWVzc2FnZSkge1xyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0Q291cnNlKGNvdXJzZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNvdXJzZSA9IGNvdXJzZTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5hdiA9IHRoaXMuJHJlZnMucGFnZU5hdmlnYXRpb24ubmF2ID0gJ2NvdXJzZSc7XHJcbiAgICAgICAgICAgIH0sIDI1MCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnO1xyXG5pbXBvcnQgU3RvcmUgZnJvbSAnLi4vLi4vbGlicy9zdG9yZSc7XHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XHJcbiAgICBzZXR1cChwcm9wcykge1xyXG4gICAgICAgIGNvbnN0IGNvdXJzZURhdGEgPSByZWYoe30pO1xyXG4gICAgICAgIGNvbnN0IGNvdXJzZSA9IHJlZih7fSk7XHJcbiAgICAgICAgY29uc3Qgc2VjdGlvbnMgPSByZWYoW10pO1xyXG4gICAgICAgIGNvbnN0IGF1dGhvcnMgPSByZWYoW10pO1xyXG4gICAgICAgIGNvbnN0IHRvY3MgPSByZWYoW10pO1xyXG4gICAgICAgIHJldHVybiB7IGNvdXJzZURhdGEsIGNvdXJzZSwgc2VjdGlvbnMsIHRvY3MsIGF1dGhvcnMgfTtcclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICAgIC8vIHRoaXMuaW5pdENvdXJzZURhdGEoKTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgaW5pdENvdXJzZURhdGEoKSB7XHJcbiAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgIC8vIG1vdmVkIHRvIHNyYy9saWJzL1N0b3JlLnRzXHJcbiAgICAgICAgICAgIGNvbnN0IGNvdXJzZVRtcCA9IHRoaXMuJHBhcmVudC5jb3Vyc2U7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlY3Rpb25zID0gdGhpcy4kcGFyZW50LnNlY3Rpb25zO1xyXG4gICAgICAgICAgICBjb25zdCBhdXRob3JzID0gdGhpcy4kcGFyZW50LmF1dGhvcnM7XHJcbiAgICAgICAgICAgIFN0b3JlLmluaXQoKTtcclxuICAgIFxyXG4gICAgICAgICAgICBjb25zdCBjb3Vyc2UgPSBTdG9yZS5jcmVhdGVDb3Vyc2UoY291cnNlVG1wLnRpdGxlLCBjb3Vyc2VUbXAuc2x1ZywgY291cnNlVG1wLmR1cmF0aW9uLCBjb3Vyc2VUbXAuc291cmNlQ29kZVJlcG9zaXRvcnksIGNvdXJzZVRtcC5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgIFxyXG4gICAgICAgICAgICB0aGlzLmNvdXJzZSA9IGNvdXJzZTtcclxuICAgICAgICAgICAgc2VjdGlvbnMubWFwKChzZWN0aW9uVG1wKT0+e1xyXG4gICAgICAgICAgICAgIGNvbnN0IHNlY3Rpb24gPSBTdG9yZS5jcmVhdGVTZWN0aW9uKHRoaXMuY291cnNlLklELHNlY3Rpb25UbXAudGl0bGUpO1xyXG4gICAgICAgICAgICAgIHRoaXMuc2VjdGlvbnMucHVzaChzZWN0aW9uKTtcclxuICAgICAgICAgICAgICBzZWN0aW9uVG1wLml0ZW1zLm1hcCgodG9jVG1wKT0+e1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdG9jID0gU3RvcmUuY3JlYXRlVG9jKHNlY3Rpb24uSUQsdG9jVG1wLnRpdGxlLHRvY1RtcC5zbHVnLHRvY1RtcC5kdXJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvY3MucHVzaCh0b2MpO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgU3RvcmUuY3JlYXRlQXV0aG9yTGlzdChjb3Vyc2Uuc2x1ZyxhdXRob3JzKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVJdGVtRnJvbUxTKCk7XHJcbiAgICBcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgfSxcclxuICAgICAgICB1cGRhdGVJdGVtRnJvbUxTKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUGxlYXNlIHVwZGF0ZSBldmVyeXRoaW5nIGZyb20gbG9jYWxTdG9yYWdlIGhlcmUuLicpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXBkYXRlSXRlbXMoZXhlcmNpc2VGaWxlLCB0b2MpIHtcclxuICAgICAgICAgICAgdGhpcy5leGVyY2lzZUZpbGUgPSBTdG9yZS5jcmVhdGVFeGVyY2lzZUZpbGUodGhpcy5jb3Vyc2UuSUQsIGV4ZXJjaXNlRmlsZS5uYW1lLCBleGVyY2lzZUZpbGUudXJsLCBleGVyY2lzZUZpbGUuc2l6ZUluQnl0ZXMpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhleGVyY2lzZUZpbGUsIHRvYyk7XHJcbiAgICAgICAgICAgIC8vIHVwZGF0ZSB0b2MgY2FwdGlvblxyXG4gICAgICAgICAgICBTdG9yZS51cGRhdGVUb2NDYXB0aW9uKHRvYy5zbHVnLCB0b2MuY2FwdGlvblVybCwgdG9jLmNhcHRpb25GbXQpO1xyXG4gICAgICAgICAgICAvLyBVcGRhdGUgb3IgY3JlYXRlIHN0cmVhbWluZyBsb2NhdGlvblxyXG4gICAgICAgICAgICBTdG9yZS5jcmVhdGVTdHJlYW1Mb2NhdGlvbkxpc3QodG9jLnNsdWcsIHRvYy5zdHJlYW1Mb2NhdGlvbnMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiIsImltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJztcclxuaW1wb3J0IFByb3h5IGZyb20gJy4uLy4uL2xpYnMvcHJveHknO1xyXG5pbXBvcnQgalF1ZXJ5IGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCB7IGZpbmRJdGVtcywgZmluZERTLCBnZXRGbXQgfSBmcm9tICcuLi8uLi9saWJzL3V0aWxzJztcclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgdG9jOiB7XHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICB0eXBlOiBPYmplY3RcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlY3Rpb25JbmRleDoge1xyXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgdHlwZTogTnVtYmVyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0b2NJbmRleDoge1xyXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgdHlwZTogTnVtYmVyXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNldHVwKHByb3BzKSB7XHJcbiAgICAgICAgY29uc3QgdG9jID0gcmVmKHByb3BzLnRvYyk7XHJcbiAgICAgICAgY29uc3Qgc2VjdGlvbkluZGV4ID0gcmVmKHByb3BzLnNlY3Rpb25JbmRleCk7XHJcbiAgICAgICAgY29uc3QgdG9jSW5kZXggPSByZWYocHJvcHMudG9jSW5kZXgpO1xyXG4gICAgICAgIGxldCBleGVyY2lzZUZpbGUgPSByZWYoeyBuYW1lOiAnJywgdXJsOiAnJyB9KTtcclxuICAgICAgICBjb25zdCBidG5TdGF0ZSA9IHJlZigxKTtcclxuICAgICAgICByZXR1cm4geyB0b2MsIHNlY3Rpb25JbmRleCwgdG9jSW5kZXgsIGV4ZXJjaXNlRmlsZSwgYnRuU3RhdGUgfTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgaXNRdWV1ZWQoZmV0Y2hRdWV1ZUVuYWJsZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZldGNoUXVldWVFbmFibGVkID8gKHRoaXMuJHBhcmVudC5jaGVja2VkUXVldWVzW3RoaXMudG9jSW5kZXhdICYmIHRoaXMuJHBhcmVudC5leGNsdWRlUXVldWVzLmluZGV4T2YodGhpcy50b2NJbmRleCkgPT0gLTEpIDogKHRoaXMuYnRuU3RhdGUgPT0gMSB8fCB0aGlzLmJ0blN0YXRlID09IDQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmV0Y2hUb2MoZmV0Y2hRdWV1ZUVuYWJsZWQpIHtcclxuICAgICAgICAgICAgLy8gMC4gY2hlY2sgaWYgcXVldWVzXHJcbiAgICAgICAgICAgIGNvbnN0IGlzUXVldWVkID0gdGhpcy5pc1F1ZXVlZChmZXRjaFF1ZXVlRW5hYmxlZCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpc1F1ZXVlZDonLCBpc1F1ZXVlZCk7XHJcbiAgICAgICAgICAgIGlmIChpc1F1ZXVlZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gMS4gc2V0IGJ0biBzdGF0ZSBpY29uIHRvIFtsb2FkaW5nXVxyXG4gICAgICAgICAgICAgICAgdGhpcy5idG5TdGF0ZSA9IDI7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCB1cmwgPSAnL2NvbnRlbnQuaHRtbD9yYW5kPScrKE1hdGgucmFuZG9tKCkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSB0aGlzLnRvYy51cmw7XHJcbiAgICAgICAgICAgICAgICBQcm94eS5nZXQodXJsLCAocmVzcG9uc2VUZXh0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbGlkUmVzb3VyY2UgPSB0aGlzLnBhcnNlVG9jKHJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkUmVzb3VyY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gMy4gc2V0IGJ0biBzdGF0ZSB0byBbY2hlY2tlZF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5TdGF0ZSA9IDM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZScsIHsgc3JjOiAnUG9wdXAuQ291cnNlUGFnZS5Ub2NJdGVtLkZldGNoQnV0dG9uJywgdG9jOiB0aGlzLnRvYywgZXhlcmNpc2VGaWxlOiB0aGlzLmV4ZXJjaXNlRmlsZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZldGNoUXVldWVFbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUXVldWUgQ29tcGxldGU6IHRyaWdnZXJpbmcgbmV4dCBmZXRjaFRvYyBmcm9tIHBhcmVudCwgbGFzdFRvY0luZGV4OicsIHRoaXMudG9jSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcGFyZW50LnRyaWdnZXJGZXRjaFF1ZXVlKHRoaXMudG9jSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFkZFRvUGFyZW50IGV4Y2x1ZGVRdWV1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQudHJpZ2dlckV4Y2x1ZGVGZXRjaFF1ZXVlKHRoaXMudG9jSW5kZXgsIGZldGNoUXVldWVFbmFibGVkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDMuIHNldCBidG4gc3RhdGUgdG8gaWNvbiBbcmV0cnldXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuU3RhdGUgPSA0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmV0Y2hRdWV1ZUVuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHBhcmVudC50cmlnZ2VyRmFpbGVkRmV0Y2hRdWV1ZSh0aGlzLnRvY0luZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdRdWV1ZSBGYWlsZWQ6IHRyaWdnZXJpbmcgZmV0Y2hUb2MgZnJvbSBGZXRjaEJ1dHRvbiwgbGFzdFRvY0luZGV4OicsIHRoaXMudG9jSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwgKHIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAzLiBzZXQgYnRuIHN0YXRlIHRvIGljb24gW3JldHJ5XVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuU3RhdGUgPSA0O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmZXRjaFF1ZXVlRW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQudHJpZ2dlckZhaWxlZEZldGNoUXVldWUodGhpcy50b2NJbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdRdWV1ZSBGYWlsZWQ6IHRyaWdnZXJpbmcgZmV0Y2hUb2MgZnJvbSBGZXRjaEJ1dHRvbiwgbGFzdFRvY0luZGV4OicsIHRoaXMudG9jSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZldGNoUXVldWVFbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcGFyZW50LnRyaWdnZXJGZXRjaFF1ZXVlKHRoaXMudG9jSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyBSZWJ1aWxkIHRvYyBkYXRhIHRvIHBvcHVsYXRlIFxyXG4gICAgICAgIC8vIFN0cmVhbUxvY2F0aW9uc1xyXG4gICAgICAgIC8vIEV4ZXJjaXNlRmlsZVxyXG4gICAgICAgIHBhcnNlVG9jKHJlc3BvbnNlVGV4dCkge1xyXG4gICAgICAgICAgICBsZXQgdmFsaWRSZXNvdXJjZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjb25zdCBlbERpdiA9IGpRdWVyeShgPGRpdj4ke3Jlc3BvbnNlVGV4dH08L2Rpdj5gKTtcclxuICAgICAgICAgICAgY29uc3QgZWxDb2RlcyA9IGVsRGl2LmZpbmQoJ2NvZGUnKTtcclxuICAgICAgICAgICAgbGV0IGRhdGFDb2RlcyA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgdG9jID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy50b2MpO1xyXG4gICAgICAgICAgICB0b2Muc3RyZWFtTG9jYXRpb25zID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGNvZGVJbmRleCBpbiBlbENvZGVzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZWxDb2RlID0gZWxDb2Rlc1tjb2RlSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWxDb2RlLmlkLm1hdGNoKC9eYnByLWd1aWQvKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhQ29kZXMucHVzaChKU09OLnBhcnNlKGVsQ29kZS50ZXh0Q29udGVudCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7IH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGF0YUNvZGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGFDb2Rlcyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWFyY2hUZXJtcyA9IFtcclxuICAgICAgICAgICAgICAgICAgICBcImNvbS5saW5rZWRpbi5sZWFybmluZy5hcGkuZGVjby5jb250ZW50LkV4ZXJjaXNlRmlsZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY29tLmxpbmtlZGluLnZpZGVvY29udGVudC5UcmFuc2NyaXB0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb20ubGlua2VkaW4udmlkZW9jb250ZW50LlN0cmVhbWluZ0xvY2F0aW9uXCJcclxuICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBzZWFyY2hUZXJtSWR4ID0gMDsgc2VhcmNoVGVybUlkeCA8IHNlYXJjaFRlcm1zLmxlbmd0aDsgc2VhcmNoVGVybUlkeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hUZXJtc1tzZWFyY2hUZXJtSWR4XTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHRzID0gZmluZEl0ZW1zKHF1ZXJ5LCBkYXRhQ29kZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWFyY2hUZXJtSWR4ID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXhlcmNpc2VGaWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBleGVyY2lzZUZpbGVPYmogPSBmaW5kRFMoJyR0eXBlJywgJ2NvbS5saW5rZWRpbi5sZWFybmluZy5hcGkuZGVjby5jb250ZW50LkV4ZXJjaXNlRmlsZScsIHJlc3VsdHMsIFsnc2l6ZUluQnl0ZXMnLCAnbmFtZScsICd1cmwnXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV4ZXJjaXNlRmlsZSA9IGV4ZXJjaXNlRmlsZU9iajtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkgeyB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNlYXJjaFRlcm1JZHggPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0cmFuc2NyaXB0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zY3JpcHRPYmogPSBmaW5kRFMoJyR0eXBlJywgXCJjb20ubGlua2VkaW4udmlkZW9jb250ZW50LlRyYW5zY3JpcHRcIiwgcmVzdWx0cywgWydjYXB0aW9uRmlsZScsICdjYXB0aW9uRm9ybWF0J10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJ29iamVjdCcgPT09IHR5cGVvZiB0cmFuc2NyaXB0T2JqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2MuY2FwdGlvblVybCA9IHRyYW5zY3JpcHRPYmouY2FwdGlvbkZpbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2MuY2FwdGlvbkZtdCA9IHRyYW5zY3JpcHRPYmouY2FwdGlvbkZvcm1hdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VhcmNoVGVybUlkeCA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0cmVhbUxvY2F0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHJlYW1Mb2NhdGlvbk9ianMgPSBmaW5kRFMoJyR0eXBlJywgXCJjb20ubGlua2VkaW4udmlkZW9jb250ZW50LlN0cmVhbWluZ0xvY2F0aW9uXCIsIHJlc3VsdHMsIFsnZXhwaXJlc0F0JywgJ3VybCddLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0cmVhbUxvY2F0aW9uT2Jqcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBzdGxJZHggaW4gc3RyZWFtTG9jYXRpb25PYmpzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gc3RyZWFtTG9jYXRpb25PYmpzW3N0bElkeF0udXJsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZtdCA9IGdldEZtdCh1cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYy5zdHJlYW1Mb2NhdGlvbnMucHVzaCh7IHVybCwgZm10IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0b2MuY2FwdGlvblVybC5sZW5ndGggPiAwICYmIHRvYy5zdHJlYW1Mb2NhdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdmFsaWRSZXNvdXJjZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvYyA9IHRvYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdmFsaWRSZXNvdXJjZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7XHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XHJcbiAgICBwcm9wczoge30sXHJcbiAgICBzZXR1cChwcm9wcykge1xyXG4gICAgICAgIGxldCBxdWV1ZVNsdWdzID0gcmVmKFtdKTtcclxuICAgICAgICBsZXQgZXhjbHVkZVNsdWdzID0gcmVmKFtdKTtcclxuICAgICAgICBsZXQgcGVyY2VudGFnZSA9IHJlZigwKTtcclxuICAgICAgICBsZXQgYnRuU3RhdGUgPSByZWYoMSk7XHJcbiAgICAgICAgbGV0IGxhc3RUb2NJbmRleCA9IHJlZigwKTtcclxuICAgICAgICByZXR1cm4geyBxdWV1ZVNsdWdzLCBleGNsdWRlU2x1Z3MsIHBlcmNlbnRhZ2UsIGJ0blN0YXRlLCBsYXN0VG9jSW5kZXggfTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgc2V0UHJvZ3Jlc3MobGFzdFRvY0luZGV4LCBwZXJjZW50YWdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFRvY0luZGV4ID0gbGFzdFRvY0luZGV4O1xyXG4gICAgICAgICAgICB0aGlzLnBlcmNlbnRhZ2UgPSBwZXJjZW50YWdlO1xyXG4gICAgICAgICAgICBpZiAocGVyY2VudGFnZSA9PSAxMDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnRuU3RhdGUgPSAzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBlcmNlbnRhZ2UpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RhcnRRdWV1ZSgpIHtcclxuICAgICAgICAgICAgdGhpcy5wZXJjZW50YWdlID0gdGhpcy5wZXJjZW50YWdlID09IDAgPyAxIDogdGhpcy5wZXJjZW50YWdlO1xyXG4gICAgICAgICAgICB0aGlzLmJ0blN0YXRlID0gMjtcclxuICAgICAgICAgICAgdGhpcy4kcGFyZW50LnRyaWdnZXJGZXRjaFF1ZXVlKHRoaXMubGFzdFRvY0luZGV4ID09IDAgPyAtMSA6IHRoaXMubGFzdFRvY0luZGV4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7XHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIHNlY3Rpb25JbmRleDoge1xyXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgdHlwZTogTnVtYmVyXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNldHVwKHByb3BzKSB7XHJcbiAgICAgICAgbGV0IHF1ZXVlU2x1Z3MgPSByZWYoW10pO1xyXG4gICAgICAgIGxldCBleGNsdWRlU2x1Z3MgPSByZWYoW10pO1xyXG4gICAgICAgIGxldCBwZXJjZW50YWdlID0gcmVmKDApO1xyXG4gICAgICAgIGxldCBidG5TdGF0ZSA9IHJlZigxKTtcclxuICAgICAgICBsZXQgbGFzdFRvY0luZGV4ID0gcmVmKDApO1xyXG4gICAgICAgIGNvbnN0IHNlY3Rpb25JbmRleCA9IHJlZihwcm9wcy5zZWN0aW9uSW5kZXgpO1xyXG4gICAgICAgIHJldHVybiB7IHF1ZXVlU2x1Z3MsIGV4Y2x1ZGVTbHVncywgcGVyY2VudGFnZSwgYnRuU3RhdGUsIGxhc3RUb2NJbmRleCwgc2VjdGlvbkluZGV4IH07XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHNldFByb2dyZXNzKGxhc3RUb2NJbmRleCwgcGVyY2VudGFnZSkge1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RUb2NJbmRleCA9IGxhc3RUb2NJbmRleDtcclxuICAgICAgICAgICAgdGhpcy5wZXJjZW50YWdlID0gcGVyY2VudGFnZTtcclxuICAgICAgICAgICAgaWYgKHBlcmNlbnRhZ2UgPT0gMTAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ0blN0YXRlID0gMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLiRwYXJlbnQuZmV0Y2hTZWN0aW9uUXVldWUucmVwb3J0KHRoaXMuc2VjdGlvbkluZGV4LCBsYXN0VG9jSW5kZXgsIDApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwZXJjZW50YWdlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0YXJ0UXVldWUoKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGVyY2VudGFnZSA9IHRoaXMucGVyY2VudGFnZSA9PSAwID8gMSA6IHRoaXMucGVyY2VudGFnZTtcclxuICAgICAgICAgICAgdGhpcy5idG5TdGF0ZSA9IDI7XHJcbiAgICAgICAgICAgIHRoaXMuJHBhcmVudC50b2NJdGVtc1t0aGlzLnNlY3Rpb25JbmRleF0udHJpZ2dlckZldGNoUXVldWUodGhpcy5sYXN0VG9jSW5kZXggPT0gMCA/IC0xIDogdGhpcy5sYXN0VG9jSW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiIsImltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJztcclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcclxuICAgIHNldHVwKCkge1xyXG4gICAgICAgIGNvbnN0IHF1ZXVlU2x1Z3MgPSByZWYoW10pO1xyXG4gICAgICAgIGNvbnN0IHNob3dEYXRhID0gcmVmKGZhbHNlKTtcclxuICAgICAgICBjb25zdCBidG5TdGF0ZSA9IHJlZigxKTtcclxuICAgICAgICBjb25zdCBwZXJjZW50YWdlID0gcmVmKDApO1xyXG4gICAgICAgIGNvbnN0IGxhc3RTZWN0aW9uSW5kZXggPSByZWYoMCk7XHJcbiAgICAgICAgY29uc3Qgc2VjdGlvbkluZGV4UXVldWVzID0gcmVmKFtdKTtcclxuICAgICAgICByZXR1cm4geyBxdWV1ZVNsdWdzLCBzaG93RGF0YSwgYnRuU3RhdGUsIHBlcmNlbnRhZ2UsIGxhc3RTZWN0aW9uSW5kZXgsIHNlY3Rpb25JbmRleFF1ZXVlcyB9O1xyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VjdGlvbkluZGV4UXVldWVzID0gT2JqZWN0LmtleXModGhpcy4kcGFyZW50LnNlY3Rpb25zKTtcclxuICAgICAgICB9LCAyNTApO1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICB0b0pTT05TdHIob2JqKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmopO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FsY3VsYXRlUGVyY2VudGFnZVF1ZXVlKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBlYWsgPSB0aGlzLnF1ZXVlU2x1Z3MubGVuZ3RoO1xyXG4gICAgICAgICAgICBjb25zdCBtYXhQZWFrID0gdGhpcy4kcGFyZW50LmdldFRvdGFsVG9jcygpO1xyXG4gICAgICAgICAgICBjb25zdCBwZXJjZW50YWdlID0gTWF0aC5yb3VuZChwZWFrIC8gbWF4UGVhayAqIDEwMCk7XHJcbiAgICAgICAgICAgIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiBjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2socGVyY2VudGFnZSwgcGVhaywgbWF4UGVhayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlcG9ydChzZWN0aW9uSW5kZXgsIHRvY0luZGV4LCBzdGF0dXMpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2VjdGlvbiA9IHRoaXMuJHBhcmVudC5zZWN0aW9uc1tzZWN0aW9uSW5kZXhdO1xyXG4gICAgICAgICAgICBjb25zdCBzbHVnID0gc2VjdGlvbi5pdGVtc1t0b2NJbmRleF0uc2x1ZztcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnF1ZXVlU2x1Z3MuaW5jbHVkZXMoc2x1ZykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucXVldWVTbHVncy5wdXNoKHNsdWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHJlbWFpbmluZ1RleHQgPSBgJHt0aGlzLnF1ZXVlU2x1Z3MubGVuZ3RofSBvZiAke3RoaXMuJHBhcmVudC5nZXRUb3RhbFRvY3MoKX1gO1xyXG4gICAgICAgICAgICB0aGlzLiRwYXJlbnQubG9nQmFyLmxvZyhgJHtzZWN0aW9uLnRpdGxlfSA6ICR7c2x1Z30gJHtyZW1haW5pbmdUZXh0fWAsIHN0YXR1cyk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlUGVyY2VudGFnZVF1ZXVlKChwZXJjZW50YWdlKSA9PiB0aGlzLnBlcmNlbnRhZ2UgPSBwZXJjZW50YWdlKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuJHBhcmVudC5mZXRjaFF1ZXVlQmFyW3NlY3Rpb25JbmRleF0ucGVyY2VudGFnZSA9PSAxMDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc1F1ZXVlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHByb2Nlc3NRdWV1ZSgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VjdGlvbkluZGV4UXVldWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGFzdFNlY3Rpb25JbmRleCA9IHRoaXMuc2VjdGlvbkluZGV4UXVldWVzLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQuZmV0Y2hRdWV1ZUJhclt0aGlzLmxhc3RTZWN0aW9uSW5kZXhdLnN0YXJ0UXVldWUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnRuU3RhdGUgPSAzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdGFydFF1ZXVlKCkge1xyXG4gICAgICAgICAgICB0aGlzLmJ0blN0YXRlID0gMjtcclxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzUXVldWUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7XHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XHJcbiAgICBzZXR1cCgpIHtcclxuICAgICAgICBjb25zdCBtb2RlID0gcmVmKC0xKTtcclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gcmVmKCcnKTtcclxuICAgICAgICByZXR1cm4geyBtb2RlLCBtZXNzYWdlIH07XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGxvZyhtZXNzYWdlLCBtb2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZSA9IG1vZGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnO1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBuYXY6IHtcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZXR1cChwcm9wcykge1xyXG4gICAgICAgIGNvbnN0IG5hdiA9IHJlZihwcm9wcy5uYXYpO1xyXG4gICAgICAgIHJldHVybiB7IG5hdiB9O1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBvbk5hdkNsaWNrKHRhcmdldCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0YXJnZXQpO1xyXG4gICAgICAgICAgICB0aGlzLm5hdiA9IHRhcmdldDtcclxuICAgICAgICAgICAgdGhpcy4kZW1pdCgndXBkYXRlJywgdGFyZ2V0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7XHJcbmltcG9ydCBGZXRjaEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL0ZldGNoQnV0dG9uLnZ1ZSc7XHJcbmltcG9ydCBGZXRjaFF1ZXVlIGZyb20gJy4uL2NvbXBvbmVudHMvRmV0Y2hRdWV1ZS52dWUnO1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICAgIEZldGNoQnV0dG9uLCBGZXRjaFF1ZXVlXHJcbiAgICB9LFxyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBpdGVtczoge1xyXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgdHlwZTogQXJyYXlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlY3Rpb25JbmRleDoge1xyXG4gICAgICAgICAgICByZXF1aWVkOiB0cnVlLFxyXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXJcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2V0dXAocHJvcHMpIHtcclxuICAgICAgICBjb25zdCBpdGVtcyA9IHJlZihwcm9wcy5pdGVtcyk7XHJcbiAgICAgICAgY29uc3Qgc2VjdGlvbkluZGV4ID0gcmVmKHByb3BzLnNlY3Rpb25JbmRleCk7XHJcbiAgICAgICAgY29uc3QgY2hlY2tBbGwgPSByZWYoZmFsc2UpO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrZWRRdWV1ZXMgPSByZWYoW10pO1xyXG4gICAgICAgIGNvbnN0IGV4Y2x1ZGVRdWV1ZXMgPSByZWYoW10pO1xyXG4gICAgICAgIGxldCBmZXRjaEJ0bnMgPSByZWYoW10pO1xyXG4gICAgICAgIGxldCBmZXRjaFF1ZXVlID0gcmVmKCk7XHJcbiAgICAgICAgcmV0dXJuIHsgaXRlbXMsIHNlY3Rpb25JbmRleCwgY2hlY2tlZFF1ZXVlcywgZXhjbHVkZVF1ZXVlcywgZmV0Y2hCdG5zLCBjaGVja0FsbCwgZmV0Y2hRdWV1ZSB9O1xyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tBbGwgPSB0cnVlO1xyXG4gICAgICAgICAgICBmb3IgKGxldCB0b2NJbmRleCBpbiB0aGlzLml0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrZWRRdWV1ZXNbdG9jSW5kZXhdID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDI1MCk7XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHRyaWdnZXJGYWlsZWRGZXRjaFF1ZXVlKHRvY0luZGV4KSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mZXRjaFF1ZXVlLmJ0blN0YXRlID0gNDtcclxuICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjYWxjdWxhdGVQZXJjZW50YWdlUXVldWUoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgY29uc3QgcGVhayA9IHRoaXMuZXhjbHVkZVF1ZXVlcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIGNvbnN0IG1heFBlYWsgPSB0aGlzLml0ZW1zLmxlbmd0aDtcclxuICAgICAgICAgICAgY29uc3QgcGVyY2VudGFnZSA9IE1hdGgucm91bmQocGVhayAvIG1heFBlYWsgKiAxMDApO1xyXG4gICAgICAgICAgICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHBlcmNlbnRhZ2UsIHBlYWssIG1heFBlYWspO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0cmlnZ2VyRXhjbHVkZUZldGNoUXVldWUodG9jSW5kZXgsIGZldGNoUXVldWVFbmFibGVkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvY0luZGV4KTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZXhjbHVkZVF1ZXVlcy5pbmRleE9mKHRvY0luZGV4KSA9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5leGNsdWRlUXVldWVzLnB1c2godG9jSW5kZXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChmZXRjaFF1ZXVlRW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVQZXJjZW50YWdlUXVldWUoKHBlcmNlbnRhZ2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mZXRjaFF1ZXVlLnNldFByb2dyZXNzKHRvY0luZGV4LCBwZXJjZW50YWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcGFyZW50LmZldGNoUXVldWVCYXJbdGhpcy5zZWN0aW9uSW5kZXhdLnNldFByb2dyZXNzKHRvY0luZGV4LCBwZXJjZW50YWdlKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jaGVja2VkUXVldWVzW3RvY0luZGV4XSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrQWxsID0gZmFsc2U7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0cmlnZ2VyRmV0Y2hRdWV1ZSh0b2NJbmRleCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0b2NJbmRleCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5leHRUb2NJbmRleCA9IHRvY0luZGV4ICsgMTtcclxuICAgICAgICAgICAgaWYgKG5leHRUb2NJbmRleCA8IHRoaXMuY2hlY2tlZFF1ZXVlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIC8vIHByb2Nlc3MgbmV4dCBmZXRjaCBidXR0b25cclxuICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2hCdG5zW25leHRUb2NJbmRleF0uZmV0Y2hUb2ModHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVQZXJjZW50YWdlUXVldWUoKHBlcmNlbnRhZ2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mZXRjaFF1ZXVlLnNldFByb2dyZXNzKHRvY0luZGV4LCBwZXJjZW50YWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcGFyZW50LmZldGNoUXVldWVCYXJbdGhpcy5zZWN0aW9uSW5kZXhdLnNldFByb2dyZXNzKHRvY0luZGV4LCBwZXJjZW50YWdlKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZldGNoUXVldWUuYnRuU3RhdGUgPSB0aGlzLmZldGNoUXVldWUucGVyY2VudGFnZSA9PSAxMDAgPyAzIDogMTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZldGNoUXVldWUubGFzdFRvY0luZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQuZmV0Y2hRdWV1ZUJhclt0aGlzLnNlY3Rpb25JbmRleF0uYnRuU3RhdGUgPSB0aGlzLiRwYXJlbnQuZmV0Y2hRdWV1ZUJhclt0aGlzLnNlY3Rpb25JbmRleF0ucGVyY2VudGFnZSA9PSAxMDAgPyAzIDogMTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQuZmV0Y2hRdWV1ZUJhclt0aGlzLnNlY3Rpb25JbmRleF0ubGFzdFRvY0luZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNhbGxpbmcgZmV0Y2ggYnV0dG9uIG5leHQgaW5kZXhcclxuICAgICAgICAgICAgLy8gdGhpcy4kcmVmXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkZldGNoVXBkYXRlKHRhcmdldCkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0YXJnZXQpXHJcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZScsIHRhcmdldCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkNoZWNrQWxsKCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY2hlY2tBbGwpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgdG9jSW5kZXggaW4gdGhpcy5pdGVtcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tlZFF1ZXVlc1t0b2NJbmRleF0gPSB0aGlzLmNoZWNrQWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAyNTApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGdRdWV1ZSh0b2NJbmRleCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuJHJlZnMuZmV0Y2hCdG5zW3RvY0luZGV4XS5pc1F1ZXVlZCA9dGhpcy5jaGVja2VkUXVldWVzW3RvY0luZGV4XTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuJHJlZnMuZmV0Y2hCdG5zKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY2hlY2tlZFF1ZXVlc1t0b2NJbmRleF0pO1xyXG4gICAgICAgICAgICB9LCAyNTApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiIsImltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJztcclxuaW1wb3J0IFN0b3JlIGZyb20gJy4uLy4uL2xpYnMvc3RvcmUnO1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xyXG4gICAgc2V0dXAoKSB7XHJcbiAgICAgICAgY29uc3QgbmF2ID0gcmVmKCdhYm91dCcpO1xyXG4gICAgICAgIGNvbnN0IGFwcCA9IHJlZih7IHZlcnNpb246IDAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmF2LFxyXG4gICAgICAgICAgICBhcHBcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgLy8gc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgIHRoaXMuYXBwID0gU3RvcmUuZ2V0QXBwSW5mbygpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYXBwKTtcclxuICAgICAgICAvLyB9LDEwMDApO1xyXG4gICAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnO1xyXG5pbXBvcnQgVG9jSXRlbSBmcm9tICcuLi9jb21wb25lbnRzL1RvY0l0ZW0udnVlJztcclxuaW1wb3J0IEZldGNoUXVldWVCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9GZXRjaFF1ZXVlQmFyLnZ1ZSc7XHJcbmltcG9ydCBGZXRjaFNlY3Rpb25RdWV1ZSBmcm9tICcuLi9jb21wb25lbnRzL0ZldGNoU2VjdGlvblF1ZXVlLnZ1ZSc7XHJcbmltcG9ydCBMb2dCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9Mb2dCYXIudnVlJztcclxuaW1wb3J0IENvdXJzZURhdGEgZnJvbSAnLi4vY29tcG9uZW50cy9Db3Vyc2VEYXRhLnZ1ZSc7XHJcbmltcG9ydCB7IG1ha2VUaXRsZSB9IGZyb20gJy4uLy4uL2xpYnMvdXRpbHMnO1xyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgU3RvcmUgZnJvbSBcIi4uLy4uL2xpYnMvc3RvcmVcIjtcclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICBUb2NJdGVtLCBGZXRjaFF1ZXVlQmFyLCBGZXRjaFNlY3Rpb25RdWV1ZSwgTG9nQmFyLCBDb3Vyc2VEYXRhXHJcbiAgICB9LFxyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBjb3Vyc2U6IHtcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZXR1cChwcm9wcykge1xyXG4gICAgICAgIGNvbnN0IGNvdXJzZSA9IHJlZihwcm9wcy5jb3Vyc2UpO1xyXG4gICAgICAgIGNvbnN0IGF1dGhvcnMgPSByZWYoW10pO1xyXG4gICAgICAgIGNvbnN0IHNlY3Rpb25zID0gcmVmKFtdKTtcclxuICAgICAgICBjb25zdCBleGVyY2lzZUZpbGUgPSByZWYoe30pO1xyXG4gICAgICAgIGNvbnN0IHRvY0l0ZW1zID0gcmVmKFtdKTtcclxuICAgICAgICBjb25zdCBmZXRjaFF1ZXVlQmFyID0gcmVmKFtdKTtcclxuICAgICAgICBjb25zdCBmZXRjaFNlY3Rpb25RdWV1ZSA9IHJlZih7fSk7XHJcbiAgICAgICAgY29uc3QgbG9nQmFyID0gcmVmKHt9KTtcclxuICAgICAgICBjb25zdCBjb3Vyc2VEYXRhID0gcmVmKHt9KTtcclxuICAgICAgICByZXR1cm4geyBjb3Vyc2UsIGF1dGhvcnMsIHNlY3Rpb25zLCBleGVyY2lzZUZpbGUsIHRvY0l0ZW1zLFxyXG4gICAgICAgICAgICBmZXRjaFF1ZXVlQmFyLCBmZXRjaFNlY3Rpb25RdWV1ZSwgbG9nQmFyLCBjb3Vyc2VEYXRhIH07XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgICAkKCcuYnRuLWNvbGxhcHNlJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmZpbmQoJ2knKS50b2dnbGVDbGFzcygnZmEgZmEtcGx1cyBmYSBmYS1taW51cycpO1xyXG4gICAgICAgICAgICAkKCcuYnRuLWNvbGxhcHNlJykubm90KHRoaXMpLmZpbmQoJ2knKS5yZW1vdmVDbGFzcygnZmEtbWludXMnKS5hZGRDbGFzcygnZmEtcGx1cyAnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRDb3Vyc2VEYXRhKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7IH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgbG9hZENvdXJzZURhdGEoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvdXJzZVNsdWcgPSB0aGlzLmNvdXJzZS5zbHVnO1xyXG4gICAgICAgICAgICB0aGlzLmNvdXJzZSA9IFN0b3JlLmdldENvdXJzZShjb3Vyc2VTbHVnKVswXTtcclxuICAgICAgICAgICAgY29uc3Qgc2VjdGlvbnMgPSBTdG9yZS5nZXRTZWN0aW9uQnlDb3Vyc2VJZCh0aGlzLmNvdXJzZS5JRCk7XHJcbiAgICAgICAgICAgIHNlY3Rpb25zLm1hcCgoc2VjdGlvblRtcCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VjdGlvbklkID0gc2VjdGlvblRtcC5JRDtcclxuICAgICAgICAgICAgICAgIGxldCBzZWN0aW9uID0gc2VjdGlvblRtcDtcclxuICAgICAgICAgICAgICAgIHNlY3Rpb24uaXRlbXMgPSBTdG9yZS5nZXRUb2NCeVNlY3Rpb25JZChzZWN0aW9uLklEKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VjdGlvbnMucHVzaChzZWN0aW9uKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY291cnNlKTtcclxuICAgICAgICAgICAgdGhpcy5jb3Vyc2UuYXV0aG9ySWRzLm1hcCgoSUQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0aG9ycy5wdXNoKFN0b3JlLmdldEF1dGhvckJ5SWQoSUQpWzBdKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuYXV0aG9ycyA9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB1cGRhdGVUb2NJdGVtcyhleGVyY2lzZUZpbGUsIHRvYykge1xyXG4gICAgICAgICAgICB0aGlzLmV4ZXJjaXNlRmlsZSA9IFN0b3JlLmNyZWF0ZUV4ZXJjaXNlRmlsZSh0aGlzLmNvdXJzZS5JRCwgZXhlcmNpc2VGaWxlLm5hbWUsIGV4ZXJjaXNlRmlsZS51cmwsIGV4ZXJjaXNlRmlsZS5zaXplSW5CeXRlcyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGV4ZXJjaXNlRmlsZSwgdG9jKTtcclxuICAgICAgICAgICAgLy8gdXBkYXRlIHRvYyBjYXB0aW9uXHJcbiAgICAgICAgICAgIFN0b3JlLnVwZGF0ZVRvY0NhcHRpb24odG9jLnNsdWcsIHRvYy5jYXB0aW9uVXJsLCB0b2MuY2FwdGlvbkZtdCk7XHJcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBvciBjcmVhdGUgc3RyZWFtaW5nIGxvY2F0aW9uXHJcbiAgICAgICAgICAgIFN0b3JlLmNyZWF0ZVN0cmVhbUxvY2F0aW9uTGlzdCh0b2Muc2x1ZywgdG9jLnN0cmVhbUxvY2F0aW9ucyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvblRvY1VwZGF0ZShldnQpIHtcclxuICAgICAgICAgICAgaWYgKGV2dC5zcmMgPT09ICdQb3B1cC5Db3Vyc2VQYWdlLlRvY0l0ZW0uRmV0Y2hCdXR0b24nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVRvY0l0ZW1zKGV2dC5leGVyY2lzZUZpbGUsIGV2dC50b2MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZScsIGV2dCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtYWtlVGl0bGUoc2x1Zykge1xyXG4gICAgICAgICAgICByZXR1cm4gbWFrZVRpdGxlKHNsdWcpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0VG90YWxUb2NzKCkge1xyXG4gICAgICAgICAgICBsZXQgdG90YWxUb2NzID0gMDtcclxuICAgICAgICAgICAgdGhpcy5zZWN0aW9ucy5tYXAoKHMpID0+IHtcclxuICAgICAgICAgICAgICAgIHRvdGFsVG9jcyArPSBzLml0ZW1zLmxlbmd0aDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0b3RhbFRvY3M7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJztcclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmF2OiAnZG93bmxvYWRzJ1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnO1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuYXY6ICdoZWxwJ1xyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHN5bmNMUygpIHtcclxuICAgICAgICAgICAgY29uc3QgZGJfbGVhcm5pbmcgPSBsb2NhbFN0b3JhZ2VbJ2RiX2xlYXJuaW5nJ107XHJcbiAgICAgICAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHsgZGJfbGVhcm5pbmcgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJztcclxuaW1wb3J0IHsgc2VuZE1lc3NhZ2VTYXZlRGF0YUNvZGVzVG9MUyB9IGZyb20gXCIuLi8uLi9saWJzL3V0aWxzXCI7XHJcbmltcG9ydCBTdG9yZSBmcm9tIFwiLi4vLi4vbGlicy9zdG9yZVwiO1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuYXY6ICdob21lJyxcclxuICAgICAgICAgICAgYnRuUmV0cmlldmVTdGF0ZTogMFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHJldHJpZXZlRGF0YUNvZGVzRnJvbUNvbnRlbnQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuUmV0cmlldmVTdGF0ZSA9IDE7XHJcbiAgICAgICAgICAgIC8vIHNlbmQgZGF0YSBjb2RlIGZyb20gY29udGVudCBzY3JpcHQgdG8gTFNcclxuICAgICAgICAgICAgc2VuZE1lc3NhZ2VTYXZlRGF0YUNvZGVzVG9MUygpO1xyXG4gICAgICAgICAgICAvLyBsb2FkIGRhdGEgY29kZXMgZnJvbSBsc1xyXG4gICAgICAgICAgICBTdG9yZS5nZXREYXRhQ29kZXNMUygoZGF0YUNvZGVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ0blJldHJpZXZlU3RhdGUgPSAyO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YUNvZGVzKVxyXG4gICAgICAgICAgICAgICAgU3RvcmUuc2F2ZURhdGFDb2RlcyhkYXRhQ29kZXMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kcGFyZW50LnNldENvdXJzZShkYXRhQ29kZXMuY291cnNlKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnRlbnRDb25zb2xlTG9nKGRhdGFDb2Rlcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiIsImltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJztcclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgdGV4dDoge1xyXG4gICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZXR1cChwcm9wcykge1xyXG4gICAgICAgIGNvbnN0IHRleHQgPSByZWYocHJvcHMudGV4dCk7XHJcbiAgICAgICAgcmV0dXJuIHsgdGV4dCB9O1xyXG4gICAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnO1xyXG5pbXBvcnQgU3RvcmUgZnJvbSAnLi4vLi4vbGlicy9zdG9yZSc7XHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XHJcbiAgICBzZXR1cCgpIHtcclxuICAgICAgICBjb25zdCBuYXYgPSByZWYoJ3dlbGNvbWUnKTtcclxuICAgICAgICBjb25zdCBncmVldGluZyA9IHJlZignV2VsY29tZSB0byBMTEZldGNoZXIsIHdoYXQgZG8geW91IHdhbnQgdG8gZG8gPycpO1xyXG4gICAgICAgIGNvbnN0IGxhc3RDb3Vyc2VMaXN0ID0gcmVmKFtdKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuYXYsIGdyZWV0aW5nLCBsYXN0Q291cnNlTGlzdFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYXBwSW5mbyA9IFN0b3JlLmdldEFwcEluZm8oKTtcclxuICAgICAgICAgICAgY29uc3QgbGFzdENvdXJzZXMgPSBTdG9yZS5nZXRMYXN0Q291cnNlcygpO1xyXG4gICAgICAgICAgICBpZiAobGFzdENvdXJzZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0Q291cnNlTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgbGFzdENvdXJzZXMubWFwKChjb3Vyc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDb3Vyc2VMaXN0LnB1c2goY291cnNlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGZldGNoQ291cnNlTFMoY291cnNlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvdXJzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgcmVzb2x2ZUNvbXBvbmVudCBhcyBfcmVzb2x2ZUNvbXBvbmVudCwgY3JlYXRlVk5vZGUgYXMgX2NyZWF0ZVZOb2RlLCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlQmxvY2sgYXMgX2NyZWF0ZUJsb2NrLCBjcmVhdGVDb21tZW50Vk5vZGUgYXMgX2NyZWF0ZUNvbW1lbnRWTm9kZSwgdlNob3cgYXMgX3ZTaG93LCBjcmVhdGVFbGVtZW50Vk5vZGUgYXMgX2NyZWF0ZUVsZW1lbnRWTm9kZSwgd2l0aERpcmVjdGl2ZXMgYXMgX3dpdGhEaXJlY3RpdmVzLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jaywgcHVzaFNjb3BlSWQgYXMgX3B1c2hTY29wZUlkLCBwb3BTY29wZUlkIGFzIF9wb3BTY29wZUlkIH0gZnJvbSBcInZ1ZVwiO1xyXG5jb25zdCBfd2l0aFNjb3BlSWQgPSBuID0+IChfcHVzaFNjb3BlSWQoXCJkYXRhLXYtNWY0YmJjYzBcIiksIG4gPSBuKCksIF9wb3BTY29wZUlkKCksIG4pO1xyXG5jb25zdCBfaG9pc3RlZF8xID0geyBjbGFzczogXCJhcHAtY29udGFpbmVyXCIgfTtcclxuY29uc3QgX2hvaXN0ZWRfMiA9IHsgY2xhc3M6IFwiY29uc29sZVwiIH07XHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XHJcbiAgICBjb25zdCBfY29tcG9uZW50X1BhZ2VOYXZpZ2F0aW9uID0gX3Jlc29sdmVDb21wb25lbnQoXCJQYWdlTmF2aWdhdGlvblwiKTtcclxuICAgIGNvbnN0IF9jb21wb25lbnRfV2VsY29tZVBhZ2UgPSBfcmVzb2x2ZUNvbXBvbmVudChcIldlbGNvbWVQYWdlXCIpO1xyXG4gICAgY29uc3QgX2NvbXBvbmVudF9Mb2FkaW5nUGFnZSA9IF9yZXNvbHZlQ29tcG9uZW50KFwiTG9hZGluZ1BhZ2VcIik7XHJcbiAgICBjb25zdCBfY29tcG9uZW50X0hvbWVQYWdlID0gX3Jlc29sdmVDb21wb25lbnQoXCJIb21lUGFnZVwiKTtcclxuICAgIGNvbnN0IF9jb21wb25lbnRfQ291cnNlUGFnZSA9IF9yZXNvbHZlQ29tcG9uZW50KFwiQ291cnNlUGFnZVwiKTtcclxuICAgIGNvbnN0IF9jb21wb25lbnRfRG93bmxvYWRQYWdlID0gX3Jlc29sdmVDb21wb25lbnQoXCJEb3dubG9hZFBhZ2VcIik7XHJcbiAgICBjb25zdCBfY29tcG9uZW50X0hlbHBQYWdlID0gX3Jlc29sdmVDb21wb25lbnQoXCJIZWxwUGFnZVwiKTtcclxuICAgIGNvbnN0IF9jb21wb25lbnRfQWJvdXRQYWdlID0gX3Jlc29sdmVDb21wb25lbnQoXCJBYm91dFBhZ2VcIik7XHJcbiAgICBjb25zdCBfY29tcG9uZW50X2hpZ2hsaWdodGpzID0gX3Jlc29sdmVDb21wb25lbnQoXCJoaWdobGlnaHRqc1wiKTtcclxuICAgIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIF9ob2lzdGVkXzEsIFtcclxuICAgICAgICBfY3JlYXRlVk5vZGUoX2NvbXBvbmVudF9QYWdlTmF2aWdhdGlvbiwge1xyXG4gICAgICAgICAgICBvblVwZGF0ZTogX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAoJGV2ZW50KSA9PiAoX2N0eC5vbk5hdlVwZGF0ZSgkZXZlbnQpKSksXHJcbiAgICAgICAgICAgIG5hdjogX2N0eC5uYXYsXHJcbiAgICAgICAgICAgIHJlZjogXCJwYWdlTmF2aWdhdGlvblwiXHJcbiAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgW1wibmF2XCJdKSxcclxuICAgICAgICAoX2N0eC5uYXYgPT0gJ3dlbGNvbWUnKVxyXG4gICAgICAgICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jayhfY29tcG9uZW50X1dlbGNvbWVQYWdlLCB7IGtleTogMCB9KSlcclxuICAgICAgICAgICAgOiBfY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKSxcclxuICAgICAgICAoX2N0eC5uYXYgPT0gJ2xvYWRpbmcnKVxyXG4gICAgICAgICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jayhfY29tcG9uZW50X0xvYWRpbmdQYWdlLCB7XHJcbiAgICAgICAgICAgICAgICBrZXk6IDEsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIkZldGNoaW5nIENvdXJzZSBEYXRhXCJcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSksXHJcbiAgICAgICAgKF9jdHgubmF2ID09ICdob21lJylcclxuICAgICAgICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soX2NvbXBvbmVudF9Ib21lUGFnZSwgeyBrZXk6IDIgfSkpXHJcbiAgICAgICAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSksXHJcbiAgICAgICAgKF9jdHgubmF2ID09ICdjb3Vyc2UnKVxyXG4gICAgICAgICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jayhfY29tcG9uZW50X0NvdXJzZVBhZ2UsIHtcclxuICAgICAgICAgICAgICAgIGtleTogMyxcclxuICAgICAgICAgICAgICAgIG9uVXBkYXRlOiBfY2FjaGVbMV0gfHwgKF9jYWNoZVsxXSA9ICgkZXZlbnQpID0+IChfY3R4Lm9uQ291cnNlVXBkYXRlKCRldmVudCkpKSxcclxuICAgICAgICAgICAgICAgIGNvdXJzZTogX2N0eC5jb3Vyc2UsXHJcbiAgICAgICAgICAgICAgICByZWY6IFwiY291cnNlUGFnZVwiXHJcbiAgICAgICAgICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIFtcImNvdXJzZVwiXSkpXHJcbiAgICAgICAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSksXHJcbiAgICAgICAgKF9jdHgubmF2ID09ICdkb3dubG9hZHMnKVxyXG4gICAgICAgICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jayhfY29tcG9uZW50X0Rvd25sb2FkUGFnZSwgeyBrZXk6IDQgfSkpXHJcbiAgICAgICAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSksXHJcbiAgICAgICAgKF9jdHgubmF2ID09ICdoZWxwJylcclxuICAgICAgICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soX2NvbXBvbmVudF9IZWxwUGFnZSwgeyBrZXk6IDUgfSkpXHJcbiAgICAgICAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSksXHJcbiAgICAgICAgKF9jdHgubmF2ID09ICdhYm91dCcpXHJcbiAgICAgICAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKF9jb21wb25lbnRfQWJvdXRQYWdlLCB7IGtleTogNiB9KSlcclxuICAgICAgICAgICAgOiBfY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKSxcclxuICAgICAgICBfd2l0aERpcmVjdGl2ZXMoX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8yLCBbXHJcbiAgICAgICAgICAgIF9jcmVhdGVWTm9kZShfY29tcG9uZW50X2hpZ2hsaWdodGpzLCB7XHJcbiAgICAgICAgICAgICAgICBsYW5ndWFnZTogXCJjb25zb2xlXCIsXHJcbiAgICAgICAgICAgICAgICBjb2RlOiBKU09OLnN0cmluZ2lmeShfY3R4Lm1lc3NhZ2UsIG51bGwsIDIpXHJcbiAgICAgICAgICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIFtcImNvZGVcIl0pXHJcbiAgICAgICAgXSwgNTEyIC8qIE5FRURfUEFUQ0ggKi8pLCBbXHJcbiAgICAgICAgICAgIFtfdlNob3csIF9jdHgubWVzc2FnZS5sZW5ndGggPiAwXVxyXG4gICAgICAgIF0pXHJcbiAgICBdKSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudFZOb2RlIGFzIF9jcmVhdGVFbGVtZW50Vk5vZGUsIHJlc29sdmVDb21wb25lbnQgYXMgX3Jlc29sdmVDb21wb25lbnQsIGNyZWF0ZVZOb2RlIGFzIF9jcmVhdGVWTm9kZSwgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrLCBwdXNoU2NvcGVJZCBhcyBfcHVzaFNjb3BlSWQsIHBvcFNjb3BlSWQgYXMgX3BvcFNjb3BlSWQgfSBmcm9tIFwidnVlXCI7XHJcbmNvbnN0IF93aXRoU2NvcGVJZCA9IG4gPT4gKF9wdXNoU2NvcGVJZChcImRhdGEtdi0zYmIyNjE5Y1wiKSwgbiA9IG4oKSwgX3BvcFNjb3BlSWQoKSwgbik7XHJcbmNvbnN0IF9ob2lzdGVkXzEgPSB7IGNsYXNzOiBcImNvdXJzZS1kYXRhXCIgfTtcclxuY29uc3QgX2hvaXN0ZWRfMiA9IC8qI19fUFVSRV9fKi8gX3dpdGhTY29wZUlkKCgpID0+IC8qI19fUFVSRV9fKi8gX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCB7IGNsYXNzOiBcImRhdGEtdGl0bGVcIiB9LCBcIkNPVVJTRVwiLCAtMSAvKiBIT0lTVEVEICovKSk7XHJcbmNvbnN0IF9ob2lzdGVkXzMgPSB7IGNsYXNzOiBcImRhdGEtY29udGVudFwiIH07XHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XHJcbiAgICBjb25zdCBfY29tcG9uZW50X2hpZ2hsaWdodGpzID0gX3Jlc29sdmVDb21wb25lbnQoXCJoaWdobGlnaHRqc1wiKTtcclxuICAgIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIF9ob2lzdGVkXzEsIFtcclxuICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwidWxcIiwgbnVsbCwgW1xyXG4gICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwibGlcIiwgbnVsbCwgW1xyXG4gICAgICAgICAgICAgICAgX2hvaXN0ZWRfMixcclxuICAgICAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfMywgW1xyXG4gICAgICAgICAgICAgICAgICAgIF9jcmVhdGVWTm9kZShfY29tcG9uZW50X2hpZ2hsaWdodGpzLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiBcImpzb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogSlNPTi5zdHJpbmdpZnkoX2N0eC5jb3Vyc2UsIG51bGwsIDIpXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgW1wiY29kZVwiXSlcclxuICAgICAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgIF0pXHJcbiAgICAgICAgXSlcclxuICAgIF0pKTtcclxufVxyXG4iLCJpbXBvcnQgeyBub3JtYWxpemVDbGFzcyBhcyBfbm9ybWFsaXplQ2xhc3MsIGNyZWF0ZUVsZW1lbnRWTm9kZSBhcyBfY3JlYXRlRWxlbWVudFZOb2RlLCBub3JtYWxpemVTdHlsZSBhcyBfbm9ybWFsaXplU3R5bGUsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jayB9IGZyb20gXCJ2dWVcIjtcclxuY29uc3QgX2hvaXN0ZWRfMSA9IHsgY2xhc3M6IFwiYnRuLWdyb3VwXCIgfTtcclxuY29uc3QgX2hvaXN0ZWRfMiA9IFtcImRpc2FibGVkXCIsIFwidGl0bGVcIl07XHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XHJcbiAgICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCBfaG9pc3RlZF8xLCBbXHJcbiAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImJ1dHRvblwiLCB7XHJcbiAgICAgICAgICAgIHN0eWxlOiBfbm9ybWFsaXplU3R5bGUoeyBib3JkZXI6IChfY3R4LmJ0blN0YXRlICE9IDEgJiYgX2N0eC5idG5TdGF0ZSAhPSA0ID8gJ25vbmUnIDogJ2luaGVyaXQnKSB9KSxcclxuICAgICAgICAgICAgZGlzYWJsZWQ6IF9jdHguYnRuU3RhdGUgPiAxICYmIF9jdHguYnRuU3RhdGUgPCA0LFxyXG4gICAgICAgICAgICBvbkNsaWNrOiBfY2FjaGVbMF0gfHwgKF9jYWNoZVswXSA9ICgkZXZlbnQpID0+IChfY3R4LmZldGNoVG9jKGZhbHNlKSkpLFxyXG4gICAgICAgICAgICBjbGFzczogXCJidG4gYnRuLXNtXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnQ2xpY2sgdG8gZmV0Y2ggVE9DIHJlc291cmNlcyAnICsgX2N0eC50b2MudGl0bGVcclxuICAgICAgICB9LCBbXHJcbiAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJpXCIsIHtcclxuICAgICAgICAgICAgICAgIGNsYXNzOiBfbm9ybWFsaXplQ2xhc3MoW1wiZmFcIiwgeyAnZmEtcGxheSc6IF9jdHguYnRuU3RhdGUgPT0gMSwgJ2ZhLXNwaW4gZmEtc3Bpbm5lcic6IF9jdHguYnRuU3RhdGUgPT0gMiwgJ2ZhLWNoZWNrJzogX2N0eC5idG5TdGF0ZSA9PSAzLCAnZmEtcmVmcmVzaCc6IF9jdHguYnRuU3RhdGUgPT0gNCB9XSlcclxuICAgICAgICAgICAgfSwgbnVsbCwgMiAvKiBDTEFTUyAqLylcclxuICAgICAgICBdLCAxMiAvKiBTVFlMRSwgUFJPUFMgKi8sIF9ob2lzdGVkXzIpXHJcbiAgICBdKSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgbm9ybWFsaXplU3R5bGUgYXMgX25vcm1hbGl6ZVN0eWxlLCBjcmVhdGVFbGVtZW50Vk5vZGUgYXMgX2NyZWF0ZUVsZW1lbnRWTm9kZSwgdlNob3cgYXMgX3ZTaG93LCB3aXRoRGlyZWN0aXZlcyBhcyBfd2l0aERpcmVjdGl2ZXMsIG5vcm1hbGl6ZUNsYXNzIGFzIF9ub3JtYWxpemVDbGFzcywgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrLCBwdXNoU2NvcGVJZCBhcyBfcHVzaFNjb3BlSWQsIHBvcFNjb3BlSWQgYXMgX3BvcFNjb3BlSWQgfSBmcm9tIFwidnVlXCI7XHJcbmNvbnN0IF93aXRoU2NvcGVJZCA9IG4gPT4gKF9wdXNoU2NvcGVJZChcImRhdGEtdi0xOGE4ZmU0NFwiKSwgbiA9IG4oKSwgX3BvcFNjb3BlSWQoKSwgbik7XHJcbmNvbnN0IF9ob2lzdGVkXzEgPSB7IGNsYXNzOiBcImZldGNoLXF1ZXVlXCIgfTtcclxuY29uc3QgX2hvaXN0ZWRfMiA9IHsgc3R5bGU6IHsgXCJ3aWR0aFwiOiBcIjkwJVwiLCBcImhlaWdodFwiOiBcIjE1cHhcIiB9IH07XHJcbmNvbnN0IF9ob2lzdGVkXzMgPSB7IGNsYXNzOiBcInByb2dyZXNzXCIgfTtcclxuY29uc3QgX2hvaXN0ZWRfNCA9IFtcImFyaWEtdmFsdWVub3dcIl07XHJcbmNvbnN0IF9ob2lzdGVkXzUgPSB7IGNsYXNzOiBcImJ0bi1mZXRjaC1jbnRcIiB9O1xyXG5jb25zdCBfaG9pc3RlZF82ID0gW1wiZGlzYWJsZWRcIl07XHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XHJcbiAgICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCBfaG9pc3RlZF8xLCBbXHJcbiAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8yLCBbXHJcbiAgICAgICAgICAgIF93aXRoRGlyZWN0aXZlcyhfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzMsIFtcclxuICAgICAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiBcInByb2dyZXNzLWJhclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJvbGU6IFwicHJvZ3Jlc3NiYXJcIixcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZTogX25vcm1hbGl6ZVN0eWxlKHsgd2lkdGg6IF9jdHgucGVyY2VudGFnZSArICclJyB9KSxcclxuICAgICAgICAgICAgICAgICAgICBcImFyaWEtdmFsdWVub3dcIjogX2N0eC5wZXJjZW50YWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYXJpYS12YWx1ZW1pblwiOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICBcImFyaWEtdmFsdWVtYXhcIjogXCIxMDBcIlxyXG4gICAgICAgICAgICAgICAgfSwgbnVsbCwgMTIgLyogU1RZTEUsIFBST1BTICovLCBfaG9pc3RlZF80KVxyXG4gICAgICAgICAgICBdLCA1MTIgLyogTkVFRF9QQVRDSCAqLyksIFtcclxuICAgICAgICAgICAgICAgIFtfdlNob3csIF9jdHgucGVyY2VudGFnZSA+IDBdXHJcbiAgICAgICAgICAgIF0pXHJcbiAgICAgICAgXSksXHJcbiAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF81LCBbXHJcbiAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJidXR0b25cIiwge1xyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IF9jdHguYnRuU3RhdGUgIT0gMSAmJiBfY3R4LmJ0blN0YXRlICE9IDQsXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiBfY2FjaGVbMF0gfHwgKF9jYWNoZVswXSA9ICgkZXZlbnQpID0+IChfY3R4LnN0YXJ0UXVldWUoKSkpLFxyXG4gICAgICAgICAgICAgICAgY2xhc3M6IFwiYnRuIGJ0bi1zbSBidG4tZmV0Y2hcIlxyXG4gICAgICAgICAgICB9LCBbXHJcbiAgICAgICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiaVwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IF9ub3JtYWxpemVDbGFzcyhbXCJmYVwiLCB7ICdmYS1wbGF5JzogX2N0eC5idG5TdGF0ZSA9PSAxLCAnZmEtc3BpbiBmYS1zcGlubmVyJzogX2N0eC5idG5TdGF0ZSA9PSAyLCAnZmEtY2hlY2snOiBfY3R4LmJ0blN0YXRlID09IDMsICdmYS1yZWZyZXNoJzogX2N0eC5idG5TdGF0ZSA9PSA0IH1dKVxyXG4gICAgICAgICAgICAgICAgfSwgbnVsbCwgMiAvKiBDTEFTUyAqLylcclxuICAgICAgICAgICAgXSwgOCAvKiBQUk9QUyAqLywgX2hvaXN0ZWRfNilcclxuICAgICAgICBdKVxyXG4gICAgXSkpO1xyXG59XHJcbiIsImltcG9ydCB7IG5vcm1hbGl6ZVN0eWxlIGFzIF9ub3JtYWxpemVTdHlsZSwgY3JlYXRlRWxlbWVudFZOb2RlIGFzIF9jcmVhdGVFbGVtZW50Vk5vZGUsIHZTaG93IGFzIF92U2hvdywgd2l0aERpcmVjdGl2ZXMgYXMgX3dpdGhEaXJlY3RpdmVzLCBub3JtYWxpemVDbGFzcyBhcyBfbm9ybWFsaXplQ2xhc3MsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jaywgcHVzaFNjb3BlSWQgYXMgX3B1c2hTY29wZUlkLCBwb3BTY29wZUlkIGFzIF9wb3BTY29wZUlkIH0gZnJvbSBcInZ1ZVwiO1xyXG5jb25zdCBfd2l0aFNjb3BlSWQgPSBuID0+IChfcHVzaFNjb3BlSWQoXCJkYXRhLXYtOTA1YWVjNDJcIiksIG4gPSBuKCksIF9wb3BTY29wZUlkKCksIG4pO1xyXG5jb25zdCBfaG9pc3RlZF8xID0geyBjbGFzczogXCJmZXRjaC1xdWV1ZS1iYXJcIiB9O1xyXG5jb25zdCBfaG9pc3RlZF8yID0geyBjbGFzczogXCJmZXRjaC1xdWV1ZS1wYlwiIH07XHJcbmNvbnN0IF9ob2lzdGVkXzMgPSB7IGNsYXNzOiBcInByb2dyZXNzXCIgfTtcclxuY29uc3QgX2hvaXN0ZWRfNCA9IFtcImFyaWEtdmFsdWVub3dcIl07XHJcbmNvbnN0IF9ob2lzdGVkXzUgPSB7IGNsYXNzOiBcImJ0bi1mZXRjaC1jbnRcIiB9O1xyXG5jb25zdCBfaG9pc3RlZF82ID0gW1wiZGlzYWJsZWRcIl07XHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XHJcbiAgICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCBfaG9pc3RlZF8xLCBbXHJcbiAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8yLCBbXHJcbiAgICAgICAgICAgIF93aXRoRGlyZWN0aXZlcyhfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzMsIFtcclxuICAgICAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiBcInByb2dyZXNzLWJhciBiZy1pbmZvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcm9sZTogXCJwcm9ncmVzc2JhclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiBfbm9ybWFsaXplU3R5bGUoeyB3aWR0aDogX2N0eC5wZXJjZW50YWdlICsgJyUnIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYXJpYS12YWx1ZW5vd1wiOiBfY3R4LnBlcmNlbnRhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJhcmlhLXZhbHVlbWluXCI6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYXJpYS12YWx1ZW1heFwiOiBcIjEwMFwiXHJcbiAgICAgICAgICAgICAgICB9LCBudWxsLCAxMiAvKiBTVFlMRSwgUFJPUFMgKi8sIF9ob2lzdGVkXzQpXHJcbiAgICAgICAgICAgIF0sIDUxMiAvKiBORUVEX1BBVENIICovKSwgW1xyXG4gICAgICAgICAgICAgICAgW192U2hvdywgX2N0eC5wZXJjZW50YWdlID4gMF1cclxuICAgICAgICAgICAgXSlcclxuICAgICAgICBdKSxcclxuICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzUsIFtcclxuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImJ1dHRvblwiLCB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZTogX25vcm1hbGl6ZVN0eWxlKHsgY29sb3I6IF9jdHguYnRuU3RhdGUgPT0gMyA/ICd3aGl0ZScgOiAnaW5oZXJpdCcgfSksXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogX2N0eC5idG5TdGF0ZSAhPSAxICYmIF9jdHguYnRuU3RhdGUgIT0gNCxcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6IF9jYWNoZVswXSB8fCAoX2NhY2hlWzBdID0gKCRldmVudCkgPT4gKF9jdHguc3RhcnRRdWV1ZSgpKSksXHJcbiAgICAgICAgICAgICAgICBjbGFzczogXCJidG4gYnRuLXNtIGJ0bi1mZXRjaFwiXHJcbiAgICAgICAgICAgIH0sIFtcclxuICAgICAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJpXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGFzczogX25vcm1hbGl6ZUNsYXNzKFtcImZhXCIsIHsgJ2ZhLXBsYXknOiBfY3R4LmJ0blN0YXRlID09IDEsICdmYS1zcGluIGZhLXNwaW5uZXInOiBfY3R4LmJ0blN0YXRlID09IDIsICdmYS1jaGVjayc6IF9jdHguYnRuU3RhdGUgPT0gMywgJ2ZhLXJlZnJlc2gnOiBfY3R4LmJ0blN0YXRlID09IDQgfV0pXHJcbiAgICAgICAgICAgICAgICB9LCBudWxsLCAyIC8qIENMQVNTICovKVxyXG4gICAgICAgICAgICBdLCAxMiAvKiBTVFlMRSwgUFJPUFMgKi8sIF9ob2lzdGVkXzYpXHJcbiAgICAgICAgXSlcclxuICAgIF0pKTtcclxufVxyXG4iLCJpbXBvcnQgeyBub3JtYWxpemVTdHlsZSBhcyBfbm9ybWFsaXplU3R5bGUsIGNyZWF0ZUVsZW1lbnRWTm9kZSBhcyBfY3JlYXRlRWxlbWVudFZOb2RlLCB2U2hvdyBhcyBfdlNob3csIHdpdGhEaXJlY3RpdmVzIGFzIF93aXRoRGlyZWN0aXZlcywgbm9ybWFsaXplQ2xhc3MgYXMgX25vcm1hbGl6ZUNsYXNzLCB0b0Rpc3BsYXlTdHJpbmcgYXMgX3RvRGlzcGxheVN0cmluZywgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrLCBjcmVhdGVDb21tZW50Vk5vZGUgYXMgX2NyZWF0ZUNvbW1lbnRWTm9kZSwgcHVzaFNjb3BlSWQgYXMgX3B1c2hTY29wZUlkLCBwb3BTY29wZUlkIGFzIF9wb3BTY29wZUlkIH0gZnJvbSBcInZ1ZVwiO1xyXG5jb25zdCBfd2l0aFNjb3BlSWQgPSBuID0+IChfcHVzaFNjb3BlSWQoXCJkYXRhLXYtNmFmZGE2NDlcIiksIG4gPSBuKCksIF9wb3BTY29wZUlkKCksIG4pO1xyXG5jb25zdCBfaG9pc3RlZF8xID0geyBjbGFzczogXCJmZXRjaC1zZWN0aW9uLXF1ZXVlXCIgfTtcclxuY29uc3QgX2hvaXN0ZWRfMiA9IHsgY2xhc3M6IFwiZnNxYmNcIiB9O1xyXG5jb25zdCBfaG9pc3RlZF8zID0geyBjbGFzczogXCJmZXRjaC1zZWN0aW9uLXF1ZXVlLWJhclwiIH07XHJcbmNvbnN0IF9ob2lzdGVkXzQgPSB7IGNsYXNzOiBcImZldGNoLXNlY3Rpb24tcXVldWUtcGJcIiB9O1xyXG5jb25zdCBfaG9pc3RlZF81ID0geyBjbGFzczogXCJwcm9ncmVzc1wiIH07XHJcbmNvbnN0IF9ob2lzdGVkXzYgPSBbXCJhcmlhLXZhbHVlbm93XCJdO1xyXG5jb25zdCBfaG9pc3RlZF83ID0geyBjbGFzczogXCJidG4tZmV0Y2gtc2VjdGlvbi1xdWV1ZS1jbnRcIiB9O1xyXG5jb25zdCBfaG9pc3RlZF84ID0gW1wiZGlzYWJsZWRcIl07XHJcbmNvbnN0IF9ob2lzdGVkXzkgPSB7XHJcbiAgICBrZXk6IDAsXHJcbiAgICBjbGFzczogXCJkYXRhLWNvZGVzXCJcclxufTtcclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcclxuICAgIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIF9ob2lzdGVkXzEsIFtcclxuICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzIsIFtcclxuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8zLCBbXHJcbiAgICAgICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzQsIFtcclxuICAgICAgICAgICAgICAgICAgICBfd2l0aERpcmVjdGl2ZXMoX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF81LCBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFwicHJvZ3Jlc3MtYmFyIGJnLXN1Y2Nlc3NcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU6IFwicHJvZ3Jlc3NiYXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiBfbm9ybWFsaXplU3R5bGUoeyB3aWR0aDogX2N0eC5wZXJjZW50YWdlICsgJyUnIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhcmlhLXZhbHVlbm93XCI6IF9jdHgucGVyY2VudGFnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJpYS12YWx1ZW1pblwiOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJpYS12YWx1ZW1heFwiOiBcIjEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIG51bGwsIDEyIC8qIFNUWUxFLCBQUk9QUyAqLywgX2hvaXN0ZWRfNilcclxuICAgICAgICAgICAgICAgICAgICBdLCA1MTIgLyogTkVFRF9QQVRDSCAqLyksIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgW192U2hvdywgX2N0eC5wZXJjZW50YWdlID4gMF1cclxuICAgICAgICAgICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICAgICAgXSksXHJcbiAgICAgICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzcsIFtcclxuICAgICAgICAgICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiYnV0dG9uXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IF9ub3JtYWxpemVTdHlsZSh7IGNvbG9yOiBfY3R4LmJ0blN0YXRlID09IDMgPyAnd2hpdGUnIDogJ2luaGVyaXQnIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogX2N0eC5idG5TdGF0ZSAhPSAxICYmIF9jdHguYnRuU3RhdGUgIT0gNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljazogX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAoJGV2ZW50KSA9PiAoX2N0eC5zdGFydFF1ZXVlKCkpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFwiYnRuIGJ0bi1zbSBidG4tZmV0Y2gtc2VjdGlvbi1xdWV1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiaVwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogX25vcm1hbGl6ZUNsYXNzKFtcImZhXCIsIHsgJ2ZhLXBsYXknOiBfY3R4LmJ0blN0YXRlID09IDEsICdmYS1zcGluIGZhLXNwaW5uZXInOiBfY3R4LmJ0blN0YXRlID09IDIsICdmYS1jaGVjayc6IF9jdHguYnRuU3RhdGUgPT0gMywgJ2ZhLXJlZnJlc2gnOiBfY3R4LmJ0blN0YXRlID09IDQgfV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIG51bGwsIDIgLyogQ0xBU1MgKi8pXHJcbiAgICAgICAgICAgICAgICAgICAgXSwgMTIgLyogU1RZTEUsIFBST1BTICovLCBfaG9pc3RlZF84KVxyXG4gICAgICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgXSlcclxuICAgICAgICBdKSxcclxuICAgICAgICAoX2N0eC5zaG93RGF0YSlcclxuICAgICAgICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiY29kZVwiLCBfaG9pc3RlZF85LCBfdG9EaXNwbGF5U3RyaW5nKF9jdHgudG9KU09OU3RyKF9jdHgucXVldWVTbHVncykpLCAxIC8qIFRFWFQgKi8pKVxyXG4gICAgICAgICAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpXHJcbiAgICBdKSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdG9EaXNwbGF5U3RyaW5nIGFzIF90b0Rpc3BsYXlTdHJpbmcsIGNyZWF0ZUVsZW1lbnRWTm9kZSBhcyBfY3JlYXRlRWxlbWVudFZOb2RlLCBub3JtYWxpemVDbGFzcyBhcyBfbm9ybWFsaXplQ2xhc3MsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jaywgcHVzaFNjb3BlSWQgYXMgX3B1c2hTY29wZUlkLCBwb3BTY29wZUlkIGFzIF9wb3BTY29wZUlkIH0gZnJvbSBcInZ1ZVwiO1xyXG5jb25zdCBfd2l0aFNjb3BlSWQgPSBuID0+IChfcHVzaFNjb3BlSWQoXCJkYXRhLXYtNWM4YTI4N2NcIiksIG4gPSBuKCksIF9wb3BTY29wZUlkKCksIG4pO1xyXG5jb25zdCBfaG9pc3RlZF8xID0geyBjbGFzczogXCJsb2ctYmFyXCIgfTtcclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcclxuICAgIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIF9ob2lzdGVkXzEsIFtcclxuICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIHtcclxuICAgICAgICAgICAgY2xhc3M6IF9ub3JtYWxpemVDbGFzcyhbXCJsb2ctbWVzc2FnZVwiLCB7IGVycm9yOiBfY3R4Lm1vZGUgPT0gMSwgc3VjY2VzczogX2N0eC5tb2RlID09IDAsIHdhcm5pbmc6IF9jdHgubW9kZSA9PSAyIH1dKVxyXG4gICAgICAgIH0sIFtcclxuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInNwYW5cIiwgbnVsbCwgX3RvRGlzcGxheVN0cmluZyhfY3R4Lm1lc3NhZ2UpLCAxIC8qIFRFWFQgKi8pXHJcbiAgICAgICAgXSwgMiAvKiBDTEFTUyAqLylcclxuICAgIF0pKTtcclxufVxyXG4iLCJpbXBvcnQgeyBub3JtYWxpemVDbGFzcyBhcyBfbm9ybWFsaXplQ2xhc3MsIGNyZWF0ZUVsZW1lbnRWTm9kZSBhcyBfY3JlYXRlRWxlbWVudFZOb2RlLCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2sgfSBmcm9tIFwidnVlXCI7XHJcbmNvbnN0IF9ob2lzdGVkXzEgPSB7IGNsYXNzOiBcInBhZ2UtbmF2aWdhdGlvbiB0ZXh0LWNlbnRlclwiIH07XHJcbmNvbnN0IF9ob2lzdGVkXzIgPSB7IGNsYXNzOiBcImJ0bi1ncm91cFwiIH07XHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XHJcbiAgICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCBfaG9pc3RlZF8xLCBbXHJcbiAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInVsXCIsIF9ob2lzdGVkXzIsIFtcclxuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImxpXCIsIHtcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6IF9jYWNoZVswXSB8fCAoX2NhY2hlWzBdID0gKCRldmVudCkgPT4gKF9jdHgub25OYXZDbGljaygnd2VsY29tZScpKSksXHJcbiAgICAgICAgICAgICAgICBjbGFzczogX25vcm1hbGl6ZUNsYXNzKFtcImJ0biBidG4tc20gYnRuLXByaW1hcnlcIiwgeyBhY3RpdmU6IF9jdHgubmF2ID09ICd3ZWxjb21lJyB9XSlcclxuICAgICAgICAgICAgfSwgXCJXZWxjb21lXCIsIDIgLyogQ0xBU1MgKi8pLFxyXG4gICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwibGlcIiwge1xyXG4gICAgICAgICAgICAgICAgb25DbGljazogX2NhY2hlWzFdIHx8IChfY2FjaGVbMV0gPSAoJGV2ZW50KSA9PiAoX2N0eC5vbk5hdkNsaWNrKCdsb2FkaW5nJykpKSxcclxuICAgICAgICAgICAgICAgIGNsYXNzOiBfbm9ybWFsaXplQ2xhc3MoW1wiYnRuIGJ0bi1zbSBidG4tcHJpbWFyeVwiLCB7IGFjdGl2ZTogX2N0eC5uYXYgPT0gJ2xvYWRpbmcnIH1dKVxyXG4gICAgICAgICAgICB9LCBcIkxvYWRpbmdcIiwgMiAvKiBDTEFTUyAqLyksXHJcbiAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJsaVwiLCB7XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiBfY2FjaGVbMl0gfHwgKF9jYWNoZVsyXSA9ICgkZXZlbnQpID0+IChfY3R4Lm9uTmF2Q2xpY2soJ2hvbWUnKSkpLFxyXG4gICAgICAgICAgICAgICAgY2xhc3M6IF9ub3JtYWxpemVDbGFzcyhbXCJidG4gYnRuLXNtIGJ0bi1wcmltYXJ5XCIsIHsgYWN0aXZlOiBfY3R4Lm5hdiA9PSAnaG9tZScgfV0pXHJcbiAgICAgICAgICAgIH0sIFwiSG9tZVwiLCAyIC8qIENMQVNTICovKSxcclxuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImxpXCIsIHtcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6IF9jYWNoZVszXSB8fCAoX2NhY2hlWzNdID0gKCRldmVudCkgPT4gKF9jdHgub25OYXZDbGljaygnY291cnNlJykpKSxcclxuICAgICAgICAgICAgICAgIGNsYXNzOiBfbm9ybWFsaXplQ2xhc3MoW1wiYnRuIGJ0bi1zbSBidG4tcHJpbWFyeVwiLCB7IGFjdGl2ZTogX2N0eC5uYXYgPT0gJ2NvdXJzZScgfV0pXHJcbiAgICAgICAgICAgIH0sIFwiQ291cnNlXCIsIDIgLyogQ0xBU1MgKi8pLFxyXG4gICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwibGlcIiwge1xyXG4gICAgICAgICAgICAgICAgb25DbGljazogX2NhY2hlWzRdIHx8IChfY2FjaGVbNF0gPSAoJGV2ZW50KSA9PiAoX2N0eC5vbk5hdkNsaWNrKCdkb3dubG9hZHMnKSkpLFxyXG4gICAgICAgICAgICAgICAgY2xhc3M6IF9ub3JtYWxpemVDbGFzcyhbXCJidG4gYnRuLXNtIGJ0bi1wcmltYXJ5XCIsIHsgYWN0aXZlOiBfY3R4Lm5hdiA9PSAnZG93bmxvYWRzJyB9XSlcclxuICAgICAgICAgICAgfSwgXCJEb3dubG9hZHNcIiwgMiAvKiBDTEFTUyAqLyksXHJcbiAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJsaVwiLCB7XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiBfY2FjaGVbNV0gfHwgKF9jYWNoZVs1XSA9ICgkZXZlbnQpID0+IChfY3R4Lm9uTmF2Q2xpY2soJ2hlbHAnKSkpLFxyXG4gICAgICAgICAgICAgICAgY2xhc3M6IF9ub3JtYWxpemVDbGFzcyhbXCJidG4gYnRuLXNtIGJ0bi1wcmltYXJ5XCIsIHsgYWN0aXZlOiBfY3R4Lm5hdiA9PSAnaGVscCcgfV0pXHJcbiAgICAgICAgICAgIH0sIFwiSGVscHNcIiwgMiAvKiBDTEFTUyAqLyksXHJcbiAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJsaVwiLCB7XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiBfY2FjaGVbNl0gfHwgKF9jYWNoZVs2XSA9ICgkZXZlbnQpID0+IChfY3R4Lm9uTmF2Q2xpY2soJ2Fib3V0JykpKSxcclxuICAgICAgICAgICAgICAgIGNsYXNzOiBfbm9ybWFsaXplQ2xhc3MoW1wiYnRuIGJ0bi1zbSBidG4tcHJpbWFyeVwiLCB7IGFjdGl2ZTogX2N0eC5uYXYgPT0gJ2Fib3V0JyB9XSlcclxuICAgICAgICAgICAgfSwgXCJBYm91dFwiLCAyIC8qIENMQVNTICovKVxyXG4gICAgICAgIF0pXHJcbiAgICBdKSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgcmVzb2x2ZUNvbXBvbmVudCBhcyBfcmVzb2x2ZUNvbXBvbmVudCwgdlNob3cgYXMgX3ZTaG93LCBjcmVhdGVWTm9kZSBhcyBfY3JlYXRlVk5vZGUsIHdpdGhEaXJlY3RpdmVzIGFzIF93aXRoRGlyZWN0aXZlcywgdk1vZGVsQ2hlY2tib3ggYXMgX3ZNb2RlbENoZWNrYm94LCBjcmVhdGVFbGVtZW50Vk5vZGUgYXMgX2NyZWF0ZUVsZW1lbnRWTm9kZSwgY3JlYXRlVGV4dFZOb2RlIGFzIF9jcmVhdGVUZXh0Vk5vZGUsIHJlbmRlckxpc3QgYXMgX3JlbmRlckxpc3QsIEZyYWdtZW50IGFzIF9GcmFnbWVudCwgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrLCB0b0Rpc3BsYXlTdHJpbmcgYXMgX3RvRGlzcGxheVN0cmluZywgbm9ybWFsaXplQ2xhc3MgYXMgX25vcm1hbGl6ZUNsYXNzLCBwdXNoU2NvcGVJZCBhcyBfcHVzaFNjb3BlSWQsIHBvcFNjb3BlSWQgYXMgX3BvcFNjb3BlSWQgfSBmcm9tIFwidnVlXCI7XHJcbmNvbnN0IF93aXRoU2NvcGVJZCA9IG4gPT4gKF9wdXNoU2NvcGVJZChcImRhdGEtdi0zYzM1NzRmZVwiKSwgbiA9IG4oKSwgX3BvcFNjb3BlSWQoKSwgbik7XHJcbmNvbnN0IF9ob2lzdGVkXzEgPSB7IGNsYXNzOiBcInRvYy1pdGVtLXZpZXdcIiB9O1xyXG5jb25zdCBfaG9pc3RlZF8yID0geyBjbGFzczogXCJ0b2MtaXRlbS1saXN0XCIgfTtcclxuY29uc3QgX2hvaXN0ZWRfMyA9IHsgY29sc3BhbjogXCIyXCIgfTtcclxuY29uc3QgX2hvaXN0ZWRfNCA9IC8qI19fUFVSRV9fKi8gX3dpdGhTY29wZUlkKCgpID0+IC8qI19fUFVSRV9fKi8gX2NyZWF0ZUVsZW1lbnRWTm9kZShcInNwYW5cIiwgeyBzdHlsZTogeyBcInBhZGRpbmctbGVmdFwiOiBcIi41ZW1cIiB9IH0sIFwiQ2hlY2sgQWxsXCIsIC0xIC8qIEhPSVNURUQgKi8pKTtcclxuY29uc3QgX2hvaXN0ZWRfNSA9IC8qI19fUFVSRV9fKi8gX3dpdGhTY29wZUlkKCgpID0+IC8qI19fUFVSRV9fKi8gX2NyZWF0ZUVsZW1lbnRWTm9kZShcInRoXCIsIG51bGwsIG51bGwsIC0xIC8qIEhPSVNURUQgKi8pKTtcclxuY29uc3QgX2hvaXN0ZWRfNiA9IC8qI19fUFVSRV9fKi8gX3dpdGhTY29wZUlkKCgpID0+IC8qI19fUFVSRV9fKi8gX2NyZWF0ZUVsZW1lbnRWTm9kZShcInRoXCIsIHtcclxuICAgIGNsYXNzOiBcInRleHQtY2VudGVyXCIsXHJcbiAgICBzdHlsZTogeyBcIndpZHRoXCI6IFwiODBweFwiIH1cclxufSwgbnVsbCwgLTEgLyogSE9JU1RFRCAqLykpO1xyXG5jb25zdCBfaG9pc3RlZF83ID0geyBjbGFzczogXCJmY2NcIiB9O1xyXG5jb25zdCBfaG9pc3RlZF84ID0gW1wib25DbGlja1wiLCBcIm9uVXBkYXRlOm1vZGVsVmFsdWVcIl07XHJcbmNvbnN0IF9ob2lzdGVkXzkgPSB7IHN0eWxlOiB7IFwicGFkZGluZy1sZWZ0XCI6IFwiLjVlbVwiIH0gfTtcclxuY29uc3QgX2hvaXN0ZWRfMTAgPSB7XHJcbiAgICBjb2xzcGFuOiBcIjJcIixcclxuICAgIHN0eWxlOiB7IFwidGV4dC1hbGlnblwiOiBcInJpZ2h0XCIgfVxyXG59O1xyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xyXG4gICAgY29uc3QgX2NvbXBvbmVudF9GZXRjaFF1ZXVlID0gX3Jlc29sdmVDb21wb25lbnQoXCJGZXRjaFF1ZXVlXCIpO1xyXG4gICAgY29uc3QgX2NvbXBvbmVudF9GZXRjaEJ1dHRvbiA9IF9yZXNvbHZlQ29tcG9uZW50KFwiRmV0Y2hCdXR0b25cIik7XHJcbiAgICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCBfaG9pc3RlZF8xLCBbXHJcbiAgICAgICAgX3dpdGhEaXJlY3RpdmVzKF9jcmVhdGVWTm9kZShfY29tcG9uZW50X0ZldGNoUXVldWUsIHsgcmVmOiBcImZldGNoUXVldWVcIiB9LCBudWxsLCA1MTIgLyogTkVFRF9QQVRDSCAqLyksIFtcclxuICAgICAgICAgICAgW192U2hvdywgZmFsc2VdXHJcbiAgICAgICAgXSksXHJcbiAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInRhYmxlXCIsIF9ob2lzdGVkXzIsIFtcclxuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInRoZWFkXCIsIG51bGwsIFtcclxuICAgICAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJ0clwiLCBudWxsLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInRoXCIsIF9ob2lzdGVkXzMsIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImxhYmVsXCIsIG51bGwsIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF93aXRoRGlyZWN0aXZlcyhfY3JlYXRlRWxlbWVudFZOb2RlKFwiaW5wdXRcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6IF9jYWNoZVswXSB8fCAoX2NhY2hlWzBdID0gKCRldmVudCkgPT4gKF9jdHgub25DaGVja0FsbCgpKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvblVwZGF0ZTptb2RlbFZhbHVlXCI6IF9jYWNoZVsxXSB8fCAoX2NhY2hlWzFdID0gKCRldmVudCkgPT4gKChfY3R4LmNoZWNrQWxsKSA9ICRldmVudCkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBcImZvcm0tY2hlY2staW5wdXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIG51bGwsIDUxMiAvKiBORUVEX1BBVENIICovKSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdk1vZGVsQ2hlY2tib3gsIF9jdHguY2hlY2tBbGxdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jcmVhdGVUZXh0Vk5vZGUoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9ob2lzdGVkXzRcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgICAgICAgICBdKSxcclxuICAgICAgICAgICAgICAgICAgICBfaG9pc3RlZF81LFxyXG4gICAgICAgICAgICAgICAgICAgIF9ob2lzdGVkXzZcclxuICAgICAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgIF0pLFxyXG4gICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwidGJvZHlcIiwgbnVsbCwgW1xyXG4gICAgICAgICAgICAgICAgKF9vcGVuQmxvY2sodHJ1ZSksIF9jcmVhdGVFbGVtZW50QmxvY2soX0ZyYWdtZW50LCBudWxsLCBfcmVuZGVyTGlzdChfY3R4Lml0ZW1zLCAodG9jLCB0b2NJbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwidHJcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogX25vcm1hbGl6ZUNsYXNzKFtcInRvYy1pdGVtXCIsIHsgb2RzOiB0b2NJbmRleCAlIDIgPT0gMCB9XSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogdG9jSW5kZXhcclxuICAgICAgICAgICAgICAgICAgICB9LCBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJ0ZFwiLCBfaG9pc3RlZF83LCBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfd2l0aERpcmVjdGl2ZXMoX2NyZWF0ZUVsZW1lbnRWTm9kZShcImlucHV0XCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiAoJGV2ZW50KSA9PiAoX2N0eC50Z1F1ZXVlKHRvY0luZGV4KSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFwiZm9ybS1jaGVjay1pbnB1dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9uVXBkYXRlOm1vZGVsVmFsdWVcIjogKCRldmVudCkgPT4gKChfY3R4LmNoZWNrZWRRdWV1ZXNbdG9jSW5kZXhdKSA9ICRldmVudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIF9ob2lzdGVkXzgpLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192TW9kZWxDaGVja2JveCwgX2N0eC5jaGVja2VkUXVldWVzW3RvY0luZGV4XV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwidGRcIiwgX2hvaXN0ZWRfOSwgX3RvRGlzcGxheVN0cmluZyh0b2MudGl0bGUpLCAxIC8qIFRFWFQgKi8pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwidGRcIiwgX2hvaXN0ZWRfMTAsIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jcmVhdGVWTm9kZShfY29tcG9uZW50X0ZldGNoQnV0dG9uLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25VcGRhdGU6IF9jYWNoZVsyXSB8fCAoX2NhY2hlWzJdID0gKCRldmVudCkgPT4gKF9jdHgub25GZXRjaFVwZGF0ZSgkZXZlbnQpKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VjdGlvbkluZGV4OiBfY3R4LnNlY3Rpb25JbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2NJbmRleDogdG9jSW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9jOiB0b2MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZFF1ZXVlczogXCJjaGVja2VkUXVldWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmX2ZvcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6IFwiZmV0Y2hCdG5zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIFtcInNlY3Rpb25JbmRleFwiLCBcInRvY0luZGV4XCIsIFwidG9jXCJdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICAgICAgICAgIF0sIDIgLyogQ0xBU1MgKi8pKTtcclxuICAgICAgICAgICAgICAgIH0pLCAxMjggLyogS0VZRURfRlJBR01FTlQgKi8pKVxyXG4gICAgICAgICAgICBdKVxyXG4gICAgICAgIF0pXHJcbiAgICBdKSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdG9EaXNwbGF5U3RyaW5nIGFzIF90b0Rpc3BsYXlTdHJpbmcsIGNyZWF0ZUVsZW1lbnRWTm9kZSBhcyBfY3JlYXRlRWxlbWVudFZOb2RlLCBjcmVhdGVUZXh0Vk5vZGUgYXMgX2NyZWF0ZVRleHRWTm9kZSwgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrIH0gZnJvbSBcInZ1ZVwiO1xyXG5jb25zdCBfaG9pc3RlZF8xID0geyBjbGFzczogXCJhYm91dC1wYWdlIHBhZ2VcIiB9O1xyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xyXG4gICAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwgX2hvaXN0ZWRfMSwgW1xyXG4gICAgICAgIF9jcmVhdGVUZXh0Vk5vZGUoXCIgdmVyc2lvbiBcIiksXHJcbiAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInNwYW5cIiwgbnVsbCwgX3RvRGlzcGxheVN0cmluZyhfY3R4LmFwcC52ZXJzaW9uKSwgMSAvKiBURVhUICovKVxyXG4gICAgXSkpO1xyXG59XHJcbiIsImltcG9ydCB7IHJlc29sdmVDb21wb25lbnQgYXMgX3Jlc29sdmVDb21wb25lbnQsIGNyZWF0ZVZOb2RlIGFzIF9jcmVhdGVWTm9kZSwgY3JlYXRlRWxlbWVudFZOb2RlIGFzIF9jcmVhdGVFbGVtZW50Vk5vZGUsIHRvRGlzcGxheVN0cmluZyBhcyBfdG9EaXNwbGF5U3RyaW5nLCByZW5kZXJMaXN0IGFzIF9yZW5kZXJMaXN0LCBGcmFnbWVudCBhcyBfRnJhZ21lbnQsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jaywgY3JlYXRlVGV4dFZOb2RlIGFzIF9jcmVhdGVUZXh0Vk5vZGUsIHB1c2hTY29wZUlkIGFzIF9wdXNoU2NvcGVJZCwgcG9wU2NvcGVJZCBhcyBfcG9wU2NvcGVJZCB9IGZyb20gXCJ2dWVcIjtcclxuY29uc3QgX3dpdGhTY29wZUlkID0gbiA9PiAoX3B1c2hTY29wZUlkKFwiZGF0YS12LTZjMTdmZWM3XCIpLCBuID0gbigpLCBfcG9wU2NvcGVJZCgpLCBuKTtcclxuY29uc3QgX2hvaXN0ZWRfMSA9IHsgY2xhc3M6IFwiY291cnNlLXBhZ2UgcGFnZVwiIH07XHJcbmNvbnN0IF9ob2lzdGVkXzIgPSB7IGNsYXNzOiBcImZzcWNcIiB9O1xyXG5jb25zdCBfaG9pc3RlZF8zID0geyBjbGFzczogXCJjb3Vyc2VcIiB9O1xyXG5jb25zdCBfaG9pc3RlZF80ID0gLyojX19QVVJFX18qLyBfd2l0aFNjb3BlSWQoKCkgPT4gLyojX19QVVJFX18qLyBfY3JlYXRlRWxlbWVudFZOb2RlKFwiaVwiLCB7IGNsYXNzOiBcImZhIGZhLWJvb2ttYXJrXCIgfSwgbnVsbCwgLTEgLyogSE9JU1RFRCAqLykpO1xyXG5jb25zdCBfaG9pc3RlZF81ID0ge1xyXG4gICAgY2xhc3M6IFwiYWNjb3JkaW9uIGFjY29yZGlvbi1mbHVzaFwiLFxyXG4gICAgaWQ6IFwiYWNjb3JkaW9uQ291cnNlXCJcclxufTtcclxuY29uc3QgX2hvaXN0ZWRfNiA9IFtcImlkXCJdO1xyXG5jb25zdCBfaG9pc3RlZF83ID0geyBjbGFzczogXCJyb3cgY291cnNlLXNlY3Rpb25cIiB9O1xyXG5jb25zdCBfaG9pc3RlZF84ID0gW1wiZGF0YS1icy10YXJnZXRcIiwgXCJhcmlhLWNvbnRyb2xzXCJdO1xyXG5jb25zdCBfaG9pc3RlZF85ID0gLyojX19QVVJFX18qLyBfd2l0aFNjb3BlSWQoKCkgPT4gLyojX19QVVJFX18qLyBfY3JlYXRlRWxlbWVudFZOb2RlKFwiaVwiLCB7IGNsYXNzOiBcImZhIGZhLXBsdXNcIiB9LCBudWxsLCAtMSAvKiBIT0lTVEVEICovKSk7XHJcbmNvbnN0IF9ob2lzdGVkXzEwID0gW1xyXG4gICAgX2hvaXN0ZWRfOVxyXG5dO1xyXG5jb25zdCBfaG9pc3RlZF8xMSA9IHtcclxuICAgIGNsYXNzOiBcImNvbC1tZC04XCIsXHJcbiAgICBzdHlsZTogeyBcInBhZGRpbmctbGVmdFwiOiBcIjIuNWVtXCIgfVxyXG59O1xyXG5jb25zdCBfaG9pc3RlZF8xMiA9IHsgY2xhc3M6IFwiY29sLW1kLTRcIiB9O1xyXG5jb25zdCBfaG9pc3RlZF8xMyA9IFtcImlkXCIsIFwiYXJpYS1sYWJlbGxlZGJ5XCJdO1xyXG5jb25zdCBfaG9pc3RlZF8xNCA9IHsgY2xhc3M6IFwiYWNjb3JkaW9uLWJvZHlcIiB9O1xyXG5jb25zdCBfaG9pc3RlZF8xNSA9IHsgY2xhc3M6IFwibGJjXCIgfTtcclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcclxuICAgIGNvbnN0IF9jb21wb25lbnRfRmV0Y2hTZWN0aW9uUXVldWUgPSBfcmVzb2x2ZUNvbXBvbmVudChcIkZldGNoU2VjdGlvblF1ZXVlXCIpO1xyXG4gICAgY29uc3QgX2NvbXBvbmVudF9GZXRjaFF1ZXVlQmFyID0gX3Jlc29sdmVDb21wb25lbnQoXCJGZXRjaFF1ZXVlQmFyXCIpO1xyXG4gICAgY29uc3QgX2NvbXBvbmVudF9Ub2NJdGVtID0gX3Jlc29sdmVDb21wb25lbnQoXCJUb2NJdGVtXCIpO1xyXG4gICAgY29uc3QgX2NvbXBvbmVudF9Mb2dCYXIgPSBfcmVzb2x2ZUNvbXBvbmVudChcIkxvZ0JhclwiKTtcclxuICAgIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIF9ob2lzdGVkXzEsIFtcclxuICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzIsIFtcclxuICAgICAgICAgICAgX2NyZWF0ZVZOb2RlKF9jb21wb25lbnRfRmV0Y2hTZWN0aW9uUXVldWUsIHsgcmVmOiBcImZldGNoU2VjdGlvblF1ZXVlXCIgfSwgbnVsbCwgNTEyIC8qIE5FRURfUEFUQ0ggKi8pXHJcbiAgICAgICAgXSksXHJcbiAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8zLCBbXHJcbiAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJoMlwiLCBudWxsLCBbXHJcbiAgICAgICAgICAgICAgICBfaG9pc3RlZF80LFxyXG4gICAgICAgICAgICAgICAgX2NyZWF0ZVRleHRWTm9kZShcIiBcIiArIF90b0Rpc3BsYXlTdHJpbmcoX2N0eC5jb3Vyc2UudGl0bGUpICsgXCIgYnkgXCIsIDEgLyogVEVYVCAqLyksXHJcbiAgICAgICAgICAgICAgICAoX29wZW5CbG9jayh0cnVlKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhfRnJhZ21lbnQsIG51bGwsIF9yZW5kZXJMaXN0KF9jdHguYXV0aG9ycywgKGF1dGhvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwic3BhblwiLCBudWxsLCBfdG9EaXNwbGF5U3RyaW5nKF9jdHgubWFrZVRpdGxlKGF1dGhvci5zbHVnKSksIDEgLyogVEVYVCAqLykpO1xyXG4gICAgICAgICAgICAgICAgfSksIDI1NiAvKiBVTktFWUVEX0ZSQUdNRU5UICovKSlcclxuICAgICAgICAgICAgXSlcclxuICAgICAgICBdKSxcclxuICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzUsIFtcclxuICAgICAgICAgICAgKF9vcGVuQmxvY2sodHJ1ZSksIF9jcmVhdGVFbGVtZW50QmxvY2soX0ZyYWdtZW50LCBudWxsLCBfcmVuZGVyTGlzdChfY3R4LnNlY3Rpb25zLCAoc2VjdGlvbiwgc2VjdGlvbkluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5OiBzZWN0aW9uSW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFwiYWNjb3JkaW9uLWl0ZW1cIlxyXG4gICAgICAgICAgICAgICAgfSwgW1xyXG4gICAgICAgICAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogXCJhY2NvcmRpb24taGVhZGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnaGVhZGluZycgKyBzZWN0aW9uSW5kZXhcclxuICAgICAgICAgICAgICAgICAgICB9LCBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfNywgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImJ1dHRvblwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFwiYnRuIGJ0bi1kZWZhdWx0IGFjY29yZGlvbi1idXR0b24gY3VzdG9tIGJ0bi1jb2xsYXBzZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS1icy10b2dnbGVcIjogXCJjb2xsYXBzZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS1icy10YXJnZXRcIjogJyNjb2xsYXBzZScgKyBzZWN0aW9uSW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhcmlhLWV4cGFuZGVkXCI6IFwiZmFsc2VcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFyaWEtY29udHJvbHNcIjogJ2NvbGxhcHNlJyArIHNlY3Rpb25JbmRleFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgX2hvaXN0ZWRfMTAsIDggLyogUFJPUFMgKi8sIF9ob2lzdGVkXzgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8xMSwgX3RvRGlzcGxheVN0cmluZyhzZWN0aW9uLnRpdGxlKSwgMSAvKiBURVhUICovKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfMTIsIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY3JlYXRlVk5vZGUoX2NvbXBvbmVudF9GZXRjaFF1ZXVlQmFyLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZl9mb3I6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJmZXRjaFF1ZXVlQmFyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb25JbmRleDogc2VjdGlvbkluZGV4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgW1wic2VjdGlvbkluZGV4XCJdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgICAgICAgICBdLCA4IC8qIFBST1BTICovLCBfaG9pc3RlZF82KSxcclxuICAgICAgICAgICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdjb2xsYXBzZScgKyBzZWN0aW9uSW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBcImFjY29yZGlvbi1jb2xsYXBzZSBjb2xsYXBzZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFyaWEtbGFiZWxsZWRieVwiOiAnaGVhZGluZycgKyBzZWN0aW9uSW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS1icy1wYXJlbnRcIjogXCIjYWNjb3JkaW9uQ291cnNlXCJcclxuICAgICAgICAgICAgICAgICAgICB9LCBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfMTQsIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jcmVhdGVWTm9kZShfY29tcG9uZW50X1RvY0l0ZW0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogc2VjdGlvbi5pdGVtcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWN0aW9uSW5kZXg6IHNlY3Rpb25JbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblVwZGF0ZTogX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAoJGV2ZW50KSA9PiAoX2N0eC5vblRvY1VwZGF0ZSgkZXZlbnQpKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmX2ZvcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6IFwidG9jSXRlbXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgW1wiaXRlbXNcIiwgXCJzZWN0aW9uSW5kZXhcIl0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgICAgICAgICAgXSwgOCAvKiBQUk9QUyAqLywgX2hvaXN0ZWRfMTMpXHJcbiAgICAgICAgICAgICAgICBdKSk7XHJcbiAgICAgICAgICAgIH0pLCAxMjggLyogS0VZRURfRlJBR01FTlQgKi8pKVxyXG4gICAgICAgIF0pLFxyXG4gICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfMTUsIFtcclxuICAgICAgICAgICAgX2NyZWF0ZVZOb2RlKF9jb21wb25lbnRfTG9nQmFyLCB7IHJlZjogXCJsb2dCYXJcIiB9LCBudWxsLCA1MTIgLyogTkVFRF9QQVRDSCAqLylcclxuICAgICAgICBdKVxyXG4gICAgXSkpO1xyXG59XHJcbiIsImltcG9ydCB7IG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jayB9IGZyb20gXCJ2dWVcIjtcclxuY29uc3QgX2hvaXN0ZWRfMSA9IHsgY2xhc3M6IFwiZG93bmxvYWQtcGFnZSBwYWdlXCIgfTtcclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcclxuICAgIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIF9ob2lzdGVkXzEsIFwiIERPV05MT0FEIFwiKSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudFZOb2RlIGFzIF9jcmVhdGVFbGVtZW50Vk5vZGUsIGNyZWF0ZVRleHRWTm9kZSBhcyBfY3JlYXRlVGV4dFZOb2RlLCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2sgfSBmcm9tIFwidnVlXCI7XHJcbmNvbnN0IF9ob2lzdGVkXzEgPSB7IGNsYXNzOiBcImhlbHAtcGFnZSBwYWdlXCIgfTtcclxuY29uc3QgX2hvaXN0ZWRfMiA9IC8qI19fUFVSRV9fKi8gX2NyZWF0ZUVsZW1lbnRWTm9kZShcImlcIiwgeyBjbGFzczogXCJmYSBmYS1zeW5jXCIgfSwgbnVsbCwgLTEgLyogSE9JU1RFRCAqLyk7XHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XHJcbiAgICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCBfaG9pc3RlZF8xLCBbXHJcbiAgICAgICAgX2NyZWF0ZVRleHRWTm9kZShcIiBIRUxQIFwiKSxcclxuICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIG51bGwsIFtcclxuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImJ1dHRvblwiLCB7XHJcbiAgICAgICAgICAgICAgICBjbGFzczogXCJidG4gYnRuLWRhbmdlclwiLFxyXG4gICAgICAgICAgICAgICAgb25DbGljazogX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAoJGV2ZW50KSA9PiAoX2N0eC5zeW5jTFMoKSkpXHJcbiAgICAgICAgICAgIH0sIFtcclxuICAgICAgICAgICAgICAgIF9ob2lzdGVkXzIsXHJcbiAgICAgICAgICAgICAgICBfY3JlYXRlVGV4dFZOb2RlKFwiIFN5bmMgTFNcIilcclxuICAgICAgICAgICAgXSlcclxuICAgICAgICBdKVxyXG4gICAgXSkpO1xyXG59XHJcbiIsImltcG9ydCB7IG5vcm1hbGl6ZUNsYXNzIGFzIF9ub3JtYWxpemVDbGFzcywgY3JlYXRlRWxlbWVudFZOb2RlIGFzIF9jcmVhdGVFbGVtZW50Vk5vZGUsIGNyZWF0ZVRleHRWTm9kZSBhcyBfY3JlYXRlVGV4dFZOb2RlLCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2sgfSBmcm9tIFwidnVlXCI7XHJcbmNvbnN0IF9ob2lzdGVkXzEgPSB7IGNsYXNzOiBcImhvbWUtcGFnZSBwYWdlXCIgfTtcclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcclxuICAgIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIF9ob2lzdGVkXzEsIFtcclxuICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiYnV0dG9uXCIsIHtcclxuICAgICAgICAgICAgY2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5XCIsXHJcbiAgICAgICAgICAgIG9uQ2xpY2s6IF9jYWNoZVswXSB8fCAoX2NhY2hlWzBdID0gKCRldmVudCkgPT4gKF9jdHgucmV0cmlldmVEYXRhQ29kZXNGcm9tQ29udGVudCgpKSlcclxuICAgICAgICB9LCBbXHJcbiAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJpXCIsIHtcclxuICAgICAgICAgICAgICAgIGNsYXNzOiBfbm9ybWFsaXplQ2xhc3MoW1wiZmFcIiwgeyAnZmEtaGFuZHNoYWtlLW8nOiBfY3R4LmJ0blJldHJpZXZlU3RhdGUgPT0gMCwgJ2ZhLXNwaW4gZmEtc3Bpbm5lcic6IF9jdHguYnRuUmV0cmlldmVTdGF0ZSA9PSAxLCAnZmEtcmVmcmVzaCc6IF9jdHguYnRuUmV0cmlldmVTdGF0ZSA9PSAyIH1dKVxyXG4gICAgICAgICAgICB9LCBudWxsLCAyIC8qIENMQVNTICovKSxcclxuICAgICAgICAgICAgX2NyZWF0ZVRleHRWTm9kZShcIiBSZXRyaWV2ZSBEYXRhIENvZGVzXCIpXHJcbiAgICAgICAgXSlcclxuICAgIF0pKTtcclxufVxyXG4iLCJpbXBvcnQgeyB0b0Rpc3BsYXlTdHJpbmcgYXMgX3RvRGlzcGxheVN0cmluZywgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrIH0gZnJvbSBcInZ1ZVwiO1xyXG5jb25zdCBfaG9pc3RlZF8xID0geyBjbGFzczogXCJsb2FkaW5nLXBhZ2UgcGFnZVwiIH07XHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XHJcbiAgICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCBfaG9pc3RlZF8xLCBfdG9EaXNwbGF5U3RyaW5nKF9jdHgudGV4dCksIDEgLyogVEVYVCAqLykpO1xyXG59XHJcbiIsImltcG9ydCB7IHRvRGlzcGxheVN0cmluZyBhcyBfdG9EaXNwbGF5U3RyaW5nLCBjcmVhdGVFbGVtZW50Vk5vZGUgYXMgX2NyZWF0ZUVsZW1lbnRWTm9kZSwgY3JlYXRlVGV4dFZOb2RlIGFzIF9jcmVhdGVUZXh0Vk5vZGUsIHJlbmRlckxpc3QgYXMgX3JlbmRlckxpc3QsIEZyYWdtZW50IGFzIF9GcmFnbWVudCwgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrLCBjcmVhdGVDb21tZW50Vk5vZGUgYXMgX2NyZWF0ZUNvbW1lbnRWTm9kZSwgcHVzaFNjb3BlSWQgYXMgX3B1c2hTY29wZUlkLCBwb3BTY29wZUlkIGFzIF9wb3BTY29wZUlkIH0gZnJvbSBcInZ1ZVwiO1xyXG5jb25zdCBfd2l0aFNjb3BlSWQgPSBuID0+IChfcHVzaFNjb3BlSWQoXCJkYXRhLXYtNjJhYTQwMzhcIiksIG4gPSBuKCksIF9wb3BTY29wZUlkKCksIG4pO1xyXG5jb25zdCBfaG9pc3RlZF8xID0geyBjbGFzczogXCJ3ZWxjb21lLXBhZ2UgcGFnZVwiIH07XHJcbmNvbnN0IF9ob2lzdGVkXzIgPSB7IGNsYXNzOiBcImFjdGlvbi1jbnRcIiB9O1xyXG5jb25zdCBfaG9pc3RlZF8zID0ge1xyXG4gICAga2V5OiAwLFxyXG4gICAgY2xhc3M6IFwiZHJvcGRvd25cIlxyXG59O1xyXG5jb25zdCBfaG9pc3RlZF80ID0gLyojX19QVVJFX18qLyBfd2l0aFNjb3BlSWQoKCkgPT4gLyojX19QVVJFX18qLyBfY3JlYXRlRWxlbWVudFZOb2RlKFwiYnV0dG9uXCIsIHtcclxuICAgIGNsYXNzOiBcImJ0biBidG4tc2Vjb25kYXJ5IGRyb3Bkb3duLXRvZ2dsZVwiLFxyXG4gICAgdHlwZTogXCJidXR0b25cIixcclxuICAgIGlkOiBcInJlY2VudENvdXJzZUJ1dHRvblwiLFxyXG4gICAgXCJkYXRhLWJzLXRvZ2dsZVwiOiBcImRyb3Bkb3duXCIsXHJcbiAgICBcImFyaWEtZXhwYW5kZWRcIjogXCJmYWxzZVwiXHJcbn0sIFtcclxuICAgIC8qI19fUFVSRV9fKi8gX2NyZWF0ZUVsZW1lbnRWTm9kZShcImlcIiwgeyBjbGFzczogXCJmYSBmYS1oaXN0b3J5XCIgfSksXHJcbiAgICAvKiNfX1BVUkVfXyovIF9jcmVhdGVUZXh0Vk5vZGUoXCIgTG9hZCBSZWNlbnQgQ291cnNlIFwiKVxyXG5dLCAtMSAvKiBIT0lTVEVEICovKSk7XHJcbmNvbnN0IF9ob2lzdGVkXzUgPSB7XHJcbiAgICBjbGFzczogXCJkcm9wZG93bi1tZW51XCIsXHJcbiAgICBcImFyaWEtbGFiZWxsZWRieVwiOiBcInJlY2VudENvdXJzZUJ1dHRvblwiXHJcbn07XHJcbmNvbnN0IF9ob2lzdGVkXzYgPSBbXCJvbkNsaWNrXCJdO1xyXG5jb25zdCBfaG9pc3RlZF83ID0gLyojX19QVVJFX18qLyBfd2l0aFNjb3BlSWQoKCkgPT4gLyojX19QVVJFX18qLyBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIHsgY2xhc3M6IFwiYnRuLWNudFwiIH0sIFtcclxuICAgIC8qI19fUFVSRV9fKi8gX2NyZWF0ZUVsZW1lbnRWTm9kZShcImJ1dHRvblwiLCB7IGNsYXNzOiBcImJ0biBidG4tcHJpbWFyeVwiIH0sIFtcclxuICAgICAgICAvKiNfX1BVUkVfXyovIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJpXCIsIHsgY2xhc3M6IFwiZmEgZmEtaGFuZC1vLXJpZ2h0XCIgfSksXHJcbiAgICAgICAgLyojX19QVVJFX18qLyBfY3JlYXRlVGV4dFZOb2RlKFwiIEZldGNoIFRoaXMgQ291cnNlXCIpXHJcbiAgICBdKVxyXG5dLCAtMSAvKiBIT0lTVEVEICovKSk7XHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XHJcbiAgICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCBfaG9pc3RlZF8xLCBbXHJcbiAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInBcIiwgbnVsbCwgX3RvRGlzcGxheVN0cmluZyhfY3R4LmdyZWV0aW5nKSwgMSAvKiBURVhUICovKSxcclxuICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzIsIFtcclxuICAgICAgICAgICAgKF9jdHgubGFzdENvdXJzZUxpc3QubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCBfaG9pc3RlZF8zLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgX2hvaXN0ZWRfNCxcclxuICAgICAgICAgICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwidWxcIiwgX2hvaXN0ZWRfNSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoX29wZW5CbG9jayh0cnVlKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhfRnJhZ21lbnQsIG51bGwsIF9yZW5kZXJMaXN0KF9jdHgubGFzdENvdXJzZUxpc3QsIChjb3Vyc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwibGlcIiwgbnVsbCwgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJhXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFwiZHJvcGRvd24taXRlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOiBcImphdmFzY3JpcHQ6O1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiAoJGV2ZW50KSA9PiAoX2N0eC5mZXRjaENvdXJzZUxTKGNvdXJzZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgX3RvRGlzcGxheVN0cmluZyhjb3Vyc2UudGl0bGUpLCA5IC8qIFRFWFQsIFBST1BTICovLCBfaG9pc3RlZF82KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSwgMjU2IC8qIFVOS0VZRURfRlJBR01FTlQgKi8pKVxyXG4gICAgICAgICAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgICAgICBdKSlcclxuICAgICAgICAgICAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSksXHJcbiAgICAgICAgICAgIF9ob2lzdGVkXzdcclxuICAgICAgICBdKVxyXG4gICAgXSkpO1xyXG59XHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmNsYXNzIFByb3h5IHtcclxuICAgIHN0YXRpYyBhc3luYyBjcmVhdGUodXJsLCBtZXRob2QsIHBvc3REYXRhKSB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSB7XHJcbiAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKidcclxuICAgICAgICB9O1xyXG4gICAgICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcclxuICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAobWV0aG9kID09ICdwb3N0Jykge1xyXG4gICAgICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHBvc3REYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoa2V5LCBwb3N0RGF0YVtrZXldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcHRpb25zLmhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gJ211bHRpcGFydC9mb3JtLWRhdGEnO1xyXG4gICAgICAgICAgICBvcHRpb25zWydkYXRhJ10gPSBmb3JtRGF0YTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3Mob3B0aW9ucykudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0KHVybCwgY2JTdWNjZXNzLCBjYkVycm9yKSB7XHJcbiAgICAgICAgYXhpb3Moe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGNiU3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgY2JTdWNjZXNzKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGNiRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNiRXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBwb3N0KHVybCwgcG9zdERhdGEsIGNiU3VjY2VzcywgY2JFcnJvciwgb3B0QXJncykge1xyXG4gICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBwb3N0RGF0YSkge1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoa2V5LCBwb3N0RGF0YVtrZXldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRBcmdzID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbiBpbiBvcHRBcmdzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGYgPSBvcHRBcmdzW25dO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChuLCBmKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXhpb3Moe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyxcclxuICAgICAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBjYlN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgIGNiU3VjY2VzcyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBjYkVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjYkVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUHJveHk7XHJcbiIsImltcG9ydCBsb2NhbFN0b3JhZ2VEQiBmcm9tIFwibG9jYWxTdG9yYWdlREJcIjtcclxuaW1wb3J0IFByb3h5IGZyb20gXCIuL3Byb3h5XCI7XHJcbmltcG9ydCB7IG1ha2VTbHVnLCBtYWtlVGl0bGUgfSBmcm9tIFwiLi91dGlsc1wiO1xyXG5jbGFzcyBNeUxTIHtcclxuICAgIGRiO1xyXG4gICAgc3Vic2NyaWJlcnMgPSB7fTtcclxuICAgIGxhc3RUYWJsZSA9ICcnO1xyXG4gICAgbGFzdFRhYmxlUGs7XHJcbiAgICBjb25zdHJ1Y3RvcihkYiwgZW5naW5lKSB7XHJcbiAgICAgICAgdGhpcy5kYiA9IG5ldyBsb2NhbFN0b3JhZ2VEQihkYiwgZW5naW5lKTtcclxuICAgIH1cclxuICAgIHN1YnNjcmliZSh0YWJsZSwgZm4pIHtcclxuICAgICAgICB0aGlzLnN1YnNjcmliZXJzW3RhYmxlXSA9IGZuO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlKHRhYmxlLCBxdWVyeSwgdXBkYXRlKSB7XHJcbiAgICAgICAgY29uc3QgcmV0ID0gdGhpcy5kYi51cGRhdGUodGFibGUsIHF1ZXJ5LCB1cGRhdGUpO1xyXG4gICAgICAgIHRoaXMubGFzdFRhYmxlID0gdGFibGU7XHJcbiAgICAgICAgdGhpcy5sYXN0VGFibGVQayA9IHJldDtcclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG4gICAgaW5zZXJ0KGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYi5pbnNlcnQoYSwgYik7XHJcbiAgICB9XHJcbiAgICBxdWVyeUFsbChhLCBiKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGIucXVlcnlBbGwoYSwgYik7XHJcbiAgICB9XHJcbiAgICBnZXRSb3codGFibGUsIElEKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGIucXVlcnlBbGwodGFibGUsIHsgSUQgfSlbMF07XHJcbiAgICB9XHJcbiAgICBjb21taXQoKSB7XHJcbiAgICAgICAgY29uc3QgcmV0ID0gdGhpcy5kYi5jb21taXQoKTtcclxuICAgICAgICBpZiAodGhpcy5sYXN0VGFibGUgIT09ICcnKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5zdWJzY3JpYmVyc1t0aGlzLmxhc3RUYWJsZV0gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvdyA9IHRoaXMuZ2V0Um93KHRoaXMubGFzdFRhYmxlLCB0aGlzLmxhc3RUYWJsZVBrKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlcnNbdGhpcy5sYXN0VGFibGVdKHJvdyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RUYWJsZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0VGFibGVQayA9IC0xO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcbiAgICBpc05ldygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYi5pc05ldygpO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlVGFibGUoYSwgYikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRiLmNyZWF0ZVRhYmxlKGEsIGIpO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIFN0b3JlIHtcclxuICAgIHN0YXRpYyBfX2RiX187XHJcbiAgICBzdGF0aWMgZGIoKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBTdG9yZS5fX2RiX18gPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIFN0b3JlLl9fZGJfXyA9IG5ldyBNeUxTKFwibGVhcm5pbmdcIiwgJ2xvY2FsU3RvcmFnZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gU3RvcmUuX19kYl9fO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGluaXQoKSB7XHJcbiAgICAgICAgY29uc3QgZGIgPSBTdG9yZS5kYigpO1xyXG4gICAgICAgIGlmIChkYi5pc05ldygpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjaGVtYSA9IHtcclxuICAgICAgICAgICAgICAgIGNvdXJzZTogW1widGl0bGVcIiwgXCJzbHVnXCIsIFwiZHVyYXRpb25cIiwgXCJzb3VyY2VDb2RlUmVwb3NpdG9yeVwiLCBcImRlc2NyaXB0aW9uXCIsICdhdXRob3JJZHMnXSxcclxuICAgICAgICAgICAgICAgIGF1dGhvcjogW1wibmFtZVwiLCBcInNsdWdcIiwgXCJiaW9ncmFwaHlcIiwgXCJzaG9ydEJpb2dyYXBoeVwiLCBcImNvdXJzZUlkc1wiXSxcclxuICAgICAgICAgICAgICAgIGV4ZXJjaXNlRmlsZTogW1wiY291cnNlSWRcIiwgXCJuYW1lXCIsIFwidXJsXCIsIFwic2l6ZVwiXSxcclxuICAgICAgICAgICAgICAgIHNlY3Rpb246IFtcImNvdXJzZUlkXCIsIFwic2x1Z1wiLCBcInRpdGxlXCJdLFxyXG4gICAgICAgICAgICAgICAgdG9jOiBbXCJzZWN0aW9uSWRcIiwgXCJ0aXRsZVwiLCBcInNsdWdcIiwgXCJ1cmxcIiwgXCJkdXJhdGlvblwiLCBcImNhcHRpb25VcmxcIiwgXCJjYXB0aW9uRm10XCIsIFwic3RyZWFtTG9jYXRpb25JZHNcIl0sXHJcbiAgICAgICAgICAgICAgICBzdHJlYW1Mb2NhdGlvbjogW1widG9jSWRcIiwgXCJmbXRcIiwgXCJ1cmxcIl0sXHJcbiAgICAgICAgICAgICAgICBkb3dubG9hZENvbmZpZzogW1wiY291cnNlSWRcIiwgXCJmbXRMaXN0XCIsIFwic2VsZWN0ZWRGbXRMaXN0XCJdLFxyXG4gICAgICAgICAgICAgICAgZG93bmxvYWRzOiBbXCJ0b2NJZFwiLCBcImRvd25sb2FkSWRcIiwgXCJmaWxlbmFtZVwiLCBcInByb2dyZXNzXCIsIFwic3RhdHVzXCJdLFxyXG4gICAgICAgICAgICAgICAgYXBwOiBbXCJ2ZXJzaW9uXCIsIFwic3RhdGVcIiwgXCJsYXN0Q291cnNlU2x1Z1wiXVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzY2hlbWEpLm1hcCgodGFibGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGRiLmNyZWF0ZVRhYmxlKHRhYmxlLCBzY2hlbWFbdGFibGVdKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGRiLmNvbW1pdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0YXRpYyBnZXRFeGVyY2lzZUZpbGUoY291cnNlSWQpIHtcclxuICAgICAgICBjb25zdCBkYiA9IFN0b3JlLmRiKCk7XHJcbiAgICAgICAgcmV0dXJuIGRiLnF1ZXJ5QWxsKCdleGVyY2lzZUZpbGUnLCB7IHF1ZXJ5OiB7IGNvdXJzZUlkIH0gfSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0Q291cnNlKHNsdWcpIHtcclxuICAgICAgICBjb25zdCBkYiA9IFN0b3JlLmRiKCk7XHJcbiAgICAgICAgcmV0dXJuIGRiLnF1ZXJ5QWxsKCdjb3Vyc2UnLCB7IHF1ZXJ5OiB7IHNsdWcgfSB9KTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBnZXRMYXN0Q291cnNlcygpIHtcclxuICAgICAgICBjb25zdCBkYiA9IFN0b3JlLmRiKCk7XHJcbiAgICAgICAgY29uc3QgYXBwU3RhdGUgPSBTdG9yZS5nZXRBcHBTdGF0ZSgpO1xyXG4gICAgICAgIHJldHVybiBkYi5xdWVyeUFsbCgnY291cnNlJywgeyBxdWVyeTogKHJvdykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJvdy5zbHVnICE9PSBhcHBTdGF0ZS5sYXN0Q291cnNlU2x1Zykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0Q291cnNlQnlJZChJRCkge1xyXG4gICAgICAgIGNvbnN0IGRiID0gU3RvcmUuZGIoKTtcclxuICAgICAgICByZXR1cm4gZGIucXVlcnlBbGwoJ2NvdXJzZScsIHsgcXVlcnk6IHsgSUQgfSB9KTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBnZXRTZWN0aW9uKHNsdWcpIHtcclxuICAgICAgICBjb25zdCBkYiA9IFN0b3JlLmRiKCk7XHJcbiAgICAgICAgcmV0dXJuIGRiLnF1ZXJ5QWxsKCdzZWN0aW9uJywgeyBxdWVyeTogeyBzbHVnIH0gfSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0U2VjdGlvbkJ5Q291cnNlSWQoY291cnNlSWQpIHtcclxuICAgICAgICBjb25zdCBkYiA9IFN0b3JlLmRiKCk7XHJcbiAgICAgICAgcmV0dXJuIGRiLnF1ZXJ5QWxsKCdzZWN0aW9uJywgeyBxdWVyeTogeyBjb3Vyc2VJZCB9IH0pO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGdldFRvY0J5U2VjdGlvbklkKHNlY3Rpb25JZCkge1xyXG4gICAgICAgIGNvbnN0IGRiID0gU3RvcmUuZGIoKTtcclxuICAgICAgICByZXR1cm4gZGIucXVlcnlBbGwoJ3RvYycsIHsgcXVlcnk6IHsgc2VjdGlvbklkIH0gfSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0VG9jKHNsdWcpIHtcclxuICAgICAgICBjb25zdCBkYiA9IFN0b3JlLmRiKCk7XHJcbiAgICAgICAgcmV0dXJuIGRiLnF1ZXJ5QWxsKCd0b2MnLCB7IHF1ZXJ5OiB7IHNsdWcgfSB9KTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBnZXRBdXRob3Ioc2x1Zykge1xyXG4gICAgICAgIGNvbnN0IGRiID0gU3RvcmUuZGIoKTtcclxuICAgICAgICByZXR1cm4gZGIucXVlcnlBbGwoJ2F1dGhvcicsIHsgcXVlcnk6IHsgc2x1ZyB9IH0pO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGdldEF1dGhvckJ5SWQoSUQpIHtcclxuICAgICAgICBjb25zdCBkYiA9IFN0b3JlLmRiKCk7XHJcbiAgICAgICAgcmV0dXJuIGRiLnF1ZXJ5QWxsKCdhdXRob3InLCB7IHF1ZXJ5OiB7IElEIH0gfSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgY3JlYXRlQXV0aG9yKG5hbWUsIHNsdWcsIGJpb2dyYXBoeSwgc2hvcnRCaW9ncmFwaHksIGNvdXJzZUlkKSB7XHJcbiAgICAgICAgY29uc3QgZGIgPSBTdG9yZS5kYigpO1xyXG4gICAgICAgIGNvbnN0IGF1dGhvcnMgPSBTdG9yZS5nZXRBdXRob3Ioc2x1Zyk7XHJcbiAgICAgICAgbGV0IGF1dGhvciA9IG51bGw7XHJcbiAgICAgICAgaWYgKGF1dGhvcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBhdXRob3IgPSBhdXRob3JzWzBdO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvdXJzZUlkID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY291cnNlSWRzID0gYXV0aG9yLmNvdXJzZUlkcztcclxuICAgICAgICAgICAgICAgIGlmICghY291cnNlSWRzLmluY2x1ZGVzKGNvdXJzZUlkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdXJzZUlkcy5wdXNoKGNvdXJzZUlkKTtcclxuICAgICAgICAgICAgICAgICAgICBkYi51cGRhdGUoJ2F1dGhvcicsIHsgc2x1ZyB9LCAocm93KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5jb3Vyc2VJZHMgPSBjb3Vyc2VJZHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IGRiLmNvbW1pdCgpOyB9LCAxMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhvci5jb3Vyc2VJZHMgPSBjb3Vyc2VJZHM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvdXJzZUlkcyA9IFtdO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvdXJzZUlkID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICAgICAgY291cnNlSWRzLnB1c2goY291cnNlSWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IElEID0gMDtcclxuICAgICAgICAgICAgYXV0aG9yID0geyBJRCwgbmFtZSwgc2x1ZywgYmlvZ3JhcGh5LCBzaG9ydEJpb2dyYXBoeSwgY291cnNlSWRzIH07XHJcbiAgICAgICAgICAgIGF1dGhvci5JRCA9IGRiLmluc2VydCgnYXV0aG9yJywgYXV0aG9yKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IGRiLmNvbW1pdCgpOyB9LCAxMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXV0aG9yO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGNyZWF0ZUF1dGhvckxpc3QoY291cnNlU2x1ZywgYXV0aG9ycykge1xyXG4gICAgICAgIGNvbnN0IGRiID0gU3RvcmUuZGIoKTtcclxuICAgICAgICBjb25zdCBjb3Vyc2VzID0gU3RvcmUuZ2V0Q291cnNlKGNvdXJzZVNsdWcpO1xyXG4gICAgICAgIGlmIChjb3Vyc2VzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgY291cnNlID0gY291cnNlc1swXTtcclxuICAgICAgICAgICAgbGV0IGF1dGhvcklkcyA9IGNvdXJzZS5hdXRob3JJZHM7XHJcbiAgICAgICAgICAgIGF1dGhvcnMubWFwKChhdXRob3JUbXApID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGF1dGhvclRtcCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gbWFrZVRpdGxlKGF1dGhvclRtcC5zbHVnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGF1dGhvciA9IFN0b3JlLmNyZWF0ZUF1dGhvcihuYW1lLCBhdXRob3JUbXAuc2x1ZywgYXV0aG9yVG1wLmJpb2dyYXBoeSwgYXV0aG9yVG1wLnNob3J0QmlvZ3JhcGh5LCBjb3Vyc2UuSUQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFhdXRob3JJZHMuaW5jbHVkZXMoYXV0aG9yLklEKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhvcklkcy5wdXNoKGF1dGhvci5JRCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBkYi51cGRhdGUoJ2NvdXJzZScsIHsgc2x1ZzogY291cnNlU2x1ZyB9LCAocm93KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByb3cuYXV0aG9ySWRzID0gYXV0aG9ySWRzO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvdztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGRiLmNvbW1pdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0YXRpYyB1cGRhdGVUb2NDYXB0aW9uKHNsdWcsIGNhcHRpb25VcmwsIGNhcHRpb25GbXQpIHtcclxuICAgICAgICBjb25zdCBkYiA9IFN0b3JlLmRiKCk7XHJcbiAgICAgICAgY29uc3QgdG9jcyA9IFN0b3JlLmdldFRvYyhzbHVnKTtcclxuICAgICAgICBpZiAodG9jcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvYyA9IHRvY3NbMF07XHJcbiAgICAgICAgICAgIGRiLnVwZGF0ZShcInRvY1wiLCB7IHNsdWcgfSwgZnVuY3Rpb24gKG5ld1RvYykge1xyXG4gICAgICAgICAgICAgICAgbmV3VG9jLmNhcHRpb25VcmwgPSBjYXB0aW9uVXJsO1xyXG4gICAgICAgICAgICAgICAgbmV3VG9jLmNhcHRpb25GbXQgPSBjYXB0aW9uRm10O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld1RvYztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGRiLmNvbW1pdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0YXRpYyBnZXRTdHJlYW1Mb2NhdGlvbih0b2NJZCwgZm10KSB7XHJcbiAgICAgICAgY29uc3QgZGIgPSBTdG9yZS5kYigpO1xyXG4gICAgICAgIHJldHVybiBkYi5xdWVyeUFsbCgnc3RyZWFtTG9jYXRpb24nLCB7IHF1ZXJ5OiB7IHRvY0lkLCBmbXQgfSB9KTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBjcmVhdGVTdHJlYW1Mb2NhdGlvbih0b2NJZCwgZm10LCB1cmwpIHtcclxuICAgICAgICBjb25zdCBkYiA9IFN0b3JlLmRiKCk7XHJcbiAgICAgICAgY29uc3Qgc3RyZWFtTG9jYXRpb25zID0gU3RvcmUuZ2V0U3RyZWFtTG9jYXRpb24odG9jSWQsIGZtdCk7XHJcbiAgICAgICAgbGV0IHN0cmVhbUxvYyA9IG51bGw7XHJcbiAgICAgICAgaWYgKHN0cmVhbUxvY2F0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHN0cmVhbUxvYyA9IHN0cmVhbUxvY2F0aW9uc1swXTtcclxuICAgICAgICAgICAgc3RyZWFtTG9jLnVybCA9IHVybDtcclxuICAgICAgICAgICAgZGIudXBkYXRlKCdzdHJlYW1Mb2NhdGlvbicsIChyb3cpID0+IHtcclxuICAgICAgICAgICAgICAgIHJvdy51cmwgPSB1cmw7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcm93O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IElEID0gMDtcclxuICAgICAgICAgICAgc3RyZWFtTG9jID0geyBJRCwgdG9jSWQsIGZtdCwgdXJsIH07XHJcbiAgICAgICAgICAgIHN0cmVhbUxvYy5JRCA9IGRiLmluc2VydCgnc3RyZWFtTG9jYXRpb24nLCBzdHJlYW1Mb2MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGRiLmNvbW1pdCgpLCAxMDApO1xyXG4gICAgICAgIHJldHVybiBzdHJlYW1Mb2M7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgY3JlYXRlU3RyZWFtTG9jYXRpb25MaXN0KHNsdWcsIHN0cmVhbUxvY2F0aW9ucykge1xyXG4gICAgICAgIGNvbnN0IGRiID0gU3RvcmUuZGIoKTtcclxuICAgICAgICBjb25zdCB0b2NzID0gU3RvcmUuZ2V0VG9jKHNsdWcpO1xyXG4gICAgICAgIGlmICh0b2NzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgdG9jID0gdG9jc1swXTtcclxuICAgICAgICAgICAgY29uc3Qgc3RyZWFtTG9jYXRpb25JZHMgPSB0b2Muc3RyZWFtTG9jYXRpb25JZHM7XHJcbiAgICAgICAgICAgIHN0cmVhbUxvY2F0aW9ucy5tYXAoKHN0cmVhbUxvY2F0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzdHJlYW1Mb2NhdGlvbik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdHJlYW1Mb2MgPSBTdG9yZS5jcmVhdGVTdHJlYW1Mb2NhdGlvbih0b2MuSUQsIHN0cmVhbUxvY2F0aW9uLmZtdCwgc3RyZWFtTG9jYXRpb24udXJsKTtcclxuICAgICAgICAgICAgICAgIGlmICghc3RyZWFtTG9jYXRpb25JZHMuaW5jbHVkZXMoc3RyZWFtTG9jLklEKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0cmVhbUxvY2F0aW9uSWRzLnB1c2goc3RyZWFtTG9jLklEKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGRiLnVwZGF0ZSgndG9jJywgeyBzbHVnIH0sIChyb3cpID0+IHtcclxuICAgICAgICAgICAgICAgIHJvdy5zdHJlYW1Mb2NhdGlvbklkcyA9IHN0cmVhbUxvY2F0aW9uSWRzO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvdztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGRiLmNvbW1pdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0YXRpYyBjcmVhdGVFeGVyY2lzZUZpbGUoY291cnNlSWQsIG5hbWUsIHVybCwgc2l6ZSkge1xyXG4gICAgICAgIGNvbnN0IGRiID0gU3RvcmUuZGIoKTtcclxuICAgICAgICBjb25zdCBleGVyY2lzZUZpbGVzID0gU3RvcmUuZ2V0RXhlcmNpc2VGaWxlKGNvdXJzZUlkKTtcclxuICAgICAgICBsZXQgZXhlcmNpc2VGaWxlID0gbnVsbDtcclxuICAgICAgICBpZiAoZXhlcmNpc2VGaWxlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgY29uc3QgSUQgPSAwO1xyXG4gICAgICAgICAgICBleGVyY2lzZUZpbGUgPSB7IElELCBjb3Vyc2VJZCwgbmFtZSwgdXJsLCBzaXplIH07XHJcbiAgICAgICAgICAgIGV4ZXJjaXNlRmlsZS5JRCA9IGRiLmluc2VydCgnZXhlcmNpc2VGaWxlJywgZXhlcmNpc2VGaWxlKTtcclxuICAgICAgICAgICAgZGIuY29tbWl0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBleGVyY2lzZUZpbGUgPSBleGVyY2lzZUZpbGVzWzBdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZXhlcmNpc2VGaWxlO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGNyZWF0ZVNlY3Rpb24oY291cnNlSWQsIHRpdGxlKSB7XHJcbiAgICAgICAgY29uc3QgZGIgPSBTdG9yZS5kYigpO1xyXG4gICAgICAgIGNvbnN0IHNsdWcgPSBtYWtlU2x1Zyh0aXRsZSk7XHJcbiAgICAgICAgY29uc3Qgc2VjdGlvbnMgPSBTdG9yZS5nZXRTZWN0aW9uKHNsdWcpO1xyXG4gICAgICAgIGxldCBzZWN0aW9uID0gbnVsbDtcclxuICAgICAgICBpZiAoc2VjdGlvbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IElEID0gMDtcclxuICAgICAgICAgICAgc2VjdGlvbiA9IHsgSUQsIGNvdXJzZUlkLCB0aXRsZSwgc2x1ZyB9O1xyXG4gICAgICAgICAgICBzZWN0aW9uLklEID0gZGIuaW5zZXJ0KCdzZWN0aW9uJywgc2VjdGlvbik7XHJcbiAgICAgICAgICAgIGRiLmNvbW1pdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc2VjdGlvbiA9IHNlY3Rpb25zWzBdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2VjdGlvbjtcclxuICAgIH1cclxuICAgIHN0YXRpYyBjcmVhdGVUb2Moc2VjdGlvbklkLCB0aXRsZSwgc2x1ZywgdXJsLCBkdXJhdGlvbiwgY2FwdGlvblVybCwgY2FwdGlvbkZtdCkge1xyXG4gICAgICAgIGNvbnN0IGRiID0gU3RvcmUuZGIoKTtcclxuICAgICAgICBjb25zdCB0b2NzID0gU3RvcmUuZ2V0VG9jKHNsdWcpO1xyXG4gICAgICAgIGxldCB0b2MgPSBudWxsO1xyXG4gICAgICAgIGlmICh0b2NzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBJRCA9IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0cmVhbUxvY2F0aW9uSWRzID0gW107XHJcbiAgICAgICAgICAgIHRvYyA9IHsgSUQsIHNlY3Rpb25JZCwgdGl0bGUsIHNsdWcsIHVybCwgZHVyYXRpb24sIGNhcHRpb25VcmwsIGNhcHRpb25GbXQsIHN0cmVhbUxvY2F0aW9uSWRzIH07XHJcbiAgICAgICAgICAgIHRvYy5JRCA9IGRiLmluc2VydCgndG9jJywgdG9jKTtcclxuICAgICAgICAgICAgZGIuY29tbWl0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0b2MgPSB0b2NzWzBdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdG9jO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGNyZWF0ZUNvdXJzZSh0aXRsZSwgc2x1ZywgZHVyYXRpb24sIHNvdXJjZUNvZGVSZXBvc2l0b3J5LCBkZXNjcmlwdGlvbikge1xyXG4gICAgICAgIGNvbnN0IGRiID0gU3RvcmUuZGIoKTtcclxuICAgICAgICBjb25zdCBjb3Vyc2VzID0gU3RvcmUuZ2V0Q291cnNlKHNsdWcpO1xyXG4gICAgICAgIGxldCBjb3Vyc2UgPSBudWxsO1xyXG4gICAgICAgIGlmIChjb3Vyc2VzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBJRCA9IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IGF1dGhvcklkcyA9IFtdO1xyXG4gICAgICAgICAgICBjb3Vyc2UgPSB7IElELCB0aXRsZSwgc2x1ZywgZHVyYXRpb24sIHNvdXJjZUNvZGVSZXBvc2l0b3J5LCBkZXNjcmlwdGlvbiwgYXV0aG9ySWRzIH07XHJcbiAgICAgICAgICAgIGNvdXJzZS5JRCA9IGRiLmluc2VydCgnY291cnNlJywgY291cnNlKTtcclxuICAgICAgICAgICAgZGIuY29tbWl0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb3Vyc2UgPSBjb3Vyc2VzWzBdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY291cnNlO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGdldENvdXJzZUpzb24oY2FsbGJhY2spIHtcclxuICAgICAgICBQcm94eS5nZXQoJy9kYXRhL2NvdXJzZS5qc29uJywgKHIpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocik7XHJcbiAgICAgICAgICAgIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0RGF0YUNvZGVzTFMoY2FsbGJhY2spIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoWydkYXRhQ29kZXMnXSwgKHIpID0+IHsgY2FsbGJhY2soSlNPTi5wYXJzZShyLmRhdGFDb2RlcykpOyB9KTtcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBzYXZlRGF0YUNvZGVzKGRhdGFDb2Rlcykge1xyXG4gICAgICAgIGNvbnN0IGNvdXJzZVRtcCA9IGRhdGFDb2Rlcy5jb3Vyc2U7XHJcbiAgICAgICAgY29uc3QgYXV0aG9ycyA9IGNvdXJzZVRtcC5hdXRob3JzO1xyXG4gICAgICAgIGNvbnN0IGNvdXJzZSA9IFN0b3JlLmNyZWF0ZUNvdXJzZShjb3Vyc2VUbXAudGl0bGUsIGNvdXJzZVRtcC5zbHVnLCBjb3Vyc2VUbXAuZHVyYXRpb24sIGNvdXJzZVRtcC5zb3VyY2VDb2RlUmVwb3NpdG9yeSwgY291cnNlVG1wLmRlc2NyaXB0aW9uKTtcclxuICAgICAgICBjb25zdCBzZWN0aW9ucyA9IGRhdGFDb2Rlcy5zZWN0aW9ucztcclxuICAgICAgICBzZWN0aW9ucy5tYXAoKHNlY3Rpb25UbXApID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc2VjdGlvbiA9IFN0b3JlLmNyZWF0ZVNlY3Rpb24oY291cnNlLklELCBzZWN0aW9uVG1wLnRpdGxlKTtcclxuICAgICAgICAgICAgc2VjdGlvblRtcC5pdGVtcy5tYXAoKHRvY1RtcCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdG9jVG1wLnVybCA9IGBodHRwczovL3d3dy5saW5rZWRpbi5jb20vbGVhcm5pbmcvJHtjb3Vyc2Uuc2x1Z30vJHt0b2NUbXAuc2x1Z31gO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdG9jID0gU3RvcmUuY3JlYXRlVG9jKHNlY3Rpb24uSUQsIHRvY1RtcC50aXRsZSwgdG9jVG1wLnNsdWcsIHRvY1RtcC51cmwsIHRvY1RtcC5kdXJhdGlvbik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFN0b3JlLmNyZWF0ZUF1dGhvckxpc3QoY291cnNlLnNsdWcsIGF1dGhvcnMpO1xyXG4gICAgICAgIFN0b3JlLnNldEFwcFN0YXRlKDEsIGNvdXJzZS5zbHVnKTtcclxuICAgICAgICByZXR1cm4gY291cnNlO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHByZXBhcmVBcHBTdG9yYWdlKCkge1xyXG4gICAgICAgIFN0b3JlLmluaXQoKTtcclxuICAgICAgICBTdG9yZS5pbml0QXBwKCcnKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBpbml0QXBwKGNvdXJzZVNsdWcpIHtcclxuICAgICAgICBjb25zdCBkYiA9IFN0b3JlLmRiKCk7XHJcbiAgICAgICAgY29uc3QgdmVyc2lvbiA9ICcxLjAnO1xyXG4gICAgICAgIGNvbnN0IGFwcHMgPSBkYi5xdWVyeUFsbCgnYXBwJywgeyB2ZXJzaW9uIH0pO1xyXG4gICAgICAgIGxldCBhcHAgPSBudWxsO1xyXG4gICAgICAgIGlmIChhcHBzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IElEID0gMDtcclxuICAgICAgICAgICAgY29uc3QgbGFzdENvdXJzZVNsdWcgPSBjb3Vyc2VTbHVnO1xyXG4gICAgICAgICAgICBhcHAgPSB7IElELCBzdGF0ZSwgdmVyc2lvbiwgbGFzdENvdXJzZVNsdWcgfTtcclxuICAgICAgICAgICAgYXBwLklEID0gZGIuaW5zZXJ0KCdhcHAnLCBhcHApO1xyXG4gICAgICAgICAgICBkYi5jb21taXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGFwcCA9IGFwcHNbMF07XHJcbiAgICAgICAgICAgIGlmIChhcHAubGFzdENvdXJzZVNsdWcgIT09IGNvdXJzZVNsdWcgJiYgY291cnNlU2x1ZyAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgIGFwcC5sYXN0Q291cnNlU2x1ZyA9IGNvdXJzZVNsdWc7XHJcbiAgICAgICAgICAgICAgICBkYi51cGRhdGUoJ2FwcCcsIHsgdmVyc2lvbiB9LCAocm93KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm93Lmxhc3RDb3Vyc2VTbHVnID0gY291cnNlU2x1ZztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm93O1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBkYi5jb21taXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXBwO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGdldEFwcFN0YXRlKCkge1xyXG4gICAgICAgIGNvbnN0IGRiID0gU3RvcmUuZGIoKTtcclxuICAgICAgICAvL2xldCBhcHBTdGF0ZSA9IDA7XHJcbiAgICAgICAgY29uc3QgdmVyc2lvbiA9ICcxLjAnO1xyXG4gICAgICAgIGNvbnN0IGFwcHMgPSBkYi5xdWVyeUFsbCgnYXBwJywgeyB2ZXJzaW9uIH0pO1xyXG4gICAgICAgIGxldCBhcHAgPSBudWxsO1xyXG4gICAgICAgIGlmIChhcHBzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgYXBwID0gYXBwc1swXTtcclxuICAgICAgICAgICAgLy9hcHBTdGF0ZSA9IGFwcC5zdGF0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFwcDtcclxuICAgIH1cclxuICAgIHN0YXRpYyBzZXRBcHBTdGF0ZShzdGF0ZSwgY291cnNlU2x1Zykge1xyXG4gICAgICAgIGNvbnN0IGRiID0gU3RvcmUuZGIoKTtcclxuICAgICAgICBjb25zdCB2ZXJzaW9uID0gJzEuMCc7XHJcbiAgICAgICAgY29uc3QgYXBwcyA9IGRiLnF1ZXJ5QWxsKCdhcHAnLCB7IHZlcnNpb24gfSk7XHJcbiAgICAgICAgaWYgKGFwcHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBkYi51cGRhdGUoJ2FwcCcsIHsgdmVyc2lvbiB9LCAocm93KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByb3cuc3RhdGUgPSBzdGF0ZTtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY291cnNlU2x1ZyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICByb3cubGFzdENvdXJzZVNsdWcgPSBjb3Vyc2VTbHVnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvdztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGRiLmNvbW1pdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0YXRpYyBnZXRBcHBJbmZvKCkge1xyXG4gICAgICAgIGNvbnN0IGRiID0gU3RvcmUuZGIoKTtcclxuICAgICAgICBjb25zdCB2ZXJzaW9uID0gJzEuMCc7XHJcbiAgICAgICAgY29uc3QgYXBwcyA9IGRiLnF1ZXJ5QWxsKCdhcHAnLCB7IHZlcnNpb24gfSk7XHJcbiAgICAgICAgaWYgKGFwcHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXBwc1swXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuU3RvcmUuaW5pdCgpO1xyXG5leHBvcnQgZGVmYXVsdCBTdG9yZTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlQXBwIH0gZnJvbSAndnVlJztcclxuaW1wb3J0IFBvcHVwIGZyb20gJy4vUG9wdXAudnVlJztcclxuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2pzL2Jvb3RzdHJhcCc7XHJcbmltcG9ydCAnZm9udGF3ZXNvbWUtNC43L2Nzcy9mb250LWF3ZXNvbWUubWluLmNzcyc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL3BvcHVwLmNzcyc7XHJcbmltcG9ydCAnaGlnaGxpZ2h0LmpzL3N0eWxlcy9kZWZhdWx0LmNzcyc7XHJcbmltcG9ydCAnaGlnaGxpZ2h0LmpzL3N0eWxlcy9hbmRyb2lkc3R1ZGlvLmNzcyc7XHJcbmltcG9ydCBobGpzIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvY29yZSc7XHJcbmltcG9ydCBqYXZhc2NyaXB0IGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2phdmFzY3JpcHQnO1xyXG5pbXBvcnQgaGxqc1Z1ZVBsdWdpbiBmcm9tIFwiQGhpZ2hsaWdodGpzL3Z1ZS1wbHVnaW5cIjtcclxuaGxqcy5yZWdpc3Rlckxhbmd1YWdlKCdqYXZhc2NyaXB0JywgamF2YXNjcmlwdCk7XHJcbmNvbnN0IGFwcCA9IGNyZWF0ZUFwcChQb3B1cCk7XHJcbmFwcC51c2UoaGxqc1Z1ZVBsdWdpbik7XHJcbmFwcC5tb3VudCgnI3BvcHVwJyk7XHJcbiIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL1BvcHVwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ZjRiYmNjMCZzY29wZWQ9dHJ1ZSZ0cz10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUG9wdXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCJcbmV4cG9ydCAqIGZyb20gXCIuL1BvcHVwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiXG5cbmltcG9ydCBcIi4vUG9wdXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWY0YmJjYzAmc2NvcGVkPXRydWUmbGFuZz1jc3NcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxSYXR1XFxcXERlc2t0b3BcXFxcTExGZXRjaGVyXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGRpc3RcXFxcZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fc2NvcGVJZCcsXCJkYXRhLXYtNWY0YmJjYzBcIl0sWydfX2ZpbGUnLFwic3JjL3BvcHVwL1BvcHVwLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCI1ZjRiYmNjMFwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzVmNGJiY2MwJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnNWY0YmJjYzAnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1BvcHVwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ZjRiYmNjMCZzY29wZWQ9dHJ1ZSZ0cz10cnVlXCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzVmNGJiY2MwJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9Db3Vyc2VEYXRhLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zYmIyNjE5YyZzY29wZWQ9dHJ1ZSZ0cz10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQ291cnNlRGF0YS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIlxuZXhwb3J0ICogZnJvbSBcIi4vQ291cnNlRGF0YS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIlxuXG5pbXBvcnQgXCIuL0NvdXJzZURhdGEudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2JiMjYxOWMmc2NvcGVkPXRydWUmbGFuZz1jc3NcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxSYXR1XFxcXERlc2t0b3BcXFxcTExGZXRjaGVyXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGRpc3RcXFxcZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fc2NvcGVJZCcsXCJkYXRhLXYtM2JiMjYxOWNcIl0sWydfX2ZpbGUnLFwic3JjL3BvcHVwL2NvbXBvbmVudHMvQ291cnNlRGF0YS52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiM2JiMjYxOWNcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCczYmIyNjE5YycsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJzNiYjI2MTljJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Db3Vyc2VEYXRhLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zYmIyNjE5YyZzY29wZWQ9dHJ1ZSZ0cz10cnVlXCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzNiYjI2MTljJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9GZXRjaEJ1dHRvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YmMyYjlkZTImdHM9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0ZldGNoQnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiXG5leHBvcnQgKiBmcm9tIFwiLi9GZXRjaEJ1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxSYXR1XFxcXERlc2t0b3BcXFxcTExGZXRjaGVyXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGRpc3RcXFxcZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJzcmMvcG9wdXAvY29tcG9uZW50cy9GZXRjaEJ1dHRvbi52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiYmMyYjlkZTJcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCdiYzJiOWRlMicsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJ2JjMmI5ZGUyJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9GZXRjaEJ1dHRvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YmMyYjlkZTImdHM9dHJ1ZVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCdiYzJiOWRlMicsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vRmV0Y2hRdWV1ZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MThhOGZlNDQmc2NvcGVkPXRydWUmdHM9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0ZldGNoUXVldWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0ZldGNoUXVldWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCJcblxuaW1wb3J0IFwiLi9GZXRjaFF1ZXVlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTE4YThmZTQ0JnNjb3BlZD10cnVlJmxhbmc9Y3NzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcUmF0dVxcXFxEZXNrdG9wXFxcXExMRmV0Y2hlclxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxkaXN0XFxcXGV4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX3Njb3BlSWQnLFwiZGF0YS12LTE4YThmZTQ0XCJdLFsnX19maWxlJyxcInNyYy9wb3B1cC9jb21wb25lbnRzL0ZldGNoUXVldWUudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjE4YThmZTQ0XCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnMThhOGZlNDQnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCcxOGE4ZmU0NCcsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRmV0Y2hRdWV1ZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MThhOGZlNDQmc2NvcGVkPXRydWUmdHM9dHJ1ZVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCcxOGE4ZmU0NCcsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vRmV0Y2hRdWV1ZUJhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTA1YWVjNDImc2NvcGVkPXRydWUmdHM9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0ZldGNoUXVldWVCYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0ZldGNoUXVldWVCYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCJcblxuaW1wb3J0IFwiLi9GZXRjaFF1ZXVlQmFyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTkwNWFlYzQyJnNjb3BlZD10cnVlJmxhbmc9Y3NzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcUmF0dVxcXFxEZXNrdG9wXFxcXExMRmV0Y2hlclxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxkaXN0XFxcXGV4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX3Njb3BlSWQnLFwiZGF0YS12LTkwNWFlYzQyXCJdLFsnX19maWxlJyxcInNyYy9wb3B1cC9jb21wb25lbnRzL0ZldGNoUXVldWVCYXIudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjkwNWFlYzQyXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnOTA1YWVjNDInLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCc5MDVhZWM0MicsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRmV0Y2hRdWV1ZUJhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTA1YWVjNDImc2NvcGVkPXRydWUmdHM9dHJ1ZVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCc5MDVhZWM0MicsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vRmV0Y2hTZWN0aW9uUXVldWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZhZmRhNjQ5JnNjb3BlZD10cnVlJnRzPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9GZXRjaFNlY3Rpb25RdWV1ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIlxuZXhwb3J0ICogZnJvbSBcIi4vRmV0Y2hTZWN0aW9uUXVldWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCJcblxuaW1wb3J0IFwiLi9GZXRjaFNlY3Rpb25RdWV1ZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02YWZkYTY0OSZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXFJhdHVcXFxcRGVza3RvcFxcXFxMTEZldGNoZXJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcZGlzdFxcXFxleHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19zY29wZUlkJyxcImRhdGEtdi02YWZkYTY0OVwiXSxbJ19fZmlsZScsXCJzcmMvcG9wdXAvY29tcG9uZW50cy9GZXRjaFNlY3Rpb25RdWV1ZS52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiNmFmZGE2NDlcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCc2YWZkYTY0OScsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJzZhZmRhNjQ5JywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9GZXRjaFNlY3Rpb25RdWV1ZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmFmZGE2NDkmc2NvcGVkPXRydWUmdHM9dHJ1ZVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCc2YWZkYTY0OScsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vTG9nQmFyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01YzhhMjg3YyZzY29wZWQ9dHJ1ZSZ0cz10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTG9nQmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiXG5leHBvcnQgKiBmcm9tIFwiLi9Mb2dCYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCJcblxuaW1wb3J0IFwiLi9Mb2dCYXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWM4YTI4N2Mmc2NvcGVkPXRydWUmbGFuZz1jc3NcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxSYXR1XFxcXERlc2t0b3BcXFxcTExGZXRjaGVyXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGRpc3RcXFxcZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fc2NvcGVJZCcsXCJkYXRhLXYtNWM4YTI4N2NcIl0sWydfX2ZpbGUnLFwic3JjL3BvcHVwL2NvbXBvbmVudHMvTG9nQmFyLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCI1YzhhMjg3Y1wiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzVjOGEyODdjJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnNWM4YTI4N2MnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0xvZ0Jhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWM4YTI4N2Mmc2NvcGVkPXRydWUmdHM9dHJ1ZVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCc1YzhhMjg3YycsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vUGFnZU5hdmlnYXRpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWZiYjc1ZDYwJnRzPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9QYWdlTmF2aWdhdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIlxuZXhwb3J0ICogZnJvbSBcIi4vUGFnZU5hdmlnYXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcUmF0dVxcXFxEZXNrdG9wXFxcXExMRmV0Y2hlclxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxkaXN0XFxcXGV4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwic3JjL3BvcHVwL2NvbXBvbmVudHMvUGFnZU5hdmlnYXRpb24udnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcImZiYjc1ZDYwXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnZmJiNzVkNjAnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCdmYmI3NWQ2MCcsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUGFnZU5hdmlnYXRpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWZiYjc1ZDYwJnRzPXRydWVcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignZmJiNzVkNjAnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL1RvY0l0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNjMzU3NGZlJnNjb3BlZD10cnVlJnRzPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Ub2NJdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiXG5leHBvcnQgKiBmcm9tIFwiLi9Ub2NJdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiXG5cbmltcG9ydCBcIi4vVG9jSXRlbS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zYzM1NzRmZSZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXFJhdHVcXFxcRGVza3RvcFxcXFxMTEZldGNoZXJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcZGlzdFxcXFxleHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19zY29wZUlkJyxcImRhdGEtdi0zYzM1NzRmZVwiXSxbJ19fZmlsZScsXCJzcmMvcG9wdXAvY29tcG9uZW50cy9Ub2NJdGVtLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCIzYzM1NzRmZVwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzNjMzU3NGZlJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnM2MzNTc0ZmUnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1RvY0l0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNjMzU3NGZlJnNjb3BlZD10cnVlJnRzPXRydWVcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignM2MzNTc0ZmUnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0Fib3V0UGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDIzMGZmY2YmdHM9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0Fib3V0UGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIlxuZXhwb3J0ICogZnJvbSBcIi4vQWJvdXRQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXFJhdHVcXFxcRGVza3RvcFxcXFxMTEZldGNoZXJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcZGlzdFxcXFxleHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcInNyYy9wb3B1cC92aWV3cy9BYm91dFBhZ2UudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjQyMzBmZmNmXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnNDIzMGZmY2YnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCc0MjMwZmZjZicsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQWJvdXRQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MjMwZmZjZiZ0cz10cnVlXCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzQyMzBmZmNmJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9Db3Vyc2VQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02YzE3ZmVjNyZzY29wZWQ9dHJ1ZSZ0cz10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQ291cnNlUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIlxuZXhwb3J0ICogZnJvbSBcIi4vQ291cnNlUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIlxuXG5pbXBvcnQgXCIuL0NvdXJzZVBhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmMxN2ZlYzcmc2NvcGVkPXRydWUmbGFuZz1jc3NcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxSYXR1XFxcXERlc2t0b3BcXFxcTExGZXRjaGVyXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGRpc3RcXFxcZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fc2NvcGVJZCcsXCJkYXRhLXYtNmMxN2ZlYzdcIl0sWydfX2ZpbGUnLFwic3JjL3BvcHVwL3ZpZXdzL0NvdXJzZVBhZ2UudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjZjMTdmZWM3XCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnNmMxN2ZlYzcnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCc2YzE3ZmVjNycsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQ291cnNlUGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmMxN2ZlYzcmc2NvcGVkPXRydWUmdHM9dHJ1ZVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCc2YzE3ZmVjNycsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vRG93bmxvYWRQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03OTc2YzRmNCZ0cz10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRG93bmxvYWRQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiXG5leHBvcnQgKiBmcm9tIFwiLi9Eb3dubG9hZFBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcUmF0dVxcXFxEZXNrdG9wXFxcXExMRmV0Y2hlclxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxkaXN0XFxcXGV4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwic3JjL3BvcHVwL3ZpZXdzL0Rvd25sb2FkUGFnZS52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiNzk3NmM0ZjRcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCc3OTc2YzRmNCcsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJzc5NzZjNGY0JywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Eb3dubG9hZFBhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc5NzZjNGY0JnRzPXRydWVcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignNzk3NmM0ZjQnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0hlbHBQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZDVjMWQyZCZ0cz10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSGVscFBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0hlbHBQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXFJhdHVcXFxcRGVza3RvcFxcXFxMTEZldGNoZXJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcZGlzdFxcXFxleHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcInNyYy9wb3B1cC92aWV3cy9IZWxwUGFnZS52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiMGQ1YzFkMmRcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCcwZDVjMWQyZCcsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJzBkNWMxZDJkJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9IZWxwUGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGQ1YzFkMmQmdHM9dHJ1ZVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCcwZDVjMWQyZCcsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vSG9tZVBhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTczYTNjNGNiJnRzPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Ib21lUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIlxuZXhwb3J0ICogZnJvbSBcIi4vSG9tZVBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcUmF0dVxcXFxEZXNrdG9wXFxcXExMRmV0Y2hlclxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxkaXN0XFxcXGV4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwic3JjL3BvcHVwL3ZpZXdzL0hvbWVQYWdlLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCI3M2EzYzRjYlwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzczYTNjNGNiJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnNzNhM2M0Y2InLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0hvbWVQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03M2EzYzRjYiZ0cz10cnVlXCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzczYTNjNGNiJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9Mb2FkaW5nUGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmM2ZGFiYmUmdHM9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0xvYWRpbmdQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiXG5leHBvcnQgKiBmcm9tIFwiLi9Mb2FkaW5nUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxSYXR1XFxcXERlc2t0b3BcXFxcTExGZXRjaGVyXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGRpc3RcXFxcZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJzcmMvcG9wdXAvdmlld3MvTG9hZGluZ1BhZ2UudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjJjNmRhYmJlXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnMmM2ZGFiYmUnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCcyYzZkYWJiZScsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTG9hZGluZ1BhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJjNmRhYmJlJnRzPXRydWVcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignMmM2ZGFiYmUnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL1dlbGNvbWVQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MmFhNDAzOCZzY29wZWQ9dHJ1ZSZ0cz10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vV2VsY29tZVBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCJcbmV4cG9ydCAqIGZyb20gXCIuL1dlbGNvbWVQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiXG5cbmltcG9ydCBcIi4vV2VsY29tZVBhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjJhYTQwMzgmc2NvcGVkPXRydWUmbGFuZz1jc3NcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxSYXR1XFxcXERlc2t0b3BcXFxcTExGZXRjaGVyXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGRpc3RcXFxcZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fc2NvcGVJZCcsXCJkYXRhLXYtNjJhYTQwMzhcIl0sWydfX2ZpbGUnLFwic3JjL3BvcHVwL3ZpZXdzL1dlbGNvbWVQYWdlLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCI2MmFhNDAzOFwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzYyYWE0MDM4JywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnNjJhYTQwMzgnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1dlbGNvbWVQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MmFhNDAzOCZzY29wZWQ9dHJ1ZSZ0cz10cnVlXCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzYyYWE0MDM4JywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0udXNlWzBdIS4vUG9wdXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWY0YmJjYzAmc2NvcGVkPXRydWUmbGFuZz1jc3NcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s4XS51c2VbMF0hLi9Db3Vyc2VEYXRhLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNiYjI2MTljJnNjb3BlZD10cnVlJmxhbmc9Y3NzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0udXNlWzBdIS4vRmV0Y2hRdWV1ZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xOGE4ZmU0NCZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzhdLnVzZVswXSEuL0ZldGNoUXVldWVCYXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OTA1YWVjNDImc2NvcGVkPXRydWUmbGFuZz1jc3NcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s4XS51c2VbMF0hLi9GZXRjaFNlY3Rpb25RdWV1ZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02YWZkYTY0OSZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzhdLnVzZVswXSEuL0xvZ0Jhci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01YzhhMjg3YyZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzhdLnVzZVswXSEuL1RvY0l0ZW0udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2MzNTc0ZmUmc2NvcGVkPXRydWUmbGFuZz1jc3NcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s4XS51c2VbMF0hLi9Db3Vyc2VQYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTZjMTdmZWM3JnNjb3BlZD10cnVlJmxhbmc9Y3NzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0udXNlWzBdIS4vV2VsY29tZVBhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjJhYTQwMzgmc2NvcGVkPXRydWUmbGFuZz1jc3NcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s4XS51c2VbMF0hLi9Qb3B1cC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0udXNlWzBdIS4vUG9wdXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0udXNlWzBdIS4vQ291cnNlRGF0YS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0udXNlWzBdIS4vQ291cnNlRGF0YS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s4XS51c2VbMF0hLi9GZXRjaEJ1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0udXNlWzBdIS4vRmV0Y2hCdXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0udXNlWzBdIS4vRmV0Y2hRdWV1ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0udXNlWzBdIS4vRmV0Y2hRdWV1ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s4XS51c2VbMF0hLi9GZXRjaFF1ZXVlQmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s4XS51c2VbMF0hLi9GZXRjaFF1ZXVlQmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzhdLnVzZVswXSEuL0ZldGNoU2VjdGlvblF1ZXVlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s4XS51c2VbMF0hLi9GZXRjaFNlY3Rpb25RdWV1ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s4XS51c2VbMF0hLi9Mb2dCYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzhdLnVzZVswXSEuL0xvZ0Jhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s4XS51c2VbMF0hLi9QYWdlTmF2aWdhdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0udXNlWzBdIS4vUGFnZU5hdmlnYXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0udXNlWzBdIS4vVG9jSXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0udXNlWzBdIS4vVG9jSXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s4XS51c2VbMF0hLi9BYm91dFBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzhdLnVzZVswXSEuL0Fib3V0UGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s4XS51c2VbMF0hLi9Db3Vyc2VQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s4XS51c2VbMF0hLi9Db3Vyc2VQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzhdLnVzZVswXSEuL0Rvd25sb2FkUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0udXNlWzBdIS4vRG93bmxvYWRQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzhdLnVzZVswXSEuL0hlbHBQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s4XS51c2VbMF0hLi9IZWxwUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s4XS51c2VbMF0hLi9Ib21lUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0udXNlWzBdIS4vSG9tZVBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0udXNlWzBdIS4vTG9hZGluZ1BhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzhdLnVzZVswXSEuL0xvYWRpbmdQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzhdLnVzZVswXSEuL1dlbGNvbWVQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s4XS51c2VbMF0hLi9XZWxjb21lUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0udXNlWzBdIS4vUG9wdXAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVmNGJiY2MwJnNjb3BlZD10cnVlJnRzPXRydWVcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0udXNlWzBdIS4vQ291cnNlRGF0YS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2JiMjYxOWMmc2NvcGVkPXRydWUmdHM9dHJ1ZVwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s4XS51c2VbMF0hLi9GZXRjaEJ1dHRvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YmMyYjlkZTImdHM9dHJ1ZVwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s4XS51c2VbMF0hLi9GZXRjaFF1ZXVlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xOGE4ZmU0NCZzY29wZWQ9dHJ1ZSZ0cz10cnVlXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1szXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzhdLnVzZVswXSEuL0ZldGNoUXVldWVCYXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTkwNWFlYzQyJnNjb3BlZD10cnVlJnRzPXRydWVcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0udXNlWzBdIS4vRmV0Y2hTZWN0aW9uUXVldWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZhZmRhNjQ5JnNjb3BlZD10cnVlJnRzPXRydWVcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0udXNlWzBdIS4vTG9nQmFyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01YzhhMjg3YyZzY29wZWQ9dHJ1ZSZ0cz10cnVlXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1szXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzhdLnVzZVswXSEuL1BhZ2VOYXZpZ2F0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mYmI3NWQ2MCZ0cz10cnVlXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1szXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzhdLnVzZVswXSEuL1RvY0l0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNjMzU3NGZlJnNjb3BlZD10cnVlJnRzPXRydWVcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0udXNlWzBdIS4vQWJvdXRQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MjMwZmZjZiZ0cz10cnVlXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1szXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzhdLnVzZVswXSEuL0NvdXJzZVBhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZjMTdmZWM3JnNjb3BlZD10cnVlJnRzPXRydWVcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0udXNlWzBdIS4vRG93bmxvYWRQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03OTc2YzRmNCZ0cz10cnVlXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1szXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzhdLnVzZVswXSEuL0hlbHBQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZDVjMWQyZCZ0cz10cnVlXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1szXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzhdLnVzZVswXSEuL0hvbWVQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03M2EzYzRjYiZ0cz10cnVlXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1szXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzhdLnVzZVswXSEuL0xvYWRpbmdQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yYzZkYWJiZSZ0cz10cnVlXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1szXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzhdLnVzZVswXSEuL1dlbGNvbWVQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MmFhNDAzOCZzY29wZWQ9dHJ1ZSZ0cz10cnVlXCIiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0aWYgKGNhY2hlZE1vZHVsZS5lcnJvciAhPT0gdW5kZWZpbmVkKSB0aHJvdyBjYWNoZWRNb2R1bGUuZXJyb3I7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdHRyeSB7XG5cdFx0dmFyIGV4ZWNPcHRpb25zID0geyBpZDogbW9kdWxlSWQsIG1vZHVsZTogbW9kdWxlLCBmYWN0b3J5OiBfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXSwgcmVxdWlyZTogX193ZWJwYWNrX3JlcXVpcmVfXyB9O1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uaS5mb3JFYWNoKGZ1bmN0aW9uKGhhbmRsZXIpIHsgaGFuZGxlcihleGVjT3B0aW9ucyk7IH0pO1xuXHRcdG1vZHVsZSA9IGV4ZWNPcHRpb25zLm1vZHVsZTtcblx0XHRleGVjT3B0aW9ucy5mYWN0b3J5LmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIGV4ZWNPcHRpb25zLnJlcXVpcmUpO1xuXHR9IGNhdGNoKGUpIHtcblx0XHRtb2R1bGUuZXJyb3IgPSBlO1xuXHRcdHRocm93IGU7XG5cdH1cblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4vLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuX193ZWJwYWNrX3JlcXVpcmVfXy5jID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fO1xuXG4vLyBleHBvc2UgdGhlIG1vZHVsZSBleGVjdXRpb24gaW50ZXJjZXB0b3Jcbl9fd2VicGFja19yZXF1aXJlX18uaSA9IFtdO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFsbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18uaHUgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmgoKSArIFwiLmhvdC11cGRhdGUuanNcIjtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5obXJGID0gKCkgPT4gKFwicG9wdXAuXCIgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmgoKSArIFwiLmhvdC11cGRhdGUuanNvblwiKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxZGQyZDc0MTE1ZGJjNmJhYTIxZlwiKSIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsInZhciBpblByb2dyZXNzID0ge307XG52YXIgZGF0YVdlYnBhY2tQcmVmaXggPSBcImxsZmV0Y2hlci10czpcIjtcbi8vIGxvYWRTY3JpcHQgZnVuY3Rpb24gdG8gbG9hZCBhIHNjcmlwdCB2aWEgc2NyaXB0IHRhZ1xuX193ZWJwYWNrX3JlcXVpcmVfXy5sID0gKHVybCwgZG9uZSwga2V5LCBjaHVua0lkKSA9PiB7XG5cdGlmKGluUHJvZ3Jlc3NbdXJsXSkgeyBpblByb2dyZXNzW3VybF0ucHVzaChkb25lKTsgcmV0dXJuOyB9XG5cdHZhciBzY3JpcHQsIG5lZWRBdHRhY2g7XG5cdGlmKGtleSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc2NyaXB0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHMgPSBzY3JpcHRzW2ldO1xuXHRcdFx0aWYocy5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgPT0gdXJsIHx8IHMuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIpID09IGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KSB7IHNjcmlwdCA9IHM7IGJyZWFrOyB9XG5cdFx0fVxuXHR9XG5cdGlmKCFzY3JpcHQpIHtcblx0XHRuZWVkQXR0YWNoID0gdHJ1ZTtcblx0XHRzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuXHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04Jztcblx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcblx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuXHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuXHRcdH1cblx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIsIGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KTtcblx0XHRzY3JpcHQuc3JjID0gdXJsO1xuXHR9XG5cdGluUHJvZ3Jlc3NbdXJsXSA9IFtkb25lXTtcblx0dmFyIG9uU2NyaXB0Q29tcGxldGUgPSAocHJldiwgZXZlbnQpID0+IHtcblx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG5cdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0dmFyIGRvbmVGbnMgPSBpblByb2dyZXNzW3VybF07XG5cdFx0ZGVsZXRlIGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRzY3JpcHQucGFyZW50Tm9kZSAmJiBzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuXHRcdGRvbmVGbnMgJiYgZG9uZUZucy5mb3JFYWNoKChmbikgPT4gKGZuKGV2ZW50KSkpO1xuXHRcdGlmKHByZXYpIHJldHVybiBwcmV2KGV2ZW50KTtcblx0fTtcblx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCB1bmRlZmluZWQsIHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KSwgMTIwMDAwKTtcblx0c2NyaXB0Lm9uZXJyb3IgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9uZXJyb3IpO1xuXHRzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmxvYWQpO1xuXHRuZWVkQXR0YWNoICYmIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn07IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIGN1cnJlbnRNb2R1bGVEYXRhID0ge307XG52YXIgaW5zdGFsbGVkTW9kdWxlcyA9IF9fd2VicGFja19yZXF1aXJlX18uYztcblxuLy8gbW9kdWxlIGFuZCByZXF1aXJlIGNyZWF0aW9uXG52YXIgY3VycmVudENoaWxkTW9kdWxlO1xudmFyIGN1cnJlbnRQYXJlbnRzID0gW107XG5cbi8vIHN0YXR1c1xudmFyIHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycyA9IFtdO1xudmFyIGN1cnJlbnRTdGF0dXMgPSBcImlkbGVcIjtcblxuLy8gd2hpbGUgZG93bmxvYWRpbmdcbnZhciBibG9ja2luZ1Byb21pc2VzID0gMDtcbnZhciBibG9ja2luZ1Byb21pc2VzV2FpdGluZyA9IFtdO1xuXG4vLyBUaGUgdXBkYXRlIGluZm9cbnZhciBjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycztcbnZhciBxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXM7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJEID0gY3VycmVudE1vZHVsZURhdGE7XG5cbl9fd2VicGFja19yZXF1aXJlX18uaS5wdXNoKGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cdHZhciBtb2R1bGUgPSBvcHRpb25zLm1vZHVsZTtcblx0dmFyIHJlcXVpcmUgPSBjcmVhdGVSZXF1aXJlKG9wdGlvbnMucmVxdWlyZSwgb3B0aW9ucy5pZCk7XG5cdG1vZHVsZS5ob3QgPSBjcmVhdGVNb2R1bGVIb3RPYmplY3Qob3B0aW9ucy5pZCwgbW9kdWxlKTtcblx0bW9kdWxlLnBhcmVudHMgPSBjdXJyZW50UGFyZW50cztcblx0bW9kdWxlLmNoaWxkcmVuID0gW107XG5cdGN1cnJlbnRQYXJlbnRzID0gW107XG5cdG9wdGlvbnMucmVxdWlyZSA9IHJlcXVpcmU7XG59KTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJDID0ge307XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkgPSB7fTtcblxuZnVuY3Rpb24gY3JlYXRlUmVxdWlyZShyZXF1aXJlLCBtb2R1bGVJZCkge1xuXHR2YXIgbWUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcblx0aWYgKCFtZSkgcmV0dXJuIHJlcXVpcmU7XG5cdHZhciBmbiA9IGZ1bmN0aW9uIChyZXF1ZXN0KSB7XG5cdFx0aWYgKG1lLmhvdC5hY3RpdmUpIHtcblx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdKSB7XG5cdFx0XHRcdHZhciBwYXJlbnRzID0gaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzO1xuXHRcdFx0XHRpZiAocGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKSA9PT0gLTEpIHtcblx0XHRcdFx0XHRwYXJlbnRzLnB1c2gobW9kdWxlSWQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XG5cdFx0XHRcdGN1cnJlbnRDaGlsZE1vZHVsZSA9IHJlcXVlc3Q7XG5cdFx0XHR9XG5cdFx0XHRpZiAobWUuY2hpbGRyZW4uaW5kZXhPZihyZXF1ZXN0KSA9PT0gLTEpIHtcblx0XHRcdFx0bWUuY2hpbGRyZW4ucHVzaChyZXF1ZXN0KTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS53YXJuKFxuXHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArXG5cdFx0XHRcdFx0cmVxdWVzdCArXG5cdFx0XHRcdFx0XCIpIGZyb20gZGlzcG9zZWQgbW9kdWxlIFwiICtcblx0XHRcdFx0XHRtb2R1bGVJZFxuXHRcdFx0KTtcblx0XHRcdGN1cnJlbnRQYXJlbnRzID0gW107XG5cdFx0fVxuXHRcdHJldHVybiByZXF1aXJlKHJlcXVlc3QpO1xuXHR9O1xuXHR2YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gKG5hbWUpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRyZXR1cm4gcmVxdWlyZVtuYW1lXTtcblx0XHRcdH0sXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdFx0XHRyZXF1aXJlW25hbWVdID0gdmFsdWU7XG5cdFx0XHR9XG5cdFx0fTtcblx0fTtcblx0Zm9yICh2YXIgbmFtZSBpbiByZXF1aXJlKSB7XG5cdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChyZXF1aXJlLCBuYW1lKSAmJiBuYW1lICE9PSBcImVcIikge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBuYW1lLCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IobmFtZSkpO1xuXHRcdH1cblx0fVxuXHRmbi5lID0gZnVuY3Rpb24gKGNodW5rSWQpIHtcblx0XHRyZXR1cm4gdHJhY2tCbG9ja2luZ1Byb21pc2UocmVxdWlyZS5lKGNodW5rSWQpKTtcblx0fTtcblx0cmV0dXJuIGZuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNb2R1bGVIb3RPYmplY3QobW9kdWxlSWQsIG1lKSB7XG5cdHZhciBfbWFpbiA9IGN1cnJlbnRDaGlsZE1vZHVsZSAhPT0gbW9kdWxlSWQ7XG5cdHZhciBob3QgPSB7XG5cdFx0Ly8gcHJpdmF0ZSBzdHVmZlxuXHRcdF9hY2NlcHRlZERlcGVuZGVuY2llczoge30sXG5cdFx0X2FjY2VwdGVkRXJyb3JIYW5kbGVyczoge30sXG5cdFx0X2RlY2xpbmVkRGVwZW5kZW5jaWVzOiB7fSxcblx0XHRfc2VsZkFjY2VwdGVkOiBmYWxzZSxcblx0XHRfc2VsZkRlY2xpbmVkOiBmYWxzZSxcblx0XHRfc2VsZkludmFsaWRhdGVkOiBmYWxzZSxcblx0XHRfZGlzcG9zZUhhbmRsZXJzOiBbXSxcblx0XHRfbWFpbjogX21haW4sXG5cdFx0X3JlcXVpcmVTZWxmOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjdXJyZW50UGFyZW50cyA9IG1lLnBhcmVudHMuc2xpY2UoKTtcblx0XHRcdGN1cnJlbnRDaGlsZE1vZHVsZSA9IF9tYWluID8gdW5kZWZpbmVkIDogbW9kdWxlSWQ7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKTtcblx0XHR9LFxuXG5cdFx0Ly8gTW9kdWxlIEFQSVxuXHRcdGFjdGl2ZTogdHJ1ZSxcblx0XHRhY2NlcHQ6IGZ1bmN0aW9uIChkZXAsIGNhbGxiYWNrLCBlcnJvckhhbmRsZXIpIHtcblx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmQWNjZXB0ZWQgPSB0cnVlO1xuXHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJmdW5jdGlvblwiKSBob3QuX3NlbGZBY2NlcHRlZCA9IGRlcDtcblx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIgJiYgZGVwICE9PSBudWxsKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBbaV1dID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkge307XG5cdFx0XHRcdFx0aG90Ll9hY2NlcHRlZEVycm9ySGFuZGxlcnNbZGVwW2ldXSA9IGVycm9ySGFuZGxlcjtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBdID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkge307XG5cdFx0XHRcdGhvdC5fYWNjZXB0ZWRFcnJvckhhbmRsZXJzW2RlcF0gPSBlcnJvckhhbmRsZXI7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRkZWNsaW5lOiBmdW5jdGlvbiAoZGVwKSB7XG5cdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkRlY2xpbmVkID0gdHJ1ZTtcblx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIgJiYgZGVwICE9PSBudWxsKVxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcblx0XHRcdFx0XHRob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSB0cnVlO1xuXHRcdFx0ZWxzZSBob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcF0gPSB0cnVlO1xuXHRcdH0sXG5cdFx0ZGlzcG9zZTogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcblx0XHR9LFxuXHRcdGFkZERpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuXHRcdH0sXG5cdFx0cmVtb3ZlRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHRcdFx0dmFyIGlkeCA9IGhvdC5fZGlzcG9zZUhhbmRsZXJzLmluZGV4T2YoY2FsbGJhY2spO1xuXHRcdFx0aWYgKGlkeCA+PSAwKSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcblx0XHR9LFxuXHRcdGludmFsaWRhdGU6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHRoaXMuX3NlbGZJbnZhbGlkYXRlZCA9IHRydWU7XG5cdFx0XHRzd2l0Y2ggKGN1cnJlbnRTdGF0dXMpIHtcblx0XHRcdFx0Y2FzZSBcImlkbGVcIjpcblx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyA9IFtdO1xuXHRcdFx0XHRcdE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uaG1ySSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtcklba2V5XShcblx0XHRcdFx0XHRcdFx0bW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHNldFN0YXR1cyhcInJlYWR5XCIpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwicmVhZHlcIjpcblx0XHRcdFx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJJW2tleV0oXG5cdFx0XHRcdFx0XHRcdG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVyc1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcInByZXBhcmVcIjpcblx0XHRcdFx0Y2FzZSBcImNoZWNrXCI6XG5cdFx0XHRcdGNhc2UgXCJkaXNwb3NlXCI6XG5cdFx0XHRcdGNhc2UgXCJhcHBseVwiOlxuXHRcdFx0XHRcdChxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgPSBxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgfHwgW10pLnB1c2goXG5cdFx0XHRcdFx0XHRtb2R1bGVJZFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0Ly8gaWdub3JlIHJlcXVlc3RzIGluIGVycm9yIHN0YXRlc1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvLyBNYW5hZ2VtZW50IEFQSVxuXHRcdGNoZWNrOiBob3RDaGVjayxcblx0XHRhcHBseTogaG90QXBwbHksXG5cdFx0c3RhdHVzOiBmdW5jdGlvbiAobCkge1xuXHRcdFx0aWYgKCFsKSByZXR1cm4gY3VycmVudFN0YXR1cztcblx0XHRcdHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuXHRcdH0sXG5cdFx0YWRkU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24gKGwpIHtcblx0XHRcdHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuXHRcdH0sXG5cdFx0cmVtb3ZlU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24gKGwpIHtcblx0XHRcdHZhciBpZHggPSByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMuaW5kZXhPZihsKTtcblx0XHRcdGlmIChpZHggPj0gMCkgcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuXHRcdH0sXG5cblx0XHQvL2luaGVyaXQgZnJvbSBwcmV2aW91cyBkaXNwb3NlIGNhbGxcblx0XHRkYXRhOiBjdXJyZW50TW9kdWxlRGF0YVttb2R1bGVJZF1cblx0fTtcblx0Y3VycmVudENoaWxkTW9kdWxlID0gdW5kZWZpbmVkO1xuXHRyZXR1cm4gaG90O1xufVxuXG5mdW5jdGlvbiBzZXRTdGF0dXMobmV3U3RhdHVzKSB7XG5cdGN1cnJlbnRTdGF0dXMgPSBuZXdTdGF0dXM7XG5cdHZhciByZXN1bHRzID0gW107XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMubGVuZ3RoOyBpKyspXG5cdFx0cmVzdWx0c1tpXSA9IHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVyc1tpXS5jYWxsKG51bGwsIG5ld1N0YXR1cyk7XG5cblx0cmV0dXJuIFByb21pc2UuYWxsKHJlc3VsdHMpO1xufVxuXG5mdW5jdGlvbiB1bmJsb2NrKCkge1xuXHRpZiAoLS1ibG9ja2luZ1Byb21pc2VzID09PSAwKSB7XG5cdFx0c2V0U3RhdHVzKFwicmVhZHlcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAoYmxvY2tpbmdQcm9taXNlcyA9PT0gMCkge1xuXHRcdFx0XHR2YXIgbGlzdCA9IGJsb2NraW5nUHJvbWlzZXNXYWl0aW5nO1xuXHRcdFx0XHRibG9ja2luZ1Byb21pc2VzV2FpdGluZyA9IFtdO1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRsaXN0W2ldKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0fVxufVxuXG5mdW5jdGlvbiB0cmFja0Jsb2NraW5nUHJvbWlzZShwcm9taXNlKSB7XG5cdHN3aXRjaCAoY3VycmVudFN0YXR1cykge1xuXHRcdGNhc2UgXCJyZWFkeVwiOlxuXHRcdFx0c2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcblx0XHQvKiBmYWxsdGhyb3VnaCAqL1xuXHRcdGNhc2UgXCJwcmVwYXJlXCI6XG5cdFx0XHRibG9ja2luZ1Byb21pc2VzKys7XG5cdFx0XHRwcm9taXNlLnRoZW4odW5ibG9jaywgdW5ibG9jayk7XG5cdFx0XHRyZXR1cm4gcHJvbWlzZTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHByb21pc2U7XG5cdH1cbn1cblxuZnVuY3Rpb24gd2FpdEZvckJsb2NraW5nUHJvbWlzZXMoZm4pIHtcblx0aWYgKGJsb2NraW5nUHJvbWlzZXMgPT09IDApIHJldHVybiBmbigpO1xuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcblx0XHRibG9ja2luZ1Byb21pc2VzV2FpdGluZy5wdXNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlc29sdmUoZm4oKSk7XG5cdFx0fSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBob3RDaGVjayhhcHBseU9uVXBkYXRlKSB7XG5cdGlmIChjdXJyZW50U3RhdHVzICE9PSBcImlkbGVcIikge1xuXHRcdHRocm93IG5ldyBFcnJvcihcImNoZWNrKCkgaXMgb25seSBhbGxvd2VkIGluIGlkbGUgc3RhdHVzXCIpO1xuXHR9XG5cdHJldHVybiBzZXRTdGF0dXMoXCJjaGVja1wiKVxuXHRcdC50aGVuKF9fd2VicGFja19yZXF1aXJlX18uaG1yTSlcblx0XHQudGhlbihmdW5jdGlvbiAodXBkYXRlKSB7XG5cdFx0XHRpZiAoIXVwZGF0ZSkge1xuXHRcdFx0XHRyZXR1cm4gc2V0U3RhdHVzKGFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCkgPyBcInJlYWR5XCIgOiBcImlkbGVcIikudGhlbihcblx0XHRcdFx0XHRmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBzZXRTdGF0dXMoXCJwcmVwYXJlXCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR2YXIgdXBkYXRlZE1vZHVsZXMgPSBbXTtcblx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSBbXTtcblxuXHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoXG5cdFx0XHRcdFx0T2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5obXJDKS5yZWR1Y2UoZnVuY3Rpb24gKFxuXHRcdFx0XHRcdFx0cHJvbWlzZXMsXG5cdFx0XHRcdFx0XHRrZXlcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1yQ1trZXldKFxuXHRcdFx0XHRcdFx0XHR1cGRhdGUuYyxcblx0XHRcdFx0XHRcdFx0dXBkYXRlLnIsXG5cdFx0XHRcdFx0XHRcdHVwZGF0ZS5tLFxuXHRcdFx0XHRcdFx0XHRwcm9taXNlcyxcblx0XHRcdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMsXG5cdFx0XHRcdFx0XHRcdHVwZGF0ZWRNb2R1bGVzXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHByb21pc2VzO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0W10pXG5cdFx0XHRcdCkudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHdhaXRGb3JCbG9ja2luZ1Byb21pc2VzKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdGlmIChhcHBseU9uVXBkYXRlKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBpbnRlcm5hbEFwcGx5KGFwcGx5T25VcGRhdGUpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHNldFN0YXR1cyhcInJlYWR5XCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiB1cGRhdGVkTW9kdWxlcztcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG59XG5cbmZ1bmN0aW9uIGhvdEFwcGx5KG9wdGlvbnMpIHtcblx0aWYgKGN1cnJlbnRTdGF0dXMgIT09IFwicmVhZHlcIikge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcblx0XHRcdFx0XCJhcHBseSgpIGlzIG9ubHkgYWxsb3dlZCBpbiByZWFkeSBzdGF0dXMgKHN0YXRlOiBcIiArXG5cdFx0XHRcdFx0Y3VycmVudFN0YXR1cyArXG5cdFx0XHRcdFx0XCIpXCJcblx0XHRcdCk7XG5cdFx0fSk7XG5cdH1cblx0cmV0dXJuIGludGVybmFsQXBwbHkob3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIGludGVybmFsQXBwbHkob3B0aW9ucykge1xuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRhcHBseUludmFsaWRhdGVkTW9kdWxlcygpO1xuXG5cdHZhciByZXN1bHRzID0gY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMubWFwKGZ1bmN0aW9uIChoYW5kbGVyKSB7XG5cdFx0cmV0dXJuIGhhbmRsZXIob3B0aW9ucyk7XG5cdH0pO1xuXHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyA9IHVuZGVmaW5lZDtcblxuXHR2YXIgZXJyb3JzID0gcmVzdWx0c1xuXHRcdC5tYXAoZnVuY3Rpb24gKHIpIHtcblx0XHRcdHJldHVybiByLmVycm9yO1xuXHRcdH0pXG5cdFx0LmZpbHRlcihCb29sZWFuKTtcblxuXHRpZiAoZXJyb3JzLmxlbmd0aCA+IDApIHtcblx0XHRyZXR1cm4gc2V0U3RhdHVzKFwiYWJvcnRcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aHJvdyBlcnJvcnNbMF07XG5cdFx0fSk7XG5cdH1cblxuXHQvLyBOb3cgaW4gXCJkaXNwb3NlXCIgcGhhc2Vcblx0dmFyIGRpc3Bvc2VQcm9taXNlID0gc2V0U3RhdHVzKFwiZGlzcG9zZVwiKTtcblxuXHRyZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCkge1xuXHRcdGlmIChyZXN1bHQuZGlzcG9zZSkgcmVzdWx0LmRpc3Bvc2UoKTtcblx0fSk7XG5cblx0Ly8gTm93IGluIFwiYXBwbHlcIiBwaGFzZVxuXHR2YXIgYXBwbHlQcm9taXNlID0gc2V0U3RhdHVzKFwiYXBwbHlcIik7XG5cblx0dmFyIGVycm9yO1xuXHR2YXIgcmVwb3J0RXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG5cdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG5cdH07XG5cblx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuXHRyZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCkge1xuXHRcdGlmIChyZXN1bHQuYXBwbHkpIHtcblx0XHRcdHZhciBtb2R1bGVzID0gcmVzdWx0LmFwcGx5KHJlcG9ydEVycm9yKTtcblx0XHRcdGlmIChtb2R1bGVzKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKG1vZHVsZXNbaV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4gUHJvbWlzZS5hbGwoW2Rpc3Bvc2VQcm9taXNlLCBhcHBseVByb21pc2VdKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHQvLyBoYW5kbGUgZXJyb3JzIGluIGFjY2VwdCBoYW5kbGVycyBhbmQgc2VsZiBhY2NlcHRlZCBtb2R1bGUgbG9hZFxuXHRcdGlmIChlcnJvcikge1xuXHRcdFx0cmV0dXJuIHNldFN0YXR1cyhcImZhaWxcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHRocm93IGVycm9yO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0aWYgKHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcykge1xuXHRcdFx0cmV0dXJuIGludGVybmFsQXBwbHkob3B0aW9ucykudGhlbihmdW5jdGlvbiAobGlzdCkge1xuXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMuZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlSWQpIHtcblx0XHRcdFx0XHRpZiAobGlzdC5pbmRleE9mKG1vZHVsZUlkKSA8IDApIGxpc3QucHVzaChtb2R1bGVJZCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXR1cm4gbGlzdDtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiBzZXRTdGF0dXMoXCJpZGxlXCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIG91dGRhdGVkTW9kdWxlcztcblx0XHR9KTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCkge1xuXHRpZiAocXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzKSB7XG5cdFx0aWYgKCFjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycykgY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSBbXTtcblx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0cXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZUlkKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1ySVtrZXldKFxuXHRcdFx0XHRcdG1vZHVsZUlkLFxuXHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzXG5cdFx0XHRcdCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgPSB1bmRlZmluZWQ7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn0iLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmhtclNfanNvbnAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmhtclNfanNvbnAgfHwge1xuXHRcInBvcHVwXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG52YXIgY3VycmVudFVwZGF0ZWRNb2R1bGVzTGlzdDtcbnZhciB3YWl0aW5nVXBkYXRlUmVzb2x2ZXMgPSB7fTtcbmZ1bmN0aW9uIGxvYWRVcGRhdGVDaHVuayhjaHVua0lkLCB1cGRhdGVkTW9kdWxlc0xpc3QpIHtcblx0Y3VycmVudFVwZGF0ZWRNb2R1bGVzTGlzdCA9IHVwZGF0ZWRNb2R1bGVzTGlzdDtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0gPSByZXNvbHZlO1xuXHRcdC8vIHN0YXJ0IHVwZGF0ZSBjaHVuayBsb2FkaW5nXG5cdFx0dmFyIHVybCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18uaHUoY2h1bmtJZCk7XG5cdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuXHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuXHRcdHZhciBsb2FkaW5nRW5kZWQgPSAoZXZlbnQpID0+IHtcblx0XHRcdGlmKHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSkge1xuXHRcdFx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0gPSB1bmRlZmluZWRcblx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcblx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcblx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGhvdCB1cGRhdGUgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuXHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcblx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcblx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG5cdFx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmwodXJsLCBsb2FkaW5nRW5kZWQpO1xuXHR9KTtcbn1cblxuc2VsZltcIndlYnBhY2tIb3RVcGRhdGVsbGZldGNoZXJfdHNcIl0gPSAoY2h1bmtJZCwgbW9yZU1vZHVsZXMsIHJ1bnRpbWUpID0+IHtcblx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRjdXJyZW50VXBkYXRlW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdGlmKGN1cnJlbnRVcGRhdGVkTW9kdWxlc0xpc3QpIGN1cnJlbnRVcGRhdGVkTW9kdWxlc0xpc3QucHVzaChtb2R1bGVJZCk7XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIGN1cnJlbnRVcGRhdGVSdW50aW1lLnB1c2gocnVudGltZSk7XG5cdGlmKHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSkge1xuXHRcdHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSgpO1xuXHRcdHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcblx0fVxufTtcblxudmFyIGN1cnJlbnRVcGRhdGVDaHVua3M7XG52YXIgY3VycmVudFVwZGF0ZTtcbnZhciBjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcztcbnZhciBjdXJyZW50VXBkYXRlUnVudGltZTtcbmZ1bmN0aW9uIGFwcGx5SGFuZGxlcihvcHRpb25zKSB7XG5cdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmYpIGRlbGV0ZSBfX3dlYnBhY2tfcmVxdWlyZV9fLmYuanNvbnBIbXI7XG5cdGN1cnJlbnRVcGRhdGVDaHVua3MgPSB1bmRlZmluZWQ7XG5cdGZ1bmN0aW9uIGdldEFmZmVjdGVkTW9kdWxlRWZmZWN0cyh1cGRhdGVNb2R1bGVJZCkge1xuXHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbdXBkYXRlTW9kdWxlSWRdO1xuXHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuXG5cdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLm1hcChmdW5jdGlvbiAoaWQpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGNoYWluOiBbaWRdLFxuXHRcdFx0XHRpZDogaWRcblx0XHRcdH07XG5cdFx0fSk7XG5cdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcblx0XHRcdHZhciBxdWV1ZUl0ZW0gPSBxdWV1ZS5wb3AoKTtcblx0XHRcdHZhciBtb2R1bGVJZCA9IHF1ZXVlSXRlbS5pZDtcblx0XHRcdHZhciBjaGFpbiA9IHF1ZXVlSXRlbS5jaGFpbjtcblx0XHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdO1xuXHRcdFx0aWYgKFxuXHRcdFx0XHQhbW9kdWxlIHx8XG5cdFx0XHRcdChtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQgJiYgIW1vZHVsZS5ob3QuX3NlbGZJbnZhbGlkYXRlZClcblx0XHRcdClcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRpZiAobW9kdWxlLmhvdC5fc2VsZkRlY2xpbmVkKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0dHlwZTogXCJzZWxmLWRlY2xpbmVkXCIsXG5cdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuXHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0aWYgKG1vZHVsZS5ob3QuX21haW4pIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR0eXBlOiBcInVuYWNjZXB0ZWRcIixcblx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG5cdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1vZHVsZS5wYXJlbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBwYXJlbnRJZCA9IG1vZHVsZS5wYXJlbnRzW2ldO1xuXHRcdFx0XHR2YXIgcGFyZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW3BhcmVudElkXTtcblx0XHRcdFx0aWYgKCFwYXJlbnQpIGNvbnRpbnVlO1xuXHRcdFx0XHRpZiAocGFyZW50LmhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdHR5cGU6IFwiZGVjbGluZWRcIixcblx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG5cdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRwYXJlbnRJZDogcGFyZW50SWRcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChvdXRkYXRlZE1vZHVsZXMuaW5kZXhPZihwYXJlbnRJZCkgIT09IC0xKSBjb250aW51ZTtcblx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuXHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdKVxuXHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdID0gW107XG5cdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdLCBbbW9kdWxlSWRdKTtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdO1xuXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaChwYXJlbnRJZCk7XG5cdFx0XHRcdHF1ZXVlLnB1c2goe1xuXHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG5cdFx0XHRcdFx0aWQ6IHBhcmVudElkXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiBcImFjY2VwdGVkXCIsXG5cdFx0XHRtb2R1bGVJZDogdXBkYXRlTW9kdWxlSWQsXG5cdFx0XHRvdXRkYXRlZE1vZHVsZXM6IG91dGRhdGVkTW9kdWxlcyxcblx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzOiBvdXRkYXRlZERlcGVuZGVuY2llc1xuXHRcdH07XG5cdH1cblxuXHRmdW5jdGlvbiBhZGRBbGxUb1NldChhLCBiKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBiLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IGJbaV07XG5cdFx0XHRpZiAoYS5pbmRleE9mKGl0ZW0pID09PSAtMSkgYS5wdXNoKGl0ZW0pO1xuXHRcdH1cblx0fVxuXG5cdC8vIGF0IGJlZ2luIGFsbCB1cGRhdGVzIG1vZHVsZXMgYXJlIG91dGRhdGVkXG5cdC8vIHRoZSBcIm91dGRhdGVkXCIgc3RhdHVzIGNhbiBwcm9wYWdhdGUgdG8gcGFyZW50cyBpZiB0aGV5IGRvbid0IGFjY2VwdCB0aGUgY2hpbGRyZW5cblx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG5cdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcblx0dmFyIGFwcGxpZWRVcGRhdGUgPSB7fTtcblxuXHR2YXIgd2FyblVuZXhwZWN0ZWRSZXF1aXJlID0gZnVuY3Rpb24gd2FyblVuZXhwZWN0ZWRSZXF1aXJlKG1vZHVsZSkge1xuXHRcdGNvbnNvbGUud2Fybihcblx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICsgbW9kdWxlLmlkICsgXCIpIHRvIGRpc3Bvc2VkIG1vZHVsZVwiXG5cdFx0KTtcblx0fTtcblxuXHRmb3IgKHZhciBtb2R1bGVJZCBpbiBjdXJyZW50VXBkYXRlKSB7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhjdXJyZW50VXBkYXRlLCBtb2R1bGVJZCkpIHtcblx0XHRcdHZhciBuZXdNb2R1bGVGYWN0b3J5ID0gY3VycmVudFVwZGF0ZVttb2R1bGVJZF07XG5cdFx0XHQvKiogQHR5cGUge1RPRE99ICovXG5cdFx0XHR2YXIgcmVzdWx0O1xuXHRcdFx0aWYgKG5ld01vZHVsZUZhY3RvcnkpIHtcblx0XHRcdFx0cmVzdWx0ID0gZ2V0QWZmZWN0ZWRNb2R1bGVFZmZlY3RzKG1vZHVsZUlkKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc3VsdCA9IHtcblx0XHRcdFx0XHR0eXBlOiBcImRpc3Bvc2VkXCIsXG5cdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHQvKiogQHR5cGUge0Vycm9yfGZhbHNlfSAqL1xuXHRcdFx0dmFyIGFib3J0RXJyb3IgPSBmYWxzZTtcblx0XHRcdHZhciBkb0FwcGx5ID0gZmFsc2U7XG5cdFx0XHR2YXIgZG9EaXNwb3NlID0gZmFsc2U7XG5cdFx0XHR2YXIgY2hhaW5JbmZvID0gXCJcIjtcblx0XHRcdGlmIChyZXN1bHQuY2hhaW4pIHtcblx0XHRcdFx0Y2hhaW5JbmZvID0gXCJcXG5VcGRhdGUgcHJvcGFnYXRpb246IFwiICsgcmVzdWx0LmNoYWluLmpvaW4oXCIgLT4gXCIpO1xuXHRcdFx0fVxuXHRcdFx0c3dpdGNoIChyZXN1bHQudHlwZSkge1xuXHRcdFx0XHRjYXNlIFwic2VsZi1kZWNsaW5lZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcblx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG5cdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIHNlbGYgZGVjbGluZTogXCIgK1xuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG5cdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiZGVjbGluZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcblx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG5cdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuXHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBkZWNsaW5lZCBkZXBlbmRlbmN5OiBcIiArXG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcblx0XHRcdFx0XHRcdFx0XHRcIiBpbiBcIiArXG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0LnBhcmVudElkICtcblx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJ1bmFjY2VwdGVkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25VbmFjY2VwdGVkKSBvcHRpb25zLm9uVW5hY2NlcHRlZChyZXN1bHQpO1xuXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVVbmFjY2VwdGVkKVxuXHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcblx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2UgXCIgKyBtb2R1bGVJZCArIFwiIGlzIG5vdCBhY2NlcHRlZFwiICsgY2hhaW5JbmZvXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiYWNjZXB0ZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkFjY2VwdGVkKSBvcHRpb25zLm9uQWNjZXB0ZWQocmVzdWx0KTtcblx0XHRcdFx0XHRkb0FwcGx5ID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EaXNwb3NlZCkgb3B0aW9ucy5vbkRpc3Bvc2VkKHJlc3VsdCk7XG5cdFx0XHRcdFx0ZG9EaXNwb3NlID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmV4Y2VwdGlvbiB0eXBlIFwiICsgcmVzdWx0LnR5cGUpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGFib3J0RXJyb3IpIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRlcnJvcjogYWJvcnRFcnJvclxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRvQXBwbHkpIHtcblx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSBuZXdNb2R1bGVGYWN0b3J5O1xuXHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIHJlc3VsdC5vdXRkYXRlZE1vZHVsZXMpO1xuXHRcdFx0XHRmb3IgKG1vZHVsZUlkIGluIHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcykge1xuXHRcdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8ocmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKVxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0gPSBbXTtcblx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KFxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0sXG5cdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF1cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoZG9EaXNwb3NlKSB7XG5cdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgW3Jlc3VsdC5tb2R1bGVJZF0pO1xuXHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IHdhcm5VbmV4cGVjdGVkUmVxdWlyZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Y3VycmVudFVwZGF0ZSA9IHVuZGVmaW5lZDtcblxuXHQvLyBTdG9yZSBzZWxmIGFjY2VwdGVkIG91dGRhdGVkIG1vZHVsZXMgdG8gcmVxdWlyZSB0aGVtIGxhdGVyIGJ5IHRoZSBtb2R1bGUgc3lzdGVtXG5cdHZhciBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMgPSBbXTtcblx0Zm9yICh2YXIgaiA9IDA7IGogPCBvdXRkYXRlZE1vZHVsZXMubGVuZ3RoOyBqKyspIHtcblx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVJZCA9IG91dGRhdGVkTW9kdWxlc1tqXTtcblx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdGlmIChcblx0XHRcdG1vZHVsZSAmJlxuXHRcdFx0KG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZCB8fCBtb2R1bGUuaG90Ll9tYWluKSAmJlxuXHRcdFx0Ly8gcmVtb3ZlZCBzZWxmLWFjY2VwdGVkIG1vZHVsZXMgc2hvdWxkIG5vdCBiZSByZXF1aXJlZFxuXHRcdFx0YXBwbGllZFVwZGF0ZVtvdXRkYXRlZE1vZHVsZUlkXSAhPT0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlICYmXG5cdFx0XHQvLyB3aGVuIGNhbGxlZCBpbnZhbGlkYXRlIHNlbGYtYWNjZXB0aW5nIGlzIG5vdCBwb3NzaWJsZVxuXHRcdFx0IW1vZHVsZS5ob3QuX3NlbGZJbnZhbGlkYXRlZFxuXHRcdCkge1xuXHRcdFx0b3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLnB1c2goe1xuXHRcdFx0XHRtb2R1bGU6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdHJlcXVpcmU6IG1vZHVsZS5ob3QuX3JlcXVpcmVTZWxmLFxuXHRcdFx0XHRlcnJvckhhbmRsZXI6IG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0dmFyIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzO1xuXG5cdHJldHVybiB7XG5cdFx0ZGlzcG9zZTogZnVuY3Rpb24gKCkge1xuXHRcdFx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MuZm9yRWFjaChmdW5jdGlvbiAoY2h1bmtJZCkge1xuXHRcdFx0XHRkZWxldGUgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuXHRcdFx0fSk7XG5cdFx0XHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcyA9IHVuZGVmaW5lZDtcblxuXHRcdFx0dmFyIGlkeDtcblx0XHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpO1xuXHRcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWUucG9wKCk7XG5cdFx0XHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdO1xuXHRcdFx0XHRpZiAoIW1vZHVsZSkgY29udGludWU7XG5cblx0XHRcdFx0dmFyIGRhdGEgPSB7fTtcblxuXHRcdFx0XHQvLyBDYWxsIGRpc3Bvc2UgaGFuZGxlcnNcblx0XHRcdFx0dmFyIGRpc3Bvc2VIYW5kbGVycyA9IG1vZHVsZS5ob3QuX2Rpc3Bvc2VIYW5kbGVycztcblx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IGRpc3Bvc2VIYW5kbGVycy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdGRpc3Bvc2VIYW5kbGVyc1tqXS5jYWxsKG51bGwsIGRhdGEpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1yRFttb2R1bGVJZF0gPSBkYXRhO1xuXG5cdFx0XHRcdC8vIGRpc2FibGUgbW9kdWxlICh0aGlzIGRpc2FibGVzIHJlcXVpcmVzIGZyb20gdGhpcyBtb2R1bGUpXG5cdFx0XHRcdG1vZHVsZS5ob3QuYWN0aXZlID0gZmFsc2U7XG5cblx0XHRcdFx0Ly8gcmVtb3ZlIG1vZHVsZSBmcm9tIGNhY2hlXG5cdFx0XHRcdGRlbGV0ZSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdO1xuXG5cdFx0XHRcdC8vIHdoZW4gZGlzcG9zaW5nIHRoZXJlIGlzIG5vIG5lZWQgdG8gY2FsbCBkaXNwb3NlIGhhbmRsZXJcblx0XHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcblxuXHRcdFx0XHQvLyByZW1vdmUgXCJwYXJlbnRzXCIgcmVmZXJlbmNlcyBmcm9tIGFsbCBjaGlsZHJlblxuXHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlLmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0dmFyIGNoaWxkID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZS5jaGlsZHJlbltqXV07XG5cdFx0XHRcdFx0aWYgKCFjaGlsZCkgY29udGludWU7XG5cdFx0XHRcdFx0aWR4ID0gY2hpbGQucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKTtcblx0XHRcdFx0XHRpZiAoaWR4ID49IDApIHtcblx0XHRcdFx0XHRcdGNoaWxkLnBhcmVudHMuc3BsaWNlKGlkeCwgMSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIHJlbW92ZSBvdXRkYXRlZCBkZXBlbmRlbmN5IGZyb20gbW9kdWxlIGNoaWxkcmVuXG5cdFx0XHR2YXIgZGVwZW5kZW5jeTtcblx0XHRcdGZvciAodmFyIG91dGRhdGVkTW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcblx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhvdXRkYXRlZERlcGVuZGVuY2llcywgb3V0ZGF0ZWRNb2R1bGVJZCkpIHtcblx0XHRcdFx0XHRtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuXHRcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPVxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbal07XG5cdFx0XHRcdFx0XHRcdGlkeCA9IG1vZHVsZS5jaGlsZHJlbi5pbmRleE9mKGRlcGVuZGVuY3kpO1xuXHRcdFx0XHRcdFx0XHRpZiAoaWR4ID49IDApIG1vZHVsZS5jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdGFwcGx5OiBmdW5jdGlvbiAocmVwb3J0RXJyb3IpIHtcblx0XHRcdC8vIGluc2VydCBuZXcgY29kZVxuXHRcdFx0Zm9yICh2YXIgdXBkYXRlTW9kdWxlSWQgaW4gYXBwbGllZFVwZGF0ZSkge1xuXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGFwcGxpZWRVcGRhdGUsIHVwZGF0ZU1vZHVsZUlkKSkge1xuXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVt1cGRhdGVNb2R1bGVJZF0gPSBhcHBsaWVkVXBkYXRlW3VwZGF0ZU1vZHVsZUlkXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBydW4gbmV3IHJ1bnRpbWUgbW9kdWxlc1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjdXJyZW50VXBkYXRlUnVudGltZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjdXJyZW50VXBkYXRlUnVudGltZVtpXShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gY2FsbCBhY2NlcHQgaGFuZGxlcnNcblx0XHRcdGZvciAodmFyIG91dGRhdGVkTW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcblx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhvdXRkYXRlZERlcGVuZGVuY2llcywgb3V0ZGF0ZWRNb2R1bGVJZCkpIHtcblx0XHRcdFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdGlmIChtb2R1bGUpIHtcblx0XHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID1cblx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0XHRcdFx0XHR2YXIgY2FsbGJhY2tzID0gW107XG5cdFx0XHRcdFx0XHR2YXIgZXJyb3JIYW5kbGVycyA9IFtdO1xuXHRcdFx0XHRcdFx0dmFyIGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0XHR2YXIgZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2pdO1xuXHRcdFx0XHRcdFx0XHR2YXIgYWNjZXB0Q2FsbGJhY2sgPVxuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZS5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcGVuZGVuY3ldO1xuXHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JIYW5kbGVyID1cblx0XHRcdFx0XHRcdFx0XHRtb2R1bGUuaG90Ll9hY2NlcHRlZEVycm9ySGFuZGxlcnNbZGVwZW5kZW5jeV07XG5cdFx0XHRcdFx0XHRcdGlmIChhY2NlcHRDYWxsYmFjaykge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFja3MuaW5kZXhPZihhY2NlcHRDYWxsYmFjaykgIT09IC0xKSBjb250aW51ZTtcblx0XHRcdFx0XHRcdFx0XHRjYWxsYmFja3MucHVzaChhY2NlcHRDYWxsYmFjayk7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3JIYW5kbGVycy5wdXNoKGVycm9ySGFuZGxlcik7XG5cdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzLnB1c2goZGVwZW5kZW5jeSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGZvciAodmFyIGsgPSAwOyBrIDwgY2FsbGJhY2tzLmxlbmd0aDsgaysrKSB7XG5cdFx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzW2tdLmNhbGwobnVsbCwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMpO1xuXHRcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAodHlwZW9mIGVycm9ySGFuZGxlcnNba10gPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3JIYW5kbGVyc1trXShlcnIsIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogb3V0ZGF0ZWRNb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrc1trXVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycjIpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3ItaGFuZGxlci1lcnJvcmVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogb3V0ZGF0ZWRNb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzW2tdLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVycjIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvcmlnaW5hbEVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycjIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycik7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImFjY2VwdC1lcnJvcmVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3Nba10sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycik7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIExvYWQgc2VsZiBhY2NlcHRlZCBtb2R1bGVzXG5cdFx0XHRmb3IgKHZhciBvID0gMDsgbyA8IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5sZW5ndGg7IG8rKykge1xuXHRcdFx0XHR2YXIgaXRlbSA9IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlc1tvXTtcblx0XHRcdFx0dmFyIG1vZHVsZUlkID0gaXRlbS5tb2R1bGU7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0aXRlbS5yZXF1aXJlKG1vZHVsZUlkKTtcblx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBpdGVtLmVycm9ySGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRpdGVtLmVycm9ySGFuZGxlcihlcnIsIHtcblx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlOiBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyMikge1xuXHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yLWhhbmRsZXItZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVycjIsXG5cdFx0XHRcdFx0XHRcdFx0XHRvcmlnaW5hbEVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycjIpO1xuXHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yZWRcIixcblx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBvdXRkYXRlZE1vZHVsZXM7XG5cdFx0fVxuXHR9O1xufVxuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJLmpzb25wID0gZnVuY3Rpb24gKG1vZHVsZUlkLCBhcHBseUhhbmRsZXJzKSB7XG5cdGlmICghY3VycmVudFVwZGF0ZSkge1xuXHRcdGN1cnJlbnRVcGRhdGUgPSB7fTtcblx0XHRjdXJyZW50VXBkYXRlUnVudGltZSA9IFtdO1xuXHRcdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzID0gW107XG5cdFx0YXBwbHlIYW5kbGVycy5wdXNoKGFwcGx5SGFuZGxlcik7XG5cdH1cblx0aWYgKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oY3VycmVudFVwZGF0ZSwgbW9kdWxlSWQpKSB7XG5cdFx0Y3VycmVudFVwZGF0ZVttb2R1bGVJZF0gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdO1xuXHR9XG59O1xuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJDLmpzb25wID0gZnVuY3Rpb24gKFxuXHRjaHVua0lkcyxcblx0cmVtb3ZlZENodW5rcyxcblx0cmVtb3ZlZE1vZHVsZXMsXG5cdHByb21pc2VzLFxuXHRhcHBseUhhbmRsZXJzLFxuXHR1cGRhdGVkTW9kdWxlc0xpc3Rcbikge1xuXHRhcHBseUhhbmRsZXJzLnB1c2goYXBwbHlIYW5kbGVyKTtcblx0Y3VycmVudFVwZGF0ZUNodW5rcyA9IHt9O1xuXHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcyA9IHJlbW92ZWRDaHVua3M7XG5cdGN1cnJlbnRVcGRhdGUgPSByZW1vdmVkTW9kdWxlcy5yZWR1Y2UoZnVuY3Rpb24gKG9iaiwga2V5KSB7XG5cdFx0b2JqW2tleV0gPSBmYWxzZTtcblx0XHRyZXR1cm4gb2JqO1xuXHR9LCB7fSk7XG5cdGN1cnJlbnRVcGRhdGVSdW50aW1lID0gW107XG5cdGNodW5rSWRzLmZvckVhY2goZnVuY3Rpb24gKGNodW5rSWQpIHtcblx0XHRpZiAoXG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJlxuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdICE9PSB1bmRlZmluZWRcblx0XHQpIHtcblx0XHRcdHByb21pc2VzLnB1c2gobG9hZFVwZGF0ZUNodW5rKGNodW5rSWQsIHVwZGF0ZWRNb2R1bGVzTGlzdCkpO1xuXHRcdFx0Y3VycmVudFVwZGF0ZUNodW5rc1tjaHVua0lkXSA9IHRydWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGN1cnJlbnRVcGRhdGVDaHVua3NbY2h1bmtJZF0gPSBmYWxzZTtcblx0XHR9XG5cdH0pO1xuXHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5mKSB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5mLmpzb25wSG1yID0gZnVuY3Rpb24gKGNodW5rSWQsIHByb21pc2VzKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdGN1cnJlbnRVcGRhdGVDaHVua3MgJiZcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vKGN1cnJlbnRVcGRhdGVDaHVua3MsIGNodW5rSWQpICYmXG5cdFx0XHRcdCFjdXJyZW50VXBkYXRlQ2h1bmtzW2NodW5rSWRdXG5cdFx0XHQpIHtcblx0XHRcdFx0cHJvbWlzZXMucHVzaChsb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCkpO1xuXHRcdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzW2NodW5rSWRdID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9O1xuXHR9XG59O1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtck0gPSAoKSA9PiB7XG5cdGlmICh0eXBlb2YgZmV0Y2ggPT09IFwidW5kZWZpbmVkXCIpIHRocm93IG5ldyBFcnJvcihcIk5vIGJyb3dzZXIgc3VwcG9ydDogbmVlZCBmZXRjaCBBUElcIik7XG5cdHJldHVybiBmZXRjaChfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckYoKSkudGhlbigocmVzcG9uc2UpID0+IHtcblx0XHRpZihyZXNwb25zZS5zdGF0dXMgPT09IDQwNCkgcmV0dXJuOyAvLyBubyB1cGRhdGUgYXZhaWxhYmxlXG5cdFx0aWYoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggdXBkYXRlIG1hbmlmZXN0IFwiICsgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG5cdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0fSk7XG59O1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtsbGZldGNoZXJfdHNcIl0gPSBzZWxmW1wid2VicGFja0NodW5rbGxmZXRjaGVyX3RzXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIG1vZHVsZSBjYWNoZSBhcmUgdXNlZCBzbyBlbnRyeSBpbmxpbmluZyBpcyBkaXNhYmxlZFxuLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19ib290c3RyYXBfZGlzdF9qc19ib290c3RyYXBfanMtbm9kZV9tb2R1bGVzX2pxdWVyeV9kaXN0X2pxdWVyeV9qcy1ub2RlX20tZDdkOTJiXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2stZGV2LXNlcnZlci9jbGllbnQvaW5kZXguanM/cHJvdG9jb2w9d3MlM0EmaG9zdG5hbWU9MC4wLjAuMCZwb3J0PTkwMDAmcGF0aG5hbWU9JTJGd3MmbG9nZ2luZz1pbmZvJm92ZXJsYXk9dHJ1ZSZyZWNvbm5lY3Q9MTAmaG90PXRydWUmbGl2ZS1yZWxvYWQ9dHJ1ZVwiKSkpXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19ib290c3RyYXBfZGlzdF9qc19ib290c3RyYXBfanMtbm9kZV9tb2R1bGVzX2pxdWVyeV9kaXN0X2pxdWVyeV9qcy1ub2RlX20tZDdkOTJiXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90L2Rldi1zZXJ2ZXIuanNcIikpKVxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19ib290c3RyYXBfZGlzdF9qc19ib290c3RyYXBfanMtbm9kZV9tb2R1bGVzX2pxdWVyeV9kaXN0X2pxdWVyeV9qcy1ub2RlX20tZDdkOTJiXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3BvcHVwL3BvcHVwLnRzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsiXyIsImZvcm1hdEJ5dGVzIiwiYnl0ZXMiLCJ0b0ZpeGVkIiwiU3RyaW5nIiwiZmluZEl0ZW1zIiwic2VhcmNoVGVybSIsInNvdXJjZSIsIl9fc2VhcmNoVGVybV9fIiwiX19yZXN1bHRzX18iLCJyZXN1bHRFeGlzdCIsInJlc3VsdEl0ZW0iLCJpbmRleCIsImlzRXF1YWwiLCJzZWFyY2hJdGVtIiwiaXRlbSIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5Iiwic2VhcmNoQXNSZWdFeCIsIlJlZ0V4cCIsIm1hdGNoIiwicHVzaCIsImZpbmREUyIsImsiLCJ2Iiwic3JjIiwicHJvcHMiLCJsaXN0IiwibGlzdHMiLCJpIiwib2JqIiwicmV0cyIsImoiLCJwcm9wIiwiZ2V0Rm10IiwidXJsIiwic3RyIiwic3BsaXQiLCJmaWx0ZXIiLCJyZXBsYWNlIiwibWF0Y2hlcyIsIm0iLCJtYWtlVGl0bGUiLCJzbHVnIiwid29yZHMiLCJsZW5ndGgiLCJ3b3JkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImpvaW4iLCJtYWtlU2x1ZyIsInRvTG93ZXJDYXNlIiwic2VuZE1lc3NhZ2VTYXZlRGF0YUNvZGVzVG9MUyIsImNocm9tZSIsInRhYnMiLCJxdWVyeSIsImFjdGl2ZSIsImN1cnJlbnRXaW5kb3ciLCJ0YWIiLCJzZW5kTWVzc2FnZSIsImlkIiwiZXZlbnQiLCJyIiwiY29udGVudENvbnNvbGVMb2ciLCJkYXRhIiwicGFyYW0iXSwic291cmNlUm9vdCI6IiJ9