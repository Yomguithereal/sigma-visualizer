/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graphology__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphology */ "./node_modules/graphology/dist/index.js");
/* harmony import */ var graphology__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphology__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphology_gexf_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphology-gexf/browser */ "./node_modules/graphology-gexf/browser/index.js");
/* harmony import */ var graphology_gexf_browser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphology_gexf_browser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sigma_renderers_webgl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sigma/renderers/webgl */ "./node_modules/sigma/renderers/webgl/index.js");
/* harmony import */ var sigma_renderers_webgl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sigma_renderers_webgl__WEBPACK_IMPORTED_MODULE_2__);



var GEXF_FILE = './file.gexf';
var container = document.getElementById('graph');
fetch(GEXF_FILE).then(function (response) {
  return response.text();
}).then(function (body) {
  var graph = graphology_gexf_browser__WEBPACK_IMPORTED_MODULE_1___default.a.parse(graphology__WEBPACK_IMPORTED_MODULE_0___default.a, body);
  var renderer = new sigma_renderers_webgl__WEBPACK_IMPORTED_MODULE_2___default.a(graph, container, {
    renderLabels: false
  });

  var loop = function loop() {
    if (!renderer.renderFrame) renderer.render();
    requestAnimationFrame(loop);
  };

  requestAnimationFrame(loop);
});

/***/ }),

/***/ "./node_modules/@yomguithereal/helpers/extend.js":
/*!*******************************************************!*\
  !*** ./node_modules/@yomguithereal/helpers/extend.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Extend function
 * ================
 *
 * Function used to push a bunch of values into an array at once.
 *
 * Its strategy is to mutate target array's length then setting the new indices
 * to be the values to add.
 *
 * A benchmark proved that it is faster than the following strategies:
 *   1) `array.push.apply(array, values)`.
 *   2) A loop of pushes.
 *   3) `array = array.concat(values)`, obviously.
 *
 * Intuitively, this is correct because when adding a lot of elements, the
 * chosen strategies does not need to handle the `arguments` object to
 * execute #.apply's variadicity and because the array know its final length
 * at the beginning, avoiding potential multiple reallocations of the underlying
 * contiguous array. Some engines may be able to optimize the loop of push
 * operations but empirically they don't seem to do so.
 */

/**
 * Extends the target array with the given values.
 *
 * @param  {array} array  - Target array.
 * @param  {array} values - Values to add.
 */
module.exports = function extend(array, values) {
  var l1 = array.length,
      l2 = values.length;

  if (l2 === 0)
    return;

  array.length += values.length;

  for (var i = 0; i < l2; i++)
    array[l1 + i] = values[i];
};


/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function $getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = $getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  var args = [];
  for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    ReflectApply(this.listener, this.target, args);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}


/***/ }),

/***/ "./node_modules/graphology-gexf/browser/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/graphology-gexf/browser/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Graphology Browser GEXF Endpoint
 * =================================
 *
 * Endpoint gathering both parser & writer for the browser.
 */
exports.parse = __webpack_require__(/*! ./parser.js */ "./node_modules/graphology-gexf/browser/parser.js");
exports.write = __webpack_require__(/*! ../common/writer.js */ "./node_modules/graphology-gexf/common/writer.js");


/***/ }),

/***/ "./node_modules/graphology-gexf/browser/parser.js":
/*!********************************************************!*\
  !*** ./node_modules/graphology-gexf/browser/parser.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Graphology Browser GEXF Parser
 * ===============================
 *
 * Browser version of the graphology GEXF parser.
 */
var createParserFunction = __webpack_require__(/*! ../common/parser.js */ "./node_modules/graphology-gexf/common/parser.js");

module.exports = createParserFunction(DOMParser, Document);


/***/ }),

/***/ "./node_modules/graphology-gexf/common/helpers.js":
/*!********************************************************!*\
  !*** ./node_modules/graphology-gexf/common/helpers.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Graphology Common GEXF Helpers
 * ===============================
 *
 * Miscellaneous helpers used by both instance of the code.
 */

/**
 * Function used to cast a string value to the desired type.
 *
 * @param  {string} type - Value type.
 * @param  {string} type - String value.
 * @return {any}         - Parsed type.
 */
exports.cast = function(type, value) {
  switch (type) {
    case 'boolean':
      value = (value === 'true');
      break;

    case 'integer':
    case 'long':
    case 'float':
    case 'double':
      value = +value;
      break;

    case 'liststring':
      value = value ? value.split('|') : [];
      break;

    default:
  }

  return value;
};


/***/ }),

/***/ "./node_modules/graphology-gexf/common/parser.js":
/*!*******************************************************!*\
  !*** ./node_modules/graphology-gexf/common/parser.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint no-self-compare: 0 */
/**
 * Graphology Browser GEXF Parser
 * ===============================
 *
 * Browser version of the graphology GEXF parser using DOMParser to function.
 */
var isGraphConstructor = __webpack_require__(/*! graphology-utils/is-graph-constructor */ "./node_modules/graphology-utils/is-graph-constructor.js"),
    helpers = __webpack_require__(/*! ../common/helpers.js */ "./node_modules/graphology-gexf/common/helpers.js");

var cast = helpers.cast;

/**
 * Function checking whether the given value is a NaN.
 *
 * @param  {any} value - Value to test.
 * @return {boolean}
 */
function isReallyNaN(value) {
  return value !== value;
}

/**
 * Function used to convert a viz:color attribute into a CSS rgba? string.
 *
 * @param  {Node}   element - DOM element.
 * @return {string}
 */
function toRGBString(element) {
  var a = element.getAttribute('a'),
      r = element.getAttribute('r'),
      g = element.getAttribute('g'),
      b = element.getAttribute('b');

  return a ?
    ('rgba(' + r + ',' + g + ',' + b + ',' + a + ')') :
    ('rgb(' + r + ',' + g + ',' + b + ')');
}

/**
 * Function returning the first matching tag of the `viz` namespace matching
 * the desired tag name.
 *
 * @param  {Node}   element - Target DOM element.
 * @param  {string} name    - Tag name.
 * @return {Node}
 */
function getFirstMatchingVizTag(element, name) {
  var vizElement = element.getElementsByTagName('viz:' + name)[0];

  if (!vizElement)
    vizElement = element.getElementsByTagNameNS('viz', name)[0];

  if (!vizElement)
    vizElement = element.getElementsByTagName(name)[0];

  return vizElement;
}

/**
 * Function used to collect meta information.
 *
 * @param  {Array<Node>} elements - Target DOM element.
 * @return {object}
 */
function collectMeta(elements) {
  var meta = {},
      element;

  for (var i = 0, l = elements.length; i < l; i++) {
    element = elements[i];

    if (element.nodeName === '#text')
      continue;

    meta[element.tagName.toLowerCase()] = element.textContent;
  }

  return meta;
}

/**
 * Function used to extract the model from the right elements.
 *
 * @param  {Array<Node>} elements - Target DOM elements.
 * @return {array}                - The model & default attributes.
 */
function extractModel(elements) {
  var model = {},
      defaults = {},
      element,
      defaultElement,
      id;

  for (var i = 0, l = elements.length; i < l; i++) {
    element = elements[i];
    id = element.getAttribute('id') || element.getAttribute('for');

    model[id] = {
      id: id,
      type: element.getAttribute('type') || 'string',
      title: !isReallyNaN(+id) ?
        (element.getAttribute('title') || id) :
        id
    };

    // Default?
    defaultElement = element.getElementsByTagName('default')[0];

    if (defaultElement)
      defaults[model[id].title] = cast(
        model[id].type,
        defaultElement.textContent
      );
  }

  return [model, defaults];
}

/**
 * Function used to collect an element's attributes.
 *
 * @param  {object} model   - Data model to use.
 * @param  {Node}   element - Target DOM element.
 * @return {object}         - The collected attributes.
 */
function collectAttributes(model, element) {
  var data = {},
      label = element.getAttribute('label'),
      weight = element.getAttribute('weight');

  if (label)
    data.label = label;

  if (weight)
    data.weight = +weight;

  var valueElements = element.getElementsByTagName('attvalue'),
      valueElement,
      id;

  for (var i = 0, l = valueElements.length; i < l; i++) {
    valueElement = valueElements[i];
    id = (
      valueElement.getAttribute('id') ||
      valueElement.getAttribute('for')
    );

    data[model[id].title] = cast(
      model[id].type,
      valueElement.getAttribute('value')
    );
  }

  // TODO: shortcut here to avoid viz when namespace is not set

  // Attempting to find viz namespace tags

  //-- 1) Color
  var vizElement = getFirstMatchingVizTag(element, 'color');

  if (vizElement)
    data.color = toRGBString(vizElement);

  //-- 2) Size
  vizElement = getFirstMatchingVizTag(element, 'size');

  if (vizElement)
    data.size = +vizElement.getAttribute('value');

  //-- 3) Position
  var x, y, z;

  vizElement = getFirstMatchingVizTag(element, 'position');

  if (vizElement) {
    x = vizElement.getAttribute('x');
    y = vizElement.getAttribute('y');
    z = vizElement.getAttribute('z');

    if (x)
      data.x = +x;
    if (y)
      data.y = +y;
    if (z)
      data.z = +z;
  }

  //-- 4) Shape
  vizElement = getFirstMatchingVizTag(element, 'shape');

  if (vizElement)
    data.shape = vizElement.getAttribute('value');

  //-- 5) Thickness
  vizElement = getFirstMatchingVizTag(element, 'thickness');

  if (vizElement)
    data.thickness = +vizElement.getAttribute('value');

  return data;
}

/**
 * Factory taking implementations of `DOMParser` & `Document` returning
 * the parser function.
 */
module.exports = function createParserFunction(DOMParser, Document) {

  /**
   * Function taking either a string or a document and returning a
   * graphology instance.
   *
   * @param  {function}        Graph  - A graphology constructor.
   * @param  {string|Document} source - The source to parse.
   */

  // TODO: option to map the data to the attributes for customization, nodeModel, edgeModel, nodeReducer, edgeReducer
  // TODO: option to disable the model mapping heuristic
  return function parse(Graph, source) {
    var xmlDoc = source;

    var element,
        result,
        type,
        attributes,
        id,
        s,
        t,
        i,
        l;

    if (!isGraphConstructor(Graph))
      throw new Error('graphology-gexf/browser/parser: invalid Graph constructor.');

    // If source is a string, we are going to parse it
    if (typeof source === 'string')
      xmlDoc = (new DOMParser()).parseFromString(source, 'application/xml');

    if (!(xmlDoc instanceof Document))
      throw new Error('graphology-gexf/browser/parser: source should either be a XML document or a string.');

    // Finding useful elements
    var GRAPH_ELEMENT = xmlDoc.getElementsByTagName('graph')[0],
        META_ELEMENT = xmlDoc.getElementsByTagName('meta')[0],
        META_ELEMENTS = (META_ELEMENT && META_ELEMENT.childNodes) || [],
        NODE_ELEMENTS = xmlDoc.getElementsByTagName('node'),
        EDGE_ELEMENTS = xmlDoc.getElementsByTagName('edge'),
        MODEL_ELEMENTS = xmlDoc.getElementsByTagName('attributes'),
        NODE_MODEL_ELEMENTS = [],
        EDGE_MODEL_ELEMENTS = [];

    for (i = 0, l = MODEL_ELEMENTS.length; i < l; i++) {
      element = MODEL_ELEMENTS[i];

      if (element.getAttribute('class') === 'node')
        NODE_MODEL_ELEMENTS = element.getElementsByTagName('attribute');
      else if (element.getAttribute('class') === 'edge')
        EDGE_MODEL_ELEMENTS = element.getElementsByTagName('attribute');
    }

    // Information
    var DEFAULT_EDGE_TYPE = GRAPH_ELEMENT.getAttribute('defaultedgetype') || 'undirected';

    if (DEFAULT_EDGE_TYPE === 'mutual')
      DEFAULT_EDGE_TYPE = 'undirected';

    // Computing models
    result = extractModel(NODE_MODEL_ELEMENTS);

    var NODE_MODEL = result[0],
        NODE_DEFAULT_ATTRIBUTES = result[1];

    result = extractModel(EDGE_MODEL_ELEMENTS);

    var EDGE_MODEL = result[0],
        EDGE_DEFAULT_ATTRIBUTES = result[1];

    // Polling the first edge to guess the type of the edges
    var graphType = EDGE_ELEMENTS[0] ?
      (EDGE_ELEMENTS[0].getAttribute('type') || DEFAULT_EDGE_TYPE) :
      'mixed';

    // Instantiating our graph
    var graph = new Graph({
      type: graphType,
      defaultNodeAttributes: NODE_DEFAULT_ATTRIBUTES,
      defaultEdgeAttributes: EDGE_DEFAULT_ATTRIBUTES
    });

    // Collecting meta
    var meta = collectMeta(META_ELEMENTS),
        lastModifiedDate = META_ELEMENT && META_ELEMENT.getAttribute('lastmodifieddate');

    graph.replaceAttributes(meta);

    if (lastModifiedDate)
      graph.setAttribute('lastModifiedDate', lastModifiedDate);

    // Adding nodes
    for (i = 0, l = NODE_ELEMENTS.length; i < l; i++) {
      element = NODE_ELEMENTS[i];

      graph.addNode(
        element.getAttribute('id'),
        collectAttributes(NODE_MODEL, element)
      );
    }

    // Adding edges
    for (i = 0, l = EDGE_ELEMENTS.length; i < l; i++) {
      element = EDGE_ELEMENTS[i];

      id = element.getAttribute('id');
      type = element.getAttribute('type') || DEFAULT_EDGE_TYPE;
      s = element.getAttribute('source');
      t = element.getAttribute('target');
      attributes = collectAttributes(EDGE_MODEL, element);

      // If we encountered an edge with a different type, we upgrade the graph
      if (type !== graph.type && graph.type !== 'mixed') {
        graph.upgradeToMixed();
      }

      // If we encountered twice the same edge, we upgrade the graph
      if (
        !graph.multi &&
        (
          (type === 'directed' && graph.hasDirectedEdge(s, t)) ||
          (graph.hasUndirectedEdge(s, t))
        )
      ) {
        graph.upgradeToMulti();
      }

      if (id) {
        if (type === 'directed')
          graph.addDirectedEdgeWithKey(id, s, t, attributes);
        else
          graph.addUndirectedEdgeWithKey(id, s, t, attributes);
      }
      else {
        if (type === 'directed')
          graph.addDirectedEdge(s, t, attributes);
        else
          graph.addUndirectedEdge(s, t, attributes);
      }
    }

    return graph;
  };
};


/***/ }),

/***/ "./node_modules/graphology-gexf/common/writer.js":
/*!*******************************************************!*\
  !*** ./node_modules/graphology-gexf/common/writer.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint no-self-compare: 0 */
/**
 * Graphology Common GEXF Writer
 * ==============================
 *
 * GEXF writer working for both node.js & the browser.
 */
var isGraph = __webpack_require__(/*! graphology-utils/is-graph */ "./node_modules/graphology-utils/is-graph.js"),
    XMLWriter = __webpack_require__(/*! xml-writer */ "./node_modules/xml-writer/index.js");

// TODO: handle object in color, position with object for viz

/**
 * Constants.
 */
var GEXF_NAMESPACE = 'http://www.gexf.net/1.2draft',
    GEXF_VIZ_NAMESPACE = 'http:///www.gexf.net/1.1draft/viz';

var VIZ_RESERVED_NAMES = new Set([
  'color',
  'size',
  'x',
  'y',
  'z',
  'shape',
  'thickness'
]);

var RGBA_TEST = /^\s*rgba?\s*\(/i,
    RGBA_MATCH = /^\s*rgba?\s*\(\s*([0-9]*)\s*,\s*([0-9]*)\s*,\s*([0-9]*)\s*(?:,\s*([.0-9]*))?\)\s*$/;

/**
 * Function used to transform a CSS color into a RGBA object.
 *
 * @param  {string} value - Target value.
 * @return {object}
 */
function CSSColorToRGBA(value) {
  if (!value || typeof value !== 'string')
    return {};

  if (value[0] === '#') {
    value = value.slice(1);

    return (value.length === 3) ?
      {
        r: parseInt(value[0] + value[0], 16),
        g: parseInt(value[1] + value[1], 16),
        b: parseInt(value[2] + value[2], 16)
      } :
      {
        r: parseInt(value[0] + value[1], 16),
        g: parseInt(value[2] + value[3], 16),
        b: parseInt(value[4] + value[5], 16)
      };
  }
  else if (RGBA_TEST.test(value)) {
    var result = {};

    value = value.match(RGBA_MATCH);
    result.r = +value[1];
    result.g = +value[2];
    result.b = +value[3];

    if (value[4])
      result.a = +value[4];

    return result;
  }

  return {};
}

/**
 * Function used to map an element's attributes to a standardized map of
 * GEXF expected properties (label, viz, attributes).
 *
 * @param  {string} type       - The element's type.
 * @param  {string} key        - The element's key.
 * @param  {object} attributes - The element's attributes.
 * @return {object}
 */
function DEFAULT_ELEMENT_FORMATTER(type, key, attributes) {
  var output = {},
      name;

  for (name in attributes) {
    if (name === 'label') {
      output.label = attributes.label;
    }
    else if (type === 'edge' && name === 'weight') {
      output.weight = attributes.weight;
    }
    else if (VIZ_RESERVED_NAMES.has(name)) {
      output.viz = output.viz || {};
      output.viz[name] = attributes[name];
    }
    else {
      output.attributes = output.attributes || {};
      output.attributes[name] = attributes[name];
    }
  }

  return output;
}

var DEFAULT_NODE_FORMATTER = DEFAULT_ELEMENT_FORMATTER.bind(null, 'node'),
    DEFAULT_EDGE_FORMATTER = DEFAULT_ELEMENT_FORMATTER.bind(null, 'edge');

/**
 * Function used to check whether the given integer is 32 bits or not.
 *
 * @param  {number} number - Target number.
 * @return {boolean}
 */
function is32BitInteger(number) {
  return number <= 0x7FFFFFFF && number >= -0x7FFFFFFF;
}

/**
 * Function used to check whether the given value is "empty".
 *
 * @param  {any} value - Target value.
 * @return {boolean}
 */
function isEmptyValue(value) {
  return (
    typeof value === 'undefined' ||
    value === null ||
    value === '' ||
    value !== value
  );
}

/**
 * Function used to detect a JavaScript's value type in the GEXF model.
 *
 * @param  {any}    value - Target value.
 * @return {string}
 */
function detectValueType(value) {

  if (isEmptyValue(value))
    return 'empty';

  if (Array.isArray(value))
    return 'liststring';

  if (typeof value === 'boolean')
    return 'boolean';

  if (typeof value === 'object')
    return 'string';

  // Numbers
  if (typeof value === 'number') {

    // Integer
    if (value === (value | 0)) {

      // Long (JavaScript integer can go up to 53 bit)?
      return is32BitInteger(value) ? 'integer' : 'long';
    }

    // JavaScript numbers are 64 bit float, hence the double
    return 'double';
  }

  return 'string';
}

/**
 * Function used to cast the given value into the given type.
 *
 * @param  {string} type  - Target type.
 * @param  {any}    value - Value to cast.
 * @return {string}
 */
function cast(type, value) {
  if (type === 'liststring' && Array.isArray(value))
    return value.join('|');
  return '' + value;
}

/**
 * Function used to collect data from a graph's nodes.
 *
 * @param  {Graph}    graph   - Target graph.
 * @param  {function} format  - Function formatting the nodes attributes.
 * @return {array}
 */
function collectNodeData(graph, format) {
  var nodes = graph.nodes(),
      node,
      data;

  for (var i = 0, l = nodes.length; i < l; i++) {
    node = nodes[i];
    data = format(node, graph.getNodeAttributes(node));
    data.key = node;
    nodes[i] = data;
  }

  return nodes;
}

/**
 * Function used to collect data from a graph's edges.
 *
 * @param  {Graph}    graph   - Target graph.
 * @param  {function} reducer - Function reducing the edges attributes.
 * @return {array}
 */
function collectEdgeData(graph, reducer) {
  var edges = graph.edges(),
      edge,
      data;

  for (var i = 0, l = edges.length; i < l; i++) {
    edge = edges[i];
    data = reducer(edge, graph.getEdgeAttributes(edge));
    data.key = edge;
    data.source = graph.source(edge);
    data.target = graph.target(edge);
    data.undirected = graph.undirected(edge);
    edges[i] = data;
  }

  return edges;
}

/**
 * Function used to infer the model of the graph's nodes or edges.
 *
 * @param  {array} elements - The graph's relevant elements.
 * @return {array}
 */

// TODO: on large graph, we could also sample or let the user indicate the types
function inferModel(elements) {
  var model = {},
      attributes,
      type,
      k;

  // Testing every attributes
  for (var i = 0, l = elements.length; i < l; i++) {
    attributes = elements[i].attributes;

    if (!attributes)
      continue;

    for (k in attributes) {
      type = detectValueType(attributes[k]);

      if (type === 'empty')
        continue;

      if (!model[k])
        model[k] = type;
      else {
        if (model[k] === 'integer' && type === 'long')
          model[k] = type;
        else if (model[k] !== type)
          model[k] = 'string';
      }
    }
  }

  // TODO: check default values
  return model;
}

/**
 * Function used to write a model.
 *
 * @param {XMLWriter} writer     - The writer to use.
 * @param {object}    model      - Model to write.
 * @param {string}    modelClass - Class of the model.
 */
function writeModel(writer, model, modelClass) {
  var name;

  if (!Object.keys(model).length)
    return;

  writer.startElement('attributes');
  writer.writeAttribute('class', modelClass);

  for (name in model) {
    writer.startElement('attribute');
    writer.writeAttribute('id', name);
    writer.writeAttribute('title', name);
    writer.writeAttribute('type', model[name]);
    writer.endElement();
  }

  writer.endElement();
}

function writeElements(writer, type, model, elements) {
  var emptyModel = !Object.keys(model).length,
      element,
      name,
      color,
      value,
      edgeType,
      attributes,
      weight,
      viz,
      k,
      i,
      l;

  writer.startElement(type + 's');

  for (i = 0, l = elements.length; i < l; i++) {
    element = elements[i];
    attributes = element.attributes;
    viz = element.viz;

    writer.startElement(type);
    writer.writeAttribute('id', element.key);

    if (type === 'edge') {
      edgeType = element.undirected ? 'undirected' : 'directed';

      if (edgeType !== writer.defaultEdgeType)
        writer.writeAttribute('type', edgeType);

      writer.writeAttribute('source', element.source);
      writer.writeAttribute('target', element.target);

      weight = element.weight;

      if ((typeof weight === 'number' && !isNaN(weight)) || typeof weight === 'string')
        writer.writeAttribute('weight', element.weight);
    }

    if (element.label)
      writer.writeAttribute('label', element.label);

    if (!emptyModel && attributes) {
      writer.startElement('attvalues');

      for (name in model) {
        if (name in attributes) {
          value = attributes[name];

          if (isEmptyValue(value))
            continue;

          writer.startElement('attvalue');
          writer.writeAttribute('for', name);
          writer.writeAttribute('value', cast(model[name], value));
          writer.endElement();
        }
      }

      writer.endElement();
    }

    if (viz) {

      //-- 1) Color
      if (viz.color) {
        color = CSSColorToRGBA(viz.color);

        writer.startElementNS('viz', 'color');

        for (k in color)
          writer.writeAttribute(k, color[k]);

        writer.endElement();
      }

      //-- 2) Size
      if ('size' in viz) {
        writer.startElementNS('viz', 'size');
        writer.writeAttribute('value', viz.size);
        writer.endElement();
      }

      //-- 3) Position
      if ('x' in viz || 'y' in viz || 'z' in viz) {
        writer.startElementNS('viz', 'position');

        if ('x' in viz)
          writer.writeAttribute('x', viz.x);

        if ('y' in viz)
          writer.writeAttribute('y', viz.y);

        if ('z' in viz)
          writer.writeAttribute('z', viz.z);

        writer.endElement();
      }

      //-- 4) Shape
      if (viz.shape) {
        writer.startElementNS('viz', 'shape');
        writer.writeAttribute('value', viz.shape);
        writer.endElement();
      }

      //-- 5) Thickness
      if ('thickness' in viz) {
        writer.startElementNS('viz', 'thickness');
        writer.writeAttribute('value', viz.thickness);
        writer.endElement();
      }
    }

    writer.endElement();
  }

  writer.endElement();
}

/**
 * Defaults.
 */
var DEFAULTS = {
  encoding: 'UTF-8',
  pretty: true,
  formatNode: DEFAULT_NODE_FORMATTER,
  formatEdge: DEFAULT_EDGE_FORMATTER
};

/**
 * Function taking a graphology instance & outputting a gexf string.
 *
 * @param  {Graph}  graph        - Target graphology instance.
 * @param  {object} options      - Options:
 * @param  {string}   [encoding]   - Character encoding.
 * @param  {boolean}  [pretty]     - Whether to pretty print output.
 * @param  {function} [formatNode] - Function formatting nodes' output.
 * @param  {function} [formatEdge] - Function formatting edges' output.
 * @return {string}              - GEXF string.
 */
module.exports = function write(graph, options) {
  if (!isGraph(graph))
    throw new Error('graphology-gexf/writer: invalid graphology instance.');

  options = options || {};

  var indent = options.pretty === false ? false : '  ';

  var formatNode = options.formatNode || DEFAULTS.formatNode,
      formatEdge = options.formatEdge || DEFAULTS.formatEdge;

  var writer = new XMLWriter(indent);

  writer.startDocument('1.0', options.encoding || DEFAULTS.encoding);

  // Starting gexf
  writer.startElement('gexf');
  writer.writeAttribute('version', '1.2');
  writer.writeAttribute('xmlns', GEXF_NAMESPACE);
  writer.writeAttribute('xmlns:viz', GEXF_VIZ_NAMESPACE);

  // Processing meta
  writer.startElement('meta');
  var graphAttributes = graph.getAttributes();

  if (graphAttributes.lastModifiedDate)
    writer.writeAttribute('lastmodifieddate', graphAttributes.lastModifiedDate);

  for (var k in graphAttributes) {
    if (k !== 'lastModifiedDate')
      writer.writeElement(k, graphAttributes[k]);
  }

  writer.endElement();
  writer.startElement('graph');
  writer.defaultEdgeType = graph.type === 'mixed' ?
    'directed' :
    graph.type;

  writer.writeAttribute(
    'defaultedgetype',
    writer.defaultEdgeType
  );

  // Processing model
  var nodes = collectNodeData(graph, formatNode),
      edges = collectEdgeData(graph, formatEdge);

  var nodeModel = inferModel(nodes);

  writeModel(writer, nodeModel, 'node');

  var edgeModel = inferModel(edges);

  writeModel(writer, edgeModel, 'edge');

  // Processing nodes
  writeElements(writer, 'node', nodeModel, nodes);

  // Processing edges
  writeElements(writer, 'edge', edgeModel, edges);

  return writer.toString();
};


/***/ }),

/***/ "./node_modules/graphology-metrics/extent.js":
/*!***************************************************!*\
  !*** ./node_modules/graphology-metrics/extent.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Graphology Extent
 * ==================
 *
 * Simple function returning the extent of selected attributes of the graph.
 */
var isGraph = __webpack_require__(/*! graphology-utils/is-graph */ "./node_modules/graphology-utils/is-graph.js");

/**
 * Function returning the extent of the selected node attributes.
 *
 * @param  {Graph}        graph     - Target graph.
 * @param  {string|array} attribute - Single or multiple attributes.
 * @return {array|object}
 */
function nodeExtent(graph, attribute) {
  if (!isGraph(graph))
    throw new Error('graphology-metrics/extent: the given graph is not a valid graphology instance.');

  var attributes = [].concat(attribute);

  var nodes = graph.nodes(),
      node,
      data,
      value,
      key,
      a,
      i,
      l;

  var results = {};

  for (a = 0; a < attributes.length; a++) {
    key = attributes[a];

    results[key] = [Infinity, -Infinity];
  }

  for (i = 0, l = nodes.length; i < l; i++) {
    node = nodes[i];
    data = graph.getNodeAttributes(node);

    for (a = 0; a < attributes.length; a++) {
      key = attributes[a];
      value = data[key];

      if (value < results[key][0])
        results[key][0] = value;

      if (value > results[key][1])
        results[key][1] = value;
    }
  }

  return typeof attribute === 'string' ? results[attribute] : results;
}

/**
 * Function returning the extent of the selected edge attributes.
 *
 * @param  {Graph}        graph     - Target graph.
 * @param  {string|array} attribute - Single or multiple attributes.
 * @return {array|object}
 */
function edgeExtent(graph, attribute) {
  if (!isGraph(graph))
    throw new Error('graphology-metrics/extent: the given graph is not a valid graphology instance.');

  var attributes = [].concat(attribute);

  var edges = graph.edges(),
      edge,
      data,
      value,
      key,
      a,
      i,
      l;

  var results = {};

  for (a = 0; a < attributes.length; a++) {
    key = attributes[a];

    results[key] = [Infinity, -Infinity];
  }

  for (i = 0, l = edges.length; i < l; i++) {
    edge = edges[i];
    data = graph.getEdgeAttributes(edge);

    for (a = 0; a < attributes.length; a++) {
      key = attributes[a];
      value = data[key];

      if (value < results[key][0])
        results[key][0] = value;

      if (value > results[key][1])
        results[key][1] = value;
    }
  }

  return typeof attribute === 'string' ? results[attribute] : results;
}

/**
 * Exporting.
 */
var extent = nodeExtent;
extent.nodeExtent = nodeExtent;
extent.edgeExtent = edgeExtent;

module.exports = extent;


/***/ }),

/***/ "./node_modules/graphology-utils/is-graph-constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/graphology-utils/is-graph-constructor.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Graphology isGraphConstructor
 * ==============================
 *
 * Very simple function aiming at ensuring the given variable is a
 * graphology constructor.
 */

/**
 * Checking the value is a graphology constructor.
 *
 * @param  {any}     value - Target value.
 * @return {boolean}
 */
module.exports = function isGraphConstructor(value) {
  return (
    value !== null &&
    typeof value === 'function' &&
    typeof value.prototype === 'object' &&
    typeof value.prototype.addUndirectedEdgeWithKey === 'function' &&
    typeof value.prototype.dropNode === 'function'
  );
};


/***/ }),

/***/ "./node_modules/graphology-utils/is-graph.js":
/*!***************************************************!*\
  !*** ./node_modules/graphology-utils/is-graph.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Graphology isGraph
 * ===================
 *
 * Very simple function aiming at ensuring the given variable is a
 * graphology instance.
 */

/**
 * Checking the value is a graphology instance.
 *
 * @param  {any}     value - Target value.
 * @return {boolean}
 */
module.exports = function isGraph(value) {
  return (
    value !== null &&
    typeof value === 'object' &&
    typeof value.addUndirectedEdgeWithKey === 'function' &&
    typeof value.dropNode === 'function' &&
    typeof value.multi === 'boolean'
  );
};


/***/ }),

/***/ "./node_modules/graphology/dist/attributes.js":
/*!****************************************************!*\
  !*** ./node_modules/graphology/dist/attributes.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.attachAttributesMethods = attachAttributesMethods;

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/graphology/dist/utils.js");

var _errors = __webpack_require__(/*! ./errors */ "./node_modules/graphology/dist/errors.js");

var _data = __webpack_require__(/*! ./data */ "./node_modules/graphology/dist/data.js");

/**
 * Attach an attribute getter method onto the provided class.
 *
 * @param {function} Class         - Target class.
 * @param {string}   method        - Method name.
 * @param {string}   type          - Type of the edge to find.
 * @param {Class}    EdgeDataClass - Class of the edges to filter.
 */
function attachAttributeGetter(Class, method, type, EdgeDataClass) {

  /**
   * Get the desired attribute for the given element (node or edge).
   *
   * Arity 2:
   * @param  {any}    element - Target element.
   * @param  {string} name    - Attribute's name.
   *
   * Arity 3 (only for edges):
   * @param  {any}     source - Source element.
   * @param  {any}     target - Target element.
   * @param  {string}  name   - Attribute's name.
   *
   * @return {mixed}          - The attribute's value.
   *
   * @throws {Error} - Will throw if too many arguments are provided.
   * @throws {Error} - Will throw if any of the elements is not found.
   */
  Class.prototype[method] = function (element, name) {
    var data = void 0;

    if (this.type !== 'mixed' && type !== 'mixed' && type !== this.type) throw new _errors.UsageGraphError('Graph.' + method + ': cannot find this type of edges in your ' + this.type + ' graph.');

    if (arguments.length > 2) {

      if (this.multi) throw new _errors.UsageGraphError('Graph.' + method + ': cannot use a {source,target} combo when asking about an edge\'s attributes in a MultiGraph since we cannot infer the one you want information about.');

      var source = '' + element,
          target = '' + name;

      name = arguments[2];

      data = (0, _utils.getMatchingEdge)(this, source, target, type);

      if (!data) throw new _errors.NotFoundGraphError('Graph.' + method + ': could not find an edge for the given path ("' + source + '" - "' + target + '").');
    } else {
      element = '' + element;
      data = this._edges.get(element);

      if (!data) throw new _errors.NotFoundGraphError('Graph.' + method + ': could not find the "' + element + '" edge in the graph.');
    }

    if (type !== 'mixed' && !(data instanceof EdgeDataClass)) throw new _errors.NotFoundGraphError('Graph.' + method + ': could not find the "' + element + '" ' + type + ' edge in the graph.');

    return data.attributes[name];
  };
}

/**
 * Attach an attributes getter method onto the provided class.
 *
 * @param {function} Class       - Target class.
 * @param {string}   method      - Method name.
 * @param {string}   type        - Type of the edge to find.
 * @param {Class}    EdgeDataClass - Class of the edges to filter.
 */
/**
 * Graphology Attributes methods
 * ==============================
 *
 * Attributes-related methods being exactly the same for nodes & edges,
 * we abstract them here for factorization reasons.
 */
function attachAttributesGetter(Class, method, type, EdgeDataClass) {

  /**
   * Retrieves all the target element's attributes.
   *
   * Arity 2:
   * @param  {any}    element - Target element.
   *
   * Arity 3 (only for edges):
   * @param  {any}     source - Source element.
   * @param  {any}     target - Target element.
   *
   * @return {object}          - The element's attributes.
   *
   * @throws {Error} - Will throw if too many arguments are provided.
   * @throws {Error} - Will throw if any of the elements is not found.
   */
  Class.prototype[method] = function (element) {
    var data = void 0;

    if (this.type !== 'mixed' && type !== 'mixed' && type !== this.type) throw new _errors.UsageGraphError('Graph.' + method + ': cannot find this type of edges in your ' + this.type + ' graph.');

    if (arguments.length > 1) {

      if (this.multi) throw new _errors.UsageGraphError('Graph.' + method + ': cannot use a {source,target} combo when asking about an edge\'s attributes in a MultiGraph since we cannot infer the one you want information about.');

      var source = '' + element,
          target = '' + arguments[1];

      data = (0, _utils.getMatchingEdge)(this, source, target, type);

      if (!data) throw new _errors.NotFoundGraphError('Graph.' + method + ': could not find an edge for the given path ("' + source + '" - "' + target + '").');
    } else {
      element = '' + element;
      data = this._edges.get(element);

      if (!data) throw new _errors.NotFoundGraphError('Graph.' + method + ': could not find the "' + element + '" edge in the graph.');
    }

    if (type !== 'mixed' && !(data instanceof EdgeDataClass)) throw new _errors.NotFoundGraphError('Graph.' + method + ': could not find the "' + element + '" ' + type + ' edge in the graph.');

    return data.attributes;
  };
}

/**
 * Attach an attribute checker method onto the provided class.
 *
 * @param {function} Class       - Target class.
 * @param {string}   method      - Method name.
 * @param {string}   type        - Type of the edge to find.
 * @param {Class}    EdgeDataClass - Class of the edges to filter.
 */
