(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-notifications-notifications-module"],{

/***/ "./node_modules/ngx-bootstrap/alert/alert.component.js":
/*!*************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/alert/alert.component.js ***!
  \*************************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _alert_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.config */ "./node_modules/ngx-bootstrap/alert/alert.config.js");
/* harmony import */ var _utils_decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/decorators */ "./node_modules/ngx-bootstrap/utils/decorators.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertComponent = (function () {
    function AlertComponent(_config, changeDetection) {
        var _this = this;
        this.changeDetection = changeDetection;
        /** Alert type.
         * Provides one of four bootstrap supported contextual classes:
         * `success`, `info`, `warning` and `danger`
         */
        this.type = 'warning';
        /** If set, displays an inline "Close" button */
        this.dismissible = false;
        /** Is alert visible */
        this.isOpen = true;
        /** This event fires immediately after close instance method is called,
         * $event is an instance of Alert component.
         */
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** This event fires when alert closed, $event is an instance of Alert component */
        this.onClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.classes = '';
        this.dismissibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        Object.assign(this, _config);
        this.dismissibleChange.subscribe(function (dismissible) {
            _this.classes = _this.dismissible ? 'alert-dismissible' : '';
            _this.changeDetection.markForCheck();
        });
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.dismissOnTimeout) {
            // if dismissOnTimeout used as attr without binding, it will be a string
            setTimeout(function () { return _this.close(); }, parseInt(this.dismissOnTimeout, 10));
        }
    };
    // todo: animation ` If the .fade and .in classes are present on the element,
    // the alert will fade out before it is removed`
    /**
     * Closes an alert by removing it from the DOM.
     */
    AlertComponent.prototype.close = function () {
        if (!this.isOpen) {
            return;
        }
        this.onClose.emit(this);
        this.isOpen = false;
        this.changeDetection.markForCheck();
        this.onClosed.emit(this);
    };
    AlertComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'alert,bs-alert',
                    template: "<ng-template [ngIf]=\"isOpen\"> <div [class]=\"'alert alert-' + type\" role=\"alert\" [ngClass]=\"classes\"> <ng-template [ngIf]=\"dismissible\"> <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\"> <span aria-hidden=\"true\">&times;</span> <span class=\"sr-only\">Close</span> </button> </ng-template> <ng-content></ng-content> </div> </ng-template> ",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
                },] },
    ];
    /** @nocollapse */
    AlertComponent.ctorParameters = function () { return [
        { type: _alert_config__WEBPACK_IMPORTED_MODULE_1__["AlertConfig"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
    ]; };
    AlertComponent.propDecorators = {
        'type': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'dismissible': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'dismissOnTimeout': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'isOpen': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'onClose': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        'onClosed': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    __decorate([
        Object(_utils_decorators__WEBPACK_IMPORTED_MODULE_2__["OnChange"])(),
        __metadata("design:type", Object)
    ], AlertComponent.prototype, "dismissible", void 0);
    return AlertComponent;
}());

//# sourceMappingURL=alert.component.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/alert/alert.config.js":
/*!**********************************************************!*\
  !*** ./node_modules/ngx-bootstrap/alert/alert.config.js ***!
  \**********************************************************/
/*! exports provided: AlertConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertConfig", function() { return AlertConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var AlertConfig = (function () {
    function AlertConfig() {
        /** default alert type */
        this.type = 'warning';
        /** is alerts are dismissible by default */
        this.dismissible = false;
        /** default time before alert will dismiss */
        this.dismissOnTimeout = undefined;
    }
    AlertConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    AlertConfig.ctorParameters = function () { return []; };
    return AlertConfig;
}());

//# sourceMappingURL=alert.config.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/alert/alert.module.js":
/*!**********************************************************!*\
  !*** ./node_modules/ngx-bootstrap/alert/alert.module.js ***!
  \**********************************************************/
/*! exports provided: AlertModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertModule", function() { return AlertModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert.component */ "./node_modules/ngx-bootstrap/alert/alert.component.js");
/* harmony import */ var _alert_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert.config */ "./node_modules/ngx-bootstrap/alert/alert.config.js");




