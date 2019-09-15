(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueStep"] = factory();
	else
		root["VueStep"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/step.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof2(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof2(obj); }\n\nfunction _typeof(obj) {\n  if (typeof Symbol === \"function\" && _typeof2(Symbol.iterator) === \"symbol\") {\n    module.exports = _typeof = function _typeof(obj) {\n      return _typeof2(obj);\n    };\n  } else {\n    module.exports = _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : _typeof2(obj);\n    };\n  }\n\n  return _typeof(obj);\n}\n\nmodule.exports = _typeof;\n\n//# sourceURL=webpack://VueStep/./node_modules/@babel/runtime/helpers/typeof.js?");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/block-content.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/block-content.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar mixDisplayed = __webpack_require__(/*! ./displayed.mix.js */ \"./src/displayed.mix.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"block-content\",\n  mixins: [mixDisplayed[\"default\"]],\n  inject: [\"nextStep\", \"prevStep\", \"possiblePrevStep\", \"possibleNextStep\", \"toStep\", \"toStepAttr\", \"stopAutoStep\", \"countSteps\", \"currentStep\"],\n  props: {\n    transition: {\n      type: String,\n      \"default\": \"fade\"\n    },\n    styles: {\n      type: String,\n      \"default\": \"\"\n    },\n    classes: {\n      type: String,\n      \"default\": \"content\"\n    }\n  },\n  data: function data() {\n    return {};\n  },\n  methods: {\n    stepNext: function stepNext() {\n      this.nextStep();\n    },\n    stepPrev: function stepPrev() {\n      this.prevStep();\n    },\n    stepPrevPossible: function stepPrevPossible() {\n      return this.possiblePrevStep();\n    },\n    stepNextPossible: function stepNextPossible() {\n      return this.possibleNextStep();\n    },\n    stepTo: function stepTo(i) {\n      this.toStep(i);\n    },\n    stepAttrTo: function stepAttrTo(atrName, atrVal) {\n      this.toStepAttr(atrName, atrVal);\n    },\n    autoStepStop: function autoStepStop() {\n      this.stopAutoStep();\n    },\n    stepsCount: function stepsCount() {\n      return this.countSteps();\n    },\n    stepCurrent: function stepCurrent() {\n      return this.currentStep();\n    }\n  }\n});\n\n//# sourceURL=webpack://VueStep/./src/block-content.vue?./node_modules/babel-loader/lib??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/block-image.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/block-image.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar mixDisplayed = __webpack_require__(/*! ./displayed.mix.js */ \"./src/displayed.mix.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"block-image\",\n  mixins: [mixDisplayed[\"default\"]],\n  inject: [\"nextStep\", \"prevStep\", \"possiblePrevStep\", \"possibleNextStep\"],\n  props: {\n    src: {\n      type: String,\n      required: true\n    },\n    url: {\n      type: String,\n      \"default\": \"\"\n    },\n    target: {\n      type: String,\n      \"default\": \"_self\"\n    },\n    title: {\n      type: String,\n      \"default\": \"\"\n    },\n    alt: {\n      type: String,\n      \"default\": \"\"\n    },\n    transition: {\n      type: String,\n      \"default\": \"fade\"\n    },\n    styles: {\n      type: String,\n      \"default\": \"\"\n    },\n    classes: {\n      type: String,\n      \"default\": \"content\"\n    }\n  },\n  data: function data() {\n    return {};\n  }\n});\n\n//# sourceURL=webpack://VueStep/./src/block-image.vue?./node_modules/babel-loader/lib??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/block-load-content.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/block-load-content.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\nvar mixDisplayed = __webpack_require__(/*! ./displayed.mix.js */ \"./src/displayed.mix.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"block-load-content\",\n  mixins: [mixDisplayed[\"default\"]],\n  props: {\n    url: {\n      type: String,\n      required: true\n    },\n    transition: {\n      type: String,\n      \"default\": \"fade\"\n    },\n    styles: {\n      type: String,\n      \"default\": \"\"\n    },\n    classes: {\n      type: String,\n      \"default\": \"content\"\n    },\n    reqmethod: {\n      type: String,\n      \"default\": \"GET\"\n    },\n    reqparams: {\n      type: Object,\n      \"default\": {}\n    },\n    beforeRequest: {\n      type: Function,\n      \"default\": function _default(component, reqParams) {\n        return true;\n      }\n    },\n    successRequest: {\n      type: Function,\n      \"default\": function _default(component) {}\n    }\n  },\n  data: function data() {\n    return {\n      params: {\n        content: \"\",\n        loadedContent: false\n      }\n    };\n  },\n  computed: {\n    content: function content() {\n      var block = this;\n\n      if (this.params.loadedContent) {\n        return this.params.content;\n      } else {\n        // load content from url\n        var request = new XMLHttpRequest();\n        var params = \"\";\n\n        if (this.reqparams) {\n          for (var key in this.reqparams) {\n            if (params) {\n              params += \"&\";\n            }\n\n            params += key + \"=\" + encodeURIComponent(this.reqparams[key]);\n          }\n        }\n\n        var url2req = this.url;\n\n        if (params && this.reqmethod.toLowerCase() == \"get\") {\n          if (url2req.indexOf(\"?\") != -1) {\n            url2req += \"&\";\n          } else {\n            url2req += \"?\";\n          }\n\n          url2req += params;\n        }\n\n        var reqParams = {\n          method: this.reqmethod,\n          url: url2req,\n          body: params\n        };\n        var allowed = this.beforeRequest(this, reqParams);\n\n        if (allowed) {\n          request.open(reqParams.method, reqParams.url, true);\n\n          request.onprogress = function (event) {\n            var out = \"Loading \";\n\n            if (event.lengthComputable) {\n              var progressBarCount = 10;\n              var progress = Math.ceil(event.loaded / (event.total / progressBarCount));\n\n              for (var i = 0; i < progressBarCount; i++) {\n                if (i < progress) {\n                  out += \"■\";\n                } else {\n                  out += \"□\";\n                }\n              }\n\n              if (block.params.content != out) {\n                block.params.content = out;\n              }\n            } else {\n              out = \"Loading...\";\n\n              if (block.params.content != out) {\n                block.params.content = out;\n              }\n            }\n          };\n\n          request.onload = function () {\n            if (request.status == 200) {\n              block.params.loadedContent = true;\n              block.successRequest(block);\n              block.params.content = request.responseText;\n            } else {\n              // error\n              console.log(\"Error request to \" + reqParams.url + \" \" + request.status + \" \" + request.statusText);\n              block.params.loadedContent = true;\n              block.params.content = \"\";\n            }\n          };\n\n          request.setRequestHeader(\"X-Requested-With\", \"XMLHttpRequest\");\n          request.setRequestHeader(\"Content-Type\", \"application/x-www-form-urlencoded\");\n\n          if (reqParams.method.toLowerCase() == \"get\") {\n            request.send();\n          } else {\n            request.send(reqParams.body);\n          }\n        }\n      }\n    }\n  }\n});\n\n//# sourceURL=webpack://VueStep/./src/block-load-content.vue?./node_modules/babel-loader/lib??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/block-test.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/block-test.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"block-test\",\n  props: {\n    transition: {\n      type: String,\n      \"default\": \"fade\"\n    },\n    styles: {\n      type: String,\n      \"default\": \"\"\n    },\n    classes: {\n      type: String,\n      \"default\": \"content\"\n    },\n    onShow: {\n      type: Function,\n      \"default\": function _default(component) {}\n    },\n    onHide: {\n      type: Function,\n      \"default\": function _default(component) {}\n    }\n  },\n  inject: [\"nextStep\", \"prevStep\", \"possiblePrevStep\", \"possibleNextStep\"],\n  data: function data() {\n    return {\n      displayed: false\n    };\n  },\n  watch: {\n    displayed: function displayed(newVal, oldVal) {\n      if (newVal != oldVal) {\n        if (newVal) {\n          this.onShow(this);\n        } else {\n          this.onHide(this);\n        }\n      }\n    }\n  }\n});\n\n//# sourceURL=webpack://VueStep/./src/block-test.vue?./node_modules/babel-loader/lib??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/button-next.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/button-next.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"button-next\",\n  inject: [\"possibleNextStep\", \"registerEventListener\", \"nextStep\"],\n  data: function data() {\n    return {\n      possible: false,\n      addClass: \"\"\n    };\n  },\n  props: {\n    transition: {\n      type: String,\n      \"default\": \"fade\"\n    },\n    styles: {\n      type: String,\n      \"default\": \"\"\n    },\n    classes: {\n      type: String,\n      \"default\": \"button-next\"\n    }\n  },\n  methods: {\n    onStep: function onStep(params) {\n      this.possible = this.possibleNextStep();\n    },\n    action: function action(i) {\n      this.nextStep();\n    },\n    hover: function hover() {\n      this.addClass = \"hover\";\n    },\n    unhover: function unhover() {\n      this.addClass = \"\";\n    }\n  },\n  computed: {\n    buttonclass: function buttonclass() {\n      if (this.addClass && this.classes) {\n        return this.classes + \" \" + this.addClass;\n      }\n\n      return this.addClass + this.classes;\n    }\n  },\n  mounted: function mounted() {\n    this.$nextTick(function () {\n      this.possible = this.possibleNextStep();\n    });\n    this.registerEventListener(\"event-step-to\", this.onStep);\n  }\n});\n\n//# sourceURL=webpack://VueStep/./src/button-next.vue?./node_modules/babel-loader/lib??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/button-prev.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/button-prev.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"button-prev\",\n  inject: [\"possiblePrevStep\", \"registerEventListener\", \"prevStep\"],\n  data: function data() {\n    return {\n      possible: false,\n      addClass: \"\"\n    };\n  },\n  props: {\n    transition: {\n      type: String,\n      \"default\": \"fade\"\n    },\n    styles: {\n      type: String,\n      \"default\": \"\"\n    },\n    classes: {\n      type: String,\n      \"default\": \"button-prev\"\n    }\n  },\n  methods: {\n    onStep: function onStep(params) {\n      this.possible = this.possiblePrevStep();\n    },\n    action: function action(i) {\n      this.prevStep();\n    },\n    hover: function hover() {\n      this.addClass = \"hover\";\n    },\n    unhover: function unhover() {\n      this.addClass = \"\";\n    }\n  },\n  computed: {\n    buttonclass: function buttonclass() {\n      if (this.addClass && this.classes) {\n        return this.classes + \" \" + this.addClass;\n      }\n\n      return this.addClass + this.classes;\n    }\n  },\n  mounted: function mounted() {\n    this.$nextTick(function () {\n      this.possible = this.possiblePrevStep();\n    });\n    this.registerEventListener(\"event-step-to\", this.onStep);\n  }\n});\n\n//# sourceURL=webpack://VueStep/./src/button-prev.vue?./node_modules/babel-loader/lib??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/step-indicate.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/step-indicate.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"step-indicate\",\n  inject: [\"toStep\", \"countSteps\", \"currentStep\", \"registerEventListener\", \"nextStep\", \"prevStep\"],\n  data: function data() {\n    return {\n      varStep: this.currentStep(),\n      varCountSteps: this.countSteps()\n    };\n  },\n  props: {\n    transition: {\n      type: String,\n      \"default\": \"fade\"\n    },\n    styles: {\n      type: String,\n      \"default\": \"\"\n    },\n    classes: {\n      type: String,\n      \"default\": \"\"\n    },\n    sequential: {\n      type: Boolean,\n      \"default\": true\n    }\n  },\n  methods: {\n    onStep: function onStep(params) {\n      this.varStep = params.to;\n      this.varCountSteps = params.count;\n    },\n    onToStep: function onToStep(i) {\n      if (this.sequential) {\n        var cs = this.currentStep();\n        var s = i - cs;\n\n        if (s < 0) {\n          for (var idx = 0; idx > s; idx--) {\n            this.prevStep();\n          }\n        } else {\n          for (var idx = 0; idx < s; idx++) {\n            this.nextStep();\n          }\n        }\n      } else {\n        this.toStep(i);\n      }\n    }\n  },\n  mounted: function mounted() {\n    this.$nextTick(function () {\n      this.varStep = this.currentStep();\n      this.varCountSteps = this.countSteps();\n    });\n    this.registerEventListener(\"event-step-to\", this.onStep);\n  }\n});\n\n//# sourceURL=webpack://VueStep/./src/step-indicate.vue?./node_modules/babel-loader/lib??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/step.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/step.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ \"./node_modules/@babel/runtime/helpers/typeof.js\");\n/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);\n\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  //var VueStep  = {\n  //module.exports.Step = function(block_name = \"Step\") {\n  //  return {\n  //module.exports.default = {\n  name: \"Step\",\n  inject: [\"nextStep\", \"prevStep\", \"toStep\", \"toStepAttr\", \"countSteps\", \"possiblePrevStep\", \"possibleNextStep\", \"stopAutoStep\", \"currentStep\"],\n  _events: {},\n  props: {\n    autoStart: {\n      type: Boolean,\n      \"default\": false\n    },\n    timeout: {\n      type: Number,\n      \"default\": 15000\n    },\n    round: {\n      type: Boolean,\n      \"default\": true\n    },\n    inc: {\n      type: Number,\n      \"default\": 1\n    },\n    indexStart: {\n      type: Number,\n      \"default\": 0\n    },\n    beforeTo: {\n      type: Function,\n      \"default\": function _default(to, from, obj) {\n        return true;\n      }\n    },\n    afterTo: {\n      type: Function,\n      \"default\": function _default(to, from, obj) {}\n    }\n  },\n  data: function data() {\n    return {\n      current: 0,\n      timer: false,\n      timermsec: 0,\n      accepted: []\n    };\n  },\n  methods: {\n    next: function next() {\n      if (this.timer !== false) {\n        clearTimeout(this.timer);\n      }\n\n      this.to(this.current + this.inc);\n\n      if (this.timer !== false) {\n        this.timer = false;\n\n        if (this.autoStart) {\n          this.intervalNext(this.timermsec);\n        }\n      }\n    },\n    prev: function prev() {\n      if (this.timer !== false) {\n        clearTimeout(this.timer);\n      }\n\n      this.to(this.current - this.inc);\n\n      if (this.timer !== false) {\n        this.timer = false;\n\n        if (this.autoStart) {\n          this.intervalPrev(this.timermsec);\n        }\n      }\n    },\n    to: function to(i) {\n      if (this.current != i) {\n        var from = this.current;\n        var to = i;\n\n        if (this.beforeTo(to, from, this)) {\n          var size = this.count();\n\n          if (this.round) {\n            i = i < 0 ? size - 1 : i > size - 1 ? 0 : i;\n          } else {\n            i = i < 0 ? 0 : i > size - 1 ? size - 1 : i;\n          }\n\n          if (this.current != i) {\n            this.$children[this.accepted[this.current]].displayed = false;\n            this.$children[this.accepted[i]].displayed = true;\n            this.current = i;\n            var params = {\n              to: i,\n              from: from,\n              count: size,\n              component: this\n            };\n            this.$emit(\"event-step-to\", params);\n            this.startEvent(\"event-step-to\", params);\n            this.afterTo(i, from, this);\n          }\n        }\n      }\n    },\n    toAttr: function toAttr(attributeName, attributeValue) {\n      var stepper = this;\n      var i = this.accepted.findIndex(function (element, index, array) {\n        var e = stepper.$children[element];\n\n        if (typeof e.$attrs[attributeName] == \"string\") {\n          return e.$attrs[attributeName] == attributeValue;\n        }\n\n        return false;\n      });\n\n      if (i != -1) {\n        this.to(i);\n      }\n    },\n    possiblePrev: function possiblePrev() {\n      return this.round || this.current > 0;\n    },\n    possibleNext: function possibleNext() {\n      return this.round || this.current == 0 || this.current < this.count() - 1;\n    },\n    count: function count() {\n      return this.accepted.length;\n    },\n    stop: function stop() {\n      if (this.timer !== false) {\n        clearTimeout(this.timer);\n        this.timer = false;\n      }\n    },\n    intervalNext: function intervalNext(msec) {\n      this.stop();\n      var stepper = this;\n      stepper.timermsec = msec;\n      stepper.timer = setTimeout(function tick() {\n        //stepper.timermsec = 0;\n        //stepper.timer = false;\n        stepper.next();\n        /*if (stepper.autoStart) {\r\n                        stepper.timermsec = msec;\r\n                        stepper.timer = setTimeout(tick, msec);\r\n                    }*/\n      }, msec);\n    },\n    intervalPrev: function intervalPrev(msec) {\n      this.stop();\n      var stepper = this;\n      stepper.timermsec = msec;\n      stepper.timer = setTimeout(function tick() {\n        stepper.prev();\n      }, msec);\n    },\n    registerEventListener: function registerEventListener(eventName, f) {\n      if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(this._events[eventName]) != \"object\") {\n        this._events[eventName] = [];\n      }\n\n      this._events[eventName][this._events[eventName].length] = f;\n    },\n    startEvent: function startEvent(eventName) {\n      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n      if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(this._events[eventName]) == \"object\") {\n        var funcs = this._events[eventName];\n\n        for (var idx in funcs) {\n          if (typeof funcs[idx] == \"function\") {\n            funcs[idx](params);\n          }\n        }\n      }\n    }\n  },\n  mounted: function mounted() {\n    var counter = 0;\n    this.current = this.indexStart;\n    var stepper = this;\n\n    for (var i in this.$children) {\n      var e = this.$children[i];\n\n      if (typeof e.displayed != \"undefined\") {\n        var status = counter == this.current;\n        this.accepted[counter++] = i;\n\n        if (status != e.displayed) {\n          e.displayed = status;\n        }\n      }\n    }\n\n    if (this.autoStart) {\n      this.intervalPrev(this.timeout);\n    }\n  },\n  provide: function provide() {\n    var stepper = this;\n    return {\n      nextStep: this.next,\n      prevStep: this.prev,\n      toStep: this.to,\n      toStepAttr: this.toAttr,\n      countSteps: this.count,\n      possiblePrevStep: this.possiblePrev,\n      possibleNextStep: this.possibleNext,\n      stopAutoStep: this.stop,\n      currentStep: function currentStep() {\n        return stepper.current;\n      },\n      registerEventListener: this.registerEventListener\n    };\n  } //render() {}\n\n}); //};\n//export default Step;\n//module.exports = VueStep;\n//export default Step;\n\n//# sourceURL=webpack://VueStep/./src/step.vue?./node_modules/babel-loader/lib??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/step-indicate.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/step-indicate.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"\\nul.step-indicate {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  padding:0;\\r\\n  margin: 1em 0;\\n}\\nul.step-indicate:after {\\r\\n  content: \\\"\\\";\\r\\n  display: block;\\r\\n  float: none;\\r\\n  clear: both;\\r\\n  height: 0;\\n}\\nul.step-indicate li {\\r\\n  list-style: none;\\r\\n  float: left;\\r\\n  font-size: 1.5em;\\r\\n  margin: 0.3em;\\r\\n  padding:0;\\n}\\nul.step-indicate li span{\\r\\n    cursor: pointer;\\r\\n    display: block;\\r\\n    width: 1em;\\r\\n    height: 1em;\\r\\n    line-height: 0;\\r\\n    border: 0.1em solid #777;\\r\\n    background-color: #eee;\\n}\\nul.step-indicate li span.active{\\r\\n    border: 0.1em solid #000;\\r\\n    background-color: #fff;\\n}\\r\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack://VueStep/./src/step-indicate.vue?./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function(useSourceMap) {\n\tvar list = [];\n\n\t// return the list of modules as css string\n\tlist.toString = function toString() {\n\t\treturn this.map(function (item) {\n\t\t\tvar content = cssWithMappingToString(item, useSourceMap);\n\t\t\tif(item[2]) {\n\t\t\t\treturn \"@media \" + item[2] + \"{\" + content + \"}\";\n\t\t\t} else {\n\t\t\t\treturn content;\n\t\t\t}\n\t\t}).join(\"\");\n\t};\n\n\t// import a list of modules into the list\n\tlist.i = function(modules, mediaQuery) {\n\t\tif(typeof modules === \"string\")\n\t\t\tmodules = [[null, modules, \"\"]];\n\t\tvar alreadyImportedModules = {};\n\t\tfor(var i = 0; i < this.length; i++) {\n\t\t\tvar id = this[i][0];\n\t\t\tif(typeof id === \"number\")\n\t\t\t\talreadyImportedModules[id] = true;\n\t\t}\n\t\tfor(i = 0; i < modules.length; i++) {\n\t\t\tvar item = modules[i];\n\t\t\t// skip already imported module\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\n\t\t\t//  when a module is imported multiple times with different media queries.\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\n\t\t\tif(typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\n\t\t\t\tif(mediaQuery && !item[2]) {\n\t\t\t\t\titem[2] = mediaQuery;\n\t\t\t\t} else if(mediaQuery) {\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\n\t\t\t\t}\n\t\t\t\tlist.push(item);\n\t\t\t}\n\t\t}\n\t};\n\treturn list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n\tvar content = item[1] || '';\n\tvar cssMapping = item[3];\n\tif (!cssMapping) {\n\t\treturn content;\n\t}\n\n\tif (useSourceMap && typeof btoa === 'function') {\n\t\tvar sourceMapping = toComment(cssMapping);\n\t\tvar sourceURLs = cssMapping.sources.map(function (source) {\n\t\t\treturn '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'\n\t\t});\n\n\t\treturn [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n\t}\n\n\treturn [content].join('\\n');\n}\n\n// Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n\t// eslint-disable-next-line no-undef\n\tvar base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n\tvar data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n\n\treturn '/*# ' + data + ' */';\n}\n\n\n//# sourceURL=webpack://VueStep/./node_modules/css-loader/lib/css-base.js?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/block-content.vue?vue&type=template&id=76d1b0a0&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/block-content.vue?vue&type=template&id=76d1b0a0& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"transition\", { attrs: { name: _vm.transition } }, [\n    _vm.displayed\n      ? _c(\n          \"div\",\n          { class: _vm.classes, style: _vm.styles },\n          [\n            _vm._t(\"default\", null, {\n              nextStep: _vm.stepNext,\n              prevStep: _vm.stepPrev,\n              possiblePrevStep: _vm.stepPrevPossible,\n              possibleNextStep: _vm.stepNextPossible,\n              toStep: _vm.stepTo,\n              toStepAttr: _vm.stepAttrTo,\n              stopAutoStep: _vm.autoStepStop,\n              countSteps: _vm.stepsCount,\n              currentStep: _vm.stepCurrent\n            })\n          ],\n          2\n        )\n      : _vm._e()\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://VueStep/./src/block-content.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/block-image.vue?vue&type=template&id=6fa61752&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/block-image.vue?vue&type=template&id=6fa61752& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"transition\", { attrs: { name: _vm.transition } }, [\n    _c(\n      \"div\",\n      {\n        directives: [\n          {\n            name: \"show\",\n            rawName: \"v-show\",\n            value: _vm.displayed,\n            expression: \"displayed\"\n          }\n        ],\n        class: _vm.classes,\n        style: _vm.styles\n      },\n      [\n        _c(\"img\", {\n          directives: [\n            {\n              name: \"show\",\n              rawName: \"v-show\",\n              value: _vm.displayed && !_vm.url,\n              expression: \"displayed && !url\"\n            }\n          ],\n          key: \"img\",\n          attrs: { src: _vm.src, title: _vm.title, alt: _vm.alt }\n        }),\n        _vm._v(\" \"),\n        _c(\n          \"a\",\n          {\n            directives: [\n              {\n                name: \"show\",\n                rawName: \"v-show\",\n                value: _vm.displayed && _vm.url,\n                expression: \"displayed && url\"\n              }\n            ],\n            key: \"link\",\n            attrs: { href: _vm.url, target: _vm.target, title: _vm.title }\n          },\n          [\n            _c(\"img\", {\n              attrs: { src: _vm.src, title: _vm.title, alt: _vm.alt }\n            })\n          ]\n        )\n      ]\n    )\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://VueStep/./src/block-image.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/block-load-content.vue?vue&type=template&id=1112332a&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/block-load-content.vue?vue&type=template&id=1112332a& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"transition\", { attrs: { name: _vm.transition } }, [\n    _vm.displayed\n      ? _c(\"div\", {\n          class: _vm.classes,\n          style: _vm.styles,\n          domProps: { innerHTML: _vm._s(_vm.content) }\n        })\n      : _vm._e()\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://VueStep/./src/block-load-content.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/block-test.vue?vue&type=template&id=5dc6656b&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/block-test.vue?vue&type=template&id=5dc6656b& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"transition\", { attrs: { name: _vm.transition } }, [\n    _c(\n      \"div\",\n      {\n        directives: [\n          {\n            name: \"show\",\n            rawName: \"v-show\",\n            value: _vm.displayed,\n            expression: \"displayed\"\n          }\n        ],\n        class: _vm.classes,\n        style: _vm.styles\n      },\n      [\n        _vm.possibleNextStep\n          ? _c(\"button\", { on: { click: _vm.nextStep } }, [_vm._v(\"Next\")])\n          : _vm._e(),\n        _vm._v(\" \"),\n        _vm.possiblePrevStep\n          ? _c(\"button\", { on: { click: _vm.prevStep } }, [_vm._v(\"Previous\")])\n          : _vm._e()\n      ]\n    )\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://VueStep/./src/block-test.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/button-next.vue?vue&type=template&id=7f4ba665&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/button-next.vue?vue&type=template&id=7f4ba665& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"transition\", { attrs: { name: _vm.transition } }, [\n    _vm.possible\n      ? _c(\n          \"div\",\n          {\n            class: _vm.buttonclass,\n            style: _vm.styles,\n            on: {\n              click: _vm.action,\n              mouseover: _vm.hover,\n              mouseout: _vm.unhover\n            }\n          },\n          [_vm._t(\"default\")],\n          2\n        )\n      : _vm._e()\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://VueStep/./src/button-next.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/button-prev.vue?vue&type=template&id=4321c4b6&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/button-prev.vue?vue&type=template&id=4321c4b6& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"transition\", { attrs: { name: _vm.transition } }, [\n    _vm.possible\n      ? _c(\n          \"div\",\n          {\n            class: _vm.buttonclass,\n            style: _vm.styles,\n            on: {\n              click: _vm.action,\n              mouseover: _vm.hover,\n              mouseout: _vm.unhover\n            }\n          },\n          [_vm._t(\"default\")],\n          2\n        )\n      : _vm._e()\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://VueStep/./src/button-prev.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/step-indicate.vue?vue&type=template&id=7d388c91&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/step-indicate.vue?vue&type=template&id=7d388c91& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"transition\", { attrs: { name: _vm.transition } }, [\n    _c(\"div\", { class: _vm.classes, style: _vm.styles }, [\n      _c(\n        \"ul\",\n        { staticClass: \"step-indicate\" },\n        _vm._l(_vm.varCountSteps, function(cs) {\n          return _c(\"li\", { key: cs }, [\n            cs - 1 == _vm.varStep\n              ? _c(\"span\", { staticClass: \"active\" })\n              : _c(\"span\", {\n                  on: {\n                    click: function($event) {\n                      return _vm.onToStep(cs - 1)\n                    }\n                  }\n                })\n          ])\n        }),\n        0\n      )\n    ])\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://VueStep/./src/step-indicate.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/step.vue?vue&type=template&id=dc727bb6&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/step.vue?vue&type=template&id=dc727bb6& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"step\" }, [_vm._t(\"default\")], 2)\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://VueStep/./src/step.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return normalizeComponent; });\n/* globals __VUE_SSR_CONTEXT__ */\n\n// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nfunction normalizeComponent (\n  scriptExports,\n  render,\n  staticRenderFns,\n  functionalTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier, /* server only */\n  shadowMode /* vue-cli only */\n) {\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === 'function'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (render) {\n    options.render = render\n    options.staticRenderFns = staticRenderFns\n    options._compiled = true\n  }\n\n  // functional template\n  if (functionalTemplate) {\n    options.functional = true\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = 'data-v-' + scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) { // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = shadowMode\n      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }\n      : injectStyles\n  }\n\n  if (hook) {\n    if (options.functional) {\n      // for template-only hot-reload because in that case the render fn doesn't\n      // go through the normalizer\n      options._injectStyles = hook\n      // register for functioal component in vue file\n      var originalRender = options.render\n      options.render = function renderWithStyleInjection (h, context) {\n        hook.call(context)\n        return originalRender(h, context)\n      }\n    } else {\n      // inject component registration as beforeCreate hook\n      var existing = options.beforeCreate\n      options.beforeCreate = existing\n        ? [].concat(existing, hook)\n        : [hook]\n    }\n  }\n\n  return {\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n//# sourceURL=webpack://VueStep/./node_modules/vue-loader/lib/runtime/componentNormalizer.js?");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/step-indicate.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/step-indicate.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../node_modules/css-loader!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib??vue-loader-options!./step-indicate.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/step-indicate.vue?vue&type=style&index=0&lang=css&\");\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"2b53c4d6\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack://VueStep/./src/step-indicate.vue?./node_modules/vue-style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/addStylesClient.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return addStylesClient; });\n/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ \"./node_modules/vue-style-loader/lib/listToStyles.js\");\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n  Modified by Evan You @yyx990803\n*/\n\n\n\nvar hasDocument = typeof document !== 'undefined'\n\nif (typeof DEBUG !== 'undefined' && DEBUG) {\n  if (!hasDocument) {\n    throw new Error(\n    'vue-style-loader cannot be used in a non-browser environment. ' +\n    \"Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.\"\n  ) }\n}\n\n/*\ntype StyleObject = {\n  id: number;\n  parts: Array<StyleObjectPart>\n}\n\ntype StyleObjectPart = {\n  css: string;\n  media: string;\n  sourceMap: ?string\n}\n*/\n\nvar stylesInDom = {/*\n  [id: number]: {\n    id: number,\n    refs: number,\n    parts: Array<(obj?: StyleObjectPart) => void>\n  }\n*/}\n\nvar head = hasDocument && (document.head || document.getElementsByTagName('head')[0])\nvar singletonElement = null\nvar singletonCounter = 0\nvar isProduction = false\nvar noop = function () {}\nvar options = null\nvar ssrIdKey = 'data-vue-ssr-id'\n\n// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n// tags it will allow on a page\nvar isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase())\n\nfunction addStylesClient (parentId, list, _isProduction, _options) {\n  isProduction = _isProduction\n\n  options = _options || {}\n\n  var styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(parentId, list)\n  addStylesToDom(styles)\n\n  return function update (newList) {\n    var mayRemove = []\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i]\n      var domStyle = stylesInDom[item.id]\n      domStyle.refs--\n      mayRemove.push(domStyle)\n    }\n    if (newList) {\n      styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(parentId, newList)\n      addStylesToDom(styles)\n    } else {\n      styles = []\n    }\n    for (var i = 0; i < mayRemove.length; i++) {\n      var domStyle = mayRemove[i]\n      if (domStyle.refs === 0) {\n        for (var j = 0; j < domStyle.parts.length; j++) {\n          domStyle.parts[j]()\n        }\n        delete stylesInDom[domStyle.id]\n      }\n    }\n  }\n}\n\nfunction addStylesToDom (styles /* Array<StyleObject> */) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i]\n    var domStyle = stylesInDom[item.id]\n    if (domStyle) {\n      domStyle.refs++\n      for (var j = 0; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j])\n      }\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j]))\n      }\n      if (domStyle.parts.length > item.parts.length) {\n        domStyle.parts.length = item.parts.length\n      }\n    } else {\n      var parts = []\n      for (var j = 0; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j]))\n      }\n      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }\n    }\n  }\n}\n\nfunction createStyleElement () {\n  var styleElement = document.createElement('style')\n  styleElement.type = 'text/css'\n  head.appendChild(styleElement)\n  return styleElement\n}\n\nfunction addStyle (obj /* StyleObjectPart */) {\n  var update, remove\n  var styleElement = document.querySelector('style[' + ssrIdKey + '~=\"' + obj.id + '\"]')\n\n  if (styleElement) {\n    if (isProduction) {\n      // has SSR styles and in production mode.\n      // simply do nothing.\n      return noop\n    } else {\n      // has SSR styles but in dev mode.\n      // for some reason Chrome can't handle source map in server-rendered\n      // style tags - source maps in <style> only works if the style tag is\n      // created and inserted dynamically. So we remove the server rendered\n      // styles and inject new ones.\n      styleElement.parentNode.removeChild(styleElement)\n    }\n  }\n\n  if (isOldIE) {\n    // use singleton mode for IE9.\n    var styleIndex = singletonCounter++\n    styleElement = singletonElement || (singletonElement = createStyleElement())\n    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)\n    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)\n  } else {\n    // use multi-style-tag mode in all other cases\n    styleElement = createStyleElement()\n    update = applyToTag.bind(null, styleElement)\n    remove = function () {\n      styleElement.parentNode.removeChild(styleElement)\n    }\n  }\n\n  update(obj)\n\n  return function updateStyle (newObj /* StyleObjectPart */) {\n    if (newObj) {\n      if (newObj.css === obj.css &&\n          newObj.media === obj.media &&\n          newObj.sourceMap === obj.sourceMap) {\n        return\n      }\n      update(obj = newObj)\n    } else {\n      remove()\n    }\n  }\n}\n\nvar replaceText = (function () {\n  var textStore = []\n\n  return function (index, replacement) {\n    textStore[index] = replacement\n    return textStore.filter(Boolean).join('\\n')\n  }\n})()\n\nfunction applyToSingletonTag (styleElement, index, remove, obj) {\n  var css = remove ? '' : obj.css\n\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = replaceText(index, css)\n  } else {\n    var cssNode = document.createTextNode(css)\n    var childNodes = styleElement.childNodes\n    if (childNodes[index]) styleElement.removeChild(childNodes[index])\n    if (childNodes.length) {\n      styleElement.insertBefore(cssNode, childNodes[index])\n    } else {\n      styleElement.appendChild(cssNode)\n    }\n  }\n}\n\nfunction applyToTag (styleElement, obj) {\n  var css = obj.css\n  var media = obj.media\n  var sourceMap = obj.sourceMap\n\n  if (media) {\n    styleElement.setAttribute('media', media)\n  }\n  if (options.ssrId) {\n    styleElement.setAttribute(ssrIdKey, obj.id)\n  }\n\n  if (sourceMap) {\n    // https://developer.chrome.com/devtools/docs/javascript-debugging\n    // this makes source maps inside style tags work properly in Chrome\n    css += '\\n/*# sourceURL=' + sourceMap.sources[0] + ' */'\n    // http://stackoverflow.com/a/26603875\n    css += '\\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'\n  }\n\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild)\n    }\n    styleElement.appendChild(document.createTextNode(css))\n  }\n}\n\n\n//# sourceURL=webpack://VueStep/./node_modules/vue-style-loader/lib/addStylesClient.js?");

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/listToStyles.js":
/*!***********************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/listToStyles.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return listToStyles; });\n/**\n * Translates the list format produced by css-loader into something\n * easier to manipulate.\n */\nfunction listToStyles (parentId, list) {\n  var styles = []\n  var newStyles = {}\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i]\n    var id = item[0]\n    var css = item[1]\n    var media = item[2]\n    var sourceMap = item[3]\n    var part = {\n      id: parentId + ':' + i,\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    }\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = { id: id, parts: [part] })\n    } else {\n      newStyles[id].parts.push(part)\n    }\n  }\n  return styles\n}\n\n\n//# sourceURL=webpack://VueStep/./node_modules/vue-style-loader/lib/listToStyles.js?");