function attachAttributeChecker(Class, method, type, EdgeDataClass) {

  /**
   * Checks whether the desired attribute is set for the given element (node or edge).
   *
   * Arity 2:
   * @param  {any}    element - Target element.
   * @param  {string} name    - Attribute's name.
   *
   * Arity 3 (only for edges):
   * @param  {any}     source - Source element.
   * @param  {any}     target - Target element.
   * @param  {string}  name   - Attribute's name.
   *
   * @return {boolean}
   *
   * @throws {Error} - Will throw if too many arguments are provided.
   * @throws {Error} - Will throw if any of the elements is not found.
   */
  Class.prototype[method] = function (element, name) {
    var data = void 0;

    if (this.type !== 'mixed' && type !== 'mixed' && type !== this.type) throw new _errors.UsageGraphError('Graph.' + method + ': cannot find this type of edges in your ' + this.type + ' graph.');

    if (arguments.length > 2) {

      if (this.multi) throw new _errors.UsageGraphError('Graph.' + method + ': cannot use a {source,target} combo when asking about an edge\'s attributes in a MultiGraph since we cannot infer the one you want information about.');

      var source = '' + element,
          target = '' + name;

      name = arguments[2];

      data = (0, _utils.getMatchingEdge)(this, source, target, type);

      if (!data) throw new _errors.NotFoundGraphError('Graph.' + method + ': could not find an edge for the given path ("' + source + '" - "' + target + '").');
    } else {
      element = '' + element;
      data = this._edges.get(element);

      if (!data) throw new _errors.NotFoundGraphError('Graph.' + method + ': could not find the "' + element + '" edge in the graph.');
    }

    if (type !== 'mixed' && !(data instanceof EdgeDataClass)) throw new _errors.NotFoundGraphError('Graph.' + method + ': could not find the "' + element + '" ' + type + ' edge in the graph.');

    return data.attributes.hasOwnProperty(name);
  };
}

/**
 * Attach an attribute setter method onto the provided class.
 *
 * @param {function} Class         - Target class.
 * @param {string}   method        - Method name.
 * @param {string}   type          - Type of the edge to find.
 * @param {Class}    EdgeDataClass - Class of the edges to filter.
 */
function attachAttributeSetter(Class, method, type, EdgeDataClass) {

  /**
   * Set the desired attribute for the given element (node or edge).
   *
   * Arity 2:
   * @param  {any}    element - Target element.
   * @param  {string} name    - Attribute's name.
   * @param  {mixed}  value   - New attribute value.
   *
   * Arity 3 (only for edges):
   * @param  {any}     source - Source element.
   * @param  {any}     target - Target element.
   * @param  {string}  name   - Attribute's name.
   * @param  {mixed}  value   - New attribute value.
   *
   * @return {Graph}          - Returns itself for chaining.
   *
   * @throws {Error} - Will throw if too many arguments are provided.
   * @throws {Error} - Will throw if any of the elements is not found.
   */
  Class.prototype[method] = function (element, name, value) {
    var data = void 0;

    if (this.type !== 'mixed' && type !== 'mixed' && type !== this.type) throw new _errors.UsageGraphError('Graph.' + method + ': cannot find this type of edges in your ' + this.type + ' graph.');

    if (arguments.length > 3) {

      if (this.multi) throw new _errors.UsageGraphError('Graph.' + method + ': cannot use a {source,target} combo when asking about an edge\'s attributes in a MultiGraph since we cannot infer the one you want information about.');

      var source = '' + element,
          target = '' + name;

      name = arguments[2];
      value = arguments[3];

      data = (0, _utils.getMatchingEdge)(this, source, target, type);

      if (!data) throw new _errors.NotFoundGraphError('Graph.' + method + ': could not find an edge for the given path ("' + source + '" - "' + target + '").');
    } else {
      element = '' + element;
      data = this._edges.get(element);

      if (!data) throw new _errors.NotFoundGraphError('Graph.' + method + ': could not find the "' + element + '" edge in the graph.');
    }

    if (type !== 'mixed' && !(data instanceof EdgeDataClass)) throw new _errors.NotFoundGraphError('Graph.' + method + ': could not find the "' + element + '" ' + type + ' edge in the graph.');

    data.attributes[name] = value;

    // Emitting
    this.emit('edgeAttributesUpdated', {
      key: data.key,
      type: 'set',
      meta: {
        name: name,
        value: value
      }
    });

    return this;
  };
}

/**
 * Attach an attribute updater method onto the provided class.
 *
 * @param {function} Class         - Target class.
 * @param {string}   method        - Method name.
 * @param {string}   type          - Type of the edge to find.
 * @param {Class}    EdgeDataClass - Class of the edges to filter.
 */
function attachAttributeUpdater(Class, method, type, EdgeDataClass) {

  /**
   * Update the desired attribute for the given element (node or edge) using
   * the provided function.
   *
   * Arity 2:
   * @param  {any}      element - Target element.
   * @param  {string}   name    - Attribute's name.
   * @param  {function} updater - Updater function.
   *
   * Arity 3 (only for edges):
   * @param  {any}      source  - Source element.
   * @param  {any}      target  - Target element.
   * @param  {string}   name    - Attribute's name.
   * @param  {function} updater - Updater function.
   *
   * @return {Graph}            - Returns itself for chaining.
   *
   * @throws {Error} - Will throw if too many arguments are provided.
   * @throws {Error} - Will throw if any of the elements is not found.
   */
  Class.prototype[method] = function (element, name, updater) {
    var data = void 0;

    if (this.type !== 'mixed' && type !== 'mixed' && type !== this.type) throw new _errors.UsageGraphError('Graph.' + method + ': cannot find this type of edges in your ' + this.type + ' graph.');

    if (arguments.length > 3) {

      if (this.multi) throw new _errors.UsageGraphError('Graph.' + method + ': cannot use a {source,target} combo when asking about an edge\'s attributes in a MultiGraph since we cannot infer the one you want information about.');

      var source = '' + element,
          target = '' + name;

      name = arguments[2];
      updater = arguments[3];

      data = (0, _utils.getMatchingEdge)(this, source, target, type);

      if (!data) throw new _errors.NotFoundGraphError('Graph.' + method + ': could not find an edge for the given path ("' + source + '" - "' + target + '").');
    } else {
      element = '' + element;
      data = this._edges.get(element);

      if (!data) throw new _errors.NotFoundGraphError('Graph.' + method + ': could not find the "' + element + '" edge in the graph.');
    }

    if (typeof updater !== 'function') throw new _errors.InvalidArgumentsGraphError('Graph.' + method + ': updater should be a function.');

    if (type !== 'mixed' && !(data instanceof EdgeDataClass)) throw new _errors.NotFoundGraphError('Graph.' + method + ': could not find the "' + element + '" ' + type + ' edge in the graph.');

    data.attributes[name] = updater(data.attributes[name]);

    // Emitting
    this.emit('edgeAttributesUpdated', {
      key: data.key,
      type: 'set',
      meta: {
        name: name,
        value: data.attributes[name]
      }
    });

    return this;
  };
}

/**
 * Attach an attribute remover method onto the provided class.
 *
 * @param {function} Class         - Target class.
 * @param {string}   method        - Method name.
 * @param {string}   type          - Type of the edge to find.
 * @param {Class}    EdgeDataClass - Class of the edges to filter.
 */
function attachAttributeRemover(Class, method, type, EdgeDataClass) {

  /**
   * Remove the desired attribute for the given element (node or edge).
   *
   * Arity 2:
   * @param  {any}    element - Target element.
   * @param  {string} name    - Attribute's name.
   *
   * Arity 3 (only for edges):
   * @param  {any}     source - Source element.
   * @param  {any}     target - Target element.
   * @param  {string}  name   - Attribute's name.
   *
   * @return {Graph}          - Returns itself for chaining.
   *
   * @throws {Error} - Will throw if too many arguments are provided.
   * @throws {Error} - Will throw if any of the elements is not found.
   */
  Class.prototype[method] = function (element, name) {
    var data = void 0;

    if (this.type !== 'mixed' && type !== 'mixed' && type !== this.type) throw new _errors.UsageGraphError('Graph.' + method + ': cannot find this type of edges in your ' + this.type + ' graph.');

    if (arguments.length > 2) {

      if (this.multi) throw new _errors.UsageGraphError('Graph.' + method + ': cannot use a {source,target} combo when asking about an edge\'s attributes in a MultiGraph since we cannot infer the one you want information about.');

      var source = '' + element,
          target = '' + name;

      name = arguments[2];

      data = (0, _utils.getMatchingEdge)(this, source, target, type);

      if (!data) throw new _errors.NotFoundGraphError('Graph.' + method + ': could not find an edge for the given path ("' + source + '" - "' + target + '").');
    } else {
      element = '' + element;
      data = this._edges.get(element);

      if (!data) throw new _errors.NotFoundGraphError('Graph.' + method + ': could not find the "' + element + '" edge in the graph.');
    }

    if (type !== 'mixed' && !(data instanceof EdgeDataClass)) throw new _errors.NotFoundGraphError('Graph.' + method + ': could not find the "' + element + '" ' + type + ' edge in the graph.');

    delete data.attributes[name];

    // Emitting
    this.emit('edgeAttributesUpdated', {
      key: data.key,
      type: 'remove',
      meta: {
        name: name
      }
    });

    return this;
  };
}

/**
 * Attach an attribute replacer method onto the provided class.
 *
 * @param {function} Class         - Target class.
 * @param {string}   method        - Method name.
 * @param {string}   type          - Type of the edge to find.
 * @param {Class}    EdgeDataClass - Class of the edges to filter.
 */
function attachAttributesReplacer(Class, method, type, EdgeDataClass) {

  /**
   * Replace the attributes for the given element (node or edge).
   *
   * Arity 2:
   * @param  {any}    element    - Target element.
   * @param  {object} attributes - New attributes.
   *
   * Arity 3 (only for edges):
   * @param  {any}     source     - Source element.
   * @param  {any}     target     - Target element.
   * @param  {object}  attributes - New attributes.
   *
   * @return {Graph}              - Returns itself for chaining.
   *
   * @throws {Error} - Will throw if too many arguments are provided.
   * @throws {Error} - Will throw if any of the elements is not found.
   */
  Class.prototype[method] = function (element, attributes) {
    var data = void 0;

    if (this.type !== 'mixed' && type !== 'mixed' && type !== this.type) throw new _errors.UsageGraphError('Graph.' + method + ': cannot find this type of edges in your ' + this.type + ' graph.');

    if (arguments.length > 2) {

      if (this.multi) throw new _errors.UsageGraphError('Graph.' + method + ': cannot use a {source,target} combo when asking about an edge\'s attributes in a MultiGraph since we cannot infer the one you want information about.');

      var source = '' + element,
          target = '' + attributes;

      attributes = arguments[2];

      data = (0, _utils.getMatchingEdge)(this, source, target, type);

      if (!data) throw new _errors.NotFoundGraphError('Graph.' + method + ': could not find an edge for the given path ("' + source + '" - "' + target + '").');
    } else {
      element = '' + element;
      data = this._edges.get(element);

      if (!data) throw new _errors.NotFoundGraphError('Graph.' + method + ': could not find the "' + element + '" edge in the graph.');
    }

    if (!(0, _utils.isPlainObject)(attributes)) throw new _errors.InvalidArgumentsGraphError('Graph.' + method + ': provided attributes are not a plain object.');

    if (type !== 'mixed' && !(data instanceof EdgeDataClass)) throw new _errors.NotFoundGraphError('Graph.' + method + ': could not find the "' + element + '" ' + type + ' edge in the graph.');

    var oldAttributes = data.attributes;

    data.attributes = attributes;

    // Emitting
    this.emit('edgeAttributesUpdated', {
      key: data.key,
      type: 'replace',
      meta: {
        before: oldAttributes,
        after: attributes
      }
    });

    return this;
  };
}

/**
 * Attach an attribute merger method onto the provided class.
 *
 * @param {function} Class         - Target class.
 * @param {string}   method        - Method name.
 * @param {string}   type          - Type of the edge to find.
 * @param {Class}    EdgeDataClass - Class of the edges to filter.
 */
function attachAttributesMerger(Class, method, type, EdgeDataClass) {

  /**
   * Replace the attributes for the given element (node or edge).
   *
   * Arity 2:
   * @param  {any}    element    - Target element.
   * @param  {object} attributes - Attributes to merge.
   *
   * Arity 3 (only for edges):
   * @param  {any}     source     - Source element.
   * @param  {any}     target     - Target element.
   * @param  {object}  attributes - Attributes to merge.
   *
   * @return {Graph}              - Returns itself for chaining.
   *
   * @throws {Error} - Will throw if too many arguments are provided.
   * @throws {Error} - Will throw if any of the elements is not found.
   */
  Class.prototype[method] = function (element, attributes) {
    var data = void 0;

    if (this.type !== 'mixed' && type !== 'mixed' && type !== this.type) throw new _errors.UsageGraphError('Graph.' + method + ': cannot find this type of edges in your ' + this.type + ' graph.');

    if (arguments.length > 2) {

      if (this.multi) throw new _errors.UsageGraphError('Graph.' + method + ': cannot use a {source,target} combo when asking about an edge\'s attributes in a MultiGraph since we cannot infer the one you want information about.');

      var source = '' + element,
          target = '' + attributes;

      attributes = arguments[2];

      data = (0, _utils.getMatchingEdge)(this, source, target, type);

      if (!data) throw new _errors.NotFoundGraphError('Graph.' + method + ': could not find an edge for the given path ("' + source + '" - "' + target + '").');
    } else {
      element = '' + element;
      data = this._edges.get(element);

      if (!data) throw new _errors.NotFoundGraphError('Graph.' + method + ': could not find the "' + element + '" edge in the graph.');
    }

    if (!(0, _utils.isPlainObject)(attributes)) throw new _errors.InvalidArgumentsGraphError('Graph.' + method + ': provided attributes are not a plain object.');

    if (type !== 'mixed' && !(data instanceof EdgeDataClass)) throw new _errors.NotFoundGraphError('Graph.' + method + ': could not find the "' + element + '" ' + type + ' edge in the graph.');

    (0, _utils.assign)(data.attributes, attributes);

    // Emitting
    this.emit('edgeAttributesUpdated', {
      key: data.key,
      type: 'merge',
      meta: {
        data: attributes
      }
    });

    return this;
  };
}

/**
 * List of methods to attach.
 */
var ATTRIBUTES_METHODS = [{
  name: function name(element) {
    return 'get' + element + 'Attribute';
  },
  attacher: attachAttributeGetter
}, {
  name: function name(element) {
    return 'get' + element + 'Attributes';
  },
  attacher: attachAttributesGetter
}, {
  name: function name(element) {
    return 'has' + element + 'Attribute';
  },
  attacher: attachAttributeChecker
}, {
  name: function name(element) {
    return 'set' + element + 'Attribute';
  },
  attacher: attachAttributeSetter
}, {
  name: function name(element) {
    return 'update' + element + 'Attribute';
  },
  attacher: attachAttributeUpdater
}, {
  name: function name(element) {
    return 'remove' + element + 'Attribute';
  },
  attacher: attachAttributeRemover
}, {
  name: function name(element) {
    return 'replace' + element + 'Attributes';
  },
  attacher: attachAttributesReplacer
}, {
  name: function name(element) {
    return 'merge' + element + 'Attributes';
  },
  attacher: attachAttributesMerger
}];

/**
 * Attach every attributes-related methods to a Graph class.
 *
 * @param {function} Graph - Target class.
 */
function attachAttributesMethods(Graph) {
  ATTRIBUTES_METHODS.forEach(function (_ref) {
    var name = _ref.name,
        attacher = _ref.attacher;


    // For edges
    attacher(Graph, name('Edge'), 'mixed', _data.DirectedEdgeData);

    // For directed edges
    attacher(Graph, name('DirectedEdge'), 'directed', _data.DirectedEdgeData);

    // For undirected edges
    attacher(Graph, name('UndirectedEdge'), 'undirected', _data.UndirectedEdgeData);
  });
}

/***/ }),

/***/ "./node_modules/graphology/dist/data.js":
/*!**********************************************!*\
  !*** ./node_modules/graphology/dist/data.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MixedNodeData = MixedNodeData;
exports.DirectedNodeData = DirectedNodeData;
exports.UndirectedNodeData = UndirectedNodeData;
exports.DirectedEdgeData = DirectedEdgeData;
exports.UndirectedEdgeData = UndirectedEdgeData;
/**
 * Graphology Internal Data Classes
 * =================================
 *
 * Internal classes hopefully reduced to structs by engines & storing
 * necessary information for nodes & edges.
 *
 * Note that those classes don't rely on the `class` keyword to avoid some
 * cruft introduced by most of ES2015 transpilers.
 */

/**
 * MixedNodeData class.
 *
 * @constructor
 * @param {string} string     - The node's key.
 * @param {object} attributes - Node's attributes.
 */
function MixedNodeData(key, attributes) {

  // Attributes
  this.key = key;
  this.attributes = attributes;

  // Degrees
  this.inDegree = 0;
  this.outDegree = 0;
  this.undirectedDegree = 0;
  this.directedSelfLoops = 0;
  this.undirectedSelfLoops = 0;

  // Indices
  this.in = {};
  this.out = {};
  this.undirected = {};
}

/**
 * DirectedNodeData class.
 *
 * @constructor
 * @param {string} string     - The node's key.
 * @param {object} attributes - Node's attributes.
 */
function DirectedNodeData(key, attributes) {

  // Attributes
  this.key = key;
  this.attributes = attributes || {};

  // Degrees
  this.inDegree = 0;
  this.outDegree = 0;
  this.directedSelfLoops = 0;

  // Indices
  this.in = {};
  this.out = {};
}

DirectedNodeData.prototype.upgradeToMixed = function () {

  // Degrees
  this.undirectedDegree = 0;
  this.undirectedSelfLoops = 0;

  // Indices
  this.undirected = {};
};

/**
 * UndirectedNodeData class.
 *
 * @constructor
 * @param {string} string     - The node's key.
 * @param {object} attributes - Node's attributes.
 */
function UndirectedNodeData(key, attributes) {

  // Attributes
  this.key = key;
  this.attributes = attributes || {};

  // Degrees
  this.undirectedDegree = 0;
  this.undirectedSelfLoops = 0;

  // Indices
  this.undirected = {};
}

UndirectedNodeData.prototype.upgradeToMixed = function () {

  // Degrees
  this.inDegree = 0;
  this.outDegree = 0;
  this.directedSelfLoops = 0;

  // Indices
  this.in = {};
  this.out = {};
};

/**
 * DirectedEdgeData class.
 *
 * @constructor
 * @param {string}  string       - The edge's key.
 * @param {boolean} generatedKey - Was its key generated?
 * @param {string}  source       - Source of the edge.
 * @param {string}  target       - Target of the edge.
 * @param {object}  attributes   - Edge's attributes.
 */
function DirectedEdgeData(key, generatedKey, source, target, attributes) {

  // Attributes
  this.key = key;
  this.attributes = attributes;

  // Extremities
  this.source = source;
  this.target = target;

  // Was its key generated?
  this.generatedKey = generatedKey;
}

/**
 * UndirectedEdgeData class.
 *
 * @constructor
 * @param {string}  string       - The edge's key.
 * @param {boolean} generatedKey - Was its key generated?
 * @param {string}  source       - Source of the edge.
 * @param {string}  target       - Target of the edge.
 * @param {object}  attributes   - Edge's attributes.
 */
function UndirectedEdgeData(key, generatedKey, source, target, attributes) {

  // Attributes
  this.key = key;
  this.attributes = attributes;

  // Extremities
  this.source = source;
  this.target = target;

  // Was its key generated?
  this.generatedKey = generatedKey;
}

/***/ }),

/***/ "./node_modules/graphology/dist/errors.js":
/*!************************************************!*\
  !*** ./node_modules/graphology/dist/errors.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Graphology Custom Errors
 * =========================
 *
 * Defining custom errors for ease of use & easy unit tests across
 * implementations (normalized typology rather than relying on error
 * messages to check whether the correct error was found).
 */
var GraphError = exports.GraphError = function (_Error) {
  _inherits(GraphError, _Error);

  function GraphError(message, data) {
    _classCallCheck(this, GraphError);

    var _this = _possibleConstructorReturn(this, _Error.call(this));

    _this.name = 'GraphError';
    _this.message = message || '';
    _this.data = data || {};
    return _this;
  }

  return GraphError;
}(Error);

var InvalidArgumentsGraphError = exports.InvalidArgumentsGraphError = function (_GraphError) {
  _inherits(InvalidArgumentsGraphError, _GraphError);

  function InvalidArgumentsGraphError(message, data) {
    _classCallCheck(this, InvalidArgumentsGraphError);

    var _this2 = _possibleConstructorReturn(this, _GraphError.call(this, message, data));

    _this2.name = 'InvalidArgumentsGraphError';

    // This is V8 specific to enhance stack readability
    if (typeof Error.captureStackTrace === 'function') Error.captureStackTrace(_this2, InvalidArgumentsGraphError.prototype.constructor);
    return _this2;
  }

  return InvalidArgumentsGraphError;
}(GraphError);

var NotFoundGraphError = exports.NotFoundGraphError = function (_GraphError2) {
  _inherits(NotFoundGraphError, _GraphError2);

  function NotFoundGraphError(message, data) {
    _classCallCheck(this, NotFoundGraphError);

    var _this3 = _possibleConstructorReturn(this, _GraphError2.call(this, message, data));

    _this3.name = 'NotFoundGraphError';

    // This is V8 specific to enhance stack readability
    if (typeof Error.captureStackTrace === 'function') Error.captureStackTrace(_this3, NotFoundGraphError.prototype.constructor);
    return _this3;
  }

  return NotFoundGraphError;
}(GraphError);

var UsageGraphError = exports.UsageGraphError = function (_GraphError3) {
  _inherits(UsageGraphError, _GraphError3);

  function UsageGraphError(message, data) {
    _classCallCheck(this, UsageGraphError);

    var _this4 = _possibleConstructorReturn(this, _GraphError3.call(this, message, data));

    _this4.name = 'UsageGraphError';

    // This is V8 specific to enhance stack readability
    if (typeof Error.captureStackTrace === 'function') Error.captureStackTrace(_this4, UsageGraphError.prototype.constructor);
    return _this4;
  }

  return UsageGraphError;
}(GraphError);

/***/ }),

/***/ "./node_modules/graphology/dist/graph.js":
/*!***********************************************!*\
  !*** ./node_modules/graphology/dist/graph.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = __webpack_require__(/*! events */ "./node_modules/events/events.js");

var _iterator = __webpack_require__(/*! obliterator/iterator */ "./node_modules/obliterator/iterator.js");

var _iterator2 = _interopRequireDefault(_iterator);

var _take = __webpack_require__(/*! obliterator/take */ "./node_modules/obliterator/take.js");

var _take2 = _interopRequireDefault(_take);

var _errors = __webpack_require__(/*! ./errors */ "./node_modules/graphology/dist/errors.js");

var _data = __webpack_require__(/*! ./data */ "./node_modules/graphology/dist/data.js");

var _indices = __webpack_require__(/*! ./indices */ "./node_modules/graphology/dist/indices.js");

var _attributes = __webpack_require__(/*! ./attributes */ "./node_modules/graphology/dist/attributes.js");

var _edges = __webpack_require__(/*! ./iteration/edges */ "./node_modules/graphology/dist/iteration/edges.js");

var _neighbors = __webpack_require__(/*! ./iteration/neighbors */ "./node_modules/graphology/dist/iteration/neighbors.js");

var _serialization = __webpack_require__(/*! ./serialization */ "./node_modules/graphology/dist/serialization.js");

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/graphology/dist/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-nested-ternary: 0 */
/**
 * Graphology Reference Implementation
 * ====================================
 *
 * Reference implementation of the graphology specs.
 */


/**
 * Enums.
 */
var TYPES = new Set(['directed', 'undirected', 'mixed']);

var EMITTER_PROPS = new Set(['domain', '_events', '_eventsCount', '_maxListeners']);

var EDGE_ADD_METHODS = [{
  name: function name(verb) {
    return verb + 'Edge';
  },
  generateKey: true
}, {
  name: function name(verb) {
    return verb + 'DirectedEdge';
  },
  generateKey: true,
  type: 'directed'
}, {
  name: function name(verb) {
    return verb + 'UndirectedEdge';
  },
  generateKey: true,
  type: 'undirected'
}, {
  name: function name(verb) {
    return verb + 'EdgeWithKey';
  }
}, {
  name: function name(verb) {
    return verb + 'DirectedEdgeWithKey';
  },
  type: 'directed'
}, {
  name: function name(verb) {
    return verb + 'UndirectedEdgeWithKey';
  },
  type: 'undirected'
}];

/**
 * Default options.
 */
var DEFAULTS = {
  allowSelfLoops: true,
  edgeKeyGenerator: null,
  multi: false,
  type: 'mixed'
};

/**
 * Abstract functions used by the Graph class for various methods.
 */

/**
 * Internal method used to add an arbitrary edge to the given graph.
 *
 * @param  {Graph}   graph           - Target graph.
 * @param  {string}  name            - Name of the child method for errors.
 * @param  {boolean} mustGenerateKey - Should the graph generate an id?
 * @param  {boolean} undirected      - Whether the edge is undirected.
 * @param  {any}     edge            - The edge's key.
 * @param  {any}     source          - The source node.
 * @param  {any}     target          - The target node.
 * @param  {object}  [attributes]    - Optional attributes.
 * @return {any}                     - The edge.
 *
 * @throws {Error} - Will throw if the graph is of the wrong type.
 * @throws {Error} - Will throw if the given attributes are not an object.
 * @throws {Error} - Will throw if source or target doesn't exist.
 * @throws {Error} - Will throw if the edge already exist.
 */
function addEdge(graph, name, mustGenerateKey, undirected, edge, source, target, attributes) {

  // Checking validity of operation
  if (!undirected && graph.type === 'undirected') throw new _errors.UsageGraphError('Graph.' + name + ': you cannot add a directed edge to an undirected graph. Use the #.addEdge or #.addUndirectedEdge instead.');

  if (undirected && graph.type === 'directed') throw new _errors.UsageGraphError('Graph.' + name + ': you cannot add an undirected edge to a directed graph. Use the #.addEdge or #.addDirectedEdge instead.');

  if (attributes && !(0, _utils.isPlainObject)(attributes)) throw new _errors.InvalidArgumentsGraphError('Graph.' + name + ': invalid attributes. Expecting an object but got "' + attributes + '"');

  // Coercion of source & target:
  source = '' + source;
  target = '' + target;
  attributes = attributes || {};

  if (!graph.allowSelfLoops && source === target) throw new _errors.UsageGraphError('Graph.' + name + ': source & target are the same ("' + source + '"), thus creating a loop explicitly forbidden by this graph \'allowSelfLoops\' option set to false.');

  var sourceData = graph._nodes.get(source),
      targetData = graph._nodes.get(target);

  if (!sourceData) throw new _errors.NotFoundGraphError('Graph.' + name + ': source node "' + source + '" not found.');

  if (!targetData) throw new _errors.NotFoundGraphError('Graph.' + name + ': target node "' + target + '" not found.');

  // Must the graph generate an id for this edge?
  var eventData = {
    key: null,
    undirected: undirected,
    source: source,
    target: target,
    attributes: attributes
  };

  if (mustGenerateKey) edge = graph._edgeKeyGenerator(eventData);

  // Coercion of edge key
  edge = '' + edge;

  // Here, we have a key collision
  if (graph._edges.has(edge)) throw new _errors.UsageGraphError('Graph.' + name + ': the "' + edge + '" edge already exists in the graph.');

  // Here, we might have a source / target collision
  if (!graph.multi && (undirected ? typeof sourceData.undirected[target] !== 'undefined' : typeof sourceData.out[target] !== 'undefined')) {
    throw new _errors.UsageGraphError('Graph.' + name + ': an edge linking "' + source + '" to "' + target + '" already exists. If you really want to add multiple edges linking those nodes, you should create a multi graph by using the \'multi\' option.');
  }

  // Storing some data
  var DataClass = undirected ? _data.UndirectedEdgeData : _data.DirectedEdgeData;

  var edgeData = new DataClass(edge, mustGenerateKey, sourceData, targetData, attributes);

  // Adding the edge to the internal register
  graph._edges.set(edge, edgeData);

  // Incrementing node degree counters
  if (source === target) {
    if (undirected) sourceData.undirectedSelfLoops++;else sourceData.directedSelfLoops++;
  } else {
    if (undirected) {
      sourceData.undirectedDegree++;
      targetData.undirectedDegree++;
    } else {
      sourceData.outDegree++;
      targetData.inDegree++;
    }
  }

  // Updating relevant index
  (0, _indices.updateStructureIndex)(graph, undirected, edgeData, source, target, sourceData, targetData);

  if (undirected) graph._undirectedSize++;else graph._directedSize++;

  // Emitting
  eventData.key = edge;

  graph.emit('edgeAdded', eventData);

  return edge;
}

/**
 * Internal method used to add an arbitrary edge to the given graph.
 *
 * @param  {Graph}   graph           - Target graph.
 * @param  {string}  name            - Name of the child method for errors.
 * @param  {boolean} mustGenerateKey - Should the graph generate an id?
 * @param  {boolean} undirected      - Whether the edge is undirected.
 * @param  {any}     edge            - The edge's key.
 * @param  {any}     source          - The source node.
 * @param  {any}     target          - The target node.
 * @param  {object}  [attributes]    - Optional attributes.
 * @return {any}                     - The edge.
 *
 * @throws {Error} - Will throw if the graph is of the wrong type.
 * @throws {Error} - Will throw if the given attributes are not an object.
 * @throws {Error} - Will throw if source or target doesn't exist.
 * @throws {Error} - Will throw if the edge already exist.
 */
function mergeEdge(graph, name, mustGenerateKey, undirected, edge, source, target, attributes) {

  // Checking validity of operation
  if (!undirected && graph.type === 'undirected') throw new _errors.UsageGraphError('Graph.' + name + ': you cannot add a directed edge to an undirected graph. Use the #.addEdge or #.addUndirectedEdge instead.');

  if (undirected && graph.type === 'directed') throw new _errors.UsageGraphError('Graph.' + name + ': you cannot add an undirected edge to a directed graph. Use the #.addEdge or #.addDirectedEdge instead.');

  if (attributes && !(0, _utils.isPlainObject)(attributes)) throw new _errors.InvalidArgumentsGraphError('Graph.' + name + ': invalid attributes. Expecting an object but got "' + attributes + '"');

  // Coercion of source & target:
  source = '' + source;
  target = '' + target;
  attributes = attributes || {};

  if (!graph.allowSelfLoops && source === target) throw new _errors.UsageGraphError('Graph.' + name + ': source & target are the same ("' + source + '"), thus creating a loop explicitly forbidden by this graph \'allowSelfLoops\' option set to false.');

  var sourceData = graph._nodes.get(source),
      targetData = graph._nodes.get(target),
      edgeData = void 0;

  // Do we need to handle duplicate?
  var alreadyExistingEdge = null;

  if (!mustGenerateKey) {
    edgeData = graph._edges.get(edge);

    if (edgeData) {

      // Here, we need to ensure, if the user gave a key, that source & target
      // are coherent
      if (edgeData.source !== source || edgeData.target !== target || undirected && (edgeData.source !== target || edgeData.target !== source)) {
        throw new _errors.UsageGraphError('Graph.' + name + ': inconsistency detected when attempting to merge the "' + edge + '" edge with "' + source + '" source & "' + target + '" target vs. (' + edgeData.source + ', ' + edgeData.target + ').');
      }

      alreadyExistingEdge = edge;
    }
  }

  var alreadyExistingEdgeData = void 0;

  // Here, we might have a source / target collision
  if (!alreadyExistingEdge && !graph.multi && sourceData && (undirected ? typeof sourceData.undirected[target] !== 'undefined' : typeof sourceData.out[target] !== 'undefined')) {
    alreadyExistingEdgeData = (0, _utils.getMatchingEdge)(graph, source, target, undirected ? 'undirected' : 'directed');
  }

  // Handling duplicates
  if (alreadyExistingEdgeData) {

    // We can skip the attribute merging part if the user did not provide them
    if (!attributes) return alreadyExistingEdge;

    // Merging the attributes
    (0, _utils.assign)(alreadyExistingEdgeData.attributes, attributes);
    return alreadyExistingEdge;
  }

  // Must the graph generate an id for this edge?
  var eventData = {
    key: null,
    undirected: undirected,
    source: source,
    target: target,
    attributes: attributes
  };

  if (mustGenerateKey) edge = graph._edgeKeyGenerator(eventData);

  // Coercion of edge key
  edge = '' + edge;

  // Here, we have a key collision
  if (graph._edges.has(edge)) throw new _errors.UsageGraphError('Graph.' + name + ': the "' + edge + '" edge already exists in the graph.');

  if (!sourceData) {
    graph.addNode(source);
    sourceData = graph._nodes.get(source);

    if (source === target) targetData = sourceData;
  }
  if (!targetData) {
    graph.addNode(target);
    targetData = graph._nodes.get(target);
  }

  // Storing some data
  var DataClass = undirected ? _data.UndirectedEdgeData : _data.DirectedEdgeData;

  edgeData = new DataClass(edge, mustGenerateKey, sourceData, targetData, attributes);

  // Adding the edge to the internal register
  graph._edges.set(edge, edgeData);

  // Incrementing node degree counters
  if (source === target) {
    if (undirected) sourceData.undirectedSelfLoops++;else sourceData.directedSelfLoops++;
  } else {
    if (undirected) {
      sourceData.undirectedDegree++;
      targetData.undirectedDegree++;
    } else {
      sourceData.outDegree++;
      targetData.inDegree++;
    }
  }

  // Updating relevant index
  (0, _indices.updateStructureIndex)(graph, undirected, edgeData, source, target, sourceData, targetData);

  if (undirected) graph._undirectedSize++;else graph._directedSize++;

  // Emitting
  eventData.key = edge;

  graph.emit('edgeAdded', eventData);

  return edge;
}

/**
 * Graph class
 *
 * @constructor
 * @param  {object}  [options] - Options:
 * @param  {boolean}   [allowSelfLoops] - Allow self loops?
 * @param  {string}    [type]           - Type of the graph.
 * @param  {boolean}   [map]            - Allow references as keys?
 * @param  {boolean}   [multi]          - Allow parallel edges?
 *
 * @throws {Error} - Will throw if the arguments are not valid.
 */