var AlertModule = (function () {
    function AlertModule() {
    }
    AlertModule.forRoot = function () {
        return { ngModule: AlertModule, providers: [_alert_config__WEBPACK_IMPORTED_MODULE_3__["AlertConfig"]] };
    };
    AlertModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
                    declarations: [_alert_component__WEBPACK_IMPORTED_MODULE_2__["AlertComponent"]],
                    exports: [_alert_component__WEBPACK_IMPORTED_MODULE_2__["AlertComponent"]],
                    entryComponents: [_alert_component__WEBPACK_IMPORTED_MODULE_2__["AlertComponent"]]
                },] },
    ];
    /** @nocollapse */
    AlertModule.ctorParameters = function () { return []; };
    return AlertModule;
}());

//# sourceMappingURL=alert.module.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/alert/index.js":
/*!***************************************************!*\
  !*** ./node_modules/ngx-bootstrap/alert/index.js ***!
  \***************************************************/
/*! exports provided: AlertComponent, AlertModule, AlertConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.component */ "./node_modules/ngx-bootstrap/alert/alert.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return _alert_component__WEBPACK_IMPORTED_MODULE_0__["AlertComponent"]; });

/* harmony import */ var _alert_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.module */ "./node_modules/ngx-bootstrap/alert/alert.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertModule", function() { return _alert_module__WEBPACK_IMPORTED_MODULE_1__["AlertModule"]; });

/* harmony import */ var _alert_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert.config */ "./node_modules/ngx-bootstrap/alert/alert.config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertConfig", function() { return _alert_config__WEBPACK_IMPORTED_MODULE_2__["AlertConfig"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/utils/decorators.js":
/*!********************************************************!*\
  !*** ./node_modules/ngx-bootstrap/utils/decorators.js ***!
  \********************************************************/
/*! exports provided: OnChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnChange", function() { return OnChange; });
/*tslint:disable:no-invalid-this */
function OnChange(defaultValue) {
    var sufix = 'Change';
    return function OnChangeHandler(target, propertyKey) {
        var _key = " __" + propertyKey + "Value";
        Object.defineProperty(target, propertyKey, {
            get: function () {
                return this[_key];
            },
            set: function (value) {
                var prevValue = this[_key];
                this[_key] = value;
                if (prevValue !== value && this[propertyKey + sufix]) {
                    this[propertyKey + sufix].emit(value);
                }
            }
        });
    };
}
/* tslint:enable */
//# sourceMappingURL=decorators.js.map

/***/ }),

