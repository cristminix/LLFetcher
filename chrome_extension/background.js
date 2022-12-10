var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value2) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value: value2 }) : obj[key] = value2;
var __commonJS = (cb2, mod) => function __require() {
  return mod || (0, cb2[__getOwnPropNames(cb2)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all3) => {
  for (var name in all3)
    __defProp(target, name, { get: all3[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __publicField = (obj, key, value2) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value2);
  return value2;
};

// node_modules/form-data/lib/browser.js
var require_browser = __commonJS({
  "node_modules/form-data/lib/browser.js"(exports, module) {
    module.exports = typeof self == "object" ? self.FormData : window.FormData;
  }
});

// node_modules/underscore/underscore-esm.js
var VERSION = "1.13.6";
var root = typeof self == "object" && self.self === self && self || typeof global == "object" && global.global === global && global || Function("return this")() || {};
var ArrayProto = Array.prototype;
var ObjProto = Object.prototype;
var SymbolProto = typeof Symbol !== "undefined" ? Symbol.prototype : null;
var push = ArrayProto.push;
var slice = ArrayProto.slice;
var toString = ObjProto.toString;
var hasOwnProperty = ObjProto.hasOwnProperty;
var supportsArrayBuffer = typeof ArrayBuffer !== "undefined";
var supportsDataView = typeof DataView !== "undefined";
var nativeIsArray = Array.isArray;
var nativeKeys = Object.keys;
var nativeCreate = Object.create;
var nativeIsView = supportsArrayBuffer && ArrayBuffer.isView;
var _isNaN = isNaN;
var _isFinite = isFinite;
var hasEnumBug = !{ toString: null }.propertyIsEnumerable("toString");
var nonEnumerableProps = [
  "valueOf",
  "isPrototypeOf",
  "toString",
  "propertyIsEnumerable",
  "hasOwnProperty",
  "toLocaleString"
];
var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
function restArguments(func, startIndex) {
  startIndex = startIndex == null ? func.length - 1 : +startIndex;
  return function() {
    var length2 = Math.max(arguments.length - startIndex, 0), rest2 = Array(length2), index = 0;
    for (; index < length2; index++) {
      rest2[index] = arguments[index + startIndex];
    }
    switch (startIndex) {
      case 0:
        return func.call(this, rest2);
      case 1:
        return func.call(this, arguments[0], rest2);
      case 2:
        return func.call(this, arguments[0], arguments[1], rest2);
    }
    var args = Array(startIndex + 1);
    for (index = 0; index < startIndex; index++) {
      args[index] = arguments[index];
    }
    args[startIndex] = rest2;
    return func.apply(this, args);
  };
}
function isObject(obj) {
  var type = typeof obj;
  return type === "function" || type === "object" && !!obj;
}
function isNull(obj) {
  return obj === null;
}
function isUndefined(obj) {
  return obj === void 0;
}
function isBoolean(obj) {
  return obj === true || obj === false || toString.call(obj) === "[object Boolean]";
}
function isElement(obj) {
  return !!(obj && obj.nodeType === 1);
}
function tagTester(name) {
  var tag = "[object " + name + "]";
  return function(obj) {
    return toString.call(obj) === tag;
  };
}
var isString = tagTester("String");
var isNumber = tagTester("Number");
var isDate = tagTester("Date");
var isRegExp = tagTester("RegExp");
var isError = tagTester("Error");
var isSymbol = tagTester("Symbol");
var isArrayBuffer = tagTester("ArrayBuffer");
var isFunction = tagTester("Function");
var nodelist = root.document && root.document.childNodes;
if (typeof /./ != "function" && typeof Int8Array != "object" && typeof nodelist != "function") {
  isFunction = function(obj) {
    return typeof obj == "function" || false;
  };
}
var isFunction$1 = isFunction;
var hasObjectTag = tagTester("Object");
var hasStringTagBug = supportsDataView && hasObjectTag(new DataView(new ArrayBuffer(8)));
var isIE11 = typeof Map !== "undefined" && hasObjectTag(/* @__PURE__ */ new Map());
var isDataView = tagTester("DataView");
function ie10IsDataView(obj) {
  return obj != null && isFunction$1(obj.getInt8) && isArrayBuffer(obj.buffer);
}
var isDataView$1 = hasStringTagBug ? ie10IsDataView : isDataView;
var isArray = nativeIsArray || tagTester("Array");
function has$1(obj, key) {
  return obj != null && hasOwnProperty.call(obj, key);
}
var isArguments = tagTester("Arguments");
(function() {
  if (!isArguments(arguments)) {
    isArguments = function(obj) {
      return has$1(obj, "callee");
    };
  }
})();
var isArguments$1 = isArguments;
function isFinite$1(obj) {
  return !isSymbol(obj) && _isFinite(obj) && !isNaN(parseFloat(obj));
}
function isNaN$1(obj) {
  return isNumber(obj) && _isNaN(obj);
}
function constant(value2) {
  return function() {
    return value2;
  };
}
function createSizePropertyCheck(getSizeProperty) {
  return function(collection) {
    var sizeProperty = getSizeProperty(collection);
    return typeof sizeProperty == "number" && sizeProperty >= 0 && sizeProperty <= MAX_ARRAY_INDEX;
  };
}
function shallowProperty(key) {
  return function(obj) {
    return obj == null ? void 0 : obj[key];
  };
}
var getByteLength = shallowProperty("byteLength");
var isBufferLike = createSizePropertyCheck(getByteLength);
var typedArrayPattern = /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;
function isTypedArray(obj) {
  return nativeIsView ? nativeIsView(obj) && !isDataView$1(obj) : isBufferLike(obj) && typedArrayPattern.test(toString.call(obj));
}
var isTypedArray$1 = supportsArrayBuffer ? isTypedArray : constant(false);
var getLength = shallowProperty("length");
function emulatedSet(keys2) {
  var hash = {};
  for (var l = keys2.length, i2 = 0; i2 < l; ++i2)
    hash[keys2[i2]] = true;
  return {
    contains: function(key) {
      return hash[key] === true;
    },
    push: function(key) {
      hash[key] = true;
      return keys2.push(key);
    }
  };
}
function collectNonEnumProps(obj, keys2) {
  keys2 = emulatedSet(keys2);
  var nonEnumIdx = nonEnumerableProps.length;
  var constructor = obj.constructor;
  var proto = isFunction$1(constructor) && constructor.prototype || ObjProto;
  var prop = "constructor";
  if (has$1(obj, prop) && !keys2.contains(prop))
    keys2.push(prop);
  while (nonEnumIdx--) {
    prop = nonEnumerableProps[nonEnumIdx];
    if (prop in obj && obj[prop] !== proto[prop] && !keys2.contains(prop)) {
      keys2.push(prop);
    }
  }
}
function keys(obj) {
  if (!isObject(obj))
    return [];
  if (nativeKeys)
    return nativeKeys(obj);
  var keys2 = [];
  for (var key in obj)
    if (has$1(obj, key))
      keys2.push(key);
  if (hasEnumBug)
    collectNonEnumProps(obj, keys2);
  return keys2;
}
function isEmpty(obj) {
  if (obj == null)
    return true;
  var length2 = getLength(obj);
  if (typeof length2 == "number" && (isArray(obj) || isString(obj) || isArguments$1(obj)))
    return length2 === 0;
  return getLength(keys(obj)) === 0;
}
function isMatch(object2, attrs) {
  var _keys = keys(attrs), length2 = _keys.length;
  if (object2 == null)
    return !length2;
  var obj = Object(object2);
  for (var i2 = 0; i2 < length2; i2++) {
    var key = _keys[i2];
    if (attrs[key] !== obj[key] || !(key in obj))
      return false;
  }
  return true;
}
function _$1(obj) {
  if (obj instanceof _$1)
    return obj;
  if (!(this instanceof _$1))
    return new _$1(obj);
  this._wrapped = obj;
}
_$1.VERSION = VERSION;
_$1.prototype.value = function() {
  return this._wrapped;
};
_$1.prototype.valueOf = _$1.prototype.toJSON = _$1.prototype.value;
_$1.prototype.toString = function() {
  return String(this._wrapped);
};
function toBufferView(bufferSource) {
  return new Uint8Array(
    bufferSource.buffer || bufferSource,
    bufferSource.byteOffset || 0,
    getByteLength(bufferSource)
  );
}
var tagDataView = "[object DataView]";
function eq(a, b, aStack, bStack) {
  if (a === b)
    return a !== 0 || 1 / a === 1 / b;
  if (a == null || b == null)
    return false;
  if (a !== a)
    return b !== b;
  var type = typeof a;
  if (type !== "function" && type !== "object" && typeof b != "object")
    return false;
  return deepEq(a, b, aStack, bStack);
}
function deepEq(a, b, aStack, bStack) {
  if (a instanceof _$1)
    a = a._wrapped;
  if (b instanceof _$1)
    b = b._wrapped;
  var className = toString.call(a);
  if (className !== toString.call(b))
    return false;
  if (hasStringTagBug && className == "[object Object]" && isDataView$1(a)) {
    if (!isDataView$1(b))
      return false;
    className = tagDataView;
  }
  switch (className) {
    case "[object RegExp]":
    case "[object String]":
      return "" + a === "" + b;
    case "[object Number]":
      if (+a !== +a)
        return +b !== +b;
      return +a === 0 ? 1 / +a === 1 / b : +a === +b;
    case "[object Date]":
    case "[object Boolean]":
      return +a === +b;
    case "[object Symbol]":
      return SymbolProto.valueOf.call(a) === SymbolProto.valueOf.call(b);
    case "[object ArrayBuffer]":
    case tagDataView:
      return deepEq(toBufferView(a), toBufferView(b), aStack, bStack);
  }
  var areArrays = className === "[object Array]";
  if (!areArrays && isTypedArray$1(a)) {
    var byteLength2 = getByteLength(a);
    if (byteLength2 !== getByteLength(b))
      return false;
    if (a.buffer === b.buffer && a.byteOffset === b.byteOffset)
      return true;
    areArrays = true;
  }
  if (!areArrays) {
    if (typeof a != "object" || typeof b != "object")
      return false;
    var aCtor = a.constructor, bCtor = b.constructor;
    if (aCtor !== bCtor && !(isFunction$1(aCtor) && aCtor instanceof aCtor && isFunction$1(bCtor) && bCtor instanceof bCtor) && ("constructor" in a && "constructor" in b)) {
      return false;
    }
  }
  aStack = aStack || [];
  bStack = bStack || [];
  var length2 = aStack.length;
  while (length2--) {
    if (aStack[length2] === a)
      return bStack[length2] === b;
  }
  aStack.push(a);
  bStack.push(b);
  if (areArrays) {
    length2 = a.length;
    if (length2 !== b.length)
      return false;
    while (length2--) {
      if (!eq(a[length2], b[length2], aStack, bStack))
        return false;
    }
  } else {
    var _keys = keys(a), key;
    length2 = _keys.length;
    if (keys(b).length !== length2)
      return false;
    while (length2--) {
      key = _keys[length2];
      if (!(has$1(b, key) && eq(a[key], b[key], aStack, bStack)))
        return false;
    }
  }
  aStack.pop();
  bStack.pop();
  return true;
}
function isEqual(a, b) {
  return eq(a, b);
}
function allKeys(obj) {
  if (!isObject(obj))
    return [];
  var keys2 = [];
  for (var key in obj)
    keys2.push(key);
  if (hasEnumBug)
    collectNonEnumProps(obj, keys2);
  return keys2;
}
function ie11fingerprint(methods) {
  var length2 = getLength(methods);
  return function(obj) {
    if (obj == null)
      return false;
    var keys2 = allKeys(obj);
    if (getLength(keys2))
      return false;
    for (var i2 = 0; i2 < length2; i2++) {
      if (!isFunction$1(obj[methods[i2]]))
        return false;
    }
    return methods !== weakMapMethods || !isFunction$1(obj[forEachName]);
  };
}
var forEachName = "forEach";
var hasName = "has";
var commonInit = ["clear", "delete"];
var mapTail = ["get", hasName, "set"];
var mapMethods = commonInit.concat(forEachName, mapTail);
var weakMapMethods = commonInit.concat(mapTail);
var setMethods = ["add"].concat(commonInit, forEachName, hasName);
var isMap = isIE11 ? ie11fingerprint(mapMethods) : tagTester("Map");
var isWeakMap = isIE11 ? ie11fingerprint(weakMapMethods) : tagTester("WeakMap");
var isSet = isIE11 ? ie11fingerprint(setMethods) : tagTester("Set");
var isWeakSet = tagTester("WeakSet");
function values(obj) {
  var _keys = keys(obj);
  var length2 = _keys.length;
  var values2 = Array(length2);
  for (var i2 = 0; i2 < length2; i2++) {
    values2[i2] = obj[_keys[i2]];
  }
  return values2;
}
function pairs(obj) {
  var _keys = keys(obj);
  var length2 = _keys.length;
  var pairs2 = Array(length2);
  for (var i2 = 0; i2 < length2; i2++) {
    pairs2[i2] = [_keys[i2], obj[_keys[i2]]];
  }
  return pairs2;
}
function invert(obj) {
  var result2 = {};
  var _keys = keys(obj);
  for (var i2 = 0, length2 = _keys.length; i2 < length2; i2++) {
    result2[obj[_keys[i2]]] = _keys[i2];
  }
  return result2;
}
function functions(obj) {
  var names = [];
  for (var key in obj) {
    if (isFunction$1(obj[key]))
      names.push(key);
  }
  return names.sort();
}
function createAssigner(keysFunc, defaults3) {
  return function(obj) {
    var length2 = arguments.length;
    if (defaults3)
      obj = Object(obj);
    if (length2 < 2 || obj == null)
      return obj;
    for (var index = 1; index < length2; index++) {
      var source = arguments[index], keys2 = keysFunc(source), l = keys2.length;
      for (var i2 = 0; i2 < l; i2++) {
        var key = keys2[i2];
        if (!defaults3 || obj[key] === void 0)
          obj[key] = source[key];
      }
    }
    return obj;
  };
}
var extend = createAssigner(allKeys);
var extendOwn = createAssigner(keys);
var defaults = createAssigner(allKeys, true);
function ctor() {
  return function() {
  };
}
function baseCreate(prototype3) {
  if (!isObject(prototype3))
    return {};
  if (nativeCreate)
    return nativeCreate(prototype3);
  var Ctor = ctor();
  Ctor.prototype = prototype3;
  var result2 = new Ctor();
  Ctor.prototype = null;
  return result2;
}
function create(prototype3, props) {
  var result2 = baseCreate(prototype3);
  if (props)
    extendOwn(result2, props);
  return result2;
}
function clone(obj) {
  if (!isObject(obj))
    return obj;
  return isArray(obj) ? obj.slice() : extend({}, obj);
}
function tap(obj, interceptor) {
  interceptor(obj);
  return obj;
}
function toPath$1(path) {
  return isArray(path) ? path : [path];
}
_$1.toPath = toPath$1;
function toPath(path) {
  return _$1.toPath(path);
}
function deepGet(obj, path) {
  var length2 = path.length;
  for (var i2 = 0; i2 < length2; i2++) {
    if (obj == null)
      return void 0;
    obj = obj[path[i2]];
  }
  return length2 ? obj : void 0;
}
function get(object2, path, defaultValue) {
  var value2 = deepGet(object2, toPath(path));
  return isUndefined(value2) ? defaultValue : value2;
}
function has(obj, path) {
  path = toPath(path);
  var length2 = path.length;
  for (var i2 = 0; i2 < length2; i2++) {
    var key = path[i2];
    if (!has$1(obj, key))
      return false;
    obj = obj[key];
  }
  return !!length2;
}
function identity(value2) {
  return value2;
}
function matcher(attrs) {
  attrs = extendOwn({}, attrs);
  return function(obj) {
    return isMatch(obj, attrs);
  };
}
function property(path) {
  path = toPath(path);
  return function(obj) {
    return deepGet(obj, path);
  };
}
function optimizeCb(func, context, argCount) {
  if (context === void 0)
    return func;
  switch (argCount == null ? 3 : argCount) {
    case 1:
      return function(value2) {
        return func.call(context, value2);
      };
    case 3:
      return function(value2, index, collection) {
        return func.call(context, value2, index, collection);
      };
    case 4:
      return function(accumulator, value2, index, collection) {
        return func.call(context, accumulator, value2, index, collection);
      };
  }
  return function() {
    return func.apply(context, arguments);
  };
}
function baseIteratee(value2, context, argCount) {
  if (value2 == null)
    return identity;
  if (isFunction$1(value2))
    return optimizeCb(value2, context, argCount);
  if (isObject(value2) && !isArray(value2))
    return matcher(value2);
  return property(value2);
}
function iteratee(value2, context) {
  return baseIteratee(value2, context, Infinity);
}
_$1.iteratee = iteratee;
function cb(value2, context, argCount) {
  if (_$1.iteratee !== iteratee)
    return _$1.iteratee(value2, context);
  return baseIteratee(value2, context, argCount);
}
function mapObject(obj, iteratee2, context) {
  iteratee2 = cb(iteratee2, context);
  var _keys = keys(obj), length2 = _keys.length, results = {};
  for (var index = 0; index < length2; index++) {
    var currentKey = _keys[index];
    results[currentKey] = iteratee2(obj[currentKey], currentKey, obj);
  }
  return results;
}
function noop() {
}
function propertyOf(obj) {
  if (obj == null)
    return noop;
  return function(path) {
    return get(obj, path);
  };
}
function times(n, iteratee2, context) {
  var accum = Array(Math.max(0, n));
  iteratee2 = optimizeCb(iteratee2, context, 1);
  for (var i2 = 0; i2 < n; i2++)
    accum[i2] = iteratee2(i2);
  return accum;
}
function random(min2, max2) {
  if (max2 == null) {
    max2 = min2;
    min2 = 0;
  }
  return min2 + Math.floor(Math.random() * (max2 - min2 + 1));
}
var now = Date.now || function() {
  return new Date().getTime();
};
function createEscaper(map3) {
  var escaper = function(match) {
    return map3[match];
  };
  var source = "(?:" + keys(map3).join("|") + ")";
  var testRegexp = RegExp(source);
  var replaceRegexp = RegExp(source, "g");
  return function(string) {
    string = string == null ? "" : "" + string;
    return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
  };
}
var escapeMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#x27;",
  "`": "&#x60;"
};
var _escape = createEscaper(escapeMap);
var unescapeMap = invert(escapeMap);
var _unescape = createEscaper(unescapeMap);
var templateSettings = _$1.templateSettings = {
  evaluate: /<%([\s\S]+?)%>/g,
  interpolate: /<%=([\s\S]+?)%>/g,
  escape: /<%-([\s\S]+?)%>/g
};
var noMatch = /(.)^/;
var escapes = {
  "'": "'",
  "\\": "\\",
  "\r": "r",
  "\n": "n",
  "\u2028": "u2028",
  "\u2029": "u2029"
};
var escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;
function escapeChar(match) {
  return "\\" + escapes[match];
}
var bareIdentifier = /^\s*(\w|\$)+\s*$/;
function template(text, settings, oldSettings) {
  if (!settings && oldSettings)
    settings = oldSettings;
  settings = defaults({}, settings, _$1.templateSettings);
  var matcher2 = RegExp([
    (settings.escape || noMatch).source,
    (settings.interpolate || noMatch).source,
    (settings.evaluate || noMatch).source
  ].join("|") + "|$", "g");
  var index = 0;
  var source = "__p+='";
  text.replace(matcher2, function(match, escape, interpolate, evaluate, offset) {
    source += text.slice(index, offset).replace(escapeRegExp, escapeChar);
    index = offset + match.length;
    if (escape) {
      source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
    } else if (interpolate) {
      source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
    } else if (evaluate) {
      source += "';\n" + evaluate + "\n__p+='";
    }
    return match;
  });
  source += "';\n";
  var argument = settings.variable;
  if (argument) {
    if (!bareIdentifier.test(argument))
      throw new Error(
        "variable is not a bare identifier: " + argument
      );
  } else {
    source = "with(obj||{}){\n" + source + "}\n";
    argument = "obj";
  }
  source = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + source + "return __p;\n";
  var render;
  try {
    render = new Function(argument, "_", source);
  } catch (e) {
    e.source = source;
    throw e;
  }
  var template2 = function(data) {
    return render.call(this, data, _$1);
  };
  template2.source = "function(" + argument + "){\n" + source + "}";
  return template2;
}
function result(obj, path, fallback) {
  path = toPath(path);
  var length2 = path.length;
  if (!length2) {
    return isFunction$1(fallback) ? fallback.call(obj) : fallback;
  }
  for (var i2 = 0; i2 < length2; i2++) {
    var prop = obj == null ? void 0 : obj[path[i2]];
    if (prop === void 0) {
      prop = fallback;
      i2 = length2;
    }
    obj = isFunction$1(prop) ? prop.call(obj) : prop;
  }
  return obj;
}
var idCounter = 0;
function uniqueId(prefix) {
  var id = ++idCounter + "";
  return prefix ? prefix + id : id;
}
function chain(obj) {
  var instance = _$1(obj);
  instance._chain = true;
  return instance;
}
function executeBound(sourceFunc, boundFunc, context, callingContext, args) {
  if (!(callingContext instanceof boundFunc))
    return sourceFunc.apply(context, args);
  var self2 = baseCreate(sourceFunc.prototype);
  var result2 = sourceFunc.apply(self2, args);
  if (isObject(result2))
    return result2;
  return self2;
}
var partial = restArguments(function(func, boundArgs) {
  var placeholder = partial.placeholder;
  var bound = function() {
    var position = 0, length2 = boundArgs.length;
    var args = Array(length2);
    for (var i2 = 0; i2 < length2; i2++) {
      args[i2] = boundArgs[i2] === placeholder ? arguments[position++] : boundArgs[i2];
    }
    while (position < arguments.length)
      args.push(arguments[position++]);
    return executeBound(func, bound, this, this, args);
  };
  return bound;
});
partial.placeholder = _$1;
var bind = restArguments(function(func, context, args) {
  if (!isFunction$1(func))
    throw new TypeError("Bind must be called on a function");
  var bound = restArguments(function(callArgs) {
    return executeBound(func, bound, context, this, args.concat(callArgs));
  });
  return bound;
});
var isArrayLike = createSizePropertyCheck(getLength);
function flatten$1(input, depth, strict, output) {
  output = output || [];
  if (!depth && depth !== 0) {
    depth = Infinity;
  } else if (depth <= 0) {
    return output.concat(input);
  }
  var idx = output.length;
  for (var i2 = 0, length2 = getLength(input); i2 < length2; i2++) {
    var value2 = input[i2];
    if (isArrayLike(value2) && (isArray(value2) || isArguments$1(value2))) {
      if (depth > 1) {
        flatten$1(value2, depth - 1, strict, output);
        idx = output.length;
      } else {
        var j = 0, len = value2.length;
        while (j < len)
          output[idx++] = value2[j++];
      }
    } else if (!strict) {
      output[idx++] = value2;
    }
  }
  return output;
}
var bindAll = restArguments(function(obj, keys2) {
  keys2 = flatten$1(keys2, false, false);
  var index = keys2.length;
  if (index < 1)
    throw new Error("bindAll must be passed function names");
  while (index--) {
    var key = keys2[index];
    obj[key] = bind(obj[key], obj);
  }
  return obj;
});
function memoize(func, hasher) {
  var memoize2 = function(key) {
    var cache2 = memoize2.cache;
    var address = "" + (hasher ? hasher.apply(this, arguments) : key);
    if (!has$1(cache2, address))
      cache2[address] = func.apply(this, arguments);
    return cache2[address];
  };
  memoize2.cache = {};
  return memoize2;
}
var delay = restArguments(function(func, wait, args) {
  return setTimeout(function() {
    return func.apply(null, args);
  }, wait);
});
var defer = partial(delay, _$1, 1);
function throttle(func, wait, options) {
  var timeout, context, args, result2;
  var previous = 0;
  if (!options)
    options = {};
  var later = function() {
    previous = options.leading === false ? 0 : now();
    timeout = null;
    result2 = func.apply(context, args);
    if (!timeout)
      context = args = null;
  };
  var throttled = function() {
    var _now = now();
    if (!previous && options.leading === false)
      previous = _now;
    var remaining = wait - (_now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = _now;
      result2 = func.apply(context, args);
      if (!timeout)
        context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result2;
  };
  throttled.cancel = function() {
    clearTimeout(timeout);
    previous = 0;
    timeout = context = args = null;
  };
  return throttled;
}
function debounce(func, wait, immediate) {
  var timeout, previous, args, result2, context;
  var later = function() {
    var passed = now() - previous;
    if (wait > passed) {
      timeout = setTimeout(later, wait - passed);
    } else {
      timeout = null;
      if (!immediate)
        result2 = func.apply(context, args);
      if (!timeout)
        args = context = null;
    }
  };
  var debounced = restArguments(function(_args) {
    context = this;
    args = _args;
    previous = now();
    if (!timeout) {
      timeout = setTimeout(later, wait);
      if (immediate)
        result2 = func.apply(context, args);
    }
    return result2;
  });
  debounced.cancel = function() {
    clearTimeout(timeout);
    timeout = args = context = null;
  };
  return debounced;
}
function wrap(func, wrapper) {
  return partial(wrapper, func);
}
function negate(predicate) {
  return function() {
    return !predicate.apply(this, arguments);
  };
}
function compose() {
  var args = arguments;
  var start = args.length - 1;
  return function() {
    var i2 = start;
    var result2 = args[start].apply(this, arguments);
    while (i2--)
      result2 = args[i2].call(this, result2);
    return result2;
  };
}
function after(times2, func) {
  return function() {
    if (--times2 < 1) {
      return func.apply(this, arguments);
    }
  };
}
function before(times2, func) {
  var memo;
  return function() {
    if (--times2 > 0) {
      memo = func.apply(this, arguments);
    }
    if (times2 <= 1)
      func = null;
    return memo;
  };
}
var once = partial(before, 2);
function findKey(obj, predicate, context) {
  predicate = cb(predicate, context);
  var _keys = keys(obj), key;
  for (var i2 = 0, length2 = _keys.length; i2 < length2; i2++) {
    key = _keys[i2];
    if (predicate(obj[key], key, obj))
      return key;
  }
}
function createPredicateIndexFinder(dir) {
  return function(array, predicate, context) {
    predicate = cb(predicate, context);
    var length2 = getLength(array);
    var index = dir > 0 ? 0 : length2 - 1;
    for (; index >= 0 && index < length2; index += dir) {
      if (predicate(array[index], index, array))
        return index;
    }
    return -1;
  };
}
var findIndex = createPredicateIndexFinder(1);
var findLastIndex = createPredicateIndexFinder(-1);
function sortedIndex(array, obj, iteratee2, context) {
  iteratee2 = cb(iteratee2, context, 1);
  var value2 = iteratee2(obj);
  var low = 0, high = getLength(array);
  while (low < high) {
    var mid = Math.floor((low + high) / 2);
    if (iteratee2(array[mid]) < value2)
      low = mid + 1;
    else
      high = mid;
  }
  return low;
}
function createIndexFinder(dir, predicateFind, sortedIndex2) {
  return function(array, item, idx) {
    var i2 = 0, length2 = getLength(array);
    if (typeof idx == "number") {
      if (dir > 0) {
        i2 = idx >= 0 ? idx : Math.max(idx + length2, i2);
      } else {
        length2 = idx >= 0 ? Math.min(idx + 1, length2) : idx + length2 + 1;
      }
    } else if (sortedIndex2 && idx && length2) {
      idx = sortedIndex2(array, item);
      return array[idx] === item ? idx : -1;
    }
    if (item !== item) {
      idx = predicateFind(slice.call(array, i2, length2), isNaN$1);
      return idx >= 0 ? idx + i2 : -1;
    }
    for (idx = dir > 0 ? i2 : length2 - 1; idx >= 0 && idx < length2; idx += dir) {
      if (array[idx] === item)
        return idx;
    }
    return -1;
  };
}
var indexOf = createIndexFinder(1, findIndex, sortedIndex);
var lastIndexOf = createIndexFinder(-1, findLastIndex);
function find(obj, predicate, context) {
  var keyFinder = isArrayLike(obj) ? findIndex : findKey;
  var key = keyFinder(obj, predicate, context);
  if (key !== void 0 && key !== -1)
    return obj[key];
}
function findWhere(obj, attrs) {
  return find(obj, matcher(attrs));
}
function each(obj, iteratee2, context) {
  iteratee2 = optimizeCb(iteratee2, context);
  var i2, length2;
  if (isArrayLike(obj)) {
    for (i2 = 0, length2 = obj.length; i2 < length2; i2++) {
      iteratee2(obj[i2], i2, obj);
    }
  } else {
    var _keys = keys(obj);
    for (i2 = 0, length2 = _keys.length; i2 < length2; i2++) {
      iteratee2(obj[_keys[i2]], _keys[i2], obj);
    }
  }
  return obj;
}
function map(obj, iteratee2, context) {
  iteratee2 = cb(iteratee2, context);
  var _keys = !isArrayLike(obj) && keys(obj), length2 = (_keys || obj).length, results = Array(length2);
  for (var index = 0; index < length2; index++) {
    var currentKey = _keys ? _keys[index] : index;
    results[index] = iteratee2(obj[currentKey], currentKey, obj);
  }
  return results;
}
function createReduce(dir) {
  var reducer = function(obj, iteratee2, memo, initial2) {
    var _keys = !isArrayLike(obj) && keys(obj), length2 = (_keys || obj).length, index = dir > 0 ? 0 : length2 - 1;
    if (!initial2) {
      memo = obj[_keys ? _keys[index] : index];
      index += dir;
    }
    for (; index >= 0 && index < length2; index += dir) {
      var currentKey = _keys ? _keys[index] : index;
      memo = iteratee2(memo, obj[currentKey], currentKey, obj);
    }
    return memo;
  };
  return function(obj, iteratee2, memo, context) {
    var initial2 = arguments.length >= 3;
    return reducer(obj, optimizeCb(iteratee2, context, 4), memo, initial2);
  };
}
var reduce = createReduce(1);
var reduceRight = createReduce(-1);
function filter(obj, predicate, context) {
  var results = [];
  predicate = cb(predicate, context);
  each(obj, function(value2, index, list) {
    if (predicate(value2, index, list))
      results.push(value2);
  });
  return results;
}
function reject(obj, predicate, context) {
  return filter(obj, negate(cb(predicate)), context);
}
function every(obj, predicate, context) {
  predicate = cb(predicate, context);
  var _keys = !isArrayLike(obj) && keys(obj), length2 = (_keys || obj).length;
  for (var index = 0; index < length2; index++) {
    var currentKey = _keys ? _keys[index] : index;
    if (!predicate(obj[currentKey], currentKey, obj))
      return false;
  }
  return true;
}
function some(obj, predicate, context) {
  predicate = cb(predicate, context);
  var _keys = !isArrayLike(obj) && keys(obj), length2 = (_keys || obj).length;
  for (var index = 0; index < length2; index++) {
    var currentKey = _keys ? _keys[index] : index;
    if (predicate(obj[currentKey], currentKey, obj))
      return true;
  }
  return false;
}
function contains(obj, item, fromIndex, guard) {
  if (!isArrayLike(obj))
    obj = values(obj);
  if (typeof fromIndex != "number" || guard)
    fromIndex = 0;
  return indexOf(obj, item, fromIndex) >= 0;
}
var invoke = restArguments(function(obj, path, args) {
  var contextPath, func;
  if (isFunction$1(path)) {
    func = path;
  } else {
    path = toPath(path);
    contextPath = path.slice(0, -1);
    path = path[path.length - 1];
  }
  return map(obj, function(context) {
    var method = func;
    if (!method) {
      if (contextPath && contextPath.length) {
        context = deepGet(context, contextPath);
      }
      if (context == null)
        return void 0;
      method = context[path];
    }
    return method == null ? method : method.apply(context, args);
  });
});
function pluck(obj, key) {
  return map(obj, property(key));
}
function where(obj, attrs) {
  return filter(obj, matcher(attrs));
}
function max(obj, iteratee2, context) {
  var result2 = -Infinity, lastComputed = -Infinity, value2, computed;
  if (iteratee2 == null || typeof iteratee2 == "number" && typeof obj[0] != "object" && obj != null) {
    obj = isArrayLike(obj) ? obj : values(obj);
    for (var i2 = 0, length2 = obj.length; i2 < length2; i2++) {
      value2 = obj[i2];
      if (value2 != null && value2 > result2) {
        result2 = value2;
      }
    }
  } else {
    iteratee2 = cb(iteratee2, context);
    each(obj, function(v, index, list) {
      computed = iteratee2(v, index, list);
      if (computed > lastComputed || computed === -Infinity && result2 === -Infinity) {
        result2 = v;
        lastComputed = computed;
      }
    });
  }
  return result2;
}
function min(obj, iteratee2, context) {
  var result2 = Infinity, lastComputed = Infinity, value2, computed;
  if (iteratee2 == null || typeof iteratee2 == "number" && typeof obj[0] != "object" && obj != null) {
    obj = isArrayLike(obj) ? obj : values(obj);
    for (var i2 = 0, length2 = obj.length; i2 < length2; i2++) {
      value2 = obj[i2];
      if (value2 != null && value2 < result2) {
        result2 = value2;
      }
    }
  } else {
    iteratee2 = cb(iteratee2, context);
    each(obj, function(v, index, list) {
      computed = iteratee2(v, index, list);
      if (computed < lastComputed || computed === Infinity && result2 === Infinity) {
        result2 = v;
        lastComputed = computed;
      }
    });
  }
  return result2;
}
var reStrSymbol = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
function toArray(obj) {
  if (!obj)
    return [];
  if (isArray(obj))
    return slice.call(obj);
  if (isString(obj)) {
    return obj.match(reStrSymbol);
  }
  if (isArrayLike(obj))
    return map(obj, identity);
  return values(obj);
}
function sample(obj, n, guard) {
  if (n == null || guard) {
    if (!isArrayLike(obj))
      obj = values(obj);
    return obj[random(obj.length - 1)];
  }
  var sample2 = toArray(obj);
  var length2 = getLength(sample2);
  n = Math.max(Math.min(n, length2), 0);
  var last2 = length2 - 1;
  for (var index = 0; index < n; index++) {
    var rand = random(index, last2);
    var temp = sample2[index];
    sample2[index] = sample2[rand];
    sample2[rand] = temp;
  }
  return sample2.slice(0, n);
}
function shuffle(obj) {
  return sample(obj, Infinity);
}
function sortBy(obj, iteratee2, context) {
  var index = 0;
  iteratee2 = cb(iteratee2, context);
  return pluck(map(obj, function(value2, key, list) {
    return {
      value: value2,
      index: index++,
      criteria: iteratee2(value2, key, list)
    };
  }).sort(function(left, right) {
    var a = left.criteria;
    var b = right.criteria;
    if (a !== b) {
      if (a > b || a === void 0)
        return 1;
      if (a < b || b === void 0)
        return -1;
    }
    return left.index - right.index;
  }), "value");
}
function group(behavior, partition2) {
  return function(obj, iteratee2, context) {
    var result2 = partition2 ? [[], []] : {};
    iteratee2 = cb(iteratee2, context);
    each(obj, function(value2, index) {
      var key = iteratee2(value2, index, obj);
      behavior(result2, value2, key);
    });
    return result2;
  };
}
var groupBy = group(function(result2, value2, key) {
  if (has$1(result2, key))
    result2[key].push(value2);
  else
    result2[key] = [value2];
});
var indexBy = group(function(result2, value2, key) {
  result2[key] = value2;
});
var countBy = group(function(result2, value2, key) {
  if (has$1(result2, key))
    result2[key]++;
  else
    result2[key] = 1;
});
var partition = group(function(result2, value2, pass) {
  result2[pass ? 0 : 1].push(value2);
}, true);
function size(obj) {
  if (obj == null)
    return 0;
  return isArrayLike(obj) ? obj.length : keys(obj).length;
}
function keyInObj(value2, key, obj) {
  return key in obj;
}
var pick = restArguments(function(obj, keys2) {
  var result2 = {}, iteratee2 = keys2[0];
  if (obj == null)
    return result2;
  if (isFunction$1(iteratee2)) {
    if (keys2.length > 1)
      iteratee2 = optimizeCb(iteratee2, keys2[1]);
    keys2 = allKeys(obj);
  } else {
    iteratee2 = keyInObj;
    keys2 = flatten$1(keys2, false, false);
    obj = Object(obj);
  }
  for (var i2 = 0, length2 = keys2.length; i2 < length2; i2++) {
    var key = keys2[i2];
    var value2 = obj[key];
    if (iteratee2(value2, key, obj))
      result2[key] = value2;
  }
  return result2;
});
var omit = restArguments(function(obj, keys2) {
  var iteratee2 = keys2[0], context;
  if (isFunction$1(iteratee2)) {
    iteratee2 = negate(iteratee2);
    if (keys2.length > 1)
      context = keys2[1];
  } else {
    keys2 = map(flatten$1(keys2, false, false), String);
    iteratee2 = function(value2, key) {
      return !contains(keys2, key);
    };
  }
  return pick(obj, iteratee2, context);
});
function initial(array, n, guard) {
  return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
}
function first(array, n, guard) {
  if (array == null || array.length < 1)
    return n == null || guard ? void 0 : [];
  if (n == null || guard)
    return array[0];
  return initial(array, array.length - n);
}
function rest(array, n, guard) {
  return slice.call(array, n == null || guard ? 1 : n);
}
function last(array, n, guard) {
  if (array == null || array.length < 1)
    return n == null || guard ? void 0 : [];
  if (n == null || guard)
    return array[array.length - 1];
  return rest(array, Math.max(0, array.length - n));
}
function compact(array) {
  return filter(array, Boolean);
}
function flatten(array, depth) {
  return flatten$1(array, depth, false);
}
var difference = restArguments(function(array, rest2) {
  rest2 = flatten$1(rest2, true, true);
  return filter(array, function(value2) {
    return !contains(rest2, value2);
  });
});
var without = restArguments(function(array, otherArrays) {
  return difference(array, otherArrays);
});
function uniq(array, isSorted, iteratee2, context) {
  if (!isBoolean(isSorted)) {
    context = iteratee2;
    iteratee2 = isSorted;
    isSorted = false;
  }
  if (iteratee2 != null)
    iteratee2 = cb(iteratee2, context);
  var result2 = [];
  var seen = [];
  for (var i2 = 0, length2 = getLength(array); i2 < length2; i2++) {
    var value2 = array[i2], computed = iteratee2 ? iteratee2(value2, i2, array) : value2;
    if (isSorted && !iteratee2) {
      if (!i2 || seen !== computed)
        result2.push(value2);
      seen = computed;
    } else if (iteratee2) {
      if (!contains(seen, computed)) {
        seen.push(computed);
        result2.push(value2);
      }
    } else if (!contains(result2, value2)) {
      result2.push(value2);
    }
  }
  return result2;
}
var union = restArguments(function(arrays) {
  return uniq(flatten$1(arrays, true, true));
});
function intersection(array) {
  var result2 = [];
  var argsLength = arguments.length;
  for (var i2 = 0, length2 = getLength(array); i2 < length2; i2++) {
    var item = array[i2];
    if (contains(result2, item))
      continue;
    var j;
    for (j = 1; j < argsLength; j++) {
      if (!contains(arguments[j], item))
        break;
    }
    if (j === argsLength)
      result2.push(item);
  }
  return result2;
}
function unzip(array) {
  var length2 = array && max(array, getLength).length || 0;
  var result2 = Array(length2);
  for (var index = 0; index < length2; index++) {
    result2[index] = pluck(array, index);
  }
  return result2;
}
var zip = restArguments(unzip);
function object(list, values2) {
  var result2 = {};
  for (var i2 = 0, length2 = getLength(list); i2 < length2; i2++) {
    if (values2) {
      result2[list[i2]] = values2[i2];
    } else {
      result2[list[i2][0]] = list[i2][1];
    }
  }
  return result2;
}
function range(start, stop, step) {
  if (stop == null) {
    stop = start || 0;
    start = 0;
  }
  if (!step) {
    step = stop < start ? -1 : 1;
  }
  var length2 = Math.max(Math.ceil((stop - start) / step), 0);
  var range2 = Array(length2);
  for (var idx = 0; idx < length2; idx++, start += step) {
    range2[idx] = start;
  }
  return range2;
}
function chunk(array, count) {
  if (count == null || count < 1)
    return [];
  var result2 = [];
  var i2 = 0, length2 = array.length;
  while (i2 < length2) {
    result2.push(slice.call(array, i2, i2 += count));
  }
  return result2;
}
function chainResult(instance, obj) {
  return instance._chain ? _$1(obj).chain() : obj;
}
function mixin(obj) {
  each(functions(obj), function(name) {
    var func = _$1[name] = obj[name];
    _$1.prototype[name] = function() {
      var args = [this._wrapped];
      push.apply(args, arguments);
      return chainResult(this, func.apply(_$1, args));
    };
  });
  return _$1;
}
each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(name) {
  var method = ArrayProto[name];
  _$1.prototype[name] = function() {
    var obj = this._wrapped;
    if (obj != null) {
      method.apply(obj, arguments);
      if ((name === "shift" || name === "splice") && obj.length === 0) {
        delete obj[0];
      }
    }
    return chainResult(this, obj);
  };
});
each(["concat", "join", "slice"], function(name) {
  var method = ArrayProto[name];
  _$1.prototype[name] = function() {
    var obj = this._wrapped;
    if (obj != null)
      obj = method.apply(obj, arguments);
    return chainResult(this, obj);
  };
});
var allExports = {
  __proto__: null,
  VERSION,
  restArguments,
  isObject,
  isNull,
  isUndefined,
  isBoolean,
  isElement,
  isString,
  isNumber,
  isDate,
  isRegExp,
  isError,
  isSymbol,
  isArrayBuffer,
  isDataView: isDataView$1,
  isArray,
  isFunction: isFunction$1,
  isArguments: isArguments$1,
  isFinite: isFinite$1,
  isNaN: isNaN$1,
  isTypedArray: isTypedArray$1,
  isEmpty,
  isMatch,
  isEqual,
  isMap,
  isWeakMap,
  isSet,
  isWeakSet,
  keys,
  allKeys,
  values,
  pairs,
  invert,
  functions,
  methods: functions,
  extend,
  extendOwn,
  assign: extendOwn,
  defaults,
  create,
  clone,
  tap,
  get,
  has,
  mapObject,
  identity,
  constant,
  noop,
  toPath: toPath$1,
  property,
  propertyOf,
  matcher,
  matches: matcher,
  times,
  random,
  now,
  escape: _escape,
  unescape: _unescape,
  templateSettings,
  template,
  result,
  uniqueId,
  chain,
  iteratee,
  partial,
  bind,
  bindAll,
  memoize,
  delay,
  defer,
  throttle,
  debounce,
  wrap,
  negate,
  compose,
  after,
  before,
  once,
  findKey,
  findIndex,
  findLastIndex,
  sortedIndex,
  indexOf,
  lastIndexOf,
  find,
  detect: find,
  findWhere,
  each,
  forEach: each,
  map,
  collect: map,
  reduce,
  foldl: reduce,
  inject: reduce,
  reduceRight,
  foldr: reduceRight,
  filter,
  select: filter,
  reject,
  every,
  all: every,
  some,
  any: some,
  contains,
  includes: contains,
  include: contains,
  invoke,
  pluck,
  where,
  max,
  min,
  shuffle,
  sample,
  sortBy,
  groupBy,
  indexBy,
  countBy,
  partition,
  toArray,
  size,
  pick,
  omit,
  first,
  head: first,
  take: first,
  initial,
  last,
  rest,
  tail: rest,
  drop: rest,
  compact,
  flatten,
  without,
  uniq,
  unique: uniq,
  union,
  intersection,
  difference,
  unzip,
  transpose: unzip,
  zip,
  object,
  range,
  chunk,
  mixin,
  "default": _$1
};
var _ = mixin(allExports);
_._ = _;

// node_modules/engine.io-parser/build/esm/commons.js
var PACKET_TYPES = /* @__PURE__ */ Object.create(null);
PACKET_TYPES["open"] = "0";
PACKET_TYPES["close"] = "1";
PACKET_TYPES["ping"] = "2";
PACKET_TYPES["pong"] = "3";
PACKET_TYPES["message"] = "4";
PACKET_TYPES["upgrade"] = "5";
PACKET_TYPES["noop"] = "6";
var PACKET_TYPES_REVERSE = /* @__PURE__ */ Object.create(null);
Object.keys(PACKET_TYPES).forEach((key) => {
  PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
});
var ERROR_PACKET = { type: "error", data: "parser error" };

// node_modules/engine.io-parser/build/esm/encodePacket.browser.js
var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
var withNativeArrayBuffer = typeof ArrayBuffer === "function";
var isView = (obj) => {
  return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj && obj.buffer instanceof ArrayBuffer;
};
var encodePacket = ({ type, data }, supportsBinary, callback) => {
  if (withNativeBlob && data instanceof Blob) {
    if (supportsBinary) {
      return callback(data);
    } else {
      return encodeBlobAsBase64(data, callback);
    }
  } else if (withNativeArrayBuffer && (data instanceof ArrayBuffer || isView(data))) {
    if (supportsBinary) {
      return callback(data);
    } else {
      return encodeBlobAsBase64(new Blob([data]), callback);
    }
  }
  return callback(PACKET_TYPES[type] + (data || ""));
};
var encodeBlobAsBase64 = (data, callback) => {
  const fileReader = new FileReader();
  fileReader.onload = function() {
    const content = fileReader.result.split(",")[1];
    callback("b" + content);
  };
  return fileReader.readAsDataURL(data);
};
var encodePacket_browser_default = encodePacket;

// node_modules/engine.io-parser/build/esm/contrib/base64-arraybuffer.js
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var lookup = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
for (let i2 = 0; i2 < chars.length; i2++) {
  lookup[chars.charCodeAt(i2)] = i2;
}
var decode = (base64) => {
  let bufferLength = base64.length * 0.75, len = base64.length, i2, p = 0, encoded1, encoded2, encoded3, encoded4;
  if (base64[base64.length - 1] === "=") {
    bufferLength--;
    if (base64[base64.length - 2] === "=") {
      bufferLength--;
    }
  }
  const arraybuffer = new ArrayBuffer(bufferLength), bytes = new Uint8Array(arraybuffer);
  for (i2 = 0; i2 < len; i2 += 4) {
    encoded1 = lookup[base64.charCodeAt(i2)];
    encoded2 = lookup[base64.charCodeAt(i2 + 1)];
    encoded3 = lookup[base64.charCodeAt(i2 + 2)];
    encoded4 = lookup[base64.charCodeAt(i2 + 3)];
    bytes[p++] = encoded1 << 2 | encoded2 >> 4;
    bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
    bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
  }
  return arraybuffer;
};

// node_modules/engine.io-parser/build/esm/decodePacket.browser.js
var withNativeArrayBuffer2 = typeof ArrayBuffer === "function";
var decodePacket = (encodedPacket, binaryType) => {
  if (typeof encodedPacket !== "string") {
    return {
      type: "message",
      data: mapBinary(encodedPacket, binaryType)
    };
  }
  const type = encodedPacket.charAt(0);
  if (type === "b") {
    return {
      type: "message",
      data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
    };
  }
  const packetType = PACKET_TYPES_REVERSE[type];
  if (!packetType) {
    return ERROR_PACKET;
  }
  return encodedPacket.length > 1 ? {
    type: PACKET_TYPES_REVERSE[type],
    data: encodedPacket.substring(1)
  } : {
    type: PACKET_TYPES_REVERSE[type]
  };
};
var decodeBase64Packet = (data, binaryType) => {
  if (withNativeArrayBuffer2) {
    const decoded = decode(data);
    return mapBinary(decoded, binaryType);
  } else {
    return { base64: true, data };
  }
};
var mapBinary = (data, binaryType) => {
  switch (binaryType) {
    case "blob":
      return data instanceof ArrayBuffer ? new Blob([data]) : data;
    case "arraybuffer":
    default:
      return data;
  }
};
var decodePacket_browser_default = decodePacket;

// node_modules/engine.io-parser/build/esm/index.js
var SEPARATOR = String.fromCharCode(30);
var encodePayload = (packets, callback) => {
  const length2 = packets.length;
  const encodedPackets = new Array(length2);
  let count = 0;
  packets.forEach((packet, i2) => {
    encodePacket_browser_default(packet, false, (encodedPacket) => {
      encodedPackets[i2] = encodedPacket;
      if (++count === length2) {
        callback(encodedPackets.join(SEPARATOR));
      }
    });
  });
};
var decodePayload = (encodedPayload, binaryType) => {
  const encodedPackets = encodedPayload.split(SEPARATOR);
  const packets = [];
  for (let i2 = 0; i2 < encodedPackets.length; i2++) {
    const decodedPacket = decodePacket_browser_default(encodedPackets[i2], binaryType);
    packets.push(decodedPacket);
    if (decodedPacket.type === "error") {
      break;
    }
  }
  return packets;
};
var protocol = 4;

// node_modules/@socket.io/component-emitter/index.mjs
function Emitter(obj) {
  if (obj)
    return mixin2(obj);
}
function mixin2(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}
Emitter.prototype.on = Emitter.prototype.addEventListener = function(event, fn) {
  this._callbacks = this._callbacks || {};
  (this._callbacks["$" + event] = this._callbacks["$" + event] || []).push(fn);
  return this;
};
Emitter.prototype.once = function(event, fn) {
  function on2() {
    this.off(event, on2);
    fn.apply(this, arguments);
  }
  on2.fn = fn;
  this.on(event, on2);
  return this;
};
Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function(event, fn) {
  this._callbacks = this._callbacks || {};
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }
  var callbacks = this._callbacks["$" + event];
  if (!callbacks)
    return this;
  if (1 == arguments.length) {
    delete this._callbacks["$" + event];
    return this;
  }
  var cb2;
  for (var i2 = 0; i2 < callbacks.length; i2++) {
    cb2 = callbacks[i2];
    if (cb2 === fn || cb2.fn === fn) {
      callbacks.splice(i2, 1);
      break;
    }
  }
  if (callbacks.length === 0) {
    delete this._callbacks["$" + event];
  }
  return this;
};
Emitter.prototype.emit = function(event) {
  this._callbacks = this._callbacks || {};
  var args = new Array(arguments.length - 1), callbacks = this._callbacks["$" + event];
  for (var i2 = 1; i2 < arguments.length; i2++) {
    args[i2 - 1] = arguments[i2];
  }
  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i2 = 0, len = callbacks.length; i2 < len; ++i2) {
      callbacks[i2].apply(this, args);
    }
  }
  return this;
};
Emitter.prototype.emitReserved = Emitter.prototype.emit;
Emitter.prototype.listeners = function(event) {
  this._callbacks = this._callbacks || {};
  return this._callbacks["$" + event] || [];
};
Emitter.prototype.hasListeners = function(event) {
  return !!this.listeners(event).length;
};