var Graph = function (_EventEmitter) {
  _inherits(Graph, _EventEmitter);

  function Graph(options) {
    _classCallCheck(this, Graph);

    //-- Solving options
    var _this = _possibleConstructorReturn(this, _EventEmitter.call(this));

    options = (0, _utils.assign)({}, DEFAULTS, options);

    // Enforcing options validity
    if (options.edgeKeyGenerator && typeof options.edgeKeyGenerator !== 'function') throw new _errors.InvalidArgumentsGraphError('Graph.constructor: invalid \'edgeKeyGenerator\' option. Expecting a function but got "' + options.edgeKeyGenerator + '".');

    if (typeof options.multi !== 'boolean') throw new _errors.InvalidArgumentsGraphError('Graph.constructor: invalid \'multi\' option. Expecting a boolean but got "' + options.multi + '".');

    if (!TYPES.has(options.type)) throw new _errors.InvalidArgumentsGraphError('Graph.constructor: invalid \'type\' option. Should be one of "mixed", "directed" or "undirected" but got "' + options.type + '".');

    if (typeof options.allowSelfLoops !== 'boolean') throw new _errors.InvalidArgumentsGraphError('Graph.constructor: invalid \'allowSelfLoops\' option. Expecting a boolean but got "' + options.allowSelfLoops + '".');

    //-- Private properties

    // Utilities
    var NodeDataClass = options.type === 'mixed' ? _data.MixedNodeData : options.type === 'directed' ? _data.DirectedNodeData : _data.UndirectedNodeData;

    (0, _utils.privateProperty)(_this, 'NodeDataClass', NodeDataClass);

    // Indexes
    (0, _utils.privateProperty)(_this, '_attributes', {});
    (0, _utils.privateProperty)(_this, '_nodes', new Map());
    (0, _utils.privateProperty)(_this, '_edges', new Map());
    (0, _utils.privateProperty)(_this, '_directedSize', 0);
    (0, _utils.privateProperty)(_this, '_undirectedSize', 0);
    (0, _utils.privateProperty)(_this, '_edgeKeyGenerator', options.edgeKeyGenerator || (0, _utils.incrementalId)());

    // Options
    (0, _utils.privateProperty)(_this, '_options', options);

    // Emitter properties
    EMITTER_PROPS.forEach(function (prop) {
      return (0, _utils.privateProperty)(_this, prop, _this[prop]);
    });

    //-- Properties readers
    (0, _utils.readOnlyProperty)(_this, 'order', function () {
      return _this._nodes.size;
    });
    (0, _utils.readOnlyProperty)(_this, 'size', function () {
      return _this._edges.size;
    });
    (0, _utils.readOnlyProperty)(_this, 'directedSize', function () {
      return _this._directedSize;
    });
    (0, _utils.readOnlyProperty)(_this, 'undirectedSize', function () {
      return _this._undirectedSize;
    });
    (0, _utils.readOnlyProperty)(_this, 'multi', _this._options.multi);
    (0, _utils.readOnlyProperty)(_this, 'type', _this._options.type);
    (0, _utils.readOnlyProperty)(_this, 'allowSelfLoops', _this._options.allowSelfLoops);
    return _this;
  }

  /**---------------------------------------------------------------------------
   * Read
   **---------------------------------------------------------------------------
   */

  /**
   * Method returning whether the given node is found in the graph.
   *
   * @param  {any}     node - The node.
   * @return {boolean}
   */


  Graph.prototype.hasNode = function hasNode(node) {
    return this._nodes.has('' + node);
  };

  /**
   * Method returning whether the given directed edge is found in the graph.
   *
   * Arity 1:
   * @param  {any}     edge - The edge's key.
   *
   * Arity 2:
   * @param  {any}     source - The edge's source.
   * @param  {any}     target - The edge's target.
   *
   * @return {boolean}
   *
   * @throws {Error} - Will throw if the arguments are invalid.
   */


  Graph.prototype.hasDirectedEdge = function hasDirectedEdge(source, target) {

    // Early termination
    if (this.type === 'undirected') return false;

    if (arguments.length === 1) {
      var edge = '' + source;

      var edgeData = this._edges.get(edge);

      return !!edgeData && edgeData instanceof _data.DirectedEdgeData;
    } else if (arguments.length === 2) {

      source = '' + source;
      target = '' + target;

      // If the node source or the target is not in the graph we break
      var nodeData = this._nodes.get(source);

      if (!nodeData) return false;

      // Is there a directed edge pointing toward target?
      var edges = nodeData.out[target];

      if (!edges) return false;

      return this.multi ? !!edges.size : true;
    }

    throw new _errors.InvalidArgumentsGraphError('Graph.hasDirectedEdge: invalid arity (' + arguments.length + ', instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.');
  };

  /**
   * Method returning whether the given undirected edge is found in the graph.
   *
   * Arity 1:
   * @param  {any}     edge - The edge's key.
   *
   * Arity 2:
   * @param  {any}     source - The edge's source.
   * @param  {any}     target - The edge's target.
   *
   * @return {boolean}
   *
   * @throws {Error} - Will throw if the arguments are invalid.
   */


  Graph.prototype.hasUndirectedEdge = function hasUndirectedEdge(source, target) {

    // Early termination
    if (this.type === 'directed') return false;

    if (arguments.length === 1) {
      var edge = '' + source;

      var edgeData = this._edges.get(edge);

      return !!edgeData && edgeData instanceof _data.UndirectedEdgeData;
    } else if (arguments.length === 2) {

      source = '' + source;
      target = '' + target;

      // If the node source or the target is not in the graph we break
      var nodeData = this._nodes.get(source);

      if (!nodeData) return false;

      // Is there a directed edge pointing toward target?
      var edges = nodeData.undirected[target];

      if (!edges) return false;

      return this.multi ? !!edges.size : true;
    }

    throw new _errors.InvalidArgumentsGraphError('Graph.hasDirectedEdge: invalid arity (' + arguments.length + ', instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.');
  };

  /**
   * Method returning whether the given edge is found in the graph.
   *
   * Arity 1:
   * @param  {any}     edge - The edge's key.
   *
   * Arity 2:
   * @param  {any}     source - The edge's source.
   * @param  {any}     target - The edge's target.
   *
   * @return {boolean}
   *
   * @throws {Error} - Will throw if the arguments are invalid.
   */


  Graph.prototype.hasEdge = function hasEdge(source, target) {

    if (arguments.length === 1) {
      var edge = '' + source;

      return this._edges.has(edge);
    } else if (arguments.length === 2) {

      source = '' + source;
      target = '' + target;

      // If the node source or the target is not in the graph we break
      var nodeData = this._nodes.get(source);

      if (!nodeData) return false;

      // Is there a directed edge pointing toward target?
      var edges = typeof nodeData.out !== 'undefined' && nodeData.out[target];

      if (!edges) edges = typeof nodeData.undirected !== 'undefined' && nodeData.undirected[target];

      if (!edges) return false;

      return this.multi ? !!edges.size : true;
    }

    throw new _errors.InvalidArgumentsGraphError('Graph.hasEdge: invalid arity (' + arguments.length + ', instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.');
  };

  /**
   * Method returning the edge matching source & target in a directed fashion.
   *
   * @param  {any} source - The edge's source.
   * @param  {any} target - The edge's target.
   *
   * @return {any|undefined}
   *
   * @throws {Error} - Will throw if the graph is multi.
   * @throws {Error} - Will throw if source or target doesn't exist.
   */


  Graph.prototype.directedEdge = function directedEdge(source, target) {

    if (this.type === 'undirected') return;

    source = '' + source;
    target = '' + target;

    if (this.multi) throw new _errors.UsageGraphError('Graph.directedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.directedEdges instead.');

    var sourceData = this._nodes.get(source);

    if (!sourceData) throw new _errors.NotFoundGraphError('Graph.directedEdge: could not find the "' + source + '" source node in the graph.');

    if (!this._nodes.has(target)) throw new _errors.NotFoundGraphError('Graph.directedEdge: could not find the "' + target + '" target node in the graph.');

    var edgeData = sourceData.out && sourceData.out[target] || undefined;

    if (edgeData) return edgeData.key;
  };

  /**
   * Method returning the edge matching source & target in a undirected fashion.
   *
   * @param  {any} source - The edge's source.
   * @param  {any} target - The edge's target.
   *
   * @return {any|undefined}
   *
   * @throws {Error} - Will throw if the graph is multi.
   * @throws {Error} - Will throw if source or target doesn't exist.
   */


  Graph.prototype.undirectedEdge = function undirectedEdge(source, target) {

    if (this.type === 'directed') return;

    source = '' + source;
    target = '' + target;

    if (this.multi) throw new _errors.UsageGraphError('Graph.undirectedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.undirectedEdges instead.');

    var sourceData = this._nodes.get(source);

    if (!sourceData) throw new _errors.NotFoundGraphError('Graph.undirectedEdge: could not find the "' + source + '" source node in the graph.');

    if (!this._nodes.has(target)) throw new _errors.NotFoundGraphError('Graph.undirectedEdge: could not find the "' + target + '" target node in the graph.');

    var edgeData = sourceData.undirected && sourceData.undirected[target] || undefined;

    if (edgeData) return edgeData.key;
  };

  /**
   * Method returning the edge matching source & target in a mixed fashion.
   *
   * @param  {any} source - The edge's source.
   * @param  {any} target - The edge's target.
   *
   * @return {any|undefined}
   *
   * @throws {Error} - Will throw if the graph is multi.
   * @throws {Error} - Will throw if source or target doesn't exist.
   */


  Graph.prototype.edge = function edge(source, target) {
    if (this.multi) throw new _errors.UsageGraphError('Graph.edge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.edges instead.');

    source = '' + source;
    target = '' + target;

    var sourceData = this._nodes.get(source);

    if (!sourceData) throw new _errors.NotFoundGraphError('Graph.edge: could not find the "' + source + '" source node in the graph.');

    if (!this._nodes.has(target)) throw new _errors.NotFoundGraphError('Graph.edge: could not find the "' + target + '" target node in the graph.');

    var edgeData = sourceData.out && sourceData.out[target] || sourceData.undirected && sourceData.undirected[target] || undefined;

    if (edgeData) return edgeData.key;
  };

  /**
   * Method returning the given node's in degree.
   *
   * @param  {any}     node      - The node's key.
   * @param  {boolean} allowSelfLoops - Count self-loops?
   * @return {number}            - The node's in degree.
   *
   * @throws {Error} - Will throw if the selfLoops arg is not boolean.
   * @throws {Error} - Will throw if the node isn't in the graph.
   */


  Graph.prototype.inDegree = function inDegree(node) {
    var selfLoops = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (typeof selfLoops !== 'boolean') throw new _errors.InvalidArgumentsGraphError('Graph.inDegree: Expecting a boolean but got "' + selfLoops + '" for the second parameter (allowing self-loops to be counted).');

    node = '' + node;

    var nodeData = this._nodes.get(node);

    if (!nodeData) throw new _errors.NotFoundGraphError('Graph.inDegree: could not find the "' + node + '" node in the graph.');

    if (this.type === 'undirected') return 0;

    var loops = selfLoops ? nodeData.directedSelfLoops : 0;

    return nodeData.inDegree + loops;
  };

  /**
   * Method returning the given node's out degree.
   *
   * @param  {any}     node      - The node's key.
   * @param  {boolean} selfLoops - Count self-loops?
   * @return {number}            - The node's out degree.
   *
   * @throws {Error} - Will throw if the selfLoops arg is not boolean.
   * @throws {Error} - Will throw if the node isn't in the graph.
   */


  Graph.prototype.outDegree = function outDegree(node) {
    var selfLoops = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (typeof selfLoops !== 'boolean') throw new _errors.InvalidArgumentsGraphError('Graph.outDegree: Expecting a boolean but got "' + selfLoops + '" for the second parameter (allowing self-loops to be counted).');

    node = '' + node;

    var nodeData = this._nodes.get(node);

    if (!nodeData) throw new _errors.NotFoundGraphError('Graph.outDegree: could not find the "' + node + '" node in the graph.');

    if (this.type === 'undirected') return 0;

    var loops = selfLoops ? nodeData.directedSelfLoops : 0;

    return nodeData.outDegree + loops;
  };

  /**
   * Method returning the given node's directed degree.
   *
   * @param  {any}     node      - The node's key.
   * @param  {boolean} selfLoops - Count self-loops?
   * @return {number}            - The node's directed degree.
   *
   * @throws {Error} - Will throw if the selfLoops arg is not boolean.
   * @throws {Error} - Will throw if the node isn't in the graph.
   */


  Graph.prototype.directedDegree = function directedDegree(node) {
    var selfLoops = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (typeof selfLoops !== 'boolean') throw new _errors.InvalidArgumentsGraphError('Graph.directedDegree: Expecting a boolean but got "' + selfLoops + '" for the second parameter (allowing self-loops to be counted).');

    node = '' + node;

    if (!this.hasNode(node)) throw new _errors.NotFoundGraphError('Graph.directedDegree: could not find the "' + node + '" node in the graph.');

    if (this.type === 'undirected') return 0;

    return this.inDegree(node, selfLoops) + this.outDegree(node, selfLoops);
  };

  /**
   * Method returning the given node's undirected degree.
   *
   * @param  {any}     node      - The node's key.
   * @param  {boolean} selfLoops - Count self-loops?
   * @return {number}            - The node's undirected degree.
   *
   * @throws {Error} - Will throw if the selfLoops arg is not boolean.
   * @throws {Error} - Will throw if the node isn't in the graph.
   */


  Graph.prototype.undirectedDegree = function undirectedDegree(node) {
    var selfLoops = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (typeof selfLoops !== 'boolean') throw new _errors.InvalidArgumentsGraphError('Graph.undirectedDegree: Expecting a boolean but got "' + selfLoops + '" for the second parameter (allowing self-loops to be counted).');

    node = '' + node;

    if (!this.hasNode(node)) throw new _errors.NotFoundGraphError('Graph.undirectedDegree: could not find the "' + node + '" node in the graph.');

    if (this.type === 'directed') return 0;

    var data = this._nodes.get(node),
        loops = selfLoops ? data.undirectedSelfLoops * 2 : 0;

    return data.undirectedDegree + loops;
  };

  /**
   * Method returning the given node's degree.
   *
   * @param  {any}     node      - The node's key.
   * @param  {boolean} selfLoops - Count self-loops?
   * @return {number}            - The node's degree.
   *
   * @throws {Error} - Will throw if the selfLoops arg is not boolean.
   * @throws {Error} - Will throw if the node isn't in the graph.
   */


  Graph.prototype.degree = function degree(node) {
    var selfLoops = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (typeof selfLoops !== 'boolean') throw new _errors.InvalidArgumentsGraphError('Graph.degree: Expecting a boolean but got "' + selfLoops + '" for the second parameter (allowing self-loops to be counted).');

    node = '' + node;

    if (!this.hasNode(node)) throw new _errors.NotFoundGraphError('Graph.degree: could not find the "' + node + '" node in the graph.');

    var degree = 0;

    if (this.type !== 'undirected') degree += this.directedDegree(node, selfLoops);

    if (this.type !== 'directed') degree += this.undirectedDegree(node, selfLoops);

    return degree;
  };

  /**
   * Method returning the given edge's source.
   *
   * @param  {any} edge - The edge's key.
   * @return {any}      - The edge's source.
   *
   * @throws {Error} - Will throw if the edge isn't in the graph.
   */


  Graph.prototype.source = function source(edge) {
    edge = '' + edge;

    var data = this._edges.get(edge);

    if (!data) throw new _errors.NotFoundGraphError('Graph.source: could not find the "' + edge + '" edge in the graph.');

    return data.source.key;
  };

  /**
   * Method returning the given edge's target.
   *
   * @param  {any} edge - The edge's key.
   * @return {any}      - The edge's target.
   *
   * @throws {Error} - Will throw if the edge isn't in the graph.
   */


  Graph.prototype.target = function target(edge) {
    edge = '' + edge;

    var data = this._edges.get(edge);

    if (!data) throw new _errors.NotFoundGraphError('Graph.target: could not find the "' + edge + '" edge in the graph.');

    return data.target.key;
  };

  /**
   * Method returning the given edge's extremities.
   *
   * @param  {any}   edge - The edge's key.
   * @return {array}      - The edge's extremities.
   *
   * @throws {Error} - Will throw if the edge isn't in the graph.
   */


  Graph.prototype.extremities = function extremities(edge) {
    edge = '' + edge;

    var edgeData = this._edges.get(edge);

    if (!edgeData) throw new _errors.NotFoundGraphError('Graph.extremities: could not find the "' + edge + '" edge in the graph.');

    return [edgeData.source.key, edgeData.target.key];
  };

  /**
   * Given a node & an edge, returns the other extremity of the edge.
   *
   * @param  {any}   node - The node's key.
   * @param  {any}   edge - The edge's key.
   * @return {any}        - The related node.
   *
   * @throws {Error} - Will throw if either the node or the edge isn't in the graph.
   */


  Graph.prototype.opposite = function opposite(node, edge) {
    node = '' + node;
    edge = '' + edge;

    if (!this._nodes.has(node)) throw new _errors.NotFoundGraphError('Graph.opposite: could not find the "' + node + '" node in the graph.');

    var data = this._edges.get(edge);

    if (!data) throw new _errors.NotFoundGraphError('Graph.opposite: could not find the "' + edge + '" edge in the graph.');

    var sourceData = data.source,
        targetData = data.target;


    var source = sourceData.key,
        target = targetData.key;

    if (node !== source && node !== target) throw new _errors.NotFoundGraphError('Graph.opposite: the "' + node + '" node is not attached to the "' + edge + '" edge (' + source + ', ' + target + ').');

    return node === source ? target : source;
  };

  /**
   * Method returning whether the given edge is undirected.
   *
   * @param  {any}     edge - The edge's key.
   * @return {boolean}
   *
   * @throws {Error} - Will throw if the edge isn't in the graph.
   */


  Graph.prototype.undirected = function undirected(edge) {
    edge = '' + edge;

    var data = this._edges.get(edge);

    if (!data) throw new _errors.NotFoundGraphError('Graph.undirected: could not find the "' + edge + '" edge in the graph.');

    return data instanceof _data.UndirectedEdgeData;
  };

  /**
   * Method returning whether the given edge is directed.
   *
   * @param  {any}     edge - The edge's key.
   * @return {boolean}
   *
   * @throws {Error} - Will throw if the edge isn't in the graph.
   */


  Graph.prototype.directed = function directed(edge) {
    edge = '' + edge;

    var data = this._edges.get(edge);

    if (!data) throw new _errors.NotFoundGraphError('Graph.directed: could not find the "' + edge + '" edge in the graph.');

    return data instanceof _data.DirectedEdgeData;
  };

  /**
   * Method returning whether the given edge is a self loop.
   *
   * @param  {any}     edge - The edge's key.
   * @return {boolean}
   *
   * @throws {Error} - Will throw if the edge isn't in the graph.
   */


  Graph.prototype.selfLoop = function selfLoop(edge) {
    edge = '' + edge;

    var data = this._edges.get(edge);

    if (!data) throw new _errors.NotFoundGraphError('Graph.selfLoop: could not find the "' + edge + '" edge in the graph.');

    return data.source === data.target;
  };

  /**---------------------------------------------------------------------------
   * Mutation
   **---------------------------------------------------------------------------
   */

  /**
   * Method used to add a node to the graph.
   *
   * @param  {any}    node         - The node.
   * @param  {object} [attributes] - Optional attributes.
   * @return {any}                 - The node.
   *
   * @throws {Error} - Will throw if the given node already exist.
   * @throws {Error} - Will throw if the given attributes are not an object.
   */


  Graph.prototype.addNode = function addNode(node, attributes) {
    if (attributes && !(0, _utils.isPlainObject)(attributes)) throw new _errors.InvalidArgumentsGraphError('Graph.addNode: invalid attributes. Expecting an object but got "' + attributes + '"');

    // String coercion
    node = '' + node;
    attributes = attributes || {};

    if (this._nodes.has(node)) throw new _errors.UsageGraphError('Graph.addNode: the "' + node + '" node already exist in the graph.');

    var data = new this.NodeDataClass(node, attributes);

    // Adding the node to internal register
    this._nodes.set(node, data);

    // Emitting
    this.emit('nodeAdded', {
      key: node,
      attributes: attributes
    });

    return node;
  };

  /**
   * Method used to merge a node into the graph.
   *
   * @param  {any}    node         - The node.
   * @param  {object} [attributes] - Optional attributes.
   * @return {any}                 - The node.
   */


  Graph.prototype.mergeNode = function mergeNode(node, attributes) {
    if (attributes && !(0, _utils.isPlainObject)(attributes)) throw new _errors.InvalidArgumentsGraphError('Graph.mergeNode: invalid attributes. Expecting an object but got "' + attributes + '"');

    // String coercion
    node = '' + node;
    attributes = attributes || {};

    // If the node already exists, we merge the attributes
    var data = this._nodes.get(node);

    if (data) {
      if (attributes) (0, _utils.assign)(data.attributes, attributes);
      return node;
    }

    data = new this.NodeDataClass(node, attributes);

    // Adding the node to internal register
    this._nodes.set(node, data);

    // Emitting
    this.emit('nodeAdded', {
      key: node,
      attributes: attributes
    });

    return node;
  };

  /**
   * Method used to drop a single node & all its attached edges from the graph.
   *
   * @param  {any}    node - The node.
   * @return {Graph}
   *
   * @throws {Error} - Will throw if the node doesn't exist.
   */


  Graph.prototype.dropNode = function dropNode(node) {
    node = '' + node;

    if (!this.hasNode(node)) throw new _errors.NotFoundGraphError('Graph.dropNode: could not find the "' + node + '" node in the graph.');

    // Removing attached edges
    var edges = this.edges(node);

    // NOTE: we could go faster here
    for (var i = 0, l = edges.length; i < l; i++) {
      this.dropEdge(edges[i]);
    }var data = this._nodes.get(node);

    // Dropping the node from the register
    this._nodes.delete(node);

    // Emitting
    this.emit('nodeDropped', {
      key: node,
      attributes: data.attributes
    });
  };

  /**
   * Method used to drop a single edge from the graph.
   *
   * Arity 1:
   * @param  {any}    edge - The edge.
   *
   * Arity 2:
   * @param  {any}    source - Source node.
   * @param  {any}    target - Target node.
   *
   * @return {Graph}
   *
   * @throws {Error} - Will throw if the edge doesn't exist.
   */


  Graph.prototype.dropEdge = function dropEdge(edge) {
    var edgeData = void 0;

    if (arguments.length > 1) {
      var source = '' + arguments[0],
          target = '' + arguments[1];

      edgeData = (0, _utils.getMatchingEdge)(this, source, target, this.type);

      if (!edgeData) throw new _errors.NotFoundGraphError('Graph.dropEdge: could not find the "' + source + '" -> "' + target + '" edge in the graph.');
    } else {
      edge = '' + edge;

      edgeData = this._edges.get(edge);

      if (!edgeData) throw new _errors.NotFoundGraphError('Graph.dropEdge: could not find the "' + edge + '" edge in the graph.');
    }

    // Dropping the edge from the register
    this._edges.delete(edgeData.key);

    // Updating related degrees
    var _edgeData = edgeData,
        sourceData = _edgeData.source,
        targetData = _edgeData.target,
        attributes = _edgeData.attributes;


    var undirected = edgeData instanceof _data.UndirectedEdgeData;

    if (sourceData === targetData) {
      sourceData.selfLoops--;
    } else {
      if (undirected) {
        sourceData.undirectedDegree--;
        targetData.undirectedDegree--;
      } else {
        sourceData.outDegree--;
        targetData.inDegree--;
      }
    }

    // Clearing index
    (0, _indices.clearEdgeFromStructureIndex)(this, undirected, edgeData);

    if (undirected) this._undirectedSize--;else this._directedSize--;

    // Emitting
    this.emit('edgeDropped', {
      key: edge,
      attributes: attributes,
      source: sourceData.key,
      target: targetData.key,
      undirected: undirected
    });

    return this;
  };

  /**
   * Method used to remove every edge & every node from the graph.
   *
   * @return {Graph}
   */


  Graph.prototype.clear = function clear() {

    // Clearing edges
    this._edges.clear();

    // Clearing nodes
    this._nodes.clear();

    // Emitting
    this.emit('cleared');
  };

  /**
   * Method used to remove every edge from the graph.
   *
   * @return {Graph}
   */


  Graph.prototype.clearEdges = function clearEdges() {

    // Clearing edges
    this._edges.clear();

    // Clearing indices
    this.clearIndex();

    // Emitting
    this.emit('edgesCleared');
  };

  /**---------------------------------------------------------------------------
   * Attributes-related methods
   **---------------------------------------------------------------------------
   */

  /**
   * Method returning the desired graph's attribute.
   *
   * @param  {string} name - Name of the attribute.
   * @return {any}
   */


  Graph.prototype.getAttribute = function getAttribute(name) {
    return this._attributes[name];
  };

  /**
   * Method returning the graph's attributes.
   *
   * @return {object}
   */


  Graph.prototype.getAttributes = function getAttributes() {
    return this._attributes;
  };

  /**
   * Method returning whether the graph has the desired attribute.
   *
   * @param  {string}  name - Name of the attribute.
   * @return {boolean}
   */


  Graph.prototype.hasAttribute = function hasAttribute(name) {
    return this._attributes.hasOwnProperty(name);
  };

  /**
   * Method setting a value for the desired graph's attribute.
   *
   * @param  {string}  name  - Name of the attribute.
   * @param  {any}     value - Value for the attribute.
   * @return {Graph}
   */


  Graph.prototype.setAttribute = function setAttribute(name, value) {
    this._attributes[name] = value;

    // Emitting
    this.emit('attributesUpdated', {
      type: 'set',
      meta: {
        name: name,
        value: value
      }
    });

    return this;
  };

  /**
   * Method using a function to update the desired graph's attribute's value.
   *
   * @param  {string}   name    - Name of the attribute.
   * @param  {function} updater - Function use to update the attribute's value.
   * @return {Graph}
   */


  Graph.prototype.updateAttribute = function updateAttribute(name, updater) {
    if (typeof updater !== 'function') throw new _errors.InvalidArgumentsGraphError('Graph.updateAttribute: updater should be a function.');

    this._attributes[name] = updater(this._attributes[name]);

    // Emitting
    this.emit('attributesUpdated', {
      type: 'set',
      meta: {
        name: name,
        value: this._attributes[name]
      }
    });

    return this;
  };

  /**
   * Method removing the desired graph's attribute.
   *
   * @param  {string} name  - Name of the attribute.
   * @return {Graph}
   */


  Graph.prototype.removeAttribute = function removeAttribute(name) {
    delete this._attributes[name];

    // Emitting
    this.emit('attributesUpdated', {
      type: 'remove',
      meta: {
        name: name
      }
    });

    return this;
  };

  /**
   * Method replacing the graph's attributes.
   *
   * @param  {object} attributes - New attributes.
   * @return {Graph}
   *
   * @throws {Error} - Will throw if given attributes are not a plain object.
   */


  Graph.prototype.replaceAttributes = function replaceAttributes(attributes) {
    if (!(0, _utils.isPlainObject)(attributes)) throw new _errors.InvalidArgumentsGraphError('Graph.replaceAttributes: provided attributes are not a plain object.');

    var before = this._attributes;

    this._attributes = attributes;

    // Emitting
    this.emit('attributesUpdated', {
      type: 'replace',
      meta: {
        before: before,
        after: attributes
      }
    });

    return this;
  };

  /**
   * Method merging the graph's attributes.
   *
   * @param  {object} attributes - Attributes to merge.
   * @return {Graph}
   *
   * @throws {Error} - Will throw if given attributes are not a plain object.
   */


  Graph.prototype.mergeAttributes = function mergeAttributes(attributes) {
    if (!(0, _utils.isPlainObject)(attributes)) throw new _errors.InvalidArgumentsGraphError('Graph.mergeAttributes: provided attributes are not a plain object.');

    this._attributes = (0, _utils.assign)(this._attributes, attributes);

    // Emitting
    this.emit('attributesUpdated', {
      type: 'merge',
      meta: {
        data: this._attributes
      }
    });

    return this;
  };

  /**
   * Method returning the desired attribute for the given node.
   *
   * @param  {any}    node - Target node.
   * @param  {string} name - Name of the attribute to get.
   * @return {any}
   *
   * @throws {Error} - Will throw if the node is not found.
   */


  Graph.prototype.getNodeAttribute = function getNodeAttribute(node, name) {
    node = '' + node;

    var data = this._nodes.get(node);

    if (!data) throw new _errors.NotFoundGraphError('Graph.getNodeAttribute: could not find the "' + node + '" node in the graph.');

    return data.attributes[name];
  };

  /**
   * Method returning the attributes for the given node.
   *
   * @param  {any}    node - Target node.
   * @return {object}
   *
   * @throws {Error} - Will throw if the node is not found.
   */


  Graph.prototype.getNodeAttributes = function getNodeAttributes(node) {
    node = '' + node;

    var data = this._nodes.get(node);

    if (!data) throw new _errors.NotFoundGraphError('Graph.getNodeAttributes: could not find the "' + node + '" node in the graph.');

    return data.attributes;
  };

  /**
   * Method checking whether the given attribute exists for the given node.
   *
   * @param  {any}    node - Target node.
   * @param  {string} name - Name of the attribute to check.
   * @return {boolean}
   *
   * @throws {Error} - Will throw if the node is not found.
   */


  Graph.prototype.hasNodeAttribute = function hasNodeAttribute(node, name) {
    node = '' + node;

    var data = this._nodes.get(node);

    if (!data) throw new _errors.NotFoundGraphError('Graph.hasNodeAttribute: could not find the "' + node + '" node in the graph.');

    return data.attributes.hasOwnProperty(name);
  };

  /**
   * Method checking setting the desired attribute for the given node.
   *
   * @param  {any}    node  - Target node.
   * @param  {string} name  - Name of the attribute to set.
   * @param  {any}    value - Value for the attribute.
   * @return {Graph}
   *
   * @throws {Error} - Will throw if less than 3 arguments are passed.
   * @throws {Error} - Will throw if the node is not found.
   */


  Graph.prototype.setNodeAttribute = function setNodeAttribute(node, name, value) {
    node = '' + node;

    var data = this._nodes.get(node);

    if (!data) throw new _errors.NotFoundGraphError('Graph.setNodeAttribute: could not find the "' + node + '" node in the graph.');

    if (arguments.length < 3) throw new _errors.InvalidArgumentsGraphError('Graph.setNodeAttribute: not enough arguments. Either you forgot to pass the attribute\'s name or value, or you meant to use #.replaceNodeAttributes / #.mergeNodeAttributes instead.');

    data.attributes[name] = value;

    // Emitting
    this.emit('nodeAttributesUpdated', {
      key: node,
      type: 'set',
      meta: {
        name: name,
        value: value
      }
    });

    return this;
  };

  /**
   * Method checking setting the desired attribute for the given node.
   *
   * @param  {any}      node    - Target node.
   * @param  {string}   name    - Name of the attribute to set.
   * @param  {function} updater - Function that will update the attribute.
   * @return {Graph}
   *
   * @throws {Error} - Will throw if less than 3 arguments are passed.
   * @throws {Error} - Will throw if updater is not a function.
   * @throws {Error} - Will throw if the node is not found.
   */


  Graph.prototype.updateNodeAttribute = function updateNodeAttribute(node, name, updater) {
    node = '' + node;

    var data = this._nodes.get(node);

    if (!data) throw new _errors.NotFoundGraphError('Graph.updateNodeAttribute: could not find the "' + node + '" node in the graph.');

    if (arguments.length < 3) throw new _errors.InvalidArgumentsGraphError('Graph.updateNodeAttribute: not enough arguments. Either you forgot to pass the attribute\'s name or updater, or you meant to use #.replaceNodeAttributes / #.mergeNodeAttributes instead.');

    if (typeof updater !== 'function') throw new _errors.InvalidArgumentsGraphError('Graph.updateAttribute: updater should be a function.');

    var attributes = data.attributes;

    attributes[name] = updater(attributes[name]);

    // Emitting
    this.emit('nodeAttributesUpdated', {
      key: node,
      type: 'set',
      meta: {
        name: name,
        value: attributes[name]
      }
    });

    return this;
  };

  /**
   * Method removing the desired attribute for the given node.
   *
   * @param  {any}    node  - Target node.
   * @param  {string} name  - Name of the attribute to remove.
   * @return {Graph}
   *
   * @throws {Error} - Will throw if the node is not found.
   */


  Graph.prototype.removeNodeAttribute = function removeNodeAttribute(node, name) {
    node = '' + node;

    var data = this._nodes.get(node);

    if (!data) throw new _errors.NotFoundGraphError('Graph.hasNodeAttribute: could not find the "' + node + '" node in the graph.');

    delete data.attributes[name];

    // Emitting
    this.emit('nodeAttributesUpdated', {
      key: node,
      type: 'remove',
      meta: {
        name: name
      }
    });

    return this;
  };

  /**
   * Method completely replacing the attributes of the given node.
   *
   * @param  {any}    node       - Target node.
   * @param  {object} attributes - New attributes.
   * @return {Graph}
   *
   * @throws {Error} - Will throw if the node is not found.
   * @throws {Error} - Will throw if the given attributes is not a plain object.
   */


  Graph.prototype.replaceNodeAttributes = function replaceNodeAttributes(node, attributes) {
    node = '' + node;

    var data = this._nodes.get(node);

    if (!data) throw new _errors.NotFoundGraphError('Graph.replaceNodeAttributes: could not find the "' + node + '" node in the graph.');

    if (!(0, _utils.isPlainObject)(attributes)) throw new _errors.InvalidArgumentsGraphError('Graph.replaceNodeAttributes: provided attributes are not a plain object.');

    var oldAttributes = data.attributes;

    data.attributes = attributes;

    // Emitting
    this.emit('nodeAttributesUpdated', {
      key: node,
      type: 'replace',
      meta: {
        before: oldAttributes,
        after: attributes
      }
    });

    return this;
  };

  /**
   * Method merging the attributes of the given node with the provided ones.
   *
   * @param  {any}    node       - Target node.
   * @param  {object} attributes - Attributes to merge.
   * @return {Graph}
   *
   * @throws {Error} - Will throw if the node is not found.
   * @throws {Error} - Will throw if the given attributes is not a plain object.
   */


  Graph.prototype.mergeNodeAttributes = function mergeNodeAttributes(node, attributes) {
    node = '' + node;

    var data = this._nodes.get(node);

    if (!data) throw new _errors.NotFoundGraphError('Graph.mergeNodeAttributes: could not find the "' + node + '" node in the graph.');

    if (!(0, _utils.isPlainObject)(attributes)) throw new _errors.InvalidArgumentsGraphError('Graph.mergeNodeAttributes: provided attributes are not a plain object.');

    (0, _utils.assign)(data.attributes, attributes);

    // Emitting
    this.emit('nodeAttributesUpdated', {
      key: node,
      type: 'merge',
      meta: {
        data: attributes
      }
    });

    return this;
  };

  /**---------------------------------------------------------------------------
   * Iteration-related methods
   **---------------------------------------------------------------------------
   */

  /**
   * Method iterating over the graph's adjacency using the given callback.
   *
   * @param  {function}  callback - Callback to use.
   */


  Graph.prototype.forEach = function forEach(callback) {
    if (typeof callback !== 'function') throw new _errors.InvalidArgumentsGraphError('Graph.forEach: expecting a callback.');

    this._edges.forEach(function (edgeData, key) {
      var sourceData = edgeData.source,
          targetData = edgeData.target;

      callback(sourceData.key, targetData.key, sourceData.attributes, targetData.attributes, key, edgeData.attributes);
    });
  };

  /**
   * Method returning an iterator over the graph's adjacency.
   *
   * @return {Iterator}
   */


  Graph.prototype.adjacency = function adjacency() {
    var iterator = this._edges.values();

    return new _iterator2.default(function () {
      var step = iterator.next();

      if (step.done) return step;

      var edgeData = step.value;

      var sourceData = edgeData.source,
          targetData = edgeData.target;

      return {
        done: false,
        value: [sourceData.key, targetData.key, sourceData.attributes, targetData.attributes, edgeData.key, edgeData.attributes]
      };
    });
  };

  /**
   * Method returning the list of the graph's nodes.
   *
   * @return {array} - The nodes.
   */


  Graph.prototype.nodes = function nodes() {
    return (0, _take2.default)(this._nodes.keys(), this._nodes.size);
  };

  /**
   * Method iterating over the graph's nodes using the given callback.
   *
   * @param  {function}  callback - Callback (key, attributes, index).
   */


  Graph.prototype.forEachNode = function forEachNode(callback) {
    if (typeof callback !== 'function') throw new _errors.InvalidArgumentsGraphError('Graph.forEachNode: expecting a callback.');

    this._nodes.forEach(function (data, key) {
      callback(key, data.attributes);
    });
  };

  /**
   * Method returning an iterator over the graph's node entries.
   *
   * @return {Iterator}
   */


  Graph.prototype.nodeEntries = function nodeEntries() {
    var iterator = this._nodes.values();

    return new _iterator2.default(function () {
      var step = iterator.next();

      if (step.done) return step;

      var data = step.value;

      return { value: [data.key, data.attributes], done: false };
    });
  };

  /**---------------------------------------------------------------------------
   * Serialization
   **---------------------------------------------------------------------------
   */

  /**
   * Method exporting the target node.
   *
   * @param  {any}   node - Target node.
   * @return {array}      - The serialized node.
   *
   * @throws {Error} - Will throw if the node is not found.
   */


  Graph.prototype.exportNode = function exportNode(node) {
    node = '' + node;

    var data = this._nodes.get(node);

    if (!data) throw new _errors.NotFoundGraphError('Graph.exportNode: could not find the "' + node + '" node in the graph.');

    return (0, _serialization.serializeNode)(node, data);
  };

  /**
   * Method exporting the target edge.
   *
   * @param  {any}   edge - Target edge.
   * @return {array}      - The serialized edge.
   *
   * @throws {Error} - Will throw if the edge is not found.
   */


  Graph.prototype.exportEdge = function exportEdge(edge) {
    edge = '' + edge;

    var data = this._edges.get(edge);

    if (!data) throw new _errors.NotFoundGraphError('Graph.exportEdge: could not find the "' + edge + '" edge in the graph.');

    return (0, _serialization.serializeEdge)(edge, data);
  };

  /**
   * Method used to export the whole graph.
   *
   * @return {object} - The serialized graph.
   */


  Graph.prototype.export = function _export() {

    var nodes = new Array(this._nodes.size);

    var i = 0;

    this._nodes.forEach(function (data, key) {
      nodes[i++] = (0, _serialization.serializeNode)(key, data);
    });

    var edges = new Array(this._edges.size);

    i = 0;

    this._edges.forEach(function (data, key) {
      edges[i++] = (0, _serialization.serializeEdge)(key, data);
    });

    return {
      attributes: this.getAttributes(),
      nodes: nodes,
      edges: edges
    };
  };

  /**
   * Method used to import a serialized node.
   *
   * @param  {object} data   - The serialized node.
   * @param  {boolean} merge - Whether to merge the given node.
   * @return {Graph}         - Returns itself for chaining.
   */


  Graph.prototype.importNode = function importNode(data) {
    var merge = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


    // Validating
    var error = (0, _serialization.validateSerializedNode)(data);

    if (error) {

      if (error === 'not-object') throw new _errors.InvalidArgumentsGraphError('Graph.importNode: invalid serialized node. A serialized node should be a plain object with at least a "key" property.');
      if (error === 'no-key') throw new _errors.InvalidArgumentsGraphError('Graph.importNode: no key provided.');
      if (error === 'invalid-attributes') throw new _errors.InvalidArgumentsGraphError('Graph.importNode: invalid attributes. Attributes should be a plain object, null or omitted.');
    }

    // Adding the node
    var key = data.key,
        _data$attributes = data.attributes,
        attributes = _data$attributes === undefined ? {} : _data$attributes;


    if (merge) this.mergeNode(key, attributes);else this.addNode(key, attributes);

    return this;
  };

  /**
   * Method used to import a serialized edge.
   *
   * @param  {object}  data  - The serialized edge.
   * @param  {boolean} merge - Whether to merge the given edge.
   * @return {Graph}         - Returns itself for chaining.
   */


  Graph.prototype.importEdge = function importEdge(data) {
    var merge = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


    // Validating
    var error = (0, _serialization.validateSerializedEdge)(data);

    if (error) {

      if (error === 'not-object') throw new _errors.InvalidArgumentsGraphError('Graph.importEdge: invalid serialized edge. A serialized edge should be a plain object with at least a "source" & "target" property.');
      if (error === 'no-source') throw new _errors.InvalidArgumentsGraphError('Graph.importEdge: missing souce.');
      if (error === 'no-target') throw new _errors.InvalidArgumentsGraphError('Graph.importEdge: missing target.');
      if (error === 'invalid-attributes') throw new _errors.InvalidArgumentsGraphError('Graph.importEdge: invalid attributes. Attributes should be a plain object, null or omitted.');
      if (error === 'invalid-undirected') throw new _errors.InvalidArgumentsGraphError('Graph.importEdge: invalid undirected. Undirected should be boolean or omitted.');
    }

    // Adding the edge
    var source = data.source,
        target = data.target,
        _data$attributes2 = data.attributes,
        attributes = _data$attributes2 === undefined ? {} : _data$attributes2,
        _data$undirected = data.undirected,
        undirected = _data$undirected === undefined ? false : _data$undirected;


    var method = void 0;

    if ('key' in data) {
      method = merge ? undirected ? this.mergeUndirectedEdgeWithKey : this.mergeDirectedEdgeWithKey : undirected ? this.addUndirectedEdgeWithKey : this.addDirectedEdgeWithKey;

      method.call(this, data.key, source, target, attributes);
    } else {
      method = merge ? undirected ? this.mergeUndirectedEdge : this.mergeDirectedEdge : undirected ? this.addUndirectedEdge : this.addDirectedEdge;

      method.call(this, source, target, attributes);
    }

    return this;
  };

  /**
   * Method used to import a serialized graph.
   *
   * @param  {object|Graph} data  - The serialized graph.
   * @param  {boolean}      merge - Whether to merge data.
   * @return {Graph}              - Returns itself for chaining.
   */


  Graph.prototype.import = function _import(data) {
    var _this2 = this;

    var merge = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


    // Importing a Graph instance
    if ((0, _utils.isGraph)(data)) {

      this.import(data.export(), merge);
      return this;
    }

    // Importing a serialized graph
    if (!(0, _utils.isPlainObject)(data)) throw new _errors.InvalidArgumentsGraphError('Graph.import: invalid argument. Expecting a serialized graph or, alternatively, a Graph instance.');

    if (data.attributes) {
      if (!(0, _utils.isPlainObject)(data.attributes)) throw new _errors.InvalidArgumentsGraphError('Graph.import: invalid attributes. Expecting a plain object.');

      if (merge) this.mergeAttributes(data.attributes);else this.replaceAttributes(data.attributes);
    }

    // TODO: optimize
    if (data.nodes) data.nodes.forEach(function (node) {
      return _this2.importNode(node, merge);
    });

    if (data.edges) data.edges.forEach(function (edge) {
      return _this2.importEdge(edge, merge);
    });

    return this;
  };

  /**---------------------------------------------------------------------------
   * Utils
   **---------------------------------------------------------------------------
   */

  /**
   * Method returning an empty copy of the graph, i.e. a graph without nodes
   * & edges but with the exact same options.
   *
   * @return {Graph} - The empty copy.
   */


  Graph.prototype.emptyCopy = function emptyCopy() {
    return new Graph(this._options);
  };

  /**
   * Method returning an exact copy of the graph.
   *
   * @return {Graph} - The copy.
   */


  Graph.prototype.copy = function copy() {
    var graph = new Graph(this._options);
    graph.import(this);

    return graph;
  };

  /**
   * Method upgrading the graph to a mixed one.
   *
   * @return {Graph} - The copy.
   */


  Graph.prototype.upgradeToMixed = function upgradeToMixed() {
    if (this.type === 'mixed') return this;

    // Upgrading node data:
    // NOTE: maybe this could lead to some de-optimization by usual
    // JavaScript engines but I cannot be sure of it. Another solution
    // would be to reinstantiate the classes but this surely has a performance
    // and memory impact.
    this._nodes.forEach(function (data) {
      return data.upgradeToMixed();
    });

    // Mutating the options & the instance
    this._options.type = 'mixed';
    (0, _utils.readOnlyProperty)(this, 'type', this._options.type);
    (0, _utils.privateProperty)(this, 'NodeDataClass', _data.MixedNodeData);

    return this;
  };

  /**
   * Method upgrading the graph to a multi one.
   *
   * @return {Graph} - The copy.
   */


  Graph.prototype.upgradeToMulti = function upgradeToMulti() {
    if (this.multi) return this;

    // Mutating the options & the instance
    this._options.multi = true;
    (0, _utils.readOnlyProperty)(this, 'multi', true);

    // Upgrading indices
    (0, _indices.upgradeStructureIndexToMulti)(this);

    return this;
  };

  /**---------------------------------------------------------------------------
   * Indexes-related methods
   **---------------------------------------------------------------------------
   */

  /**
   * Method used to clear the desired index to clear memory.
   *
   * @return {Graph}       - Returns itself for chaining.
   */


  Graph.prototype.clearIndex = function clearIndex() {
    (0, _indices.clearStructureIndex)(this);
    return this;
  };

  /**---------------------------------------------------------------------------
   * Known methods
   **---------------------------------------------------------------------------
   */

  /**
   * Method used by JavaScript to perform JSON serialization.
   *
   * @return {object} - The serialized graph.
   */


  Graph.prototype.toJSON = function toJSON() {
    return this.export();
  };

  /**
   * Method used to perform string coercion and returning useful information
   * about the Graph instance.
   *
   * @return {string} - String representation of the graph.
   */


  Graph.prototype.toString = function toString() {
    var pluralOrder = this.order > 1 || this.order === 0,
        pluralSize = this.size > 1 || this.size === 0;

    return 'Graph<' + (0, _utils.prettyPrint)(this.order) + ' node' + (pluralOrder ? 's' : '') + ', ' + (0, _utils.prettyPrint)(this.size) + ' edge' + (pluralSize ? 's' : '') + '>';
  };

  /**
   * Method used internally by node's console to display a custom object.
   *
   * @return {object} - Formatted object representation of the graph.
   */


  Graph.prototype.inspect = function inspect() {
    var _this3 = this;

    var nodes = {};
    this._nodes.forEach(function (data, key) {
      nodes[key] = data.attributes;
    });

    var edges = {},
        multiIndex = {};

    this._edges.forEach(function (data, key) {
      var direction = data instanceof _data.UndirectedEdgeData ? '--' : '->';

      var label = '';

      var desc = '(' + data.source.key + ')' + direction + '(' + data.target.key + ')';

      if (!data.generatedKey) {
        label += '[' + key + ']: ';
      } else if (_this3.multi) {
        if (typeof multiIndex[desc] === 'undefined') {
          multiIndex[desc] = 0;
        } else {
          multiIndex[desc]++;
        }

        label += multiIndex[desc] + '. ';
      }

      label += desc;

      edges[label] = data.attributes;
    });

    var dummy = {};

    for (var k in this) {
      if (this.hasOwnProperty(k) && !EMITTER_PROPS.has(k) && typeof this[k] !== 'function') dummy[k] = this[k];
    }

    dummy.attributes = this._attributes;
    dummy.nodes = nodes;
    dummy.edges = edges;

    (0, _utils.privateProperty)(dummy, 'constructor', this.constructor);

    return dummy;
  };

  return Graph;
}(_events.EventEmitter);

