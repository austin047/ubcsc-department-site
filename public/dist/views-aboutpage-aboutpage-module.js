(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-aboutpage-aboutpage-module"],{

/***/ "./src/app/views/aboutpage/aboutpage-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/aboutpage/aboutpage-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: AboutpageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutpageRoutingModule", function() { return AboutpageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _aboutpage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aboutpage.component */ "./src/app/views/aboutpage/aboutpage.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _aboutpage_component__WEBPACK_IMPORTED_MODULE_2__["AboutpageComponent"],
        data: {
            title: 'AboutPage'
        }
    }
];
var AboutpageRoutingModule = /** @class */ (function () {
    function AboutpageRoutingModule() {
    }
    AboutpageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AboutpageRoutingModule);
    return AboutpageRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/aboutpage/aboutpage.component.html":
/*!**********************************************************!*\
  !*** ./src/app/views/aboutpage/aboutpage.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  aboutpage works!\n</p>\n"

/***/ }),

/***/ "./src/app/views/aboutpage/aboutpage.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/views/aboutpage/aboutpage.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/aboutpage/aboutpage.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/aboutpage/aboutpage.component.ts ***!
  \********************************************************/
/*! exports provided: AboutpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutpageComponent", function() { return AboutpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutpageComponent = /** @class */ (function () {
    function AboutpageComponent() {
    }
    AboutpageComponent.prototype.ngOnInit = function () {
    };
    AboutpageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-aboutpage',
            template: __webpack_require__(/*! ./aboutpage.component.html */ "./src/app/views/aboutpage/aboutpage.component.html"),
            styles: [__webpack_require__(/*! ./aboutpage.component.scss */ "./src/app/views/aboutpage/aboutpage.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutpageComponent);
    return AboutpageComponent;
}());



/***/ }),

/***/ "./src/app/views/aboutpage/aboutpage.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/aboutpage/aboutpage.module.ts ***!
  \*****************************************************/
/*! exports provided: AboutpageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutpageModule", function() { return AboutpageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _aboutpage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aboutpage.component */ "./src/app/views/aboutpage/aboutpage.component.ts");
/* harmony import */ var _aboutpage_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aboutpage-routing.module */ "./src/app/views/aboutpage/aboutpage-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AboutpageModule = /** @class */ (function () {
    function AboutpageModule() {
    }
    AboutpageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _aboutpage_routing_module__WEBPACK_IMPORTED_MODULE_2__["AboutpageRoutingModule"],
            ],
            declarations: [_aboutpage_component__WEBPACK_IMPORTED_MODULE_1__["AboutpageComponent"]]
        })
    ], AboutpageModule);
    return AboutpageModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-aboutpage-aboutpage-module.js.map