/***/ "./src/app/views/notifications/alerts.component.html":
/*!***********************************************************!*\
  !*** ./src/app/views/notifications/alerts.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Bootstrap Alerts</strong>\n          <div class=\"card-header-actions\">\n            <a href=\"https://valor-software.com/ngx-bootstrap/#/alerts\" target=\"_blank\">\n              <small className=\"text-muted\">docs</small>\n            </a>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <alert type=\"success\">\n            <strong>Well done!</strong> You successfully read this important alert message.\n          </alert>\n          <alert type=\"info\">\n            <strong>Heads up!</strong> This alert needs your attention, but it's not super important.\n          </alert>\n          <alert type=\"warning\">\n            <strong>Warning!</strong> Better check yourself, you're not looking too good.\n          </alert>\n          <alert type=\"danger\">\n            <strong>Oh snap!</strong> Change a few things up and try submitting again.\n          </alert>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Alerts</strong>\n          <small>link</small>\n        </div>\n        <div class=\"card-body\">\n          <alert type=\"success\">\n            <strong>Well done!</strong> You successfully read <a href=\"#\" class=\"alert-link\">this important alert message</a>.\n          </alert>\n          <alert type=\"info\">\n            <strong>Heads up!</strong> This <a href=\"#\" class=\"alert-link\">alert needs your attention</a>, but it's not super important.\n          </alert>\n          <alert type=\"warning\">\n            <strong>Warning!</strong> Better check yourself, you're <a href=\"#\" class=\"alert-link\">not looking too good</a>.\n          </alert>\n          <alert type=\"danger\">\n            <strong>Oh snap!</strong> <a href=\"#\" class=\"alert-link\">Change a few things up</a> and try submitting again.\n          </alert>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Alerts</strong> <small>additional content</small>\n        </div>\n        <div class=\"card-body\">\n          <alert type=\"success\">\n            <h4 class=\"alert-heading\">Well done!</h4>\n            <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>\n            <p class=\"mb-0\">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>\n          </alert>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Alerts</strong> <small>dismissing</small>\n        </div>\n        <div class=\"card-body\">\n          <div *ngFor=\"let alert of alerts\">\n            <alert [type]=\"alert.type\" [dismissible]=\"dismissible\">{{ alert.msg }}</alert>\n          </div>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"dismissible = !dismissible\">Toggle dismissible</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"reset()\">Reset</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Alerts</strong> <small>dynamic html</small>\n        </div>\n        <div class=\"card-body\">\n          <div *ngFor=\"let alert of alertsHtml\">\n            <alert [type]=\"alert.type\"><span [innerHtml]=\"alert.msg\"></span></alert>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Alerts</strong> <small>dynamic content</small>\n        </div>\n        <div class=\"card-body\">\n          <alert type=\"success\">{{messages[index]}}</alert>\n\n          <div *ngIf=\"index !== messages.length -1; else elseBlock\">\n            <button class=\"btn btn-primary\" (click)=\"changeText()\">Change text</button>\n          </div>\n          <ng-template #elseBlock>\n            <button class=\"btn btn-primary\" (click)=\"index = 0\">Reset</button>\n          </ng-template>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Alerts</strong> <small>dismiss on timeout</small>\n        </div>\n        <div class=\"card-body\">\n          <alert type=\"success\" dismissOnTimeout=\"5000\">\n            <strong>Well done!</strong> You successfully read this important alert message.\n          </alert>\n\n          <p>If you missed alert on top of me, just press <code>Add more</code> button</p>\n          <div *ngFor=\"let alert of alertsDismiss\">\n            <alert [type]=\"alert.type\" [dismissOnTimeout]=\"alert.timeout\">{{ alert.msg }}</alert>\n          </div>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"add()\">Add more</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Alerts</strong> <small>global styling</small>\n        </div>\n        <div class=\"card-body\">\n          <style>\n            .alert-md-color {\n              background-color: #7B1FA2;\n              border-color: #4A148C;\n              color: #fff;\n            }\n          </style>\n          <alert type=\"md-color\">\n            <strong>Well done!</strong> You successfully read this important alert message.\n          </alert>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Alerts</strong> <small>component level styling</small>\n        </div>\n        <div class=\"card-body\">\n          <alert type=\"md-local\">\n            <strong>Well done!</strong> You successfully read this important alert message.\n          </alert>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Alerts</strong> <small>configuring defaults</small>\n        </div>\n        <div class=\"card-body\">\n          <alert>\n            <strong>Well done!</strong> You successfully read this important alert message.\n          </alert>\n          <alert type=\"info\">\n            <strong>Heads up!</strong> This alert needs your attention, but it's not super important.\n          </alert>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/notifications/alerts.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/notifications/alerts.component.ts ***!
  \*********************************************************/