/**
 * Attaching custom inspect method for node >= 10.
 */


exports.default = Graph;
if (typeof Symbol !== 'undefined') Graph.prototype[Symbol.for('nodejs.util.inspect.custom')] = Graph.prototype.inspect;

/**
 * Attaching methods to the prototype.
 *
 * Here, we are attaching a wide variety of methods to the Graph class'
 * prototype when those are very numerous and when their creation is
 * abstracted.
 */

/**
 * Related to edge addition.
 */
EDGE_ADD_METHODS.forEach(function (method) {
  ['add', 'merge'].forEach(function (verb) {
    var name = method.name(verb),
        fn = verb === 'add' ? addEdge : mergeEdge;

    if (method.generateKey) {
      Graph.prototype[name] = function (source, target, attributes) {
        return fn(this, name, true, (method.type || this.type) === 'undirected', null, source, target, attributes);
      };
    } else {
      Graph.prototype[name] = function (edge, source, target, attributes) {
        return fn(this, name, false, (method.type || this.type) === 'undirected', edge, source, target, attributes);
      };
    }
  });
});

/**
 * Self iterator.
 */
if (typeof Symbol !== 'undefined') Graph.prototype[Symbol.iterator] = Graph.prototype.adjacency;

/**
 * Attributes-related.
 */
(0, _attributes.attachAttributesMethods)(Graph);

/**
 * Edge iteration-related.
 */
(0, _edges.attachEdgeIterationMethods)(Graph);

/**
 * Neighbor iteration-related.
 */
(0, _neighbors.attachNeighborIterationMethods)(Graph);

/***/ }),

/***/ "./node_modules/graphology/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/graphology/dist/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(/*! ./utils */ "./node_modules/graphology/dist/utils.js");

var _graph = __webpack_require__(/*! ./graph */ "./node_modules/graphology/dist/graph.js");

var _graph2 = _interopRequireDefault(_graph);

var _errors = __webpack_require__(/*! ./errors */ "./node_modules/graphology/dist/errors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Graphology Reference Implementation Endoint
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * ============================================
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Importing the Graph object & creating typed constructors.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * Alternative constructors.
 */
var DirectedGraph = function (_Graph) {
  _inherits(DirectedGraph, _Graph);

  function DirectedGraph(options) {
    _classCallCheck(this, DirectedGraph);

    return _possibleConstructorReturn(this, _Graph.call(this, (0, _utils.assign)({ type: 'directed' }, options)));
  }

  return DirectedGraph;
}(_graph2.default);

var UndirectedGraph = function (_Graph2) {
  _inherits(UndirectedGraph, _Graph2);

  function UndirectedGraph(options) {
    _classCallCheck(this, UndirectedGraph);

    return _possibleConstructorReturn(this, _Graph2.call(this, (0, _utils.assign)({ type: 'undirected' }, options)));
  }

  return UndirectedGraph;
}(_graph2.default);

var MultiDirectedGraph = function (_Graph3) {
  _inherits(MultiDirectedGraph, _Graph3);

  function MultiDirectedGraph(options) {
    _classCallCheck(this, MultiDirectedGraph);

    return _possibleConstructorReturn(this, _Graph3.call(this, (0, _utils.assign)({ multi: true, type: 'directed' }, options)));
  }

  return MultiDirectedGraph;
}(_graph2.default);

var MultiUndirectedGraph = function (_Graph4) {
  _inherits(MultiUndirectedGraph, _Graph4);

  function MultiUndirectedGraph(options) {
    _classCallCheck(this, MultiUndirectedGraph);

    return _possibleConstructorReturn(this, _Graph4.call(this, (0, _utils.assign)({ multi: true, type: 'undirected' }, options)));
  }

  return MultiUndirectedGraph;
}(_graph2.default);

/**
 * Attaching static #.from method to each of the constructors.
 */


function attachStaticFromMethod(Class) {

  /**
   * Builds a graph from serialized data or another graph's data.
   *
   * @param  {Graph|SerializedGraph} data      - Hydratation data.
   * @param  {object}                [options] - Options.
   * @return {Class}
   */
  Class.from = function (data, options) {
    var instance = new Class(options);
    instance.import(data);

    return instance;
  };
}

attachStaticFromMethod(_graph2.default);
attachStaticFromMethod(DirectedGraph);
attachStaticFromMethod(UndirectedGraph);
attachStaticFromMethod(MultiDirectedGraph);
attachStaticFromMethod(MultiUndirectedGraph);

/**
 * Attaching the various constructors to the Graph class itself so we can
 * keep CommonJS semantics so everyone can consume the library easily.
 */
_graph2.default.Graph = _graph2.default;
_graph2.default.DirectedGraph = DirectedGraph;
_graph2.default.UndirectedGraph = UndirectedGraph;
_graph2.default.MultiDirectedGraph = MultiDirectedGraph;
_graph2.default.MultiUndirectedGraph = MultiUndirectedGraph;

_graph2.default.InvalidArgumentsGraphError = _errors.InvalidArgumentsGraphError;
_graph2.default.NotFoundGraphError = _errors.NotFoundGraphError;
_graph2.default.UsageGraphError = _errors.UsageGraphError;

module.exports = _graph2.default;

/***/ }),

/***/ "./node_modules/graphology/dist/indices.js":
/*!*************************************************!*\
  !*** ./node_modules/graphology/dist/indices.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateStructureIndex = updateStructureIndex;
exports.clearEdgeFromStructureIndex = clearEdgeFromStructureIndex;
exports.clearStructureIndex = clearStructureIndex;
exports.upgradeStructureIndexToMulti = upgradeStructureIndexToMulti;
/**
 * Graphology Indexes Functions
 * =============================
 *
 * Bunch of functions used to compute or clear indexes.
 */

/**
 * Function updating the 'structure' index with the given edge's data.
 * Note that in the case of the multi graph, related edges are stored in a
 * set that is the same for A -> B & B <- A.
 *
 * @param {Graph}    graph      - Target Graph instance.
 * @param {EdgeData} edgeData   - Added edge's data.
 * @param {NodeData} sourceData - Source node's data.
 * @param {NodeData} targetData - Target node's data.
 */
function updateStructureIndex(graph, undirected, edgeData, source, target, sourceData, targetData) {
  var multi = graph.multi;

  var outKey = undirected ? 'undirected' : 'out',
      inKey = undirected ? 'undirected' : 'in';

  // Handling source
  var edgeOrSet = sourceData[outKey][target];

  if (typeof edgeOrSet === 'undefined') {
    edgeOrSet = multi ? new Set() : edgeData;
    sourceData[outKey][target] = edgeOrSet;
  }

  if (multi) edgeOrSet.add(edgeData);

  // If selfLoop, we break here
  if (source === target) return;

  // Handling target (we won't add the edge because it was already taken
  // care of with source above)
  if (typeof targetData[inKey][source] === 'undefined') targetData[inKey][source] = edgeOrSet;
}

/**
 * Function clearing the 'structure' index data related to the given edge.
 *
 * @param {Graph}    graph    - Target Graph instance.
 * @param {EdgeData} edgeData - Dropped edge's data.
 */
function clearEdgeFromStructureIndex(graph, undirected, edgeData) {
  var multi = graph.multi;

  var sourceData = edgeData.source,
      targetData = edgeData.target;


  var source = sourceData.key,
      target = targetData.key;

  // NOTE: since the edge set is the same for source & target, we can only
  // affect source
  var outKey = undirected ? 'undirected' : 'out',
      sourceIndex = sourceData[outKey];

  var inKey = undirected ? 'undirected' : 'in';

  if (target in sourceIndex) {

    if (multi) {
      var set = sourceIndex[target];

      if (set.size === 1) {
        delete sourceIndex[target];
        delete targetData[inKey][source];
      } else {
        set.delete(edgeData);
      }
    } else delete sourceIndex[target];
  }

  if (multi) return;

  var targetIndex = targetData[inKey];

  delete targetIndex[source];
}

/**
 * Function clearing the whole 'structure' index.
 *
 * @param {Graph} graph - Target Graph instance.
 */
function clearStructureIndex(graph) {
  graph._nodes.forEach(function (data) {

    // Clearing now useless properties
    if (typeof data.in !== 'undefined') {
      data.in = {};
      data.out = {};
    }

    if (typeof data.undirected !== 'undefined') {
      data.undirected = {};
    }
  });
}

/**
 * Function used to upgrade a simple `structure` index to a multi on.
 *
 * @param {Graph}  graph - Target Graph instance.
 */
function upgradeStructureIndexToMulti(graph) {
  graph._nodes.forEach(function (data, node) {

    // Directed
    if (data.out) {

      for (var neighbor in data.out) {
        var edges = new Set();
        edges.add(data.out[neighbor]);
        data.out[neighbor] = edges;
        graph._nodes.get(neighbor).in[node] = edges;
      }
    }

    // Undirected
    if (data.undirected) {
      for (var _neighbor in data.undirected) {
        if (_neighbor > node) continue;

        var _edges = new Set();
        _edges.add(data.undirected[_neighbor]);
        data.undirected[_neighbor] = _edges;
        graph._nodes.get(_neighbor).undirected[node] = _edges;
      }
    }
  });
}

/***/ }),

/***/ "./node_modules/graphology/dist/iteration/edges.js":
/*!*********************************************************!*\
  !*** ./node_modules/graphology/dist/iteration/edges.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.attachEdgeIteratorCreator = attachEdgeIteratorCreator;
exports.attachEdgeIterationMethods = attachEdgeIterationMethods;

var _iterator = __webpack_require__(/*! obliterator/iterator */ "./node_modules/obliterator/iterator.js");

var _iterator2 = _interopRequireDefault(_iterator);

var _chain = __webpack_require__(/*! obliterator/chain */ "./node_modules/obliterator/chain.js");

var _chain2 = _interopRequireDefault(_chain);

var _take = __webpack_require__(/*! obliterator/take */ "./node_modules/obliterator/take.js");

var _take2 = _interopRequireDefault(_take);

var _errors = __webpack_require__(/*! ../errors */ "./node_modules/graphology/dist/errors.js");

var _data = __webpack_require__(/*! ../data */ "./node_modules/graphology/dist/data.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Definitions.
 */
var EDGES_ITERATION = [{
  name: 'edges',
  type: 'mixed'
}, {
  name: 'inEdges',
  type: 'directed',
  direction: 'in'
}, {
  name: 'outEdges',
  type: 'directed',
  direction: 'out'
}, {
  name: 'inboundEdges',
  type: 'mixed',
  direction: 'in'
}, {
  name: 'outboundEdges',
  type: 'mixed',
  direction: 'out'
}, {
  name: 'directedEdges',
  type: 'directed'
}, {
  name: 'undirectedEdges',
  type: 'undirected'
}];

/**
 * Function collecting edges from the given object.
 *
 * @param  {array}  edges  - Edges array to populate.
 * @param  {object} object - Target object.
 * @return {array}         - The found edges.
 */
/**
 * Graphology Edge Iteration
 * ==========================
 *
 * Attaching some methods to the Graph class to be able to iterate over a
 * graph's edges.
 */
function collect(edges, object) {
  for (var k in object) {
    if (object[k] instanceof Set) object[k].forEach(function (edgeData) {
      return edges.push(edgeData.key);
    });else edges.push(object[k].key);
  }
}

/**
 * Function iterating over edges from the given object using a callback.
 *
 * @param {object}   object   - Target object.
 * @param {function} callback - Function to call.
 */
function forEach(object, callback) {
  for (var k in object) {
    if (object[k] instanceof Set) object[k].forEach(function (edgeData) {
      return callback(edgeData.key, edgeData.attributes, edgeData.source.key, edgeData.target.key, edgeData.source.attributes, edgeData.target.attributes);
    });else {
      var edgeData = object[k];

      callback(edgeData.key, edgeData.attributes, edgeData.source.key, edgeData.target.key, edgeData.source.attributes, edgeData.target.attributes);
    }
  }
}

/**
 * Function returning an iterator over edges from the given object.
 *
 * @param  {object}   object - Target object.
 * @return {Iterator}
 */
function createIterator(object) {
  var keys = Object.keys(object),
      l = keys.length;

  var inner = null,
      i = 0;

  return new _iterator2.default(function next() {
    var edgeData = void 0;

    if (inner) {
      var step = inner.next();

      if (step.done) {
        inner = null;
        i++;
        return next();
      }

      edgeData = step.value;
    } else {
      if (i >= l) return { done: true };

      var k = keys[i];

      edgeData = object[k];

      if (edgeData instanceof Set) {
        inner = edgeData.values();
        return next();
      }

      i++;
    }

    return {
      done: false,
      value: [edgeData.key, edgeData.attributes, edgeData.source.key, edgeData.target.key, edgeData.source.attributes, edgeData.target.attributes]
    };
  });
}

/**
 * Function collecting edges from the given object at given key.
 *
 * @param  {array}  edges  - Edges array to populate.
 * @param  {object} object - Target object.
 * @param  {mixed}  k      - Neighbor key.
 * @return {array}         - The found edges.
 */
function collectForKey(edges, object, k) {

  if (!(k in object)) return;

  if (object[k] instanceof Set) object[k].forEach(function (edgeData) {
    return edges.push(edgeData.key);
  });else edges.push(object[k].key);

  return;
}

/**
 * Function iterating over the egdes from the object at given key using
 * a callback.
 *
 * @param {object}   object   - Target object.
 * @param {mixed}    k        - Neighbor key.
 * @param {function} callback - Callback to use.
 */
function forEachForKey(object, k, callback) {

  if (!(k in object)) return;

  if (object[k] instanceof Set) object[k].forEach(function (edgeData) {
    return callback(edgeData.key, edgeData.attributes, edgeData.source.key, edgeData.target.key, edgeData.source.attributes, edgeData.target.attributes);
  });else {
    var edgeData = object[k];

    callback(edgeData.key, edgeData.attributes, edgeData.source.key, edgeData.target.key, edgeData.source.attributes, edgeData.target.attributes);
  }

  return;
}

/**
 * Function returning an iterator over the egdes from the object at given key.
 *
 * @param  {object}   object   - Target object.
 * @param  {mixed}    k        - Neighbor key.
 * @return {Iterator}
 */
function createIteratorForKey(object, k) {
  var v = object[k];

  if (v instanceof Set) {
    var iterator = v.values();

    return new _iterator2.default(function () {
      var step = iterator.next();

      if (step.done) return step;

      var edgeData = step.value;

      return {
        done: false,
        value: [edgeData.key, edgeData.attributes, edgeData.source.key, edgeData.target.key, edgeData.source.attributes, edgeData.target.attributes]
      };
    });
  }

  return _iterator2.default.of([v.key, v.attributes, v.source.key, v.target.key, v.source.attributes, v.target.attributes]);
}

/**
 * Function creating an array of edges for the given type.
 *
 * @param  {Graph}   graph - Target Graph instance.
 * @param  {string}  type  - Type of edges to retrieve.
 * @return {array}         - Array of edges.
 */
function createEdgeArray(graph, type) {
  if (graph.size === 0) return [];

  if (type === 'mixed' || type === graph.type) return (0, _take2.default)(graph._edges.keys(), graph._edges.size);

  var size = type === 'undirected' ? graph.undirectedSize : graph.directedSize;

  var list = new Array(size),
      mask = type === 'undirected';

  var i = 0;

  graph._edges.forEach(function (data, edge) {

    if (data instanceof _data.UndirectedEdgeData === mask) list[i++] = edge;
  });

  return list;
}

/**
 * Function iterating over a graph's edges using a callback.
 *
 * @param  {Graph}    graph    - Target Graph instance.
 * @param  {string}   type     - Type of edges to retrieve.
 * @param  {function} callback - Function to call.
 */
function forEachEdge(graph, type, callback) {
  if (graph.size === 0) return;

  if (type === 'mixed' || type === graph.type) {
    graph._edges.forEach(function (data, key) {
      var attributes = data.attributes,
          source = data.source,
          target = data.target;


      callback(key, attributes, source.key, target.key, source.attributes, target.attributes);
    });
  } else {
    var mask = type === 'undirected';

    graph._edges.forEach(function (data, key) {
      if (data instanceof _data.UndirectedEdgeData === mask) {
        var attributes = data.attributes,
            source = data.source,
            target = data.target;


        callback(key, attributes, source.key, target.key, source.attributes, target.attributes);
      }
    });
  }
}

/**
 * Function creating an iterator of edges for the given type.
 *
 * @param  {Graph}    graph - Target Graph instance.
 * @param  {string}   type  - Type of edges to retrieve.
 * @return {Iterator}
 */
function createEdgeIterator(graph, type) {
  if (graph.size === 0) return _iterator2.default.empty();

  var iterator = void 0;

  if (type === 'mixed') {
    iterator = graph._edges.values();

    return new _iterator2.default(function next() {
      var step = iterator.next();

      if (step.done) return step;

      var data = step.value;

      var value = [data.key, data.attributes, data.source.key, data.target.key, data.source.attributes, data.target.attributes];

      return { value: value, done: false };
    });
  }

  iterator = graph._edges.values();

  return new _iterator2.default(function next() {
    var step = iterator.next();

    if (step.done) return step;

    var data = step.value;

    if (data instanceof _data.UndirectedEdgeData === (type === 'undirected')) {
      var value = [data.key, data.attributes, data.source.key, data.target.key, data.source.attributes, data.target.attributes];

      return { value: value, done: false };
    }

    return next();
  });
}

/**
 * Function creating an array of edges for the given type & the given node.
 *
 * @param  {string}  type      - Type of edges to retrieve.
 * @param  {string}  direction - In or out?
 * @param  {any}     nodeData  - Target node's data.
 * @return {array}             - Array of edges.
 */
function createEdgeArrayForNode(type, direction, nodeData) {
  var edges = [];

  if (type !== 'undirected') {
    if (direction !== 'out') collect(edges, nodeData.in);
    if (direction !== 'in') collect(edges, nodeData.out);
  }

  if (type !== 'directed') {
    collect(edges, nodeData.undirected);
  }

  return edges;
}

/**
 * Function iterating over a node's edges using a callback.
 *
 * @param  {string}   type      - Type of edges to retrieve.
 * @param  {string}   direction - In or out?
 * @param  {any}      nodeData  - Target node's data.
 * @param  {function} callback  - Function to call.
 */
function forEachEdgeForNode(type, direction, nodeData, callback) {

  if (type !== 'undirected') {
    if (direction !== 'out') forEach(nodeData.in, callback);
    if (direction !== 'in') forEach(nodeData.out, callback);
  }

  if (type !== 'directed') {
    forEach(nodeData.undirected, callback);
  }
}

/**
 * Function iterating over a node's edges using a callback.
 *
 * @param  {string}   type      - Type of edges to retrieve.
 * @param  {string}   direction - In or out?
 * @param  {any}      nodeData  - Target node's data.
 * @return {Iterator}
 */
function createEdgeIteratorForNode(type, direction, nodeData) {
  var iterator = _iterator2.default.empty();

  if (type !== 'undirected') {
    if (direction !== 'out' && typeof nodeData.in !== 'undefined') iterator = (0, _chain2.default)(iterator, createIterator(nodeData.in));
    if (direction !== 'in' && typeof nodeData.out !== 'undefined') iterator = (0, _chain2.default)(iterator, createIterator(nodeData.out));
  }

  if (type !== 'directed' && typeof nodeData.undirected !== 'undefined') {
    iterator = (0, _chain2.default)(iterator, createIterator(nodeData.undirected));
  }

  return iterator;
}

/**
 * Function creating an array of edges for the given path.
 *
 * @param  {string}   type       - Type of edges to retrieve.
 * @param  {string}   direction  - In or out?
 * @param  {NodeData} sourceData - Source node's data.
 * @param  {any}      target     - Target node.
 * @return {array}               - Array of edges.
 */
function createEdgeArrayForPath(type, direction, sourceData, target) {
  var edges = [];

  if (type !== 'undirected') {

    if (typeof sourceData.in !== 'undefined' && direction !== 'out') collectForKey(edges, sourceData.in, target);

    if (typeof sourceData.out !== 'undefined' && direction !== 'in') collectForKey(edges, sourceData.out, target);
  }

  if (type !== 'directed') {
    if (typeof sourceData.undirected !== 'undefined') collectForKey(edges, sourceData.undirected, target);
  }

  return edges;
}

/**
 * Function iterating over edges for the given path using a callback.
 *
 * @param  {string}   type       - Type of edges to retrieve.
 * @param  {string}   direction  - In or out?
 * @param  {NodeData} sourceData - Source node's data.
 * @param  {string}   target     - Target node.
 * @param  {function} callback   - Function to call.
 */
function forEachEdgeForPath(type, direction, sourceData, target, callback) {
  if (type !== 'undirected') {

    if (typeof sourceData.in !== 'undefined' && direction !== 'out') forEachForKey(sourceData.in, target, callback);

    if (typeof sourceData.out !== 'undefined' && direction !== 'in') forEachForKey(sourceData.out, target, callback);
  }

  if (type !== 'directed') {
    if (typeof sourceData.undirected !== 'undefined') forEachForKey(sourceData.undirected, target, callback);
  }
}

/**
 * Function returning an iterator over edges for the given path.
 *
 * @param  {string}   type       - Type of edges to retrieve.
 * @param  {string}   direction  - In or out?
 * @param  {NodeData} sourceData - Source node's data.
 * @param  {string}   target     - Target node.
 * @param  {function} callback   - Function to call.
 */
function createEdgeIteratorForPath(type, direction, sourceData, target) {
  var iterator = _iterator2.default.empty();

  if (type !== 'undirected') {

    if (typeof sourceData.in !== 'undefined' && direction !== 'out' && target in sourceData.in) iterator = (0, _chain2.default)(iterator, createIteratorForKey(sourceData.in, target));

    if (typeof sourceData.out !== 'undefined' && direction !== 'in' && target in sourceData.out) iterator = (0, _chain2.default)(iterator, createIteratorForKey(sourceData.out, target));
  }

  if (type !== 'directed') {
    if (typeof sourceData.undirected !== 'undefined' && target in sourceData.undirected) iterator = (0, _chain2.default)(iterator, createIteratorForKey(sourceData.undirected, target));
  }

  return iterator;
}

/**
 * Function attaching an edge array creator method to the Graph prototype.
 *
 * @param {function} Class       - Target class.
 * @param {object}   description - Method description.
 */
function attachEdgeArrayCreator(Class, description) {
  var name = description.name,
      type = description.type,
      direction = description.direction;

  /**
   * Function returning an array of certain edges.
   *
   * Arity 0: Return all the relevant edges.
   *
   * Arity 1: Return all of a node's relevant edges.
   * @param  {any}   node   - Target node.
   *
   * Arity 2: Return the relevant edges across the given path.
   * @param  {any}   source - Source node.
   * @param  {any}   target - Target node.
   *
   * @return {array|number} - The edges or the number of edges.
   *
   * @throws {Error} - Will throw if there are too many arguments.
   */

  Class.prototype[name] = function (source, target) {

    // Early termination
    if (type !== 'mixed' && this.type !== 'mixed' && type !== this.type) return [];

    if (!arguments.length) return createEdgeArray(this, type);

    if (arguments.length === 1) {
      source = '' + source;

      var nodeData = this._nodes.get(source);

      if (typeof nodeData === 'undefined') throw new _errors.NotFoundGraphError('Graph.' + name + ': could not find the "' + source + '" node in the graph.');

      // Iterating over a node's edges
      return createEdgeArrayForNode(type === 'mixed' ? this.type : type, direction, nodeData);
    }

    if (arguments.length === 2) {
      source = '' + source;
      target = '' + target;

      var sourceData = this._nodes.get(source);

      if (!sourceData) throw new _errors.NotFoundGraphError('Graph.' + name + ':  could not find the "' + source + '" source node in the graph.');

      if (!this._nodes.has(target)) throw new _errors.NotFoundGraphError('Graph.' + name + ':  could not find the "' + target + '" target node in the graph.');

      // Iterating over the edges between source & target
      return createEdgeArrayForPath(type, direction, sourceData, target);
    }

    throw new _errors.InvalidArgumentsGraphError('Graph.' + name + ': too many arguments (expecting 0, 1 or 2 and got ' + arguments.length + ').');
  };
}

/**
 * Function attaching a edge callback iterator method to the Graph prototype.
 *
 * @param {function} Class       - Target class.
 * @param {object}   description - Method description.
 */
function attachForEachEdge(Class, description) {
  var name = description.name,
      type = description.type,
      direction = description.direction;


  var forEachName = 'forEach' + name[0].toUpperCase() + name.slice(1, -1);

  /**
   * Function iterating over the graph's relevant edges by applying the given
   * callback.
   *
   * Arity 1: Iterate over all the relevant edges.
   * @param  {function} callback - Callback to use.
   *
   * Arity 2: Iterate over all of a node's relevant edges.
   * @param  {any}      node     - Target node.
   * @param  {function} callback - Callback to use.
   *
   * Arity 3: Iterate over the relevant edges across the given path.
   * @param  {any}      source   - Source node.
   * @param  {any}      target   - Target node.
   * @param  {function} callback - Callback to use.
   *
   * @return {undefined}
   *
   * @throws {Error} - Will throw if there are too many arguments.
   */
  Class.prototype[forEachName] = function (source, target, callback) {

    // Early termination
    if (type !== 'mixed' && this.type !== 'mixed' && type !== this.type) return;

    if (arguments.length === 1) {
      callback = source;
      return forEachEdge(this, type, callback);
    }

    if (arguments.length === 2) {
      source = '' + source;
      callback = target;

      var nodeData = this._nodes.get(source);

      if (typeof nodeData === 'undefined') throw new _errors.NotFoundGraphError('Graph.' + forEachName + ': could not find the "' + source + '" node in the graph.');

      // Iterating over a node's edges
      return forEachEdgeForNode(type === 'mixed' ? this.type : type, direction, nodeData, callback);
    }

    if (arguments.length === 3) {
      source = '' + source;
      target = '' + target;

      var sourceData = this._nodes.get(source);

      if (!sourceData) throw new _errors.NotFoundGraphError('Graph.' + forEachName + ':  could not find the "' + source + '" source node in the graph.');

      if (!this._nodes.has(target)) throw new _errors.NotFoundGraphError('Graph.' + forEachName + ':  could not find the "' + target + '" target node in the graph.');

      // Iterating over the edges between source & target
      return forEachEdgeForPath(type, direction, sourceData, target, callback);
    }

    throw new _errors.InvalidArgumentsGraphError('Graph.' + forEachName + ': too many arguments (expecting 1, 2 or 3 and got ' + arguments.length + ').');
  };
}

/**
 * Function attaching an edge iterator method to the Graph prototype.
 *
 * @param {function} Class       - Target class.
 * @param {object}   description - Method description.
 */
function attachEdgeIteratorCreator(Class, description) {
  var originalName = description.name,
      type = description.type,
      direction = description.direction;


  var name = originalName.slice(0, -1) + 'Entries';

  /**
   * Function returning an iterator over the graph's edges.
   *
   * Arity 0: Iterate over all the relevant edges.
   *
   * Arity 1: Iterate over all of a node's relevant edges.
   * @param  {any}   node   - Target node.
   *
   * Arity 2: Iterate over the relevant edges across the given path.
   * @param  {any}   source - Source node.
   * @param  {any}   target - Target node.
   *
   * @return {array|number} - The edges or the number of edges.
   *
   * @throws {Error} - Will throw if there are too many arguments.
   */
  Class.prototype[name] = function (source, target) {

    // Early termination
    if (type !== 'mixed' && this.type !== 'mixed' && type !== this.type) return _iterator2.default.empty();

    if (!arguments.length) return createEdgeIterator(this, type);

    if (arguments.length === 1) {
      source = '' + source;

      var sourceData = this._nodes.get(source);

      if (!sourceData) throw new _errors.NotFoundGraphError('Graph.' + name + ': could not find the "' + source + '" node in the graph.');

      // Iterating over a node's edges
      return createEdgeIteratorForNode(type, direction, sourceData);
    }

    if (arguments.length === 2) {
      source = '' + source;
      target = '' + target;

      var _sourceData = this._nodes.get(source);

      if (!_sourceData) throw new _errors.NotFoundGraphError('Graph.' + name + ':  could not find the "' + source + '" source node in the graph.');

      if (!this._nodes.has(target)) throw new _errors.NotFoundGraphError('Graph.' + name + ':  could not find the "' + target + '" target node in the graph.');

      // Iterating over the edges between source & target
      return createEdgeIteratorForPath(type, direction, _sourceData, target);
    }

    throw new _errors.InvalidArgumentsGraphError('Graph.' + name + ': too many arguments (expecting 0, 1 or 2 and got ' + arguments.length + ').');
  };
}

/**
 * Function attaching every edge iteration method to the Graph class.
 *
 * @param {function} Graph - Graph class.
 */
function attachEdgeIterationMethods(Graph) {
  EDGES_ITERATION.forEach(function (description) {
    attachEdgeArrayCreator(Graph, description);
    attachForEachEdge(Graph, description);
    attachEdgeIteratorCreator(Graph, description);
  });
}

/***/ }),