// node_modules/engine.io-client/build/esm/globalThis.browser.js
var globalThisShim = (() => {
  if (typeof self !== "undefined") {
    return self;
  } else if (typeof window !== "undefined") {
    return window;
  } else {
    return Function("return this")();
  }
})();

// node_modules/engine.io-client/build/esm/util.js
function pick2(obj, ...attr) {
  return attr.reduce((acc, k) => {
    if (obj.hasOwnProperty(k)) {
      acc[k] = obj[k];
    }
    return acc;
  }, {});
}
var NATIVE_SET_TIMEOUT = setTimeout;
var NATIVE_CLEAR_TIMEOUT = clearTimeout;
function installTimerFunctions(obj, opts) {
  if (opts.useNativeTimers) {
    obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(globalThisShim);
    obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(globalThisShim);
  } else {
    obj.setTimeoutFn = setTimeout.bind(globalThisShim);
    obj.clearTimeoutFn = clearTimeout.bind(globalThisShim);
  }
}
var BASE64_OVERHEAD = 1.33;
function byteLength(obj) {
  if (typeof obj === "string") {
    return utf8Length(obj);
  }
  return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
}
function utf8Length(str) {
  let c = 0, length2 = 0;
  for (let i2 = 0, l = str.length; i2 < l; i2++) {
    c = str.charCodeAt(i2);
    if (c < 128) {
      length2 += 1;
    } else if (c < 2048) {
      length2 += 2;
    } else if (c < 55296 || c >= 57344) {
      length2 += 3;
    } else {
      i2++;
      length2 += 4;
    }
  }
  return length2;
}

