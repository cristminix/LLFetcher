var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __commonJS = (cb2, mod) => function __require() {
  return mod || (0, cb2[__getOwnPropNames(cb2)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
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
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// node_modules/form-data/lib/browser.js
var require_browser = __commonJS({
  "node_modules/form-data/lib/browser.js"(exports, module) {
    module.exports = typeof self == "object" ? self.FormData : window.FormData;
  }
});

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
          error("The name '" + db_name + "' contains invalid characters");
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
  setItem(key, value) {
    try {
      this.storage.set({ key: value }).then(() => {
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
    var i;
    for (i = 0; i < ids.length; i++) {
      ID = ids[i];
      row = this.db.data[table_name][ID];
      results.push(this.clone(row));
    }
    if (sort && sort instanceof Array) {
      for (i = 0; i < sort.length; i++) {
        results.sort(this.sort_results(sort[i][0], sort[i].length > 1 ? sort[i][1] : null));
      }
    }
    if (distinct && distinct instanceof Array) {
      for (var j = 0; j < distinct.length; j++) {
        var seen = {}, d = distinct[j];
        for (i = 0; i < results.length; i++) {
          if (results[i] === void 0) {
            continue;
          }
          if (results[i].hasOwnProperty(d) && seen.hasOwnProperty(results[i][d])) {
            delete results[i];
          } else {
            seen[results[i][d]] = 1;
          }
        }
      }
      var new_results = [];
      for (i = 0; i < results.length; i++) {
        if (results[i] !== void 0) {
          new_results.push(results[i]);
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
    for (var i = 0; i < ids.length; i++) {
      if (this.db.data[table_name].hasOwnProperty(ids[i])) {
        delete this.db.data[table_name][ids[i]];
      }
    }
    return ids.length;
  }
  _update(table_name, ids, update_function) {
    var ID = "", num = 0;
    for (var i = 0; i < ids.length; i++) {
      ID = ids[i];
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
    throw new Error(msg);
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
    for (var i = 0; i < this.db.tables[table_name].fields.length; i++) {
      field = this.db.tables[table_name].fields[i];
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
      var i;
      for (i = 0; i < fields.length; i++) {
        if (!this.validateName(fields[i])) {
          is_valid = false;
          break;
        }
      }
      if (is_valid) {
        var fields_literal = {};
        for (i = 0; i < fields.length; i++) {
          fields_literal[fields[i]] = true;
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
      for (var i = 0; i < data.length; i++) {
        if (!insert(table_name, data[i])) {
          error("Failed to insert record: [" + JSON.stringify(data[i]) + "]");
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
        var i;
        for (i = 0; i < new_fields.length; i++) {
          if (!this.validateName(new_fields[i])) {
            is_valid = false;
            break;
          }
        }
        if (is_valid) {
          var fields_literal = {};
          for (i = 0; i < new_fields.length; i++) {
            fields_literal[new_fields[i]] = true;
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
function bind(fn, thisArg) {
  return function wrap2() {
    return fn.apply(thisArg, arguments);
  };
}

// node_modules/axios/lib/utils.js
var { toString } = Object.prototype;
var { getPrototypeOf } = Object;
var kindOf = ((cache) => (thing) => {
  const str = toString.call(thing);
  return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null));
var kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type;
};
var typeOfTest = (type) => (thing) => typeof thing === type;
var { isArray } = Array;
var isUndefined = typeOfTest("undefined");
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}
var isArrayBuffer = kindOfTest("ArrayBuffer");
function isArrayBufferView(val) {
  let result2;
  if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
    result2 = ArrayBuffer.isView(val);
  } else {
    result2 = val && val.buffer && isArrayBuffer(val.buffer);
  }
  return result2;
}
var isString = typeOfTest("string");
var isFunction = typeOfTest("function");
var isNumber = typeOfTest("number");
var isObject = (thing) => thing !== null && typeof thing === "object";
var isBoolean = (thing) => thing === true || thing === false;
var isPlainObject = (val) => {
  if (kindOf(val) !== "object") {
    return false;
  }
  const prototype3 = getPrototypeOf(val);
  return (prototype3 === null || prototype3 === Object.prototype || Object.getPrototypeOf(prototype3) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
};
var isDate = kindOfTest("Date");
var isFile = kindOfTest("File");
var isBlob = kindOfTest("Blob");
var isFileList = kindOfTest("FileList");
var isStream = (val) => isObject(val) && isFunction(val.pipe);
var isFormData = (thing) => {
  const pattern = "[object FormData]";
  return thing && (typeof FormData === "function" && thing instanceof FormData || toString.call(thing) === pattern || isFunction(thing.toString) && thing.toString() === pattern);
};
var isURLSearchParams = kindOfTest("URLSearchParams");
var trim = (str) => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function forEach(obj, fn, { allOwnKeys = false } = {}) {
  if (obj === null || typeof obj === "undefined") {
    return;
  }
  let i;
  let l;
  if (typeof obj !== "object") {
    obj = [obj];
  }
  if (isArray(obj)) {
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    const keys2 = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys2.length;
    let key;
    for (i = 0; i < len; i++) {
      key = keys2[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}
function findKey(obj, key) {
  key = key.toLowerCase();
  const keys2 = Object.keys(obj);
  let i = keys2.length;
  let _key;
  while (i-- > 0) {
    _key = keys2[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}
var _global = typeof self === "undefined" ? typeof global === "undefined" ? void 0 : global : self;
var isContextDefined = (context) => !isUndefined(context) && context !== _global;
function merge() {
  const { caseless } = isContextDefined(this) && this || {};
  const result2 = {};
  const assignValue = (val, key) => {
    const targetKey = caseless && findKey(result2, key) || key;
    if (isPlainObject(result2[targetKey]) && isPlainObject(val)) {
      result2[targetKey] = merge(result2[targetKey], val);
    } else if (isPlainObject(val)) {
      result2[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result2[targetKey] = val.slice();
    } else {
      result2[targetKey] = val;
    }
  };
  for (let i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue);
  }
  return result2;
}
var extend = (a, b, thisArg, { allOwnKeys } = {}) => {
  forEach(b, (val, key) => {
    if (thisArg && isFunction(val)) {
      a[key] = bind(val, thisArg);
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
  let i;
  let prop;
  const merged = {};
  destObj = destObj || {};
  if (sourceObj == null)
    return destObj;
  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
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
var toArray = (thing) => {
  if (!thing)
    return null;
  if (isArray(thing))
    return thing;
  let i = thing.length;
  if (!isNumber(i))
    return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
};
var isTypedArray = ((TypedArray) => {
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
var hasOwnProperty = (({ hasOwnProperty: hasOwnProperty3 }) => (obj, prop) => hasOwnProperty3.call(obj, prop))(Object.prototype);
var isRegExp = kindOfTest("RegExp");
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
    if (isFunction(obj) && ["arguments", "caller", "callee"].indexOf(name) !== -1) {
      return false;
    }
    const value = obj[name];
    if (!isFunction(value))
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
    arr.forEach((value) => {
      obj[value] = true;
    });
  };
  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
  return obj;
};
var noop = () => {
};
var toFiniteNumber = (value, defaultValue) => {
  value = +value;
  return Number.isFinite(value) ? value : defaultValue;
};
var toJSONObject = (obj) => {
  const stack = new Array(10);
  const visit = (source, i) => {
    if (isObject(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }
      if (!("toJSON" in source)) {
        stack[i] = source;
        const target = isArray(source) ? [] : {};
        forEach(source, (value, key) => {
          const reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });
        stack[i] = void 0;
        return target;
      }
    }
    return source;
  };
  return visit(obj, 0);
};
var utils_default = {
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty,
  hasOwnProp: hasOwnProperty,
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
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
  return path.concat(key).map(function each2(token, i) {
    token = removeBrackets(token);
    return !dots && i ? "[" + token + "]" : token;
  }).join(dots ? "." : "");
}
function isFlatArray(arr) {
  return utils_default.isArray(arr) && !arr.some(isVisitable);
}
var predicates = utils_default.toFlatObject(utils_default, {}, null, function filter(prop) {
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
  function convertValue(value) {
    if (value === null)
      return "";
    if (utils_default.isDate(value)) {
      return value.toISOString();
    }
    if (!useBlob && utils_default.isBlob(value)) {
      throw new AxiosError_default("Blob is not supported. Use a Buffer instead.");
    }
    if (utils_default.isArrayBuffer(value) || utils_default.isTypedArray(value)) {
      return useBlob && typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
    }
    return value;
  }
  function defaultVisitor(value, key, path) {
    let arr = value;
    if (value && !path && typeof value === "object") {
      if (utils_default.endsWith(key, "{}")) {
        key = metaTokens ? key : key.slice(0, -2);
        value = JSON.stringify(value);
      } else if (utils_default.isArray(value) && isFlatArray(value) || (utils_default.isFileList(value) || utils_default.endsWith(key, "[]") && (arr = utils_default.toArray(value)))) {
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
    if (isVisitable(value)) {
      return true;
    }
    formData.append(renderKey(path, key, dots), convertValue(value));
    return false;
  }
  const stack = [];
  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });
  function build(value, path) {
    if (utils_default.isUndefined(value))
      return;
    if (stack.indexOf(value) !== -1) {
      throw Error("Circular reference detected in " + path.join("."));
    }
    stack.push(value);
    utils_default.forEach(value, function each2(el, key) {
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
function encode(str) {
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
prototype2.append = function append(name, value) {
  this._pairs.push([name, value]);
};
prototype2.toString = function toString2(encoder) {
  const _encode = encoder ? function(value) {
    return encoder.call(this, value, encode);
  } : encode;
  return this._pairs.map(function each2(pair) {
    return _encode(pair[0]) + "=" + _encode(pair[1]);
  }, "").join("&");
};
var AxiosURLSearchParams_default = AxiosURLSearchParams;

// node_modules/axios/lib/helpers/buildURL.js
function encode2(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function buildURL(url, params, options) {
  if (!params) {
    return url;
  }
  const _encode = options && options.encode || encode2;
  const serializeFn = options && options.serialize;
  let serializedParams;
  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = utils_default.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams_default(params, options).toString(_encode);
  }
  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
  }
  return url;
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
    visitor: function(value, key, path, helpers) {
      if (browser_default.isNode && utils_default.isBuffer(value)) {
        this.append(key, value.toString("base64"));
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
  let i;
  const len = keys2.length;
  let key;
  for (i = 0; i < len; i++) {
    key = keys2[i];
    obj[key] = arr[key];
  }
  return obj;
}
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++];
    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && utils_default.isArray(target) ? target.length : name;
    if (isLast) {
      if (utils_default.hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }
      return !isNumericKey;
    }
    if (!target[name] || !utils_default.isObject(target[name])) {
      target[name] = [];
    }
    const result2 = buildPath(path, value, target[name], index);
    if (result2 && utils_default.isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }
    return !isNumericKey;
  }
  if (utils_default.isFormData(formData) && utils_default.isFunction(formData.entries)) {
    const obj = {};
    utils_default.forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
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
var defaults = {
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
    const transitional2 = this.transitional || defaults.transitional;
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
  defaults.headers[method] = {};
});
utils_default.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
  defaults.headers[method] = utils_default.merge(DEFAULT_CONTENT_TYPE);
});
var defaults_default = defaults;

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
  let i;
  rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
    i = line.indexOf(":");
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();
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
function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }
  return utils_default.isArray(value) ? value.map(normalizeValue) : String(value);
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
function matchHeaderValue(context, value, header, filter3) {
  if (utils_default.isFunction(filter3)) {
    return filter3.call(this, value, header);
  }
  if (!utils_default.isString(value))
    return;
  if (utils_default.isString(filter3)) {
    return value.indexOf(filter3) !== -1;
  }
  if (utils_default.isRegExp(filter3)) {
    return filter3.test(value);
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
        const value = this[key];
        if (!parser) {
          return value;
        }
        if (parser === true) {
          return parseTokens(value);
        }
        if (utils_default.isFunction(parser)) {
          return parser.call(this, value, key);
        }
        if (utils_default.isRegExp(parser)) {
          return parser.exec(value);
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
    utils_default.forEach(this, (value, header) => {
      const key = utils_default.findKey(headers, header);
      if (key) {
        self2[key] = normalizeValue(value);
        delete self2[header];
        return;
      }
      const normalized = format ? formatHeader(header) : String(header).trim();
      if (normalized !== header) {
        delete self2[header];
      }
      self2[normalized] = normalizeValue(value);
      headers[normalized] = true;
    });
    return this;
  }
  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }
  toJSON(asStrings) {
    const obj = /* @__PURE__ */ Object.create(null);
    utils_default.forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && utils_default.isArray(value) ? value.join(", ") : value);
    });
    return obj;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ": " + value).join("\n");
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
function isCancel(value) {
  return !!(value && value.__CANCEL__);
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
    write: function write(name, value, expires, path, domain, secure) {
      const cookie = [];
      cookie.push(name + "=" + encodeURIComponent(value));
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
function isAbsoluteURL(url) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
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
  function resolveURL(url) {
    let href = url;
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
function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
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
    let i = tail;
    let bytesCount = 0;
    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
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
      settle(function _resolve(value) {
        resolve(value);
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
    const protocol = parseProtocol(fullPath);
    if (protocol && browser_default.protocols.indexOf(protocol) === -1) {
      reject2(new AxiosError_default("Unsupported protocol " + protocol + ":", AxiosError_default.ERR_BAD_REQUEST, config));
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
utils_default.forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      Object.defineProperty(fn, "name", { value });
    } catch (e) {
    }
    Object.defineProperty(fn, "adapterName", { value });
  }
});
var adapters_default = {
  getAdapter: (adapters) => {
    adapters = utils_default.isArray(adapters) ? adapters : [adapters];
    const { length } = adapters;
    let nameOrAdapter;
    let adapter;
    for (let i = 0; i < length; i++) {
      nameOrAdapter = adapters[i];
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
var VERSION = "1.2.1";

// node_modules/axios/lib/helpers/validator.js
var validators = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((type, i) => {
  validators[type] = function validator(thing) {
    return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
  };
});
var deprecatedWarnings = {};
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
  }
  return (value, opt, opts) => {
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
    return validator ? validator(value, opt, opts) : true;
  };
};
function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== "object") {
    throw new AxiosError_default("options must be an object", AxiosError_default.ERR_BAD_OPTION_VALUE);
  }
  const keys2 = Object.keys(options);
  let i = keys2.length;
  while (i-- > 0) {
    const opt = keys2[i];
    const validator = schema[opt];
    if (validator) {
      const value = options[opt];
      const result2 = value === void 0 || validator(value, opt, options);
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
    let i = 0;
    let len;
    if (!synchronousRequestInterceptors) {
      const chain2 = [dispatchRequest.bind(this), void 0];
      chain2.unshift.apply(chain2, requestInterceptorChain);
      chain2.push.apply(chain2, responseInterceptorChain);
      len = chain2.length;
      promise = Promise.resolve(config);
      while (i < len) {
        promise = promise.then(chain2[i++], chain2[i++]);
      }
      return promise;
    }
    len = requestInterceptorChain.length;
    let newConfig = config;
    i = 0;
    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
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
    i = 0;
    len = responseInterceptorChain.length;
    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
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
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});
utils_default.forEach(["post", "put", "patch"], function forEachMethodWithData2(method) {
  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        headers: isForm ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url,
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
      let i = token._listeners.length;
      while (i-- > 0) {
        token._listeners[i](cancel);
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
  const instance = bind(Axios_default.prototype.request, context);
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
axios.VERSION = VERSION;
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
  VERSION: VERSION2,
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
  static async create(url, method, postData) {
    let headers = {
      "Accept": "application/json",
      "Access-Control-Allow-Origin": "*"
    };
    let options = {
      method,
      url,
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
  static get(url, cbSuccess, cbError) {
    axios_default({
      method: "get",
      url,
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
  static post(url, postData, cbSuccess, cbError, optArgs) {
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
      url,
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

// node_modules/underscore/underscore-esm.js
var VERSION3 = "1.13.6";
var root = typeof self == "object" && self.self === self && self || typeof global == "object" && global.global === global && global || Function("return this")() || {};
var ArrayProto = Array.prototype;
var ObjProto = Object.prototype;
var SymbolProto = typeof Symbol !== "undefined" ? Symbol.prototype : null;
var push = ArrayProto.push;
var slice = ArrayProto.slice;
var toString3 = ObjProto.toString;
var hasOwnProperty2 = ObjProto.hasOwnProperty;
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
    var length = Math.max(arguments.length - startIndex, 0), rest2 = Array(length), index = 0;
    for (; index < length; index++) {
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
function isObject2(obj) {
  var type = typeof obj;
  return type === "function" || type === "object" && !!obj;
}
function isNull(obj) {
  return obj === null;
}
function isUndefined2(obj) {
  return obj === void 0;
}
function isBoolean2(obj) {
  return obj === true || obj === false || toString3.call(obj) === "[object Boolean]";
}
function isElement(obj) {
  return !!(obj && obj.nodeType === 1);
}
function tagTester(name) {
  var tag = "[object " + name + "]";
  return function(obj) {
    return toString3.call(obj) === tag;
  };
}
var isString2 = tagTester("String");
var isNumber2 = tagTester("Number");
var isDate2 = tagTester("Date");
var isRegExp2 = tagTester("RegExp");
var isError = tagTester("Error");
var isSymbol = tagTester("Symbol");
var isArrayBuffer2 = tagTester("ArrayBuffer");
var isFunction2 = tagTester("Function");
var nodelist = root.document && root.document.childNodes;
if (typeof /./ != "function" && typeof Int8Array != "object" && typeof nodelist != "function") {
  isFunction2 = function(obj) {
    return typeof obj == "function" || false;
  };
}
var isFunction$1 = isFunction2;
var hasObjectTag = tagTester("Object");
var hasStringTagBug = supportsDataView && hasObjectTag(new DataView(new ArrayBuffer(8)));
var isIE11 = typeof Map !== "undefined" && hasObjectTag(/* @__PURE__ */ new Map());
var isDataView = tagTester("DataView");
function ie10IsDataView(obj) {
  return obj != null && isFunction$1(obj.getInt8) && isArrayBuffer2(obj.buffer);
}
var isDataView$1 = hasStringTagBug ? ie10IsDataView : isDataView;
var isArray2 = nativeIsArray || tagTester("Array");
function has$1(obj, key) {
  return obj != null && hasOwnProperty2.call(obj, key);
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
  return isNumber2(obj) && _isNaN(obj);
}
function constant(value) {
  return function() {
    return value;
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
function isTypedArray2(obj) {
  return nativeIsView ? nativeIsView(obj) && !isDataView$1(obj) : isBufferLike(obj) && typedArrayPattern.test(toString3.call(obj));
}
var isTypedArray$1 = supportsArrayBuffer ? isTypedArray2 : constant(false);
var getLength = shallowProperty("length");
function emulatedSet(keys2) {
  var hash = {};
  for (var l = keys2.length, i = 0; i < l; ++i)
    hash[keys2[i]] = true;
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
  if (!isObject2(obj))
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
  var length = getLength(obj);
  if (typeof length == "number" && (isArray2(obj) || isString2(obj) || isArguments$1(obj)))
    return length === 0;
  return getLength(keys(obj)) === 0;
}
function isMatch(object2, attrs) {
  var _keys = keys(attrs), length = _keys.length;
  if (object2 == null)
    return !length;
  var obj = Object(object2);
  for (var i = 0; i < length; i++) {
    var key = _keys[i];
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
_$1.VERSION = VERSION3;
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
  var className = toString3.call(a);
  if (className !== toString3.call(b))
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
    var byteLength = getByteLength(a);
    if (byteLength !== getByteLength(b))
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
  var length = aStack.length;
  while (length--) {
    if (aStack[length] === a)
      return bStack[length] === b;
  }
  aStack.push(a);
  bStack.push(b);
  if (areArrays) {
    length = a.length;
    if (length !== b.length)
      return false;
    while (length--) {
      if (!eq(a[length], b[length], aStack, bStack))
        return false;
    }
  } else {
    var _keys = keys(a), key;
    length = _keys.length;
    if (keys(b).length !== length)
      return false;
    while (length--) {
      key = _keys[length];
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
  if (!isObject2(obj))
    return [];
  var keys2 = [];
  for (var key in obj)
    keys2.push(key);
  if (hasEnumBug)
    collectNonEnumProps(obj, keys2);
  return keys2;
}
function ie11fingerprint(methods) {
  var length = getLength(methods);
  return function(obj) {
    if (obj == null)
      return false;
    var keys2 = allKeys(obj);
    if (getLength(keys2))
      return false;
    for (var i = 0; i < length; i++) {
      if (!isFunction$1(obj[methods[i]]))
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
  var length = _keys.length;
  var values2 = Array(length);
  for (var i = 0; i < length; i++) {
    values2[i] = obj[_keys[i]];
  }
  return values2;
}
function pairs(obj) {
  var _keys = keys(obj);
  var length = _keys.length;
  var pairs2 = Array(length);
  for (var i = 0; i < length; i++) {
    pairs2[i] = [_keys[i], obj[_keys[i]]];
  }
  return pairs2;
}
function invert(obj) {
  var result2 = {};
  var _keys = keys(obj);
  for (var i = 0, length = _keys.length; i < length; i++) {
    result2[obj[_keys[i]]] = _keys[i];
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
    var length = arguments.length;
    if (defaults3)
      obj = Object(obj);
    if (length < 2 || obj == null)
      return obj;
    for (var index = 1; index < length; index++) {
      var source = arguments[index], keys2 = keysFunc(source), l = keys2.length;
      for (var i = 0; i < l; i++) {
        var key = keys2[i];
        if (!defaults3 || obj[key] === void 0)
          obj[key] = source[key];
      }
    }
    return obj;
  };
}
var extend2 = createAssigner(allKeys);
var extendOwn = createAssigner(keys);
var defaults2 = createAssigner(allKeys, true);
function ctor() {
  return function() {
  };
}
function baseCreate(prototype3) {
  if (!isObject2(prototype3))
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
  if (!isObject2(obj))
    return obj;
  return isArray2(obj) ? obj.slice() : extend2({}, obj);
}
function tap(obj, interceptor) {
  interceptor(obj);
  return obj;
}
function toPath$1(path) {
  return isArray2(path) ? path : [path];
}
_$1.toPath = toPath$1;
function toPath(path) {
  return _$1.toPath(path);
}
function deepGet(obj, path) {
  var length = path.length;
  for (var i = 0; i < length; i++) {
    if (obj == null)
      return void 0;
    obj = obj[path[i]];
  }
  return length ? obj : void 0;
}
function get(object2, path, defaultValue) {
  var value = deepGet(object2, toPath(path));
  return isUndefined2(value) ? defaultValue : value;
}
function has(obj, path) {
  path = toPath(path);
  var length = path.length;
  for (var i = 0; i < length; i++) {
    var key = path[i];
    if (!has$1(obj, key))
      return false;
    obj = obj[key];
  }
  return !!length;
}
function identity(value) {
  return value;
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
      return function(value) {
        return func.call(context, value);
      };
    case 3:
      return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
    case 4:
      return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
  }
  return function() {
    return func.apply(context, arguments);
  };
}
function baseIteratee(value, context, argCount) {
  if (value == null)
    return identity;
  if (isFunction$1(value))
    return optimizeCb(value, context, argCount);
  if (isObject2(value) && !isArray2(value))
    return matcher(value);
  return property(value);
}
function iteratee(value, context) {
  return baseIteratee(value, context, Infinity);
}
_$1.iteratee = iteratee;
function cb(value, context, argCount) {
  if (_$1.iteratee !== iteratee)
    return _$1.iteratee(value, context);
  return baseIteratee(value, context, argCount);
}
function mapObject(obj, iteratee2, context) {
  iteratee2 = cb(iteratee2, context);
  var _keys = keys(obj), length = _keys.length, results = {};
  for (var index = 0; index < length; index++) {
    var currentKey = _keys[index];
    results[currentKey] = iteratee2(obj[currentKey], currentKey, obj);
  }
  return results;
}
function noop2() {
}
function propertyOf(obj) {
  if (obj == null)
    return noop2;
  return function(path) {
    return get(obj, path);
  };
}
function times(n, iteratee2, context) {
  var accum = Array(Math.max(0, n));
  iteratee2 = optimizeCb(iteratee2, context, 1);
  for (var i = 0; i < n; i++)
    accum[i] = iteratee2(i);
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
function createEscaper(map2) {
  var escaper = function(match) {
    return map2[match];
  };
  var source = "(?:" + keys(map2).join("|") + ")";
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
  settings = defaults2({}, settings, _$1.templateSettings);
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
  var length = path.length;
  if (!length) {
    return isFunction$1(fallback) ? fallback.call(obj) : fallback;
  }
  for (var i = 0; i < length; i++) {
    var prop = obj == null ? void 0 : obj[path[i]];
    if (prop === void 0) {
      prop = fallback;
      i = length;
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
  if (isObject2(result2))
    return result2;
  return self2;
}
var partial = restArguments(function(func, boundArgs) {
  var placeholder = partial.placeholder;
  var bound = function() {
    var position = 0, length = boundArgs.length;
    var args = Array(length);
    for (var i = 0; i < length; i++) {
      args[i] = boundArgs[i] === placeholder ? arguments[position++] : boundArgs[i];
    }
    while (position < arguments.length)
      args.push(arguments[position++]);
    return executeBound(func, bound, this, this, args);
  };
  return bound;
});
partial.placeholder = _$1;
var bind2 = restArguments(function(func, context, args) {
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
  for (var i = 0, length = getLength(input); i < length; i++) {
    var value = input[i];
    if (isArrayLike(value) && (isArray2(value) || isArguments$1(value))) {
      if (depth > 1) {
        flatten$1(value, depth - 1, strict, output);
        idx = output.length;
      } else {
        var j = 0, len = value.length;
        while (j < len)
          output[idx++] = value[j++];
      }
    } else if (!strict) {
      output[idx++] = value;
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
    obj[key] = bind2(obj[key], obj);
  }
  return obj;
});
function memoize(func, hasher) {
  var memoize2 = function(key) {
    var cache = memoize2.cache;
    var address = "" + (hasher ? hasher.apply(this, arguments) : key);
    if (!has$1(cache, address))
      cache[address] = func.apply(this, arguments);
    return cache[address];
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
    var i = start;
    var result2 = args[start].apply(this, arguments);
    while (i--)
      result2 = args[i].call(this, result2);
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
function findKey2(obj, predicate, context) {
  predicate = cb(predicate, context);
  var _keys = keys(obj), key;
  for (var i = 0, length = _keys.length; i < length; i++) {
    key = _keys[i];
    if (predicate(obj[key], key, obj))
      return key;
  }
}
function createPredicateIndexFinder(dir) {
  return function(array, predicate, context) {
    predicate = cb(predicate, context);
    var length = getLength(array);
    var index = dir > 0 ? 0 : length - 1;
    for (; index >= 0 && index < length; index += dir) {
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
  var value = iteratee2(obj);
  var low = 0, high = getLength(array);
  while (low < high) {
    var mid = Math.floor((low + high) / 2);
    if (iteratee2(array[mid]) < value)
      low = mid + 1;
    else
      high = mid;
  }
  return low;
}
function createIndexFinder(dir, predicateFind, sortedIndex2) {
  return function(array, item, idx) {
    var i = 0, length = getLength(array);
    if (typeof idx == "number") {
      if (dir > 0) {
        i = idx >= 0 ? idx : Math.max(idx + length, i);
      } else {
        length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
      }
    } else if (sortedIndex2 && idx && length) {
      idx = sortedIndex2(array, item);
      return array[idx] === item ? idx : -1;
    }
    if (item !== item) {
      idx = predicateFind(slice.call(array, i, length), isNaN$1);
      return idx >= 0 ? idx + i : -1;
    }
    for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
      if (array[idx] === item)
        return idx;
    }
    return -1;
  };
}
var indexOf = createIndexFinder(1, findIndex, sortedIndex);
var lastIndexOf = createIndexFinder(-1, findLastIndex);
function find(obj, predicate, context) {
  var keyFinder = isArrayLike(obj) ? findIndex : findKey2;
  var key = keyFinder(obj, predicate, context);
  if (key !== void 0 && key !== -1)
    return obj[key];
}
function findWhere(obj, attrs) {
  return find(obj, matcher(attrs));
}
function each(obj, iteratee2, context) {
  iteratee2 = optimizeCb(iteratee2, context);
  var i, length;
  if (isArrayLike(obj)) {
    for (i = 0, length = obj.length; i < length; i++) {
      iteratee2(obj[i], i, obj);
    }
  } else {
    var _keys = keys(obj);
    for (i = 0, length = _keys.length; i < length; i++) {
      iteratee2(obj[_keys[i]], _keys[i], obj);
    }
  }
  return obj;
}
function map(obj, iteratee2, context) {
  iteratee2 = cb(iteratee2, context);
  var _keys = !isArrayLike(obj) && keys(obj), length = (_keys || obj).length, results = Array(length);
  for (var index = 0; index < length; index++) {
    var currentKey = _keys ? _keys[index] : index;
    results[index] = iteratee2(obj[currentKey], currentKey, obj);
  }
  return results;
}
function createReduce(dir) {
  var reducer = function(obj, iteratee2, memo, initial2) {
    var _keys = !isArrayLike(obj) && keys(obj), length = (_keys || obj).length, index = dir > 0 ? 0 : length - 1;
    if (!initial2) {
      memo = obj[_keys ? _keys[index] : index];
      index += dir;
    }
    for (; index >= 0 && index < length; index += dir) {
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
function filter2(obj, predicate, context) {
  var results = [];
  predicate = cb(predicate, context);
  each(obj, function(value, index, list) {
    if (predicate(value, index, list))
      results.push(value);
  });
  return results;
}
function reject(obj, predicate, context) {
  return filter2(obj, negate(cb(predicate)), context);
}
function every(obj, predicate, context) {
  predicate = cb(predicate, context);
  var _keys = !isArrayLike(obj) && keys(obj), length = (_keys || obj).length;
  for (var index = 0; index < length; index++) {
    var currentKey = _keys ? _keys[index] : index;
    if (!predicate(obj[currentKey], currentKey, obj))
      return false;
  }
  return true;
}
function some(obj, predicate, context) {
  predicate = cb(predicate, context);
  var _keys = !isArrayLike(obj) && keys(obj), length = (_keys || obj).length;
  for (var index = 0; index < length; index++) {
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
  return filter2(obj, matcher(attrs));
}
function max(obj, iteratee2, context) {
  var result2 = -Infinity, lastComputed = -Infinity, value, computed;
  if (iteratee2 == null || typeof iteratee2 == "number" && typeof obj[0] != "object" && obj != null) {
    obj = isArrayLike(obj) ? obj : values(obj);
    for (var i = 0, length = obj.length; i < length; i++) {
      value = obj[i];
      if (value != null && value > result2) {
        result2 = value;
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
  var result2 = Infinity, lastComputed = Infinity, value, computed;
  if (iteratee2 == null || typeof iteratee2 == "number" && typeof obj[0] != "object" && obj != null) {
    obj = isArrayLike(obj) ? obj : values(obj);
    for (var i = 0, length = obj.length; i < length; i++) {
      value = obj[i];
      if (value != null && value < result2) {
        result2 = value;
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
function toArray2(obj) {
  if (!obj)
    return [];
  if (isArray2(obj))
    return slice.call(obj);
  if (isString2(obj)) {
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
  var sample2 = toArray2(obj);
  var length = getLength(sample2);
  n = Math.max(Math.min(n, length), 0);
  var last2 = length - 1;
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
  return pluck(map(obj, function(value, key, list) {
    return {
      value,
      index: index++,
      criteria: iteratee2(value, key, list)
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
    each(obj, function(value, index) {
      var key = iteratee2(value, index, obj);
      behavior(result2, value, key);
    });
    return result2;
  };
}
var groupBy = group(function(result2, value, key) {
  if (has$1(result2, key))
    result2[key].push(value);
  else
    result2[key] = [value];
});
var indexBy = group(function(result2, value, key) {
  result2[key] = value;
});
var countBy = group(function(result2, value, key) {
  if (has$1(result2, key))
    result2[key]++;
  else
    result2[key] = 1;
});
var partition = group(function(result2, value, pass) {
  result2[pass ? 0 : 1].push(value);
}, true);
function size(obj) {
  if (obj == null)
    return 0;
  return isArrayLike(obj) ? obj.length : keys(obj).length;
}
function keyInObj(value, key, obj) {
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
  for (var i = 0, length = keys2.length; i < length; i++) {
    var key = keys2[i];
    var value = obj[key];
    if (iteratee2(value, key, obj))
      result2[key] = value;
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
    iteratee2 = function(value, key) {
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
  return filter2(array, Boolean);
}
function flatten(array, depth) {
  return flatten$1(array, depth, false);
}
var difference = restArguments(function(array, rest2) {
  rest2 = flatten$1(rest2, true, true);
  return filter2(array, function(value) {
    return !contains(rest2, value);
  });
});
var without = restArguments(function(array, otherArrays) {
  return difference(array, otherArrays);
});
function uniq(array, isSorted, iteratee2, context) {
  if (!isBoolean2(isSorted)) {
    context = iteratee2;
    iteratee2 = isSorted;
    isSorted = false;
  }
  if (iteratee2 != null)
    iteratee2 = cb(iteratee2, context);
  var result2 = [];
  var seen = [];
  for (var i = 0, length = getLength(array); i < length; i++) {
    var value = array[i], computed = iteratee2 ? iteratee2(value, i, array) : value;
    if (isSorted && !iteratee2) {
      if (!i || seen !== computed)
        result2.push(value);
      seen = computed;
    } else if (iteratee2) {
      if (!contains(seen, computed)) {
        seen.push(computed);
        result2.push(value);
      }
    } else if (!contains(result2, value)) {
      result2.push(value);
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
  for (var i = 0, length = getLength(array); i < length; i++) {
    var item = array[i];
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
  var length = array && max(array, getLength).length || 0;
  var result2 = Array(length);
  for (var index = 0; index < length; index++) {
    result2[index] = pluck(array, index);
  }
  return result2;
}
var zip = restArguments(unzip);
function object(list, values2) {
  var result2 = {};
  for (var i = 0, length = getLength(list); i < length; i++) {
    if (values2) {
      result2[list[i]] = values2[i];
    } else {
      result2[list[i][0]] = list[i][1];
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
  var length = Math.max(Math.ceil((stop - start) / step), 0);
  var range2 = Array(length);
  for (var idx = 0; idx < length; idx++, start += step) {
    range2[idx] = start;
  }
  return range2;
}
function chunk(array, count) {
  if (count == null || count < 1)
    return [];
  var result2 = [];
  var i = 0, length = array.length;
  while (i < length) {
    result2.push(slice.call(array, i, i += count));
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
  VERSION: VERSION3,
  restArguments,
  isObject: isObject2,
  isNull,
  isUndefined: isUndefined2,
  isBoolean: isBoolean2,
  isElement,
  isString: isString2,
  isNumber: isNumber2,
  isDate: isDate2,
  isRegExp: isRegExp2,
  isError,
  isSymbol,
  isArrayBuffer: isArrayBuffer2,
  isDataView: isDataView$1,
  isArray: isArray2,
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
  extend: extend2,
  extendOwn,
  assign: extendOwn,
  defaults: defaults2,
  create,
  clone,
  tap,
  get,
  has,
  mapObject,
  identity,
  constant,
  noop: noop2,
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
  bind: bind2,
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
  findKey: findKey2,
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
  filter: filter2,
  select: filter2,
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
  toArray: toArray2,
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

// src/libs/utils.js
function makeTitle(slug) {
  const words = slug.split("-");
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    words[i] = word.charAt(0).toUpperCase() + word.slice(1);
  }
  return words.join(" ");
}
function makeSlug(str) {
  const words = str.replace(/\W+/g, " ").split(" ");
  return words.join("-").toLowerCase();
}

// src/libs/store.ts
var MyLS = class {
  db;
  subscribers = {};
  lastTable = "";
  lastTablePk;
  constructor(db2, engine) {
    this.db = new chromeStorageDB(db2, engine);
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
    return this.db.tableExists(table);
  }
};
var _Store = class {
  static db() {
    if (typeof _Store.__db__ === "undefined") {
      _Store.__db__ = new MyLS("learning", "local");
    }
    return _Store.__db__;
  }
  static init() {
    const db2 = _Store.db();
    db2.isNew((isNew) => {
      if (isNew) {
        const schema = {
          course: ["title", "slug", "duration", "sourceCodeRepository", "description", "authorIds"],
          author: ["name", "slug", "biography", "shortBiography", "courseIds"],
          exerciseFile: ["courseId", "name", "url", "size"],
          section: ["courseId", "slug", "title"],
          toc: ["sectionId", "title", "slug", "url", "duration", "captionUrl", "captionFmt", "streamLocationIds"],
          streamLocation: ["tocId", "fmt", "url"],
          downloadConfig: ["courseId", "fmtList", "selectedFmtList"],
          downloads: ["tocId", "courseId", "downloadId", "filename", "url", "status"],
          downloadState: ["courseId", "state", "total", "success", "fails"],
          app: ["version", "state", "lastCourseSlug", "nav"]
        };
        Object.keys(schema).forEach((table) => {
          if (!db2.tableExists(table)) {
            db2.createTable(table, schema[table]);
          }
        });
        db2.commit();
      }
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
  static createStreamLocation(tocId, fmt, url) {
    const db2 = _Store.db();
    let streamLocation = _Store.getStreamLocation(tocId, fmt);
    if (streamLocation) {
      streamLocation.url = url;
      db2.update("streamLocation", (row) => {
        row.url = url;
        return row;
      });
    } else {
      const ID = 0;
      streamLocation = { ID, tocId, fmt, url };
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
  static createExerciseFile(courseId, name, url, size2) {
    const db2 = _Store.db();
    let exerciseFile = _Store.getExerciseFile(courseId);
    if (!exerciseFile) {
      const ID = 0;
      exerciseFile = { ID, courseId, name, url, size: size2 };
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
  static createToc(sectionId, title, slug, url, duration, captionUrl, captionFmt) {
    const db2 = _Store.db();
    let toc = _Store.getToc(slug, sectionId);
    if (!toc) {
      const ID = 0;
      const streamLocationIds = [];
      toc = { ID, sectionId, title, slug, url, duration, captionUrl, captionFmt, streamLocationIds };
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
  static prepareAppStorage() {
    _Store.init();
    setTimeout(() => {
      _Store.initApp("");
    }, 1250);
  }
  static initApp(courseSlug) {
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
  static createDownload(url, filename, tocId, courseId) {
    const db2 = _Store.db();
    let download = _Store.getDownload(tocId, filename);
    if (!download) {
      const ID = 0;
      const downloadId = 0;
      const status = false;
      download = { ID, tocId, courseId, downloadId, filename, url, status };
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
};
var Store = _Store;
__publicField(Store, "__db__");
Store.prepareAppStorage();
var store_default = Store;

// src/service_workers/background.ts
store_default.prepareAppStorage();
var ENV = "development";
if (ENV === "production") {
  chrome.action.disable();
}
function _isValidCoursePage(url) {
  const urlPathArray = url.split("?")[0].split("/").filter((item) => item);
  let validCoursePage = false;
  if (urlPathArray.length >= 4) {
    if (urlPathArray[2] === "learning") {
      validCoursePage = true;
    }
  }
  return validCoursePage;
}
function _sendCoookieMessage() {
  chrome.cookies.getAll({ domain: "linkedin.com" }, function(_cookie) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      try {
        const tab = tabs[0];
        chrome.tabs.sendMessage(tab.id, { event: "sendCoookie", cookie: _cookie }, (r) => {
        });
      } catch (e) {
      }
    });
  });
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
var downloadQueues = [];
var downloadCounts = 0;
var downloadSuccessQueues = [];
var currentDownload = null;
var downloadHandlerSet = false;
var queueStarted = false;
function populateDownloadQueues(fn) {
  store_default.db().getStoreDB().sync(() => {
    downloadQueues = [];
    downloadCounts = 0;
    downloadSuccessQueues = [];
    currentDownload = null;
    const app = store_default.getAppState();
    const course = store_default.getCourse(app.lastCourseSlug);
    const downloadState = store_default.getDownloadState(course.ID);
    const downloadConfig = store_default.getDownloadConfig(course.ID);
    const sections = store_default.getSectionsByCourseId(course.ID);
    const fmt = downloadConfig.selectedFmtList;
    const downloadConfigs = [];
    sections.forEach((section) => {
      const items = store_default.getTocsBySectionId(section.ID);
      items.forEach((toc) => {
        const streamLocations = store_default.getStreamLocations(toc.ID).filter((r) => {
          return r.fmt == fmt;
        });
        let streamLoc;
        if (streamLocations.length > 0) {
          streamLoc = streamLocations[0];
          const videoUrl = streamLoc.url;
          const transcriptUrl = toc.captionUrl;
          const optVideo = {
            url: videoUrl,
            filename: `${toc.slug}-${fmt}.mp4`,
            tocId: toc.ID,
            courseId: course.ID
          };
          const optTranscript = {
            url: transcriptUrl,
            filename: `${toc.slug}-${fmt}.vtt`,
            tocId: toc.ID,
            courseId: course.ID
          };
          downloadConfigs.push(optVideo);
          downloadConfigs.push(optTranscript);
        }
      });
    });
    for (let idx in downloadConfigs) {
      const dl = downloadConfigs[idx];
      let download = store_default.getDownload(dl.tocId, dl.filename);
      if (download) {
        console.log("updateDownload");
        download.url = dl.url;
        download.filename = dl.filename;
        download = store_default.updateDownload(download.ID, download);
      } else {
        console.log("createDownload");
        download = store_default.createDownload(dl.url, dl.filename, dl.tocId, dl.courseId);
      }
      downloadQueues.push(download);
    }
    store_default.db().commit();
    if (typeof fn == "function") {
      fn(downloadQueues);
    }
  });
}
function startDownloadQueues() {
  processDownloadQueues();
}
function processDownloadQueues() {
  if (downloadQueues.length > 0) {
    currentDownload = downloadQueues.shift();
    if (currentDownload.status !== true) {
      chromeDownload();
    } else {
      const cmd = "download_state";
      const skip = true;
      chrome.runtime.sendMessage({ cmd, skip, currentDownload }, (response) => {
      });
      processDownloadQueues();
      return;
    }
  } else {
    downloadCounts = 0;
    downloadQueues = [];
    downloadSuccessQueues = [];
    currentDownload = null;
    queueStarted = false;
    store_default.db().getStoreDB().truncate("downloads");
    store_default.db().commit();
  }
}
function setProgress() {
  const peak = downloadSuccessQueues.length;
  const maxPeak = downloadCounts;
  const percentage = Math.ceil(peak / maxPeak * 100);
  console.log(percentage);
}
function afterProcessDownloadQueues(success) {
  if (success) {
    downloadSuccessQueues.push(currentDownload);
    store_default.updateDownload(currentDownload.ID, { status: success });
    store_default.db().commit();
    setProgress();
    startDownloadQueues();
  } else {
    downloadQueues.push(currentDownload);
  }
}
function chromeDownload() {
  if (!downloadHandlerSet) {
    chrome.downloads.onCreated.addListener((item) => {
      console.log(item);
    });
    chrome.downloads.onErased.addListener((downloadId) => {
      console.log(downloadId);
    });
    chrome.downloads.onChanged.addListener((delta) => {
      console.log(delta);
      if (typeof delta.state == "object") {
        if (delta.state.current == "complete") {
          const cmd = "download_state";
          const success = true;
          chrome.runtime.sendMessage({ cmd, success, delta, currentDownload }, (response) => {
          });
          afterProcessDownloadQueues(true);
        }
      }
      if (typeof delta.error == "object") {
        onDownloadError(delta);
      }
    });
    downloadHandlerSet = true;
  }
  const opt = {
    filename: currentDownload.filename,
    url: currentDownload.url
  };
  chrome.downloads.download(opt, (downloadId) => {
    console.log(downloadId);
  });
}
function onDownloadError(delta) {
  const cmd = "download_state";
  const success = false;
  chrome.runtime.sendMessage({ cmd, delta, success, currentDownload }, (response) => {
  });
  queueStarted = false;
  downloadCounts = 0;
  downloadQueues = [];
  downloadSuccessQueues = [];
  currentDownload = null;
  queueStarted = false;
}
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.cmd == "start_download") {
    if (queueStarted) {
      console.log("queue is running:skipped");
      return;
    }
    console.log(msg);
    if (downloadQueues.length == 0) {
      populateDownloadQueues((queues) => {
        downloadCounts = queues.length;
        queueStarted = true;
        startDownloadQueues();
      });
    }
  }
});