/***/ }),

/***/ "./src/block-content.vue":
/*!*******************************!*\
  !*** ./src/block-content.vue ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _block_content_vue_vue_type_template_id_76d1b0a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block-content.vue?vue&type=template&id=76d1b0a0& */ \"./src/block-content.vue?vue&type=template&id=76d1b0a0&\");\n/* harmony import */ var _block_content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block-content.vue?vue&type=script&lang=js& */ \"./src/block-content.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _block_content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _block_content_vue_vue_type_template_id_76d1b0a0___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _block_content_vue_vue_type_template_id_76d1b0a0___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/block-content.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://VueStep/./src/block-content.vue?");

/***/ }),

/***/ "./src/block-content.vue?vue&type=script&lang=js&":
/*!********************************************************!*\
  !*** ./src/block-content.vue?vue&type=script&lang=js& ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_block_content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib??ref--1-0!../node_modules/vue-loader/lib??vue-loader-options!./block-content.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/block-content.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_block_content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://VueStep/./src/block-content.vue?");

/***/ }),

/***/ "./src/block-content.vue?vue&type=template&id=76d1b0a0&":
/*!**************************************************************!*\
  !*** ./src/block-content.vue?vue&type=template&id=76d1b0a0& ***!
  \**************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_block_content_vue_vue_type_template_id_76d1b0a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./block-content.vue?vue&type=template&id=76d1b0a0& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/block-content.vue?vue&type=template&id=76d1b0a0&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_block_content_vue_vue_type_template_id_76d1b0a0___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_block_content_vue_vue_type_template_id_76d1b0a0___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack://VueStep/./src/block-content.vue?");

/***/ }),