// node_modules/engine.io-client/build/esm/transport.js
var TransportError = class extends Error {
  constructor(reason, description, context) {
    super(reason);
    this.description = description;
    this.context = context;
    this.type = "TransportError";
  }
};
var Transport = class extends Emitter {
  constructor(opts) {
    super();
    this.writable = false;
    installTimerFunctions(this, opts);
    this.opts = opts;
    this.query = opts.query;
    this.readyState = "";
    this.socket = opts.socket;
  }
  onError(reason, description, context) {
    super.emitReserved("error", new TransportError(reason, description, context));
    return this;
  }
  open() {
    if ("closed" === this.readyState || "" === this.readyState) {
      this.readyState = "opening";
      this.doOpen();
    }
    return this;
  }
  close() {
    if ("opening" === this.readyState || "open" === this.readyState) {
      this.doClose();
      this.onClose();
    }
    return this;
  }
  send(packets) {
    if ("open" === this.readyState) {
      this.write(packets);
    } else {
    }
  }
  onOpen() {
    this.readyState = "open";
    this.writable = true;
    super.emitReserved("open");
  }
  onData(data) {
    const packet = decodePacket_browser_default(data, this.socket.binaryType);
    this.onPacket(packet);
  }
  onPacket(packet) {
    super.emitReserved("packet", packet);
  }
  onClose(details) {
    this.readyState = "closed";
    super.emitReserved("close", details);
  }
};

// node_modules/engine.io-client/build/esm/contrib/yeast.js
var alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split("");
var length = 64;
var map2 = {};
var seed = 0;
var i = 0;
var prev;
function encode(num) {
  let encoded = "";
  do {
    encoded = alphabet[num % length] + encoded;
    num = Math.floor(num / length);
  } while (num > 0);
  return encoded;
}
function yeast() {
  const now2 = encode(+new Date());
  if (now2 !== prev)
    return seed = 0, prev = now2;
  return now2 + "." + encode(seed++);
}
for (; i < length; i++)
  map2[alphabet[i]] = i;

// node_modules/engine.io-client/build/esm/contrib/parseqs.js
function encode2(obj) {
  let str = "";
  for (let i2 in obj) {
    if (obj.hasOwnProperty(i2)) {
      if (str.length)
        str += "&";
      str += encodeURIComponent(i2) + "=" + encodeURIComponent(obj[i2]);
    }
  }
  return str;
}
function decode2(qs) {
  let qry = {};
  let pairs2 = qs.split("&");
  for (let i2 = 0, l = pairs2.length; i2 < l; i2++) {
    let pair = pairs2[i2].split("=");
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }
  return qry;
}

// node_modules/engine.io-client/build/esm/contrib/has-cors.js
var value = false;
try {
  value = typeof XMLHttpRequest !== "undefined" && "withCredentials" in new XMLHttpRequest();
} catch (err) {
}
var hasCORS = value;

// node_modules/engine.io-client/build/esm/transports/xmlhttprequest.browser.js
function XHR(opts) {
  const xdomain = opts.xdomain;
  try {
    if ("undefined" !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
      return new XMLHttpRequest();
    }
  } catch (e) {
  }
  if (!xdomain) {
    try {
      return new globalThisShim[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch (e) {
    }
  }
}

// node_modules/engine.io-client/build/esm/transports/polling.js
function empty() {
}
var hasXHR2 = function() {
  const xhr = new XHR({
    xdomain: false
  });
  return null != xhr.responseType;
}();
var Polling = class extends Transport {
  constructor(opts) {
    super(opts);
    this.polling = false;
    if (typeof location !== "undefined") {
      const isSSL = "https:" === location.protocol;
      let port = location.port;
      if (!port) {
        port = isSSL ? "443" : "80";
      }
      this.xd = typeof location !== "undefined" && opts.hostname !== location.hostname || port !== opts.port;
      this.xs = opts.secure !== isSSL;
    }
    const forceBase64 = opts && opts.forceBase64;
    this.supportsBinary = hasXHR2 && !forceBase64;
  }
  get name() {
    return "polling";
  }
  doOpen() {
    this.poll();
  }
  pause(onPause) {
    this.readyState = "pausing";
    const pause = () => {
      this.readyState = "paused";
      onPause();
    };
    if (this.polling || !this.writable) {
      let total = 0;
      if (this.polling) {
        total++;
        this.once("pollComplete", function() {
          --total || pause();
        });
      }
      if (!this.writable) {
        total++;
        this.once("drain", function() {
          --total || pause();
        });
      }
    } else {
      pause();
    }
  }
  poll() {
    this.polling = true;
    this.doPoll();
    this.emitReserved("poll");
  }
  onData(data) {
    const callback = (packet) => {
      if ("opening" === this.readyState && packet.type === "open") {
        this.onOpen();
      }
      if ("close" === packet.type) {
        this.onClose({ description: "transport closed by the server" });
        return false;
      }
      this.onPacket(packet);
    };
    decodePayload(data, this.socket.binaryType).forEach(callback);
    if ("closed" !== this.readyState) {
      this.polling = false;
      this.emitReserved("pollComplete");
      if ("open" === this.readyState) {
        this.poll();
      } else {
      }
    }
  }
  doClose() {
    const close = () => {
      this.write([{ type: "close" }]);
    };
    if ("open" === this.readyState) {
      close();
    } else {
      this.once("open", close);
    }
  }
  write(packets) {
    this.writable = false;
    encodePayload(packets, (data) => {
      this.doWrite(data, () => {
        this.writable = true;
        this.emitReserved("drain");
      });
    });
  }
  uri() {
    let query = this.query || {};
    const schema = this.opts.secure ? "https" : "http";
    let port = "";
    if (false !== this.opts.timestampRequests) {
      query[this.opts.timestampParam] = yeast();
    }
    if (!this.supportsBinary && !query.sid) {
      query.b64 = 1;
    }
    if (this.opts.port && ("https" === schema && Number(this.opts.port) !== 443 || "http" === schema && Number(this.opts.port) !== 80)) {
      port = ":" + this.opts.port;
    }
    const encodedQuery = encode2(query);
    const ipv6 = this.opts.hostname.indexOf(":") !== -1;
    return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + (encodedQuery.length ? "?" + encodedQuery : "");
  }
  request(opts = {}) {
    Object.assign(opts, { xd: this.xd, xs: this.xs }, this.opts);
    return new Request(this.uri(), opts);
  }
  doWrite(data, fn) {
    const req = this.request({
      method: "POST",
      data
    });
    req.on("success", fn);
    req.on("error", (xhrStatus, context) => {
      this.onError("xhr post error", xhrStatus, context);
    });
  }
  doPoll() {
    const req = this.request();
    req.on("data", this.onData.bind(this));
    req.on("error", (xhrStatus, context) => {
      this.onError("xhr poll error", xhrStatus, context);
    });
    this.pollXhr = req;
  }
};
var Request = class extends Emitter {
  constructor(uri, opts) {
    super();
    installTimerFunctions(this, opts);
    this.opts = opts;
    this.method = opts.method || "GET";
    this.uri = uri;
    this.async = false !== opts.async;
    this.data = void 0 !== opts.data ? opts.data : null;
    this.create();
  }
  create() {
    const opts = pick2(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    opts.xdomain = !!this.opts.xd;
    opts.xscheme = !!this.opts.xs;
    const xhr = this.xhr = new XHR(opts);
    try {
      xhr.open(this.method, this.uri, this.async);
      try {
        if (this.opts.extraHeaders) {
          xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
          for (let i2 in this.opts.extraHeaders) {
            if (this.opts.extraHeaders.hasOwnProperty(i2)) {
              xhr.setRequestHeader(i2, this.opts.extraHeaders[i2]);
            }
          }
        }
      } catch (e) {
      }
      if ("POST" === this.method) {
        try {
          xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch (e) {
        }
      }
      try {
        xhr.setRequestHeader("Accept", "*/*");
      } catch (e) {
      }
      if ("withCredentials" in xhr) {
        xhr.withCredentials = this.opts.withCredentials;
      }
      if (this.opts.requestTimeout) {
        xhr.timeout = this.opts.requestTimeout;
      }
      xhr.onreadystatechange = () => {
        if (4 !== xhr.readyState)
          return;
        if (200 === xhr.status || 1223 === xhr.status) {
          this.onLoad();
        } else {
          this.setTimeoutFn(() => {
            this.onError(typeof xhr.status === "number" ? xhr.status : 0);
          }, 0);
        }
      };
      xhr.send(this.data);
    } catch (e) {
      this.setTimeoutFn(() => {
        this.onError(e);
      }, 0);
      return;
    }
    if (typeof document !== "undefined") {
      this.index = Request.requestsCount++;
      Request.requests[this.index] = this;
    }
  }
  onError(err) {
    this.emitReserved("error", err, this.xhr);
    this.cleanup(true);
  }
  cleanup(fromError) {
    if ("undefined" === typeof this.xhr || null === this.xhr) {
      return;
    }
    this.xhr.onreadystatechange = empty;
    if (fromError) {
      try {
        this.xhr.abort();
      } catch (e) {
      }
    }
    if (typeof document !== "undefined") {
      delete Request.requests[this.index];
    }
    this.xhr = null;
  }
  onLoad() {
    const data = this.xhr.responseText;
    if (data !== null) {
      this.emitReserved("data", data);
      this.emitReserved("success");
      this.cleanup();
    }
  }
  abort() {
    this.cleanup();
  }
};
Request.requestsCount = 0;
Request.requests = {};
if (typeof document !== "undefined") {
  if (typeof attachEvent === "function") {
    attachEvent("onunload", unloadHandler);
  } else if (typeof addEventListener === "function") {
    const terminationEvent = "onpagehide" in globalThisShim ? "pagehide" : "unload";
    addEventListener(terminationEvent, unloadHandler, false);
  }
}
function unloadHandler() {
  for (let i2 in Request.requests) {
    if (Request.requests.hasOwnProperty(i2)) {
      Request.requests[i2].abort();
    }
  }
}

// node_modules/engine.io-client/build/esm/transports/websocket-constructor.browser.js
var nextTick = (() => {
  const isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";
  if (isPromiseAvailable) {
    return (cb2) => Promise.resolve().then(cb2);
  } else {
    return (cb2, setTimeoutFn) => setTimeoutFn(cb2, 0);
  }
})();
var WebSocket = globalThisShim.WebSocket || globalThisShim.MozWebSocket;
var usingBrowserWebSocket = true;
var defaultBinaryType = "arraybuffer";

// node_modules/engine.io-client/build/esm/transports/websocket.js
var isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
var WS = class extends Transport {
  constructor(opts) {
    super(opts);
    this.supportsBinary = !opts.forceBase64;
  }
  get name() {
    return "websocket";
  }
  doOpen() {
    if (!this.check()) {
      return;
    }
    const uri = this.uri();
    const protocols = this.opts.protocols;
    const opts = isReactNative ? {} : pick2(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    if (this.opts.extraHeaders) {
      opts.headers = this.opts.extraHeaders;
    }
    try {
      this.ws = usingBrowserWebSocket && !isReactNative ? protocols ? new WebSocket(uri, protocols) : new WebSocket(uri) : new WebSocket(uri, protocols, opts);
    } catch (err) {
      return this.emitReserved("error", err);
    }
    this.ws.binaryType = this.socket.binaryType || defaultBinaryType;
    this.addEventListeners();
  }
  addEventListeners() {
    this.ws.onopen = () => {
      if (this.opts.autoUnref) {
        this.ws._socket.unref();
      }
      this.onOpen();
    };
    this.ws.onclose = (closeEvent) => this.onClose({
      description: "websocket connection closed",
      context: closeEvent
    });
    this.ws.onmessage = (ev) => this.onData(ev.data);
    this.ws.onerror = (e) => this.onError("websocket error", e);
  }
  write(packets) {
    this.writable = false;
    for (let i2 = 0; i2 < packets.length; i2++) {
      const packet = packets[i2];
      const lastPacket = i2 === packets.length - 1;
      encodePacket_browser_default(packet, this.supportsBinary, (data) => {
        const opts = {};
        if (!usingBrowserWebSocket) {
          if (packet.options) {
            opts.compress = packet.options.compress;
          }
          if (this.opts.perMessageDeflate) {
            const len = "string" === typeof data ? Buffer.byteLength(data) : data.length;
            if (len < this.opts.perMessageDeflate.threshold) {
              opts.compress = false;
            }
          }
        }
        try {
          if (usingBrowserWebSocket) {
            this.ws.send(data);
          } else {
            this.ws.send(data, opts);
          }
        } catch (e) {
        }
        if (lastPacket) {
          nextTick(() => {
            this.writable = true;
            this.emitReserved("drain");
          }, this.setTimeoutFn);
        }
      });
    }
  }
  doClose() {
    if (typeof this.ws !== "undefined") {
      this.ws.close();
      this.ws = null;
    }
  }
  uri() {
    let query = this.query || {};
    const schema = this.opts.secure ? "wss" : "ws";
    let port = "";
    if (this.opts.port && ("wss" === schema && Number(this.opts.port) !== 443 || "ws" === schema && Number(this.opts.port) !== 80)) {
      port = ":" + this.opts.port;
    }
    if (this.opts.timestampRequests) {
      query[this.opts.timestampParam] = yeast();
    }
    if (!this.supportsBinary) {
      query.b64 = 1;
    }
    const encodedQuery = encode2(query);
    const ipv6 = this.opts.hostname.indexOf(":") !== -1;
    return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + (encodedQuery.length ? "?" + encodedQuery : "");
  }
  check() {
    return !!WebSocket;
  }
};

// node_modules/engine.io-client/build/esm/transports/index.js
var transports = {
  websocket: WS,
  polling: Polling
};

// node_modules/engine.io-client/build/esm/contrib/parseuri.js
var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
var parts = [
  "source",
  "protocol",
  "authority",
  "userInfo",
  "user",
  "password",
  "host",
  "port",
  "relative",
  "path",
  "directory",
  "file",
  "query",
  "anchor"
];
function parse(str) {
  const src = str, b = str.indexOf("["), e = str.indexOf("]");
  if (b != -1 && e != -1) {
    str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ";") + str.substring(e, str.length);
  }
  let m = re.exec(str || ""), uri = {}, i2 = 14;
  while (i2--) {
    uri[parts[i2]] = m[i2] || "";
  }
  if (b != -1 && e != -1) {
    uri.source = src;
    uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ":");
    uri.authority = uri.authority.replace("[", "").replace("]", "").replace(/;/g, ":");
    uri.ipv6uri = true;
  }
  uri.pathNames = pathNames(uri, uri["path"]);
  uri.queryKey = queryKey(uri, uri["query"]);
  return uri;
}
function pathNames(obj, path) {
  const regx = /\/{2,9}/g, names = path.replace(regx, "/").split("/");
  if (path.slice(0, 1) == "/" || path.length === 0) {
    names.splice(0, 1);
  }
  if (path.slice(-1) == "/") {
    names.splice(names.length - 1, 1);
  }
  return names;
}
function queryKey(uri, query) {
  const data = {};
  query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function($0, $1, $2) {
    if ($1) {
      data[$1] = $2;
    }
  });
  return data;
}

// node_modules/engine.io-client/build/esm/socket.js
var Socket = class extends Emitter {
  constructor(uri, opts = {}) {
    super();
    if (uri && "object" === typeof uri) {
      opts = uri;
      uri = null;
    }
    if (uri) {
      uri = parse(uri);
      opts.hostname = uri.host;
      opts.secure = uri.protocol === "https" || uri.protocol === "wss";
      opts.port = uri.port;
      if (uri.query)
        opts.query = uri.query;
    } else if (opts.host) {
      opts.hostname = parse(opts.host).host;
    }
    installTimerFunctions(this, opts);
    this.secure = null != opts.secure ? opts.secure : typeof location !== "undefined" && "https:" === location.protocol;
    if (opts.hostname && !opts.port) {
      opts.port = this.secure ? "443" : "80";
    }
    this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
    this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : this.secure ? "443" : "80");
    this.transports = opts.transports || ["polling", "websocket"];
    this.readyState = "";
    this.writeBuffer = [];
    this.prevBufferLen = 0;
    this.opts = Object.assign({
      path: "/engine.io",
      agent: false,
      withCredentials: false,
      upgrade: true,
      timestampParam: "t",
      rememberUpgrade: false,
      rejectUnauthorized: true,
      perMessageDeflate: {
        threshold: 1024
      },
      transportOptions: {},
      closeOnBeforeunload: true
    }, opts);
    this.opts.path = this.opts.path.replace(/\/$/, "") + "/";
    if (typeof this.opts.query === "string") {
      this.opts.query = decode2(this.opts.query);
    }
    this.id = null;
    this.upgrades = null;
    this.pingInterval = null;
    this.pingTimeout = null;
    this.pingTimeoutTimer = null;
    if (typeof addEventListener === "function") {
      if (this.opts.closeOnBeforeunload) {
        this.beforeunloadEventListener = () => {
          if (this.transport) {
            this.transport.removeAllListeners();
            this.transport.close();
          }
        };
        addEventListener("beforeunload", this.beforeunloadEventListener, false);
      }
      if (this.hostname !== "localhost") {
        this.offlineEventListener = () => {
          this.onClose("transport close", {
            description: "network connection lost"
          });
        };
        addEventListener("offline", this.offlineEventListener, false);
      }
    }
    this.open();
  }
  createTransport(name) {
    const query = Object.assign({}, this.opts.query);
    query.EIO = protocol;
    query.transport = name;
    if (this.id)
      query.sid = this.id;
    const opts = Object.assign({}, this.opts.transportOptions[name], this.opts, {
      query,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    });
    return new transports[name](opts);
  }
  open() {
    let transport;
    if (this.opts.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) {
      transport = "websocket";
    } else if (0 === this.transports.length) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    } else {
      transport = this.transports[0];
    }
    this.readyState = "opening";
    try {
      transport = this.createTransport(transport);
    } catch (e) {
      this.transports.shift();
      this.open();
      return;
    }
    transport.open();
    this.setTransport(transport);
  }
  setTransport(transport) {
    if (this.transport) {
      this.transport.removeAllListeners();
    }
    this.transport = transport;
    transport.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", (reason) => this.onClose("transport close", reason));
  }
  probe(name) {
    let transport = this.createTransport(name);
    let failed = false;
    Socket.priorWebsocketSuccess = false;
    const onTransportOpen = () => {
      if (failed)
        return;
      transport.send([{ type: "ping", data: "probe" }]);
      transport.once("packet", (msg) => {
        if (failed)
          return;
        if ("pong" === msg.type && "probe" === msg.data) {
          this.upgrading = true;
          this.emitReserved("upgrading", transport);
          if (!transport)
            return;
          Socket.priorWebsocketSuccess = "websocket" === transport.name;
          this.transport.pause(() => {
            if (failed)
              return;
            if ("closed" === this.readyState)
              return;
            cleanup();
            this.setTransport(transport);
            transport.send([{ type: "upgrade" }]);
            this.emitReserved("upgrade", transport);
            transport = null;
            this.upgrading = false;
            this.flush();
          });
        } else {
          const err = new Error("probe error");
          err.transport = transport.name;
          this.emitReserved("upgradeError", err);
        }
      });
    };
    function freezeTransport() {
      if (failed)
        return;
      failed = true;
      cleanup();
      transport.close();
      transport = null;
    }
    const onerror = (err) => {
      const error2 = new Error("probe error: " + err);
      error2.transport = transport.name;
      freezeTransport();
      this.emitReserved("upgradeError", error2);
    };
    function onTransportClose() {
      onerror("transport closed");
    }
    function onclose() {
      onerror("socket closed");
    }
    function onupgrade(to) {
      if (transport && to.name !== transport.name) {
        freezeTransport();
      }
    }
    const cleanup = () => {
      transport.removeListener("open", onTransportOpen);
      transport.removeListener("error", onerror);
      transport.removeListener("close", onTransportClose);
      this.off("close", onclose);
      this.off("upgrading", onupgrade);
    };
    transport.once("open", onTransportOpen);
    transport.once("error", onerror);
    transport.once("close", onTransportClose);
    this.once("close", onclose);
    this.once("upgrading", onupgrade);
    transport.open();
  }
  onOpen() {
    this.readyState = "open";
    Socket.priorWebsocketSuccess = "websocket" === this.transport.name;
    this.emitReserved("open");
    this.flush();
    if ("open" === this.readyState && this.opts.upgrade && this.transport.pause) {
      let i2 = 0;
      const l = this.upgrades.length;
      for (; i2 < l; i2++) {
        this.probe(this.upgrades[i2]);
      }
    }
  }
  onPacket(packet) {
    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
      this.emitReserved("packet", packet);
      this.emitReserved("heartbeat");
      switch (packet.type) {
        case "open":
          this.onHandshake(JSON.parse(packet.data));
          break;
        case "ping":
          this.resetPingTimeout();
          this.sendPacket("pong");
          this.emitReserved("ping");
          this.emitReserved("pong");
          break;
        case "error":
          const err = new Error("server error");
          err.code = packet.data;
          this.onError(err);
          break;
        case "message":
          this.emitReserved("data", packet.data);
          this.emitReserved("message", packet.data);
          break;
      }
    } else {
    }
  }
  onHandshake(data) {
    this.emitReserved("handshake", data);
    this.id = data.sid;
    this.transport.query.sid = data.sid;
    this.upgrades = this.filterUpgrades(data.upgrades);
    this.pingInterval = data.pingInterval;
    this.pingTimeout = data.pingTimeout;
    this.maxPayload = data.maxPayload;
    this.onOpen();
    if ("closed" === this.readyState)
      return;
    this.resetPingTimeout();
  }
  resetPingTimeout() {
    this.clearTimeoutFn(this.pingTimeoutTimer);
    this.pingTimeoutTimer = this.setTimeoutFn(() => {
      this.onClose("ping timeout");
    }, this.pingInterval + this.pingTimeout);
    if (this.opts.autoUnref) {
      this.pingTimeoutTimer.unref();
    }
  }
  onDrain() {
    this.writeBuffer.splice(0, this.prevBufferLen);
    this.prevBufferLen = 0;
    if (0 === this.writeBuffer.length) {
      this.emitReserved("drain");
    } else {
      this.flush();
    }
  }
  flush() {
    if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      const packets = this.getWritablePackets();
      this.transport.send(packets);
      this.prevBufferLen = packets.length;
      this.emitReserved("flush");
    }
  }
  getWritablePackets() {
    const shouldCheckPayloadSize = this.maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1;
    if (!shouldCheckPayloadSize) {
      return this.writeBuffer;
    }
    let payloadSize = 1;
    for (let i2 = 0; i2 < this.writeBuffer.length; i2++) {
      const data = this.writeBuffer[i2].data;
      if (data) {
        payloadSize += byteLength(data);
      }
      if (i2 > 0 && payloadSize > this.maxPayload) {
        return this.writeBuffer.slice(0, i2);
      }
      payloadSize += 2;
    }
    return this.writeBuffer;
  }
  write(msg, options, fn) {
    this.sendPacket("message", msg, options, fn);
    return this;
  }
  send(msg, options, fn) {
    this.sendPacket("message", msg, options, fn);
    return this;
  }
  sendPacket(type, data, options, fn) {
    if ("function" === typeof data) {
      fn = data;
      data = void 0;
    }
    if ("function" === typeof options) {
      fn = options;
      options = null;
    }
    if ("closing" === this.readyState || "closed" === this.readyState) {
      return;
    }
    options = options || {};
    options.compress = false !== options.compress;
    const packet = {
      type,
      data,
      options
    };
    this.emitReserved("packetCreate", packet);
    this.writeBuffer.push(packet);
    if (fn)
      this.once("flush", fn);
    this.flush();
  }
  close() {
    const close = () => {
      this.onClose("forced close");
      this.transport.close();
    };
    const cleanupAndClose = () => {
      this.off("upgrade", cleanupAndClose);
      this.off("upgradeError", cleanupAndClose);
      close();
    };
    const waitForUpgrade = () => {
      this.once("upgrade", cleanupAndClose);
      this.once("upgradeError", cleanupAndClose);
    };
    if ("opening" === this.readyState || "open" === this.readyState) {
      this.readyState = "closing";
      if (this.writeBuffer.length) {
        this.once("drain", () => {
          if (this.upgrading) {
            waitForUpgrade();
          } else {
            close();
          }
        });
      } else if (this.upgrading) {
        waitForUpgrade();
      } else {
        close();
      }
    }
    return this;
  }
  onError(err) {
    Socket.priorWebsocketSuccess = false;
    this.emitReserved("error", err);
    this.onClose("transport error", err);
  }
  onClose(reason, description) {
    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
      this.clearTimeoutFn(this.pingTimeoutTimer);
      this.transport.removeAllListeners("close");
      this.transport.close();
      this.transport.removeAllListeners();
      if (typeof removeEventListener === "function") {
        removeEventListener("beforeunload", this.beforeunloadEventListener, false);
        removeEventListener("offline", this.offlineEventListener, false);
      }
      this.readyState = "closed";
      this.id = null;
      this.emitReserved("close", reason, description);
      this.writeBuffer = [];
      this.prevBufferLen = 0;
    }
  }
  filterUpgrades(upgrades) {
    const filteredUpgrades = [];
    let i2 = 0;
    const j = upgrades.length;
    for (; i2 < j; i2++) {
      if (~this.transports.indexOf(upgrades[i2]))
        filteredUpgrades.push(upgrades[i2]);
    }
    return filteredUpgrades;
  }
};
Socket.protocol = protocol;