/*! exports provided: getAlertConfig, AlertsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlertConfig", function() { return getAlertConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertsComponent", function() { return AlertsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/alert */ "./node_modules/ngx-bootstrap/alert/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// such override allows to keep some initial values
function getAlertConfig() {
    return Object.assign(new ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_2__["AlertConfig"](), { type: 'success' });
}
var AlertsComponent = /** @class */ (function () {
    function AlertsComponent(sanitizer) {
        this.dismissible = true;
        this.alerts = [
            {
                type: 'success',
                msg: "You successfully read this important alert message."
            },
            {
                type: 'info',
                msg: "This alert needs your attention, but it's not super important."
            },
            {
                type: 'danger',
                msg: "Better check yourself, you're not looking too good."
            }
        ];
        this.alertsHtml = [
            {
                type: 'success',
                msg: "<strong>Well done!</strong> You successfully read this important alert message."
            },
            {
                type: 'info',
                msg: "<strong>Heads up!</strong> This alert needs your attention, but it's not super important."
            },
            {
                type: 'danger',
                msg: "<strong>Warning!</strong> Better check yourself, you're not looking too good."
            }
        ];
        this.index = 0;
        this.messages = [
            'You successfully read this important alert message.',
            'Now this text is different from what it was before. Go ahead and click the button one more time',
            'Well done! Click reset button and you\'ll see the first message'
        ];
        this.alertsDismiss = [];
        this.alertsHtml = this.alertsHtml.map(function (alert) { return ({
            type: alert.type,
            msg: sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].HTML, alert.msg)
        }); });
    }
    AlertsComponent.prototype.reset = function () {
        this.alerts = this.alerts.map(function (alert) { return Object.assign({}, alert); });
    };
    AlertsComponent.prototype.changeText = function () {
        if (this.messages.length - 1 !== this.index) {
            this.index++;
        }
    };
    AlertsComponent.prototype.add = function () {
        this.alertsDismiss.push({
            type: 'info',
            msg: "This alert will be closed in 5 seconds (added: " + new Date().toLocaleTimeString() + ")",
            timeout: 5000
        });
    };
    AlertsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./alerts.component.html */ "./src/app/views/notifications/alerts.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [
                "\n  .alert-md-local {\n    background-color: #009688;\n    border-color: #00695C;\n    color: #fff;\n  }\n  "
            ],
            providers: [{ provide: ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_2__["AlertConfig"], useFactory: getAlertConfig }]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], AlertsComponent);
    return AlertsComponent;
}());



/***/ }),

/***/ "./src/app/views/notifications/badges.component.html":
/*!***********************************************************!*\
  !*** ./src/app/views/notifications/badges.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-lg-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Bootstrap Badges\n          <div class=\"card-header-actions\">\n            <a href=\"http://coreui.io/docs/components/bootstrap-badge/\" class=\"card-header-action\" target=\"_blank\">\n              <small class=\"text-muted\">docs</small>\n            </a>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <h1>Example heading\n            <span class=\"badge badge-secondary\">New</span>\n          </h1>\n          <h2>Example heading\n            <span class=\"badge badge-secondary\">New</span>\n          </h2>\n          <h3>Example heading\n            <span class=\"badge badge-secondary\">New</span>\n          </h3>\n          <h4>Example heading\n            <span class=\"badge badge-secondary\">New</span>\n          </h4>\n          <h5>Example heading\n            <span class=\"badge badge-secondary\">New</span>\n          </h5>\n          <h6>Example heading\n            <span class=\"badge badge-secondary\">New</span>\n          </h6>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"link\" class=\"btn btn-primary\">Notifications\n            <span class=\"badge badge-light badge-pill\" style=\"position: static;\">9</span>\n          </button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Bootstrap Badges\n          <small>contextual variations</small>\n        </div>\n        <div class=\"card-body\">\n          <span class=\"badge badge-primary\">Primary</span>\n          <span class=\"badge badge-secondary\">Secondary</span>\n          <span class=\"badge badge-success\">Success</span>\n          <span class=\"badge badge-danger\">Danger</span>\n          <span class=\"badge badge-warning\">Warning</span>\n          <span class=\"badge badge-info\">Info</span>\n          <span class=\"badge badge-light\">Light</span>\n          <span class=\"badge badge-dark\">Dark</span>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Bootstrap Badges\n          <small>pill badges</small>\n        </div>\n        <div class=\"card-body\">\n          <span class=\"badge badge-pill badge-primary\">Primary</span>\n          <span class=\"badge badge-pill badge-secondary\">Secondary</span>\n          <span class=\"badge badge-pill badge-success\">Success</span>\n          <span class=\"badge badge-pill badge-danger\">Danger</span>\n          <span class=\"badge badge-pill badge-warning\">Warning</span>\n          <span class=\"badge badge-pill badge-info\">Info</span>\n          <span class=\"badge badge-pill badge-light\">Light</span>\n          <span class=\"badge badge-pill badge-dark\">Dark</span>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Bootstrap Badges\n          <small>links</small>\n        </div>\n        <div class=\"card-body\">\n          <a href=\"#\" class=\"badge badge-primary\">Primary</a>\n          <a href=\"#\" class=\"badge badge-secondary\">Secondary</a>\n          <a href=\"#\" class=\"badge badge-success\">Success</a>\n          <a href=\"#\" class=\"badge badge-danger\">Danger</a>\n          <a href=\"#\" class=\"badge badge-warning\">Warning</a>\n          <a href=\"#\" class=\"badge badge-info\">Info</a>\n          <a href=\"#\" class=\"badge badge-light\">Light</a>\n          <a href=\"#\" class=\"badge badge-dark\">Dark</a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!--/.row-->\n</div>\n"

/***/ }),

