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
___CSS_LOADER_EXPORT___.push([module.id, "\n.fetch-queue-bar[data-v-905aec42]{\r\n    position: absolute;\r\n    right: 49px;\r\n    margin-top: -22px;\n}\n.fetch-queue-pb[data-v-905aec42]{\r\n    width: 102px;\r\n    height: 24px;\r\n    padding: 4px 0;\r\n    float:right;\r\n    clear:both;\n}\n.btn-fetch[data-v-905aec42]{\r\n    margin-top:-8px;\r\n    padding:0;\r\n    border:none !important;\r\n    font-size: 10px;\n}\n.fetch-queue[data-v-905aec42]{\r\n    margin-bottom: 1em;\n}\n.btn-fetch-cnt[data-v-905aec42]{\r\n   width: 25px;\r\n    position: absolute;\r\n    right: -12px;\r\n    margin-top: 2.5px;\n}\r\n", "",{"version":3,"sources":["webpack://./src/popup/components/FetchQueueBar.vue"],"names":[],"mappings":";AAkDA;IACI,kBAAkB;IAClB,WAAW;IACX,iBAAiB;AACrB;AACA;IACI,YAAY;IACZ,YAAY;IACZ,cAAc;IACd,WAAW;IACX,UAAU;AACd;AACA;IACI,eAAe;IACf,SAAS;IACT,sBAAsB;IACtB,eAAe;AACnB;AACA;IACI,kBAAkB;AACtB;AACA;GACG,WAAW;IACV,kBAAkB;IAClB,YAAY;IACZ,iBAAiB;AACrB","sourcesContent":["<template>\r\n    <div class=\"fetch-queue-bar\">\r\n        <div class=\"fetch-queue-pb\">\r\n            <div class=\"progress\" v-show=\"percentage > 0\">\r\n                <div class=\"progress-bar bg-info\" role=\"progressbar\" :style=\"{width:percentage+'%'}\" :aria-valuenow=\"percentage\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"btn-fetch-cnt\">\r\n            <button :style=\"{color:btnState==3?'white':'inherit'}\" :disabled=\"btnState!=1&&btnState!=4\" @click=\"startQueue()\" class=\"btn btn-sm btn-fetch\"><i class=\"fa\" :class=\"{'fa-play':btnState==1,'fa-spin fa-spinner':btnState==2,'fa-check':btnState==3,'fa-refresh':btnState==4}\"></i></button>\r\n        </div>\r\n    </div>\r\n</template>\r\n\r\n<script lang=\"ts\">\r\nimport {defineComponent,ref} from 'vue'\r\nexport default defineComponent({\r\n  props:{\r\n    sectionIndex:{\r\n        required : true,\r\n        type: Number\r\n    }\r\n  },\r\n  setup(props){\r\n    let queueSlugs = ref([]);\r\n    let excludeSlugs = ref([]);\r\n    let percentage = ref(0);\r\n    let btnState = ref(1);\r\n    let lastTocIndex = ref(0);\r\n    const sectionIndex = ref(props.sectionIndex);\r\n    return {queueSlugs,excludeSlugs,percentage,btnState,lastTocIndex,sectionIndex};\r\n  },\r\n  methods:{\r\n    setProgress(lastTocIndex:number,percentage:number){\r\n        this.lastTocIndex = lastTocIndex;\r\n        this.percentage = percentage;\r\n        if(percentage==100){\r\n            this.btnState = 3;\r\n        }\r\n        this.$parent.fetchSectionQueue.report(this.sectionIndex,lastTocIndex,0);\r\n        console.log(percentage)\r\n    },\r\n    startQueue(){\r\n        this.percentage = this.percentage==0?1:this.percentage;\r\n        this.btnState = 2;\r\n        this.$parent.tocItems[this.sectionIndex].triggerFetchQueue(this.lastTocIndex==0?-1:this.lastTocIndex);\r\n    }\r\n  }\r\n});\r\n</script>\r\n<style scoped>\r\n.fetch-queue-bar{\r\n    position: absolute;\r\n    right: 49px;\r\n    margin-top: -22px;;\r\n}    \r\n.fetch-queue-pb{\r\n    width: 102px;\r\n    height: 24px;\r\n    padding: 4px 0;\r\n    float:right;\r\n    clear:both;\r\n}\r\n.btn-fetch{\r\n    margin-top:-8px;\r\n    padding:0;\r\n    border:none !important;\r\n    font-size: 10px;\r\n}\r\n.fetch-queue{\r\n    margin-bottom: 1em;\r\n}\r\n.btn-fetch-cnt{\r\n   width: 25px;\r\n    position: absolute;\r\n    right: -12px;\r\n    margin-top: 2.5px;\r\n}\r\n</style>"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "\ntd.fcc[data-v-3c3574fe]{\r\n    text-align: right;\r\n    width:2.5em;\n}\nul.toc-item-list[data-v-3c3574fe]{\r\n  list-style-type:none;\r\n  margin:0;\r\n  padding:0;\n}\ntable.toc-item-list[data-v-3c3574fe]{\r\n    width: 100%;\n}\n.toc-item-view[data-v-3c3574fe]{\r\n    padding: 0 2em;\r\n    font-size: 80%;\r\n    padding-bottom: 1em;\r\n    padding-right: 0;\n}\r\n\r\n\r\n", "",{"version":3,"sources":["webpack://./src/popup/components/TocItem.vue"],"names":[],"mappings":";AA2JA;IACI,iBAAiB;IACjB,WAAW;AACf;AACA;EACE,oBAAoB;EACpB,QAAQ;EACR,SAAS;AACX;AACA;IACI,WAAW;AACf;AACA;IACI,cAAc;IACd,cAAc;IACd,mBAAmB;IACnB,gBAAgB;AACpB","sourcesContent":["<template>\r\n  <div class=\"toc-item-view\">\r\n    <FetchQueue v-show=\"false\" ref=\"fetchQueue\"/>\r\n    <table class=\"toc-item-list\">\r\n        <thead>\r\n            <tr>\r\n                <th colspan=\"2\"><label><input @click=\"onCheckAll()\" v-model=\"checkAll\" class=\"form-check-input\" type=\"checkbox\"/> <span style=\"padding-left:.5em\">Check All</span></label></th>\r\n               \r\n                <th></th>\r\n                <th class=\"text-center\" style=\"width:80px\"></th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr v-for=\"(toc,tocIndex) in items\" class=\"toc-item\" :class=\"{ods:tocIndex%2==0}\" :key=\"tocIndex\">\r\n            <td class=\"fcc\">\r\n                <input @click=\"tgQueue(tocIndex)\" class=\"form-check-input\" type=\"checkbox\" v-model=\"checkedQueues[tocIndex]\"/> \r\n            </td>\r\n            <td style=\"padding-left:.5em\">{{toc.title}}</td>\r\n            <td colspan=\"2\" style=\"text-align: right;\">\r\n                <FetchButton @update=\"onFetchUpdate($event)\" \r\n                :sectionIndex=\"sectionIndex\" \r\n                :tocIndex=\"tocIndex\" \r\n                :toc=\"toc\" \r\n                :queue=\"enableQueue\" \r\n                ref=\"fetchBtns\"/>\r\n            </td>\r\n        </tr>\r\n        </tbody>\r\n    </table>\r\n  </div>\r\n</template>\r\n<script lang=\"ts\">\r\nimport { defineComponent, ref, PropType } from 'vue';\r\nimport FetchButton from '../components/FetchButton.vue';\r\nimport Toc from '../../types/toc';\r\n\r\nexport default defineComponent({\r\n    components:{\r\n        FetchButton\r\n    },\r\n    props:{\r\n        items: {\r\n            required : true,\r\n            type : Array as PropType<Toc[]>\r\n        },\r\n        sectionIndex : {\r\n            requied : true,\r\n            type : Number\r\n        }\r\n    },\r\n    setup(props) {\r\n        const enableQueue = ref(false);\r\n        const items = ref(props.items as Toc[]);\r\n        const sectionIndex = ref(props.sectionIndex as number);\r\n        const checkAll = ref(false);\r\n        const checkedQueues = ref([]);\r\n        const excludeQueues = ref([]);\r\n        let fetchBtns = ref([]);\r\n        return {items, sectionIndex, checkedQueues, excludeQueues,fetchBtns,checkAll,enableQueue};\r\n    },\r\n    mounted(){\r\n        setTimeout(()=>{\r\n            this.checkAll = true;\r\n            for(let tocIndex in this.items){\r\n                this.checkedQueues[tocIndex] = true;\r\n            }\r\n        },250);\r\n    },\r\n    methods:{\r\n        triggerFailedFetchQueue(tocIndex:number){\r\n            setTimeout(()=>{\r\n                this.fetchQueue.btnState=4;\r\n            },1000);\r\n            \r\n        },\r\n        calculatePercentageQueue(callback){\r\n            const peak = this.excludeQueues.length;\r\n            const maxPeak = this.items.length;\r\n            const percentage = Math.round(peak / maxPeak * 100);\r\n\r\n            if('function' == typeof callback){\r\n                callback(percentage,peak,maxPeak);\r\n            }\r\n        },\r\n        triggerExcludeFetchQueue(tocIndex:number, fetchQueueEnabled:boolean){\r\n            console.log(tocIndex);\r\n            if(this.excludeQueues.indexOf(tocIndex) == -1){\r\n                this.excludeQueues.push(tocIndex);\r\n            }\r\n            if(fetchQueueEnabled){\r\n                this.calculatePercentageQueue((percentage)=>{\r\n                    setTimeout(()=>{\r\n                        this.fetchQueue.setProgress(tocIndex,percentage);\r\n                        this.$parent.fetchQueueBar[this.sectionIndex].setProgress(tocIndex,percentage);\r\n                    },500);\r\n                });\r\n            }\r\n            \r\n            this.checkedQueues[tocIndex] = false;\r\n            this.checkAll = false;\r\n       \r\n        },\r\n        triggerFetchQueue(tocIndex:number){\r\n            console.log(tocIndex);\r\n            const nextTocIndex = tocIndex + 1;\r\n            if(nextTocIndex < this.checkedQueues.length){\r\n                // process next fetch button\r\n                \r\n                this.fetchBtns[nextTocIndex].fetchToc(true);\r\n                // console.log();\r\n            }else{\r\n                this.calculatePercentageQueue((percentage)=>{\r\n                    setTimeout(()=>{\r\n                        this.fetchQueue.setProgress(tocIndex,percentage);\r\n                        this.$parent.fetchQueueBar[this.sectionIndex].setProgress(tocIndex,percentage);\r\n                    },500);\r\n                });\r\n                setTimeout(()=>{\r\n                    this.fetchQueue.btnState=this.fetchQueue.percentage==100?3:1;\r\n                    this.fetchQueue.lastTocIndex=0;\r\n\r\n                    this.$parent.fetchQueueBar[this.sectionIndex].btnState=this.$parent.fetchQueueBar[this.sectionIndex].percentage==100?3:1;\r\n                    this.$parent.fetchQueueBar[this.sectionIndex].lastTocIndex=0;\r\n                },1000);\r\n            }\r\n            // calling fetch button next index\r\n            // this.$ref\r\n\r\n        },\r\n        onFetchUpdate(target:any){\r\n            // console.log(target)\r\n            this.$emit('update',target);\r\n        },\r\n        onCheckAll(){\r\n            setTimeout(()=>{\r\n                console.log(this.checkAll);\r\n                for(let tocIndex in this.items){\r\n                    this.checkedQueues[tocIndex] = this.checkAll;\r\n                }\r\n            },250);\r\n            \r\n        },\r\n        tgQueue(tocIndex:number){\r\n            setTimeout(()=>{\r\n                // this.$refs.fetchBtns[tocIndex].isQueued =this.checkedQueues[tocIndex];\r\n                // console.log(this.$refs.fetchBtns);\r\n                console.log(this.checkedQueues[tocIndex]);\r\n            },250);\r\n        }\r\n        \r\n    }\r\n})\r\n</script>\r\n\r\n<style scoped>\r\ntd.fcc{\r\n    text-align: right;\r\n    width:2.5em;\r\n}\r\nul.toc-item-list{\r\n  list-style-type:none;\r\n  margin:0;\r\n  padding:0;\r\n}\r\ntable.toc-item-list{\r\n    width: 100%;\r\n}\r\n.toc-item-view{\r\n    padding: 0 2em;\r\n    font-size: 80%;\r\n    padding-bottom: 1em;\r\n    padding-right: 0;\r\n}\r\n\r\n\r\n</style>"],"sourceRoot":""}]);
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
        const enableQueue = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        const items = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.items);
        const sectionIndex = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.sectionIndex);
        const checkAll = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        const checkedQueues = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
        const excludeQueues = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
        let fetchBtns = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
        return { items, sectionIndex, checkedQueues, excludeQueues, fetchBtns, checkAll, enableQueue };
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
/******/ 		__webpack_require__.h = () => ("59cef07030caed7ac72d")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztXQ3poQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvbGlicy91dGlscy5qcyIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvY29tcG9uZW50cy9GZXRjaFF1ZXVlQmFyLnZ1ZT82YWYyIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC9jb21wb25lbnRzL0ZldGNoU2VjdGlvblF1ZXVlLnZ1ZT8yYzRjIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC9jb21wb25lbnRzL0xvZ0Jhci52dWU/NDM4OSIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvY29tcG9uZW50cy9Ub2NJdGVtLnZ1ZT80MzNkIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC92aWV3cy9Eb3dubG9hZFBhZ2UudnVlP2I4YTMiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3N0eWxlcy9wb3B1cC5jc3MiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL2NvbXBvbmVudHMvRmV0Y2hRdWV1ZUJhci52dWU/NjIwZCIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvY29tcG9uZW50cy9GZXRjaFNlY3Rpb25RdWV1ZS52dWU/ZWQ5MyIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvY29tcG9uZW50cy9Mb2dCYXIudnVlPzRmZGYiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL2NvbXBvbmVudHMvVG9jSXRlbS52dWU/YmJhMSIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvdmlld3MvRG93bmxvYWRQYWdlLnZ1ZT83ZDRmIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9zdHlsZXMvcG9wdXAuY3NzPzUxZTAiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL1BvcHVwLnZ1ZT9jYjFmIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC9jb21wb25lbnRzL0ZldGNoQnV0dG9uLnZ1ZT9mMTZkIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC9jb21wb25lbnRzL0ZldGNoUXVldWVCYXIudnVlP2IzY2MiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL2NvbXBvbmVudHMvRmV0Y2hTZWN0aW9uUXVldWUudnVlPzVlZDgiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL2NvbXBvbmVudHMvTG9nQmFyLnZ1ZT8wZjBlIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC9jb21wb25lbnRzL1BhZ2VOYXZpZ2F0aW9uLnZ1ZT8yMjNkIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC9jb21wb25lbnRzL1RvY0l0ZW0udnVlP2U3ZjAiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL3ZpZXdzL0Fib3V0UGFnZS52dWU/MzVhMiIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvdmlld3MvQ291cnNlUGFnZS52dWU/NmZjOCIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvdmlld3MvRG93bmxvYWRQYWdlLnZ1ZT9hYWI3Iiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC92aWV3cy9IZWxwUGFnZS52dWU/NDY4MyIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvdmlld3MvV2VsY29tZVBhZ2UudnVlP2Y2ODgiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL1BvcHVwLnZ1ZT9jNTVmIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC9jb21wb25lbnRzL0ZldGNoQnV0dG9uLnZ1ZT9iMmE5Iiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC9jb21wb25lbnRzL0ZldGNoUXVldWVCYXIudnVlPzRiYzAiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL2NvbXBvbmVudHMvRmV0Y2hTZWN0aW9uUXVldWUudnVlP2RjODgiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL2NvbXBvbmVudHMvTG9nQmFyLnZ1ZT9mNGQxIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC9jb21wb25lbnRzL1BhZ2VOYXZpZ2F0aW9uLnZ1ZT9hMTc4Iiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC9jb21wb25lbnRzL1RvY0l0ZW0udnVlPzQ3NzgiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL3ZpZXdzL0Fib3V0UGFnZS52dWU/NGI1OCIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvdmlld3MvQ291cnNlUGFnZS52dWU/YjI0MiIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvdmlld3MvRG93bmxvYWRQYWdlLnZ1ZT9jNzBiIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC92aWV3cy9IZWxwUGFnZS52dWU/OTI5NyIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvdmlld3MvV2VsY29tZVBhZ2UudnVlP2Y0NzMiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL2xpYnMvcHJveHkudHMiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL2xpYnMvc3RvcmUudHMiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL3BvcHVwLnRzIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC9Qb3B1cC52dWUiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL2NvbXBvbmVudHMvRmV0Y2hCdXR0b24udnVlIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC9jb21wb25lbnRzL0ZldGNoUXVldWVCYXIudnVlIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC9jb21wb25lbnRzL0ZldGNoU2VjdGlvblF1ZXVlLnZ1ZSIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvY29tcG9uZW50cy9Mb2dCYXIudnVlIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC9jb21wb25lbnRzL1BhZ2VOYXZpZ2F0aW9uLnZ1ZSIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvY29tcG9uZW50cy9Ub2NJdGVtLnZ1ZSIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvdmlld3MvQWJvdXRQYWdlLnZ1ZSIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvdmlld3MvQ291cnNlUGFnZS52dWUiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL3ZpZXdzL0Rvd25sb2FkUGFnZS52dWUiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL3ZpZXdzL0hlbHBQYWdlLnZ1ZSIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvdmlld3MvV2VsY29tZVBhZ2UudnVlIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC9Qb3B1cC52dWU/ZTAxMCIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvY29tcG9uZW50cy9GZXRjaEJ1dHRvbi52dWU/NTUxZiIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvY29tcG9uZW50cy9GZXRjaFF1ZXVlQmFyLnZ1ZT9jYTkzIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC9jb21wb25lbnRzL0ZldGNoU2VjdGlvblF1ZXVlLnZ1ZT9mZjQyIiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC9jb21wb25lbnRzL0xvZ0Jhci52dWU/OTNjOSIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvY29tcG9uZW50cy9QYWdlTmF2aWdhdGlvbi52dWU/MjFkMSIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvY29tcG9uZW50cy9Ub2NJdGVtLnZ1ZT9mMGY3Iiwid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9wb3B1cC92aWV3cy9BYm91dFBhZ2UudnVlPzVmN2IiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL3ZpZXdzL0NvdXJzZVBhZ2UudnVlP2VlNzYiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL3ZpZXdzL0Rvd25sb2FkUGFnZS52dWU/ZTBhYiIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvLi9zcmMvcG9wdXAvdmlld3MvSGVscFBhZ2UudnVlP2IxZGQiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL3BvcHVwL3ZpZXdzL1dlbGNvbWVQYWdlLnZ1ZT83MGE0Iiwid2VicGFjazovL2xsZmV0Y2hlci10cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IHVwZGF0ZSBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvd2VicGFjay9ydW50aW1lL2dldCB1cGRhdGUgbWFuaWZlc3QgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvd2VicGFjay9ydW50aW1lL2xvYWQgc2NyaXB0Iiwid2VicGFjazovL2xsZmV0Y2hlci10cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2xsZmV0Y2hlci10cy93ZWJwYWNrL3J1bnRpbWUvaG90IG1vZHVsZSByZXBsYWNlbWVudCIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2xsZmV0Y2hlci10cy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9sbGZldGNoZXItdHMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ3VuZGVyc2NvcmUnO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRCeXRlcyhieXRlcykge1xyXG4gIGlmIChieXRlcyA+IDEwMjQpIHJldHVybiAoYnl0ZXMgLyAxMDI0KS50b0ZpeGVkKDEpICsgJ0snXHJcbiAgcmV0dXJuIFN0cmluZyhieXRlcylcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmluZEl0ZW1zKHNlYXJjaFRlcm0sIHNvdXJjZSl7XHJcbiAgbGV0IF9fc2VhcmNoVGVybV9fID0gc2VhcmNoVGVybTtcclxuICBsZXQgX19yZXN1bHRzX18gPSBbXTtcclxuXHJcbiAgZnVuY3Rpb24gcmVzdWx0RXhpc3QocmVzdWx0SXRlbSl7XHJcbiAgICBmb3IobGV0IGluZGV4IGluIF9fcmVzdWx0c19fKXtcclxuICAgICAgICBpZihfLmlzRXF1YWwocmVzdWx0SXRlbSwgX19yZXN1bHRzX19baW5kZXhdKSl7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgZnVuY3Rpb24gc2VhcmNoSXRlbShpdGVtKSB7IFxyXG4gICAgaWYoJ3VuZGVmaW5lZCcgPT0gdHlwZW9mIGl0ZW0gfHwgaXRlbSA9PSBudWxsKXtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBPYmplY3Qua2V5cyhpdGVtKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgIGlmICh0eXBlb2YgaXRlbVtrZXldID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgc2VhcmNoSXRlbShpdGVtW2tleV0pXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHR5cGVvZiBpdGVtW2tleV0gPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICBsZXQgc2VhcmNoQXNSZWdFeCA9IG5ldyBSZWdFeHAoX19zZWFyY2hUZXJtX18sIFwiZ2lcIik7XHJcbiAgICAgICAgaWYgKGl0ZW1ba2V5XS5tYXRjaChzZWFyY2hBc1JlZ0V4KSkge1xyXG4gICAgICAgICAgaWYoIXJlc3VsdEV4aXN0KGl0ZW0pKXtcclxuICAgICAgICAgICAgICBfX3Jlc3VsdHNfXy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7ICAgXHJcbiAgfVxyXG4gIHNlYXJjaEl0ZW0oc291cmNlKTtcclxuXHJcbiAgcmV0dXJuIF9fcmVzdWx0c19fO1xyXG59XHJcblxyXG4vLyBmaW5kQnByKCckdHlwZScsJ2NvbS5saW5rZWRpbi5sZWFybmluZy5hcGkuZGVjby5jb250ZW50LkV4ZXJjaXNlRmlsZScsYnByU3RvcmUsWydzaXplSW5CeXRlcycsJ25hbWUnLCd1cmwnXSxmYWxzZSlcclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmREUyhrLHYsc3JjLHByb3BzLGxpc3Qpe1xyXG4gIGxpc3QgPSAndW5kZWZpbmVkJyA9PT0gdHlwZW9mIGxpc3QgPyBmYWxzZSA6IGxpc3Q7XHJcbiAgbGV0IGxpc3RzID0gW107XHJcbiAgZm9yKGxldCBpIGluIHNyYyl7XHJcbiAgICAgIGNvbnN0IG9iaiA9IHNyY1tpXTtcclxuICAgICAgaWYoJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiBvYmpba10pe1xyXG4gICAgICAgICAgaWYob2JqW2tdID09PSB2KXtcclxuICAgICAgICAgICAgICBsZXQgcmV0cyA9IHt9O1xyXG4gICAgICAgICAgICAgIGZvcihsZXQgaiBpbiBwcm9wcyl7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3AgPSBwcm9wc1tqXTtcclxuICAgICAgICAgICAgICAgICAgaWYoJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiBvYmpbcHJvcF0pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0c1twcm9wXSA9IG9ialtwcm9wXTtcclxuICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXRzW3Byb3BdID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpZighbGlzdCl7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiByZXRzO1xyXG4gICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICBsaXN0cy5wdXNoKHJldHMpO1xyXG4gICAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBsaXN0cztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEZtdCh1cmwpe1xyXG4gIGxldCBzdHIgPSB1cmwuc3BsaXQoJz8nKVswXS5zcGxpdCgnLycpLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09ICcnKVs0XS5yZXBsYWNlKC9ebGVhcm5pbmctb3JpZ2luYWwtdmlkZW8tLywnJyk7XHJcbiAgXHJcbiAgbGV0IG1hdGNoZXMgPSBbJ2F1ZGlvJywnMzYwJywnNzIwJywnNDgwJywnMTA4MCcsJzU0MCcsJ2hscyddO1xyXG5cclxuICBmb3IoIGxldCBtIGluIG1hdGNoZXMpe1xyXG4gICAgICBpZihzdHIubWF0Y2gobWF0Y2hlc1ttXSkpe1xyXG4gICAgICAgICAgcmV0dXJuIG1hdGNoZXNbbV07XHJcbiAgICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHN0cjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VUaXRsZShzbHVnKSB7XHJcbiAgY29uc3Qgd29yZHMgPSBzbHVnLnNwbGl0KCctJyk7XHJcbiAgXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB3b3Jkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgd29yZCA9IHdvcmRzW2ldO1xyXG4gICAgICB3b3Jkc1tpXSA9IHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnNsaWNlKDEpO1xyXG4gIH1cclxuICBcclxuICByZXR1cm4gd29yZHMuam9pbignICcpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFrZVNsdWcoc3RyKSB7XHJcbiAgICBjb25zdCB3b3JkcyA9IHN0ci5yZXBsYWNlKC9cXFcrL2csJyAnKS5zcGxpdCgnICcpO1xyXG4gICAgcmV0dXJuIHdvcmRzLmpvaW4oJy0nKS50b0xvd2VyQ2FzZSgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2VuZE1lc3NhZ2VTYXZlRGF0YUNvZGVzVG9MUygpe1xyXG4gICAgY2hyb21lLnRhYnMucXVlcnkoe2FjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZX0sIGZ1bmN0aW9uKHRhYnMpIHtcclxuICAgICAgICBjb25zdCB0YWIgPSB0YWJzWzBdO1xyXG4gICAgICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwge2V2ZW50OiAnU2F2ZURhdGFDb2Rlc1RvTFMnfSwgKHIpID0+IHt9KTtcclxuXHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRlbnRDb25zb2xlTG9nKGRhdGEpe1xyXG4gICAgY2hyb21lLnRhYnMucXVlcnkoe2FjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZX0sIGZ1bmN0aW9uKHRhYnMpIHtcclxuICAgICAgICBjb25zdCB0YWIgPSB0YWJzWzBdO1xyXG4gICAgICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwge2V2ZW50OiAnQ29udGVudENvbnNvbGVMb2cnLHBhcmFtOmRhdGF9LCAocikgPT4ge30pO1xyXG5cclxuICAgIH0pO1xyXG59IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uZmV0Y2gtcXVldWUtYmFyW2RhdGEtdi05MDVhZWM0Ml17XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDQ5cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IC0yMnB4O1xcbn1cXG4uZmV0Y2gtcXVldWUtcGJbZGF0YS12LTkwNWFlYzQyXXtcXHJcXG4gICAgd2lkdGg6IDEwMnB4O1xcclxcbiAgICBoZWlnaHQ6IDI0cHg7XFxyXFxuICAgIHBhZGRpbmc6IDRweCAwO1xcclxcbiAgICBmbG9hdDpyaWdodDtcXHJcXG4gICAgY2xlYXI6Ym90aDtcXG59XFxuLmJ0bi1mZXRjaFtkYXRhLXYtOTA1YWVjNDJde1xcclxcbiAgICBtYXJnaW4tdG9wOi04cHg7XFxyXFxuICAgIHBhZGRpbmc6MDtcXHJcXG4gICAgYm9yZGVyOm5vbmUgIWltcG9ydGFudDtcXHJcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcbn1cXG4uZmV0Y2gtcXVldWVbZGF0YS12LTkwNWFlYzQyXXtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cXG4uYnRuLWZldGNoLWNudFtkYXRhLXYtOTA1YWVjNDJde1xcclxcbiAgIHdpZHRoOiAyNXB4O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiAtMTJweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMi41cHg7XFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9wb3B1cC9jb21wb25lbnRzL0ZldGNoUXVldWVCYXIudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFrREE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixjQUFjO0lBQ2QsV0FBVztJQUNYLFVBQVU7QUFDZDtBQUNBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7R0FDRyxXQUFXO0lBQ1Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmZXRjaC1xdWV1ZS1iYXJcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmV0Y2gtcXVldWUtcGJcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2dyZXNzXFxcIiB2LXNob3c9XFxcInBlcmNlbnRhZ2UgPiAwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvZ3Jlc3MtYmFyIGJnLWluZm9cXFwiIHJvbGU9XFxcInByb2dyZXNzYmFyXFxcIiA6c3R5bGU9XFxcInt3aWR0aDpwZXJjZW50YWdlKyclJ31cXFwiIDphcmlhLXZhbHVlbm93PVxcXCJwZXJjZW50YWdlXFxcIiBhcmlhLXZhbHVlbWluPVxcXCIwXFxcIiBhcmlhLXZhbHVlbWF4PVxcXCIxMDBcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJidG4tZmV0Y2gtY250XFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIDpzdHlsZT1cXFwie2NvbG9yOmJ0blN0YXRlPT0zPyd3aGl0ZSc6J2luaGVyaXQnfVxcXCIgOmRpc2FibGVkPVxcXCJidG5TdGF0ZSE9MSYmYnRuU3RhdGUhPTRcXFwiIEBjbGljaz1cXFwic3RhcnRRdWV1ZSgpXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zbSBidG4tZmV0Y2hcXFwiPjxpIGNsYXNzPVxcXCJmYVxcXCIgOmNsYXNzPVxcXCJ7J2ZhLXBsYXknOmJ0blN0YXRlPT0xLCdmYS1zcGluIGZhLXNwaW5uZXInOmJ0blN0YXRlPT0yLCdmYS1jaGVjayc6YnRuU3RhdGU9PTMsJ2ZhLXJlZnJlc2gnOmJ0blN0YXRlPT00fVxcXCI+PC9pPjwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvdGVtcGxhdGU+XFxyXFxuXFxyXFxuPHNjcmlwdCBsYW5nPVxcXCJ0c1xcXCI+XFxyXFxuaW1wb3J0IHtkZWZpbmVDb21wb25lbnQscmVmfSBmcm9tICd2dWUnXFxyXFxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcXHJcXG4gIHByb3BzOntcXHJcXG4gICAgc2VjdGlvbkluZGV4OntcXHJcXG4gICAgICAgIHJlcXVpcmVkIDogdHJ1ZSxcXHJcXG4gICAgICAgIHR5cGU6IE51bWJlclxcclxcbiAgICB9XFxyXFxuICB9LFxcclxcbiAgc2V0dXAocHJvcHMpe1xcclxcbiAgICBsZXQgcXVldWVTbHVncyA9IHJlZihbXSk7XFxyXFxuICAgIGxldCBleGNsdWRlU2x1Z3MgPSByZWYoW10pO1xcclxcbiAgICBsZXQgcGVyY2VudGFnZSA9IHJlZigwKTtcXHJcXG4gICAgbGV0IGJ0blN0YXRlID0gcmVmKDEpO1xcclxcbiAgICBsZXQgbGFzdFRvY0luZGV4ID0gcmVmKDApO1xcclxcbiAgICBjb25zdCBzZWN0aW9uSW5kZXggPSByZWYocHJvcHMuc2VjdGlvbkluZGV4KTtcXHJcXG4gICAgcmV0dXJuIHtxdWV1ZVNsdWdzLGV4Y2x1ZGVTbHVncyxwZXJjZW50YWdlLGJ0blN0YXRlLGxhc3RUb2NJbmRleCxzZWN0aW9uSW5kZXh9O1xcclxcbiAgfSxcXHJcXG4gIG1ldGhvZHM6e1xcclxcbiAgICBzZXRQcm9ncmVzcyhsYXN0VG9jSW5kZXg6bnVtYmVyLHBlcmNlbnRhZ2U6bnVtYmVyKXtcXHJcXG4gICAgICAgIHRoaXMubGFzdFRvY0luZGV4ID0gbGFzdFRvY0luZGV4O1xcclxcbiAgICAgICAgdGhpcy5wZXJjZW50YWdlID0gcGVyY2VudGFnZTtcXHJcXG4gICAgICAgIGlmKHBlcmNlbnRhZ2U9PTEwMCl7XFxyXFxuICAgICAgICAgICAgdGhpcy5idG5TdGF0ZSA9IDM7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICB0aGlzLiRwYXJlbnQuZmV0Y2hTZWN0aW9uUXVldWUucmVwb3J0KHRoaXMuc2VjdGlvbkluZGV4LGxhc3RUb2NJbmRleCwwKTtcXHJcXG4gICAgICAgIGNvbnNvbGUubG9nKHBlcmNlbnRhZ2UpXFxyXFxuICAgIH0sXFxyXFxuICAgIHN0YXJ0UXVldWUoKXtcXHJcXG4gICAgICAgIHRoaXMucGVyY2VudGFnZSA9IHRoaXMucGVyY2VudGFnZT09MD8xOnRoaXMucGVyY2VudGFnZTtcXHJcXG4gICAgICAgIHRoaXMuYnRuU3RhdGUgPSAyO1xcclxcbiAgICAgICAgdGhpcy4kcGFyZW50LnRvY0l0ZW1zW3RoaXMuc2VjdGlvbkluZGV4XS50cmlnZ2VyRmV0Y2hRdWV1ZSh0aGlzLmxhc3RUb2NJbmRleD09MD8tMTp0aGlzLmxhc3RUb2NJbmRleCk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59KTtcXHJcXG48L3NjcmlwdD5cXHJcXG48c3R5bGUgc2NvcGVkPlxcclxcbi5mZXRjaC1xdWV1ZS1iYXJ7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDQ5cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IC0yMnB4OztcXHJcXG59ICAgIFxcclxcbi5mZXRjaC1xdWV1ZS1wYntcXHJcXG4gICAgd2lkdGg6IDEwMnB4O1xcclxcbiAgICBoZWlnaHQ6IDI0cHg7XFxyXFxuICAgIHBhZGRpbmc6IDRweCAwO1xcclxcbiAgICBmbG9hdDpyaWdodDtcXHJcXG4gICAgY2xlYXI6Ym90aDtcXHJcXG59XFxyXFxuLmJ0bi1mZXRjaHtcXHJcXG4gICAgbWFyZ2luLXRvcDotOHB4O1xcclxcbiAgICBwYWRkaW5nOjA7XFxyXFxuICAgIGJvcmRlcjpub25lICFpbXBvcnRhbnQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXHJcXG59XFxyXFxuLmZldGNoLXF1ZXVle1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxyXFxufVxcclxcbi5idG4tZmV0Y2gtY250e1xcclxcbiAgIHdpZHRoOiAyNXB4O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiAtMTJweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMi41cHg7XFxyXFxufVxcclxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmRhdGEtY29kZXNbZGF0YS12LTZhZmRhNjQ5XXtcXHJcXG4gICAgYmFja2dyb3VuZDogeWVsbG93O1xcbn1cXG4uZmV0Y2gtc2VjdGlvbi1xdWV1ZS1wYltkYXRhLXYtNmFmZGE2NDlde1xcclxcbiAgICB3aWR0aDogMTAycHg7XFxyXFxuICAgIGhlaWdodDogMjRweDtcXHJcXG4gICAgcGFkZGluZzogNHB4IDA7XFxyXFxuICAgIGZsb2F0OnJpZ2h0O1xcclxcbiAgICBjbGVhcjpib3RoO1xcbn1cXG4uYnRuLWZldGNoLXNlY3Rpb24tcXVldWVbZGF0YS12LTZhZmRhNjQ5XXtcXHJcXG4gICAgbWFyZ2luLXRvcDotOHB4O1xcclxcbiAgICBwYWRkaW5nOjA7XFxyXFxuICAgIGJvcmRlcjpub25lICFpbXBvcnRhbnQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXG59XFxuLmZldGNoLXNlY3Rpb24tcXVldWVbZGF0YS12LTZhZmRhNjQ5XXtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICByaWdodDogNDlweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTJweDtcXG59XFxuLmJ0bi1mZXRjaC1zZWN0aW9uLXF1ZXVlLWNudFtkYXRhLXYtNmFmZGE2NDlde1xcclxcbiAgIHdpZHRoOiAyNXB4O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiAtMTJweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMi41cHg7XFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9wb3B1cC9jb21wb25lbnRzL0ZldGNoU2VjdGlvblF1ZXVlLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBc0ZBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGNBQWM7SUFDZCxXQUFXO0lBQ1gsVUFBVTtBQUNkO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsU0FBUztJQUNULHNCQUFzQjtJQUN0QixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjtBQUNBO0dBQ0csV0FBVztJQUNWLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZmV0Y2gtc2VjdGlvbi1xdWV1ZVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmc3FiY1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmV0Y2gtc2VjdGlvbi1xdWV1ZS1iYXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmZXRjaC1zZWN0aW9uLXF1ZXVlLXBiXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2dyZXNzXFxcIiB2LXNob3c9XFxcInBlcmNlbnRhZ2UgPiAwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9ncmVzcy1iYXIgYmctc3VjY2Vzc1xcXCIgcm9sZT1cXFwicHJvZ3Jlc3NiYXJcXFwiIDpzdHlsZT1cXFwie3dpZHRoOnBlcmNlbnRhZ2UrJyUnfVxcXCIgOmFyaWEtdmFsdWVub3c9XFxcInBlcmNlbnRhZ2VcXFwiIGFyaWEtdmFsdWVtaW49XFxcIjBcXFwiIGFyaWEtdmFsdWVtYXg9XFxcIjEwMFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJ0bi1mZXRjaC1zZWN0aW9uLXF1ZXVlLWNudFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIDpzdHlsZT1cXFwie2NvbG9yOmJ0blN0YXRlPT0zPyd3aGl0ZSc6J2luaGVyaXQnfVxcXCIgOmRpc2FibGVkPVxcXCJidG5TdGF0ZSE9MSYmYnRuU3RhdGUhPTRcXFwiIEBjbGljaz1cXFwic3RhcnRRdWV1ZSgpXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zbSBidG4tZmV0Y2gtc2VjdGlvbi1xdWV1ZVxcXCI+PGkgY2xhc3M9XFxcImZhXFxcIiA6Y2xhc3M9XFxcInsnZmEtcGxheSc6YnRuU3RhdGU9PTEsJ2ZhLXNwaW4gZmEtc3Bpbm5lcic6YnRuU3RhdGU9PTIsJ2ZhLWNoZWNrJzpidG5TdGF0ZT09MywnZmEtcmVmcmVzaCc6YnRuU3RhdGU9PTR9XFxcIj48L2k+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvdGVtcGxhdGU+XFxyXFxuXFxyXFxuPHNjcmlwdCBsYW5nPVxcXCJ0c1xcXCI+XFxyXFxuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnO1xcclxcblxcclxcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XFxyXFxuXFxyXFxuICAgIHNldHVwKCkge1xcclxcbiAgICAgICAgY29uc3QgcXVldWVTbHVncyA9IHJlZihbXSk7XFxyXFxuICAgICAgICBjb25zdCBidG5TdGF0ZSA9IHJlZigxKTtcXHJcXG4gICAgICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSByZWYoMCk7XFxyXFxuICAgICAgICBjb25zdCBsYXN0U2VjdGlvbkluZGV4ID0gcmVmKDApO1xcclxcbiAgICAgICAgY29uc3Qgc2VjdGlvbkluZGV4UXVldWVzID0gcmVmKFtdKTtcXHJcXG4gICAgICAgIHJldHVybiB7XFxyXFxuICAgICAgICAgICAgcXVldWVTbHVncyxcXHJcXG4gICAgICAgICAgICBidG5TdGF0ZSxcXHJcXG4gICAgICAgICAgICBwZXJjZW50YWdlLFxcclxcbiAgICAgICAgICAgIGxhc3RTZWN0aW9uSW5kZXgsXFxyXFxuICAgICAgICAgICAgc2VjdGlvbkluZGV4UXVldWVzXFxyXFxuICAgICAgICB9O1xcclxcbiAgICB9LFxcclxcbiAgICBtb3VudGVkKCl7XFxyXFxuICAgICAgICBzZXRUaW1lb3V0KCgpPT4ge1xcclxcbiAgICAgICAgICAgIHRoaXMuc2VjdGlvbkluZGV4UXVldWVzID0gIE9iamVjdC5rZXlzKHRoaXMuJHBhcmVudC5zZWN0aW9ucyk7XFxyXFxuICAgICAgICB9LDI1MClcXHJcXG4gICAgfSxcXHJcXG4gICAgbWV0aG9kczp7XFxyXFxuICAgICAgICB0b0pTT05TdHIob2JqOmFueSl7XFxyXFxuICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iaik7XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgY2FsY3VsYXRlUGVyY2VudGFnZVF1ZXVlKGNhbGxiYWNrOkZ1bmN0aW9uKXtcXHJcXG4gICAgICAgICAgICBjb25zdCBwZWFrID0gdGhpcy5xdWV1ZVNsdWdzLmxlbmd0aDtcXHJcXG4gICAgICAgICAgICBjb25zdCBtYXhQZWFrID0gdGhpcy4kcGFyZW50LmdldFRvdGFsVG9jcygpO1xcclxcbiAgICAgICAgICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSBNYXRoLnJvdW5kKHBlYWsgLyBtYXhQZWFrICogMTAwKTtcXHJcXG5cXHJcXG4gICAgICAgICAgICBpZignZnVuY3Rpb24nID09IHR5cGVvZiBjYWxsYmFjayl7XFxyXFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHBlcmNlbnRhZ2UscGVhayxtYXhQZWFrKTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgcmVwb3J0KHNlY3Rpb25JbmRleDpudW1iZXIsdG9jSW5kZXg6bnVtYmVyLHN0YXR1czpudW1iZXIpe1xcclxcbiAgICAgICAgICAgIGNvbnN0IHNlY3Rpb24gPSB0aGlzLiRwYXJlbnQuc2VjdGlvbnNbc2VjdGlvbkluZGV4XTtcXHJcXG4gICAgICAgICAgICBjb25zdCBzbHVnID0gc2VjdGlvbi5pdGVtc1t0b2NJbmRleF0uc2x1ZztcXHJcXG4gICAgICAgICAgICBpZighdGhpcy5xdWV1ZVNsdWdzLmluY2x1ZGVzKHNsdWcpKXtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5xdWV1ZVNsdWdzLnB1c2goc2x1Zyk7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIGNvbnN0IHJlbWFpbmluZ1RleHQgPSBgJHt0aGlzLnF1ZXVlU2x1Z3MubGVuZ3RofSBvZiAke3RoaXMuJHBhcmVudC5nZXRUb3RhbFRvY3MoKX1gXFxyXFxuICAgICAgICAgICAgdGhpcy4kcGFyZW50LmxvZ0Jhci5sb2coYCR7c2VjdGlvbi50aXRsZX0gOiAke3NsdWd9ICR7cmVtYWluaW5nVGV4dH1gLHN0YXR1cyk7XFxyXFxuXFxyXFxuICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVQZXJjZW50YWdlUXVldWUoKHBlcmNlbnRhZ2UpPT50aGlzLnBlcmNlbnRhZ2U9cGVyY2VudGFnZSk7XFxyXFxuXFxyXFxuICAgICAgICAgICAgaWYodGhpcy4kcGFyZW50LmZldGNoUXVldWVCYXJbc2VjdGlvbkluZGV4XS5wZXJjZW50YWdlPT0xMDApe1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NRdWV1ZSgpO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBwcm9jZXNzUXVldWUoKXtcXHJcXG4gICAgICAgICAgICBpZih0aGlzLnNlY3Rpb25JbmRleFF1ZXVlcy5sZW5ndGggPiAwKXtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0U2VjdGlvbkluZGV4ID0gdGhpcy5zZWN0aW9uSW5kZXhRdWV1ZXMuc2hpZnQoKTtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy4kcGFyZW50LmZldGNoUXVldWVCYXJbdGhpcy5sYXN0U2VjdGlvbkluZGV4XS5zdGFydFF1ZXVlKCk7XFxyXFxuICAgICAgICAgICAgfWVsc2V7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuYnRuU3RhdGUgPSAzO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBzdGFydFF1ZXVlKCl7XFxyXFxuICAgICAgICAgICAgdGhpcy5idG5TdGF0ZSA9IDI7XFxyXFxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzUXVldWUoKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn0pXFxyXFxuPC9zY3JpcHQ+XFxyXFxuXFxyXFxuPHN0eWxlIHNjb3BlZD5cXHJcXG4uZGF0YS1jb2Rlc3tcXHJcXG4gICAgYmFja2dyb3VuZDogeWVsbG93O1xcclxcbn0gICAgXFxyXFxuLmZldGNoLXNlY3Rpb24tcXVldWUtcGJ7XFxyXFxuICAgIHdpZHRoOiAxMDJweDtcXHJcXG4gICAgaGVpZ2h0OiAyNHB4O1xcclxcbiAgICBwYWRkaW5nOiA0cHggMDtcXHJcXG4gICAgZmxvYXQ6cmlnaHQ7XFxyXFxuICAgIGNsZWFyOmJvdGg7XFxyXFxufVxcclxcbi5idG4tZmV0Y2gtc2VjdGlvbi1xdWV1ZXtcXHJcXG4gICAgbWFyZ2luLXRvcDotOHB4O1xcclxcbiAgICBwYWRkaW5nOjA7XFxyXFxuICAgIGJvcmRlcjpub25lICFpbXBvcnRhbnQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXHJcXG59XFxyXFxuLmZldGNoLXNlY3Rpb24tcXVldWV7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDQ5cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEycHg7XFxyXFxufVxcclxcbi5idG4tZmV0Y2gtc2VjdGlvbi1xdWV1ZS1jbnR7XFxyXFxuICAgd2lkdGg6IDI1cHg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IC0xMnB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAyLjVweDtcXHJcXG59XFxyXFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG4ubG9nLW1lc3NhZ2VbZGF0YS12LTVjOGEyODdjXXtcXHJcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXHJcXG4gICAgcGFkZGluZzogLjI1ZW0gLjVlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXG59XFxuLmxvZy1tZXNzYWdlLmVycm9yW2RhdGEtdi01YzhhMjg3Y117XFxyXFxuICAgIGNvbG9yOiNmZmY7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJlZDtcXG59XFxuLmxvZy1tZXNzYWdlLnN1Y2Nlc3NbZGF0YS12LTVjOGEyODdjXXtcXHJcXG4gICAgY29sb3I6I2ZmZjtcXHJcXG4gICAgYmFja2dyb3VuZDogZ3JlZW47XFxufVxcbi5sb2ctbWVzc2FnZS53YXJuaW5nW2RhdGEtdi01YzhhMjg3Y117XFxyXFxuICAgIGNvbG9yOm1hcm9vbjtcXHJcXG4gICAgYmFja2dyb3VuZDogeWVsbG93O1xcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcG9wdXAvY29tcG9uZW50cy9Mb2dCYXIudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUE2QkE7SUFDSSxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJsb2ctYmFyXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImxvZy1tZXNzYWdlXFxcIiA6Y2xhc3M9XFxcIntlcnJvcjptb2RlPT0xLHN1Y2Nlc3M6bW9kZT09MCx3YXJuaW5nOm1vZGU9PTJ9XFxcIj5cXHJcXG4gICAgICAgICAgICA8c3Bhbj57e21lc3NhZ2V9fTwvc3Bhbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L3RlbXBsYXRlPlxcclxcblxcclxcbjxzY3JpcHQgbGFuZz1cXFwidHNcXFwiPlxcclxcbmltcG9ydCB7ZGVmaW5lQ29tcG9uZW50LHJlZn0gZnJvbSAndnVlJztcXHJcXG5cXHJcXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xcclxcbiAgICBzZXR1cCgpe1xcclxcbiAgICAgICAgY29uc3QgbW9kZSA9IHJlZigtMSk7XFxyXFxuICAgICAgICBjb25zdCBtZXNzYWdlID0gcmVmKCcnKTtcXHJcXG5cXHJcXG4gICAgICAgIHJldHVybiB7bW9kZSxtZXNzYWdlfTtcXHJcXG4gICAgfSxcXHJcXG4gICAgXFxyXFxuICAgIG1ldGhvZHM6e1xcclxcbiAgICAgICAgbG9nKG1lc3NhZ2U6c3RyaW5nLG1vZGU6bnVtYmVyKXtcXHJcXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xcclxcbiAgICAgICAgICAgIHRoaXMubW9kZSA9IG1vZGU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59KVxcclxcbjwvc2NyaXB0PlxcclxcblxcclxcbjxzdHlsZSBzY29wZWQ+XFxyXFxuLmxvZy1tZXNzYWdle1xcclxcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcclxcbiAgICBwYWRkaW5nOiAuMjVlbSAuNWVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcclxcbn0gICAgXFxyXFxuLmxvZy1tZXNzYWdlLmVycm9ye1xcclxcbiAgICBjb2xvcjojZmZmO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XFxyXFxufVxcclxcbi5sb2ctbWVzc2FnZS5zdWNjZXNze1xcclxcbiAgICBjb2xvcjojZmZmO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBncmVlbjtcXHJcXG59XFxyXFxuLmxvZy1tZXNzYWdlLndhcm5pbmd7XFxyXFxuICAgIGNvbG9yOm1hcm9vbjtcXHJcXG4gICAgYmFja2dyb3VuZDogeWVsbG93O1xcclxcbn1cXHJcXG48L3N0eWxlPlwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbnRkLmZjY1tkYXRhLXYtM2MzNTc0ZmVde1xcclxcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gICAgd2lkdGg6Mi41ZW07XFxufVxcbnVsLnRvYy1pdGVtLWxpc3RbZGF0YS12LTNjMzU3NGZlXXtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTpub25lO1xcclxcbiAgbWFyZ2luOjA7XFxyXFxuICBwYWRkaW5nOjA7XFxufVxcbnRhYmxlLnRvYy1pdGVtLWxpc3RbZGF0YS12LTNjMzU3NGZlXXtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi50b2MtaXRlbS12aWV3W2RhdGEtdi0zYzM1NzRmZV17XFxyXFxuICAgIHBhZGRpbmc6IDAgMmVtO1xcclxcbiAgICBmb250LXNpemU6IDgwJTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDFlbTtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMDtcXG59XFxyXFxuXFxyXFxuXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3BvcHVwL2NvbXBvbmVudHMvVG9jSXRlbS52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQTJKQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixRQUFRO0VBQ1IsU0FBUztBQUNYO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJ0b2MtaXRlbS12aWV3XFxcIj5cXHJcXG4gICAgPEZldGNoUXVldWUgdi1zaG93PVxcXCJmYWxzZVxcXCIgcmVmPVxcXCJmZXRjaFF1ZXVlXFxcIi8+XFxyXFxuICAgIDx0YWJsZSBjbGFzcz1cXFwidG9jLWl0ZW0tbGlzdFxcXCI+XFxyXFxuICAgICAgICA8dGhlYWQ+XFxyXFxuICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICA8dGggY29sc3Bhbj1cXFwiMlxcXCI+PGxhYmVsPjxpbnB1dCBAY2xpY2s9XFxcIm9uQ2hlY2tBbGwoKVxcXCIgdi1tb2RlbD1cXFwiY2hlY2tBbGxcXFwiIGNsYXNzPVxcXCJmb3JtLWNoZWNrLWlucHV0XFxcIiB0eXBlPVxcXCJjaGVja2JveFxcXCIvPiA8c3BhbiBzdHlsZT1cXFwicGFkZGluZy1sZWZ0Oi41ZW1cXFwiPkNoZWNrIEFsbDwvc3Bhbj48L2xhYmVsPjwvdGg+XFxyXFxuICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgIDx0aD48L3RoPlxcclxcbiAgICAgICAgICAgICAgICA8dGggY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIiBzdHlsZT1cXFwid2lkdGg6ODBweFxcXCI+PC90aD5cXHJcXG4gICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgPC90aGVhZD5cXHJcXG4gICAgICAgIDx0Ym9keT5cXHJcXG4gICAgICAgIDx0ciB2LWZvcj1cXFwiKHRvYyx0b2NJbmRleCkgaW4gaXRlbXNcXFwiIGNsYXNzPVxcXCJ0b2MtaXRlbVxcXCIgOmNsYXNzPVxcXCJ7b2RzOnRvY0luZGV4JTI9PTB9XFxcIiA6a2V5PVxcXCJ0b2NJbmRleFxcXCI+XFxyXFxuICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJmY2NcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgQGNsaWNrPVxcXCJ0Z1F1ZXVlKHRvY0luZGV4KVxcXCIgY2xhc3M9XFxcImZvcm0tY2hlY2staW5wdXRcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIiB2LW1vZGVsPVxcXCJjaGVja2VkUXVldWVzW3RvY0luZGV4XVxcXCIvPiBcXHJcXG4gICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZCBzdHlsZT1cXFwicGFkZGluZy1sZWZ0Oi41ZW1cXFwiPnt7dG9jLnRpdGxlfX08L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZCBjb2xzcGFuPVxcXCIyXFxcIiBzdHlsZT1cXFwidGV4dC1hbGlnbjogcmlnaHQ7XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPEZldGNoQnV0dG9uIEB1cGRhdGU9XFxcIm9uRmV0Y2hVcGRhdGUoJGV2ZW50KVxcXCIgXFxyXFxuICAgICAgICAgICAgICAgIDpzZWN0aW9uSW5kZXg9XFxcInNlY3Rpb25JbmRleFxcXCIgXFxyXFxuICAgICAgICAgICAgICAgIDp0b2NJbmRleD1cXFwidG9jSW5kZXhcXFwiIFxcclxcbiAgICAgICAgICAgICAgICA6dG9jPVxcXCJ0b2NcXFwiIFxcclxcbiAgICAgICAgICAgICAgICA6cXVldWU9XFxcImVuYWJsZVF1ZXVlXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgcmVmPVxcXCJmZXRjaEJ0bnNcXFwiLz5cXHJcXG4gICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgPC90cj5cXHJcXG4gICAgICAgIDwvdGJvZHk+XFxyXFxuICAgIDwvdGFibGU+XFxyXFxuICA8L2Rpdj5cXHJcXG48L3RlbXBsYXRlPlxcclxcbjxzY3JpcHQgbGFuZz1cXFwidHNcXFwiPlxcclxcbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmLCBQcm9wVHlwZSB9IGZyb20gJ3Z1ZSc7XFxyXFxuaW1wb3J0IEZldGNoQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvRmV0Y2hCdXR0b24udnVlJztcXHJcXG5pbXBvcnQgVG9jIGZyb20gJy4uLy4uL3R5cGVzL3RvYyc7XFxyXFxuXFxyXFxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcXHJcXG4gICAgY29tcG9uZW50czp7XFxyXFxuICAgICAgICBGZXRjaEJ1dHRvblxcclxcbiAgICB9LFxcclxcbiAgICBwcm9wczp7XFxyXFxuICAgICAgICBpdGVtczoge1xcclxcbiAgICAgICAgICAgIHJlcXVpcmVkIDogdHJ1ZSxcXHJcXG4gICAgICAgICAgICB0eXBlIDogQXJyYXkgYXMgUHJvcFR5cGU8VG9jW10+XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgc2VjdGlvbkluZGV4IDoge1xcclxcbiAgICAgICAgICAgIHJlcXVpZWQgOiB0cnVlLFxcclxcbiAgICAgICAgICAgIHR5cGUgOiBOdW1iZXJcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfSxcXHJcXG4gICAgc2V0dXAocHJvcHMpIHtcXHJcXG4gICAgICAgIGNvbnN0IGVuYWJsZVF1ZXVlID0gcmVmKGZhbHNlKTtcXHJcXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gcmVmKHByb3BzLml0ZW1zIGFzIFRvY1tdKTtcXHJcXG4gICAgICAgIGNvbnN0IHNlY3Rpb25JbmRleCA9IHJlZihwcm9wcy5zZWN0aW9uSW5kZXggYXMgbnVtYmVyKTtcXHJcXG4gICAgICAgIGNvbnN0IGNoZWNrQWxsID0gcmVmKGZhbHNlKTtcXHJcXG4gICAgICAgIGNvbnN0IGNoZWNrZWRRdWV1ZXMgPSByZWYoW10pO1xcclxcbiAgICAgICAgY29uc3QgZXhjbHVkZVF1ZXVlcyA9IHJlZihbXSk7XFxyXFxuICAgICAgICBsZXQgZmV0Y2hCdG5zID0gcmVmKFtdKTtcXHJcXG4gICAgICAgIHJldHVybiB7aXRlbXMsIHNlY3Rpb25JbmRleCwgY2hlY2tlZFF1ZXVlcywgZXhjbHVkZVF1ZXVlcyxmZXRjaEJ0bnMsY2hlY2tBbGwsZW5hYmxlUXVldWV9O1xcclxcbiAgICB9LFxcclxcbiAgICBtb3VudGVkKCl7XFxyXFxuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XFxyXFxuICAgICAgICAgICAgdGhpcy5jaGVja0FsbCA9IHRydWU7XFxyXFxuICAgICAgICAgICAgZm9yKGxldCB0b2NJbmRleCBpbiB0aGlzLml0ZW1zKXtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja2VkUXVldWVzW3RvY0luZGV4XSA9IHRydWU7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfSwyNTApO1xcclxcbiAgICB9LFxcclxcbiAgICBtZXRob2RzOntcXHJcXG4gICAgICAgIHRyaWdnZXJGYWlsZWRGZXRjaFF1ZXVlKHRvY0luZGV4Om51bWJlcil7XFxyXFxuICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLmZldGNoUXVldWUuYnRuU3RhdGU9NDtcXHJcXG4gICAgICAgICAgICB9LDEwMDApO1xcclxcbiAgICAgICAgICAgIFxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIGNhbGN1bGF0ZVBlcmNlbnRhZ2VRdWV1ZShjYWxsYmFjayl7XFxyXFxuICAgICAgICAgICAgY29uc3QgcGVhayA9IHRoaXMuZXhjbHVkZVF1ZXVlcy5sZW5ndGg7XFxyXFxuICAgICAgICAgICAgY29uc3QgbWF4UGVhayA9IHRoaXMuaXRlbXMubGVuZ3RoO1xcclxcbiAgICAgICAgICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSBNYXRoLnJvdW5kKHBlYWsgLyBtYXhQZWFrICogMTAwKTtcXHJcXG5cXHJcXG4gICAgICAgICAgICBpZignZnVuY3Rpb24nID09IHR5cGVvZiBjYWxsYmFjayl7XFxyXFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHBlcmNlbnRhZ2UscGVhayxtYXhQZWFrKTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgdHJpZ2dlckV4Y2x1ZGVGZXRjaFF1ZXVlKHRvY0luZGV4Om51bWJlciwgZmV0Y2hRdWV1ZUVuYWJsZWQ6Ym9vbGVhbil7XFxyXFxuICAgICAgICAgICAgY29uc29sZS5sb2codG9jSW5kZXgpO1xcclxcbiAgICAgICAgICAgIGlmKHRoaXMuZXhjbHVkZVF1ZXVlcy5pbmRleE9mKHRvY0luZGV4KSA9PSAtMSl7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuZXhjbHVkZVF1ZXVlcy5wdXNoKHRvY0luZGV4KTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgaWYoZmV0Y2hRdWV1ZUVuYWJsZWQpe1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZVBlcmNlbnRhZ2VRdWV1ZSgocGVyY2VudGFnZSk9PntcXHJcXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZldGNoUXVldWUuc2V0UHJvZ3Jlc3ModG9jSW5kZXgscGVyY2VudGFnZSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcGFyZW50LmZldGNoUXVldWVCYXJbdGhpcy5zZWN0aW9uSW5kZXhdLnNldFByb2dyZXNzKHRvY0luZGV4LHBlcmNlbnRhZ2UpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfSw1MDApO1xcclxcbiAgICAgICAgICAgICAgICB9KTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgdGhpcy5jaGVja2VkUXVldWVzW3RvY0luZGV4XSA9IGZhbHNlO1xcclxcbiAgICAgICAgICAgIHRoaXMuY2hlY2tBbGwgPSBmYWxzZTtcXHJcXG4gICAgICAgXFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgdHJpZ2dlckZldGNoUXVldWUodG9jSW5kZXg6bnVtYmVyKXtcXHJcXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0b2NJbmRleCk7XFxyXFxuICAgICAgICAgICAgY29uc3QgbmV4dFRvY0luZGV4ID0gdG9jSW5kZXggKyAxO1xcclxcbiAgICAgICAgICAgIGlmKG5leHRUb2NJbmRleCA8IHRoaXMuY2hlY2tlZFF1ZXVlcy5sZW5ndGgpe1xcclxcbiAgICAgICAgICAgICAgICAvLyBwcm9jZXNzIG5leHQgZmV0Y2ggYnV0dG9uXFxyXFxuICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICB0aGlzLmZldGNoQnRuc1tuZXh0VG9jSW5kZXhdLmZldGNoVG9jKHRydWUpO1xcclxcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygpO1xcclxcbiAgICAgICAgICAgIH1lbHNle1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZVBlcmNlbnRhZ2VRdWV1ZSgocGVyY2VudGFnZSk9PntcXHJcXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZldGNoUXVldWUuc2V0UHJvZ3Jlc3ModG9jSW5kZXgscGVyY2VudGFnZSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcGFyZW50LmZldGNoUXVldWVCYXJbdGhpcy5zZWN0aW9uSW5kZXhdLnNldFByb2dyZXNzKHRvY0luZGV4LHBlcmNlbnRhZ2UpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfSw1MDApO1xcclxcbiAgICAgICAgICAgICAgICB9KTtcXHJcXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mZXRjaFF1ZXVlLmJ0blN0YXRlPXRoaXMuZmV0Y2hRdWV1ZS5wZXJjZW50YWdlPT0xMDA/MzoxO1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mZXRjaFF1ZXVlLmxhc3RUb2NJbmRleD0wO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcGFyZW50LmZldGNoUXVldWVCYXJbdGhpcy5zZWN0aW9uSW5kZXhdLmJ0blN0YXRlPXRoaXMuJHBhcmVudC5mZXRjaFF1ZXVlQmFyW3RoaXMuc2VjdGlvbkluZGV4XS5wZXJjZW50YWdlPT0xMDA/MzoxO1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcGFyZW50LmZldGNoUXVldWVCYXJbdGhpcy5zZWN0aW9uSW5kZXhdLmxhc3RUb2NJbmRleD0wO1xcclxcbiAgICAgICAgICAgICAgICB9LDEwMDApO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAvLyBjYWxsaW5nIGZldGNoIGJ1dHRvbiBuZXh0IGluZGV4XFxyXFxuICAgICAgICAgICAgLy8gdGhpcy4kcmVmXFxyXFxuXFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgb25GZXRjaFVwZGF0ZSh0YXJnZXQ6YW55KXtcXHJcXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0YXJnZXQpXFxyXFxuICAgICAgICAgICAgdGhpcy4kZW1pdCgndXBkYXRlJyx0YXJnZXQpO1xcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIG9uQ2hlY2tBbGwoKXtcXHJcXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XFxyXFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY2hlY2tBbGwpO1xcclxcbiAgICAgICAgICAgICAgICBmb3IobGV0IHRvY0luZGV4IGluIHRoaXMuaXRlbXMpe1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja2VkUXVldWVzW3RvY0luZGV4XSA9IHRoaXMuY2hlY2tBbGw7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9LDI1MCk7XFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgdGdRdWV1ZSh0b2NJbmRleDpudW1iZXIpe1xcclxcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcXHJcXG4gICAgICAgICAgICAgICAgLy8gdGhpcy4kcmVmcy5mZXRjaEJ0bnNbdG9jSW5kZXhdLmlzUXVldWVkID10aGlzLmNoZWNrZWRRdWV1ZXNbdG9jSW5kZXhdO1xcclxcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLiRyZWZzLmZldGNoQnRucyk7XFxyXFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY2hlY2tlZFF1ZXVlc1t0b2NJbmRleF0pO1xcclxcbiAgICAgICAgICAgIH0sMjUwKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIFxcclxcbiAgICB9XFxyXFxufSlcXHJcXG48L3NjcmlwdD5cXHJcXG5cXHJcXG48c3R5bGUgc2NvcGVkPlxcclxcbnRkLmZjY3tcXHJcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICAgIHdpZHRoOjIuNWVtO1xcclxcbn1cXHJcXG51bC50b2MtaXRlbS1saXN0e1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOm5vbmU7XFxyXFxuICBtYXJnaW46MDtcXHJcXG4gIHBhZGRpbmc6MDtcXHJcXG59XFxyXFxudGFibGUudG9jLWl0ZW0tbGlzdHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbi50b2MtaXRlbS12aWV3e1xcclxcbiAgICBwYWRkaW5nOiAwIDJlbTtcXHJcXG4gICAgZm9udC1zaXplOiA4MCU7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxZW07XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcblxcclxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmZvcm0taGVscGVyW2RhdGEtdi03OTc2YzRmNF17XFxyXFxuICAgIGZvbnQtc2l6ZToxMnB4O1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbi5mb3JtLWxhYmVsW2RhdGEtdi03OTc2YzRmNF17XFxyXFxuICAgIG1hcmdpbi1yaWdodDouMjVlbTtcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3BvcHVwL3ZpZXdzL0Rvd25sb2FkUGFnZS52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQXlGRTtJQUNFLGNBQWM7SUFDZCxrQkFBa0I7QUFDcEI7QUFDQTtJQUNFLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJkb3dubG9hZC1wYWdlIHBhZ2VcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJkbC1jbnQgdGV4dC1jZW50ZXJcXFwiIHYtaWY9XFxcImNvdXJzZVxcXCI+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiZXhlcmNpc2UtZmlsZS1jbnRcXFwiIHYtaWY9XFxcImV4ZXJjaXNlRmlsZVxcXCI+XFxyXFxuICAgICAgICA8ZGl2PjxsYWJlbCBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+RXhlcmNpc2UgRmlsZTogPC9sYWJlbD48YSA6aHJlZj1cXFwiZXhlcmNpc2VGaWxlLnVybFxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPnt7ZXhlcmNpc2VGaWxlLm5hbWV9fTwvYT48L2Rpdj5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJkbC1jb25maWctY250XFxcIiB2LWlmPVxcXCJkb3dubG9hZENvbmZpZ1xcXCI+XFxyXFxuICAgICAgICA8ZGl2PjxsYWJlbCBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCI+U2V0IHZpZGVvIG91dHB1dCBmb3JtYXQgOiA8L2xhYmVsPiBcXHJcXG4gICAgICAgICAgPHNlbGVjdCB2LW1vZGVsPVxcXCJkb3dubG9hZENvbmZpZy5zZWxlY3RlZEZtdExpc3RcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIEBjaGFuZ2U9XFxcInVwZGF0ZVNlbGVjdGVkRm10KClcXFwiIHN0eWxlPVxcXCJ3aWR0aDoxMjBweDtkaXNwbGF5OmlubGluZVxcXCI+XFxyXFxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiXFxcIj4tLUNob29zZS0tPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgPG9wdGlvbiB2LWZvcj1cXFwiZm10IGluIGRvd25sb2FkQ29uZmlnLmZtdExpc3RcXFwiIDp2YWx1ZT1cXFwiZm10XFxcIj57e2ZtdH19PC9vcHRpb24+XFxyXFxuICAgICAgICAgIDwvc2VsZWN0PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZm9ybS1oZWxwZXJcXFwiPkF2YWlsYWJsZSB2aWRlbyBmb3JtYXQ6IHt7ZG93bmxvYWRDb25maWcuZm10TGlzdC5qb2luKCcsICcpfX08L3NwYW4+XFxyXFxuXFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiZGwtcGxheWxpc3QtY250XFxcIiB2LWlmPVxcXCJkb3dubG9hZENvbmZpZy5zZWxlY3RlZEZtdExpc3RcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj5QbGF5bGlzdCBGaWxlIDogPC9sYWJlbD48YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiPnt7Y291cnNlLnNsdWd9fS17e2Rvd25sb2FkQ29uZmlnLnNlbGVjdGVkRm10TGlzdH19Lm0zdTwvYT5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJkbC1wbGF5bGlzdC1jbnRcXFwiIHYtaWY9XFxcImRvd25sb2FkQ29uZmlnLnNlbGVjdGVkRm10TGlzdFxcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiPkhlbHBlciBTY3JpcHQgOiA8L2xhYmVsPjxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCI+e3tjb3Vyc2Uuc2x1Z319LXt7ZG93bmxvYWRDb25maWcuc2VsZWN0ZWRGbXRMaXN0fX0tdXRpbC5zaDwvYT5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJleGVyY2lzZS1maWxlLWNudFxcXCIgdi1pZj1cXFwiY291cnNlLnNvdXJjZUNvZGVSZXBvc2l0b3J5XFxcIj5cXHJcXG4gICAgICAgIDxkaXY+PGxhYmVsIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIj5Tb3VyY2UgUmVwb3NpdG9yeSA6IDwvbGFiZWw+IHt7Y291cnNlLnNvdXJjZUNvZGVSZXBvc2l0b3J5fX08L2Rpdj5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICA8L2Rpdj5cXHJcXG48L3RlbXBsYXRlPlxcclxcbjxzY3JpcHQgbGFuZz1cXFwidHNcXFwiPlxcclxcbmltcG9ydCB7IENvdXJzZV90YWJsZUZpZWxkLCBEb3dubG9hZENvbmZpZ190YWJsZUZpZWxkLCBFeGVyY2lzZUZpbGVfdGFibGVGaWVsZCB9IGZyb20gJy4uLy4uL3R5cGVzL3RhYmxlRmllbGRzJztcXHJcXG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIFByb3BUeXBlLCByZWYgfSBmcm9tICd2dWUnO1xcclxcbmltcG9ydCBTdG9yZSBmcm9tICcuLi8uLi9saWJzL3N0b3JlJztcXHJcXG5cXHJcXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xcclxcbiAgZGF0YSgpIHtcXHJcXG4gICAgcmV0dXJuIHtcXHJcXG4gICAgICBuYXY6ICdkb3dubG9hZHMnXFxyXFxuICAgIH1cXHJcXG4gIH0sXFxyXFxuICBwcm9wczp7XFxyXFxuICAgIGNvdXJzZSA6IHtcXHJcXG4gICAgICByZXF1aXJlZCA6IGZhbHNlLFxcclxcbiAgICAgIHR5cGUgOiBPYmplY3QgYXMgUHJvcFR5cGU8Q291cnNlX3RhYmxlRmllbGQ+XFxyXFxuICAgIH1cXHJcXG4gIH0sXFxyXFxuICBzZXR1cCgpe1xcclxcbiAgICBjb25zdCBjb3Vyc2UgPSByZWY8Q291cnNlX3RhYmxlRmllbGQ+KCk7XFxyXFxuICAgIGNvbnN0IGV4ZXJjaXNlRmlsZSA9IHJlZjxFeGVyY2lzZUZpbGVfdGFibGVGaWVsZD4oKTtcXHJcXG4gICAgY29uc3QgZG93bmxvYWRDb25maWcgPSByZWY8RG93bmxvYWRDb25maWdfdGFibGVGaWVsZD4oKTtcXHJcXG4gICAgcmV0dXJue1xcclxcbiAgICAgIGNvdXJzZSwgZXhlcmNpc2VGaWxlLCBkb3dubG9hZENvbmZpZ1xcclxcbiAgICB9O1xcclxcbiAgfSxcXHJcXG4gIG1vdW50ZWQoKXtcXHJcXG4gICAgdGhpcy5sb2FkRG93bmxvYWREYXRhKCk7XFxyXFxuICB9LFxcclxcbiAgbWV0aG9kczp7XFxyXFxuICAgIHVwZGF0ZVNlbGVjdGVkRm10KCl7XFxyXFxuICAgICAgU3RvcmUudXBkYXRlRG93bmxvYWRDb25maWcoJ3NlbGVjdGVkRm10TGlzdCcsdGhpcy5kb3dubG9hZENvbmZpZy5zZWxlY3RlZEZtdExpc3QsdGhpcy5jb3Vyc2UuSUQpO1xcclxcbiAgICB9LFxcclxcbiAgICBpc1ZhbGlkQ291cnNlKCl7XFxyXFxuICAgICAgaWYoIXRoaXMuY291cnNlKXtcXHJcXG4gICAgICAgIHJldHVybiBmYWxzZTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgaWYodHlwZW9mIHRoaXMuY291cnNlLklEID09PSAndW5kZWZpbmVkJyl7XFxyXFxuICAgICAgICByZXR1cm4gZmFsc2U7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIHJldHVybiB0cnVlO1xcclxcbiAgICB9LFxcclxcbiAgICBsb2FkRG93bmxvYWREYXRhKCl7XFxyXFxuICAgICAgaWYoIXRoaXMuaXNWYWxpZENvdXJzZSgpKXtcXHJcXG4gICAgICAgIGNvbnN0IGFwcEluZm8gPSBTdG9yZS5nZXRBcHBJbmZvKCk7XFxyXFxuICAgICAgICAvLyBjb25zb2xlLmxvZyhhcHBJbmZvKVxcclxcbiAgICAgICAgdGhpcy5jb3Vyc2UgPSBTdG9yZS5nZXRDb3Vyc2UoYXBwSW5mby5sYXN0Q291cnNlU2x1Zyk7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIFN0b3JlLnNldEFwcFN0YXRlKDEsdGhpcy5jb3Vyc2Uuc2x1Zyk7XFxyXFxuXFxyXFxuICAgICAgLy8gbG9hZCBleHJjaXNlIGZpbGVcXHJcXG4gICAgICB0aGlzLmV4ZXJjaXNlRmlsZSA9IFN0b3JlLmdldEV4ZXJjaXNlRmlsZSh0aGlzLmNvdXJzZS5JRCk7XFxyXFxuXFxyXFxuICAgICAgLy8gbG9hZCBkb3dubG9hZCBDb25maWdcXHJcXG4gICAgICB0aGlzLmRvd25sb2FkQ29uZmlnID0gU3RvcmUuZ2V0RG93bmxvYWRDb25maWcodGhpcy5jb3Vyc2UuSUQpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICB9XFxyXFxufSlcXHJcXG48L3NjcmlwdD5cXHJcXG5cXHJcXG48c3R5bGUgc2NvcGVkPlxcclxcbiAgLmZvcm0taGVscGVye1xcclxcbiAgICBmb250LXNpemU6MTJweDtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgfVxcclxcbiAgLmZvcm0tbGFiZWx7XFxyXFxuICAgIG1hcmdpbi1yaWdodDouMjVlbTtcXHJcXG4gIH1cXHJcXG48L3N0eWxlPlxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiNwb3B1cCB7XFxyXFxuICAgIHdpZHRoIDogNjgwcHg7XFxyXFxuLyogICAgbWluLWhlaWdodDogNDgwcHg7Ki9cXHJcXG4gICAgcGFkZGluZzogMWVtIDA7XFxyXFxuICAgIGJvcmRlcjogc29saWQgMXB4ICNkZGQ7XFxyXFxufVxcclxcblxcclxcbi5wYWdle1xcclxcbiAgbWFyZ2luIDowIDFlbTtcXHJcXG4gIHBhZGRpbmc6IDFlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbi5jb3Vyc2UtcGFnZSAuY291cnNle1xcclxcbiAgbWFyZ2luLWJvdHRvbToxZW07XFxyXFxufVxcclxcbi5jb3Vyc2UtcGFnZSAuY291cnNlLXNlY3Rpb257XFxyXFxuICBwYWRkaW5nOi41ZW0gMDtcXHJcXG59XFxyXFxuLmNvdXJzZS1wYWdlIC5hY2NvcmRpb24tYnV0dG9uOmZvY3VzIHtcXHJcXG4gICAgei1pbmRleDogMztcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgb3V0bGluZTogMDtcXHJcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG59XFxyXFxuLmNvdXJzZS1wYWdlIC5hY2NvcmRpb24tYnV0dG9uOm5vdCguY29sbGFwc2VkKSB7XFxyXFxuICAgIGNvbG9yOiBpbmhlcml0OyBcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7IFxcclxcbn1cXHJcXG4uY291cnNlLXBhZ2UgLmFjY29yZGlvbi1idXR0b246bm90KC5jb2xsYXBzZWQpLFxcclxcbi5jb3Vyc2UtcGFnZSAuYWNjb3JkaW9uLWJ1dHRvbi5jb2xsYXBzZWQsXFxyXFxuLmNvdXJzZS1wYWdlIC5hY2NvcmRpb24tYnV0dG9uOm5vdCguY29sbGFwc2VkKTo6YWZ0ZXIsXFxyXFxuLmNvdXJzZS1wYWdlIC5hY2NvcmRpb24tYnV0dG9uLmNvbGxhcHNlZDo6YWZ0ZXJ7XFxyXFxuICBiYWNrZ3JvdW5kOm5vbmU7XFxyXFxufVxcclxcbi5jb3Vyc2UtcGFnZSAuYWNjb3JkaW9uLWJ1dHRvbi5jdXN0b20ge1xcclxcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDI0cHg7XFxyXFxuICAgIHBhZGRpbmc6IDBweCA2cHg7XFxyXFxuICAgIGxlZnQ6IDQycHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDNweDtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcclxcbiB9XFxyXFxuIC5jb3Vyc2UtcGFnZSAuYWNjb3JkaW9uLWJvZHl7XFxyXFxuICBwYWRkaW5nOjA7XFxyXFxuIH1cXHJcXG5cXHJcXG4ud2VsY29tZS1wYWdlIC5hY3Rpb24tY250e1xcclxcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XFxyXFxuICBwYWRkaW5nOi41ZW07XFxyXFxufVxcclxcbi53ZWxjb21lLXBhZ2UgLmJ0bi1jbnR7XFxyXFxuICBtYXJnaW46MWVtO1xcclxcbn1cXHJcXG4ud2VsY29tZS1wYWdle1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuI3BvcHVwID4gLmFwcC1jb250YWluZXIgPiAuY29uc29sZXtcXHJcXG4gbWFyZ2luLWJvdHRvbTogLTMzcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2UtbmF2aWdhdGlvbiB1bC5idG4tZ3JvdXB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3BvcHVwLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7QUFDakIseUJBQXlCO0lBQ3JCLGNBQWM7SUFDZCxzQkFBc0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtJQUNJLFVBQVU7SUFDVix5QkFBeUI7SUFDekIsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksY0FBYztJQUNkLDZCQUE2QjtJQUM3QixnQkFBZ0I7QUFDcEI7QUFDQTs7OztFQUlFLGVBQWU7QUFDakI7QUFDQTtBQUNBLGtCQUFrQjtJQUNkLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZUFBZTtDQUNsQjtDQUNBO0VBQ0MsU0FBUztDQUNWOztBQUVEO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtDQUNDLG9CQUFvQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNwb3B1cCB7XFxyXFxuICAgIHdpZHRoIDogNjgwcHg7XFxyXFxuLyogICAgbWluLWhlaWdodDogNDgwcHg7Ki9cXHJcXG4gICAgcGFkZGluZzogMWVtIDA7XFxyXFxuICAgIGJvcmRlcjogc29saWQgMXB4ICNkZGQ7XFxyXFxufVxcclxcblxcclxcbi5wYWdle1xcclxcbiAgbWFyZ2luIDowIDFlbTtcXHJcXG4gIHBhZGRpbmc6IDFlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbi5jb3Vyc2UtcGFnZSAuY291cnNle1xcclxcbiAgbWFyZ2luLWJvdHRvbToxZW07XFxyXFxufVxcclxcbi5jb3Vyc2UtcGFnZSAuY291cnNlLXNlY3Rpb257XFxyXFxuICBwYWRkaW5nOi41ZW0gMDtcXHJcXG59XFxyXFxuLmNvdXJzZS1wYWdlIC5hY2NvcmRpb24tYnV0dG9uOmZvY3VzIHtcXHJcXG4gICAgei1pbmRleDogMztcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgb3V0bGluZTogMDtcXHJcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG59XFxyXFxuLmNvdXJzZS1wYWdlIC5hY2NvcmRpb24tYnV0dG9uOm5vdCguY29sbGFwc2VkKSB7XFxyXFxuICAgIGNvbG9yOiBpbmhlcml0OyBcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7IFxcclxcbn1cXHJcXG4uY291cnNlLXBhZ2UgLmFjY29yZGlvbi1idXR0b246bm90KC5jb2xsYXBzZWQpLFxcclxcbi5jb3Vyc2UtcGFnZSAuYWNjb3JkaW9uLWJ1dHRvbi5jb2xsYXBzZWQsXFxyXFxuLmNvdXJzZS1wYWdlIC5hY2NvcmRpb24tYnV0dG9uOm5vdCguY29sbGFwc2VkKTo6YWZ0ZXIsXFxyXFxuLmNvdXJzZS1wYWdlIC5hY2NvcmRpb24tYnV0dG9uLmNvbGxhcHNlZDo6YWZ0ZXJ7XFxyXFxuICBiYWNrZ3JvdW5kOm5vbmU7XFxyXFxufVxcclxcbi5jb3Vyc2UtcGFnZSAuYWNjb3JkaW9uLWJ1dHRvbi5jdXN0b20ge1xcclxcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDI0cHg7XFxyXFxuICAgIHBhZGRpbmc6IDBweCA2cHg7XFxyXFxuICAgIGxlZnQ6IDQycHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDNweDtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcclxcbiB9XFxyXFxuIC5jb3Vyc2UtcGFnZSAuYWNjb3JkaW9uLWJvZHl7XFxyXFxuICBwYWRkaW5nOjA7XFxyXFxuIH1cXHJcXG5cXHJcXG4ud2VsY29tZS1wYWdlIC5hY3Rpb24tY250e1xcclxcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XFxyXFxuICBwYWRkaW5nOi41ZW07XFxyXFxufVxcclxcbi53ZWxjb21lLXBhZ2UgLmJ0bi1jbnR7XFxyXFxuICBtYXJnaW46MWVtO1xcclxcbn1cXHJcXG4ud2VsY29tZS1wYWdle1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuI3BvcHVwID4gLmFwcC1jb250YWluZXIgPiAuY29uc29sZXtcXHJcXG4gbWFyZ2luLWJvdHRvbTogLTMzcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2UtbmF2aWdhdGlvbiB1bC5idG4tZ3JvdXB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzhdLnVzZVswXSEuL0ZldGNoUXVldWVCYXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OTA1YWVjNDImc2NvcGVkPXRydWUmbGFuZz1jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHA7XG5cbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0udXNlWzBdIS4vRmV0Y2hRdWV1ZUJhci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD05MDVhZWM0MiZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0udXNlWzBdIS4vRmV0Y2hRdWV1ZUJhci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD05MDVhZWM0MiZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s4XS51c2VbMF0hLi9GZXRjaFNlY3Rpb25RdWV1ZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02YWZkYTY0OSZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s4XS51c2VbMF0hLi9GZXRjaFNlY3Rpb25RdWV1ZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02YWZkYTY0OSZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0udXNlWzBdIS4vRmV0Y2hTZWN0aW9uUXVldWUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmFmZGE2NDkmc2NvcGVkPXRydWUmbGFuZz1jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0udXNlWzBdIS4vTG9nQmFyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVjOGEyODdjJnNjb3BlZD10cnVlJmxhbmc9Y3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzhdLnVzZVswXSEuL0xvZ0Jhci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01YzhhMjg3YyZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0udXNlWzBdIS4vTG9nQmFyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVjOGEyODdjJnNjb3BlZD10cnVlJmxhbmc9Y3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzhdLnVzZVswXSEuL1RvY0l0ZW0udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2MzNTc0ZmUmc2NvcGVkPXRydWUmbGFuZz1jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHA7XG5cbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0udXNlWzBdIS4vVG9jSXRlbS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zYzM1NzRmZSZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0udXNlWzBdIS4vVG9jSXRlbS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zYzM1NzRmZSZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s4XS51c2VbMF0hLi9Eb3dubG9hZFBhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Nzk3NmM0ZjQmc2NvcGVkPXRydWUmbGFuZz1jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHA7XG5cbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0udXNlWzBdIS4vRG93bmxvYWRQYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc5NzZjNGY0JnNjb3BlZD10cnVlJmxhbmc9Y3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s4XS51c2VbMF0hLi9Eb3dubG9hZFBhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Nzk3NmM0ZjQmc2NvcGVkPXRydWUmbGFuZz1jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcG9wdXAuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BvcHVwLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcG9wdXAuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IFBhZ2VOYXZpZ2F0aW9uIGZyb20gJy4vY29tcG9uZW50cy9QYWdlTmF2aWdhdGlvbi52dWUnO1xuaW1wb3J0IFdlbGNvbWVQYWdlIGZyb20gJy4vdmlld3MvV2VsY29tZVBhZ2UudnVlJztcbmltcG9ydCBDb3Vyc2VQYWdlIGZyb20gJy4vdmlld3MvQ291cnNlUGFnZS52dWUnO1xuaW1wb3J0IERvd25sb2FkUGFnZSBmcm9tICcuL3ZpZXdzL0Rvd25sb2FkUGFnZS52dWUnO1xuaW1wb3J0IEFib3V0UGFnZSBmcm9tICcuL3ZpZXdzL0Fib3V0UGFnZS52dWUnO1xuaW1wb3J0IEhlbHBQYWdlIGZyb20gJy4vdmlld3MvSGVscFBhZ2UudnVlJztcbmltcG9ydCBTdG9yZSBmcm9tICcuLi9saWJzL3N0b3JlJztcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gICAgbmFtZTogJ1BvcHVwJyxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIFBhZ2VOYXZpZ2F0aW9uLFxuICAgICAgICBXZWxjb21lUGFnZSxcbiAgICAgICAgQ291cnNlUGFnZSxcbiAgICAgICAgRG93bmxvYWRQYWdlLFxuICAgICAgICBBYm91dFBhZ2UsXG4gICAgICAgIEhlbHBQYWdlXG4gICAgfSxcbiAgICBzZXR1cCgpIHtcbiAgICAgICAgY29uc3QgbmF2ID0gcmVmKCd3ZWxjb21lJyk7XG4gICAgICAgIGNvbnN0IGNvdXJzZSA9IHJlZigpO1xuICAgICAgICBjb25zdCBvbk5hdlVwZGF0ZSA9ICh0YXJnZXQpID0+IHtcbiAgICAgICAgICAgIG5hdi52YWx1ZSA9IHRhcmdldDtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgb25Db3Vyc2VVcGRhdGUgPSAodGFyZ2V0KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0YXJnZXQpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gcmVmKCcnKTtcbiAgICAgICAgY29uc3QgYXBwID0gcmVmKCk7XG4gICAgICAgIHJldHVybiB7IG5hdiwgY291cnNlLCBvbk5hdlVwZGF0ZSwgb25Db3Vyc2VVcGRhdGUsIG1lc3NhZ2UsIGFwcCB9O1xuICAgIH0sXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0FwcCBFbnRyeSBQb2ludCBTdGFydCBoZXJlLi4uJyk7XG4gICAgICAgIC8vIFN0b3JlLnByZXBhcmVBcHBTdG9yYWdlKCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGIgPSBTdG9yZS5kYigpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGIpO1xuICAgICAgICAgICAgZGIuc3Vic2NyaWJlKCdhcHAnLCAocm93KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHAgPSByb3c7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2coYEFwcFN0YXRlOiR7cm93LnN0YXRlfWApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBsb2cobWVzc2FnZSkge1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0Q291cnNlKGNvdXJzZSkge1xuICAgICAgICAgICAgdGhpcy5jb3Vyc2UgPSBjb3Vyc2U7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdiA9IHRoaXMuJHJlZnMucGFnZU5hdmlnYXRpb24ubmF2ID0gJ2NvdXJzZSc7XG4gICAgICAgICAgICB9LCAyNTApO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iLCJpbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgUHJveHkgZnJvbSAnLi4vLi4vbGlicy9wcm94eSc7XG5pbXBvcnQgalF1ZXJ5IGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgeyBmaW5kSXRlbXMsIGZpbmREUywgZ2V0Rm10IH0gZnJvbSAnLi4vLi4vbGlicy91dGlscyc7XG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICAgIHByb3BzOiB7XG4gICAgICAgIHRvYzoge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiBPYmplY3RcbiAgICAgICAgfSxcbiAgICAgICAgc2VjdGlvbkluZGV4OiB7XG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6IE51bWJlclxuICAgICAgICB9LFxuICAgICAgICB0b2NJbmRleDoge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXJcbiAgICAgICAgfSxcbiAgICAgICAgcXVldWU6IHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW5cbiAgICAgICAgfVxuICAgIH0sXG4gICAgc2V0dXAocHJvcHMpIHtcbiAgICAgICAgY29uc3QgZmV0Y2hRdWV1ZUVuYWJsZWQgPSByZWYocHJvcHMucXVldWUpO1xuICAgICAgICBjb25zdCB0b2MgPSByZWYocHJvcHMudG9jKTtcbiAgICAgICAgY29uc3Qgc2VjdGlvbkluZGV4ID0gcmVmKHByb3BzLnNlY3Rpb25JbmRleCk7XG4gICAgICAgIGNvbnN0IHRvY0luZGV4ID0gcmVmKHByb3BzLnRvY0luZGV4KTtcbiAgICAgICAgbGV0IGV4ZXJjaXNlRmlsZSA9IHJlZih7IG5hbWU6ICcnLCB1cmw6ICcnIH0pO1xuICAgICAgICBjb25zdCBidG5TdGF0ZSA9IHJlZigxKTtcbiAgICAgICAgcmV0dXJuIHsgdG9jLCBzZWN0aW9uSW5kZXgsIHRvY0luZGV4LCBleGVyY2lzZUZpbGUsIGJ0blN0YXRlLCBmZXRjaFF1ZXVlRW5hYmxlZCB9O1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBpc1F1ZXVlZCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZldGNoUXVldWVFbmFibGVkID8gKHRoaXMuJHBhcmVudC5jaGVja2VkUXVldWVzW3RoaXMudG9jSW5kZXhdICYmIHRoaXMuJHBhcmVudC5leGNsdWRlUXVldWVzLmluZGV4T2YodGhpcy50b2NJbmRleCkgPT0gLTEpIDogKHRoaXMuYnRuU3RhdGUgPT0gMSB8fCB0aGlzLmJ0blN0YXRlID09IDQpO1xuICAgICAgICB9LFxuICAgICAgICBmZXRjaFRvYygpIHtcbiAgICAgICAgICAgIC8vIDAuIGNoZWNrIGlmIHF1ZXVlc1xuICAgICAgICAgICAgY29uc3QgaXNRdWV1ZWQgPSB0aGlzLmlzUXVldWVkKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaXNRdWV1ZWQ6JywgaXNRdWV1ZWQpO1xuICAgICAgICAgICAgaWYgKGlzUXVldWVkKSB7XG4gICAgICAgICAgICAgICAgLy8gMS4gc2V0IGJ0biBzdGF0ZSBpY29uIHRvIFtsb2FkaW5nXVxuICAgICAgICAgICAgICAgIHRoaXMuYnRuU3RhdGUgPSAyO1xuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHVybCA9ICcvY29udGVudC5odG1sP3JhbmQ9JysoTWF0aC5yYW5kb20oKS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSB0aGlzLnRvYy51cmw7XG4gICAgICAgICAgICAgICAgUHJveHkuZ2V0KHVybCwgKHJlc3BvbnNlVGV4dCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsaWRSZXNvdXJjZSA9IHRoaXMucGFyc2VUb2MocmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkUmVzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDMuIHNldCBidG4gc3RhdGUgdG8gW2NoZWNrZWRdXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0blN0YXRlID0gMztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZScsIHsgc3JjOiAnUG9wdXAuQ291cnNlUGFnZS5Ub2NJdGVtLkZldGNoQnV0dG9uJywgdG9jOiB0aGlzLnRvYywgZXhlcmNpc2VGaWxlOiB0aGlzLmV4ZXJjaXNlRmlsZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZldGNoUXVldWVFbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1F1ZXVlIENvbXBsZXRlOiB0cmlnZ2VyaW5nIG5leHQgZmV0Y2hUb2MgZnJvbSBwYXJlbnQsIGxhc3RUb2NJbmRleDonLCB0aGlzLnRvY0luZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQudHJpZ2dlckZldGNoUXVldWUodGhpcy50b2NJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLiRwYXJlbnQudHJpZ2dlckZldGNoUXVldWUodGhpcy50b2NJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhZGRUb1BhcmVudCBleGNsdWRlUXVldWVcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHBhcmVudC50cmlnZ2VyRXhjbHVkZUZldGNoUXVldWUodGhpcy50b2NJbmRleCwgdGhpcy5mZXRjaFF1ZXVlRW5hYmxlZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAzLiBzZXQgYnRuIHN0YXRlIHRvIGljb24gW3JldHJ5XVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5TdGF0ZSA9IDQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5mZXRjaFF1ZXVlRW5hYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHBhcmVudC50cmlnZ2VyRmFpbGVkRmV0Y2hRdWV1ZSh0aGlzLnRvY0luZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUXVldWUgRmFpbGVkOiB0cmlnZ2VyaW5nIGZldGNoVG9jIGZyb20gRmV0Y2hCdXR0b24sIGxhc3RUb2NJbmRleDonLCB0aGlzLnRvY0luZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIChyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIDMuIHNldCBidG4gc3RhdGUgdG8gaWNvbiBbcmV0cnldXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuU3RhdGUgPSA0O1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5mZXRjaFF1ZXVlRW5hYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcGFyZW50LnRyaWdnZXJGYWlsZWRGZXRjaFF1ZXVlKHRoaXMudG9jSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1F1ZXVlIEZhaWxlZDogdHJpZ2dlcmluZyBmZXRjaFRvYyBmcm9tIEZldGNoQnV0dG9uLCBsYXN0VG9jSW5kZXg6JywgdGhpcy50b2NJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZldGNoUXVldWVFbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHBhcmVudC50cmlnZ2VyRmV0Y2hRdWV1ZSh0aGlzLnRvY0luZGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8vIFJlYnVpbGQgdG9jIGRhdGEgdG8gcG9wdWxhdGUgXG4gICAgICAgIC8vIFN0cmVhbUxvY2F0aW9uc1xuICAgICAgICAvLyBFeGVyY2lzZUZpbGVcbiAgICAgICAgcGFyc2VUb2MocmVzcG9uc2VUZXh0KSB7XG4gICAgICAgICAgICBsZXQgdmFsaWRSZXNvdXJjZSA9IGZhbHNlO1xuICAgICAgICAgICAgY29uc3QgZWxEaXYgPSBqUXVlcnkoYDxkaXY+JHtyZXNwb25zZVRleHR9PC9kaXY+YCk7XG4gICAgICAgICAgICBjb25zdCBlbENvZGVzID0gZWxEaXYuZmluZCgnY29kZScpO1xuICAgICAgICAgICAgbGV0IGRhdGFDb2RlcyA9IFtdO1xuICAgICAgICAgICAgbGV0IHRvYyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMudG9jKTtcbiAgICAgICAgICAgIHRvYy5zdHJlYW1Mb2NhdGlvbnMgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGNvZGVJbmRleCBpbiBlbENvZGVzKSB7XG4gICAgICAgICAgICAgICAgbGV0IGVsQ29kZSA9IGVsQ29kZXNbY29kZUluZGV4XTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWxDb2RlLmlkLm1hdGNoKC9eYnByLWd1aWQvKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUNvZGVzLnB1c2goSlNPTi5wYXJzZShlbENvZGUudGV4dENvbnRlbnQpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkgeyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGF0YUNvZGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhQ29kZXMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlYXJjaFRlcm1zID0gW1xuICAgICAgICAgICAgICAgICAgICBcImNvbS5saW5rZWRpbi5sZWFybmluZy5hcGkuZGVjby5jb250ZW50LkV4ZXJjaXNlRmlsZVwiLFxuICAgICAgICAgICAgICAgICAgICBcImNvbS5saW5rZWRpbi52aWRlb2NvbnRlbnQuVHJhbnNjcmlwdFwiLFxuICAgICAgICAgICAgICAgICAgICBcImNvbS5saW5rZWRpbi52aWRlb2NvbnRlbnQuU3RyZWFtaW5nTG9jYXRpb25cIlxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgc2VhcmNoVGVybUlkeCA9IDA7IHNlYXJjaFRlcm1JZHggPCBzZWFyY2hUZXJtcy5sZW5ndGg7IHNlYXJjaFRlcm1JZHgrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFRlcm1zW3NlYXJjaFRlcm1JZHhdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHRzID0gZmluZEl0ZW1zKHF1ZXJ5LCBkYXRhQ29kZXMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VhcmNoVGVybUlkeCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBleGVyY2lzZUZpbGVcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXhlcmNpc2VGaWxlT2JqID0gZmluZERTKCckdHlwZScsICdjb20ubGlua2VkaW4ubGVhcm5pbmcuYXBpLmRlY28uY29udGVudC5FeGVyY2lzZUZpbGUnLCByZXN1bHRzLCBbJ3NpemVJbkJ5dGVzJywgJ25hbWUnLCAndXJsJ10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXhlcmNpc2VGaWxlID0gZXhlcmNpc2VGaWxlT2JqO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHsgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNlYXJjaFRlcm1JZHggPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdHJhbnNjcmlwdFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdHJhbnNjcmlwdE9iaiA9IGZpbmREUygnJHR5cGUnLCBcImNvbS5saW5rZWRpbi52aWRlb2NvbnRlbnQuVHJhbnNjcmlwdFwiLCByZXN1bHRzLCBbJ2NhcHRpb25GaWxlJywgJ2NhcHRpb25Gb3JtYXQnXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJ29iamVjdCcgPT09IHR5cGVvZiB0cmFuc2NyaXB0T2JqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9jLmNhcHRpb25VcmwgPSB0cmFuc2NyaXB0T2JqLmNhcHRpb25GaWxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYy5jYXB0aW9uRm10ID0gdHJhbnNjcmlwdE9iai5jYXB0aW9uRm9ybWF0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWFyY2hUZXJtSWR4ID09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0cmVhbUxvY2F0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RyZWFtTG9jYXRpb25PYmpzID0gZmluZERTKCckdHlwZScsIFwiY29tLmxpbmtlZGluLnZpZGVvY29udGVudC5TdHJlYW1pbmdMb2NhdGlvblwiLCByZXN1bHRzLCBbJ2V4cGlyZXNBdCcsICd1cmwnXSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RyZWFtTG9jYXRpb25PYmpzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBzdGxJZHggaW4gc3RyZWFtTG9jYXRpb25PYmpzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IHN0cmVhbUxvY2F0aW9uT2Jqc1tzdGxJZHhdLnVybDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm10ID0gZ2V0Rm10KHVybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYy5zdHJlYW1Mb2NhdGlvbnMucHVzaCh7IHVybCwgZm10IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0b2MuY2FwdGlvblVybC5sZW5ndGggPiAwICYmIHRvYy5zdHJlYW1Mb2NhdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHZhbGlkUmVzb3VyY2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMudG9jID0gdG9jO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbGlkUmVzb3VyY2U7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiIsImltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJztcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gICAgcHJvcHM6IHtcbiAgICAgICAgc2VjdGlvbkluZGV4OiB7XG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6IE51bWJlclxuICAgICAgICB9XG4gICAgfSxcbiAgICBzZXR1cChwcm9wcykge1xuICAgICAgICBsZXQgcXVldWVTbHVncyA9IHJlZihbXSk7XG4gICAgICAgIGxldCBleGNsdWRlU2x1Z3MgPSByZWYoW10pO1xuICAgICAgICBsZXQgcGVyY2VudGFnZSA9IHJlZigwKTtcbiAgICAgICAgbGV0IGJ0blN0YXRlID0gcmVmKDEpO1xuICAgICAgICBsZXQgbGFzdFRvY0luZGV4ID0gcmVmKDApO1xuICAgICAgICBjb25zdCBzZWN0aW9uSW5kZXggPSByZWYocHJvcHMuc2VjdGlvbkluZGV4KTtcbiAgICAgICAgcmV0dXJuIHsgcXVldWVTbHVncywgZXhjbHVkZVNsdWdzLCBwZXJjZW50YWdlLCBidG5TdGF0ZSwgbGFzdFRvY0luZGV4LCBzZWN0aW9uSW5kZXggfTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgc2V0UHJvZ3Jlc3MobGFzdFRvY0luZGV4LCBwZXJjZW50YWdlKSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RUb2NJbmRleCA9IGxhc3RUb2NJbmRleDtcbiAgICAgICAgICAgIHRoaXMucGVyY2VudGFnZSA9IHBlcmNlbnRhZ2U7XG4gICAgICAgICAgICBpZiAocGVyY2VudGFnZSA9PSAxMDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ0blN0YXRlID0gMztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJHBhcmVudC5mZXRjaFNlY3Rpb25RdWV1ZS5yZXBvcnQodGhpcy5zZWN0aW9uSW5kZXgsIGxhc3RUb2NJbmRleCwgMCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwZXJjZW50YWdlKTtcbiAgICAgICAgfSxcbiAgICAgICAgc3RhcnRRdWV1ZSgpIHtcbiAgICAgICAgICAgIHRoaXMucGVyY2VudGFnZSA9IHRoaXMucGVyY2VudGFnZSA9PSAwID8gMSA6IHRoaXMucGVyY2VudGFnZTtcbiAgICAgICAgICAgIHRoaXMuYnRuU3RhdGUgPSAyO1xuICAgICAgICAgICAgdGhpcy4kcGFyZW50LnRvY0l0ZW1zW3RoaXMuc2VjdGlvbkluZGV4XS50cmlnZ2VyRmV0Y2hRdWV1ZSh0aGlzLmxhc3RUb2NJbmRleCA9PSAwID8gLTEgOiB0aGlzLmxhc3RUb2NJbmRleCk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiIsImltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJztcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gICAgc2V0dXAoKSB7XG4gICAgICAgIGNvbnN0IHF1ZXVlU2x1Z3MgPSByZWYoW10pO1xuICAgICAgICBjb25zdCBidG5TdGF0ZSA9IHJlZigxKTtcbiAgICAgICAgY29uc3QgcGVyY2VudGFnZSA9IHJlZigwKTtcbiAgICAgICAgY29uc3QgbGFzdFNlY3Rpb25JbmRleCA9IHJlZigwKTtcbiAgICAgICAgY29uc3Qgc2VjdGlvbkluZGV4UXVldWVzID0gcmVmKFtdKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHF1ZXVlU2x1Z3MsXG4gICAgICAgICAgICBidG5TdGF0ZSxcbiAgICAgICAgICAgIHBlcmNlbnRhZ2UsXG4gICAgICAgICAgICBsYXN0U2VjdGlvbkluZGV4LFxuICAgICAgICAgICAgc2VjdGlvbkluZGV4UXVldWVzXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBtb3VudGVkKCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VjdGlvbkluZGV4UXVldWVzID0gT2JqZWN0LmtleXModGhpcy4kcGFyZW50LnNlY3Rpb25zKTtcbiAgICAgICAgfSwgMjUwKTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgdG9KU09OU3RyKG9iaikge1xuICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iaik7XG4gICAgICAgIH0sXG4gICAgICAgIGNhbGN1bGF0ZVBlcmNlbnRhZ2VRdWV1ZShjYWxsYmFjaykge1xuICAgICAgICAgICAgY29uc3QgcGVhayA9IHRoaXMucXVldWVTbHVncy5sZW5ndGg7XG4gICAgICAgICAgICBjb25zdCBtYXhQZWFrID0gdGhpcy4kcGFyZW50LmdldFRvdGFsVG9jcygpO1xuICAgICAgICAgICAgY29uc3QgcGVyY2VudGFnZSA9IE1hdGgucm91bmQocGVhayAvIG1heFBlYWsgKiAxMDApO1xuICAgICAgICAgICAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2socGVyY2VudGFnZSwgcGVhaywgbWF4UGVhayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJlcG9ydChzZWN0aW9uSW5kZXgsIHRvY0luZGV4LCBzdGF0dXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlY3Rpb24gPSB0aGlzLiRwYXJlbnQuc2VjdGlvbnNbc2VjdGlvbkluZGV4XTtcbiAgICAgICAgICAgIGNvbnN0IHNsdWcgPSBzZWN0aW9uLml0ZW1zW3RvY0luZGV4XS5zbHVnO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnF1ZXVlU2x1Z3MuaW5jbHVkZXMoc2x1ZykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXVlU2x1Z3MucHVzaChzbHVnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlbWFpbmluZ1RleHQgPSBgJHt0aGlzLnF1ZXVlU2x1Z3MubGVuZ3RofSBvZiAke3RoaXMuJHBhcmVudC5nZXRUb3RhbFRvY3MoKX1gO1xuICAgICAgICAgICAgdGhpcy4kcGFyZW50LmxvZ0Jhci5sb2coYCR7c2VjdGlvbi50aXRsZX0gOiAke3NsdWd9ICR7cmVtYWluaW5nVGV4dH1gLCBzdGF0dXMpO1xuICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVQZXJjZW50YWdlUXVldWUoKHBlcmNlbnRhZ2UpID0+IHRoaXMucGVyY2VudGFnZSA9IHBlcmNlbnRhZ2UpO1xuICAgICAgICAgICAgaWYgKHRoaXMuJHBhcmVudC5mZXRjaFF1ZXVlQmFyW3NlY3Rpb25JbmRleF0ucGVyY2VudGFnZSA9PSAxMDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NRdWV1ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBwcm9jZXNzUXVldWUoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWN0aW9uSW5kZXhRdWV1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMubGFzdFNlY3Rpb25JbmRleCA9IHRoaXMuc2VjdGlvbkluZGV4UXVldWVzLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy4kcGFyZW50LmZldGNoUXVldWVCYXJbdGhpcy5sYXN0U2VjdGlvbkluZGV4XS5zdGFydFF1ZXVlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ0blN0YXRlID0gMztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc3RhcnRRdWV1ZSgpIHtcbiAgICAgICAgICAgIHRoaXMuYnRuU3RhdGUgPSAyO1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzUXVldWUoKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIiwiaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnO1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgICBzZXR1cCgpIHtcbiAgICAgICAgY29uc3QgbW9kZSA9IHJlZigtMSk7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSByZWYoJycpO1xuICAgICAgICByZXR1cm4geyBtb2RlLCBtZXNzYWdlIH07XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGxvZyhtZXNzYWdlLCBtb2RlKSB7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgICAgICAgdGhpcy5tb2RlID0gbW9kZTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIiwiaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnO1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgICBwcm9wczoge1xuICAgICAgICBuYXY6IHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHNldHVwKHByb3BzKSB7XG4gICAgICAgIGNvbnN0IG5hdiA9IHJlZihwcm9wcy5uYXYpO1xuICAgICAgICByZXR1cm4geyBuYXYgfTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgb25OYXZDbGljayh0YXJnZXQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhcmdldCk7XG4gICAgICAgICAgICB0aGlzLm5hdiA9IHRhcmdldDtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZScsIHRhcmdldCk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiIsImltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCBGZXRjaEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL0ZldGNoQnV0dG9uLnZ1ZSc7XG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgRmV0Y2hCdXR0b25cbiAgICB9LFxuICAgIHByb3BzOiB7XG4gICAgICAgIGl0ZW1zOiB7XG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6IEFycmF5XG4gICAgICAgIH0sXG4gICAgICAgIHNlY3Rpb25JbmRleDoge1xuICAgICAgICAgICAgcmVxdWllZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6IE51bWJlclxuICAgICAgICB9XG4gICAgfSxcbiAgICBzZXR1cChwcm9wcykge1xuICAgICAgICBjb25zdCBlbmFibGVRdWV1ZSA9IHJlZihmYWxzZSk7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gcmVmKHByb3BzLml0ZW1zKTtcbiAgICAgICAgY29uc3Qgc2VjdGlvbkluZGV4ID0gcmVmKHByb3BzLnNlY3Rpb25JbmRleCk7XG4gICAgICAgIGNvbnN0IGNoZWNrQWxsID0gcmVmKGZhbHNlKTtcbiAgICAgICAgY29uc3QgY2hlY2tlZFF1ZXVlcyA9IHJlZihbXSk7XG4gICAgICAgIGNvbnN0IGV4Y2x1ZGVRdWV1ZXMgPSByZWYoW10pO1xuICAgICAgICBsZXQgZmV0Y2hCdG5zID0gcmVmKFtdKTtcbiAgICAgICAgcmV0dXJuIHsgaXRlbXMsIHNlY3Rpb25JbmRleCwgY2hlY2tlZFF1ZXVlcywgZXhjbHVkZVF1ZXVlcywgZmV0Y2hCdG5zLCBjaGVja0FsbCwgZW5hYmxlUXVldWUgfTtcbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jaGVja0FsbCA9IHRydWU7XG4gICAgICAgICAgICBmb3IgKGxldCB0b2NJbmRleCBpbiB0aGlzLml0ZW1zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja2VkUXVldWVzW3RvY0luZGV4XSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDI1MCk7XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHRyaWdnZXJGYWlsZWRGZXRjaFF1ZXVlKHRvY0luZGV4KSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmZldGNoUXVldWUuYnRuU3RhdGUgPSA0O1xuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH0sXG4gICAgICAgIGNhbGN1bGF0ZVBlcmNlbnRhZ2VRdWV1ZShjYWxsYmFjaykge1xuICAgICAgICAgICAgY29uc3QgcGVhayA9IHRoaXMuZXhjbHVkZVF1ZXVlcy5sZW5ndGg7XG4gICAgICAgICAgICBjb25zdCBtYXhQZWFrID0gdGhpcy5pdGVtcy5sZW5ndGg7XG4gICAgICAgICAgICBjb25zdCBwZXJjZW50YWdlID0gTWF0aC5yb3VuZChwZWFrIC8gbWF4UGVhayAqIDEwMCk7XG4gICAgICAgICAgICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhwZXJjZW50YWdlLCBwZWFrLCBtYXhQZWFrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdHJpZ2dlckV4Y2x1ZGVGZXRjaFF1ZXVlKHRvY0luZGV4LCBmZXRjaFF1ZXVlRW5hYmxlZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2codG9jSW5kZXgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZXhjbHVkZVF1ZXVlcy5pbmRleE9mKHRvY0luZGV4KSA9PSAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZXhjbHVkZVF1ZXVlcy5wdXNoKHRvY0luZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmZXRjaFF1ZXVlRW5hYmxlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlUGVyY2VudGFnZVF1ZXVlKChwZXJjZW50YWdlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mZXRjaFF1ZXVlLnNldFByb2dyZXNzKHRvY0luZGV4LCBwZXJjZW50YWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHBhcmVudC5mZXRjaFF1ZXVlQmFyW3RoaXMuc2VjdGlvbkluZGV4XS5zZXRQcm9ncmVzcyh0b2NJbmRleCwgcGVyY2VudGFnZSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNoZWNrZWRRdWV1ZXNbdG9jSW5kZXhdID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmNoZWNrQWxsID0gZmFsc2U7XG4gICAgICAgIH0sXG4gICAgICAgIHRyaWdnZXJGZXRjaFF1ZXVlKHRvY0luZGV4KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0b2NJbmRleCk7XG4gICAgICAgICAgICBjb25zdCBuZXh0VG9jSW5kZXggPSB0b2NJbmRleCArIDE7XG4gICAgICAgICAgICBpZiAobmV4dFRvY0luZGV4IDwgdGhpcy5jaGVja2VkUXVldWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIC8vIHByb2Nlc3MgbmV4dCBmZXRjaCBidXR0b25cbiAgICAgICAgICAgICAgICB0aGlzLmZldGNoQnRuc1tuZXh0VG9jSW5kZXhdLmZldGNoVG9jKHRydWUpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZVBlcmNlbnRhZ2VRdWV1ZSgocGVyY2VudGFnZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2hRdWV1ZS5zZXRQcm9ncmVzcyh0b2NJbmRleCwgcGVyY2VudGFnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQuZmV0Y2hRdWV1ZUJhclt0aGlzLnNlY3Rpb25JbmRleF0uc2V0UHJvZ3Jlc3ModG9jSW5kZXgsIHBlcmNlbnRhZ2UpO1xuICAgICAgICAgICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZldGNoUXVldWUuYnRuU3RhdGUgPSB0aGlzLmZldGNoUXVldWUucGVyY2VudGFnZSA9PSAxMDAgPyAzIDogMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mZXRjaFF1ZXVlLmxhc3RUb2NJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHBhcmVudC5mZXRjaFF1ZXVlQmFyW3RoaXMuc2VjdGlvbkluZGV4XS5idG5TdGF0ZSA9IHRoaXMuJHBhcmVudC5mZXRjaFF1ZXVlQmFyW3RoaXMuc2VjdGlvbkluZGV4XS5wZXJjZW50YWdlID09IDEwMCA/IDMgOiAxO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQuZmV0Y2hRdWV1ZUJhclt0aGlzLnNlY3Rpb25JbmRleF0ubGFzdFRvY0luZGV4ID0gMDtcbiAgICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNhbGxpbmcgZmV0Y2ggYnV0dG9uIG5leHQgaW5kZXhcbiAgICAgICAgICAgIC8vIHRoaXMuJHJlZlxuICAgICAgICB9LFxuICAgICAgICBvbkZldGNoVXBkYXRlKHRhcmdldCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGFyZ2V0KVxuICAgICAgICAgICAgdGhpcy4kZW1pdCgndXBkYXRlJywgdGFyZ2V0KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25DaGVja0FsbCgpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY2hlY2tBbGwpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHRvY0luZGV4IGluIHRoaXMuaXRlbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja2VkUXVldWVzW3RvY0luZGV4XSA9IHRoaXMuY2hlY2tBbGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMjUwKTtcbiAgICAgICAgfSxcbiAgICAgICAgdGdRdWV1ZSh0b2NJbmRleCkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy4kcmVmcy5mZXRjaEJ0bnNbdG9jSW5kZXhdLmlzUXVldWVkID10aGlzLmNoZWNrZWRRdWV1ZXNbdG9jSW5kZXhdO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuJHJlZnMuZmV0Y2hCdG5zKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNoZWNrZWRRdWV1ZXNbdG9jSW5kZXhdKTtcbiAgICAgICAgICAgIH0sIDI1MCk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiIsImltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCBTdG9yZSBmcm9tICcuLi8uLi9saWJzL3N0b3JlJztcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gICAgc2V0dXAoKSB7XG4gICAgICAgIGNvbnN0IG5hdiA9IHJlZignYWJvdXQnKTtcbiAgICAgICAgY29uc3QgYXBwID0gcmVmKHsgdmVyc2lvbjogMCB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hdixcbiAgICAgICAgICAgIGFwcFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgLy8gc2V0VGltZW91dCgoKT0+e1xuICAgICAgICB0aGlzLmFwcCA9IFN0b3JlLmdldEFwcEluZm8oKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5hcHApO1xuICAgICAgICAvLyB9LDEwMDApO1xuICAgIH1cbn0pO1xuIiwiaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IFRvY0l0ZW0gZnJvbSAnLi4vY29tcG9uZW50cy9Ub2NJdGVtLnZ1ZSc7XG5pbXBvcnQgRmV0Y2hRdWV1ZUJhciBmcm9tICcuLi9jb21wb25lbnRzL0ZldGNoUXVldWVCYXIudnVlJztcbmltcG9ydCBGZXRjaFNlY3Rpb25RdWV1ZSBmcm9tICcuLi9jb21wb25lbnRzL0ZldGNoU2VjdGlvblF1ZXVlLnZ1ZSc7XG5pbXBvcnQgTG9nQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTG9nQmFyLnZ1ZSc7XG5pbXBvcnQgeyBtYWtlVGl0bGUgfSBmcm9tICcuLi8uLi9saWJzL3V0aWxzJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgU3RvcmUgZnJvbSBcIi4uLy4uL2xpYnMvc3RvcmVcIjtcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBUb2NJdGVtLCBGZXRjaFF1ZXVlQmFyLCBGZXRjaFNlY3Rpb25RdWV1ZSwgTG9nQmFyXG4gICAgfSxcbiAgICBwcm9wczoge1xuICAgICAgICBjb3Vyc2U6IHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdFxuICAgICAgICB9XG4gICAgfSxcbiAgICBzZXR1cChwcm9wcykge1xuICAgICAgICBjb25zdCBjb3Vyc2UgPSByZWYocHJvcHMuY291cnNlKTtcbiAgICAgICAgY29uc3QgYXV0aG9ycyA9IHJlZihbXSk7XG4gICAgICAgIGNvbnN0IHNlY3Rpb25zID0gcmVmKFtdKTtcbiAgICAgICAgY29uc3QgZXhlcmNpc2VGaWxlID0gcmVmKCk7XG4gICAgICAgIGNvbnN0IHRvY0l0ZW1zID0gcmVmKFtdKTtcbiAgICAgICAgY29uc3QgZmV0Y2hRdWV1ZUJhciA9IHJlZihbXSk7XG4gICAgICAgIGNvbnN0IGZldGNoU2VjdGlvblF1ZXVlID0gcmVmKHt9KTtcbiAgICAgICAgY29uc3QgbG9nQmFyID0gcmVmKHt9KTtcbiAgICAgICAgY29uc3QgY291cnNlRGF0YSA9IHJlZih7fSk7XG4gICAgICAgIHJldHVybiB7IGNvdXJzZSwgYXV0aG9ycywgc2VjdGlvbnMsIGV4ZXJjaXNlRmlsZSwgdG9jSXRlbXMsXG4gICAgICAgICAgICBmZXRjaFF1ZXVlQmFyLCBmZXRjaFNlY3Rpb25RdWV1ZSwgbG9nQmFyLCBjb3Vyc2VEYXRhIH07XG4gICAgfSxcbiAgICBtb3VudGVkKCkge1xuICAgICAgICB0aGlzLmxvYWRDb3Vyc2VEYXRhKCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgJCgnLmNvdXJzZS1wYWdlIC5idG4tY29sbGFwc2UnKS5jbGljaygoZXZ0KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWwgPSAkKGV2dC50YXJnZXQpLmNsb3Nlc3QoJ2J1dHRvbicpWzBdO1xuICAgICAgICAgICAgICAgICQoZWwpLmZpbmQoJ2knKS50b2dnbGVDbGFzcygnZmEgZmEtcGx1cyBmYSBmYS1taW51cycpO1xuICAgICAgICAgICAgICAgICQoJy5jb3Vyc2UtcGFnZSAuYnRuLWNvbGxhcHNlJykubm90KGVsKS5maW5kKCdpJykucmVtb3ZlQ2xhc3MoJ2ZhLW1pbnVzJykuYWRkQ2xhc3MoJ2ZhLXBsdXMgJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgNTApO1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBpc1ZhbGlkQ291cnNlKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmNvdXJzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5jb3Vyc2UuSUQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0sXG4gICAgICAgIGxvYWRDb3Vyc2VEYXRhKCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5jb3Vyc2UpXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZENvdXJzZSgpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXBwSW5mbyA9IFN0b3JlLmdldEFwcEluZm8oKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhhcHBJbmZvKVxuICAgICAgICAgICAgICAgIHRoaXMuY291cnNlID0gU3RvcmUuZ2V0Q291cnNlKGFwcEluZm8ubGFzdENvdXJzZVNsdWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgU3RvcmUuc2V0QXBwU3RhdGUoMSwgdGhpcy5jb3Vyc2Uuc2x1Zyk7XG4gICAgICAgICAgICBjb25zdCBzZWN0aW9ucyA9IFN0b3JlLmdldFNlY3Rpb25zQnlDb3Vyc2VJZCh0aGlzLmNvdXJzZS5JRCk7XG4gICAgICAgICAgICBzZWN0aW9ucy5tYXAoKHNlY3Rpb25UbXApID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgc2VjdGlvbiA9IHNlY3Rpb25UbXA7XG4gICAgICAgICAgICAgICAgc2VjdGlvbi5pdGVtcyA9IFN0b3JlLmdldFRvY3NCeVNlY3Rpb25JZChzZWN0aW9uVG1wLklEKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlY3Rpb25zLnB1c2goc2VjdGlvbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuY291cnNlLmF1dGhvcklkcy5tYXAoKElEKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXV0aG9yID0gU3RvcmUuZ2V0QXV0aG9yQnlJZChJRCk7XG4gICAgICAgICAgICAgICAgaWYgKGF1dGhvcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhvcnMucHVzaChhdXRob3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICB1cGRhdGVUb2NJdGVtcyhleGVyY2lzZUZpbGUsIHRvYykge1xuICAgICAgICAgICAgdGhpcy5leGVyY2lzZUZpbGUgPSBTdG9yZS5jcmVhdGVFeGVyY2lzZUZpbGUodGhpcy5jb3Vyc2UuSUQsIGV4ZXJjaXNlRmlsZS5uYW1lLCBleGVyY2lzZUZpbGUudXJsLCBleGVyY2lzZUZpbGUuc2l6ZUluQnl0ZXMpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXhlcmNpc2VGaWxlLHRvYyk7XG4gICAgICAgICAgICAvLyB1cGRhdGUgdG9jIGNhcHRpb25cbiAgICAgICAgICAgIFN0b3JlLnVwZGF0ZVRvY0NhcHRpb24odG9jLnNsdWcsIHRvYy5jYXB0aW9uVXJsLCB0b2MuY2FwdGlvbkZtdCk7XG4gICAgICAgICAgICAvLyBVcGRhdGUgb3IgY3JlYXRlIHN0cmVhbWluZyBsb2NhdGlvblxuICAgICAgICAgICAgU3RvcmUuY3JlYXRlU3RyZWFtTG9jYXRpb25MaXN0KHRvYy5zbHVnLCB0b2Muc3RyZWFtTG9jYXRpb25zLCB0aGlzLmNvdXJzZS5JRCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uVG9jVXBkYXRlKGV2dCkge1xuICAgICAgICAgICAgaWYgKGV2dC5zcmMgPT09ICdQb3B1cC5Db3Vyc2VQYWdlLlRvY0l0ZW0uRmV0Y2hCdXR0b24nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVUb2NJdGVtcyhldnQuZXhlcmNpc2VGaWxlLCBldnQudG9jKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZScsIGV2dCk7XG4gICAgICAgIH0sXG4gICAgICAgIG1ha2VUaXRsZShzbHVnKSB7XG4gICAgICAgICAgICByZXR1cm4gbWFrZVRpdGxlKHNsdWcpO1xuICAgICAgICB9LFxuICAgICAgICBnZXRUb3RhbFRvY3MoKSB7XG4gICAgICAgICAgICBsZXQgdG90YWxUb2NzID0gMDtcbiAgICAgICAgICAgIHRoaXMuc2VjdGlvbnMubWFwKChzKSA9PiB7XG4gICAgICAgICAgICAgICAgdG90YWxUb2NzICs9IHMuaXRlbXMubGVuZ3RoO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdG90YWxUb2NzO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iLCJpbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgU3RvcmUgZnJvbSAnLi4vLi4vbGlicy9zdG9yZSc7XG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYXY6ICdkb3dubG9hZHMnXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBwcm9wczoge1xuICAgICAgICBjb3Vyc2U6IHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdFxuICAgICAgICB9XG4gICAgfSxcbiAgICBzZXR1cCgpIHtcbiAgICAgICAgY29uc3QgY291cnNlID0gcmVmKCk7XG4gICAgICAgIGNvbnN0IGV4ZXJjaXNlRmlsZSA9IHJlZigpO1xuICAgICAgICBjb25zdCBkb3dubG9hZENvbmZpZyA9IHJlZigpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY291cnNlLCBleGVyY2lzZUZpbGUsIGRvd25sb2FkQ29uZmlnXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBtb3VudGVkKCkge1xuICAgICAgICB0aGlzLmxvYWREb3dubG9hZERhdGEoKTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgdXBkYXRlU2VsZWN0ZWRGbXQoKSB7XG4gICAgICAgICAgICBTdG9yZS51cGRhdGVEb3dubG9hZENvbmZpZygnc2VsZWN0ZWRGbXRMaXN0JywgdGhpcy5kb3dubG9hZENvbmZpZy5zZWxlY3RlZEZtdExpc3QsIHRoaXMuY291cnNlLklEKTtcbiAgICAgICAgfSxcbiAgICAgICAgaXNWYWxpZENvdXJzZSgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5jb3Vyc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuY291cnNlLklEID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuICAgICAgICBsb2FkRG93bmxvYWREYXRhKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWRDb3Vyc2UoKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFwcEluZm8gPSBTdG9yZS5nZXRBcHBJbmZvKCk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYXBwSW5mbylcbiAgICAgICAgICAgICAgICB0aGlzLmNvdXJzZSA9IFN0b3JlLmdldENvdXJzZShhcHBJbmZvLmxhc3RDb3Vyc2VTbHVnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFN0b3JlLnNldEFwcFN0YXRlKDEsIHRoaXMuY291cnNlLnNsdWcpO1xuICAgICAgICAgICAgLy8gbG9hZCBleHJjaXNlIGZpbGVcbiAgICAgICAgICAgIHRoaXMuZXhlcmNpc2VGaWxlID0gU3RvcmUuZ2V0RXhlcmNpc2VGaWxlKHRoaXMuY291cnNlLklEKTtcbiAgICAgICAgICAgIC8vIGxvYWQgZG93bmxvYWQgQ29uZmlnXG4gICAgICAgICAgICB0aGlzLmRvd25sb2FkQ29uZmlnID0gU3RvcmUuZ2V0RG93bmxvYWRDb25maWcodGhpcy5jb3Vyc2UuSUQpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iLCJpbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnO1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmF2OiAnaGVscCdcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgc3luY0xTKCkge1xuICAgICAgICAgICAgY29uc3QgZGJfbGVhcm5pbmcgPSBsb2NhbFN0b3JhZ2VbJ2RiX2xlYXJuaW5nJ107XG4gICAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7IGRiX2xlYXJuaW5nIH0pO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iLCJpbXBvcnQgeyBzZW5kTWVzc2FnZVNhdmVEYXRhQ29kZXNUb0xTIH0gZnJvbSAnLi4vLi4vbGlicy91dGlscyc7XG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgU3RvcmUgZnJvbSAnLi4vLi4vbGlicy9zdG9yZSc7XG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICAgIHNldHVwKCkge1xuICAgICAgICBjb25zdCBuYXYgPSByZWYoJ3dlbGNvbWUnKTtcbiAgICAgICAgY29uc3QgZ3JlZXRpbmcgPSByZWYoJ1dlbGNvbWUgdG8gTExGZXRjaGVyLCB3aGF0IGRvIHlvdSB3YW50IHRvIGRvID8nKTtcbiAgICAgICAgY29uc3QgbGFzdENvdXJzZUxpc3QgPSByZWYoW10pO1xuICAgICAgICBjb25zdCBmZXRjaEJ0blN0YXRlID0gcmVmKDApO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmF2LCBncmVldGluZywgbGFzdENvdXJzZUxpc3QsIGZldGNoQnRuU3RhdGVcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgY29uc3QgYXBwSW5mbyA9IFN0b3JlLmdldEFwcEluZm8oKTtcbiAgICAgICAgdGhpcy4kcGFyZW50LmxvZyhgQXBwU3RhdGU6JHthcHBJbmZvLnN0YXRlfWApO1xuICAgICAgICBjb25zdCBsYXN0Q291cnNlcyA9IFN0b3JlLmdldExhc3RDb3Vyc2VzKCk7XG4gICAgICAgIGlmIChsYXN0Q291cnNlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RDb3Vyc2VMaXN0ID0gW107XG4gICAgICAgICAgICBsYXN0Q291cnNlcy5tYXAoKGNvdXJzZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubGFzdENvdXJzZUxpc3QucHVzaChjb3Vyc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gfSwxMDAwKTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgbG9hZFJlY2VudENvdXJzZShjb3Vyc2UpIHtcbiAgICAgICAgICAgIHRoaXMuJHBhcmVudC5zZXRDb3Vyc2UoY291cnNlKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmV0cmlldmVEYXRhQ29kZXNGcm9tQ29udGVudCgpIHtcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hCdG5TdGF0ZSA9IDE7XG4gICAgICAgICAgICAvLyBzZW5kIGRhdGEgY29kZSBmcm9tIGNvbnRlbnQgc2NyaXB0IHRvIExTXG4gICAgICAgICAgICBzZW5kTWVzc2FnZVNhdmVEYXRhQ29kZXNUb0xTKCk7XG4gICAgICAgICAgICAvLyBsb2FkIGRhdGEgY29kZXMgZnJvbSBsc1xuICAgICAgICAgICAgU3RvcmUuZ2V0RGF0YUNvZGVzTFMoKGRhdGFDb2RlcykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2hCdG5TdGF0ZSA9IDI7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YUNvZGVzKTtcbiAgICAgICAgICAgICAgICBTdG9yZS5zYXZlRGF0YUNvZGVzKGRhdGFDb2Rlcyk7XG4gICAgICAgICAgICAgICAgdGhpcy4kcGFyZW50LnNldENvdXJzZShkYXRhQ29kZXMuY291cnNlKTtcbiAgICAgICAgICAgICAgICAvLyBjb250ZW50Q29uc29sZUxvZyhkYXRhQ29kZXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiIsImltcG9ydCB7IHJlc29sdmVDb21wb25lbnQgYXMgX3Jlc29sdmVDb21wb25lbnQsIGNyZWF0ZVZOb2RlIGFzIF9jcmVhdGVWTm9kZSwgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUJsb2NrIGFzIF9jcmVhdGVCbG9jaywgY3JlYXRlQ29tbWVudFZOb2RlIGFzIF9jcmVhdGVDb21tZW50Vk5vZGUsIHZTaG93IGFzIF92U2hvdywgY3JlYXRlRWxlbWVudFZOb2RlIGFzIF9jcmVhdGVFbGVtZW50Vk5vZGUsIHdpdGhEaXJlY3RpdmVzIGFzIF93aXRoRGlyZWN0aXZlcywgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2sgfSBmcm9tIFwidnVlXCI7XG5jb25zdCBfaG9pc3RlZF8xID0geyBjbGFzczogXCJhcHAtY29udGFpbmVyXCIgfTtcbmNvbnN0IF9ob2lzdGVkXzIgPSB7IGNsYXNzOiBcImNvbnNvbGVcIiB9O1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgICBjb25zdCBfY29tcG9uZW50X1BhZ2VOYXZpZ2F0aW9uID0gX3Jlc29sdmVDb21wb25lbnQoXCJQYWdlTmF2aWdhdGlvblwiKTtcbiAgICBjb25zdCBfY29tcG9uZW50X1dlbGNvbWVQYWdlID0gX3Jlc29sdmVDb21wb25lbnQoXCJXZWxjb21lUGFnZVwiKTtcbiAgICBjb25zdCBfY29tcG9uZW50X0NvdXJzZVBhZ2UgPSBfcmVzb2x2ZUNvbXBvbmVudChcIkNvdXJzZVBhZ2VcIik7XG4gICAgY29uc3QgX2NvbXBvbmVudF9Eb3dubG9hZFBhZ2UgPSBfcmVzb2x2ZUNvbXBvbmVudChcIkRvd25sb2FkUGFnZVwiKTtcbiAgICBjb25zdCBfY29tcG9uZW50X0hlbHBQYWdlID0gX3Jlc29sdmVDb21wb25lbnQoXCJIZWxwUGFnZVwiKTtcbiAgICBjb25zdCBfY29tcG9uZW50X0Fib3V0UGFnZSA9IF9yZXNvbHZlQ29tcG9uZW50KFwiQWJvdXRQYWdlXCIpO1xuICAgIGNvbnN0IF9jb21wb25lbnRfaGlnaGxpZ2h0anMgPSBfcmVzb2x2ZUNvbXBvbmVudChcImhpZ2hsaWdodGpzXCIpO1xuICAgIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIF9ob2lzdGVkXzEsIFtcbiAgICAgICAgX2NyZWF0ZVZOb2RlKF9jb21wb25lbnRfUGFnZU5hdmlnYXRpb24sIHtcbiAgICAgICAgICAgIG9uVXBkYXRlOiBfY2FjaGVbMF0gfHwgKF9jYWNoZVswXSA9ICgkZXZlbnQpID0+IChfY3R4Lm9uTmF2VXBkYXRlKCRldmVudCkpKSxcbiAgICAgICAgICAgIG5hdjogX2N0eC5uYXYsXG4gICAgICAgICAgICByZWY6IFwicGFnZU5hdmlnYXRpb25cIlxuICAgICAgICB9LCBudWxsLCA4IC8qIFBST1BTICovLCBbXCJuYXZcIl0pLFxuICAgICAgICAoX2N0eC5uYXYgPT0gJ3dlbGNvbWUnKVxuICAgICAgICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soX2NvbXBvbmVudF9XZWxjb21lUGFnZSwgeyBrZXk6IDAgfSkpXG4gICAgICAgICAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpLFxuICAgICAgICAoX2N0eC5uYXYgPT0gJ2NvdXJzZScpXG4gICAgICAgICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jayhfY29tcG9uZW50X0NvdXJzZVBhZ2UsIHtcbiAgICAgICAgICAgICAgICBrZXk6IDEsXG4gICAgICAgICAgICAgICAgb25VcGRhdGU6IF9jYWNoZVsxXSB8fCAoX2NhY2hlWzFdID0gKCRldmVudCkgPT4gKF9jdHgub25Db3Vyc2VVcGRhdGUoJGV2ZW50KSkpLFxuICAgICAgICAgICAgICAgIGNvdXJzZTogX2N0eC5jb3Vyc2UsXG4gICAgICAgICAgICAgICAgcmVmOiBcImNvdXJzZVBhZ2VcIlxuICAgICAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgW1wiY291cnNlXCJdKSlcbiAgICAgICAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSksXG4gICAgICAgIChfY3R4Lm5hdiA9PSAnZG93bmxvYWRzJylcbiAgICAgICAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKF9jb21wb25lbnRfRG93bmxvYWRQYWdlLCB7IGtleTogMiB9KSlcbiAgICAgICAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSksXG4gICAgICAgIChfY3R4Lm5hdiA9PSAnaGVscCcpXG4gICAgICAgICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jayhfY29tcG9uZW50X0hlbHBQYWdlLCB7IGtleTogMyB9KSlcbiAgICAgICAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSksXG4gICAgICAgIChfY3R4Lm5hdiA9PSAnYWJvdXQnKVxuICAgICAgICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soX2NvbXBvbmVudF9BYm91dFBhZ2UsIHsga2V5OiA0IH0pKVxuICAgICAgICAgICAgOiBfY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKSxcbiAgICAgICAgX3dpdGhEaXJlY3RpdmVzKF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfMiwgW1xuICAgICAgICAgICAgX2NyZWF0ZVZOb2RlKF9jb21wb25lbnRfaGlnaGxpZ2h0anMsIHtcbiAgICAgICAgICAgICAgICBsYW5ndWFnZTogXCJjb25zb2xlXCIsXG4gICAgICAgICAgICAgICAgY29kZTogSlNPTi5zdHJpbmdpZnkoX2N0eC5tZXNzYWdlLCBudWxsLCAyKVxuICAgICAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgW1wiY29kZVwiXSlcbiAgICAgICAgXSwgNTEyIC8qIE5FRURfUEFUQ0ggKi8pLCBbXG4gICAgICAgICAgICBbX3ZTaG93LCBfY3R4Lm1lc3NhZ2UubGVuZ3RoID4gMF1cbiAgICAgICAgXSlcbiAgICBdKSk7XG59XG4iLCJpbXBvcnQgeyBub3JtYWxpemVDbGFzcyBhcyBfbm9ybWFsaXplQ2xhc3MsIGNyZWF0ZUVsZW1lbnRWTm9kZSBhcyBfY3JlYXRlRWxlbWVudFZOb2RlLCBub3JtYWxpemVTdHlsZSBhcyBfbm9ybWFsaXplU3R5bGUsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jayB9IGZyb20gXCJ2dWVcIjtcbmNvbnN0IF9ob2lzdGVkXzEgPSB7IGNsYXNzOiBcImJ0bi1ncm91cFwiIH07XG5jb25zdCBfaG9pc3RlZF8yID0gW1wiZGlzYWJsZWRcIiwgXCJ0aXRsZVwiXTtcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gICAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwgX2hvaXN0ZWRfMSwgW1xuICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiYnV0dG9uXCIsIHtcbiAgICAgICAgICAgIHN0eWxlOiBfbm9ybWFsaXplU3R5bGUoeyBib3JkZXI6IChfY3R4LmJ0blN0YXRlICE9IDEgJiYgX2N0eC5idG5TdGF0ZSAhPSA0ID8gJ25vbmUnIDogJ2luaGVyaXQnKSB9KSxcbiAgICAgICAgICAgIGRpc2FibGVkOiBfY3R4LmJ0blN0YXRlID4gMSAmJiBfY3R4LmJ0blN0YXRlIDwgNCxcbiAgICAgICAgICAgIG9uQ2xpY2s6IF9jYWNoZVswXSB8fCAoX2NhY2hlWzBdID0gKCRldmVudCkgPT4gKF9jdHguZmV0Y2hUb2MoKSkpLFxuICAgICAgICAgICAgY2xhc3M6IFwiYnRuIGJ0bi1zbVwiLFxuICAgICAgICAgICAgdGl0bGU6ICdDbGljayB0byBmZXRjaCBUT0MgcmVzb3VyY2VzICcgKyBfY3R4LnRvYy50aXRsZVxuICAgICAgICB9LCBbXG4gICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgY2xhc3M6IF9ub3JtYWxpemVDbGFzcyhbXCJmYVwiLCB7ICdmYS1wbGF5JzogX2N0eC5idG5TdGF0ZSA9PSAxLCAnZmEtc3BpbiBmYS1zcGlubmVyJzogX2N0eC5idG5TdGF0ZSA9PSAyLCAnZmEtY2hlY2snOiBfY3R4LmJ0blN0YXRlID09IDMsICdmYS1yZWZyZXNoJzogX2N0eC5idG5TdGF0ZSA9PSA0IH1dKVxuICAgICAgICAgICAgfSwgbnVsbCwgMiAvKiBDTEFTUyAqLylcbiAgICAgICAgXSwgMTIgLyogU1RZTEUsIFBST1BTICovLCBfaG9pc3RlZF8yKVxuICAgIF0pKTtcbn1cbiIsImltcG9ydCB7IG5vcm1hbGl6ZVN0eWxlIGFzIF9ub3JtYWxpemVTdHlsZSwgY3JlYXRlRWxlbWVudFZOb2RlIGFzIF9jcmVhdGVFbGVtZW50Vk5vZGUsIHZTaG93IGFzIF92U2hvdywgd2l0aERpcmVjdGl2ZXMgYXMgX3dpdGhEaXJlY3RpdmVzLCBub3JtYWxpemVDbGFzcyBhcyBfbm9ybWFsaXplQ2xhc3MsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jaywgcHVzaFNjb3BlSWQgYXMgX3B1c2hTY29wZUlkLCBwb3BTY29wZUlkIGFzIF9wb3BTY29wZUlkIH0gZnJvbSBcInZ1ZVwiO1xuY29uc3QgX3dpdGhTY29wZUlkID0gbiA9PiAoX3B1c2hTY29wZUlkKFwiZGF0YS12LTkwNWFlYzQyXCIpLCBuID0gbigpLCBfcG9wU2NvcGVJZCgpLCBuKTtcbmNvbnN0IF9ob2lzdGVkXzEgPSB7IGNsYXNzOiBcImZldGNoLXF1ZXVlLWJhclwiIH07XG5jb25zdCBfaG9pc3RlZF8yID0geyBjbGFzczogXCJmZXRjaC1xdWV1ZS1wYlwiIH07XG5jb25zdCBfaG9pc3RlZF8zID0geyBjbGFzczogXCJwcm9ncmVzc1wiIH07XG5jb25zdCBfaG9pc3RlZF80ID0gW1wiYXJpYS12YWx1ZW5vd1wiXTtcbmNvbnN0IF9ob2lzdGVkXzUgPSB7IGNsYXNzOiBcImJ0bi1mZXRjaC1jbnRcIiB9O1xuY29uc3QgX2hvaXN0ZWRfNiA9IFtcImRpc2FibGVkXCJdO1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCBfaG9pc3RlZF8xLCBbXG4gICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfMiwgW1xuICAgICAgICAgICAgX3dpdGhEaXJlY3RpdmVzKF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfMywgW1xuICAgICAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICBjbGFzczogXCJwcm9ncmVzcy1iYXIgYmctaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICByb2xlOiBcInByb2dyZXNzYmFyXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiBfbm9ybWFsaXplU3R5bGUoeyB3aWR0aDogX2N0eC5wZXJjZW50YWdlICsgJyUnIH0pLFxuICAgICAgICAgICAgICAgICAgICBcImFyaWEtdmFsdWVub3dcIjogX2N0eC5wZXJjZW50YWdlLFxuICAgICAgICAgICAgICAgICAgICBcImFyaWEtdmFsdWVtaW5cIjogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYXJpYS12YWx1ZW1heFwiOiBcIjEwMFwiXG4gICAgICAgICAgICAgICAgfSwgbnVsbCwgMTIgLyogU1RZTEUsIFBST1BTICovLCBfaG9pc3RlZF80KVxuICAgICAgICAgICAgXSwgNTEyIC8qIE5FRURfUEFUQ0ggKi8pLCBbXG4gICAgICAgICAgICAgICAgW192U2hvdywgX2N0eC5wZXJjZW50YWdlID4gMF1cbiAgICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzUsIFtcbiAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJidXR0b25cIiwge1xuICAgICAgICAgICAgICAgIHN0eWxlOiBfbm9ybWFsaXplU3R5bGUoeyBjb2xvcjogX2N0eC5idG5TdGF0ZSA9PSAzID8gJ3doaXRlJyA6ICdpbmhlcml0JyB9KSxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogX2N0eC5idG5TdGF0ZSAhPSAxICYmIF9jdHguYnRuU3RhdGUgIT0gNCxcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiBfY2FjaGVbMF0gfHwgKF9jYWNoZVswXSA9ICgkZXZlbnQpID0+IChfY3R4LnN0YXJ0UXVldWUoKSkpLFxuICAgICAgICAgICAgICAgIGNsYXNzOiBcImJ0biBidG4tc20gYnRuLWZldGNoXCJcbiAgICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfbm9ybWFsaXplQ2xhc3MoW1wiZmFcIiwgeyAnZmEtcGxheSc6IF9jdHguYnRuU3RhdGUgPT0gMSwgJ2ZhLXNwaW4gZmEtc3Bpbm5lcic6IF9jdHguYnRuU3RhdGUgPT0gMiwgJ2ZhLWNoZWNrJzogX2N0eC5idG5TdGF0ZSA9PSAzLCAnZmEtcmVmcmVzaCc6IF9jdHguYnRuU3RhdGUgPT0gNCB9XSlcbiAgICAgICAgICAgICAgICB9LCBudWxsLCAyIC8qIENMQVNTICovKVxuICAgICAgICAgICAgXSwgMTIgLyogU1RZTEUsIFBST1BTICovLCBfaG9pc3RlZF82KVxuICAgICAgICBdKVxuICAgIF0pKTtcbn1cbiIsImltcG9ydCB7IG5vcm1hbGl6ZVN0eWxlIGFzIF9ub3JtYWxpemVTdHlsZSwgY3JlYXRlRWxlbWVudFZOb2RlIGFzIF9jcmVhdGVFbGVtZW50Vk5vZGUsIHZTaG93IGFzIF92U2hvdywgd2l0aERpcmVjdGl2ZXMgYXMgX3dpdGhEaXJlY3RpdmVzLCBub3JtYWxpemVDbGFzcyBhcyBfbm9ybWFsaXplQ2xhc3MsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jaywgcHVzaFNjb3BlSWQgYXMgX3B1c2hTY29wZUlkLCBwb3BTY29wZUlkIGFzIF9wb3BTY29wZUlkIH0gZnJvbSBcInZ1ZVwiO1xuY29uc3QgX3dpdGhTY29wZUlkID0gbiA9PiAoX3B1c2hTY29wZUlkKFwiZGF0YS12LTZhZmRhNjQ5XCIpLCBuID0gbigpLCBfcG9wU2NvcGVJZCgpLCBuKTtcbmNvbnN0IF9ob2lzdGVkXzEgPSB7IGNsYXNzOiBcImZldGNoLXNlY3Rpb24tcXVldWVcIiB9O1xuY29uc3QgX2hvaXN0ZWRfMiA9IHsgY2xhc3M6IFwiZnNxYmNcIiB9O1xuY29uc3QgX2hvaXN0ZWRfMyA9IHsgY2xhc3M6IFwiZmV0Y2gtc2VjdGlvbi1xdWV1ZS1iYXJcIiB9O1xuY29uc3QgX2hvaXN0ZWRfNCA9IHsgY2xhc3M6IFwiZmV0Y2gtc2VjdGlvbi1xdWV1ZS1wYlwiIH07XG5jb25zdCBfaG9pc3RlZF81ID0geyBjbGFzczogXCJwcm9ncmVzc1wiIH07XG5jb25zdCBfaG9pc3RlZF82ID0gW1wiYXJpYS12YWx1ZW5vd1wiXTtcbmNvbnN0IF9ob2lzdGVkXzcgPSB7IGNsYXNzOiBcImJ0bi1mZXRjaC1zZWN0aW9uLXF1ZXVlLWNudFwiIH07XG5jb25zdCBfaG9pc3RlZF84ID0gW1wiZGlzYWJsZWRcIl07XG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xuICAgIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIF9ob2lzdGVkXzEsIFtcbiAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8yLCBbXG4gICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzMsIFtcbiAgICAgICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzQsIFtcbiAgICAgICAgICAgICAgICAgICAgX3dpdGhEaXJlY3RpdmVzKF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfNSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFwicHJvZ3Jlc3MtYmFyIGJnLXN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlOiBcInByb2dyZXNzYmFyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IF9ub3JtYWxpemVTdHlsZSh7IHdpZHRoOiBfY3R4LnBlcmNlbnRhZ2UgKyAnJScgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhcmlhLXZhbHVlbm93XCI6IF9jdHgucGVyY2VudGFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFyaWEtdmFsdWVtaW5cIjogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhcmlhLXZhbHVlbWF4XCI6IFwiMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIG51bGwsIDEyIC8qIFNUWUxFLCBQUk9QUyAqLywgX2hvaXN0ZWRfNilcbiAgICAgICAgICAgICAgICAgICAgXSwgNTEyIC8qIE5FRURfUEFUQ0ggKi8pLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZTaG93LCBfY3R4LnBlcmNlbnRhZ2UgPiAwXVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfNywgW1xuICAgICAgICAgICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiYnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiBfbm9ybWFsaXplU3R5bGUoeyBjb2xvcjogX2N0eC5idG5TdGF0ZSA9PSAzID8gJ3doaXRlJyA6ICdpbmhlcml0JyB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBfY3R4LmJ0blN0YXRlICE9IDEgJiYgX2N0eC5idG5TdGF0ZSAhPSA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljazogX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAoJGV2ZW50KSA9PiAoX2N0eC5zdGFydFF1ZXVlKCkpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBcImJ0biBidG4tc20gYnRuLWZldGNoLXNlY3Rpb24tcXVldWVcIlxuICAgICAgICAgICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IF9ub3JtYWxpemVDbGFzcyhbXCJmYVwiLCB7ICdmYS1wbGF5JzogX2N0eC5idG5TdGF0ZSA9PSAxLCAnZmEtc3BpbiBmYS1zcGlubmVyJzogX2N0eC5idG5TdGF0ZSA9PSAyLCAnZmEtY2hlY2snOiBfY3R4LmJ0blN0YXRlID09IDMsICdmYS1yZWZyZXNoJzogX2N0eC5idG5TdGF0ZSA9PSA0IH1dKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgbnVsbCwgMiAvKiBDTEFTUyAqLylcbiAgICAgICAgICAgICAgICAgICAgXSwgMTIgLyogU1RZTEUsIFBST1BTICovLCBfaG9pc3RlZF84KVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgIF0pKTtcbn1cbiIsImltcG9ydCB7IHRvRGlzcGxheVN0cmluZyBhcyBfdG9EaXNwbGF5U3RyaW5nLCBjcmVhdGVFbGVtZW50Vk5vZGUgYXMgX2NyZWF0ZUVsZW1lbnRWTm9kZSwgbm9ybWFsaXplQ2xhc3MgYXMgX25vcm1hbGl6ZUNsYXNzLCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2ssIHB1c2hTY29wZUlkIGFzIF9wdXNoU2NvcGVJZCwgcG9wU2NvcGVJZCBhcyBfcG9wU2NvcGVJZCB9IGZyb20gXCJ2dWVcIjtcbmNvbnN0IF93aXRoU2NvcGVJZCA9IG4gPT4gKF9wdXNoU2NvcGVJZChcImRhdGEtdi01YzhhMjg3Y1wiKSwgbiA9IG4oKSwgX3BvcFNjb3BlSWQoKSwgbik7XG5jb25zdCBfaG9pc3RlZF8xID0geyBjbGFzczogXCJsb2ctYmFyXCIgfTtcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gICAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwgX2hvaXN0ZWRfMSwgW1xuICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIHtcbiAgICAgICAgICAgIGNsYXNzOiBfbm9ybWFsaXplQ2xhc3MoW1wibG9nLW1lc3NhZ2VcIiwgeyBlcnJvcjogX2N0eC5tb2RlID09IDEsIHN1Y2Nlc3M6IF9jdHgubW9kZSA9PSAwLCB3YXJuaW5nOiBfY3R4Lm1vZGUgPT0gMiB9XSlcbiAgICAgICAgfSwgW1xuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInNwYW5cIiwgbnVsbCwgX3RvRGlzcGxheVN0cmluZyhfY3R4Lm1lc3NhZ2UpLCAxIC8qIFRFWFQgKi8pXG4gICAgICAgIF0sIDIgLyogQ0xBU1MgKi8pXG4gICAgXSkpO1xufVxuIiwiaW1wb3J0IHsgbm9ybWFsaXplQ2xhc3MgYXMgX25vcm1hbGl6ZUNsYXNzLCBjcmVhdGVFbGVtZW50Vk5vZGUgYXMgX2NyZWF0ZUVsZW1lbnRWTm9kZSwgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrLCBjcmVhdGVDb21tZW50Vk5vZGUgYXMgX2NyZWF0ZUNvbW1lbnRWTm9kZSB9IGZyb20gXCJ2dWVcIjtcbmNvbnN0IF9ob2lzdGVkXzEgPSB7IGNsYXNzOiBcInBhZ2UtbmF2aWdhdGlvbiB0ZXh0LWNlbnRlclwiIH07XG5jb25zdCBfaG9pc3RlZF8yID0geyBjbGFzczogXCJidG4tZ3JvdXBcIiB9O1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCBfaG9pc3RlZF8xLCBbXG4gICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJ1bFwiLCBfaG9pc3RlZF8yLCBbXG4gICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwibGlcIiwge1xuICAgICAgICAgICAgICAgIG9uQ2xpY2s6IF9jYWNoZVswXSB8fCAoX2NhY2hlWzBdID0gKCRldmVudCkgPT4gKF9jdHgub25OYXZDbGljaygnd2VsY29tZScpKSksXG4gICAgICAgICAgICAgICAgY2xhc3M6IF9ub3JtYWxpemVDbGFzcyhbXCJidG4gYnRuLXNtIGJ0bi1wcmltYXJ5XCIsIHsgYWN0aXZlOiBfY3R4Lm5hdiA9PSAnd2VsY29tZScgfV0pXG4gICAgICAgICAgICB9LCBcIldlbGNvbWVcIiwgMiAvKiBDTEFTUyAqLyksXG4gICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwibGlcIiwge1xuICAgICAgICAgICAgICAgIG9uQ2xpY2s6IF9jYWNoZVsxXSB8fCAoX2NhY2hlWzFdID0gKCRldmVudCkgPT4gKF9jdHgub25OYXZDbGljaygnY291cnNlJykpKSxcbiAgICAgICAgICAgICAgICBjbGFzczogX25vcm1hbGl6ZUNsYXNzKFtcImJ0biBidG4tc20gYnRuLXByaW1hcnlcIiwgeyBhY3RpdmU6IF9jdHgubmF2ID09ICdjb3Vyc2UnIH1dKVxuICAgICAgICAgICAgfSwgXCJDb3Vyc2VcIiwgMiAvKiBDTEFTUyAqLyksXG4gICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwibGlcIiwge1xuICAgICAgICAgICAgICAgIG9uQ2xpY2s6IF9jYWNoZVsyXSB8fCAoX2NhY2hlWzJdID0gKCRldmVudCkgPT4gKF9jdHgub25OYXZDbGljaygnZG93bmxvYWRzJykpKSxcbiAgICAgICAgICAgICAgICBjbGFzczogX25vcm1hbGl6ZUNsYXNzKFtcImJ0biBidG4tc20gYnRuLXByaW1hcnlcIiwgeyBhY3RpdmU6IF9jdHgubmF2ID09ICdkb3dubG9hZHMnIH1dKVxuICAgICAgICAgICAgfSwgXCJEb3dubG9hZHNcIiwgMiAvKiBDTEFTUyAqLyksXG4gICAgICAgICAgICAoMClcbiAgICAgICAgICAgICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJsaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogMCxcbiAgICAgICAgICAgICAgICAgICAgb25DbGljazogX2NhY2hlWzNdIHx8IChfY2FjaGVbM10gPSAoJGV2ZW50KSA9PiAoX2N0eC5vbk5hdkNsaWNrKCdoZWxwJykpKSxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IF9ub3JtYWxpemVDbGFzcyhbXCJidG4gYnRuLXNtIGJ0bi1wcmltYXJ5XCIsIHsgYWN0aXZlOiBfY3R4Lm5hdiA9PSAnaGVscCcgfV0pXG4gICAgICAgICAgICAgICAgfSwgXCJIZWxwXCIsIDIgLyogQ0xBU1MgKi8pKVxuICAgICAgICAgICAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSksXG4gICAgICAgICAgICAoMClcbiAgICAgICAgICAgICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJsaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogMSxcbiAgICAgICAgICAgICAgICAgICAgb25DbGljazogX2NhY2hlWzRdIHx8IChfY2FjaGVbNF0gPSAoJGV2ZW50KSA9PiAoX2N0eC5vbk5hdkNsaWNrKCdhYm91dCcpKSksXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfbm9ybWFsaXplQ2xhc3MoW1wiYnRuIGJ0bi1zbSBidG4tcHJpbWFyeVwiLCB7IGFjdGl2ZTogX2N0eC5uYXYgPT0gJ2Fib3V0JyB9XSlcbiAgICAgICAgICAgICAgICB9LCBcIkFib3V0XCIsIDIgLyogQ0xBU1MgKi8pKVxuICAgICAgICAgICAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSlcbiAgICAgICAgXSlcbiAgICBdKSk7XG59XG4iLCJpbXBvcnQgeyByZXNvbHZlQ29tcG9uZW50IGFzIF9yZXNvbHZlQ29tcG9uZW50LCB2U2hvdyBhcyBfdlNob3csIGNyZWF0ZVZOb2RlIGFzIF9jcmVhdGVWTm9kZSwgd2l0aERpcmVjdGl2ZXMgYXMgX3dpdGhEaXJlY3RpdmVzLCB2TW9kZWxDaGVja2JveCBhcyBfdk1vZGVsQ2hlY2tib3gsIGNyZWF0ZUVsZW1lbnRWTm9kZSBhcyBfY3JlYXRlRWxlbWVudFZOb2RlLCBjcmVhdGVUZXh0Vk5vZGUgYXMgX2NyZWF0ZVRleHRWTm9kZSwgcmVuZGVyTGlzdCBhcyBfcmVuZGVyTGlzdCwgRnJhZ21lbnQgYXMgX0ZyYWdtZW50LCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2ssIHRvRGlzcGxheVN0cmluZyBhcyBfdG9EaXNwbGF5U3RyaW5nLCBub3JtYWxpemVDbGFzcyBhcyBfbm9ybWFsaXplQ2xhc3MsIHB1c2hTY29wZUlkIGFzIF9wdXNoU2NvcGVJZCwgcG9wU2NvcGVJZCBhcyBfcG9wU2NvcGVJZCB9IGZyb20gXCJ2dWVcIjtcbmNvbnN0IF93aXRoU2NvcGVJZCA9IG4gPT4gKF9wdXNoU2NvcGVJZChcImRhdGEtdi0zYzM1NzRmZVwiKSwgbiA9IG4oKSwgX3BvcFNjb3BlSWQoKSwgbik7XG5jb25zdCBfaG9pc3RlZF8xID0geyBjbGFzczogXCJ0b2MtaXRlbS12aWV3XCIgfTtcbmNvbnN0IF9ob2lzdGVkXzIgPSB7IGNsYXNzOiBcInRvYy1pdGVtLWxpc3RcIiB9O1xuY29uc3QgX2hvaXN0ZWRfMyA9IHsgY29sc3BhbjogXCIyXCIgfTtcbmNvbnN0IF9ob2lzdGVkXzQgPSAvKiNfX1BVUkVfXyovIF9jcmVhdGVUZXh0Vk5vZGUoKTtcbmNvbnN0IF9ob2lzdGVkXzUgPSAvKiNfX1BVUkVfXyovIF93aXRoU2NvcGVJZCgoKSA9PiAvKiNfX1BVUkVfXyovIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJzcGFuXCIsIHsgc3R5bGU6IHsgXCJwYWRkaW5nLWxlZnRcIjogXCIuNWVtXCIgfSB9LCBcIkNoZWNrIEFsbFwiLCAtMSAvKiBIT0lTVEVEICovKSk7XG5jb25zdCBfaG9pc3RlZF82ID0gLyojX19QVVJFX18qLyBfd2l0aFNjb3BlSWQoKCkgPT4gLyojX19QVVJFX18qLyBfY3JlYXRlRWxlbWVudFZOb2RlKFwidGhcIiwgbnVsbCwgbnVsbCwgLTEgLyogSE9JU1RFRCAqLykpO1xuY29uc3QgX2hvaXN0ZWRfNyA9IC8qI19fUFVSRV9fKi8gX3dpdGhTY29wZUlkKCgpID0+IC8qI19fUFVSRV9fKi8gX2NyZWF0ZUVsZW1lbnRWTm9kZShcInRoXCIsIHtcbiAgICBjbGFzczogXCJ0ZXh0LWNlbnRlclwiLFxuICAgIHN0eWxlOiB7IFwid2lkdGhcIjogXCI4MHB4XCIgfVxufSwgbnVsbCwgLTEgLyogSE9JU1RFRCAqLykpO1xuY29uc3QgX2hvaXN0ZWRfOCA9IHsgY2xhc3M6IFwiZmNjXCIgfTtcbmNvbnN0IF9ob2lzdGVkXzkgPSBbXCJvbkNsaWNrXCIsIFwib25VcGRhdGU6bW9kZWxWYWx1ZVwiXTtcbmNvbnN0IF9ob2lzdGVkXzEwID0geyBzdHlsZTogeyBcInBhZGRpbmctbGVmdFwiOiBcIi41ZW1cIiB9IH07XG5jb25zdCBfaG9pc3RlZF8xMSA9IHtcbiAgICBjb2xzcGFuOiBcIjJcIixcbiAgICBzdHlsZTogeyBcInRleHQtYWxpZ25cIjogXCJyaWdodFwiIH1cbn07XG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xuICAgIGNvbnN0IF9jb21wb25lbnRfRmV0Y2hRdWV1ZSA9IF9yZXNvbHZlQ29tcG9uZW50KFwiRmV0Y2hRdWV1ZVwiKTtcbiAgICBjb25zdCBfY29tcG9uZW50X0ZldGNoQnV0dG9uID0gX3Jlc29sdmVDb21wb25lbnQoXCJGZXRjaEJ1dHRvblwiKTtcbiAgICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCBfaG9pc3RlZF8xLCBbXG4gICAgICAgIF93aXRoRGlyZWN0aXZlcyhfY3JlYXRlVk5vZGUoX2NvbXBvbmVudF9GZXRjaFF1ZXVlLCB7IHJlZjogXCJmZXRjaFF1ZXVlXCIgfSwgbnVsbCwgNTEyIC8qIE5FRURfUEFUQ0ggKi8pLCBbXG4gICAgICAgICAgICBbX3ZTaG93LCBmYWxzZV1cbiAgICAgICAgXSksXG4gICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJ0YWJsZVwiLCBfaG9pc3RlZF8yLCBbXG4gICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwidGhlYWRcIiwgbnVsbCwgW1xuICAgICAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJ0clwiLCBudWxsLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJ0aFwiLCBfaG9pc3RlZF8zLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwibGFiZWxcIiwgbnVsbCwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF93aXRoRGlyZWN0aXZlcyhfY3JlYXRlRWxlbWVudFZOb2RlKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiBfY2FjaGVbMF0gfHwgKF9jYWNoZVswXSA9ICgkZXZlbnQpID0+IChfY3R4Lm9uQ2hlY2tBbGwoKSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9uVXBkYXRlOm1vZGVsVmFsdWVcIjogX2NhY2hlWzFdIHx8IChfY2FjaGVbMV0gPSAoJGV2ZW50KSA9PiAoKF9jdHguY2hlY2tBbGwpID0gJGV2ZW50KSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBcImZvcm0tY2hlY2staW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgbnVsbCwgNTEyIC8qIE5FRURfUEFUQ0ggKi8pLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdk1vZGVsQ2hlY2tib3gsIF9jdHguY2hlY2tBbGxdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2hvaXN0ZWRfNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaG9pc3RlZF81XG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX2hvaXN0ZWRfNixcbiAgICAgICAgICAgICAgICAgICAgX2hvaXN0ZWRfN1xuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJ0Ym9keVwiLCBudWxsLCBbXG4gICAgICAgICAgICAgICAgKF9vcGVuQmxvY2sodHJ1ZSksIF9jcmVhdGVFbGVtZW50QmxvY2soX0ZyYWdtZW50LCBudWxsLCBfcmVuZGVyTGlzdChfY3R4Lml0ZW1zLCAodG9jLCB0b2NJbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcInRyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfbm9ybWFsaXplQ2xhc3MoW1widG9jLWl0ZW1cIiwgeyBvZHM6IHRvY0luZGV4ICUgMiA9PSAwIH1dKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogdG9jSW5kZXhcbiAgICAgICAgICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInRkXCIsIF9ob2lzdGVkXzgsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfd2l0aERpcmVjdGl2ZXMoX2NyZWF0ZUVsZW1lbnRWTm9kZShcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljazogKCRldmVudCkgPT4gKF9jdHgudGdRdWV1ZSh0b2NJbmRleCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogXCJmb3JtLWNoZWNrLWlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvblVwZGF0ZTptb2RlbFZhbHVlXCI6ICgkZXZlbnQpID0+ICgoX2N0eC5jaGVja2VkUXVldWVzW3RvY0luZGV4XSkgPSAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgX2hvaXN0ZWRfOSksIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192TW9kZWxDaGVja2JveCwgX2N0eC5jaGVja2VkUXVldWVzW3RvY0luZGV4XV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwidGRcIiwgX2hvaXN0ZWRfMTAsIF90b0Rpc3BsYXlTdHJpbmcodG9jLnRpdGxlKSwgMSAvKiBURVhUICovKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJ0ZFwiLCBfaG9pc3RlZF8xMSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jcmVhdGVWTm9kZShfY29tcG9uZW50X0ZldGNoQnV0dG9uLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVXBkYXRlOiBfY2FjaGVbMl0gfHwgKF9jYWNoZVsyXSA9ICgkZXZlbnQpID0+IChfY3R4Lm9uRmV0Y2hVcGRhdGUoJGV2ZW50KSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWN0aW9uSW5kZXg6IF9jdHguc2VjdGlvbkluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2NJbmRleDogdG9jSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYzogdG9jLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWV1ZTogX2N0eC5lbmFibGVRdWV1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmX2ZvcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiBcImZldGNoQnRuc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgW1wic2VjdGlvbkluZGV4XCIsIFwidG9jSW5kZXhcIiwgXCJ0b2NcIiwgXCJxdWV1ZVwiXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0sIDIgLyogQ0xBU1MgKi8pKTtcbiAgICAgICAgICAgICAgICB9KSwgMTI4IC8qIEtFWUVEX0ZSQUdNRU5UICovKSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgXSkpO1xufVxuIiwiaW1wb3J0IHsgdG9EaXNwbGF5U3RyaW5nIGFzIF90b0Rpc3BsYXlTdHJpbmcsIGNyZWF0ZUVsZW1lbnRWTm9kZSBhcyBfY3JlYXRlRWxlbWVudFZOb2RlLCBjcmVhdGVUZXh0Vk5vZGUgYXMgX2NyZWF0ZVRleHRWTm9kZSwgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrIH0gZnJvbSBcInZ1ZVwiO1xuY29uc3QgX2hvaXN0ZWRfMSA9IHsgY2xhc3M6IFwiYWJvdXQtcGFnZSBwYWdlXCIgfTtcbmNvbnN0IF9ob2lzdGVkXzIgPSAvKiNfX1BVUkVfXyovIF9jcmVhdGVUZXh0Vk5vZGUoXCIgdmVyc2lvbiBcIik7XG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xuICAgIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIF9ob2lzdGVkXzEsIFtcbiAgICAgICAgX2hvaXN0ZWRfMixcbiAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInNwYW5cIiwgbnVsbCwgX3RvRGlzcGxheVN0cmluZyhfY3R4LmFwcC52ZXJzaW9uKSwgMSAvKiBURVhUICovKVxuICAgIF0pKTtcbn1cbiIsImltcG9ydCB7IHJlc29sdmVDb21wb25lbnQgYXMgX3Jlc29sdmVDb21wb25lbnQsIGNyZWF0ZVZOb2RlIGFzIF9jcmVhdGVWTm9kZSwgY3JlYXRlRWxlbWVudFZOb2RlIGFzIF9jcmVhdGVFbGVtZW50Vk5vZGUsIHRvRGlzcGxheVN0cmluZyBhcyBfdG9EaXNwbGF5U3RyaW5nLCByZW5kZXJMaXN0IGFzIF9yZW5kZXJMaXN0LCBGcmFnbWVudCBhcyBfRnJhZ21lbnQsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jaywgY3JlYXRlVGV4dFZOb2RlIGFzIF9jcmVhdGVUZXh0Vk5vZGUsIGNyZWF0ZUNvbW1lbnRWTm9kZSBhcyBfY3JlYXRlQ29tbWVudFZOb2RlIH0gZnJvbSBcInZ1ZVwiO1xuY29uc3QgX2hvaXN0ZWRfMSA9IHsgY2xhc3M6IFwiY291cnNlLXBhZ2UgcGFnZVwiIH07XG5jb25zdCBfaG9pc3RlZF8yID0geyBjbGFzczogXCJmc3FjXCIgfTtcbmNvbnN0IF9ob2lzdGVkXzMgPSB7XG4gICAga2V5OiAwLFxuICAgIGNsYXNzOiBcImNvdXJzZVwiXG59O1xuY29uc3QgX2hvaXN0ZWRfNCA9IC8qI19fUFVSRV9fKi8gX2NyZWF0ZUVsZW1lbnRWTm9kZShcImlcIiwgeyBjbGFzczogXCJmYSBmYS1ib29rbWFya1wiIH0sIG51bGwsIC0xIC8qIEhPSVNURUQgKi8pO1xuY29uc3QgX2hvaXN0ZWRfNSA9IHtcbiAgICBjbGFzczogXCJhY2NvcmRpb24gYWNjb3JkaW9uLWZsdXNoXCIsXG4gICAgaWQ6IFwiYWNjb3JkaW9uQ291cnNlXCJcbn07XG5jb25zdCBfaG9pc3RlZF82ID0gW1wiaWRcIl07XG5jb25zdCBfaG9pc3RlZF83ID0geyBjbGFzczogXCJyb3cgY291cnNlLXNlY3Rpb25cIiB9O1xuY29uc3QgX2hvaXN0ZWRfOCA9IFtcImRhdGEtYnMtdGFyZ2V0XCIsIFwiYXJpYS1jb250cm9sc1wiXTtcbmNvbnN0IF9ob2lzdGVkXzkgPSAvKiNfX1BVUkVfXyovIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJpXCIsIHsgY2xhc3M6IFwiZmEgZmEtcGx1c1wiIH0sIG51bGwsIC0xIC8qIEhPSVNURUQgKi8pO1xuY29uc3QgX2hvaXN0ZWRfMTAgPSBbXG4gICAgX2hvaXN0ZWRfOVxuXTtcbmNvbnN0IF9ob2lzdGVkXzExID0ge1xuICAgIGNsYXNzOiBcImNvbC1tZC04XCIsXG4gICAgc3R5bGU6IHsgXCJwYWRkaW5nLWxlZnRcIjogXCIyLjVlbVwiIH1cbn07XG5jb25zdCBfaG9pc3RlZF8xMiA9IHsgY2xhc3M6IFwiY29sLW1kLTRcIiB9O1xuY29uc3QgX2hvaXN0ZWRfMTMgPSBbXCJpZFwiLCBcImFyaWEtbGFiZWxsZWRieVwiXTtcbmNvbnN0IF9ob2lzdGVkXzE0ID0geyBjbGFzczogXCJhY2NvcmRpb24tYm9keVwiIH07XG5jb25zdCBfaG9pc3RlZF8xNSA9IHsgY2xhc3M6IFwibGJjXCIgfTtcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gICAgY29uc3QgX2NvbXBvbmVudF9GZXRjaFNlY3Rpb25RdWV1ZSA9IF9yZXNvbHZlQ29tcG9uZW50KFwiRmV0Y2hTZWN0aW9uUXVldWVcIik7XG4gICAgY29uc3QgX2NvbXBvbmVudF9GZXRjaFF1ZXVlQmFyID0gX3Jlc29sdmVDb21wb25lbnQoXCJGZXRjaFF1ZXVlQmFyXCIpO1xuICAgIGNvbnN0IF9jb21wb25lbnRfVG9jSXRlbSA9IF9yZXNvbHZlQ29tcG9uZW50KFwiVG9jSXRlbVwiKTtcbiAgICBjb25zdCBfY29tcG9uZW50X0xvZ0JhciA9IF9yZXNvbHZlQ29tcG9uZW50KFwiTG9nQmFyXCIpO1xuICAgIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIF9ob2lzdGVkXzEsIFtcbiAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8yLCBbXG4gICAgICAgICAgICBfY3JlYXRlVk5vZGUoX2NvbXBvbmVudF9GZXRjaFNlY3Rpb25RdWV1ZSwgeyByZWY6IFwiZmV0Y2hTZWN0aW9uUXVldWVcIiB9LCBudWxsLCA1MTIgLyogTkVFRF9QQVRDSCAqLylcbiAgICAgICAgXSksXG4gICAgICAgIChfY3R4LmNvdXJzZSlcbiAgICAgICAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCBfaG9pc3RlZF8zLCBbXG4gICAgICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImgyXCIsIG51bGwsIFtcbiAgICAgICAgICAgICAgICAgICAgX2hvaXN0ZWRfNCxcbiAgICAgICAgICAgICAgICAgICAgX2NyZWF0ZVRleHRWTm9kZShcIiBcIiArIF90b0Rpc3BsYXlTdHJpbmcoX2N0eC5jb3Vyc2UudGl0bGUpICsgXCIgYnkgXCIsIDEgLyogVEVYVCAqLyksXG4gICAgICAgICAgICAgICAgICAgIChfb3BlbkJsb2NrKHRydWUpLCBfY3JlYXRlRWxlbWVudEJsb2NrKF9GcmFnbWVudCwgbnVsbCwgX3JlbmRlckxpc3QoX2N0eC5hdXRob3JzLCAoYXV0aG9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcInNwYW5cIiwgbnVsbCwgX3RvRGlzcGxheVN0cmluZyhfY3R4Lm1ha2VUaXRsZShhdXRob3Iuc2x1ZykpLCAxIC8qIFRFWFQgKi8pKTtcbiAgICAgICAgICAgICAgICAgICAgfSksIDI1NiAvKiBVTktFWUVEX0ZSQUdNRU5UICovKSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSkpXG4gICAgICAgICAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpLFxuICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzUsIFtcbiAgICAgICAgICAgIChfb3BlbkJsb2NrKHRydWUpLCBfY3JlYXRlRWxlbWVudEJsb2NrKF9GcmFnbWVudCwgbnVsbCwgX3JlbmRlckxpc3QoX2N0eC5zZWN0aW9ucywgKHNlY3Rpb24sIHNlY3Rpb25JbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBzZWN0aW9uSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiBcImFjY29yZGlvbi1pdGVtXCJcbiAgICAgICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFwiYWNjb3JkaW9uLWhlYWRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdoZWFkaW5nJyArIHNlY3Rpb25JbmRleFxuICAgICAgICAgICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzcsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiYnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFwiYnRuIGJ0bi1kZWZhdWx0IGFjY29yZGlvbi1idXR0b24gY3VzdG9tIGJ0bi1jb2xsYXBzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtYnMtdG9nZ2xlXCI6IFwiY29sbGFwc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLWJzLXRhcmdldFwiOiAnI2NvbGxhcHNlJyArIHNlY3Rpb25JbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhcmlhLWV4cGFuZGVkXCI6IFwiZmFsc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhcmlhLWNvbnRyb2xzXCI6ICdjb2xsYXBzZScgKyBzZWN0aW9uSW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBfaG9pc3RlZF8xMCwgOCAvKiBQUk9QUyAqLywgX2hvaXN0ZWRfOCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8xMSwgX3RvRGlzcGxheVN0cmluZyhzZWN0aW9uLnRpdGxlKSwgMSAvKiBURVhUICovKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzEyLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jcmVhdGVWTm9kZShfY29tcG9uZW50X0ZldGNoUXVldWVCYXIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZl9mb3I6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6IFwiZmV0Y2hRdWV1ZUJhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VjdGlvbkluZGV4OiBzZWN0aW9uSW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgW1wic2VjdGlvbkluZGV4XCJdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdLCA4IC8qIFBST1BTICovLCBfaG9pc3RlZF82KSxcbiAgICAgICAgICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogJ2NvbGxhcHNlJyArIHNlY3Rpb25JbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBcImFjY29yZGlvbi1jb2xsYXBzZSBjb2xsYXBzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogJ2hlYWRpbmcnICsgc2VjdGlvbkluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLWJzLXBhcmVudFwiOiBcIiNhY2NvcmRpb25Db3Vyc2VcIlxuICAgICAgICAgICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzE0LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NyZWF0ZVZOb2RlKF9jb21wb25lbnRfVG9jSXRlbSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogc2VjdGlvbi5pdGVtcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VjdGlvbkluZGV4OiBzZWN0aW9uSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVXBkYXRlOiBfY2FjaGVbMF0gfHwgKF9jYWNoZVswXSA9ICgkZXZlbnQpID0+IChfY3R4Lm9uVG9jVXBkYXRlKCRldmVudCkpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmX2ZvcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiBcInRvY0l0ZW1zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBudWxsLCA4IC8qIFBST1BTICovLCBbXCJpdGVtc1wiLCBcInNlY3Rpb25JbmRleFwiXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0sIDggLyogUFJPUFMgKi8sIF9ob2lzdGVkXzEzKVxuICAgICAgICAgICAgICAgIF0pKTtcbiAgICAgICAgICAgIH0pLCAxMjggLyogS0VZRURfRlJBR01FTlQgKi8pKVxuICAgICAgICBdKSxcbiAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8xNSwgW1xuICAgICAgICAgICAgX2NyZWF0ZVZOb2RlKF9jb21wb25lbnRfTG9nQmFyLCB7IHJlZjogXCJsb2dCYXJcIiB9LCBudWxsLCA1MTIgLyogTkVFRF9QQVRDSCAqLylcbiAgICAgICAgXSlcbiAgICBdKSk7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50Vk5vZGUgYXMgX2NyZWF0ZUVsZW1lbnRWTm9kZSwgdG9EaXNwbGF5U3RyaW5nIGFzIF90b0Rpc3BsYXlTdHJpbmcsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jaywgY3JlYXRlQ29tbWVudFZOb2RlIGFzIF9jcmVhdGVDb21tZW50Vk5vZGUsIHJlbmRlckxpc3QgYXMgX3JlbmRlckxpc3QsIEZyYWdtZW50IGFzIF9GcmFnbWVudCwgdk1vZGVsU2VsZWN0IGFzIF92TW9kZWxTZWxlY3QsIHdpdGhEaXJlY3RpdmVzIGFzIF93aXRoRGlyZWN0aXZlcywgY3JlYXRlVGV4dFZOb2RlIGFzIF9jcmVhdGVUZXh0Vk5vZGUsIHB1c2hTY29wZUlkIGFzIF9wdXNoU2NvcGVJZCwgcG9wU2NvcGVJZCBhcyBfcG9wU2NvcGVJZCB9IGZyb20gXCJ2dWVcIjtcbmNvbnN0IF93aXRoU2NvcGVJZCA9IG4gPT4gKF9wdXNoU2NvcGVJZChcImRhdGEtdi03OTc2YzRmNFwiKSwgbiA9IG4oKSwgX3BvcFNjb3BlSWQoKSwgbik7XG5jb25zdCBfaG9pc3RlZF8xID0geyBjbGFzczogXCJkb3dubG9hZC1wYWdlIHBhZ2VcIiB9O1xuY29uc3QgX2hvaXN0ZWRfMiA9IHtcbiAgICBrZXk6IDAsXG4gICAgY2xhc3M6IFwiZGwtY250IHRleHQtY2VudGVyXCJcbn07XG5jb25zdCBfaG9pc3RlZF8zID0ge1xuICAgIGtleTogMCxcbiAgICBjbGFzczogXCJleGVyY2lzZS1maWxlLWNudFwiXG59O1xuY29uc3QgX2hvaXN0ZWRfNCA9IC8qI19fUFVSRV9fKi8gX3dpdGhTY29wZUlkKCgpID0+IC8qI19fUFVSRV9fKi8gX2NyZWF0ZUVsZW1lbnRWTm9kZShcImxhYmVsXCIsIHsgY2xhc3M6IFwiZm9ybS1sYWJlbFwiIH0sIFwiRXhlcmNpc2UgRmlsZTogXCIsIC0xIC8qIEhPSVNURUQgKi8pKTtcbmNvbnN0IF9ob2lzdGVkXzUgPSBbXCJocmVmXCJdO1xuY29uc3QgX2hvaXN0ZWRfNiA9IHtcbiAgICBrZXk6IDEsXG4gICAgY2xhc3M6IFwiZGwtY29uZmlnLWNudFwiXG59O1xuY29uc3QgX2hvaXN0ZWRfNyA9IC8qI19fUFVSRV9fKi8gX3dpdGhTY29wZUlkKCgpID0+IC8qI19fUFVSRV9fKi8gX2NyZWF0ZUVsZW1lbnRWTm9kZShcImxhYmVsXCIsIHsgY2xhc3M6IFwiZm9ybS1sYWJlbFwiIH0sIFwiU2V0IHZpZGVvIG91dHB1dCBmb3JtYXQgOiBcIiwgLTEgLyogSE9JU1RFRCAqLykpO1xuY29uc3QgX2hvaXN0ZWRfOCA9IC8qI19fUFVSRV9fKi8gX3dpdGhTY29wZUlkKCgpID0+IC8qI19fUFVSRV9fKi8gX2NyZWF0ZUVsZW1lbnRWTm9kZShcIm9wdGlvblwiLCB7IHZhbHVlOiBcIlwiIH0sIFwiLS1DaG9vc2UtLVwiLCAtMSAvKiBIT0lTVEVEICovKSk7XG5jb25zdCBfaG9pc3RlZF85ID0gW1widmFsdWVcIl07XG5jb25zdCBfaG9pc3RlZF8xMCA9IHsgY2xhc3M6IFwiZm9ybS1oZWxwZXJcIiB9O1xuY29uc3QgX2hvaXN0ZWRfMTEgPSB7XG4gICAga2V5OiAyLFxuICAgIGNsYXNzOiBcImRsLXBsYXlsaXN0LWNudFwiXG59O1xuY29uc3QgX2hvaXN0ZWRfMTIgPSAvKiNfX1BVUkVfXyovIF93aXRoU2NvcGVJZCgoKSA9PiAvKiNfX1BVUkVfXyovIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJsYWJlbFwiLCB7IGNsYXNzOiBcImZvcm0tbGFiZWxcIiB9LCBcIlBsYXlsaXN0IEZpbGUgOiBcIiwgLTEgLyogSE9JU1RFRCAqLykpO1xuY29uc3QgX2hvaXN0ZWRfMTMgPSB7IGhyZWY6IFwiamF2YXNjcmlwdDo7XCIgfTtcbmNvbnN0IF9ob2lzdGVkXzE0ID0ge1xuICAgIGtleTogMyxcbiAgICBjbGFzczogXCJkbC1wbGF5bGlzdC1jbnRcIlxufTtcbmNvbnN0IF9ob2lzdGVkXzE1ID0gLyojX19QVVJFX18qLyBfd2l0aFNjb3BlSWQoKCkgPT4gLyojX19QVVJFX18qLyBfY3JlYXRlRWxlbWVudFZOb2RlKFwibGFiZWxcIiwgeyBjbGFzczogXCJmb3JtLWxhYmVsXCIgfSwgXCJIZWxwZXIgU2NyaXB0IDogXCIsIC0xIC8qIEhPSVNURUQgKi8pKTtcbmNvbnN0IF9ob2lzdGVkXzE2ID0geyBocmVmOiBcImphdmFzY3JpcHQ6O1wiIH07XG5jb25zdCBfaG9pc3RlZF8xNyA9IHtcbiAgICBrZXk6IDQsXG4gICAgY2xhc3M6IFwiZXhlcmNpc2UtZmlsZS1jbnRcIlxufTtcbmNvbnN0IF9ob2lzdGVkXzE4ID0gLyojX19QVVJFX18qLyBfd2l0aFNjb3BlSWQoKCkgPT4gLyojX19QVVJFX18qLyBfY3JlYXRlRWxlbWVudFZOb2RlKFwibGFiZWxcIiwgeyBjbGFzczogXCJmb3JtLWxhYmVsXCIgfSwgXCJTb3VyY2UgUmVwb3NpdG9yeSA6IFwiLCAtMSAvKiBIT0lTVEVEICovKSk7XG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xuICAgIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIF9ob2lzdGVkXzEsIFtcbiAgICAgICAgKF9jdHguY291cnNlKVxuICAgICAgICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIF9ob2lzdGVkXzIsIFtcbiAgICAgICAgICAgICAgICAoX2N0eC5leGVyY2lzZUZpbGUpXG4gICAgICAgICAgICAgICAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCBfaG9pc3RlZF8zLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIG51bGwsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaG9pc3RlZF80LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJhXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogX2N0eC5leGVyY2lzZUZpbGUudXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IFwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBfdG9EaXNwbGF5U3RyaW5nKF9jdHguZXhlcmNpc2VGaWxlLm5hbWUpLCA5IC8qIFRFWFQsIFBST1BTICovLCBfaG9pc3RlZF81KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSkpXG4gICAgICAgICAgICAgICAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSksXG4gICAgICAgICAgICAgICAgKF9jdHguZG93bmxvYWRDb25maWcpXG4gICAgICAgICAgICAgICAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCBfaG9pc3RlZF82LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIG51bGwsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaG9pc3RlZF83LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF93aXRoRGlyZWN0aXZlcyhfY3JlYXRlRWxlbWVudFZOb2RlKFwic2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvblVwZGF0ZTptb2RlbFZhbHVlXCI6IF9jYWNoZVswXSB8fCAoX2NhY2hlWzBdID0gKCRldmVudCkgPT4gKChfY3R4LmRvd25sb2FkQ29uZmlnLnNlbGVjdGVkRm10TGlzdCkgPSAkZXZlbnQpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBfY2FjaGVbMV0gfHwgKF9jYWNoZVsxXSA9ICgkZXZlbnQpID0+IChfY3R4LnVwZGF0ZVNlbGVjdGVkRm10KCkpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgXCJ3aWR0aFwiOiBcIjEyMHB4XCIsIFwiZGlzcGxheVwiOiBcImlubGluZVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9ob2lzdGVkXzgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChfb3BlbkJsb2NrKHRydWUpLCBfY3JlYXRlRWxlbWVudEJsb2NrKF9GcmFnbWVudCwgbnVsbCwgX3JlbmRlckxpc3QoX2N0eC5kb3dubG9hZENvbmZpZy5mbXRMaXN0LCAoZm10KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcIm9wdGlvblwiLCB7IHZhbHVlOiBmbXQgfSwgX3RvRGlzcGxheVN0cmluZyhmbXQpLCA5IC8qIFRFWFQsIFBST1BTICovLCBfaG9pc3RlZF85KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCAyNTYgLyogVU5LRVlFRF9GUkFHTUVOVCAqLykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSwgNTQ0IC8qIEhZRFJBVEVfRVZFTlRTLCBORUVEX1BBVENIICovKSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZNb2RlbFNlbGVjdCwgX2N0eC5kb3dubG9hZENvbmZpZy5zZWxlY3RlZEZtdExpc3RdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInNwYW5cIiwgX2hvaXN0ZWRfMTAsIFwiQXZhaWxhYmxlIHZpZGVvIGZvcm1hdDogXCIgKyBfdG9EaXNwbGF5U3RyaW5nKF9jdHguZG93bmxvYWRDb25maWcuZm10TGlzdC5qb2luKCcsICcpKSwgMSAvKiBURVhUICovKVxuICAgICAgICAgICAgICAgICAgICBdKSlcbiAgICAgICAgICAgICAgICAgICAgOiBfY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKSxcbiAgICAgICAgICAgICAgICAoX2N0eC5kb3dubG9hZENvbmZpZy5zZWxlY3RlZEZtdExpc3QpXG4gICAgICAgICAgICAgICAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCBfaG9pc3RlZF8xMSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2hvaXN0ZWRfMTIsXG4gICAgICAgICAgICAgICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiYVwiLCBfaG9pc3RlZF8xMywgX3RvRGlzcGxheVN0cmluZyhfY3R4LmNvdXJzZS5zbHVnKSArIFwiLVwiICsgX3RvRGlzcGxheVN0cmluZyhfY3R4LmRvd25sb2FkQ29uZmlnLnNlbGVjdGVkRm10TGlzdCkgKyBcIi5tM3VcIiwgMSAvKiBURVhUICovKVxuICAgICAgICAgICAgICAgICAgICBdKSlcbiAgICAgICAgICAgICAgICAgICAgOiBfY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKSxcbiAgICAgICAgICAgICAgICAoX2N0eC5kb3dubG9hZENvbmZpZy5zZWxlY3RlZEZtdExpc3QpXG4gICAgICAgICAgICAgICAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCBfaG9pc3RlZF8xNCwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2hvaXN0ZWRfMTUsXG4gICAgICAgICAgICAgICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiYVwiLCBfaG9pc3RlZF8xNiwgX3RvRGlzcGxheVN0cmluZyhfY3R4LmNvdXJzZS5zbHVnKSArIFwiLVwiICsgX3RvRGlzcGxheVN0cmluZyhfY3R4LmRvd25sb2FkQ29uZmlnLnNlbGVjdGVkRm10TGlzdCkgKyBcIi11dGlsLnNoXCIsIDEgLyogVEVYVCAqLylcbiAgICAgICAgICAgICAgICAgICAgXSkpXG4gICAgICAgICAgICAgICAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSksXG4gICAgICAgICAgICAgICAgKF9jdHguY291cnNlLnNvdXJjZUNvZGVSZXBvc2l0b3J5KVxuICAgICAgICAgICAgICAgICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwgX2hvaXN0ZWRfMTcsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgbnVsbCwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9ob2lzdGVkXzE4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jcmVhdGVUZXh0Vk5vZGUoXCIgXCIgKyBfdG9EaXNwbGF5U3RyaW5nKF9jdHguY291cnNlLnNvdXJjZUNvZGVSZXBvc2l0b3J5KSwgMSAvKiBURVhUICovKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSkpXG4gICAgICAgICAgICAgICAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSlcbiAgICAgICAgICAgIF0pKVxuICAgICAgICAgICAgOiBfY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKVxuICAgIF0pKTtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnRWTm9kZSBhcyBfY3JlYXRlRWxlbWVudFZOb2RlLCBjcmVhdGVUZXh0Vk5vZGUgYXMgX2NyZWF0ZVRleHRWTm9kZSwgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrIH0gZnJvbSBcInZ1ZVwiO1xuY29uc3QgX2hvaXN0ZWRfMSA9IHsgY2xhc3M6IFwiaGVscC1wYWdlIHBhZ2VcIiB9O1xuY29uc3QgX2hvaXN0ZWRfMiA9IC8qI19fUFVSRV9fKi8gX2NyZWF0ZVRleHRWTm9kZShcIiBIRUxQIFwiKTtcbmNvbnN0IF9ob2lzdGVkXzMgPSAvKiNfX1BVUkVfXyovIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJpXCIsIHsgY2xhc3M6IFwiZmEgZmEtc3luY1wiIH0sIG51bGwsIC0xIC8qIEhPSVNURUQgKi8pO1xuY29uc3QgX2hvaXN0ZWRfNCA9IC8qI19fUFVSRV9fKi8gX2NyZWF0ZVRleHRWTm9kZShcIiBTeW5jIExTXCIpO1xuY29uc3QgX2hvaXN0ZWRfNSA9IFtcbiAgICBfaG9pc3RlZF8zLFxuICAgIF9ob2lzdGVkXzRcbl07XG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xuICAgIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIF9ob2lzdGVkXzEsIFtcbiAgICAgICAgX2hvaXN0ZWRfMixcbiAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBudWxsLCBbXG4gICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiYnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICBjbGFzczogXCJidG4gYnRuLWRhbmdlclwiLFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6IF9jYWNoZVswXSB8fCAoX2NhY2hlWzBdID0gKCRldmVudCkgPT4gKF9jdHguc3luY0xTKCkpKVxuICAgICAgICAgICAgfSwgX2hvaXN0ZWRfNSlcbiAgICAgICAgXSlcbiAgICBdKSk7XG59XG4iLCJpbXBvcnQgeyB0b0Rpc3BsYXlTdHJpbmcgYXMgX3RvRGlzcGxheVN0cmluZywgY3JlYXRlRWxlbWVudFZOb2RlIGFzIF9jcmVhdGVFbGVtZW50Vk5vZGUsIGNyZWF0ZVRleHRWTm9kZSBhcyBfY3JlYXRlVGV4dFZOb2RlLCByZW5kZXJMaXN0IGFzIF9yZW5kZXJMaXN0LCBGcmFnbWVudCBhcyBfRnJhZ21lbnQsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jaywgY3JlYXRlQ29tbWVudFZOb2RlIGFzIF9jcmVhdGVDb21tZW50Vk5vZGUsIG5vcm1hbGl6ZUNsYXNzIGFzIF9ub3JtYWxpemVDbGFzcyB9IGZyb20gXCJ2dWVcIjtcbmNvbnN0IF9ob2lzdGVkXzEgPSB7IGNsYXNzOiBcIndlbGNvbWUtcGFnZSBwYWdlXCIgfTtcbmNvbnN0IF9ob2lzdGVkXzIgPSB7IGNsYXNzOiBcInRleHQtY2VudGVyXCIgfTtcbmNvbnN0IF9ob2lzdGVkXzMgPSB7IGNsYXNzOiBcImFjdGlvbi1jbnRcIiB9O1xuY29uc3QgX2hvaXN0ZWRfNCA9IHtcbiAgICBrZXk6IDAsXG4gICAgY2xhc3M6IFwiZHJvcGRvd25cIlxufTtcbmNvbnN0IF9ob2lzdGVkXzUgPSAvKiNfX1BVUkVfXyovIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJidXR0b25cIiwge1xuICAgIGNsYXNzOiBcImJ0biBidG4tc2Vjb25kYXJ5IGRyb3Bkb3duLXRvZ2dsZVwiLFxuICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgaWQ6IFwicmVjZW50Q291cnNlQnV0dG9uXCIsXG4gICAgXCJkYXRhLWJzLXRvZ2dsZVwiOiBcImRyb3Bkb3duXCIsXG4gICAgXCJhcmlhLWV4cGFuZGVkXCI6IFwiZmFsc2VcIlxufSwgW1xuICAgIC8qI19fUFVSRV9fKi8gX2NyZWF0ZUVsZW1lbnRWTm9kZShcImlcIiwgeyBjbGFzczogXCJmYSBmYS1oaXN0b3J5XCIgfSksXG4gICAgLyojX19QVVJFX18qLyBfY3JlYXRlVGV4dFZOb2RlKFwiIExvYWQgUmVjZW50IENvdXJzZSBcIilcbl0sIC0xIC8qIEhPSVNURUQgKi8pO1xuY29uc3QgX2hvaXN0ZWRfNiA9IHtcbiAgICBjbGFzczogXCJkcm9wZG93bi1tZW51XCIsXG4gICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogXCJyZWNlbnRDb3Vyc2VCdXR0b25cIlxufTtcbmNvbnN0IF9ob2lzdGVkXzcgPSBbXCJvbkNsaWNrXCJdO1xuY29uc3QgX2hvaXN0ZWRfOCA9IHsgY2xhc3M6IFwiYnRuLWNudFwiIH07XG5jb25zdCBfaG9pc3RlZF85ID0gW1wiZGlzYWJsZWRcIl07XG5jb25zdCBfaG9pc3RlZF8xMCA9IC8qI19fUFVSRV9fKi8gX2NyZWF0ZVRleHRWTm9kZShcIiBGZXRjaCBUaGlzIENvdXJzZVwiKTtcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gICAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwgX2hvaXN0ZWRfMSwgW1xuICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwicFwiLCBfaG9pc3RlZF8yLCBfdG9EaXNwbGF5U3RyaW5nKF9jdHguZ3JlZXRpbmcpLCAxIC8qIFRFWFQgKi8pLFxuICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzMsIFtcbiAgICAgICAgICAgIChfY3R4Lmxhc3RDb3Vyc2VMaXN0Lmxlbmd0aCA+IDApXG4gICAgICAgICAgICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIF9ob2lzdGVkXzQsIFtcbiAgICAgICAgICAgICAgICAgICAgX2hvaXN0ZWRfNSxcbiAgICAgICAgICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInVsXCIsIF9ob2lzdGVkXzYsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIChfb3BlbkJsb2NrKHRydWUpLCBfY3JlYXRlRWxlbWVudEJsb2NrKF9GcmFnbWVudCwgbnVsbCwgX3JlbmRlckxpc3QoX2N0eC5sYXN0Q291cnNlTGlzdCwgKGNvdXJzZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwibGlcIiwgbnVsbCwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiYVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogXCJkcm9wZG93bi1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOiBcImphdmFzY3JpcHQ6O1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljazogKCRldmVudCkgPT4gKF9jdHgubG9hZFJlY2VudENvdXJzZShjb3Vyc2UpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBfdG9EaXNwbGF5U3RyaW5nKGNvdXJzZS50aXRsZSksIDkgLyogVEVYVCwgUFJPUFMgKi8sIF9ob2lzdGVkXzcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSksIDI1NiAvKiBVTktFWUVEX0ZSQUdNRU5UICovKSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKSlcbiAgICAgICAgICAgICAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpLFxuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF84LCBbXG4gICAgICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBfY3R4LmZldGNoQnRuU3RhdGUgPT0gMSxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6IF9jYWNoZVswXSB8fCAoX2NhY2hlWzBdID0gKCRldmVudCkgPT4gKF9jdHgucmV0cmlldmVEYXRhQ29kZXNGcm9tQ29udGVudCgpKSlcbiAgICAgICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfbm9ybWFsaXplQ2xhc3MoW1wiZmFcIiwgeyAnZmEtaGFuZC1vLXJpZ2h0JzogX2N0eC5mZXRjaEJ0blN0YXRlID09IDAsICdmYS1zcGluIGZhLXNwaW5uZXInOiBfY3R4LmZldGNoQnRuU3RhdGUgPT0gMSwgJ2ZhLXJlZnJlc2gnOiBfY3R4LmZldGNoQnRuU3RhdGUgPT0gMiB9XSlcbiAgICAgICAgICAgICAgICAgICAgfSwgbnVsbCwgMiAvKiBDTEFTUyAqLyksXG4gICAgICAgICAgICAgICAgICAgIF9ob2lzdGVkXzEwXG4gICAgICAgICAgICAgICAgXSwgOCAvKiBQUk9QUyAqLywgX2hvaXN0ZWRfOSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgXSkpO1xufVxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmNsYXNzIFByb3h5IHtcbiAgICBzdGF0aWMgYXN5bmMgY3JlYXRlKHVybCwgbWV0aG9kLCBwb3N0RGF0YSkge1xuICAgICAgICBsZXQgaGVhZGVycyA9IHtcbiAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonXG4gICAgICAgIH07XG4gICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICAgIH07XG4gICAgICAgIGlmIChtZXRob2QgPT0gJ3Bvc3QnKSB7XG4gICAgICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBwb3N0RGF0YSkge1xuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChrZXksIHBvc3REYXRhW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3B0aW9ucy5oZWFkZXJzWydDb250ZW50LVR5cGUnXSA9ICdtdWx0aXBhcnQvZm9ybS1kYXRhJztcbiAgICAgICAgICAgIG9wdGlvbnNbJ2RhdGEnXSA9IGZvcm1EYXRhO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKG9wdGlvbnMpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQodXJsLCBjYlN1Y2Nlc3MsIGNiRXJyb3IpIHtcbiAgICAgICAgYXhpb3Moe1xuICAgICAgICAgICAgbWV0aG9kOiAnZ2V0JyxcbiAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKidcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgY2JTdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgY2JTdWNjZXNzKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBjYkVycm9yKSB7XG4gICAgICAgICAgICAgICAgY2JFcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgcG9zdCh1cmwsIHBvc3REYXRhLCBjYlN1Y2Nlc3MsIGNiRXJyb3IsIG9wdEFyZ3MpIHtcbiAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBwb3N0RGF0YSkge1xuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGtleSwgcG9zdERhdGFba2V5XSk7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0QXJncyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBuIGluIG9wdEFyZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGYgPSBvcHRBcmdzW25dO1xuICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQobiwgZik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgfVxuICAgICAgICBheGlvcyh7XG4gICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgZGF0YTogZm9ybURhdGEsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnLFxuICAgICAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKidcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgY2JTdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgY2JTdWNjZXNzKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBjYkVycm9yKSB7XG4gICAgICAgICAgICAgICAgY2JFcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFByb3h5O1xuIiwiaW1wb3J0IGxvY2FsU3RvcmFnZURCIGZyb20gXCJsb2NhbFN0b3JhZ2VEQlwiO1xuaW1wb3J0IFByb3h5IGZyb20gXCIuL3Byb3h5XCI7XG5pbXBvcnQgeyBtYWtlU2x1ZywgbWFrZVRpdGxlIH0gZnJvbSBcIi4vdXRpbHNcIjtcbmNsYXNzIE15TFMge1xuICAgIGRiO1xuICAgIHN1YnNjcmliZXJzID0ge307XG4gICAgbGFzdFRhYmxlID0gJyc7XG4gICAgbGFzdFRhYmxlUGs7XG4gICAgY29uc3RydWN0b3IoZGIsIGVuZ2luZSkge1xuICAgICAgICB0aGlzLmRiID0gbmV3IGxvY2FsU3RvcmFnZURCKGRiLCBlbmdpbmUpO1xuICAgIH1cbiAgICBzdWJzY3JpYmUodGFibGUsIGZuKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlcnNbdGFibGVdID0gZm47XG4gICAgfVxuICAgIHVwZGF0ZSh0YWJsZSwgcXVlcnksIHVwZGF0ZSkge1xuICAgICAgICBjb25zdCByZXQgPSB0aGlzLmRiLnVwZGF0ZSh0YWJsZSwgcXVlcnksIHVwZGF0ZSk7XG4gICAgICAgIHRoaXMubGFzdFRhYmxlID0gdGFibGU7XG4gICAgICAgIHRoaXMubGFzdFRhYmxlUGsgPSByZXQ7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuICAgIGluc2VydChhLCBiKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRiLmluc2VydChhLCBiKTtcbiAgICB9XG4gICAgcXVlcnlBbGwoYSwgYikge1xuICAgICAgICByZXR1cm4gdGhpcy5kYi5xdWVyeUFsbChhLCBiKTtcbiAgICB9XG4gICAgZ2V0Um93KHRhYmxlLCBJRCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYi5xdWVyeUFsbCh0YWJsZSwgeyBJRCB9KVswXTtcbiAgICB9XG4gICAgY29tbWl0KCkge1xuICAgICAgICBjb25zdCByZXQgPSB0aGlzLmRiLmNvbW1pdCgpO1xuICAgICAgICBpZiAodGhpcy5sYXN0VGFibGUgIT09ICcnKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuc3Vic2NyaWJlcnNbdGhpcy5sYXN0VGFibGVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm93ID0gdGhpcy5nZXRSb3codGhpcy5sYXN0VGFibGUsIHRoaXMubGFzdFRhYmxlUGspO1xuICAgICAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlcnNbdGhpcy5sYXN0VGFibGVdKHJvdyk7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0VGFibGUgPSAnJztcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RUYWJsZVBrID0gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG4gICAgaXNOZXcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRiLmlzTmV3KCk7XG4gICAgfVxuICAgIGNyZWF0ZVRhYmxlKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGIuY3JlYXRlVGFibGUoYSwgYik7XG4gICAgfVxuICAgIHRhYmxlRXhpc3RzKHRhYmxlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRiLnRhYmxlRXhpc3RzKHRhYmxlKTtcbiAgICB9XG59XG5jbGFzcyBTdG9yZSB7XG4gICAgc3RhdGljIF9fZGJfXztcbiAgICBzdGF0aWMgZGIoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgU3RvcmUuX19kYl9fID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgU3RvcmUuX19kYl9fID0gbmV3IE15TFMoXCJsZWFybmluZ1wiLCAnbG9jYWxTdG9yYWdlJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFN0b3JlLl9fZGJfXztcbiAgICB9XG4gICAgc3RhdGljIGluaXQoKSB7XG4gICAgICAgIGNvbnN0IGRiID0gU3RvcmUuZGIoKTtcbiAgICAgICAgaWYgKGRiLmlzTmV3KCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHNjaGVtYSA9IHtcbiAgICAgICAgICAgICAgICBjb3Vyc2U6IFtcInRpdGxlXCIsIFwic2x1Z1wiLCBcImR1cmF0aW9uXCIsIFwic291cmNlQ29kZVJlcG9zaXRvcnlcIiwgXCJkZXNjcmlwdGlvblwiLCAnYXV0aG9ySWRzJ10sXG4gICAgICAgICAgICAgICAgYXV0aG9yOiBbXCJuYW1lXCIsIFwic2x1Z1wiLCBcImJpb2dyYXBoeVwiLCBcInNob3J0QmlvZ3JhcGh5XCIsIFwiY291cnNlSWRzXCJdLFxuICAgICAgICAgICAgICAgIGV4ZXJjaXNlRmlsZTogW1wiY291cnNlSWRcIiwgXCJuYW1lXCIsIFwidXJsXCIsIFwic2l6ZVwiXSxcbiAgICAgICAgICAgICAgICBzZWN0aW9uOiBbXCJjb3Vyc2VJZFwiLCBcInNsdWdcIiwgXCJ0aXRsZVwiXSxcbiAgICAgICAgICAgICAgICB0b2M6IFtcInNlY3Rpb25JZFwiLCBcInRpdGxlXCIsIFwic2x1Z1wiLCBcInVybFwiLCBcImR1cmF0aW9uXCIsIFwiY2FwdGlvblVybFwiLCBcImNhcHRpb25GbXRcIiwgXCJzdHJlYW1Mb2NhdGlvbklkc1wiXSxcbiAgICAgICAgICAgICAgICBzdHJlYW1Mb2NhdGlvbjogW1widG9jSWRcIiwgXCJmbXRcIiwgXCJ1cmxcIl0sXG4gICAgICAgICAgICAgICAgZG93bmxvYWRDb25maWc6IFtcImNvdXJzZUlkXCIsIFwiZm10TGlzdFwiLCBcInNlbGVjdGVkRm10TGlzdFwiXSxcbiAgICAgICAgICAgICAgICBkb3dubG9hZHM6IFtcInRvY0lkXCIsIFwiZG93bmxvYWRJZFwiLCBcImZpbGVuYW1lXCIsIFwicHJvZ3Jlc3NcIiwgXCJzdGF0dXNcIl0sXG4gICAgICAgICAgICAgICAgYXBwOiBbXCJ2ZXJzaW9uXCIsIFwic3RhdGVcIiwgXCJsYXN0Q291cnNlU2x1Z1wiXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHNjaGVtYSkubWFwKCh0YWJsZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghZGIudGFibGVFeGlzdHModGFibGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRiLmNyZWF0ZVRhYmxlKHRhYmxlLCBzY2hlbWFbdGFibGVdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRiLmNvbW1pdCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBnZXRFeGVyY2lzZUZpbGUoY291cnNlSWQpIHtcbiAgICAgICAgY29uc3QgZGIgPSBTdG9yZS5kYigpO1xuICAgICAgICBjb25zdCByZXN1bHRzID0gZGIucXVlcnlBbGwoJ2V4ZXJjaXNlRmlsZScsIHsgcXVlcnk6IHsgY291cnNlSWQgfSB9KTtcbiAgICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHNbMF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRDb3Vyc2Uoc2x1Zykge1xuICAgICAgICBjb25zdCBkYiA9IFN0b3JlLmRiKCk7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBkYi5xdWVyeUFsbCgnY291cnNlJywgeyBxdWVyeTogeyBzbHVnIH0gfSk7XG4gICAgICAgIGlmIChyZXN1bHRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRzWzBdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0TGFzdENvdXJzZXMoc2x1Zykge1xuICAgICAgICBjb25zdCBkYiA9IFN0b3JlLmRiKCk7XG4gICAgICAgIGlmICh0eXBlb2Ygc2x1ZyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGNvbnN0IGFwcFN0YXRlID0gU3RvcmUuZ2V0QXBwU3RhdGUoKTtcbiAgICAgICAgICAgIHNsdWcgPSBhcHBTdGF0ZS5sYXN0Q291cnNlU2x1ZztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXN1bHRzID0gZGIucXVlcnlBbGwoJ2NvdXJzZScsIHsgcXVlcnk6IChyb3cpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocm93LnNsdWcgIT09IHNsdWcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRDb3Vyc2VCeUlkKElEKSB7XG4gICAgICAgIGNvbnN0IGRiID0gU3RvcmUuZGIoKTtcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IGRiLnF1ZXJ5QWxsKCdjb3Vyc2UnLCB7IHF1ZXJ5OiB7IElEIH0gfSk7XG4gICAgICAgIGlmIChyZXN1bHRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRzWzBdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0U2VjdGlvbihzbHVnLCBjb3Vyc2VJZCkge1xuICAgICAgICBjb25zdCBkYiA9IFN0b3JlLmRiKCk7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBkYi5xdWVyeUFsbCgnc2VjdGlvbicsIHsgcXVlcnk6IHsgc2x1ZywgY291cnNlSWQgfSB9KTtcbiAgICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHNbMF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRTZWN0aW9uc0J5Q291cnNlSWQoY291cnNlSWQpIHtcbiAgICAgICAgY29uc3QgZGIgPSBTdG9yZS5kYigpO1xuICAgICAgICBjb25zdCByZXN1bHRzID0gZGIucXVlcnlBbGwoJ3NlY3Rpb24nLCB7IHF1ZXJ5OiB7IGNvdXJzZUlkIH0gfSk7XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0VG9jc0J5U2VjdGlvbklkKHNlY3Rpb25JZCkge1xuICAgICAgICBjb25zdCBkYiA9IFN0b3JlLmRiKCk7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBkYi5xdWVyeUFsbCgndG9jJywgeyBxdWVyeTogeyBzZWN0aW9uSWQgfSB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRUb2Moc2x1Zykge1xuICAgICAgICBjb25zdCBkYiA9IFN0b3JlLmRiKCk7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBkYi5xdWVyeUFsbCgndG9jJywgeyBxdWVyeTogeyBzbHVnIH0gfSk7XG4gICAgICAgIGlmIChyZXN1bHRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRzWzBdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0QXV0aG9yKHNsdWcpIHtcbiAgICAgICAgY29uc3QgZGIgPSBTdG9yZS5kYigpO1xuICAgICAgICBjb25zdCByZXN1bHRzID0gZGIucXVlcnlBbGwoJ2F1dGhvcicsIHsgcXVlcnk6IHsgc2x1ZyB9IH0pO1xuICAgICAgICBpZiAocmVzdWx0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0c1swXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgc3RhdGljIGdldEF1dGhvckJ5SWQoSUQpIHtcbiAgICAgICAgY29uc3QgZGIgPSBTdG9yZS5kYigpO1xuICAgICAgICBjb25zdCByZXN1bHRzID0gZGIucXVlcnlBbGwoJ2F1dGhvcicsIHsgcXVlcnk6IHsgSUQgfSB9KTtcbiAgICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHNbMF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHN0YXRpYyBnZXREb3dubG9hZENvbmZpZyhjb3Vyc2VJZCkge1xuICAgICAgICBjb25zdCBkYiA9IFN0b3JlLmRiKCk7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBkYi5xdWVyeUFsbCgnZG93bmxvYWRDb25maWcnLCB7IHF1ZXJ5OiB7IGNvdXJzZUlkIH0gfSk7XG4gICAgICAgIGlmIChyZXN1bHRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRzWzBdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBzdGF0aWMgY3JlYXRlQXV0aG9yKG5hbWUsIHNsdWcsIGJpb2dyYXBoeSwgc2hvcnRCaW9ncmFwaHksIGNvdXJzZUlkKSB7XG4gICAgICAgIGNvbnN0IGRiID0gU3RvcmUuZGIoKTtcbiAgICAgICAgbGV0IGF1dGhvciA9IFN0b3JlLmdldEF1dGhvcihzbHVnKTtcbiAgICAgICAgaWYgKGF1dGhvcikge1xuICAgICAgICAgICAgY29uc3QgY291cnNlSWRzID0gYXV0aG9yLmNvdXJzZUlkcztcbiAgICAgICAgICAgIGlmICghY291cnNlSWRzLmluY2x1ZGVzKGNvdXJzZUlkKSkge1xuICAgICAgICAgICAgICAgIGNvdXJzZUlkcy5wdXNoKGNvdXJzZUlkKTtcbiAgICAgICAgICAgICAgICBkYi51cGRhdGUoJ2F1dGhvcicsIHsgc2x1ZyB9LCAocm93KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJvdy5jb3Vyc2VJZHMgPSBjb3Vyc2VJZHM7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByb3c7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IGRiLmNvbW1pdCgpOyB9LCAxMDApO1xuICAgICAgICAgICAgICAgIGF1dGhvci5jb3Vyc2VJZHMgPSBjb3Vyc2VJZHM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBjb3Vyc2VJZHMgPSBbXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY291cnNlSWQgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgY291cnNlSWRzLnB1c2goY291cnNlSWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgSUQgPSAwO1xuICAgICAgICAgICAgYXV0aG9yID0geyBJRCwgbmFtZSwgc2x1ZywgYmlvZ3JhcGh5LCBzaG9ydEJpb2dyYXBoeSwgY291cnNlSWRzIH07XG4gICAgICAgICAgICBhdXRob3IuSUQgPSBkYi5pbnNlcnQoJ2F1dGhvcicsIGF1dGhvcik7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgZGIuY29tbWl0KCk7IH0sIDEwMCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGF1dGhvcjtcbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZUF1dGhvckxpc3QoY291cnNlU2x1ZywgYXV0aG9ycykge1xuICAgICAgICBjb25zdCBkYiA9IFN0b3JlLmRiKCk7XG4gICAgICAgIGNvbnN0IGNvdXJzZSA9IFN0b3JlLmdldENvdXJzZShjb3Vyc2VTbHVnKTtcbiAgICAgICAgY29uc3QgYXV0aG9yUmVzdWx0cyA9IFtdO1xuICAgICAgICBpZiAoY291cnNlKSB7XG4gICAgICAgICAgICBsZXQgYXV0aG9ySWRzID0gY291cnNlLmF1dGhvcklkcztcbiAgICAgICAgICAgIGF1dGhvcnMubWFwKChhdXRob3JUbXApID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhdXRob3JUbXApO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBtYWtlVGl0bGUoYXV0aG9yVG1wLnNsdWcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGF1dGhvciA9IFN0b3JlLmNyZWF0ZUF1dGhvcihuYW1lLCBhdXRob3JUbXAuc2x1ZywgYXV0aG9yVG1wLmJpb2dyYXBoeSwgYXV0aG9yVG1wLnNob3J0QmlvZ3JhcGh5LCBjb3Vyc2UuSUQpO1xuICAgICAgICAgICAgICAgIGlmICghYXV0aG9ySWRzLmluY2x1ZGVzKGF1dGhvci5JRCkpIHtcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9ySWRzLnB1c2goYXV0aG9yLklEKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXV0aG9yUmVzdWx0cy5wdXNoKGF1dGhvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRiLnVwZGF0ZSgnY291cnNlJywgeyBzbHVnOiBjb3Vyc2VTbHVnIH0sIChyb3cpID0+IHtcbiAgICAgICAgICAgICAgICByb3cuYXV0aG9ySWRzID0gYXV0aG9ySWRzO1xuICAgICAgICAgICAgICAgIHJldHVybiByb3c7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRiLmNvbW1pdCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhdXRob3JSZXN1bHRzO1xuICAgIH1cbiAgICBzdGF0aWMgdXBkYXRlVG9jQ2FwdGlvbihzbHVnLCBjYXB0aW9uVXJsLCBjYXB0aW9uRm10KSB7XG4gICAgICAgIGNvbnN0IGRiID0gU3RvcmUuZGIoKTtcbiAgICAgICAgY29uc3QgdG9jID0gU3RvcmUuZ2V0VG9jKHNsdWcpO1xuICAgICAgICBpZiAodG9jKSB7XG4gICAgICAgICAgICBkYi51cGRhdGUoXCJ0b2NcIiwgeyBzbHVnIH0sIGZ1bmN0aW9uIChuZXdUb2MpIHtcbiAgICAgICAgICAgICAgICBuZXdUb2MuY2FwdGlvblVybCA9IGNhcHRpb25Vcmw7XG4gICAgICAgICAgICAgICAgbmV3VG9jLmNhcHRpb25GbXQgPSBjYXB0aW9uRm10O1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXdUb2M7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRiLmNvbW1pdCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBnZXRTdHJlYW1Mb2NhdGlvbih0b2NJZCwgZm10KSB7XG4gICAgICAgIGNvbnN0IGRiID0gU3RvcmUuZGIoKTtcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IGRiLnF1ZXJ5QWxsKCdzdHJlYW1Mb2NhdGlvbicsIHsgcXVlcnk6IHsgdG9jSWQsIGZtdCB9IH0pO1xuICAgICAgICBpZiAocmVzdWx0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0c1swXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgc3RhdGljIGdldFN0cmVhbUxvY2F0aW9ucyh0b2NJZCkge1xuICAgICAgICBjb25zdCBkYiA9IFN0b3JlLmRiKCk7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBkYi5xdWVyeUFsbCgnc3RyZWFtTG9jYXRpb24nLCB7IHF1ZXJ5OiB7IHRvY0lkIH0gfSk7XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH1cbiAgICBzdGF0aWMgY3JlYXRlU3RyZWFtTG9jYXRpb24odG9jSWQsIGZtdCwgdXJsKSB7XG4gICAgICAgIGNvbnN0IGRiID0gU3RvcmUuZGIoKTtcbiAgICAgICAgbGV0IHN0cmVhbUxvY2F0aW9uID0gU3RvcmUuZ2V0U3RyZWFtTG9jYXRpb24odG9jSWQsIGZtdCk7XG4gICAgICAgIGlmIChzdHJlYW1Mb2NhdGlvbikge1xuICAgICAgICAgICAgc3RyZWFtTG9jYXRpb24udXJsID0gdXJsO1xuICAgICAgICAgICAgZGIudXBkYXRlKCdzdHJlYW1Mb2NhdGlvbicsIChyb3cpID0+IHtcbiAgICAgICAgICAgICAgICByb3cudXJsID0gdXJsO1xuICAgICAgICAgICAgICAgIHJldHVybiByb3c7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IElEID0gMDtcbiAgICAgICAgICAgIHN0cmVhbUxvY2F0aW9uID0geyBJRCwgdG9jSWQsIGZtdCwgdXJsIH07XG4gICAgICAgICAgICBzdHJlYW1Mb2NhdGlvbi5JRCA9IGRiLmluc2VydCgnc3RyZWFtTG9jYXRpb24nLCBzdHJlYW1Mb2NhdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBkYi5jb21taXQoKSwgMTAwKTtcbiAgICAgICAgcmV0dXJuIHN0cmVhbUxvY2F0aW9uO1xuICAgIH1cbiAgICBzdGF0aWMgdXBkYXRlRG93bmxvYWRDb25maWcoZmllbGROYW1lLCBkYXRhLCBjb3Vyc2VJZCkge1xuICAgICAgICBjb25zdCBkYiA9IFN0b3JlLmRiKCk7XG4gICAgICAgIGxldCBkb3dubG9hZENvbmZpZyA9IFN0b3JlLmdldERvd25sb2FkQ29uZmlnKGNvdXJzZUlkKTtcbiAgICAgICAgaWYgKGRvd25sb2FkQ29uZmlnKSB7XG4gICAgICAgICAgICBkYi51cGRhdGUoJ2Rvd25sb2FkQ29uZmlnJywgeyBjb3Vyc2VJZCB9LCAocm93KSA9PiB7XG4gICAgICAgICAgICAgICAgcm93W2ZpZWxkTmFtZV0gPSBkYXRhO1xuICAgICAgICAgICAgICAgIHJldHVybiByb3c7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IElEID0gMDtcbiAgICAgICAgICAgIGNvbnN0IGZtdExpc3QgPSBbXTtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkRm10TGlzdCA9ICcnO1xuICAgICAgICAgICAgZG93bmxvYWRDb25maWcgPSB7IElELCBjb3Vyc2VJZCwgZm10TGlzdCwgc2VsZWN0ZWRGbXRMaXN0IH07XG4gICAgICAgICAgICBkb3dubG9hZENvbmZpZ1tmaWVsZE5hbWVdID0gZGF0YTtcbiAgICAgICAgICAgIGRvd25sb2FkQ29uZmlnLklEID0gZGIuaW5zZXJ0KCdkb3dubG9hZENvbmZpZycsIGRvd25sb2FkQ29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGRiLmNvbW1pdCgpLCAxMDApO1xuICAgICAgICByZXR1cm4gZG93bmxvYWRDb25maWc7XG4gICAgfVxuICAgIHN0YXRpYyBjcmVhdGVTdHJlYW1Mb2NhdGlvbkxpc3Qoc2x1Zywgc3RyZWFtTG9jYXRpb25zLCBjb3Vyc2VJZCkge1xuICAgICAgICBjb25zdCBkYiA9IFN0b3JlLmRiKCk7XG4gICAgICAgIGNvbnN0IHRvYyA9IFN0b3JlLmdldFRvYyhzbHVnKTtcbiAgICAgICAgY29uc3Qgc3RyZWFtTG9jYXRpb25SZXN1bHRzID0gW107XG4gICAgICAgIGNvbnN0IGZtdExpc3QgPSBbXTtcbiAgICAgICAgaWYgKHRvYykge1xuICAgICAgICAgICAgY29uc3Qgc3RyZWFtTG9jYXRpb25JZHMgPSB0b2Muc3RyZWFtTG9jYXRpb25JZHM7XG4gICAgICAgICAgICBzdHJlYW1Mb2NhdGlvbnMubWFwKChzdHJlYW1Mb2NhdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHN0cmVhbUxvY2F0aW9uKTtcbiAgICAgICAgICAgICAgICBpZiAoIWZtdExpc3QuaW5jbHVkZXMoc3RyZWFtTG9jYXRpb24uZm10KSkge1xuICAgICAgICAgICAgICAgICAgICBmbXRMaXN0LnB1c2goc3RyZWFtTG9jYXRpb24uZm10KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RyZWFtTG9jID0gU3RvcmUuY3JlYXRlU3RyZWFtTG9jYXRpb24odG9jLklELCBzdHJlYW1Mb2NhdGlvbi5mbXQsIHN0cmVhbUxvY2F0aW9uLnVybCk7XG4gICAgICAgICAgICAgICAgaWYgKCFzdHJlYW1Mb2NhdGlvbklkcy5pbmNsdWRlcyhzdHJlYW1Mb2MuSUQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0cmVhbUxvY2F0aW9uSWRzLnB1c2goc3RyZWFtTG9jLklEKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3RyZWFtTG9jYXRpb25SZXN1bHRzLnB1c2goc3RyZWFtTG9jKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZGIudXBkYXRlKCd0b2MnLCB7IHNsdWcgfSwgKHJvdykgPT4ge1xuICAgICAgICAgICAgICAgIHJvdy5zdHJlYW1Mb2NhdGlvbklkcyA9IHN0cmVhbUxvY2F0aW9uSWRzO1xuICAgICAgICAgICAgICAgIHJldHVybiByb3c7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRiLmNvbW1pdCgpO1xuICAgICAgICAgICAgaWYgKGNvdXJzZUlkKSB7XG4gICAgICAgICAgICAgICAgU3RvcmUudXBkYXRlRG93bmxvYWRDb25maWcoJ2ZtdExpc3QnLCBmbXRMaXN0LCBjb3Vyc2VJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0cmVhbUxvY2F0aW9uUmVzdWx0cztcbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZUV4ZXJjaXNlRmlsZShjb3Vyc2VJZCwgbmFtZSwgdXJsLCBzaXplKSB7XG4gICAgICAgIGNvbnN0IGRiID0gU3RvcmUuZGIoKTtcbiAgICAgICAgbGV0IGV4ZXJjaXNlRmlsZSA9IFN0b3JlLmdldEV4ZXJjaXNlRmlsZShjb3Vyc2VJZCk7XG4gICAgICAgIGlmICghZXhlcmNpc2VGaWxlKSB7XG4gICAgICAgICAgICBjb25zdCBJRCA9IDA7XG4gICAgICAgICAgICBleGVyY2lzZUZpbGUgPSB7IElELCBjb3Vyc2VJZCwgbmFtZSwgdXJsLCBzaXplIH07XG4gICAgICAgICAgICBleGVyY2lzZUZpbGUuSUQgPSBkYi5pbnNlcnQoJ2V4ZXJjaXNlRmlsZScsIGV4ZXJjaXNlRmlsZSk7XG4gICAgICAgICAgICBkYi5jb21taXQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXhlcmNpc2VGaWxlO1xuICAgIH1cbiAgICBzdGF0aWMgY3JlYXRlU2VjdGlvbihjb3Vyc2VJZCwgdGl0bGUpIHtcbiAgICAgICAgY29uc3QgZGIgPSBTdG9yZS5kYigpO1xuICAgICAgICBjb25zdCBzbHVnID0gbWFrZVNsdWcodGl0bGUpO1xuICAgICAgICBsZXQgc2VjdGlvbiA9IFN0b3JlLmdldFNlY3Rpb24oc2x1ZywgY291cnNlSWQpO1xuICAgICAgICBpZiAoIXNlY3Rpb24pIHtcbiAgICAgICAgICAgIGNvbnN0IElEID0gMDtcbiAgICAgICAgICAgIHNlY3Rpb24gPSB7IElELCBjb3Vyc2VJZCwgdGl0bGUsIHNsdWcgfTtcbiAgICAgICAgICAgIHNlY3Rpb24uSUQgPSBkYi5pbnNlcnQoJ3NlY3Rpb24nLCBzZWN0aW9uKTtcbiAgICAgICAgICAgIGRiLmNvbW1pdCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZWN0aW9uO1xuICAgIH1cbiAgICBzdGF0aWMgY3JlYXRlVG9jKHNlY3Rpb25JZCwgdGl0bGUsIHNsdWcsIHVybCwgZHVyYXRpb24sIGNhcHRpb25VcmwsIGNhcHRpb25GbXQpIHtcbiAgICAgICAgY29uc3QgZGIgPSBTdG9yZS5kYigpO1xuICAgICAgICBsZXQgdG9jID0gU3RvcmUuZ2V0VG9jKHNsdWcpO1xuICAgICAgICBpZiAoIXRvYykge1xuICAgICAgICAgICAgY29uc3QgSUQgPSAwO1xuICAgICAgICAgICAgY29uc3Qgc3RyZWFtTG9jYXRpb25JZHMgPSBbXTtcbiAgICAgICAgICAgIHRvYyA9IHsgSUQsIHNlY3Rpb25JZCwgdGl0bGUsIHNsdWcsIHVybCwgZHVyYXRpb24sIGNhcHRpb25VcmwsIGNhcHRpb25GbXQsIHN0cmVhbUxvY2F0aW9uSWRzIH07XG4gICAgICAgICAgICB0b2MuSUQgPSBkYi5pbnNlcnQoJ3RvYycsIHRvYyk7XG4gICAgICAgICAgICBkYi5jb21taXQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9jO1xuICAgIH1cbiAgICBzdGF0aWMgY3JlYXRlQ291cnNlKHRpdGxlLCBzbHVnLCBkdXJhdGlvbiwgc291cmNlQ29kZVJlcG9zaXRvcnksIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIGNvbnN0IGRiID0gU3RvcmUuZGIoKTtcbiAgICAgICAgbGV0IGNvdXJzZSA9IFN0b3JlLmdldENvdXJzZShzbHVnKTtcbiAgICAgICAgaWYgKCFjb3Vyc2UpIHtcbiAgICAgICAgICAgIGNvbnN0IElEID0gMDtcbiAgICAgICAgICAgIGNvbnN0IGF1dGhvcklkcyA9IFtdO1xuICAgICAgICAgICAgY291cnNlID0geyBJRCwgdGl0bGUsIHNsdWcsIGR1cmF0aW9uLCBzb3VyY2VDb2RlUmVwb3NpdG9yeSwgZGVzY3JpcHRpb24sIGF1dGhvcklkcyB9O1xuICAgICAgICAgICAgY291cnNlLklEID0gZGIuaW5zZXJ0KCdjb3Vyc2UnLCBjb3Vyc2UpO1xuICAgICAgICAgICAgZGIuY29tbWl0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvdXJzZTtcbiAgICB9XG4gICAgc3RhdGljIGdldENvdXJzZUpzb24oY2FsbGJhY2spIHtcbiAgICAgICAgUHJveHkuZ2V0KCcvZGF0YS9jb3Vyc2UuanNvbicsIChyKSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyKTtcbiAgICAgICAgICAgIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXREYXRhQ29kZXNMUyhjYWxsYmFjaykge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KFsnZGF0YUNvZGVzJ10sIChyKSA9PiB7IGNhbGxiYWNrKEpTT04ucGFyc2Uoci5kYXRhQ29kZXMpKTsgfSk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgIH1cbiAgICBzdGF0aWMgc2F2ZURhdGFDb2RlcyhkYXRhQ29kZXMpIHtcbiAgICAgICAgY29uc3QgY291cnNlVG1wID0gZGF0YUNvZGVzLmNvdXJzZTtcbiAgICAgICAgY29uc3QgYXV0aG9ycyA9IGNvdXJzZVRtcC5hdXRob3JzO1xuICAgICAgICBjb25zdCBjb3Vyc2UgPSBTdG9yZS5jcmVhdGVDb3Vyc2UoY291cnNlVG1wLnRpdGxlLCBjb3Vyc2VUbXAuc2x1ZywgY291cnNlVG1wLmR1cmF0aW9uLCBjb3Vyc2VUbXAuc291cmNlQ29kZVJlcG9zaXRvcnksIGNvdXJzZVRtcC5kZXNjcmlwdGlvbik7XG4gICAgICAgIGNvbnN0IHNlY3Rpb25zID0gZGF0YUNvZGVzLnNlY3Rpb25zO1xuICAgICAgICBzZWN0aW9ucy5tYXAoKHNlY3Rpb25UbXApID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNlY3Rpb24gPSBTdG9yZS5jcmVhdGVTZWN0aW9uKGNvdXJzZS5JRCwgc2VjdGlvblRtcC50aXRsZSk7XG4gICAgICAgICAgICBzZWN0aW9uVG1wLml0ZW1zLm1hcCgodG9jVG1wKSA9PiB7XG4gICAgICAgICAgICAgICAgdG9jVG1wLnVybCA9IGBodHRwczovL3d3dy5saW5rZWRpbi5jb20vbGVhcm5pbmcvJHtjb3Vyc2Uuc2x1Z30vJHt0b2NUbXAuc2x1Z31gO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvYyA9IFN0b3JlLmNyZWF0ZVRvYyhzZWN0aW9uLklELCB0b2NUbXAudGl0bGUsIHRvY1RtcC5zbHVnLCB0b2NUbXAudXJsLCB0b2NUbXAuZHVyYXRpb24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBTdG9yZS5jcmVhdGVBdXRob3JMaXN0KGNvdXJzZS5zbHVnLCBhdXRob3JzKTtcbiAgICAgICAgU3RvcmUuc2V0QXBwU3RhdGUoMSwgY291cnNlLnNsdWcpO1xuICAgICAgICByZXR1cm4gY291cnNlO1xuICAgIH1cbiAgICBzdGF0aWMgcHJlcGFyZUFwcFN0b3JhZ2UoKSB7XG4gICAgICAgIFN0b3JlLmluaXQoKTtcbiAgICAgICAgU3RvcmUuaW5pdEFwcCgnJyk7XG4gICAgfVxuICAgIHN0YXRpYyBpbml0QXBwKGNvdXJzZVNsdWcpIHtcbiAgICAgICAgY29uc3QgZGIgPSBTdG9yZS5kYigpO1xuICAgICAgICBjb25zdCB2ZXJzaW9uID0gJzEuMCc7XG4gICAgICAgIGNvbnN0IGFwcHMgPSBkYi5xdWVyeUFsbCgnYXBwJywgeyB2ZXJzaW9uIH0pO1xuICAgICAgICBsZXQgYXBwID0gbnVsbDtcbiAgICAgICAgaWYgKGFwcHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IDA7XG4gICAgICAgICAgICBjb25zdCBJRCA9IDA7XG4gICAgICAgICAgICBjb25zdCBsYXN0Q291cnNlU2x1ZyA9IGNvdXJzZVNsdWc7XG4gICAgICAgICAgICBhcHAgPSB7IElELCBzdGF0ZSwgdmVyc2lvbiwgbGFzdENvdXJzZVNsdWcgfTtcbiAgICAgICAgICAgIGFwcC5JRCA9IGRiLmluc2VydCgnYXBwJywgYXBwKTtcbiAgICAgICAgICAgIGRiLmNvbW1pdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYXBwID0gYXBwc1swXTtcbiAgICAgICAgICAgIGlmIChhcHAubGFzdENvdXJzZVNsdWcgIT09IGNvdXJzZVNsdWcgJiYgY291cnNlU2x1ZyAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICBhcHAubGFzdENvdXJzZVNsdWcgPSBjb3Vyc2VTbHVnO1xuICAgICAgICAgICAgICAgIGRiLnVwZGF0ZSgnYXBwJywgeyB2ZXJzaW9uIH0sIChyb3cpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcm93Lmxhc3RDb3Vyc2VTbHVnID0gY291cnNlU2x1ZztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvdztcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBkYi5jb21taXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXBwO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0QXBwU3RhdGUoKSB7XG4gICAgICAgIGNvbnN0IGRiID0gU3RvcmUuZGIoKTtcbiAgICAgICAgY29uc3QgdmVyc2lvbiA9ICcxLjAnO1xuICAgICAgICBjb25zdCBhcHBzID0gZGIucXVlcnlBbGwoJ2FwcCcsIHsgdmVyc2lvbiB9KTtcbiAgICAgICAgbGV0IGFwcCA9IG51bGw7XG4gICAgICAgIGlmIChhcHBzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGFwcCA9IGFwcHNbMF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFwcDtcbiAgICB9XG4gICAgc3RhdGljIHNldEFwcFN0YXRlKHN0YXRlLCBjb3Vyc2VTbHVnKSB7XG4gICAgICAgIGNvbnN0IGRiID0gU3RvcmUuZGIoKTtcbiAgICAgICAgY29uc3QgdmVyc2lvbiA9ICcxLjAnO1xuICAgICAgICBjb25zdCBhcHBzID0gZGIucXVlcnlBbGwoJ2FwcCcsIHsgdmVyc2lvbiB9KTtcbiAgICAgICAgaWYgKGFwcHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZGIudXBkYXRlKCdhcHAnLCB7IHZlcnNpb24gfSwgKHJvdykgPT4ge1xuICAgICAgICAgICAgICAgIHJvdy5zdGF0ZSA9IHN0YXRlO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY291cnNlU2x1ZyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcm93Lmxhc3RDb3Vyc2VTbHVnID0gY291cnNlU2x1ZztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvdztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZGIuY29tbWl0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGdldEFwcEluZm8oKSB7XG4gICAgICAgIGNvbnN0IGRiID0gU3RvcmUuZGIoKTtcbiAgICAgICAgY29uc3QgdmVyc2lvbiA9ICcxLjAnO1xuICAgICAgICBjb25zdCBhcHBzID0gZGIucXVlcnlBbGwoJ2FwcCcsIHsgdmVyc2lvbiB9KTtcbiAgICAgICAgaWYgKGFwcHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGFwcHNbMF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuU3RvcmUucHJlcGFyZUFwcFN0b3JhZ2UoKTtcbmV4cG9ydCBkZWZhdWx0IFN0b3JlO1xuIiwiaW1wb3J0IHsgY3JlYXRlQXBwIH0gZnJvbSAndnVlJztcbmltcG9ydCBQb3B1cCBmcm9tICcuL1BvcHVwLnZ1ZSc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2pzL2Jvb3RzdHJhcCc7XG5pbXBvcnQgJ2ZvbnRhd2Vzb21lLTQuNy9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvcG9wdXAuY3NzJztcbmltcG9ydCAnaGlnaGxpZ2h0LmpzL3N0eWxlcy9kZWZhdWx0LmNzcyc7XG5pbXBvcnQgJ2hpZ2hsaWdodC5qcy9zdHlsZXMvYW5kcm9pZHN0dWRpby5jc3MnO1xuaW1wb3J0IGhsanMgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9jb3JlJztcbmltcG9ydCBqYXZhc2NyaXB0IGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2phdmFzY3JpcHQnO1xuaW1wb3J0IGhsanNWdWVQbHVnaW4gZnJvbSBcIkBoaWdobGlnaHRqcy92dWUtcGx1Z2luXCI7XG5obGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoJ2phdmFzY3JpcHQnLCBqYXZhc2NyaXB0KTtcbmNvbnN0IGFwcCA9IGNyZWF0ZUFwcChQb3B1cCk7XG5hcHAudXNlKGhsanNWdWVQbHVnaW4pO1xuYXBwLm1vdW50KCcjcG9wdXAnKTtcbiIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL1BvcHVwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ZjRiYmNjMCZ0cz10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUG9wdXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCJcbmV4cG9ydCAqIGZyb20gXCIuL1BvcHVwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi9Vc2Vycy9kYW1hci9EZXNrdG9wL0xMRmV0Y2hlci9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwic3JjL3BvcHVwL1BvcHVwLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCI1ZjRiYmNjMFwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzVmNGJiY2MwJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnNWY0YmJjYzAnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1BvcHVwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ZjRiYmNjMCZ0cz10cnVlXCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzVmNGJiY2MwJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9GZXRjaEJ1dHRvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YmMyYjlkZTImdHM9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0ZldGNoQnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiXG5leHBvcnQgKiBmcm9tIFwiLi9GZXRjaEJ1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIvVXNlcnMvZGFtYXIvRGVza3RvcC9MTEZldGNoZXIvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcInNyYy9wb3B1cC9jb21wb25lbnRzL0ZldGNoQnV0dG9uLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCJiYzJiOWRlMlwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJ2JjMmI5ZGUyJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnYmMyYjlkZTInLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0ZldGNoQnV0dG9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iYzJiOWRlMiZ0cz10cnVlXCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJ2JjMmI5ZGUyJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9GZXRjaFF1ZXVlQmFyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05MDVhZWM0MiZzY29wZWQ9dHJ1ZSZ0cz10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRmV0Y2hRdWV1ZUJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIlxuZXhwb3J0ICogZnJvbSBcIi4vRmV0Y2hRdWV1ZUJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIlxuXG5pbXBvcnQgXCIuL0ZldGNoUXVldWVCYXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OTA1YWVjNDImc2NvcGVkPXRydWUmbGFuZz1jc3NcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIvVXNlcnMvZGFtYXIvRGVza3RvcC9MTEZldGNoZXIvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19zY29wZUlkJyxcImRhdGEtdi05MDVhZWM0MlwiXSxbJ19fZmlsZScsXCJzcmMvcG9wdXAvY29tcG9uZW50cy9GZXRjaFF1ZXVlQmFyLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCI5MDVhZWM0MlwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzkwNWFlYzQyJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnOTA1YWVjNDInLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0ZldGNoUXVldWVCYXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTkwNWFlYzQyJnNjb3BlZD10cnVlJnRzPXRydWVcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignOTA1YWVjNDInLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0ZldGNoU2VjdGlvblF1ZXVlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02YWZkYTY0OSZzY29wZWQ9dHJ1ZSZ0cz10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRmV0Y2hTZWN0aW9uUXVldWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0ZldGNoU2VjdGlvblF1ZXVlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiXG5cbmltcG9ydCBcIi4vRmV0Y2hTZWN0aW9uUXVldWUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmFmZGE2NDkmc2NvcGVkPXRydWUmbGFuZz1jc3NcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIvVXNlcnMvZGFtYXIvRGVza3RvcC9MTEZldGNoZXIvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19zY29wZUlkJyxcImRhdGEtdi02YWZkYTY0OVwiXSxbJ19fZmlsZScsXCJzcmMvcG9wdXAvY29tcG9uZW50cy9GZXRjaFNlY3Rpb25RdWV1ZS52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiNmFmZGE2NDlcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCc2YWZkYTY0OScsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJzZhZmRhNjQ5JywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9GZXRjaFNlY3Rpb25RdWV1ZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmFmZGE2NDkmc2NvcGVkPXRydWUmdHM9dHJ1ZVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCc2YWZkYTY0OScsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vTG9nQmFyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01YzhhMjg3YyZzY29wZWQ9dHJ1ZSZ0cz10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTG9nQmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiXG5leHBvcnQgKiBmcm9tIFwiLi9Mb2dCYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCJcblxuaW1wb3J0IFwiLi9Mb2dCYXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWM4YTI4N2Mmc2NvcGVkPXRydWUmbGFuZz1jc3NcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIvVXNlcnMvZGFtYXIvRGVza3RvcC9MTEZldGNoZXIvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19zY29wZUlkJyxcImRhdGEtdi01YzhhMjg3Y1wiXSxbJ19fZmlsZScsXCJzcmMvcG9wdXAvY29tcG9uZW50cy9Mb2dCYXIudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjVjOGEyODdjXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnNWM4YTI4N2MnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCc1YzhhMjg3YycsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTG9nQmFyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01YzhhMjg3YyZzY29wZWQ9dHJ1ZSZ0cz10cnVlXCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzVjOGEyODdjJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9QYWdlTmF2aWdhdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZmJiNzVkNjAmdHM9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1BhZ2VOYXZpZ2F0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiXG5leHBvcnQgKiBmcm9tIFwiLi9QYWdlTmF2aWdhdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIvVXNlcnMvZGFtYXIvRGVza3RvcC9MTEZldGNoZXIvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcInNyYy9wb3B1cC9jb21wb25lbnRzL1BhZ2VOYXZpZ2F0aW9uLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCJmYmI3NWQ2MFwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJ2ZiYjc1ZDYwJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnZmJiNzVkNjAnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1BhZ2VOYXZpZ2F0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mYmI3NWQ2MCZ0cz10cnVlXCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJ2ZiYjc1ZDYwJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9Ub2NJdGVtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zYzM1NzRmZSZzY29wZWQ9dHJ1ZSZ0cz10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVG9jSXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIlxuZXhwb3J0ICogZnJvbSBcIi4vVG9jSXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIlxuXG5pbXBvcnQgXCIuL1RvY0l0ZW0udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2MzNTc0ZmUmc2NvcGVkPXRydWUmbGFuZz1jc3NcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIvVXNlcnMvZGFtYXIvRGVza3RvcC9MTEZldGNoZXIvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19zY29wZUlkJyxcImRhdGEtdi0zYzM1NzRmZVwiXSxbJ19fZmlsZScsXCJzcmMvcG9wdXAvY29tcG9uZW50cy9Ub2NJdGVtLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCIzYzM1NzRmZVwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzNjMzU3NGZlJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnM2MzNTc0ZmUnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1RvY0l0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNjMzU3NGZlJnNjb3BlZD10cnVlJnRzPXRydWVcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignM2MzNTc0ZmUnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0Fib3V0UGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDIzMGZmY2YmdHM9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0Fib3V0UGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIlxuZXhwb3J0ICogZnJvbSBcIi4vQWJvdXRQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi9Vc2Vycy9kYW1hci9EZXNrdG9wL0xMRmV0Y2hlci9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwic3JjL3BvcHVwL3ZpZXdzL0Fib3V0UGFnZS52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiNDIzMGZmY2ZcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCc0MjMwZmZjZicsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJzQyMzBmZmNmJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BYm91dFBhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQyMzBmZmNmJnRzPXRydWVcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignNDIzMGZmY2YnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0NvdXJzZVBhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZjMTdmZWM3JnRzPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Db3Vyc2VQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiXG5leHBvcnQgKiBmcm9tIFwiLi9Db3Vyc2VQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi9Vc2Vycy9kYW1hci9EZXNrdG9wL0xMRmV0Y2hlci9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwic3JjL3BvcHVwL3ZpZXdzL0NvdXJzZVBhZ2UudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjZjMTdmZWM3XCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnNmMxN2ZlYzcnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCc2YzE3ZmVjNycsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQ291cnNlUGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmMxN2ZlYzcmdHM9dHJ1ZVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCc2YzE3ZmVjNycsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vRG93bmxvYWRQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03OTc2YzRmNCZzY29wZWQ9dHJ1ZSZ0cz10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRG93bmxvYWRQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiXG5leHBvcnQgKiBmcm9tIFwiLi9Eb3dubG9hZFBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCJcblxuaW1wb3J0IFwiLi9Eb3dubG9hZFBhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Nzk3NmM0ZjQmc2NvcGVkPXRydWUmbGFuZz1jc3NcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIvVXNlcnMvZGFtYXIvRGVza3RvcC9MTEZldGNoZXIvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19zY29wZUlkJyxcImRhdGEtdi03OTc2YzRmNFwiXSxbJ19fZmlsZScsXCJzcmMvcG9wdXAvdmlld3MvRG93bmxvYWRQYWdlLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCI3OTc2YzRmNFwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzc5NzZjNGY0JywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnNzk3NmM0ZjQnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0Rvd25sb2FkUGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Nzk3NmM0ZjQmc2NvcGVkPXRydWUmdHM9dHJ1ZVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCc3OTc2YzRmNCcsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vSGVscFBhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBkNWMxZDJkJnRzPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9IZWxwUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIlxuZXhwb3J0ICogZnJvbSBcIi4vSGVscFBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiL1VzZXJzL2RhbWFyL0Rlc2t0b3AvTExGZXRjaGVyL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJzcmMvcG9wdXAvdmlld3MvSGVscFBhZ2UudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjBkNWMxZDJkXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnMGQ1YzFkMmQnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCcwZDVjMWQyZCcsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSGVscFBhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBkNWMxZDJkJnRzPXRydWVcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignMGQ1YzFkMmQnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL1dlbGNvbWVQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MmFhNDAzOCZ0cz10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vV2VsY29tZVBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCJcbmV4cG9ydCAqIGZyb20gXCIuL1dlbGNvbWVQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi9Vc2Vycy9kYW1hci9EZXNrdG9wL0xMRmV0Y2hlci9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwic3JjL3BvcHVwL3ZpZXdzL1dlbGNvbWVQYWdlLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCI2MmFhNDAzOFwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzYyYWE0MDM4JywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnNjJhYTQwMzgnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1dlbGNvbWVQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MmFhNDAzOCZ0cz10cnVlXCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzYyYWE0MDM4JywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0udXNlWzBdIS4vUG9wdXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzhdLnVzZVswXSEuL1BvcHVwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzhdLnVzZVswXSEuL0ZldGNoQnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s4XS51c2VbMF0hLi9GZXRjaEJ1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s4XS51c2VbMF0hLi9GZXRjaFF1ZXVlQmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s4XS51c2VbMF0hLi9GZXRjaFF1ZXVlQmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzhdLnVzZVswXSEuL0ZldGNoU2VjdGlvblF1ZXVlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s4XS51c2VbMF0hLi9GZXRjaFNlY3Rpb25RdWV1ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s4XS51c2VbMF0hLi9Mb2dCYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzhdLnVzZVswXSEuL0xvZ0Jhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s4XS51c2VbMF0hLi9QYWdlTmF2aWdhdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0udXNlWzBdIS4vUGFnZU5hdmlnYXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0udXNlWzBdIS4vVG9jSXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0udXNlWzBdIS4vVG9jSXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s4XS51c2VbMF0hLi9BYm91dFBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzhdLnVzZVswXSEuL0Fib3V0UGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s4XS51c2VbMF0hLi9Db3Vyc2VQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s4XS51c2VbMF0hLi9Db3Vyc2VQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzhdLnVzZVswXSEuL0Rvd25sb2FkUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0udXNlWzBdIS4vRG93bmxvYWRQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzhdLnVzZVswXSEuL0hlbHBQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s4XS51c2VbMF0hLi9IZWxwUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s4XS51c2VbMF0hLi9XZWxjb21lUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0udXNlWzBdIS4vV2VsY29tZVBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCIiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0aWYgKGNhY2hlZE1vZHVsZS5lcnJvciAhPT0gdW5kZWZpbmVkKSB0aHJvdyBjYWNoZWRNb2R1bGUuZXJyb3I7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdHRyeSB7XG5cdFx0dmFyIGV4ZWNPcHRpb25zID0geyBpZDogbW9kdWxlSWQsIG1vZHVsZTogbW9kdWxlLCBmYWN0b3J5OiBfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXSwgcmVxdWlyZTogX193ZWJwYWNrX3JlcXVpcmVfXyB9O1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uaS5mb3JFYWNoKGZ1bmN0aW9uKGhhbmRsZXIpIHsgaGFuZGxlcihleGVjT3B0aW9ucyk7IH0pO1xuXHRcdG1vZHVsZSA9IGV4ZWNPcHRpb25zLm1vZHVsZTtcblx0XHRleGVjT3B0aW9ucy5mYWN0b3J5LmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIGV4ZWNPcHRpb25zLnJlcXVpcmUpO1xuXHR9IGNhdGNoKGUpIHtcblx0XHRtb2R1bGUuZXJyb3IgPSBlO1xuXHRcdHRocm93IGU7XG5cdH1cblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4vLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuX193ZWJwYWNrX3JlcXVpcmVfXy5jID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fO1xuXG4vLyBleHBvc2UgdGhlIG1vZHVsZSBleGVjdXRpb24gaW50ZXJjZXB0b3Jcbl9fd2VicGFja19yZXF1aXJlX18uaSA9IFtdO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFsbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18uaHUgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmgoKSArIFwiLmhvdC11cGRhdGUuanNcIjtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5obXJGID0gKCkgPT4gKFwicG9wdXAuXCIgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmgoKSArIFwiLmhvdC11cGRhdGUuanNvblwiKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1OWNlZjA3MDMwY2FlZDdhYzcyZFwiKSIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsInZhciBpblByb2dyZXNzID0ge307XG52YXIgZGF0YVdlYnBhY2tQcmVmaXggPSBcImxsZmV0Y2hlci10czpcIjtcbi8vIGxvYWRTY3JpcHQgZnVuY3Rpb24gdG8gbG9hZCBhIHNjcmlwdCB2aWEgc2NyaXB0IHRhZ1xuX193ZWJwYWNrX3JlcXVpcmVfXy5sID0gKHVybCwgZG9uZSwga2V5LCBjaHVua0lkKSA9PiB7XG5cdGlmKGluUHJvZ3Jlc3NbdXJsXSkgeyBpblByb2dyZXNzW3VybF0ucHVzaChkb25lKTsgcmV0dXJuOyB9XG5cdHZhciBzY3JpcHQsIG5lZWRBdHRhY2g7XG5cdGlmKGtleSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc2NyaXB0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHMgPSBzY3JpcHRzW2ldO1xuXHRcdFx0aWYocy5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgPT0gdXJsIHx8IHMuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIpID09IGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KSB7IHNjcmlwdCA9IHM7IGJyZWFrOyB9XG5cdFx0fVxuXHR9XG5cdGlmKCFzY3JpcHQpIHtcblx0XHRuZWVkQXR0YWNoID0gdHJ1ZTtcblx0XHRzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuXHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04Jztcblx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcblx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuXHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuXHRcdH1cblx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIsIGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KTtcblx0XHRzY3JpcHQuc3JjID0gdXJsO1xuXHR9XG5cdGluUHJvZ3Jlc3NbdXJsXSA9IFtkb25lXTtcblx0dmFyIG9uU2NyaXB0Q29tcGxldGUgPSAocHJldiwgZXZlbnQpID0+IHtcblx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG5cdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0dmFyIGRvbmVGbnMgPSBpblByb2dyZXNzW3VybF07XG5cdFx0ZGVsZXRlIGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRzY3JpcHQucGFyZW50Tm9kZSAmJiBzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuXHRcdGRvbmVGbnMgJiYgZG9uZUZucy5mb3JFYWNoKChmbikgPT4gKGZuKGV2ZW50KSkpO1xuXHRcdGlmKHByZXYpIHJldHVybiBwcmV2KGV2ZW50KTtcblx0fTtcblx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCB1bmRlZmluZWQsIHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KSwgMTIwMDAwKTtcblx0c2NyaXB0Lm9uZXJyb3IgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9uZXJyb3IpO1xuXHRzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmxvYWQpO1xuXHRuZWVkQXR0YWNoICYmIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn07IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIGN1cnJlbnRNb2R1bGVEYXRhID0ge307XG52YXIgaW5zdGFsbGVkTW9kdWxlcyA9IF9fd2VicGFja19yZXF1aXJlX18uYztcblxuLy8gbW9kdWxlIGFuZCByZXF1aXJlIGNyZWF0aW9uXG52YXIgY3VycmVudENoaWxkTW9kdWxlO1xudmFyIGN1cnJlbnRQYXJlbnRzID0gW107XG5cbi8vIHN0YXR1c1xudmFyIHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycyA9IFtdO1xudmFyIGN1cnJlbnRTdGF0dXMgPSBcImlkbGVcIjtcblxuLy8gd2hpbGUgZG93bmxvYWRpbmdcbnZhciBibG9ja2luZ1Byb21pc2VzID0gMDtcbnZhciBibG9ja2luZ1Byb21pc2VzV2FpdGluZyA9IFtdO1xuXG4vLyBUaGUgdXBkYXRlIGluZm9cbnZhciBjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycztcbnZhciBxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXM7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJEID0gY3VycmVudE1vZHVsZURhdGE7XG5cbl9fd2VicGFja19yZXF1aXJlX18uaS5wdXNoKGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cdHZhciBtb2R1bGUgPSBvcHRpb25zLm1vZHVsZTtcblx0dmFyIHJlcXVpcmUgPSBjcmVhdGVSZXF1aXJlKG9wdGlvbnMucmVxdWlyZSwgb3B0aW9ucy5pZCk7XG5cdG1vZHVsZS5ob3QgPSBjcmVhdGVNb2R1bGVIb3RPYmplY3Qob3B0aW9ucy5pZCwgbW9kdWxlKTtcblx0bW9kdWxlLnBhcmVudHMgPSBjdXJyZW50UGFyZW50cztcblx0bW9kdWxlLmNoaWxkcmVuID0gW107XG5cdGN1cnJlbnRQYXJlbnRzID0gW107XG5cdG9wdGlvbnMucmVxdWlyZSA9IHJlcXVpcmU7XG59KTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJDID0ge307XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkgPSB7fTtcblxuZnVuY3Rpb24gY3JlYXRlUmVxdWlyZShyZXF1aXJlLCBtb2R1bGVJZCkge1xuXHR2YXIgbWUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcblx0aWYgKCFtZSkgcmV0dXJuIHJlcXVpcmU7XG5cdHZhciBmbiA9IGZ1bmN0aW9uIChyZXF1ZXN0KSB7XG5cdFx0aWYgKG1lLmhvdC5hY3RpdmUpIHtcblx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdKSB7XG5cdFx0XHRcdHZhciBwYXJlbnRzID0gaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzO1xuXHRcdFx0XHRpZiAocGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKSA9PT0gLTEpIHtcblx0XHRcdFx0XHRwYXJlbnRzLnB1c2gobW9kdWxlSWQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XG5cdFx0XHRcdGN1cnJlbnRDaGlsZE1vZHVsZSA9IHJlcXVlc3Q7XG5cdFx0XHR9XG5cdFx0XHRpZiAobWUuY2hpbGRyZW4uaW5kZXhPZihyZXF1ZXN0KSA9PT0gLTEpIHtcblx0XHRcdFx0bWUuY2hpbGRyZW4ucHVzaChyZXF1ZXN0KTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS53YXJuKFxuXHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArXG5cdFx0XHRcdFx0cmVxdWVzdCArXG5cdFx0XHRcdFx0XCIpIGZyb20gZGlzcG9zZWQgbW9kdWxlIFwiICtcblx0XHRcdFx0XHRtb2R1bGVJZFxuXHRcdFx0KTtcblx0XHRcdGN1cnJlbnRQYXJlbnRzID0gW107XG5cdFx0fVxuXHRcdHJldHVybiByZXF1aXJlKHJlcXVlc3QpO1xuXHR9O1xuXHR2YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gKG5hbWUpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRyZXR1cm4gcmVxdWlyZVtuYW1lXTtcblx0XHRcdH0sXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdFx0XHRyZXF1aXJlW25hbWVdID0gdmFsdWU7XG5cdFx0XHR9XG5cdFx0fTtcblx0fTtcblx0Zm9yICh2YXIgbmFtZSBpbiByZXF1aXJlKSB7XG5cdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChyZXF1aXJlLCBuYW1lKSAmJiBuYW1lICE9PSBcImVcIikge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBuYW1lLCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IobmFtZSkpO1xuXHRcdH1cblx0fVxuXHRmbi5lID0gZnVuY3Rpb24gKGNodW5rSWQpIHtcblx0XHRyZXR1cm4gdHJhY2tCbG9ja2luZ1Byb21pc2UocmVxdWlyZS5lKGNodW5rSWQpKTtcblx0fTtcblx0cmV0dXJuIGZuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNb2R1bGVIb3RPYmplY3QobW9kdWxlSWQsIG1lKSB7XG5cdHZhciBfbWFpbiA9IGN1cnJlbnRDaGlsZE1vZHVsZSAhPT0gbW9kdWxlSWQ7XG5cdHZhciBob3QgPSB7XG5cdFx0Ly8gcHJpdmF0ZSBzdHVmZlxuXHRcdF9hY2NlcHRlZERlcGVuZGVuY2llczoge30sXG5cdFx0X2FjY2VwdGVkRXJyb3JIYW5kbGVyczoge30sXG5cdFx0X2RlY2xpbmVkRGVwZW5kZW5jaWVzOiB7fSxcblx0XHRfc2VsZkFjY2VwdGVkOiBmYWxzZSxcblx0XHRfc2VsZkRlY2xpbmVkOiBmYWxzZSxcblx0XHRfc2VsZkludmFsaWRhdGVkOiBmYWxzZSxcblx0XHRfZGlzcG9zZUhhbmRsZXJzOiBbXSxcblx0XHRfbWFpbjogX21haW4sXG5cdFx0X3JlcXVpcmVTZWxmOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjdXJyZW50UGFyZW50cyA9IG1lLnBhcmVudHMuc2xpY2UoKTtcblx0XHRcdGN1cnJlbnRDaGlsZE1vZHVsZSA9IF9tYWluID8gdW5kZWZpbmVkIDogbW9kdWxlSWQ7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKTtcblx0XHR9LFxuXG5cdFx0Ly8gTW9kdWxlIEFQSVxuXHRcdGFjdGl2ZTogdHJ1ZSxcblx0XHRhY2NlcHQ6IGZ1bmN0aW9uIChkZXAsIGNhbGxiYWNrLCBlcnJvckhhbmRsZXIpIHtcblx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmQWNjZXB0ZWQgPSB0cnVlO1xuXHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJmdW5jdGlvblwiKSBob3QuX3NlbGZBY2NlcHRlZCA9IGRlcDtcblx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIgJiYgZGVwICE9PSBudWxsKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBbaV1dID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkge307XG5cdFx0XHRcdFx0aG90Ll9hY2NlcHRlZEVycm9ySGFuZGxlcnNbZGVwW2ldXSA9IGVycm9ySGFuZGxlcjtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBdID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkge307XG5cdFx0XHRcdGhvdC5fYWNjZXB0ZWRFcnJvckhhbmRsZXJzW2RlcF0gPSBlcnJvckhhbmRsZXI7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRkZWNsaW5lOiBmdW5jdGlvbiAoZGVwKSB7XG5cdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkRlY2xpbmVkID0gdHJ1ZTtcblx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIgJiYgZGVwICE9PSBudWxsKVxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcblx0XHRcdFx0XHRob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSB0cnVlO1xuXHRcdFx0ZWxzZSBob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcF0gPSB0cnVlO1xuXHRcdH0sXG5cdFx0ZGlzcG9zZTogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcblx0XHR9LFxuXHRcdGFkZERpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuXHRcdH0sXG5cdFx0cmVtb3ZlRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHRcdFx0dmFyIGlkeCA9IGhvdC5fZGlzcG9zZUhhbmRsZXJzLmluZGV4T2YoY2FsbGJhY2spO1xuXHRcdFx0aWYgKGlkeCA+PSAwKSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcblx0XHR9LFxuXHRcdGludmFsaWRhdGU6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHRoaXMuX3NlbGZJbnZhbGlkYXRlZCA9IHRydWU7XG5cdFx0XHRzd2l0Y2ggKGN1cnJlbnRTdGF0dXMpIHtcblx0XHRcdFx0Y2FzZSBcImlkbGVcIjpcblx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyA9IFtdO1xuXHRcdFx0XHRcdE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uaG1ySSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtcklba2V5XShcblx0XHRcdFx0XHRcdFx0bW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHNldFN0YXR1cyhcInJlYWR5XCIpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwicmVhZHlcIjpcblx0XHRcdFx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJJW2tleV0oXG5cdFx0XHRcdFx0XHRcdG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVyc1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcInByZXBhcmVcIjpcblx0XHRcdFx0Y2FzZSBcImNoZWNrXCI6XG5cdFx0XHRcdGNhc2UgXCJkaXNwb3NlXCI6XG5cdFx0XHRcdGNhc2UgXCJhcHBseVwiOlxuXHRcdFx0XHRcdChxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgPSBxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgfHwgW10pLnB1c2goXG5cdFx0XHRcdFx0XHRtb2R1bGVJZFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0Ly8gaWdub3JlIHJlcXVlc3RzIGluIGVycm9yIHN0YXRlc1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvLyBNYW5hZ2VtZW50IEFQSVxuXHRcdGNoZWNrOiBob3RDaGVjayxcblx0XHRhcHBseTogaG90QXBwbHksXG5cdFx0c3RhdHVzOiBmdW5jdGlvbiAobCkge1xuXHRcdFx0aWYgKCFsKSByZXR1cm4gY3VycmVudFN0YXR1cztcblx0XHRcdHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuXHRcdH0sXG5cdFx0YWRkU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24gKGwpIHtcblx0XHRcdHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuXHRcdH0sXG5cdFx0cmVtb3ZlU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24gKGwpIHtcblx0XHRcdHZhciBpZHggPSByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMuaW5kZXhPZihsKTtcblx0XHRcdGlmIChpZHggPj0gMCkgcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuXHRcdH0sXG5cblx0XHQvL2luaGVyaXQgZnJvbSBwcmV2aW91cyBkaXNwb3NlIGNhbGxcblx0XHRkYXRhOiBjdXJyZW50TW9kdWxlRGF0YVttb2R1bGVJZF1cblx0fTtcblx0Y3VycmVudENoaWxkTW9kdWxlID0gdW5kZWZpbmVkO1xuXHRyZXR1cm4gaG90O1xufVxuXG5mdW5jdGlvbiBzZXRTdGF0dXMobmV3U3RhdHVzKSB7XG5cdGN1cnJlbnRTdGF0dXMgPSBuZXdTdGF0dXM7XG5cdHZhciByZXN1bHRzID0gW107XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMubGVuZ3RoOyBpKyspXG5cdFx0cmVzdWx0c1tpXSA9IHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVyc1tpXS5jYWxsKG51bGwsIG5ld1N0YXR1cyk7XG5cblx0cmV0dXJuIFByb21pc2UuYWxsKHJlc3VsdHMpO1xufVxuXG5mdW5jdGlvbiB1bmJsb2NrKCkge1xuXHRpZiAoLS1ibG9ja2luZ1Byb21pc2VzID09PSAwKSB7XG5cdFx0c2V0U3RhdHVzKFwicmVhZHlcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAoYmxvY2tpbmdQcm9taXNlcyA9PT0gMCkge1xuXHRcdFx0XHR2YXIgbGlzdCA9IGJsb2NraW5nUHJvbWlzZXNXYWl0aW5nO1xuXHRcdFx0XHRibG9ja2luZ1Byb21pc2VzV2FpdGluZyA9IFtdO1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRsaXN0W2ldKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0fVxufVxuXG5mdW5jdGlvbiB0cmFja0Jsb2NraW5nUHJvbWlzZShwcm9taXNlKSB7XG5cdHN3aXRjaCAoY3VycmVudFN0YXR1cykge1xuXHRcdGNhc2UgXCJyZWFkeVwiOlxuXHRcdFx0c2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcblx0XHQvKiBmYWxsdGhyb3VnaCAqL1xuXHRcdGNhc2UgXCJwcmVwYXJlXCI6XG5cdFx0XHRibG9ja2luZ1Byb21pc2VzKys7XG5cdFx0XHRwcm9taXNlLnRoZW4odW5ibG9jaywgdW5ibG9jayk7XG5cdFx0XHRyZXR1cm4gcHJvbWlzZTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHByb21pc2U7XG5cdH1cbn1cblxuZnVuY3Rpb24gd2FpdEZvckJsb2NraW5nUHJvbWlzZXMoZm4pIHtcblx0aWYgKGJsb2NraW5nUHJvbWlzZXMgPT09IDApIHJldHVybiBmbigpO1xuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcblx0XHRibG9ja2luZ1Byb21pc2VzV2FpdGluZy5wdXNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlc29sdmUoZm4oKSk7XG5cdFx0fSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBob3RDaGVjayhhcHBseU9uVXBkYXRlKSB7XG5cdGlmIChjdXJyZW50U3RhdHVzICE9PSBcImlkbGVcIikge1xuXHRcdHRocm93IG5ldyBFcnJvcihcImNoZWNrKCkgaXMgb25seSBhbGxvd2VkIGluIGlkbGUgc3RhdHVzXCIpO1xuXHR9XG5cdHJldHVybiBzZXRTdGF0dXMoXCJjaGVja1wiKVxuXHRcdC50aGVuKF9fd2VicGFja19yZXF1aXJlX18uaG1yTSlcblx0XHQudGhlbihmdW5jdGlvbiAodXBkYXRlKSB7XG5cdFx0XHRpZiAoIXVwZGF0ZSkge1xuXHRcdFx0XHRyZXR1cm4gc2V0U3RhdHVzKGFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCkgPyBcInJlYWR5XCIgOiBcImlkbGVcIikudGhlbihcblx0XHRcdFx0XHRmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBzZXRTdGF0dXMoXCJwcmVwYXJlXCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR2YXIgdXBkYXRlZE1vZHVsZXMgPSBbXTtcblx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSBbXTtcblxuXHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoXG5cdFx0XHRcdFx0T2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5obXJDKS5yZWR1Y2UoZnVuY3Rpb24gKFxuXHRcdFx0XHRcdFx0cHJvbWlzZXMsXG5cdFx0XHRcdFx0XHRrZXlcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1yQ1trZXldKFxuXHRcdFx0XHRcdFx0XHR1cGRhdGUuYyxcblx0XHRcdFx0XHRcdFx0dXBkYXRlLnIsXG5cdFx0XHRcdFx0XHRcdHVwZGF0ZS5tLFxuXHRcdFx0XHRcdFx0XHRwcm9taXNlcyxcblx0XHRcdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMsXG5cdFx0XHRcdFx0XHRcdHVwZGF0ZWRNb2R1bGVzXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHByb21pc2VzO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0W10pXG5cdFx0XHRcdCkudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHdhaXRGb3JCbG9ja2luZ1Byb21pc2VzKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdGlmIChhcHBseU9uVXBkYXRlKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBpbnRlcm5hbEFwcGx5KGFwcGx5T25VcGRhdGUpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHNldFN0YXR1cyhcInJlYWR5XCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiB1cGRhdGVkTW9kdWxlcztcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG59XG5cbmZ1bmN0aW9uIGhvdEFwcGx5KG9wdGlvbnMpIHtcblx0aWYgKGN1cnJlbnRTdGF0dXMgIT09IFwicmVhZHlcIikge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcblx0XHRcdFx0XCJhcHBseSgpIGlzIG9ubHkgYWxsb3dlZCBpbiByZWFkeSBzdGF0dXMgKHN0YXRlOiBcIiArXG5cdFx0XHRcdFx0Y3VycmVudFN0YXR1cyArXG5cdFx0XHRcdFx0XCIpXCJcblx0XHRcdCk7XG5cdFx0fSk7XG5cdH1cblx0cmV0dXJuIGludGVybmFsQXBwbHkob3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIGludGVybmFsQXBwbHkob3B0aW9ucykge1xuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRhcHBseUludmFsaWRhdGVkTW9kdWxlcygpO1xuXG5cdHZhciByZXN1bHRzID0gY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMubWFwKGZ1bmN0aW9uIChoYW5kbGVyKSB7XG5cdFx0cmV0dXJuIGhhbmRsZXIob3B0aW9ucyk7XG5cdH0pO1xuXHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyA9IHVuZGVmaW5lZDtcblxuXHR2YXIgZXJyb3JzID0gcmVzdWx0c1xuXHRcdC5tYXAoZnVuY3Rpb24gKHIpIHtcblx0XHRcdHJldHVybiByLmVycm9yO1xuXHRcdH0pXG5cdFx0LmZpbHRlcihCb29sZWFuKTtcblxuXHRpZiAoZXJyb3JzLmxlbmd0aCA+IDApIHtcblx0XHRyZXR1cm4gc2V0U3RhdHVzKFwiYWJvcnRcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aHJvdyBlcnJvcnNbMF07XG5cdFx0fSk7XG5cdH1cblxuXHQvLyBOb3cgaW4gXCJkaXNwb3NlXCIgcGhhc2Vcblx0dmFyIGRpc3Bvc2VQcm9taXNlID0gc2V0U3RhdHVzKFwiZGlzcG9zZVwiKTtcblxuXHRyZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCkge1xuXHRcdGlmIChyZXN1bHQuZGlzcG9zZSkgcmVzdWx0LmRpc3Bvc2UoKTtcblx0fSk7XG5cblx0Ly8gTm93IGluIFwiYXBwbHlcIiBwaGFzZVxuXHR2YXIgYXBwbHlQcm9taXNlID0gc2V0U3RhdHVzKFwiYXBwbHlcIik7XG5cblx0dmFyIGVycm9yO1xuXHR2YXIgcmVwb3J0RXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG5cdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG5cdH07XG5cblx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuXHRyZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCkge1xuXHRcdGlmIChyZXN1bHQuYXBwbHkpIHtcblx0XHRcdHZhciBtb2R1bGVzID0gcmVzdWx0LmFwcGx5KHJlcG9ydEVycm9yKTtcblx0XHRcdGlmIChtb2R1bGVzKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKG1vZHVsZXNbaV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4gUHJvbWlzZS5hbGwoW2Rpc3Bvc2VQcm9taXNlLCBhcHBseVByb21pc2VdKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHQvLyBoYW5kbGUgZXJyb3JzIGluIGFjY2VwdCBoYW5kbGVycyBhbmQgc2VsZiBhY2NlcHRlZCBtb2R1bGUgbG9hZFxuXHRcdGlmIChlcnJvcikge1xuXHRcdFx0cmV0dXJuIHNldFN0YXR1cyhcImZhaWxcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHRocm93IGVycm9yO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0aWYgKHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcykge1xuXHRcdFx0cmV0dXJuIGludGVybmFsQXBwbHkob3B0aW9ucykudGhlbihmdW5jdGlvbiAobGlzdCkge1xuXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMuZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlSWQpIHtcblx0XHRcdFx0XHRpZiAobGlzdC5pbmRleE9mKG1vZHVsZUlkKSA8IDApIGxpc3QucHVzaChtb2R1bGVJZCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXR1cm4gbGlzdDtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiBzZXRTdGF0dXMoXCJpZGxlXCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIG91dGRhdGVkTW9kdWxlcztcblx0XHR9KTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCkge1xuXHRpZiAocXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzKSB7XG5cdFx0aWYgKCFjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycykgY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSBbXTtcblx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0cXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZUlkKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1ySVtrZXldKFxuXHRcdFx0XHRcdG1vZHVsZUlkLFxuXHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzXG5cdFx0XHRcdCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgPSB1bmRlZmluZWQ7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn0iLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmhtclNfanNvbnAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmhtclNfanNvbnAgfHwge1xuXHRcInBvcHVwXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG52YXIgY3VycmVudFVwZGF0ZWRNb2R1bGVzTGlzdDtcbnZhciB3YWl0aW5nVXBkYXRlUmVzb2x2ZXMgPSB7fTtcbmZ1bmN0aW9uIGxvYWRVcGRhdGVDaHVuayhjaHVua0lkLCB1cGRhdGVkTW9kdWxlc0xpc3QpIHtcblx0Y3VycmVudFVwZGF0ZWRNb2R1bGVzTGlzdCA9IHVwZGF0ZWRNb2R1bGVzTGlzdDtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0gPSByZXNvbHZlO1xuXHRcdC8vIHN0YXJ0IHVwZGF0ZSBjaHVuayBsb2FkaW5nXG5cdFx0dmFyIHVybCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18uaHUoY2h1bmtJZCk7XG5cdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuXHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuXHRcdHZhciBsb2FkaW5nRW5kZWQgPSAoZXZlbnQpID0+IHtcblx0XHRcdGlmKHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSkge1xuXHRcdFx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0gPSB1bmRlZmluZWRcblx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcblx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcblx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGhvdCB1cGRhdGUgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuXHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcblx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcblx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG5cdFx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmwodXJsLCBsb2FkaW5nRW5kZWQpO1xuXHR9KTtcbn1cblxuc2VsZltcIndlYnBhY2tIb3RVcGRhdGVsbGZldGNoZXJfdHNcIl0gPSAoY2h1bmtJZCwgbW9yZU1vZHVsZXMsIHJ1bnRpbWUpID0+IHtcblx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRjdXJyZW50VXBkYXRlW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdGlmKGN1cnJlbnRVcGRhdGVkTW9kdWxlc0xpc3QpIGN1cnJlbnRVcGRhdGVkTW9kdWxlc0xpc3QucHVzaChtb2R1bGVJZCk7XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIGN1cnJlbnRVcGRhdGVSdW50aW1lLnB1c2gocnVudGltZSk7XG5cdGlmKHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSkge1xuXHRcdHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSgpO1xuXHRcdHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcblx0fVxufTtcblxudmFyIGN1cnJlbnRVcGRhdGVDaHVua3M7XG52YXIgY3VycmVudFVwZGF0ZTtcbnZhciBjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcztcbnZhciBjdXJyZW50VXBkYXRlUnVudGltZTtcbmZ1bmN0aW9uIGFwcGx5SGFuZGxlcihvcHRpb25zKSB7XG5cdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmYpIGRlbGV0ZSBfX3dlYnBhY2tfcmVxdWlyZV9fLmYuanNvbnBIbXI7XG5cdGN1cnJlbnRVcGRhdGVDaHVua3MgPSB1bmRlZmluZWQ7XG5cdGZ1bmN0aW9uIGdldEFmZmVjdGVkTW9kdWxlRWZmZWN0cyh1cGRhdGVNb2R1bGVJZCkge1xuXHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbdXBkYXRlTW9kdWxlSWRdO1xuXHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuXG5cdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLm1hcChmdW5jdGlvbiAoaWQpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGNoYWluOiBbaWRdLFxuXHRcdFx0XHRpZDogaWRcblx0XHRcdH07XG5cdFx0fSk7XG5cdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcblx0XHRcdHZhciBxdWV1ZUl0ZW0gPSBxdWV1ZS5wb3AoKTtcblx0XHRcdHZhciBtb2R1bGVJZCA9IHF1ZXVlSXRlbS5pZDtcblx0XHRcdHZhciBjaGFpbiA9IHF1ZXVlSXRlbS5jaGFpbjtcblx0XHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdO1xuXHRcdFx0aWYgKFxuXHRcdFx0XHQhbW9kdWxlIHx8XG5cdFx0XHRcdChtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQgJiYgIW1vZHVsZS5ob3QuX3NlbGZJbnZhbGlkYXRlZClcblx0XHRcdClcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRpZiAobW9kdWxlLmhvdC5fc2VsZkRlY2xpbmVkKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0dHlwZTogXCJzZWxmLWRlY2xpbmVkXCIsXG5cdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuXHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0aWYgKG1vZHVsZS5ob3QuX21haW4pIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR0eXBlOiBcInVuYWNjZXB0ZWRcIixcblx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG5cdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1vZHVsZS5wYXJlbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBwYXJlbnRJZCA9IG1vZHVsZS5wYXJlbnRzW2ldO1xuXHRcdFx0XHR2YXIgcGFyZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW3BhcmVudElkXTtcblx0XHRcdFx0aWYgKCFwYXJlbnQpIGNvbnRpbnVlO1xuXHRcdFx0XHRpZiAocGFyZW50LmhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdHR5cGU6IFwiZGVjbGluZWRcIixcblx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG5cdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRwYXJlbnRJZDogcGFyZW50SWRcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChvdXRkYXRlZE1vZHVsZXMuaW5kZXhPZihwYXJlbnRJZCkgIT09IC0xKSBjb250aW51ZTtcblx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuXHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdKVxuXHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdID0gW107XG5cdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdLCBbbW9kdWxlSWRdKTtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdO1xuXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaChwYXJlbnRJZCk7XG5cdFx0XHRcdHF1ZXVlLnB1c2goe1xuXHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG5cdFx0XHRcdFx0aWQ6IHBhcmVudElkXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiBcImFjY2VwdGVkXCIsXG5cdFx0XHRtb2R1bGVJZDogdXBkYXRlTW9kdWxlSWQsXG5cdFx0XHRvdXRkYXRlZE1vZHVsZXM6IG91dGRhdGVkTW9kdWxlcyxcblx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzOiBvdXRkYXRlZERlcGVuZGVuY2llc1xuXHRcdH07XG5cdH1cblxuXHRmdW5jdGlvbiBhZGRBbGxUb1NldChhLCBiKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBiLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IGJbaV07XG5cdFx0XHRpZiAoYS5pbmRleE9mKGl0ZW0pID09PSAtMSkgYS5wdXNoKGl0ZW0pO1xuXHRcdH1cblx0fVxuXG5cdC8vIGF0IGJlZ2luIGFsbCB1cGRhdGVzIG1vZHVsZXMgYXJlIG91dGRhdGVkXG5cdC8vIHRoZSBcIm91dGRhdGVkXCIgc3RhdHVzIGNhbiBwcm9wYWdhdGUgdG8gcGFyZW50cyBpZiB0aGV5IGRvbid0IGFjY2VwdCB0aGUgY2hpbGRyZW5cblx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG5cdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcblx0dmFyIGFwcGxpZWRVcGRhdGUgPSB7fTtcblxuXHR2YXIgd2FyblVuZXhwZWN0ZWRSZXF1aXJlID0gZnVuY3Rpb24gd2FyblVuZXhwZWN0ZWRSZXF1aXJlKG1vZHVsZSkge1xuXHRcdGNvbnNvbGUud2Fybihcblx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICsgbW9kdWxlLmlkICsgXCIpIHRvIGRpc3Bvc2VkIG1vZHVsZVwiXG5cdFx0KTtcblx0fTtcblxuXHRmb3IgKHZhciBtb2R1bGVJZCBpbiBjdXJyZW50VXBkYXRlKSB7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhjdXJyZW50VXBkYXRlLCBtb2R1bGVJZCkpIHtcblx0XHRcdHZhciBuZXdNb2R1bGVGYWN0b3J5ID0gY3VycmVudFVwZGF0ZVttb2R1bGVJZF07XG5cdFx0XHQvKiogQHR5cGUge1RPRE99ICovXG5cdFx0XHR2YXIgcmVzdWx0O1xuXHRcdFx0aWYgKG5ld01vZHVsZUZhY3RvcnkpIHtcblx0XHRcdFx0cmVzdWx0ID0gZ2V0QWZmZWN0ZWRNb2R1bGVFZmZlY3RzKG1vZHVsZUlkKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc3VsdCA9IHtcblx0XHRcdFx0XHR0eXBlOiBcImRpc3Bvc2VkXCIsXG5cdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHQvKiogQHR5cGUge0Vycm9yfGZhbHNlfSAqL1xuXHRcdFx0dmFyIGFib3J0RXJyb3IgPSBmYWxzZTtcblx0XHRcdHZhciBkb0FwcGx5ID0gZmFsc2U7XG5cdFx0XHR2YXIgZG9EaXNwb3NlID0gZmFsc2U7XG5cdFx0XHR2YXIgY2hhaW5JbmZvID0gXCJcIjtcblx0XHRcdGlmIChyZXN1bHQuY2hhaW4pIHtcblx0XHRcdFx0Y2hhaW5JbmZvID0gXCJcXG5VcGRhdGUgcHJvcGFnYXRpb246IFwiICsgcmVzdWx0LmNoYWluLmpvaW4oXCIgLT4gXCIpO1xuXHRcdFx0fVxuXHRcdFx0c3dpdGNoIChyZXN1bHQudHlwZSkge1xuXHRcdFx0XHRjYXNlIFwic2VsZi1kZWNsaW5lZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcblx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG5cdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIHNlbGYgZGVjbGluZTogXCIgK1xuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG5cdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiZGVjbGluZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcblx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG5cdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuXHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBkZWNsaW5lZCBkZXBlbmRlbmN5OiBcIiArXG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcblx0XHRcdFx0XHRcdFx0XHRcIiBpbiBcIiArXG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0LnBhcmVudElkICtcblx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJ1bmFjY2VwdGVkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25VbmFjY2VwdGVkKSBvcHRpb25zLm9uVW5hY2NlcHRlZChyZXN1bHQpO1xuXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVVbmFjY2VwdGVkKVxuXHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcblx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2UgXCIgKyBtb2R1bGVJZCArIFwiIGlzIG5vdCBhY2NlcHRlZFwiICsgY2hhaW5JbmZvXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiYWNjZXB0ZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkFjY2VwdGVkKSBvcHRpb25zLm9uQWNjZXB0ZWQocmVzdWx0KTtcblx0XHRcdFx0XHRkb0FwcGx5ID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EaXNwb3NlZCkgb3B0aW9ucy5vbkRpc3Bvc2VkKHJlc3VsdCk7XG5cdFx0XHRcdFx0ZG9EaXNwb3NlID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmV4Y2VwdGlvbiB0eXBlIFwiICsgcmVzdWx0LnR5cGUpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGFib3J0RXJyb3IpIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRlcnJvcjogYWJvcnRFcnJvclxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRvQXBwbHkpIHtcblx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSBuZXdNb2R1bGVGYWN0b3J5O1xuXHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIHJlc3VsdC5vdXRkYXRlZE1vZHVsZXMpO1xuXHRcdFx0XHRmb3IgKG1vZHVsZUlkIGluIHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcykge1xuXHRcdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8ocmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKVxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0gPSBbXTtcblx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KFxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0sXG5cdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF1cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoZG9EaXNwb3NlKSB7XG5cdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgW3Jlc3VsdC5tb2R1bGVJZF0pO1xuXHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IHdhcm5VbmV4cGVjdGVkUmVxdWlyZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Y3VycmVudFVwZGF0ZSA9IHVuZGVmaW5lZDtcblxuXHQvLyBTdG9yZSBzZWxmIGFjY2VwdGVkIG91dGRhdGVkIG1vZHVsZXMgdG8gcmVxdWlyZSB0aGVtIGxhdGVyIGJ5IHRoZSBtb2R1bGUgc3lzdGVtXG5cdHZhciBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMgPSBbXTtcblx0Zm9yICh2YXIgaiA9IDA7IGogPCBvdXRkYXRlZE1vZHVsZXMubGVuZ3RoOyBqKyspIHtcblx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVJZCA9IG91dGRhdGVkTW9kdWxlc1tqXTtcblx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdGlmIChcblx0XHRcdG1vZHVsZSAmJlxuXHRcdFx0KG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZCB8fCBtb2R1bGUuaG90Ll9tYWluKSAmJlxuXHRcdFx0Ly8gcmVtb3ZlZCBzZWxmLWFjY2VwdGVkIG1vZHVsZXMgc2hvdWxkIG5vdCBiZSByZXF1aXJlZFxuXHRcdFx0YXBwbGllZFVwZGF0ZVtvdXRkYXRlZE1vZHVsZUlkXSAhPT0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlICYmXG5cdFx0XHQvLyB3aGVuIGNhbGxlZCBpbnZhbGlkYXRlIHNlbGYtYWNjZXB0aW5nIGlzIG5vdCBwb3NzaWJsZVxuXHRcdFx0IW1vZHVsZS5ob3QuX3NlbGZJbnZhbGlkYXRlZFxuXHRcdCkge1xuXHRcdFx0b3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLnB1c2goe1xuXHRcdFx0XHRtb2R1bGU6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdHJlcXVpcmU6IG1vZHVsZS5ob3QuX3JlcXVpcmVTZWxmLFxuXHRcdFx0XHRlcnJvckhhbmRsZXI6IG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0dmFyIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzO1xuXG5cdHJldHVybiB7XG5cdFx0ZGlzcG9zZTogZnVuY3Rpb24gKCkge1xuXHRcdFx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MuZm9yRWFjaChmdW5jdGlvbiAoY2h1bmtJZCkge1xuXHRcdFx0XHRkZWxldGUgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuXHRcdFx0fSk7XG5cdFx0XHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcyA9IHVuZGVmaW5lZDtcblxuXHRcdFx0dmFyIGlkeDtcblx0XHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpO1xuXHRcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWUucG9wKCk7XG5cdFx0XHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdO1xuXHRcdFx0XHRpZiAoIW1vZHVsZSkgY29udGludWU7XG5cblx0XHRcdFx0dmFyIGRhdGEgPSB7fTtcblxuXHRcdFx0XHQvLyBDYWxsIGRpc3Bvc2UgaGFuZGxlcnNcblx0XHRcdFx0dmFyIGRpc3Bvc2VIYW5kbGVycyA9IG1vZHVsZS5ob3QuX2Rpc3Bvc2VIYW5kbGVycztcblx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IGRpc3Bvc2VIYW5kbGVycy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdGRpc3Bvc2VIYW5kbGVyc1tqXS5jYWxsKG51bGwsIGRhdGEpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1yRFttb2R1bGVJZF0gPSBkYXRhO1xuXG5cdFx0XHRcdC8vIGRpc2FibGUgbW9kdWxlICh0aGlzIGRpc2FibGVzIHJlcXVpcmVzIGZyb20gdGhpcyBtb2R1bGUpXG5cdFx0XHRcdG1vZHVsZS5ob3QuYWN0aXZlID0gZmFsc2U7XG5cblx0XHRcdFx0Ly8gcmVtb3ZlIG1vZHVsZSBmcm9tIGNhY2hlXG5cdFx0XHRcdGRlbGV0ZSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdO1xuXG5cdFx0XHRcdC8vIHdoZW4gZGlzcG9zaW5nIHRoZXJlIGlzIG5vIG5lZWQgdG8gY2FsbCBkaXNwb3NlIGhhbmRsZXJcblx0XHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcblxuXHRcdFx0XHQvLyByZW1vdmUgXCJwYXJlbnRzXCIgcmVmZXJlbmNlcyBmcm9tIGFsbCBjaGlsZHJlblxuXHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlLmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0dmFyIGNoaWxkID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZS5jaGlsZHJlbltqXV07XG5cdFx0XHRcdFx0aWYgKCFjaGlsZCkgY29udGludWU7XG5cdFx0XHRcdFx0aWR4ID0gY2hpbGQucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKTtcblx0XHRcdFx0XHRpZiAoaWR4ID49IDApIHtcblx0XHRcdFx0XHRcdGNoaWxkLnBhcmVudHMuc3BsaWNlKGlkeCwgMSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIHJlbW92ZSBvdXRkYXRlZCBkZXBlbmRlbmN5IGZyb20gbW9kdWxlIGNoaWxkcmVuXG5cdFx0XHR2YXIgZGVwZW5kZW5jeTtcblx0XHRcdGZvciAodmFyIG91dGRhdGVkTW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcblx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhvdXRkYXRlZERlcGVuZGVuY2llcywgb3V0ZGF0ZWRNb2R1bGVJZCkpIHtcblx0XHRcdFx0XHRtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuXHRcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPVxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbal07XG5cdFx0XHRcdFx0XHRcdGlkeCA9IG1vZHVsZS5jaGlsZHJlbi5pbmRleE9mKGRlcGVuZGVuY3kpO1xuXHRcdFx0XHRcdFx0XHRpZiAoaWR4ID49IDApIG1vZHVsZS5jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdGFwcGx5OiBmdW5jdGlvbiAocmVwb3J0RXJyb3IpIHtcblx0XHRcdC8vIGluc2VydCBuZXcgY29kZVxuXHRcdFx0Zm9yICh2YXIgdXBkYXRlTW9kdWxlSWQgaW4gYXBwbGllZFVwZGF0ZSkge1xuXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGFwcGxpZWRVcGRhdGUsIHVwZGF0ZU1vZHVsZUlkKSkge1xuXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVt1cGRhdGVNb2R1bGVJZF0gPSBhcHBsaWVkVXBkYXRlW3VwZGF0ZU1vZHVsZUlkXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBydW4gbmV3IHJ1bnRpbWUgbW9kdWxlc1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjdXJyZW50VXBkYXRlUnVudGltZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjdXJyZW50VXBkYXRlUnVudGltZVtpXShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gY2FsbCBhY2NlcHQgaGFuZGxlcnNcblx0XHRcdGZvciAodmFyIG91dGRhdGVkTW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcblx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhvdXRkYXRlZERlcGVuZGVuY2llcywgb3V0ZGF0ZWRNb2R1bGVJZCkpIHtcblx0XHRcdFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdGlmIChtb2R1bGUpIHtcblx0XHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID1cblx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0XHRcdFx0XHR2YXIgY2FsbGJhY2tzID0gW107XG5cdFx0XHRcdFx0XHR2YXIgZXJyb3JIYW5kbGVycyA9IFtdO1xuXHRcdFx0XHRcdFx0dmFyIGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0XHR2YXIgZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2pdO1xuXHRcdFx0XHRcdFx0XHR2YXIgYWNjZXB0Q2FsbGJhY2sgPVxuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZS5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcGVuZGVuY3ldO1xuXHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JIYW5kbGVyID1cblx0XHRcdFx0XHRcdFx0XHRtb2R1bGUuaG90Ll9hY2NlcHRlZEVycm9ySGFuZGxlcnNbZGVwZW5kZW5jeV07XG5cdFx0XHRcdFx0XHRcdGlmIChhY2NlcHRDYWxsYmFjaykge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFja3MuaW5kZXhPZihhY2NlcHRDYWxsYmFjaykgIT09IC0xKSBjb250aW51ZTtcblx0XHRcdFx0XHRcdFx0XHRjYWxsYmFja3MucHVzaChhY2NlcHRDYWxsYmFjayk7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3JIYW5kbGVycy5wdXNoKGVycm9ySGFuZGxlcik7XG5cdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzLnB1c2goZGVwZW5kZW5jeSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGZvciAodmFyIGsgPSAwOyBrIDwgY2FsbGJhY2tzLmxlbmd0aDsgaysrKSB7XG5cdFx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzW2tdLmNhbGwobnVsbCwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMpO1xuXHRcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAodHlwZW9mIGVycm9ySGFuZGxlcnNba10gPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3JIYW5kbGVyc1trXShlcnIsIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogb3V0ZGF0ZWRNb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrc1trXVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycjIpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3ItaGFuZGxlci1lcnJvcmVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogb3V0ZGF0ZWRNb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzW2tdLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVycjIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvcmlnaW5hbEVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycjIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycik7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImFjY2VwdC1lcnJvcmVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3Nba10sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycik7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIExvYWQgc2VsZiBhY2NlcHRlZCBtb2R1bGVzXG5cdFx0XHRmb3IgKHZhciBvID0gMDsgbyA8IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5sZW5ndGg7IG8rKykge1xuXHRcdFx0XHR2YXIgaXRlbSA9IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlc1tvXTtcblx0XHRcdFx0dmFyIG1vZHVsZUlkID0gaXRlbS5tb2R1bGU7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0aXRlbS5yZXF1aXJlKG1vZHVsZUlkKTtcblx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBpdGVtLmVycm9ySGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRpdGVtLmVycm9ySGFuZGxlcihlcnIsIHtcblx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlOiBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyMikge1xuXHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yLWhhbmRsZXItZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVycjIsXG5cdFx0XHRcdFx0XHRcdFx0XHRvcmlnaW5hbEVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycjIpO1xuXHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yZWRcIixcblx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBvdXRkYXRlZE1vZHVsZXM7XG5cdFx0fVxuXHR9O1xufVxuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJLmpzb25wID0gZnVuY3Rpb24gKG1vZHVsZUlkLCBhcHBseUhhbmRsZXJzKSB7XG5cdGlmICghY3VycmVudFVwZGF0ZSkge1xuXHRcdGN1cnJlbnRVcGRhdGUgPSB7fTtcblx0XHRjdXJyZW50VXBkYXRlUnVudGltZSA9IFtdO1xuXHRcdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzID0gW107XG5cdFx0YXBwbHlIYW5kbGVycy5wdXNoKGFwcGx5SGFuZGxlcik7XG5cdH1cblx0aWYgKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oY3VycmVudFVwZGF0ZSwgbW9kdWxlSWQpKSB7XG5cdFx0Y3VycmVudFVwZGF0ZVttb2R1bGVJZF0gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdO1xuXHR9XG59O1xuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJDLmpzb25wID0gZnVuY3Rpb24gKFxuXHRjaHVua0lkcyxcblx0cmVtb3ZlZENodW5rcyxcblx0cmVtb3ZlZE1vZHVsZXMsXG5cdHByb21pc2VzLFxuXHRhcHBseUhhbmRsZXJzLFxuXHR1cGRhdGVkTW9kdWxlc0xpc3Rcbikge1xuXHRhcHBseUhhbmRsZXJzLnB1c2goYXBwbHlIYW5kbGVyKTtcblx0Y3VycmVudFVwZGF0ZUNodW5rcyA9IHt9O1xuXHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcyA9IHJlbW92ZWRDaHVua3M7XG5cdGN1cnJlbnRVcGRhdGUgPSByZW1vdmVkTW9kdWxlcy5yZWR1Y2UoZnVuY3Rpb24gKG9iaiwga2V5KSB7XG5cdFx0b2JqW2tleV0gPSBmYWxzZTtcblx0XHRyZXR1cm4gb2JqO1xuXHR9LCB7fSk7XG5cdGN1cnJlbnRVcGRhdGVSdW50aW1lID0gW107XG5cdGNodW5rSWRzLmZvckVhY2goZnVuY3Rpb24gKGNodW5rSWQpIHtcblx0XHRpZiAoXG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJlxuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdICE9PSB1bmRlZmluZWRcblx0XHQpIHtcblx0XHRcdHByb21pc2VzLnB1c2gobG9hZFVwZGF0ZUNodW5rKGNodW5rSWQsIHVwZGF0ZWRNb2R1bGVzTGlzdCkpO1xuXHRcdFx0Y3VycmVudFVwZGF0ZUNodW5rc1tjaHVua0lkXSA9IHRydWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGN1cnJlbnRVcGRhdGVDaHVua3NbY2h1bmtJZF0gPSBmYWxzZTtcblx0XHR9XG5cdH0pO1xuXHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5mKSB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5mLmpzb25wSG1yID0gZnVuY3Rpb24gKGNodW5rSWQsIHByb21pc2VzKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdGN1cnJlbnRVcGRhdGVDaHVua3MgJiZcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vKGN1cnJlbnRVcGRhdGVDaHVua3MsIGNodW5rSWQpICYmXG5cdFx0XHRcdCFjdXJyZW50VXBkYXRlQ2h1bmtzW2NodW5rSWRdXG5cdFx0XHQpIHtcblx0XHRcdFx0cHJvbWlzZXMucHVzaChsb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCkpO1xuXHRcdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzW2NodW5rSWRdID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9O1xuXHR9XG59O1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtck0gPSAoKSA9PiB7XG5cdGlmICh0eXBlb2YgZmV0Y2ggPT09IFwidW5kZWZpbmVkXCIpIHRocm93IG5ldyBFcnJvcihcIk5vIGJyb3dzZXIgc3VwcG9ydDogbmVlZCBmZXRjaCBBUElcIik7XG5cdHJldHVybiBmZXRjaChfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckYoKSkudGhlbigocmVzcG9uc2UpID0+IHtcblx0XHRpZihyZXNwb25zZS5zdGF0dXMgPT09IDQwNCkgcmV0dXJuOyAvLyBubyB1cGRhdGUgYXZhaWxhYmxlXG5cdFx0aWYoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggdXBkYXRlIG1hbmlmZXN0IFwiICsgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG5cdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0fSk7XG59O1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtsbGZldGNoZXJfdHNcIl0gPSBzZWxmW1wid2VicGFja0NodW5rbGxmZXRjaGVyX3RzXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIG1vZHVsZSBjYWNoZSBhcmUgdXNlZCBzbyBlbnRyeSBpbmxpbmluZyBpcyBkaXNhYmxlZFxuLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19ib290c3RyYXBfZGlzdF9qc19ib290c3RyYXBfanMtbm9kZV9tb2R1bGVzX2pxdWVyeV9kaXN0X2pxdWVyeV9qcy1ub2RlX20tODY2MTBmXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2stZGV2LXNlcnZlci9jbGllbnQvaW5kZXguanM/cHJvdG9jb2w9d3MlM0EmaG9zdG5hbWU9MC4wLjAuMCZwb3J0PTkwMDAmcGF0aG5hbWU9JTJGd3MmbG9nZ2luZz1pbmZvJm92ZXJsYXk9dHJ1ZSZyZWNvbm5lY3Q9MTAmaG90PXRydWUmbGl2ZS1yZWxvYWQ9dHJ1ZVwiKSkpXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19ib290c3RyYXBfZGlzdF9qc19ib290c3RyYXBfanMtbm9kZV9tb2R1bGVzX2pxdWVyeV9kaXN0X2pxdWVyeV9qcy1ub2RlX20tODY2MTBmXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90L2Rldi1zZXJ2ZXIuanNcIikpKVxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19ib290c3RyYXBfZGlzdF9qc19ib290c3RyYXBfanMtbm9kZV9tb2R1bGVzX2pxdWVyeV9kaXN0X2pxdWVyeV9qcy1ub2RlX20tODY2MTBmXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3BvcHVwL3BvcHVwLnRzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsiXyIsImZvcm1hdEJ5dGVzIiwiYnl0ZXMiLCJ0b0ZpeGVkIiwiU3RyaW5nIiwiZmluZEl0ZW1zIiwic2VhcmNoVGVybSIsInNvdXJjZSIsIl9fc2VhcmNoVGVybV9fIiwiX19yZXN1bHRzX18iLCJyZXN1bHRFeGlzdCIsInJlc3VsdEl0ZW0iLCJpbmRleCIsImlzRXF1YWwiLCJzZWFyY2hJdGVtIiwiaXRlbSIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5Iiwic2VhcmNoQXNSZWdFeCIsIlJlZ0V4cCIsIm1hdGNoIiwicHVzaCIsImZpbmREUyIsImsiLCJ2Iiwic3JjIiwicHJvcHMiLCJsaXN0IiwibGlzdHMiLCJpIiwib2JqIiwicmV0cyIsImoiLCJwcm9wIiwiZ2V0Rm10IiwidXJsIiwic3RyIiwic3BsaXQiLCJmaWx0ZXIiLCJyZXBsYWNlIiwibWF0Y2hlcyIsIm0iLCJtYWtlVGl0bGUiLCJzbHVnIiwid29yZHMiLCJsZW5ndGgiLCJ3b3JkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImpvaW4iLCJtYWtlU2x1ZyIsInRvTG93ZXJDYXNlIiwic2VuZE1lc3NhZ2VTYXZlRGF0YUNvZGVzVG9MUyIsImNocm9tZSIsInRhYnMiLCJxdWVyeSIsImFjdGl2ZSIsImN1cnJlbnRXaW5kb3ciLCJ0YWIiLCJzZW5kTWVzc2FnZSIsImlkIiwiZXZlbnQiLCJyIiwiY29udGVudENvbnNvbGVMb2ciLCJkYXRhIiwicGFyYW0iXSwic291cmNlUm9vdCI6IiJ9