// node_modules/engine.io-client/build/esm/index.js
var protocol2 = Socket.protocol;

// node_modules/socket.io-client/build/esm/url.js
function url(uri, path = "", loc) {
  let obj = uri;
  loc = loc || typeof location !== "undefined" && location;
  if (null == uri)
    uri = loc.protocol + "//" + loc.host;
  if (typeof uri === "string") {
    if ("/" === uri.charAt(0)) {
      if ("/" === uri.charAt(1)) {
        uri = loc.protocol + uri;
      } else {
        uri = loc.host + uri;
      }
    }
    if (!/^(https?|wss?):\/\//.test(uri)) {
      if ("undefined" !== typeof loc) {
        uri = loc.protocol + "//" + uri;
      } else {
        uri = "https://" + uri;
      }
    }
    obj = parse(uri);
  }
  if (!obj.port) {
    if (/^(http|ws)$/.test(obj.protocol)) {
      obj.port = "80";
    } else if (/^(http|ws)s$/.test(obj.protocol)) {
      obj.port = "443";
    }
  }
  obj.path = obj.path || "/";
  const ipv6 = obj.host.indexOf(":") !== -1;
  const host = ipv6 ? "[" + obj.host + "]" : obj.host;
  obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
  obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
  return obj;
}

// node_modules/socket.io-parser/build/esm/index.js
var esm_exports = {};
__export(esm_exports, {
  Decoder: () => Decoder,
  Encoder: () => Encoder,
  PacketType: () => PacketType,
  protocol: () => protocol3
});

// node_modules/socket.io-parser/build/esm/is-binary.js
var withNativeArrayBuffer3 = typeof ArrayBuffer === "function";
var isView2 = (obj) => {
  return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
};
var toString2 = Object.prototype.toString;
var withNativeBlob2 = typeof Blob === "function" || typeof Blob !== "undefined" && toString2.call(Blob) === "[object BlobConstructor]";
var withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString2.call(File) === "[object FileConstructor]";
function isBinary(obj) {
  return withNativeArrayBuffer3 && (obj instanceof ArrayBuffer || isView2(obj)) || withNativeBlob2 && obj instanceof Blob || withNativeFile && obj instanceof File;
}
function hasBinary(obj, toJSON2) {
  if (!obj || typeof obj !== "object") {
    return false;
  }
  if (Array.isArray(obj)) {
    for (let i2 = 0, l = obj.length; i2 < l; i2++) {
      if (hasBinary(obj[i2])) {
        return true;
      }
    }
    return false;
  }
  if (isBinary(obj)) {
    return true;
  }
  if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) {
    return hasBinary(obj.toJSON(), true);
  }
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
      return true;
    }
  }
  return false;
}

// node_modules/socket.io-parser/build/esm/binary.js
function deconstructPacket(packet) {
  const buffers = [];
  const packetData = packet.data;
  const pack = packet;
  pack.data = _deconstructPacket(packetData, buffers);
  pack.attachments = buffers.length;
  return { packet: pack, buffers };
}
function _deconstructPacket(data, buffers) {
  if (!data)
    return data;
  if (isBinary(data)) {
    const placeholder = { _placeholder: true, num: buffers.length };
    buffers.push(data);
    return placeholder;
  } else if (Array.isArray(data)) {
    const newData = new Array(data.length);
    for (let i2 = 0; i2 < data.length; i2++) {
      newData[i2] = _deconstructPacket(data[i2], buffers);
    }
    return newData;
  } else if (typeof data === "object" && !(data instanceof Date)) {
    const newData = {};
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        newData[key] = _deconstructPacket(data[key], buffers);
      }
    }
    return newData;
  }
  return data;
}
function reconstructPacket(packet, buffers) {
  packet.data = _reconstructPacket(packet.data, buffers);
  packet.attachments = void 0;
  return packet;
}
function _reconstructPacket(data, buffers) {
  if (!data)
    return data;
  if (data && data._placeholder === true) {
    const isIndexValid = typeof data.num === "number" && data.num >= 0 && data.num < buffers.length;
    if (isIndexValid) {
      return buffers[data.num];
    } else {
      throw new Error("illegal attachments");
    }
  } else if (Array.isArray(data)) {
    for (let i2 = 0; i2 < data.length; i2++) {
      data[i2] = _reconstructPacket(data[i2], buffers);
    }
  } else if (typeof data === "object") {
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        data[key] = _reconstructPacket(data[key], buffers);
      }
    }
  }
  return data;
}

// node_modules/socket.io-parser/build/esm/index.js
var protocol3 = 5;
var PacketType;
(function(PacketType2) {
  PacketType2[PacketType2["CONNECT"] = 0] = "CONNECT";
  PacketType2[PacketType2["DISCONNECT"] = 1] = "DISCONNECT";
  PacketType2[PacketType2["EVENT"] = 2] = "EVENT";
  PacketType2[PacketType2["ACK"] = 3] = "ACK";
  PacketType2[PacketType2["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
  PacketType2[PacketType2["BINARY_EVENT"] = 5] = "BINARY_EVENT";
  PacketType2[PacketType2["BINARY_ACK"] = 6] = "BINARY_ACK";
})(PacketType || (PacketType = {}));
var Encoder = class {
  constructor(replacer) {
    this.replacer = replacer;
  }
  encode(obj) {
    if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
      if (hasBinary(obj)) {
        obj.type = obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK;
        return this.encodeAsBinary(obj);
      }
    }
    return [this.encodeAsString(obj)];
  }
  encodeAsString(obj) {
    let str = "" + obj.type;
    if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) {
      str += obj.attachments + "-";
    }
    if (obj.nsp && "/" !== obj.nsp) {
      str += obj.nsp + ",";
    }
    if (null != obj.id) {
      str += obj.id;
    }
    if (null != obj.data) {
      str += JSON.stringify(obj.data, this.replacer);
    }
    return str;
  }
  encodeAsBinary(obj) {
    const deconstruction = deconstructPacket(obj);
    const pack = this.encodeAsString(deconstruction.packet);
    const buffers = deconstruction.buffers;
    buffers.unshift(pack);
    return buffers;
  }
};
var Decoder = class extends Emitter {
  constructor(reviver) {
    super();
    this.reviver = reviver;
  }
  add(obj) {
    let packet;
    if (typeof obj === "string") {
      if (this.reconstructor) {
        throw new Error("got plaintext data when reconstructing a packet");
      }
      packet = this.decodeString(obj);
      if (packet.type === PacketType.BINARY_EVENT || packet.type === PacketType.BINARY_ACK) {
        this.reconstructor = new BinaryReconstructor(packet);
        if (packet.attachments === 0) {
          super.emitReserved("decoded", packet);
        }
      } else {
        super.emitReserved("decoded", packet);
      }
    } else if (isBinary(obj) || obj.base64) {
      if (!this.reconstructor) {
        throw new Error("got binary data when not reconstructing a packet");
      } else {
        packet = this.reconstructor.takeBinaryData(obj);
        if (packet) {
          this.reconstructor = null;
          super.emitReserved("decoded", packet);
        }
      }
    } else {
      throw new Error("Unknown type: " + obj);
    }
  }
  decodeString(str) {
    let i2 = 0;
    const p = {
      type: Number(str.charAt(0))
    };
    if (PacketType[p.type] === void 0) {
      throw new Error("unknown packet type " + p.type);
    }
    if (p.type === PacketType.BINARY_EVENT || p.type === PacketType.BINARY_ACK) {
      const start = i2 + 1;
      while (str.charAt(++i2) !== "-" && i2 != str.length) {
      }
      const buf = str.substring(start, i2);
      if (buf != Number(buf) || str.charAt(i2) !== "-") {
        throw new Error("Illegal attachments");
      }
      p.attachments = Number(buf);
    }
    if ("/" === str.charAt(i2 + 1)) {
      const start = i2 + 1;
      while (++i2) {
        const c = str.charAt(i2);
        if ("," === c)
          break;
        if (i2 === str.length)
          break;
      }
      p.nsp = str.substring(start, i2);
    } else {
      p.nsp = "/";
    }
    const next = str.charAt(i2 + 1);
    if ("" !== next && Number(next) == next) {
      const start = i2 + 1;
      while (++i2) {
        const c = str.charAt(i2);
        if (null == c || Number(c) != c) {
          --i2;
          break;
        }
        if (i2 === str.length)
          break;
      }
      p.id = Number(str.substring(start, i2 + 1));
    }
    if (str.charAt(++i2)) {
      const payload = this.tryParse(str.substr(i2));
      if (Decoder.isPayloadValid(p.type, payload)) {
        p.data = payload;
      } else {
        throw new Error("invalid payload");
      }
    }
    return p;
  }
  tryParse(str) {
    try {
      return JSON.parse(str, this.reviver);
    } catch (e) {
      return false;
    }
  }
  static isPayloadValid(type, payload) {
    switch (type) {
      case PacketType.CONNECT:
        return typeof payload === "object";
      case PacketType.DISCONNECT:
        return payload === void 0;
      case PacketType.CONNECT_ERROR:
        return typeof payload === "string" || typeof payload === "object";
      case PacketType.EVENT:
      case PacketType.BINARY_EVENT:
        return Array.isArray(payload) && payload.length > 0;
      case PacketType.ACK:
      case PacketType.BINARY_ACK:
        return Array.isArray(payload);
    }
  }
  destroy() {
    if (this.reconstructor) {
      this.reconstructor.finishedReconstruction();
    }
  }
};
var BinaryReconstructor = class {
  constructor(packet) {
    this.packet = packet;
    this.buffers = [];
    this.reconPack = packet;
  }
  takeBinaryData(binData) {
    this.buffers.push(binData);
    if (this.buffers.length === this.reconPack.attachments) {
      const packet = reconstructPacket(this.reconPack, this.buffers);
      this.finishedReconstruction();
      return packet;
    }
    return null;
  }
  finishedReconstruction() {
    this.reconPack = null;
    this.buffers = [];
  }
};

// node_modules/socket.io-client/build/esm/on.js
function on(obj, ev, fn) {
  obj.on(ev, fn);
  return function subDestroy() {
    obj.off(ev, fn);
  };
}

// node_modules/socket.io-client/build/esm/socket.js
var RESERVED_EVENTS = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  newListener: 1,
  removeListener: 1
});
var Socket2 = class extends Emitter {
  constructor(io, nsp, opts) {
    super();
    this.connected = false;
    this.receiveBuffer = [];
    this.sendBuffer = [];
    this.ids = 0;
    this.acks = {};
    this.flags = {};
    this.io = io;
    this.nsp = nsp;
    if (opts && opts.auth) {
      this.auth = opts.auth;
    }
    if (this.io._autoConnect)
      this.open();
  }
  get disconnected() {
    return !this.connected;
  }
  subEvents() {
    if (this.subs)
      return;
    const io = this.io;
    this.subs = [
      on(io, "open", this.onopen.bind(this)),
      on(io, "packet", this.onpacket.bind(this)),
      on(io, "error", this.onerror.bind(this)),
      on(io, "close", this.onclose.bind(this))
    ];
  }
  get active() {
    return !!this.subs;
  }
  connect() {
    if (this.connected)
      return this;
    this.subEvents();
    if (!this.io["_reconnecting"])
      this.io.open();
    if ("open" === this.io._readyState)
      this.onopen();
    return this;
  }
  open() {
    return this.connect();
  }
  send(...args) {
    args.unshift("message");
    this.emit.apply(this, args);
    return this;
  }
  emit(ev, ...args) {
    if (RESERVED_EVENTS.hasOwnProperty(ev)) {
      throw new Error('"' + ev.toString() + '" is a reserved event name');
    }
    args.unshift(ev);
    const packet = {
      type: PacketType.EVENT,
      data: args
    };
    packet.options = {};
    packet.options.compress = this.flags.compress !== false;
    if ("function" === typeof args[args.length - 1]) {
      const id = this.ids++;
      const ack = args.pop();
      this._registerAckCallback(id, ack);
      packet.id = id;
    }
    const isTransportWritable = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
    const discardPacket = this.flags.volatile && (!isTransportWritable || !this.connected);
    if (discardPacket) {
    } else if (this.connected) {
      this.notifyOutgoingListeners(packet);
      this.packet(packet);
    } else {
      this.sendBuffer.push(packet);
    }
    this.flags = {};
    return this;
  }
  _registerAckCallback(id, ack) {
    const timeout = this.flags.timeout;
    if (timeout === void 0) {
      this.acks[id] = ack;
      return;
    }
    const timer = this.io.setTimeoutFn(() => {
      delete this.acks[id];
      for (let i2 = 0; i2 < this.sendBuffer.length; i2++) {
        if (this.sendBuffer[i2].id === id) {
          this.sendBuffer.splice(i2, 1);
        }
      }
      ack.call(this, new Error("operation has timed out"));
    }, timeout);
    this.acks[id] = (...args) => {
      this.io.clearTimeoutFn(timer);
      ack.apply(this, [null, ...args]);
    };
  }
  packet(packet) {
    packet.nsp = this.nsp;
    this.io._packet(packet);
  }
  onopen() {
    if (typeof this.auth == "function") {
      this.auth((data) => {
        this.packet({ type: PacketType.CONNECT, data });
      });
    } else {
      this.packet({ type: PacketType.CONNECT, data: this.auth });
    }
  }
  onerror(err) {
    if (!this.connected) {
      this.emitReserved("connect_error", err);
    }
  }
  onclose(reason, description) {
    this.connected = false;
    delete this.id;
    this.emitReserved("disconnect", reason, description);
  }
  onpacket(packet) {
    const sameNamespace = packet.nsp === this.nsp;
    if (!sameNamespace)
      return;
    switch (packet.type) {
      case PacketType.CONNECT:
        if (packet.data && packet.data.sid) {
          const id = packet.data.sid;
          this.onconnect(id);
        } else {
          this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
        }
        break;
      case PacketType.EVENT:
      case PacketType.BINARY_EVENT:
        this.onevent(packet);
        break;
      case PacketType.ACK:
      case PacketType.BINARY_ACK:
        this.onack(packet);
        break;
      case PacketType.DISCONNECT:
        this.ondisconnect();
        break;
      case PacketType.CONNECT_ERROR:
        this.destroy();
        const err = new Error(packet.data.message);
        err.data = packet.data.data;
        this.emitReserved("connect_error", err);
        break;
    }
  }
  onevent(packet) {
    const args = packet.data || [];
    if (null != packet.id) {
      args.push(this.ack(packet.id));
    }
    if (this.connected) {
      this.emitEvent(args);
    } else {
      this.receiveBuffer.push(Object.freeze(args));
    }
  }
  emitEvent(args) {
    if (this._anyListeners && this._anyListeners.length) {
      const listeners = this._anyListeners.slice();
      for (const listener of listeners) {
        listener.apply(this, args);
      }
    }
    super.emit.apply(this, args);
  }
  ack(id) {
    const self2 = this;
    let sent = false;
    return function(...args) {
      if (sent)
        return;
      sent = true;
      self2.packet({
        type: PacketType.ACK,
        id,
        data: args
      });
    };
  }
  onack(packet) {
    const ack = this.acks[packet.id];
    if ("function" === typeof ack) {
      ack.apply(this, packet.data);
      delete this.acks[packet.id];
    } else {
    }
  }
  onconnect(id) {
    this.id = id;
    this.connected = true;
    this.emitBuffered();
    this.emitReserved("connect");
  }
  emitBuffered() {
    this.receiveBuffer.forEach((args) => this.emitEvent(args));
    this.receiveBuffer = [];
    this.sendBuffer.forEach((packet) => {
      this.notifyOutgoingListeners(packet);
      this.packet(packet);
    });
    this.sendBuffer = [];
  }
  ondisconnect() {
    this.destroy();
    this.onclose("io server disconnect");
  }
  destroy() {
    if (this.subs) {
      this.subs.forEach((subDestroy) => subDestroy());
      this.subs = void 0;
    }
    this.io["_destroy"](this);
  }
  disconnect() {
    if (this.connected) {
      this.packet({ type: PacketType.DISCONNECT });
    }
    this.destroy();
    if (this.connected) {
      this.onclose("io client disconnect");
    }
    return this;
  }
  close() {
    return this.disconnect();
  }
  compress(compress) {
    this.flags.compress = compress;
    return this;
  }
  get volatile() {
    this.flags.volatile = true;
    return this;
  }
  timeout(timeout) {
    this.flags.timeout = timeout;
    return this;
  }
  onAny(listener) {
    this._anyListeners = this._anyListeners || [];
    this._anyListeners.push(listener);
    return this;
  }
  prependAny(listener) {
    this._anyListeners = this._anyListeners || [];
    this._anyListeners.unshift(listener);
    return this;
  }
  offAny(listener) {
    if (!this._anyListeners) {
      return this;
    }
    if (listener) {
      const listeners = this._anyListeners;
      for (let i2 = 0; i2 < listeners.length; i2++) {
        if (listener === listeners[i2]) {
          listeners.splice(i2, 1);
          return this;
        }
      }
    } else {
      this._anyListeners = [];
    }
    return this;
  }
  listenersAny() {
    return this._anyListeners || [];
  }
  onAnyOutgoing(listener) {
    this._anyOutgoingListeners = this._anyOutgoingListeners || [];
    this._anyOutgoingListeners.push(listener);
    return this;
  }
  prependAnyOutgoing(listener) {
    this._anyOutgoingListeners = this._anyOutgoingListeners || [];
    this._anyOutgoingListeners.unshift(listener);
    return this;
  }
  offAnyOutgoing(listener) {
    if (!this._anyOutgoingListeners) {
      return this;
    }
    if (listener) {
      const listeners = this._anyOutgoingListeners;
      for (let i2 = 0; i2 < listeners.length; i2++) {
        if (listener === listeners[i2]) {
          listeners.splice(i2, 1);
          return this;
        }
      }
    } else {
      this._anyOutgoingListeners = [];
    }
    return this;
  }
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  notifyOutgoingListeners(packet) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const listeners = this._anyOutgoingListeners.slice();
      for (const listener of listeners) {
        listener.apply(this, packet.data);
      }
    }
  }
};

// node_modules/socket.io-client/build/esm/contrib/backo2.js
function Backoff(opts) {
  opts = opts || {};
  this.ms = opts.min || 100;
  this.max = opts.max || 1e4;
  this.factor = opts.factor || 2;
  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
  this.attempts = 0;
}
Backoff.prototype.duration = function() {
  var ms = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var rand = Math.random();
    var deviation = Math.floor(rand * this.jitter * ms);
    ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
  }
  return Math.min(ms, this.max) | 0;
};
Backoff.prototype.reset = function() {
  this.attempts = 0;
};
Backoff.prototype.setMin = function(min2) {
  this.ms = min2;
};
Backoff.prototype.setMax = function(max2) {
  this.max = max2;
};
Backoff.prototype.setJitter = function(jitter) {
  this.jitter = jitter;
};

