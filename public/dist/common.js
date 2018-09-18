(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@coreui/coreui-plugin-chartjs-custom-tooltips/js/custom-tooltips.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@coreui/coreui-plugin-chartjs-custom-tooltips/js/custom-tooltips.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * --------------------------------------------------------------------------
 * CoreUI Plugins - Custom Tooltips for Chart.js (v1.2.0): custom-tooltips.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

function CustomTooltips(tooltipModel) {
  // Add unique id if not exist
  const _setCanvasId = () => {
    const _idMaker = () => {
      const _hex = 16
      const _multiplier = 0x10000
      return ((1 + Math.random()) * _multiplier | 0).toString(_hex)
    }
    const _canvasId = `_canvas-${_idMaker() + _idMaker()}`
    this._chart.canvas.id = _canvasId
    return _canvasId
  }

  const ClassName = {
    ABOVE                   : 'above',
    BELOW                   : 'below',
    CHARTJS_TOOLTIP         : 'chartjs-tooltip',
    NO_TRANSFORM            : 'no-transform',
    TOOLTIP_BODY            : 'tooltip-body',
    TOOLTIP_BODY_ITEM       : 'tooltip-body-item',
    TOOLTIP_BODY_ITEM_COLOR : 'tooltip-body-item-color',
    TOOLTIP_BODY_ITEM_LABEL : 'tooltip-body-item-label',
    TOOLTIP_BODY_ITEM_VALUE : 'tooltip-body-item-value',
    TOOLTIP_HEADER          : 'tooltip-header',
    TOOLTIP_HEADER_ITEM     : 'tooltip-header-item'
  }

  const Selector = {
    DIV     : 'div',
    SPAN    : 'span',
    TOOLTIP : `${this._chart.canvas.id || _setCanvasId()}-tooltip`
  }

  let tooltip = document.getElementById(Selector.TOOLTIP)

  if (!tooltip) {
    tooltip = document.createElement('div')
    tooltip.id = Selector.TOOLTIP
    tooltip.className = ClassName.CHARTJS_TOOLTIP
    this._chart.canvas.parentNode.appendChild(tooltip)
  }

  // Hide if no tooltip
  if (tooltipModel.opacity === 0) {
    tooltip.style.opacity = 0
    return
  }

  // Set caret Position
  tooltip.classList.remove(ClassName.ABOVE, ClassName.BELOW, ClassName.NO_TRANSFORM)
  if (tooltipModel.yAlign) {
    tooltip.classList.add(tooltipModel.yAlign)
  } else {
    tooltip.classList.add(ClassName.NO_TRANSFORM)
  }

  // Set Text
  if (tooltipModel.body) {
    const titleLines = tooltipModel.title || []

    const tooltipHeader = document.createElement(Selector.DIV)
    tooltipHeader.className = ClassName.TOOLTIP_HEADER

    titleLines.forEach((title) => {
      const tooltipHeaderTitle = document.createElement(Selector.DIV)
      tooltipHeaderTitle.className = ClassName.TOOLTIP_HEADER_ITEM
      tooltipHeaderTitle.innerHTML = title
      tooltipHeader.appendChild(tooltipHeaderTitle)
    })

    const tooltipBody = document.createElement(Selector.DIV)
    tooltipBody.className = ClassName.TOOLTIP_BODY

    const tooltipBodyItems = tooltipModel.body.map((item) => item.lines)
    tooltipBodyItems.forEach((item, i) => {
      const tooltipBodyItem = document.createElement(Selector.DIV)
      tooltipBodyItem.className = ClassName.TOOLTIP_BODY_ITEM

      const colors = tooltipModel.labelColors[i]

      const tooltipBodyItemColor = document.createElement(Selector.SPAN)
      tooltipBodyItemColor.className = ClassName.TOOLTIP_BODY_ITEM_COLOR
      tooltipBodyItemColor.style.backgroundColor = colors.backgroundColor

      tooltipBodyItem.appendChild(tooltipBodyItemColor)

      if (item[0].split(':').length > 1) {
        const tooltipBodyItemLabel = document.createElement(Selector.SPAN)
        tooltipBodyItemLabel.className = ClassName.TOOLTIP_BODY_ITEM_LABEL
        tooltipBodyItemLabel.innerHTML = item[0].split(': ')[0]

        tooltipBodyItem.appendChild(tooltipBodyItemLabel)

        const tooltipBodyItemValue = document.createElement(Selector.SPAN)
        tooltipBodyItemValue.className = ClassName.TOOLTIP_BODY_ITEM_VALUE
        tooltipBodyItemValue.innerHTML = item[0].split(': ').pop()

        tooltipBodyItem.appendChild(tooltipBodyItemValue)
      } else {
        const tooltipBodyItemValue = document.createElement(Selector.SPAN)
        tooltipBodyItemValue.className = ClassName.TOOLTIP_BODY_ITEM_VALUE
        tooltipBodyItemValue.innerHTML = item[0]

        tooltipBodyItem.appendChild(tooltipBodyItemValue)
      }

      tooltipBody.appendChild(tooltipBodyItem)
    })

    tooltip.innerHTML = ''

    tooltip.appendChild(tooltipHeader)
    tooltip.appendChild(tooltipBody)
  }

  const positionY = this._chart.canvas.offsetTop
  const positionX = this._chart.canvas.offsetLeft

  // Display, position, and set styles for font
  tooltip.style.opacity = 1
  tooltip.style.left = `${positionX + tooltipModel.caretX}px`
  tooltip.style.top = `${positionY + tooltipModel.caretY}px`
}

/* harmony default export */ __webpack_exports__["default"] = (CustomTooltips);


/***/ }),