/***/ "./node_modules/graphology/dist/iteration/neighbors.js":
/*!*************************************************************!*\
  !*** ./node_modules/graphology/dist/iteration/neighbors.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.attachNeighborIterationMethods = attachNeighborIterationMethods;

var _iterator = __webpack_require__(/*! obliterator/iterator */ "./node_modules/obliterator/iterator.js");

var _iterator2 = _interopRequireDefault(_iterator);

var _chain = __webpack_require__(/*! obliterator/chain */ "./node_modules/obliterator/chain.js");

var _chain2 = _interopRequireDefault(_chain);

var _take = __webpack_require__(/*! obliterator/take */ "./node_modules/obliterator/take.js");

var _take2 = _interopRequireDefault(_take);

var _errors = __webpack_require__(/*! ../errors */ "./node_modules/graphology/dist/errors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Definitions.
 */
/**
 * Graphology Neighbor Iteration
 * ==============================
 *
 * Attaching some methods to the Graph class to be able to iterate over
 * neighbors.
 */
var NEIGHBORS_ITERATION = [{
  name: 'neighbors',
  type: 'mixed'
}, {
  name: 'inNeighbors',
  type: 'directed',
  direction: 'in'
}, {
  name: 'outNeighbors',
  type: 'directed',
  direction: 'out'
}, {
  name: 'inboundNeighbors',
  type: 'mixed',
  direction: 'in'
}, {
  name: 'outboundNeighbors',
  type: 'mixed',
  direction: 'out'
}, {
  name: 'directedNeighbors',
  type: 'directed'
}, {
  name: 'undirectedNeighbors',
  type: 'undirected'
}];

/**
 * Function merging neighbors into the given set iterating over the given object.
 *
 * @param {BasicSet} neighbors - Neighbors set.
 * @param {object}   object    - Target object.
 */
function merge(neighbors, object) {
  if (typeof object === 'undefined') return;

  for (var neighbor in object) {
    neighbors.add(neighbor);
  }
}

/**
 * Function creating an array of relevant neighbors for the given node.
 *
 * @param  {string}       type      - Type of neighbors.
 * @param  {string}       direction - Direction.
 * @param  {any}          nodeData  - Target node's data.
 * @return {Array}                  - The list of neighbors.
 */
function createNeighborArrayForNode(type, direction, nodeData) {

  // If we want only undirected or in or out, we can roll some optimizations
  if (type !== 'mixed') {
    if (type === 'undirected') return Object.keys(nodeData.undirected);

    if (typeof direction === 'string') return Object.keys(nodeData[direction]);
  }

  // Else we need to keep a set of neighbors not to return duplicates
  var neighbors = new Set();

  if (type !== 'undirected') {

    if (direction !== 'out') {
      merge(neighbors, nodeData.in);
    }
    if (direction !== 'in') {
      merge(neighbors, nodeData.out);
    }
  }

  if (type !== 'directed') {
    merge(neighbors, nodeData.undirected);
  }

  return (0, _take2.default)(neighbors.values(), neighbors.size);
}

/**
 * Function iterating over the given node's relevant neighbors using a
 * callback.
 *
 * @param  {string}   type      - Type of neighbors.
 * @param  {string}   direction - Direction.
 * @param  {any}      nodeData  - Target node's data.
 * @param  {function} callback  - Callback to use.
 */
function forEachInObject(nodeData, object, callback) {
  for (var k in object) {
    var edgeData = object[k];

    if (edgeData instanceof Set) edgeData = edgeData.values().next().value;

    var sourceData = edgeData.source,
        targetData = edgeData.target;

    var neighborData = sourceData === nodeData ? targetData : sourceData;

    callback(neighborData.key, neighborData.attributes);
  }
}

function forEachInObjectOnce(visited, nodeData, object, callback) {
  for (var k in object) {
    var edgeData = object[k];

    if (edgeData instanceof Set) edgeData = edgeData.values().next().value;

    var sourceData = edgeData.source,
        targetData = edgeData.target;

    var neighborData = sourceData === nodeData ? targetData : sourceData;

    if (visited.has(neighborData.key)) continue;

    visited.add(neighborData.key);

    callback(neighborData.key, neighborData.attributes);
  }
}

function forEachNeighborForNode(type, direction, nodeData, callback) {

  // If we want only undirected or in or out, we can roll some optimizations
  if (type !== 'mixed') {
    if (type === 'undirected') return forEachInObject(nodeData, nodeData.undirected, callback);

    if (typeof direction === 'string') return forEachInObject(nodeData, nodeData[direction], callback);
  }

  // Else we need to keep a set of neighbors not to return duplicates
  var visited = new Set();

  if (type !== 'undirected') {

    if (direction !== 'out') {
      forEachInObjectOnce(visited, nodeData, nodeData.in, callback);
    }
    if (direction !== 'in') {
      forEachInObjectOnce(visited, nodeData, nodeData.out, callback);
    }
  }

  if (type !== 'directed') {
    forEachInObjectOnce(visited, nodeData, nodeData.undirected, callback);
  }
}

/**
 * Function returning an iterator over the given node's relevant neighbors.
 *
 * @param  {string}   type      - Type of neighbors.
 * @param  {string}   direction - Direction.
 * @param  {any}      nodeData  - Target node's data.
 * @return {Iterator}
 */
function createObjectIterator(nodeData, object) {
  var keys = Object.keys(object),
      l = keys.length;

  var i = 0;

  return new _iterator2.default(function () {
    if (i >= l) return { done: true };

    var edgeData = object[keys[i++]];

    if (edgeData instanceof Set) edgeData = edgeData.values().next().value;

    var sourceData = edgeData.source,
        targetData = edgeData.target;

    var neighborData = sourceData === nodeData ? targetData : sourceData;

    return {
      done: false,
      value: [neighborData.key, neighborData.attributes]
    };
  });
}

function createDedupedObjectIterator(visited, nodeData, object) {
  var keys = Object.keys(object),
      l = keys.length;

  var i = 0;

  return new _iterator2.default(function next() {
    if (i >= l) return { done: true };

    var edgeData = object[keys[i++]];

    if (edgeData instanceof Set) edgeData = edgeData.values().next().value;

    var sourceData = edgeData.source,
        targetData = edgeData.target;

    var neighborData = sourceData === nodeData ? targetData : sourceData;

    if (visited.has(neighborData.key)) return next();

    visited.add(neighborData.key);

    return {
      done: false,
      value: [neighborData.key, neighborData.attributes]
    };
  });
}

function createNeighborIterator(type, direction, nodeData) {

  // If we want only undirected or in or out, we can roll some optimizations
  if (type !== 'mixed') {
    if (type === 'undirected') return createObjectIterator(nodeData, nodeData.undirected);

    if (typeof direction === 'string') return createObjectIterator(nodeData, nodeData[direction]);
  }

  var iterator = _iterator2.default.empty();

  // Else we need to keep a set of neighbors not to return duplicates
  var visited = new Set();

  if (type !== 'undirected') {

    if (direction !== 'out') {
      iterator = (0, _chain2.default)(iterator, createDedupedObjectIterator(visited, nodeData, nodeData.in));
    }
    if (direction !== 'in') {
      iterator = (0, _chain2.default)(iterator, createDedupedObjectIterator(visited, nodeData, nodeData.out));
    }
  }

  if (type !== 'directed') {
    iterator = (0, _chain2.default)(iterator, createDedupedObjectIterator(visited, nodeData, nodeData.undirected));
  }

  return iterator;
}

/**
 * Function returning whether the given node has target neighbor.
 *
 * @param  {Graph}        graph     - Target graph.
 * @param  {string}       type      - Type of neighbor.
 * @param  {string}       direction - Direction.
 * @param  {any}          node      - Target node.
 * @param  {any}          neighbor  - Target neighbor.
 * @return {boolean}
 */
function nodeHasNeighbor(graph, type, direction, node, neighbor) {

  var nodeData = graph._nodes.get(node);

  if (type !== 'undirected') {

    if (direction !== 'out' && typeof nodeData.in !== 'undefined') {
      for (var k in nodeData.in) {
        if (k === neighbor) return true;
      }
    }
    if (direction !== 'in' && typeof nodeData.out !== 'undefined') {
      for (var _k in nodeData.out) {
        if (_k === neighbor) return true;
      }
    }
  }

  if (type !== 'directed' && typeof nodeData.undirected !== 'undefined') {
    for (var _k2 in nodeData.undirected) {
      if (_k2 === neighbor) return true;
    }
  }

  return false;
}

/**
 * Function attaching a neighbors array creator method to the Graph prototype.
 *
 * @param {function} Class       - Target class.
 * @param {object}   description - Method description.
 */
function attachNeighborArrayCreator(Class, description) {
  var name = description.name,
      type = description.type,
      direction = description.direction;

  /**
   * Function returning an array or the count of certain neighbors.
   *
   * Arity 1: Return all of a node's relevant neighbors.
   * @param  {any}   node   - Target node.
   *
   * Arity 2: Return whether the two nodes are indeed neighbors.
   * @param  {any}   source - Source node.
   * @param  {any}   target - Target node.
   *
   * @return {array|number} - The neighbors or the number of neighbors.
   *
   * @throws {Error} - Will throw if there are too many arguments.
   */

  Class.prototype[name] = function (node) {

    // Early termination
    if (type !== 'mixed' && this.type !== 'mixed' && type !== this.type) return [];

    if (arguments.length === 2) {
      var node1 = '' + arguments[0],
          node2 = '' + arguments[1];

      if (!this._nodes.has(node1)) throw new _errors.NotFoundGraphError('Graph.' + name + ': could not find the "' + node1 + '" node in the graph.');

      if (!this._nodes.has(node2)) throw new _errors.NotFoundGraphError('Graph.' + name + ': could not find the "' + node2 + '" node in the graph.');

      // Here, we want to assess whether the two given nodes are neighbors
      return nodeHasNeighbor(this, type, direction, node1, node2);
    } else if (arguments.length === 1) {
      node = '' + node;

      var nodeData = this._nodes.get(node);

      if (typeof nodeData === 'undefined') throw new _errors.NotFoundGraphError('Graph.' + name + ': could not find the "' + node + '" node in the graph.');

      // Here, we want to iterate over a node's relevant neighbors
      var neighbors = createNeighborArrayForNode(type === 'mixed' ? this.type : type, direction, nodeData);

      return neighbors;
    }

    throw new _errors.InvalidArgumentsGraphError('Graph.' + name + ': invalid number of arguments (expecting 1 or 2 and got ' + arguments.length + ').');
  };
}

/**
 * Function attaching a neighbors callback iterator method to the Graph prototype.
 *
 * @param {function} Class       - Target class.
 * @param {object}   description - Method description.
 */
function attachForEachNeighbor(Class, description) {
  var name = description.name,
      type = description.type,
      direction = description.direction;


  var forEachName = 'forEach' + name[0].toUpperCase() + name.slice(1, -1);

  /**
   * Function iterating over all the relevant neighbors using a callback.
   *
   * @param  {any}      node     - Target node.
   * @param  {function} callback - Callback to use.
   * @return {undefined}
   *
   * @throws {Error} - Will throw if there are too many arguments.
   */
  Class.prototype[forEachName] = function (node, callback) {

    // Early termination
    if (type !== 'mixed' && this.type !== 'mixed' && type !== this.type) return;

    node = '' + node;

    var nodeData = this._nodes.get(node);

    if (typeof nodeData === 'undefined') throw new _errors.NotFoundGraphError('Graph.' + forEachName + ': could not find the "' + node + '" node in the graph.');

    // Here, we want to iterate over a node's relevant neighbors
    forEachNeighborForNode(type === 'mixed' ? this.type : type, direction, nodeData, callback);
  };
}

/**
 * Function attaching a neighbors callback iterator method to the Graph prototype.
 *
 * @param {function} Class       - Target class.
 * @param {object}   description - Method description.
 */
function attachNeighborIteratorCreator(Class, description) {
  var name = description.name,
      type = description.type,
      direction = description.direction;


  var iteratorName = name.slice(0, -1) + 'Entries';

  /**
   * Function returning an iterator over all the relevant neighbors.
   *
   * @param  {any}      node     - Target node.
   * @return {Iterator}
   *
   * @throws {Error} - Will throw if there are too many arguments.
   */
  Class.prototype[iteratorName] = function (node) {

    // Early termination
    if (type !== 'mixed' && this.type !== 'mixed' && type !== this.type) return _iterator2.default.empty();

    node = '' + node;

    var nodeData = this._nodes.get(node);

    if (typeof nodeData === 'undefined') throw new _errors.NotFoundGraphError('Graph.' + iteratorName + ': could not find the "' + node + '" node in the graph.');

    // Here, we want to iterate over a node's relevant neighbors
    return createNeighborIterator(type === 'mixed' ? this.type : type, direction, nodeData);
  };
}

/**
 * Function attaching every neighbor iteration method to the Graph class.
 *
 * @param {function} Graph - Graph class.
 */
function attachNeighborIterationMethods(Graph) {
  NEIGHBORS_ITERATION.forEach(function (description) {
    attachNeighborArrayCreator(Graph, description);
    attachForEachNeighbor(Graph, description);
    attachNeighborIteratorCreator(Graph, description);
  });
}

/***/ }),

/***/ "./node_modules/graphology/dist/serialization.js":
/*!*******************************************************!*\
  !*** ./node_modules/graphology/dist/serialization.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serializeNode = serializeNode;
exports.serializeEdge = serializeEdge;
exports.validateSerializedNode = validateSerializedNode;
exports.validateSerializedEdge = validateSerializedEdge;

var _data = __webpack_require__(/*! ./data */ "./node_modules/graphology/dist/data.js");

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/graphology/dist/utils.js");

/**
 * Formats internal node data into a serialized node.
 *
 * @param  {any}    key  - The node's key.
 * @param  {object} data - Internal node's data.
 * @return {array}       - The serialized node.
 */
/**
 * Graphology Serialization Utilities
 * ===================================
 *
 * Collection of functions used to validate import-export formats & to ouput
 * them from internal graph data.
 *
 * Serialized Node:
 * {key, ?attributes}
 *
 * Serialized Edge:
 * {key?, source, target, attributes?, undirected?}
 *
 * Serialized Graph:
 * {nodes[], edges?[]}
 */
function serializeNode(key, data) {
  var serialized = { key: key };

  if (Object.keys(data.attributes).length) serialized.attributes = (0, _utils.assign)({}, data.attributes);

  return serialized;
}

/**
 * Formats internal edge data into a serialized edge.
 *
 * @param  {any}    key  - The edge's key.
 * @param  {object} data - Internal edge's data.
 * @return {array}       - The serialized edge.
 */
function serializeEdge(key, data) {
  var serialized = {
    source: data.source.key,
    target: data.target.key
  };

  // We export the key unless if it was provided by the user
  if (!data.generatedKey) serialized.key = key;

  if (Object.keys(data.attributes).length) serialized.attributes = (0, _utils.assign)({}, data.attributes);

  if (data instanceof _data.UndirectedEdgeData) serialized.undirected = true;

  return serialized;
}

/**
 * Checks whether the given value is a serialized node.
 *
 * @param  {mixed} value - Target value.
 * @return {string|null}
 */
function validateSerializedNode(value) {
  if (!(0, _utils.isPlainObject)(value)) return 'not-object';

  if (!('key' in value)) return 'no-key';

  if ('attributes' in value && (!(0, _utils.isPlainObject)(value.attributes) || value.attributes === null)) return 'invalid-attributes';

  return null;
}

/**
 * Checks whether the given value is a serialized edge.
 *
 * @param  {mixed} value - Target value.
 * @return {string|null}
 */
function validateSerializedEdge(value) {
  if (!(0, _utils.isPlainObject)(value)) return 'not-object';

  if (!('source' in value)) return 'no-source';

  if (!('target' in value)) return 'no-target';

  if ('attributes' in value && (!(0, _utils.isPlainObject)(value.attributes) || value.attributes === null)) return 'invalid-attributes';

  if ('undirected' in value && typeof value.undirected !== 'boolean') return 'invalid-undirected';

  return null;
}

/***/ }),

/***/ "./node_modules/graphology/dist/utils.js":
/*!***********************************************!*\
  !*** ./node_modules/graphology/dist/utils.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.assign = assign;
exports.getMatchingEdge = getMatchingEdge;
exports.isGraph = isGraph;
exports.isPlainObject = isPlainObject;
exports.prettyPrint = prettyPrint;
exports.privateProperty = privateProperty;
exports.readOnlyProperty = readOnlyProperty;
exports.incrementalId = incrementalId;
/**
 * Graphology Utilities
 * =====================
 *
 * Collection of helpful functions used by the implementation.
 */

/**
 * Very simple Object.assign-like function.
 *
 * @param  {object} target       - First object.
 * @param  {object} [...objects] - Objects to merge.
 * @return {object}
 */
function assign() {
  var target = arguments[0] || {};

  for (var i = 1, l = arguments.length; i < l; i++) {
    if (!arguments[i]) continue;

    for (var k in arguments[i]) {
      target[k] = arguments[i][k];
    }
  }

  return target;
}

/**
 * Function returning the first matching edge for given path.
 * Note: this function does not check the existence of source & target. This
 * must be performed by the caller.
 *
 * @param  {Graph}  graph  - Target graph.
 * @param  {any}    source - Source node.
 * @param  {any}    target - Target node.
 * @param  {string} type   - Type of the edge (mixed, directed or undirected).
 * @return {string|null}
 */
function getMatchingEdge(graph, source, target, type) {
  var sourceData = graph._nodes.get(source);

  var edge = null;

  if (!sourceData) return edge;

  if (type === 'mixed') {
    edge = sourceData.out && sourceData.out[target] || sourceData.undirected && sourceData.undirected[target];
  } else if (type === 'directed') {
    edge = sourceData.out && sourceData.out[target];
  } else {
    edge = sourceData.undirected && sourceData.undirected[target];
  }

  return edge;
}

/**
 * Checks whether the given value is a Graph implementation instance.
 *
 * @param  {mixed}   value - Target value.
 * @return {boolean}
 */
function isGraph(value) {
  return value !== null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && typeof value.addUndirectedEdgeWithKey === 'function' && typeof value.dropNode === 'function';
}

/**
 * Checks whether the given value is a plain object.
 *
 * @param  {mixed}   value - Target value.
 * @return {boolean}
 */
function isPlainObject(value) {
  return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value !== null && value.constructor === Object;
}

/**
 * Pretty prints the given integer.
 *
 * @param  {number}  integer - Target integer.
 * @return {string}          - The pretty string.
 */
function prettyPrint(integer) {
  var string = '' + integer;

  var prettyString = '';

  for (var i = 0, l = string.length; i < l; i++) {
    var j = l - i - 1;

    prettyString = string[j] + prettyString;

    if (!((i - 2) % 3) && i !== l - 1) prettyString = ',' + prettyString;
  }

  return prettyString;
}

/**
 * Creates a "private" property for the given member name by concealing it
 * using the `enumerable` option.
 *
 * @param {object} target - Target object.
 * @param {string} name   - Member name.
 */
function privateProperty(target, name, value) {
  Object.defineProperty(target, name, {
    enumerable: false,
    configurable: false,
    writable: true,
    value: value
  });
}

/**
 * Creates a read-only property for the given member name & the given getter.
 *
 * @param {object}   target - Target object.
 * @param {string}   name   - Member name.
 * @param {mixed}    value  - The attached getter or fixed value.
 */
function readOnlyProperty(target, name, value) {
  var descriptor = {
    enumerable: true,
    configurable: true
  };

  if (typeof value === 'function') {
    descriptor.get = value;
  } else {
    descriptor.value = value;
    descriptor.writable = false;
  }

  Object.defineProperty(target, name, descriptor);
}

/**
 * Creates a function generating incremental ids for edges.
 *
 * @return {function}
 */
function incrementalId() {
  var i = 0;

  return function () {
    return '_geid' + i++ + '_';
  };
}

/***/ }),

/***/ "./node_modules/obliterator/chain.js":
/*!*******************************************!*\
  !*** ./node_modules/obliterator/chain.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Obliterator Chain Function
 * ===========================
 *
 * Variadic function combining the given iterators.
 */
var Iterator = __webpack_require__(/*! ./iterator.js */ "./node_modules/obliterator/iterator.js");

/**
 * Chain.
 *
 * @param  {...Iterator} iterators - Target iterators.
 * @return {Iterator}
 */
module.exports = function chain() {
  var iterators = arguments,
      current,
      i = -1;

  return new Iterator(function iterate() {
    if (!current) {
      i++;

      if (i >= iterators.length)
        return {done: true};

      current = iterators[i];
    }

    var step = current.next();

    if (step.done) {
      current = null;
      return iterate();
    }

    return step;
  });
};


/***/ }),

/***/ "./node_modules/obliterator/iterator.js":
/*!**********************************************!*\
  !*** ./node_modules/obliterator/iterator.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Obliterator Iterator Class
 * ===========================
 *
 * Simple class representing the library's iterators.
 */

/**
 * Iterator class.
 *
 * @constructor
 * @param {function} next - Next function.
 */
function Iterator(next) {

  // Hiding the given function
  Object.defineProperty(this, '_next', {
    writable: false,
    enumerable: false,
    value: next
  });

  // Is the iterator complete?
  this.done = false;
}

/**
 * Next function.
 *
 * @return {object}
 */
// NOTE: maybe this should dropped for performance?
Iterator.prototype.next = function() {
  if (this.done)
    return {done: true};

  var step = this._next();

  if (step.done)
    this.done = true;

  return step;
};

/**
 * If symbols are supported, we add `next` to `Symbol.iterator`.
 */
if (typeof Symbol !== 'undefined')
  Iterator.prototype[Symbol.iterator] = function() {
    return this;
  };

/**
 * Returning an iterator of the given values.
 *
 * @param  {any...} values - Values.
 * @return {Iterator}
 */
Iterator.of = function() {
  var args = arguments,
      l = args.length,
      i = 0;

  return new Iterator(function() {
    if (i >= l)
      return {done: true};

    return {done: false, value: args[i++]};
  });
};

/**
 * Returning an empty iterator.
 *
 * @return {Iterator}
 */
Iterator.empty = function() {
  var iterator = new Iterator(null);
  iterator.done = true;

  return iterator;
};

/**
 * Returning whether the given value is an iterator.
 *
 * @param  {any} value - Value.
 * @return {boolean}
 */
Iterator.is = function(value) {
  if (value instanceof Iterator)
    return true;

  return (
    typeof value === 'object' &&
    value !== null &&
    typeof value.next === 'function'
  );
};

/**
 * Exporting.
 */
module.exports = Iterator;


/***/ }),

/***/ "./node_modules/obliterator/take.js":
/*!******************************************!*\
  !*** ./node_modules/obliterator/take.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* eslint no-constant-condition: 0 */
/**
 * Obliterator Take Function
 * ==========================
 *
 * Function taking n or every value of the given iterator and returns them
 * into an array.
 */

/**
 * Take.
 *
 * @param  {Iterator} iterator - Target iterator.
 * @param  {number}   [n]      - Optional number of items to take.
 * @return {array}
 */
module.exports = function take(iterator, n) {
  var l = arguments.length > 1 ? n : Infinity,
      array = l !== Infinity ? new Array(l) : [],
      step,
      i = 0;

  while (true) {

    if (i === l)
      return array;

    step = iterator.next();

    if (step.done) {

      if (i !== n)
        return array.slice(0, i);

      return array;
    }

    array[i++] = step.value;
  }
};


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/sigma/camera.js":
/*!**************************************!*\
  !*** ./node_modules/sigma/camera.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _events = __webpack_require__(/*! events */ "./node_modules/events/events.js");

var easings = _interopRequireWildcard(__webpack_require__(/*! ./easings */ "./node_modules/sigma/easings.js"));

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/sigma/utils.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Defaults.
 */
var ANIMATE_DEFAULTS = {
  easing: 'quadraticInOut',
  duration: 150
};
var DEFAULT_ZOOMING_RATIO = 1.5; // TODO: animate options = number polymorphism?
// TODO: pan, zoom, unzoom, reset, rotate, zoomTo
// TODO: add width / height to camera and add #.resize
// TODO: bind camera to renderer rather than sigma
// TODO: add #.graphToDisplay, #.displayToGraph, batch methods later

/**
 * Camera class
 *
 * @constructor
 */

var Camera =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(Camera, _EventEmitter);

  function Camera() {
    var _this;

    _classCallCheck(this, Camera);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Camera).call(this)); // Properties

    _this.x = 0.5;
    _this.y = 0.5;
    _this.angle = 0;
    _this.ratio = 1; // State

    _this.nextFrame = null;
    _this.previousState = _this.getState();
    _this.enabled = true;
    return _this;
  }
  /**
   * Method used to enable the camera.
   *
   * @return {Camera}
   */


  _createClass(Camera, [{
    key: "enable",
    value: function enable() {
      this.enabled = true;
      return this;
    }
    /**
     * Method used to disable the camera.
     *
     * @return {Camera}
     */

  }, {
    key: "disable",
    value: function disable() {
      this.enabled = false;
      return this;
    }
    /**
     * Method used to retrieve the camera's current state.
     *
     * @return {object}
     */

  }, {
    key: "getState",
    value: function getState() {
      return {
        x: this.x,
        y: this.y,
        angle: this.angle,
        ratio: this.ratio
      };
    }
    /**
     * Method used to retrieve the camera's previous state.
     *
     * @return {object}
     */

  }, {
    key: "getPreviousState",
    value: function getPreviousState() {
      var state = this.previousState;
      return {
        x: state.x,
        y: state.y,
        angle: state.angle,
        ratio: state.ratio
      };
    }
    /**
     * Method used to check whether the camera is currently being animated.
     *
     * @return {boolean}
     */

  }, {
    key: "isAnimated",
    value: function isAnimated() {
      return !!this.nextFrame;
    }
    /**
     * Method returning the coordinates of a point from the graph frame to the
     * viewport.
     *
     * @param  {object} dimensions - Dimensions of the viewport.
     * @param  {number} x          - The X coordinate.
     * @param  {number} y          - The Y coordinate.
     * @return {object}            - The point coordinates in the viewport.
     */
    // TODO: assign to gain one object
    // TODO: angles

  }, {
    key: "graphToViewport",
    value: function graphToViewport(dimensions, x, y) {
      var smallestDimension = Math.min(dimensions.width, dimensions.height);
      var dx = smallestDimension / dimensions.width,
          dy = smallestDimension / dimensions.height; // TODO: we keep on the upper left corner!
      // TODO: how to normalize sizes?

      return {
        x: (x - this.x + this.ratio / 2 / dx) * (smallestDimension / this.ratio),
        y: (this.y - y + this.ratio / 2 / dy) * (smallestDimension / this.ratio)
      };
    }
    /**
     * Method returning the coordinates of a point from the viewport frame to the
     * graph frame.
     *
     * @param  {object} dimensions - Dimensions of the viewport.
     * @param  {number} x          - The X coordinate.
     * @param  {number} y          - The Y coordinate.
     * @return {object}            - The point coordinates in the graph frame.
     */
    // TODO: angles

  }, {
    key: "viewportToGraph",
    value: function viewportToGraph(dimensions, x, y) {
      var smallestDimension = Math.min(dimensions.width, dimensions.height);
      var dx = smallestDimension / dimensions.width,
          dy = smallestDimension / dimensions.height;
      return {
        x: this.ratio / smallestDimension * x + this.x - this.ratio / 2 / dx,
        y: -(this.ratio / smallestDimension * y - this.y - this.ratio / 2 / dy)
      };
    }
    /**
     * Method returning the abstract rectangle containing the graph according
     * to the camera's state.
     *
     * @return {object} - The view's rectangle.
     */
    // TODO: angle

  }, {
    key: "viewRectangle",
    value: function viewRectangle(dimensions) {
      // TODO: reduce relative margin?
      var marginX = 0 * dimensions.width / 8,
          marginY = 0 * dimensions.height / 8;
      var p1 = this.viewportToGraph(dimensions, 0 - marginX, 0 - marginY),
          p2 = this.viewportToGraph(dimensions, dimensions.width + marginX, 0 - marginY),
          h = this.viewportToGraph(dimensions, 0, dimensions.height + marginY);
      return {
        x1: p1.x,
        y1: p1.y,
        x2: p2.x,
        y2: p2.y,
        height: p2.y - h.y
      };
    }
    /**
     * Method used to set the camera's state.
     *
     * @param  {object} state - New state.
     * @return {Camera}
     */

  }, {
    key: "setState",
    value: function setState(state) {
      if (!this.enabled) return this; // TODO: validations
      // TODO: update by function
      // Keeping track of last state

      this.previousState = this.getState();
      if ('x' in state) this.x = state.x;
      if ('y' in state) this.y = state.y;
      if ('angle' in state) this.angle = state.angle;
      if ('ratio' in state) this.ratio = state.ratio; // Emitting
      // TODO: don't emit if nothing changed?

      this.emit('updated', this.getState());
      return this;
    }
    /**
     * Method used to animate the camera.
     *
     * @param  {object}   state      - State to reach eventually.
     * @param  {object}   options    - Options:
     * @param  {number}     duration - Duration of the animation.
     * @param  {function} callback   - Callback
     * @return {function}            - Return a function to cancel the animation.
     */

  }, {
    key: "animate",
    value: function animate(state, options, callback) {
      var _this2 = this;

      if (!this.enabled) return this; // TODO: validation

      options = (0, _utils.assign)({}, ANIMATE_DEFAULTS, options);
      var easing = typeof options.easing === 'function' ? options.easing : easings[options.easing]; // Canceling previous animation if needed

      if (this.nextFrame) cancelAnimationFrame(this.nextFrame); // State

      var start = Date.now(),
          initialState = this.getState(); // Function performing the animation

      var fn = function fn() {
        var t = (Date.now() - start) / options.duration; // The animation is over:

        if (t >= 1) {
          _this2.nextFrame = null;

          _this2.setState(state);

          if (typeof callback === 'function') callback();
          return;
        }

        var coefficient = easing(t);
        var newState = {};
        if ('x' in state) newState.x = initialState.x + (state.x - initialState.x) * coefficient;
        if ('y' in state) newState.y = initialState.y + (state.y - initialState.y) * coefficient;
        if ('angle' in state) newState.angle = initialState.angle + (state.angle - initialState.angle) * coefficient;
        if ('ratio' in state) newState.ratio = initialState.ratio + (state.ratio - initialState.ratio) * coefficient;

        _this2.setState(newState);

        _this2.nextFrame = requestAnimationFrame(fn);
      };

      if (this.nextFrame) {
        cancelAnimationFrame(this.nextFrame);
        this.nextFrame = requestAnimationFrame(fn);
      } else {
        fn();
      }
    }
    /**
     * Method used to zoom the camera.
     *
     * @param  {number|object} factorOrOptions - Factor or options.
     * @return {function}
     */

  }, {
    key: "animatedZoom",
    value: function animatedZoom(factorOrOptions) {
      if (!factorOrOptions) {
        return this.animate({
          ratio: this.ratio / DEFAULT_ZOOMING_RATIO
        });
      } else {
        if (typeof factorOrOptions === 'number') return this.animate({
          ratio: this.ratio / factorOrOptions
        });else return this.animate({
          ratio: this.ratio / (factorOrOptions.factor || DEFAULT_ZOOMING_RATIO)
        }, factorOrOptions);
      }
    }
    /**
     * Method used to unzoom the camera.
     *
     * @param  {number|object} factorOrOptions - Factor or options.
     * @return {function}
     */

  }, {
    key: "animatedUnzoom",
    value: function animatedUnzoom(factorOrOptions) {
      if (!factorOrOptions) {
        return this.animate({
          ratio: this.ratio * DEFAULT_ZOOMING_RATIO
        });
      } else {
        if (typeof factorOrOptions === 'number') return this.animate({
          ratio: this.ratio * factorOrOptions
        });else return this.animate({
          ratio: this.ratio * (factorOrOptions.factor || DEFAULT_ZOOMING_RATIO)
        }, factorOrOptions);
      }
    }
    /**
     * Method used to reset the camera.
     *
     * @param  {object} options - Options.
     * @return {function}
     */

  }, {
    key: "animatedReset",
    value: function animatedReset(options) {
      return this.animate({
        x: 0.5,
        y: 0.5,
        ratio: 1,
        angle: 0
      }, options);
    }
  }]);

  return Camera;
}(_events.EventEmitter);

exports.default = Camera;

/***/ }),

/***/ "./node_modules/sigma/captor.js":
/*!**************************************!*\
  !*** ./node_modules/sigma/captor.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _events = __webpack_require__(/*! events */ "./node_modules/events/events.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Captor =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(Captor, _EventEmitter);

  function Captor(container, camera) {
    var _this;

    _classCallCheck(this, Captor);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Captor).call(this)); // Properties

    _this.container = container;
    _this.camera = camera;
    return _this;
  }

  return Captor;
}(_events.EventEmitter);

exports.default = Captor;

/***/ }),

/***/ "./node_modules/sigma/captors/mouse.js":
/*!*********************************************!*\
  !*** ./node_modules/sigma/captors/mouse.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _camera = _interopRequireDefault(__webpack_require__(/*! ../camera */ "./node_modules/sigma/camera.js"));

var _captor = _interopRequireDefault(__webpack_require__(/*! ../captor */ "./node_modules/sigma/captor.js"));

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/sigma/captors/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/**
 * Constants.
 */
var DRAG_TIMEOUT = 200,
    MOUSE_INERTIA_DURATION = 200,
    MOUSE_INERTIA_RATIO = 3,
    MOUSE_ZOOM_DURATION = 200,
    ZOOMING_RATIO = 1.7,
    DOUBLE_CLICK_TIMEOUT = 300,
    DOUBLE_CLICK_ZOOMING_RATIO = 2.2,
    DOUBLE_CLICK_ZOOMING_DURATION = 200;
/**
 * Mouse captor class.
 *
 * @constructor
 */

