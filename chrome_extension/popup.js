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
___CSS_LOADER_EXPORT___.push([module.id, "\n.fetch-queue-bar[data-v-905aec42]{\r\n    position: absolute;\r\n    right: 49px;\r\n    margin-top: -22px;\n}\n.fetch-queue-pb[data-v-905aec42]{\r\n    width: 102px;\r\n    height: 24px;\r\n    padding: 4px 0;\r\n    float:right;\r\n    clear:both;\n}\n.btn-fetch[data-v-905aec42]{\r\n    margin-top:-8px;\r\n    padding:0;\r\n    border:none !important;\r\n    font-size: 10px;\n}\n.fetch-queue[data-v-905aec42]{\r\n    margin-bottom: 1em;\n}\n.btn-fetch-cnt[data-v-905aec42]{\r\n   width: 25px;\r\n    position: absolute;\r\n    right: -12px;\r\n    margin-top: 2.5px;\n}\r\n", "",{"version":3,"sources":["webpack://./src/popup/components/FetchQueueBar.vue"],"names":[],"mappings":";AAsDA;IACI,kBAAkB;IAClB,WAAW;IACX,iBAAiB;AACrB;AACA;IACI,YAAY;IACZ,YAAY;IACZ,cAAc;IACd,WAAW;IACX,UAAU;AACd;AACA;IACI,eAAe;IACf,SAAS;IACT,sBAAsB;IACtB,eAAe;AACnB;AACA;IACI,kBAAkB;AACtB;AACA;GACG,WAAW;IACV,kBAAkB;IAClB,YAAY;IACZ,iBAAiB;AACrB","sourcesContent":["<template>\r\n    <div class=\"fetch-queue-bar\">\r\n        <div class=\"test-data\" v-if=\"0\">\r\n            <pre>{{JSON.stringify(queueTocIndex,null,2)}}</pre>\r\n        </div>\r\n        <div class=\"fetch-queue-pb\">\r\n            <div class=\"progress\" v-show=\"percentage > 0\">\r\n                <div class=\"progress-bar bg-info\" role=\"progressbar\" :style=\"{width:percentage+'%'}\" :aria-valuenow=\"percentage\" :aria-valuemin=\"0\" :aria-valuemax=\"100\"></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"btn-fetch-cnt\">\r\n            <button :style=\"{color:btnState==3?'white':'inherit'}\" :disabled=\"btnState!=1&&btnState!=4\" @click=\"startQueue()\" class=\"btn btn-sm btn-fetch\"><i class=\"fa\" :class=\"{'fa-play':btnState==1,'fa-spin fa-spinner':btnState==2,'fa-check':btnState==3,'fa-refresh':btnState==4}\"></i></button>\r\n        </div>\r\n    </div>\r\n</template>\r\n\r\n<script lang=\"ts\">\r\nimport {defineComponent,ref} from 'vue'\r\nexport default defineComponent({\r\n  props:{\r\n    sectionIndex:{\r\n        required : true,\r\n        type: Number\r\n    }\r\n  },\r\n  setup(props){\r\n    let queueSlugs = ref([]);\r\n    let queueTocIndex = ref([]);\r\n    let excludeSlugs = ref([]);\r\n    let percentage = ref(0);\r\n    let btnState = ref(1);\r\n    let lastTocIndex = ref(0);\r\n    const sectionIndex = ref(props.sectionIndex);\r\n    return {queueTocIndex,queueSlugs,excludeSlugs,percentage,btnState,lastTocIndex,sectionIndex};\r\n  },\r\n  methods:{\r\n    setProgress(lastTocIndex:number,percentage:number){\r\n        this.lastTocIndex = lastTocIndex;\r\n        this.percentage = percentage;\r\n        if(percentage==100){\r\n            this.btnState = 3;\r\n        }\r\n        this.$parent.fetchSectionQueue.report(this.sectionIndex,lastTocIndex,0);\r\n        console.log(percentage)\r\n    },\r\n    startQueue(){\r\n        this.percentage = this.percentage==0?1:this.percentage;\r\n        this.btnState = 2;\r\n        this.$parent.tocItems[this.sectionIndex].triggerFetchQueue(this.lastTocIndex==0?-1:this.lastTocIndex);\r\n    }\r\n  }\r\n});\r\n</script>\r\n<style scoped>\r\n.fetch-queue-bar{\r\n    position: absolute;\r\n    right: 49px;\r\n    margin-top: -22px;;\r\n}    \r\n.fetch-queue-pb{\r\n    width: 102px;\r\n    height: 24px;\r\n    padding: 4px 0;\r\n    float:right;\r\n    clear:both;\r\n}\r\n.btn-fetch{\r\n    margin-top:-8px;\r\n    padding:0;\r\n    border:none !important;\r\n    font-size: 10px;\r\n}\r\n.fetch-queue{\r\n    margin-bottom: 1em;\r\n}\r\n.btn-fetch-cnt{\r\n   width: 25px;\r\n    position: absolute;\r\n    right: -12px;\r\n    margin-top: 2.5px;\r\n}\r\n</style>"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.data-codes[data-v-6afda649]{\r\n    background: yellow;\n}\n.fetch-section-queue-pb[data-v-6afda649]{\r\n    width: 102px;\r\n    height: 24px;\r\n    padding: 4px 0;\r\n    float:right;\r\n    clear:both;\n}\n.btn-fetch-section-queue[data-v-6afda649]{\r\n    margin-top:-8px;\r\n    padding:0;\r\n    border:none !important;\r\n    font-size: 10px;\n}\n.fetch-section-queue[data-v-6afda649]{\r\n    position: absolute;\r\n    right: 49px;\r\n    margin-top: 12px;\n}\n.btn-fetch-section-queue-cnt[data-v-6afda649]{\r\n   width: 25px;\r\n    position: absolute;\r\n    right: -12px;\r\n    margin-top: 2.5px;\n}\r\n", "",{"version":3,"sources":["webpack://./src/popup/components/FetchSectionQueue.vue"],"names":[],"mappings":";AAsFA;IACI,kBAAkB;AACtB;AACA;IACI,YAAY;IACZ,YAAY;IACZ,cAAc;IACd,WAAW;IACX,UAAU;AACd;AACA;IACI,eAAe;IACf,SAAS;IACT,sBAAsB;IACtB,eAAe;AACnB;AACA;IACI,kBAAkB;IAClB,WAAW;IACX,gBAAgB;AACpB;AACA;GACG,WAAW;IACV,kBAAkB;IAClB,YAAY;IACZ,iBAAiB;AACrB","sourcesContent":["<template>\r\n    <div class=\"fetch-section-queue\">\r\n        <div class=\"fsqbc\">\r\n            <div class=\"fetch-section-queue-bar\">\r\n                <div class=\"fetch-section-queue-pb\">\r\n                    <div class=\"progress\" v-show=\"percentage > 0\">\r\n                        <div class=\"progress-bar bg-success\" role=\"progressbar\" :style=\"{width:percentage+'%'}\" :aria-valuenow=\"percentage\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"btn-fetch-section-queue-cnt\">\r\n                    <button :style=\"{color:btnState==3?'white':'inherit'}\" :disabled=\"btnState!=1&&btnState!=4\" @click=\"startQueue()\" class=\"btn btn-sm btn-fetch-section-queue\"><i class=\"fa\" :class=\"{'fa-play':btnState==1,'fa-spin fa-spinner':btnState==2,'fa-check':btnState==3,'fa-refresh':btnState==4}\"></i></button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</template>\r\n\r\n<script lang=\"ts\">\r\nimport { defineComponent, ref } from 'vue';\r\n\r\nexport default defineComponent({\r\n\r\n    setup() {\r\n        const queueSlugs = ref([]);\r\n        const btnState = ref(1);\r\n        const percentage = ref(0);\r\n        const lastSectionIndex = ref(0);\r\n        const sectionIndexQueues = ref([]);\r\n        return {\r\n            queueSlugs,\r\n            btnState,\r\n            percentage,\r\n            lastSectionIndex,\r\n            sectionIndexQueues\r\n        };\r\n    },\r\n    mounted(){\r\n        setTimeout(()=> {\r\n            this.sectionIndexQueues =  Object.keys(this.$parent.sections);\r\n        },250)\r\n    },\r\n    methods:{\r\n        toJSONStr(obj:any){\r\n            return JSON.stringify(obj);\r\n        },\r\n        calculatePercentageQueue(callback:Function){\r\n            const peak = this.queueSlugs.length;\r\n            const maxPeak = this.$parent.getTotalTocs();\r\n            const percentage = Math.round(peak / maxPeak * 100);\r\n\r\n            if('function' == typeof callback){\r\n                callback(percentage,peak,maxPeak);\r\n            }\r\n        },\r\n        report(sectionIndex:number,tocIndex:number,status:number){\r\n            const section = this.$parent.sections[sectionIndex];\r\n            const slug = section.items[tocIndex].slug;\r\n            if(!this.queueSlugs.includes(slug)){\r\n                this.queueSlugs.push(slug);\r\n            }\r\n            const remainingText = `${this.queueSlugs.length} of ${this.$parent.getTotalTocs()}`\r\n            this.$parent.logBar.log(`${section.title} : ${slug} ${remainingText}`,status);\r\n\r\n            this.calculatePercentageQueue((percentage)=>this.percentage=percentage);\r\n\r\n            if(this.$parent.fetchQueueBar[sectionIndex].percentage==100){\r\n                this.processQueue();\r\n            }\r\n        },\r\n        processQueue(){\r\n            if(this.sectionIndexQueues.length > 0){\r\n                this.lastSectionIndex = this.sectionIndexQueues.shift();\r\n                this.$parent.fetchQueueBar[this.lastSectionIndex].startQueue();\r\n            }else{\r\n                this.btnState = 3;\r\n            }\r\n        },\r\n        startQueue(){\r\n            this.btnState = 2;\r\n            this.processQueue();\r\n        }\r\n    }\r\n})\r\n</script>\r\n\r\n<style scoped>\r\n.data-codes{\r\n    background: yellow;\r\n}    \r\n.fetch-section-queue-pb{\r\n    width: 102px;\r\n    height: 24px;\r\n    padding: 4px 0;\r\n    float:right;\r\n    clear:both;\r\n}\r\n.btn-fetch-section-queue{\r\n    margin-top:-8px;\r\n    padding:0;\r\n    border:none !important;\r\n    font-size: 10px;\r\n}\r\n.fetch-section-queue{\r\n    position: absolute;\r\n    right: 49px;\r\n    margin-top: 12px;\r\n}\r\n.btn-fetch-section-queue-cnt{\r\n   width: 25px;\r\n    position: absolute;\r\n    right: -12px;\r\n    margin-top: 2.5px;\r\n}\r\n</style>"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "\ntd.fcc[data-v-3c3574fe]{\r\n    text-align: right;\r\n    width:2.5em;\n}\nul.toc-item-list[data-v-3c3574fe]{\r\n  list-style-type:none;\r\n  margin:0;\r\n  padding:0;\n}\ntable.toc-item-list[data-v-3c3574fe]{\r\n    width: 100%;\n}\n.toc-item-view[data-v-3c3574fe]{\r\n    padding: 0 2em;\r\n    font-size: 80%;\r\n    padding-bottom: 1em;\r\n    padding-right: 0;\n}\r\n\r\n\r\n", "",{"version":3,"sources":["webpack://./src/popup/components/TocItem.vue"],"names":[],"mappings":";AAsLA;IACI,iBAAiB;IACjB,WAAW;AACf;AACA;EACE,oBAAoB;EACpB,QAAQ;EACR,SAAS;AACX;AACA;IACI,WAAW;AACf;AACA;IACI,cAAc;IACd,cAAc;IACd,mBAAmB;IACnB,gBAAgB;AACpB","sourcesContent":["<template>\r\n  <div class=\"toc-item-view\">\r\n    <table class=\"toc-item-list\">\r\n        <thead>\r\n            <tr>\r\n                <th colspan=\"2\"><label><input @click=\"onCheckAll()\" v-model=\"checkAll\" class=\"form-check-input\" type=\"checkbox\"/> <span style=\"padding-left:.5em\">Check All</span></label></th>\r\n               \r\n                <th></th>\r\n                <th class=\"text-center\" style=\"width:80px\"></th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr v-for=\"(toc,tocIndex) in items\" class=\"toc-item\" :class=\"{ods:tocIndex%2==0}\" :key=\"tocIndex\">\r\n            <td class=\"fcc\">\r\n                <input @click=\"tgQueue(tocIndex)\" class=\"form-check-input\" type=\"checkbox\" v-model=\"checkedQueues[tocIndex]\"/> \r\n            </td>\r\n            <td style=\"padding-left:.5em\">{{toc.title}}</td>\r\n            <td colspan=\"2\" style=\"text-align: right;\">\r\n                <FetchButton @update=\"onFetchUpdate($event)\" \r\n                :sectionIndex=\"sectionIndex\" \r\n                :tocIndex=\"tocIndex\" \r\n                :toc=\"toc\" \r\n                :queue=\"enableQueue\" \r\n                ref=\"fetchBtns\"/>\r\n            </td>\r\n        </tr>\r\n        </tbody>\r\n    </table>\r\n  </div>\r\n</template>\r\n<script lang=\"ts\">\r\nimport { defineComponent, ref, PropType } from 'vue';\r\nimport FetchButton from '../components/FetchButton.vue';\r\nimport {Toc} from '../../types/lynda';\r\n\r\nexport default defineComponent({\r\n    components:{\r\n        FetchButton\r\n    },\r\n    props:{\r\n        items: {\r\n            required : true,\r\n            type : Array as PropType<Toc[]>\r\n        },\r\n        sectionIndex : {\r\n            requied : true,\r\n            type : Number\r\n        }\r\n    },\r\n    setup(props) {\r\n        const enableQueue = ref(true);\r\n        const items = ref(props.items as Toc[]);\r\n        const sectionIndex = ref(props.sectionIndex as number);\r\n        const checkAll = ref(false);\r\n        const checkedQueues = ref([]);\r\n        const excludeQueues = ref([]);\r\n        const fetchQueueBar = ref();\r\n        let fetchBtns = ref([]);\r\n        return {fetchQueueBar,items, sectionIndex, checkedQueues, excludeQueues,fetchBtns,checkAll,enableQueue};\r\n    },\r\n    mounted(){\r\n        this.fetchQueueBar = this.$parent.fetchQueueBar[this.sectionIndex];\r\n\r\n        setTimeout(()=>{\r\n            this.checkAll = true;\r\n            for(let tocIndex in this.items){\r\n                this.checkedQueues[tocIndex] = true;\r\n                // const tocSlug = this.items[tocIndex].slug;\r\n                if(!this.fetchQueueBar.queueTocIndex.includes(tocIndex)){\r\n                    this.fetchQueueBar.queueTocIndex.push(tocIndex);    \r\n                }\r\n                \r\n            }\r\n        },250);\r\n    },\r\n    methods:{\r\n        triggerFailedFetchQueue(tocIndex:number){\r\n            setTimeout(()=>{\r\n                this.fetchQueueBar.btnState=4;\r\n            },1000);\r\n            \r\n        },\r\n        calculatePercentageQueue(callback){\r\n            const peak = this.excludeQueues.length;\r\n            const maxPeak = this.items.length;\r\n            const percentage = Math.round(peak / maxPeak * 100);\r\n\r\n            if('function' == typeof callback){\r\n                callback(percentage,peak,maxPeak);\r\n            }\r\n        },\r\n        triggerExcludeFetchQueue(tocIndex:number, fetchQueueEnabled:boolean){\r\n            console.log(tocIndex);\r\n            if(this.excludeQueues.indexOf(tocIndex) == -1){\r\n                this.excludeQueues.push(tocIndex);\r\n            }\r\n            if(fetchQueueEnabled){\r\n                this.calculatePercentageQueue((percentage:number)=>{\r\n                    setTimeout(()=>{\r\n                        this.fetchQueueBar.setProgress(tocIndex,percentage);\r\n                    },500);\r\n                });\r\n            }\r\n            \r\n            this.checkedQueues[tocIndex] = false;\r\n            this.checkAll = false;\r\n       \r\n        },\r\n        triggerFetchQueue(tocIndex:number){\r\n            console.log(tocIndex);\r\n            const nextTocIndex = tocIndex + 1;\r\n            if(nextTocIndex < this.checkedQueues.length){\r\n                // process next fetch button\r\n                \r\n                this.fetchBtns[nextTocIndex].fetchToc(true);\r\n                // console.log();\r\n            }else{\r\n                this.calculatePercentageQueue((percentage:number)=>{\r\n                    setTimeout(()=>{\r\n                        this.fetchQueueBar.setProgress(tocIndex,percentage);\r\n                    },500);\r\n                });\r\n                setTimeout(()=>{\r\n\r\n                    this.fetchQueueBar.btnState=this.fetchQueueBar.percentage==100?3:1;\r\n                    this.fetchQueueBar.lastTocIndex=0;\r\n                },1000);\r\n            }\r\n            // calling fetch button next index\r\n            // this.$ref\r\n\r\n        },\r\n        onFetchUpdate(target:any){\r\n            // console.log(target)\r\n            this.$emit('update',target);\r\n        },\r\n        onCheckAll(){\r\n            setTimeout(()=>{\r\n                console.log(this.checkAll);\r\n                for(let tocIndex in this.items){\r\n                    this.checkedQueues[tocIndex] = this.checkAll;\r\n                    // const tocSlug = this.items[tocIndex].slug;\r\n                    if(this.checkedQueues[tocIndex]){\r\n                        if(!this.fetchQueueBar.queueTocIndex.includes(tocIndex)){\r\n                            this.fetchQueueBar.queueTocIndex.push(tocIndex);    \r\n                        }\r\n                    }else{\r\n                        const aIndex = this.fetchQueueBar.queueTocIndex.indexOf(tocIndex);\r\n                        if( aIndex != -1){\r\n                            this.fetchQueueBar.queueTocIndex.splice(aIndex,1);\r\n                        }\r\n                    }\r\n                }\r\n            },250);\r\n            \r\n        },\r\n        tgQueue(tocIndex:number){\r\n            setTimeout(()=>{\r\n                // this.$refs.fetchBtns[tocIndex].isQueued =this.checkedQueues[tocIndex];\r\n                // console.log(this.$refs.fetchBtns);\r\n                // const tocSlug = this.items[tocIndex].slug;\r\n                if(this.checkedQueues[tocIndex]){\r\n                    if(!this.fetchQueueBar.queueTocIndex.includes(tocIndex)){\r\n                        this.fetchQueueBar.queueTocIndex.push(tocIndex);    \r\n                    }\r\n                }else{\r\n                    const aIndex = this.fetchQueueBar.queueTocIndex.indexOf(tocIndex);\r\n                    if( aIndex != -1){\r\n                        this.fetchQueueBar.queueTocIndex.splice(aIndex,1);\r\n                    }\r\n                }\r\n                \r\n                \r\n                console.log(this.checkedQueues[tocIndex]);\r\n            },250);\r\n        }\r\n        \r\n    }\r\n})\r\n</script>\r\n\r\n<style scoped>\r\ntd.fcc{\r\n    text-align: right;\r\n    width:2.5em;\r\n}\r\nul.toc-item-list{\r\n  list-style-type:none;\r\n  margin:0;\r\n  padding:0;\r\n}\r\ntable.toc-item-list{\r\n    width: 100%;\r\n}\r\n.toc-item-view{\r\n    padding: 0 2em;\r\n    font-size: 80%;\r\n    padding-bottom: 1em;\r\n    padding-right: 0;\r\n}\r\n\r\n\r\n</style>"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/DownloadPage.vue?vue&type=style&index=0&id=7976c4f4&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/DownloadPage.vue?vue&type=style&index=0&id=7976c4f4&scoped=true&lang=css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.form-helper[data-v-7976c4f4]{\r\n    font-size:12px;\r\n    font-style: italic;\n}\n.form-label[data-v-7976c4f4]{\r\n    margin-right:.25em;\n}\r\n", "",{"version":3,"sources":["webpack://./src/popup/views/DownloadPage.vue"],"names":[],"mappings":";AAyFE;IACE,cAAc;IACd,kBAAkB;AACpB;AACA;IACE,kBAAkB;AACpB","sourcesContent":["<template>\r\n  <div class=\"download-page page\">\r\n    <div class=\"dl-cnt text-center\" v-if=\"course\">\r\n      <div class=\"exercise-file-cnt\" v-if=\"exerciseFile\">\r\n        <div><label class=\"form-label\">Exercise File: </label><a :href=\"exerciseFile.url\" target=\"_blank\">{{exerciseFile.name}}</a></div>\r\n      </div>\r\n      <div class=\"dl-config-cnt\" v-if=\"downloadConfig\">\r\n        <div><label class=\"form-label\">Set video output format : </label> \r\n          <select v-model=\"downloadConfig.selectedFmtList\" class=\"form-control\" @change=\"updateSelectedFmt()\" style=\"width:120px;display:inline\">\r\n            <option value=\"\">--Choose--</option>\r\n            <option v-for=\"fmt in downloadConfig.fmtList\" :value=\"fmt\">{{fmt}}</option>\r\n          </select>\r\n        </div>\r\n        <span class=\"form-helper\">Available video format: {{downloadConfig.fmtList.join(', ')}}</span>\r\n\r\n      </div>\r\n      <div class=\"dl-playlist-cnt\" v-if=\"downloadConfig.selectedFmtList\">\r\n        <label class=\"form-label\">Playlist File : </label><a href=\"javascript:;\">{{course.slug}}-{{downloadConfig.selectedFmtList}}.m3u</a>\r\n      </div>\r\n      <div class=\"dl-playlist-cnt\" v-if=\"downloadConfig.selectedFmtList\">\r\n        <label class=\"form-label\">Helper Script : </label><a href=\"javascript:;\">{{course.slug}}-{{downloadConfig.selectedFmtList}}-util.sh</a>\r\n      </div>\r\n      <div class=\"exercise-file-cnt\" v-if=\"course.sourceCodeRepository\">\r\n        <div><label class=\"form-label\">Source Repository : </label> {{course.sourceCodeRepository}}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</template>\r\n<script lang=\"ts\">\r\nimport { Course_tableField, DownloadConfig_tableField, ExerciseFile_tableField } from '../../types/tableFields';\r\nimport { defineComponent, PropType, ref } from 'vue';\r\nimport Store from '../../libs/store';\r\n\r\nexport default defineComponent({\r\n  data() {\r\n    return {\r\n      nav: 'downloads'\r\n    }\r\n  },\r\n  props:{\r\n    course : {\r\n      required : false,\r\n      type : Object as PropType<Course_tableField>\r\n    }\r\n  },\r\n  setup(){\r\n    const course = ref<Course_tableField>();\r\n    const exerciseFile = ref<ExerciseFile_tableField>();\r\n    const downloadConfig = ref<DownloadConfig_tableField>();\r\n    return{\r\n      course, exerciseFile, downloadConfig\r\n    };\r\n  },\r\n  mounted(){\r\n    this.loadDownloadData();\r\n  },\r\n  methods:{\r\n    updateSelectedFmt(){\r\n      Store.updateDownloadConfig('selectedFmtList',this.downloadConfig.selectedFmtList,this.course.ID);\r\n    },\r\n    isValidCourse(){\r\n      if(!this.course){\r\n        return false;\r\n      }\r\n      if(typeof this.course.ID === 'undefined'){\r\n        return false;\r\n      }\r\n      return true;\r\n    },\r\n    loadDownloadData(){\r\n      if(!this.isValidCourse()){\r\n        const appInfo = Store.getAppInfo();\r\n        // console.log(appInfo)\r\n        this.course = Store.getCourse(appInfo.lastCourseSlug);\r\n      }\r\n      Store.setAppState(1,this.course.slug);\r\n\r\n      // load exrcise file\r\n      this.exerciseFile = Store.getExerciseFile(this.course.ID);\r\n\r\n      // load download Config\r\n      this.downloadConfig = Store.getDownloadConfig(this.course.ID);\r\n    }\r\n\r\n  }\r\n})\r\n</script>\r\n\r\n<style scoped>\r\n  .form-helper{\r\n    font-size:12px;\r\n    font-style: italic;\r\n  }\r\n  .form-label{\r\n    margin-right:.25em;\r\n  }\r\n</style>\r\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "#popup {\r\n    width : 680px;\r\n/*    min-height: 480px;*/\r\n    padding: 1em 0;\r\n    border: solid 1px #ddd;\r\n}\r\n\r\n.page{\r\n  margin :0 1em;\r\n  padding: 1em;\r\n  border-radius: 4px;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.course-page .course{\r\n  margin-bottom:1em;\r\n}\r\n.course-page .course-section{\r\n  padding:.5em 0;\r\n}\r\n.course-page .accordion-button:focus {\r\n    z-index: 3;\r\n    border-color: transparent;\r\n    outline: 0;\r\n    box-shadow: none;\r\n}\r\n.course-page .accordion-button:not(.collapsed) {\r\n    color: inherit; \r\n    background-color: transparent;\r\n    box-shadow: none; \r\n}\r\n.course-page .accordion-button:not(.collapsed),\r\n.course-page .accordion-button.collapsed,\r\n.course-page .accordion-button:not(.collapsed)::after,\r\n.course-page .accordion-button.collapsed::after{\r\n  background:none;\r\n}\r\n.course-page .accordion-button.custom {\r\nposition: absolute;\r\n    width: 24px;\r\n    padding: 0px 6px;\r\n    left: 42px;\r\n    margin-top: 3px;\r\n    background: none;\r\n    font-size: 10px;\r\n }\r\n .course-page .accordion-body{\r\n  padding:0;\r\n }\r\n\r\n.welcome-page .action-cnt{\r\n  text-align:center;\r\n  padding:.5em;\r\n}\r\n.welcome-page .btn-cnt{\r\n  margin:1em;\r\n}\r\n.welcome-page{\r\n  color: red;\r\n}\r\n#popup > .app-container > .console{\r\n margin-bottom: -33px;\r\n  width: 100%;\r\n}\r\n\r\n.page-navigation ul.btn-group{\r\n  margin: 0;\r\n  padding: 0;\r\n}", "",{"version":3,"sources":["webpack://./src/styles/popup.css"],"names":[],"mappings":"AAAA;IACI,aAAa;AACjB,yBAAyB;IACrB,cAAc;IACd,sBAAsB;AAC1B;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;AACA;EACE,cAAc;AAChB;AACA;IACI,UAAU;IACV,yBAAyB;IACzB,UAAU;IACV,gBAAgB;AACpB;AACA;IACI,cAAc;IACd,6BAA6B;IAC7B,gBAAgB;AACpB;AACA;;;;EAIE,eAAe;AACjB;AACA;AACA,kBAAkB;IACd,WAAW;IACX,gBAAgB;IAChB,UAAU;IACV,eAAe;IACf,gBAAgB;IAChB,eAAe;CAClB;CACA;EACC,SAAS;CACV;;AAED;EACE,iBAAiB;EACjB,YAAY;AACd;AACA;EACE,UAAU;AACZ;AACA;EACE,UAAU;AACZ;AACA;CACC,oBAAoB;EACnB,WAAW;AACb;;AAEA;EACE,SAAS;EACT,UAAU;AACZ","sourcesContent":["#popup {\r\n    width : 680px;\r\n/*    min-height: 480px;*/\r\n    padding: 1em 0;\r\n    border: solid 1px #ddd;\r\n}\r\n\r\n.page{\r\n  margin :0 1em;\r\n  padding: 1em;\r\n  border-radius: 4px;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.course-page .course{\r\n  margin-bottom:1em;\r\n}\r\n.course-page .course-section{\r\n  padding:.5em 0;\r\n}\r\n.course-page .accordion-button:focus {\r\n    z-index: 3;\r\n    border-color: transparent;\r\n    outline: 0;\r\n    box-shadow: none;\r\n}\r\n.course-page .accordion-button:not(.collapsed) {\r\n    color: inherit; \r\n    background-color: transparent;\r\n    box-shadow: none; \r\n}\r\n.course-page .accordion-button:not(.collapsed),\r\n.course-page .accordion-button.collapsed,\r\n.course-page .accordion-button:not(.collapsed)::after,\r\n.course-page .accordion-button.collapsed::after{\r\n  background:none;\r\n}\r\n.course-page .accordion-button.custom {\r\nposition: absolute;\r\n    width: 24px;\r\n    padding: 0px 6px;\r\n    left: 42px;\r\n    margin-top: 3px;\r\n    background: none;\r\n    font-size: 10px;\r\n }\r\n .course-page .accordion-body{\r\n  padding:0;\r\n }\r\n\r\n.welcome-page .action-cnt{\r\n  text-align:center;\r\n  padding:.5em;\r\n}\r\n.welcome-page .btn-cnt{\r\n  margin:1em;\r\n}\r\n.welcome-page{\r\n  color: red;\r\n}\r\n#popup > .app-container > .console{\r\n margin-bottom: -33px;\r\n  width: 100%;\r\n}\r\n\r\n.page-navigation ul.btn-group{\r\n  margin: 0;\r\n  padding: 0;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/DownloadPage.vue?vue&type=style&index=0&id=7976c4f4&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/DownloadPage.vue?vue&type=style&index=0&id=7976c4f4&scoped=true&lang=css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_DownloadPage_vue_vue_type_style_index_0_id_7976c4f4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./DownloadPage.vue?vue&type=style&index=0&id=7976c4f4&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/DownloadPage.vue?vue&type=style&index=0&id=7976c4f4&scoped=true&lang=css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_DownloadPage_vue_vue_type_style_index_0_id_7976c4f4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_DownloadPage_vue_vue_type_style_index_0_id_7976c4f4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_DownloadPage_vue_vue_type_style_index_0_id_7976c4f4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_DownloadPage_vue_vue_type_style_index_0_id_7976c4f4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_DownloadPage_vue_vue_type_style_index_0_id_7976c4f4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./DownloadPage.vue?vue&type=style&index=0&id=7976c4f4&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/DownloadPage.vue?vue&type=style&index=0&id=7976c4f4&scoped=true&lang=css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_DownloadPage_vue_vue_type_style_index_0_id_7976c4f4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./DownloadPage.vue?vue&type=style&index=0&id=7976c4f4&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/DownloadPage.vue?vue&type=style&index=0&id=7976c4f4&scoped=true&lang=css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_DownloadPage_vue_vue_type_style_index_0_id_7976c4f4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_DownloadPage_vue_vue_type_style_index_0_id_7976c4f4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_DownloadPage_vue_vue_type_style_index_0_id_7976c4f4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_DownloadPage_vue_vue_type_style_index_0_id_7976c4f4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_DownloadPage_vue_vue_type_style_index_0_id_7976c4f4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_DownloadPage_vue_vue_type_style_index_0_id_7976c4f4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_DownloadPage_vue_vue_type_style_index_0_id_7976c4f4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_DownloadPage_vue_vue_type_style_index_0_id_7976c4f4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/* harmony import */ var _views_CoursePage_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/CoursePage.vue */ "./src/popup/views/CoursePage.vue");
/* harmony import */ var _views_DownloadPage_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/DownloadPage.vue */ "./src/popup/views/DownloadPage.vue");
/* harmony import */ var _views_AboutPage_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/AboutPage.vue */ "./src/popup/views/AboutPage.vue");
/* harmony import */ var _views_HelpPage_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/HelpPage.vue */ "./src/popup/views/HelpPage.vue");
/* harmony import */ var _libs_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../libs/store */ "./src/libs/store.ts");








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'Popup',
    components: {
        PageNavigation: _components_PageNavigation_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
        WelcomePage: _views_WelcomePage_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
        CoursePage: _views_CoursePage_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
        DownloadPage: _views_DownloadPage_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
        AboutPage: _views_AboutPage_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
        HelpPage: _views_HelpPage_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
    },
    setup() {
        const nav = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('welcome');
        const course = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();
        const onNavUpdate = (target) => {
            nav.value = target;
        };
        const onCourseUpdate = (target) => {
            console.log(target);
        };
        const message = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
        const app = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();
        return { nav, course, onNavUpdate, onCourseUpdate, message, app };
    },
    mounted() {
        console.log('App Entry Point Start here...');
        // Store.prepareAppStorage();
        setTimeout(() => {
            const db = _libs_store__WEBPACK_IMPORTED_MODULE_7__["default"].db();
            console.log(db);
            db.subscribe('app', (row) => {
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
        },
        queue: {
            required: false,
            type: Boolean
        }
    },
    setup(props) {
        const fetchQueueEnabled = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.queue);
        const toc = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.toc);
        const sectionIndex = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.sectionIndex);
        const tocIndex = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.tocIndex);
        let exerciseFile = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({ name: '', url: '' });
        const btnState = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(1);
        return { toc, sectionIndex, tocIndex, exerciseFile, btnState, fetchQueueEnabled };
    },
    methods: {
        isQueued() {
            return this.fetchQueueEnabled ? (this.$parent.checkedQueues[this.tocIndex] && this.$parent.excludeQueues.indexOf(this.tocIndex) == -1) : (this.btnState == 1 || this.btnState == 4);
        },
        fetchToc() {
            // 0. check if queues
            const isQueued = this.isQueued();
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
                        if (this.fetchQueueEnabled) {
                            console.log('Queue Complete: triggering next fetchToc from parent, lastTocIndex:', this.tocIndex);
                            this.$parent.triggerFetchQueue(this.tocIndex);
                        }
                        else {
                            // this.$parent.triggerFetchQueue(this.tocIndex);
                        }
                        // addToParent excludeQueue
                        this.$parent.triggerExcludeFetchQueue(this.tocIndex, this.fetchQueueEnabled);
                    }
                    else {
                        // 3. set btn state to icon [retry]
                        this.btnState = 4;
                        if (this.fetchQueueEnabled) {
                            this.$parent.triggerFailedFetchQueue(this.tocIndex);
                            console.log('Queue Failed: triggering fetchToc from FetchButton, lastTocIndex:', this.tocIndex);
                        }
                    }
                }, (r) => {
                    // 3. set btn state to icon [retry]
                    this.btnState = 4;
                    if (this.fetchQueueEnabled) {
                        this.$parent.triggerFailedFetchQueue(this.tocIndex);
                        console.log('Queue Failed: triggering fetchToc from FetchButton, lastTocIndex:', this.tocIndex);
                    }
                });
            }
            else {
                if (this.fetchQueueEnabled) {
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
        let queueTocIndex = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
        let excludeSlugs = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
        let percentage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
        let btnState = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(1);
        let lastTocIndex = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
        const sectionIndex = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.sectionIndex);
        return { queueTocIndex, queueSlugs, excludeSlugs, percentage, btnState, lastTocIndex, sectionIndex };
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
        const btnState = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(1);
        const percentage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
        const lastSectionIndex = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
        const sectionIndexQueues = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
        return {
            queueSlugs,
            btnState,
            percentage,
            lastSectionIndex,
            sectionIndexQueues
        };
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    components: {
        FetchButton: _components_FetchButton_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
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
        const enableQueue = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(true);
        const items = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.items);
        const sectionIndex = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.sectionIndex);
        const checkAll = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        const checkedQueues = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
        const excludeQueues = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
        const fetchQueueBar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();
        let fetchBtns = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
        return { fetchQueueBar, items, sectionIndex, checkedQueues, excludeQueues, fetchBtns, checkAll, enableQueue };
    },
    mounted() {
        this.fetchQueueBar = this.$parent.fetchQueueBar[this.sectionIndex];
        setTimeout(() => {
            this.checkAll = true;
            for (let tocIndex in this.items) {
                this.checkedQueues[tocIndex] = true;
                // const tocSlug = this.items[tocIndex].slug;
                if (!this.fetchQueueBar.queueTocIndex.includes(tocIndex)) {
                    this.fetchQueueBar.queueTocIndex.push(tocIndex);
                }
            }
        }, 250);
    },
    methods: {
        triggerFailedFetchQueue(tocIndex) {
            setTimeout(() => {
                this.fetchQueueBar.btnState = 4;
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
                        this.fetchQueueBar.setProgress(tocIndex, percentage);
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
                        this.fetchQueueBar.setProgress(tocIndex, percentage);
                    }, 500);
                });
                setTimeout(() => {
                    this.fetchQueueBar.btnState = this.fetchQueueBar.percentage == 100 ? 3 : 1;
                    this.fetchQueueBar.lastTocIndex = 0;
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
                    // const tocSlug = this.items[tocIndex].slug;
                    if (this.checkedQueues[tocIndex]) {
                        if (!this.fetchQueueBar.queueTocIndex.includes(tocIndex)) {
                            this.fetchQueueBar.queueTocIndex.push(tocIndex);
                        }
                    }
                    else {
                        const aIndex = this.fetchQueueBar.queueTocIndex.indexOf(tocIndex);
                        if (aIndex != -1) {
                            this.fetchQueueBar.queueTocIndex.splice(aIndex, 1);
                        }
                    }
                }
            }, 250);
        },
        tgQueue(tocIndex) {
            setTimeout(() => {
                // this.$refs.fetchBtns[tocIndex].isQueued =this.checkedQueues[tocIndex];
                // console.log(this.$refs.fetchBtns);
                // const tocSlug = this.items[tocIndex].slug;
                if (this.checkedQueues[tocIndex]) {
                    if (!this.fetchQueueBar.queueTocIndex.includes(tocIndex)) {
                        this.fetchQueueBar.queueTocIndex.push(tocIndex);
                    }
                }
                else {
                    const aIndex = this.fetchQueueBar.queueTocIndex.indexOf(tocIndex);
                    if (aIndex != -1) {
                        this.fetchQueueBar.queueTocIndex.splice(aIndex, 1);
                    }
                }
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
/* harmony import */ var _libs_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../libs/utils */ "./src/libs/utils.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _libs_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../libs/store */ "./src/libs/store.ts");








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    components: {
        TocItem: _components_TocItem_vue__WEBPACK_IMPORTED_MODULE_1__["default"], FetchQueueBar: _components_FetchQueueBar_vue__WEBPACK_IMPORTED_MODULE_2__["default"], FetchSectionQueue: _components_FetchSectionQueue_vue__WEBPACK_IMPORTED_MODULE_3__["default"], LogBar: _components_LogBar_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
    },
    props: {
        course: {
            required: false,
            type: Object
        }
    },
    setup(props) {
        const course = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.course);
        const authors = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
        const sections = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
        const exerciseFile = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();
        const tocItems = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
        const fetchQueueBar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
        const fetchSectionQueue = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({});
        const logBar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({});
        const courseData = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({});
        return { course, authors, sections, exerciseFile, tocItems,
            fetchQueueBar, fetchSectionQueue, logBar, courseData };
    },
    mounted() {
        this.loadCourseData();
        setTimeout(() => {
            jquery__WEBPACK_IMPORTED_MODULE_6___default()('.course-page .btn-collapse').click((evt) => {
                const el = jquery__WEBPACK_IMPORTED_MODULE_6___default()(evt.target).closest('button')[0];
                jquery__WEBPACK_IMPORTED_MODULE_6___default()(el).find('i').toggleClass('fa fa-plus fa fa-minus');
                jquery__WEBPACK_IMPORTED_MODULE_6___default()('.course-page .btn-collapse').not(el).find('i').removeClass('fa-minus').addClass('fa-plus ');
            });
        }, 50);
    },
    methods: {
        isValidCourse() {
            if (!this.course) {
                return false;
            }
            if (typeof this.course.ID === 'undefined') {
                return false;
            }
            return true;
        },
        loadCourseData() {
            // console.log(this.course)
            if (!this.isValidCourse()) {
                const appInfo = _libs_store__WEBPACK_IMPORTED_MODULE_7__["default"].getAppInfo();
                // console.log(appInfo)
                this.course = _libs_store__WEBPACK_IMPORTED_MODULE_7__["default"].getCourse(appInfo.lastCourseSlug);
            }
            _libs_store__WEBPACK_IMPORTED_MODULE_7__["default"].setAppState(1, this.course.slug);
            const sections = _libs_store__WEBPACK_IMPORTED_MODULE_7__["default"].getSectionsByCourseId(this.course.ID);
            sections.map((sectionTmp) => {
                let section = sectionTmp;
                section.items = _libs_store__WEBPACK_IMPORTED_MODULE_7__["default"].getTocsBySectionId(sectionTmp.ID);
                this.sections.push(section);
            });
            this.course.authorIds.map((ID) => {
                const author = _libs_store__WEBPACK_IMPORTED_MODULE_7__["default"].getAuthorById(ID);
                if (author) {
                    this.authors.push(author);
                }
            });
        },
        updateTocItems(exerciseFile, toc) {
            this.exerciseFile = _libs_store__WEBPACK_IMPORTED_MODULE_7__["default"].createExerciseFile(this.course.ID, exerciseFile.name, exerciseFile.url, exerciseFile.sizeInBytes);
            // console.log(exerciseFile,toc);
            // update toc caption
            _libs_store__WEBPACK_IMPORTED_MODULE_7__["default"].updateTocCaption(toc.slug, toc.captionUrl, toc.captionFmt);
            // Update or create streaming location
            _libs_store__WEBPACK_IMPORTED_MODULE_7__["default"].createStreamLocationList(toc.slug, toc.streamLocations, this.course.ID);
        },
        onTocUpdate(evt) {
            if (evt.src === 'Popup.CoursePage.TocItem.FetchButton') {
                this.updateTocItems(evt.exerciseFile, evt.toc);
            }
            this.$emit('update', evt);
        },
        makeTitle(slug) {
            return (0,_libs_utils__WEBPACK_IMPORTED_MODULE_5__.makeTitle)(slug);
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
/* harmony import */ var _libs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/store */ "./src/libs/store.ts");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    data() {
        return {
            nav: 'downloads'
        };
    },
    props: {
        course: {
            required: false,
            type: Object
        }
    },
    setup() {
        const course = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();
        const exerciseFile = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();
        const downloadConfig = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();
        return {
            course, exerciseFile, downloadConfig
        };
    },
    mounted() {
        this.loadDownloadData();
    },
    methods: {
        updateSelectedFmt() {
            _libs_store__WEBPACK_IMPORTED_MODULE_1__["default"].updateDownloadConfig('selectedFmtList', this.downloadConfig.selectedFmtList, this.course.ID);
        },
        isValidCourse() {
            if (!this.course) {
                return false;
            }
            if (typeof this.course.ID === 'undefined') {
                return false;
            }
            return true;
        },
        loadDownloadData() {
            if (!this.isValidCourse()) {
                const appInfo = _libs_store__WEBPACK_IMPORTED_MODULE_1__["default"].getAppInfo();
                // console.log(appInfo)
                this.course = _libs_store__WEBPACK_IMPORTED_MODULE_1__["default"].getCourse(appInfo.lastCourseSlug);
            }
            _libs_store__WEBPACK_IMPORTED_MODULE_1__["default"].setAppState(1, this.course.slug);
            // load exrcise file
            this.exerciseFile = _libs_store__WEBPACK_IMPORTED_MODULE_1__["default"].getExerciseFile(this.course.ID);
            // load download Config
            this.downloadConfig = _libs_store__WEBPACK_IMPORTED_MODULE_1__["default"].getDownloadConfig(this.course.ID);
        }
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

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/WelcomePage.vue?vue&type=script&lang=ts":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/WelcomePage.vue?vue&type=script&lang=ts ***!
  \****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _libs_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../libs/utils */ "./src/libs/utils.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _libs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../libs/store */ "./src/libs/store.ts");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_1__.defineComponent)({
    setup() {
        const nav = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)('welcome');
        const greeting = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)('Welcome to LLFetcher, what do you want to do ?');
        const lastCourseList = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)([]);
        const fetchBtnState = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
        return {
            nav, greeting, lastCourseList, fetchBtnState
        };
    },
    mounted() {
        // setTimeout(()=>{
        const appInfo = _libs_store__WEBPACK_IMPORTED_MODULE_2__["default"].getAppInfo();
        this.$parent.log(`AppState:${appInfo.state}`);
        const lastCourses = _libs_store__WEBPACK_IMPORTED_MODULE_2__["default"].getLastCourses();
        if (lastCourses.length > 0) {
            this.lastCourseList = [];
            lastCourses.map((course) => {
                this.lastCourseList.push(course);
            });
        }
        // },1000);
    },
    methods: {
        loadRecentCourse(course) {
            this.$parent.setCourse(course);
        },
        retrieveDataCodesFromContent() {
            this.fetchBtnState = 1;
            // send data code from content script to LS
            (0,_libs_utils__WEBPACK_IMPORTED_MODULE_0__.sendMessageSaveDataCodesToLS)();
            // load data codes from ls
            _libs_store__WEBPACK_IMPORTED_MODULE_2__["default"].getDataCodesLS((dataCodes) => {
                this.fetchBtnState = 2;
                console.log(dataCodes);
                _libs_store__WEBPACK_IMPORTED_MODULE_2__["default"].saveDataCodes(dataCodes);
                this.$parent.setCourse(dataCodes.course);
                // contentConsoleLog(dataCodes);
            });
        }
    }
}));


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/Popup.vue?vue&type=template&id=5f4bbcc0&ts=true":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/Popup.vue?vue&type=template&id=5f4bbcc0&ts=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = { class: "app-container" };
const _hoisted_2 = { class: "console" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_PageNavigation = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PageNavigation");
    const _component_WelcomePage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("WelcomePage");
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
        (_ctx.nav == 'course')
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_CoursePage, {
                key: 1,
                onUpdate: _cache[1] || (_cache[1] = ($event) => (_ctx.onCourseUpdate($event))),
                course: _ctx.course,
                ref: "coursePage"
            }, null, 8 /* PROPS */, ["course"]))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        (_ctx.nav == 'downloads')
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_DownloadPage, { key: 2 }))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        (_ctx.nav == 'help')
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_HelpPage, { key: 3 }))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        (_ctx.nav == 'about')
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_AboutPage, { key: 4 }))
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
            onClick: _cache[0] || (_cache[0] = ($event) => (_ctx.fetchToc())),
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
const _hoisted_2 = {
    key: 0,
    class: "test-data"
};
const _hoisted_3 = { class: "fetch-queue-pb" };
const _hoisted_4 = { class: "progress" };
const _hoisted_5 = ["aria-valuenow"];
const _hoisted_6 = { class: "btn-fetch-cnt" };
const _hoisted_7 = ["disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
        ( false)
            ? (0)
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
                    class: "progress-bar bg-info",
                    role: "progressbar",
                    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({ width: _ctx.percentage + '%' }),
                    "aria-valuenow": _ctx.percentage,
                    "aria-valuemin": 0,
                    "aria-valuemax": 100
                }, null, 12 /* STYLE, PROPS */, _hoisted_5)
            ], 512 /* NEED_PATCH */), [
                [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, _ctx.percentage > 0]
            ])
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({ color: _ctx.btnState == 3 ? 'white' : 'inherit' }),
                disabled: _ctx.btnState != 1 && _ctx.btnState != 4,
                onClick: _cache[0] || (_cache[0] = ($event) => (_ctx.startQueue())),
                class: "btn btn-sm btn-fetch"
            }, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
                    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["fa", { 'fa-play': _ctx.btnState == 1, 'fa-spin fa-spinner': _ctx.btnState == 2, 'fa-check': _ctx.btnState == 3, 'fa-refresh': _ctx.btnState == 4 }])
                }, null, 2 /* CLASS */)
            ], 12 /* STYLE, PROPS */, _hoisted_7)
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
        ])
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
                onClick: _cache[1] || (_cache[1] = ($event) => (_ctx.onNavClick('course'))),
                class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["btn btn-sm btn-primary", { active: _ctx.nav == 'course' }])
            }, "Course", 2 /* CLASS */),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
                onClick: _cache[2] || (_cache[2] = ($event) => (_ctx.onNavClick('downloads'))),
                class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["btn btn-sm btn-primary", { active: _ctx.nav == 'downloads' }])
            }, "Downloads", 2 /* CLASS */),
            ( false)
                ? (0)
                : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
            ( false)
                ? (0)
                : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
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
const _hoisted_4 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)();
const _hoisted_5 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", { style: { "padding-left": ".5em" } }, "Check All", -1 /* HOISTED */));
const _hoisted_6 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, null, -1 /* HOISTED */));
const _hoisted_7 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    class: "text-center",
    style: { "width": "80px" }
}, null, -1 /* HOISTED */));
const _hoisted_8 = { class: "fcc" };
const _hoisted_9 = ["onClick", "onUpdate:modelValue"];
const _hoisted_10 = { style: { "padding-left": ".5em" } };
const _hoisted_11 = {
    colspan: "2",
    style: { "text-align": "right" }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_FetchButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("FetchButton");
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
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
                            _hoisted_4,
                            _hoisted_5
                        ])
                    ]),
                    _hoisted_6,
                    _hoisted_7
                ])
            ]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [
                ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.items, (toc, tocIndex) => {
                    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
                        class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["toc-item", { ods: tocIndex % 2 == 0 }]),
                        key: tocIndex
                    }, [
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_8, [
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                onClick: ($event) => (_ctx.tgQueue(tocIndex)),
                                class: "form-check-input",
                                type: "checkbox",
                                "onUpdate:modelValue": ($event) => ((_ctx.checkedQueues[tocIndex]) = $event)
                            }, null, 8 /* PROPS */, _hoisted_9), [
                                [vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, _ctx.checkedQueues[tocIndex]]
                            ])
                        ]),
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(toc.title), 1 /* TEXT */),
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_11, [
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FetchButton, {
                                onUpdate: _cache[2] || (_cache[2] = ($event) => (_ctx.onFetchUpdate($event))),
                                sectionIndex: _ctx.sectionIndex,
                                tocIndex: tocIndex,
                                toc: toc,
                                queue: _ctx.enableQueue,
                                ref_for: true,
                                ref: "fetchBtns"
                            }, null, 8 /* PROPS */, ["sectionIndex", "tocIndex", "toc", "queue"])
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
const _hoisted_2 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" version ");
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
        _hoisted_2,
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.app.version), 1 /* TEXT */)
    ]));
}


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/CoursePage.vue?vue&type=template&id=6c17fec7&ts=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/CoursePage.vue?vue&type=template&id=6c17fec7&ts=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = { class: "course-page page" };
const _hoisted_2 = { class: "fsqc" };
const _hoisted_3 = {
    key: 0,
    class: "course"
};
const _hoisted_4 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", { class: "fa fa-bookmark" }, null, -1 /* HOISTED */);
const _hoisted_5 = {
    class: "accordion accordion-flush",
    id: "accordionCourse"
};
const _hoisted_6 = ["id"];
const _hoisted_7 = { class: "row course-section" };
const _hoisted_8 = ["data-bs-target", "aria-controls"];
const _hoisted_9 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", { class: "fa fa-plus" }, null, -1 /* HOISTED */);
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
        (_ctx.course)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, [
                    _hoisted_4,
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.course.title) + " by ", 1 /* TEXT */),
                    ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.authors, (author) => {
                        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.makeTitle(author.slug)), 1 /* TEXT */));
                    }), 256 /* UNKEYED_FRAGMENT */))
                ])
            ]))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
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

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/DownloadPage.vue?vue&type=template&id=7976c4f4&scoped=true&ts=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/DownloadPage.vue?vue&type=template&id=7976c4f4&scoped=true&ts=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-7976c4f4"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);
const _hoisted_1 = { class: "download-page page" };
const _hoisted_2 = {
    key: 0,
    class: "dl-cnt text-center"
};
const _hoisted_3 = {
    key: 0,
    class: "exercise-file-cnt"
};
const _hoisted_4 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", { class: "form-label" }, "Exercise File: ", -1 /* HOISTED */));
const _hoisted_5 = ["href"];
const _hoisted_6 = {
    key: 1,
    class: "dl-config-cnt"
};
const _hoisted_7 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", { class: "form-label" }, "Set video output format : ", -1 /* HOISTED */));
const _hoisted_8 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", { value: "" }, "--Choose--", -1 /* HOISTED */));
const _hoisted_9 = ["value"];
const _hoisted_10 = { class: "form-helper" };
const _hoisted_11 = {
    key: 2,
    class: "dl-playlist-cnt"
};
const _hoisted_12 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", { class: "form-label" }, "Playlist File : ", -1 /* HOISTED */));
const _hoisted_13 = { href: "javascript:;" };
const _hoisted_14 = {
    key: 3,
    class: "dl-playlist-cnt"
};
const _hoisted_15 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", { class: "form-label" }, "Helper Script : ", -1 /* HOISTED */));
const _hoisted_16 = { href: "javascript:;" };
const _hoisted_17 = {
    key: 4,
    class: "exercise-file-cnt"
};
const _hoisted_18 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", { class: "form-label" }, "Source Repository : ", -1 /* HOISTED */));
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
        (_ctx.course)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [
                (_ctx.exerciseFile)
                    ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [
                            _hoisted_4,
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
                                href: _ctx.exerciseFile.url,
                                target: "_blank"
                            }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.exerciseFile.name), 9 /* TEXT, PROPS */, _hoisted_5)
                        ])
                    ]))
                    : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
                (_ctx.downloadConfig)
                    ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, [
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [
                            _hoisted_7,
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
                                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => ((_ctx.downloadConfig.selectedFmtList) = $event)),
                                class: "form-control",
                                onChange: _cache[1] || (_cache[1] = ($event) => (_ctx.updateSelectedFmt())),
                                style: { "width": "120px", "display": "inline" }
                            }, [
                                _hoisted_8,
                                ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.downloadConfig.fmtList, (fmt) => {
                                    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", { value: fmt }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(fmt), 9 /* TEXT, PROPS */, _hoisted_9));
                                }), 256 /* UNKEYED_FRAGMENT */))
                            ], 544 /* HYDRATE_EVENTS, NEED_PATCH */), [
                                [vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, _ctx.downloadConfig.selectedFmtList]
                            ])
                        ]),
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_10, "Available video format: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.downloadConfig.fmtList.join(', ')), 1 /* TEXT */)
                    ]))
                    : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
                (_ctx.downloadConfig.selectedFmtList)
                    ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_11, [
                        _hoisted_12,
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.course.slug) + "-" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.downloadConfig.selectedFmtList) + ".m3u", 1 /* TEXT */)
                    ]))
                    : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
                (_ctx.downloadConfig.selectedFmtList)
                    ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_14, [
                        _hoisted_15,
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.course.slug) + "-" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.downloadConfig.selectedFmtList) + "-util.sh", 1 /* TEXT */)
                    ]))
                    : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
                (_ctx.course.sourceCodeRepository)
                    ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_17, [
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [
                            _hoisted_18,
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.course.sourceCodeRepository), 1 /* TEXT */)
                        ])
                    ]))
                    : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
            ]))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
    ]));
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
const _hoisted_2 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" HELP ");
const _hoisted_3 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", { class: "fa fa-sync" }, null, -1 /* HOISTED */);
const _hoisted_4 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Sync LS");
const _hoisted_5 = [
    _hoisted_3,
    _hoisted_4
];
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
        _hoisted_2,
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                class: "btn btn-danger",
                onClick: _cache[0] || (_cache[0] = ($event) => (_ctx.syncLS()))
            }, _hoisted_5)
        ])
    ]));
}


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/WelcomePage.vue?vue&type=template&id=62aa4038&ts=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/WelcomePage.vue?vue&type=template&id=62aa4038&ts=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = { class: "welcome-page page" };
const _hoisted_2 = { class: "text-center" };
const _hoisted_3 = { class: "action-cnt" };
const _hoisted_4 = {
    key: 0,
    class: "dropdown"
};
const _hoisted_5 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    class: "btn btn-secondary dropdown-toggle",
    type: "button",
    id: "recentCourseButton",
    "data-bs-toggle": "dropdown",
    "aria-expanded": "false"
}, [
    /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", { class: "fa fa-history" }),
    /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Load Recent Course ")
], -1 /* HOISTED */);
const _hoisted_6 = {
    class: "dropdown-menu",
    "aria-labelledby": "recentCourseButton"
};
const _hoisted_7 = ["onClick"];
const _hoisted_8 = { class: "btn-cnt" };
const _hoisted_9 = ["disabled"];
const _hoisted_10 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Fetch This Course");
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.greeting), 1 /* TEXT */),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
            (_ctx.lastCourseList.length > 0)
                ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, [
                    _hoisted_5,
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_6, [
                        ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.lastCourseList, (course) => {
                            return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", null, [
                                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
                                    class: "dropdown-item",
                                    href: "javascript:;",
                                    onClick: ($event) => (_ctx.loadRecentCourse(course))
                                }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(course.title), 9 /* TEXT, PROPS */, _hoisted_7)
                            ]));
                        }), 256 /* UNKEYED_FRAGMENT */))
                    ])
                ]))
                : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                    disabled: _ctx.fetchBtnState == 1,
                    class: "btn btn-primary",
                    onClick: _cache[0] || (_cache[0] = ($event) => (_ctx.retrieveDataCodesFromContent()))
                }, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
                        class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["fa", { 'fa-hand-o-right': _ctx.fetchBtnState == 0, 'fa-spin fa-spinner': _ctx.fetchBtnState == 1, 'fa-refresh': _ctx.fetchBtnState == 2 }])
                    }, null, 2 /* CLASS */),
                    _hoisted_10
                ], 8 /* PROPS */, _hoisted_9)
            ])
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

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
    tableExists(table) {
        return this.db.tableExists(table);
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
                if (!db.tableExists(table)) {
                    db.createTable(table, schema[table]);
                }
            });
            db.commit();
        }
    }
    static getExerciseFile(courseId) {
        const db = Store.db();
        const results = db.queryAll('exerciseFile', { query: { courseId } });
        if (results.length > 0) {
            return results[0];
        }
        return null;
    }
    static getCourse(slug) {
        const db = Store.db();
        const results = db.queryAll('course', { query: { slug } });
        if (results.length > 0) {
            return results[0];
        }
        return null;
    }
    static getLastCourses(slug) {
        const db = Store.db();
        if (typeof slug === 'undefined') {
            const appState = Store.getAppState();
            slug = appState.lastCourseSlug;
        }
        const results = db.queryAll('course', { query: (row) => {
                if (row.slug !== slug) {
                    return true;
                }
            }
        });
        return results;
    }
    static getCourseById(ID) {
        const db = Store.db();
        const results = db.queryAll('course', { query: { ID } });
        if (results.length > 0) {
            return results[0];
        }
        return null;
    }
    static getSection(slug, courseId) {
        const db = Store.db();
        const results = db.queryAll('section', { query: { slug, courseId } });
        if (results.length > 0) {
            return results[0];
        }
        return null;
    }
    static getSectionsByCourseId(courseId) {
        const db = Store.db();
        const results = db.queryAll('section', { query: { courseId } });
        return results;
    }
    static getTocsBySectionId(sectionId) {
        const db = Store.db();
        const results = db.queryAll('toc', { query: { sectionId } });
        return results;
    }
    static getToc(slug) {
        const db = Store.db();
        const results = db.queryAll('toc', { query: { slug } });
        if (results.length > 0) {
            return results[0];
        }
        return null;
    }
    static getAuthor(slug) {
        const db = Store.db();
        const results = db.queryAll('author', { query: { slug } });
        if (results.length > 0) {
            return results[0];
        }
        return null;
    }
    static getAuthorById(ID) {
        const db = Store.db();
        const results = db.queryAll('author', { query: { ID } });
        if (results.length > 0) {
            return results[0];
        }
        return null;
    }
    static getDownloadConfig(courseId) {
        const db = Store.db();
        const results = db.queryAll('downloadConfig', { query: { courseId } });
        if (results.length > 0) {
            return results[0];
        }
        return null;
    }
    static createAuthor(name, slug, biography, shortBiography, courseId) {
        const db = Store.db();
        let author = Store.getAuthor(slug);
        if (author) {
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
        const course = Store.getCourse(courseSlug);
        const authorResults = [];
        if (course) {
            let authorIds = course.authorIds;
            authors.map((authorTmp) => {
                console.log(authorTmp);
                const name = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.makeTitle)(authorTmp.slug);
                const author = Store.createAuthor(name, authorTmp.slug, authorTmp.biography, authorTmp.shortBiography, course.ID);
                if (!authorIds.includes(author.ID)) {
                    authorIds.push(author.ID);
                }
                authorResults.push(author);
            });
            db.update('course', { slug: courseSlug }, (row) => {
                row.authorIds = authorIds;
                return row;
            });
            db.commit();
        }
        return authorResults;
    }
    static updateTocCaption(slug, captionUrl, captionFmt) {
        const db = Store.db();
        const toc = Store.getToc(slug);
        if (toc) {
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
        const results = db.queryAll('streamLocation', { query: { tocId, fmt } });
        if (results.length > 0) {
            return results[0];
        }
        return null;
    }
    static getStreamLocations(tocId) {
        const db = Store.db();
        const results = db.queryAll('streamLocation', { query: { tocId } });
        return results;
    }
    static createStreamLocation(tocId, fmt, url) {
        const db = Store.db();
        let streamLocation = Store.getStreamLocation(tocId, fmt);
        if (streamLocation) {
            streamLocation.url = url;
            db.update('streamLocation', (row) => {
                row.url = url;
                return row;
            });
        }
        else {
            const ID = 0;
            streamLocation = { ID, tocId, fmt, url };
            streamLocation.ID = db.insert('streamLocation', streamLocation);
        }
        setTimeout(() => db.commit(), 100);
        return streamLocation;
    }
    static updateDownloadConfig(fieldName, data, courseId) {
        const db = Store.db();
        let downloadConfig = Store.getDownloadConfig(courseId);
        if (downloadConfig) {
            db.update('downloadConfig', { courseId }, (row) => {
                row[fieldName] = data;
                return row;
            });
        }
        else {
            const ID = 0;
            const fmtList = [];
            const selectedFmtList = '';
            downloadConfig = { ID, courseId, fmtList, selectedFmtList };
            downloadConfig[fieldName] = data;
            downloadConfig.ID = db.insert('downloadConfig', downloadConfig);
        }
        setTimeout(() => db.commit(), 100);
        return downloadConfig;
    }
    static createStreamLocationList(slug, streamLocations, courseId) {
        const db = Store.db();
        const toc = Store.getToc(slug);
        const streamLocationResults = [];
        const fmtList = [];
        if (toc) {
            const streamLocationIds = toc.streamLocationIds;
            streamLocations.map((streamLocation) => {
                // console.log(streamLocation);
                if (!fmtList.includes(streamLocation.fmt)) {
                    fmtList.push(streamLocation.fmt);
                }
                const streamLoc = Store.createStreamLocation(toc.ID, streamLocation.fmt, streamLocation.url);
                if (!streamLocationIds.includes(streamLoc.ID)) {
                    streamLocationIds.push(streamLoc.ID);
                }
                streamLocationResults.push(streamLoc);
            });
            db.update('toc', { slug }, (row) => {
                row.streamLocationIds = streamLocationIds;
                return row;
            });
            db.commit();
            if (courseId) {
                Store.updateDownloadConfig('fmtList', fmtList, courseId);
            }
        }
        return streamLocationResults;
    }
    static createExerciseFile(courseId, name, url, size) {
        const db = Store.db();
        let exerciseFile = Store.getExerciseFile(courseId);
        if (!exerciseFile) {
            const ID = 0;
            exerciseFile = { ID, courseId, name, url, size };
            exerciseFile.ID = db.insert('exerciseFile', exerciseFile);
            db.commit();
        }
        return exerciseFile;
    }
    static createSection(courseId, title) {
        const db = Store.db();
        const slug = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.makeSlug)(title);
        let section = Store.getSection(slug, courseId);
        if (!section) {
            const ID = 0;
            section = { ID, courseId, title, slug };
            section.ID = db.insert('section', section);
            db.commit();
        }
        return section;
    }
    static createToc(sectionId, title, slug, url, duration, captionUrl, captionFmt) {
        const db = Store.db();
        let toc = Store.getToc(slug);
        if (!toc) {
            const ID = 0;
            const streamLocationIds = [];
            toc = { ID, sectionId, title, slug, url, duration, captionUrl, captionFmt, streamLocationIds };
            toc.ID = db.insert('toc', toc);
            db.commit();
        }
        return toc;
    }
    static createCourse(title, slug, duration, sourceCodeRepository, description) {
        const db = Store.db();
        let course = Store.getCourse(slug);
        if (!course) {
            const ID = 0;
            const authorIds = [];
            course = { ID, title, slug, duration, sourceCodeRepository, description, authorIds };
            course.ID = db.insert('course', course);
            db.commit();
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
        const version = '1.0';
        const apps = db.queryAll('app', { version });
        let app = null;
        if (apps.length > 0) {
            app = apps[0];
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
Store.prepareAppStorage();
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
/* harmony import */ var _Popup_vue_vue_type_template_id_5f4bbcc0_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.vue?vue&type=template&id=5f4bbcc0&ts=true */ "./src/popup/Popup.vue?vue&type=template&id=5f4bbcc0&ts=true");
/* harmony import */ var _Popup_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Popup.vue?vue&type=script&lang=ts */ "./src/popup/Popup.vue?vue&type=script&lang=ts");
/* harmony import */ var _Users_damar_Desktop_LLFetcher_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_damar_Desktop_LLFetcher_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Popup_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Popup_vue_vue_type_template_id_5f4bbcc0_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/popup/Popup.vue"]])
/* hot reload */
if (true) {
  __exports__.__hmrId = "5f4bbcc0"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('5f4bbcc0', __exports__)) {
    api.reload('5f4bbcc0', __exports__)
  }
  
  module.hot.accept(/*! ./Popup.vue?vue&type=template&id=5f4bbcc0&ts=true */ "./src/popup/Popup.vue?vue&type=template&id=5f4bbcc0&ts=true", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _Popup_vue_vue_type_template_id_5f4bbcc0_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.vue?vue&type=template&id=5f4bbcc0&ts=true */ "./src/popup/Popup.vue?vue&type=template&id=5f4bbcc0&ts=true");
(() => {
    api.rerender('5f4bbcc0', _Popup_vue_vue_type_template_id_5f4bbcc0_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
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
/* harmony import */ var _Users_damar_Desktop_LLFetcher_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_damar_Desktop_LLFetcher_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_FetchButton_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_FetchButton_vue_vue_type_template_id_bc2b9de2_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/popup/components/FetchButton.vue"]])
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
/* harmony import */ var _Users_damar_Desktop_LLFetcher_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_Users_damar_Desktop_LLFetcher_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_FetchQueueBar_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_FetchQueueBar_vue_vue_type_template_id_905aec42_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-905aec42"],['__file',"src/popup/components/FetchQueueBar.vue"]])
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
/* harmony import */ var _Users_damar_Desktop_LLFetcher_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_Users_damar_Desktop_LLFetcher_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_FetchSectionQueue_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_FetchSectionQueue_vue_vue_type_template_id_6afda649_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-6afda649"],['__file',"src/popup/components/FetchSectionQueue.vue"]])
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
/* harmony import */ var _Users_damar_Desktop_LLFetcher_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_Users_damar_Desktop_LLFetcher_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_LogBar_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_LogBar_vue_vue_type_template_id_5c8a287c_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-5c8a287c"],['__file',"src/popup/components/LogBar.vue"]])
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
/* harmony import */ var _Users_damar_Desktop_LLFetcher_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_damar_Desktop_LLFetcher_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_PageNavigation_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PageNavigation_vue_vue_type_template_id_fbb75d60_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/popup/components/PageNavigation.vue"]])
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
/* harmony import */ var _Users_damar_Desktop_LLFetcher_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_Users_damar_Desktop_LLFetcher_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_TocItem_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_TocItem_vue_vue_type_template_id_3c3574fe_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-3c3574fe"],['__file',"src/popup/components/TocItem.vue"]])
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
/* harmony import */ var _Users_damar_Desktop_LLFetcher_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_damar_Desktop_LLFetcher_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_AboutPage_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AboutPage_vue_vue_type_template_id_4230ffcf_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/popup/views/AboutPage.vue"]])
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
/* harmony import */ var _CoursePage_vue_vue_type_template_id_6c17fec7_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CoursePage.vue?vue&type=template&id=6c17fec7&ts=true */ "./src/popup/views/CoursePage.vue?vue&type=template&id=6c17fec7&ts=true");
/* harmony import */ var _CoursePage_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CoursePage.vue?vue&type=script&lang=ts */ "./src/popup/views/CoursePage.vue?vue&type=script&lang=ts");
/* harmony import */ var _Users_damar_Desktop_LLFetcher_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_damar_Desktop_LLFetcher_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_CoursePage_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CoursePage_vue_vue_type_template_id_6c17fec7_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/popup/views/CoursePage.vue"]])
/* hot reload */
if (true) {
  __exports__.__hmrId = "6c17fec7"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('6c17fec7', __exports__)) {
    api.reload('6c17fec7', __exports__)
  }
  
  module.hot.accept(/*! ./CoursePage.vue?vue&type=template&id=6c17fec7&ts=true */ "./src/popup/views/CoursePage.vue?vue&type=template&id=6c17fec7&ts=true", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _CoursePage_vue_vue_type_template_id_6c17fec7_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CoursePage.vue?vue&type=template&id=6c17fec7&ts=true */ "./src/popup/views/CoursePage.vue?vue&type=template&id=6c17fec7&ts=true");
(() => {
    api.rerender('6c17fec7', _CoursePage_vue_vue_type_template_id_6c17fec7_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
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
/* harmony import */ var _DownloadPage_vue_vue_type_template_id_7976c4f4_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DownloadPage.vue?vue&type=template&id=7976c4f4&scoped=true&ts=true */ "./src/popup/views/DownloadPage.vue?vue&type=template&id=7976c4f4&scoped=true&ts=true");
/* harmony import */ var _DownloadPage_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DownloadPage.vue?vue&type=script&lang=ts */ "./src/popup/views/DownloadPage.vue?vue&type=script&lang=ts");
/* harmony import */ var _DownloadPage_vue_vue_type_style_index_0_id_7976c4f4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DownloadPage.vue?vue&type=style&index=0&id=7976c4f4&scoped=true&lang=css */ "./src/popup/views/DownloadPage.vue?vue&type=style&index=0&id=7976c4f4&scoped=true&lang=css");
/* harmony import */ var _Users_damar_Desktop_LLFetcher_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_Users_damar_Desktop_LLFetcher_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_DownloadPage_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_DownloadPage_vue_vue_type_template_id_7976c4f4_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-7976c4f4"],['__file',"src/popup/views/DownloadPage.vue"]])
/* hot reload */
if (true) {
  __exports__.__hmrId = "7976c4f4"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('7976c4f4', __exports__)) {
    api.reload('7976c4f4', __exports__)
  }
  
  module.hot.accept(/*! ./DownloadPage.vue?vue&type=template&id=7976c4f4&scoped=true&ts=true */ "./src/popup/views/DownloadPage.vue?vue&type=template&id=7976c4f4&scoped=true&ts=true", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _DownloadPage_vue_vue_type_template_id_7976c4f4_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DownloadPage.vue?vue&type=template&id=7976c4f4&scoped=true&ts=true */ "./src/popup/views/DownloadPage.vue?vue&type=template&id=7976c4f4&scoped=true&ts=true");
(() => {
    api.rerender('7976c4f4', _DownloadPage_vue_vue_type_template_id_7976c4f4_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
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
/* harmony import */ var _Users_damar_Desktop_LLFetcher_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_damar_Desktop_LLFetcher_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_HelpPage_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_HelpPage_vue_vue_type_template_id_0d5c1d2d_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/popup/views/HelpPage.vue"]])
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

/***/ "./src/popup/views/WelcomePage.vue":
/*!*****************************************!*\
  !*** ./src/popup/views/WelcomePage.vue ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _WelcomePage_vue_vue_type_template_id_62aa4038_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WelcomePage.vue?vue&type=template&id=62aa4038&ts=true */ "./src/popup/views/WelcomePage.vue?vue&type=template&id=62aa4038&ts=true");
/* harmony import */ var _WelcomePage_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WelcomePage.vue?vue&type=script&lang=ts */ "./src/popup/views/WelcomePage.vue?vue&type=script&lang=ts");
/* harmony import */ var _Users_damar_Desktop_LLFetcher_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_damar_Desktop_LLFetcher_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_WelcomePage_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_WelcomePage_vue_vue_type_template_id_62aa4038_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/popup/views/WelcomePage.vue"]])
/* hot reload */
if (true) {
  __exports__.__hmrId = "62aa4038"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('62aa4038', __exports__)) {
    api.reload('62aa4038', __exports__)
  }
  
  module.hot.accept(/*! ./WelcomePage.vue?vue&type=template&id=62aa4038&ts=true */ "./src/popup/views/WelcomePage.vue?vue&type=template&id=62aa4038&ts=true", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _WelcomePage_vue_vue_type_template_id_62aa4038_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WelcomePage.vue?vue&type=template&id=62aa4038&ts=true */ "./src/popup/views/WelcomePage.vue?vue&type=template&id=62aa4038&ts=true");
(() => {
    api.rerender('62aa4038', _WelcomePage_vue_vue_type_template_id_62aa4038_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); })

}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

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

/***/ "./src/popup/views/DownloadPage.vue?vue&type=style&index=0&id=7976c4f4&scoped=true&lang=css":
/*!**************************************************************************************************!*\
  !*** ./src/popup/views/DownloadPage.vue?vue&type=style&index=0&id=7976c4f4&scoped=true&lang=css ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_DownloadPage_vue_vue_type_style_index_0_id_7976c4f4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./DownloadPage.vue?vue&type=style&index=0&id=7976c4f4&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/DownloadPage.vue?vue&type=style&index=0&id=7976c4f4&scoped=true&lang=css");


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

/***/ "./src/popup/Popup.vue?vue&type=template&id=5f4bbcc0&ts=true":
/*!*******************************************************************!*\
  !*** ./src/popup/Popup.vue?vue&type=template&id=5f4bbcc0&ts=true ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_Popup_vue_vue_type_template_id_5f4bbcc0_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_Popup_vue_vue_type_template_id_5f4bbcc0_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./Popup.vue?vue&type=template&id=5f4bbcc0&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/Popup.vue?vue&type=template&id=5f4bbcc0&ts=true");


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

/***/ "./src/popup/views/CoursePage.vue?vue&type=template&id=6c17fec7&ts=true":
/*!******************************************************************************!*\
  !*** ./src/popup/views/CoursePage.vue?vue&type=template&id=6c17fec7&ts=true ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_CoursePage_vue_vue_type_template_id_6c17fec7_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_CoursePage_vue_vue_type_template_id_6c17fec7_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./CoursePage.vue?vue&type=template&id=6c17fec7&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/CoursePage.vue?vue&type=template&id=6c17fec7&ts=true");


/***/ }),

/***/ "./src/popup/views/DownloadPage.vue?vue&type=template&id=7976c4f4&scoped=true&ts=true":
/*!********************************************************************************************!*\
  !*** ./src/popup/views/DownloadPage.vue?vue&type=template&id=7976c4f4&scoped=true&ts=true ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_DownloadPage_vue_vue_type_template_id_7976c4f4_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_DownloadPage_vue_vue_type_template_id_7976c4f4_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./DownloadPage.vue?vue&type=template&id=7976c4f4&scoped=true&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/DownloadPage.vue?vue&type=template&id=7976c4f4&scoped=true&ts=true");


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

/***/ "./src/popup/views/WelcomePage.vue?vue&type=template&id=62aa4038&ts=true":
/*!*******************************************************************************!*\
  !*** ./src/popup/views/WelcomePage.vue?vue&type=template&id=62aa4038&ts=true ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_WelcomePage_vue_vue_type_template_id_62aa4038_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_8_use_0_WelcomePage_vue_vue_type_template_id_62aa4038_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./WelcomePage.vue?vue&type=template&id=62aa4038&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/popup/views/WelcomePage.vue?vue&type=template&id=62aa4038&ts=true");


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
/******/ 		__webpack_require__.h = () => ("52a19a634baaf42dca9f")
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
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_bootstrap_dist_js_bootstrap_js-node_modules_jquery_dist_jquery_js-node_m-86610f"], () => (__webpack_require__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=9000&pathname=%2Fws&logging=info&overlay=true&reconnect=10&hot=true&live-reload=true")))
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_bootstrap_dist_js_bootstrap_js-node_modules_jquery_dist_jquery_js-node_m-86610f"], () => (__webpack_require__("./node_modules/webpack/hot/dev-server.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_bootstrap_dist_js_bootstrap_js-node_modules_jquery_dist_jquery_js-node_m-86610f"], () => (__webpack_require__("./src/popup/popup.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxFQUFFOztXQUVGO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxJQUFJO1dBQ0o7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQSxJQUFJO1dBQ0o7O1dBRUE7V0FDQTtXQUNBLEdBQUc7V0FDSCxFQUFFO1dBQ0Y7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsSUFBSTtXQUNKLEdBQUc7V0FDSDtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NyWUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxtQkFBbUIsMkJBQTJCO1dBQzlDO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBLGtCQUFrQixjQUFjO1dBQ2hDO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQSxjQUFjLE1BQU07V0FDcEI7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxjQUFjLGFBQWE7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQSxpQkFBaUIsNEJBQTRCO1dBQzdDO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxJQUFJO1dBQ0o7V0FDQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLElBQUk7V0FDSjs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7V0FDQTtXQUNBLGdCQUFnQiw0QkFBNEI7V0FDNUM7V0FDQTtXQUNBOztXQUVBO1dBQ0E7O1dBRUE7V0FDQTs7V0FFQTtXQUNBOztXQUVBO1dBQ0EsZ0JBQWdCLDRCQUE0QjtXQUM1QztXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrQkFBa0IsdUNBQXVDO1dBQ3pEO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0EsbUJBQW1CLGlDQUFpQztXQUNwRDtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esc0JBQXNCLHVDQUF1QztXQUM3RDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxzQkFBc0Isc0JBQXNCO1dBQzVDO1dBQ0E7V0FDQSxTQUFTO1dBQ1Q7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLFdBQVc7V0FDWCxXQUFXO1dBQ1g7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxZQUFZO1dBQ1o7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsVUFBVTtXQUNWO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLFdBQVc7V0FDWDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBLG1CQUFtQix3Q0FBd0M7V0FDM0Q7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNO1dBQ047V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLFFBQVE7V0FDUixRQUFRO1dBQ1I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsU0FBUztXQUNUO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE9BQU87V0FDUDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsUUFBUTtXQUNSO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFLElBQUk7V0FDTjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsSUFBSTtXQUNKO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0Esc0NBQXNDO1dBQ3RDO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1dDemhCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9saWJzL3V0aWxzLmpzIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC9jb21wb25lbnRzL0ZldGNoUXVldWVCYXIudnVlPzZhZjIiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL2NvbXBvbmVudHMvRmV0Y2hTZWN0aW9uUXVldWUudnVlPzJjNGMiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL2NvbXBvbmVudHMvTG9nQmFyLnZ1ZT80Mzg5Iiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC9jb21wb25lbnRzL1RvY0l0ZW0udnVlPzQzM2QiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL3ZpZXdzL0Rvd25sb2FkUGFnZS52dWU/YjhhMyIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvc3R5bGVzL3BvcHVwLmNzcyIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvY29tcG9uZW50cy9GZXRjaFF1ZXVlQmFyLnZ1ZT82MjBkIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC9jb21wb25lbnRzL0ZldGNoU2VjdGlvblF1ZXVlLnZ1ZT9lZDkzIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC9jb21wb25lbnRzL0xvZ0Jhci52dWU/NGZkZiIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvY29tcG9uZW50cy9Ub2NJdGVtLnZ1ZT9iYmExIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC92aWV3cy9Eb3dubG9hZFBhZ2UudnVlPzdkNGYiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3N0eWxlcy9wb3B1cC5jc3M/NTFlMCIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvUG9wdXAudnVlP2NiMWYiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL2NvbXBvbmVudHMvRmV0Y2hCdXR0b24udnVlP2YxNmQiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL2NvbXBvbmVudHMvRmV0Y2hRdWV1ZUJhci52dWU/YjNjYyIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvY29tcG9uZW50cy9GZXRjaFNlY3Rpb25RdWV1ZS52dWU/NWVkOCIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvY29tcG9uZW50cy9Mb2dCYXIudnVlPzBmMGUiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL2NvbXBvbmVudHMvUGFnZU5hdmlnYXRpb24udnVlPzIyM2QiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL2NvbXBvbmVudHMvVG9jSXRlbS52dWU/ZTdmMCIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvdmlld3MvQWJvdXRQYWdlLnZ1ZT8zNWEyIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC92aWV3cy9Db3Vyc2VQYWdlLnZ1ZT82ZmM4Iiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC92aWV3cy9Eb3dubG9hZFBhZ2UudnVlP2FhYjciLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL3ZpZXdzL0hlbHBQYWdlLnZ1ZT80NjgzIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC92aWV3cy9XZWxjb21lUGFnZS52dWU/ZjY4OCIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvUG9wdXAudnVlP2M1NWYiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL2NvbXBvbmVudHMvRmV0Y2hCdXR0b24udnVlP2IyYTkiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL2NvbXBvbmVudHMvRmV0Y2hRdWV1ZUJhci52dWU/NGJjMCIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvY29tcG9uZW50cy9GZXRjaFNlY3Rpb25RdWV1ZS52dWU/ZGM4OCIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvY29tcG9uZW50cy9Mb2dCYXIudnVlP2Y0ZDEiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL2NvbXBvbmVudHMvUGFnZU5hdmlnYXRpb24udnVlP2ExNzgiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL2NvbXBvbmVudHMvVG9jSXRlbS52dWU/NDc3OCIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvdmlld3MvQWJvdXRQYWdlLnZ1ZT80YjU4Iiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC92aWV3cy9Db3Vyc2VQYWdlLnZ1ZT9iMjQyIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC92aWV3cy9Eb3dubG9hZFBhZ2UudnVlP2M3MGIiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL3ZpZXdzL0hlbHBQYWdlLnZ1ZT85Mjk3Iiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC92aWV3cy9XZWxjb21lUGFnZS52dWU/ZjQ3MyIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvbGlicy9wcm94eS50cyIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvbGlicy9zdG9yZS50cyIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvcG9wdXAudHMiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL1BvcHVwLnZ1ZSIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvY29tcG9uZW50cy9GZXRjaEJ1dHRvbi52dWUiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL2NvbXBvbmVudHMvRmV0Y2hRdWV1ZUJhci52dWUiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL2NvbXBvbmVudHMvRmV0Y2hTZWN0aW9uUXVldWUudnVlIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC9jb21wb25lbnRzL0xvZ0Jhci52dWUiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL2NvbXBvbmVudHMvUGFnZU5hdmlnYXRpb24udnVlIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC9jb21wb25lbnRzL1RvY0l0ZW0udnVlIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC92aWV3cy9BYm91dFBhZ2UudnVlIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC92aWV3cy9Db3Vyc2VQYWdlLnZ1ZSIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvdmlld3MvRG93bmxvYWRQYWdlLnZ1ZSIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvdmlld3MvSGVscFBhZ2UudnVlIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC92aWV3cy9XZWxjb21lUGFnZS52dWUiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL1BvcHVwLnZ1ZT9lMDEwIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC9jb21wb25lbnRzL0ZldGNoQnV0dG9uLnZ1ZT81NTFmIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC9jb21wb25lbnRzL0ZldGNoUXVldWVCYXIudnVlP2NhOTMiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL2NvbXBvbmVudHMvRmV0Y2hTZWN0aW9uUXVldWUudnVlP2ZmNDIiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL2NvbXBvbmVudHMvTG9nQmFyLnZ1ZT85M2M5Iiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC9jb21wb25lbnRzL1BhZ2VOYXZpZ2F0aW9uLnZ1ZT8yMWQxIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC9jb21wb25lbnRzL1RvY0l0ZW0udnVlP2YwZjciLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL3ZpZXdzL0Fib3V0UGFnZS52dWU/NWY3YiIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvdmlld3MvQ291cnNlUGFnZS52dWU/ZWU3NiIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvdmlld3MvRG93bmxvYWRQYWdlLnZ1ZT9lMGFiIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC92aWV3cy9IZWxwUGFnZS52dWU/YjFkZCIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvdmlld3MvV2VsY29tZVBhZ2UudnVlPzcwYTQiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xsZmV0Y2hlci10cy93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2xsZmV0Y2hlci10cy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2xsZmV0Y2hlci10cy93ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgdXBkYXRlIGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL2xsZmV0Y2hlci10cy93ZWJwYWNrL3J1bnRpbWUvZ2V0IHVwZGF0ZSBtYW5pZmVzdCBmaWxlbmFtZSIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIiwid2VicGFjazovL2xsZmV0Y2hlci10cy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2xsZmV0Y2hlci10cy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xsZmV0Y2hlci10cy93ZWJwYWNrL3J1bnRpbWUvbG9hZCBzY3JpcHQiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzL3dlYnBhY2svcnVudGltZS9ob3QgbW9kdWxlIHJlcGxhY2VtZW50Iiwid2VicGFjazovL2xsZmV0Y2hlci10cy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2xsZmV0Y2hlci10cy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAndW5kZXJzY29yZSc7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdEJ5dGVzKGJ5dGVzKSB7XHJcbiAgaWYgKGJ5dGVzID4gMTAyNCkgcmV0dXJuIChieXRlcyAvIDEwMjQpLnRvRml4ZWQoMSkgKyAnSydcclxuICByZXR1cm4gU3RyaW5nKGJ5dGVzKVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kSXRlbXMoc2VhcmNoVGVybSwgc291cmNlKXtcclxuICBsZXQgX19zZWFyY2hUZXJtX18gPSBzZWFyY2hUZXJtO1xyXG4gIGxldCBfX3Jlc3VsdHNfXyA9IFtdO1xyXG5cclxuICBmdW5jdGlvbiByZXN1bHRFeGlzdChyZXN1bHRJdGVtKXtcclxuICAgIGZvcihsZXQgaW5kZXggaW4gX19yZXN1bHRzX18pe1xyXG4gICAgICAgIGlmKF8uaXNFcXVhbChyZXN1bHRJdGVtLCBfX3Jlc3VsdHNfX1tpbmRleF0pKXtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBmdW5jdGlvbiBzZWFyY2hJdGVtKGl0ZW0pIHsgXHJcbiAgICBpZigndW5kZWZpbmVkJyA9PSB0eXBlb2YgaXRlbSB8fCBpdGVtID09IG51bGwpe1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIE9iamVjdC5rZXlzKGl0ZW0pLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgaWYgKHR5cGVvZiBpdGVtW2tleV0gPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICBzZWFyY2hJdGVtKGl0ZW1ba2V5XSlcclxuICAgICAgfVxyXG4gICAgICBpZiAodHlwZW9mIGl0ZW1ba2V5XSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIGxldCBzZWFyY2hBc1JlZ0V4ID0gbmV3IFJlZ0V4cChfX3NlYXJjaFRlcm1fXywgXCJnaVwiKTtcclxuICAgICAgICBpZiAoaXRlbVtrZXldLm1hdGNoKHNlYXJjaEFzUmVnRXgpKSB7XHJcbiAgICAgICAgICBpZighcmVzdWx0RXhpc3QoaXRlbSkpe1xyXG4gICAgICAgICAgICAgIF9fcmVzdWx0c19fLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTsgICBcclxuICB9XHJcbiAgc2VhcmNoSXRlbShzb3VyY2UpO1xyXG5cclxuICByZXR1cm4gX19yZXN1bHRzX187XHJcbn1cclxuXHJcbi8vIGZpbmRCcHIoJyR0eXBlJywnY29tLmxpbmtlZGluLmxlYXJuaW5nLmFwaS5kZWNvLmNvbnRlbnQuRXhlcmNpc2VGaWxlJyxicHJTdG9yZSxbJ3NpemVJbkJ5dGVzJywnbmFtZScsJ3VybCddLGZhbHNlKVxyXG5leHBvcnQgZnVuY3Rpb24gZmluZERTKGssdixzcmMscHJvcHMsbGlzdCl7XHJcbiAgbGlzdCA9ICd1bmRlZmluZWQnID09PSB0eXBlb2YgbGlzdCA/IGZhbHNlIDogbGlzdDtcclxuICBsZXQgbGlzdHMgPSBbXTtcclxuICBmb3IobGV0IGkgaW4gc3JjKXtcclxuICAgICAgY29uc3Qgb2JqID0gc3JjW2ldO1xyXG4gICAgICBpZigndW5kZWZpbmVkJyAhPT0gdHlwZW9mIG9ialtrXSl7XHJcbiAgICAgICAgICBpZihvYmpba10gPT09IHYpe1xyXG4gICAgICAgICAgICAgIGxldCByZXRzID0ge307XHJcbiAgICAgICAgICAgICAgZm9yKGxldCBqIGluIHByb3BzKXtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcCA9IHByb3BzW2pdO1xyXG4gICAgICAgICAgICAgICAgICBpZigndW5kZWZpbmVkJyAhPT0gdHlwZW9mIG9ialtwcm9wXSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXRzW3Byb3BdID0gb2JqW3Byb3BdO1xyXG4gICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHNbcHJvcF0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGlmKCFsaXN0KXtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldHM7XHJcbiAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgIGxpc3RzLnB1c2gocmV0cyk7XHJcbiAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGxpc3RzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rm10KHVybCl7XHJcbiAgbGV0IHN0ciA9IHVybC5zcGxpdCgnPycpWzBdLnNwbGl0KCcvJykuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gJycpWzRdLnJlcGxhY2UoL15sZWFybmluZy1vcmlnaW5hbC12aWRlby0vLCcnKTtcclxuICBcclxuICBsZXQgbWF0Y2hlcyA9IFsnYXVkaW8nLCczNjAnLCc3MjAnLCc0ODAnLCcxMDgwJywnNTQwJywnaGxzJ107XHJcblxyXG4gIGZvciggbGV0IG0gaW4gbWF0Y2hlcyl7XHJcbiAgICAgIGlmKHN0ci5tYXRjaChtYXRjaGVzW21dKSl7XHJcbiAgICAgICAgICByZXR1cm4gbWF0Y2hlc1ttXTtcclxuICAgICAgfVxyXG4gIH1cclxuICByZXR1cm4gc3RyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFrZVRpdGxlKHNsdWcpIHtcclxuICBjb25zdCB3b3JkcyA9IHNsdWcuc3BsaXQoJy0nKTtcclxuICBcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHdvcmRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCB3b3JkID0gd29yZHNbaV07XHJcbiAgICAgIHdvcmRzW2ldID0gd29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmQuc2xpY2UoMSk7XHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybiB3b3Jkcy5qb2luKCcgJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlU2x1ZyhzdHIpIHtcclxuICAgIGNvbnN0IHdvcmRzID0gc3RyLnJlcGxhY2UoL1xcVysvZywnICcpLnNwbGl0KCcgJyk7XHJcbiAgICByZXR1cm4gd29yZHMuam9pbignLScpLnRvTG93ZXJDYXNlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZW5kTWVzc2FnZVNhdmVEYXRhQ29kZXNUb0xTKCl7XHJcbiAgICBjaHJvbWUudGFicy5xdWVyeSh7YWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlfSwgZnVuY3Rpb24odGFicykge1xyXG4gICAgICAgIGNvbnN0IHRhYiA9IHRhYnNbMF07XHJcbiAgICAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCB7ZXZlbnQ6ICdTYXZlRGF0YUNvZGVzVG9MUyd9LCAocikgPT4ge30pO1xyXG5cclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udGVudENvbnNvbGVMb2coZGF0YSl7XHJcbiAgICBjaHJvbWUudGFicy5xdWVyeSh7YWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlfSwgZnVuY3Rpb24odGFicykge1xyXG4gICAgICAgIGNvbnN0IHRhYiA9IHRhYnNbMF07XHJcbiAgICAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCB7ZXZlbnQ6ICdDb250ZW50Q29uc29sZUxvZycscGFyYW06ZGF0YX0sIChyKSA9PiB7fSk7XHJcblxyXG4gICAgfSk7XHJcbn0iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5mZXRjaC1xdWV1ZS1iYXJbZGF0YS12LTkwNWFlYzQyXXtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICByaWdodDogNDlweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogLTIycHg7XFxufVxcbi5mZXRjaC1xdWV1ZS1wYltkYXRhLXYtOTA1YWVjNDJde1xcclxcbiAgICB3aWR0aDogMTAycHg7XFxyXFxuICAgIGhlaWdodDogMjRweDtcXHJcXG4gICAgcGFkZGluZzogNHB4IDA7XFxyXFxuICAgIGZsb2F0OnJpZ2h0O1xcclxcbiAgICBjbGVhcjpib3RoO1xcbn1cXG4uYnRuLWZldGNoW2RhdGEtdi05MDVhZWM0Ml17XFxyXFxuICAgIG1hcmdpbi10b3A6LThweDtcXHJcXG4gICAgcGFkZGluZzowO1xcclxcbiAgICBib3JkZXI6bm9uZSAhaW1wb3J0YW50O1xcclxcbiAgICBmb250LXNpemU6IDEwcHg7XFxufVxcbi5mZXRjaC1xdWV1ZVtkYXRhLXYtOTA1YWVjNDJde1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcbi5idG4tZmV0Y2gtY250W2RhdGEtdi05MDVhZWM0Ml17XFxyXFxuICAgd2lkdGg6IDI1cHg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IC0xMnB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAyLjVweDtcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3BvcHVwL2NvbXBvbmVudHMvRmV0Y2hRdWV1ZUJhci52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQXNEQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGNBQWM7SUFDZCxXQUFXO0lBQ1gsVUFBVTtBQUNkO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsU0FBUztJQUNULHNCQUFzQjtJQUN0QixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtHQUNHLFdBQVc7SUFDVixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZldGNoLXF1ZXVlLWJhclxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0ZXN0LWRhdGFcXFwiIHYtaWY9XFxcIjBcXFwiPlxcclxcbiAgICAgICAgICAgIDxwcmU+e3tKU09OLnN0cmluZ2lmeShxdWV1ZVRvY0luZGV4LG51bGwsMil9fTwvcHJlPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmZXRjaC1xdWV1ZS1wYlxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvZ3Jlc3NcXFwiIHYtc2hvdz1cXFwicGVyY2VudGFnZSA+IDBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9ncmVzcy1iYXIgYmctaW5mb1xcXCIgcm9sZT1cXFwicHJvZ3Jlc3NiYXJcXFwiIDpzdHlsZT1cXFwie3dpZHRoOnBlcmNlbnRhZ2UrJyUnfVxcXCIgOmFyaWEtdmFsdWVub3c9XFxcInBlcmNlbnRhZ2VcXFwiIDphcmlhLXZhbHVlbWluPVxcXCIwXFxcIiA6YXJpYS12YWx1ZW1heD1cXFwiMTAwXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYnRuLWZldGNoLWNudFxcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiA6c3R5bGU9XFxcIntjb2xvcjpidG5TdGF0ZT09Mz8nd2hpdGUnOidpbmhlcml0J31cXFwiIDpkaXNhYmxlZD1cXFwiYnRuU3RhdGUhPTEmJmJ0blN0YXRlIT00XFxcIiBAY2xpY2s9XFxcInN0YXJ0UXVldWUoKVxcXCIgY2xhc3M9XFxcImJ0biBidG4tc20gYnRuLWZldGNoXFxcIj48aSBjbGFzcz1cXFwiZmFcXFwiIDpjbGFzcz1cXFwieydmYS1wbGF5JzpidG5TdGF0ZT09MSwnZmEtc3BpbiBmYS1zcGlubmVyJzpidG5TdGF0ZT09MiwnZmEtY2hlY2snOmJ0blN0YXRlPT0zLCdmYS1yZWZyZXNoJzpidG5TdGF0ZT09NH1cXFwiPjwvaT48L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L3RlbXBsYXRlPlxcclxcblxcclxcbjxzY3JpcHQgbGFuZz1cXFwidHNcXFwiPlxcclxcbmltcG9ydCB7ZGVmaW5lQ29tcG9uZW50LHJlZn0gZnJvbSAndnVlJ1xcclxcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XFxyXFxuICBwcm9wczp7XFxyXFxuICAgIHNlY3Rpb25JbmRleDp7XFxyXFxuICAgICAgICByZXF1aXJlZCA6IHRydWUsXFxyXFxuICAgICAgICB0eXBlOiBOdW1iZXJcXHJcXG4gICAgfVxcclxcbiAgfSxcXHJcXG4gIHNldHVwKHByb3BzKXtcXHJcXG4gICAgbGV0IHF1ZXVlU2x1Z3MgPSByZWYoW10pO1xcclxcbiAgICBsZXQgcXVldWVUb2NJbmRleCA9IHJlZihbXSk7XFxyXFxuICAgIGxldCBleGNsdWRlU2x1Z3MgPSByZWYoW10pO1xcclxcbiAgICBsZXQgcGVyY2VudGFnZSA9IHJlZigwKTtcXHJcXG4gICAgbGV0IGJ0blN0YXRlID0gcmVmKDEpO1xcclxcbiAgICBsZXQgbGFzdFRvY0luZGV4ID0gcmVmKDApO1xcclxcbiAgICBjb25zdCBzZWN0aW9uSW5kZXggPSByZWYocHJvcHMuc2VjdGlvbkluZGV4KTtcXHJcXG4gICAgcmV0dXJuIHtxdWV1ZVRvY0luZGV4LHF1ZXVlU2x1Z3MsZXhjbHVkZVNsdWdzLHBlcmNlbnRhZ2UsYnRuU3RhdGUsbGFzdFRvY0luZGV4LHNlY3Rpb25JbmRleH07XFxyXFxuICB9LFxcclxcbiAgbWV0aG9kczp7XFxyXFxuICAgIHNldFByb2dyZXNzKGxhc3RUb2NJbmRleDpudW1iZXIscGVyY2VudGFnZTpudW1iZXIpe1xcclxcbiAgICAgICAgdGhpcy5sYXN0VG9jSW5kZXggPSBsYXN0VG9jSW5kZXg7XFxyXFxuICAgICAgICB0aGlzLnBlcmNlbnRhZ2UgPSBwZXJjZW50YWdlO1xcclxcbiAgICAgICAgaWYocGVyY2VudGFnZT09MTAwKXtcXHJcXG4gICAgICAgICAgICB0aGlzLmJ0blN0YXRlID0gMztcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIHRoaXMuJHBhcmVudC5mZXRjaFNlY3Rpb25RdWV1ZS5yZXBvcnQodGhpcy5zZWN0aW9uSW5kZXgsbGFzdFRvY0luZGV4LDApO1xcclxcbiAgICAgICAgY29uc29sZS5sb2cocGVyY2VudGFnZSlcXHJcXG4gICAgfSxcXHJcXG4gICAgc3RhcnRRdWV1ZSgpe1xcclxcbiAgICAgICAgdGhpcy5wZXJjZW50YWdlID0gdGhpcy5wZXJjZW50YWdlPT0wPzE6dGhpcy5wZXJjZW50YWdlO1xcclxcbiAgICAgICAgdGhpcy5idG5TdGF0ZSA9IDI7XFxyXFxuICAgICAgICB0aGlzLiRwYXJlbnQudG9jSXRlbXNbdGhpcy5zZWN0aW9uSW5kZXhdLnRyaWdnZXJGZXRjaFF1ZXVlKHRoaXMubGFzdFRvY0luZGV4PT0wPy0xOnRoaXMubGFzdFRvY0luZGV4KTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn0pO1xcclxcbjwvc2NyaXB0PlxcclxcbjxzdHlsZSBzY29wZWQ+XFxyXFxuLmZldGNoLXF1ZXVlLWJhcntcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICByaWdodDogNDlweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogLTIycHg7O1xcclxcbn0gICAgXFxyXFxuLmZldGNoLXF1ZXVlLXBie1xcclxcbiAgICB3aWR0aDogMTAycHg7XFxyXFxuICAgIGhlaWdodDogMjRweDtcXHJcXG4gICAgcGFkZGluZzogNHB4IDA7XFxyXFxuICAgIGZsb2F0OnJpZ2h0O1xcclxcbiAgICBjbGVhcjpib3RoO1xcclxcbn1cXHJcXG4uYnRuLWZldGNoe1xcclxcbiAgICBtYXJnaW4tdG9wOi04cHg7XFxyXFxuICAgIHBhZGRpbmc6MDtcXHJcXG4gICAgYm9yZGVyOm5vbmUgIWltcG9ydGFudDtcXHJcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcclxcbn1cXHJcXG4uZmV0Y2gtcXVldWV7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXHJcXG59XFxyXFxuLmJ0bi1mZXRjaC1jbnR7XFxyXFxuICAgd2lkdGg6IDI1cHg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IC0xMnB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAyLjVweDtcXHJcXG59XFxyXFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uZGF0YS1jb2Rlc1tkYXRhLXYtNmFmZGE2NDlde1xcclxcbiAgICBiYWNrZ3JvdW5kOiB5ZWxsb3c7XFxufVxcbi5mZXRjaC1zZWN0aW9uLXF1ZXVlLXBiW2RhdGEtdi02YWZkYTY0OV17XFxyXFxuICAgIHdpZHRoOiAxMDJweDtcXHJcXG4gICAgaGVpZ2h0OiAyNHB4O1xcclxcbiAgICBwYWRkaW5nOiA0cHggMDtcXHJcXG4gICAgZmxvYXQ6cmlnaHQ7XFxyXFxuICAgIGNsZWFyOmJvdGg7XFxufVxcbi5idG4tZmV0Y2gtc2VjdGlvbi1xdWV1ZVtkYXRhLXYtNmFmZGE2NDlde1xcclxcbiAgICBtYXJnaW4tdG9wOi04cHg7XFxyXFxuICAgIHBhZGRpbmc6MDtcXHJcXG4gICAgYm9yZGVyOm5vbmUgIWltcG9ydGFudDtcXHJcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcbn1cXG4uZmV0Y2gtc2VjdGlvbi1xdWV1ZVtkYXRhLXYtNmFmZGE2NDlde1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiA0OXB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xcbn1cXG4uYnRuLWZldGNoLXNlY3Rpb24tcXVldWUtY250W2RhdGEtdi02YWZkYTY0OV17XFxyXFxuICAgd2lkdGg6IDI1cHg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IC0xMnB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAyLjVweDtcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3BvcHVwL2NvbXBvbmVudHMvRmV0Y2hTZWN0aW9uUXVldWUudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFzRkE7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osY0FBYztJQUNkLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGVBQWU7SUFDZixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCO0FBQ0E7R0FDRyxXQUFXO0lBQ1Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmZXRjaC1zZWN0aW9uLXF1ZXVlXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZzcWJjXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmZXRjaC1zZWN0aW9uLXF1ZXVlLWJhclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZldGNoLXNlY3Rpb24tcXVldWUtcGJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvZ3Jlc3NcXFwiIHYtc2hvdz1cXFwicGVyY2VudGFnZSA+IDBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2dyZXNzLWJhciBiZy1zdWNjZXNzXFxcIiByb2xlPVxcXCJwcm9ncmVzc2JhclxcXCIgOnN0eWxlPVxcXCJ7d2lkdGg6cGVyY2VudGFnZSsnJSd9XFxcIiA6YXJpYS12YWx1ZW5vdz1cXFwicGVyY2VudGFnZVxcXCIgYXJpYS12YWx1ZW1pbj1cXFwiMFxcXCIgYXJpYS12YWx1ZW1heD1cXFwiMTAwXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYnRuLWZldGNoLXNlY3Rpb24tcXVldWUtY250XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gOnN0eWxlPVxcXCJ7Y29sb3I6YnRuU3RhdGU9PTM/J3doaXRlJzonaW5oZXJpdCd9XFxcIiA6ZGlzYWJsZWQ9XFxcImJ0blN0YXRlIT0xJiZidG5TdGF0ZSE9NFxcXCIgQGNsaWNrPVxcXCJzdGFydFF1ZXVlKClcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNtIGJ0bi1mZXRjaC1zZWN0aW9uLXF1ZXVlXFxcIj48aSBjbGFzcz1cXFwiZmFcXFwiIDpjbGFzcz1cXFwieydmYS1wbGF5JzpidG5TdGF0ZT09MSwnZmEtc3BpbiBmYS1zcGlubmVyJzpidG5TdGF0ZT09MiwnZmEtY2hlY2snOmJ0blN0YXRlPT0zLCdmYS1yZWZyZXNoJzpidG5TdGF0ZT09NH1cXFwiPjwvaT48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG5cXHJcXG48c2NyaXB0IGxhbmc9XFxcInRzXFxcIj5cXHJcXG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7XFxyXFxuXFxyXFxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcXHJcXG5cXHJcXG4gICAgc2V0dXAoKSB7XFxyXFxuICAgICAgICBjb25zdCBxdWV1ZVNsdWdzID0gcmVmKFtdKTtcXHJcXG4gICAgICAgIGNvbnN0IGJ0blN0YXRlID0gcmVmKDEpO1xcclxcbiAgICAgICAgY29uc3QgcGVyY2VudGFnZSA9IHJlZigwKTtcXHJcXG4gICAgICAgIGNvbnN0IGxhc3RTZWN0aW9uSW5kZXggPSByZWYoMCk7XFxyXFxuICAgICAgICBjb25zdCBzZWN0aW9uSW5kZXhRdWV1ZXMgPSByZWYoW10pO1xcclxcbiAgICAgICAgcmV0dXJuIHtcXHJcXG4gICAgICAgICAgICBxdWV1ZVNsdWdzLFxcclxcbiAgICAgICAgICAgIGJ0blN0YXRlLFxcclxcbiAgICAgICAgICAgIHBlcmNlbnRhZ2UsXFxyXFxuICAgICAgICAgICAgbGFzdFNlY3Rpb25JbmRleCxcXHJcXG4gICAgICAgICAgICBzZWN0aW9uSW5kZXhRdWV1ZXNcXHJcXG4gICAgICAgIH07XFxyXFxuICAgIH0sXFxyXFxuICAgIG1vdW50ZWQoKXtcXHJcXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XFxyXFxuICAgICAgICAgICAgdGhpcy5zZWN0aW9uSW5kZXhRdWV1ZXMgPSAgT2JqZWN0LmtleXModGhpcy4kcGFyZW50LnNlY3Rpb25zKTtcXHJcXG4gICAgICAgIH0sMjUwKVxcclxcbiAgICB9LFxcclxcbiAgICBtZXRob2RzOntcXHJcXG4gICAgICAgIHRvSlNPTlN0cihvYmo6YW55KXtcXHJcXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqKTtcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBjYWxjdWxhdGVQZXJjZW50YWdlUXVldWUoY2FsbGJhY2s6RnVuY3Rpb24pe1xcclxcbiAgICAgICAgICAgIGNvbnN0IHBlYWsgPSB0aGlzLnF1ZXVlU2x1Z3MubGVuZ3RoO1xcclxcbiAgICAgICAgICAgIGNvbnN0IG1heFBlYWsgPSB0aGlzLiRwYXJlbnQuZ2V0VG90YWxUb2NzKCk7XFxyXFxuICAgICAgICAgICAgY29uc3QgcGVyY2VudGFnZSA9IE1hdGgucm91bmQocGVhayAvIG1heFBlYWsgKiAxMDApO1xcclxcblxcclxcbiAgICAgICAgICAgIGlmKCdmdW5jdGlvbicgPT0gdHlwZW9mIGNhbGxiYWNrKXtcXHJcXG4gICAgICAgICAgICAgICAgY2FsbGJhY2socGVyY2VudGFnZSxwZWFrLG1heFBlYWspO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICByZXBvcnQoc2VjdGlvbkluZGV4Om51bWJlcix0b2NJbmRleDpudW1iZXIsc3RhdHVzOm51bWJlcil7XFxyXFxuICAgICAgICAgICAgY29uc3Qgc2VjdGlvbiA9IHRoaXMuJHBhcmVudC5zZWN0aW9uc1tzZWN0aW9uSW5kZXhdO1xcclxcbiAgICAgICAgICAgIGNvbnN0IHNsdWcgPSBzZWN0aW9uLml0ZW1zW3RvY0luZGV4XS5zbHVnO1xcclxcbiAgICAgICAgICAgIGlmKCF0aGlzLnF1ZXVlU2x1Z3MuaW5jbHVkZXMoc2x1Zykpe1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXVlU2x1Z3MucHVzaChzbHVnKTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgY29uc3QgcmVtYWluaW5nVGV4dCA9IGAke3RoaXMucXVldWVTbHVncy5sZW5ndGh9IG9mICR7dGhpcy4kcGFyZW50LmdldFRvdGFsVG9jcygpfWBcXHJcXG4gICAgICAgICAgICB0aGlzLiRwYXJlbnQubG9nQmFyLmxvZyhgJHtzZWN0aW9uLnRpdGxlfSA6ICR7c2x1Z30gJHtyZW1haW5pbmdUZXh0fWAsc3RhdHVzKTtcXHJcXG5cXHJcXG4gICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZVBlcmNlbnRhZ2VRdWV1ZSgocGVyY2VudGFnZSk9PnRoaXMucGVyY2VudGFnZT1wZXJjZW50YWdlKTtcXHJcXG5cXHJcXG4gICAgICAgICAgICBpZih0aGlzLiRwYXJlbnQuZmV0Y2hRdWV1ZUJhcltzZWN0aW9uSW5kZXhdLnBlcmNlbnRhZ2U9PTEwMCl7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc1F1ZXVlKCk7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIHByb2Nlc3NRdWV1ZSgpe1xcclxcbiAgICAgICAgICAgIGlmKHRoaXMuc2VjdGlvbkluZGV4UXVldWVzLmxlbmd0aCA+IDApe1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RTZWN0aW9uSW5kZXggPSB0aGlzLnNlY3Rpb25JbmRleFF1ZXVlcy5zaGlmdCgpO1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQuZmV0Y2hRdWV1ZUJhclt0aGlzLmxhc3RTZWN0aW9uSW5kZXhdLnN0YXJ0UXVldWUoKTtcXHJcXG4gICAgICAgICAgICB9ZWxzZXtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5idG5TdGF0ZSA9IDM7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIHN0YXJ0UXVldWUoKXtcXHJcXG4gICAgICAgICAgICB0aGlzLmJ0blN0YXRlID0gMjtcXHJcXG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NRdWV1ZSgpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufSlcXHJcXG48L3NjcmlwdD5cXHJcXG5cXHJcXG48c3R5bGUgc2NvcGVkPlxcclxcbi5kYXRhLWNvZGVze1xcclxcbiAgICBiYWNrZ3JvdW5kOiB5ZWxsb3c7XFxyXFxufSAgICBcXHJcXG4uZmV0Y2gtc2VjdGlvbi1xdWV1ZS1wYntcXHJcXG4gICAgd2lkdGg6IDEwMnB4O1xcclxcbiAgICBoZWlnaHQ6IDI0cHg7XFxyXFxuICAgIHBhZGRpbmc6IDRweCAwO1xcclxcbiAgICBmbG9hdDpyaWdodDtcXHJcXG4gICAgY2xlYXI6Ym90aDtcXHJcXG59XFxyXFxuLmJ0bi1mZXRjaC1zZWN0aW9uLXF1ZXVle1xcclxcbiAgICBtYXJnaW4tdG9wOi04cHg7XFxyXFxuICAgIHBhZGRpbmc6MDtcXHJcXG4gICAgYm9yZGVyOm5vbmUgIWltcG9ydGFudDtcXHJcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcclxcbn1cXHJcXG4uZmV0Y2gtc2VjdGlvbi1xdWV1ZXtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICByaWdodDogNDlweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTJweDtcXHJcXG59XFxyXFxuLmJ0bi1mZXRjaC1zZWN0aW9uLXF1ZXVlLWNudHtcXHJcXG4gICB3aWR0aDogMjVweDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICByaWdodDogLTEycHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIuNXB4O1xcclxcbn1cXHJcXG48L3N0eWxlPlwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5sb2ctbWVzc2FnZVtkYXRhLXYtNWM4YTI4N2Nde1xcclxcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcclxcbiAgICBwYWRkaW5nOiAuMjVlbSAuNWVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcbn1cXG4ubG9nLW1lc3NhZ2UuZXJyb3JbZGF0YS12LTVjOGEyODdjXXtcXHJcXG4gICAgY29sb3I6I2ZmZjtcXHJcXG4gICAgYmFja2dyb3VuZDogcmVkO1xcbn1cXG4ubG9nLW1lc3NhZ2Uuc3VjY2Vzc1tkYXRhLXYtNWM4YTI4N2Nde1xcclxcbiAgICBjb2xvcjojZmZmO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBncmVlbjtcXG59XFxuLmxvZy1tZXNzYWdlLndhcm5pbmdbZGF0YS12LTVjOGEyODdjXXtcXHJcXG4gICAgY29sb3I6bWFyb29uO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB5ZWxsb3c7XFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9wb3B1cC9jb21wb25lbnRzL0xvZ0Jhci52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQTZCQTtJQUNJLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImxvZy1iYXJcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibG9nLW1lc3NhZ2VcXFwiIDpjbGFzcz1cXFwie2Vycm9yOm1vZGU9PTEsc3VjY2Vzczptb2RlPT0wLHdhcm5pbmc6bW9kZT09Mn1cXFwiPlxcclxcbiAgICAgICAgICAgIDxzcGFuPnt7bWVzc2FnZX19PC9zcGFuPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvdGVtcGxhdGU+XFxyXFxuXFxyXFxuPHNjcmlwdCBsYW5nPVxcXCJ0c1xcXCI+XFxyXFxuaW1wb3J0IHtkZWZpbmVDb21wb25lbnQscmVmfSBmcm9tICd2dWUnO1xcclxcblxcclxcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XFxyXFxuICAgIHNldHVwKCl7XFxyXFxuICAgICAgICBjb25zdCBtb2RlID0gcmVmKC0xKTtcXHJcXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSByZWYoJycpO1xcclxcblxcclxcbiAgICAgICAgcmV0dXJuIHttb2RlLG1lc3NhZ2V9O1xcclxcbiAgICB9LFxcclxcbiAgICBcXHJcXG4gICAgbWV0aG9kczp7XFxyXFxuICAgICAgICBsb2cobWVzc2FnZTpzdHJpbmcsbW9kZTpudW1iZXIpe1xcclxcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XFxyXFxuICAgICAgICAgICAgdGhpcy5tb2RlID0gbW9kZTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn0pXFxyXFxuPC9zY3JpcHQ+XFxyXFxuXFxyXFxuPHN0eWxlIHNjb3BlZD5cXHJcXG4ubG9nLW1lc3NhZ2V7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxyXFxuICAgIHBhZGRpbmc6IC4yNWVtIC41ZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDEwcHg7XFxyXFxufSAgICBcXHJcXG4ubG9nLW1lc3NhZ2UuZXJyb3J7XFxyXFxuICAgIGNvbG9yOiNmZmY7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJlZDtcXHJcXG59XFxyXFxuLmxvZy1tZXNzYWdlLnN1Y2Nlc3N7XFxyXFxuICAgIGNvbG9yOiNmZmY7XFxyXFxuICAgIGJhY2tncm91bmQ6IGdyZWVuO1xcclxcbn1cXHJcXG4ubG9nLW1lc3NhZ2Uud2FybmluZ3tcXHJcXG4gICAgY29sb3I6bWFyb29uO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB5ZWxsb3c7XFxyXFxufVxcclxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxudGQuZmNjW2RhdGEtdi0zYzM1NzRmZV17XFxyXFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgICB3aWR0aDoyLjVlbTtcXG59XFxudWwudG9jLWl0ZW0tbGlzdFtkYXRhLXYtM2MzNTc0ZmVde1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOm5vbmU7XFxyXFxuICBtYXJnaW46MDtcXHJcXG4gIHBhZGRpbmc6MDtcXG59XFxudGFibGUudG9jLWl0ZW0tbGlzdFtkYXRhLXYtM2MzNTc0ZmVde1xcclxcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuLnRvYy1pdGVtLXZpZXdbZGF0YS12LTNjMzU3NGZlXXtcXHJcXG4gICAgcGFkZGluZzogMCAyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogODAlO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xcbn1cXHJcXG5cXHJcXG5cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcG9wdXAvY29tcG9uZW50cy9Ub2NJdGVtLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBc0xBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLFFBQVE7RUFDUixTQUFTO0FBQ1g7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcInRvYy1pdGVtLXZpZXdcXFwiPlxcclxcbiAgICA8dGFibGUgY2xhc3M9XFxcInRvYy1pdGVtLWxpc3RcXFwiPlxcclxcbiAgICAgICAgPHRoZWFkPlxcclxcbiAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgPHRoIGNvbHNwYW49XFxcIjJcXFwiPjxsYWJlbD48aW5wdXQgQGNsaWNrPVxcXCJvbkNoZWNrQWxsKClcXFwiIHYtbW9kZWw9XFxcImNoZWNrQWxsXFxcIiBjbGFzcz1cXFwiZm9ybS1jaGVjay1pbnB1dFxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiLz4gPHNwYW4gc3R5bGU9XFxcInBhZGRpbmctbGVmdDouNWVtXFxcIj5DaGVjayBBbGw8L3NwYW4+PC9sYWJlbD48L3RoPlxcclxcbiAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICA8dGg+PC90aD5cXHJcXG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCIgc3R5bGU9XFxcIndpZHRoOjgwcHhcXFwiPjwvdGg+XFxyXFxuICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgIDwvdGhlYWQ+XFxyXFxuICAgICAgICA8dGJvZHk+XFxyXFxuICAgICAgICA8dHIgdi1mb3I9XFxcIih0b2MsdG9jSW5kZXgpIGluIGl0ZW1zXFxcIiBjbGFzcz1cXFwidG9jLWl0ZW1cXFwiIDpjbGFzcz1cXFwie29kczp0b2NJbmRleCUyPT0wfVxcXCIgOmtleT1cXFwidG9jSW5kZXhcXFwiPlxcclxcbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwiZmNjXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IEBjbGljaz1cXFwidGdRdWV1ZSh0b2NJbmRleClcXFwiIGNsYXNzPVxcXCJmb3JtLWNoZWNrLWlucHV0XFxcIiB0eXBlPVxcXCJjaGVja2JveFxcXCIgdi1tb2RlbD1cXFwiY2hlY2tlZFF1ZXVlc1t0b2NJbmRleF1cXFwiLz4gXFxyXFxuICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQgc3R5bGU9XFxcInBhZGRpbmctbGVmdDouNWVtXFxcIj57e3RvYy50aXRsZX19PC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQgY29sc3Bhbj1cXFwiMlxcXCIgc3R5bGU9XFxcInRleHQtYWxpZ246IHJpZ2h0O1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxGZXRjaEJ1dHRvbiBAdXBkYXRlPVxcXCJvbkZldGNoVXBkYXRlKCRldmVudClcXFwiIFxcclxcbiAgICAgICAgICAgICAgICA6c2VjdGlvbkluZGV4PVxcXCJzZWN0aW9uSW5kZXhcXFwiIFxcclxcbiAgICAgICAgICAgICAgICA6dG9jSW5kZXg9XFxcInRvY0luZGV4XFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgOnRvYz1cXFwidG9jXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgOnF1ZXVlPVxcXCJlbmFibGVRdWV1ZVxcXCIgXFxyXFxuICAgICAgICAgICAgICAgIHJlZj1cXFwiZmV0Y2hCdG5zXFxcIi8+XFxyXFxuICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgIDwvdHI+XFxyXFxuICAgICAgICA8L3Rib2R5PlxcclxcbiAgICA8L3RhYmxlPlxcclxcbiAgPC9kaXY+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG48c2NyaXB0IGxhbmc9XFxcInRzXFxcIj5cXHJcXG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiwgUHJvcFR5cGUgfSBmcm9tICd2dWUnO1xcclxcbmltcG9ydCBGZXRjaEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL0ZldGNoQnV0dG9uLnZ1ZSc7XFxyXFxuaW1wb3J0IHtUb2N9IGZyb20gJy4uLy4uL3R5cGVzL2x5bmRhJztcXHJcXG5cXHJcXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xcclxcbiAgICBjb21wb25lbnRzOntcXHJcXG4gICAgICAgIEZldGNoQnV0dG9uXFxyXFxuICAgIH0sXFxyXFxuICAgIHByb3BzOntcXHJcXG4gICAgICAgIGl0ZW1zOiB7XFxyXFxuICAgICAgICAgICAgcmVxdWlyZWQgOiB0cnVlLFxcclxcbiAgICAgICAgICAgIHR5cGUgOiBBcnJheSBhcyBQcm9wVHlwZTxUb2NbXT5cXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBzZWN0aW9uSW5kZXggOiB7XFxyXFxuICAgICAgICAgICAgcmVxdWllZCA6IHRydWUsXFxyXFxuICAgICAgICAgICAgdHlwZSA6IE51bWJlclxcclxcbiAgICAgICAgfVxcclxcbiAgICB9LFxcclxcbiAgICBzZXR1cChwcm9wcykge1xcclxcbiAgICAgICAgY29uc3QgZW5hYmxlUXVldWUgPSByZWYodHJ1ZSk7XFxyXFxuICAgICAgICBjb25zdCBpdGVtcyA9IHJlZihwcm9wcy5pdGVtcyBhcyBUb2NbXSk7XFxyXFxuICAgICAgICBjb25zdCBzZWN0aW9uSW5kZXggPSByZWYocHJvcHMuc2VjdGlvbkluZGV4IGFzIG51bWJlcik7XFxyXFxuICAgICAgICBjb25zdCBjaGVja0FsbCA9IHJlZihmYWxzZSk7XFxyXFxuICAgICAgICBjb25zdCBjaGVja2VkUXVldWVzID0gcmVmKFtdKTtcXHJcXG4gICAgICAgIGNvbnN0IGV4Y2x1ZGVRdWV1ZXMgPSByZWYoW10pO1xcclxcbiAgICAgICAgY29uc3QgZmV0Y2hRdWV1ZUJhciA9IHJlZigpO1xcclxcbiAgICAgICAgbGV0IGZldGNoQnRucyA9IHJlZihbXSk7XFxyXFxuICAgICAgICByZXR1cm4ge2ZldGNoUXVldWVCYXIsaXRlbXMsIHNlY3Rpb25JbmRleCwgY2hlY2tlZFF1ZXVlcywgZXhjbHVkZVF1ZXVlcyxmZXRjaEJ0bnMsY2hlY2tBbGwsZW5hYmxlUXVldWV9O1xcclxcbiAgICB9LFxcclxcbiAgICBtb3VudGVkKCl7XFxyXFxuICAgICAgICB0aGlzLmZldGNoUXVldWVCYXIgPSB0aGlzLiRwYXJlbnQuZmV0Y2hRdWV1ZUJhclt0aGlzLnNlY3Rpb25JbmRleF07XFxyXFxuXFxyXFxuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XFxyXFxuICAgICAgICAgICAgdGhpcy5jaGVja0FsbCA9IHRydWU7XFxyXFxuICAgICAgICAgICAgZm9yKGxldCB0b2NJbmRleCBpbiB0aGlzLml0ZW1zKXtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja2VkUXVldWVzW3RvY0luZGV4XSA9IHRydWU7XFxyXFxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHRvY1NsdWcgPSB0aGlzLml0ZW1zW3RvY0luZGV4XS5zbHVnO1xcclxcbiAgICAgICAgICAgICAgICBpZighdGhpcy5mZXRjaFF1ZXVlQmFyLnF1ZXVlVG9jSW5kZXguaW5jbHVkZXModG9jSW5kZXgpKXtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2hRdWV1ZUJhci5xdWV1ZVRvY0luZGV4LnB1c2godG9jSW5kZXgpOyAgICBcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9LDI1MCk7XFxyXFxuICAgIH0sXFxyXFxuICAgIG1ldGhvZHM6e1xcclxcbiAgICAgICAgdHJpZ2dlckZhaWxlZEZldGNoUXVldWUodG9jSW5kZXg6bnVtYmVyKXtcXHJcXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2hRdWV1ZUJhci5idG5TdGF0ZT00O1xcclxcbiAgICAgICAgICAgIH0sMTAwMCk7XFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgY2FsY3VsYXRlUGVyY2VudGFnZVF1ZXVlKGNhbGxiYWNrKXtcXHJcXG4gICAgICAgICAgICBjb25zdCBwZWFrID0gdGhpcy5leGNsdWRlUXVldWVzLmxlbmd0aDtcXHJcXG4gICAgICAgICAgICBjb25zdCBtYXhQZWFrID0gdGhpcy5pdGVtcy5sZW5ndGg7XFxyXFxuICAgICAgICAgICAgY29uc3QgcGVyY2VudGFnZSA9IE1hdGgucm91bmQocGVhayAvIG1heFBlYWsgKiAxMDApO1xcclxcblxcclxcbiAgICAgICAgICAgIGlmKCdmdW5jdGlvbicgPT0gdHlwZW9mIGNhbGxiYWNrKXtcXHJcXG4gICAgICAgICAgICAgICAgY2FsbGJhY2socGVyY2VudGFnZSxwZWFrLG1heFBlYWspO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICB0cmlnZ2VyRXhjbHVkZUZldGNoUXVldWUodG9jSW5kZXg6bnVtYmVyLCBmZXRjaFF1ZXVlRW5hYmxlZDpib29sZWFuKXtcXHJcXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0b2NJbmRleCk7XFxyXFxuICAgICAgICAgICAgaWYodGhpcy5leGNsdWRlUXVldWVzLmluZGV4T2YodG9jSW5kZXgpID09IC0xKXtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5leGNsdWRlUXVldWVzLnB1c2godG9jSW5kZXgpO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICBpZihmZXRjaFF1ZXVlRW5hYmxlZCl7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlUGVyY2VudGFnZVF1ZXVlKChwZXJjZW50YWdlOm51bWJlcik9PntcXHJcXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZldGNoUXVldWVCYXIuc2V0UHJvZ3Jlc3ModG9jSW5kZXgscGVyY2VudGFnZSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9LDUwMCk7XFxyXFxuICAgICAgICAgICAgICAgIH0pO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICB0aGlzLmNoZWNrZWRRdWV1ZXNbdG9jSW5kZXhdID0gZmFsc2U7XFxyXFxuICAgICAgICAgICAgdGhpcy5jaGVja0FsbCA9IGZhbHNlO1xcclxcbiAgICAgICBcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICB0cmlnZ2VyRmV0Y2hRdWV1ZSh0b2NJbmRleDpudW1iZXIpe1xcclxcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvY0luZGV4KTtcXHJcXG4gICAgICAgICAgICBjb25zdCBuZXh0VG9jSW5kZXggPSB0b2NJbmRleCArIDE7XFxyXFxuICAgICAgICAgICAgaWYobmV4dFRvY0luZGV4IDwgdGhpcy5jaGVja2VkUXVldWVzLmxlbmd0aCl7XFxyXFxuICAgICAgICAgICAgICAgIC8vIHByb2Nlc3MgbmV4dCBmZXRjaCBidXR0b25cXHJcXG4gICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2hCdG5zW25leHRUb2NJbmRleF0uZmV0Y2hUb2ModHJ1ZSk7XFxyXFxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCk7XFxyXFxuICAgICAgICAgICAgfWVsc2V7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlUGVyY2VudGFnZVF1ZXVlKChwZXJjZW50YWdlOm51bWJlcik9PntcXHJcXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZldGNoUXVldWVCYXIuc2V0UHJvZ3Jlc3ModG9jSW5kZXgscGVyY2VudGFnZSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9LDUwMCk7XFxyXFxuICAgICAgICAgICAgICAgIH0pO1xcclxcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZldGNoUXVldWVCYXIuYnRuU3RhdGU9dGhpcy5mZXRjaFF1ZXVlQmFyLnBlcmNlbnRhZ2U9PTEwMD8zOjE7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZldGNoUXVldWVCYXIubGFzdFRvY0luZGV4PTA7XFxyXFxuICAgICAgICAgICAgICAgIH0sMTAwMCk7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIC8vIGNhbGxpbmcgZmV0Y2ggYnV0dG9uIG5leHQgaW5kZXhcXHJcXG4gICAgICAgICAgICAvLyB0aGlzLiRyZWZcXHJcXG5cXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBvbkZldGNoVXBkYXRlKHRhcmdldDphbnkpe1xcclxcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRhcmdldClcXHJcXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCd1cGRhdGUnLHRhcmdldCk7XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgb25DaGVja0FsbCgpe1xcclxcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcXHJcXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5jaGVja0FsbCk7XFxyXFxuICAgICAgICAgICAgICAgIGZvcihsZXQgdG9jSW5kZXggaW4gdGhpcy5pdGVtcyl7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrZWRRdWV1ZXNbdG9jSW5kZXhdID0gdGhpcy5jaGVja0FsbDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IHRvY1NsdWcgPSB0aGlzLml0ZW1zW3RvY0luZGV4XS5zbHVnO1xcclxcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5jaGVja2VkUXVldWVzW3RvY0luZGV4XSl7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIXRoaXMuZmV0Y2hRdWV1ZUJhci5xdWV1ZVRvY0luZGV4LmluY2x1ZGVzKHRvY0luZGV4KSl7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2hRdWV1ZUJhci5xdWV1ZVRvY0luZGV4LnB1c2godG9jSW5kZXgpOyAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhSW5kZXggPSB0aGlzLmZldGNoUXVldWVCYXIucXVldWVUb2NJbmRleC5pbmRleE9mKHRvY0luZGV4KTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggYUluZGV4ICE9IC0xKXtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mZXRjaFF1ZXVlQmFyLnF1ZXVlVG9jSW5kZXguc3BsaWNlKGFJbmRleCwxKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9LDI1MCk7XFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgdGdRdWV1ZSh0b2NJbmRleDpudW1iZXIpe1xcclxcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcXHJcXG4gICAgICAgICAgICAgICAgLy8gdGhpcy4kcmVmcy5mZXRjaEJ0bnNbdG9jSW5kZXhdLmlzUXVldWVkID10aGlzLmNoZWNrZWRRdWV1ZXNbdG9jSW5kZXhdO1xcclxcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLiRyZWZzLmZldGNoQnRucyk7XFxyXFxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHRvY1NsdWcgPSB0aGlzLml0ZW1zW3RvY0luZGV4XS5zbHVnO1xcclxcbiAgICAgICAgICAgICAgICBpZih0aGlzLmNoZWNrZWRRdWV1ZXNbdG9jSW5kZXhdKXtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGlmKCF0aGlzLmZldGNoUXVldWVCYXIucXVldWVUb2NJbmRleC5pbmNsdWRlcyh0b2NJbmRleCkpe1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2hRdWV1ZUJhci5xdWV1ZVRvY0luZGV4LnB1c2godG9jSW5kZXgpOyAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfWVsc2V7XFxyXFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhSW5kZXggPSB0aGlzLmZldGNoUXVldWVCYXIucXVldWVUb2NJbmRleC5pbmRleE9mKHRvY0luZGV4KTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGlmKCBhSW5kZXggIT0gLTEpe1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2hRdWV1ZUJhci5xdWV1ZVRvY0luZGV4LnNwbGljZShhSW5kZXgsMSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNoZWNrZWRRdWV1ZXNbdG9jSW5kZXhdKTtcXHJcXG4gICAgICAgICAgICB9LDI1MCk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBcXHJcXG4gICAgfVxcclxcbn0pXFxyXFxuPC9zY3JpcHQ+XFxyXFxuXFxyXFxuPHN0eWxlIHNjb3BlZD5cXHJcXG50ZC5mY2N7XFxyXFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgICB3aWR0aDoyLjVlbTtcXHJcXG59XFxyXFxudWwudG9jLWl0ZW0tbGlzdHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTpub25lO1xcclxcbiAgbWFyZ2luOjA7XFxyXFxuICBwYWRkaW5nOjA7XFxyXFxufVxcclxcbnRhYmxlLnRvYy1pdGVtLWxpc3R7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG4udG9jLWl0ZW0tdmlld3tcXHJcXG4gICAgcGFkZGluZzogMCAyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogODAlO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG48L3N0eWxlPlwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5mb3JtLWhlbHBlcltkYXRhLXYtNzk3NmM0ZjRde1xcclxcbiAgICBmb250LXNpemU6MTJweDtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG4uZm9ybS1sYWJlbFtkYXRhLXYtNzk3NmM0ZjRde1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6LjI1ZW07XFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9wb3B1cC92aWV3cy9Eb3dubG9hZFBhZ2UudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUF5RkU7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3BCO0FBQ0E7SUFDRSxrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiZG93bmxvYWQtcGFnZSBwYWdlXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZGwtY250IHRleHQtY2VudGVyXFxcIiB2LWlmPVxcXCJjb3Vyc2VcXFwiPlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImV4ZXJjaXNlLWZpbGUtY250XFxcIiB2LWlmPVxcXCJleGVyY2lzZUZpbGVcXFwiPlxcclxcbiAgICAgICAgPGRpdj48bGFiZWwgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiPkV4ZXJjaXNlIEZpbGU6IDwvbGFiZWw+PGEgOmhyZWY9XFxcImV4ZXJjaXNlRmlsZS51cmxcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj57e2V4ZXJjaXNlRmlsZS5uYW1lfX08L2E+PC9kaXY+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiZGwtY29uZmlnLWNudFxcXCIgdi1pZj1cXFwiZG93bmxvYWRDb25maWdcXFwiPlxcclxcbiAgICAgICAgPGRpdj48bGFiZWwgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiPlNldCB2aWRlbyBvdXRwdXQgZm9ybWF0IDogPC9sYWJlbD4gXFxyXFxuICAgICAgICAgIDxzZWxlY3Qgdi1tb2RlbD1cXFwiZG93bmxvYWRDb25maWcuc2VsZWN0ZWRGbXRMaXN0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBAY2hhbmdlPVxcXCJ1cGRhdGVTZWxlY3RlZEZtdCgpXFxcIiBzdHlsZT1cXFwid2lkdGg6MTIwcHg7ZGlzcGxheTppbmxpbmVcXFwiPlxcclxcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIlxcXCI+LS1DaG9vc2UtLTwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgIDxvcHRpb24gdi1mb3I9XFxcImZtdCBpbiBkb3dubG9hZENvbmZpZy5mbXRMaXN0XFxcIiA6dmFsdWU9XFxcImZtdFxcXCI+e3tmbXR9fTwvb3B0aW9uPlxcclxcbiAgICAgICAgICA8L3NlbGVjdD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZvcm0taGVscGVyXFxcIj5BdmFpbGFibGUgdmlkZW8gZm9ybWF0OiB7e2Rvd25sb2FkQ29uZmlnLmZtdExpc3Quam9pbignLCAnKX19PC9zcGFuPlxcclxcblxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImRsLXBsYXlsaXN0LWNudFxcXCIgdi1pZj1cXFwiZG93bmxvYWRDb25maWcuc2VsZWN0ZWRGbXRMaXN0XFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+UGxheWxpc3QgRmlsZSA6IDwvbGFiZWw+PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIj57e2NvdXJzZS5zbHVnfX0te3tkb3dubG9hZENvbmZpZy5zZWxlY3RlZEZtdExpc3R9fS5tM3U8L2E+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiZGwtcGxheWxpc3QtY250XFxcIiB2LWlmPVxcXCJkb3dubG9hZENvbmZpZy5zZWxlY3RlZEZtdExpc3RcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj5IZWxwZXIgU2NyaXB0IDogPC9sYWJlbD48YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiPnt7Y291cnNlLnNsdWd9fS17e2Rvd25sb2FkQ29uZmlnLnNlbGVjdGVkRm10TGlzdH19LXV0aWwuc2g8L2E+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiZXhlcmNpc2UtZmlsZS1jbnRcXFwiIHYtaWY9XFxcImNvdXJzZS5zb3VyY2VDb2RlUmVwb3NpdG9yeVxcXCI+XFxyXFxuICAgICAgICA8ZGl2PjxsYWJlbCBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+U291cmNlIFJlcG9zaXRvcnkgOiA8L2xhYmVsPiB7e2NvdXJzZS5zb3VyY2VDb2RlUmVwb3NpdG9yeX19PC9kaXY+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgPC9kaXY+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG48c2NyaXB0IGxhbmc9XFxcInRzXFxcIj5cXHJcXG5pbXBvcnQgeyBDb3Vyc2VfdGFibGVGaWVsZCwgRG93bmxvYWRDb25maWdfdGFibGVGaWVsZCwgRXhlcmNpc2VGaWxlX3RhYmxlRmllbGQgfSBmcm9tICcuLi8uLi90eXBlcy90YWJsZUZpZWxkcyc7XFxyXFxuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCBQcm9wVHlwZSwgcmVmIH0gZnJvbSAndnVlJztcXHJcXG5pbXBvcnQgU3RvcmUgZnJvbSAnLi4vLi4vbGlicy9zdG9yZSc7XFxyXFxuXFxyXFxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcXHJcXG4gIGRhdGEoKSB7XFxyXFxuICAgIHJldHVybiB7XFxyXFxuICAgICAgbmF2OiAnZG93bmxvYWRzJ1xcclxcbiAgICB9XFxyXFxuICB9LFxcclxcbiAgcHJvcHM6e1xcclxcbiAgICBjb3Vyc2UgOiB7XFxyXFxuICAgICAgcmVxdWlyZWQgOiBmYWxzZSxcXHJcXG4gICAgICB0eXBlIDogT2JqZWN0IGFzIFByb3BUeXBlPENvdXJzZV90YWJsZUZpZWxkPlxcclxcbiAgICB9XFxyXFxuICB9LFxcclxcbiAgc2V0dXAoKXtcXHJcXG4gICAgY29uc3QgY291cnNlID0gcmVmPENvdXJzZV90YWJsZUZpZWxkPigpO1xcclxcbiAgICBjb25zdCBleGVyY2lzZUZpbGUgPSByZWY8RXhlcmNpc2VGaWxlX3RhYmxlRmllbGQ+KCk7XFxyXFxuICAgIGNvbnN0IGRvd25sb2FkQ29uZmlnID0gcmVmPERvd25sb2FkQ29uZmlnX3RhYmxlRmllbGQ+KCk7XFxyXFxuICAgIHJldHVybntcXHJcXG4gICAgICBjb3Vyc2UsIGV4ZXJjaXNlRmlsZSwgZG93bmxvYWRDb25maWdcXHJcXG4gICAgfTtcXHJcXG4gIH0sXFxyXFxuICBtb3VudGVkKCl7XFxyXFxuICAgIHRoaXMubG9hZERvd25sb2FkRGF0YSgpO1xcclxcbiAgfSxcXHJcXG4gIG1ldGhvZHM6e1xcclxcbiAgICB1cGRhdGVTZWxlY3RlZEZtdCgpe1xcclxcbiAgICAgIFN0b3JlLnVwZGF0ZURvd25sb2FkQ29uZmlnKCdzZWxlY3RlZEZtdExpc3QnLHRoaXMuZG93bmxvYWRDb25maWcuc2VsZWN0ZWRGbXRMaXN0LHRoaXMuY291cnNlLklEKTtcXHJcXG4gICAgfSxcXHJcXG4gICAgaXNWYWxpZENvdXJzZSgpe1xcclxcbiAgICAgIGlmKCF0aGlzLmNvdXJzZSl7XFxyXFxuICAgICAgICByZXR1cm4gZmFsc2U7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGlmKHR5cGVvZiB0aGlzLmNvdXJzZS5JRCA9PT0gJ3VuZGVmaW5lZCcpe1xcclxcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICByZXR1cm4gdHJ1ZTtcXHJcXG4gICAgfSxcXHJcXG4gICAgbG9hZERvd25sb2FkRGF0YSgpe1xcclxcbiAgICAgIGlmKCF0aGlzLmlzVmFsaWRDb3Vyc2UoKSl7XFxyXFxuICAgICAgICBjb25zdCBhcHBJbmZvID0gU3RvcmUuZ2V0QXBwSW5mbygpO1xcclxcbiAgICAgICAgLy8gY29uc29sZS5sb2coYXBwSW5mbylcXHJcXG4gICAgICAgIHRoaXMuY291cnNlID0gU3RvcmUuZ2V0Q291cnNlKGFwcEluZm8ubGFzdENvdXJzZVNsdWcpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBTdG9yZS5zZXRBcHBTdGF0ZSgxLHRoaXMuY291cnNlLnNsdWcpO1xcclxcblxcclxcbiAgICAgIC8vIGxvYWQgZXhyY2lzZSBmaWxlXFxyXFxuICAgICAgdGhpcy5leGVyY2lzZUZpbGUgPSBTdG9yZS5nZXRFeGVyY2lzZUZpbGUodGhpcy5jb3Vyc2UuSUQpO1xcclxcblxcclxcbiAgICAgIC8vIGxvYWQgZG93bmxvYWQgQ29uZmlnXFxyXFxuICAgICAgdGhpcy5kb3dubG9hZENvbmZpZyA9IFN0b3JlLmdldERvd25sb2FkQ29uZmlnKHRoaXMuY291cnNlLklEKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgfVxcclxcbn0pXFxyXFxuPC9zY3JpcHQ+XFxyXFxuXFxyXFxuPHN0eWxlIHNjb3BlZD5cXHJcXG4gIC5mb3JtLWhlbHBlcntcXHJcXG4gICAgZm9udC1zaXplOjEycHg7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIH1cXHJcXG4gIC5mb3JtLWxhYmVse1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6LjI1ZW07XFxyXFxuICB9XFxyXFxuPC9zdHlsZT5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIjcG9wdXAge1xcclxcbiAgICB3aWR0aCA6IDY4MHB4O1xcclxcbi8qICAgIG1pbi1oZWlnaHQ6IDQ4MHB4OyovXFxyXFxuICAgIHBhZGRpbmc6IDFlbSAwO1xcclxcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjZGRkO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZXtcXHJcXG4gIG1hcmdpbiA6MCAxZW07XFxyXFxuICBwYWRkaW5nOiAxZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY291cnNlLXBhZ2UgLmNvdXJzZXtcXHJcXG4gIG1hcmdpbi1ib3R0b206MWVtO1xcclxcbn1cXHJcXG4uY291cnNlLXBhZ2UgLmNvdXJzZS1zZWN0aW9ue1xcclxcbiAgcGFkZGluZzouNWVtIDA7XFxyXFxufVxcclxcbi5jb3Vyc2UtcGFnZSAuYWNjb3JkaW9uLWJ1dHRvbjpmb2N1cyB7XFxyXFxuICAgIHotaW5kZXg6IDM7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIG91dGxpbmU6IDA7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxufVxcclxcbi5jb3Vyc2UtcGFnZSAuYWNjb3JkaW9uLWJ1dHRvbjpub3QoLmNvbGxhcHNlZCkge1xcclxcbiAgICBjb2xvcjogaW5oZXJpdDsgXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3gtc2hhZG93OiBub25lOyBcXHJcXG59XFxyXFxuLmNvdXJzZS1wYWdlIC5hY2NvcmRpb24tYnV0dG9uOm5vdCguY29sbGFwc2VkKSxcXHJcXG4uY291cnNlLXBhZ2UgLmFjY29yZGlvbi1idXR0b24uY29sbGFwc2VkLFxcclxcbi5jb3Vyc2UtcGFnZSAuYWNjb3JkaW9uLWJ1dHRvbjpub3QoLmNvbGxhcHNlZCk6OmFmdGVyLFxcclxcbi5jb3Vyc2UtcGFnZSAuYWNjb3JkaW9uLWJ1dHRvbi5jb2xsYXBzZWQ6OmFmdGVye1xcclxcbiAgYmFja2dyb3VuZDpub25lO1xcclxcbn1cXHJcXG4uY291cnNlLXBhZ2UgLmFjY29yZGlvbi1idXR0b24uY3VzdG9tIHtcXHJcXG5wb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAyNHB4O1xcclxcbiAgICBwYWRkaW5nOiAwcHggNnB4O1xcclxcbiAgICBsZWZ0OiA0MnB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAzcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gfVxcclxcbiAuY291cnNlLXBhZ2UgLmFjY29yZGlvbi1ib2R5e1xcclxcbiAgcGFkZGluZzowO1xcclxcbiB9XFxyXFxuXFxyXFxuLndlbGNvbWUtcGFnZSAuYWN0aW9uLWNudHtcXHJcXG4gIHRleHQtYWxpZ246Y2VudGVyO1xcclxcbiAgcGFkZGluZzouNWVtO1xcclxcbn1cXHJcXG4ud2VsY29tZS1wYWdlIC5idG4tY250e1xcclxcbiAgbWFyZ2luOjFlbTtcXHJcXG59XFxyXFxuLndlbGNvbWUtcGFnZXtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcbiNwb3B1cCA+IC5hcHAtY29udGFpbmVyID4gLmNvbnNvbGV7XFxyXFxuIG1hcmdpbi1ib3R0b206IC0zM3B4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLW5hdmlnYXRpb24gdWwuYnRuLWdyb3Vwe1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9wb3B1cC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0FBQ2pCLHlCQUF5QjtJQUNyQixjQUFjO0lBQ2Qsc0JBQXNCO0FBQzFCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGNBQWM7SUFDZCw2QkFBNkI7SUFDN0IsZ0JBQWdCO0FBQ3BCO0FBQ0E7Ozs7RUFJRSxlQUFlO0FBQ2pCO0FBQ0E7QUFDQSxrQkFBa0I7SUFDZCxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGVBQWU7Q0FDbEI7Q0FDQTtFQUNDLFNBQVM7Q0FDVjs7QUFFRDtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7Q0FDQyxvQkFBb0I7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjcG9wdXAge1xcclxcbiAgICB3aWR0aCA6IDY4MHB4O1xcclxcbi8qICAgIG1pbi1oZWlnaHQ6IDQ4MHB4OyovXFxyXFxuICAgIHBhZGRpbmc6IDFlbSAwO1xcclxcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjZGRkO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZXtcXHJcXG4gIG1hcmdpbiA6MCAxZW07XFxyXFxuICBwYWRkaW5nOiAxZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY291cnNlLXBhZ2UgLmNvdXJzZXtcXHJcXG4gIG1hcmdpbi1ib3R0b206MWVtO1xcclxcbn1cXHJcXG4uY291cnNlLXBhZ2UgLmNvdXJzZS1zZWN0aW9ue1xcclxcbiAgcGFkZGluZzouNWVtIDA7XFxyXFxufVxcclxcbi5jb3Vyc2UtcGFnZSAuYWNjb3JkaW9uLWJ1dHRvbjpmb2N1cyB7XFxyXFxuICAgIHotaW5kZXg6IDM7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIG91dGxpbmU6IDA7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxufVxcclxcbi5jb3Vyc2UtcGFnZSAuYWNjb3JkaW9uLWJ1dHRvbjpub3QoLmNvbGxhcHNlZCkge1xcclxcbiAgICBjb2xvcjogaW5oZXJpdDsgXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3gtc2hhZG93OiBub25lOyBcXHJcXG59XFxyXFxuLmNvdXJzZS1wYWdlIC5hY2NvcmRpb24tYnV0dG9uOm5vdCguY29sbGFwc2VkKSxcXHJcXG4uY291cnNlLXBhZ2UgLmFjY29yZGlvbi1idXR0b24uY29sbGFwc2VkLFxcclxcbi5jb3Vyc2UtcGFnZSAuYWNjb3JkaW9uLWJ1dHRvbjpub3QoLmNvbGxhcHNlZCk6OmFmdGVyLFxcclxcbi5jb3Vyc2UtcGFnZSAuYWNjb3JkaW9uLWJ1dHRvbi5jb2xsYXBzZWQ6OmFmdGVye1xcclxcbiAgYmFja2dyb3VuZDpub25lO1xcclxcbn1cXHJcXG4uY291cnNlLXBhZ2UgLmFjY29yZGlvbi1idXR0b24uY3VzdG9tIHtcXHJcXG5wb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAyNHB4O1xcclxcbiAgICBwYWRkaW5nOiAwcHggNnB4O1xcclxcbiAgICBsZWZ0OiA0MnB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAzcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gfVxcclxcbiAuY291cnNlLXBhZ2UgLmFjY29yZGlvbi1ib2R5e1xcclxcbiAgcGFkZGluZzowO1xcclxcbiB9XFxyXFxuXFxyXFxuLndlbGNvbWUtcGFnZSAuYWN0aW9uLWNudHtcXHJcXG4gIHRleHQtYWxpZ246Y2VudGVyO1xcclxcbiAgcGFkZGluZzouNWVtO1xcclxcbn1cXHJcXG4ud2VsY29tZS1wYWdlIC5idG4tY250e1xcclxcbiAgbWFyZ2luOjFlbTtcXHJcXG59XFxyXFxuLndlbGNvbWUtcGFnZXtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcbiNwb3B1cCA+IC5hcHAtY29udGFpbmVyID4gLmNvbnNvbGV7XFxyXFxuIG1hcmdpbi1ib3R0b206IC0zM3B4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLW5hdmlnYXRpb24gdWwuYnRuLWdyb3Vwe1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s4XS51c2VbMF0hLi9GZXRjaFF1ZXVlQmFyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTkwNWFlYzQyJnNjb3BlZD10cnVlJmxhbmc9Y3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzhdLnVzZVswXSEuL0ZldGNoUXVldWVCYXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OTA1YWVjNDImc2NvcGVkPXRydWUmbGFuZz1jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzhdLnVzZVswXSEuL0ZldGNoUXVldWVCYXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OTA1YWVjNDImc2NvcGVkPXRydWUmbGFuZz1jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0udXNlWzBdIS4vRmV0Y2hTZWN0aW9uUXVldWUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmFmZGE2NDkmc2NvcGVkPXRydWUmbGFuZz1jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHA7XG5cbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0udXNlWzBdIS4vRmV0Y2hTZWN0aW9uUXVldWUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmFmZGE2NDkmc2NvcGVkPXRydWUmbGFuZz1jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzhdLnVzZVswXSEuL0ZldGNoU2VjdGlvblF1ZXVlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTZhZmRhNjQ5JnNjb3BlZD10cnVlJmxhbmc9Y3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzhdLnVzZVswXSEuL0xvZ0Jhci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01YzhhMjg3YyZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s4XS51c2VbMF0hLi9Mb2dCYXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWM4YTI4N2Mmc2NvcGVkPXRydWUmbGFuZz1jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzhdLnVzZVswXSEuL0xvZ0Jhci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01YzhhMjg3YyZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s4XS51c2VbMF0hLi9Ub2NJdGVtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNjMzU3NGZlJnNjb3BlZD10cnVlJmxhbmc9Y3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzhdLnVzZVswXSEuL1RvY0l0ZW0udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2MzNTc0ZmUmc2NvcGVkPXRydWUmbGFuZz1jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzhdLnVzZVswXSEuL1RvY0l0ZW0udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2MzNTc0ZmUmc2NvcGVkPXRydWUmbGFuZz1jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0udXNlWzBdIS4vRG93bmxvYWRQYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc5NzZjNGY0JnNjb3BlZD10cnVlJmxhbmc9Y3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzhdLnVzZVswXSEuL0Rvd25sb2FkUGFnZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03OTc2YzRmNCZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0udXNlWzBdIS4vRG93bmxvYWRQYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc5NzZjNGY0JnNjb3BlZD10cnVlJmxhbmc9Y3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BvcHVwLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wb3B1cC5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BvcHVwLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCBQYWdlTmF2aWdhdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvUGFnZU5hdmlnYXRpb24udnVlJztcbmltcG9ydCBXZWxjb21lUGFnZSBmcm9tICcuL3ZpZXdzL1dlbGNvbWVQYWdlLnZ1ZSc7XG5pbXBvcnQgQ291cnNlUGFnZSBmcm9tICcuL3ZpZXdzL0NvdXJzZVBhZ2UudnVlJztcbmltcG9ydCBEb3dubG9hZFBhZ2UgZnJvbSAnLi92aWV3cy9Eb3dubG9hZFBhZ2UudnVlJztcbmltcG9ydCBBYm91dFBhZ2UgZnJvbSAnLi92aWV3cy9BYm91dFBhZ2UudnVlJztcbmltcG9ydCBIZWxwUGFnZSBmcm9tICcuL3ZpZXdzL0hlbHBQYWdlLnZ1ZSc7XG5pbXBvcnQgU3RvcmUgZnJvbSAnLi4vbGlicy9zdG9yZSc7XG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICAgIG5hbWU6ICdQb3B1cCcsXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBQYWdlTmF2aWdhdGlvbixcbiAgICAgICAgV2VsY29tZVBhZ2UsXG4gICAgICAgIENvdXJzZVBhZ2UsXG4gICAgICAgIERvd25sb2FkUGFnZSxcbiAgICAgICAgQWJvdXRQYWdlLFxuICAgICAgICBIZWxwUGFnZVxuICAgIH0sXG4gICAgc2V0dXAoKSB7XG4gICAgICAgIGNvbnN0IG5hdiA9IHJlZignd2VsY29tZScpO1xuICAgICAgICBjb25zdCBjb3Vyc2UgPSByZWYoKTtcbiAgICAgICAgY29uc3Qgb25OYXZVcGRhdGUgPSAodGFyZ2V0KSA9PiB7XG4gICAgICAgICAgICBuYXYudmFsdWUgPSB0YXJnZXQ7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG9uQ291cnNlVXBkYXRlID0gKHRhcmdldCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2codGFyZ2V0KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IHJlZignJyk7XG4gICAgICAgIGNvbnN0IGFwcCA9IHJlZigpO1xuICAgICAgICByZXR1cm4geyBuYXYsIGNvdXJzZSwgb25OYXZVcGRhdGUsIG9uQ291cnNlVXBkYXRlLCBtZXNzYWdlLCBhcHAgfTtcbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdBcHAgRW50cnkgUG9pbnQgU3RhcnQgaGVyZS4uLicpO1xuICAgICAgICAvLyBTdG9yZS5wcmVwYXJlQXBwU3RvcmFnZSgpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRiID0gU3RvcmUuZGIoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRiKTtcbiAgICAgICAgICAgIGRiLnN1YnNjcmliZSgnYXBwJywgKHJvdykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwID0gcm93O1xuICAgICAgICAgICAgICAgIHRoaXMubG9nKGBBcHBTdGF0ZToke3Jvdy5zdGF0ZX1gKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgbG9nKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIH0sXG4gICAgICAgIHNldENvdXJzZShjb3Vyc2UpIHtcbiAgICAgICAgICAgIHRoaXMuY291cnNlID0gY291cnNlO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXYgPSB0aGlzLiRyZWZzLnBhZ2VOYXZpZ2F0aW9uLm5hdiA9ICdjb3Vyc2UnO1xuICAgICAgICAgICAgfSwgMjUwKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIiwiaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IFByb3h5IGZyb20gJy4uLy4uL2xpYnMvcHJveHknO1xuaW1wb3J0IGpRdWVyeSBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgZmluZEl0ZW1zLCBmaW5kRFMsIGdldEZtdCB9IGZyb20gJy4uLy4uL2xpYnMvdXRpbHMnO1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgICBwcm9wczoge1xuICAgICAgICB0b2M6IHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogT2JqZWN0XG4gICAgICAgIH0sXG4gICAgICAgIHNlY3Rpb25JbmRleDoge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXJcbiAgICAgICAgfSxcbiAgICAgICAgdG9jSW5kZXg6IHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogTnVtYmVyXG4gICAgICAgIH0sXG4gICAgICAgIHF1ZXVlOiB7XG4gICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHNldHVwKHByb3BzKSB7XG4gICAgICAgIGNvbnN0IGZldGNoUXVldWVFbmFibGVkID0gcmVmKHByb3BzLnF1ZXVlKTtcbiAgICAgICAgY29uc3QgdG9jID0gcmVmKHByb3BzLnRvYyk7XG4gICAgICAgIGNvbnN0IHNlY3Rpb25JbmRleCA9IHJlZihwcm9wcy5zZWN0aW9uSW5kZXgpO1xuICAgICAgICBjb25zdCB0b2NJbmRleCA9IHJlZihwcm9wcy50b2NJbmRleCk7XG4gICAgICAgIGxldCBleGVyY2lzZUZpbGUgPSByZWYoeyBuYW1lOiAnJywgdXJsOiAnJyB9KTtcbiAgICAgICAgY29uc3QgYnRuU3RhdGUgPSByZWYoMSk7XG4gICAgICAgIHJldHVybiB7IHRvYywgc2VjdGlvbkluZGV4LCB0b2NJbmRleCwgZXhlcmNpc2VGaWxlLCBidG5TdGF0ZSwgZmV0Y2hRdWV1ZUVuYWJsZWQgfTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgaXNRdWV1ZWQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mZXRjaFF1ZXVlRW5hYmxlZCA/ICh0aGlzLiRwYXJlbnQuY2hlY2tlZFF1ZXVlc1t0aGlzLnRvY0luZGV4XSAmJiB0aGlzLiRwYXJlbnQuZXhjbHVkZVF1ZXVlcy5pbmRleE9mKHRoaXMudG9jSW5kZXgpID09IC0xKSA6ICh0aGlzLmJ0blN0YXRlID09IDEgfHwgdGhpcy5idG5TdGF0ZSA9PSA0KTtcbiAgICAgICAgfSxcbiAgICAgICAgZmV0Y2hUb2MoKSB7XG4gICAgICAgICAgICAvLyAwLiBjaGVjayBpZiBxdWV1ZXNcbiAgICAgICAgICAgIGNvbnN0IGlzUXVldWVkID0gdGhpcy5pc1F1ZXVlZCgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2lzUXVldWVkOicsIGlzUXVldWVkKTtcbiAgICAgICAgICAgIGlmIChpc1F1ZXVlZCkge1xuICAgICAgICAgICAgICAgIC8vIDEuIHNldCBidG4gc3RhdGUgaWNvbiB0byBbbG9hZGluZ11cbiAgICAgICAgICAgICAgICB0aGlzLmJ0blN0YXRlID0gMjtcbiAgICAgICAgICAgICAgICAvLyBjb25zdCB1cmwgPSAnL2NvbnRlbnQuaHRtbD9yYW5kPScrKE1hdGgucmFuZG9tKCkudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gdGhpcy50b2MudXJsO1xuICAgICAgICAgICAgICAgIFByb3h5LmdldCh1cmwsIChyZXNwb25zZVRleHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbGlkUmVzb3VyY2UgPSB0aGlzLnBhcnNlVG9jKHJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZFJlc291cmNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAzLiBzZXQgYnRuIHN0YXRlIHRvIFtjaGVja2VkXVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5TdGF0ZSA9IDM7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCd1cGRhdGUnLCB7IHNyYzogJ1BvcHVwLkNvdXJzZVBhZ2UuVG9jSXRlbS5GZXRjaEJ1dHRvbicsIHRvYzogdGhpcy50b2MsIGV4ZXJjaXNlRmlsZTogdGhpcy5leGVyY2lzZUZpbGUgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5mZXRjaFF1ZXVlRW5hYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdRdWV1ZSBDb21wbGV0ZTogdHJpZ2dlcmluZyBuZXh0IGZldGNoVG9jIGZyb20gcGFyZW50LCBsYXN0VG9jSW5kZXg6JywgdGhpcy50b2NJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcGFyZW50LnRyaWdnZXJGZXRjaFF1ZXVlKHRoaXMudG9jSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy4kcGFyZW50LnRyaWdnZXJGZXRjaFF1ZXVlKHRoaXMudG9jSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWRkVG9QYXJlbnQgZXhjbHVkZVF1ZXVlXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQudHJpZ2dlckV4Y2x1ZGVGZXRjaFF1ZXVlKHRoaXMudG9jSW5kZXgsIHRoaXMuZmV0Y2hRdWV1ZUVuYWJsZWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gMy4gc2V0IGJ0biBzdGF0ZSB0byBpY29uIFtyZXRyeV1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuU3RhdGUgPSA0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZmV0Y2hRdWV1ZUVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQudHJpZ2dlckZhaWxlZEZldGNoUXVldWUodGhpcy50b2NJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1F1ZXVlIEZhaWxlZDogdHJpZ2dlcmluZyBmZXRjaFRvYyBmcm9tIEZldGNoQnV0dG9uLCBsYXN0VG9jSW5kZXg6JywgdGhpcy50b2NJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCAocikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyAzLiBzZXQgYnRuIHN0YXRlIHRvIGljb24gW3JldHJ5XVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0blN0YXRlID0gNDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZmV0Y2hRdWV1ZUVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHBhcmVudC50cmlnZ2VyRmFpbGVkRmV0Y2hRdWV1ZSh0aGlzLnRvY0luZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdRdWV1ZSBGYWlsZWQ6IHRyaWdnZXJpbmcgZmV0Y2hUb2MgZnJvbSBGZXRjaEJ1dHRvbiwgbGFzdFRvY0luZGV4OicsIHRoaXMudG9jSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mZXRjaFF1ZXVlRW5hYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQudHJpZ2dlckZldGNoUXVldWUodGhpcy50b2NJbmRleCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvLyBSZWJ1aWxkIHRvYyBkYXRhIHRvIHBvcHVsYXRlIFxuICAgICAgICAvLyBTdHJlYW1Mb2NhdGlvbnNcbiAgICAgICAgLy8gRXhlcmNpc2VGaWxlXG4gICAgICAgIHBhcnNlVG9jKHJlc3BvbnNlVGV4dCkge1xuICAgICAgICAgICAgbGV0IHZhbGlkUmVzb3VyY2UgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbnN0IGVsRGl2ID0galF1ZXJ5KGA8ZGl2PiR7cmVzcG9uc2VUZXh0fTwvZGl2PmApO1xuICAgICAgICAgICAgY29uc3QgZWxDb2RlcyA9IGVsRGl2LmZpbmQoJ2NvZGUnKTtcbiAgICAgICAgICAgIGxldCBkYXRhQ29kZXMgPSBbXTtcbiAgICAgICAgICAgIGxldCB0b2MgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnRvYyk7XG4gICAgICAgICAgICB0b2Muc3RyZWFtTG9jYXRpb25zID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBjb2RlSW5kZXggaW4gZWxDb2Rlcykge1xuICAgICAgICAgICAgICAgIGxldCBlbENvZGUgPSBlbENvZGVzW2NvZGVJbmRleF07XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsQ29kZS5pZC5tYXRjaCgvXmJwci1ndWlkLykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFDb2Rlcy5wdXNoKEpTT04ucGFyc2UoZWxDb2RlLnRleHRDb250ZW50KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHsgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRhdGFDb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YUNvZGVzKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWFyY2hUZXJtcyA9IFtcbiAgICAgICAgICAgICAgICAgICAgXCJjb20ubGlua2VkaW4ubGVhcm5pbmcuYXBpLmRlY28uY29udGVudC5FeGVyY2lzZUZpbGVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJjb20ubGlua2VkaW4udmlkZW9jb250ZW50LlRyYW5zY3JpcHRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJjb20ubGlua2VkaW4udmlkZW9jb250ZW50LlN0cmVhbWluZ0xvY2F0aW9uXCJcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHNlYXJjaFRlcm1JZHggPSAwOyBzZWFyY2hUZXJtSWR4IDwgc2VhcmNoVGVybXMubGVuZ3RoOyBzZWFyY2hUZXJtSWR4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hUZXJtc1tzZWFyY2hUZXJtSWR4XTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0cyA9IGZpbmRJdGVtcyhxdWVyeSwgZGF0YUNvZGVzKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXJjaFRlcm1JZHggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXhlcmNpc2VGaWxlXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4ZXJjaXNlRmlsZU9iaiA9IGZpbmREUygnJHR5cGUnLCAnY29tLmxpbmtlZGluLmxlYXJuaW5nLmFwaS5kZWNvLmNvbnRlbnQuRXhlcmNpc2VGaWxlJywgcmVzdWx0cywgWydzaXplSW5CeXRlcycsICduYW1lJywgJ3VybCddKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV4ZXJjaXNlRmlsZSA9IGV4ZXJjaXNlRmlsZU9iajtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChzZWFyY2hUZXJtSWR4ID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRyYW5zY3JpcHRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zY3JpcHRPYmogPSBmaW5kRFMoJyR0eXBlJywgXCJjb20ubGlua2VkaW4udmlkZW9jb250ZW50LlRyYW5zY3JpcHRcIiwgcmVzdWx0cywgWydjYXB0aW9uRmlsZScsICdjYXB0aW9uRm9ybWF0J10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCdvYmplY3QnID09PSB0eXBlb2YgdHJhbnNjcmlwdE9iaikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYy5jYXB0aW9uVXJsID0gdHJhbnNjcmlwdE9iai5jYXB0aW9uRmlsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2MuY2FwdGlvbkZtdCA9IHRyYW5zY3JpcHRPYmouY2FwdGlvbkZvcm1hdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VhcmNoVGVybUlkeCA9PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzdHJlYW1Mb2NhdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0cmVhbUxvY2F0aW9uT2JqcyA9IGZpbmREUygnJHR5cGUnLCBcImNvbS5saW5rZWRpbi52aWRlb2NvbnRlbnQuU3RyZWFtaW5nTG9jYXRpb25cIiwgcmVzdWx0cywgWydleHBpcmVzQXQnLCAndXJsJ10sIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0cmVhbUxvY2F0aW9uT2Jqcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgc3RsSWR4IGluIHN0cmVhbUxvY2F0aW9uT2Jqcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBzdHJlYW1Mb2NhdGlvbk9ianNbc3RsSWR4XS51cmw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZtdCA9IGdldEZtdCh1cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2Muc3RyZWFtTG9jYXRpb25zLnB1c2goeyB1cmwsIGZtdCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodG9jLmNhcHRpb25VcmwubGVuZ3RoID4gMCAmJiB0b2Muc3RyZWFtTG9jYXRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB2YWxpZFJlc291cmNlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnRvYyA9IHRvYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWxpZFJlc291cmNlO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iLCJpbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICAgIHByb3BzOiB7XG4gICAgICAgIHNlY3Rpb25JbmRleDoge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgc2V0dXAocHJvcHMpIHtcbiAgICAgICAgbGV0IHF1ZXVlU2x1Z3MgPSByZWYoW10pO1xuICAgICAgICBsZXQgcXVldWVUb2NJbmRleCA9IHJlZihbXSk7XG4gICAgICAgIGxldCBleGNsdWRlU2x1Z3MgPSByZWYoW10pO1xuICAgICAgICBsZXQgcGVyY2VudGFnZSA9IHJlZigwKTtcbiAgICAgICAgbGV0IGJ0blN0YXRlID0gcmVmKDEpO1xuICAgICAgICBsZXQgbGFzdFRvY0luZGV4ID0gcmVmKDApO1xuICAgICAgICBjb25zdCBzZWN0aW9uSW5kZXggPSByZWYocHJvcHMuc2VjdGlvbkluZGV4KTtcbiAgICAgICAgcmV0dXJuIHsgcXVldWVUb2NJbmRleCwgcXVldWVTbHVncywgZXhjbHVkZVNsdWdzLCBwZXJjZW50YWdlLCBidG5TdGF0ZSwgbGFzdFRvY0luZGV4LCBzZWN0aW9uSW5kZXggfTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgc2V0UHJvZ3Jlc3MobGFzdFRvY0luZGV4LCBwZXJjZW50YWdlKSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RUb2NJbmRleCA9IGxhc3RUb2NJbmRleDtcbiAgICAgICAgICAgIHRoaXMucGVyY2VudGFnZSA9IHBlcmNlbnRhZ2U7XG4gICAgICAgICAgICBpZiAocGVyY2VudGFnZSA9PSAxMDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ0blN0YXRlID0gMztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJHBhcmVudC5mZXRjaFNlY3Rpb25RdWV1ZS5yZXBvcnQodGhpcy5zZWN0aW9uSW5kZXgsIGxhc3RUb2NJbmRleCwgMCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwZXJjZW50YWdlKTtcbiAgICAgICAgfSxcbiAgICAgICAgc3RhcnRRdWV1ZSgpIHtcbiAgICAgICAgICAgIHRoaXMucGVyY2VudGFnZSA9IHRoaXMucGVyY2VudGFnZSA9PSAwID8gMSA6IHRoaXMucGVyY2VudGFnZTtcbiAgICAgICAgICAgIHRoaXMuYnRuU3RhdGUgPSAyO1xuICAgICAgICAgICAgdGhpcy4kcGFyZW50LnRvY0l0ZW1zW3RoaXMuc2VjdGlvbkluZGV4XS50cmlnZ2VyRmV0Y2hRdWV1ZSh0aGlzLmxhc3RUb2NJbmRleCA9PSAwID8gLTEgOiB0aGlzLmxhc3RUb2NJbmRleCk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiIsImltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJztcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gICAgc2V0dXAoKSB7XG4gICAgICAgIGNvbnN0IHF1ZXVlU2x1Z3MgPSByZWYoW10pO1xuICAgICAgICBjb25zdCBidG5TdGF0ZSA9IHJlZigxKTtcbiAgICAgICAgY29uc3QgcGVyY2VudGFnZSA9IHJlZigwKTtcbiAgICAgICAgY29uc3QgbGFzdFNlY3Rpb25JbmRleCA9IHJlZigwKTtcbiAgICAgICAgY29uc3Qgc2VjdGlvbkluZGV4UXVldWVzID0gcmVmKFtdKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHF1ZXVlU2x1Z3MsXG4gICAgICAgICAgICBidG5TdGF0ZSxcbiAgICAgICAgICAgIHBlcmNlbnRhZ2UsXG4gICAgICAgICAgICBsYXN0U2VjdGlvbkluZGV4LFxuICAgICAgICAgICAgc2VjdGlvbkluZGV4UXVldWVzXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBtb3VudGVkKCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VjdGlvbkluZGV4UXVldWVzID0gT2JqZWN0LmtleXModGhpcy4kcGFyZW50LnNlY3Rpb25zKTtcbiAgICAgICAgfSwgMjUwKTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgdG9KU09OU3RyKG9iaikge1xuICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iaik7XG4gICAgICAgIH0sXG4gICAgICAgIGNhbGN1bGF0ZVBlcmNlbnRhZ2VRdWV1ZShjYWxsYmFjaykge1xuICAgICAgICAgICAgY29uc3QgcGVhayA9IHRoaXMucXVldWVTbHVncy5sZW5ndGg7XG4gICAgICAgICAgICBjb25zdCBtYXhQZWFrID0gdGhpcy4kcGFyZW50LmdldFRvdGFsVG9jcygpO1xuICAgICAgICAgICAgY29uc3QgcGVyY2VudGFnZSA9IE1hdGgucm91bmQocGVhayAvIG1heFBlYWsgKiAxMDApO1xuICAgICAgICAgICAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2socGVyY2VudGFnZSwgcGVhaywgbWF4UGVhayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJlcG9ydChzZWN0aW9uSW5kZXgsIHRvY0luZGV4LCBzdGF0dXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlY3Rpb24gPSB0aGlzLiRwYXJlbnQuc2VjdGlvbnNbc2VjdGlvbkluZGV4XTtcbiAgICAgICAgICAgIGNvbnN0IHNsdWcgPSBzZWN0aW9uLml0ZW1zW3RvY0luZGV4XS5zbHVnO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnF1ZXVlU2x1Z3MuaW5jbHVkZXMoc2x1ZykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXVlU2x1Z3MucHVzaChzbHVnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlbWFpbmluZ1RleHQgPSBgJHt0aGlzLnF1ZXVlU2x1Z3MubGVuZ3RofSBvZiAke3RoaXMuJHBhcmVudC5nZXRUb3RhbFRvY3MoKX1gO1xuICAgICAgICAgICAgdGhpcy4kcGFyZW50LmxvZ0Jhci5sb2coYCR7c2VjdGlvbi50aXRsZX0gOiAke3NsdWd9ICR7cmVtYWluaW5nVGV4dH1gLCBzdGF0dXMpO1xuICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVQZXJjZW50YWdlUXVldWUoKHBlcmNlbnRhZ2UpID0+IHRoaXMucGVyY2VudGFnZSA9IHBlcmNlbnRhZ2UpO1xuICAgICAgICAgICAgaWYgKHRoaXMuJHBhcmVudC5mZXRjaFF1ZXVlQmFyW3NlY3Rpb25JbmRleF0ucGVyY2VudGFnZSA9PSAxMDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NRdWV1ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBwcm9jZXNzUXVldWUoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWN0aW9uSW5kZXhRdWV1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMubGFzdFNlY3Rpb25JbmRleCA9IHRoaXMuc2VjdGlvbkluZGV4UXVldWVzLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy4kcGFyZW50LmZldGNoUXVldWVCYXJbdGhpcy5sYXN0U2VjdGlvbkluZGV4XS5zdGFydFF1ZXVlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ0blN0YXRlID0gMztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc3RhcnRRdWV1ZSgpIHtcbiAgICAgICAgICAgIHRoaXMuYnRuU3RhdGUgPSAyO1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzUXVldWUoKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIiwiaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnO1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgICBzZXR1cCgpIHtcbiAgICAgICAgY29uc3QgbW9kZSA9IHJlZigtMSk7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSByZWYoJycpO1xuICAgICAgICByZXR1cm4geyBtb2RlLCBtZXNzYWdlIH07XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGxvZyhtZXNzYWdlLCBtb2RlKSB7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgICAgICAgdGhpcy5tb2RlID0gbW9kZTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIiwiaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnO1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgICBwcm9wczoge1xuICAgICAgICBuYXY6IHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHNldHVwKHByb3BzKSB7XG4gICAgICAgIGNvbnN0IG5hdiA9IHJlZihwcm9wcy5uYXYpO1xuICAgICAgICByZXR1cm4geyBuYXYgfTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgb25OYXZDbGljayh0YXJnZXQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhcmdldCk7XG4gICAgICAgICAgICB0aGlzLm5hdiA9IHRhcmdldDtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZScsIHRhcmdldCk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiIsImltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCBGZXRjaEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL0ZldGNoQnV0dG9uLnZ1ZSc7XG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgRmV0Y2hCdXR0b25cbiAgICB9LFxuICAgIHByb3BzOiB7XG4gICAgICAgIGl0ZW1zOiB7XG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6IEFycmF5XG4gICAgICAgIH0sXG4gICAgICAgIHNlY3Rpb25JbmRleDoge1xuICAgICAgICAgICAgcmVxdWllZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6IE51bWJlclxuICAgICAgICB9XG4gICAgfSxcbiAgICBzZXR1cChwcm9wcykge1xuICAgICAgICBjb25zdCBlbmFibGVRdWV1ZSA9IHJlZih0cnVlKTtcbiAgICAgICAgY29uc3QgaXRlbXMgPSByZWYocHJvcHMuaXRlbXMpO1xuICAgICAgICBjb25zdCBzZWN0aW9uSW5kZXggPSByZWYocHJvcHMuc2VjdGlvbkluZGV4KTtcbiAgICAgICAgY29uc3QgY2hlY2tBbGwgPSByZWYoZmFsc2UpO1xuICAgICAgICBjb25zdCBjaGVja2VkUXVldWVzID0gcmVmKFtdKTtcbiAgICAgICAgY29uc3QgZXhjbHVkZVF1ZXVlcyA9IHJlZihbXSk7XG4gICAgICAgIGNvbnN0IGZldGNoUXVldWVCYXIgPSByZWYoKTtcbiAgICAgICAgbGV0IGZldGNoQnRucyA9IHJlZihbXSk7XG4gICAgICAgIHJldHVybiB7IGZldGNoUXVldWVCYXIsIGl0ZW1zLCBzZWN0aW9uSW5kZXgsIGNoZWNrZWRRdWV1ZXMsIGV4Y2x1ZGVRdWV1ZXMsIGZldGNoQnRucywgY2hlY2tBbGwsIGVuYWJsZVF1ZXVlIH07XG4gICAgfSxcbiAgICBtb3VudGVkKCkge1xuICAgICAgICB0aGlzLmZldGNoUXVldWVCYXIgPSB0aGlzLiRwYXJlbnQuZmV0Y2hRdWV1ZUJhclt0aGlzLnNlY3Rpb25JbmRleF07XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jaGVja0FsbCA9IHRydWU7XG4gICAgICAgICAgICBmb3IgKGxldCB0b2NJbmRleCBpbiB0aGlzLml0ZW1zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja2VkUXVldWVzW3RvY0luZGV4XSA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy8gY29uc3QgdG9jU2x1ZyA9IHRoaXMuaXRlbXNbdG9jSW5kZXhdLnNsdWc7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmZldGNoUXVldWVCYXIucXVldWVUb2NJbmRleC5pbmNsdWRlcyh0b2NJbmRleCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mZXRjaFF1ZXVlQmFyLnF1ZXVlVG9jSW5kZXgucHVzaCh0b2NJbmRleCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAyNTApO1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICB0cmlnZ2VyRmFpbGVkRmV0Y2hRdWV1ZSh0b2NJbmRleCkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5mZXRjaFF1ZXVlQmFyLmJ0blN0YXRlID0gNDtcbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9LFxuICAgICAgICBjYWxjdWxhdGVQZXJjZW50YWdlUXVldWUoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNvbnN0IHBlYWsgPSB0aGlzLmV4Y2x1ZGVRdWV1ZXMubGVuZ3RoO1xuICAgICAgICAgICAgY29uc3QgbWF4UGVhayA9IHRoaXMuaXRlbXMubGVuZ3RoO1xuICAgICAgICAgICAgY29uc3QgcGVyY2VudGFnZSA9IE1hdGgucm91bmQocGVhayAvIG1heFBlYWsgKiAxMDApO1xuICAgICAgICAgICAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2socGVyY2VudGFnZSwgcGVhaywgbWF4UGVhayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHRyaWdnZXJFeGNsdWRlRmV0Y2hRdWV1ZSh0b2NJbmRleCwgZmV0Y2hRdWV1ZUVuYWJsZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvY0luZGV4KTtcbiAgICAgICAgICAgIGlmICh0aGlzLmV4Y2x1ZGVRdWV1ZXMuaW5kZXhPZih0b2NJbmRleCkgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV4Y2x1ZGVRdWV1ZXMucHVzaCh0b2NJbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZmV0Y2hRdWV1ZUVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZVBlcmNlbnRhZ2VRdWV1ZSgocGVyY2VudGFnZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2hRdWV1ZUJhci5zZXRQcm9ncmVzcyh0b2NJbmRleCwgcGVyY2VudGFnZSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNoZWNrZWRRdWV1ZXNbdG9jSW5kZXhdID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmNoZWNrQWxsID0gZmFsc2U7XG4gICAgICAgIH0sXG4gICAgICAgIHRyaWdnZXJGZXRjaFF1ZXVlKHRvY0luZGV4KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0b2NJbmRleCk7XG4gICAgICAgICAgICBjb25zdCBuZXh0VG9jSW5kZXggPSB0b2NJbmRleCArIDE7XG4gICAgICAgICAgICBpZiAobmV4dFRvY0luZGV4IDwgdGhpcy5jaGVja2VkUXVldWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIC8vIHByb2Nlc3MgbmV4dCBmZXRjaCBidXR0b25cbiAgICAgICAgICAgICAgICB0aGlzLmZldGNoQnRuc1tuZXh0VG9jSW5kZXhdLmZldGNoVG9jKHRydWUpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZVBlcmNlbnRhZ2VRdWV1ZSgocGVyY2VudGFnZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2hRdWV1ZUJhci5zZXRQcm9ncmVzcyh0b2NJbmRleCwgcGVyY2VudGFnZSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2hRdWV1ZUJhci5idG5TdGF0ZSA9IHRoaXMuZmV0Y2hRdWV1ZUJhci5wZXJjZW50YWdlID09IDEwMCA/IDMgOiAxO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZldGNoUXVldWVCYXIubGFzdFRvY0luZGV4ID0gMDtcbiAgICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNhbGxpbmcgZmV0Y2ggYnV0dG9uIG5leHQgaW5kZXhcbiAgICAgICAgICAgIC8vIHRoaXMuJHJlZlxuICAgICAgICB9LFxuICAgICAgICBvbkZldGNoVXBkYXRlKHRhcmdldCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGFyZ2V0KVxuICAgICAgICAgICAgdGhpcy4kZW1pdCgndXBkYXRlJywgdGFyZ2V0KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25DaGVja0FsbCgpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY2hlY2tBbGwpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHRvY0luZGV4IGluIHRoaXMuaXRlbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja2VkUXVldWVzW3RvY0luZGV4XSA9IHRoaXMuY2hlY2tBbGw7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IHRvY1NsdWcgPSB0aGlzLml0ZW1zW3RvY0luZGV4XS5zbHVnO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja2VkUXVldWVzW3RvY0luZGV4XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmZldGNoUXVldWVCYXIucXVldWVUb2NJbmRleC5pbmNsdWRlcyh0b2NJbmRleCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZldGNoUXVldWVCYXIucXVldWVUb2NJbmRleC5wdXNoKHRvY0luZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFJbmRleCA9IHRoaXMuZmV0Y2hRdWV1ZUJhci5xdWV1ZVRvY0luZGV4LmluZGV4T2YodG9jSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFJbmRleCAhPSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2hRdWV1ZUJhci5xdWV1ZVRvY0luZGV4LnNwbGljZShhSW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMjUwKTtcbiAgICAgICAgfSxcbiAgICAgICAgdGdRdWV1ZSh0b2NJbmRleCkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy4kcmVmcy5mZXRjaEJ0bnNbdG9jSW5kZXhdLmlzUXVldWVkID10aGlzLmNoZWNrZWRRdWV1ZXNbdG9jSW5kZXhdO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuJHJlZnMuZmV0Y2hCdG5zKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zdCB0b2NTbHVnID0gdGhpcy5pdGVtc1t0b2NJbmRleF0uc2x1ZztcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja2VkUXVldWVzW3RvY0luZGV4XSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZmV0Y2hRdWV1ZUJhci5xdWV1ZVRvY0luZGV4LmluY2x1ZGVzKHRvY0luZGV4KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mZXRjaFF1ZXVlQmFyLnF1ZXVlVG9jSW5kZXgucHVzaCh0b2NJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFJbmRleCA9IHRoaXMuZmV0Y2hRdWV1ZUJhci5xdWV1ZVRvY0luZGV4LmluZGV4T2YodG9jSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYUluZGV4ICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZldGNoUXVldWVCYXIucXVldWVUb2NJbmRleC5zcGxpY2UoYUluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNoZWNrZWRRdWV1ZXNbdG9jSW5kZXhdKTtcbiAgICAgICAgICAgIH0sIDI1MCk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiIsImltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCBTdG9yZSBmcm9tICcuLi8uLi9saWJzL3N0b3JlJztcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gICAgc2V0dXAoKSB7XG4gICAgICAgIGNvbnN0IG5hdiA9IHJlZignYWJvdXQnKTtcbiAgICAgICAgY29uc3QgYXBwID0gcmVmKHsgdmVyc2lvbjogMCB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hdixcbiAgICAgICAgICAgIGFwcFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgLy8gc2V0VGltZW91dCgoKT0+e1xuICAgICAgICB0aGlzLmFwcCA9IFN0b3JlLmdldEFwcEluZm8oKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5hcHApO1xuICAgICAgICAvLyB9LDEwMDApO1xuICAgIH1cbn0pO1xuIiwiaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IFRvY0l0ZW0gZnJvbSAnLi4vY29tcG9uZW50cy9Ub2NJdGVtLnZ1ZSc7XG5pbXBvcnQgRmV0Y2hRdWV1ZUJhciBmcm9tICcuLi9jb21wb25lbnRzL0ZldGNoUXVldWVCYXIudnVlJztcbmltcG9ydCBGZXRjaFNlY3Rpb25RdWV1ZSBmcm9tICcuLi9jb21wb25lbnRzL0ZldGNoU2VjdGlvblF1ZXVlLnZ1ZSc7XG5pbXBvcnQgTG9nQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTG9nQmFyLnZ1ZSc7XG5pbXBvcnQgeyBtYWtlVGl0bGUgfSBmcm9tICcuLi8uLi9saWJzL3V0aWxzJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgU3RvcmUgZnJvbSBcIi4uLy4uL2xpYnMvc3RvcmVcIjtcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBUb2NJdGVtLCBGZXRjaFF1ZXVlQmFyLCBGZXRjaFNlY3Rpb25RdWV1ZSwgTG9nQmFyXG4gICAgfSxcbiAgICBwcm9wczoge1xuICAgICAgICBjb3Vyc2U6IHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdFxuICAgICAgICB9XG4gICAgfSxcbiAgICBzZXR1cChwcm9wcykge1xuICAgICAgICBjb25zdCBjb3Vyc2UgPSByZWYocHJvcHMuY291cnNlKTtcbiAgICAgICAgY29uc3QgYXV0aG9ycyA9IHJlZihbXSk7XG4gICAgICAgIGNvbnN0IHNlY3Rpb25zID0gcmVmKFtdKTtcbiAgICAgICAgY29uc3QgZXhlcmNpc2VGaWxlID0gcmVmKCk7XG4gICAgICAgIGNvbnN0IHRvY0l0ZW1zID0gcmVmKFtdKTtcbiAgICAgICAgY29uc3QgZmV0Y2hRdWV1ZUJhciA9IHJlZihbXSk7XG4gICAgICAgIGNvbnN0IGZldGNoU2VjdGlvblF1ZXVlID0gcmVmKHt9KTtcbiAgICAgICAgY29uc3QgbG9nQmFyID0gcmVmKHt9KTtcbiAgICAgICAgY29uc3QgY291cnNlRGF0YSA9IHJlZih7fSk7XG4gICAgICAgIHJldHVybiB7IGNvdXJzZSwgYXV0aG9ycywgc2VjdGlvbnMsIGV4ZXJjaXNlRmlsZSwgdG9jSXRlbXMsXG4gICAgICAgICAgICBmZXRjaFF1ZXVlQmFyLCBmZXRjaFNlY3Rpb25RdWV1ZSwgbG9nQmFyLCBjb3Vyc2VEYXRhIH07XG4gICAgfSxcbiAgICBtb3VudGVkKCkge1xuICAgICAgICB0aGlzLmxvYWRDb3Vyc2VEYXRhKCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgJCgnLmNvdXJzZS1wYWdlIC5idG4tY29sbGFwc2UnKS5jbGljaygoZXZ0KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWwgPSAkKGV2dC50YXJnZXQpLmNsb3Nlc3QoJ2J1dHRvbicpWzBdO1xuICAgICAgICAgICAgICAgICQoZWwpLmZpbmQoJ2knKS50b2dnbGVDbGFzcygnZmEgZmEtcGx1cyBmYSBmYS1taW51cycpO1xuICAgICAgICAgICAgICAgICQoJy5jb3Vyc2UtcGFnZSAuYnRuLWNvbGxhcHNlJykubm90KGVsKS5maW5kKCdpJykucmVtb3ZlQ2xhc3MoJ2ZhLW1pbnVzJykuYWRkQ2xhc3MoJ2ZhLXBsdXMgJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgNTApO1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBpc1ZhbGlkQ291cnNlKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmNvdXJzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5jb3Vyc2UuSUQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0sXG4gICAgICAgIGxvYWRDb3Vyc2VEYXRhKCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5jb3Vyc2UpXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZENvdXJzZSgpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXBwSW5mbyA9IFN0b3JlLmdldEFwcEluZm8oKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhhcHBJbmZvKVxuICAgICAgICAgICAgICAgIHRoaXMuY291cnNlID0gU3RvcmUuZ2V0Q291cnNlKGFwcEluZm8ubGFzdENvdXJzZVNsdWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgU3RvcmUuc2V0QXBwU3RhdGUoMSwgdGhpcy5jb3Vyc2Uuc2x1Zyk7XG4gICAgICAgICAgICBjb25zdCBzZWN0aW9ucyA9IFN0b3JlLmdldFNlY3Rpb25zQnlDb3Vyc2VJZCh0aGlzLmNvdXJzZS5JRCk7XG4gICAgICAgICAgICBzZWN0aW9ucy5tYXAoKHNlY3Rpb25UbXApID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgc2VjdGlvbiA9IHNlY3Rpb25UbXA7XG4gICAgICAgICAgICAgICAgc2VjdGlvbi5pdGVtcyA9IFN0b3JlLmdldFRvY3NCeVNlY3Rpb25JZChzZWN0aW9uVG1wLklEKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlY3Rpb25zLnB1c2goc2VjdGlvbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuY291cnNlLmF1dGhvcklkcy5tYXAoKElEKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXV0aG9yID0gU3RvcmUuZ2V0QXV0aG9yQnlJZChJRCk7XG4gICAgICAgICAgICAgICAgaWYgKGF1dGhvcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhvcnMucHVzaChhdXRob3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICB1cGRhdGVUb2NJdGVtcyhleGVyY2lzZUZpbGUsIHRvYykge1xuICAgICAgICAgICAgdGhpcy5leGVyY2lzZUZpbGUgPSBTdG9yZS5jcmVhdGVFeGVyY2lzZUZpbGUodGhpcy5jb3Vyc2UuSUQsIGV4ZXJjaXNlRmlsZS5uYW1lLCBleGVyY2lzZUZpbGUudXJsLCBleGVyY2lzZUZpbGUuc2l6ZUluQnl0ZXMpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXhlcmNpc2VGaWxlLHRvYyk7XG4gICAgICAgICAgICAvLyB1cGRhdGUgdG9jIGNhcHRpb25cbiAgICAgICAgICAgIFN0b3JlLnVwZGF0ZVRvY0NhcHRpb24odG9jLnNsdWcsIHRvYy5jYXB0aW9uVXJsLCB0b2MuY2FwdGlvbkZtdCk7XG4gICAgICAgICAgICAvLyBVcGRhdGUgb3IgY3JlYXRlIHN0cmVhbWluZyBsb2NhdGlvblxuICAgICAgICAgICAgU3RvcmUuY3JlYXRlU3RyZWFtTG9jYXRpb25MaXN0KHRvYy5zbHVnLCB0b2Muc3RyZWFtTG9jYXRpb25zLCB0aGlzLmNvdXJzZS5JRCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uVG9jVXBkYXRlKGV2dCkge1xuICAgICAgICAgICAgaWYgKGV2dC5zcmMgPT09ICdQb3B1cC5Db3Vyc2VQYWdlLlRvY0l0ZW0uRmV0Y2hCdXR0b24nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVUb2NJdGVtcyhldnQuZXhlcmNpc2VGaWxlLCBldnQudG9jKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZScsIGV2dCk7XG4gICAgICAgIH0sXG4gICAgICAgIG1ha2VUaXRsZShzbHVnKSB7XG4gICAgICAgICAgICByZXR1cm4gbWFrZVRpdGxlKHNsdWcpO1xuICAgICAgICB9LFxuICAgICAgICBnZXRUb3RhbFRvY3MoKSB7XG4gICAgICAgICAgICBsZXQgdG90YWxUb2NzID0gMDtcbiAgICAgICAgICAgIHRoaXMuc2VjdGlvbnMubWFwKChzKSA9PiB7XG4gICAgICAgICAgICAgICAgdG90YWxUb2NzICs9IHMuaXRlbXMubGVuZ3RoO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdG90YWxUb2NzO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iLCJpbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgU3RvcmUgZnJvbSAnLi4vLi4vbGlicy9zdG9yZSc7XG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYXY6ICdkb3dubG9hZHMnXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBwcm9wczoge1xuICAgICAgICBjb3Vyc2U6IHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdFxuICAgICAgICB9XG4gICAgfSxcbiAgICBzZXR1cCgpIHtcbiAgICAgICAgY29uc3QgY291cnNlID0gcmVmKCk7XG4gICAgICAgIGNvbnN0IGV4ZXJjaXNlRmlsZSA9IHJlZigpO1xuICAgICAgICBjb25zdCBkb3dubG9hZENvbmZpZyA9IHJlZigpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY291cnNlLCBleGVyY2lzZUZpbGUsIGRvd25sb2FkQ29uZmlnXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBtb3VudGVkKCkge1xuICAgICAgICB0aGlzLmxvYWREb3dubG9hZERhdGEoKTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgdXBkYXRlU2VsZWN0ZWRGbXQoKSB7XG4gICAgICAgICAgICBTdG9yZS51cGRhdGVEb3dubG9hZENvbmZpZygnc2VsZWN0ZWRGbXRMaXN0JywgdGhpcy5kb3dubG9hZENvbmZpZy5zZWxlY3RlZEZtdExpc3QsIHRoaXMuY291cnNlLklEKTtcbiAgICAgICAgfSxcbiAgICAgICAgaXNWYWxpZENvdXJzZSgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5jb3Vyc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuY291cnNlLklEID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuICAgICAgICBsb2FkRG93bmxvYWREYXRhKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWRDb3Vyc2UoKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFwcEluZm8gPSBTdG9yZS5nZXRBcHBJbmZvKCk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYXBwSW5mbylcbiAgICAgICAgICAgICAgICB0aGlzLmNvdXJzZSA9IFN0b3JlLmdldENvdXJzZShhcHBJbmZvLmxhc3RDb3Vyc2VTbHVnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFN0b3JlLnNldEFwcFN0YXRlKDEsIHRoaXMuY291cnNlLnNsdWcpO1xuICAgICAgICAgICAgLy8gbG9hZCBleHJjaXNlIGZpbGVcbiAgICAgICAgICAgIHRoaXMuZXhlcmNpc2VGaWxlID0gU3RvcmUuZ2V0RXhlcmNpc2VGaWxlKHRoaXMuY291cnNlLklEKTtcbiAgICAgICAgICAgIC8vIGxvYWQgZG93bmxvYWQgQ29uZmlnXG4gICAgICAgICAgICB0aGlzLmRvd25sb2FkQ29uZmlnID0gU3RvcmUuZ2V0RG93bmxvYWRDb25maWcodGhpcy5jb3Vyc2UuSUQpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iLCJpbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnO1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmF2OiAnaGVscCdcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgc3luY0xTKCkge1xuICAgICAgICAgICAgY29uc3QgZGJfbGVhcm5pbmcgPSBsb2NhbFN0b3JhZ2VbJ2RiX2xlYXJuaW5nJ107XG4gICAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7IGRiX2xlYXJuaW5nIH0pO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iLCJpbXBvcnQgeyBzZW5kTWVzc2FnZVNhdmVEYXRhQ29kZXNUb0xTIH0gZnJvbSAnLi4vLi4vbGlicy91dGlscyc7XG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgU3RvcmUgZnJvbSAnLi4vLi4vbGlicy9zdG9yZSc7XG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICAgIHNldHVwKCkge1xuICAgICAgICBjb25zdCBuYXYgPSByZWYoJ3dlbGNvbWUnKTtcbiAgICAgICAgY29uc3QgZ3JlZXRpbmcgPSByZWYoJ1dlbGNvbWUgdG8gTExGZXRjaGVyLCB3aGF0IGRvIHlvdSB3YW50IHRvIGRvID8nKTtcbiAgICAgICAgY29uc3QgbGFzdENvdXJzZUxpc3QgPSByZWYoW10pO1xuICAgICAgICBjb25zdCBmZXRjaEJ0blN0YXRlID0gcmVmKDApO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmF2LCBncmVldGluZywgbGFzdENvdXJzZUxpc3QsIGZldGNoQnRuU3RhdGVcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgY29uc3QgYXBwSW5mbyA9IFN0b3JlLmdldEFwcEluZm8oKTtcbiAgICAgICAgdGhpcy4kcGFyZW50LmxvZyhgQXBwU3RhdGU6JHthcHBJbmZvLnN0YXRlfWApO1xuICAgICAgICBjb25zdCBsYXN0Q291cnNlcyA9IFN0b3JlLmdldExhc3RDb3Vyc2VzKCk7XG4gICAgICAgIGlmIChsYXN0Q291cnNlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RDb3Vyc2VMaXN0ID0gW107XG4gICAgICAgICAgICBsYXN0Q291cnNlcy5tYXAoKGNvdXJzZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubGFzdENvdXJzZUxpc3QucHVzaChjb3Vyc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gfSwxMDAwKTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgbG9hZFJlY2VudENvdXJzZShjb3Vyc2UpIHtcbiAgICAgICAgICAgIHRoaXMuJHBhcmVudC5zZXRDb3Vyc2UoY291cnNlKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmV0cmlldmVEYXRhQ29kZXNGcm9tQ29udGVudCgpIHtcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hCdG5TdGF0ZSA9IDE7XG4gICAgICAgICAgICAvLyBzZW5kIGRhdGEgY29kZSBmcm9tIGNvbnRlbnQgc2NyaXB0IHRvIExTXG4gICAgICAgICAgICBzZW5kTWVzc2FnZVNhdmVEYXRhQ29kZXNUb0xTKCk7XG4gICAgICAgICAgICAvLyBsb2FkIGRhdGEgY29kZXMgZnJvbSBsc1xuICAgICAgICAgICAgU3RvcmUuZ2V0RGF0YUNvZGVzTFMoKGRhdGFDb2RlcykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2hCdG5TdGF0ZSA9IDI7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YUNvZGVzKTtcbiAgICAgICAgICAgICAgICBTdG9yZS5zYXZlRGF0YUNvZGVzKGRhdGFDb2Rlcyk7XG4gICAgICAgICAgICAgICAgdGhpcy4kcGFyZW50LnNldENvdXJzZShkYXRhQ29kZXMuY291cnNlKTtcbiAgICAgICAgICAgICAgICAvLyBjb250ZW50Q29uc29sZUxvZyhkYXRhQ29kZXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiIsImltcG9ydCB7IHJlc29sdmVDb21wb25lbnQgYXMgX3Jlc29sdmVDb21wb25lbnQsIGNyZWF0ZVZOb2RlIGFzIF9jcmVhdGVWTm9kZSwgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUJsb2NrIGFzIF9jcmVhdGVCbG9jaywgY3JlYXRlQ29tbWVudFZOb2RlIGFzIF9jcmVhdGVDb21tZW50Vk5vZGUsIHZTaG93IGFzIF92U2hvdywgY3JlYXRlRWxlbWVudFZOb2RlIGFzIF9jcmVhdGVFbGVtZW50Vk5vZGUsIHdpdGhEaXJlY3RpdmVzIGFzIF93aXRoRGlyZWN0aXZlcywgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2sgfSBmcm9tIFwidnVlXCI7XG5jb25zdCBfaG9pc3RlZF8xID0geyBjbGFzczogXCJhcHAtY29udGFpbmVyXCIgfTtcbmNvbnN0IF9ob2lzdGVkXzIgPSB7IGNsYXNzOiBcImNvbnNvbGVcIiB9O1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgICBjb25zdCBfY29tcG9uZW50X1BhZ2VOYXZpZ2F0aW9uID0gX3Jlc29sdmVDb21wb25lbnQoXCJQYWdlTmF2aWdhdGlvblwiKTtcbiAgICBjb25zdCBfY29tcG9uZW50X1dlbGNvbWVQYWdlID0gX3Jlc29sdmVDb21wb25lbnQoXCJXZWxjb21lUGFnZVwiKTtcbiAgICBjb25zdCBfY29tcG9uZW50X0NvdXJzZVBhZ2UgPSBfcmVzb2x2ZUNvbXBvbmVudChcIkNvdXJzZVBhZ2VcIik7XG4gICAgY29uc3QgX2NvbXBvbmVudF9Eb3dubG9hZFBhZ2UgPSBfcmVzb2x2ZUNvbXBvbmVudChcIkRvd25sb2FkUGFnZVwiKTtcbiAgICBjb25zdCBfY29tcG9uZW50X0hlbHBQYWdlID0gX3Jlc29sdmVDb21wb25lbnQoXCJIZWxwUGFnZVwiKTtcbiAgICBjb25zdCBfY29tcG9uZW50X0Fib3V0UGFnZSA9IF9yZXNvbHZlQ29tcG9uZW50KFwiQWJvdXRQYWdlXCIpO1xuICAgIGNvbnN0IF9jb21wb25lbnRfaGlnaGxpZ2h0anMgPSBfcmVzb2x2ZUNvbXBvbmVudChcImhpZ2hsaWdodGpzXCIpO1xuICAgIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIF9ob2lzdGVkXzEsIFtcbiAgICAgICAgX2NyZWF0ZVZOb2RlKF9jb21wb25lbnRfUGFnZU5hdmlnYXRpb24sIHtcbiAgICAgICAgICAgIG9uVXBkYXRlOiBfY2FjaGVbMF0gfHwgKF9jYWNoZVswXSA9ICgkZXZlbnQpID0+IChfY3R4Lm9uTmF2VXBkYXRlKCRldmVudCkpKSxcbiAgICAgICAgICAgIG5hdjogX2N0eC5uYXYsXG4gICAgICAgICAgICByZWY6IFwicGFnZU5hdmlnYXRpb25cIlxuICAgICAgICB9LCBudWxsLCA4IC8qIFBST1BTICovLCBbXCJuYXZcIl0pLFxuICAgICAgICAoX2N0eC5uYXYgPT0gJ3dlbGNvbWUnKVxuICAgICAgICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soX2NvbXBvbmVudF9XZWxjb21lUGFnZSwgeyBrZXk6IDAgfSkpXG4gICAgICAgICAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpLFxuICAgICAgICAoX2N0eC5uYXYgPT0gJ2NvdXJzZScpXG4gICAgICAgICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jayhfY29tcG9uZW50X0NvdXJzZVBhZ2UsIHtcbiAgICAgICAgICAgICAgICBrZXk6IDEsXG4gICAgICAgICAgICAgICAgb25VcGRhdGU6IF9jYWNoZVsxXSB8fCAoX2NhY2hlWzFdID0gKCRldmVudCkgPT4gKF9jdHgub25Db3Vyc2VVcGRhdGUoJGV2ZW50KSkpLFxuICAgICAgICAgICAgICAgIGNvdXJzZTogX2N0eC5jb3Vyc2UsXG4gICAgICAgICAgICAgICAgcmVmOiBcImNvdXJzZVBhZ2VcIlxuICAgICAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgW1wiY291cnNlXCJdKSlcbiAgICAgICAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSksXG4gICAgICAgIChfY3R4Lm5hdiA9PSAnZG93bmxvYWRzJylcbiAgICAgICAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKF9jb21wb25lbnRfRG93bmxvYWRQYWdlLCB7IGtleTogMiB9KSlcbiAgICAgICAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSksXG4gICAgICAgIChfY3R4Lm5hdiA9PSAnaGVscCcpXG4gICAgICAgICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jayhfY29tcG9uZW50X0hlbHBQYWdlLCB7IGtleTogMyB9KSlcbiAgICAgICAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSksXG4gICAgICAgIChfY3R4Lm5hdiA9PSAnYWJvdXQnKVxuICAgICAgICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soX2NvbXBvbmVudF9BYm91dFBhZ2UsIHsga2V5OiA0IH0pKVxuICAgICAgICAgICAgOiBfY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKSxcbiAgICAgICAgX3dpdGhEaXJlY3RpdmVzKF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfMiwgW1xuICAgICAgICAgICAgX2NyZWF0ZVZOb2RlKF9jb21wb25lbnRfaGlnaGxpZ2h0anMsIHtcbiAgICAgICAgICAgICAgICBsYW5ndWFnZTogXCJjb25zb2xlXCIsXG4gICAgICAgICAgICAgICAgY29kZTogSlNPTi5zdHJpbmdpZnkoX2N0eC5tZXNzYWdlLCBudWxsLCAyKVxuICAgICAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgW1wiY29kZVwiXSlcbiAgICAgICAgXSwgNTEyIC8qIE5FRURfUEFUQ0ggKi8pLCBbXG4gICAgICAgICAgICBbX3ZTaG93LCBfY3R4Lm1lc3NhZ2UubGVuZ3RoID4gMF1cbiAgICAgICAgXSlcbiAgICBdKSk7XG59XG4iLCJpbXBvcnQgeyBub3JtYWxpemVDbGFzcyBhcyBfbm9ybWFsaXplQ2xhc3MsIGNyZWF0ZUVsZW1lbnRWTm9kZSBhcyBfY3JlYXRlRWxlbWVudFZOb2RlLCBub3JtYWxpemVTdHlsZSBhcyBfbm9ybWFsaXplU3R5bGUsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jayB9IGZyb20gXCJ2dWVcIjtcbmNvbnN0IF9ob2lzdGVkXzEgPSB7IGNsYXNzOiBcImJ0bi1ncm91cFwiIH07XG5jb25zdCBfaG9pc3RlZF8yID0gW1wiZGlzYWJsZWRcIiwgXCJ0aXRsZVwiXTtcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gICAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwgX2hvaXN0ZWRfMSwgW1xuICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiYnV0dG9uXCIsIHtcbiAgICAgICAgICAgIHN0eWxlOiBfbm9ybWFsaXplU3R5bGUoeyBib3JkZXI6IChfY3R4LmJ0blN0YXRlICE9IDEgJiYgX2N0eC5idG5TdGF0ZSAhPSA0ID8gJ25vbmUnIDogJ2luaGVyaXQnKSB9KSxcbiAgICAgICAgICAgIGRpc2FibGVkOiBfY3R4LmJ0blN0YXRlID4gMSAmJiBfY3R4LmJ0blN0YXRlIDwgNCxcbiAgICAgICAgICAgIG9uQ2xpY2s6IF9jYWNoZVswXSB8fCAoX2NhY2hlWzBdID0gKCRldmVudCkgPT4gKF9jdHguZmV0Y2hUb2MoKSkpLFxuICAgICAgICAgICAgY2xhc3M6IFwiYnRuIGJ0bi1zbVwiLFxuICAgICAgICAgICAgdGl0bGU6ICdDbGljayB0byBmZXRjaCBUT0MgcmVzb3VyY2VzICcgKyBfY3R4LnRvYy50aXRsZVxuICAgICAgICB9LCBbXG4gICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgY2xhc3M6IF9ub3JtYWxpemVDbGFzcyhbXCJmYVwiLCB7ICdmYS1wbGF5JzogX2N0eC5idG5TdGF0ZSA9PSAxLCAnZmEtc3BpbiBmYS1zcGlubmVyJzogX2N0eC5idG5TdGF0ZSA9PSAyLCAnZmEtY2hlY2snOiBfY3R4LmJ0blN0YXRlID09IDMsICdmYS1yZWZyZXNoJzogX2N0eC5idG5TdGF0ZSA9PSA0IH1dKVxuICAgICAgICAgICAgfSwgbnVsbCwgMiAvKiBDTEFTUyAqLylcbiAgICAgICAgXSwgMTIgLyogU1RZTEUsIFBST1BTICovLCBfaG9pc3RlZF8yKVxuICAgIF0pKTtcbn1cbiIsImltcG9ydCB7IHRvRGlzcGxheVN0cmluZyBhcyBfdG9EaXNwbGF5U3RyaW5nLCBjcmVhdGVFbGVtZW50Vk5vZGUgYXMgX2NyZWF0ZUVsZW1lbnRWTm9kZSwgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrLCBjcmVhdGVDb21tZW50Vk5vZGUgYXMgX2NyZWF0ZUNvbW1lbnRWTm9kZSwgbm9ybWFsaXplU3R5bGUgYXMgX25vcm1hbGl6ZVN0eWxlLCB2U2hvdyBhcyBfdlNob3csIHdpdGhEaXJlY3RpdmVzIGFzIF93aXRoRGlyZWN0aXZlcywgbm9ybWFsaXplQ2xhc3MgYXMgX25vcm1hbGl6ZUNsYXNzLCBwdXNoU2NvcGVJZCBhcyBfcHVzaFNjb3BlSWQsIHBvcFNjb3BlSWQgYXMgX3BvcFNjb3BlSWQgfSBmcm9tIFwidnVlXCI7XG5jb25zdCBfd2l0aFNjb3BlSWQgPSBuID0+IChfcHVzaFNjb3BlSWQoXCJkYXRhLXYtOTA1YWVjNDJcIiksIG4gPSBuKCksIF9wb3BTY29wZUlkKCksIG4pO1xuY29uc3QgX2hvaXN0ZWRfMSA9IHsgY2xhc3M6IFwiZmV0Y2gtcXVldWUtYmFyXCIgfTtcbmNvbnN0IF9ob2lzdGVkXzIgPSB7XG4gICAga2V5OiAwLFxuICAgIGNsYXNzOiBcInRlc3QtZGF0YVwiXG59O1xuY29uc3QgX2hvaXN0ZWRfMyA9IHsgY2xhc3M6IFwiZmV0Y2gtcXVldWUtcGJcIiB9O1xuY29uc3QgX2hvaXN0ZWRfNCA9IHsgY2xhc3M6IFwicHJvZ3Jlc3NcIiB9O1xuY29uc3QgX2hvaXN0ZWRfNSA9IFtcImFyaWEtdmFsdWVub3dcIl07XG5jb25zdCBfaG9pc3RlZF82ID0geyBjbGFzczogXCJidG4tZmV0Y2gtY250XCIgfTtcbmNvbnN0IF9ob2lzdGVkXzcgPSBbXCJkaXNhYmxlZFwiXTtcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gICAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwgX2hvaXN0ZWRfMSwgW1xuICAgICAgICAoMClcbiAgICAgICAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCBfaG9pc3RlZF8yLCBbXG4gICAgICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInByZVwiLCBudWxsLCBfdG9EaXNwbGF5U3RyaW5nKEpTT04uc3RyaW5naWZ5KF9jdHgucXVldWVUb2NJbmRleCwgbnVsbCwgMikpLCAxIC8qIFRFWFQgKi8pXG4gICAgICAgICAgICBdKSlcbiAgICAgICAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSksXG4gICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfMywgW1xuICAgICAgICAgICAgX3dpdGhEaXJlY3RpdmVzKF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfNCwgW1xuICAgICAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICBjbGFzczogXCJwcm9ncmVzcy1iYXIgYmctaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICByb2xlOiBcInByb2dyZXNzYmFyXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiBfbm9ybWFsaXplU3R5bGUoeyB3aWR0aDogX2N0eC5wZXJjZW50YWdlICsgJyUnIH0pLFxuICAgICAgICAgICAgICAgICAgICBcImFyaWEtdmFsdWVub3dcIjogX2N0eC5wZXJjZW50YWdlLFxuICAgICAgICAgICAgICAgICAgICBcImFyaWEtdmFsdWVtaW5cIjogMCxcbiAgICAgICAgICAgICAgICAgICAgXCJhcmlhLXZhbHVlbWF4XCI6IDEwMFxuICAgICAgICAgICAgICAgIH0sIG51bGwsIDEyIC8qIFNUWUxFLCBQUk9QUyAqLywgX2hvaXN0ZWRfNSlcbiAgICAgICAgICAgIF0sIDUxMiAvKiBORUVEX1BBVENIICovKSwgW1xuICAgICAgICAgICAgICAgIFtfdlNob3csIF9jdHgucGVyY2VudGFnZSA+IDBdXG4gICAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF82LCBbXG4gICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiYnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICBzdHlsZTogX25vcm1hbGl6ZVN0eWxlKHsgY29sb3I6IF9jdHguYnRuU3RhdGUgPT0gMyA/ICd3aGl0ZScgOiAnaW5oZXJpdCcgfSksXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IF9jdHguYnRuU3RhdGUgIT0gMSAmJiBfY3R4LmJ0blN0YXRlICE9IDQsXG4gICAgICAgICAgICAgICAgb25DbGljazogX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAoJGV2ZW50KSA9PiAoX2N0eC5zdGFydFF1ZXVlKCkpKSxcbiAgICAgICAgICAgICAgICBjbGFzczogXCJidG4gYnRuLXNtIGJ0bi1mZXRjaFwiXG4gICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICBjbGFzczogX25vcm1hbGl6ZUNsYXNzKFtcImZhXCIsIHsgJ2ZhLXBsYXknOiBfY3R4LmJ0blN0YXRlID09IDEsICdmYS1zcGluIGZhLXNwaW5uZXInOiBfY3R4LmJ0blN0YXRlID09IDIsICdmYS1jaGVjayc6IF9jdHguYnRuU3RhdGUgPT0gMywgJ2ZhLXJlZnJlc2gnOiBfY3R4LmJ0blN0YXRlID09IDQgfV0pXG4gICAgICAgICAgICAgICAgfSwgbnVsbCwgMiAvKiBDTEFTUyAqLylcbiAgICAgICAgICAgIF0sIDEyIC8qIFNUWUxFLCBQUk9QUyAqLywgX2hvaXN0ZWRfNylcbiAgICAgICAgXSlcbiAgICBdKSk7XG59XG4iLCJpbXBvcnQgeyBub3JtYWxpemVTdHlsZSBhcyBfbm9ybWFsaXplU3R5bGUsIGNyZWF0ZUVsZW1lbnRWTm9kZSBhcyBfY3JlYXRlRWxlbWVudFZOb2RlLCB2U2hvdyBhcyBfdlNob3csIHdpdGhEaXJlY3RpdmVzIGFzIF93aXRoRGlyZWN0aXZlcywgbm9ybWFsaXplQ2xhc3MgYXMgX25vcm1hbGl6ZUNsYXNzLCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2ssIHB1c2hTY29wZUlkIGFzIF9wdXNoU2NvcGVJZCwgcG9wU2NvcGVJZCBhcyBfcG9wU2NvcGVJZCB9IGZyb20gXCJ2dWVcIjtcbmNvbnN0IF93aXRoU2NvcGVJZCA9IG4gPT4gKF9wdXNoU2NvcGVJZChcImRhdGEtdi02YWZkYTY0OVwiKSwgbiA9IG4oKSwgX3BvcFNjb3BlSWQoKSwgbik7XG5jb25zdCBfaG9pc3RlZF8xID0geyBjbGFzczogXCJmZXRjaC1zZWN0aW9uLXF1ZXVlXCIgfTtcbmNvbnN0IF9ob2lzdGVkXzIgPSB7IGNsYXNzOiBcImZzcWJjXCIgfTtcbmNvbnN0IF9ob2lzdGVkXzMgPSB7IGNsYXNzOiBcImZldGNoLXNlY3Rpb24tcXVldWUtYmFyXCIgfTtcbmNvbnN0IF9ob2lzdGVkXzQgPSB7IGNsYXNzOiBcImZldGNoLXNlY3Rpb24tcXVldWUtcGJcIiB9O1xuY29uc3QgX2hvaXN0ZWRfNSA9IHsgY2xhc3M6IFwicHJvZ3Jlc3NcIiB9O1xuY29uc3QgX2hvaXN0ZWRfNiA9IFtcImFyaWEtdmFsdWVub3dcIl07XG5jb25zdCBfaG9pc3RlZF83ID0geyBjbGFzczogXCJidG4tZmV0Y2gtc2VjdGlvbi1xdWV1ZS1jbnRcIiB9O1xuY29uc3QgX2hvaXN0ZWRfOCA9IFtcImRpc2FibGVkXCJdO1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCBfaG9pc3RlZF8xLCBbXG4gICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfMiwgW1xuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8zLCBbXG4gICAgICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF80LCBbXG4gICAgICAgICAgICAgICAgICAgIF93aXRoRGlyZWN0aXZlcyhfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzUsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBcInByb2dyZXNzLWJhciBiZy1zdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZTogXCJwcm9ncmVzc2JhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiBfbm9ybWFsaXplU3R5bGUoeyB3aWR0aDogX2N0eC5wZXJjZW50YWdlICsgJyUnIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJpYS12YWx1ZW5vd1wiOiBfY3R4LnBlcmNlbnRhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhcmlhLXZhbHVlbWluXCI6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJpYS12YWx1ZW1heFwiOiBcIjEwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBudWxsLCAxMiAvKiBTVFlMRSwgUFJPUFMgKi8sIF9ob2lzdGVkXzYpXG4gICAgICAgICAgICAgICAgICAgIF0sIDUxMiAvKiBORUVEX1BBVENIICovKSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgW192U2hvdywgX2N0eC5wZXJjZW50YWdlID4gMF1cbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzcsIFtcbiAgICAgICAgICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogX25vcm1hbGl6ZVN0eWxlKHsgY29sb3I6IF9jdHguYnRuU3RhdGUgPT0gMyA/ICd3aGl0ZScgOiAnaW5oZXJpdCcgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogX2N0eC5idG5TdGF0ZSAhPSAxICYmIF9jdHguYnRuU3RhdGUgIT0gNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6IF9jYWNoZVswXSB8fCAoX2NhY2hlWzBdID0gKCRldmVudCkgPT4gKF9jdHguc3RhcnRRdWV1ZSgpKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogXCJidG4gYnRuLXNtIGJ0bi1mZXRjaC1zZWN0aW9uLXF1ZXVlXCJcbiAgICAgICAgICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfbm9ybWFsaXplQ2xhc3MoW1wiZmFcIiwgeyAnZmEtcGxheSc6IF9jdHguYnRuU3RhdGUgPT0gMSwgJ2ZhLXNwaW4gZmEtc3Bpbm5lcic6IF9jdHguYnRuU3RhdGUgPT0gMiwgJ2ZhLWNoZWNrJzogX2N0eC5idG5TdGF0ZSA9PSAzLCAnZmEtcmVmcmVzaCc6IF9jdHguYnRuU3RhdGUgPT0gNCB9XSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIG51bGwsIDIgLyogQ0xBU1MgKi8pXG4gICAgICAgICAgICAgICAgICAgIF0sIDEyIC8qIFNUWUxFLCBQUk9QUyAqLywgX2hvaXN0ZWRfOClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICBdKSk7XG59XG4iLCJpbXBvcnQgeyB0b0Rpc3BsYXlTdHJpbmcgYXMgX3RvRGlzcGxheVN0cmluZywgY3JlYXRlRWxlbWVudFZOb2RlIGFzIF9jcmVhdGVFbGVtZW50Vk5vZGUsIG5vcm1hbGl6ZUNsYXNzIGFzIF9ub3JtYWxpemVDbGFzcywgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrLCBwdXNoU2NvcGVJZCBhcyBfcHVzaFNjb3BlSWQsIHBvcFNjb3BlSWQgYXMgX3BvcFNjb3BlSWQgfSBmcm9tIFwidnVlXCI7XG5jb25zdCBfd2l0aFNjb3BlSWQgPSBuID0+IChfcHVzaFNjb3BlSWQoXCJkYXRhLXYtNWM4YTI4N2NcIiksIG4gPSBuKCksIF9wb3BTY29wZUlkKCksIG4pO1xuY29uc3QgX2hvaXN0ZWRfMSA9IHsgY2xhc3M6IFwibG9nLWJhclwiIH07XG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xuICAgIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIF9ob2lzdGVkXzEsIFtcbiAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCB7XG4gICAgICAgICAgICBjbGFzczogX25vcm1hbGl6ZUNsYXNzKFtcImxvZy1tZXNzYWdlXCIsIHsgZXJyb3I6IF9jdHgubW9kZSA9PSAxLCBzdWNjZXNzOiBfY3R4Lm1vZGUgPT0gMCwgd2FybmluZzogX2N0eC5tb2RlID09IDIgfV0pXG4gICAgICAgIH0sIFtcbiAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJzcGFuXCIsIG51bGwsIF90b0Rpc3BsYXlTdHJpbmcoX2N0eC5tZXNzYWdlKSwgMSAvKiBURVhUICovKVxuICAgICAgICBdLCAyIC8qIENMQVNTICovKVxuICAgIF0pKTtcbn1cbiIsImltcG9ydCB7IG5vcm1hbGl6ZUNsYXNzIGFzIF9ub3JtYWxpemVDbGFzcywgY3JlYXRlRWxlbWVudFZOb2RlIGFzIF9jcmVhdGVFbGVtZW50Vk5vZGUsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jaywgY3JlYXRlQ29tbWVudFZOb2RlIGFzIF9jcmVhdGVDb21tZW50Vk5vZGUgfSBmcm9tIFwidnVlXCI7XG5jb25zdCBfaG9pc3RlZF8xID0geyBjbGFzczogXCJwYWdlLW5hdmlnYXRpb24gdGV4dC1jZW50ZXJcIiB9O1xuY29uc3QgX2hvaXN0ZWRfMiA9IHsgY2xhc3M6IFwiYnRuLWdyb3VwXCIgfTtcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gICAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwgX2hvaXN0ZWRfMSwgW1xuICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwidWxcIiwgX2hvaXN0ZWRfMiwgW1xuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImxpXCIsIHtcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiBfY2FjaGVbMF0gfHwgKF9jYWNoZVswXSA9ICgkZXZlbnQpID0+IChfY3R4Lm9uTmF2Q2xpY2soJ3dlbGNvbWUnKSkpLFxuICAgICAgICAgICAgICAgIGNsYXNzOiBfbm9ybWFsaXplQ2xhc3MoW1wiYnRuIGJ0bi1zbSBidG4tcHJpbWFyeVwiLCB7IGFjdGl2ZTogX2N0eC5uYXYgPT0gJ3dlbGNvbWUnIH1dKVxuICAgICAgICAgICAgfSwgXCJXZWxjb21lXCIsIDIgLyogQ0xBU1MgKi8pLFxuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImxpXCIsIHtcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiBfY2FjaGVbMV0gfHwgKF9jYWNoZVsxXSA9ICgkZXZlbnQpID0+IChfY3R4Lm9uTmF2Q2xpY2soJ2NvdXJzZScpKSksXG4gICAgICAgICAgICAgICAgY2xhc3M6IF9ub3JtYWxpemVDbGFzcyhbXCJidG4gYnRuLXNtIGJ0bi1wcmltYXJ5XCIsIHsgYWN0aXZlOiBfY3R4Lm5hdiA9PSAnY291cnNlJyB9XSlcbiAgICAgICAgICAgIH0sIFwiQ291cnNlXCIsIDIgLyogQ0xBU1MgKi8pLFxuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImxpXCIsIHtcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiBfY2FjaGVbMl0gfHwgKF9jYWNoZVsyXSA9ICgkZXZlbnQpID0+IChfY3R4Lm9uTmF2Q2xpY2soJ2Rvd25sb2FkcycpKSksXG4gICAgICAgICAgICAgICAgY2xhc3M6IF9ub3JtYWxpemVDbGFzcyhbXCJidG4gYnRuLXNtIGJ0bi1wcmltYXJ5XCIsIHsgYWN0aXZlOiBfY3R4Lm5hdiA9PSAnZG93bmxvYWRzJyB9XSlcbiAgICAgICAgICAgIH0sIFwiRG93bmxvYWRzXCIsIDIgLyogQ0xBU1MgKi8pLFxuICAgICAgICAgICAgKDApXG4gICAgICAgICAgICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwibGlcIiwge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IDAsXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6IF9jYWNoZVszXSB8fCAoX2NhY2hlWzNdID0gKCRldmVudCkgPT4gKF9jdHgub25OYXZDbGljaygnaGVscCcpKSksXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfbm9ybWFsaXplQ2xhc3MoW1wiYnRuIGJ0bi1zbSBidG4tcHJpbWFyeVwiLCB7IGFjdGl2ZTogX2N0eC5uYXYgPT0gJ2hlbHAnIH1dKVxuICAgICAgICAgICAgICAgIH0sIFwiSGVscFwiLCAyIC8qIENMQVNTICovKSlcbiAgICAgICAgICAgICAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpLFxuICAgICAgICAgICAgKDApXG4gICAgICAgICAgICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwibGlcIiwge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IDEsXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6IF9jYWNoZVs0XSB8fCAoX2NhY2hlWzRdID0gKCRldmVudCkgPT4gKF9jdHgub25OYXZDbGljaygnYWJvdXQnKSkpLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogX25vcm1hbGl6ZUNsYXNzKFtcImJ0biBidG4tc20gYnRuLXByaW1hcnlcIiwgeyBhY3RpdmU6IF9jdHgubmF2ID09ICdhYm91dCcgfV0pXG4gICAgICAgICAgICAgICAgfSwgXCJBYm91dFwiLCAyIC8qIENMQVNTICovKSlcbiAgICAgICAgICAgICAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpXG4gICAgICAgIF0pXG4gICAgXSkpO1xufVxuIiwiaW1wb3J0IHsgdk1vZGVsQ2hlY2tib3ggYXMgX3ZNb2RlbENoZWNrYm94LCBjcmVhdGVFbGVtZW50Vk5vZGUgYXMgX2NyZWF0ZUVsZW1lbnRWTm9kZSwgd2l0aERpcmVjdGl2ZXMgYXMgX3dpdGhEaXJlY3RpdmVzLCBjcmVhdGVUZXh0Vk5vZGUgYXMgX2NyZWF0ZVRleHRWTm9kZSwgcmVuZGVyTGlzdCBhcyBfcmVuZGVyTGlzdCwgRnJhZ21lbnQgYXMgX0ZyYWdtZW50LCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2ssIHRvRGlzcGxheVN0cmluZyBhcyBfdG9EaXNwbGF5U3RyaW5nLCByZXNvbHZlQ29tcG9uZW50IGFzIF9yZXNvbHZlQ29tcG9uZW50LCBjcmVhdGVWTm9kZSBhcyBfY3JlYXRlVk5vZGUsIG5vcm1hbGl6ZUNsYXNzIGFzIF9ub3JtYWxpemVDbGFzcywgcHVzaFNjb3BlSWQgYXMgX3B1c2hTY29wZUlkLCBwb3BTY29wZUlkIGFzIF9wb3BTY29wZUlkIH0gZnJvbSBcInZ1ZVwiO1xuY29uc3QgX3dpdGhTY29wZUlkID0gbiA9PiAoX3B1c2hTY29wZUlkKFwiZGF0YS12LTNjMzU3NGZlXCIpLCBuID0gbigpLCBfcG9wU2NvcGVJZCgpLCBuKTtcbmNvbnN0IF9ob2lzdGVkXzEgPSB7IGNsYXNzOiBcInRvYy1pdGVtLXZpZXdcIiB9O1xuY29uc3QgX2hvaXN0ZWRfMiA9IHsgY2xhc3M6IFwidG9jLWl0ZW0tbGlzdFwiIH07XG5jb25zdCBfaG9pc3RlZF8zID0geyBjb2xzcGFuOiBcIjJcIiB9O1xuY29uc3QgX2hvaXN0ZWRfNCA9IC8qI19fUFVSRV9fKi8gX2NyZWF0ZVRleHRWTm9kZSgpO1xuY29uc3QgX2hvaXN0ZWRfNSA9IC8qI19fUFVSRV9fKi8gX3dpdGhTY29wZUlkKCgpID0+IC8qI19fUFVSRV9fKi8gX2NyZWF0ZUVsZW1lbnRWTm9kZShcInNwYW5cIiwgeyBzdHlsZTogeyBcInBhZGRpbmctbGVmdFwiOiBcIi41ZW1cIiB9IH0sIFwiQ2hlY2sgQWxsXCIsIC0xIC8qIEhPSVNURUQgKi8pKTtcbmNvbnN0IF9ob2lzdGVkXzYgPSAvKiNfX1BVUkVfXyovIF93aXRoU2NvcGVJZCgoKSA9PiAvKiNfX1BVUkVfXyovIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJ0aFwiLCBudWxsLCBudWxsLCAtMSAvKiBIT0lTVEVEICovKSk7XG5jb25zdCBfaG9pc3RlZF83ID0gLyojX19QVVJFX18qLyBfd2l0aFNjb3BlSWQoKCkgPT4gLyojX19QVVJFX18qLyBfY3JlYXRlRWxlbWVudFZOb2RlKFwidGhcIiwge1xuICAgIGNsYXNzOiBcInRleHQtY2VudGVyXCIsXG4gICAgc3R5bGU6IHsgXCJ3aWR0aFwiOiBcIjgwcHhcIiB9XG59LCBudWxsLCAtMSAvKiBIT0lTVEVEICovKSk7XG5jb25zdCBfaG9pc3RlZF84ID0geyBjbGFzczogXCJmY2NcIiB9O1xuY29uc3QgX2hvaXN0ZWRfOSA9IFtcIm9uQ2xpY2tcIiwgXCJvblVwZGF0ZTptb2RlbFZhbHVlXCJdO1xuY29uc3QgX2hvaXN0ZWRfMTAgPSB7IHN0eWxlOiB7IFwicGFkZGluZy1sZWZ0XCI6IFwiLjVlbVwiIH0gfTtcbmNvbnN0IF9ob2lzdGVkXzExID0ge1xuICAgIGNvbHNwYW46IFwiMlwiLFxuICAgIHN0eWxlOiB7IFwidGV4dC1hbGlnblwiOiBcInJpZ2h0XCIgfVxufTtcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gICAgY29uc3QgX2NvbXBvbmVudF9GZXRjaEJ1dHRvbiA9IF9yZXNvbHZlQ29tcG9uZW50KFwiRmV0Y2hCdXR0b25cIik7XG4gICAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwgX2hvaXN0ZWRfMSwgW1xuICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwidGFibGVcIiwgX2hvaXN0ZWRfMiwgW1xuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInRoZWFkXCIsIG51bGwsIFtcbiAgICAgICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwidHJcIiwgbnVsbCwgW1xuICAgICAgICAgICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwidGhcIiwgX2hvaXN0ZWRfMywgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImxhYmVsXCIsIG51bGwsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfd2l0aERpcmVjdGl2ZXMoX2NyZWF0ZUVsZW1lbnRWTm9kZShcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljazogX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAoJGV2ZW50KSA9PiAoX2N0eC5vbkNoZWNrQWxsKCkpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvblVwZGF0ZTptb2RlbFZhbHVlXCI6IF9jYWNoZVsxXSB8fCAoX2NhY2hlWzFdID0gKCRldmVudCkgPT4gKChfY3R4LmNoZWNrQWxsKSA9ICRldmVudCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogXCJmb3JtLWNoZWNrLWlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIG51bGwsIDUxMiAvKiBORUVEX1BBVENIICovKSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZNb2RlbENoZWNrYm94LCBfY3R4LmNoZWNrQWxsXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9ob2lzdGVkXzQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2hvaXN0ZWRfNVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF9ob2lzdGVkXzYsXG4gICAgICAgICAgICAgICAgICAgIF9ob2lzdGVkXzdcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwidGJvZHlcIiwgbnVsbCwgW1xuICAgICAgICAgICAgICAgIChfb3BlbkJsb2NrKHRydWUpLCBfY3JlYXRlRWxlbWVudEJsb2NrKF9GcmFnbWVudCwgbnVsbCwgX3JlbmRlckxpc3QoX2N0eC5pdGVtcywgKHRvYywgdG9jSW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJ0clwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogX25vcm1hbGl6ZUNsYXNzKFtcInRvYy1pdGVtXCIsIHsgb2RzOiB0b2NJbmRleCAlIDIgPT0gMCB9XSksXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHRvY0luZGV4XG4gICAgICAgICAgICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJ0ZFwiLCBfaG9pc3RlZF84LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3dpdGhEaXJlY3RpdmVzKF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgkZXZlbnQpID0+IChfY3R4LnRnUXVldWUodG9jSW5kZXgpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFwiZm9ybS1jaGVjay1pbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib25VcGRhdGU6bW9kZWxWYWx1ZVwiOiAoJGV2ZW50KSA9PiAoKF9jdHguY2hlY2tlZFF1ZXVlc1t0b2NJbmRleF0pID0gJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIF9ob2lzdGVkXzkpLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdk1vZGVsQ2hlY2tib3gsIF9jdHguY2hlY2tlZFF1ZXVlc1t0b2NJbmRleF1dXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInRkXCIsIF9ob2lzdGVkXzEwLCBfdG9EaXNwbGF5U3RyaW5nKHRvYy50aXRsZSksIDEgLyogVEVYVCAqLyksXG4gICAgICAgICAgICAgICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwidGRcIiwgX2hvaXN0ZWRfMTEsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY3JlYXRlVk5vZGUoX2NvbXBvbmVudF9GZXRjaEJ1dHRvbiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblVwZGF0ZTogX2NhY2hlWzJdIHx8IChfY2FjaGVbMl0gPSAoJGV2ZW50KSA9PiAoX2N0eC5vbkZldGNoVXBkYXRlKCRldmVudCkpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VjdGlvbkluZGV4OiBfY3R4LnNlY3Rpb25JbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9jSW5kZXg6IHRvY0luZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2M6IHRvYyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVldWU6IF9jdHguZW5hYmxlUXVldWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZl9mb3I6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJmZXRjaEJ0bnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIFtcInNlY3Rpb25JbmRleFwiLCBcInRvY0luZGV4XCIsIFwidG9jXCIsIFwicXVldWVcIl0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdLCAyIC8qIENMQVNTICovKSk7XG4gICAgICAgICAgICAgICAgfSksIDEyOCAvKiBLRVlFRF9GUkFHTUVOVCAqLykpXG4gICAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgIF0pKTtcbn1cbiIsImltcG9ydCB7IHRvRGlzcGxheVN0cmluZyBhcyBfdG9EaXNwbGF5U3RyaW5nLCBjcmVhdGVFbGVtZW50Vk5vZGUgYXMgX2NyZWF0ZUVsZW1lbnRWTm9kZSwgY3JlYXRlVGV4dFZOb2RlIGFzIF9jcmVhdGVUZXh0Vk5vZGUsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jayB9IGZyb20gXCJ2dWVcIjtcbmNvbnN0IF9ob2lzdGVkXzEgPSB7IGNsYXNzOiBcImFib3V0LXBhZ2UgcGFnZVwiIH07XG5jb25zdCBfaG9pc3RlZF8yID0gLyojX19QVVJFX18qLyBfY3JlYXRlVGV4dFZOb2RlKFwiIHZlcnNpb24gXCIpO1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCBfaG9pc3RlZF8xLCBbXG4gICAgICAgIF9ob2lzdGVkXzIsXG4gICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJzcGFuXCIsIG51bGwsIF90b0Rpc3BsYXlTdHJpbmcoX2N0eC5hcHAudmVyc2lvbiksIDEgLyogVEVYVCAqLylcbiAgICBdKSk7XG59XG4iLCJpbXBvcnQgeyByZXNvbHZlQ29tcG9uZW50IGFzIF9yZXNvbHZlQ29tcG9uZW50LCBjcmVhdGVWTm9kZSBhcyBfY3JlYXRlVk5vZGUsIGNyZWF0ZUVsZW1lbnRWTm9kZSBhcyBfY3JlYXRlRWxlbWVudFZOb2RlLCB0b0Rpc3BsYXlTdHJpbmcgYXMgX3RvRGlzcGxheVN0cmluZywgcmVuZGVyTGlzdCBhcyBfcmVuZGVyTGlzdCwgRnJhZ21lbnQgYXMgX0ZyYWdtZW50LCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2ssIGNyZWF0ZVRleHRWTm9kZSBhcyBfY3JlYXRlVGV4dFZOb2RlLCBjcmVhdGVDb21tZW50Vk5vZGUgYXMgX2NyZWF0ZUNvbW1lbnRWTm9kZSB9IGZyb20gXCJ2dWVcIjtcbmNvbnN0IF9ob2lzdGVkXzEgPSB7IGNsYXNzOiBcImNvdXJzZS1wYWdlIHBhZ2VcIiB9O1xuY29uc3QgX2hvaXN0ZWRfMiA9IHsgY2xhc3M6IFwiZnNxY1wiIH07XG5jb25zdCBfaG9pc3RlZF8zID0ge1xuICAgIGtleTogMCxcbiAgICBjbGFzczogXCJjb3Vyc2VcIlxufTtcbmNvbnN0IF9ob2lzdGVkXzQgPSAvKiNfX1BVUkVfXyovIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJpXCIsIHsgY2xhc3M6IFwiZmEgZmEtYm9va21hcmtcIiB9LCBudWxsLCAtMSAvKiBIT0lTVEVEICovKTtcbmNvbnN0IF9ob2lzdGVkXzUgPSB7XG4gICAgY2xhc3M6IFwiYWNjb3JkaW9uIGFjY29yZGlvbi1mbHVzaFwiLFxuICAgIGlkOiBcImFjY29yZGlvbkNvdXJzZVwiXG59O1xuY29uc3QgX2hvaXN0ZWRfNiA9IFtcImlkXCJdO1xuY29uc3QgX2hvaXN0ZWRfNyA9IHsgY2xhc3M6IFwicm93IGNvdXJzZS1zZWN0aW9uXCIgfTtcbmNvbnN0IF9ob2lzdGVkXzggPSBbXCJkYXRhLWJzLXRhcmdldFwiLCBcImFyaWEtY29udHJvbHNcIl07XG5jb25zdCBfaG9pc3RlZF85ID0gLyojX19QVVJFX18qLyBfY3JlYXRlRWxlbWVudFZOb2RlKFwiaVwiLCB7IGNsYXNzOiBcImZhIGZhLXBsdXNcIiB9LCBudWxsLCAtMSAvKiBIT0lTVEVEICovKTtcbmNvbnN0IF9ob2lzdGVkXzEwID0gW1xuICAgIF9ob2lzdGVkXzlcbl07XG5jb25zdCBfaG9pc3RlZF8xMSA9IHtcbiAgICBjbGFzczogXCJjb2wtbWQtOFwiLFxuICAgIHN0eWxlOiB7IFwicGFkZGluZy1sZWZ0XCI6IFwiMi41ZW1cIiB9XG59O1xuY29uc3QgX2hvaXN0ZWRfMTIgPSB7IGNsYXNzOiBcImNvbC1tZC00XCIgfTtcbmNvbnN0IF9ob2lzdGVkXzEzID0gW1wiaWRcIiwgXCJhcmlhLWxhYmVsbGVkYnlcIl07XG5jb25zdCBfaG9pc3RlZF8xNCA9IHsgY2xhc3M6IFwiYWNjb3JkaW9uLWJvZHlcIiB9O1xuY29uc3QgX2hvaXN0ZWRfMTUgPSB7IGNsYXNzOiBcImxiY1wiIH07XG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xuICAgIGNvbnN0IF9jb21wb25lbnRfRmV0Y2hTZWN0aW9uUXVldWUgPSBfcmVzb2x2ZUNvbXBvbmVudChcIkZldGNoU2VjdGlvblF1ZXVlXCIpO1xuICAgIGNvbnN0IF9jb21wb25lbnRfRmV0Y2hRdWV1ZUJhciA9IF9yZXNvbHZlQ29tcG9uZW50KFwiRmV0Y2hRdWV1ZUJhclwiKTtcbiAgICBjb25zdCBfY29tcG9uZW50X1RvY0l0ZW0gPSBfcmVzb2x2ZUNvbXBvbmVudChcIlRvY0l0ZW1cIik7XG4gICAgY29uc3QgX2NvbXBvbmVudF9Mb2dCYXIgPSBfcmVzb2x2ZUNvbXBvbmVudChcIkxvZ0JhclwiKTtcbiAgICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCBfaG9pc3RlZF8xLCBbXG4gICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfMiwgW1xuICAgICAgICAgICAgX2NyZWF0ZVZOb2RlKF9jb21wb25lbnRfRmV0Y2hTZWN0aW9uUXVldWUsIHsgcmVmOiBcImZldGNoU2VjdGlvblF1ZXVlXCIgfSwgbnVsbCwgNTEyIC8qIE5FRURfUEFUQ0ggKi8pXG4gICAgICAgIF0pLFxuICAgICAgICAoX2N0eC5jb3Vyc2UpXG4gICAgICAgICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwgX2hvaXN0ZWRfMywgW1xuICAgICAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJoMlwiLCBudWxsLCBbXG4gICAgICAgICAgICAgICAgICAgIF9ob2lzdGVkXzQsXG4gICAgICAgICAgICAgICAgICAgIF9jcmVhdGVUZXh0Vk5vZGUoXCIgXCIgKyBfdG9EaXNwbGF5U3RyaW5nKF9jdHguY291cnNlLnRpdGxlKSArIFwiIGJ5IFwiLCAxIC8qIFRFWFQgKi8pLFxuICAgICAgICAgICAgICAgICAgICAoX29wZW5CbG9jayh0cnVlKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhfRnJhZ21lbnQsIG51bGwsIF9yZW5kZXJMaXN0KF9jdHguYXV0aG9ycywgKGF1dGhvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJzcGFuXCIsIG51bGwsIF90b0Rpc3BsYXlTdHJpbmcoX2N0eC5tYWtlVGl0bGUoYXV0aG9yLnNsdWcpKSwgMSAvKiBURVhUICovKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pLCAyNTYgLyogVU5LRVlFRF9GUkFHTUVOVCAqLykpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pKVxuICAgICAgICAgICAgOiBfY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKSxcbiAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF81LCBbXG4gICAgICAgICAgICAoX29wZW5CbG9jayh0cnVlKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhfRnJhZ21lbnQsIG51bGwsIF9yZW5kZXJMaXN0KF9jdHguc2VjdGlvbnMsIChzZWN0aW9uLCBzZWN0aW9uSW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogc2VjdGlvbkluZGV4LFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogXCJhY2NvcmRpb24taXRlbVwiXG4gICAgICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBcImFjY29yZGlvbi1oZWFkZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnaGVhZGluZycgKyBzZWN0aW9uSW5kZXhcbiAgICAgICAgICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF83LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBcImJ0biBidG4tZGVmYXVsdCBhY2NvcmRpb24tYnV0dG9uIGN1c3RvbSBidG4tY29sbGFwc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLWJzLXRvZ2dsZVwiOiBcImNvbGxhcHNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS1icy10YXJnZXRcIjogJyNjb2xsYXBzZScgKyBzZWN0aW9uSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJpYS1leHBhbmRlZFwiOiBcImZhbHNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJpYS1jb250cm9sc1wiOiAnY29sbGFwc2UnICsgc2VjdGlvbkluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgX2hvaXN0ZWRfMTAsIDggLyogUFJPUFMgKi8sIF9ob2lzdGVkXzgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfMTEsIF90b0Rpc3BsYXlTdHJpbmcoc2VjdGlvbi50aXRsZSksIDEgLyogVEVYVCAqLyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8xMiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY3JlYXRlVk5vZGUoX2NvbXBvbmVudF9GZXRjaFF1ZXVlQmFyLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZfZm9yOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiBcImZldGNoUXVldWVCYXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb25JbmRleDogc2VjdGlvbkluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIFtcInNlY3Rpb25JbmRleFwiXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSwgOCAvKiBQUk9QUyAqLywgX2hvaXN0ZWRfNiksXG4gICAgICAgICAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdjb2xsYXBzZScgKyBzZWN0aW9uSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogXCJhY2NvcmRpb24tY29sbGFwc2UgY29sbGFwc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6ICdoZWFkaW5nJyArIHNlY3Rpb25JbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS1icy1wYXJlbnRcIjogXCIjYWNjb3JkaW9uQ291cnNlXCJcbiAgICAgICAgICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8xNCwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jcmVhdGVWTm9kZShfY29tcG9uZW50X1RvY0l0ZW0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IHNlY3Rpb24uaXRlbXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb25JbmRleDogc2VjdGlvbkluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblVwZGF0ZTogX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAoJGV2ZW50KSA9PiAoX2N0eC5vblRvY1VwZGF0ZSgkZXZlbnQpKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZl9mb3I6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJ0b2NJdGVtc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgW1wiaXRlbXNcIiwgXCJzZWN0aW9uSW5kZXhcIl0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdLCA4IC8qIFBST1BTICovLCBfaG9pc3RlZF8xMylcbiAgICAgICAgICAgICAgICBdKSk7XG4gICAgICAgICAgICB9KSwgMTI4IC8qIEtFWUVEX0ZSQUdNRU5UICovKSlcbiAgICAgICAgXSksXG4gICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfMTUsIFtcbiAgICAgICAgICAgIF9jcmVhdGVWTm9kZShfY29tcG9uZW50X0xvZ0JhciwgeyByZWY6IFwibG9nQmFyXCIgfSwgbnVsbCwgNTEyIC8qIE5FRURfUEFUQ0ggKi8pXG4gICAgICAgIF0pXG4gICAgXSkpO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudFZOb2RlIGFzIF9jcmVhdGVFbGVtZW50Vk5vZGUsIHRvRGlzcGxheVN0cmluZyBhcyBfdG9EaXNwbGF5U3RyaW5nLCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2ssIGNyZWF0ZUNvbW1lbnRWTm9kZSBhcyBfY3JlYXRlQ29tbWVudFZOb2RlLCByZW5kZXJMaXN0IGFzIF9yZW5kZXJMaXN0LCBGcmFnbWVudCBhcyBfRnJhZ21lbnQsIHZNb2RlbFNlbGVjdCBhcyBfdk1vZGVsU2VsZWN0LCB3aXRoRGlyZWN0aXZlcyBhcyBfd2l0aERpcmVjdGl2ZXMsIGNyZWF0ZVRleHRWTm9kZSBhcyBfY3JlYXRlVGV4dFZOb2RlLCBwdXNoU2NvcGVJZCBhcyBfcHVzaFNjb3BlSWQsIHBvcFNjb3BlSWQgYXMgX3BvcFNjb3BlSWQgfSBmcm9tIFwidnVlXCI7XG5jb25zdCBfd2l0aFNjb3BlSWQgPSBuID0+IChfcHVzaFNjb3BlSWQoXCJkYXRhLXYtNzk3NmM0ZjRcIiksIG4gPSBuKCksIF9wb3BTY29wZUlkKCksIG4pO1xuY29uc3QgX2hvaXN0ZWRfMSA9IHsgY2xhc3M6IFwiZG93bmxvYWQtcGFnZSBwYWdlXCIgfTtcbmNvbnN0IF9ob2lzdGVkXzIgPSB7XG4gICAga2V5OiAwLFxuICAgIGNsYXNzOiBcImRsLWNudCB0ZXh0LWNlbnRlclwiXG59O1xuY29uc3QgX2hvaXN0ZWRfMyA9IHtcbiAgICBrZXk6IDAsXG4gICAgY2xhc3M6IFwiZXhlcmNpc2UtZmlsZS1jbnRcIlxufTtcbmNvbnN0IF9ob2lzdGVkXzQgPSAvKiNfX1BVUkVfXyovIF93aXRoU2NvcGVJZCgoKSA9PiAvKiNfX1BVUkVfXyovIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJsYWJlbFwiLCB7IGNsYXNzOiBcImZvcm0tbGFiZWxcIiB9LCBcIkV4ZXJjaXNlIEZpbGU6IFwiLCAtMSAvKiBIT0lTVEVEICovKSk7XG5jb25zdCBfaG9pc3RlZF81ID0gW1wiaHJlZlwiXTtcbmNvbnN0IF9ob2lzdGVkXzYgPSB7XG4gICAga2V5OiAxLFxuICAgIGNsYXNzOiBcImRsLWNvbmZpZy1jbnRcIlxufTtcbmNvbnN0IF9ob2lzdGVkXzcgPSAvKiNfX1BVUkVfXyovIF93aXRoU2NvcGVJZCgoKSA9PiAvKiNfX1BVUkVfXyovIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJsYWJlbFwiLCB7IGNsYXNzOiBcImZvcm0tbGFiZWxcIiB9LCBcIlNldCB2aWRlbyBvdXRwdXQgZm9ybWF0IDogXCIsIC0xIC8qIEhPSVNURUQgKi8pKTtcbmNvbnN0IF9ob2lzdGVkXzggPSAvKiNfX1BVUkVfXyovIF93aXRoU2NvcGVJZCgoKSA9PiAvKiNfX1BVUkVfXyovIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJvcHRpb25cIiwgeyB2YWx1ZTogXCJcIiB9LCBcIi0tQ2hvb3NlLS1cIiwgLTEgLyogSE9JU1RFRCAqLykpO1xuY29uc3QgX2hvaXN0ZWRfOSA9IFtcInZhbHVlXCJdO1xuY29uc3QgX2hvaXN0ZWRfMTAgPSB7IGNsYXNzOiBcImZvcm0taGVscGVyXCIgfTtcbmNvbnN0IF9ob2lzdGVkXzExID0ge1xuICAgIGtleTogMixcbiAgICBjbGFzczogXCJkbC1wbGF5bGlzdC1jbnRcIlxufTtcbmNvbnN0IF9ob2lzdGVkXzEyID0gLyojX19QVVJFX18qLyBfd2l0aFNjb3BlSWQoKCkgPT4gLyojX19QVVJFX18qLyBfY3JlYXRlRWxlbWVudFZOb2RlKFwibGFiZWxcIiwgeyBjbGFzczogXCJmb3JtLWxhYmVsXCIgfSwgXCJQbGF5bGlzdCBGaWxlIDogXCIsIC0xIC8qIEhPSVNURUQgKi8pKTtcbmNvbnN0IF9ob2lzdGVkXzEzID0geyBocmVmOiBcImphdmFzY3JpcHQ6O1wiIH07XG5jb25zdCBfaG9pc3RlZF8xNCA9IHtcbiAgICBrZXk6IDMsXG4gICAgY2xhc3M6IFwiZGwtcGxheWxpc3QtY250XCJcbn07XG5jb25zdCBfaG9pc3RlZF8xNSA9IC8qI19fUFVSRV9fKi8gX3dpdGhTY29wZUlkKCgpID0+IC8qI19fUFVSRV9fKi8gX2NyZWF0ZUVsZW1lbnRWTm9kZShcImxhYmVsXCIsIHsgY2xhc3M6IFwiZm9ybS1sYWJlbFwiIH0sIFwiSGVscGVyIFNjcmlwdCA6IFwiLCAtMSAvKiBIT0lTVEVEICovKSk7XG5jb25zdCBfaG9pc3RlZF8xNiA9IHsgaHJlZjogXCJqYXZhc2NyaXB0OjtcIiB9O1xuY29uc3QgX2hvaXN0ZWRfMTcgPSB7XG4gICAga2V5OiA0LFxuICAgIGNsYXNzOiBcImV4ZXJjaXNlLWZpbGUtY250XCJcbn07XG5jb25zdCBfaG9pc3RlZF8xOCA9IC8qI19fUFVSRV9fKi8gX3dpdGhTY29wZUlkKCgpID0+IC8qI19fUFVSRV9fKi8gX2NyZWF0ZUVsZW1lbnRWTm9kZShcImxhYmVsXCIsIHsgY2xhc3M6IFwiZm9ybS1sYWJlbFwiIH0sIFwiU291cmNlIFJlcG9zaXRvcnkgOiBcIiwgLTEgLyogSE9JU1RFRCAqLykpO1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCBfaG9pc3RlZF8xLCBbXG4gICAgICAgIChfY3R4LmNvdXJzZSlcbiAgICAgICAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCBfaG9pc3RlZF8yLCBbXG4gICAgICAgICAgICAgICAgKF9jdHguZXhlcmNpc2VGaWxlKVxuICAgICAgICAgICAgICAgICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwgX2hvaXN0ZWRfMywgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBudWxsLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2hvaXN0ZWRfNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiYVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IF9jdHguZXhlcmNpc2VGaWxlLnVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBcIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgX3RvRGlzcGxheVN0cmluZyhfY3R4LmV4ZXJjaXNlRmlsZS5uYW1lKSwgOSAvKiBURVhULCBQUk9QUyAqLywgX2hvaXN0ZWRfNSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pKVxuICAgICAgICAgICAgICAgICAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpLFxuICAgICAgICAgICAgICAgIChfY3R4LmRvd25sb2FkQ29uZmlnKVxuICAgICAgICAgICAgICAgICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwgX2hvaXN0ZWRfNiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBudWxsLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2hvaXN0ZWRfNyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfd2l0aERpcmVjdGl2ZXMoX2NyZWF0ZUVsZW1lbnRWTm9kZShcInNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib25VcGRhdGU6bW9kZWxWYWx1ZVwiOiBfY2FjaGVbMF0gfHwgKF9jYWNoZVswXSA9ICgkZXZlbnQpID0+ICgoX2N0eC5kb3dubG9hZENvbmZpZy5zZWxlY3RlZEZtdExpc3QpID0gJGV2ZW50KSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogX2NhY2hlWzFdIHx8IChfY2FjaGVbMV0gPSAoJGV2ZW50KSA9PiAoX2N0eC51cGRhdGVTZWxlY3RlZEZtdCgpKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IFwid2lkdGhcIjogXCIxMjBweFwiLCBcImRpc3BsYXlcIjogXCJpbmxpbmVcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaG9pc3RlZF84LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoX29wZW5CbG9jayh0cnVlKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhfRnJhZ21lbnQsIG51bGwsIF9yZW5kZXJMaXN0KF9jdHguZG93bmxvYWRDb25maWcuZm10TGlzdCwgKGZtdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJvcHRpb25cIiwgeyB2YWx1ZTogZm10IH0sIF90b0Rpc3BsYXlTdHJpbmcoZm10KSwgOSAvKiBURVhULCBQUk9QUyAqLywgX2hvaXN0ZWRfOSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgMjU2IC8qIFVOS0VZRURfRlJBR01FTlQgKi8pKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sIDU0NCAvKiBIWURSQVRFX0VWRU5UUywgTkVFRF9QQVRDSCAqLyksIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192TW9kZWxTZWxlY3QsIF9jdHguZG93bmxvYWRDb25maWcuc2VsZWN0ZWRGbXRMaXN0XVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJzcGFuXCIsIF9ob2lzdGVkXzEwLCBcIkF2YWlsYWJsZSB2aWRlbyBmb3JtYXQ6IFwiICsgX3RvRGlzcGxheVN0cmluZyhfY3R4LmRvd25sb2FkQ29uZmlnLmZtdExpc3Quam9pbignLCAnKSksIDEgLyogVEVYVCAqLylcbiAgICAgICAgICAgICAgICAgICAgXSkpXG4gICAgICAgICAgICAgICAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSksXG4gICAgICAgICAgICAgICAgKF9jdHguZG93bmxvYWRDb25maWcuc2VsZWN0ZWRGbXRMaXN0KVxuICAgICAgICAgICAgICAgICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwgX2hvaXN0ZWRfMTEsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9ob2lzdGVkXzEyLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImFcIiwgX2hvaXN0ZWRfMTMsIF90b0Rpc3BsYXlTdHJpbmcoX2N0eC5jb3Vyc2Uuc2x1ZykgKyBcIi1cIiArIF90b0Rpc3BsYXlTdHJpbmcoX2N0eC5kb3dubG9hZENvbmZpZy5zZWxlY3RlZEZtdExpc3QpICsgXCIubTN1XCIsIDEgLyogVEVYVCAqLylcbiAgICAgICAgICAgICAgICAgICAgXSkpXG4gICAgICAgICAgICAgICAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSksXG4gICAgICAgICAgICAgICAgKF9jdHguZG93bmxvYWRDb25maWcuc2VsZWN0ZWRGbXRMaXN0KVxuICAgICAgICAgICAgICAgICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwgX2hvaXN0ZWRfMTQsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9ob2lzdGVkXzE1LFxuICAgICAgICAgICAgICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImFcIiwgX2hvaXN0ZWRfMTYsIF90b0Rpc3BsYXlTdHJpbmcoX2N0eC5jb3Vyc2Uuc2x1ZykgKyBcIi1cIiArIF90b0Rpc3BsYXlTdHJpbmcoX2N0eC5kb3dubG9hZENvbmZpZy5zZWxlY3RlZEZtdExpc3QpICsgXCItdXRpbC5zaFwiLCAxIC8qIFRFWFQgKi8pXG4gICAgICAgICAgICAgICAgICAgIF0pKVxuICAgICAgICAgICAgICAgICAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpLFxuICAgICAgICAgICAgICAgIChfY3R4LmNvdXJzZS5zb3VyY2VDb2RlUmVwb3NpdG9yeSlcbiAgICAgICAgICAgICAgICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIF9ob2lzdGVkXzE3LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIG51bGwsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaG9pc3RlZF8xOCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY3JlYXRlVGV4dFZOb2RlKFwiIFwiICsgX3RvRGlzcGxheVN0cmluZyhfY3R4LmNvdXJzZS5zb3VyY2VDb2RlUmVwb3NpdG9yeSksIDEgLyogVEVYVCAqLylcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pKVxuICAgICAgICAgICAgICAgICAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpXG4gICAgICAgICAgICBdKSlcbiAgICAgICAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSlcbiAgICBdKSk7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50Vk5vZGUgYXMgX2NyZWF0ZUVsZW1lbnRWTm9kZSwgY3JlYXRlVGV4dFZOb2RlIGFzIF9jcmVhdGVUZXh0Vk5vZGUsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jayB9IGZyb20gXCJ2dWVcIjtcbmNvbnN0IF9ob2lzdGVkXzEgPSB7IGNsYXNzOiBcImhlbHAtcGFnZSBwYWdlXCIgfTtcbmNvbnN0IF9ob2lzdGVkXzIgPSAvKiNfX1BVUkVfXyovIF9jcmVhdGVUZXh0Vk5vZGUoXCIgSEVMUCBcIik7XG5jb25zdCBfaG9pc3RlZF8zID0gLyojX19QVVJFX18qLyBfY3JlYXRlRWxlbWVudFZOb2RlKFwiaVwiLCB7IGNsYXNzOiBcImZhIGZhLXN5bmNcIiB9LCBudWxsLCAtMSAvKiBIT0lTVEVEICovKTtcbmNvbnN0IF9ob2lzdGVkXzQgPSAvKiNfX1BVUkVfXyovIF9jcmVhdGVUZXh0Vk5vZGUoXCIgU3luYyBMU1wiKTtcbmNvbnN0IF9ob2lzdGVkXzUgPSBbXG4gICAgX2hvaXN0ZWRfMyxcbiAgICBfaG9pc3RlZF80XG5dO1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCBfaG9pc3RlZF8xLCBbXG4gICAgICAgIF9ob2lzdGVkXzIsXG4gICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgbnVsbCwgW1xuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgY2xhc3M6IFwiYnRuIGJ0bi1kYW5nZXJcIixcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiBfY2FjaGVbMF0gfHwgKF9jYWNoZVswXSA9ICgkZXZlbnQpID0+IChfY3R4LnN5bmNMUygpKSlcbiAgICAgICAgICAgIH0sIF9ob2lzdGVkXzUpXG4gICAgICAgIF0pXG4gICAgXSkpO1xufVxuIiwiaW1wb3J0IHsgdG9EaXNwbGF5U3RyaW5nIGFzIF90b0Rpc3BsYXlTdHJpbmcsIGNyZWF0ZUVsZW1lbnRWTm9kZSBhcyBfY3JlYXRlRWxlbWVudFZOb2RlLCBjcmVhdGVUZXh0Vk5vZGUgYXMgX2NyZWF0ZVRleHRWTm9kZSwgcmVuZGVyTGlzdCBhcyBfcmVuZGVyTGlzdCwgRnJhZ21lbnQgYXMgX0ZyYWdtZW50LCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2ssIGNyZWF0ZUNvbW1lbnRWTm9kZSBhcyBfY3JlYXRlQ29tbWVudFZOb2RlLCBub3JtYWxpemVDbGFzcyBhcyBfbm9ybWFsaXplQ2xhc3MgfSBmcm9tIFwidnVlXCI7XG5jb25zdCBfaG9pc3RlZF8xID0geyBjbGFzczogXCJ3ZWxjb21lLXBhZ2UgcGFnZVwiIH07XG5jb25zdCBfaG9pc3RlZF8yID0geyBjbGFzczogXCJ0ZXh0LWNlbnRlclwiIH07XG5jb25zdCBfaG9pc3RlZF8zID0geyBjbGFzczogXCJhY3Rpb24tY250XCIgfTtcbmNvbnN0IF9ob2lzdGVkXzQgPSB7XG4gICAga2V5OiAwLFxuICAgIGNsYXNzOiBcImRyb3Bkb3duXCJcbn07XG5jb25zdCBfaG9pc3RlZF81ID0gLyojX19QVVJFX18qLyBfY3JlYXRlRWxlbWVudFZOb2RlKFwiYnV0dG9uXCIsIHtcbiAgICBjbGFzczogXCJidG4gYnRuLXNlY29uZGFyeSBkcm9wZG93bi10b2dnbGVcIixcbiAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgIGlkOiBcInJlY2VudENvdXJzZUJ1dHRvblwiLFxuICAgIFwiZGF0YS1icy10b2dnbGVcIjogXCJkcm9wZG93blwiLFxuICAgIFwiYXJpYS1leHBhbmRlZFwiOiBcImZhbHNlXCJcbn0sIFtcbiAgICAvKiNfX1BVUkVfXyovIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJpXCIsIHsgY2xhc3M6IFwiZmEgZmEtaGlzdG9yeVwiIH0pLFxuICAgIC8qI19fUFVSRV9fKi8gX2NyZWF0ZVRleHRWTm9kZShcIiBMb2FkIFJlY2VudCBDb3Vyc2UgXCIpXG5dLCAtMSAvKiBIT0lTVEVEICovKTtcbmNvbnN0IF9ob2lzdGVkXzYgPSB7XG4gICAgY2xhc3M6IFwiZHJvcGRvd24tbWVudVwiLFxuICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IFwicmVjZW50Q291cnNlQnV0dG9uXCJcbn07XG5jb25zdCBfaG9pc3RlZF83ID0gW1wib25DbGlja1wiXTtcbmNvbnN0IF9ob2lzdGVkXzggPSB7IGNsYXNzOiBcImJ0bi1jbnRcIiB9O1xuY29uc3QgX2hvaXN0ZWRfOSA9IFtcImRpc2FibGVkXCJdO1xuY29uc3QgX2hvaXN0ZWRfMTAgPSAvKiNfX1BVUkVfXyovIF9jcmVhdGVUZXh0Vk5vZGUoXCIgRmV0Y2ggVGhpcyBDb3Vyc2VcIik7XG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xuICAgIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIF9ob2lzdGVkXzEsIFtcbiAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInBcIiwgX2hvaXN0ZWRfMiwgX3RvRGlzcGxheVN0cmluZyhfY3R4LmdyZWV0aW5nKSwgMSAvKiBURVhUICovKSxcbiAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8zLCBbXG4gICAgICAgICAgICAoX2N0eC5sYXN0Q291cnNlTGlzdC5sZW5ndGggPiAwKVxuICAgICAgICAgICAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCBfaG9pc3RlZF80LCBbXG4gICAgICAgICAgICAgICAgICAgIF9ob2lzdGVkXzUsXG4gICAgICAgICAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJ1bFwiLCBfaG9pc3RlZF82LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAoX29wZW5CbG9jayh0cnVlKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhfRnJhZ21lbnQsIG51bGwsIF9yZW5kZXJMaXN0KF9jdHgubGFzdENvdXJzZUxpc3QsIChjb3Vyc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImxpXCIsIG51bGwsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImFcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFwiZHJvcGRvd24taXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogXCJqYXZhc2NyaXB0OjtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgkZXZlbnQpID0+IChfY3R4LmxvYWRSZWNlbnRDb3Vyc2UoY291cnNlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgX3RvRGlzcGxheVN0cmluZyhjb3Vyc2UudGl0bGUpLCA5IC8qIFRFWFQsIFBST1BTICovLCBfaG9pc3RlZF83KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLCAyNTYgLyogVU5LRVlFRF9GUkFHTUVOVCAqLykpXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSkpXG4gICAgICAgICAgICAgICAgOiBfY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKSxcbiAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfOCwgW1xuICAgICAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJidXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogX2N0eC5mZXRjaEJ0blN0YXRlID09IDEsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiBcImJ0biBidG4tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiBfY2FjaGVbMF0gfHwgKF9jYWNoZVswXSA9ICgkZXZlbnQpID0+IChfY3R4LnJldHJpZXZlRGF0YUNvZGVzRnJvbUNvbnRlbnQoKSkpXG4gICAgICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogX25vcm1hbGl6ZUNsYXNzKFtcImZhXCIsIHsgJ2ZhLWhhbmQtby1yaWdodCc6IF9jdHguZmV0Y2hCdG5TdGF0ZSA9PSAwLCAnZmEtc3BpbiBmYS1zcGlubmVyJzogX2N0eC5mZXRjaEJ0blN0YXRlID09IDEsICdmYS1yZWZyZXNoJzogX2N0eC5mZXRjaEJ0blN0YXRlID09IDIgfV0pXG4gICAgICAgICAgICAgICAgICAgIH0sIG51bGwsIDIgLyogQ0xBU1MgKi8pLFxuICAgICAgICAgICAgICAgICAgICBfaG9pc3RlZF8xMFxuICAgICAgICAgICAgICAgIF0sIDggLyogUFJPUFMgKi8sIF9ob2lzdGVkXzkpXG4gICAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgIF0pKTtcbn1cbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5jbGFzcyBQcm94eSB7XG4gICAgc3RhdGljIGFzeW5jIGNyZWF0ZSh1cmwsIG1ldGhvZCwgcG9zdERhdGEpIHtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSB7XG4gICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJ1xuICAgICAgICB9O1xuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgICB9O1xuICAgICAgICBpZiAobWV0aG9kID09ICdwb3N0Jykge1xuICAgICAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gcG9zdERhdGEpIHtcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoa2V5LCBwb3N0RGF0YVtrZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wdGlvbnMuaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSc7XG4gICAgICAgICAgICBvcHRpb25zWydkYXRhJ10gPSBmb3JtRGF0YTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyhvcHRpb25zKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0KHVybCwgY2JTdWNjZXNzLCBjYkVycm9yKSB7XG4gICAgICAgIGF4aW9zKHtcbiAgICAgICAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGNiU3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIGNiU3VjY2VzcyhyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgY2JFcnJvcikge1xuICAgICAgICAgICAgICAgIGNiRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIHBvc3QodXJsLCBwb3N0RGF0YSwgY2JTdWNjZXNzLCBjYkVycm9yLCBvcHRBcmdzKSB7XG4gICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gcG9zdERhdGEpIHtcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChrZXksIHBvc3REYXRhW2tleV0pO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdEFyZ3MgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbiBpbiBvcHRBcmdzKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBmID0gb3B0QXJnc1tuXTtcbiAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKG4sIGYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgIH1cbiAgICAgICAgYXhpb3Moe1xuICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgIGRhdGE6IGZvcm1EYXRhLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyxcbiAgICAgICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGNiU3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIGNiU3VjY2VzcyhyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgY2JFcnJvcikge1xuICAgICAgICAgICAgICAgIGNiRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBQcm94eTtcbiIsImltcG9ydCBsb2NhbFN0b3JhZ2VEQiBmcm9tIFwibG9jYWxTdG9yYWdlREJcIjtcbmltcG9ydCBQcm94eSBmcm9tIFwiLi9wcm94eVwiO1xuaW1wb3J0IHsgbWFrZVNsdWcsIG1ha2VUaXRsZSB9IGZyb20gXCIuL3V0aWxzXCI7XG5jbGFzcyBNeUxTIHtcbiAgICBkYjtcbiAgICBzdWJzY3JpYmVycyA9IHt9O1xuICAgIGxhc3RUYWJsZSA9ICcnO1xuICAgIGxhc3RUYWJsZVBrO1xuICAgIGNvbnN0cnVjdG9yKGRiLCBlbmdpbmUpIHtcbiAgICAgICAgdGhpcy5kYiA9IG5ldyBsb2NhbFN0b3JhZ2VEQihkYiwgZW5naW5lKTtcbiAgICB9XG4gICAgc3Vic2NyaWJlKHRhYmxlLCBmbikge1xuICAgICAgICB0aGlzLnN1YnNjcmliZXJzW3RhYmxlXSA9IGZuO1xuICAgIH1cbiAgICB1cGRhdGUodGFibGUsIHF1ZXJ5LCB1cGRhdGUpIHtcbiAgICAgICAgY29uc3QgcmV0ID0gdGhpcy5kYi51cGRhdGUodGFibGUsIHF1ZXJ5LCB1cGRhdGUpO1xuICAgICAgICB0aGlzLmxhc3RUYWJsZSA9IHRhYmxlO1xuICAgICAgICB0aGlzLmxhc3RUYWJsZVBrID0gcmV0O1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cbiAgICBpbnNlcnQoYSwgYikge1xuICAgICAgICByZXR1cm4gdGhpcy5kYi5pbnNlcnQoYSwgYik7XG4gICAgfVxuICAgIHF1ZXJ5QWxsKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGIucXVlcnlBbGwoYSwgYik7XG4gICAgfVxuICAgIGdldFJvdyh0YWJsZSwgSUQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGIucXVlcnlBbGwodGFibGUsIHsgSUQgfSlbMF07XG4gICAgfVxuICAgIGNvbW1pdCgpIHtcbiAgICAgICAgY29uc3QgcmV0ID0gdGhpcy5kYi5jb21taXQoKTtcbiAgICAgICAgaWYgKHRoaXMubGFzdFRhYmxlICE9PSAnJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnN1YnNjcmliZXJzW3RoaXMubGFzdFRhYmxlXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdyA9IHRoaXMuZ2V0Um93KHRoaXMubGFzdFRhYmxlLCB0aGlzLmxhc3RUYWJsZVBrKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN1YnNjcmliZXJzW3RoaXMubGFzdFRhYmxlXShyb3cpO1xuICAgICAgICAgICAgICAgIHRoaXMubGFzdFRhYmxlID0gJyc7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0VGFibGVQayA9IC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuICAgIGlzTmV3KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYi5pc05ldygpO1xuICAgIH1cbiAgICBjcmVhdGVUYWJsZShhLCBiKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRiLmNyZWF0ZVRhYmxlKGEsIGIpO1xuICAgIH1cbiAgICB0YWJsZUV4aXN0cyh0YWJsZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYi50YWJsZUV4aXN0cyh0YWJsZSk7XG4gICAgfVxufVxuY2xhc3MgU3RvcmUge1xuICAgIHN0YXRpYyBfX2RiX187XG4gICAgc3RhdGljIGRiKCkge1xuICAgICAgICBpZiAodHlwZW9mIFN0b3JlLl9fZGJfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIFN0b3JlLl9fZGJfXyA9IG5ldyBNeUxTKFwibGVhcm5pbmdcIiwgJ2xvY2FsU3RvcmFnZScpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBTdG9yZS5fX2RiX187XG4gICAgfVxuICAgIHN0YXRpYyBpbml0KCkge1xuICAgICAgICBjb25zdCBkYiA9IFN0b3JlLmRiKCk7XG4gICAgICAgIGlmIChkYi5pc05ldygpKSB7XG4gICAgICAgICAgICBjb25zdCBzY2hlbWEgPSB7XG4gICAgICAgICAgICAgICAgY291cnNlOiBbXCJ0aXRsZVwiLCBcInNsdWdcIiwgXCJkdXJhdGlvblwiLCBcInNvdXJjZUNvZGVSZXBvc2l0b3J5XCIsIFwiZGVzY3JpcHRpb25cIiwgJ2F1dGhvcklkcyddLFxuICAgICAgICAgICAgICAgIGF1dGhvcjogW1wibmFtZVwiLCBcInNsdWdcIiwgXCJiaW9ncmFwaHlcIiwgXCJzaG9ydEJpb2dyYXBoeVwiLCBcImNvdXJzZUlkc1wiXSxcbiAgICAgICAgICAgICAgICBleGVyY2lzZUZpbGU6IFtcImNvdXJzZUlkXCIsIFwibmFtZVwiLCBcInVybFwiLCBcInNpemVcIl0sXG4gICAgICAgICAgICAgICAgc2VjdGlvbjogW1wiY291cnNlSWRcIiwgXCJzbHVnXCIsIFwidGl0bGVcIl0sXG4gICAgICAgICAgICAgICAgdG9jOiBbXCJzZWN0aW9uSWRcIiwgXCJ0aXRsZVwiLCBcInNsdWdcIiwgXCJ1cmxcIiwgXCJkdXJhdGlvblwiLCBcImNhcHRpb25VcmxcIiwgXCJjYXB0aW9uRm10XCIsIFwic3RyZWFtTG9jYXRpb25JZHNcIl0sXG4gICAgICAgICAgICAgICAgc3RyZWFtTG9jYXRpb246IFtcInRvY0lkXCIsIFwiZm10XCIsIFwidXJsXCJdLFxuICAgICAgICAgICAgICAgIGRvd25sb2FkQ29uZmlnOiBbXCJjb3Vyc2VJZFwiLCBcImZtdExpc3RcIiwgXCJzZWxlY3RlZEZtdExpc3RcIl0sXG4gICAgICAgICAgICAgICAgZG93bmxvYWRzOiBbXCJ0b2NJZFwiLCBcImRvd25sb2FkSWRcIiwgXCJmaWxlbmFtZVwiLCBcInByb2dyZXNzXCIsIFwic3RhdHVzXCJdLFxuICAgICAgICAgICAgICAgIGFwcDogW1widmVyc2lvblwiLCBcInN0YXRlXCIsIFwibGFzdENvdXJzZVNsdWdcIl1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzY2hlbWEpLm1hcCgodGFibGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWRiLnRhYmxlRXhpc3RzKHRhYmxlKSkge1xuICAgICAgICAgICAgICAgICAgICBkYi5jcmVhdGVUYWJsZSh0YWJsZSwgc2NoZW1hW3RhYmxlXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkYi5jb21taXQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgZ2V0RXhlcmNpc2VGaWxlKGNvdXJzZUlkKSB7XG4gICAgICAgIGNvbnN0IGRiID0gU3RvcmUuZGIoKTtcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IGRiLnF1ZXJ5QWxsKCdleGVyY2lzZUZpbGUnLCB7IHF1ZXJ5OiB7IGNvdXJzZUlkIH0gfSk7XG4gICAgICAgIGlmIChyZXN1bHRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRzWzBdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0Q291cnNlKHNsdWcpIHtcbiAgICAgICAgY29uc3QgZGIgPSBTdG9yZS5kYigpO1xuICAgICAgICBjb25zdCByZXN1bHRzID0gZGIucXVlcnlBbGwoJ2NvdXJzZScsIHsgcXVlcnk6IHsgc2x1ZyB9IH0pO1xuICAgICAgICBpZiAocmVzdWx0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0c1swXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgc3RhdGljIGdldExhc3RDb3Vyc2VzKHNsdWcpIHtcbiAgICAgICAgY29uc3QgZGIgPSBTdG9yZS5kYigpO1xuICAgICAgICBpZiAodHlwZW9mIHNsdWcgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBjb25zdCBhcHBTdGF0ZSA9IFN0b3JlLmdldEFwcFN0YXRlKCk7XG4gICAgICAgICAgICBzbHVnID0gYXBwU3RhdGUubGFzdENvdXJzZVNsdWc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IGRiLnF1ZXJ5QWxsKCdjb3Vyc2UnLCB7IHF1ZXJ5OiAocm93KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJvdy5zbHVnICE9PSBzbHVnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0Q291cnNlQnlJZChJRCkge1xuICAgICAgICBjb25zdCBkYiA9IFN0b3JlLmRiKCk7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBkYi5xdWVyeUFsbCgnY291cnNlJywgeyBxdWVyeTogeyBJRCB9IH0pO1xuICAgICAgICBpZiAocmVzdWx0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0c1swXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgc3RhdGljIGdldFNlY3Rpb24oc2x1ZywgY291cnNlSWQpIHtcbiAgICAgICAgY29uc3QgZGIgPSBTdG9yZS5kYigpO1xuICAgICAgICBjb25zdCByZXN1bHRzID0gZGIucXVlcnlBbGwoJ3NlY3Rpb24nLCB7IHF1ZXJ5OiB7IHNsdWcsIGNvdXJzZUlkIH0gfSk7XG4gICAgICAgIGlmIChyZXN1bHRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRzWzBdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0U2VjdGlvbnNCeUNvdXJzZUlkKGNvdXJzZUlkKSB7XG4gICAgICAgIGNvbnN0IGRiID0gU3RvcmUuZGIoKTtcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IGRiLnF1ZXJ5QWxsKCdzZWN0aW9uJywgeyBxdWVyeTogeyBjb3Vyc2VJZCB9IH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG4gICAgc3RhdGljIGdldFRvY3NCeVNlY3Rpb25JZChzZWN0aW9uSWQpIHtcbiAgICAgICAgY29uc3QgZGIgPSBTdG9yZS5kYigpO1xuICAgICAgICBjb25zdCByZXN1bHRzID0gZGIucXVlcnlBbGwoJ3RvYycsIHsgcXVlcnk6IHsgc2VjdGlvbklkIH0gfSk7XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0VG9jKHNsdWcpIHtcbiAgICAgICAgY29uc3QgZGIgPSBTdG9yZS5kYigpO1xuICAgICAgICBjb25zdCByZXN1bHRzID0gZGIucXVlcnlBbGwoJ3RvYycsIHsgcXVlcnk6IHsgc2x1ZyB9IH0pO1xuICAgICAgICBpZiAocmVzdWx0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0c1swXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgc3RhdGljIGdldEF1dGhvcihzbHVnKSB7XG4gICAgICAgIGNvbnN0IGRiID0gU3RvcmUuZGIoKTtcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IGRiLnF1ZXJ5QWxsKCdhdXRob3InLCB7IHF1ZXJ5OiB7IHNsdWcgfSB9KTtcbiAgICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHNbMF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRBdXRob3JCeUlkKElEKSB7XG4gICAgICAgIGNvbnN0IGRiID0gU3RvcmUuZGIoKTtcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IGRiLnF1ZXJ5QWxsKCdhdXRob3InLCB7IHF1ZXJ5OiB7IElEIH0gfSk7XG4gICAgICAgIGlmIChyZXN1bHRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRzWzBdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0RG93bmxvYWRDb25maWcoY291cnNlSWQpIHtcbiAgICAgICAgY29uc3QgZGIgPSBTdG9yZS5kYigpO1xuICAgICAgICBjb25zdCByZXN1bHRzID0gZGIucXVlcnlBbGwoJ2Rvd25sb2FkQ29uZmlnJywgeyBxdWVyeTogeyBjb3Vyc2VJZCB9IH0pO1xuICAgICAgICBpZiAocmVzdWx0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0c1swXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZUF1dGhvcihuYW1lLCBzbHVnLCBiaW9ncmFwaHksIHNob3J0QmlvZ3JhcGh5LCBjb3Vyc2VJZCkge1xuICAgICAgICBjb25zdCBkYiA9IFN0b3JlLmRiKCk7XG4gICAgICAgIGxldCBhdXRob3IgPSBTdG9yZS5nZXRBdXRob3Ioc2x1Zyk7XG4gICAgICAgIGlmIChhdXRob3IpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvdXJzZUlkcyA9IGF1dGhvci5jb3Vyc2VJZHM7XG4gICAgICAgICAgICBpZiAoIWNvdXJzZUlkcy5pbmNsdWRlcyhjb3Vyc2VJZCkpIHtcbiAgICAgICAgICAgICAgICBjb3Vyc2VJZHMucHVzaChjb3Vyc2VJZCk7XG4gICAgICAgICAgICAgICAgZGIudXBkYXRlKCdhdXRob3InLCB7IHNsdWcgfSwgKHJvdykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByb3cuY291cnNlSWRzID0gY291cnNlSWRzO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm93O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBkYi5jb21taXQoKTsgfSwgMTAwKTtcbiAgICAgICAgICAgICAgICBhdXRob3IuY291cnNlSWRzID0gY291cnNlSWRzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY291cnNlSWRzID0gW107XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvdXJzZUlkID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIGNvdXJzZUlkcy5wdXNoKGNvdXJzZUlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IElEID0gMDtcbiAgICAgICAgICAgIGF1dGhvciA9IHsgSUQsIG5hbWUsIHNsdWcsIGJpb2dyYXBoeSwgc2hvcnRCaW9ncmFwaHksIGNvdXJzZUlkcyB9O1xuICAgICAgICAgICAgYXV0aG9yLklEID0gZGIuaW5zZXJ0KCdhdXRob3InLCBhdXRob3IpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IGRiLmNvbW1pdCgpOyB9LCAxMDApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhdXRob3I7XG4gICAgfVxuICAgIHN0YXRpYyBjcmVhdGVBdXRob3JMaXN0KGNvdXJzZVNsdWcsIGF1dGhvcnMpIHtcbiAgICAgICAgY29uc3QgZGIgPSBTdG9yZS5kYigpO1xuICAgICAgICBjb25zdCBjb3Vyc2UgPSBTdG9yZS5nZXRDb3Vyc2UoY291cnNlU2x1Zyk7XG4gICAgICAgIGNvbnN0IGF1dGhvclJlc3VsdHMgPSBbXTtcbiAgICAgICAgaWYgKGNvdXJzZSkge1xuICAgICAgICAgICAgbGV0IGF1dGhvcklkcyA9IGNvdXJzZS5hdXRob3JJZHM7XG4gICAgICAgICAgICBhdXRob3JzLm1hcCgoYXV0aG9yVG1wKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYXV0aG9yVG1wKTtcbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gbWFrZVRpdGxlKGF1dGhvclRtcC5zbHVnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBhdXRob3IgPSBTdG9yZS5jcmVhdGVBdXRob3IobmFtZSwgYXV0aG9yVG1wLnNsdWcsIGF1dGhvclRtcC5iaW9ncmFwaHksIGF1dGhvclRtcC5zaG9ydEJpb2dyYXBoeSwgY291cnNlLklEKTtcbiAgICAgICAgICAgICAgICBpZiAoIWF1dGhvcklkcy5pbmNsdWRlcyhhdXRob3IuSUQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGF1dGhvcklkcy5wdXNoKGF1dGhvci5JRCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGF1dGhvclJlc3VsdHMucHVzaChhdXRob3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkYi51cGRhdGUoJ2NvdXJzZScsIHsgc2x1ZzogY291cnNlU2x1ZyB9LCAocm93KSA9PiB7XG4gICAgICAgICAgICAgICAgcm93LmF1dGhvcklkcyA9IGF1dGhvcklkcztcbiAgICAgICAgICAgICAgICByZXR1cm4gcm93O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkYi5jb21taXQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXV0aG9yUmVzdWx0cztcbiAgICB9XG4gICAgc3RhdGljIHVwZGF0ZVRvY0NhcHRpb24oc2x1ZywgY2FwdGlvblVybCwgY2FwdGlvbkZtdCkge1xuICAgICAgICBjb25zdCBkYiA9IFN0b3JlLmRiKCk7XG4gICAgICAgIGNvbnN0IHRvYyA9IFN0b3JlLmdldFRvYyhzbHVnKTtcbiAgICAgICAgaWYgKHRvYykge1xuICAgICAgICAgICAgZGIudXBkYXRlKFwidG9jXCIsIHsgc2x1ZyB9LCBmdW5jdGlvbiAobmV3VG9jKSB7XG4gICAgICAgICAgICAgICAgbmV3VG9jLmNhcHRpb25VcmwgPSBjYXB0aW9uVXJsO1xuICAgICAgICAgICAgICAgIG5ld1RvYy5jYXB0aW9uRm10ID0gY2FwdGlvbkZtdDtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3VG9jO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkYi5jb21taXQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgZ2V0U3RyZWFtTG9jYXRpb24odG9jSWQsIGZtdCkge1xuICAgICAgICBjb25zdCBkYiA9IFN0b3JlLmRiKCk7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBkYi5xdWVyeUFsbCgnc3RyZWFtTG9jYXRpb24nLCB7IHF1ZXJ5OiB7IHRvY0lkLCBmbXQgfSB9KTtcbiAgICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHNbMF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRTdHJlYW1Mb2NhdGlvbnModG9jSWQpIHtcbiAgICAgICAgY29uc3QgZGIgPSBTdG9yZS5kYigpO1xuICAgICAgICBjb25zdCByZXN1bHRzID0gZGIucXVlcnlBbGwoJ3N0cmVhbUxvY2F0aW9uJywgeyBxdWVyeTogeyB0b2NJZCB9IH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZVN0cmVhbUxvY2F0aW9uKHRvY0lkLCBmbXQsIHVybCkge1xuICAgICAgICBjb25zdCBkYiA9IFN0b3JlLmRiKCk7XG4gICAgICAgIGxldCBzdHJlYW1Mb2NhdGlvbiA9IFN0b3JlLmdldFN0cmVhbUxvY2F0aW9uKHRvY0lkLCBmbXQpO1xuICAgICAgICBpZiAoc3RyZWFtTG9jYXRpb24pIHtcbiAgICAgICAgICAgIHN0cmVhbUxvY2F0aW9uLnVybCA9IHVybDtcbiAgICAgICAgICAgIGRiLnVwZGF0ZSgnc3RyZWFtTG9jYXRpb24nLCAocm93KSA9PiB7XG4gICAgICAgICAgICAgICAgcm93LnVybCA9IHVybDtcbiAgICAgICAgICAgICAgICByZXR1cm4gcm93O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBJRCA9IDA7XG4gICAgICAgICAgICBzdHJlYW1Mb2NhdGlvbiA9IHsgSUQsIHRvY0lkLCBmbXQsIHVybCB9O1xuICAgICAgICAgICAgc3RyZWFtTG9jYXRpb24uSUQgPSBkYi5pbnNlcnQoJ3N0cmVhbUxvY2F0aW9uJywgc3RyZWFtTG9jYXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZGIuY29tbWl0KCksIDEwMCk7XG4gICAgICAgIHJldHVybiBzdHJlYW1Mb2NhdGlvbjtcbiAgICB9XG4gICAgc3RhdGljIHVwZGF0ZURvd25sb2FkQ29uZmlnKGZpZWxkTmFtZSwgZGF0YSwgY291cnNlSWQpIHtcbiAgICAgICAgY29uc3QgZGIgPSBTdG9yZS5kYigpO1xuICAgICAgICBsZXQgZG93bmxvYWRDb25maWcgPSBTdG9yZS5nZXREb3dubG9hZENvbmZpZyhjb3Vyc2VJZCk7XG4gICAgICAgIGlmIChkb3dubG9hZENvbmZpZykge1xuICAgICAgICAgICAgZGIudXBkYXRlKCdkb3dubG9hZENvbmZpZycsIHsgY291cnNlSWQgfSwgKHJvdykgPT4ge1xuICAgICAgICAgICAgICAgIHJvd1tmaWVsZE5hbWVdID0gZGF0YTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcm93O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBJRCA9IDA7XG4gICAgICAgICAgICBjb25zdCBmbXRMaXN0ID0gW107XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZEZtdExpc3QgPSAnJztcbiAgICAgICAgICAgIGRvd25sb2FkQ29uZmlnID0geyBJRCwgY291cnNlSWQsIGZtdExpc3QsIHNlbGVjdGVkRm10TGlzdCB9O1xuICAgICAgICAgICAgZG93bmxvYWRDb25maWdbZmllbGROYW1lXSA9IGRhdGE7XG4gICAgICAgICAgICBkb3dubG9hZENvbmZpZy5JRCA9IGRiLmluc2VydCgnZG93bmxvYWRDb25maWcnLCBkb3dubG9hZENvbmZpZyk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBkYi5jb21taXQoKSwgMTAwKTtcbiAgICAgICAgcmV0dXJuIGRvd25sb2FkQ29uZmlnO1xuICAgIH1cbiAgICBzdGF0aWMgY3JlYXRlU3RyZWFtTG9jYXRpb25MaXN0KHNsdWcsIHN0cmVhbUxvY2F0aW9ucywgY291cnNlSWQpIHtcbiAgICAgICAgY29uc3QgZGIgPSBTdG9yZS5kYigpO1xuICAgICAgICBjb25zdCB0b2MgPSBTdG9yZS5nZXRUb2Moc2x1Zyk7XG4gICAgICAgIGNvbnN0IHN0cmVhbUxvY2F0aW9uUmVzdWx0cyA9IFtdO1xuICAgICAgICBjb25zdCBmbXRMaXN0ID0gW107XG4gICAgICAgIGlmICh0b2MpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0cmVhbUxvY2F0aW9uSWRzID0gdG9jLnN0cmVhbUxvY2F0aW9uSWRzO1xuICAgICAgICAgICAgc3RyZWFtTG9jYXRpb25zLm1hcCgoc3RyZWFtTG9jYXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzdHJlYW1Mb2NhdGlvbik7XG4gICAgICAgICAgICAgICAgaWYgKCFmbXRMaXN0LmluY2x1ZGVzKHN0cmVhbUxvY2F0aW9uLmZtdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZm10TGlzdC5wdXNoKHN0cmVhbUxvY2F0aW9uLmZtdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHN0cmVhbUxvYyA9IFN0b3JlLmNyZWF0ZVN0cmVhbUxvY2F0aW9uKHRvYy5JRCwgc3RyZWFtTG9jYXRpb24uZm10LCBzdHJlYW1Mb2NhdGlvbi51cmwpO1xuICAgICAgICAgICAgICAgIGlmICghc3RyZWFtTG9jYXRpb25JZHMuaW5jbHVkZXMoc3RyZWFtTG9jLklEKSkge1xuICAgICAgICAgICAgICAgICAgICBzdHJlYW1Mb2NhdGlvbklkcy5wdXNoKHN0cmVhbUxvYy5JRCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN0cmVhbUxvY2F0aW9uUmVzdWx0cy5wdXNoKHN0cmVhbUxvYyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRiLnVwZGF0ZSgndG9jJywgeyBzbHVnIH0sIChyb3cpID0+IHtcbiAgICAgICAgICAgICAgICByb3cuc3RyZWFtTG9jYXRpb25JZHMgPSBzdHJlYW1Mb2NhdGlvbklkcztcbiAgICAgICAgICAgICAgICByZXR1cm4gcm93O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkYi5jb21taXQoKTtcbiAgICAgICAgICAgIGlmIChjb3Vyc2VJZCkge1xuICAgICAgICAgICAgICAgIFN0b3JlLnVwZGF0ZURvd25sb2FkQ29uZmlnKCdmbXRMaXN0JywgZm10TGlzdCwgY291cnNlSWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHJlYW1Mb2NhdGlvblJlc3VsdHM7XG4gICAgfVxuICAgIHN0YXRpYyBjcmVhdGVFeGVyY2lzZUZpbGUoY291cnNlSWQsIG5hbWUsIHVybCwgc2l6ZSkge1xuICAgICAgICBjb25zdCBkYiA9IFN0b3JlLmRiKCk7XG4gICAgICAgIGxldCBleGVyY2lzZUZpbGUgPSBTdG9yZS5nZXRFeGVyY2lzZUZpbGUoY291cnNlSWQpO1xuICAgICAgICBpZiAoIWV4ZXJjaXNlRmlsZSkge1xuICAgICAgICAgICAgY29uc3QgSUQgPSAwO1xuICAgICAgICAgICAgZXhlcmNpc2VGaWxlID0geyBJRCwgY291cnNlSWQsIG5hbWUsIHVybCwgc2l6ZSB9O1xuICAgICAgICAgICAgZXhlcmNpc2VGaWxlLklEID0gZGIuaW5zZXJ0KCdleGVyY2lzZUZpbGUnLCBleGVyY2lzZUZpbGUpO1xuICAgICAgICAgICAgZGIuY29tbWl0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV4ZXJjaXNlRmlsZTtcbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZVNlY3Rpb24oY291cnNlSWQsIHRpdGxlKSB7XG4gICAgICAgIGNvbnN0IGRiID0gU3RvcmUuZGIoKTtcbiAgICAgICAgY29uc3Qgc2x1ZyA9IG1ha2VTbHVnKHRpdGxlKTtcbiAgICAgICAgbGV0IHNlY3Rpb24gPSBTdG9yZS5nZXRTZWN0aW9uKHNsdWcsIGNvdXJzZUlkKTtcbiAgICAgICAgaWYgKCFzZWN0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCBJRCA9IDA7XG4gICAgICAgICAgICBzZWN0aW9uID0geyBJRCwgY291cnNlSWQsIHRpdGxlLCBzbHVnIH07XG4gICAgICAgICAgICBzZWN0aW9uLklEID0gZGIuaW5zZXJ0KCdzZWN0aW9uJywgc2VjdGlvbik7XG4gICAgICAgICAgICBkYi5jb21taXQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VjdGlvbjtcbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZVRvYyhzZWN0aW9uSWQsIHRpdGxlLCBzbHVnLCB1cmwsIGR1cmF0aW9uLCBjYXB0aW9uVXJsLCBjYXB0aW9uRm10KSB7XG4gICAgICAgIGNvbnN0IGRiID0gU3RvcmUuZGIoKTtcbiAgICAgICAgbGV0IHRvYyA9IFN0b3JlLmdldFRvYyhzbHVnKTtcbiAgICAgICAgaWYgKCF0b2MpIHtcbiAgICAgICAgICAgIGNvbnN0IElEID0gMDtcbiAgICAgICAgICAgIGNvbnN0IHN0cmVhbUxvY2F0aW9uSWRzID0gW107XG4gICAgICAgICAgICB0b2MgPSB7IElELCBzZWN0aW9uSWQsIHRpdGxlLCBzbHVnLCB1cmwsIGR1cmF0aW9uLCBjYXB0aW9uVXJsLCBjYXB0aW9uRm10LCBzdHJlYW1Mb2NhdGlvbklkcyB9O1xuICAgICAgICAgICAgdG9jLklEID0gZGIuaW5zZXJ0KCd0b2MnLCB0b2MpO1xuICAgICAgICAgICAgZGIuY29tbWl0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRvYztcbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZUNvdXJzZSh0aXRsZSwgc2x1ZywgZHVyYXRpb24sIHNvdXJjZUNvZGVSZXBvc2l0b3J5LCBkZXNjcmlwdGlvbikge1xuICAgICAgICBjb25zdCBkYiA9IFN0b3JlLmRiKCk7XG4gICAgICAgIGxldCBjb3Vyc2UgPSBTdG9yZS5nZXRDb3Vyc2Uoc2x1Zyk7XG4gICAgICAgIGlmICghY291cnNlKSB7XG4gICAgICAgICAgICBjb25zdCBJRCA9IDA7XG4gICAgICAgICAgICBjb25zdCBhdXRob3JJZHMgPSBbXTtcbiAgICAgICAgICAgIGNvdXJzZSA9IHsgSUQsIHRpdGxlLCBzbHVnLCBkdXJhdGlvbiwgc291cmNlQ29kZVJlcG9zaXRvcnksIGRlc2NyaXB0aW9uLCBhdXRob3JJZHMgfTtcbiAgICAgICAgICAgIGNvdXJzZS5JRCA9IGRiLmluc2VydCgnY291cnNlJywgY291cnNlKTtcbiAgICAgICAgICAgIGRiLmNvbW1pdCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb3Vyc2U7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRDb3Vyc2VKc29uKGNhbGxiYWNrKSB7XG4gICAgICAgIFByb3h5LmdldCgnL2RhdGEvY291cnNlLmpzb24nLCAocikgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocik7XG4gICAgICAgICAgICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2socik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0RGF0YUNvZGVzTFMoY2FsbGJhY2spIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldChbJ2RhdGFDb2RlcyddLCAocikgPT4geyBjYWxsYmFjayhKU09OLnBhcnNlKHIuZGF0YUNvZGVzKSk7IH0pO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICB9XG4gICAgc3RhdGljIHNhdmVEYXRhQ29kZXMoZGF0YUNvZGVzKSB7XG4gICAgICAgIGNvbnN0IGNvdXJzZVRtcCA9IGRhdGFDb2Rlcy5jb3Vyc2U7XG4gICAgICAgIGNvbnN0IGF1dGhvcnMgPSBjb3Vyc2VUbXAuYXV0aG9ycztcbiAgICAgICAgY29uc3QgY291cnNlID0gU3RvcmUuY3JlYXRlQ291cnNlKGNvdXJzZVRtcC50aXRsZSwgY291cnNlVG1wLnNsdWcsIGNvdXJzZVRtcC5kdXJhdGlvbiwgY291cnNlVG1wLnNvdXJjZUNvZGVSZXBvc2l0b3J5LCBjb3Vyc2VUbXAuZGVzY3JpcHRpb24pO1xuICAgICAgICBjb25zdCBzZWN0aW9ucyA9IGRhdGFDb2Rlcy5zZWN0aW9ucztcbiAgICAgICAgc2VjdGlvbnMubWFwKChzZWN0aW9uVG1wKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzZWN0aW9uID0gU3RvcmUuY3JlYXRlU2VjdGlvbihjb3Vyc2UuSUQsIHNlY3Rpb25UbXAudGl0bGUpO1xuICAgICAgICAgICAgc2VjdGlvblRtcC5pdGVtcy5tYXAoKHRvY1RtcCkgPT4ge1xuICAgICAgICAgICAgICAgIHRvY1RtcC51cmwgPSBgaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2xlYXJuaW5nLyR7Y291cnNlLnNsdWd9LyR7dG9jVG1wLnNsdWd9YDtcbiAgICAgICAgICAgICAgICBjb25zdCB0b2MgPSBTdG9yZS5jcmVhdGVUb2Moc2VjdGlvbi5JRCwgdG9jVG1wLnRpdGxlLCB0b2NUbXAuc2x1ZywgdG9jVG1wLnVybCwgdG9jVG1wLmR1cmF0aW9uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgU3RvcmUuY3JlYXRlQXV0aG9yTGlzdChjb3Vyc2Uuc2x1ZywgYXV0aG9ycyk7XG4gICAgICAgIFN0b3JlLnNldEFwcFN0YXRlKDEsIGNvdXJzZS5zbHVnKTtcbiAgICAgICAgcmV0dXJuIGNvdXJzZTtcbiAgICB9XG4gICAgc3RhdGljIHByZXBhcmVBcHBTdG9yYWdlKCkge1xuICAgICAgICBTdG9yZS5pbml0KCk7XG4gICAgICAgIFN0b3JlLmluaXRBcHAoJycpO1xuICAgIH1cbiAgICBzdGF0aWMgaW5pdEFwcChjb3Vyc2VTbHVnKSB7XG4gICAgICAgIGNvbnN0IGRiID0gU3RvcmUuZGIoKTtcbiAgICAgICAgY29uc3QgdmVyc2lvbiA9ICcxLjAnO1xuICAgICAgICBjb25zdCBhcHBzID0gZGIucXVlcnlBbGwoJ2FwcCcsIHsgdmVyc2lvbiB9KTtcbiAgICAgICAgbGV0IGFwcCA9IG51bGw7XG4gICAgICAgIGlmIChhcHBzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSAwO1xuICAgICAgICAgICAgY29uc3QgSUQgPSAwO1xuICAgICAgICAgICAgY29uc3QgbGFzdENvdXJzZVNsdWcgPSBjb3Vyc2VTbHVnO1xuICAgICAgICAgICAgYXBwID0geyBJRCwgc3RhdGUsIHZlcnNpb24sIGxhc3RDb3Vyc2VTbHVnIH07XG4gICAgICAgICAgICBhcHAuSUQgPSBkYi5pbnNlcnQoJ2FwcCcsIGFwcCk7XG4gICAgICAgICAgICBkYi5jb21taXQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGFwcCA9IGFwcHNbMF07XG4gICAgICAgICAgICBpZiAoYXBwLmxhc3RDb3Vyc2VTbHVnICE9PSBjb3Vyc2VTbHVnICYmIGNvdXJzZVNsdWcgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgYXBwLmxhc3RDb3Vyc2VTbHVnID0gY291cnNlU2x1ZztcbiAgICAgICAgICAgICAgICBkYi51cGRhdGUoJ2FwcCcsIHsgdmVyc2lvbiB9LCAocm93KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJvdy5sYXN0Q291cnNlU2x1ZyA9IGNvdXJzZVNsdWc7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByb3c7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZGIuY29tbWl0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFwcDtcbiAgICB9XG4gICAgc3RhdGljIGdldEFwcFN0YXRlKCkge1xuICAgICAgICBjb25zdCBkYiA9IFN0b3JlLmRiKCk7XG4gICAgICAgIGNvbnN0IHZlcnNpb24gPSAnMS4wJztcbiAgICAgICAgY29uc3QgYXBwcyA9IGRiLnF1ZXJ5QWxsKCdhcHAnLCB7IHZlcnNpb24gfSk7XG4gICAgICAgIGxldCBhcHAgPSBudWxsO1xuICAgICAgICBpZiAoYXBwcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBhcHAgPSBhcHBzWzBdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcHA7XG4gICAgfVxuICAgIHN0YXRpYyBzZXRBcHBTdGF0ZShzdGF0ZSwgY291cnNlU2x1Zykge1xuICAgICAgICBjb25zdCBkYiA9IFN0b3JlLmRiKCk7XG4gICAgICAgIGNvbnN0IHZlcnNpb24gPSAnMS4wJztcbiAgICAgICAgY29uc3QgYXBwcyA9IGRiLnF1ZXJ5QWxsKCdhcHAnLCB7IHZlcnNpb24gfSk7XG4gICAgICAgIGlmIChhcHBzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGRiLnVwZGF0ZSgnYXBwJywgeyB2ZXJzaW9uIH0sIChyb3cpID0+IHtcbiAgICAgICAgICAgICAgICByb3cuc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvdXJzZVNsdWcgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdy5sYXN0Q291cnNlU2x1ZyA9IGNvdXJzZVNsdWc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByb3c7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRiLmNvbW1pdCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBnZXRBcHBJbmZvKCkge1xuICAgICAgICBjb25zdCBkYiA9IFN0b3JlLmRiKCk7XG4gICAgICAgIGNvbnN0IHZlcnNpb24gPSAnMS4wJztcbiAgICAgICAgY29uc3QgYXBwcyA9IGRiLnF1ZXJ5QWxsKCdhcHAnLCB7IHZlcnNpb24gfSk7XG4gICAgICAgIGlmIChhcHBzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBhcHBzWzBdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cblN0b3JlLnByZXBhcmVBcHBTdG9yYWdlKCk7XG5leHBvcnQgZGVmYXVsdCBTdG9yZTtcbiIsImltcG9ydCB7IGNyZWF0ZUFwcCB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgUG9wdXAgZnJvbSAnLi9Qb3B1cC52dWUnO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9qcy9ib290c3RyYXAnO1xuaW1wb3J0ICdmb250YXdlc29tZS00LjcvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL3BvcHVwLmNzcyc7XG5pbXBvcnQgJ2hpZ2hsaWdodC5qcy9zdHlsZXMvZGVmYXVsdC5jc3MnO1xuaW1wb3J0ICdoaWdobGlnaHQuanMvc3R5bGVzL2FuZHJvaWRzdHVkaW8uY3NzJztcbmltcG9ydCBobGpzIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvY29yZSc7XG5pbXBvcnQgamF2YXNjcmlwdCBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9qYXZhc2NyaXB0JztcbmltcG9ydCBobGpzVnVlUGx1Z2luIGZyb20gXCJAaGlnaGxpZ2h0anMvdnVlLXBsdWdpblwiO1xuaGxqcy5yZWdpc3Rlckxhbmd1YWdlKCdqYXZhc2NyaXB0JywgamF2YXNjcmlwdCk7XG5jb25zdCBhcHAgPSBjcmVhdGVBcHAoUG9wdXApO1xuYXBwLnVzZShobGpzVnVlUGx1Z2luKTtcbmFwcC5tb3VudCgnI3BvcHVwJyk7XG4iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9Qb3B1cC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWY0YmJjYzAmdHM9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1BvcHVwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiXG5leHBvcnQgKiBmcm9tIFwiLi9Qb3B1cC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIvVXNlcnMvZGFtYXIvRGVza3RvcC9MTEZldGNoZXIvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcInNyYy9wb3B1cC9Qb3B1cC52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiNWY0YmJjYzBcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCc1ZjRiYmNjMCcsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJzVmNGJiY2MwJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Qb3B1cC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWY0YmJjYzAmdHM9dHJ1ZVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCc1ZjRiYmNjMCcsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vRmV0Y2hCdXR0b24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWJjMmI5ZGUyJnRzPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9GZXRjaEJ1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIlxuZXhwb3J0ICogZnJvbSBcIi4vRmV0Y2hCdXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiL1VzZXJzL2RhbWFyL0Rlc2t0b3AvTExGZXRjaGVyL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJzcmMvcG9wdXAvY29tcG9uZW50cy9GZXRjaEJ1dHRvbi52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiYmMyYjlkZTJcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCdiYzJiOWRlMicsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJ2JjMmI5ZGUyJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9GZXRjaEJ1dHRvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YmMyYjlkZTImdHM9dHJ1ZVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCdiYzJiOWRlMicsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vRmV0Y2hRdWV1ZUJhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTA1YWVjNDImc2NvcGVkPXRydWUmdHM9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0ZldGNoUXVldWVCYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0ZldGNoUXVldWVCYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCJcblxuaW1wb3J0IFwiLi9GZXRjaFF1ZXVlQmFyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTkwNWFlYzQyJnNjb3BlZD10cnVlJmxhbmc9Y3NzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiL1VzZXJzL2RhbWFyL0Rlc2t0b3AvTExGZXRjaGVyL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fc2NvcGVJZCcsXCJkYXRhLXYtOTA1YWVjNDJcIl0sWydfX2ZpbGUnLFwic3JjL3BvcHVwL2NvbXBvbmVudHMvRmV0Y2hRdWV1ZUJhci52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiOTA1YWVjNDJcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCc5MDVhZWM0MicsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJzkwNWFlYzQyJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9GZXRjaFF1ZXVlQmFyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05MDVhZWM0MiZzY29wZWQ9dHJ1ZSZ0cz10cnVlXCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzkwNWFlYzQyJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9GZXRjaFNlY3Rpb25RdWV1ZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmFmZGE2NDkmc2NvcGVkPXRydWUmdHM9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0ZldGNoU2VjdGlvblF1ZXVlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiXG5leHBvcnQgKiBmcm9tIFwiLi9GZXRjaFNlY3Rpb25RdWV1ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIlxuXG5pbXBvcnQgXCIuL0ZldGNoU2VjdGlvblF1ZXVlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTZhZmRhNjQ5JnNjb3BlZD10cnVlJmxhbmc9Y3NzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiL1VzZXJzL2RhbWFyL0Rlc2t0b3AvTExGZXRjaGVyL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fc2NvcGVJZCcsXCJkYXRhLXYtNmFmZGE2NDlcIl0sWydfX2ZpbGUnLFwic3JjL3BvcHVwL2NvbXBvbmVudHMvRmV0Y2hTZWN0aW9uUXVldWUudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjZhZmRhNjQ5XCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnNmFmZGE2NDknLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCc2YWZkYTY0OScsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRmV0Y2hTZWN0aW9uUXVldWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZhZmRhNjQ5JnNjb3BlZD10cnVlJnRzPXRydWVcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignNmFmZGE2NDknLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0xvZ0Jhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWM4YTI4N2Mmc2NvcGVkPXRydWUmdHM9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0xvZ0Jhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIlxuZXhwb3J0ICogZnJvbSBcIi4vTG9nQmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiXG5cbmltcG9ydCBcIi4vTG9nQmFyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVjOGEyODdjJnNjb3BlZD10cnVlJmxhbmc9Y3NzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiL1VzZXJzL2RhbWFyL0Rlc2t0b3AvTExGZXRjaGVyL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fc2NvcGVJZCcsXCJkYXRhLXYtNWM4YTI4N2NcIl0sWydfX2ZpbGUnLFwic3JjL3BvcHVwL2NvbXBvbmVudHMvTG9nQmFyLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCI1YzhhMjg3Y1wiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzVjOGEyODdjJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnNWM4YTI4N2MnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0xvZ0Jhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWM4YTI4N2Mmc2NvcGVkPXRydWUmdHM9dHJ1ZVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCc1YzhhMjg3YycsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vUGFnZU5hdmlnYXRpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWZiYjc1ZDYwJnRzPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9QYWdlTmF2aWdhdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIlxuZXhwb3J0ICogZnJvbSBcIi4vUGFnZU5hdmlnYXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiL1VzZXJzL2RhbWFyL0Rlc2t0b3AvTExGZXRjaGVyL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJzcmMvcG9wdXAvY29tcG9uZW50cy9QYWdlTmF2aWdhdGlvbi52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiZmJiNzVkNjBcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCdmYmI3NWQ2MCcsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJ2ZiYjc1ZDYwJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9QYWdlTmF2aWdhdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZmJiNzVkNjAmdHM9dHJ1ZVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCdmYmI3NWQ2MCcsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vVG9jSXRlbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2MzNTc0ZmUmc2NvcGVkPXRydWUmdHM9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1RvY0l0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCJcbmV4cG9ydCAqIGZyb20gXCIuL1RvY0l0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCJcblxuaW1wb3J0IFwiLi9Ub2NJdGVtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNjMzU3NGZlJnNjb3BlZD10cnVlJmxhbmc9Y3NzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiL1VzZXJzL2RhbWFyL0Rlc2t0b3AvTExGZXRjaGVyL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fc2NvcGVJZCcsXCJkYXRhLXYtM2MzNTc0ZmVcIl0sWydfX2ZpbGUnLFwic3JjL3BvcHVwL2NvbXBvbmVudHMvVG9jSXRlbS52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiM2MzNTc0ZmVcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCczYzM1NzRmZScsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJzNjMzU3NGZlJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Ub2NJdGVtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zYzM1NzRmZSZzY29wZWQ9dHJ1ZSZ0cz10cnVlXCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzNjMzU3NGZlJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9BYm91dFBhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQyMzBmZmNmJnRzPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BYm91dFBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0Fib3V0UGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIvVXNlcnMvZGFtYXIvRGVza3RvcC9MTEZldGNoZXIvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcInNyYy9wb3B1cC92aWV3cy9BYm91dFBhZ2UudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjQyMzBmZmNmXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnNDIzMGZmY2YnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCc0MjMwZmZjZicsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQWJvdXRQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MjMwZmZjZiZ0cz10cnVlXCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzQyMzBmZmNmJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9Db3Vyc2VQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02YzE3ZmVjNyZ0cz10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQ291cnNlUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIlxuZXhwb3J0ICogZnJvbSBcIi4vQ291cnNlUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIvVXNlcnMvZGFtYXIvRGVza3RvcC9MTEZldGNoZXIvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcInNyYy9wb3B1cC92aWV3cy9Db3Vyc2VQYWdlLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCI2YzE3ZmVjN1wiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzZjMTdmZWM3JywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnNmMxN2ZlYzcnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0NvdXJzZVBhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZjMTdmZWM3JnRzPXRydWVcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignNmMxN2ZlYzcnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0Rvd25sb2FkUGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Nzk3NmM0ZjQmc2NvcGVkPXRydWUmdHM9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0Rvd25sb2FkUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIlxuZXhwb3J0ICogZnJvbSBcIi4vRG93bmxvYWRQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiXG5cbmltcG9ydCBcIi4vRG93bmxvYWRQYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc5NzZjNGY0JnNjb3BlZD10cnVlJmxhbmc9Y3NzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiL1VzZXJzL2RhbWFyL0Rlc2t0b3AvTExGZXRjaGVyL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fc2NvcGVJZCcsXCJkYXRhLXYtNzk3NmM0ZjRcIl0sWydfX2ZpbGUnLFwic3JjL3BvcHVwL3ZpZXdzL0Rvd25sb2FkUGFnZS52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiNzk3NmM0ZjRcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCc3OTc2YzRmNCcsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJzc5NzZjNGY0JywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Eb3dubG9hZFBhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc5NzZjNGY0JnNjb3BlZD10cnVlJnRzPXRydWVcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignNzk3NmM0ZjQnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0hlbHBQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZDVjMWQyZCZ0cz10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSGVscFBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0hlbHBQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi9Vc2Vycy9kYW1hci9EZXNrdG9wL0xMRmV0Y2hlci9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwic3JjL3BvcHVwL3ZpZXdzL0hlbHBQYWdlLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCIwZDVjMWQyZFwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzBkNWMxZDJkJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnMGQ1YzFkMmQnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0hlbHBQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZDVjMWQyZCZ0cz10cnVlXCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzBkNWMxZDJkJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9XZWxjb21lUGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjJhYTQwMzgmdHM9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1dlbGNvbWVQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiXG5leHBvcnQgKiBmcm9tIFwiLi9XZWxjb21lUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIvVXNlcnMvZGFtYXIvRGVza3RvcC9MTEZldGNoZXIvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcInNyYy9wb3B1cC92aWV3cy9XZWxjb21lUGFnZS52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiNjJhYTQwMzhcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCc2MmFhNDAzOCcsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJzYyYWE0MDM4JywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9XZWxjb21lUGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjJhYTQwMzgmdHM9dHJ1ZVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCc2MmFhNDAzOCcsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzhdLnVzZVswXSEuL1BvcHVwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s4XS51c2VbMF0hLi9Qb3B1cC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s4XS51c2VbMF0hLi9GZXRjaEJ1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0udXNlWzBdIS4vRmV0Y2hCdXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0udXNlWzBdIS4vRmV0Y2hRdWV1ZUJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0udXNlWzBdIS4vRmV0Y2hRdWV1ZUJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s4XS51c2VbMF0hLi9GZXRjaFNlY3Rpb25RdWV1ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0udXNlWzBdIS4vRmV0Y2hTZWN0aW9uUXVldWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0udXNlWzBdIS4vTG9nQmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s4XS51c2VbMF0hLi9Mb2dCYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0udXNlWzBdIS4vUGFnZU5hdmlnYXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzhdLnVzZVswXSEuL1BhZ2VOYXZpZ2F0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzhdLnVzZVswXSEuL1RvY0l0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzhdLnVzZVswXSEuL1RvY0l0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0udXNlWzBdIS4vQWJvdXRQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s4XS51c2VbMF0hLi9BYm91dFBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0udXNlWzBdIS4vQ291cnNlUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0udXNlWzBdIS4vQ291cnNlUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s4XS51c2VbMF0hLi9Eb3dubG9hZFBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzhdLnVzZVswXSEuL0Rvd25sb2FkUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s4XS51c2VbMF0hLi9IZWxwUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0udXNlWzBdIS4vSGVscFBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0udXNlWzBdIS4vV2VsY29tZVBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzhdLnVzZVswXSEuL1dlbGNvbWVQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdGlmIChjYWNoZWRNb2R1bGUuZXJyb3IgIT09IHVuZGVmaW5lZCkgdGhyb3cgY2FjaGVkTW9kdWxlLmVycm9yO1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHR0cnkge1xuXHRcdHZhciBleGVjT3B0aW9ucyA9IHsgaWQ6IG1vZHVsZUlkLCBtb2R1bGU6IG1vZHVsZSwgZmFjdG9yeTogX193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0sIHJlcXVpcmU6IF9fd2VicGFja19yZXF1aXJlX18gfTtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkuZm9yRWFjaChmdW5jdGlvbihoYW5kbGVyKSB7IGhhbmRsZXIoZXhlY09wdGlvbnMpOyB9KTtcblx0XHRtb2R1bGUgPSBleGVjT3B0aW9ucy5tb2R1bGU7XG5cdFx0ZXhlY09wdGlvbnMuZmFjdG9yeS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBleGVjT3B0aW9ucy5yZXF1aXJlKTtcblx0fSBjYXRjaChlKSB7XG5cdFx0bW9kdWxlLmVycm9yID0gZTtcblx0XHR0aHJvdyBlO1xuXHR9XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuLy8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbl9fd2VicGFja19yZXF1aXJlX18uYyA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfXztcblxuLy8gZXhwb3NlIHRoZSBtb2R1bGUgZXhlY3V0aW9uIGludGVyY2VwdG9yXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBbXTtcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhbGwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmh1ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsgX193ZWJwYWNrX3JlcXVpcmVfXy5oKCkgKyBcIi5ob3QtdXBkYXRlLmpzXCI7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uaG1yRiA9ICgpID0+IChcInBvcHVwLlwiICsgX193ZWJwYWNrX3JlcXVpcmVfXy5oKCkgKyBcIi5ob3QtdXBkYXRlLmpzb25cIik7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNTJhMTlhNjM0YmFhZjQyZGNhOWZcIikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJ2YXIgaW5Qcm9ncmVzcyA9IHt9O1xudmFyIGRhdGFXZWJwYWNrUHJlZml4ID0gXCJsbGZldGNoZXItdHM6XCI7XG4vLyBsb2FkU2NyaXB0IGZ1bmN0aW9uIHRvIGxvYWQgYSBzY3JpcHQgdmlhIHNjcmlwdCB0YWdcbl9fd2VicGFja19yZXF1aXJlX18ubCA9ICh1cmwsIGRvbmUsIGtleSwgY2h1bmtJZCkgPT4ge1xuXHRpZihpblByb2dyZXNzW3VybF0pIHsgaW5Qcm9ncmVzc1t1cmxdLnB1c2goZG9uZSk7IHJldHVybjsgfVxuXHR2YXIgc2NyaXB0LCBuZWVkQXR0YWNoO1xuXHRpZihrZXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBzID0gc2NyaXB0c1tpXTtcblx0XHRcdGlmKHMuZ2V0QXR0cmlidXRlKFwic3JjXCIpID09IHVybCB8fCBzLmdldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiKSA9PSBkYXRhV2VicGFja1ByZWZpeCArIGtleSkgeyBzY3JpcHQgPSBzOyBicmVhazsgfVxuXHRcdH1cblx0fVxuXHRpZighc2NyaXB0KSB7XG5cdFx0bmVlZEF0dGFjaCA9IHRydWU7XG5cdFx0c2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cblx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG5cdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcblx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcblx0XHR9XG5cdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiLCBkYXRhV2VicGFja1ByZWZpeCArIGtleSk7XG5cdFx0c2NyaXB0LnNyYyA9IHVybDtcblx0fVxuXHRpblByb2dyZXNzW3VybF0gPSBbZG9uZV07XG5cdHZhciBvblNjcmlwdENvbXBsZXRlID0gKHByZXYsIGV2ZW50KSA9PiB7XG5cdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuXHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdHZhciBkb25lRm5zID0gaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdGRlbGV0ZSBpblByb2dyZXNzW3VybF07XG5cdFx0c2NyaXB0LnBhcmVudE5vZGUgJiYgc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcblx0XHRkb25lRm5zICYmIGRvbmVGbnMuZm9yRWFjaCgoZm4pID0+IChmbihldmVudCkpKTtcblx0XHRpZihwcmV2KSByZXR1cm4gcHJldihldmVudCk7XG5cdH07XG5cdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgdW5kZWZpbmVkLCB7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSksIDEyMDAwMCk7XG5cdHNjcmlwdC5vbmVycm9yID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmVycm9yKTtcblx0c2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25sb2FkKTtcblx0bmVlZEF0dGFjaCAmJiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG59OyIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBjdXJyZW50TW9kdWxlRGF0YSA9IHt9O1xudmFyIGluc3RhbGxlZE1vZHVsZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmM7XG5cbi8vIG1vZHVsZSBhbmQgcmVxdWlyZSBjcmVhdGlvblxudmFyIGN1cnJlbnRDaGlsZE1vZHVsZTtcbnZhciBjdXJyZW50UGFyZW50cyA9IFtdO1xuXG4vLyBzdGF0dXNcbnZhciByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMgPSBbXTtcbnZhciBjdXJyZW50U3RhdHVzID0gXCJpZGxlXCI7XG5cbi8vIHdoaWxlIGRvd25sb2FkaW5nXG52YXIgYmxvY2tpbmdQcm9taXNlcyA9IDA7XG52YXIgYmxvY2tpbmdQcm9taXNlc1dhaXRpbmcgPSBbXTtcblxuLy8gVGhlIHVwZGF0ZSBpbmZvXG52YXIgY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnM7XG52YXIgcXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbl9fd2VicGFja19yZXF1aXJlX18uaG1yRCA9IGN1cnJlbnRNb2R1bGVEYXRhO1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmkucHVzaChmdW5jdGlvbiAob3B0aW9ucykge1xuXHR2YXIgbW9kdWxlID0gb3B0aW9ucy5tb2R1bGU7XG5cdHZhciByZXF1aXJlID0gY3JlYXRlUmVxdWlyZShvcHRpb25zLnJlcXVpcmUsIG9wdGlvbnMuaWQpO1xuXHRtb2R1bGUuaG90ID0gY3JlYXRlTW9kdWxlSG90T2JqZWN0KG9wdGlvbnMuaWQsIG1vZHVsZSk7XG5cdG1vZHVsZS5wYXJlbnRzID0gY3VycmVudFBhcmVudHM7XG5cdG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRjdXJyZW50UGFyZW50cyA9IFtdO1xuXHRvcHRpb25zLnJlcXVpcmUgPSByZXF1aXJlO1xufSk7XG5cbl9fd2VicGFja19yZXF1aXJlX18uaG1yQyA9IHt9O1xuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJID0ge307XG5cbmZ1bmN0aW9uIGNyZWF0ZVJlcXVpcmUocmVxdWlyZSwgbW9kdWxlSWQpIHtcblx0dmFyIG1lID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG5cdGlmICghbWUpIHJldHVybiByZXF1aXJlO1xuXHR2YXIgZm4gPSBmdW5jdGlvbiAocmVxdWVzdCkge1xuXHRcdGlmIChtZS5ob3QuYWN0aXZlKSB7XG5cdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XSkge1xuXHRcdFx0XHR2YXIgcGFyZW50cyA9IGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cztcblx0XHRcdFx0aWYgKHBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCkgPT09IC0xKSB7XG5cdFx0XHRcdFx0cGFyZW50cy5wdXNoKG1vZHVsZUlkKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xuXHRcdFx0XHRjdXJyZW50Q2hpbGRNb2R1bGUgPSByZXF1ZXN0O1xuXHRcdFx0fVxuXHRcdFx0aWYgKG1lLmNoaWxkcmVuLmluZGV4T2YocmVxdWVzdCkgPT09IC0xKSB7XG5cdFx0XHRcdG1lLmNoaWxkcmVuLnB1c2gocmVxdWVzdCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUud2Fybihcblx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgK1xuXHRcdFx0XHRcdHJlcXVlc3QgK1xuXHRcdFx0XHRcdFwiKSBmcm9tIGRpc3Bvc2VkIG1vZHVsZSBcIiArXG5cdFx0XHRcdFx0bW9kdWxlSWRcblx0XHRcdCk7XG5cdFx0XHRjdXJyZW50UGFyZW50cyA9IFtdO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVxdWlyZShyZXF1ZXN0KTtcblx0fTtcblx0dmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIChuYW1lKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0cmV0dXJuIHJlcXVpcmVbbmFtZV07XG5cdFx0XHR9LFxuXHRcdFx0c2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRcdFx0cmVxdWlyZVtuYW1lXSA9IHZhbHVlO1xuXHRcdFx0fVxuXHRcdH07XG5cdH07XG5cdGZvciAodmFyIG5hbWUgaW4gcmVxdWlyZSkge1xuXHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocmVxdWlyZSwgbmFtZSkgJiYgbmFtZSAhPT0gXCJlXCIpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgbmFtZSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKG5hbWUpKTtcblx0XHR9XG5cdH1cblx0Zm4uZSA9IGZ1bmN0aW9uIChjaHVua0lkKSB7XG5cdFx0cmV0dXJuIHRyYWNrQmxvY2tpbmdQcm9taXNlKHJlcXVpcmUuZShjaHVua0lkKSk7XG5cdH07XG5cdHJldHVybiBmbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTW9kdWxlSG90T2JqZWN0KG1vZHVsZUlkLCBtZSkge1xuXHR2YXIgX21haW4gPSBjdXJyZW50Q2hpbGRNb2R1bGUgIT09IG1vZHVsZUlkO1xuXHR2YXIgaG90ID0ge1xuXHRcdC8vIHByaXZhdGUgc3R1ZmZcblx0XHRfYWNjZXB0ZWREZXBlbmRlbmNpZXM6IHt9LFxuXHRcdF9hY2NlcHRlZEVycm9ySGFuZGxlcnM6IHt9LFxuXHRcdF9kZWNsaW5lZERlcGVuZGVuY2llczoge30sXG5cdFx0X3NlbGZBY2NlcHRlZDogZmFsc2UsXG5cdFx0X3NlbGZEZWNsaW5lZDogZmFsc2UsXG5cdFx0X3NlbGZJbnZhbGlkYXRlZDogZmFsc2UsXG5cdFx0X2Rpc3Bvc2VIYW5kbGVyczogW10sXG5cdFx0X21haW46IF9tYWluLFxuXHRcdF9yZXF1aXJlU2VsZjogZnVuY3Rpb24gKCkge1xuXHRcdFx0Y3VycmVudFBhcmVudHMgPSBtZS5wYXJlbnRzLnNsaWNlKCk7XG5cdFx0XHRjdXJyZW50Q2hpbGRNb2R1bGUgPSBfbWFpbiA/IHVuZGVmaW5lZCA6IG1vZHVsZUlkO1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCk7XG5cdFx0fSxcblxuXHRcdC8vIE1vZHVsZSBBUElcblx0XHRhY3RpdmU6IHRydWUsXG5cdFx0YWNjZXB0OiBmdW5jdGlvbiAoZGVwLCBjYWxsYmFjaywgZXJyb3JIYW5kbGVyKSB7XG5cdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkFjY2VwdGVkID0gdHJ1ZTtcblx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwiZnVuY3Rpb25cIikgaG90Ll9zZWxmQWNjZXB0ZWQgPSBkZXA7XG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiICYmIGRlcCAhPT0gbnVsbCkge1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHt9O1xuXHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWRFcnJvckhhbmRsZXJzW2RlcFtpXV0gPSBlcnJvckhhbmRsZXI7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHt9O1xuXHRcdFx0XHRob3QuX2FjY2VwdGVkRXJyb3JIYW5kbGVyc1tkZXBdID0gZXJyb3JIYW5kbGVyO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0ZGVjbGluZTogZnVuY3Rpb24gKGRlcCkge1xuXHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZEZWNsaW5lZCA9IHRydWU7XG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiICYmIGRlcCAhPT0gbnVsbClcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG5cdFx0XHRcdFx0aG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBbaV1dID0gdHJ1ZTtcblx0XHRcdGVsc2UgaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBdID0gdHJ1ZTtcblx0XHR9LFxuXHRcdGRpc3Bvc2U6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG5cdFx0fSxcblx0XHRhZGREaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcblx0XHR9LFxuXHRcdHJlbW92ZURpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0XHRcdHZhciBpZHggPSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5pbmRleE9mKGNhbGxiYWNrKTtcblx0XHRcdGlmIChpZHggPj0gMCkgaG90Ll9kaXNwb3NlSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG5cdFx0fSxcblx0XHRpbnZhbGlkYXRlOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aGlzLl9zZWxmSW52YWxpZGF0ZWQgPSB0cnVlO1xuXHRcdFx0c3dpdGNoIChjdXJyZW50U3RhdHVzKSB7XG5cdFx0XHRcdGNhc2UgXCJpZGxlXCI6XG5cdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSBbXTtcblx0XHRcdFx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJJW2tleV0oXG5cdFx0XHRcdFx0XHRcdG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVyc1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRzZXRTdGF0dXMoXCJyZWFkeVwiKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcInJlYWR5XCI6XG5cdFx0XHRcdFx0T2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1ySVtrZXldKFxuXHRcdFx0XHRcdFx0XHRtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnNcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJwcmVwYXJlXCI6XG5cdFx0XHRcdGNhc2UgXCJjaGVja1wiOlxuXHRcdFx0XHRjYXNlIFwiZGlzcG9zZVwiOlxuXHRcdFx0XHRjYXNlIFwiYXBwbHlcIjpcblx0XHRcdFx0XHQocXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzID0gcXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzIHx8IFtdKS5wdXNoKFxuXHRcdFx0XHRcdFx0bW9kdWxlSWRcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdC8vIGlnbm9yZSByZXF1ZXN0cyBpbiBlcnJvciBzdGF0ZXNcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0Ly8gTWFuYWdlbWVudCBBUElcblx0XHRjaGVjazogaG90Q2hlY2ssXG5cdFx0YXBwbHk6IGhvdEFwcGx5LFxuXHRcdHN0YXR1czogZnVuY3Rpb24gKGwpIHtcblx0XHRcdGlmICghbCkgcmV0dXJuIGN1cnJlbnRTdGF0dXM7XG5cdFx0XHRyZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMucHVzaChsKTtcblx0XHR9LFxuXHRcdGFkZFN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uIChsKSB7XG5cdFx0XHRyZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMucHVzaChsKTtcblx0XHR9LFxuXHRcdHJlbW92ZVN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uIChsKSB7XG5cdFx0XHR2YXIgaWR4ID0gcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLmluZGV4T2YobCk7XG5cdFx0XHRpZiAoaWR4ID49IDApIHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcblx0XHR9LFxuXG5cdFx0Ly9pbmhlcml0IGZyb20gcHJldmlvdXMgZGlzcG9zZSBjYWxsXG5cdFx0ZGF0YTogY3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdXG5cdH07XG5cdGN1cnJlbnRDaGlsZE1vZHVsZSA9IHVuZGVmaW5lZDtcblx0cmV0dXJuIGhvdDtcbn1cblxuZnVuY3Rpb24gc2V0U3RhdHVzKG5ld1N0YXR1cykge1xuXHRjdXJyZW50U3RhdHVzID0gbmV3U3RhdHVzO1xuXHR2YXIgcmVzdWx0cyA9IFtdO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLmxlbmd0aDsgaSsrKVxuXHRcdHJlc3VsdHNbaV0gPSByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnNbaV0uY2FsbChudWxsLCBuZXdTdGF0dXMpO1xuXG5cdHJldHVybiBQcm9taXNlLmFsbChyZXN1bHRzKTtcbn1cblxuZnVuY3Rpb24gdW5ibG9jaygpIHtcblx0aWYgKC0tYmxvY2tpbmdQcm9taXNlcyA9PT0gMCkge1xuXHRcdHNldFN0YXR1cyhcInJlYWR5XCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKGJsb2NraW5nUHJvbWlzZXMgPT09IDApIHtcblx0XHRcdFx0dmFyIGxpc3QgPSBibG9ja2luZ1Byb21pc2VzV2FpdGluZztcblx0XHRcdFx0YmxvY2tpbmdQcm9taXNlc1dhaXRpbmcgPSBbXTtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0bGlzdFtpXSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdHJhY2tCbG9ja2luZ1Byb21pc2UocHJvbWlzZSkge1xuXHRzd2l0Y2ggKGN1cnJlbnRTdGF0dXMpIHtcblx0XHRjYXNlIFwicmVhZHlcIjpcblx0XHRcdHNldFN0YXR1cyhcInByZXBhcmVcIik7XG5cdFx0LyogZmFsbHRocm91Z2ggKi9cblx0XHRjYXNlIFwicHJlcGFyZVwiOlxuXHRcdFx0YmxvY2tpbmdQcm9taXNlcysrO1xuXHRcdFx0cHJvbWlzZS50aGVuKHVuYmxvY2ssIHVuYmxvY2spO1xuXHRcdFx0cmV0dXJuIHByb21pc2U7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBwcm9taXNlO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHdhaXRGb3JCbG9ja2luZ1Byb21pc2VzKGZuKSB7XG5cdGlmIChibG9ja2luZ1Byb21pc2VzID09PSAwKSByZXR1cm4gZm4oKTtcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG5cdFx0YmxvY2tpbmdQcm9taXNlc1dhaXRpbmcucHVzaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXNvbHZlKGZuKCkpO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gaG90Q2hlY2soYXBwbHlPblVwZGF0ZSkge1xuXHRpZiAoY3VycmVudFN0YXR1cyAhPT0gXCJpZGxlXCIpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJjaGVjaygpIGlzIG9ubHkgYWxsb3dlZCBpbiBpZGxlIHN0YXR1c1wiKTtcblx0fVxuXHRyZXR1cm4gc2V0U3RhdHVzKFwiY2hlY2tcIilcblx0XHQudGhlbihfX3dlYnBhY2tfcmVxdWlyZV9fLmhtck0pXG5cdFx0LnRoZW4oZnVuY3Rpb24gKHVwZGF0ZSkge1xuXHRcdFx0aWYgKCF1cGRhdGUpIHtcblx0XHRcdFx0cmV0dXJuIHNldFN0YXR1cyhhcHBseUludmFsaWRhdGVkTW9kdWxlcygpID8gXCJyZWFkeVwiIDogXCJpZGxlXCIpLnRoZW4oXG5cdFx0XHRcdFx0ZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gc2V0U3RhdHVzKFwicHJlcGFyZVwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dmFyIHVwZGF0ZWRNb2R1bGVzID0gW107XG5cdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzID0gW107XG5cblx0XHRcdFx0cmV0dXJuIFByb21pc2UuYWxsKFxuXHRcdFx0XHRcdE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uaG1yQykucmVkdWNlKGZ1bmN0aW9uIChcblx0XHRcdFx0XHRcdHByb21pc2VzLFxuXHRcdFx0XHRcdFx0a2V5XG5cdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckNba2V5XShcblx0XHRcdFx0XHRcdFx0dXBkYXRlLmMsXG5cdFx0XHRcdFx0XHRcdHVwZGF0ZS5yLFxuXHRcdFx0XHRcdFx0XHR1cGRhdGUubSxcblx0XHRcdFx0XHRcdFx0cHJvbWlzZXMsXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzLFxuXHRcdFx0XHRcdFx0XHR1cGRhdGVkTW9kdWxlc1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHJldHVybiBwcm9taXNlcztcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFtdKVxuXHRcdFx0XHQpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHJldHVybiB3YWl0Rm9yQmxvY2tpbmdQcm9taXNlcyhmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRpZiAoYXBwbHlPblVwZGF0ZSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gaW50ZXJuYWxBcHBseShhcHBseU9uVXBkYXRlKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBzZXRTdGF0dXMoXCJyZWFkeVwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdXBkYXRlZE1vZHVsZXM7XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0pO1xufVxuXG5mdW5jdGlvbiBob3RBcHBseShvcHRpb25zKSB7XG5cdGlmIChjdXJyZW50U3RhdHVzICE9PSBcInJlYWR5XCIpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXG5cdFx0XHRcdFwiYXBwbHkoKSBpcyBvbmx5IGFsbG93ZWQgaW4gcmVhZHkgc3RhdHVzIChzdGF0ZTogXCIgK1xuXHRcdFx0XHRcdGN1cnJlbnRTdGF0dXMgK1xuXHRcdFx0XHRcdFwiKVwiXG5cdFx0XHQpO1xuXHRcdH0pO1xuXHR9XG5cdHJldHVybiBpbnRlcm5hbEFwcGx5KG9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBpbnRlcm5hbEFwcGx5KG9wdGlvbnMpIHtcblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0YXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKTtcblxuXHR2YXIgcmVzdWx0cyA9IGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzLm1hcChmdW5jdGlvbiAoaGFuZGxlcikge1xuXHRcdHJldHVybiBoYW5kbGVyKG9wdGlvbnMpO1xuXHR9KTtcblx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSB1bmRlZmluZWQ7XG5cblx0dmFyIGVycm9ycyA9IHJlc3VsdHNcblx0XHQubWFwKGZ1bmN0aW9uIChyKSB7XG5cdFx0XHRyZXR1cm4gci5lcnJvcjtcblx0XHR9KVxuXHRcdC5maWx0ZXIoQm9vbGVhbik7XG5cblx0aWYgKGVycm9ycy5sZW5ndGggPiAwKSB7XG5cdFx0cmV0dXJuIHNldFN0YXR1cyhcImFib3J0XCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0dGhyb3cgZXJyb3JzWzBdO1xuXHRcdH0pO1xuXHR9XG5cblx0Ly8gTm93IGluIFwiZGlzcG9zZVwiIHBoYXNlXG5cdHZhciBkaXNwb3NlUHJvbWlzZSA9IHNldFN0YXR1cyhcImRpc3Bvc2VcIik7XG5cblx0cmVzdWx0cy5mb3JFYWNoKGZ1bmN0aW9uIChyZXN1bHQpIHtcblx0XHRpZiAocmVzdWx0LmRpc3Bvc2UpIHJlc3VsdC5kaXNwb3NlKCk7XG5cdH0pO1xuXG5cdC8vIE5vdyBpbiBcImFwcGx5XCIgcGhhc2Vcblx0dmFyIGFwcGx5UHJvbWlzZSA9IHNldFN0YXR1cyhcImFwcGx5XCIpO1xuXG5cdHZhciBlcnJvcjtcblx0dmFyIHJlcG9ydEVycm9yID0gZnVuY3Rpb24gKGVycikge1xuXHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuXHR9O1xuXG5cdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcblx0cmVzdWx0cy5mb3JFYWNoKGZ1bmN0aW9uIChyZXN1bHQpIHtcblx0XHRpZiAocmVzdWx0LmFwcGx5KSB7XG5cdFx0XHR2YXIgbW9kdWxlcyA9IHJlc3VsdC5hcHBseShyZXBvcnRFcnJvcik7XG5cdFx0XHRpZiAobW9kdWxlcykge1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaChtb2R1bGVzW2ldKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG5cblx0cmV0dXJuIFByb21pc2UuYWxsKFtkaXNwb3NlUHJvbWlzZSwgYXBwbHlQcm9taXNlXSkudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gaGFuZGxlIGVycm9ycyBpbiBhY2NlcHQgaGFuZGxlcnMgYW5kIHNlbGYgYWNjZXB0ZWQgbW9kdWxlIGxvYWRcblx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdHJldHVybiBzZXRTdGF0dXMoXCJmYWlsXCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR0aHJvdyBlcnJvcjtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGlmIChxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMpIHtcblx0XHRcdHJldHVybiBpbnRlcm5hbEFwcGx5KG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKGxpc3QpIHtcblx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZUlkKSB7XG5cdFx0XHRcdFx0aWYgKGxpc3QuaW5kZXhPZihtb2R1bGVJZCkgPCAwKSBsaXN0LnB1c2gobW9kdWxlSWQpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuIGxpc3Q7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc2V0U3RhdHVzKFwiaWRsZVwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBvdXRkYXRlZE1vZHVsZXM7XG5cdFx0fSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhcHBseUludmFsaWRhdGVkTW9kdWxlcygpIHtcblx0aWYgKHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcykge1xuXHRcdGlmICghY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMpIGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzID0gW107XG5cdFx0T2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChtb2R1bGVJZCkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtcklba2V5XShcblx0XHRcdFx0XHRtb2R1bGVJZCxcblx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVyc1xuXHRcdFx0XHQpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdFx0cXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzID0gdW5kZWZpbmVkO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0gX193ZWJwYWNrX3JlcXVpcmVfXy5obXJTX2pzb25wID0gX193ZWJwYWNrX3JlcXVpcmVfXy5obXJTX2pzb25wIHx8IHtcblx0XCJwb3B1cFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxudmFyIGN1cnJlbnRVcGRhdGVkTW9kdWxlc0xpc3Q7XG52YXIgd2FpdGluZ1VwZGF0ZVJlc29sdmVzID0ge307XG5mdW5jdGlvbiBsb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgdXBkYXRlZE1vZHVsZXNMaXN0KSB7XG5cdGN1cnJlbnRVcGRhdGVkTW9kdWxlc0xpc3QgPSB1cGRhdGVkTW9kdWxlc0xpc3Q7XG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0d2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdID0gcmVzb2x2ZTtcblx0XHQvLyBzdGFydCB1cGRhdGUgY2h1bmsgbG9hZGluZ1xuXHRcdHZhciB1cmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmh1KGNodW5rSWQpO1xuXHRcdC8vIGNyZWF0ZSBlcnJvciBiZWZvcmUgc3RhY2sgdW53b3VuZCB0byBnZXQgdXNlZnVsIHN0YWNrdHJhY2UgbGF0ZXJcblx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcblx0XHR2YXIgbG9hZGluZ0VuZGVkID0gKGV2ZW50KSA9PiB7XG5cdFx0XHRpZih3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0pIHtcblx0XHRcdFx0d2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdID0gdW5kZWZpbmVkXG5cdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG5cdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG5cdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBob3QgdXBkYXRlIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcblx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG5cdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG5cdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuXHRcdFx0XHRyZWplY3QoZXJyb3IpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5sKHVybCwgbG9hZGluZ0VuZGVkKTtcblx0fSk7XG59XG5cbnNlbGZbXCJ3ZWJwYWNrSG90VXBkYXRlbGxmZXRjaGVyX3RzXCJdID0gKGNodW5rSWQsIG1vcmVNb2R1bGVzLCBydW50aW1lKSA9PiB7XG5cdGZvcih2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0Y3VycmVudFVwZGF0ZVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHRpZihjdXJyZW50VXBkYXRlZE1vZHVsZXNMaXN0KSBjdXJyZW50VXBkYXRlZE1vZHVsZXNMaXN0LnB1c2gobW9kdWxlSWQpO1xuXHRcdH1cblx0fVxuXHRpZihydW50aW1lKSBjdXJyZW50VXBkYXRlUnVudGltZS5wdXNoKHJ1bnRpbWUpO1xuXHRpZih3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0pIHtcblx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0oKTtcblx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG5cdH1cbn07XG5cbnZhciBjdXJyZW50VXBkYXRlQ2h1bmtzO1xudmFyIGN1cnJlbnRVcGRhdGU7XG52YXIgY3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3M7XG52YXIgY3VycmVudFVwZGF0ZVJ1bnRpbWU7XG5mdW5jdGlvbiBhcHBseUhhbmRsZXIob3B0aW9ucykge1xuXHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5mKSBkZWxldGUgX193ZWJwYWNrX3JlcXVpcmVfXy5mLmpzb25wSG1yO1xuXHRjdXJyZW50VXBkYXRlQ2h1bmtzID0gdW5kZWZpbmVkO1xuXHRmdW5jdGlvbiBnZXRBZmZlY3RlZE1vZHVsZUVmZmVjdHModXBkYXRlTW9kdWxlSWQpIHtcblx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW3VwZGF0ZU1vZHVsZUlkXTtcblx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcblxuXHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5tYXAoZnVuY3Rpb24gKGlkKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRjaGFpbjogW2lkXSxcblx0XHRcdFx0aWQ6IGlkXG5cdFx0XHR9O1xuXHRcdH0pO1xuXHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG5cdFx0XHR2YXIgcXVldWVJdGVtID0gcXVldWUucG9wKCk7XG5cdFx0XHR2YXIgbW9kdWxlSWQgPSBxdWV1ZUl0ZW0uaWQ7XG5cdFx0XHR2YXIgY2hhaW4gPSBxdWV1ZUl0ZW0uY2hhaW47XG5cdFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXTtcblx0XHRcdGlmIChcblx0XHRcdFx0IW1vZHVsZSB8fFxuXHRcdFx0XHQobW9kdWxlLmhvdC5fc2VsZkFjY2VwdGVkICYmICFtb2R1bGUuaG90Ll9zZWxmSW52YWxpZGF0ZWQpXG5cdFx0XHQpXG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0aWYgKG1vZHVsZS5ob3QuX3NlbGZEZWNsaW5lZCkge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHR5cGU6IFwic2VsZi1kZWNsaW5lZFwiLFxuXHRcdFx0XHRcdGNoYWluOiBjaGFpbixcblx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGlmIChtb2R1bGUuaG90Ll9tYWluKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0dHlwZTogXCJ1bmFjY2VwdGVkXCIsXG5cdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuXHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGUucGFyZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YXIgcGFyZW50SWQgPSBtb2R1bGUucGFyZW50c1tpXTtcblx0XHRcdFx0dmFyIHBhcmVudCA9IF9fd2VicGFja19yZXF1aXJlX18uY1twYXJlbnRJZF07XG5cdFx0XHRcdGlmICghcGFyZW50KSBjb250aW51ZTtcblx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHR0eXBlOiBcImRlY2xpbmVkXCIsXG5cdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0cGFyZW50SWQ6IHBhcmVudElkXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAob3V0ZGF0ZWRNb2R1bGVzLmluZGV4T2YocGFyZW50SWQpICE9PSAtMSkgY29udGludWU7XG5cdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcblx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSlcblx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSA9IFtdO1xuXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSwgW21vZHVsZUlkXSk7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXTtcblx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2gocGFyZW50SWQpO1xuXHRcdFx0XHRxdWV1ZS5wdXNoKHtcblx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuXHRcdFx0XHRcdGlkOiBwYXJlbnRJZFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogXCJhY2NlcHRlZFwiLFxuXHRcdFx0bW9kdWxlSWQ6IHVwZGF0ZU1vZHVsZUlkLFxuXHRcdFx0b3V0ZGF0ZWRNb2R1bGVzOiBvdXRkYXRlZE1vZHVsZXMsXG5cdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llczogb3V0ZGF0ZWREZXBlbmRlbmNpZXNcblx0XHR9O1xuXHR9XG5cblx0ZnVuY3Rpb24gYWRkQWxsVG9TZXQoYSwgYikge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBiW2ldO1xuXHRcdFx0aWYgKGEuaW5kZXhPZihpdGVtKSA9PT0gLTEpIGEucHVzaChpdGVtKTtcblx0XHR9XG5cdH1cblxuXHQvLyBhdCBiZWdpbiBhbGwgdXBkYXRlcyBtb2R1bGVzIGFyZSBvdXRkYXRlZFxuXHQvLyB0aGUgXCJvdXRkYXRlZFwiIHN0YXR1cyBjYW4gcHJvcGFnYXRlIHRvIHBhcmVudHMgaWYgdGhleSBkb24ndCBhY2NlcHQgdGhlIGNoaWxkcmVuXG5cdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuXHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG5cdHZhciBhcHBsaWVkVXBkYXRlID0ge307XG5cblx0dmFyIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSA9IGZ1bmN0aW9uIHdhcm5VbmV4cGVjdGVkUmVxdWlyZShtb2R1bGUpIHtcblx0XHRjb25zb2xlLndhcm4oXG5cdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArIG1vZHVsZS5pZCArIFwiKSB0byBkaXNwb3NlZCBtb2R1bGVcIlxuXHRcdCk7XG5cdH07XG5cblx0Zm9yICh2YXIgbW9kdWxlSWQgaW4gY3VycmVudFVwZGF0ZSkge1xuXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8oY3VycmVudFVwZGF0ZSwgbW9kdWxlSWQpKSB7XG5cdFx0XHR2YXIgbmV3TW9kdWxlRmFjdG9yeSA9IGN1cnJlbnRVcGRhdGVbbW9kdWxlSWRdO1xuXHRcdFx0LyoqIEB0eXBlIHtUT0RPfSAqL1xuXHRcdFx0dmFyIHJlc3VsdDtcblx0XHRcdGlmIChuZXdNb2R1bGVGYWN0b3J5KSB7XG5cdFx0XHRcdHJlc3VsdCA9IGdldEFmZmVjdGVkTW9kdWxlRWZmZWN0cyhtb2R1bGVJZCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXN1bHQgPSB7XG5cdFx0XHRcdFx0dHlwZTogXCJkaXNwb3NlZFwiLFxuXHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0LyoqIEB0eXBlIHtFcnJvcnxmYWxzZX0gKi9cblx0XHRcdHZhciBhYm9ydEVycm9yID0gZmFsc2U7XG5cdFx0XHR2YXIgZG9BcHBseSA9IGZhbHNlO1xuXHRcdFx0dmFyIGRvRGlzcG9zZSA9IGZhbHNlO1xuXHRcdFx0dmFyIGNoYWluSW5mbyA9IFwiXCI7XG5cdFx0XHRpZiAocmVzdWx0LmNoYWluKSB7XG5cdFx0XHRcdGNoYWluSW5mbyA9IFwiXFxuVXBkYXRlIHByb3BhZ2F0aW9uOiBcIiArIHJlc3VsdC5jaGFpbi5qb2luKFwiIC0+IFwiKTtcblx0XHRcdH1cblx0XHRcdHN3aXRjaCAocmVzdWx0LnR5cGUpIHtcblx0XHRcdFx0Y2FzZSBcInNlbGYtZGVjbGluZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcblx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG5cdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuXHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBzZWxmIGRlY2xpbmU6IFwiICtcblx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuXHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcImRlY2xpbmVkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG5cdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuXHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcblx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2YgZGVjbGluZWQgZGVwZW5kZW5jeTogXCIgK1xuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG5cdFx0XHRcdFx0XHRcdFx0XCIgaW4gXCIgK1xuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5wYXJlbnRJZCArXG5cdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwidW5hY2NlcHRlZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uVW5hY2NlcHRlZCkgb3B0aW9ucy5vblVuYWNjZXB0ZWQocmVzdWx0KTtcblx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlVW5hY2NlcHRlZClcblx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG5cdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIFwiICsgbW9kdWxlSWQgKyBcIiBpcyBub3QgYWNjZXB0ZWRcIiArIGNoYWluSW5mb1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcImFjY2VwdGVkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25BY2NlcHRlZCkgb3B0aW9ucy5vbkFjY2VwdGVkKHJlc3VsdCk7XG5cdFx0XHRcdFx0ZG9BcHBseSA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJkaXNwb3NlZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGlzcG9zZWQpIG9wdGlvbnMub25EaXNwb3NlZChyZXN1bHQpO1xuXHRcdFx0XHRcdGRvRGlzcG9zZSA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5leGNlcHRpb24gdHlwZSBcIiArIHJlc3VsdC50eXBlKTtcblx0XHRcdH1cblx0XHRcdGlmIChhYm9ydEVycm9yKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0ZXJyb3I6IGFib3J0RXJyb3Jcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGlmIChkb0FwcGx5KSB7XG5cdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gbmV3TW9kdWxlRmFjdG9yeTtcblx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCByZXN1bHQub3V0ZGF0ZWRNb2R1bGVzKTtcblx0XHRcdFx0Zm9yIChtb2R1bGVJZCBpbiByZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcblx0XHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSlcblx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdID0gW107XG5cdFx0XHRcdFx0XHRhZGRBbGxUb1NldChcblx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdLFxuXHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGRvRGlzcG9zZSkge1xuXHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIFtyZXN1bHQubW9kdWxlSWRdKTtcblx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSB3YXJuVW5leHBlY3RlZFJlcXVpcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGN1cnJlbnRVcGRhdGUgPSB1bmRlZmluZWQ7XG5cblx0Ly8gU3RvcmUgc2VsZiBhY2NlcHRlZCBvdXRkYXRlZCBtb2R1bGVzIHRvIHJlcXVpcmUgdGhlbSBsYXRlciBieSB0aGUgbW9kdWxlIHN5c3RlbVxuXHR2YXIgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzID0gW107XG5cdGZvciAodmFyIGogPSAwOyBqIDwgb3V0ZGF0ZWRNb2R1bGVzLmxlbmd0aDsgaisrKSB7XG5cdFx0dmFyIG91dGRhdGVkTW9kdWxlSWQgPSBvdXRkYXRlZE1vZHVsZXNbal07XG5cdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRpZiAoXG5cdFx0XHRtb2R1bGUgJiZcblx0XHRcdChtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQgfHwgbW9kdWxlLmhvdC5fbWFpbikgJiZcblx0XHRcdC8vIHJlbW92ZWQgc2VsZi1hY2NlcHRlZCBtb2R1bGVzIHNob3VsZCBub3QgYmUgcmVxdWlyZWRcblx0XHRcdGFwcGxpZWRVcGRhdGVbb3V0ZGF0ZWRNb2R1bGVJZF0gIT09IHdhcm5VbmV4cGVjdGVkUmVxdWlyZSAmJlxuXHRcdFx0Ly8gd2hlbiBjYWxsZWQgaW52YWxpZGF0ZSBzZWxmLWFjY2VwdGluZyBpcyBub3QgcG9zc2libGVcblx0XHRcdCFtb2R1bGUuaG90Ll9zZWxmSW52YWxpZGF0ZWRcblx0XHQpIHtcblx0XHRcdG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5wdXNoKHtcblx0XHRcdFx0bW9kdWxlOiBvdXRkYXRlZE1vZHVsZUlkLFxuXHRcdFx0XHRyZXF1aXJlOiBtb2R1bGUuaG90Ll9yZXF1aXJlU2VsZixcblx0XHRcdFx0ZXJyb3JIYW5kbGVyOiBtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWRcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHZhciBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcztcblxuXHRyZXR1cm4ge1xuXHRcdGRpc3Bvc2U6IGZ1bmN0aW9uICgpIHtcblx0XHRcdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzLmZvckVhY2goZnVuY3Rpb24gKGNodW5rSWQpIHtcblx0XHRcdFx0ZGVsZXRlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcblx0XHRcdH0pO1xuXHRcdFx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MgPSB1bmRlZmluZWQ7XG5cblx0XHRcdHZhciBpZHg7XG5cdFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMuc2xpY2UoKTtcblx0XHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHZhciBtb2R1bGVJZCA9IHF1ZXVlLnBvcCgpO1xuXHRcdFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXTtcblx0XHRcdFx0aWYgKCFtb2R1bGUpIGNvbnRpbnVlO1xuXG5cdFx0XHRcdHZhciBkYXRhID0ge307XG5cblx0XHRcdFx0Ly8gQ2FsbCBkaXNwb3NlIGhhbmRsZXJzXG5cdFx0XHRcdHZhciBkaXNwb3NlSGFuZGxlcnMgPSBtb2R1bGUuaG90Ll9kaXNwb3NlSGFuZGxlcnM7XG5cdFx0XHRcdGZvciAoaiA9IDA7IGogPCBkaXNwb3NlSGFuZGxlcnMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRkaXNwb3NlSGFuZGxlcnNbal0uY2FsbChudWxsLCBkYXRhKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckRbbW9kdWxlSWRdID0gZGF0YTtcblxuXHRcdFx0XHQvLyBkaXNhYmxlIG1vZHVsZSAodGhpcyBkaXNhYmxlcyByZXF1aXJlcyBmcm9tIHRoaXMgbW9kdWxlKVxuXHRcdFx0XHRtb2R1bGUuaG90LmFjdGl2ZSA9IGZhbHNlO1xuXG5cdFx0XHRcdC8vIHJlbW92ZSBtb2R1bGUgZnJvbSBjYWNoZVxuXHRcdFx0XHRkZWxldGUgX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXTtcblxuXHRcdFx0XHQvLyB3aGVuIGRpc3Bvc2luZyB0aGVyZSBpcyBubyBuZWVkIHRvIGNhbGwgZGlzcG9zZSBoYW5kbGVyXG5cdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG5cblx0XHRcdFx0Ly8gcmVtb3ZlIFwicGFyZW50c1wiIHJlZmVyZW5jZXMgZnJvbSBhbGwgY2hpbGRyZW5cblx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZS5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdHZhciBjaGlsZCA9IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGUuY2hpbGRyZW5bal1dO1xuXHRcdFx0XHRcdGlmICghY2hpbGQpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGlkeCA9IGNoaWxkLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCk7XG5cdFx0XHRcdFx0aWYgKGlkeCA+PSAwKSB7XG5cdFx0XHRcdFx0XHRjaGlsZC5wYXJlbnRzLnNwbGljZShpZHgsIDEpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyByZW1vdmUgb3V0ZGF0ZWQgZGVwZW5kZW5jeSBmcm9tIG1vZHVsZSBjaGlsZHJlblxuXHRcdFx0dmFyIGRlcGVuZGVuY3k7XG5cdFx0XHRmb3IgKHZhciBvdXRkYXRlZE1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG5cdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8ob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG91dGRhdGVkTW9kdWxlSWQpKSB7XG5cdFx0XHRcdFx0bW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdGlmIChtb2R1bGUpIHtcblx0XHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID1cblx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0XHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2pdO1xuXHRcdFx0XHRcdFx0XHRpZHggPSBtb2R1bGUuY2hpbGRyZW4uaW5kZXhPZihkZXBlbmRlbmN5KTtcblx0XHRcdFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBtb2R1bGUuY2hpbGRyZW4uc3BsaWNlKGlkeCwgMSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRhcHBseTogZnVuY3Rpb24gKHJlcG9ydEVycm9yKSB7XG5cdFx0XHQvLyBpbnNlcnQgbmV3IGNvZGVcblx0XHRcdGZvciAodmFyIHVwZGF0ZU1vZHVsZUlkIGluIGFwcGxpZWRVcGRhdGUpIHtcblx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhhcHBsaWVkVXBkYXRlLCB1cGRhdGVNb2R1bGVJZCkpIHtcblx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bdXBkYXRlTW9kdWxlSWRdID0gYXBwbGllZFVwZGF0ZVt1cGRhdGVNb2R1bGVJZF07XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gcnVuIG5ldyBydW50aW1lIG1vZHVsZXNcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY3VycmVudFVwZGF0ZVJ1bnRpbWUubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y3VycmVudFVwZGF0ZVJ1bnRpbWVbaV0oX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGNhbGwgYWNjZXB0IGhhbmRsZXJzXG5cdFx0XHRmb3IgKHZhciBvdXRkYXRlZE1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG5cdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8ob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG91dGRhdGVkTW9kdWxlSWQpKSB7XG5cdFx0XHRcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRpZiAobW9kdWxlKSB7XG5cdFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9XG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdFx0dmFyIGNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0XHRcdFx0dmFyIGVycm9ySGFuZGxlcnMgPSBbXTtcblx0XHRcdFx0XHRcdHZhciBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3MgPSBbXTtcblx0XHRcdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRcdFx0dmFyIGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcblx0XHRcdFx0XHRcdFx0dmFyIGFjY2VwdENhbGxiYWNrID1cblx0XHRcdFx0XHRcdFx0XHRtb2R1bGUuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBlbmRlbmN5XTtcblx0XHRcdFx0XHRcdFx0dmFyIGVycm9ySGFuZGxlciA9XG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlLmhvdC5fYWNjZXB0ZWRFcnJvckhhbmRsZXJzW2RlcGVuZGVuY3ldO1xuXHRcdFx0XHRcdFx0XHRpZiAoYWNjZXB0Q2FsbGJhY2spIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2tzLmluZGV4T2YoYWNjZXB0Q2FsbGJhY2spICE9PSAtMSkgY29udGludWU7XG5cdFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzLnB1c2goYWNjZXB0Q2FsbGJhY2spO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9ySGFuZGxlcnMucHVzaChlcnJvckhhbmRsZXIpO1xuXHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrcy5wdXNoKGRlcGVuZGVuY3kpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRmb3IgKHZhciBrID0gMDsgayA8IGNhbGxiYWNrcy5sZW5ndGg7IGsrKykge1xuXHRcdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRcdGNhbGxiYWNrc1trXS5jYWxsKG51bGwsIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzKTtcblx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHR5cGVvZiBlcnJvckhhbmRsZXJzW2tdID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9ySGFuZGxlcnNba10oZXJyLCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3Nba11cblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIyKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYWNjZXB0LWVycm9yLWhhbmRsZXItZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrc1trXSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIyLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIyKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBvdXRkYXRlZE1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzW2tdLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBMb2FkIHNlbGYgYWNjZXB0ZWQgbW9kdWxlc1xuXHRcdFx0Zm9yICh2YXIgbyA9IDA7IG8gPCBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMubGVuZ3RoOyBvKyspIHtcblx0XHRcdFx0dmFyIGl0ZW0gPSBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXNbb107XG5cdFx0XHRcdHZhciBtb2R1bGVJZCA9IGl0ZW0ubW9kdWxlO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGl0ZW0ucmVxdWlyZShtb2R1bGVJZCk7XG5cdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRcdGlmICh0eXBlb2YgaXRlbS5lcnJvckhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0aXRlbS5lcnJvckhhbmRsZXIoZXJyLCB7XG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZTogX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXVxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycjIpIHtcblx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvci1oYW5kbGVyLWVycm9yZWRcIixcblx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIyLFxuXHRcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIyKTtcblx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvcmVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gb3V0ZGF0ZWRNb2R1bGVzO1xuXHRcdH1cblx0fTtcbn1cbl9fd2VicGFja19yZXF1aXJlX18uaG1ySS5qc29ucCA9IGZ1bmN0aW9uIChtb2R1bGVJZCwgYXBwbHlIYW5kbGVycykge1xuXHRpZiAoIWN1cnJlbnRVcGRhdGUpIHtcblx0XHRjdXJyZW50VXBkYXRlID0ge307XG5cdFx0Y3VycmVudFVwZGF0ZVJ1bnRpbWUgPSBbXTtcblx0XHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcyA9IFtdO1xuXHRcdGFwcGx5SGFuZGxlcnMucHVzaChhcHBseUhhbmRsZXIpO1xuXHR9XG5cdGlmICghX193ZWJwYWNrX3JlcXVpcmVfXy5vKGN1cnJlbnRVcGRhdGUsIG1vZHVsZUlkKSkge1xuXHRcdGN1cnJlbnRVcGRhdGVbbW9kdWxlSWRdID0gX193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXTtcblx0fVxufTtcbl9fd2VicGFja19yZXF1aXJlX18uaG1yQy5qc29ucCA9IGZ1bmN0aW9uIChcblx0Y2h1bmtJZHMsXG5cdHJlbW92ZWRDaHVua3MsXG5cdHJlbW92ZWRNb2R1bGVzLFxuXHRwcm9taXNlcyxcblx0YXBwbHlIYW5kbGVycyxcblx0dXBkYXRlZE1vZHVsZXNMaXN0XG4pIHtcblx0YXBwbHlIYW5kbGVycy5wdXNoKGFwcGx5SGFuZGxlcik7XG5cdGN1cnJlbnRVcGRhdGVDaHVua3MgPSB7fTtcblx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MgPSByZW1vdmVkQ2h1bmtzO1xuXHRjdXJyZW50VXBkYXRlID0gcmVtb3ZlZE1vZHVsZXMucmVkdWNlKGZ1bmN0aW9uIChvYmosIGtleSkge1xuXHRcdG9ialtrZXldID0gZmFsc2U7XG5cdFx0cmV0dXJuIG9iajtcblx0fSwge30pO1xuXHRjdXJyZW50VXBkYXRlUnVudGltZSA9IFtdO1xuXHRjaHVua0lkcy5mb3JFYWNoKGZ1bmN0aW9uIChjaHVua0lkKSB7XG5cdFx0aWYgKFxuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiZcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSAhPT0gdW5kZWZpbmVkXG5cdFx0KSB7XG5cdFx0XHRwcm9taXNlcy5wdXNoKGxvYWRVcGRhdGVDaHVuayhjaHVua0lkLCB1cGRhdGVkTW9kdWxlc0xpc3QpKTtcblx0XHRcdGN1cnJlbnRVcGRhdGVDaHVua3NbY2h1bmtJZF0gPSB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzW2NodW5rSWRdID0gZmFsc2U7XG5cdFx0fVxuXHR9KTtcblx0aWYgKF9fd2VicGFja19yZXF1aXJlX18uZikge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZi5qc29ucEhtciA9IGZ1bmN0aW9uIChjaHVua0lkLCBwcm9taXNlcykge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzICYmXG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubyhjdXJyZW50VXBkYXRlQ2h1bmtzLCBjaHVua0lkKSAmJlxuXHRcdFx0XHQhY3VycmVudFVwZGF0ZUNodW5rc1tjaHVua0lkXVxuXHRcdFx0KSB7XG5cdFx0XHRcdHByb21pc2VzLnB1c2gobG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpKTtcblx0XHRcdFx0Y3VycmVudFVwZGF0ZUNodW5rc1tjaHVua0lkXSA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxufTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJNID0gKCkgPT4ge1xuXHRpZiAodHlwZW9mIGZldGNoID09PSBcInVuZGVmaW5lZFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBicm93c2VyIHN1cHBvcnQ6IG5lZWQgZmV0Y2ggQVBJXCIpO1xuXHRyZXR1cm4gZmV0Y2goX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgX193ZWJwYWNrX3JlcXVpcmVfXy5obXJGKCkpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cdFx0aWYocmVzcG9uc2Uuc3RhdHVzID09PSA0MDQpIHJldHVybjsgLy8gbm8gdXBkYXRlIGF2YWlsYWJsZVxuXHRcdGlmKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIHVwZGF0ZSBtYW5pZmVzdCBcIiArIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuXHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdH0pO1xufTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rbGxmZXRjaGVyX3RzXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2xsZmV0Y2hlcl90c1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBtb2R1bGUgY2FjaGUgYXJlIHVzZWQgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfYm9vdHN0cmFwX2Rpc3RfanNfYm9vdHN0cmFwX2pzLW5vZGVfbW9kdWxlc19qcXVlcnlfZGlzdF9qcXVlcnlfanMtbm9kZV9tLTg2NjEwZlwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL25vZGVfbW9kdWxlcy93ZWJwYWNrLWRldi1zZXJ2ZXIvY2xpZW50L2luZGV4LmpzP3Byb3RvY29sPXdzJTNBJmhvc3RuYW1lPTAuMC4wLjAmcG9ydD05MDAwJnBhdGhuYW1lPSUyRndzJmxvZ2dpbmc9aW5mbyZvdmVybGF5PXRydWUmcmVjb25uZWN0PTEwJmhvdD10cnVlJmxpdmUtcmVsb2FkPXRydWVcIikpKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfYm9vdHN0cmFwX2Rpc3RfanNfYm9vdHN0cmFwX2pzLW5vZGVfbW9kdWxlc19qcXVlcnlfZGlzdF9qcXVlcnlfanMtbm9kZV9tLTg2NjEwZlwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2hvdC9kZXYtc2VydmVyLmpzXCIpKSlcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfYm9vdHN0cmFwX2Rpc3RfanNfYm9vdHN0cmFwX2pzLW5vZGVfbW9kdWxlc19qcXVlcnlfZGlzdF9qcXVlcnlfanMtbm9kZV9tLTg2NjEwZlwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9wb3B1cC9wb3B1cC50c1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbIl8iLCJmb3JtYXRCeXRlcyIsImJ5dGVzIiwidG9GaXhlZCIsIlN0cmluZyIsImZpbmRJdGVtcyIsInNlYXJjaFRlcm0iLCJzb3VyY2UiLCJfX3NlYXJjaFRlcm1fXyIsIl9fcmVzdWx0c19fIiwicmVzdWx0RXhpc3QiLCJyZXN1bHRJdGVtIiwiaW5kZXgiLCJpc0VxdWFsIiwic2VhcmNoSXRlbSIsIml0ZW0iLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsInNlYXJjaEFzUmVnRXgiLCJSZWdFeHAiLCJtYXRjaCIsInB1c2giLCJmaW5kRFMiLCJrIiwidiIsInNyYyIsInByb3BzIiwibGlzdCIsImxpc3RzIiwiaSIsIm9iaiIsInJldHMiLCJqIiwicHJvcCIsImdldEZtdCIsInVybCIsInN0ciIsInNwbGl0IiwiZmlsdGVyIiwicmVwbGFjZSIsIm1hdGNoZXMiLCJtIiwibWFrZVRpdGxlIiwic2x1ZyIsIndvcmRzIiwibGVuZ3RoIiwid29yZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJqb2luIiwibWFrZVNsdWciLCJ0b0xvd2VyQ2FzZSIsInNlbmRNZXNzYWdlU2F2ZURhdGFDb2Rlc1RvTFMiLCJjaHJvbWUiLCJ0YWJzIiwicXVlcnkiLCJhY3RpdmUiLCJjdXJyZW50V2luZG93IiwidGFiIiwic2VuZE1lc3NhZ2UiLCJpZCIsImV2ZW50IiwiciIsImNvbnRlbnRDb25zb2xlTG9nIiwiZGF0YSIsInBhcmFtIl0sInNvdXJjZVJvb3QiOiIifQ==