/***/ "./src/block-image.vue":
/*!*****************************!*\
  !*** ./src/block-image.vue ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _block_image_vue_vue_type_template_id_6fa61752___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block-image.vue?vue&type=template&id=6fa61752& */ \"./src/block-image.vue?vue&type=template&id=6fa61752&\");\n/* harmony import */ var _block_image_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block-image.vue?vue&type=script&lang=js& */ \"./src/block-image.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _block_image_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _block_image_vue_vue_type_template_id_6fa61752___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _block_image_vue_vue_type_template_id_6fa61752___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/block-image.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://VueStep/./src/block-image.vue?");

/***/ }),

/***/ "./src/block-image.vue?vue&type=script&lang=js&":
/*!******************************************************!*\
  !*** ./src/block-image.vue?vue&type=script&lang=js& ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_block_image_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib??ref--1-0!../node_modules/vue-loader/lib??vue-loader-options!./block-image.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/block-image.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_block_image_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://VueStep/./src/block-image.vue?");

/***/ }),

/***/ "./src/block-image.vue?vue&type=template&id=6fa61752&":
/*!************************************************************!*\
  !*** ./src/block-image.vue?vue&type=template&id=6fa61752& ***!
  \************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_block_image_vue_vue_type_template_id_6fa61752___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./block-image.vue?vue&type=template&id=6fa61752& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/block-image.vue?vue&type=template&id=6fa61752&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_block_image_vue_vue_type_template_id_6fa61752___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_block_image_vue_vue_type_template_id_6fa61752___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack://VueStep/./src/block-image.vue?");

/***/ }),

