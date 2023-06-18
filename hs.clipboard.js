/*
* Clipboard wrapper
* @version: 2.0.0 (Sat, 30 Jul 2021)
* @author: Preline
* @event-namespace: .HSCore.components.HSClipboard
* @license: Preline Libraries (https://Preline.com/licenses)
* Copyright 2021 Preline
*/

const HSClipboard = {
  collection: [],

  dataAttributeName: 'data-hs-clipboard-options',

  defaults: {
    type: null,
    tooltip: false,
    contentTarget: null,
    classChangeTarget: null,
    defaultClass: null,
    successText: null,
    successClass: null,
    originalTitle: null
  },

  init(el, options = {}, id) {
    const that = this
    let elems

    if (el instanceof HTMLElement) {
      elems = [el]
    } else if (el instanceof Object) {
      elems = el
    } else {
      elems = document.querySelectorAll(el)
    }

    for (let i = 0; i < elems.length; i += 1) {
      that.addToCollection(elems[i], options, id || elems[i].id)
    }

    if (!that.collection.length) {
      return false;
    }

    // initialization calls
    that._init()
  },

  _init: function (el, settings) {
    const that = this

    for (let i = 0; i < that.collection.length; i += 1) {
      let _options
      let _$el

      if (that.collection[i].hasOwnProperty('$initializedEl')) {
        continue;
      }

      _options = that.collection[i].options
      _$el = that.collection[i].$el

      /* Start : Init */

      if (_options.contentTarget) that.setShortcodes(_$el, _options)

      that.collection[i].$initializedEl = new ClipboardJS(_$el, _options)

      that.collection[i].$initializedEl.on('success', () => {
        const $defaultEl = _$el.querySelector('.js-clipboard-default')
        const $successEl = _$el.querySelector('.js-clipboard-success')
        const $successTextTargetEl = _$el.querySelector('.js-clipboard-success-text')
        const successText = _options.successText
        const tooltip = _options.tooltip
        let oldSuccessText

        if ($successTextTargetEl) {
          oldSuccessText = $successTextTargetEl.textContent
          $successTextTargetEl.textContent = successText
        }

        if ($defaultEl && $successEl) {
          $defaultEl.style.display = 'none'
          $successEl.style.display = 'block'
        }

        if (tooltip) {
          HSTooltip.show(_$el)
        }

        setTimeout(function () {
          if ($successTextTargetEl && oldSuccessText) {
            $successTextTargetEl.textContent = oldSuccessText
          }

          if (tooltip) {
            HSTooltip.hide(_$el)
          }

          if ($defaultEl && $successEl) {
            $successEl.style.display = ''
            $defaultEl.style.display = ''
          }
        }, 800)
      })

      /* End : Init */
    }
  },

  setShortcodes(el, params) {
    let settings = params,
      $element = document.querySelector(settings.contentTarget)

    if ($element.tagName === 'SELECT' || $element.tagName === 'INPUT' || $element.tagName === 'TEXTAREA') {
      settings.shortcodes[settings.contentTarget] = $element.value
    } else {
      settings.shortcodes[settings.contentTarget] = $element.textContent
    }
  },

  addToCollection(item, options, id) {
    options = Object.assign(
      {
        shortcodes: {},
      },
      this.defaults,
      item.hasAttribute(this.dataAttributeName)
        ? JSON.parse(item.getAttribute(this.dataAttributeName))
        : {},
      options
    ),
      this.collection.push({
        $el: item,
        id: id || null,
        options: Object.assign({}, options, {
          windowWidth: window.outerWidth,
          defaultText: item.lastChild.nodeValue,
          title: item.getAttribute('data-bs-original-title'),
          container: !!this.defaults.container ? document.querySelector(this.defaults.container) : false,
          text: (button) => {
            var dataSettings = JSON.parse(button.getAttribute('data-hs-clipboard-options'));
            return options.shortcodes[dataSettings.contentTarget];
          }
        })
      })
  },

  getItems() {
    const that = this;
    let newCollection = [];

    for (let i = 0; i < that.collection.length; i += 1) {
      newCollection.push(that.collection[i].$initializedEl);
    }

    return newCollection;
  },

  getItem(item) {
    if (typeof item === 'number') {
      return this.collection[item].$initializedEl;
    } else {
      return this.collection.find(el => {
        return el.id === item;
      }).$initializedEl;
    }
  }
}