// node_modules/socket.io-client/build/esm/manager.js
var Manager = class extends Emitter {
  constructor(uri, opts) {
    var _a;
    super();
    this.nsps = {};
    this.subs = [];
    if (uri && "object" === typeof uri) {
      opts = uri;
      uri = void 0;
    }
    opts = opts || {};
    opts.path = opts.path || "/socket.io";
    this.opts = opts;
    installTimerFunctions(this, opts);
    this.reconnection(opts.reconnection !== false);
    this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
    this.reconnectionDelay(opts.reconnectionDelay || 1e3);
    this.reconnectionDelayMax(opts.reconnectionDelayMax || 5e3);
    this.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);
    this.backoff = new Backoff({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    });
    this.timeout(null == opts.timeout ? 2e4 : opts.timeout);
    this._readyState = "closed";
    this.uri = uri;
    const _parser = opts.parser || esm_exports;
    this.encoder = new _parser.Encoder();
    this.decoder = new _parser.Decoder();
    this._autoConnect = opts.autoConnect !== false;
    if (this._autoConnect)
      this.open();
  }
  reconnection(v) {
    if (!arguments.length)
      return this._reconnection;
    this._reconnection = !!v;
    return this;
  }
  reconnectionAttempts(v) {
    if (v === void 0)
      return this._reconnectionAttempts;
    this._reconnectionAttempts = v;
    return this;
  }
  reconnectionDelay(v) {
    var _a;
    if (v === void 0)
      return this._reconnectionDelay;
    this._reconnectionDelay = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v);
    return this;
  }
  randomizationFactor(v) {
    var _a;
    if (v === void 0)
      return this._randomizationFactor;
    this._randomizationFactor = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v);
    return this;
  }
  reconnectionDelayMax(v) {
    var _a;
    if (v === void 0)
      return this._reconnectionDelayMax;
    this._reconnectionDelayMax = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v);
    return this;
  }
  timeout(v) {
    if (!arguments.length)
      return this._timeout;
    this._timeout = v;
    return this;
  }
  maybeReconnectOnOpen() {
    if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {
      this.reconnect();
    }
  }
  open(fn) {
    if (~this._readyState.indexOf("open"))
      return this;
    this.engine = new Socket(this.uri, this.opts);
    const socket = this.engine;
    const self2 = this;
    this._readyState = "opening";
    this.skipReconnect = false;
    const openSubDestroy = on(socket, "open", function() {
      self2.onopen();
      fn && fn();
    });
    const errorSub = on(socket, "error", (err) => {
      self2.cleanup();
      self2._readyState = "closed";
      this.emitReserved("error", err);
      if (fn) {
        fn(err);
      } else {
        self2.maybeReconnectOnOpen();
      }
    });
    if (false !== this._timeout) {
      const timeout = this._timeout;
      if (timeout === 0) {
        openSubDestroy();
      }
      const timer = this.setTimeoutFn(() => {
        openSubDestroy();
        socket.close();
        socket.emit("error", new Error("timeout"));
      }, timeout);
      if (this.opts.autoUnref) {
        timer.unref();
      }
      this.subs.push(function subDestroy() {
        clearTimeout(timer);
      });
    }
    this.subs.push(openSubDestroy);
    this.subs.push(errorSub);
    return this;
  }
  connect(fn) {
    return this.open(fn);
  }
  onopen() {
    this.cleanup();
    this._readyState = "open";
    this.emitReserved("open");
    const socket = this.engine;
    this.subs.push(on(socket, "ping", this.onping.bind(this)), on(socket, "data", this.ondata.bind(this)), on(socket, "error", this.onerror.bind(this)), on(socket, "close", this.onclose.bind(this)), on(this.decoder, "decoded", this.ondecoded.bind(this)));
  }
  onping() {
    this.emitReserved("ping");
  }
  ondata(data) {
    try {
      this.decoder.add(data);
    } catch (e) {
      this.onclose("parse error", e);
    }
  }
  ondecoded(packet) {
    nextTick(() => {
      this.emitReserved("packet", packet);
    }, this.setTimeoutFn);
  }
  onerror(err) {
    this.emitReserved("error", err);
  }
  socket(nsp, opts) {
    let socket = this.nsps[nsp];
    if (!socket) {
      socket = new Socket2(this, nsp, opts);
      this.nsps[nsp] = socket;
    }
    return socket;
  }
  _destroy(socket) {
    const nsps = Object.keys(this.nsps);
    for (const nsp of nsps) {
      const socket2 = this.nsps[nsp];
      if (socket2.active) {
        return;
      }
    }
    this._close();
  }
  _packet(packet) {
    const encodedPackets = this.encoder.encode(packet);
    for (let i2 = 0; i2 < encodedPackets.length; i2++) {
      this.engine.write(encodedPackets[i2], packet.options);
    }
  }
  cleanup() {
    this.subs.forEach((subDestroy) => subDestroy());
    this.subs.length = 0;
    this.decoder.destroy();
  }
  _close() {
    this.skipReconnect = true;
    this._reconnecting = false;
    this.onclose("forced close");
    if (this.engine)
      this.engine.close();
  }
  disconnect() {
    return this._close();
  }
  onclose(reason, description) {
    this.cleanup();
    this.backoff.reset();
    this._readyState = "closed";
    this.emitReserved("close", reason, description);
    if (this._reconnection && !this.skipReconnect) {
      this.reconnect();
    }
  }
  reconnect() {
    if (this._reconnecting || this.skipReconnect)
      return this;
    const self2 = this;
    if (this.backoff.attempts >= this._reconnectionAttempts) {
      this.backoff.reset();
      this.emitReserved("reconnect_failed");
      this._reconnecting = false;
    } else {
      const delay2 = this.backoff.duration();
      this._reconnecting = true;
      const timer = this.setTimeoutFn(() => {
        if (self2.skipReconnect)
          return;
        this.emitReserved("reconnect_attempt", self2.backoff.attempts);
        if (self2.skipReconnect)
          return;
        self2.open((err) => {
          if (err) {
            self2._reconnecting = false;
            self2.reconnect();
            this.emitReserved("reconnect_error", err);
          } else {
            self2.onreconnect();
          }
        });
      }, delay2);
      if (this.opts.autoUnref) {
        timer.unref();
      }
      this.subs.push(function subDestroy() {
        clearTimeout(timer);
      });
    }
  }
  onreconnect() {
    const attempt = this.backoff.attempts;
    this._reconnecting = false;
    this.backoff.reset();
    this.emitReserved("reconnect", attempt);
  }
};

// node_modules/socket.io-client/build/esm/index.js
var cache = {};
function lookup2(uri, opts) {
  if (typeof uri === "object") {
    opts = uri;
    uri = void 0;
  }
  opts = opts || {};
  const parsed = url(uri, opts.path || "/socket.io");
  const source = parsed.source;
  const id = parsed.id;
  const path = parsed.path;
  const sameNamespace = cache[id] && path in cache[id]["nsps"];
  const newConnection = opts.forceNew || opts["force new connection"] || false === opts.multiplex || sameNamespace;
  let io;
  if (newConnection) {
    io = new Manager(source, opts);
  } else {
    if (!cache[id]) {
      cache[id] = new Manager(source, opts);
    }
    io = cache[id];
  }
  if (parsed.query && !opts.query) {
    opts.query = parsed.queryKey;
  }
  return io.socket(parsed.path, opts);
}
Object.assign(lookup2, {
  Manager,
  Socket: Socket2,
  io: lookup2,
  connect: lookup2
});

// src/libs/utils.js
var LogServer = class {
  constructor(clientName) {
    this.clientName = clientName;
    const socket = lookup2("ws://localhost:2022");
    socket.on("connection", (r) => {
      console.log(r);
    });
    socket.on("connect", () => {
      console.log(socket.id);
    });
    socket.on("disconnect", (reason) => {
      if (reason === "io server disconnect") {
        socket.connect();
      }
    });
    this.socket = socket;
  }
  log(data, lineNumber) {
    const src = this.clientName;
    let consoleArgs = { data, src, lineNumber };
    try {
      this.socket.emit("log", consoleArgs);
    } catch (e) {
      console.log(e);
    }
  }
  logWeb(data) {
    data.src = this.clientName;
    const data64 = btoa(JSON.stringify(data));
    const url2 = "http://localhost:2002/log?data=" + data64;
    setTimeout(() => {
      fetch(url2);
    }, 100);
  }
};
function makeTitle(slug) {
  const words = slug.split("-");
  for (let i2 = 0; i2 < words.length; i2++) {
    let word = words[i2];
    words[i2] = word.charAt(0).toUpperCase() + word.slice(1);
  }
  return words.join(" ");
}
function makeSlug(str) {
  const words = str.replace(/\W+/g, " ").split(" ");
  return words.join("-").toLowerCase();
}
function myLogServer() {
  const logServer4 = {
    logContent: (data) => {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        try {
          const tab = tabs[0];
          chrome.tabs.sendMessage(tab.id, { event: "LogServer", data }, (r) => {
          });
        } catch (e) {
        }
      });
    },
    logWeb: (data) => {
      logServer4.logContent(data);
    }
  };
  return logServer4;
}

// src/libs/chromeStorageDB.js
var chromeStorageDB = class {
  db_prefix = "db_";
  db_id;
  db_new;
  db;
  storage;
  constructor(db_name, engine) {
    this.db_id = this.db_prefix + db_name;
    this.db_new = false;
    try {
      this.storage = chrome.storage[engine === "local" ? "local" : "sync"];
    } catch (e) {
      this.storage = engine;
    }
    this.sync(() => {
      if (!(this.db && this.db.tables && this.db.data)) {
        if (!this.validateName(db_name)) {
          this.error("The name '" + db_name + "' contains invalid characters");
        } else {
          this.db = { tables: {}, data: {} };
          this.commit();
          this.db_new = true;
        }
      }
    });
  }
  sync(fn) {
    (async () => {
      const tmpDb = await this.storage.get([this.db_id]);
      if (typeof tmpDb[this.db_id] !== "undefined") {
        this.db = tmpDb[this.db_id];
      }
      if (typeof fn == "function") {
        fn();
      }
    })();
  }
  drop() {
    (async () => {
      await this.storage.remove([this.db_id]);
    })();
    this.db = null;
  }
  getItem(key) {
    try {
      return this.storage.get([key]);
    } catch (e) {
      return null;
    }
  }
  replace(data) {
    setItem(db_id, data);
  }
  setItem(key, value2) {
    try {
      this.storage.set({ key: value2 }).then(() => {
      });
      return true;
    } catch (e) {
      return false;
    }
  }
  tableCount() {
    var count = 0;
    for (var table in this.db.tables) {
      if (this.db.tables.hasOwnProperty(table)) {
        count++;
      }
    }
    return count;
  }
  tableFields(table_name) {
    return this.db.tables[table_name].fields;
  }
  tableExists(table_name) {
    if (typeof this.db.tables[table_name] !== "object") {
      return false;
    }
    return this.db.tables[table_name] ? true : false;
  }
  tableExistsWarn(table_name) {
    if (!this.tableExists(table_name)) {
      this.error("The table '" + table_name + "' does not exist");
    }
  }
  columnExists(table_name, field_name) {
    var exists = false;
    var table_fields = this.db.tables[table_name].fields;
    for (var field in table_fields) {
      if (table_fields[field] === field_name) {
        exists = true;
        break;
      }
    }
    return exists;
  }
  _createTable(table_name, fields) {
    this.db.tables[table_name] = { fields, auto_increment: 1 };
    this.db.data[table_name] = {};
  }
  _dropTable(table_name) {
    delete this.db.tables[table_name];
    delete this.db.data[table_name];
  }
  _truncate(table_name) {
    this.db.tables[table_name].auto_increment = 1;
    this.db.data[table_name] = {};
  }
  _alterTable(table_name, new_fields, default_values) {
    this.db.tables[table_name].fields = this.db.tables[table_name].fields.concat(new_fields);
    if (typeof default_values !== "undefined") {
      for (var ID in this.db.data[table_name]) {
        if (!db.data[table_name].hasOwnProperty(ID)) {
          continue;
        }
        for (var field in new_fields) {
          if (typeof default_values === "object") {
            this.db.data[table_name][ID][new_fields[field]] = default_values[new_fields[field]];
          } else {
            this.db.data[table_name][ID][new_fields[field]] = default_values;
          }
        }
      }
    }
  }
  _rowCount(table_name) {
    var count = 0;
    for (var ID in this.db.data[table_name]) {
      if (this.db.data[table_name].hasOwnProperty(ID)) {
        count++;
      }
    }
    return count;
  }
  _insert(table_name, data) {
    data.ID = this.db.tables[table_name].auto_increment;
    this.db.data[table_name][this.db.tables[table_name].auto_increment] = data;
    this.db.tables[table_name].auto_increment++;
    return data.ID;
  }
  select(table_name, ids, start, limit, sort, distinct) {
    var ID = null, results = [], row = null;
    var i2;
    for (i2 = 0; i2 < ids.length; i2++) {
      ID = ids[i2];
      row = this.db.data[table_name][ID];
      results.push(this.clone(row));
    }
    if (sort && sort instanceof Array) {
      for (i2 = 0; i2 < sort.length; i2++) {
        results.sort(this.sort_results(sort[i2][0], sort[i2].length > 1 ? sort[i2][1] : null));
      }
    }
    if (distinct && distinct instanceof Array) {
      for (var j = 0; j < distinct.length; j++) {
        var seen = {}, d = distinct[j];
        for (i2 = 0; i2 < results.length; i2++) {
          if (results[i2] === void 0) {
            continue;
          }
          if (results[i2].hasOwnProperty(d) && seen.hasOwnProperty(results[i2][d])) {
            delete results[i2];
          } else {
            seen[results[i2][d]] = 1;
          }
        }
      }
      var new_results = [];
      for (i2 = 0; i2 < results.length; i2++) {
        if (results[i2] !== void 0) {
          new_results.push(results[i2]);
        }
      }
      results = new_results;
    }
    start = start && typeof start === "number" ? start : null;
    limit = limit && typeof limit === "number" ? limit : null;
    if (start && limit) {
      results = results.slice(start, start + limit);
    } else if (start) {
      results = results.slice(start);
    } else if (limit) {
      results = results.slice(start, limit);
    }
    return results;
  }
  sort_results(field, order) {
    return function(x, y) {
      var v1 = typeof x[field] === "string" ? x[field].toLowerCase() : x[field], v2 = typeof y[field] === "string" ? y[field].toLowerCase() : y[field];
      if (order === "DESC") {
        return v1 === v2 ? 0 : v1 < v2 ? 1 : -1;
      } else {
        return v1 === v2 ? 0 : v1 > v2 ? 1 : -1;
      }
    };
  }
  queryByValues(table_name, data) {
    var result_ids = [], exists = false, row = null;
    for (var ID in this.db.data[table_name]) {
      if (!this.db.data[table_name].hasOwnProperty(ID)) {
        continue;
      }
      row = this.db.data[table_name][ID];
      exists = true;
      for (var field in data) {
        if (!data.hasOwnProperty(field)) {
          continue;
        }
        if (typeof data[field] === "string") {
          if (row[field] === null || row[field].toString().toLowerCase() !== data[field].toString().toLowerCase()) {
            exists = false;
            break;
          }
        } else {
          if (row[field] !== data[field]) {
            exists = false;
            break;
          }
        }
      }
      if (exists) {
        result_ids.push(ID);
      }
    }
    return result_ids;
  }
  queryByFunction(table_name, query_function) {
    var result_ids = [], exists = false, row = null;
    for (var ID in this.db.data[table_name]) {
      if (!this.db.data[table_name].hasOwnProperty(ID)) {
        continue;
      }
      row = this.db.data[table_name][ID];
      if (query_function(this.clone(row)) === true) {
        result_ids.push(ID);
      }
    }
    return result_ids;
  }
  getIDs(table_name) {
    var result_ids = [];
    for (var ID in this.db.data[table_name]) {
      if (this.db.data[table_name].hasOwnProperty(ID)) {
        result_ids.push(ID);
      }
    }
    return result_ids;
  }
  _deleteRows(table_name, ids) {
    for (var i2 = 0; i2 < ids.length; i2++) {
      if (this.db.data[table_name].hasOwnProperty(ids[i2])) {
        delete this.db.data[table_name][ids[i2]];
      }
    }
    return ids.length;
  }
  _update(table_name, ids, update_function) {
    var ID = "", num = 0;
    for (var i2 = 0; i2 < ids.length; i2++) {
      ID = ids[i2];
      var updated_data = update_function(this.clone(this.db.data[table_name][ID]));
      if (updated_data) {
        delete updated_data["ID"];
        var new_data = this.db.data[table_name][ID];
        for (var field in updated_data) {
          if (updated_data.hasOwnProperty(field)) {
            new_data[field] = updated_data[field];
          }
        }
        this.db.data[table_name][ID] = this.validFields(table_name, new_data);
        num++;
      }
    }
    return num;
  }
  commit(fn) {
    try {
      const data = {};
      data[this.db_id] = this.db;
      this.storage.set(data, (data_) => {
        if (typeof fn === "function") {
          fn(data_);
        }
      });
      return true;
    } catch (e) {
      return false;
    }
  }
  serialize() {
    return JSON.stringify(this.db);
  }
  error(msg) {
    console.error(msg);
  }
  clone(obj) {
    var new_obj = {};
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        new_obj[key] = obj[key];
      }
    }
    return new_obj;
  }
  validateName(name) {
    return name.toString().match(/[^a-z_0-9]/ig) ? false : true;
  }
  validFields(table_name, data) {
    var field = "", new_data = {};
    for (field in data) {
      var index = this.db.tables[table_name].fields.indexOf(field);
      if (index === -1) {
        error("Invalid query parameter: " + field);
      }
      new_data[field] = data[field];
    }
    return new_data;
  }
  validateData(table_name, data) {
    var field = "", new_data = {};
    for (var i2 = 0; i2 < this.db.tables[table_name].fields.length; i2++) {
      field = this.db.tables[table_name].fields[i2];
      new_data[field] = data[field] === null || data[field] === void 0 ? null : data[field];
    }
    return new_data;
  }
  isNew(fn) {
    return setTimeout(() => {
      fn(this.db_new);
    }, 100);
  }
  createTable(table_name, fields) {
    var result2 = false;
    if (!this.validateName(table_name)) {
      error("The database name '" + table_name + "' contains invalid characters.");
    } else if (this.tableExists(table_name)) {
      error("The table name '" + table_name + "' already exists.");
    } else {
      var is_valid = true;
      var i2;
      for (i2 = 0; i2 < fields.length; i2++) {
        if (!this.validateName(fields[i2])) {
          is_valid = false;
          break;
        }
      }
      if (is_valid) {
        var fields_literal = {};
        for (i2 = 0; i2 < fields.length; i2++) {
          fields_literal[fields[i2]] = true;
        }
        delete fields_literal["ID"];
        fields = ["ID"];
        for (var field in fields_literal) {
          if (fields_literal.hasOwnProperty(field)) {
            fields.push(field);
          }
        }
        this._createTable(table_name, fields);
        result2 = true;
      } else {
        error("One or more field names in the table definition contains invalid characters");
      }
    }
    return result2;
  }
  createTableWithData(table_name, data) {
    if (typeof data !== "object" || !data.length || data.length < 1) {
      error("Data supplied isn't in object form. Example: [{k:v,k:v},{k:v,k:v} ..]");
    }
    var fields = Object.keys(data[0]);
    if (this.createTable(table_name, fields)) {
      this.commit();
      for (var i2 = 0; i2 < data.length; i2++) {
        if (!insert(table_name, data[i2])) {
          error("Failed to insert record: [" + JSON.stringify(data[i2]) + "]");
        }
      }
      this.commit();
    }
    return true;
  }
  dropTable(table_name) {
    this.tableExistsWarn(table_name);
    this._dropTable(table_name);
  }
  truncate(table_name) {
    this.tableExistsWarn(table_name);
    this._truncate(table_name);
  }
  alterTable(table_name, new_fields, default_values) {
    var result2 = false;
    if (!this.validateName(table_name)) {
      error("The database name '" + table_name + "' contains invalid characters");
    } else {
      if (typeof new_fields === "object") {
        var is_valid = true;
        var i2;
        for (i2 = 0; i2 < new_fields.length; i2++) {
          if (!this.validateName(new_fields[i2])) {
            is_valid = false;
            break;
          }
        }
        if (is_valid) {
          var fields_literal = {};
          for (i2 = 0; i2 < new_fields.length; i2++) {
            fields_literal[new_fields[i2]] = true;
          }
          delete fields_literal["ID"];
          new_fields = [];
          for (var field in fields_literal) {
            if (fields_literal.hasOwnProperty(field)) {
              new_fields.push(field);
            }
          }
          this._alterTable(table_name, new_fields, default_values);
          result2 = true;
        } else {
          this.error("One or more field names in the table definition contains invalid characters");
        }
      } else if (typeof new_fields === "string") {
        if (this.validateName(new_fields)) {
          var new_fields_array = [];
          new_fields_array.push(new_fields);
          this._alterTable(table_name, new_fields_array, default_values);
          result2 = true;
        } else {
          this.error("One or more field names in the table definition contains invalid characters");
        }
      }
    }
    return result2;
  }
  rowCount(table_name) {
    this.tableExistsWarn(table_name);
    return this._rowCount(table_name);
  }
  insert(table_name, data) {
    this.tableExistsWarn(table_name);
    return this._insert(table_name, this.validateData(table_name, data));
  }
  insertOrUpdate(table_name, query, data) {
    this.tableExistsWarn(table_name);
    var result_ids = [];
    if (!query) {
      result_ids = this.getIDs(table_name);
    } else if (typeof query === "object") {
      result_ids = this.queryByValues(table_name, this.validFields(table_name, query));
    } else if (typeof query === "function") {
      result_ids = this.queryByFunction(table_name, query);
    }
    if (result_ids.length === 0) {
      return this._insert(table_name, this.validateData(table_name, data));
    } else {
      var ids = [];
      this._update(table_name, result_ids, function(o) {
        ids.push(o.ID);
        return data;
      });
      return ids;
    }
  }
  update(table_name, query, update_function) {
    this.tableExistsWarn(table_name);
    var result_ids = [];
    if (!query) {
      result_ids = this.getIDs(table_name);
    } else if (typeof query === "object") {
      result_ids = this.queryByValues(table_name, this.validFields(table_name, query));
    } else if (typeof query === "function") {
      result_ids = this.queryByFunction(table_name, query);
    }
    return this._update(table_name, result_ids, update_function);
  }
  query(table_name, query, limit, start, sort, distinct) {
    this.tableExistsWarn(table_name);
    var result_ids = [];
    if (!query) {
      result_ids = this.getIDs(table_name, limit, start);
    } else if (typeof query === "object") {
      result_ids = this.queryByValues(table_name, this.validFields(table_name, query), limit, start);
    } else if (typeof query === "function") {
      result_ids = this.queryByFunction(table_name, query, limit, start);
    }
    return this.select(table_name, result_ids, start, limit, sort, distinct);
  }
  queryAll(table_name, params) {
    if (!params) {
      return this.query(table_name);
    } else {
      return this.query(
        table_name,
        params.hasOwnProperty("query") ? params.query : null,
        params.hasOwnProperty("limit") ? params.limit : null,
        params.hasOwnProperty("start") ? params.start : null,
        params.hasOwnProperty("sort") ? params.sort : null,
        params.hasOwnProperty("distinct") ? params.distinct : null
      );
    }
  }
  deleteRows(table_name, query) {
    tableExistsWarn(table_name);
    var result_ids = [];
    if (!query) {
      result_ids = this.getIDs(table_name);
    } else if (typeof query === "object") {
      result_ids = this.queryByValues(table_name, this.validFields(table_name, query));
    } else if (typeof query === "function") {
      result_ids = this.queryByFunction(table_name, query);
    }
    return this._deleteRows(table_name, result_ids);
  }
};

// node_modules/axios/lib/helpers/bind.js
function bind2(fn, thisArg) {
  return function wrap2() {
    return fn.apply(thisArg, arguments);
  };
}