/***/ "./node_modules/@coreui/coreui-plugin-chartjs-custom-tooltips/js/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@coreui/coreui-plugin-chartjs-custom-tooltips/js/index.js ***!
  \********************************************************************************/
/*! exports provided: CustomTooltips */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _custom_tooltips__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-tooltips */ "./node_modules/@coreui/coreui-plugin-chartjs-custom-tooltips/js/custom-tooltips.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomTooltips", function() { return _custom_tooltips__WEBPACK_IMPORTED_MODULE_0__["default"]; });






/***/ }),

/***/ "./node_modules/@coreui/coreui/js/src/utilities/get-style.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@coreui/coreui/js/src/utilities/get-style.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * --------------------------------------------------------------------------
 * CoreUI Utilities (v2.0.4): get-style.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

const getCssCustomProperties = () => {
  const cssCustomProperties = {}
  const sheets = document.styleSheets
  let cssText = ''
  for (let i = sheets.length - 1; i > -1; i--) {
    const rules = sheets[i].cssRules
    for (let j = rules.length - 1; j > -1; j--) {
      if (rules[j].selectorText === '.ie-custom-properties') {
        cssText = rules[j].cssText
        break
      }
    }
    if (cssText) {
      break
    }
  }

  cssText = cssText.substring(
    cssText.lastIndexOf('{') + 1,
    cssText.lastIndexOf('}')
  )

  cssText.split(';').forEach((property) => {
    if (property) {
      const name = property.split(': ')[0]
      const value = property.split(': ')[1]
      if (name && value) {
        cssCustomProperties[`--${name.trim()}`] = value.trim()
      }
    }
  })
  return cssCustomProperties
}

const minIEVersion = 10
const isIE1x = () => Boolean(document.documentMode) && document.documentMode >= minIEVersion
const isCustomProperty = (property) => property.match(/^--.*/i)

const getStyle = (property, element = document.body) => {
  let style
  if (isCustomProperty(property) && isIE1x()) {
    const cssCustomProperties = getCssCustomProperties()
    style = cssCustomProperties[property]
  } else {
    style = window.getComputedStyle(element, null).getPropertyValue(property).replace(/^\s/, '')
  }
  return style
}

/* harmony default export */ __webpack_exports__["default"] = (getStyle);


/***/ }),