/***/ "./src/app/views/notifications/badges.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/notifications/badges.component.ts ***!
  \*********************************************************/
/*! exports provided: BadgesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgesComponent", function() { return BadgesComponent; });
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

var BadgesComponent = /** @class */ (function () {
    function BadgesComponent() {
    }
    BadgesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./badges.component.html */ "./src/app/views/notifications/badges.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], BadgesComponent);
    return BadgesComponent;
}());



/***/ }),

/***/ "./src/app/views/notifications/modals.component.html":
/*!***********************************************************!*\
  !*** ./src/app/views/notifications/modals.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Bootstrap Modals\n        </div>\n        <div class=\"card-body\">\n          <!-- Button trigger modal -->\n          <button type=\"button\" class=\"btn btn-secondary\" data-toggle=\"modal\" (click)=\"myModal.show()\">\n            Launch demo modal\n          </button>\n          <button type=\"button\" class=\"btn btn-secondary\" data-toggle=\"modal\" (click)=\"largeModal.show()\">\n            Launch large modal\n          </button>\n          <button type=\"button\" class=\"btn btn-secondary\" data-toggle=\"modal\" (click)=\"smallModal.show()\">\n            Launch small modal\n          </button>\n          <hr>\n          <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" (click)=\"primaryModal.show()\">\n            Primary modal\n          </button>\n          <button type=\"button\" class=\"btn btn-success\" data-toggle=\"modal\" (click)=\"successModal.show()\">\n            Success modal\n          </button>\n          <button type=\"button\" class=\"btn btn-warning\" data-toggle=\"modal\" (click)=\"warningModal.show()\">\n            Warning modal\n          </button>\n          <button type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" (click)=\"dangerModal.show()\">\n            Danger modal\n          </button>\n          <button type=\"button\" class=\"btn btn-info\" data-toggle=\"modal\" (click)=\"infoModal.show()\">\n            Info modal\n          </button>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n</div>\n\n<div bsModal #myModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Modal title</h4>\n        <button type=\"button\" class=\"close\" (click)=\"myModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>One fine body&hellip;</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"myModal.hide()\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n\n<div bsModal #largeModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Modal title</h4>\n        <button type=\"button\" class=\"close\" (click)=\"largeModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>One fine body&hellip;</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"largeModal.hide()\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n\n<div bsModal #smallModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Modal title</h4>\n        <button type=\"button\" class=\"close\" (click)=\"smallModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>One fine body&hellip;</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"smallModal.hide()\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n\n\n<div bsModal #primaryModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-primary\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Modal title</h4>\n        <button type=\"button\" class=\"close\" (click)=\"primaryModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>One fine body&hellip;</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"primaryModal.hide()\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n\n\n<div bsModal #successModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-success\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Modal title</h4>\n        <button type=\"button\" class=\"close\" (click)=\"successModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>One fine body&hellip;</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"successModal.hide()\">Close</button>\n        <button type=\"button\" class=\"btn btn-success\">Save changes</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n\n\n<div bsModal #warningModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-warning\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Modal title</h4>\n        <button type=\"button\" class=\"close\" (click)=\"warningModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>One fine body&hellip;</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"warningModal.hide()\">Close</button>\n        <button type=\"button\" class=\"btn btn-warning\">Save changes</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n\n<div bsModal #dangerModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-danger\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Modal title</h4>\n        <button type=\"button\" class=\"close\" (click)=\"dangerModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>One fine body&hellip;</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"dangerModal.hide()\">Close</button>\n        <button type=\"button\" class=\"btn btn-danger\">Save changes</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n\n<div bsModal #infoModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-info\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Modal title</h4>\n        <button type=\"button\" class=\"close\" (click)=\"infoModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>One fine body&hellip;</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"infoModal.hide()\">Close</button>\n        <button type=\"button\" class=\"btn btn-info\">Save changes</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n"

/***/ }),

