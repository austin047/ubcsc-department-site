(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-people-resources-people-resources-module"],{

/***/ "./src/app/views/people-resources/people-resources-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/views/people-resources/people-resources-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: PeopleResourcesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleResourcesRoutingModule", function() { return PeopleResourcesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _people_resources_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./people-resources.component */ "./src/app/views/people-resources/people-resources.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _people_resources_component__WEBPACK_IMPORTED_MODULE_2__["PeopleResourcesComponent"],
        data: {
            title: 'People-Resources'
        }
    }
];
var PeopleResourcesRoutingModule = /** @class */ (function () {
    function PeopleResourcesRoutingModule() {
    }
    PeopleResourcesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PeopleResourcesRoutingModule);
    return PeopleResourcesRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/people-resources/people-resources.component.html":
/*!************************************************************************!*\
  !*** ./src/app/views/people-resources/people-resources.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n  <head>\n      <title> University of Buea | Department of Computer Science </title>\n  </head>\n  <body>\n        <div class=\"container-fluid ubcsc-navbar\">\n            <div class=\"row\">\n                <div class=\"col-sm-10 align-content-sl-start\" style=\"color:white\">\n                    <h1><span class=\"lead\">University of Buea</span><br>Department of Computer Science</h1>\n                </div>\n                <div class=\"col-sm-2 align-content-sl-end form-group\">\n                    <input type=\"text\" class=\"form-control ubcsc-searchinput\">          \n                </div>\n            </div>\n        </div>\n        <div class=\"container-fluid\">\n            <ul class=\"nav nav-tabs row list-inline\">\n                <li class=\"active\"><a href=\"#\">Home</a></li>\n                <li><a routerLink = \"home-page\">People and Resources</a></li>\n                <li><a routerLink = \"home-page\" href=\"#\">Projects and Inovation</a></li>\n                <li><a routerLink = \"home-page\">News and Events</a></li>\n                <li><a routerLink = \"home-page\">Campus</a></li>\n                <li><a routerLink = \"home-page\">About</a></li>\n                <li><a routerLink = \"home-page\">Alumi</a></li>\n                <li><a routerLink = \"login-page\">Login</a></li>\n            </ul>\n        </div>\n        <div class=\"ubcsc-billboard container-fluid\">\n            <!-- <div class=\"ubcsc-hodmessage row center-block text-center\">Hello World H.O.D Message</div> -->\n        </div>\n        <div class=\"ubcsc-about container-fluid\">\n            <p class=\"row text-capitalize text-center jumbotron\" style=\"padding: 5px; margin: 10%; margin-top: 2%; margin-bottom: 0%\">\n            Lorem ipsum dolor sit amet consectetur adipiscing elit himenaeos, aenean massa habitant magna donec per nibh ante, tortor laoreet metus quis arcu vestibulum ornare. Lectus sagittis quam sociis orci ridiculus rutrum mi ultrices, fusce class inceptos erat fermentum quisque blandit laoreet ultricies, pretium ornare montes purus nunc diam senectus. Fames bibendum potenti cubilia magna condimentum ridiculus molestie cum, cursus nisi nullam torquent pharetra venenatis feugiat turpis nam, at tempor et pellentesque maecenas tincidunt erat.\n            </p>\n        </div>\n        <div class=\"ubcsc-studies container-fluid\">\n            <div class=\"ubcsc-studiesimage row img-circle\" style=\"max-height: 50px; max-width: 50px\">\n                <img style=\"background-color: rgb(43, 2, 43)\" class=\"img-responsive img-circle\"> <h4>Studies</h4>\n            </div>\n            <div class=\"row\">\n                <div class=\"ubcsc-studiesarticle col-sm-3 container align-content-start\">\n                    <div class=\"row\" style=\"height: 200px; width: 400px\">\n                        <img  class=\"img-responsive\">\n                    </div>\n                    <div class=\"row\" style=\"max-height: 40%; background-color: white\">\n                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit himenaeos, aenean massa habitant magna donec per nibh ante, tortor laoreet metus quis arcu vestibulum ornare.</p>\n                    </div>\n                </div>\n                <div class=\"ubcsc-studiesarticle col-sm-3 align-content-between\">\n                        <div class=\"row\" style=\"height: 200px; width: 400px\">\n                                <img  class=\"img-responsive\">\n                            </div>\n                            <div class=\"row\" style=\"max-height: 40%; background-color: white\">\n                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit himenaeos, aenean massa habitant magna donec per nibh ante, tortor laoreet metus quis arcu vestibulum ornare.</p>\n                            </div>\n                </div>\n                <div class=\"ubcsc-studiesarticle col-sm-3 align-items-end\">\n                        <div class=\"row\" style=\"height: 200px; width: 400px\">\n                                <img  class=\"img-responsive\">\n                            </div>\n                            <div class=\"row\" style=\"max-height: 40%; background-color: white\">\n                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit himenaeos, aenean massa habitant magna donec per nibh ante, tortor laoreet metus quis arcu vestibulum ornare.</p>\n                            </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"ubcsc-activities container-fluid\">\n            <div class=\"ubcsc-studiesimage row img-circle\" style=\"max-height: 50px; max-width: 50px\">\n                <img style=\"background-color: rgb(43, 2, 43)\" class=\"img-responsive img-circle\"> <h4>Activities</h4>\n            </div>\n            <div class=\"row\">\n                <div class=\"ubcsc-ativitiesarticle col-sm-3 align-content-start\">\n                        <div class=\"row\" style=\"height: 200px; width: 400px\">\n                                <img class=\"img-responsive\">\n                            </div>\n                            <div class=\"row\" style=\"max-height: 40%; background-color: white\">\n                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit himenaeos, aenean massa habitant magna donec per nibh ante, tortor laoreet metus quis arcu vestibulum ornare.</p>\n                            </div>\n                </div>\n                <div class=\"ubcsc-ativitiesarticle col-sm-3 align-content-between\">\n                        <div class=\"row\" style=\"height: 200px; width: 400px\">\n                                <img  class=\"img-responsive\">\n                            </div>\n                            <div class=\"row\" style=\"max-height: 40%; background-color: white\">\n                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit himenaeos, aenean massa habitant magna donec per nibh ante, tortor laoreet metus quis arcu vestibulum ornare.</p>\n                            </div>\n                </div>\n                <div class=\"ubcsc-ativitiesarticle col-sm-3 align-items-end\">\n                        <div class=\"row\" style=\"height: 200px; width: 400px\">\n                                <img  class=\"img-responsive\">\n                            </div>\n                            <div class=\"row\" style=\"max-height: 40%; background-color: white\">\n                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit himenaeos, aenean massa habitant magna donec per nibh ante, tortor laoreet metus quis arcu vestibulum ornare.</p>\n                            </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"ubcsc-affiliate container-fluid\">\n        </div>\n        <div class=\"ubcsc-footer container-fluid\">\n        </div>\n  </body>\n</html>\n"

/***/ }),