/***/ "./node_modules/@coreui/coreui/js/src/utilities/hex-to-rgb.js":
/*!********************************************************************!*\
  !*** ./node_modules/@coreui/coreui/js/src/utilities/hex-to-rgb.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * --------------------------------------------------------------------------
 * CoreUI Utilities (v2.0.4): hex-to-rgb.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

/* eslint-disable no-magic-numbers */
const hexToRgb = (color) => {
  if (typeof color === 'undefined') {
    throw new Error('Hex color is not defined')
  }
  const hex = color.match(/^#(?:[0-9a-f]{3}){1,2}$/i)
  if (!hex) {
    throw new Error(`${color} is not a valid hex color`)
  }
  let r
  let g
  let b
  if (color.length === 7) {
    r = parseInt(color.substring(1, 3), 16)
    g = parseInt(color.substring(3, 5), 16)
    b = parseInt(color.substring(5, 7), 16)
  } else {
    r = parseInt(color.substring(1, 2), 16)
    g = parseInt(color.substring(2, 3), 16)
    b = parseInt(color.substring(3, 5), 16)
  }

  return `rgba(${r}, ${g}, ${b})`
}

/* harmony default export */ __webpack_exports__["default"] = (hexToRgb);


/***/ }),

/***/ "./node_modules/@coreui/coreui/js/src/utilities/hex-to-rgba.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@coreui/coreui/js/src/utilities/hex-to-rgba.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * --------------------------------------------------------------------------
 * CoreUI Utilities (v2.0.4): hex-to-rgba.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

/* eslint-disable no-magic-numbers */
const hexToRgba = (color, opacity = 100) => {
  if (typeof color === 'undefined') {
    throw new Error('Hex color is not defined')
  }
  const hex = color.match(/^#(?:[0-9a-f]{3}){1,2}$/i)
  if (!hex) {
    throw new Error(`${color} is not a valid hex color`)
  }
  let r
  let g
  let b
  if (color.length === 7) {
    r = parseInt(color.substring(1, 3), 16)
    g = parseInt(color.substring(3, 5), 16)
    b = parseInt(color.substring(5, 7), 16)
  } else {
    r = parseInt(color.substring(1, 2), 16)
    g = parseInt(color.substring(2, 3), 16)
    b = parseInt(color.substring(3, 5), 16)
  }

  return `rgba(${r}, ${g}, ${b}, ${opacity / 100})`
}

/* harmony default export */ __webpack_exports__["default"] = (hexToRgba);


/***/ }),

/***/ "./node_modules/@coreui/coreui/js/src/utilities/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@coreui/coreui/js/src/utilities/index.js ***!
  \***************************************************************/
/*! exports provided: getStyle, hexToRgb, hexToRgba, rgbToHex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-style */ "./node_modules/@coreui/coreui/js/src/utilities/get-style.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStyle", function() { return _get_style__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _hex_to_rgb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hex-to-rgb */ "./node_modules/@coreui/coreui/js/src/utilities/hex-to-rgb.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hexToRgb", function() { return _hex_to_rgb__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _hex_to_rgba__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hex-to-rgba */ "./node_modules/@coreui/coreui/js/src/utilities/hex-to-rgba.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hexToRgba", function() { return _hex_to_rgba__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _rgb_to_hex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rgb-to-hex */ "./node_modules/@coreui/coreui/js/src/utilities/rgb-to-hex.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rgbToHex", function() { return _rgb_to_hex__WEBPACK_IMPORTED_MODULE_3__["default"]; });









/***/ }),

/***/ "./node_modules/@coreui/coreui/js/src/utilities/rgb-to-hex.js":
/*!********************************************************************!*\
  !*** ./node_modules/@coreui/coreui/js/src/utilities/rgb-to-hex.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * --------------------------------------------------------------------------
 * CoreUI (v2.0.4): rgb-to-hex.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

/* eslint-disable no-magic-numbers */
const rgbToHex = (color) => {
  if (typeof color === 'undefined') {
    throw new Error('Hex color is not defined')
  }
  const rgb = color.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i)
  if (!rgb) {
    throw new Error(`${color} is not a valid rgb color`)
  }
  const r = `0${parseInt(rgb[1], 10).toString(16)}`
  const g = `0${parseInt(rgb[2], 10).toString(16)}`
  const b = `0${parseInt(rgb[3], 10).toString(16)}`

  return `#${r.slice(-2)}${g.slice(-2)}${b.slice(-2)}`
}

/* harmony default export */ __webpack_exports__["default"] = (rgbToHex);


/***/ })

}]);
//# sourceMappingURL=common.js.map