/***/ "./src/block-load-content.vue":
/*!************************************!*\
  !*** ./src/block-load-content.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _block_load_content_vue_vue_type_template_id_1112332a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block-load-content.vue?vue&type=template&id=1112332a& */ \"./src/block-load-content.vue?vue&type=template&id=1112332a&\");\n/* harmony import */ var _block_load_content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block-load-content.vue?vue&type=script&lang=js& */ \"./src/block-load-content.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _block_load_content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _block_load_content_vue_vue_type_template_id_1112332a___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _block_load_content_vue_vue_type_template_id_1112332a___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/block-load-content.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://VueStep/./src/block-load-content.vue?");

/***/ }),

/***/ "./src/block-load-content.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./src/block-load-content.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_block_load_content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib??ref--1-0!../node_modules/vue-loader/lib??vue-loader-options!./block-load-content.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/block-load-content.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_block_load_content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://VueStep/./src/block-load-content.vue?");

/***/ }),

/***/ "./src/block-load-content.vue?vue&type=template&id=1112332a&":
/*!*******************************************************************!*\
  !*** ./src/block-load-content.vue?vue&type=template&id=1112332a& ***!
  \*******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_block_load_content_vue_vue_type_template_id_1112332a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./block-load-content.vue?vue&type=template&id=1112332a& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/block-load-content.vue?vue&type=template&id=1112332a&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_block_load_content_vue_vue_type_template_id_1112332a___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_block_load_content_vue_vue_type_template_id_1112332a___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack://VueStep/./src/block-load-content.vue?");

/***/ }),