/***/ "./src/app/views/people-resources/people-resources.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/views/people-resources/people-resources.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ubcsc-navbar {\n  background-color: #2b022b; }\n\n.ubcsc-searchinput {\n  font-weight: lighter;\n  -webkit-text-decoration-color: #2b022b;\n          text-decoration-color: #2b022b;\n  -ms-grid-row-align: center;\n      align-self: center;\n  margin: auto;\n  margin-top: 50px; }\n\na {\n  color: #2b022b;\n  font-weight: lighter; }\n\n.ubcsc-billboard {\n  height: 300px;\n  /* background-image: url(\"../../assets/img/map_of_computer_science.jpeg\"); */\n  background-position: center;\n  border: solid;\n  border-width: 1px;\n  border-color: #2b022b;\n  border-image-repeat: none; }\n\n.ubcsc-hodmessage {\n  color: inherit; }\n\n.ubcsc-studiesarticle {\n  height: 300px;\n  border: solid;\n  border-width: 1px;\n  border-color: #2b022b;\n  background-color: #2b022b;\n  margin: 4%; }\n\n.ubcsc-ativitiesarticle {\n  height: 300px;\n  border: solid;\n  border-width: 1px;\n  border-color: #2b022b;\n  background-color: #2b022b;\n  margin: 4%; }\n\n.ubcsc-footer {\n  height: 500px;\n  background-position: center;\n  border: solid;\n  border-width: 1px;\n  border-color: #2b022b;\n  background-color: #2b022b; }\n\nimg {\n  max-width: 100%;\n  max-height: 100%; }\n"

/***/ }),

/***/ "./src/app/views/people-resources/people-resources.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/people-resources/people-resources.component.ts ***!
  \**********************************************************************/
/*! exports provided: PeopleResourcesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleResourcesComponent", function() { return PeopleResourcesComponent; });
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

var PeopleResourcesComponent = /** @class */ (function () {
    function PeopleResourcesComponent() {
    }
    PeopleResourcesComponent.prototype.ngOnInit = function () {
    };
    PeopleResourcesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-people-resources',
            template: __webpack_require__(/*! ./people-resources.component.html */ "./src/app/views/people-resources/people-resources.component.html"),
            styles: [__webpack_require__(/*! ./people-resources.component.scss */ "./src/app/views/people-resources/people-resources.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PeopleResourcesComponent);
    return PeopleResourcesComponent;
}());



/***/ }),

/***/ "./src/app/views/people-resources/people-resources.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/people-resources/people-resources.module.ts ***!
  \*******************************************************************/
/*! exports provided: PeopleResourcesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleResourcesModule", function() { return PeopleResourcesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _people_resources_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./people-resources.component */ "./src/app/views/people-resources/people-resources.component.ts");
/* harmony import */ var _people_resources_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./people-resources-routing.module */ "./src/app/views/people-resources/people-resources-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PeopleResourcesModule = /** @class */ (function () {
    function PeopleResourcesModule() {
    }
    PeopleResourcesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _people_resources_routing_module__WEBPACK_IMPORTED_MODULE_3__["PeopleResourcesRoutingModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["ModalModule"].forRoot()
            ],
            declarations: [_people_resources_component__WEBPACK_IMPORTED_MODULE_2__["PeopleResourcesComponent"]]
        })
    ], PeopleResourcesModule);
    return PeopleResourcesModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-people-resources-people-resources-module.js.map