// node_modules/axios/lib/utils.js
var { toString: toString3 } = Object.prototype;
var { getPrototypeOf } = Object;
var kindOf = ((cache2) => (thing) => {
  const str = toString3.call(thing);
  return cache2[str] || (cache2[str] = str.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null));
var kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type;
};
var typeOfTest = (type) => (thing) => typeof thing === type;
var { isArray: isArray2 } = Array;
var isUndefined2 = typeOfTest("undefined");
function isBuffer(val) {
  return val !== null && !isUndefined2(val) && val.constructor !== null && !isUndefined2(val.constructor) && isFunction2(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}
var isArrayBuffer2 = kindOfTest("ArrayBuffer");
function isArrayBufferView(val) {
  let result2;
  if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
    result2 = ArrayBuffer.isView(val);
  } else {
    result2 = val && val.buffer && isArrayBuffer2(val.buffer);
  }
  return result2;
}
var isString2 = typeOfTest("string");
var isFunction2 = typeOfTest("function");
var isNumber2 = typeOfTest("number");
var isObject2 = (thing) => thing !== null && typeof thing === "object";
var isBoolean2 = (thing) => thing === true || thing === false;
var isPlainObject = (val) => {
  if (kindOf(val) !== "object") {
    return false;
  }
  const prototype3 = getPrototypeOf(val);
  return (prototype3 === null || prototype3 === Object.prototype || Object.getPrototypeOf(prototype3) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
};
var isDate2 = kindOfTest("Date");
var isFile = kindOfTest("File");
var isBlob = kindOfTest("Blob");
var isFileList = kindOfTest("FileList");
var isStream = (val) => isObject2(val) && isFunction2(val.pipe);
var isFormData = (thing) => {
  const pattern = "[object FormData]";
  return thing && (typeof FormData === "function" && thing instanceof FormData || toString3.call(thing) === pattern || isFunction2(thing.toString) && thing.toString() === pattern);
};
var isURLSearchParams = kindOfTest("URLSearchParams");
var trim = (str) => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function forEach(obj, fn, { allOwnKeys = false } = {}) {
  if (obj === null || typeof obj === "undefined") {
    return;
  }
  let i2;
  let l;
  if (typeof obj !== "object") {
    obj = [obj];
  }
  if (isArray2(obj)) {
    for (i2 = 0, l = obj.length; i2 < l; i2++) {
      fn.call(null, obj[i2], i2, obj);
    }
  } else {
    const keys2 = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys2.length;
    let key;
    for (i2 = 0; i2 < len; i2++) {
      key = keys2[i2];
      fn.call(null, obj[key], key, obj);
    }
  }
}
function findKey2(obj, key) {
  key = key.toLowerCase();
  const keys2 = Object.keys(obj);
  let i2 = keys2.length;
  let _key;
  while (i2-- > 0) {
    _key = keys2[i2];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}
var _global = typeof self === "undefined" ? typeof global === "undefined" ? void 0 : global : self;
var isContextDefined = (context) => !isUndefined2(context) && context !== _global;
function merge() {
  const { caseless } = isContextDefined(this) && this || {};
  const result2 = {};
  const assignValue = (val, key) => {
    const targetKey = caseless && findKey2(result2, key) || key;
    if (isPlainObject(result2[targetKey]) && isPlainObject(val)) {
      result2[targetKey] = merge(result2[targetKey], val);
    } else if (isPlainObject(val)) {
      result2[targetKey] = merge({}, val);
    } else if (isArray2(val)) {
      result2[targetKey] = val.slice();
    } else {
      result2[targetKey] = val;
    }
  };
  for (let i2 = 0, l = arguments.length; i2 < l; i2++) {
    arguments[i2] && forEach(arguments[i2], assignValue);
  }
  return result2;
}
var extend2 = (a, b, thisArg, { allOwnKeys } = {}) => {
  forEach(b, (val, key) => {
    if (thisArg && isFunction2(val)) {
      a[key] = bind2(val, thisArg);
    } else {
      a[key] = val;
    }
  }, { allOwnKeys });
  return a;
};
var stripBOM = (content) => {
  if (content.charCodeAt(0) === 65279) {
    content = content.slice(1);
  }
  return content;
};
var inherits = (constructor, superConstructor, props, descriptors2) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors2);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, "super", {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
};
var toFlatObject = (sourceObj, destObj, filter3, propFilter) => {
  let props;
  let i2;
  let prop;
  const merged = {};
  destObj = destObj || {};
  if (sourceObj == null)
    return destObj;
  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i2 = props.length;
    while (i2-- > 0) {
      prop = props[i2];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter3 !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter3 || filter3(sourceObj, destObj)) && sourceObj !== Object.prototype);
  return destObj;
};
var endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === void 0 || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
};
var toArray2 = (thing) => {
  if (!thing)
    return null;
  if (isArray2(thing))
    return thing;
  let i2 = thing.length;
  if (!isNumber2(i2))
    return null;
  const arr = new Array(i2);
  while (i2-- > 0) {
    arr[i2] = thing[i2];
  }
  return arr;
};
var isTypedArray2 = ((TypedArray) => {
  return (thing) => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
var forEachEntry = (obj, fn) => {
  const generator = obj && obj[Symbol.iterator];
  const iterator = generator.call(obj);
  let result2;
  while ((result2 = iterator.next()) && !result2.done) {
    const pair = result2.value;
    fn.call(obj, pair[0], pair[1]);
  }
};
var matchAll = (regExp, str) => {
  let matches;
  const arr = [];
  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }
  return arr;
};
var isHTMLForm = kindOfTest("HTMLFormElement");
var toCamelCase = (str) => {
  return str.toLowerCase().replace(
    /[_-\s]([a-z\d])(\w*)/g,
    function replacer(m, p1, p2) {
      return p1.toUpperCase() + p2;
    }
  );
};
var hasOwnProperty2 = (({ hasOwnProperty: hasOwnProperty3 }) => (obj, prop) => hasOwnProperty3.call(obj, prop))(Object.prototype);
var isRegExp2 = kindOfTest("RegExp");
var reduceDescriptors = (obj, reducer) => {
  const descriptors2 = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};
  forEach(descriptors2, (descriptor, name) => {
    if (reducer(descriptor, name, obj) !== false) {
      reducedDescriptors[name] = descriptor;
    }
  });
  Object.defineProperties(obj, reducedDescriptors);
};
var freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    if (isFunction2(obj) && ["arguments", "caller", "callee"].indexOf(name) !== -1) {
      return false;
    }
    const value2 = obj[name];
    if (!isFunction2(value2))
      return;
    descriptor.enumerable = false;
    if ("writable" in descriptor) {
      descriptor.writable = false;
      return;
    }
    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error("Can not rewrite read-only method '" + name + "'");
      };
    }
  });
};
var toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};
  const define = (arr) => {
    arr.forEach((value2) => {
      obj[value2] = true;
    });
  };
  isArray2(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
  return obj;
};
var noop2 = () => {
};
var toFiniteNumber = (value2, defaultValue) => {
  value2 = +value2;
  return Number.isFinite(value2) ? value2 : defaultValue;
};
var toJSONObject = (obj) => {
  const stack = new Array(10);
  const visit = (source, i2) => {
    if (isObject2(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }
      if (!("toJSON" in source)) {
        stack[i2] = source;
        const target = isArray2(source) ? [] : {};
        forEach(source, (value2, key) => {
          const reducedValue = visit(value2, i2 + 1);
          !isUndefined2(reducedValue) && (target[key] = reducedValue);
        });
        stack[i2] = void 0;
        return target;
      }
    }
    return source;
  };
  return visit(obj, 0);
};
var utils_default = {
  isArray: isArray2,
  isArrayBuffer: isArrayBuffer2,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString: isString2,
  isNumber: isNumber2,
  isBoolean: isBoolean2,
  isObject: isObject2,
  isPlainObject,
  isUndefined: isUndefined2,
  isDate: isDate2,
  isFile,
  isBlob,
  isRegExp: isRegExp2,
  isFunction: isFunction2,
  isStream,
  isURLSearchParams,
  isTypedArray: isTypedArray2,
  isFileList,
  forEach,
  merge,
  extend: extend2,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray: toArray2,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty: hasOwnProperty2,
  hasOwnProp: hasOwnProperty2,
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop: noop2,
  toFiniteNumber,
  findKey: findKey2,
  global: _global,
  isContextDefined,
  toJSONObject
};

// node_modules/axios/lib/core/AxiosError.js
function AxiosError(message, code, config, request, response) {
  Error.call(this);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = new Error().stack;
  }
  this.message = message;
  this.name = "AxiosError";
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  response && (this.response = response);
}
utils_default.inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: utils_default.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
var prototype = AxiosError.prototype;
var descriptors = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
].forEach((code) => {
  descriptors[code] = { value: code };
});
Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype, "isAxiosError", { value: true });
AxiosError.from = (error2, code, config, request, response, customProps) => {
  const axiosError = Object.create(prototype);
  utils_default.toFlatObject(error2, axiosError, function filter3(obj) {
    return obj !== Error.prototype;
  }, (prop) => {
    return prop !== "isAxiosError";
  });
  AxiosError.call(axiosError, error2.message, code, config, request, response);
  axiosError.cause = error2;
  axiosError.name = error2.name;
  customProps && Object.assign(axiosError, customProps);
  return axiosError;
};
var AxiosError_default = AxiosError;

// node_modules/axios/lib/env/classes/FormData.js
var import_form_data = __toESM(require_browser(), 1);
var FormData_default = import_form_data.default;

// node_modules/axios/lib/helpers/toFormData.js
function isVisitable(thing) {
  return utils_default.isPlainObject(thing) || utils_default.isArray(thing);
}
function removeBrackets(key) {
  return utils_default.endsWith(key, "[]") ? key.slice(0, -2) : key;
}
function renderKey(path, key, dots) {
  if (!path)
    return key;
  return path.concat(key).map(function each2(token, i2) {
    token = removeBrackets(token);
    return !dots && i2 ? "[" + token + "]" : token;
  }).join(dots ? "." : "");
}
function isFlatArray(arr) {
  return utils_default.isArray(arr) && !arr.some(isVisitable);
}
var predicates = utils_default.toFlatObject(utils_default, {}, null, function filter2(prop) {
  return /^is[A-Z]/.test(prop);
});
function isSpecCompliant(thing) {
  return thing && utils_default.isFunction(thing.append) && thing[Symbol.toStringTag] === "FormData" && thing[Symbol.iterator];
}
function toFormData(obj, formData, options) {
  if (!utils_default.isObject(obj)) {
    throw new TypeError("target must be an object");
  }
  formData = formData || new (FormData_default || FormData)();
  options = utils_default.toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    return !utils_default.isUndefined(source[option]);
  });
  const metaTokens = options.metaTokens;
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
  const useBlob = _Blob && isSpecCompliant(formData);
  if (!utils_default.isFunction(visitor)) {
    throw new TypeError("visitor must be a function");
  }
  function convertValue(value2) {
    if (value2 === null)
      return "";
    if (utils_default.isDate(value2)) {
      return value2.toISOString();
    }
    if (!useBlob && utils_default.isBlob(value2)) {
      throw new AxiosError_default("Blob is not supported. Use a Buffer instead.");
    }
    if (utils_default.isArrayBuffer(value2) || utils_default.isTypedArray(value2)) {
      return useBlob && typeof Blob === "function" ? new Blob([value2]) : Buffer.from(value2);
    }
    return value2;
  }
  function defaultVisitor(value2, key, path) {
    let arr = value2;
    if (value2 && !path && typeof value2 === "object") {
      if (utils_default.endsWith(key, "{}")) {
        key = metaTokens ? key : key.slice(0, -2);
        value2 = JSON.stringify(value2);
      } else if (utils_default.isArray(value2) && isFlatArray(value2) || (utils_default.isFileList(value2) || utils_default.endsWith(key, "[]") && (arr = utils_default.toArray(value2)))) {
        key = removeBrackets(key);
        arr.forEach(function each2(el, index) {
          !(utils_default.isUndefined(el) || el === null) && formData.append(
            indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + "[]",
            convertValue(el)
          );
        });
        return false;
      }
    }
    if (isVisitable(value2)) {
      return true;
    }
    formData.append(renderKey(path, key, dots), convertValue(value2));
    return false;
  }
  const stack = [];
  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });
  function build(value2, path) {
    if (utils_default.isUndefined(value2))
      return;
    if (stack.indexOf(value2) !== -1) {
      throw Error("Circular reference detected in " + path.join("."));
    }
    stack.push(value2);
    utils_default.forEach(value2, function each2(el, key) {
      const result2 = !(utils_default.isUndefined(el) || el === null) && visitor.call(
        formData,
        el,
        utils_default.isString(key) ? key.trim() : key,
        path,
        exposedHelpers
      );
      if (result2 === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });
    stack.pop();
  }
  if (!utils_default.isObject(obj)) {
    throw new TypeError("data must be an object");
  }
  build(obj);
  return formData;
}
var toFormData_default = toFormData;

// node_modules/axios/lib/helpers/AxiosURLSearchParams.js
function encode3(str) {
  const charMap = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}
function AxiosURLSearchParams(params, options) {
  this._pairs = [];
  params && toFormData_default(params, this, options);
}
var prototype2 = AxiosURLSearchParams.prototype;
prototype2.append = function append(name, value2) {
  this._pairs.push([name, value2]);
};
prototype2.toString = function toString4(encoder) {
  const _encode = encoder ? function(value2) {
    return encoder.call(this, value2, encode3);
  } : encode3;
  return this._pairs.map(function each2(pair) {
    return _encode(pair[0]) + "=" + _encode(pair[1]);
  }, "").join("&");
};
var AxiosURLSearchParams_default = AxiosURLSearchParams;

// node_modules/axios/lib/helpers/buildURL.js
function encode4(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function buildURL(url2, params, options) {
  if (!params) {
    return url2;
  }
  const _encode = options && options.encode || encode4;
  const serializeFn = options && options.serialize;
  let serializedParams;
  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = utils_default.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams_default(params, options).toString(_encode);
  }
  if (serializedParams) {
    const hashmarkIndex = url2.indexOf("#");
    if (hashmarkIndex !== -1) {
      url2 = url2.slice(0, hashmarkIndex);
    }
    url2 += (url2.indexOf("?") === -1 ? "?" : "&") + serializedParams;
  }
  return url2;
}

// node_modules/axios/lib/core/InterceptorManager.js
var InterceptorManager = class {
  constructor() {
    this.handlers = [];
  }
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  }
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }
  forEach(fn) {
    utils_default.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  }
};
var InterceptorManager_default = InterceptorManager;

// node_modules/axios/lib/defaults/transitional.js
var transitional_default = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};

// node_modules/axios/lib/platform/browser/classes/URLSearchParams.js
var URLSearchParams_default = typeof URLSearchParams !== "undefined" ? URLSearchParams : AxiosURLSearchParams_default;

// node_modules/axios/lib/platform/browser/classes/FormData.js
var FormData_default2 = FormData;

// node_modules/axios/lib/platform/browser/index.js
var isStandardBrowserEnv = (() => {
  let product;
  if (typeof navigator !== "undefined" && ((product = navigator.product) === "ReactNative" || product === "NativeScript" || product === "NS")) {
    return false;
  }
  return typeof window !== "undefined" && typeof document !== "undefined";
})();
var isStandardBrowserWebWorkerEnv = (() => {
  return typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
})();
var browser_default = {
  isBrowser: true,
  classes: {
    URLSearchParams: URLSearchParams_default,
    FormData: FormData_default2,
    Blob
  },
  isStandardBrowserEnv,
  isStandardBrowserWebWorkerEnv,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};

// node_modules/axios/lib/helpers/toURLEncodedForm.js
function toURLEncodedForm(data, options) {
  return toFormData_default(data, new browser_default.classes.URLSearchParams(), Object.assign({
    visitor: function(value2, key, path, helpers) {
      if (browser_default.isNode && utils_default.isBuffer(value2)) {
        this.append(key, value2.toString("base64"));
        return false;
      }
      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}

// node_modules/axios/lib/helpers/formDataToJSON.js
function parsePropPath(name) {
  return utils_default.matchAll(/\w+|\[(\w*)]/g, name).map((match) => {
    return match[0] === "[]" ? "" : match[1] || match[0];
  });
}
function arrayToObject(arr) {
  const obj = {};
  const keys2 = Object.keys(arr);
  let i2;
  const len = keys2.length;
  let key;
  for (i2 = 0; i2 < len; i2++) {
    key = keys2[i2];
    obj[key] = arr[key];
  }
  return obj;
}
function formDataToJSON(formData) {
  function buildPath(path, value2, target, index) {
    let name = path[index++];
    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && utils_default.isArray(target) ? target.length : name;
    if (isLast) {
      if (utils_default.hasOwnProp(target, name)) {
        target[name] = [target[name], value2];
      } else {
        target[name] = value2;
      }
      return !isNumericKey;
    }
    if (!target[name] || !utils_default.isObject(target[name])) {
      target[name] = [];
    }
    const result2 = buildPath(path, value2, target[name], index);
    if (result2 && utils_default.isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }
    return !isNumericKey;
  }
  if (utils_default.isFormData(formData) && utils_default.isFunction(formData.entries)) {
    const obj = {};
    utils_default.forEachEntry(formData, (name, value2) => {
      buildPath(parsePropPath(name), value2, obj, 0);
    });
    return obj;
  }
  return null;
}
var formDataToJSON_default = formDataToJSON;

// node_modules/axios/lib/defaults/index.js
var DEFAULT_CONTENT_TYPE = {
  "Content-Type": void 0
};
function stringifySafely(rawValue, parser, encoder) {
  if (utils_default.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils_default.trim(rawValue);
    } catch (e) {
      if (e.name !== "SyntaxError") {
        throw e;
      }
    }
  }
  return (encoder || JSON.stringify)(rawValue);
}
var defaults2 = {
  transitional: transitional_default,
  adapter: ["xhr", "http"],
  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || "";
    const hasJSONContentType = contentType.indexOf("application/json") > -1;
    const isObjectPayload = utils_default.isObject(data);
    if (isObjectPayload && utils_default.isHTMLForm(data)) {
      data = new FormData(data);
    }
    const isFormData2 = utils_default.isFormData(data);
    if (isFormData2) {
      if (!hasJSONContentType) {
        return data;
      }
      return hasJSONContentType ? JSON.stringify(formDataToJSON_default(data)) : data;
    }
    if (utils_default.isArrayBuffer(data) || utils_default.isBuffer(data) || utils_default.isStream(data) || utils_default.isFile(data) || utils_default.isBlob(data)) {
      return data;
    }
    if (utils_default.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils_default.isURLSearchParams(data)) {
      headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
      return data.toString();
    }
    let isFileList2;
    if (isObjectPayload) {
      if (contentType.indexOf("application/x-www-form-urlencoded") > -1) {
        return toURLEncodedForm(data, this.formSerializer).toString();
      }
      if ((isFileList2 = utils_default.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
        const _FormData = this.env && this.env.FormData;
        return toFormData_default(
          isFileList2 ? { "files[]": data } : data,
          _FormData && new _FormData(),
          this.formSerializer
        );
      }
    }
    if (isObjectPayload || hasJSONContentType) {
      headers.setContentType("application/json", false);
      return stringifySafely(data);
    }
    return data;
  }],
  transformResponse: [function transformResponse(data) {
    const transitional2 = this.transitional || defaults2.transitional;
    const forcedJSONParsing = transitional2 && transitional2.forcedJSONParsing;
    const JSONRequested = this.responseType === "json";
    if (data && utils_default.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
      const silentJSONParsing = transitional2 && transitional2.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === "SyntaxError") {
            throw AxiosError_default.from(e, AxiosError_default.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }
    return data;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: browser_default.classes.FormData,
    Blob: browser_default.classes.Blob
  },
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },
  headers: {
    common: {
      "Accept": "application/json, text/plain, */*"
    }
  }
};
utils_default.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
  defaults2.headers[method] = {};
});
utils_default.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
  defaults2.headers[method] = utils_default.merge(DEFAULT_CONTENT_TYPE);
});
var defaults_default = defaults2;

// node_modules/axios/lib/helpers/parseHeaders.js
var ignoreDuplicateOf = utils_default.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]);
var parseHeaders_default = (rawHeaders) => {
  const parsed = {};
  let key;
  let val;
  let i2;
  rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
    i2 = line.indexOf(":");
    key = line.substring(0, i2).trim().toLowerCase();
    val = line.substring(i2 + 1).trim();
    if (!key || parsed[key] && ignoreDuplicateOf[key]) {
      return;
    }
    if (key === "set-cookie") {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
    }
  });
  return parsed;
};

// node_modules/axios/lib/core/AxiosHeaders.js
var $internals = Symbol("internals");
function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}
function normalizeValue(value2) {
  if (value2 === false || value2 == null) {
    return value2;
  }
  return utils_default.isArray(value2) ? value2.map(normalizeValue) : String(value2);
}
function parseTokens(str) {
  const tokens = /* @__PURE__ */ Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;
  while (match = tokensRE.exec(str)) {
    tokens[match[1]] = match[2];
  }
  return tokens;
}
function isValidHeaderName(str) {
  return /^[-_a-zA-Z]+$/.test(str.trim());
}
function matchHeaderValue(context, value2, header, filter3) {
  if (utils_default.isFunction(filter3)) {
    return filter3.call(this, value2, header);
  }
  if (!utils_default.isString(value2))
    return;
  if (utils_default.isString(filter3)) {
    return value2.indexOf(filter3) !== -1;
  }
  if (utils_default.isRegExp(filter3)) {
    return filter3.test(value2);
  }
}
function formatHeader(header) {
  return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
    return char.toUpperCase() + str;
  });
}
function buildAccessors(obj, header) {
  const accessorName = utils_default.toCamelCase(" " + header);
  ["get", "set", "has"].forEach((methodName) => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}
var AxiosHeaders = class {
  constructor(headers) {
    headers && this.set(headers);
  }
  set(header, valueOrRewrite, rewrite) {
    const self2 = this;
    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);
      if (!lHeader) {
        throw new Error("header name must be a non-empty string");
      }
      const key = utils_default.findKey(self2, lHeader);
      if (!key || self2[key] === void 0 || _rewrite === true || _rewrite === void 0 && self2[key] !== false) {
        self2[key || _header] = normalizeValue(_value);
      }
    }
    const setHeaders = (headers, _rewrite) => utils_default.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
    if (utils_default.isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite);
    } else if (utils_default.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders(parseHeaders_default(header), valueOrRewrite);
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }
    return this;
  }
  get(header, parser) {
    header = normalizeHeader(header);
    if (header) {
      const key = utils_default.findKey(this, header);
      if (key) {
        const value2 = this[key];
        if (!parser) {
          return value2;
        }
        if (parser === true) {
          return parseTokens(value2);
        }
        if (utils_default.isFunction(parser)) {
          return parser.call(this, value2, key);
        }
        if (utils_default.isRegExp(parser)) {
          return parser.exec(value2);
        }
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(header, matcher2) {
    header = normalizeHeader(header);
    if (header) {
      const key = utils_default.findKey(this, header);
      return !!(key && (!matcher2 || matchHeaderValue(this, this[key], key, matcher2)));
    }
    return false;
  }
  delete(header, matcher2) {
    const self2 = this;
    let deleted = false;
    function deleteHeader(_header) {
      _header = normalizeHeader(_header);
      if (_header) {
        const key = utils_default.findKey(self2, _header);
        if (key && (!matcher2 || matchHeaderValue(self2, self2[key], key, matcher2))) {
          delete self2[key];
          deleted = true;
        }
      }
    }
    if (utils_default.isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }
    return deleted;
  }
  clear() {
    return Object.keys(this).forEach(this.delete.bind(this));
  }
  normalize(format) {
    const self2 = this;
    const headers = {};
    utils_default.forEach(this, (value2, header) => {
      const key = utils_default.findKey(headers, header);
      if (key) {
        self2[key] = normalizeValue(value2);
        delete self2[header];
        return;
      }
      const normalized = format ? formatHeader(header) : String(header).trim();
      if (normalized !== header) {
        delete self2[header];
      }
      self2[normalized] = normalizeValue(value2);
      headers[normalized] = true;
    });
    return this;
  }
  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }
  toJSON(asStrings) {
    const obj = /* @__PURE__ */ Object.create(null);
    utils_default.forEach(this, (value2, header) => {
      value2 != null && value2 !== false && (obj[header] = asStrings && utils_default.isArray(value2) ? value2.join(", ") : value2);
    });
    return obj;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([header, value2]) => header + ": " + value2).join("\n");
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }
  static concat(first2, ...targets) {
    const computed = new this(first2);
    targets.forEach((target) => computed.set(target));
    return computed;
  }
  static accessor(header) {
    const internals = this[$internals] = this[$internals] = {
      accessors: {}
    };
    const accessors = internals.accessors;
    const prototype3 = this.prototype;
    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);
      if (!accessors[lHeader]) {
        buildAccessors(prototype3, _header);
        accessors[lHeader] = true;
      }
    }
    utils_default.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
    return this;
  }
};
AxiosHeaders.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent"]);
utils_default.freezeMethods(AxiosHeaders.prototype);
utils_default.freezeMethods(AxiosHeaders);
var AxiosHeaders_default = AxiosHeaders;