/***/ "./src/block-test.vue":
/*!****************************!*\
  !*** ./src/block-test.vue ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _block_test_vue_vue_type_template_id_5dc6656b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block-test.vue?vue&type=template&id=5dc6656b& */ \"./src/block-test.vue?vue&type=template&id=5dc6656b&\");\n/* harmony import */ var _block_test_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block-test.vue?vue&type=script&lang=js& */ \"./src/block-test.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _block_test_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _block_test_vue_vue_type_template_id_5dc6656b___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _block_test_vue_vue_type_template_id_5dc6656b___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/block-test.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://VueStep/./src/block-test.vue?");

/***/ }),

/***/ "./src/block-test.vue?vue&type=script&lang=js&":
/*!*****************************************************!*\
  !*** ./src/block-test.vue?vue&type=script&lang=js& ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_block_test_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib??ref--1-0!../node_modules/vue-loader/lib??vue-loader-options!./block-test.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/block-test.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_block_test_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://VueStep/./src/block-test.vue?");

/***/ }),

/***/ "./src/block-test.vue?vue&type=template&id=5dc6656b&":
/*!***********************************************************!*\
  !*** ./src/block-test.vue?vue&type=template&id=5dc6656b& ***!
  \***********************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_block_test_vue_vue_type_template_id_5dc6656b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./block-test.vue?vue&type=template&id=5dc6656b& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/block-test.vue?vue&type=template&id=5dc6656b&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_block_test_vue_vue_type_template_id_5dc6656b___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_block_test_vue_vue_type_template_id_5dc6656b___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack://VueStep/./src/block-test.vue?");

/***/ }),

