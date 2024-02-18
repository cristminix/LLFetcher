!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var o=t();for(var n in o)("object"==typeof exports?exports:e)[n]=o[n]}}(self,(()=>(()=>{"use strict";var e={737:(e,t)=>{
/*
 * HSBasePlugin
 * @version: 2.0.3
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */
Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t,o){this.el=e,this.options=t,this.events=o,this.el=e,this.options=t,this.events={}}return e.prototype.createCollection=function(e,t){var o;e.push({id:(null===(o=null==t?void 0:t.el)||void 0===o?void 0:o.id)||e.length+1,element:t})},e.prototype.fireEvent=function(e,t){if(void 0===t&&(t=null),this.events.hasOwnProperty(e))return this.events[e](t)},e.prototype.on=function(e,t){this.events[e]=t},e}();t.default=o},770:function(e,t,o){
/*
 * HSOverlay
 * @version: 2.0.3
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */
var n, i = this && this.__extends || (n = function(e, t) {
    return n = Object.setPrototypeOf || {
        __proto__: []
    }
    instanceof Array && function(e, t) {
        e.__proto__ = t
    } || function(e, t) {
        for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
    }, n(e, t)
}, function(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

    function o() {
        this.constructor = e
    }
    n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
}),
r = this && this.__assign || function() {
    return r = Object.assign || function(e) {
        for (var t, o = 1, n = arguments.length; o < n; o++)
            for (var i in t = arguments[o]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e
    }, r.apply(this, arguments)
};
Object.defineProperty(t, "__esModule", {
value: !0
});
var l = o(969),
s = function(e) {
    function t(t, o, n) {
        var i, s, a = e.call(this, t, o, n) || this,
            c = t.getAttribute("data-hs-overlay-options"),
            u = c ? JSON.parse(c) : {},
            d = r(r({}, u), o);
        return a.hiddenClass = (null == d ? void 0 : d.hiddenClass) || "hidden", a.isClosePrev = null === (i = null == d ? void 0 : d.isClosePrev) || void 0 === i || i, a.backdropClasses = null !== (s = null == d ? void 0 : d.backdropClasses) && void 0 !== s ? s : "transition duration fixed inset-0 bg-gray-900 bg-opacity-50 dark:bg-opacity-80 hs-overlay-backdrop", a.openNextOverlay = !1, a.autoHide = null, a.overlayId = a.el.getAttribute("data-hs-overlay"), a.overlay = document.querySelector(a.overlayId), a.overlay && (a.isCloseWhenClickInside = (0, l.getClassProperty)(a.overlay, "--close-when-click-inside", "false") || "false", a.isTabAccessibilityLimited = (0, l.getClassProperty)(a.overlay, "--tab-accessibility-limited", "true") || "true", a.hasAutofocus = (0, l.getClassProperty)(a.overlay, "--has-autofocus", "true") || "true", a.hasAbilityToCloseOnBackdropClick = a.overlay.getAttribute("data-hs-overlay-keyboard") || "true"), a.overlay && a.init(), a
    }
    return i(t, e), t.prototype.init = function() {
        var e = this;
        this.createCollection(window.$hsOverlayCollection, this), this.el.addEventListener("click", (function() {
            e.overlay.classList.contains(e.hiddenClass) ? e.open() : e.close()
        })), this.overlay.addEventListener("click", (function(t) {
            t.target.id && "#".concat(t.target.id) === e.overlayId && "true" === e.isCloseWhenClickInside && "true" === e.hasAbilityToCloseOnBackdropClick && e.close()
        }))
    }, t.prototype.hideAuto = function() {
        var e = this,
            t = parseInt((0, l.getClassProperty)(this.overlay, "--auto-hide", "0"));
        t && (this.autoHide = setTimeout((function() {
            e.close()
        }), t))
    }, t.prototype.checkTimer = function() {
        this.autoHide && (clearTimeout(this.autoHide), this.autoHide = null)
    }, t.prototype.buildBackdrop = function() {
        var e = this,
            t = this.overlay.classList.value.split(" "),
            o = parseInt(window.getComputedStyle(this.overlay).getPropertyValue("z-index")),
            n = this.overlay.getAttribute("data-hs-overlay-backdrop-container") || !1,
            i = document.createElement("div"),
            r = this.backdropClasses,
            s = "static" !== (0, l.getClassProperty)(this.overlay, "--overlay-backdrop", "true"),
            a = "false" === (0, l.getClassProperty)(this.overlay, "--overlay-backdrop", "true");
        i.id = "".concat(this.overlay.id, "-backdrop"), "style" in i && (i.style.zIndex = "".concat(o - 1));
        for (var c = 0, u = t; c < u.length; c++) {
            var d = u[c];
            (d.startsWith("hs-overlay-backdrop-open:") || d.includes(":hs-overlay-backdrop-open:")) && (r += " ".concat(d))
        }
        a || (n && ((i = document.querySelector(n).cloneNode(!0)).classList.remove("hidden"), r = "".concat(i.classList.toString()), i.classList.value = ""), s && i.addEventListener("click", (function() {
            return e.close()
        }), !0), i.setAttribute("data-hs-overlay-backdrop-template", ""), document.body.appendChild(i), setTimeout((function() {
            i.classList.value = r
        })))
    }, t.prototype.destroyBackdrop = function() {
        var e = document.querySelector("#".concat(this.overlay.id, "-backdrop"));
        e && (this.openNextOverlay && (e.style.transitionDuration = "".concat(1.8 * parseFloat(window.getComputedStyle(e).transitionDuration.replace(/[^\d.-]/g, "")), "s")), e.classList.add("opacity-0"), (0, l.afterTransition)(e, (function() {
            e.remove()
        })))
    }, t.prototype.focusElement = function() {
        var e = this.overlay.querySelector("[autofocus]");
        if (!e) return !1;
        e.focus()
    }, t.prototype.open = function() {
        var e = this;
        if (!this.overlay) return !1;
        var t = window.$hsOverlayCollection.find((function(e) {
                return e.element.overlay === document.querySelector(".hs-overlay.open")
            })),
            o = "true" !== (0, l.getClassProperty)(this.overlay, "--body-scroll", "false");
        if (this.isClosePrev && t) return this.openNextOverlay = !0, t.element.close().then((function() {
            e.open(), e.openNextOverlay = !1
        }));
        o && (document.body.style.overflow = "hidden"), this.buildBackdrop(), this.checkTimer(), this.hideAuto(), this.overlay.classList.remove(this.hiddenClass), this.overlay.setAttribute("aria-overlay", "true"), this.overlay.setAttribute("tabindex", "-1"), setTimeout((function() {
            if (e.overlay.classList.contains(e.hiddenClass)) return !1;
            e.overlay.classList.add("open"), e.fireEvent("open", e.el), (0, l.dispatch)("open.hs.overlay", e.el, e.el), "true" === e.hasAutofocus && e.focusElement()
        }), 50)
    }, t.prototype.close = function() {
        var e = this;
        return new Promise((function(t) {
            if (!e.overlay) return !1;
            e.overlay.classList.remove("open"), e.overlay.removeAttribute("aria-overlay"), e.overlay.removeAttribute("tabindex"), (0, l.afterTransition)(e.overlay, (function() {
                if (e.overlay.classList.contains("open")) return !1;
                e.overlay.classList.add(e.hiddenClass), e.destroyBackdrop(), e.fireEvent("close", e.el), (0, l.dispatch)("close.hs.overlay", e.el, e.el), document.body.style.overflow = "", t(e.overlay)
            }))
        }))
    }, t.getInstance = function(e, t) {
        var o = window.$hsOverlayCollection.find((function(t) {
            return t.element.el === ("string" == typeof e ? document.querySelector(e) : e) || t.element.overlay === ("string" == typeof e ? document.querySelector(e) : e)
        }));
        return o ? t ? o : o.element.el : null
    }, t.autoInit = function() {
        window.$hsOverlayCollection || (window.$hsOverlayCollection = []), document.querySelectorAll("[data-hs-overlay]:not(.--prevent-on-load-init)").forEach((function(e) {
            window.$hsOverlayCollection.find((function(t) {
                var o;
                return (null === (o = null == t ? void 0 : t.element) || void 0 === o ? void 0 : o.el) === e
            })) || new t(e)
        })), window.$hsOverlayCollection && document.addEventListener("keydown", (function(e) {
            return t.accessibility(e)
        }))
    }, t.open = function(e) {
        var t = window.$hsOverlayCollection.find((function(t) {
            return t.element.el === ("string" == typeof e ? document.querySelector(e) : e) || t.element.overlay === ("string" == typeof e ? document.querySelector(e) : e)
        }));
        t && t.element.overlay.classList.contains(t.element.hiddenClass) && t.element.open()
    }, t.close = function(e) {
        var t = window.$hsOverlayCollection.find((function(t) {
            return t.element.el === ("string" == typeof e ? document.querySelector(e) : e) || t.element.overlay === ("string" == typeof e ? document.querySelector(e) : e)
        }));
        t && !t.element.overlay.classList.contains(t.element.hiddenClass) && t.element.close()
    }, t.accessibility = function(e) {
        var t, o, n = window.$hsOverlayCollection.filter((function(e) {
                return e.element.overlay.classList.contains("open")
            })),
            i = n[n.length - 1],
            r = null === (o = null === (t = null == i ? void 0 : i.element) || void 0 === t ? void 0 : t.overlay) || void 0 === o ? void 0 : o.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),
            s = [];
        (null == r ? void 0 : r.length) && r.forEach((function(e) {
            (0, l.isParentOrElementHidden)(e) || s.push(e)
        }));
        var a = i && !e.metaKey;
        if (a && "false" === i.element.isTabAccessibilityLimited && "Tab" === e.code) return !1;
        a && s.length && "Tab" === e.code && (e.preventDefault(), this.onTab(i, s)), a && "Escape" === e.code && (e.preventDefault(), this.onEscape(i))
    }, t.onEscape = function(e) {
        e && e.element.close()
    }, t.onTab = function(e, t) {
        console.log('tab-pressed')
        return true
        if (!t.length) return !1;
        var o = e.element.overlay.querySelector(":focus"),
            n = Array.from(t).indexOf(o);
        n > -1 ? t[(n + 1) % t.length].focus() : t[0].focus()
    }, t.on = function(e, t, o) {
        var n = window.$hsOverlayCollection.find((function(e) {
            return e.element.el === ("string" == typeof t ? document.querySelector(t) : t) || e.element.overlay === ("string" == typeof t ? document.querySelector(t) : t)
        }));
        n && (n.element.events[e] = o)
    }, t
}(o(737).default);
window.addEventListener("load", (function() {
s.autoInit()
})), "undefined" != typeof window && (window.HSOverlay = s), t.default = s
}, 969: function(e, t) {
var o = this;
Object.defineProperty(t, "__esModule", {
    value: !0
}), t.menuSearchHistory = t.classToClassList = t.htmlToElement = t.afterTransition = t.dispatch = t.debounce = t.isFormElement = t.isParentOrElementHidden = t.isEnoughSpace = t.isIpadOS = t.isIOS = t.getClassPropertyAlt = t.getClassProperty = void 0;
t.getClassProperty = function(e, t, o) {
    return void 0 === o && (o = ""), (window.getComputedStyle(e).getPropertyValue(t) || o).replace(" ", "")
};
t.getClassPropertyAlt = function(e, t, o) {
    void 0 === o && (o = "");
    var n = "";
    return e.classList.forEach((function(e) {
        e.includes(t) && (n = e)
    })), n.match(/:(.*)]/) ? n.match(/:(.*)]/)[1] : o
};
t.isIOS = function() {
    return !!/iPad|iPhone|iPod/.test(navigator.platform) || navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /MacIntel/.test(navigator.platform)
};
t.isIpadOS = function() {
    return navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /MacIntel/.test(navigator.platform)
};
t.isEnoughSpace = function(e, t, o, n, i) {
    void 0 === o && (o = "auto"), void 0 === n && (n = 10), void 0 === i && (i = null);
    var r = t.getBoundingClientRect(),
        l = i ? i.getBoundingClientRect() : null,
        s = window.innerHeight,
        a = l ? r.top - l.top : r.top,
        c = (i ? l.bottom : s) - r.bottom,
        u = e.clientHeight + n;
    return "bottom" === o ? c >= u : "top" === o ? a >= u : a >= u || c >= u
};
t.isFormElement = function(e) {
    return e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement || e instanceof HTMLSelectElement
};
var n = function(e) {
    return !!e && ("none" === window.getComputedStyle(e).display || n(e.parentElement))
};
t.isParentOrElementHidden = n;
t.debounce = function(e, t) {
    var n;
    return void 0 === t && (t = 200),
        function() {
            for (var i = [], r = 0; r < arguments.length; r++) i[r] = arguments[r];
            clearTimeout(n), n = setTimeout((function() {
                e.apply(o, i)
            }), t)
        }
};
t.dispatch = function(e, t, o) {
    void 0 === o && (o = null);
    var n = new CustomEvent(e, {
        detail: {
            payload: o
        },
        bubbles: !0,
        cancelable: !0,
        composed: !1
    });
    t.dispatchEvent(n)
};
t.afterTransition = function(e, t) {
    var o = function() {
        t(), e.removeEventListener("transitionend", o, !0)
    };
    "all 0s ease 0s" !== window.getComputedStyle(e, null).getPropertyValue("transition") ? e.addEventListener("transitionend", o, !0) : t()
};
t.htmlToElement = function(e) {
    var t = document.createElement("template");
    return e = e.trim(), t.innerHTML = e, t.content.firstChild
};
t.classToClassList = function(e, t, o) {
    void 0 === o && (o = " "), e.split(o).forEach((function(e) {
        return t.classList.add(e)
    }))
};
t.menuSearchHistory = {
    historyIndex: -1,
    addHistory: function(e) {
        this.historyIndex = e
    },
    existsInHistory: function(e) {
        return e > this.historyIndex
    },
    clearHistory: function() {
        this.historyIndex = -1
    }
}
}
}, t = {};
var o = function o(n) {
var i = t[n];
if (void 0 !== i) return i.exports;
var r = t[n] = {
    exports: {}
};
return e[n].call(r.exports, r, r.exports, o), r.exports
}(770);
return o
})()));