// node_modules/axios/lib/core/transformData.js
function transformData(fns, response) {
  const config = this || defaults_default;
  const context = response || config;
  const headers = AxiosHeaders_default.from(context.headers);
  let data = context.data;
  utils_default.forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : void 0);
  });
  headers.normalize();
  return data;
}

// node_modules/axios/lib/cancel/isCancel.js
function isCancel(value2) {
  return !!(value2 && value2.__CANCEL__);
}

// node_modules/axios/lib/cancel/CanceledError.js
function CanceledError(message, config, request) {
  AxiosError_default.call(this, message == null ? "canceled" : message, AxiosError_default.ERR_CANCELED, config, request);
  this.name = "CanceledError";
}
utils_default.inherits(CanceledError, AxiosError_default, {
  __CANCEL__: true
});
var CanceledError_default = CanceledError;

// node_modules/axios/lib/helpers/null.js
var null_default = null;

// node_modules/axios/lib/core/settle.js
function settle(resolve, reject2, response) {
  const validateStatus2 = response.config.validateStatus;
  if (!response.status || !validateStatus2 || validateStatus2(response.status)) {
    resolve(response);
  } else {
    reject2(new AxiosError_default(
      "Request failed with status code " + response.status,
      [AxiosError_default.ERR_BAD_REQUEST, AxiosError_default.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
}

// node_modules/axios/lib/helpers/cookies.js
var cookies_default = browser_default.isStandardBrowserEnv ? function standardBrowserEnv() {
  return {
    write: function write(name, value2, expires, path, domain, secure) {
      const cookie = [];
      cookie.push(name + "=" + encodeURIComponent(value2));
      if (utils_default.isNumber(expires)) {
        cookie.push("expires=" + new Date(expires).toGMTString());
      }
      if (utils_default.isString(path)) {
        cookie.push("path=" + path);
      }
      if (utils_default.isString(domain)) {
        cookie.push("domain=" + domain);
      }
      if (secure === true) {
        cookie.push("secure");
      }
      document.cookie = cookie.join("; ");
    },
    read: function read(name) {
      const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
      return match ? decodeURIComponent(match[3]) : null;
    },
    remove: function remove(name) {
      this.write(name, "", Date.now() - 864e5);
    }
  };
}() : function nonStandardBrowserEnv() {
  return {
    write: function write() {
    },
    read: function read() {
      return null;
    },
    remove: function remove() {
    }
  };
}();

// node_modules/axios/lib/helpers/isAbsoluteURL.js
function isAbsoluteURL(url2) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url2);
}

// node_modules/axios/lib/helpers/combineURLs.js
function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
}

// node_modules/axios/lib/core/buildFullPath.js
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}

// node_modules/axios/lib/helpers/isURLSameOrigin.js
var isURLSameOrigin_default = browser_default.isStandardBrowserEnv ? function standardBrowserEnv2() {
  const msie = /(msie|trident)/i.test(navigator.userAgent);
  const urlParsingNode = document.createElement("a");
  let originURL;
  function resolveURL(url2) {
    let href = url2;
    if (msie) {
      urlParsingNode.setAttribute("href", href);
      href = urlParsingNode.href;
    }
    urlParsingNode.setAttribute("href", href);
    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
    };
  }
  originURL = resolveURL(window.location.href);
  return function isURLSameOrigin(requestURL) {
    const parsed = utils_default.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() : function nonStandardBrowserEnv2() {
  return function isURLSameOrigin() {
    return true;
  };
}();

// node_modules/axios/lib/helpers/parseProtocol.js
function parseProtocol(url2) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url2);
  return match && match[1] || "";
}

// node_modules/axios/lib/helpers/speedometer.js
function speedometer(samplesCount, min2) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;
  min2 = min2 !== void 0 ? min2 : 1e3;
  return function push2(chunkLength) {
    const now2 = Date.now();
    const startedAt = timestamps[tail];
    if (!firstSampleTS) {
      firstSampleTS = now2;
    }
    bytes[head] = chunkLength;
    timestamps[head] = now2;
    let i2 = tail;
    let bytesCount = 0;
    while (i2 !== head) {
      bytesCount += bytes[i2++];
      i2 = i2 % samplesCount;
    }
    head = (head + 1) % samplesCount;
    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }
    if (now2 - firstSampleTS < min2) {
      return;
    }
    const passed = startedAt && now2 - startedAt;
    return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
  };
}
var speedometer_default = speedometer;

// node_modules/axios/lib/adapters/xhr.js
function progressEventReducer(listener, isDownloadStream) {
  let bytesNotified = 0;
  const _speedometer = speedometer_default(50, 250);
  return (e) => {
    const loaded = e.loaded;
    const total = e.lengthComputable ? e.total : void 0;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;
    bytesNotified = loaded;
    const data = {
      loaded,
      total,
      progress: total ? loaded / total : void 0,
      bytes: progressBytes,
      rate: rate ? rate : void 0,
      estimated: rate && total && inRange ? (total - loaded) / rate : void 0,
      event: e
    };
    data[isDownloadStream ? "download" : "upload"] = true;
    listener(data);
  };
}
var isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
var xhr_default = isXHRAdapterSupported && function(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject2) {
    let requestData = config.data;
    const requestHeaders = AxiosHeaders_default.from(config.headers).normalize();
    const responseType = config.responseType;
    let onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }
      if (config.signal) {
        config.signal.removeEventListener("abort", onCanceled);
      }
    }
    if (utils_default.isFormData(requestData) && (browser_default.isStandardBrowserEnv || browser_default.isStandardBrowserWebWorkerEnv)) {
      requestHeaders.setContentType(false);
    }
    let request = new XMLHttpRequest();
    if (config.auth) {
      const username = config.auth.username || "";
      const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
      requestHeaders.set("Authorization", "Basic " + btoa(username + ":" + password));
    }
    const fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
    request.timeout = config.timeout;
    function onloadend() {
      if (!request) {
        return;
      }
      const responseHeaders = AxiosHeaders_default.from(
        "getAllResponseHeaders" in request && request.getAllResponseHeaders()
      );
      const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };
      settle(function _resolve(value2) {
        resolve(value2);
        done();
      }, function _reject(err) {
        reject2(err);
        done();
      }, response);
      request = null;
    }
    if ("onloadend" in request) {
      request.onloadend = onloadend;
    } else {
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
          return;
        }
        setTimeout(onloadend);
      };
    }
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }
      reject2(new AxiosError_default("Request aborted", AxiosError_default.ECONNABORTED, config, request));
      request = null;
    };
    request.onerror = function handleError() {
      reject2(new AxiosError_default("Network Error", AxiosError_default.ERR_NETWORK, config, request));
      request = null;
    };
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
      const transitional2 = config.transitional || transitional_default;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject2(new AxiosError_default(
        timeoutErrorMessage,
        transitional2.clarifyTimeoutError ? AxiosError_default.ETIMEDOUT : AxiosError_default.ECONNABORTED,
        config,
        request
      ));
      request = null;
    };
    if (browser_default.isStandardBrowserEnv) {
      const xsrfValue = (config.withCredentials || isURLSameOrigin_default(fullPath)) && config.xsrfCookieName && cookies_default.read(config.xsrfCookieName);
      if (xsrfValue) {
        requestHeaders.set(config.xsrfHeaderName, xsrfValue);
      }
    }
    requestData === void 0 && requestHeaders.setContentType(null);
    if ("setRequestHeader" in request) {
      utils_default.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }
    if (!utils_default.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }
    if (responseType && responseType !== "json") {
      request.responseType = config.responseType;
    }
    if (typeof config.onDownloadProgress === "function") {
      request.addEventListener("progress", progressEventReducer(config.onDownloadProgress, true));
    }
    if (typeof config.onUploadProgress === "function" && request.upload) {
      request.upload.addEventListener("progress", progressEventReducer(config.onUploadProgress));
    }
    if (config.cancelToken || config.signal) {
      onCanceled = (cancel) => {
        if (!request) {
          return;
        }
        reject2(!cancel || cancel.type ? new CanceledError_default(null, config, request) : cancel);
        request.abort();
        request = null;
      };
      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
      }
    }
    const protocol4 = parseProtocol(fullPath);
    if (protocol4 && browser_default.protocols.indexOf(protocol4) === -1) {
      reject2(new AxiosError_default("Unsupported protocol " + protocol4 + ":", AxiosError_default.ERR_BAD_REQUEST, config));
      return;
    }
    request.send(requestData || null);
  });
};

// node_modules/axios/lib/adapters/adapters.js
var knownAdapters = {
  http: null_default,
  xhr: xhr_default
};
utils_default.forEach(knownAdapters, (fn, value2) => {
  if (fn) {
    try {
      Object.defineProperty(fn, "name", { value: value2 });
    } catch (e) {
    }
    Object.defineProperty(fn, "adapterName", { value: value2 });
  }
});
var adapters_default = {
  getAdapter: (adapters) => {
    adapters = utils_default.isArray(adapters) ? adapters : [adapters];
    const { length: length2 } = adapters;
    let nameOrAdapter;
    let adapter;
    for (let i2 = 0; i2 < length2; i2++) {
      nameOrAdapter = adapters[i2];
      if (adapter = utils_default.isString(nameOrAdapter) ? knownAdapters[nameOrAdapter.toLowerCase()] : nameOrAdapter) {
        break;
      }
    }
    if (!adapter) {
      if (adapter === false) {
        throw new AxiosError_default(
          `Adapter ${nameOrAdapter} is not supported by the environment`,
          "ERR_NOT_SUPPORT"
        );
      }
      throw new Error(
        utils_default.hasOwnProp(knownAdapters, nameOrAdapter) ? `Adapter '${nameOrAdapter}' is not available in the build` : `Unknown adapter '${nameOrAdapter}'`
      );
    }
    if (!utils_default.isFunction(adapter)) {
      throw new TypeError("adapter is not a function");
    }
    return adapter;
  },
  adapters: knownAdapters
};

// node_modules/axios/lib/core/dispatchRequest.js
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
  if (config.signal && config.signal.aborted) {
    throw new CanceledError_default(null, config);
  }
}
function dispatchRequest(config) {
  throwIfCancellationRequested(config);
  config.headers = AxiosHeaders_default.from(config.headers);
  config.data = transformData.call(
    config,
    config.transformRequest
  );
  if (["post", "put", "patch"].indexOf(config.method) !== -1) {
    config.headers.setContentType("application/x-www-form-urlencoded", false);
  }
  const adapter = adapters_default.getAdapter(config.adapter || defaults_default.adapter);
  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);
    response.data = transformData.call(
      config,
      config.transformResponse,
      response
    );
    response.headers = AxiosHeaders_default.from(response.headers);
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          config.transformResponse,
          reason.response
        );
        reason.response.headers = AxiosHeaders_default.from(reason.response.headers);
      }
    }
    return Promise.reject(reason);
  });
}

// node_modules/axios/lib/core/mergeConfig.js
var headersToObject = (thing) => thing instanceof AxiosHeaders_default ? thing.toJSON() : thing;
function mergeConfig(config1, config2) {
  config2 = config2 || {};
  const config = {};
  function getMergedValue(target, source, caseless) {
    if (utils_default.isPlainObject(target) && utils_default.isPlainObject(source)) {
      return utils_default.merge.call({ caseless }, target, source);
    } else if (utils_default.isPlainObject(source)) {
      return utils_default.merge({}, source);
    } else if (utils_default.isArray(source)) {
      return source.slice();
    }
    return source;
  }
  function mergeDeepProperties(a, b, caseless) {
    if (!utils_default.isUndefined(b)) {
      return getMergedValue(a, b, caseless);
    } else if (!utils_default.isUndefined(a)) {
      return getMergedValue(void 0, a, caseless);
    }
  }
  function valueFromConfig2(a, b) {
    if (!utils_default.isUndefined(b)) {
      return getMergedValue(void 0, b);
    }
  }
  function defaultToConfig2(a, b) {
    if (!utils_default.isUndefined(b)) {
      return getMergedValue(void 0, b);
    } else if (!utils_default.isUndefined(a)) {
      return getMergedValue(void 0, a);
    }
  }
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2) {
      return getMergedValue(a, b);
    } else if (prop in config1) {
      return getMergedValue(void 0, a);
    }
  }
  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), true)
  };
  utils_default.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    const merge2 = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge2(config1[prop], config2[prop], prop);
    utils_default.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config[prop] = configValue);
  });
  return config;
}

// node_modules/axios/lib/env/data.js
var VERSION2 = "1.2.1";

// node_modules/axios/lib/helpers/validator.js
var validators = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((type, i2) => {
  validators[type] = function validator(thing) {
    return typeof thing === type || "a" + (i2 < 1 ? "n " : " ") + type;
  };
});
var deprecatedWarnings = {};
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return "[Axios v" + VERSION2 + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
  }
  return (value2, opt, opts) => {
    if (validator === false) {
      throw new AxiosError_default(
        formatMessage(opt, " has been removed" + (version ? " in " + version : "")),
        AxiosError_default.ERR_DEPRECATED
      );
    }
    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      console.warn(
        formatMessage(
          opt,
          " has been deprecated since v" + version + " and will be removed in the near future"
        )
      );
    }
    return validator ? validator(value2, opt, opts) : true;
  };
};
function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== "object") {
    throw new AxiosError_default("options must be an object", AxiosError_default.ERR_BAD_OPTION_VALUE);
  }
  const keys2 = Object.keys(options);
  let i2 = keys2.length;
  while (i2-- > 0) {
    const opt = keys2[i2];
    const validator = schema[opt];
    if (validator) {
      const value2 = options[opt];
      const result2 = value2 === void 0 || validator(value2, opt, options);
      if (result2 !== true) {
        throw new AxiosError_default("option " + opt + " must be " + result2, AxiosError_default.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError_default("Unknown option " + opt, AxiosError_default.ERR_BAD_OPTION);
    }
  }
}
var validator_default = {
  assertOptions,
  validators
};

// node_modules/axios/lib/core/Axios.js
var validators2 = validator_default.validators;
var Axios = class {
  constructor(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new InterceptorManager_default(),
      response: new InterceptorManager_default()
    };
  }
  request(configOrUrl, config) {
    if (typeof configOrUrl === "string") {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }
    config = mergeConfig(this.defaults, config);
    const { transitional: transitional2, paramsSerializer, headers } = config;
    if (transitional2 !== void 0) {
      validator_default.assertOptions(transitional2, {
        silentJSONParsing: validators2.transitional(validators2.boolean),
        forcedJSONParsing: validators2.transitional(validators2.boolean),
        clarifyTimeoutError: validators2.transitional(validators2.boolean)
      }, false);
    }
    if (paramsSerializer !== void 0) {
      validator_default.assertOptions(paramsSerializer, {
        encode: validators2.function,
        serialize: validators2.function
      }, true);
    }
    config.method = (config.method || this.defaults.method || "get").toLowerCase();
    let contextHeaders;
    contextHeaders = headers && utils_default.merge(
      headers.common,
      headers[config.method]
    );
    contextHeaders && utils_default.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (method) => {
        delete headers[method];
      }
    );
    config.headers = AxiosHeaders_default.concat(contextHeaders, headers);
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
        return;
      }
      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });
    let promise;
    let i2 = 0;
    let len;
    if (!synchronousRequestInterceptors) {
      const chain2 = [dispatchRequest.bind(this), void 0];
      chain2.unshift.apply(chain2, requestInterceptorChain);
      chain2.push.apply(chain2, responseInterceptorChain);
      len = chain2.length;
      promise = Promise.resolve(config);
      while (i2 < len) {
        promise = promise.then(chain2[i2++], chain2[i2++]);
      }
      return promise;
    }
    len = requestInterceptorChain.length;
    let newConfig = config;
    i2 = 0;
    while (i2 < len) {
      const onFulfilled = requestInterceptorChain[i2++];
      const onRejected = requestInterceptorChain[i2++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error2) {
        onRejected.call(this, error2);
        break;
      }
    }
    try {
      promise = dispatchRequest.call(this, newConfig);
    } catch (error2) {
      return Promise.reject(error2);
    }
    i2 = 0;
    len = responseInterceptorChain.length;
    while (i2 < len) {
      promise = promise.then(responseInterceptorChain[i2++], responseInterceptorChain[i2++]);
    }
    return promise;
  }
  getUri(config) {
    config = mergeConfig(this.defaults, config);
    const fullPath = buildFullPath(config.baseURL, config.url);
    return buildURL(fullPath, config.params, config.paramsSerializer);
  }
};
utils_default.forEach(["delete", "get", "head", "options"], function forEachMethodNoData2(method) {
  Axios.prototype[method] = function(url2, config) {
    return this.request(mergeConfig(config || {}, {
      method,
      url: url2,
      data: (config || {}).data
    }));
  };
});
utils_default.forEach(["post", "put", "patch"], function forEachMethodWithData2(method) {
  function generateHTTPMethod(isForm) {
    return function httpMethod(url2, data, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        headers: isForm ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: url2,
        data
      }));
    };
  }
  Axios.prototype[method] = generateHTTPMethod();
  Axios.prototype[method + "Form"] = generateHTTPMethod(true);
});
var Axios_default = Axios;

// node_modules/axios/lib/cancel/CancelToken.js
var CancelToken = class {
  constructor(executor) {
    if (typeof executor !== "function") {
      throw new TypeError("executor must be a function.");
    }
    let resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });
    const token = this;
    this.promise.then((cancel) => {
      if (!token._listeners)
        return;
      let i2 = token._listeners.length;
      while (i2-- > 0) {
        token._listeners[i2](cancel);
      }
      token._listeners = null;
    });
    this.promise.then = (onfulfilled) => {
      let _resolve;
      const promise = new Promise((resolve) => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);
      promise.cancel = function reject2() {
        token.unsubscribe(_resolve);
      };
      return promise;
    };
    executor(function cancel(message, config, request) {
      if (token.reason) {
        return;
      }
      token.reason = new CanceledError_default(message, config, request);
      resolvePromise(token.reason);
    });
  }
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }
  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }
    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }
  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  }
};
var CancelToken_default = CancelToken;

// node_modules/axios/lib/helpers/spread.js
function spread(callback) {
  return function wrap2(arr) {
    return callback.apply(null, arr);
  };
}

// node_modules/axios/lib/helpers/isAxiosError.js
function isAxiosError(payload) {
  return utils_default.isObject(payload) && payload.isAxiosError === true;
}

// node_modules/axios/lib/axios.js
function createInstance(defaultConfig) {
  const context = new Axios_default(defaultConfig);
  const instance = bind2(Axios_default.prototype.request, context);
  utils_default.extend(instance, Axios_default.prototype, context, { allOwnKeys: true });
  utils_default.extend(instance, context, null, { allOwnKeys: true });
  instance.create = function create2(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };
  return instance;
}
var axios = createInstance(defaults_default);
axios.Axios = Axios_default;
axios.CanceledError = CanceledError_default;
axios.CancelToken = CancelToken_default;
axios.isCancel = isCancel;
axios.VERSION = VERSION2;
axios.toFormData = toFormData_default;
axios.AxiosError = AxiosError_default;
axios.Cancel = axios.CanceledError;
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = spread;
axios.isAxiosError = isAxiosError;
axios.mergeConfig = mergeConfig;
axios.AxiosHeaders = AxiosHeaders_default;
axios.formToJSON = (thing) => formDataToJSON_default(utils_default.isHTMLForm(thing) ? new FormData(thing) : thing);
axios.default = axios;
var axios_default = axios;

// node_modules/axios/index.js
var {
  Axios: Axios2,
  AxiosError: AxiosError2,
  CanceledError: CanceledError2,
  isCancel: isCancel2,
  CancelToken: CancelToken2,
  VERSION: VERSION3,
  all: all2,
  Cancel,
  isAxiosError: isAxiosError2,
  spread: spread2,
  toFormData: toFormData2,
  AxiosHeaders: AxiosHeaders2,
  formToJSON,
  mergeConfig: mergeConfig2
} = axios_default;

// src/libs/proxy.ts
var Proxy2 = class {
  static async create(url2, method, postData) {
    let headers = {
      "Accept": "application/json",
      "Access-Control-Allow-Origin": "*"
    };
    let options = {
      method,
      url: url2,
      headers
    };
    if (method == "post") {
      var formData = new FormData();
      for (let key in postData) {
        formData.append(key, postData[key]);
      }
      options.headers["Content-Type"] = "multipart/form-data";
      options["data"] = formData;
    }
    let response = await axios_default(options).then((response2) => {
      return response2;
    }).then((response2) => {
      return response2;
    });
    return response;
  }
  static get(url2, cbSuccess, cbError) {
    axios_default({
      method: "get",
      url: url2,
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    }).then((response) => {
      if ("function" === typeof cbSuccess) {
        cbSuccess(response.data);
      }
    }).catch((error2) => {
      if ("function" === typeof cbError) {
        cbError(error2);
      }
      console.log(error2);
    });
  }
  static post(url2, postData, cbSuccess, cbError, optArgs) {
    var formData = new FormData();
    for (let key in postData) {
      formData.append(key, postData[key]);
    }
    try {
      if (typeof optArgs === "object") {
        for (let n in optArgs) {
          let f = optArgs[n];
          formData.append(n, f);
        }
      }
    } catch (e) {
      console.log(e);
    }
    axios_default({
      method: "post",
      url: url2,
      data: formData,
      headers: {
        "Accept": "application/json",
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*"
      }
    }).then((response) => {
      if ("function" === typeof cbSuccess) {
        cbSuccess(response.data);
      }
    }).catch((error2) => {
      if ("function" === typeof cbError) {
        cbError(error2);
      }
      console.log(error2);
    });
  }
};
var proxy_default = Proxy2;