/***/ "./src/button-next.vue":
/*!*****************************!*\
  !*** ./src/button-next.vue ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _button_next_vue_vue_type_template_id_7f4ba665___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button-next.vue?vue&type=template&id=7f4ba665& */ \"./src/button-next.vue?vue&type=template&id=7f4ba665&\");\n/* harmony import */ var _button_next_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button-next.vue?vue&type=script&lang=js& */ \"./src/button-next.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _button_next_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _button_next_vue_vue_type_template_id_7f4ba665___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _button_next_vue_vue_type_template_id_7f4ba665___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/button-next.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://VueStep/./src/button-next.vue?");

/***/ }),

/***/ "./src/button-next.vue?vue&type=script&lang=js&":
/*!******************************************************!*\
  !*** ./src/button-next.vue?vue&type=script&lang=js& ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_button_next_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib??ref--1-0!../node_modules/vue-loader/lib??vue-loader-options!./button-next.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/button-next.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_button_next_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://VueStep/./src/button-next.vue?");

/***/ }),

/***/ "./src/button-next.vue?vue&type=template&id=7f4ba665&":
/*!************************************************************!*\
  !*** ./src/button-next.vue?vue&type=template&id=7f4ba665& ***!
  \************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_button_next_vue_vue_type_template_id_7f4ba665___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./button-next.vue?vue&type=template&id=7f4ba665& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/button-next.vue?vue&type=template&id=7f4ba665&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_button_next_vue_vue_type_template_id_7f4ba665___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_button_next_vue_vue_type_template_id_7f4ba665___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack://VueStep/./src/button-next.vue?");

/***/ }),