var MouseCaptor =
/*#__PURE__*/
function (_Captor) {
  _inherits(MouseCaptor, _Captor);

  function MouseCaptor(container, camera) {
    var _this;

    _classCallCheck(this, MouseCaptor);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MouseCaptor).call(this, container, camera)); // Properties

    _this.container = container;
    _this.camera = camera; // State

    _this.enabled = true;
    _this.hasDragged = false;
    _this.downStartTime = null;
    _this.lastMouseX = null;
    _this.lastMouseY = null;
    _this.isMouseDown = false;
    _this.isMoving = false;
    _this.movingTimeout = null;
    _this.startCameraState = null;
    _this.lastCameraState = null;
    _this.clicks = 0;
    _this.doubleClickTimeout = null;
    _this.wheelLock = false; // Binding methods

    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleDown = _this.handleDown.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleUp = _this.handleUp.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleMove = _this.handleMove.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleWheel = _this.handleWheel.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleOut = _this.handleOut.bind(_assertThisInitialized(_assertThisInitialized(_this))); // Binding events

    container.addEventListener('click', _this.handleClick, false);
    container.addEventListener('mousedown', _this.handleDown, false);
    container.addEventListener('mousemove', _this.handleMove, false);
    container.addEventListener('DOMMouseScroll', _this.handleWheel, false);
    container.addEventListener('mousewheel', _this.handleWheel, false);
    container.addEventListener('mouseout', _this.handleOut, false);
    document.addEventListener('mouseup', _this.handleUp, false);
    return _this;
  }

  _createClass(MouseCaptor, [{
    key: "kill",
    value: function kill() {
      var container = this.container;
      container.removeEventListener('click', this.handleClick);
      container.removeEventListener('mousedown', this.handleDown);
      container.removeEventListener('mousemove', this.handleMove);
      container.removeEventListener('DOMMouseScroll', this.handleWheel);
      container.removeEventListener('mousewheel', this.handleWheel);
      container.removeEventListener('mouseout', this.handleOut);
      document.removeEventListener('mouseup', this.handleUp);
    }
  }, {
    key: "handleClick",
    value: function handleClick(e) {
      var _this2 = this;

      if (!this.enabled) return;
      this.clicks++;

      if (this.clicks === 2) {
        this.clicks = 0;
        clearTimeout(this.doubleClickTimeout);
        this.doubleClickTimeout = null;
        return this.handleDoubleClick(e);
      }

      setTimeout(function () {
        _this2.clicks = 0;
        _this2.doubleClickTimeout = null;
      }, DOUBLE_CLICK_TIMEOUT); // NOTE: this is here to prevent click events on drag

      if (!this.hasDragged) this.emit('click', (0, _utils.getMouseCoords)(e));
    }
  }, {
    key: "handleDoubleClick",
    value: function handleDoubleClick(e) {
      if (!this.enabled) return;
      var center = (0, _utils.getCenter)(e);
      var cameraState = this.camera.getState();
      var newRatio = cameraState.ratio / DOUBLE_CLICK_ZOOMING_RATIO; // TODO: factorize

      var dimensions = {
        width: this.container.offsetWidth,
        height: this.container.offsetHeight
      };
      var clickX = (0, _utils.getX)(e),
          clickY = (0, _utils.getY)(e); // TODO: baaaad we mustn't mutate the camera, create a Camera.from or #.copy
      // TODO: factorize pan & zoomTo

      var cameraWithNewRatio = new _camera.default();
      cameraWithNewRatio.ratio = newRatio;
      cameraWithNewRatio.x = cameraState.x;
      cameraWithNewRatio.y = cameraState.y;
      var clickGraph = this.camera.viewportToGraph(dimensions, clickX, clickY),
          centerGraph = this.camera.viewportToGraph(dimensions, center.x, center.y);
      var clickGraphNew = cameraWithNewRatio.viewportToGraph(dimensions, clickX, clickY),
          centerGraphNew = cameraWithNewRatio.viewportToGraph(dimensions, center.x, center.y);
      var deltaX = clickGraphNew.x - centerGraphNew.x - clickGraph.x + centerGraph.x,
          deltaY = clickGraphNew.y - centerGraphNew.y - clickGraph.y + centerGraph.y;
      this.camera.animate({
        x: cameraState.x - deltaX,
        y: cameraState.y - deltaY,
        ratio: newRatio
      }, {
        easing: 'quadraticInOut',
        duration: DOUBLE_CLICK_ZOOMING_DURATION
      });
      if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      e.stopPropagation();
      return false;
    }
  }, {
    key: "handleDown",
    value: function handleDown(e) {
      if (!this.enabled) return;
      this.startCameraState = this.camera.getState();
      this.lastCameraState = this.startCameraState;
      this.lastMouseX = (0, _utils.getX)(e);
      this.lastMouseY = (0, _utils.getY)(e);
      this.hasDragged = false;
      this.downStartTime = Date.now(); // TODO: dispatch events

      switch (e.which) {
        default:
          // Left button pressed
          this.isMouseDown = true;
          this.emit('mousedown', (0, _utils.getMouseCoords)(e));
      }
    }
  }, {
    key: "handleUp",
    value: function handleUp(e) {
      var _this3 = this;

      if (!this.enabled || !this.isMouseDown) return;
      this.isMouseDown = false;

      if (this.movingTimeout) {
        this.movingTimeout = null;
        clearTimeout(this.movingTimeout);
      }

      var x = (0, _utils.getX)(e),
          y = (0, _utils.getY)(e);
      var cameraState = this.camera.getState(),
          previousCameraState = this.camera.getPreviousState();

      if (this.isMoving) {
        this.camera.animate({
          x: cameraState.x + MOUSE_INERTIA_RATIO * (cameraState.x - previousCameraState.x),
          y: cameraState.y + MOUSE_INERTIA_RATIO * (cameraState.y - previousCameraState.y)
        }, {
          duration: MOUSE_INERTIA_DURATION,
          easing: 'quadraticOut'
        });
      } else if (this.lastMouseX !== x || this.lastMouseY !== y) {
        this.camera.setState({
          x: cameraState.x,
          y: cameraState.y
        });
      }

      this.isMoving = false;
      setImmediate(function () {
        return _this3.hasDragged = false;
      });
      this.emit('mouseup', (0, _utils.getMouseCoords)(e));
    }
  }, {
    key: "handleMove",
    value: function handleMove(e) {
      var _this4 = this;

      if (!this.enabled) return;
      this.emit('mousemove', (0, _utils.getMouseCoords)(e));

      if (this.isMouseDown) {
        // TODO: dispatch events
        this.isMoving = true;
        this.hasDragged = true;
        if (this.movingTimeout) clearTimeout(this.movingTimeout);
        this.movingTimeout = setTimeout(function () {
          _this4.movingTimeout = null;
          _this4.isMoving = false;
        }, DRAG_TIMEOUT);
        var dimensions = {
          width: this.container.offsetWidth,
          height: this.container.offsetHeight
        };
        var eX = (0, _utils.getX)(e),
            eY = (0, _utils.getY)(e);
        var lastMouse = this.camera.viewportToGraph(dimensions, this.lastMouseX, this.lastMouseY);
        var mouse = this.camera.viewportToGraph(dimensions, eX, eY);
        var offsetX = lastMouse.x - mouse.x,
            offsetY = lastMouse.y - mouse.y;
        var cameraState = this.camera.getState();
        var x = cameraState.x + offsetX,
            y = cameraState.y + offsetY;
        this.camera.setState({
          x: x,
          y: y
        });
        this.lastMouseX = eX;
        this.lastMouseY = eY;
      }

      if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      e.stopPropagation();
      return false;
    }
  }, {
    key: "handleWheel",
    value: function handleWheel(e) {
      var _this5 = this;

      if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      e.stopPropagation();
      if (!this.enabled) return false;
      var delta = (0, _utils.getWheelDelta)(e);
      if (!delta) return false;
      if (this.wheelLock) return false;
      this.wheelLock = true; // TODO: handle max zoom

      var ratio = delta > 0 ? 1 / ZOOMING_RATIO : ZOOMING_RATIO;
      var cameraState = this.camera.getState();
      var newRatio = ratio * cameraState.ratio;
      var center = (0, _utils.getCenter)(e);
      var dimensions = {
        width: this.container.offsetWidth,
        height: this.container.offsetHeight
      };
      var clickX = (0, _utils.getX)(e),
          clickY = (0, _utils.getY)(e); // TODO: baaaad we mustn't mutate the camera, create a Camera.from or #.copy
      // TODO: factorize pan & zoomTo

      var cameraWithNewRatio = new _camera.default();
      cameraWithNewRatio.ratio = newRatio;
      cameraWithNewRatio.x = cameraState.x;
      cameraWithNewRatio.y = cameraState.y;
      var clickGraph = this.camera.viewportToGraph(dimensions, clickX, clickY),
          centerGraph = this.camera.viewportToGraph(dimensions, center.x, center.y);
      var clickGraphNew = cameraWithNewRatio.viewportToGraph(dimensions, clickX, clickY),
          centerGraphNew = cameraWithNewRatio.viewportToGraph(dimensions, center.x, center.y);
      var deltaX = clickGraphNew.x - centerGraphNew.x - clickGraph.x + centerGraph.x,
          deltaY = clickGraphNew.y - centerGraphNew.y - clickGraph.y + centerGraph.y;
      this.camera.animate({
        x: cameraState.x - deltaX,
        y: cameraState.y - deltaY,
        ratio: newRatio
      }, {
        easing: 'linear',
        duration: MOUSE_ZOOM_DURATION
      }, function () {
        return _this5.wheelLock = false;
      });
      return false;
    }
  }, {
    key: "handleOut",
    value: function handleOut() {// TODO: dispatch event
    }
  }]);

  return MouseCaptor;
}(_captor.default);

exports.default = MouseCaptor;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/sigma/captors/utils.js":
/*!*********************************************!*\
  !*** ./node_modules/sigma/captors/utils.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getX = getX;
exports.getY = getY;
exports.getWidth = getWidth;
exports.getHeight = getHeight;
exports.getCenter = getCenter;
exports.getMouseCoords = getMouseCoords;
exports.getWheelDelta = getWheelDelta;

var _utils = __webpack_require__(/*! ../renderers/utils */ "./node_modules/sigma/renderers/utils.js");

/**
 * Sigma.js Captor Utils
 * ======================
 *
 * Miscellenous helper functions related to the captors.
 */

/**
 * Extract the local X position from a mouse or touch event.
 *
 * @param  {event}  e - A mouse or touch event.
 * @return {number}     The local X value of the mouse.
 */
function getX(e) {
  if (typeof e.offsetX !== 'undefined') return e.offsetX;
  if (typeof e.layerX !== 'undefined') return e.layerX;
  if (typeof e.clientX !== 'undefined') return e.clientX;
  throw new Error('sigma/captors/utils.getX: could not extract x from event.');
}
/**
 * Extract the local Y position from a mouse or touch event.
 *
 * @param  {event}  e - A mouse or touch event.
 * @return {number}     The local Y value of the mouse.
 */


function getY(e) {
  if (typeof e.offsetY !== 'undefined') return e.offsetY;
  if (typeof e.layerY !== 'undefined') return e.layerY;
  if (typeof e.clientY !== 'undefined') return e.clientY;
  throw new Error('sigma/captors/utils.getY: could not extract y from event.');
}
/**
 * Extract the width from a mouse or touch event.
 *
 * @param  {event}  e - A mouse or touch event.
 * @return {number}     The width of the event's target.
 */


function getWidth(e) {
  var w = !e.target.ownerSVGElement ? e.target.width : e.target.ownerSVGElement.width;
  if (typeof w === 'number') return w;
  if (w !== undefined && w.baseVal !== undefined) return w.baseVal.value;
  throw new Error('sigma/captors/utils.getWidth: could not extract width from event.');
}
/**
 * Extract the height from a mouse or touch event.
 *
 * @param  {event}  e - A mouse or touch event.
 * @return {number}     The height of the event's target.
 */


function getHeight(e) {
  var w = !e.target.ownerSVGElement ? e.target.height : e.target.ownerSVGElement.height;
  if (typeof w === 'number') return w;
  if (w !== undefined && w.baseVal !== undefined) return w.baseVal.value;
  throw new Error('sigma/captors/utils.getHeight: could not extract height from event.');
}
/**
 * Extract the center from a mouse or touch event.
 *
 * @param  {event}  e - A mouse or touch event.
 * @return {object}     The center of the event's target.
 */


function getCenter(e) {
  var ratio = e.target.namespaceURI.indexOf('svg') !== -1 ? 1 : (0, _utils.getPixelRatio)();
  return {
    x: getWidth(e) / (2 * ratio),
    y: getHeight(e) / (2 * ratio)
  };
}
/**
 * Convert mouse coords to sigma coords.
 *
 * @param  {event}   e   - A mouse or touch event.
 * @param  {number}  [x] - The x coord to convert
 * @param  {number}  [y] - The y coord to convert
 *
 * @return {object}
 */


function getMouseCoords(e) {
  return {
    x: getX(e),
    y: getY(e),
    clientX: e.clientX,
    clientY: e.clientY,
    ctrlKey: e.ctrlKey,
    metaKey: e.metaKey,
    altKey: e.altKey,
    shiftKey: e.shiftKey
  };
}
/**
 * Extract the wheel delta from a mouse or touch event.
 *
 * @param  {event}  e - A mouse or touch event.
 * @return {number}     The wheel delta of the mouse.
 */


function getWheelDelta(e) {
  if (typeof e.wheelDelta !== 'undefined') return e.wheelDelta / 360;
  if (typeof e.detail !== 'undefined') return e.detail / -9;
  throw new Error('sigma/captors/utils.getDelta: could not extract delta from event.');
}

/***/ }),

/***/ "./node_modules/sigma/easings.js":
/*!***************************************!*\
  !*** ./node_modules/sigma/easings.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cubicInOut = exports.cubicOut = exports.cubicIn = exports.quadraticInOut = exports.quadraticOut = exports.quadraticIn = exports.linear = void 0;

/**
 * Sigma.js Easings
 * =================
 *
 * Handy collection of easing functions.
 */
var linear = function linear(k) {
  return k;
};

exports.linear = linear;

var quadraticIn = function quadraticIn(k) {
  return k * k;
};

exports.quadraticIn = quadraticIn;

var quadraticOut = function quadraticOut(k) {
  return k * (2 - k);
};

exports.quadraticOut = quadraticOut;

var quadraticInOut = function quadraticInOut(k) {
  if ((k *= 2) < 1) return 0.5 * k * k;
  return -0.5 * (--k * (k - 2) - 1);
};

exports.quadraticInOut = quadraticInOut;

var cubicIn = function cubicIn(k) {
  return k * k * k;
};

exports.cubicIn = cubicIn;

var cubicOut = function cubicOut(k) {
  return --k * k * k + 1;
};

exports.cubicOut = cubicOut;

var cubicInOut = function cubicInOut(k) {
  if ((k *= 2) < 1) return 0.5 * k * k * k;
  return 0.5 * ((k -= 2) * k * k + 2);
};

exports.cubicInOut = cubicInOut;

/***/ }),

/***/ "./node_modules/sigma/heuristics/labels.js":
/*!*************************************************!*\
  !*** ./node_modules/sigma/heuristics/labels.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.labelsToDisplayFromGrid = labelsToDisplayFromGrid;

var _camera = _interopRequireDefault(__webpack_require__(/*! ../camera */ "./node_modules/sigma/camera.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Sigma.js Labels Heuristics
 * ===========================
 *
 * Miscelleneous heuristics related to label display.
 */

/**
 * Constants.
 */
// Dimensions of a normal cell
var DEFAULT_CELL = {
  width: 250,
  height: 175
}; // Dimensions of an unzoomed cell. This one is usually larger than the normal
// one to account for the fact that labels will more likely collide.

var DEFAULT_UNZOOMED_CELL = {
  width: 400,
  height: 300
};
/**
 * Helpers.
 */

function collision(x1, y1, w1, h1, x2, y2, w2, h2) {
  return x1 < x2 + w2 && x1 + w1 > x2 && y1 < y2 + h2 && y1 + h1 > y2;
} // TODO: cache camera position of selected nodes to avoid costly computations
// in anti-collision step
// TODO: minSize to be displayed
// TOOD: document a little bit more so future people can understand this mess

/**
 * Label grid heuristic selecting labels to display.
 *
 * @param  {object} params                 - Parameters:
 * @param  {object}   cache                - Cache storing nodes' data.
 * @param  {Camera}   camera               - The renderer's camera.
 * @param  {Set}      displayedLabels      - Currently displayed labels.
 * @param  {Array}    visibleNodes         - Nodes visible for this render.
 * @param  {Graph}    graph                - The rendered graph.
 * @return {Array}                         - The selected labels.
 */


function labelsToDisplayFromGrid(params) {
  var cache = params.cache,
      camera = params.camera,
      displayedLabels = params.displayedLabels,
      visibleNodes = params.visibleNodes,
      dimensions = params.dimensions,
      graph = params.graph;
  var cameraState = camera.getState(),
      previousCameraState = camera.getPreviousState();
  var previousCamera = new _camera.default();
  previousCamera.setState(previousCameraState); // Camera hasn't moved?

  var still = cameraState.x === previousCameraState.x && cameraState.y === previousCameraState.y && cameraState.ratio === previousCameraState.ratio; // State

  var zooming = cameraState.ratio < previousCameraState.ratio,
      panning = cameraState.x !== previousCameraState.x || cameraState.y !== previousCameraState.y,
      unzooming = cameraState.ratio > previousCameraState.ratio,
      unzoomedPanning = !zooming && !unzooming && cameraState.ratio >= 1,
      zoomedPanning = panning && displayedLabels.size && !zooming && !unzooming; // Trick to discretize unzooming

  if (unzooming && Math.trunc(cameraState.ratio * 100) % 5 !== 0) return Array.from(displayedLabels); // If panning while unzoomed, we shouldn't change label selection

  if ((unzoomedPanning || still) && displayedLabels.size !== 0) return Array.from(displayedLabels); // When unzoomed & zooming

  if (zooming && cameraState.ratio >= 1) return Array.from(displayedLabels); // Adapting cell dimensions

  var cell = cameraState.ratio >= 1.3 ? DEFAULT_UNZOOMED_CELL : DEFAULT_CELL;
  var cwr = dimensions.width % cell.width;
  var cellWidth = cell.width + cwr / Math.floor(dimensions.width / cell.width);
  var chr = dimensions.height % cell.height;
  var cellHeight = cell.height + chr / Math.floor(dimensions.height / cell.height);
  var adjustedWidth = dimensions.width + cellWidth,
      adjustedHeight = dimensions.height + cellHeight,
      adjustedX = -cellWidth,
      adjustedY = -cellHeight;
  var panningWidth = dimensions.width + cellWidth / 2,
      panningHeight = dimensions.height + cellHeight / 2,
      panningX = -(cellWidth / 2),
      panningY = -(cellHeight / 2); // console.log(cellWidth, cellHeight, dimensions.width / cellWidth, dimensions.height / cellHeight);

  var worthyLabels = [];
  var grid = {};
  var maxSize = -Infinity,
      biggestNode = null;

  for (var i = 0, l = visibleNodes.length; i < l; i++) {
    var node = visibleNodes[i],
        nodeData = cache[node]; // Finding our node's cell in the grid

    var pos = camera.graphToViewport(dimensions, nodeData.x, nodeData.y); // Node is not actually visible on screen
    // NOTE: can optimize margin on the right side (only if we know where the labels go)

    if (pos.x < adjustedX || pos.x > adjustedWidth || pos.y < adjustedY || pos.y > adjustedHeight) continue; // Keeping track of the maximum node size for certain cases

    if (nodeData.size > maxSize) {
      maxSize = nodeData.size;
      biggestNode = node;
    } // If panning when zoomed, we consider only displayed labels and newly
    // visible nodes


    if (zoomedPanning) {
      var ppos = previousCamera.graphToViewport(dimensions, nodeData.x, nodeData.y); // Was node visible earlier?

      if (ppos.x >= panningX && ppos.x <= panningWidth && ppos.y >= panningY && ppos.y <= panningHeight) {
        // Was the label displayed?
        if (!displayedLabels.has(node)) continue;
      }
    }

    var xKey = Math.floor(pos.x / cellWidth),
        yKey = Math.floor(pos.y / cellHeight);
    var key = "".concat(xKey, "\xA7").concat(yKey);

    if (typeof grid[key] === 'undefined') {
      // This cell is not yet occupied
      grid[key] = node;
    } else {
      // We must solve a conflict in this cell
      var currentNode = grid[key],
          currentNodeData = cache[currentNode]; // We prefer already displayed labels

      if (displayedLabels.size > 0) {
        var n1 = displayedLabels.has(node),
            n2 = displayedLabels.has(currentNode);

        if (!n1 && n2) {
          continue;
        }

        if (n1 && !n2) {
          grid[key] = node;
          continue;
        }

        if ((zoomedPanning || zooming) && n1 && n2) {
          worthyLabels.push(node);
          continue;
        }
      } // In case of size & degree equality, we use the node's key so that the
      // process remains deterministic


      var won = false;

      if (nodeData.size > currentNodeData.size) {
        won = true;
      } else if (nodeData.size === currentNodeData.size) {
        var nodeDegree = graph.degree(node),
            currentNodeDegree = graph.degree(currentNode);

        if (nodeDegree > currentNodeDegree) {
          won = true;
        } else if (nodeDegree === currentNodeDegree) {
          if (node > currentNode) won = true;
        }
      }

      if (won) grid[key] = node;
    }
  } // Compiling the labels


  var biggestNodeShown = worthyLabels.some(function (node) {
    return node === biggestNode;
  });

  for (var _key in grid) {
    var _node = grid[_key];
    if (_node === biggestNode) biggestNodeShown = true;
    worthyLabels.push(_node);
  } // Always keeping biggest node shown on screen


  if (!biggestNodeShown && biggestNode) worthyLabels.push(biggestNode); // Basic anti-collision

  var collisions = new Set();

  for (var _i = 0, _l = worthyLabels.length; _i < _l; _i++) {
    var _n = worthyLabels[_i],
        d1 = cache[_n],
        p1 = camera.graphToViewport(dimensions, d1.x, d1.y);
    if (collisions.has(_n)) continue;

    for (var j = _i + 1; j < _l; j++) {
      var _n2 = worthyLabels[j],
          d2 = cache[_n2],
          p2 = camera.graphToViewport(dimensions, d2.x, d2.y);
      var c = collision(p1.x, p1.y, d1.label.length * 8, 14, p2.x, p2.y, d2.label.length * 8, 14);

      if (c) {
        // NOTE: add degree as tie-breaker here if required in the future
        if (d1.size < d2.size) collisions.add(_n);else collisions.add(_n2);
      }
    }
  } // console.log(collisions)


  return worthyLabels.filter(function (l) {
    return !collisions.has(l);
  });
}

/***/ }),

/***/ "./node_modules/sigma/heuristics/z-index.js":
/*!**************************************************!*\
  !*** ./node_modules/sigma/heuristics/z-index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zIndexOrdering = zIndexOrdering;

/**
 * Sigma.js zIndex Heuristics
 * ===========================
 *
 * Miscelleneous heuristics related to z-index ordering of nodes & edges.
 */

/**
 * Function ordering the given elements in reverse z-order so they drawn
 * the correct way.
 *
 * @param  {number}   extent   - [min, max] z values.
 * @param  {function} getter   - Z attribute getter function.
 * @param  {array}    elements - The array to sort.
 * @return {array} - The sorted array.
 */
function zIndexOrdering(extent, getter, elements) {
  // const n = elements.length;
  // const [min, max] = extent;
  // const k = max - min;
  // No ordering needs to be done
  // if (k === 0 || k === -Infinity)
  //   return elements;
  // If k is > n, we'll use a standard sort
  return elements.sort(function (a, b) {
    var zA = getter(a) || 0,
        zB = getter(b) || 0;
    if (zA < zB) return -1;
    if (zA > zB) return 1;
    return 0;
  }); // TODO: counting sort optimization
}

/***/ }),

/***/ "./node_modules/sigma/quadtree.js":
/*!****************************************!*\
  !*** ./node_modules/sigma/quadtree.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extend = _interopRequireDefault(__webpack_require__(/*! @yomguithereal/helpers/extend */ "./node_modules/@yomguithereal/helpers/extend.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// TODO: should not ask the quadtree when the camera has the whole graph in
// sight.
// TODO: a square can be represented as topleft + width, saying for the quad blocks (reduce mem)
// TODO: jsdoc
// TODO: be sure we can handle cases overcoming boundaries (because of size) or use a maxed size
// TODO: filtering unwanted labels beforehand through the filter function
// NOTE: this is basically a MX-CIF Quadtree at this point
// NOTE: need to explore R-Trees for edges
// NOTE: need to explore 2d segment tree for edges
// NOTE: probably can do faster using spatial hashing

/**
 * Constants.
 *
 * Note that since we are representing a static 4-ary tree, the indices of the
 * quadrants are the following:
 *   - TOP_LEFT:     4i + b
 *   - TOP_RIGHT:    4i + 2b
 *   - BOTTOM_LEFT:  4i + 3b
 *   - BOTTOM_RIGHT: 4i + 4b
 */
var BLOCKS = 4,
    MAX_LEVEL = 5;
var X_OFFSET = 0,
    Y_OFFSET = 1,
    WIDTH_OFFSET = 2,
    HEIGHT_OFFSET = 3;
var TOP_LEFT = 1,
    TOP_RIGHT = 2,
    BOTTOM_LEFT = 3,
    BOTTOM_RIGHT = 4;
/**
 * Geometry helpers.
 */

/**
 * Function returning whether the given rectangle is axis-aligned.
 *
 * @param  {number} x1
 * @param  {number} y1
 * @param  {number} x2
 * @param  {number} y2
 * @return {boolean}
 */

function isAxisAligned(x1, y1, x2, y2) {
  return x1 === x2 || y1 === y2;
}

function squareCollidesWithQuad(x1, y1, w, qx, qy, qw, qh) {
  return x1 < qx + qw && x1 + w > qx && y1 < qy + qh && y1 + w > qy;
}

function rectangleCollidesWithQuad(x1, y1, w, h, qx, qy, qw, qh) {
  return x1 < qx + qw && x1 + w > qx && y1 < qy + qh && y1 + h > qy;
}

function pointIsInQuad(x, y, qx, qy, qw, qh) {
  var xmp = qx + qw / 2,
      ymp = qy + qh / 2,
      top = y < ymp,
      left = x < xmp;
  return top ? left ? TOP_LEFT : TOP_RIGHT : left ? BOTTOM_LEFT : BOTTOM_RIGHT;
}
/**
 * Helper functions that are not bound to the class so an external user
 * cannot mess with them.
 */


function buildQuadrants(maxLevel, data) {
  // [block, level]
  var stack = [0, 0];

  while (stack.length) {
    var level = stack.pop(),
        block = stack.pop();
    var topLeftBlock = 4 * block + BLOCKS,
        topRightBlock = 4 * block + 2 * BLOCKS,
        bottomLeftBlock = 4 * block + 3 * BLOCKS,
        bottomRightBlock = 4 * block + 4 * BLOCKS;
    var x = data[block + X_OFFSET],
        y = data[block + Y_OFFSET],
        width = data[block + WIDTH_OFFSET],
        height = data[block + HEIGHT_OFFSET],
        hw = width / 2,
        hh = height / 2;
    data[topLeftBlock + X_OFFSET] = x;
    data[topLeftBlock + Y_OFFSET] = y;
    data[topLeftBlock + WIDTH_OFFSET] = hw;
    data[topLeftBlock + HEIGHT_OFFSET] = hh;
    data[topRightBlock + X_OFFSET] = x + hw;
    data[topRightBlock + Y_OFFSET] = y;
    data[topRightBlock + WIDTH_OFFSET] = hw;
    data[topRightBlock + HEIGHT_OFFSET] = hh;
    data[bottomLeftBlock + X_OFFSET] = x;
    data[bottomLeftBlock + Y_OFFSET] = y + hh;
    data[bottomLeftBlock + WIDTH_OFFSET] = hw;
    data[bottomLeftBlock + HEIGHT_OFFSET] = hh;
    data[bottomRightBlock + X_OFFSET] = x + hw;
    data[bottomRightBlock + Y_OFFSET] = y + hh;
    data[bottomRightBlock + WIDTH_OFFSET] = hw;
    data[bottomRightBlock + HEIGHT_OFFSET] = hh;

    if (level < maxLevel - 1) {
      stack.push(bottomRightBlock, level + 1);
      stack.push(bottomLeftBlock, level + 1);
      stack.push(topRightBlock, level + 1);
      stack.push(topLeftBlock, level + 1);
    }
  }
}

function insertNode(maxLevel, data, containers, key, x, y, size) {
  var x1 = x - size,
      y1 = y - size,
      w = size * 2;
  var level = 0,
      block = 0;

  while (true) {
    // If we reached max level
    if (level >= maxLevel) {
      containers[block] = containers[block] || [];
      containers[block].push(key);
      return;
    }

    var topLeftBlock = 4 * block + BLOCKS,
        topRightBlock = 4 * block + 2 * BLOCKS,
        bottomLeftBlock = 4 * block + 3 * BLOCKS,
        bottomRightBlock = 4 * block + 4 * BLOCKS;
    var collidingWithTopLeft = squareCollidesWithQuad(x1, y1, w, data[topLeftBlock + X_OFFSET], data[topLeftBlock + Y_OFFSET], data[topLeftBlock + WIDTH_OFFSET], data[topLeftBlock + HEIGHT_OFFSET]);
    var collidingWithTopRight = squareCollidesWithQuad(x1, y1, w, data[topRightBlock + X_OFFSET], data[topRightBlock + Y_OFFSET], data[topRightBlock + WIDTH_OFFSET], data[topRightBlock + HEIGHT_OFFSET]);
    var collidingWithBottomLeft = squareCollidesWithQuad(x1, y1, w, data[bottomLeftBlock + X_OFFSET], data[bottomLeftBlock + Y_OFFSET], data[bottomLeftBlock + WIDTH_OFFSET], data[bottomLeftBlock + HEIGHT_OFFSET]);
    var collidingWithBottomRight = squareCollidesWithQuad(x1, y1, w, data[bottomRightBlock + X_OFFSET], data[bottomRightBlock + Y_OFFSET], data[bottomRightBlock + WIDTH_OFFSET], data[bottomRightBlock + HEIGHT_OFFSET]);
    var collisions = collidingWithTopLeft + collidingWithTopRight + collidingWithBottomLeft + collidingWithBottomRight; // If we don't have at least a collision, there is an issue

    if (collisions === 0) throw new Error("sigma/quadtree.insertNode: no collision (level: ".concat(level, ", key: ").concat(key, ", x: ").concat(x, ", y: ").concat(y, ", size: ").concat(size, ").")); // If we have 3 collisions, we have a geometry problem obviously

    if (collisions === 3) throw new Error("sigma/quadtree.insertNode: 3 impossible collisions (level: ".concat(level, ", key: ").concat(key, ", x: ").concat(x, ", y: ").concat(y, ", size: ").concat(size, ").")); // If we have more that one collision, we stop here and store the node
    // in the relevant containers

    if (collisions > 1) {
      // NOTE: this is a nice way to optimize for hover, but not for frustum
      // since it requires to uniq the collected nodes
      // if (collisions < 4) {
      //   // If we intersect two quads, we place the node in those two
      //   if (collidingWithTopLeft) {
      //     containers[topLeftBlock] = containers[topLeftBlock] || [];
      //     containers[topLeftBlock].push(key);
      //   }
      //   if (collidingWithTopRight) {
      //     containers[topRightBlock] = containers[topRightBlock] || [];
      //     containers[topRightBlock].push(key);
      //   }
      //   if (collidingWithBottomLeft) {
      //     containers[bottomLeftBlock] = containers[bottomLeftBlock] || [];
      //     containers[bottomLeftBlock].push(key);
      //   }
      //   if (collidingWithBottomRight) {
      //     containers[bottomRightBlock] = containers[bottomRightBlock] || [];
      //     containers[bottomRightBlock].push(key);
      //   }
      // }
      // else {
      //   // Else we keep the node where it is to avoid more pointless computations
      //   containers[block] = containers[block] || [];
      //   containers[block].push(key);
      // }
      containers[block] = containers[block] || [];
      containers[block].push(key);
      return;
    } else {
      level++;
    } // Else we recurse into the correct quads


    if (collidingWithTopLeft) block = topLeftBlock;
    if (collidingWithTopRight) block = topRightBlock;
    if (collidingWithBottomLeft) block = bottomLeftBlock;
    if (collidingWithBottomRight) block = bottomRightBlock;
  }
}

function getNodesInAxisAlignedRectangleArea(maxLevel, data, containers, x1, y1, w, h) {
  // [block, level]
  var stack = [0, 0];
  var collectedNodes = [];
  var container;

  while (stack.length) {
    var level = stack.pop(),
        block = stack.pop(); // Collecting nodes

    container = containers[block];
    if (container) (0, _extend.default)(collectedNodes, container); // If we reached max level

    if (level >= maxLevel) continue;
    var topLeftBlock = 4 * block + BLOCKS,
        topRightBlock = 4 * block + 2 * BLOCKS,
        bottomLeftBlock = 4 * block + 3 * BLOCKS,
        bottomRightBlock = 4 * block + 4 * BLOCKS;
    var collidingWithTopLeft = rectangleCollidesWithQuad(x1, y1, w, h, data[topLeftBlock + X_OFFSET], data[topLeftBlock + Y_OFFSET], data[topLeftBlock + WIDTH_OFFSET], data[topLeftBlock + HEIGHT_OFFSET]);
    var collidingWithTopRight = rectangleCollidesWithQuad(x1, y1, w, h, data[topRightBlock + X_OFFSET], data[topRightBlock + Y_OFFSET], data[topRightBlock + WIDTH_OFFSET], data[topRightBlock + HEIGHT_OFFSET]);
    var collidingWithBottomLeft = rectangleCollidesWithQuad(x1, y1, w, h, data[bottomLeftBlock + X_OFFSET], data[bottomLeftBlock + Y_OFFSET], data[bottomLeftBlock + WIDTH_OFFSET], data[bottomLeftBlock + HEIGHT_OFFSET]);
    var collidingWithBottomRight = rectangleCollidesWithQuad(x1, y1, w, h, data[bottomRightBlock + X_OFFSET], data[bottomRightBlock + Y_OFFSET], data[bottomRightBlock + WIDTH_OFFSET], data[bottomRightBlock + HEIGHT_OFFSET]);
    if (collidingWithTopLeft) stack.push(topLeftBlock, level + 1);
    if (collidingWithTopRight) stack.push(topRightBlock, level + 1);
    if (collidingWithBottomLeft) stack.push(bottomLeftBlock, level + 1);
    if (collidingWithBottomRight) stack.push(bottomRightBlock, level + 1);
  }

  return collectedNodes;
}
/**
 * QuadTree class.
 *
 * @constructor
 * @param {object} boundaries - The graph boundaries.
 */


var QuadTree =
/*#__PURE__*/
function () {
  function QuadTree(params) {
    _classCallCheck(this, QuadTree);

    params = params || {}; // Allocating the underlying byte array

    var L = Math.pow(4, MAX_LEVEL);
    this.data = new Float32Array(BLOCKS * ((4 * L - 1) / 3));
    this.containers = {};
    this.cache = null;
    this.lastRectangle = null;
    if (params.boundaries) this.resize(params.boundaries);else this.resize({
      x: 0,
      y: 0,
      width: 1,
      height: 1
    });
    if (typeof params.filter === 'function') this.nodeFilter = params.filter;
  }

  _createClass(QuadTree, [{
    key: "add",
    value: function add(key, x, y, size) {
      insertNode(MAX_LEVEL, this.data, this.containers, key, x, y, size);
      return this;
    }
  }, {
    key: "resize",
    value: function resize(boundaries) {
      this.clear(); // Building the quadrants

      this.data[X_OFFSET] = boundaries.x;
      this.data[Y_OFFSET] = boundaries.y;
      this.data[WIDTH_OFFSET] = boundaries.width;
      this.data[HEIGHT_OFFSET] = boundaries.height;
      buildQuadrants(MAX_LEVEL, this.data);
    }
  }, {
    key: "clear",
    value: function clear() {
      this.containers = {};
      return this;
    }
  }, {
    key: "point",
    value: function point(x, y) {
      var nodes = [];
      var block = 0,
          level = 0;

      do {
        if (this.containers[block]) nodes.push.apply(nodes, this.containers[block]);
        var quad = pointIsInQuad(x, y, this.data[block + X_OFFSET], this.data[block + Y_OFFSET], this.data[block + WIDTH_OFFSET], this.data[block + HEIGHT_OFFSET]);
        block = 4 * block + quad * BLOCKS;
        level++;
      } while (level <= MAX_LEVEL);

      return nodes;
    }
  }, {
    key: "rectangle",
    value: function rectangle(x1, y1, x2, y2, height) {
      var lr = this.lastRectangle;

      if (lr && x1 === lr.x1 && x2 === lr.x2 && y1 === lr.y1 && y2 === lr.y2 && height === lr.height) {
        return this.cache;
      }

      this.lastRectangle = {
        x1: x1,
        y1: y1,
        x2: x2,
        y2: y2,
        height: height
      }; // Is the rectangle axis aligned?

      if (!isAxisAligned(x1, y1, x2, y2)) throw new Error('sigma/quadtree.rectangle: shifted view is not yet implemented.');
      var collectedNodes = getNodesInAxisAlignedRectangleArea(MAX_LEVEL, this.data, this.containers, x1, y1, Math.abs(x1 - x2) || Math.abs(y1 - y2), height);
      this.cache = collectedNodes;
      return this.cache;
    }
  }]);

  return QuadTree;
}();

exports.default = QuadTree;

/***/ }),

/***/ "./node_modules/sigma/renderer.js":
/*!****************************************!*\
  !*** ./node_modules/sigma/renderer.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _events = __webpack_require__(/*! events */ "./node_modules/events/events.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Renderer class.
 *
 * @constructor
 */
var Renderer =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(Renderer, _EventEmitter);

  function Renderer() {
    _classCallCheck(this, Renderer);

    return _possibleConstructorReturn(this, _getPrototypeOf(Renderer).apply(this, arguments));
  }

  return Renderer;
}(_events.EventEmitter);

exports.default = Renderer;

/***/ }),

/***/ "./node_modules/sigma/renderers/canvas/components/hover.js":
/*!*****************************************************************!*\
  !*** ./node_modules/sigma/renderers/canvas/components/hover.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = drawHover;

var _node = _interopRequireDefault(__webpack_require__(/*! ./node */ "./node_modules/sigma/renderers/canvas/components/node.js"));