// src/libs/store.ts
var logServer = new LogServer("src/libs/store.ts");
var MyLS = class {
  db;
  subscribers = {};
  lastTable = "";
  lastTablePk;
  fresh;
  constructor(db2, engine) {
    this.db = new chromeStorageDB(db2, engine);
    chrome.storage.local.get("db_learning", (db3) => {
      let isFreshInstall = true;
      if (typeof db3.db_learning == "object") {
        if (typeof db3.db_learning.tables == "object") {
          if (typeof db3.db_learning.tables.app == "object") {
            isFreshInstall = false;
          }
        }
      }
      logServer.log(`fresh install MyLS():${isFreshInstall}`, 25);
      this.fresh = isFreshInstall;
    });
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
    if (this.fresh) {
      return [];
    }
    return this.db.queryAll(a, b);
  }
  getRow(table, ID) {
    if (this.fresh) {
      return null;
    }
    return this.db.queryAll(table, { ID })[0];
  }
  commit(fn) {
    const ret = this.db.commit(fn);
    if (this.lastTable !== "") {
      if (typeof this.subscribers[this.lastTable] === "function") {
        const row = this.getRow(this.lastTable, this.lastTablePk);
        this.subscribers[this.lastTable](row);
        this.lastTable = "";
        this.lastTablePk = -1;
      }
    }
    return ret;
  }
  getStoreDB() {
    return this.db;
  }
  isNew(fn) {
    return this.db.isNew(fn);
  }
  createTable(a, b) {
    return this.db.createTable(a, b);
  }
  tableExists(table) {
    const tableExists = this.db.tableExists(table);
    logServer.log(`MyLS.tableExits:${tableExists}`, 96);
    return tableExists;
  }
  setFresh(fresh) {
    this.fresh = fresh;
  }
};
var _Store = class {
  static db() {
    if (typeof _Store.__db__ === "undefined") {
      _Store.__db__ = new MyLS("learning", "local");
    }
    return _Store.__db__;
  }
  static onReady(fn) {
    _Store.db().getStoreDB().sync(fn);
  }
  static getSchema() {
    const schema = {
      course: ["title", "slug", "duration", "sourceCodeRepository", "description", "authorIds"],
      author: ["name", "slug", "biography", "shortBiography", "courseIds"],
      exerciseFile: ["courseId", "name", "url", "size"],
      section: ["courseId", "slug", "title"],
      toc: ["sectionId", "title", "slug", "url", "duration", "captionUrl", "captionFmt", "streamLocationIds"],
      streamLocation: ["tocId", "fmt", "url"],
      downloadConfig: ["courseId", "fmtList", "selectedFmtList"],
      downloads: ["tocId", "courseId", "downloadId", "filename", "url", "status", "exclude"],
      downloadState: ["courseId", "state", "total", "success", "fails", "lastTocId"],
      app: ["version", "state", "lastCourseSlug", "nav", "freshInstall"]
    };
    return schema;
  }
  static initTables(fn) {
    logServer.log(`Store.initTables()`, 129);
    const db2 = _Store.db();
    const schema = _Store.getSchema();
    logServer.log(schema, 129);
    Object.keys(schema).forEach((table) => {
      if (!db2.tableExists(table)) {
        logServer.log(`createTable:${table}`, 25);
        db2.createTable(table, schema[table]);
      }
    });
    db2.commit(fn);
    _Store.db().setFresh(false);
  }
  static init(fn) {
    const db2 = _Store.db();
    db2.isNew((isNew) => {
      logServer.log(`Store.init():isNew:${isNew}`, 144);
      _Store.initTables(fn);
    });
  }
  static getExerciseFile(courseId) {
    const db2 = _Store.db();
    const results = db2.queryAll("exerciseFile", { query: { courseId } });
    if (results.length > 0) {
      return results[0];
    }
    return null;
  }
  static getCourse(slug) {
    const db2 = _Store.db();
    const results = db2.queryAll("course", { query: { slug } });
    if (results.length > 0) {
      return results[0];
    }
    return null;
  }
  static getLastCourses(slug) {
    const db2 = _Store.db();
    if (typeof slug === "undefined") {
      const appState = _Store.getAppState();
      if (!appState) {
        return [];
      }
      slug = appState.lastCourseSlug;
    }
    const results = db2.queryAll("course", {
      query: (row) => {
        if (row.slug !== slug) {
          return true;
        }
      }
    });
    return results;
  }
  static getCourseById(ID) {
    const db2 = _Store.db();
    const results = db2.queryAll("course", { query: { ID } });
    if (results.length > 0) {
      return results[0];
    }
    return null;
  }
  static getSection(slug, courseId) {
    const db2 = _Store.db();
    const results = db2.queryAll("section", { query: { slug, courseId } });
    if (results.length > 0) {
      return results[0];
    }
    return null;
  }
  static getSectionsByCourseId(courseId) {
    const db2 = _Store.db();
    const results = db2.queryAll("section", { query: { courseId } });
    return results;
  }
  static getTocsBySectionId(sectionId) {
    const db2 = _Store.db();
    const results = db2.queryAll("toc", { query: { sectionId } });
    return results;
  }
  static getToc(slug, sectionId) {
    const db2 = _Store.db();
    const results = db2.queryAll("toc", { query: { slug, sectionId } });
    if (results.length > 0) {
      return results[0];
    }
    return null;
  }
  static getAuthor(slug) {
    const db2 = _Store.db();
    const results = db2.queryAll("author", { query: { slug } });
    if (results.length > 0) {
      return results[0];
    }
    return null;
  }
  static getAuthorById(ID) {
    const db2 = _Store.db();
    const results = db2.queryAll("author", { query: { ID } });
    if (results.length > 0) {
      return results[0];
    }
    return null;
  }
  static getDownloadConfig(courseId) {
    const db2 = _Store.db();
    const results = db2.queryAll("downloadConfig", { query: { courseId } });
    if (results.length > 0) {
      return results[0];
    }
    return null;
  }
  static createAuthor(name, slug, biography, shortBiography, courseId) {
    const db2 = _Store.db();
    let author = _Store.getAuthor(slug);
    if (author) {
      const courseIds = author.courseIds;
      if (!courseIds.includes(courseId)) {
        courseIds.push(courseId);
        db2.update("author", { slug }, (row) => {
          row.courseIds = courseIds;
          return row;
        });
        setTimeout(() => {
          db2.commit();
        }, 100);
        author.courseIds = courseIds;
      }
    } else {
      const courseIds = [];
      if (typeof courseId === "number") {
        courseIds.push(courseId);
      }
      const ID = 0;
      author = { ID, name, slug, biography, shortBiography, courseIds };
      author.ID = db2.insert("author", author);
      setTimeout(() => {
        db2.commit();
      }, 100);
    }
    return author;
  }
  static createAuthorList(courseSlug, authors) {
    const db2 = _Store.db();
    const course = _Store.getCourse(courseSlug);
    const authorResults = [];
    if (course) {
      let authorIds = course.authorIds;
      authors.map((authorTmp) => {
        const name = makeTitle(authorTmp.slug);
        const author = _Store.createAuthor(name, authorTmp.slug, authorTmp.biography, authorTmp.shortBiography, course.ID);
        if (!authorIds.includes(author.ID)) {
          authorIds.push(author.ID);
        }
        authorResults.push(author);
      });
      db2.update("course", { slug: courseSlug }, (row) => {
        row.authorIds = authorIds;
        return row;
      });
      db2.commit();
    }
    return authorResults;
  }
  static updateTocCaption(slug, captionUrl, captionFmt, sectionId) {
    const db2 = _Store.db();
    const toc = _Store.getToc(slug, sectionId);
    if (toc) {
      db2.update("toc", { slug }, function(newToc) {
        newToc.captionUrl = captionUrl;
        newToc.captionFmt = captionFmt;
        return newToc;
      });
      db2.commit();
    }
  }
  static getStreamLocation(tocId, fmt) {
    const db2 = _Store.db();
    const results = db2.queryAll("streamLocation", { query: { tocId, fmt } });
    if (results.length > 0) {
      return results[0];
    }
    return null;
  }
  static getStreamLocations(tocId) {
    const db2 = _Store.db();
    const results = db2.queryAll("streamLocation", { query: { tocId } });
    return results;
  }
  static createStreamLocation(tocId, fmt, url2) {
    const db2 = _Store.db();
    let streamLocation = _Store.getStreamLocation(tocId, fmt);
    if (streamLocation) {
      streamLocation.url = url2;
      db2.update("streamLocation", (row) => {
        row.url = url2;
        return row;
      });
    } else {
      const ID = 0;
      streamLocation = { ID, tocId, fmt, url: url2 };
      streamLocation.ID = db2.insert("streamLocation", streamLocation);
    }
    setTimeout(() => db2.commit(), 100);
    return streamLocation;
  }
  static updateDownloadConfig(fieldName, data, courseId) {
    const db2 = _Store.db();
    let downloadConfig = _Store.getDownloadConfig(courseId);
    if (downloadConfig) {
      db2.update("downloadConfig", { courseId }, (row) => {
        row[fieldName] = data;
        return row;
      });
    } else {
      const ID = 0;
      const fmtList = [];
      const selectedFmtList = "";
      downloadConfig = { ID, courseId, fmtList, selectedFmtList };
      downloadConfig[fieldName] = data;
      downloadConfig.ID = db2.insert("downloadConfig", downloadConfig);
    }
    setTimeout(() => db2.commit(), 100);
    return downloadConfig;
  }
  static createStreamLocationList(slug, sectionId, streamLocations, courseId) {
    const db2 = _Store.db();
    const toc = _Store.getToc(slug, sectionId);
    const streamLocationResults = [];
    const fmtList = [];
    if (toc) {
      const streamLocationIds = toc.streamLocationIds;
      streamLocations.map((streamLocation) => {
        if (!fmtList.includes(streamLocation.fmt)) {
          fmtList.push(streamLocation.fmt);
        }
        const streamLoc = _Store.createStreamLocation(toc.ID, streamLocation.fmt, streamLocation.url);
        if (!streamLocationIds.includes(streamLoc.ID)) {
          streamLocationIds.push(streamLoc.ID);
        }
        streamLocationResults.push(streamLoc);
      });
      db2.update("toc", { slug }, (row) => {
        row.streamLocationIds = streamLocationIds;
        return row;
      });
      db2.commit();
      if (courseId) {
        _Store.updateDownloadConfig("fmtList", fmtList, courseId);
      }
    }
    return streamLocationResults;
  }
  static createExerciseFile(courseId, name, url2, size2) {
    const db2 = _Store.db();
    let exerciseFile = _Store.getExerciseFile(courseId);
    if (!exerciseFile) {
      const ID = 0;
      exerciseFile = { ID, courseId, name, url: url2, size: size2 };
      exerciseFile.ID = db2.insert("exerciseFile", exerciseFile);
      db2.commit();
    }
    return exerciseFile;
  }
  static createSection(courseId, title) {
    const db2 = _Store.db();
    const slug = makeSlug(title);
    let section = _Store.getSection(slug, courseId);
    if (!section) {
      const ID = 0;
      const tocIds = [];
      section = { ID, courseId, title, slug, tocIds };
      section.ID = db2.insert("section", section);
      db2.commit();
    }
    return section;
  }
  static createToc(sectionId, title, slug, url2, duration, captionUrl, captionFmt) {
    const db2 = _Store.db();
    let toc = _Store.getToc(slug, sectionId);
    if (!toc) {
      const ID = 0;
      const streamLocationIds = [];
      toc = { ID, sectionId, title, slug, url: url2, duration, captionUrl, captionFmt, streamLocationIds };
      toc.ID = db2.insert("toc", toc);
      db2.commit();
    }
    return toc;
  }
  static createCourse(title, slug, duration, sourceCodeRepository, description) {
    const db2 = _Store.db();
    let course = _Store.getCourse(slug);
    if (!course) {
      const ID = 0;
      const authorIds = [];
      course = { ID, title, slug, duration, sourceCodeRepository, description, authorIds };
      course.ID = db2.insert("course", course);
      db2.commit();
    }
    return course;
  }
  static getCourseJson(callback) {
    proxy_default.get("/data/course.json", (r) => {
      if ("function" === typeof callback) {
        callback(r);
      }
    });
  }
  static getDataCodesLS(callback) {
    setTimeout(() => {
      chrome.storage.sync.get(["dataCodes"], (r) => {
        callback(JSON.parse(r.dataCodes));
      });
    }, 1e3);
  }
  static saveDataCodes(dataCodes) {
    const courseTmp = dataCodes.course;
    const authors = courseTmp.authors;
    const course = _Store.createCourse(courseTmp.title, courseTmp.slug, courseTmp.duration, courseTmp.sourceCodeRepository, courseTmp.description);
    const sections = dataCodes.sections;
    sections.map((sectionTmp) => {
      const section = _Store.createSection(course.ID, sectionTmp.title);
      sectionTmp.items.map((tocTmp) => {
        tocTmp.url = `https://www.linkedin.com/learning/${course.slug}/${tocTmp.slug}`;
        const toc = _Store.createToc(section.ID, tocTmp.title, tocTmp.slug, tocTmp.url, tocTmp.duration);
      });
    });
    _Store.createAuthorList(course.slug, authors);
    _Store.setAppState(1, course.slug);
    return course;
  }
  static prepareAppStorage(fn) {
    logServer.log(`Store.prepareAppStorage()`, 494);
    _Store.init(() => {
      logServer.log(`After Store.init()`, 498);
      _Store.initApp("", fn);
    });
  }
  static initApp(courseSlug, fn) {
    const db2 = _Store.db();
    const version = "1.0";
    const apps = db2.queryAll("app", { query: { version } });
    let app = null;
    if (apps.length === 0) {
      const state = 0;
      const ID = 0;
      const lastCourseSlug = courseSlug;
      const nav = "welcome";
      app = { ID, state, version, lastCourseSlug, nav };
      app.ID = db2.insert("app", app);
      db2.commit();
    } else {
      app = apps[0];
      if (app.lastCourseSlug !== courseSlug && courseSlug !== "") {
        app.lastCourseSlug = courseSlug;
        db2.update("app", { version }, (row) => {
          row.lastCourseSlug = courseSlug;
          return row;
        });
        db2.commit();
      }
    }
    if (typeof fn == "function") {
      fn(app);
    }
    return app;
  }
  static getAppState() {
    const db2 = _Store.db();
    const version = "1.0";
    const apps = db2.queryAll("app", { query: { version } });
    let app = null;
    if (apps.length > 0) {
      app = apps[0];
    }
    return app;
  }
  static setAppState(state, courseSlug) {
    const db2 = _Store.db();
    const version = "1.0";
    const apps = db2.queryAll("app", { query: { version } });
    if (apps.length > 0) {
      db2.update("app", { version }, (row) => {
        row.state = state;
        if (typeof courseSlug !== "undefined") {
          row.lastCourseSlug = courseSlug;
        }
        return row;
      });
      db2.commit();
    }
  }
  static setAppNav(nav) {
    const db2 = _Store.db();
    const version = "1.0";
    const apps = db2.queryAll("app", { query: { version } });
    if (apps.length > 0) {
      db2.update("app", { version }, (row) => {
        row.nav = nav;
        return row;
      });
      db2.commit();
    }
  }
  static getAppInfo() {
    const db2 = _Store.db();
    const version = "1.0";
    const apps = db2.queryAll("app", { query: { version } });
    if (apps.length > 0) {
      return apps[0];
    }
    return null;
  }
  static getDownloadState(courseId) {
    const db2 = _Store.db();
    let downloadState = null;
    const downloadStates = db2.queryAll("downloadState", { query: { courseId } });
    if (downloadStates.length > 0) {
      downloadState = downloadStates[0];
    } else {
      const ID = 0;
      const state = 0;
      downloadState = { ID, courseId, state };
      downloadState.ID = db2.insert("downloadState", downloadState);
      db2.commit();
    }
    return downloadState;
  }
  static setDownloadState(courseId, state_) {
    const db2 = _Store.db();
    let downloadState = null;
    const downloadStates = db2.queryAll("downloadState", { query: { courseId } });
    if (downloadStates.length > 0) {
      downloadState = downloadStates[0];
      db2.update("downloadState", { courseId }, (row) => {
        row.state = state_;
        return row;
      });
      db2.commit();
      downloadState.state = state_;
    } else {
      const ID = 0;
      const state = state_;
      downloadState = { ID, courseId, state };
      downloadState.ID = db2.insert("downloadState", downloadState);
      db2.commit();
    }
    return downloadState;
  }
  static getDownloads(tocId, courseId) {
    const db2 = _Store.db();
    const downloads = db2.queryAll("downloads", { query: { tocId, courseId } });
    return downloads;
  }
  static getDownloadById(ID) {
    const db2 = _Store.db();
    const downloads = db2.queryAll("downloads", { query: { ID } });
    if (downloads.length > 0) {
      return downloads[0];
    }
    return null;
  }
  static createDownload(url2, filename, tocId, courseId) {
    const db2 = _Store.db();
    let download = _Store.getDownload(tocId, filename);
    if (!download) {
      const ID = 0;
      const downloadId = 0;
      const status = false;
      download = { ID, tocId, courseId, downloadId, filename, url: url2, status };
      download.ID = db2.insert("downloads", download);
    }
    return download;
  }
  static updateDownload(ID, row_) {
    const db2 = _Store.db();
    let download = _Store.getDownloadById(ID);
    if (download) {
      db2.update("downloads", { ID }, (row) => {
        for (let k in row_) {
          row[k] = row_[k];
          download[k] = row_[k];
        }
        return row;
      });
    }
    return download;
  }
  static getDownload(tocId, filename) {
    const db2 = _Store.db();
    let download = null;
    const downloads = db2.queryAll("downloads", { query: { tocId, filename } });
    if (downloads.length > 0) {
      download = downloads[0];
    }
    return download;
  }
  static getDownloadByCourseId(courseId) {
    const db2 = _Store.db();
    const downloads = db2.queryAll("downloads", { query: { courseId } });
    return downloads;
  }
  static clearStorage() {
    chrome.storage.local.remove("db_learning");
    _Store.db().setFresh(true);
  }
  static checkFreshInstall(fn) {
    chrome.storage.local.get("db_learning", (db2) => {
      console.log(db2);
      let isFreshInstall = true;
      if (typeof db2.db_learning == "object") {
        if (typeof db2.db_learning.tables == "object") {
          if (typeof db2.db_learning.tables.app == "object") {
            isFreshInstall = false;
          }
        }
      }
      fn(isFreshInstall, db2);
    });
  }
};
var Store = _Store;
__publicField(Store, "__db__");
var store_default = Store;

// src/libs/downloadQueue.ts
var logServer2 = myLogServer();
var DownloadQueue = class {
  queues;
  counts = 0;
  successQueues;
  currentDownload = null;
  downloadHandlerSet = false;
  queueStarted = false;
  app = null;
  course = null;
  downloadState = null;
  downloadConfig = null;
  sections;
  fmt = null;
  downloadOptions = [];
  resetQueueAfterFinish = true;
  resetQueueOnError = false;
  constructor() {
  }
  init() {
  }
  setCourse(course) {
    let reInit = false;
    if (this.course === null) {
      this.course = course;
      reInit = true;
    } else if (this.course.ID != course.ID) {
      this.course = course;
      reInit = true;
    }
    if (reInit) {
      this.resetQueue();
    }
  }
  truncateTables() {
  }
  resetQueue() {
    this.queues = [];
    this.counts = 0;
    this.successQueues = [];
    this.currentDownload = null;
    this.downloadOptions = [];
    this.queueStarted = false;
  }
  populate(fn) {
    store_default.onReady(() => {
      this.downloadState = store_default.getDownloadState(this.course.ID);
      this.downloadConfig = store_default.getDownloadConfig(this.course.ID);
      this.sections = store_default.getSectionsByCourseId(this.course.ID);
      this.fmt = this.downloadConfig.selectedFmtList;
      this.sections.forEach((section) => {
        const items = store_default.getTocsBySectionId(section.ID);
        items.forEach((toc) => {
          const streamLocations = store_default.getStreamLocations(toc.ID).filter((r) => {
            return r.fmt == this.fmt;
          });
          let streamLoc;
          if (streamLocations.length > 0) {
            streamLoc = streamLocations[0];
            const videoUrl = streamLoc.url;
            const transcriptUrl = toc.captionUrl;
            const optVideo = {
              url: videoUrl,
              filename: `${toc.slug}-${this.fmt}.mp4`,
              tocId: toc.ID,
              courseId: this.course.ID
            };
            const optTranscript = {
              url: transcriptUrl,
              filename: `${toc.slug}-${this.fmt}.vtt`,
              tocId: toc.ID,
              courseId: this.course.ID
            };
            this.downloadOptions.push(optVideo);
            this.downloadOptions.push(optTranscript);
          }
        });
      });
      for (let idx in this.downloadOptions) {
        const dl = this.downloadOptions[idx];
        let download = store_default.getDownload(dl.tocId, dl.filename);
        if (download) {
          logServer2.logWeb("updateDownload");
          download.url = dl.url;
          download.filename = dl.filename;
          download = store_default.updateDownload(download.ID, download);
        } else {
          logServer2.logWeb("createDownload");
          download = store_default.createDownload(dl.url, dl.filename, dl.tocId, dl.courseId);
        }
        this.queues.push(download);
      }
      this.counts = this.queues.length;
      store_default.db().commit();
      if (typeof fn == "function") {
        fn(this.queues);
      }
    });
  }
  startQueue() {
    this.processQueue();
  }
  processQueue() {
    if (this.queues.length > 0) {
      this.currentDownload = this.queues.shift();
      if (this.currentDownload.status !== true) {
        this.chromeDownload();
      } else {
        const success = true;
        this.afterProcessQueue(success);
        return;
      }
    } else {
      if (this.resetQueueAfterFinish) {
        this.resetQueue();
      }
    }
  }
  setProgress() {
    const peak = this.successQueues.length;
    const maxPeak = this.counts;
    const percentage = Math.ceil(peak / maxPeak * 100);
    console.log(peak, maxPeak, percentage);
    return percentage;
  }
  afterProcessQueue(success, delta) {
    if (success) {
      this.successQueues.push(this.currentDownload);
      store_default.updateDownload(this.currentDownload.ID, { status: success });
      store_default.db().commit();
      const cmd = "download_state";
      const percentage = this.setProgress();
      const currentDownload = this.currentDownload;
      chrome.runtime.sendMessage({ cmd, success, delta, currentDownload, percentage }, (response) => {
      });
      this.startQueue();
    } else {
      this.queues.push(this.currentDownload);
    }
  }
  chromeDownload() {
    if (!this.downloadHandlerSet) {
      chrome.downloads.onCreated.addListener((item) => {
        logServer2.logWeb(item);
      });
      chrome.downloads.onErased.addListener((downloadId) => {
        logServer2.logWeb(downloadId);
      });
      chrome.downloads.onChanged.addListener((delta) => {
        logServer2.logWeb(delta);
        if (typeof delta.state == "object") {
          if (delta.state.current == "complete") {
            this.afterProcessQueue(true, delta);
          }
        }
        if (typeof delta.error == "object") {
          this.onDownloadError(delta);
        }
      });
      this.downloadHandlerSet = true;
    }
    const opt = {
      filename: this.currentDownload.filename,
      url: this.currentDownload.url
    };
    chrome.downloads.download(opt, (downloadId) => {
      const cmd = "download_state";
      const currentDownload = this.currentDownload;
      chrome.runtime.sendMessage({ cmd, currentDownload }, (response) => {
      });
      logServer2.logWeb(downloadId);
    });
  }
  onDownloadError(delta) {
    const cmd = "download_state";
    const success = false;
    const currentDownload = this.currentDownload;
    chrome.runtime.sendMessage({ cmd, delta, success, currentDownload }, (response) => {
    });
    if (this.resetQueueOnError) {
      this.resetQueue();
    }
  }
};

// src/service_workers/background.ts
var logServer3 = myLogServer();
var downloadQueue = new DownloadQueue();
store_default.prepareAppStorage();
var ENV = "development";
if (ENV === "production") {
  chrome.action.disable();
}
logServer3.logWeb("LogServer initialize");
function _isValidCoursePage(url2) {
  const urlPathArray = url2.split("?")[0].split("/").filter((item) => item);
  let validCoursePage = false;
  if (urlPathArray.length >= 4) {
    if (urlPathArray[2] === "learning") {
      validCoursePage = true;
    }
  }
  return validCoursePage;
}
function _sendCoookieMessage() {
}
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status == "complete") {
    if (_isValidCoursePage(tab.url)) {
      if (ENV === "production") {
        chrome.action.enable(tabId);
      }
      chrome.tabs.sendMessage(tab.id, { event: "onTabUpdated", url: tab.url }, (r) => {
      });
      _sendCoookieMessage();
    } else {
      if (ENV === "production") {
        chrome.action.disable(tabId);
      }
    }
  }
});
chrome.webNavigation.onHistoryStateUpdated.addListener(function(tab) {
  if (_isValidCoursePage(tab.url)) {
    if (ENV === "production") {
      chrome.action.enable(tab.tabId);
    }
    chrome.tabs.sendMessage(tab.tabId, { event: "onHistoryStateUpdated", url: tab.url }, (r) => {
    });
    _sendCoookieMessage();
  } else {
    if (ENV === "production") {
      chrome.action.disable(tab.tabId);
    }
  }
});
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  store_default.checkFreshInstall((freshInstall) => {
    if (freshInstall) {
      logServer3.logWeb("freshInstall detected");
      return;
    }
    setTimeout(() => {
      if (msg.cmd == "start_download") {
        downloadQueue.setCourse(msg.course);
        logServer3.logWeb(msg);
        if (downloadQueue.queueStarted) {
          logServer3.logWeb("queue is running:skipped");
          return;
        }
        logServer3.logWeb(msg);
        if (downloadQueue.queues.length == 0) {
          downloadQueue.populate((queues) => {
            downloadQueue.queueStarted = true;
            downloadQueue.startQueue();
          });
        }
      }
    }, 1e3);
  });
});
setInterval(() => {
  logServer3.logWeb("WAKE_UP");
}, 3e3);
//# sourceMappingURL=background.js.map