/***/ "./src/button-prev.vue":
/*!*****************************!*\
  !*** ./src/button-prev.vue ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _button_prev_vue_vue_type_template_id_4321c4b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button-prev.vue?vue&type=template&id=4321c4b6& */ \"./src/button-prev.vue?vue&type=template&id=4321c4b6&\");\n/* harmony import */ var _button_prev_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button-prev.vue?vue&type=script&lang=js& */ \"./src/button-prev.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _button_prev_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _button_prev_vue_vue_type_template_id_4321c4b6___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _button_prev_vue_vue_type_template_id_4321c4b6___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/button-prev.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://VueStep/./src/button-prev.vue?");

/***/ }),

/***/ "./src/button-prev.vue?vue&type=script&lang=js&":
/*!******************************************************!*\
  !*** ./src/button-prev.vue?vue&type=script&lang=js& ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_button_prev_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib??ref--1-0!../node_modules/vue-loader/lib??vue-loader-options!./button-prev.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/button-prev.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_button_prev_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://VueStep/./src/button-prev.vue?");

/***/ }),

/***/ "./src/button-prev.vue?vue&type=template&id=4321c4b6&":
/*!************************************************************!*\
  !*** ./src/button-prev.vue?vue&type=template&id=4321c4b6& ***!
  \************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_button_prev_vue_vue_type_template_id_4321c4b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./button-prev.vue?vue&type=template&id=4321c4b6& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/button-prev.vue?vue&type=template&id=4321c4b6&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_button_prev_vue_vue_type_template_id_4321c4b6___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_button_prev_vue_vue_type_template_id_4321c4b6___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack://VueStep/./src/button-prev.vue?");

/***/ }),