var _label = _interopRequireDefault(__webpack_require__(/*! ./label */ "./node_modules/sigma/renderers/canvas/components/label.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Sigma.js Canvas Renderer Hover Component
 * =========================================
 *
 * Function used by the canvas renderer to display a single node's hovered
 * state.
 */
function drawHover(context, data, settings) {
  var size = settings.labelSize,
      font = settings.labelFont,
      weight = settings.labelWeight;
  context.font = "".concat(weight, " ").concat(size, "px ").concat(font); // Then we draw the label background

  context.beginPath();
  context.fillStyle = '#fff';
  context.shadowOffsetX = 0;
  context.shadowOffsetY = 0;
  context.shadowBlur = 8;
  context.shadowColor = '#000';
  var textWidth = context.measureText(data.label).width;
  var x = Math.round(data.x - size / 2 - 2),
      y = Math.round(data.y - size / 2 - 2),
      w = Math.round(textWidth + size / 2 + data.size + 9),
      h = Math.round(size + 4),
      e = Math.round(size / 2 + 2);
  context.moveTo(x, y + e);
  context.moveTo(x, y + e);
  context.arcTo(x, y, x + e, y, e);
  context.lineTo(x + w, y);
  context.lineTo(x + w, y + h);
  context.lineTo(x + e, y + h);
  context.arcTo(x, y + h, x, y + h - e, e);
  context.lineTo(x, y + e);
  context.closePath();
  context.fill();
  context.shadowOffsetX = 0;
  context.shadowOffsetY = 0;
  context.shadowBlur = 0; // Then we need to draw the node

  (0, _node.default)(context, data); // And finally we draw the label

  (0, _label.default)(context, data, settings);
}

/***/ }),

/***/ "./node_modules/sigma/renderers/canvas/components/label.js":
/*!*****************************************************************!*\
  !*** ./node_modules/sigma/renderers/canvas/components/label.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = drawLabel;

/**
 * Sigma.js Canvas Renderer Label Component
 * =========================================
 *
 * Function used by the canvas renderer to display a single node's label.
 */
function drawLabel(context, data, settings) {
  var size = settings.labelSize,
      font = settings.labelFont,
      weight = settings.labelWeight;
  context.fillStyle = '#000';
  context.font = "".concat(weight, " ").concat(size, "px ").concat(font);
  context.fillText(data.label, data.x + data.size + 3, data.y + size / 3);
}

/***/ }),

/***/ "./node_modules/sigma/renderers/canvas/components/node.js":
/*!****************************************************************!*\
  !*** ./node_modules/sigma/renderers/canvas/components/node.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = drawNode;

/**
 * Sigma.js Canvas Renderer Node Component
 * ========================================
 *
 * Function used by the canvas renderer to display a single node.
 */
var PI_TIMES_2 = Math.PI * 2;

function drawNode(context, data) {
  context.fillStyle = data.color;
  context.beginPath();
  context.arc(data.x, data.y, data.size, 0, PI_TIMES_2, true);
  context.closePath();
  context.fill();
}

/***/ }),

/***/ "./node_modules/sigma/renderers/display-data.js":
/*!******************************************************!*\
  !*** ./node_modules/sigma/renderers/display-data.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EdgeDisplayData = exports.NodeDisplayData = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Sigma.js Display Data Classes
 * ==============================
 *
 * Classes representing nodes & edges display data aiming at facilitating
 * the engine's memory representation and keep them in a pool to avoid
 * requiring to allocate memory too often.
 *
 * NOTE: it's possible to optimize this further by maintaining display data
 * in byte arrays but this would prove more tedious for the rendering logic
 * afterwards.
 */
var NodeDisplayData =
/*#__PURE__*/
function () {
  function NodeDisplayData(index, settings) {
    _classCallCheck(this, NodeDisplayData);

    this.index = index;
    this.x = 0;
    this.y = 0;
    this.size = 2;
    this.color = settings.defaultNodeColor;
    this.hidden = false;
    this.label = '';
  }

  _createClass(NodeDisplayData, [{
    key: "assign",
    value: function assign(data) {
      if ('x' in data) this.x = data.x;
      if ('y' in data) this.y = data.y;
      if ('size' in data) this.size = data.size;
      if ('color' in data) this.color = data.color;
      if ('hidden' in data) this.hidden = data.hidden;
      if ('label' in data) this.label = data.label;
    }
  }]);

  return NodeDisplayData;
}();

exports.NodeDisplayData = NodeDisplayData;

var EdgeDisplayData =
/*#__PURE__*/
function () {
  function EdgeDisplayData(index, settings) {
    _classCallCheck(this, EdgeDisplayData);

    this.index = index;
    this.size = 1;
    this.color = settings.defaultEdgeColor;
    this.hidden = false;
  }

  _createClass(EdgeDisplayData, [{
    key: "assign",
    value: function assign(data) {
      if ('size' in data) this.size = data.size;
      if ('color' in data) this.color = data.color;
      if ('hidden' in data) this.hidden = data.hidden;
    }
  }]);

  return EdgeDisplayData;
}();

exports.EdgeDisplayData = EdgeDisplayData;

/***/ }),

/***/ "./node_modules/sigma/renderers/utils.js":
/*!***********************************************!*\
  !*** ./node_modules/sigma/renderers/utils.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createElement = createElement;
exports.getPixelRatio = getPixelRatio;
exports.createNormalizationFunction = createNormalizationFunction;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Sigma.js Rendering Utils
 * ===========================
 *
 * Helpers used by most renderers.
 */

/**
 * Function used to create DOM elements easily.
 *
 * @param  {string} tag        - Tag name of the element to create.
 * @param  {object} attributes - Attributes map.
 * @return {HTMLElement}
 */
function createElement(tag, attributes) {
  var element = document.createElement(tag);
  if (!attributes) return element;

  for (var k in attributes) {
    if (k === 'style') {
      for (var s in attributes[k]) {
        element.style[s] = attributes[k][s];
      }
    } else {
      element.setAttribute(k, attributes[k]);
    }
  }

  return element;
}
/**
 * Function returning the browser's pixel ratio.
 *
 * @return {number}
 */


function getPixelRatio() {
  var screen = window.screen;
  if (typeof screen.deviceXDPI !== 'undefined' && typeof screen.logicalXDPI !== 'undefined' && screen.deviceXDPI > screen.logicalXDPI) return screen.systemXDPI / screen.logicalXDPI;else if (typeof window.devicePixelRatio !== 'undefined') return window.devicePixelRatio;
  return 1;
}
/**
 * Factory returning a function normalizing the given node's position & size.
 *
 * @param  {object}   extent  - Extent of the graph.
 * @return {function}
 */


function createNormalizationFunction(extent) {
  var _extent$x = _slicedToArray(extent.x, 2),
      minX = _extent$x[0],
      maxX = _extent$x[1],
      _extent$y = _slicedToArray(extent.y, 2),
      minY = _extent$y[0],
      maxY = _extent$y[1];

  var fn;
  var ratio = Math.max(maxX - minX, maxY - minY);
  if (ratio === 0) ratio = 1;
  var dX = (maxX + minX) / 2,
      dY = (maxY + minY) / 2;

  fn = function fn(data) {
    return {
      x: 0.5 + (data.x - dX) / ratio,
      y: 0.5 + (data.y - dY) / ratio
    };
  }; // TODO: possibility to apply this in batch over array of indices


  fn.applyTo = function (data) {
    data.x = 0.5 + (data.x - dX) / ratio;
    data.y = 0.5 + (data.y - dY) / ratio;
  };

  fn.inverse = function (data) {
    return {
      x: dX + ratio * (data.x - 0.5),
      y: dY + ratio * (data.y - 0.5)
    };
  };

  fn.ratio = ratio;
  return fn;
}

/***/ }),

/***/ "./node_modules/sigma/renderers/webgl/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/sigma/renderers/webgl/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extent = __webpack_require__(/*! graphology-metrics/extent */ "./node_modules/graphology-metrics/extent.js");

var _isGraph = _interopRequireDefault(__webpack_require__(/*! graphology-utils/is-graph */ "./node_modules/graphology-utils/is-graph.js"));

var _renderer = _interopRequireDefault(__webpack_require__(/*! ../../renderer */ "./node_modules/sigma/renderer.js"));

var _camera = _interopRequireDefault(__webpack_require__(/*! ../../camera */ "./node_modules/sigma/camera.js"));

var _mouse = _interopRequireDefault(__webpack_require__(/*! ../../captors/mouse */ "./node_modules/sigma/captors/mouse.js"));

var _quadtree = _interopRequireDefault(__webpack_require__(/*! ../../quadtree */ "./node_modules/sigma/quadtree.js"));

var _displayData2 = __webpack_require__(/*! ../display-data */ "./node_modules/sigma/renderers/display-data.js");

var _node2 = _interopRequireDefault(__webpack_require__(/*! ./programs/node.fast */ "./node_modules/sigma/renderers/webgl/programs/node.fast.js"));

var _edge = _interopRequireDefault(__webpack_require__(/*! ./programs/edge */ "./node_modules/sigma/renderers/webgl/programs/edge.js"));

var _label = _interopRequireDefault(__webpack_require__(/*! ../canvas/components/label */ "./node_modules/sigma/renderers/canvas/components/label.js"));

var _hover = _interopRequireDefault(__webpack_require__(/*! ../canvas/components/hover */ "./node_modules/sigma/renderers/canvas/components/hover.js"));

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/sigma/utils.js");

var _utils2 = __webpack_require__(/*! ../utils */ "./node_modules/sigma/renderers/utils.js");

var _utils3 = __webpack_require__(/*! ./utils */ "./node_modules/sigma/renderers/webgl/utils.js");

var _labels = __webpack_require__(/*! ../../heuristics/labels */ "./node_modules/sigma/heuristics/labels.js");

var _zIndex = __webpack_require__(/*! ../../heuristics/z-index */ "./node_modules/sigma/heuristics/z-index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Constants.
 */
var PIXEL_RATIO = (0, _utils2.getPixelRatio)();
var WEBGL_OVERSAMPLING_RATIO = (0, _utils2.getPixelRatio)();
/**
 * Defaults.
 */

var DEFAULT_SETTINGS = {
  // Performance
  hideEdgesOnMove: false,
  hideLabelsOnMove: false,
  renderLabels: true,
  // Component rendering
  defaultNodeColor: '#999',
  defaultEdgeColor: '#ccc',
  labelFont: 'Arial',
  labelSize: 14,
  labelWeight: 'normal',
  // Reducers
  nodeReducer: null,
  edgeReducer: null,
  // Features
  zIndex: false
};
/**
 * Main class.
 *
 * @constructor
 * @param {Graph}       graph     - Graph to render.
 * @param {HTMLElement} container - DOM container in which to render.
 * @param {object}      settings  - Optional settings.
 */

var WebGLRenderer =
/*#__PURE__*/
function (_Renderer) {
  _inherits(WebGLRenderer, _Renderer);

  function WebGLRenderer(graph, container, settings) {
    var _this;

    _classCallCheck(this, WebGLRenderer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(WebGLRenderer).call(this));
    settings = settings || {};
    _this.settings = (0, _utils.assign)({}, DEFAULT_SETTINGS, settings); // Validating

    if (!(0, _isGraph.default)(graph)) throw new Error('sigma/renderers/webgl: invalid graph instance.');
    if (!(container instanceof HTMLElement)) throw new Error('sigma/renderers/webgl: container should be an html element.'); // Properties

    _this.graph = graph;
    _this.captors = {};
    _this.container = container;
    _this.elements = {};
    _this.contexts = {};
    _this.listeners = {}; // Indices & cache
    // TODO: this could be improved by key => index => floatArray
    // TODO: the cache should erase keys on node delete & add new

    _this.quadtree = new _quadtree.default();
    _this.nodeDataCache = {};
    _this.edgeDataCache = {};
    _this.nodeExtent = null;
    _this.edgeExtent = null;

    _this.initializeCache(); // Normalization function


    _this.normalizationFunction = null; // Starting dimensions

    _this.width = 0;
    _this.height = 0; // State

    _this.highlightedNodes = new Set();
    _this.displayedLabels = new Set();
    _this.hoveredNode = null;
    _this.wasRenderedInThisFrame = false;
    _this.renderFrame = null;
    _this.renderHighlightedNodesFrame = null;
    _this.needToProcess = false;
    _this.needToSoftProcess = false; // Initializing contexts

    _this.createContext('edges');

    _this.createContext('nodes');

    _this.createContext('labels', false);

    _this.createContext('hovers', false);

    _this.createContext('mouse', false); // Blending


    var gl = _this.contexts.nodes;
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    gl.enable(gl.BLEND);
    gl = _this.contexts.edges;
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    gl.enable(gl.BLEND); // Loading programs

    _this.nodePrograms = {
      def: new _node2.default(_this.contexts.nodes)
    };
    _this.edgePrograms = {
      def: new _edge.default(_this.contexts.edges)
    }; // Initial resize

    _this.resize(); // Initializing the camera


    _this.camera = new _camera.default({
      width: _this.width,
      height: _this.height
    }); // Binding camera events

    _this.bindCameraHandlers(); // Initializing captors


    _this.captors = {
      mouse: new _mouse.default(_this.elements.mouse, _this.camera)
    }; // Binding event handlers

    _this.bindEventHandlers(); // Binding graph handlers


    _this.bindGraphHandlers(); // Processing data for the first time & render


    _this.process();

    _this.render();

    return _this;
  }
  /**---------------------------------------------------------------------------
   * Internal methods.
   **---------------------------------------------------------------------------
   */

  /**
   * Internal function used to create a canvas context and add the relevant
   * DOM elements.
   *
   * @param  {string}  id    - Context's id.
   * @param  {boolean} webgl - Whether the context is a webgl or canvas one.
   * @return {WebGLRenderer}
   */


  _createClass(WebGLRenderer, [{
    key: "createContext",
    value: function createContext(id) {
      var webgl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var element = (0, _utils2.createElement)('canvas', {
        class: "sigma-".concat(id),
        style: {
          position: 'absolute'
        }
      });
      this.elements[id] = element;
      this.container.appendChild(element);
      var contextOptions = {
        preserveDrawingBuffer: false,
        antialias: false
      };
      var context;

      if (webgl) {
        // First we try webgl2 for an easy performance boost
        context = element.getContext('webgl2', contextOptions); // Else we fall back to webgl

        if (!context) context = element.getContext('webgl', contextOptions); // Edge, I am looking right at you...

        if (!context) context = element.getContext('experimental-webgl', contextOptions);
      } else {
        context = element.getContext('2d', contextOptions);
      }

      this.contexts[id] = context;
      return this;
    }
    /**
     * Method used to initialize display data cache.
     *
     * @return {WebGLRenderer}
     */

  }, {
    key: "initializeCache",
    value: function initializeCache() {
      var graph = this.graph;
      var nodes = graph.nodes();

      for (var i = 0, l = nodes.length; i < l; i++) {
        this.nodeDataCache[nodes[i]] = new _displayData2.NodeDisplayData(i, this.settings);
      }

      var edges = graph.edges();

      for (var _i = 0, _l = edges.length; _i < _l; _i++) {
        this.edgeDataCache[edges[_i]] = new _displayData2.EdgeDisplayData(_i, this.settings);
      }
    }
    /**
     * Method binding camera handlers.
     *
     * @return {WebGLRenderer}
     */

  }, {
    key: "bindCameraHandlers",
    value: function bindCameraHandlers() {
      var _this2 = this;

      this.listeners.camera = function () {
        _this2.scheduleRender();
      };

      this.camera.on('updated', this.listeners.camera);
      return this;
    }
    /**
     * Method binding event handlers.
     *
     * @return {WebGLRenderer}
     */

  }, {
    key: "bindEventHandlers",
    value: function bindEventHandlers() {
      var _this3 = this;

      // Handling window resize
      this.listeners.handleResize = function () {
        _this3.needToSoftProcess = true;

        _this3.scheduleRender();
      };

      window.addEventListener('resize', this.listeners.handleResize); // Function checking if the mouse is on the given node

      var mouseIsOnNode = function mouseIsOnNode(mouseX, mouseY, nodeX, nodeY, size) {
        return mouseX > nodeX - size && mouseX < nodeX + size && mouseY > nodeY - size && mouseY < nodeY + size && Math.sqrt(Math.pow(mouseX - nodeX, 2) + Math.pow(mouseY - nodeY, 2)) < size;
      }; // Function returning the nodes in the mouse's quad


      var getQuadNodes = function getQuadNodes(mouseX, mouseY) {
        var mouseGraphPosition = _this3.camera.viewportToGraph(_this3, mouseX, mouseY); // TODO: minus 1? lol


        return _this3.quadtree.point(mouseGraphPosition.x, 1 - mouseGraphPosition.y);
      }; // Handling mouse move


      this.listeners.handleMove = function (e) {
        // NOTE: for the canvas renderer, testing the pixel's alpha should
        // give some boost but this slows things down for WebGL empirically.
        // TODO: this should be a method from the camera (or can be passed to graph to display somehow)
        var sizeRatio = Math.pow(_this3.camera.getState().ratio, 0.5);
        var quadNodes = getQuadNodes(e.x, e.y); // We will hover the node whose center is closest to mouse

        var minDistance = Infinity,
            nodeToHover = null;

        for (var i = 0, l = quadNodes.length; i < l; i++) {
          var node = quadNodes[i];
          var data = _this3.nodeDataCache[node];

          var pos = _this3.camera.graphToViewport(_this3, data.x, data.y);

          var size = data.size / sizeRatio;

          if (mouseIsOnNode(e.x, e.y, pos.x, pos.y, size)) {
            var distance = Math.sqrt(Math.pow(e.x - pos.x, 2) + Math.pow(e.y - pos.y, 2)); // TODO: sort by min size also for cases where center is the same

            if (distance < minDistance) {
              minDistance = distance;
              nodeToHover = node;
            }
          }
        }

        if (nodeToHover && _this3.hoveredNode !== nodeToHover) {
          _this3.hoveredNode = nodeToHover;

          _this3.emit('enterNode', {
            node: nodeToHover
          });

          return _this3.scheduleHighlightedNodesRender();
        } // Checking if the hovered node is still hovered


        if (_this3.hoveredNode) {
          var _data = _this3.nodeDataCache[_this3.hoveredNode];

          var _pos = _this3.camera.graphToViewport(_this3, _data.x, _data.y);

          var _size = _data.size / sizeRatio;

          if (!mouseIsOnNode(e.x, e.y, _pos.x, _pos.y, _size)) {
            var _node = _this3.hoveredNode;
            _this3.hoveredNode = null;

            _this3.emit('leaveNode', {
              node: _node
            });

            return _this3.scheduleHighlightedNodesRender();
          }
        }
      }; // Handling click


      this.listeners.handleClick = function (e) {
        var sizeRatio = Math.pow(_this3.camera.getState().ratio, 0.5);
        var quadNodes = getQuadNodes(e.x, e.y);

        for (var i = 0, l = quadNodes.length; i < l; i++) {
          var node = quadNodes[i];
          var data = _this3.nodeDataCache[node];

          var pos = _this3.camera.graphToViewport(_this3, data.x, data.y);

          var size = data.size / sizeRatio;
          if (mouseIsOnNode(e.x, e.y, pos.x, pos.y, size)) return _this3.emit('clickNode', {
            node: node
          });
        }

        return _this3.emit('clickStage');
      };

      this.captors.mouse.on('mousemove', this.listeners.handleMove);
      this.captors.mouse.on('click', this.listeners.handleClick);
      return this;
    }
    /**
     * Method binding graph handlers
     *
     * @return {WebGLRenderer}
     */

  }, {
    key: "bindGraphHandlers",
    value: function bindGraphHandlers() {
      var _this4 = this;

      var graph = this.graph;

      this.listeners.graphUpdate = function () {
        _this4.needToProcess = true;

        _this4.scheduleRender();
      };

      this.listeners.softGraphUpdate = function () {
        _this4.needToSoftProcess = true;

        _this4.scheduleRender();
      }; // TODO: bind this on composed state events
      // TODO: it could be possible to update only specific node etc. by holding
      // a fixed-size pool of updated items


      graph.on('nodeAdded', this.listeners.graphUpdate);
      graph.on('nodeDropped', this.listeners.graphUpdate);
      graph.on('nodeAttributesUpdated', this.listeners.softGraphUpdate);
      graph.on('edgeAdded', this.listeners.graphUpdate);
      graph.on('nodeDropped', this.listeners.graphUpdate);
      graph.on('edgeAttributesUpdated', this.listeners.softGraphUpdate);
      graph.on('cleared', this.listeners.graphUpdate);
      return this;
    }
    /**
     * Method used to process the whole graph's data.
     *
     * @return {WebGLRenderer}
     */

  }, {
    key: "process",
    value: function process() {
      var keepArrays = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var graph = this.graph,
          settings = this.settings; // Clearing the quad

      this.quadtree.clear(); // Computing extents

      var nodeExtentProperties = ['x', 'y'];

      if (this.settings.zIndex) {
        nodeExtentProperties.push('z');
        this.edgeExtent = (0, _extent.edgeExtent)(graph, ['z']);
      }

      this.nodeExtent = (0, _extent.nodeExtent)(graph, nodeExtentProperties); // Rescaling function

      this.normalizationFunction = (0, _utils2.createNormalizationFunction)(this.nodeExtent);
      var nodeProgram = this.nodePrograms.def;
      if (!keepArrays) nodeProgram.allocate(graph.order);
      var nodes = graph.nodes(); // Handling node z-index
      // TODO: z-index needs us to compute display data before hand
      // TODO: remains to be seen if reducers are a good or bad thing and if we
      // should store display data in flat byte arrays indices

      if (this.settings.zIndex) nodes = (0, _zIndex.zIndexOrdering)(this.edgeExtent.z, function (node) {
        return graph.getNodeAttribute(node, 'z');
      }, nodes);

      for (var i = 0, l = nodes.length; i < l; i++) {
        var node = nodes[i];
        var data = graph.getNodeAttributes(node);
        var displayData = this.nodeDataCache[node];
        if (settings.nodeReducer) data = settings.nodeReducer(node, data); // TODO: should assign default also somewhere here if there is a reducer

        displayData.assign(data);
        this.normalizationFunction.applyTo(displayData);
        this.quadtree.add(node, displayData.x, 1 - displayData.y, displayData.size / this.width);
        nodeProgram.process(displayData, i);
        displayData.index = i;
      }

      nodeProgram.bufferData();
      var edgeProgram = this.edgePrograms.def;
      if (!keepArrays) edgeProgram.allocate(graph.size);
      var edges = graph.edges(); // Handling edge z-index

      if (this.settings.zIndex) edges = (0, _zIndex.zIndexOrdering)(this.edgeExtent.z, function (edge) {
        return graph.getEdgeAttribute(edge, 'z');
      }, edges);

      for (var _i2 = 0, _l2 = edges.length; _i2 < _l2; _i2++) {
        var edge = edges[_i2];

        var _data2 = graph.getEdgeAttributes(edge);

        var _displayData = this.edgeDataCache[edge];
        if (settings.edgeReducer) _data2 = settings.edgeReducer(edge, _data2);

        _displayData.assign(_data2);

        var extremities = graph.extremities(edge),
            sourceData = this.nodeDataCache[extremities[0]],
            targetData = this.nodeDataCache[extremities[1]];
        edgeProgram.process(sourceData, targetData, _displayData, _i2);
        _displayData.index = _i2;
      } // Computing edge indices if necessary


      if (!keepArrays && typeof edgeProgram.computeIndices === 'function') edgeProgram.computeIndices();
      edgeProgram.bufferData();
      return this;
    }
    /**
     * Method used to process a single node.
     *
     * @return {WebGLRenderer}
     */

  }, {
    key: "processNode",
    value: function processNode(key) {
      var nodeProgram = this.nodePrograms.def;
      var data = this.graph.getNodeAttributes(key);
      nodeProgram.process(data, this.nodeDataCache[key].index);
      return this;
    }
    /**
     * Method used to process a single edge.
     *
     * @return {WebGLRenderer}
     */

  }, {
    key: "processEdge",
    value: function processEdge(key) {
      var graph = this.graph;
      var edgeProgram = this.edgePrograms.def;
      var data = graph.getEdgeAttributes(key),
          extremities = graph.extremities(key),
          sourceData = graph.getNodeAttributes(extremities[0]),
          targetData = graph.getNodeAttributes(extremities[1]);
      edgeProgram.process(sourceData, targetData, data, this.edgeDataCache[key].index);
      return this;
    }
    /**---------------------------------------------------------------------------
     * Public API.
     **---------------------------------------------------------------------------
     */

    /**
     * Method returning the renderer's camera.
     *
     * @return {Camera}
     */

  }, {
    key: "getCamera",
    value: function getCamera() {
      return this.camera;
    }
    /**
     * Method returning the mouse captor.
     *
     * @return {Camera}
     */

  }, {
    key: "getMouseCaptor",
    value: function getMouseCaptor() {
      return this.captors.mouse;
    }
    /**
     * Method used to resize the renderer.
     *
     * @param  {number} width  - Target width.
     * @param  {number} height - Target height.
     * @return {WebGLRenderer}
     */

  }, {
    key: "resize",
    value: function resize(width, height) {
      var previousWidth = this.width,
          previousHeight = this.height;

      if (arguments.length > 1) {
        this.width = width;
        this.height = height;
      } else {
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;
      }

      if (this.width === 0) throw new Error('sigma/renderers/webgl: container has no width.');
      if (this.height === 0) throw new Error('sigma/renderers/webgl: container has no height.'); // If nothing has changed, we can stop right here

      if (previousWidth === this.width && previousHeight === this.height) return this; // Sizing dom elements

      for (var id in this.elements) {
        var element = this.elements[id];
        element.style.width = this.width + 'px';
        element.style.height = this.height + 'px';
      } // Sizing contexts


      for (var _id in this.contexts) {
        var context = this.contexts[_id]; // Canvas contexts

        if (context.scale) {
          this.elements[_id].setAttribute('width', this.width * PIXEL_RATIO + 'px');

          this.elements[_id].setAttribute('height', this.height * PIXEL_RATIO + 'px');

          if (PIXEL_RATIO !== 1) context.scale(PIXEL_RATIO, PIXEL_RATIO);
        } // WebGL contexts
        else {
            this.elements[_id].setAttribute('width', this.width * WEBGL_OVERSAMPLING_RATIO + 'px');

            this.elements[_id].setAttribute('height', this.height * WEBGL_OVERSAMPLING_RATIO + 'px');
          }

        if (context.viewport) {
          context.viewport(0, 0, this.width * WEBGL_OVERSAMPLING_RATIO, this.height * WEBGL_OVERSAMPLING_RATIO);
        }
      }

      return this;
    }
    /**
     * Method used to clear the canvases.
     *
     * @return {WebGLRenderer}
     */

  }, {
    key: "clear",
    value: function clear() {
      // NOTE: don't need to clear with preserveDrawingBuffer to false
      // let context = this.contexts.nodes;
      // context.clear(context.COLOR_BUFFER_BIT);
      // context = this.contexts.edges;
      // context.clear(context.COLOR_BUFFER_BIT);
      var context = this.contexts.labels;
      context.clearRect(0, 0, this.width, this.height); // context = this.contexts.hovers;
      // context.clearRect(0, 0, this.width, this.height);

      return this;
    }
    /**
     * Method used to render.
     *
     * @return {WebGLRenderer}
     */

  }, {
    key: "render",
    value: function render() {
      // If a render was scheduled, we cancel it
      if (this.renderFrame) {
        cancelAnimationFrame(this.renderFrame);
        this.renderFrame = null;
        this.needToProcess = false;
        this.needToSoftProcess = false;
      } // If we have no nodes we can stop right there


      if (!this.graph.order) return this; // TODO: improve this heuristic or move to the captor itself?

      var moving = this.camera.isAnimated() || this.captors.mouse.isMoving || this.captors.mouse.hasDragged || this.captors.mouse.wheelLock; // First we need to resize

      this.resize(); // Clearing the canvases

      this.clear(); // Then we need to extract a matrix from the camera

      var cameraState = this.camera.getState(),
          cameraMatrix = (0, _utils3.matrixFromCamera)(cameraState, {
        width: this.width,
        height: this.height
      });
      var program; // Drawing nodes

      program = this.nodePrograms.def;
      program.render({
        matrix: cameraMatrix,
        width: this.width,
        height: this.height,
        ratio: cameraState.ratio,
        nodesPowRatio: 0.5,
        scalingRatio: WEBGL_OVERSAMPLING_RATIO
      }); // Drawing edges

      if (!this.settings.hideEdgesOnMove || !moving) {
        program = this.edgePrograms.def;
        program.render({
          matrix: cameraMatrix,
          width: this.width,
          height: this.height,
          ratio: cameraState.ratio,
          nodesPowRatio: 0.5,
          edgesPowRatio: 0.5,
          scalingRatio: WEBGL_OVERSAMPLING_RATIO
        });
      } // Do not display labels on move per setting


      if (this.settings.hideLabelsOnMove && moving) return this; // Finding visible nodes to display their labels

      var visibleNodes;

      if (cameraState.ratio >= 1) {
        // Camera is unzoomed so no need to ask the quadtree for visible nodes
        visibleNodes = this.graph.nodes();
      } else {
        // Let's ask the quadtree
        var viewRectangle = this.camera.viewRectangle(this);
        visibleNodes = this.quadtree.rectangle(viewRectangle.x1, 1 - viewRectangle.y1, viewRectangle.x2, 1 - viewRectangle.y2, viewRectangle.height);
      }

      if (!this.settings.renderLabels) return this; // Selecting labels to draw

      var labelsToDisplay = (0, _labels.labelsToDisplayFromGrid)({
        cache: this.nodeDataCache,
        camera: this.camera,
        displayedLabels: this.displayedLabels,
        visibleNodes: visibleNodes,
        dimensions: this,
        graph: this.graph
      }); // Drawing labels
      // TODO: POW RATIO is currently default 0.5 and harcoded

      var context = this.contexts.labels;
      var sizeRatio = Math.pow(cameraState.ratio, 0.5);

      for (var i = 0, l = labelsToDisplay.length; i < l; i++) {
        var data = this.nodeDataCache[labelsToDisplay[i]];

        var _this$camera$graphToV = this.camera.graphToViewport(this, data.x, data.y),
            x = _this$camera$graphToV.x,
            y = _this$camera$graphToV.y; // TODO: we can cache the labels we need to render until the camera's ratio changes


        var size = data.size / sizeRatio; // TODO: this is the label threshold hardcoded
        // if (size < 8)
        //   continue;

        (0, _label.default)(context, {
          label: data.label,
          size: size,
          x: x,
          y: y
        }, this.settings);
      } // Caching visible nodes and displayed labels


      this.displayedLabels = new Set(labelsToDisplay); // Rendering highlighted nodes

      this.renderHighlightedNodes();
      return this;
    }
    /**
     * Method used to render the highlighted nodes.
     *
     * @return {WebGLRenderer}
     */

  }, {
    key: "renderHighlightedNodes",
    value: function renderHighlightedNodes() {
      var _this5 = this;

      var camera = this.camera;
      var sizeRatio = Math.pow(camera.getState().ratio, 0.5);
      var context = this.contexts.hovers; // Clearing

      context.clearRect(0, 0, this.width, this.height); // Rendering

      var render = function render(node) {
        var data = _this5.nodeDataCache[node];

        var _camera$graphToViewpo = camera.graphToViewport(_this5, data.x, data.y),
            x = _camera$graphToViewpo.x,
            y = _camera$graphToViewpo.y;

        var size = data.size / sizeRatio;
        (0, _hover.default)(context, {
          label: data.label,
          color: data.color,
          size: size,
          x: x,
          y: y
        }, _this5.settings);
      };

      if (this.hoveredNode) render(this.hoveredNode);
      this.highlightedNodes.forEach(render);
    }
    /**
     * Method used to schedule a render.
     *
     * @return {WebGLRenderer}
     */

  }, {
    key: "scheduleRender",
    value: function scheduleRender() {
      var _this6 = this;

      // A frame is already scheduled
      if (this.renderFrame) return this; // Let's schedule a frame

      this.renderFrame = requestAnimationFrame(function () {
        // Do we need to process data?
        if (_this6.needToProcess || _this6.needToSoftProcess) _this6.process(_this6.needToSoftProcess); // Resetting state

        _this6.renderFrame = null;
        _this6.needToProcess = false;
        _this6.needToSoftProcess = false; // Rendering

        _this6.render();
      });
    }
    /**
     * Method used to schedule a hover render.
     *
     * @return {WebGLRenderer}
     */

  }, {
    key: "scheduleHighlightedNodesRender",
    value: function scheduleHighlightedNodesRender() {
      var _this7 = this;

      if (this.renderHighlightedNodesFrame || this.renderFrame) return this;
      this.renderHighlightedNodesFrame = requestAnimationFrame(function () {
        // Resetting state
        _this7.renderHighlightedNodesFrame = null; // Rendering

        _this7.renderHighlightedNodes();
      });
    }
    /**
     * Method used to manually refresh.
     *
     * @return {WebGLRenderer}
     */

  }, {
    key: "refresh",
    value: function refresh() {
      this.needToSoftProcess = true;
      this.scheduleRender();
      return this;
    }
    /**
     * Method used to highlight a node.
     *
     * @param  {string} key - The node's key.
     * @return {WebGLRenderer}
     */

  }, {
    key: "highlightNode",
    value: function highlightNode(key) {
      // TODO: check the existence of the node
      // TODO: coerce?
      this.highlightedNodes.add(key); // Rendering

      this.scheduleHighlightedNodesRender();
      return this;
    }
    /**
     * Method used to unhighlight a node.
     *
     * @param  {string} key - The node's key.
     * @return {WebGLRenderer}
     */

  }, {
    key: "unhighlightNode",
    value: function unhighlightNode(key) {
      // TODO: check the existence of the node
      // TODO: coerce?
      this.highlightedNodes.delete(key); // Rendering

      this.scheduleHighlightedNodesRender();
      return this;
    }
    /**
     * Method used to shut the container & release event listeners.
     *
     * @return {undefined}
     */

  }, {
    key: "kill",
    value: function kill() {
      var graph = this.graph; // Releasing camera handlers

      this.camera.removeListener('updated', this.listeners.camera); // Releasing DOM events & captors

      window.removeEventListener('resize', this.listeners.handleResize);
      this.captors.mouse.kill(); // Releasing graph handlers

      graph.removeListener('nodeAdded', this.listeners.graphUpdate);
      graph.removeListener('nodeDropped', this.listeners.graphUpdate);
      graph.removeListener('nodeAttributesUpdated', this.listeners.softGraphUpdate);
      graph.removeListener('edgeAdded', this.listeners.graphUpdate);
      graph.removeListener('nodeDropped', this.listeners.graphUpdate);
      graph.removeListener('edgeAttributesUpdated', this.listeners.softGraphUpdate);
      graph.removeListener('cleared', this.listeners.graphUpdate); // Releasing cache & state

      this.quadtree = null;
      this.nodeDataCache = null;
      this.edgeDataCache = null;
      this.highlightedNodes = null;
      this.previousVisibleNodes = null;
      this.displayedLabels = null; // Clearing frames

      if (this.renderFrame) {
        cancelAnimationFrame(this.renderFrame);
        this.renderFrame = null;
      }

      if (this.renderHighlightedNodesFrame) {
        cancelAnimationFrame(this.renderHighlightedNodesFrame);
        this.renderHighlightedNodesFrame = null;
      } // Destroying canvases


      var container = this.container;

      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    }
  }]);

  return WebGLRenderer;
}(_renderer.default);

exports.default = WebGLRenderer;

/***/ }),

/***/ "./node_modules/sigma/renderers/webgl/matrices.js":
/*!********************************************************!*\
  !*** ./node_modules/sigma/renderers/webgl/matrices.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.identity = identity;
exports.scale = scale;
exports.rotate = rotate;
exports.translate = translate;
exports.multiply = multiply;

/**
 * Sigma.js WebGL Matrices Helpers
 * ================================
 *
 * Matrices-related helper functions used by sigma's WebGL renderer.
 */
function identity() {
  return Float32Array.of(1, 0, 0, 0, 1, 0, 0, 0, 1);
} // TODO: optimize


function scale(m, x, y) {
  m[0] = x;
  m[4] = arguments.length > 2 ? y : x;
  return m;
}

function rotate(m, r) {
  var s = Math.sin(r),
      c = Math.cos(r);
  m[0] = c;
  m[1] = s;
  m[3] = -s;
  m[4] = c;
  return m;
}

function translate(m, x, y) {
  m[6] = x;
  m[7] = y;
  return m;
}