/***/ "./src/app/views/notifications/modals.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/notifications/modals.component.ts ***!
  \*********************************************************/
/*! exports provided: ModalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalsComponent", function() { return ModalsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ModalsComponent = /** @class */ (function () {
    function ModalsComponent() {
    }
    ModalsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./modals.component.html */ "./src/app/views/notifications/modals.component.html")
        })
    ], ModalsComponent);
    return ModalsComponent;
}());



/***/ }),

/***/ "./src/app/views/notifications/notifications-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/notifications/notifications-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: NotificationsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsRoutingModule", function() { return NotificationsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _alerts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alerts.component */ "./src/app/views/notifications/alerts.component.ts");
/* harmony import */ var _badges_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./badges.component */ "./src/app/views/notifications/badges.component.ts");
/* harmony import */ var _modals_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modals.component */ "./src/app/views/notifications/modals.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        data: {
            title: 'Notifications'
        },
        children: [
            {
                path: 'alerts',
                component: _alerts_component__WEBPACK_IMPORTED_MODULE_2__["AlertsComponent"],
                data: {
                    title: 'Alerts'
                }
            },
            {
                path: 'badges',
                component: _badges_component__WEBPACK_IMPORTED_MODULE_3__["BadgesComponent"],
                data: {
                    title: 'Badges'
                }
            },
            {
                path: 'modals',
                component: _modals_component__WEBPACK_IMPORTED_MODULE_4__["ModalsComponent"],
                data: {
                    title: 'Modals'
                }
            }
        ]
    }
];
var NotificationsRoutingModule = /** @class */ (function () {
    function NotificationsRoutingModule() {
    }
    NotificationsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], NotificationsRoutingModule);
    return NotificationsRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/notifications/notifications.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/notifications/notifications.module.ts ***!
  \*************************************************************/
/*! exports provided: NotificationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsModule", function() { return NotificationsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/alert */ "./node_modules/ngx-bootstrap/alert/index.js");
/* harmony import */ var _alerts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alerts.component */ "./src/app/views/notifications/alerts.component.ts");
/* harmony import */ var _badges_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./badges.component */ "./src/app/views/notifications/badges.component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _modals_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modals.component */ "./src/app/views/notifications/modals.component.ts");
/* harmony import */ var _notifications_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./notifications-routing.module */ "./src/app/views/notifications/notifications-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Angular


// Alert Component



// Modal Component


// Notifications Routing

var NotificationsModule = /** @class */ (function () {
    function NotificationsModule() {
    }
    NotificationsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _notifications_routing_module__WEBPACK_IMPORTED_MODULE_7__["NotificationsRoutingModule"],
                ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_2__["AlertModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot()
            ],
            declarations: [
                _alerts_component__WEBPACK_IMPORTED_MODULE_3__["AlertsComponent"],
                _badges_component__WEBPACK_IMPORTED_MODULE_4__["BadgesComponent"],
                _modals_component__WEBPACK_IMPORTED_MODULE_6__["ModalsComponent"]
            ]
        })
    ], NotificationsModule);
    return NotificationsModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-notifications-notifications-module.js.map