/***/ "./src/displayed.mix.js":
/*!******************************!*\
  !*** ./src/displayed.mix.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    displayed: {\n      type: Boolean,\n      \"default\": false\n    },\n    onShow: {\n      type: Function,\n      \"default\": function _default(component) {}\n    },\n    onHide: {\n      type: Function,\n      \"default\": function _default(component) {}\n    }\n  },\n  watch: {\n    displayed: function displayed(newVal, oldVal) {\n      if (newVal != oldVal) {\n        if (newVal) {\n          this.onShow(this);\n        } else {\n          this.onHide(this);\n        }\n      }\n    }\n  }\n});\n\n//# sourceURL=webpack://VueStep/./src/displayed.mix.js?");

/***/ }),

/***/ "./src/step-indicate.vue":
/*!*******************************!*\
  !*** ./src/step-indicate.vue ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _step_indicate_vue_vue_type_template_id_7d388c91___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./step-indicate.vue?vue&type=template&id=7d388c91& */ \"./src/step-indicate.vue?vue&type=template&id=7d388c91&\");\n/* harmony import */ var _step_indicate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./step-indicate.vue?vue&type=script&lang=js& */ \"./src/step-indicate.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _step_indicate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./step-indicate.vue?vue&type=style&index=0&lang=css& */ \"./src/step-indicate.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _step_indicate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _step_indicate_vue_vue_type_template_id_7d388c91___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _step_indicate_vue_vue_type_template_id_7d388c91___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/step-indicate.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://VueStep/./src/step-indicate.vue?");

/***/ }),

/***/ "./src/step-indicate.vue?vue&type=script&lang=js&":
/*!********************************************************!*\
  !*** ./src/step-indicate.vue?vue&type=script&lang=js& ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_step_indicate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib??ref--1-0!../node_modules/vue-loader/lib??vue-loader-options!./step-indicate.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/step-indicate.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_step_indicate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://VueStep/./src/step-indicate.vue?");

/***/ }),

/***/ "./src/step-indicate.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************!*\
  !*** ./src/step-indicate.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_step_indicate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-style-loader!../node_modules/css-loader!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib??vue-loader-options!./step-indicate.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/step-indicate.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_step_indicate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_step_indicate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_step_indicate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_step_indicate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_step_indicate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack://VueStep/./src/step-indicate.vue?");

/***/ }),

/***/ "./src/step-indicate.vue?vue&type=template&id=7d388c91&":
/*!**************************************************************!*\
  !*** ./src/step-indicate.vue?vue&type=template&id=7d388c91& ***!
  \**************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_step_indicate_vue_vue_type_template_id_7d388c91___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./step-indicate.vue?vue&type=template&id=7d388c91& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/step-indicate.vue?vue&type=template&id=7d388c91&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_step_indicate_vue_vue_type_template_id_7d388c91___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_step_indicate_vue_vue_type_template_id_7d388c91___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack://VueStep/./src/step-indicate.vue?");

/***/ }),

/***/ "./src/step.js":
/*!*********************!*\
  !*** ./src/step.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = {\n  Step: function Step() {\n    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"Step\";\n\n    var BS = __webpack_require__(/*! ./step.vue */ \"./src/step.vue\");\n\n    return Object.assign(BS[\"default\"], {\n      \"name\": name\n    });\n  },\n  LoadContent: function LoadContent() {\n    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"block-load-content\";\n\n    var BLC = __webpack_require__(/*! ./block-load-content.vue */ \"./src/block-load-content.vue\");\n\n    return Object.assign(BLC[\"default\"], {\n      \"name\": name\n    });\n  },\n  Content: function Content() {\n    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"block-content\";\n\n    var BC = __webpack_require__(/*! ./block-content.vue */ \"./src/block-content.vue\");\n\n    return Object.assign(BC[\"default\"], {\n      \"name\": name\n    });\n  },\n  Test: function Test() {\n    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"block-test\";\n\n    var BT = __webpack_require__(/*! ./block-test.vue */ \"./src/block-test.vue\");\n\n    return Object.assign(BT[\"default\"], {\n      \"name\": name\n    });\n  },\n  Image: function Image() {\n    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"block-image\";\n\n    var Img = __webpack_require__(/*! ./block-image.vue */ \"./src/block-image.vue\");\n\n    return Object.assign(Img[\"default\"], {\n      \"name\": name\n    });\n  },\n  Indicate: function Indicate() {\n    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"step-indicate\";\n\n    var Indicate = __webpack_require__(/*! ./step-indicate.vue */ \"./src/step-indicate.vue\");\n\n    return Object.assign(Indicate[\"default\"], {\n      \"name\": name\n    });\n  },\n  ButtonPrev: function ButtonPrev() {\n    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"button-prev\";\n\n    var BtnPrev = __webpack_require__(/*! ./button-prev.vue */ \"./src/button-prev.vue\");\n\n    return Object.assign(BtnPrev[\"default\"], {\n      \"name\": name\n    });\n  },\n  ButtonNext: function ButtonNext() {\n    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"button-next\";\n\n    var BtnNext = __webpack_require__(/*! ./button-next.vue */ \"./src/button-next.vue\");\n\n    return Object.assign(BtnNext[\"default\"], {\n      \"name\": name\n    });\n  }\n};\n\n//# sourceURL=webpack://VueStep/./src/step.js?");

/***/ }),

/***/ "./src/step.vue":
/*!**********************!*\
  !*** ./src/step.vue ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _step_vue_vue_type_template_id_dc727bb6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./step.vue?vue&type=template&id=dc727bb6& */ \"./src/step.vue?vue&type=template&id=dc727bb6&\");\n/* harmony import */ var _step_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./step.vue?vue&type=script&lang=js& */ \"./src/step.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _step_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _step_vue_vue_type_template_id_dc727bb6___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _step_vue_vue_type_template_id_dc727bb6___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/step.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://VueStep/./src/step.vue?");

/***/ }),

/***/ "./src/step.vue?vue&type=script&lang=js&":
/*!***********************************************!*\
  !*** ./src/step.vue?vue&type=script&lang=js& ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_step_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib??ref--1-0!../node_modules/vue-loader/lib??vue-loader-options!./step.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/step.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_step_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://VueStep/./src/step.vue?");

/***/ }),

/***/ "./src/step.vue?vue&type=template&id=dc727bb6&":
/*!*****************************************************!*\
  !*** ./src/step.vue?vue&type=template&id=dc727bb6& ***!
  \*****************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_step_vue_vue_type_template_id_dc727bb6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./step.vue?vue&type=template&id=dc727bb6& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/step.vue?vue&type=template&id=dc727bb6&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_step_vue_vue_type_template_id_dc727bb6___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_step_vue_vue_type_template_id_dc727bb6___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack://VueStep/./src/step.vue?");

/***/ })

/******/ });
});