function multiply(a, b) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  var b00 = b[0],
      b01 = b[1],
      b02 = b[2];
  var b10 = b[3],
      b11 = b[4],
      b12 = b[5];
  var b20 = b[6],
      b21 = b[7],
      b22 = b[8];
  a[0] = b00 * a00 + b01 * a10 + b02 * a20;
  a[1] = b00 * a01 + b01 * a11 + b02 * a21;
  a[2] = b00 * a02 + b01 * a12 + b02 * a22;
  a[3] = b10 * a00 + b11 * a10 + b12 * a20;
  a[4] = b10 * a01 + b11 * a11 + b12 * a21;
  a[5] = b10 * a02 + b11 * a12 + b12 * a22;
  a[6] = b20 * a00 + b21 * a10 + b22 * a20;
  a[7] = b20 * a01 + b21 * a11 + b22 * a21;
  a[8] = b20 * a02 + b21 * a12 + b22 * a22;
  return a;
}

/***/ }),

/***/ "./node_modules/sigma/renderers/webgl/programs/edge.js":
/*!*************************************************************!*\
  !*** ./node_modules/sigma/renderers/webgl/programs/edge.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _program = _interopRequireDefault(__webpack_require__(/*! ./program */ "./node_modules/sigma/renderers/webgl/programs/program.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/sigma/renderers/webgl/utils.js");

var _edgeVert = _interopRequireDefault(__webpack_require__(/*! ../shaders/edge.vert.glsl */ "./node_modules/sigma/renderers/webgl/shaders/edge.vert.glsl"));

var _edgeFrag = _interopRequireDefault(__webpack_require__(/*! ../shaders/edge.frag.glsl */ "./node_modules/sigma/renderers/webgl/shaders/edge.frag.glsl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var POINTS = 4,
    ATTRIBUTES = 6,
    STRIDE = POINTS * ATTRIBUTES;

var EdgeProgram =
/*#__PURE__*/
function (_Program) {
  _inherits(EdgeProgram, _Program);

  function EdgeProgram(gl) {
    var _this;

    _classCallCheck(this, EdgeProgram);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EdgeProgram).call(this, gl, _edgeVert.default, _edgeFrag.default)); // Binding context

    _this.gl = gl; // Array data

    _this.array = null;
    _this.indicesArray = null; // Initializing buffers

    _this.buffer = gl.createBuffer();
    _this.indicesBuffer = gl.createBuffer(); // Locations

    _this.positionLocation = gl.getAttribLocation(_this.program, 'a_position');
    _this.normalLocation = gl.getAttribLocation(_this.program, 'a_normal');
    _this.thicknessLocation = gl.getAttribLocation(_this.program, 'a_thickness');
    _this.colorLocation = gl.getAttribLocation(_this.program, 'a_color');
    _this.resolutionLocation = gl.getUniformLocation(_this.program, 'u_resolution');
    _this.ratioLocation = gl.getUniformLocation(_this.program, 'u_ratio');
    _this.matrixLocation = gl.getUniformLocation(_this.program, 'u_matrix');
    _this.scaleLocation = gl.getUniformLocation(_this.program, 'u_scale');

    _this.bind(); // Enabling the OES_element_index_uint extension
    // NOTE: on older GPUs, this means that really large graphs won't
    // have all their edges rendered. But it seems that the
    // `OES_element_index_uint` is quite everywhere so we'll handle
    // the potential issue if it really arises.
    // NOTE: when using webgl2, the extension is enabled by default


    _this.canUse32BitsIndices = (0, _utils.canUse32BitsIndices)(gl);
    _this.IndicesArray = _this.canUse32BitsIndices ? Uint32Array : Uint16Array;
    _this.indicesType = _this.canUse32BitsIndices ? gl.UNSIGNED_INT : gl.UNSIGNED_SHORT;
    return _this;
  }

  _createClass(EdgeProgram, [{
    key: "bind",
    value: function bind() {
      var gl = this.gl;
      gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indicesBuffer); // Bindings

      gl.enableVertexAttribArray(this.positionLocation);
      gl.enableVertexAttribArray(this.normalLocation);
      gl.enableVertexAttribArray(this.thicknessLocation);
      gl.enableVertexAttribArray(this.colorLocation);
      gl.vertexAttribPointer(this.positionLocation, 2, gl.FLOAT, false, ATTRIBUTES * Float32Array.BYTES_PER_ELEMENT, 0);
      gl.vertexAttribPointer(this.normalLocation, 2, gl.FLOAT, false, ATTRIBUTES * Float32Array.BYTES_PER_ELEMENT, 8);
      gl.vertexAttribPointer(this.thicknessLocation, 1, gl.FLOAT, false, ATTRIBUTES * Float32Array.BYTES_PER_ELEMENT, 16);
      gl.vertexAttribPointer(this.colorLocation, 4, gl.UNSIGNED_BYTE, true, ATTRIBUTES * Float32Array.BYTES_PER_ELEMENT, 20);
    }
  }, {
    key: "allocate",
    value: function allocate(capacity) {
      this.array = new Float32Array(POINTS * ATTRIBUTES * capacity);
    }
  }, {
    key: "process",
    value: function process(sourceData, targetData, data, offset) {
      if (sourceData.hidden || targetData.hidden || data.hidden) {
        for (var _i = offset * STRIDE, l = _i + STRIDE; _i < l; _i++) {
          this.array[_i] = 0;
        }

        return;
      }

      var thickness = data.size || 1,
          x1 = sourceData.x,
          y1 = sourceData.y,
          x2 = targetData.x,
          y2 = targetData.y,
          color = (0, _utils.floatColor)(data.color); // Computing normals

      var dx = x2 - x1,
          dy = y2 - y1;
      var len = dx * dx + dy * dy,
          n1 = 0,
          n2 = 0;

      if (len) {
        len = 1 / Math.sqrt(len);
        n1 = -dy * len;
        n2 = dx * len;
      }

      var i = POINTS * ATTRIBUTES * offset;
      var array = this.array; // First point

      array[i++] = x1;
      array[i++] = y1;
      array[i++] = n1;
      array[i++] = n2;
      array[i++] = thickness;
      array[i++] = color; // First point flipped

      array[i++] = x1;
      array[i++] = y1;
      array[i++] = -n1;
      array[i++] = -n2;
      array[i++] = thickness;
      array[i++] = color; // Second point

      array[i++] = x2;
      array[i++] = y2;
      array[i++] = n1;
      array[i++] = n2;
      array[i++] = thickness;
      array[i++] = color; // Second point flipped

      array[i++] = x2;
      array[i++] = y2;
      array[i++] = -n1;
      array[i++] = -n2;
      array[i++] = thickness;
      array[i] = color;
    }
  }, {
    key: "computeIndices",
    value: function computeIndices() {
      var l = this.array.length / ATTRIBUTES;
      var size = l + l / 2;
      var indices = new this.IndicesArray(size);

      for (var i = 0, c = 0; i < l; i += 4) {
        indices[c++] = i;
        indices[c++] = i + 1;
        indices[c++] = i + 2;
        indices[c++] = i + 2;
        indices[c++] = i + 1;
        indices[c++] = i + 3;
      }

      this.indicesArray = indices;
    }
  }, {
    key: "bufferData",
    value: function bufferData() {
      var gl = this.gl; // Vertices data

      gl.bufferData(gl.ARRAY_BUFFER, this.array, gl.DYNAMIC_DRAW); // Indices data

      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indicesArray, gl.STATIC_DRAW);
    }
  }, {
    key: "render",
    value: function render(params) {
      var gl = this.gl;
      var program = this.program;
      gl.useProgram(program); // Binding uniforms
      // TODO: precise the uniform names

      gl.uniform2f(this.resolutionLocation, params.width, params.height);
      gl.uniform1f(this.ratioLocation, // 1 / Math.pow(params.ratio, params.edgesPowRatio)
      params.ratio);
      gl.uniformMatrix3fv(this.matrixLocation, false, params.matrix);
      gl.uniform1f(this.scaleLocation, params.scalingRatio); // Drawing:

      gl.drawElements(gl.TRIANGLES, this.indicesArray.length, this.indicesType, 0);
    }
  }]);

  return EdgeProgram;
}(_program.default);

exports.default = EdgeProgram;

/***/ }),

/***/ "./node_modules/sigma/renderers/webgl/programs/node.fast.js":
/*!******************************************************************!*\
  !*** ./node_modules/sigma/renderers/webgl/programs/node.fast.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _program = _interopRequireDefault(__webpack_require__(/*! ./program */ "./node_modules/sigma/renderers/webgl/programs/program.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/sigma/renderers/webgl/utils.js");

var _nodeFastVert = _interopRequireDefault(__webpack_require__(/*! ../shaders/node.fast.vert.glsl */ "./node_modules/sigma/renderers/webgl/shaders/node.fast.vert.glsl"));

var _nodeFastFrag = _interopRequireDefault(__webpack_require__(/*! ../shaders/node.fast.frag.glsl */ "./node_modules/sigma/renderers/webgl/shaders/node.fast.frag.glsl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var POINTS = 1,
    ATTRIBUTES = 4;

var NodeProgramFast =
/*#__PURE__*/
function (_Program) {
  _inherits(NodeProgramFast, _Program);

  function NodeProgramFast(gl) {
    var _this;

    _classCallCheck(this, NodeProgramFast);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NodeProgramFast).call(this, gl, _nodeFastVert.default, _nodeFastFrag.default)); // Binding context

    _this.gl = gl; // Array data

    _this.array = null; // Initializing buffers

    _this.buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, _this.buffer);
    var program = _this.program; // Locations

    _this.positionLocation = gl.getAttribLocation(program, 'a_position');
    _this.sizeLocation = gl.getAttribLocation(program, 'a_size');
    _this.colorLocation = gl.getAttribLocation(program, 'a_color');
    _this.matrixLocation = gl.getUniformLocation(program, 'u_matrix');
    _this.ratioLocation = gl.getUniformLocation(program, 'u_ratio');
    _this.scaleLocation = gl.getUniformLocation(program, 'u_scale'); // Bindings

    gl.enableVertexAttribArray(_this.positionLocation);
    gl.enableVertexAttribArray(_this.sizeLocation);
    gl.enableVertexAttribArray(_this.colorLocation);
    gl.vertexAttribPointer(_this.positionLocation, 2, gl.FLOAT, false, ATTRIBUTES * Float32Array.BYTES_PER_ELEMENT, 0);
    gl.vertexAttribPointer(_this.sizeLocation, 1, gl.FLOAT, false, ATTRIBUTES * Float32Array.BYTES_PER_ELEMENT, 8);
    gl.vertexAttribPointer(_this.colorLocation, 4, gl.UNSIGNED_BYTE, true, ATTRIBUTES * Float32Array.BYTES_PER_ELEMENT, 12);
    return _this;
  }

  _createClass(NodeProgramFast, [{
    key: "allocate",
    value: function allocate(capacity) {
      this.array = new Float32Array(POINTS * ATTRIBUTES * capacity);
    }
  }, {
    key: "process",
    value: function process(data, offset) {
      var color = (0, _utils.floatColor)(data.color);
      var i = offset * POINTS * ATTRIBUTES;
      var array = this.array;

      if (data.hidden) {
        array[i++] = 0;
        array[i++] = 0;
        array[i++] = 0;
        array[i++] = 0;
        return;
      }

      array[i++] = data.x;
      array[i++] = data.y;
      array[i++] = data.size;
      array[i] = color;
    }
  }, {
    key: "bufferData",
    value: function bufferData() {
      var gl = this.gl;
      gl.bufferData(gl.ARRAY_BUFFER, this.array, gl.DYNAMIC_DRAW);
    }
  }, {
    key: "render",
    value: function render(params) {
      var gl = this.gl;
      var program = this.program;
      gl.useProgram(program);
      gl.uniform1f(this.ratioLocation, 1 / Math.pow(params.ratio, params.nodesPowRatio));
      gl.uniform1f(this.scaleLocation, params.scalingRatio);
      gl.uniformMatrix3fv(this.matrixLocation, false, params.matrix);
      gl.drawArrays(gl.POINTS, 0, this.array.length / ATTRIBUTES);
    }
  }]);

  return NodeProgramFast;
}(_program.default);

exports.default = NodeProgramFast;

/***/ }),

/***/ "./node_modules/sigma/renderers/webgl/programs/program.js":
/*!****************************************************************!*\
  !*** ./node_modules/sigma/renderers/webgl/programs/program.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCompoundProgram = createCompoundProgram;
exports.default = void 0;

var _utils = __webpack_require__(/*! ../shaders/utils */ "./node_modules/sigma/renderers/webgl/shaders/utils.js");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Program class.
 *
 * @constructor
 */
var Program =
/*#__PURE__*/
function () {
  function Program(gl, vertexShaderSource, fragmentShaderSource) {
    _classCallCheck(this, Program);

    this.vertexShaderSource = vertexShaderSource;
    this.fragmentShaderSource = fragmentShaderSource;
    this.load(gl);
  }
  /**
   * Method used to load the program into a webgl context.
   *
   * @param  {WebGLContext} gl - The WebGL context.
   * @return {WebGLProgram}
   */


  _createClass(Program, [{
    key: "load",
    value: function load(gl) {
      this.vertexShader = (0, _utils.loadVertexShader)(gl, this.vertexShaderSource);
      this.fragmentShader = (0, _utils.loadFragmentShader)(gl, this.fragmentShaderSource);
      this.program = (0, _utils.loadProgram)(gl, [this.vertexShader, this.fragmentShader]);
      return this.program;
    }
  }]);

  return Program;
}();
/**
 * Helper function combining two or more programs into a single compound one.
 * Note that this is more a quick & easy way to combine program than a really
 * performant option. More performant programs can be written entirely.
 *
 * @param  {array}    programClasses - Program classes to combine.
 * @return {function}
 */
// TODO: maybe those should handle their own canvases


exports.default = Program;

function createCompoundProgram(programClasses) {
  return (
    /*#__PURE__*/
    function () {
      function CompoundProgram(gl) {
        _classCallCheck(this, CompoundProgram);

        this.programs = programClasses.map(function (ProgramClass) {
          return new ProgramClass(gl);
        });
      }

      _createClass(CompoundProgram, [{
        key: "allocate",
        value: function allocate(capacity) {
          this.programs.forEach(function (program) {
            return program.allocate(capacity);
          });
        }
      }, {
        key: "process",
        value: function process() {
          var args = arguments;
          this.programs.forEach(function (program) {
            return program.process.apply(program, _toConsumableArray(args));
          });
        }
      }, {
        key: "computeIndices",
        value: function computeIndices() {
          this.programs.forEach(function (program) {
            if (typeof program.computeIndices === 'function') program.computeIndices();
          });
        }
      }, {
        key: "bufferData",
        value: function bufferData() {
          this.programs.forEach(function (program) {
            return program.bufferData();
          });
        }
      }, {
        key: "render",
        value: function render() {
          var args = arguments;
          this.programs.forEach(function (program) {
            program.bind();
            program.bufferData();
            program.render.apply(program, _toConsumableArray(args));
          });
        }
      }]);

      return CompoundProgram;
    }()
  );
}

/***/ }),

/***/ "./node_modules/sigma/renderers/webgl/shaders/edge.frag.glsl":
/*!*******************************************************************!*\
  !*** ./node_modules/sigma/renderers/webgl/shaders/edge.frag.glsl ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ 5:
/***/ (function(module, exports) {

module.exports = "precision mediump float;\n\nvarying vec4 v_color;\nvarying vec2 v_normal;\nvarying float v_thickness;\n\nconst float feather = 2.6;\nconst vec4 color0 = vec4(0.0, 0.0, 0.0, 0.0);\n\nvoid main(void) {\n  float dist = length(v_normal) * v_thickness;\n\n  float t = smoothstep(\n    v_thickness - feather,\n    v_thickness,\n    dist\n  );\n\n  gl_FragColor = mix(v_color, color0, t);\n}\n"

/***/ })

/******/ });

/***/ }),

/***/ "./node_modules/sigma/renderers/webgl/shaders/edge.vert.glsl":
/*!*******************************************************************!*\
  !*** ./node_modules/sigma/renderers/webgl/shaders/edge.vert.glsl ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports) {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_normal;\nattribute float a_thickness;\nattribute vec4 a_color;\n\nuniform vec2 u_resolution;\nuniform float u_ratio;\nuniform mat3 u_matrix;\nuniform float u_scale;\n\nvarying vec4 v_color;\nvarying vec2 v_normal;\nvarying float v_thickness;\n\nconst float min_thickness = 1.8;\nconst float bias = 255.0 / 254.0;\n\nvoid main() {\n\n  // Computing thickness in pixels\n  float pow_ratio = 1.0 / pow(u_ratio, 0.5);\n  float thickness = a_thickness * pow_ratio / u_scale;\n\n  // Min thickness for AA\n  thickness = max(min_thickness, thickness);\n\n  // Computing delta relative to viewport\n  vec2 delta = (a_normal * thickness) / u_resolution;\n\n  vec2 position = (u_matrix * vec3(a_position, 1)).xy;\n  position += delta;\n\n  // Applying\n  gl_Position = vec4(position, 0, 1);\n\n  v_normal = a_normal;\n  v_thickness = thickness;\n\n  // Extract the color:\n  v_color = a_color;\n  v_color.a *= bias;\n}\n"

/***/ })

/******/ });

/***/ }),

/***/ "./node_modules/sigma/renderers/webgl/shaders/node.fast.frag.glsl":
/*!************************************************************************!*\
  !*** ./node_modules/sigma/renderers/webgl/shaders/node.fast.frag.glsl ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

/***/ 11:
/***/ (function(module, exports) {

module.exports = "precision mediump float;\n\nvarying vec4 v_color;\nvarying float v_border;\n\nconst float radius = 0.5;\n\nvoid main(void) {\n  vec4 color0 = vec4(0.0, 0.0, 0.0, 0.0);\n  vec2 m = gl_PointCoord - vec2(0.5, 0.5);\n  float dist = radius - length(m);\n\n  float t = 0.0;\n  if (dist > v_border)\n    t = 1.0;\n  else if (dist > 0.0)\n    t = dist / v_border;\n\n  // gl_FragColor = mix(color0, v_color, t);\n  gl_FragColor = mix(color0, v_color, t);\n}\n"

/***/ })

/******/ });

/***/ }),

/***/ "./node_modules/sigma/renderers/webgl/shaders/node.fast.vert.glsl":
/*!************************************************************************!*\
  !*** ./node_modules/sigma/renderers/webgl/shaders/node.fast.vert.glsl ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ 12:
/***/ (function(module, exports) {

module.exports = "attribute vec2 a_position;\nattribute float a_size;\nattribute vec4 a_color;\n\nuniform float u_ratio;\nuniform float u_scale;\nuniform mat3 u_matrix;\n\nvarying vec4 v_color;\nvarying float v_border;\n\nconst float bias = 255.0 / 254.0;\n\nvoid main() {\n\n  gl_Position = vec4(\n    (u_matrix * vec3(a_position, 1)).xy,\n    0,\n    1\n  );\n\n  // Multiply the point size twice:\n  //  - x SCALING_RATIO to correct the canvas scaling\n  //  - x 2 to correct the formulae\n  gl_PointSize = a_size * u_ratio * u_scale * 2.0;\n\n  v_border = (1.0 / u_ratio) * (0.5 / a_size);\n\n  // Extract the color:\n  v_color = a_color;\n  v_color.a *= bias;\n}\n"

/***/ })

/******/ });

/***/ }),

/***/ "./node_modules/sigma/renderers/webgl/shaders/utils.js":
/*!*************************************************************!*\
  !*** ./node_modules/sigma/renderers/webgl/shaders/utils.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadProgram = loadProgram;
exports.loadFragmentShader = exports.loadVertexShader = void 0;

/**
 * Sigma.js Shader Utils
 * ======================
 *
 * Code used to load sigma's shaders.
 */

/**
 * Function used to load a shader.
 */
function loadShader(type, gl, source) {
  var glType = type === 'VERTEX' ? gl.VERTEX_SHADER : gl.FRAGMENT_SHADER; // Creating the shader

  var shader = gl.createShader(glType); // Loading source

  gl.shaderSource(shader, source); // Compiling the shader

  gl.compileShader(shader); // Retrieving compilation status

  var successfullyCompiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS); // Throwing if something went awry

  if (!successfullyCompiled) {
    var infoLog = gl.getShaderInfoLog(shader);
    gl.deleteShader(shader);
    throw new Error("sigma/renderers/weblg/shaders/utils.loadShader: error while compiling the shader:\n".concat(infoLog, "\n").concat(source));
  }

  return shader;
}

var loadVertexShader = loadShader.bind(null, 'VERTEX'),
    loadFragmentShader = loadShader.bind(null, 'FRAGMENT');
exports.loadFragmentShader = loadFragmentShader;
exports.loadVertexShader = loadVertexShader;

/**
 * Function used to load a program.
 */
function loadProgram(gl, shaders) {
  var program = gl.createProgram();
  var i, l; // Attaching the shaders

  for (i = 0, l = shaders.length; i < l; i++) {
    gl.attachShader(program, shaders[i]);
  }

  gl.linkProgram(program); // Checking status

  var successfullyLinked = gl.getProgramParameter(program, gl.LINK_STATUS);

  if (!successfullyLinked) {
    gl.deleteProgram(program);
    throw new Error('sigma/renderers/weblg/shaders/utils.loadProgram: error while linking the program.');
  }

  return program;
}

/***/ }),

/***/ "./node_modules/sigma/renderers/webgl/utils.js":
/*!*****************************************************!*\
  !*** ./node_modules/sigma/renderers/webgl/utils.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.floatColor = floatColor;
exports.matrixFromCamera = matrixFromCamera;
exports.extractPixel = extractPixel;
exports.canUse32BitsIndices = canUse32BitsIndices;

var _matrices = __webpack_require__(/*! ./matrices */ "./node_modules/sigma/renderers/webgl/matrices.js");

/**
 * Sigma.js WebGL Renderer Utils
 * ==============================
 *
 * Miscelleanous helper functions used by sigma's WebGL renderer.
 */

/**
 * Memoized function returning a float-encoded color from various string
 * formats describing colors.
 */
var FLOAT_COLOR_CACHE = {};
var INT8 = new Int8Array(4);
var INT32 = new Int32Array(INT8.buffer, 0, 1);
var FLOAT32 = new Float32Array(INT8.buffer, 0, 1);
var RGBA_TEST_REGEX = /^\s*rgba?\s*\(/;
var RGBA_EXTRACT_REGEX = /^\s*rgba?\s*\(\s*([0-9]*)\s*,\s*([0-9]*)\s*,\s*([0-9]*)(?:\s*,\s*(.*)?)?\)\s*$/;

function floatColor(val) {
  // If the color is already computed, we yield it
  if (typeof FLOAT_COLOR_CACHE[val] !== 'undefined') return FLOAT_COLOR_CACHE[val];
  var r = 0,
      g = 0,
      b = 0,
      a = 1; // Handling hexadecimal notation

  if (val[0] === '#') {
    if (val.length === 4) {
      r = parseInt(val.charAt(1) + val.charAt(1), 16);
      g = parseInt(val.charAt(2) + val.charAt(2), 16);
      b = parseInt(val.charAt(3) + val.charAt(3), 16);
    } else {
      r = parseInt(val.charAt(1) + val.charAt(2), 16);
      g = parseInt(val.charAt(3) + val.charAt(4), 16);
      b = parseInt(val.charAt(5) + val.charAt(6), 16);
    }
  } // Handling rgb notation
  else if (RGBA_TEST_REGEX.test(val)) {
      var match = val.match(RGBA_EXTRACT_REGEX);
      r = +match[1];
      g = +match[2];
      b = +match[3];
      if (match[4]) a = +match[4];
    }

  a = a * 255 | 0;
  var bits = (a << 24 | b << 16 | g << 8 | r) & 0xfeffffff;
  INT32[0] = bits;
  var color = FLOAT32[0];
  FLOAT_COLOR_CACHE[val] = color;
  return color;
}
/**
 * Function returning a matrix from the current state of the camera.
 */
// TODO: it's possible to optimize this drastically!


function matrixFromCamera(state, dimensions) {
  var angle = state.angle,
      ratio = state.ratio,
      x = state.x,
      y = state.y;
  var width = dimensions.width,
      height = dimensions.height;
  var matrix = (0, _matrices.identity)();
  var smallestDimension = Math.min(width, height);
  var cameraCentering = (0, _matrices.translate)((0, _matrices.identity)(), -x, -y),
      cameraScaling = (0, _matrices.scale)((0, _matrices.identity)(), 1 / ratio),
      cameraRotation = (0, _matrices.rotate)((0, _matrices.identity)(), -angle),
      viewportScaling = (0, _matrices.scale)((0, _matrices.identity)(), 2 * (smallestDimension / width), 2 * (smallestDimension / height)); // Logical order is reversed

  (0, _matrices.multiply)(matrix, viewportScaling);
  (0, _matrices.multiply)(matrix, cameraRotation);
  (0, _matrices.multiply)(matrix, cameraScaling);
  (0, _matrices.multiply)(matrix, cameraCentering);
  return matrix;
}
/**
 * Function extracting the color at the given pixel.
 */


function extractPixel(gl, x, y, array) {
  var data = array || new Uint8Array(4);
  gl.readPixels(x, y, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, data);
  return data;
}
/**
 * Function used to know whether given webgl context can use 32 bits indices.
 */


function canUse32BitsIndices(gl) {
  var webgl2 = typeof WebGL2RenderingContext !== 'undefined' && gl instanceof WebGL2RenderingContext;
  return webgl2 || !!gl.getExtension('OES_element_index_uint');
}

/***/ }),

/***/ "./node_modules/sigma/utils.js":
/*!*************************************!*\
  !*** ./node_modules/sigma/utils.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assign = assign;

/**
 * Sigma.js Utils
 * ===============
 *
 * Various helper functions & classes used throughout the library.
 */

/**
 * Very simple Object.assign-like function.
 *
 * @param  {object} target       - First object.
 * @param  {object} [...objects] - Objects to merge.
 * @return {object}
 */
function assign(target) {
  target = target || {};

  for (var _len = arguments.length, objects = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    objects[_key - 1] = arguments[_key];
  }

  for (var i = 0, l = objects.length; i < l; i++) {
    if (!objects[i]) continue;

    for (var k in objects[i]) {
      target[k] = objects[i][k];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/xml-writer/index.js":
/*!******************************************!*\
  !*** ./node_modules/xml-writer/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/xml-writer.js */ "./node_modules/xml-writer/lib/xml-writer.js");


/***/ }),

/***/ "./node_modules/xml-writer/lib/xml-writer.js":
/*!***************************************************!*\
  !*** ./node_modules/xml-writer/lib/xml-writer.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


function isFalse(s) {
  return typeof s !== 'number' && !s;
}

function strval(s) {
  if (typeof s == 'string') {
    return s;
  }
  else if (typeof s == 'number') {
    return s+'';
  }
  else if (typeof s == 'function') {
    return s();
  }
  else if (s instanceof XMLWriter) {
    return s.toString();
  }
  else throw Error('Bad Parameter');
}

function XMLWriter(indent, callback) {

    if (!(this instanceof XMLWriter)) {
        return new XMLWriter();
    }

    this.name_regex = /[_:A-Za-z][-._:A-Za-z0-9]*/;
    this.indent = indent ? true : false;
    this.indentString = this.indent && typeof indent === 'string' ? indent : '    ';
    this.output = '';
    this.stack = [];
    this.tags = 0;
    this.attributes = 0;
    this.attribute = 0;
    this.texts = 0;
    this.comment = 0;
    this.dtd = 0;
    this.root = '';
    this.pi = 0;
    this.cdata = 0;
    this.started_write = false;
    this.writer;
    this.writer_encoding = 'UTF-8';

    if (typeof callback == 'function') {
        this.writer = callback;
    } else {
        this.writer = function (s, e) {
            this.output += s;
        }
    }
}

XMLWriter.prototype = {
    toString : function () {
        this.flush();
        return this.output;
    },

    indenter : function () {
      if (this.indent) {
        this.write('\n');
        for (var i = 1; i < this.tags; i++) {
          this.write(this.indentString);
        }
      }
    },

    write : function () {
        for (var i = 0; i < arguments.length; i++) {
            this.writer(arguments[i], this.writer_encoding);
        }
    },


    flush : function () {
        for (var i = this.tags; i > 0; i--) {
            this.endElement();
        }
        this.tags = 0;
    },

    startDocument : function (version, encoding, standalone) {
        if (this.tags || this.attributes) return this;

        this.startPI('xml');
        this.startAttribute('version');
        this.text(typeof version == "string" ? version : "1.0");
        this.endAttribute();
        if (typeof encoding == "string") {
            this.startAttribute('encoding');
            this.text(encoding);
            this.endAttribute();
            this.writer_encoding = encoding;
        }
        if (standalone) {
            this.startAttribute('standalone');
            this.text("yes");
            this.endAttribute();
        }
        this.endPI();
        if (!this.indent) {
          this.write('\n');
        }
        return this;
    },

    endDocument : function () {
        if (this.attributes) this.endAttributes();
        return this;
    },

    writeElement : function (name, content) {
        return this.startElement(name).text(content).endElement();
    },

    writeElementNS : function (prefix, name, uri, content) {
        if (!content) {
            content = uri;
        }
        return this.startElementNS(prefix, name, uri).text(content).endElement();
    },

    startElement : function (name) {
        name = strval(name);
        if (!name.match(this.name_regex)) throw Error('Invalid Parameter');
        if (this.tags === 0 && this.root && this.root !== name) throw Error('Invalid Parameter');
        if (this.attributes) this.endAttributes();
        ++this.tags;
        this.texts = 0;
        if (this.stack.length > 0)
          this.stack[this.stack.length-1].containsTag = true;

        this.stack.push({
            name: name,
            tags: this.tags
        });
        if (this.started_write) this.indenter();
        this.write('<', name);
        this.startAttributes();
        this.started_write = true;
        return this;
    },
    startElementNS : function (prefix, name, uri) {
        prefix = strval(prefix);
        name = strval(name);

        if (!prefix.match(this.name_regex)) throw Error('Invalid Parameter');
        if (!name.match(this.name_regex)) throw Error('Invalid Parameter');
        if (this.attributes) this.endAttributes();
        ++this.tags;
        this.texts = 0;
        if (this.stack.length > 0)
          this.stack[this.stack.length-1].containsTag = true;

        this.stack.push({
            name: prefix + ':' + name,
            tags: this.tags
        });
        if (this.started_write) this.indenter();
        this.write('<', prefix + ':' + name);
        this.startAttributes();
        this.started_write = true;
        return this;
    },

    endElement : function () {
        if (!this.tags) return this;
        var t = this.stack.pop();
        if (this.attributes > 0) {
            if (this.attribute) {
                if (this.texts) this.endAttribute();
                this.endAttribute();
            }
            this.write('/');
            this.endAttributes();
        } else {
            if (t.containsTag) this.indenter();
            this.write('</', t.name, '>');
        }
        --this.tags;
        this.texts = 0;
        return this;
    },

    writeAttribute : function (name, content) {
        if (typeof content == 'function') {
          content = content();
        }
        if (isFalse(content)) {
           return this;
        }
        return this.startAttribute(name).text(content).endAttribute();
    },
    writeAttributeNS : function (prefix, name, uri, content) {
        if (!content) {
            content = uri;
        }
        if (typeof content == 'function') {
          content = content();
        }
        if (isFalse(content)) {
          return this;
        }
        return this.startAttributeNS(prefix, name, uri).text(content).endAttribute();
    },

    startAttributes : function () {
        this.attributes = 1;
        return this;
    },

    endAttributes : function () {
        if (!this.attributes) return this;
        if (this.attribute) this.endAttribute();
        this.attributes = 0;
        this.attribute = 0;
        this.texts = 0;
        this.write('>');
        return this;
    },

    startAttribute : function (name) {
        name = strval(name);
        if (!name.match(this.name_regex)) throw Error('Invalid Parameter');
        if (!this.attributes && !this.pi) return this;
        if (this.attribute) return this;
        this.attribute = 1;
        this.write(' ', name, '="');
        return this;
    },
    startAttributeNS : function (prefix, name, uri) {
        prefix = strval(prefix);
        name = strval(name);

        if (!prefix.match(this.name_regex)) throw Error('Invalid Parameter');
        if (!name.match(this.name_regex)) throw Error('Invalid Parameter');
        if (!this.attributes && !this.pi) return this;
        if (this.attribute) return this;
        this.attribute = 1;
        this.write(' ', prefix + ':' + name, '="');
        return this;
    },
    endAttribute : function () {
        if (!this.attribute) return this;
        this.attribute = 0;
        this.texts = 0;
        this.write('"');
        return this;
    },

    text : function (content) {
        content = strval(content);
        if (!this.tags && !this.comment && !this.pi && !this.cdata) return this;
        if (this.attributes && this.attribute) {
            ++this.texts;
            this.write(content
                       .replace(/&/g, '&amp;')
                       .replace(/</g, '&lt;')
                       .replace(/"/g, '&quot;')
                       .replace(/\t/g, '&#x9;')
                       .replace(/\n/g, '&#xA;')
                       .replace(/\r/g, '&#xD;')
                      );
            return this;
        } else if (this.attributes && !this.attribute) {
            this.endAttributes();
        }
        if (this.comment || this.cdata) {
            this.write(content);
        }
        else {
          this.write(content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'));
        }
        ++this.texts;
        this.started_write = true;
        return this;
    },

    writeComment : function (content) {
        return this.startComment().text(content).endComment();
    },

    startComment : function () {
        if (this.comment) return this;
        if (this.attributes) this.endAttributes();
        this.indenter();
        this.write('<!--');
        this.comment = 1;
        this.started_write = true;
        return this;
    },

    endComment : function () {
        if (!this.comment) return this;
        this.write('-->');
        this.comment = 0;
        return this;
    },

    writeDocType : function (name, pubid, sysid, subset) {
        return this.startDocType(name, pubid, sysid, subset).endDocType()
    },

    startDocType : function (name, pubid, sysid, subset) {
        if (this.dtd || this.tags) return this;

        name = strval(name);
        pubid = pubid ? strval(pubid) : pubid;
        sysid = sysid ? strval(sysid) : sysid;
        subset = subset ? strval(subset) : subset;

        if (!name.match(this.name_regex)) throw Error('Invalid Parameter');
        if (pubid && !pubid.match(/^[\w\-][\w\s\-\/\+\:\.]*/)) throw Error('Invalid Parameter');
        if (sysid && !sysid.match(/^[\w\.][\w\-\/\\\:\.]*/)) throw Error('Invalid Parameter');
        if (subset && !subset.match(/[\w\s\<\>\+\.\!\#\-\?\*\,\(\)\|]*/)) throw Error('Invalid Parameter');

        pubid = pubid ? ' PUBLIC "' + pubid + '"' : (sysid) ? ' SYSTEM' : '';
        sysid = sysid ? ' "' + sysid + '"' : '';
        subset = subset ? ' [' + subset + ']': '';

        if (this.started_write) this.indenter();
        this.write('<!DOCTYPE ', name, pubid, sysid, subset);
        this.root = name;
        this.dtd = 1;
        this.started_write = true;
        return this;
    },

    endDocType : function () {
        if (!this.dtd) return this;
        this.write('>');
        return this;
    },

    writePI : function (name, content) {
        return this.startPI(name).text(content).endPI()
    },

    startPI : function (name) {
        name = strval(name);
        if (!name.match(this.name_regex)) throw Error('Invalid Parameter');
        if (this.pi) return this;
        if (this.attributes) this.endAttributes();
        if (this.started_write) this.indenter();
        this.write('<?', name);
        this.pi = 1;
        this.started_write = true;
        return this;
    },

    endPI : function () {
        if (!this.pi) return this;
        this.write('?>');
        this.pi = 0;
        return this;
    },

    writeCData : function (content) {
        return this.startCData().text(content).endCData();
    },

    startCData : function () {
        if (this.cdata) return this;
        if (this.attributes) this.endAttributes();
        this.indenter();
        this.write('<![CDATA[');
        this.cdata = 1;
        this.started_write = true;
        return this;
    },

    endCData : function () {
        if (!this.cdata) return this;
        this.write(']]>');
        this.cdata = 0;
        return this;
    },

    writeRaw : function(content) {
        content = strval(content);
        if (!this.tags && !this.comment && !this.pi && !this.cdata) return this;
        if (this.attributes && this.attribute) {
            ++this.texts;
            this.write(content.replace('&', '&amp;').replace('"', '&quot;'));
            return this;
        } else if (this.attributes && !this.attribute) {
            this.endAttributes();
        }
        ++this.texts;
        this.write(content);
        this.started_write = true;
        return this;
    }

}

module.exports = XMLWriter;


/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Yomgui/code/sigma-visualizer/index.js */"./index.js");


/***/ })

/******/ });
//# sourceMappingURL=build.js.map