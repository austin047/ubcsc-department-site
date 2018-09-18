(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-base-base-module"],{

/***/ "./node_modules/ngx-bootstrap/collapse/collapse.directive.js":
/*!*******************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/collapse/collapse.directive.js ***!
  \*******************************************************************/
/*! exports provided: CollapseDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapseDirective", function() { return CollapseDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
// todo: add animations when https://github.com/angular/angular/issues/9947 solved

var CollapseDirective = (function () {
    function CollapseDirective(_el, _renderer) {
        this._el = _el;
        this._renderer = _renderer;
        /** This event fires as soon as content collapses */
        this.collapsed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** This event fires as soon as content becomes visible */
        this.expanded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // shown
        this.isExpanded = true;
        // hidden
        this.isCollapsed = false;
        // stale state
        this.isCollapse = true;
        // animation state
        this.isCollapsing = false;
    }
    Object.defineProperty(CollapseDirective.prototype, "collapse", {
        get: function () {
            return this.isExpanded;
        },
        /** A flag indicating visibility of content (shown or hidden) */
        set: function (value) {
            this.isExpanded = value;
            this.toggle();
        },
        enumerable: true,
        configurable: true
    });
    /** allows to manually toggle content visibility */
    CollapseDirective.prototype.toggle = function () {
        if (this.isExpanded) {
            this.hide();
        }
        else {
            this.show();
        }
    };
    /** allows to manually hide content */
    CollapseDirective.prototype.hide = function () {
        this.isCollapse = false;
        this.isCollapsing = true;
        this.isExpanded = false;
        this.isCollapsed = true;
        this.isCollapse = true;
        this.isCollapsing = false;
        this.display = 'none';
        this.collapsed.emit(this);
    };
    /** allows to manually show collapsed content */
    CollapseDirective.prototype.show = function () {
        this.isCollapse = false;
        this.isCollapsing = true;
        this.isExpanded = true;
        this.isCollapsed = false;
        this.display = 'block';
        // this.height = 'auto';
        this.isCollapse = true;
        this.isCollapsing = false;
        this._renderer.setStyle(this._el.nativeElement, 'overflow', 'visible');
        this._renderer.setStyle(this._el.nativeElement, 'height', 'auto');
        this.expanded.emit(this);
    };
    CollapseDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[collapse]',
                    exportAs: 'bs-collapse',
                    host: {
                        '[class.collapse]': 'true'
                    }
                },] },
    ];
    /** @nocollapse */
    CollapseDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    ]; };
    CollapseDirective.propDecorators = {
        'collapsed': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        'expanded': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        'display': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.display',] },],
        'isExpanded': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.in',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.show',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.aria-expanded',] },],
        'isCollapsed': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.aria-hidden',] },],
        'isCollapse': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.collapse',] },],
        'isCollapsing': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.collapsing',] },],
        'collapse': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return CollapseDirective;
}());

//# sourceMappingURL=collapse.directive.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/collapse/collapse.module.js":
/*!****************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/collapse/collapse.module.js ***!
  \****************************************************************/
/*! exports provided: CollapseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapseModule", function() { return CollapseModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _collapse_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collapse.directive */ "./node_modules/ngx-bootstrap/collapse/collapse.directive.js");


var CollapseModule = (function () {
    function CollapseModule() {
    }
    CollapseModule.forRoot = function () {
        return { ngModule: CollapseModule, providers: [] };
    };
    CollapseModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [_collapse_directive__WEBPACK_IMPORTED_MODULE_1__["CollapseDirective"]],
                    exports: [_collapse_directive__WEBPACK_IMPORTED_MODULE_1__["CollapseDirective"]]
                },] },
    ];
    /** @nocollapse */
    CollapseModule.ctorParameters = function () { return []; };
    return CollapseModule;
}());

//# sourceMappingURL=collapse.module.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/collapse/index.js":
/*!******************************************************!*\
  !*** ./node_modules/ngx-bootstrap/collapse/index.js ***!
  \******************************************************/
/*! exports provided: CollapseDirective, CollapseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _collapse_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collapse.directive */ "./node_modules/ngx-bootstrap/collapse/collapse.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollapseDirective", function() { return _collapse_directive__WEBPACK_IMPORTED_MODULE_0__["CollapseDirective"]; });

/* harmony import */ var _collapse_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collapse.module */ "./node_modules/ngx-bootstrap/collapse/collapse.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollapseModule", function() { return _collapse_module__WEBPACK_IMPORTED_MODULE_1__["CollapseModule"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/pagination/index.js":
/*!********************************************************!*\
  !*** ./node_modules/ngx-bootstrap/pagination/index.js ***!
  \********************************************************/
/*! exports provided: PagerComponent, PaginationComponent, PaginationModule, PaginationConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pager_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pager.component */ "./node_modules/ngx-bootstrap/pagination/pager.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PagerComponent", function() { return _pager_component__WEBPACK_IMPORTED_MODULE_0__["PagerComponent"]; });

/* harmony import */ var _pagination_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagination.component */ "./node_modules/ngx-bootstrap/pagination/pagination.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return _pagination_component__WEBPACK_IMPORTED_MODULE_1__["PaginationComponent"]; });

/* harmony import */ var _pagination_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagination.module */ "./node_modules/ngx-bootstrap/pagination/pagination.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaginationModule", function() { return _pagination_module__WEBPACK_IMPORTED_MODULE_2__["PaginationModule"]; });

/* harmony import */ var _pagination_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pagination.config */ "./node_modules/ngx-bootstrap/pagination/pagination.config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaginationConfig", function() { return _pagination_config__WEBPACK_IMPORTED_MODULE_3__["PaginationConfig"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/pagination/pager.component.js":
/*!******************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/pagination/pager.component.js ***!
  \******************************************************************/
/*! exports provided: PAGER_CONTROL_VALUE_ACCESSOR, PagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGER_CONTROL_VALUE_ACCESSOR", function() { return PAGER_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagerComponent", function() { return PagerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pagination_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagination.config */ "./node_modules/ngx-bootstrap/pagination/pagination.config.js");



var PAGER_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    // tslint:disable-next-line
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return PagerComponent; }),
    multi: true
};
var PagerComponent = (function () {
    function PagerComponent(renderer, elementRef, paginationConfig, changeDetection) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.changeDetection = changeDetection;
        /** fired when total pages count changes, $event:number equals to total pages count */
        this.numPages = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** fired when page was changed, $event:{page, itemsPerPage} equals to
         * object with current page index and number of items per page
         */
        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.inited = false;
        this._page = 1;
        this.renderer = renderer;
        this.elementRef = elementRef;
        if (!this.config) {
            this.configureOptions(Object.assign({}, paginationConfig.main, paginationConfig.pager));
        }
    }
    Object.defineProperty(PagerComponent.prototype, "itemsPerPage", {
        /** maximum number of items per page. If value less than 1 will display all items on one page */
        get: function () {
            return this._itemsPerPage;
        },
        set: function (v) {
            this._itemsPerPage = v;
            this.totalPages = this.calculateTotalPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "totalItems", {
        /** total number of items in all pages */
        get: function () {
            return this._totalItems;
        },
        set: function (v) {
            this._totalItems = v;
            this.totalPages = this.calculateTotalPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "totalPages", {
        get: function () {
            return this._totalPages;
        },
        set: function (v) {
            this._totalPages = v;
            this.numPages.emit(v);
            if (this.inited) {
                this.selectPage(this.page);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "page", {
        get: function () {
            return this._page;
        },
        set: function (value) {
            var _previous = this._page;
            this._page = value > this.totalPages ? this.totalPages : value || 1;
            this.changeDetection.markForCheck();
            if (_previous === this._page || typeof _previous === 'undefined') {
                return;
            }
            this.pageChanged.emit({
                page: this._page,
                itemsPerPage: this.itemsPerPage
            });
        },
        enumerable: true,
        configurable: true
    });
    PagerComponent.prototype.configureOptions = function (config) {
        this.config = Object.assign({}, config);
    };
    PagerComponent.prototype.ngOnInit = function () {
        if (typeof window !== 'undefined') {
            this.classMap = this.elementRef.nativeElement.getAttribute('class') || '';
        }
        // watch for maxSize
        this.maxSize =
            typeof this.maxSize !== 'undefined' ? this.maxSize : this.config.maxSize;
        this.rotate =
            typeof this.rotate !== 'undefined' ? this.rotate : this.config.rotate;
        this.boundaryLinks =
            typeof this.boundaryLinks !== 'undefined'
                ? this.boundaryLinks
                : this.config.boundaryLinks;
        this.directionLinks =
            typeof this.directionLinks !== 'undefined'
                ? this.directionLinks
                : this.config.directionLinks;
        this.pageBtnClass =
            typeof this.pageBtnClass !== 'undefined'
                ? this.pageBtnClass
                : this.config.pageBtnClass;
        // base class
        this.itemsPerPage =
            typeof this.itemsPerPage !== 'undefined'
                ? this.itemsPerPage
                : this.config.itemsPerPage;
        this.totalPages = this.calculateTotalPages();
        // this class
        this.pages = this.getPages(this.page, this.totalPages);
        this.inited = true;
    };
    PagerComponent.prototype.writeValue = function (value) {
        this.page = value;
        this.pages = this.getPages(this.page, this.totalPages);
    };
    PagerComponent.prototype.getText = function (key) {
        return this[key + "Text"] || this.config[key + "Text"];
    };
    PagerComponent.prototype.noPrevious = function () {
        return this.page === 1;
    };
    PagerComponent.prototype.noNext = function () {
        return this.page === this.totalPages;
    };
    PagerComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    PagerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    PagerComponent.prototype.selectPage = function (page, event) {
        if (event) {
            event.preventDefault();
        }
        if (!this.disabled) {
            if (event && event.target) {
                var target = event.target;
                target.blur();
            }
            this.writeValue(page);
            this.onChange(this.page);
        }
    };
    // Create page object used in template
    PagerComponent.prototype.makePage = function (num, text, active) {
        return { text: text, number: num, active: active };
    };
    PagerComponent.prototype.getPages = function (currentPage, totalPages) {
        var pages = [];
        // Default page limits
        var startPage = 1;
        var endPage = totalPages;
        var isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages;
        // recompute if maxSize
        if (isMaxSized) {
            if (this.rotate) {
                // Current page is displayed in the middle of the visible ones
                startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
                endPage = startPage + this.maxSize - 1;
                // Adjust if limit is exceeded
                if (endPage > totalPages) {
                    endPage = totalPages;
                    startPage = endPage - this.maxSize + 1;
                }
            }
            else {
                // Visible pages are paginated with maxSize
                startPage =
                    (Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize + 1;
                // Adjust last page if limit is exceeded
                endPage = Math.min(startPage + this.maxSize - 1, totalPages);
            }
        }
        // Add page number links
        for (var num = startPage; num <= endPage; num++) {
            var page = this.makePage(num, num.toString(), num === currentPage);
            pages.push(page);
        }
        // Add links to move between page sets
        if (isMaxSized && !this.rotate) {
            if (startPage > 1) {
                var previousPageSet = this.makePage(startPage - 1, '...', false);
                pages.unshift(previousPageSet);
            }
            if (endPage < totalPages) {
                var nextPageSet = this.makePage(endPage + 1, '...', false);
                pages.push(nextPageSet);
            }
        }
        return pages;
    };
    // base class
    PagerComponent.prototype.calculateTotalPages = function () {
        var totalPages = this.itemsPerPage < 1
            ? 1
            : Math.ceil(this.totalItems / this.itemsPerPage);
        return Math.max(totalPages || 0, 1);
    };
    PagerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'pager',
                    template: "<ul class=\"pager\"> <li [class.disabled]=\"noPrevious()\" [class.previous]=\"align\" [ngClass]=\"{'pull-right': align, 'float-right': align}\" class=\"{{ pageBtnClass }}\"> <a href (click)=\"selectPage(page - 1, $event)\">{{ getText('previous') }}</a> </li> <li [class.disabled]=\"noNext()\" [class.next]=\"align\" [ngClass]=\"{'pull-right': align, 'float-right': align}\" class=\"{{ pageBtnClass }}\"> <a href (click)=\"selectPage(page + 1, $event)\">{{ getText('next') }}</a> </li> </ul> ",
                    providers: [PAGER_CONTROL_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    PagerComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _pagination_config__WEBPACK_IMPORTED_MODULE_2__["PaginationConfig"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
    ]; };
    PagerComponent.propDecorators = {
        'align': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'maxSize': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'boundaryLinks': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'directionLinks': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'firstText': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'previousText': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'nextText': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'lastText': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'rotate': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'pageBtnClass': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'disabled': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'numPages': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        'pageChanged': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        'itemsPerPage': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'totalItems': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return PagerComponent;
}());

//# sourceMappingURL=pager.component.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/pagination/pagination.component.js":
/*!***********************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/pagination/pagination.component.js ***!
  \***********************************************************************/
/*! exports provided: PAGINATION_CONTROL_VALUE_ACCESSOR, PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGINATION_CONTROL_VALUE_ACCESSOR", function() { return PAGINATION_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pagination_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagination.config */ "./node_modules/ngx-bootstrap/pagination/pagination.config.js");



var PAGINATION_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    // tslint:disable-next-line
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return PaginationComponent; }),
    multi: true
};
var PaginationComponent = (function () {
    function PaginationComponent(renderer, elementRef, paginationConfig, changeDetection) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.changeDetection = changeDetection;
        /** fired when total pages count changes, $event:number equals to total pages count */
        this.numPages = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** fired when page was changed, $event:{page, itemsPerPage} equals to object
         * with current page index and number of items per page
         */
        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.inited = false;
        this._page = 1;
        this.renderer = renderer;
        this.elementRef = elementRef;
        if (!this.config) {
            this.configureOptions(paginationConfig.main);
        }
    }
    Object.defineProperty(PaginationComponent.prototype, "itemsPerPage", {
        /** maximum number of items per page. If value less than 1 will display all items on one page */
        get: function () {
            return this._itemsPerPage;
        },
        set: function (v) {
            this._itemsPerPage = v;
            this.totalPages = this.calculateTotalPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "totalItems", {
        /** total number of items in all pages */
        get: function () {
            return this._totalItems;
        },
        set: function (v) {
            this._totalItems = v;
            this.totalPages = this.calculateTotalPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "totalPages", {
        get: function () {
            return this._totalPages;
        },
        set: function (v) {
            this._totalPages = v;
            this.numPages.emit(v);
            if (this.inited) {
                this.selectPage(this.page);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "page", {
        get: function () {
            return this._page;
        },
        set: function (value) {
            var _previous = this._page;
            this._page = value > this.totalPages ? this.totalPages : value || 1;
            this.changeDetection.markForCheck();
            if (_previous === this._page || typeof _previous === 'undefined') {
                return;
            }
            this.pageChanged.emit({
                page: this._page,
                itemsPerPage: this.itemsPerPage
            });
        },
        enumerable: true,
        configurable: true
    });
    PaginationComponent.prototype.configureOptions = function (config) {
        this.config = Object.assign({}, config);
    };
    PaginationComponent.prototype.ngOnInit = function () {
        if (typeof window !== 'undefined') {
            this.classMap = this.elementRef.nativeElement.getAttribute('class') || '';
        }
        // watch for maxSize
        this.maxSize =
            typeof this.maxSize !== 'undefined' ? this.maxSize : this.config.maxSize;
        this.rotate =
            typeof this.rotate !== 'undefined' ? this.rotate : this.config.rotate;
        this.boundaryLinks =
            typeof this.boundaryLinks !== 'undefined'
                ? this.boundaryLinks
                : this.config.boundaryLinks;
        this.directionLinks =
            typeof this.directionLinks !== 'undefined'
                ? this.directionLinks
                : this.config.directionLinks;
        this.pageBtnClass =
            typeof this.pageBtnClass !== 'undefined'
                ? this.pageBtnClass
                : this.config.pageBtnClass;
        // base class
        this.itemsPerPage =
            typeof this.itemsPerPage !== 'undefined'
                ? this.itemsPerPage
                : this.config.itemsPerPage;
        this.totalPages = this.calculateTotalPages();
        // this class
        this.pages = this.getPages(this.page, this.totalPages);
        this.inited = true;
    };
    PaginationComponent.prototype.writeValue = function (value) {
        this.page = value;
        this.pages = this.getPages(this.page, this.totalPages);
    };
    PaginationComponent.prototype.getText = function (key) {
        return this[key + "Text"] || this.config[key + "Text"];
    };
    PaginationComponent.prototype.noPrevious = function () {
        return this.page === 1;
    };
    PaginationComponent.prototype.noNext = function () {
        return this.page === this.totalPages;
    };
    PaginationComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    PaginationComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    PaginationComponent.prototype.selectPage = function (page, event) {
        if (event) {
            event.preventDefault();
        }
        if (!this.disabled) {
            if (event && event.target) {
                var target = event.target;
                target.blur();
            }
            this.writeValue(page);
            this.onChange(this.page);
        }
    };
    // Create page object used in template
    PaginationComponent.prototype.makePage = function (num, text, active) {
        return { text: text, number: num, active: active };
    };
    PaginationComponent.prototype.getPages = function (currentPage, totalPages) {
        var pages = [];
        // Default page limits
        var startPage = 1;
        var endPage = totalPages;
        var isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages;
        // recompute if maxSize
        if (isMaxSized) {
            if (this.rotate) {
                // Current page is displayed in the middle of the visible ones
                startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
                endPage = startPage + this.maxSize - 1;
                // Adjust if limit is exceeded
                if (endPage > totalPages) {
                    endPage = totalPages;
                    startPage = endPage - this.maxSize + 1;
                }
            }
            else {
                // Visible pages are paginated with maxSize
                startPage =
                    (Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize + 1;
                // Adjust last page if limit is exceeded
                endPage = Math.min(startPage + this.maxSize - 1, totalPages);
            }
        }
        // Add page number links
        for (var num = startPage; num <= endPage; num++) {
            var page = this.makePage(num, num.toString(), num === currentPage);
            pages.push(page);
        }
        // Add links to move between page sets
        if (isMaxSized && !this.rotate) {
            if (startPage > 1) {
                var previousPageSet = this.makePage(startPage - 1, '...', false);
                pages.unshift(previousPageSet);
            }
            if (endPage < totalPages) {
                var nextPageSet = this.makePage(endPage + 1, '...', false);
                pages.push(nextPageSet);
            }
        }
        return pages;
    };
    // base class
    PaginationComponent.prototype.calculateTotalPages = function () {
        var totalPages = this.itemsPerPage < 1
            ? 1
            : Math.ceil(this.totalItems / this.itemsPerPage);
        return Math.max(totalPages || 0, 1);
    };
    PaginationComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'pagination',
                    template: "<ul class=\"pagination\" [ngClass]=\"classMap\"> <li class=\"pagination-first page-item\" *ngIf=\"boundaryLinks\" [class.disabled]=\"noPrevious()||disabled\"> <a class=\"page-link\" href (click)=\"selectPage(1, $event)\" [innerHTML]=\"getText('first')\"></a> </li> <li class=\"pagination-prev page-item\" *ngIf=\"directionLinks\" [class.disabled]=\"noPrevious()||disabled\"> <a class=\"page-link\" href (click)=\"selectPage(page - 1, $event)\" [innerHTML]=\"getText('previous')\"></a> </li> <li *ngFor=\"let pg of pages\" [class.active]=\"pg.active\" [class.disabled]=\"disabled&&!pg.active\" class=\"pagination-page page-item\"> <a class=\"page-link\" href (click)=\"selectPage(pg.number, $event)\" [innerHTML]=\"pg.text\"></a> </li> <li class=\"pagination-next page-item\" *ngIf=\"directionLinks\" [class.disabled]=\"noNext()||disabled\"> <a class=\"page-link\" href (click)=\"selectPage(page + 1, $event)\" [innerHTML]=\"getText('next')\"></a></li> <li class=\"pagination-last page-item\" *ngIf=\"boundaryLinks\" [class.disabled]=\"noNext()||disabled\"> <a class=\"page-link\" href (click)=\"selectPage(totalPages, $event)\" [innerHTML]=\"getText('last')\"></a></li> </ul> ",
                    providers: [PAGINATION_CONTROL_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    PaginationComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _pagination_config__WEBPACK_IMPORTED_MODULE_2__["PaginationConfig"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
    ]; };
    PaginationComponent.propDecorators = {
        'align': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'maxSize': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'boundaryLinks': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'directionLinks': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'firstText': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'previousText': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'nextText': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'lastText': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'rotate': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'pageBtnClass': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'disabled': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'numPages': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        'pageChanged': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        'itemsPerPage': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'totalItems': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return PaginationComponent;
}());

//# sourceMappingURL=pagination.component.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/pagination/pagination.config.js":
/*!********************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/pagination/pagination.config.js ***!
  \********************************************************************/
/*! exports provided: PaginationConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationConfig", function() { return PaginationConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
// todo: split

/** Provides default values for Pagination and pager components */
var PaginationConfig = (function () {
    function PaginationConfig() {
        this.main = {
            maxSize: void 0,
            itemsPerPage: 10,
            boundaryLinks: false,
            directionLinks: true,
            firstText: 'First',
            previousText: 'Previous',
            nextText: 'Next',
            lastText: 'Last',
            pageBtnClass: '',
            rotate: true
        };
        this.pager = {
            itemsPerPage: 15,
            previousText: '« Previous',
            nextText: 'Next »',
            pageBtnClass: '',
            align: true
        };
    }
    PaginationConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    PaginationConfig.ctorParameters = function () { return []; };
    return PaginationConfig;
}());

//# sourceMappingURL=pagination.config.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/pagination/pagination.module.js":
/*!********************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/pagination/pagination.module.js ***!
  \********************************************************************/
/*! exports provided: PaginationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationModule", function() { return PaginationModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pagination_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagination.config */ "./node_modules/ngx-bootstrap/pagination/pagination.config.js");
/* harmony import */ var _pager_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pager.component */ "./node_modules/ngx-bootstrap/pagination/pager.component.js");
/* harmony import */ var _pagination_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pagination.component */ "./node_modules/ngx-bootstrap/pagination/pagination.component.js");





var PaginationModule = (function () {
    function PaginationModule() {
    }
    PaginationModule.forRoot = function () {
        return { ngModule: PaginationModule, providers: [_pagination_config__WEBPACK_IMPORTED_MODULE_2__["PaginationConfig"]] };
    };
    PaginationModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
                    declarations: [_pager_component__WEBPACK_IMPORTED_MODULE_3__["PagerComponent"], _pagination_component__WEBPACK_IMPORTED_MODULE_4__["PaginationComponent"]],
                    exports: [_pager_component__WEBPACK_IMPORTED_MODULE_3__["PagerComponent"], _pagination_component__WEBPACK_IMPORTED_MODULE_4__["PaginationComponent"]]
                },] },
    ];
    /** @nocollapse */
    PaginationModule.ctorParameters = function () { return []; };
    return PaginationModule;
}());

//# sourceMappingURL=pagination.module.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/popover/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/ngx-bootstrap/popover/index.js ***!
  \*****************************************************/
/*! exports provided: PopoverDirective, PopoverModule, PopoverConfig, PopoverContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _popover_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popover.directive */ "./node_modules/ngx-bootstrap/popover/popover.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoverDirective", function() { return _popover_directive__WEBPACK_IMPORTED_MODULE_0__["PopoverDirective"]; });

/* harmony import */ var _popover_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popover.module */ "./node_modules/ngx-bootstrap/popover/popover.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoverModule", function() { return _popover_module__WEBPACK_IMPORTED_MODULE_1__["PopoverModule"]; });

/* harmony import */ var _popover_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popover.config */ "./node_modules/ngx-bootstrap/popover/popover.config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoverConfig", function() { return _popover_config__WEBPACK_IMPORTED_MODULE_2__["PopoverConfig"]; });

/* harmony import */ var _popover_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popover-container.component */ "./node_modules/ngx-bootstrap/popover/popover-container.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoverContainerComponent", function() { return _popover_container_component__WEBPACK_IMPORTED_MODULE_3__["PopoverContainerComponent"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/popover/popover-container.component.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/popover/popover-container.component.js ***!
  \***************************************************************************/
/*! exports provided: PopoverContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverContainerComponent", function() { return PopoverContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _popover_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popover.config */ "./node_modules/ngx-bootstrap/popover/popover.config.js");
/* harmony import */ var _utils_theme_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/theme-provider */ "./node_modules/ngx-bootstrap/utils/theme-provider.js");



var PopoverContainerComponent = (function () {
    function PopoverContainerComponent(config) {
        Object.assign(this, config);
    }
    Object.defineProperty(PopoverContainerComponent.prototype, "isBs3", {
        get: function () {
            return Object(_utils_theme_provider__WEBPACK_IMPORTED_MODULE_2__["isBs3"])();
        },
        enumerable: true,
        configurable: true
    });
    PopoverContainerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'popover-container',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    // tslint:disable-next-line
                    host: {
                        '[class]': '"popover in popover-" + placement + " " + "bs-popover-" + placement + " " + placement + " " + containerClass',
                        '[class.show]': '!isBs3',
                        role: 'tooltip',
                        style: 'display:block;'
                    },
                    styles: [
                        "\n    :host.bs-popover-top .arrow, :host.bs-popover-bottom .arrow {\n      left: 50%;\n      margin-left: -8px;\n    }\n    :host.bs-popover-left .arrow, :host.bs-popover-right .arrow {\n      top: 50%;\n      margin-top: -8px;\n    }\n  "
                    ],
                    template: "<div class=\"popover-arrow arrow\"></div> <h3 class=\"popover-title popover-header\" *ngIf=\"title\">{{ title }}</h3> <div class=\"popover-content popover-body\"> <ng-content></ng-content> </div> "
                },] },
    ];
    /** @nocollapse */
    PopoverContainerComponent.ctorParameters = function () { return [
        { type: _popover_config__WEBPACK_IMPORTED_MODULE_1__["PopoverConfig"], },
    ]; };
    PopoverContainerComponent.propDecorators = {
        'placement': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'title': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return PopoverContainerComponent;
}());

//# sourceMappingURL=popover-container.component.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/popover/popover.config.js":
/*!**************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/popover/popover.config.js ***!
  \**************************************************************/
/*! exports provided: PopoverConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverConfig", function() { return PopoverConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * Configuration service for the Popover directive.
 * You can inject this service, typically in your root component, and customize
 * the values of its properties in order to provide default values for all the
 * popovers used in the application.
 */
var PopoverConfig = (function () {
    function PopoverConfig() {
        /**
         * Placement of a popover. Accepts: "top", "bottom", "left", "right", "auto"
         */
        this.placement = 'top';
        /**
         * Specifies events that should trigger. Supports a space separated list of
         * event names.
         */
        this.triggers = 'click';
        this.outsideClick = false;
    }
    PopoverConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    PopoverConfig.ctorParameters = function () { return []; };
    return PopoverConfig;
}());

//# sourceMappingURL=popover.config.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/popover/popover.directive.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/popover/popover.directive.js ***!
  \*****************************************************************/
/*! exports provided: PopoverDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverDirective", function() { return PopoverDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _popover_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popover.config */ "./node_modules/ngx-bootstrap/popover/popover.config.js");
/* harmony import */ var _component_loader_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component-loader/index */ "./node_modules/ngx-bootstrap/component-loader/index.js");
/* harmony import */ var _popover_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popover-container.component */ "./node_modules/ngx-bootstrap/popover/popover-container.component.js");




/**
 * A lightweight, extensible directive for fancy popover creation.
 */
var PopoverDirective = (function () {
    function PopoverDirective(_elementRef, _renderer, _viewContainerRef, _config, cis) {
        /**
         * Close popover on outside click
         */
        this.outsideClick = false;
        /**
         * Css class for popover container
         */
        this.containerClass = '';
        this._isInited = false;
        this._popover = cis
            .createLoader(_elementRef, _viewContainerRef, _renderer)
            .provide({ provide: _popover_config__WEBPACK_IMPORTED_MODULE_1__["PopoverConfig"], useValue: _config });
        Object.assign(this, _config);
        this.onShown = this._popover.onShown;
        this.onHidden = this._popover.onHidden;
        // fix: no focus on button on Mac OS #1795
        if (typeof window !== 'undefined') {
            _elementRef.nativeElement.addEventListener('click', function () {
                try {
                    _elementRef.nativeElement.focus();
                }
                catch (err) {
                    return;
                }
            });
        }
    }
    Object.defineProperty(PopoverDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the popover is currently being shown
         */
        get: function () {
            return this._popover.isShown;
        },
        set: function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    PopoverDirective.prototype.show = function () {
        if (this._popover.isShown || !this.popover) {
            return;
        }
        this._popover
            .attach(_popover_container_component__WEBPACK_IMPORTED_MODULE_3__["PopoverContainerComponent"])
            .to(this.container)
            .position({ attachment: this.placement })
            .show({
            content: this.popover,
            context: this.popoverContext,
            placement: this.placement,
            title: this.popoverTitle,
            containerClass: this.containerClass
        });
        this.isOpen = true;
    };
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    PopoverDirective.prototype.hide = function () {
        if (this.isOpen) {
            this._popover.hide();
            this.isOpen = false;
        }
    };
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    PopoverDirective.prototype.toggle = function () {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    };
    PopoverDirective.prototype.ngOnInit = function () {
        var _this = this;
        // fix: seems there are an issue with `routerLinkActive`
        // which result in duplicated call ngOnInit without call to ngOnDestroy
        // read more: https://github.com/valor-software/ngx-bootstrap/issues/1885
        if (this._isInited) {
            return;
        }
        this._isInited = true;
        this._popover.listen({
            triggers: this.triggers,
            outsideClick: this.outsideClick,
            show: function () { return _this.show(); }
        });
    };
    PopoverDirective.prototype.ngOnDestroy = function () {
        this._popover.dispose();
    };
    PopoverDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[popover]', exportAs: 'bs-popover' },] },
    ];
    /** @nocollapse */
    PopoverDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
        { type: _popover_config__WEBPACK_IMPORTED_MODULE_1__["PopoverConfig"], },
        { type: _component_loader_index__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"], },
    ]; };
    PopoverDirective.propDecorators = {
        'popover': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'popoverContext': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'popoverTitle': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'placement': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'outsideClick': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'triggers': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'container': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'containerClass': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'isOpen': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'onShown': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        'onHidden': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return PopoverDirective;
}());

//# sourceMappingURL=popover.directive.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/popover/popover.module.js":
/*!**************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/popover/popover.module.js ***!
  \**************************************************************/
/*! exports provided: PopoverModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverModule", function() { return PopoverModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _component_loader_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component-loader/index */ "./node_modules/ngx-bootstrap/component-loader/index.js");
/* harmony import */ var _positioning_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../positioning/index */ "./node_modules/ngx-bootstrap/positioning/index.js");
/* harmony import */ var _popover_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popover.config */ "./node_modules/ngx-bootstrap/popover/popover.config.js");
/* harmony import */ var _popover_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popover.directive */ "./node_modules/ngx-bootstrap/popover/popover.directive.js");
/* harmony import */ var _popover_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./popover-container.component */ "./node_modules/ngx-bootstrap/popover/popover-container.component.js");







var PopoverModule = (function () {
    function PopoverModule() {
    }
    PopoverModule.forRoot = function () {
        return {
            ngModule: PopoverModule,
            providers: [_popover_config__WEBPACK_IMPORTED_MODULE_4__["PopoverConfig"], _component_loader_index__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"], _positioning_index__WEBPACK_IMPORTED_MODULE_3__["PositioningService"]]
        };
    };
    PopoverModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    declarations: [_popover_directive__WEBPACK_IMPORTED_MODULE_5__["PopoverDirective"], _popover_container_component__WEBPACK_IMPORTED_MODULE_6__["PopoverContainerComponent"]],
                    exports: [_popover_directive__WEBPACK_IMPORTED_MODULE_5__["PopoverDirective"]],
                    entryComponents: [_popover_container_component__WEBPACK_IMPORTED_MODULE_6__["PopoverContainerComponent"]]
                },] },
    ];
    /** @nocollapse */
    PopoverModule.ctorParameters = function () { return []; };
    return PopoverModule;
}());

//# sourceMappingURL=popover.module.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/tooltip/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/ngx-bootstrap/tooltip/index.js ***!
  \*****************************************************/
/*! exports provided: TooltipContainerComponent, TooltipDirective, TooltipModule, TooltipConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tooltip_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tooltip-container.component */ "./node_modules/ngx-bootstrap/tooltip/tooltip-container.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipContainerComponent", function() { return _tooltip_container_component__WEBPACK_IMPORTED_MODULE_0__["TooltipContainerComponent"]; });

/* harmony import */ var _tooltip_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tooltip.directive */ "./node_modules/ngx-bootstrap/tooltip/tooltip.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipDirective", function() { return _tooltip_directive__WEBPACK_IMPORTED_MODULE_1__["TooltipDirective"]; });

/* harmony import */ var _tooltip_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tooltip.module */ "./node_modules/ngx-bootstrap/tooltip/tooltip.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipModule", function() { return _tooltip_module__WEBPACK_IMPORTED_MODULE_2__["TooltipModule"]; });

/* harmony import */ var _tooltip_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tooltip.config */ "./node_modules/ngx-bootstrap/tooltip/tooltip.config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipConfig", function() { return _tooltip_config__WEBPACK_IMPORTED_MODULE_3__["TooltipConfig"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/tooltip/tooltip-container.component.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/tooltip/tooltip-container.component.js ***!
  \***************************************************************************/
/*! exports provided: TooltipContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipContainerComponent", function() { return TooltipContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tooltip_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tooltip.config */ "./node_modules/ngx-bootstrap/tooltip/tooltip.config.js");
/* harmony import */ var _utils_theme_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/theme-provider */ "./node_modules/ngx-bootstrap/utils/theme-provider.js");



var TooltipContainerComponent = (function () {
    function TooltipContainerComponent(config) {
        Object.assign(this, config);
    }
    Object.defineProperty(TooltipContainerComponent.prototype, "isBs3", {
        get: function () {
            return Object(_utils_theme_provider__WEBPACK_IMPORTED_MODULE_2__["isBs3"])();
        },
        enumerable: true,
        configurable: true
    });
    TooltipContainerComponent.prototype.ngAfterViewInit = function () {
        this.classMap = { in: false, fade: false };
        this.classMap[this.placement] = true;
        this.classMap["tooltip-" + this.placement] = true;
        this.classMap.in = true;
        if (this.animation) {
            this.classMap.fade = true;
        }
        if (this.containerClass) {
            this.classMap[this.containerClass] = true;
        }
    };
    TooltipContainerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'bs-tooltip-container',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    // tslint:disable-next-line
                    host: {
                        '[class]': '"tooltip in tooltip-" + placement + " " + "bs-tooltip-" + placement + " " + placement + " " + containerClass',
                        '[class.show]': '!isBs3',
                        role: 'tooltip'
                    },
                    styles: [
                        "\n    :host.tooltip {\n      display: block;\n    }\n    :host.bs-tooltip-top .arrow, :host.bs-tooltip-bottom .arrow {\n      left: 50%;\n      margin-left: -6px;\n    }\n    :host.bs-tooltip-left .arrow, :host.bs-tooltip-right .arrow {\n      top: 50%;\n      margin-top: -6px;\n    }\n  "
                    ],
                    template: "\n    <div class=\"tooltip-arrow arrow\"></div>\n    <div class=\"tooltip-inner\"><ng-content></ng-content></div>\n    "
                },] },
    ];
    /** @nocollapse */
    TooltipContainerComponent.ctorParameters = function () { return [
        { type: _tooltip_config__WEBPACK_IMPORTED_MODULE_1__["TooltipConfig"], },
    ]; };
    return TooltipContainerComponent;
}());

//# sourceMappingURL=tooltip-container.component.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/tooltip/tooltip.config.js":
/*!**************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/tooltip/tooltip.config.js ***!
  \**************************************************************/
/*! exports provided: TooltipConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipConfig", function() { return TooltipConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/** Default values provider for tooltip */
var TooltipConfig = (function () {
    function TooltipConfig() {
        /** tooltip placement, supported positions: 'top', 'bottom', 'left', 'right' */
        this.placement = 'top';
        /** array of event names which triggers tooltip opening */
        this.triggers = 'hover focus';
    }
    TooltipConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    TooltipConfig.ctorParameters = function () { return []; };
    return TooltipConfig;
}());

//# sourceMappingURL=tooltip.config.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/tooltip/tooltip.directive.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/tooltip/tooltip.directive.js ***!
  \*****************************************************************/
/*! exports provided: TooltipDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipDirective", function() { return TooltipDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tooltip_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tooltip-container.component */ "./node_modules/ngx-bootstrap/tooltip/tooltip-container.component.js");
/* harmony import */ var _tooltip_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tooltip.config */ "./node_modules/ngx-bootstrap/tooltip/tooltip.config.js");
/* harmony import */ var _component_loader_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component-loader/index */ "./node_modules/ngx-bootstrap/component-loader/index.js");
/* harmony import */ var _utils_decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/decorators */ "./node_modules/ngx-bootstrap/utils/decorators.js");
/* harmony import */ var _utils_warn_once__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/warn-once */ "./node_modules/ngx-bootstrap/utils/warn-once.js");
/* harmony import */ var _utils_triggers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/triggers */ "./node_modules/ngx-bootstrap/utils/triggers.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_observable_timer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/add/observable/timer */ "./node_modules/rxjs-compat/_esm5/add/observable/timer.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// tslint:disable:deprecation









var TooltipDirective = (function () {
    function TooltipDirective(_viewContainerRef, _renderer, _elementRef, cis, config) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /** Fired when tooltip content changes */
        this.tooltipChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Css class for tooltip container
         */
        this.containerClass = '';
        /** @deprecated - removed, will be added to configuration */
        this._animation = true;
        /** @deprecated */
        this._fadeDuration = 150;
        /** @deprecated */
        this.tooltipStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._tooltip = cis
            .createLoader(this._elementRef, _viewContainerRef, this._renderer)
            .provide({ provide: _tooltip_config__WEBPACK_IMPORTED_MODULE_2__["TooltipConfig"], useValue: config });
        Object.assign(this, config);
        this.onShown = this._tooltip.onShown;
        this.onHidden = this._tooltip.onHidden;
    }
    Object.defineProperty(TooltipDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the tooltip is currently being shown
         */
        get: function () {
            return this._tooltip.isShown;
        },
        set: function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "htmlContent", {
        /** @deprecated - please use `tooltip` instead */
        set: function (value) {
            Object(_utils_warn_once__WEBPACK_IMPORTED_MODULE_5__["warnOnce"])('tooltipHtml was deprecated, please use `tooltip` instead');
            this.tooltip = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_placement", {
        /** @deprecated - please use `placement` instead */
        set: function (value) {
            Object(_utils_warn_once__WEBPACK_IMPORTED_MODULE_5__["warnOnce"])('tooltipPlacement was deprecated, please use `placement` instead');
            this.placement = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_isOpen", {
        get: function () {
            Object(_utils_warn_once__WEBPACK_IMPORTED_MODULE_5__["warnOnce"])('tooltipIsOpen was deprecated, please use `isOpen` instead');
            return this.isOpen;
        },
        /** @deprecated - please use `isOpen` instead*/
        set: function (value) {
            Object(_utils_warn_once__WEBPACK_IMPORTED_MODULE_5__["warnOnce"])('tooltipIsOpen was deprecated, please use `isOpen` instead');
            this.isOpen = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_enable", {
        get: function () {
            Object(_utils_warn_once__WEBPACK_IMPORTED_MODULE_5__["warnOnce"])('tooltipEnable was deprecated, please use `isDisabled` instead');
            return this.isDisabled;
        },
        /** @deprecated - please use `isDisabled` instead */
        set: function (value) {
            Object(_utils_warn_once__WEBPACK_IMPORTED_MODULE_5__["warnOnce"])('tooltipEnable was deprecated, please use `isDisabled` instead');
            this.isDisabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_appendToBody", {
        get: function () {
            Object(_utils_warn_once__WEBPACK_IMPORTED_MODULE_5__["warnOnce"])('tooltipAppendToBody was deprecated, please use `container="body"` instead');
            return this.container === 'body';
        },
        /** @deprecated - please use `container="body"` instead */
        set: function (value) {
            Object(_utils_warn_once__WEBPACK_IMPORTED_MODULE_5__["warnOnce"])('tooltipAppendToBody was deprecated, please use `container="body"` instead');
            this.container = value ? 'body' : this.container;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_popupClass", {
        /** @deprecated - will replaced with customClass */
        set: function (value) {
            Object(_utils_warn_once__WEBPACK_IMPORTED_MODULE_5__["warnOnce"])('tooltipClass deprecated');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_tooltipContext", {
        /** @deprecated - removed */
        set: function (value) {
            Object(_utils_warn_once__WEBPACK_IMPORTED_MODULE_5__["warnOnce"])('tooltipContext deprecated');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_tooltipPopupDelay", {
        /** @deprecated */
        set: function (value) {
            Object(_utils_warn_once__WEBPACK_IMPORTED_MODULE_5__["warnOnce"])('tooltipPopupDelay is deprecated, use `delay` instead');
            this.delay = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_tooltipTrigger", {
        /** @deprecated -  please use `triggers` instead */
        get: function () {
            Object(_utils_warn_once__WEBPACK_IMPORTED_MODULE_5__["warnOnce"])('tooltipTrigger was deprecated, please use `triggers` instead');
            return this.triggers;
        },
        set: function (value) {
            Object(_utils_warn_once__WEBPACK_IMPORTED_MODULE_5__["warnOnce"])('tooltipTrigger was deprecated, please use `triggers` instead');
            this.triggers = (value || '').toString();
        },
        enumerable: true,
        configurable: true
    });
    TooltipDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._tooltip.listen({
            triggers: this.triggers,
            show: function () { return _this.show(); }
        });
        this.tooltipChange.subscribe(function (value) {
            if (!value) {
                _this._tooltip.hide();
            }
        });
    };
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    TooltipDirective.prototype.toggle = function () {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    };
    /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    TooltipDirective.prototype.show = function () {
        var _this = this;
        if (this.isOpen ||
            this.isDisabled ||
            this._delayTimeoutId ||
            !this.tooltip) {
            return;
        }
        var showTooltip = function () {
            if (_this._delayTimeoutId) {
                _this._delayTimeoutId = undefined;
            }
            _this._tooltip
                .attach(_tooltip_container_component__WEBPACK_IMPORTED_MODULE_1__["TooltipContainerComponent"])
                .to(_this.container)
                .position({ attachment: _this.placement })
                .show({
                content: _this.tooltip,
                placement: _this.placement,
                containerClass: _this.containerClass
            });
        };
        var cancelDelayedTooltipShowing = function () {
            if (_this._tooltipCancelShowFn) {
                _this._tooltipCancelShowFn();
            }
        };
        if (this.delay) {
            var timer_1 = rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].timer(this.delay).subscribe(function () {
                showTooltip();
                cancelDelayedTooltipShowing();
            });
            if (this.triggers) {
                var triggers = Object(_utils_triggers__WEBPACK_IMPORTED_MODULE_6__["parseTriggers"])(this.triggers);
                this._tooltipCancelShowFn = this._renderer.listen(this._elementRef.nativeElement, triggers[0].close, function () {
                    timer_1.unsubscribe();
                    cancelDelayedTooltipShowing();
                });
            }
        }
        else {
            showTooltip();
        }
    };
    /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    TooltipDirective.prototype.hide = function () {
        var _this = this;
        if (this._delayTimeoutId) {
            clearTimeout(this._delayTimeoutId);
            this._delayTimeoutId = undefined;
        }
        if (!this._tooltip.isShown) {
            return;
        }
        this._tooltip.instance.classMap.in = false;
        setTimeout(function () {
            _this._tooltip.hide();
        }, this._fadeDuration);
    };
    TooltipDirective.prototype.ngOnDestroy = function () {
        this._tooltip.dispose();
    };
    TooltipDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[tooltip], [tooltipHtml]',
                    exportAs: 'bs-tooltip'
                },] },
    ];
    /** @nocollapse */
    TooltipDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _component_loader_index__WEBPACK_IMPORTED_MODULE_3__["ComponentLoaderFactory"], },
        { type: _tooltip_config__WEBPACK_IMPORTED_MODULE_2__["TooltipConfig"], },
    ]; };
    TooltipDirective.propDecorators = {
        'tooltip': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'tooltipChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        'placement': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'triggers': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'container': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'isOpen': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'isDisabled': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'containerClass': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'delay': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'onShown': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        'onHidden': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        'htmlContent': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipHtml',] },],
        '_placement': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipPlacement',] },],
        '_isOpen': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipIsOpen',] },],
        '_enable': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipEnable',] },],
        '_appendToBody': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipAppendToBody',] },],
        '_animation': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipAnimation',] },],
        '_popupClass': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipClass',] },],
        '_tooltipContext': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipContext',] },],
        '_tooltipPopupDelay': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipPopupDelay',] },],
        '_fadeDuration': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipFadeDuration',] },],
        '_tooltipTrigger': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipTrigger',] },],
        'tooltipStateChanged': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    __decorate([
        Object(_utils_decorators__WEBPACK_IMPORTED_MODULE_4__["OnChange"])(),
        __metadata("design:type", Object)
    ], TooltipDirective.prototype, "tooltip", void 0);
    return TooltipDirective;
}());

//# sourceMappingURL=tooltip.directive.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/tooltip/tooltip.module.js":
/*!**************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/tooltip/tooltip.module.js ***!
  \**************************************************************/
/*! exports provided: TooltipModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipModule", function() { return TooltipModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tooltip_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tooltip-container.component */ "./node_modules/ngx-bootstrap/tooltip/tooltip-container.component.js");
/* harmony import */ var _tooltip_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tooltip.directive */ "./node_modules/ngx-bootstrap/tooltip/tooltip.directive.js");
/* harmony import */ var _tooltip_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tooltip.config */ "./node_modules/ngx-bootstrap/tooltip/tooltip.config.js");
/* harmony import */ var _component_loader_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component-loader/index */ "./node_modules/ngx-bootstrap/component-loader/index.js");
/* harmony import */ var _positioning_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../positioning/index */ "./node_modules/ngx-bootstrap/positioning/index.js");







var TooltipModule = (function () {
    function TooltipModule() {
    }
    TooltipModule.forRoot = function () {
        return {
            ngModule: TooltipModule,
            providers: [_tooltip_config__WEBPACK_IMPORTED_MODULE_4__["TooltipConfig"], _component_loader_index__WEBPACK_IMPORTED_MODULE_5__["ComponentLoaderFactory"], _positioning_index__WEBPACK_IMPORTED_MODULE_6__["PositioningService"]]
        };
    };
    TooltipModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
                    declarations: [_tooltip_directive__WEBPACK_IMPORTED_MODULE_3__["TooltipDirective"], _tooltip_container_component__WEBPACK_IMPORTED_MODULE_2__["TooltipContainerComponent"]],
                    exports: [_tooltip_directive__WEBPACK_IMPORTED_MODULE_3__["TooltipDirective"]],
                    entryComponents: [_tooltip_container_component__WEBPACK_IMPORTED_MODULE_2__["TooltipContainerComponent"]]
                },] },
    ];
    /** @nocollapse */
    TooltipModule.ctorParameters = function () { return []; };
    return TooltipModule;
}());

//# sourceMappingURL=tooltip.module.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/utils/utils.class.js":
/*!*********************************************************!*\
  !*** ./node_modules/ngx-bootstrap/utils/utils.class.js ***!
  \*********************************************************/
/*! exports provided: Utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
/* harmony import */ var _facade_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./facade/browser */ "./node_modules/ngx-bootstrap/utils/facade/browser.js");

var Utils = (function () {
    function Utils() {
    }
    Utils.reflow = function (element) {
        (function (bs) { return bs; })(element.offsetHeight);
    };
    // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js
    Utils.getStyles = function (elem) {
        // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
        // IE throws on elements created in popups
        // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
        var view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) {
            view = _facade_browser__WEBPACK_IMPORTED_MODULE_0__["window"];
        }
        return view.getComputedStyle(elem);
    };
    return Utils;
}());

//# sourceMappingURL=utils.class.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/utils/warn-once.js":
/*!*******************************************************!*\
  !*** ./node_modules/ngx-bootstrap/utils/warn-once.js ***!
  \*******************************************************/
/*! exports provided: warnOnce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warnOnce", function() { return warnOnce; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var _messagesHash = {};
var _hideMsg = typeof console === 'undefined' || !('warn' in console);
function warnOnce(msg) {
    if (!Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() || _hideMsg || msg in _messagesHash) {
        return;
    }
    _messagesHash[msg] = true;
    /*tslint:disable-next-line*/
    console.warn(msg);
}
//# sourceMappingURL=warn-once.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/Observable.js":
/*!******************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/Observable.js ***!
  \******************************************************/
/*! exports provided: Observable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]; });


//# sourceMappingURL=Observable.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/add/observable/timer.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/add/observable/timer.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].timer = rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"];
//# sourceMappingURL=timer.js.map

/***/ }),

/***/ "./src/app/views/base/base-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/views/base/base-routing.module.ts ***!
  \***************************************************/
/*! exports provided: BaseRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseRoutingModule", function() { return BaseRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cards_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cards.component */ "./src/app/views/base/cards.component.ts");
/* harmony import */ var _forms_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forms.component */ "./src/app/views/base/forms.component.ts");
/* harmony import */ var _switches_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./switches.component */ "./src/app/views/base/switches.component.ts");
/* harmony import */ var _tables_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tables.component */ "./src/app/views/base/tables.component.ts");
/* harmony import */ var _tabs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.component */ "./src/app/views/base/tabs.component.ts");
/* harmony import */ var _carousels_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./carousels.component */ "./src/app/views/base/carousels.component.ts");
/* harmony import */ var _collapses_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./collapses.component */ "./src/app/views/base/collapses.component.ts");
/* harmony import */ var _paginations_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./paginations.component */ "./src/app/views/base/paginations.component.ts");
/* harmony import */ var _popovers_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./popovers.component */ "./src/app/views/base/popovers.component.ts");
/* harmony import */ var _progress_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./progress.component */ "./src/app/views/base/progress.component.ts");
/* harmony import */ var _tooltips_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tooltips.component */ "./src/app/views/base/tooltips.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    {
        path: '',
        component: _cards_component__WEBPACK_IMPORTED_MODULE_2__["CardsComponent"],
        data: {
            title: 'Base'
        },
        children: [
            {
                path: 'cards',
                component: _cards_component__WEBPACK_IMPORTED_MODULE_2__["CardsComponent"],
                data: {
                    title: 'Cards'
                }
            },
            {
                path: 'forms',
                component: _forms_component__WEBPACK_IMPORTED_MODULE_3__["FormsComponent"],
                data: {
                    title: 'Forms'
                }
            },
            {
                path: 'switches',
                component: _switches_component__WEBPACK_IMPORTED_MODULE_4__["SwitchesComponent"],
                data: {
                    title: 'Switches'
                }
            },
            {
                path: 'tables',
                component: _tables_component__WEBPACK_IMPORTED_MODULE_5__["TablesComponent"],
                data: {
                    title: 'Tables'
                }
            },
            {
                path: 'tabs',
                component: _tabs_component__WEBPACK_IMPORTED_MODULE_6__["TabsComponent"],
                data: {
                    title: 'Tabs'
                }
            },
            {
                path: 'carousels',
                component: _carousels_component__WEBPACK_IMPORTED_MODULE_7__["CarouselsComponent"],
                data: {
                    title: 'Carousels'
                }
            },
            {
                path: 'collapses',
                component: _collapses_component__WEBPACK_IMPORTED_MODULE_8__["CollapsesComponent"],
                data: {
                    title: 'Collapses'
                }
            },
            {
                path: 'paginations',
                component: _paginations_component__WEBPACK_IMPORTED_MODULE_9__["PaginationsComponent"],
                data: {
                    title: 'Pagination'
                }
            },
            {
                path: 'popovers',
                component: _popovers_component__WEBPACK_IMPORTED_MODULE_10__["PopoversComponent"],
                data: {
                    title: 'Popover'
                }
            },
            {
                path: 'progress',
                component: _progress_component__WEBPACK_IMPORTED_MODULE_11__["ProgressComponent"],
                data: {
                    title: 'Progress'
                }
            },
            {
                path: 'tooltips',
                component: _tooltips_component__WEBPACK_IMPORTED_MODULE_12__["TooltipsComponent"],
                data: {
                    title: 'Tooltips'
                }
            }
        ]
    }
];
var BaseRoutingModule = /** @class */ (function () {
    function BaseRoutingModule() {
    }
    BaseRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BaseRoutingModule);
    return BaseRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/base/base.module.ts":
/*!*******************************************!*\
  !*** ./src/app/views/base/base.module.ts ***!
  \*******************************************/
/*! exports provided: BaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseModule", function() { return BaseModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cards_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cards.component */ "./src/app/views/base/cards.component.ts");
/* harmony import */ var _forms_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forms.component */ "./src/app/views/base/forms.component.ts");
/* harmony import */ var _switches_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./switches.component */ "./src/app/views/base/switches.component.ts");
/* harmony import */ var _tables_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tables.component */ "./src/app/views/base/tables.component.ts");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/index.js");
/* harmony import */ var _tabs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tabs.component */ "./src/app/views/base/tabs.component.ts");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/index.js");
/* harmony import */ var _carousels_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./carousels.component */ "./src/app/views/base/carousels.component.ts");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/collapse/index.js");
/* harmony import */ var _collapses_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./collapses.component */ "./src/app/views/base/collapses.component.ts");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/index.js");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/pagination/index.js");
/* harmony import */ var _popovers_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./popovers.component */ "./src/app/views/base/popovers.component.ts");
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/popover */ "./node_modules/ngx-bootstrap/popover/index.js");
/* harmony import */ var _paginations_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./paginations.component */ "./src/app/views/base/paginations.component.ts");
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "./node_modules/ngx-bootstrap/progressbar/index.js");
/* harmony import */ var _progress_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./progress.component */ "./src/app/views/base/progress.component.ts");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/index.js");
/* harmony import */ var _tooltips_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./tooltips.component */ "./src/app/views/base/tooltips.component.ts");
/* harmony import */ var _base_routing_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./base-routing.module */ "./src/app/views/base/base-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Angular




// Forms Component



// Tabs Component


// Carousel Component


// Collapse Component


// Dropdowns Component

// Pagination Component


// Popover Component


// Progress Component


// Tooltip Component


// Components Routing

var BaseModule = /** @class */ (function () {
    function BaseModule() {
    }
    BaseModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _base_routing_module__WEBPACK_IMPORTED_MODULE_22__["BaseRoutingModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_13__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__["TabsModule"],
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_9__["CarouselModule"].forRoot(),
                ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_11__["CollapseModule"].forRoot(),
                ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_14__["PaginationModule"].forRoot(),
                ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_16__["PopoverModule"].forRoot(),
                ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_18__["ProgressbarModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_20__["TooltipModule"].forRoot()
            ],
            declarations: [
                _cards_component__WEBPACK_IMPORTED_MODULE_3__["CardsComponent"],
                _forms_component__WEBPACK_IMPORTED_MODULE_4__["FormsComponent"],
                _switches_component__WEBPACK_IMPORTED_MODULE_5__["SwitchesComponent"],
                _tables_component__WEBPACK_IMPORTED_MODULE_6__["TablesComponent"],
                _tabs_component__WEBPACK_IMPORTED_MODULE_8__["TabsComponent"],
                _carousels_component__WEBPACK_IMPORTED_MODULE_10__["CarouselsComponent"],
                _collapses_component__WEBPACK_IMPORTED_MODULE_12__["CollapsesComponent"],
                _paginations_component__WEBPACK_IMPORTED_MODULE_17__["PaginationsComponent"],
                _popovers_component__WEBPACK_IMPORTED_MODULE_15__["PopoversComponent"],
                _progress_component__WEBPACK_IMPORTED_MODULE_19__["ProgressComponent"],
                _tooltips_component__WEBPACK_IMPORTED_MODULE_21__["TooltipsComponent"]
            ]
        })
    ], BaseModule);
    return BaseModule;
}());



/***/ }),

/***/ "./src/app/views/base/cards.component.html":
/*!*************************************************!*\
  !*** ./src/app/views/base/cards.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Card title\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n        <div class=\"card-footer\">Card footer</div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-check\"></i>Card with icon\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Card with switch\n          <label class=\"switch switch-sm switch-text switch-info float-right mb-0\">\n            <input type=\"checkbox\" class=\"switch-input\">\n            <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n            <span class=\"switch-handle\"></span>\n          </label>\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Card with label\n          <span class=\"badge badge-success float-right\">Success</span>\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Card with label\n          <span class=\"badge badge-pill badge-danger float-right\">42</span>\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card border-primary\">\n        <div class=\"card-header\">\n          Card outline\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card border-secondary\">\n        <div class=\"card-header\">\n          Card outline\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card border-success\">\n        <div class=\"card-header\">\n          Card outline\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card border-info\">\n        <div class=\"card-header\">\n          Card outline\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card border-warning\">\n        <div class=\"card-header\">\n          Card outline\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card border-danger\">\n        <div class=\"card-header\">\n          Card outline\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card card-accent-primary\">\n        <div class=\"card-header\">\n          Card with accent\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card card-accent-secondary\">\n        <div class=\"card-header\">\n          Card with accent\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card card-accent-success\">\n        <div class=\"card-header\">\n          Card with accent\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card card-accent-info\">\n        <div class=\"card-header\">\n          Card with accent\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card card-accent-warning\">\n        <div class=\"card-header\">\n          Card with accent\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card card-accent-danger\">\n        <div class=\"card-header\">\n          Card with accent\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card text-white bg-primary text-center\">\n        <div class=\"card-body\">\n          <blockquote class=\"card-bodyquote\">\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n            <footer>Someone famous in\n              <cite title=\"Source Title\">Source Title</cite>\n            </footer>\n          </blockquote>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card text-white bg-success text-center\">\n        <div class=\"card-body\">\n          <blockquote class=\"card-bodyquote\">\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n            <footer>Someone famous in\n              <cite title=\"Source Title\">Source Title</cite>\n            </footer>\n          </blockquote>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card text-white bg-info text-center\">\n        <div class=\"card-body\">\n          <blockquote class=\"card-bodyquote\">\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n            <footer>Someone famous in\n              <cite title=\"Source Title\">Source Title</cite>\n            </footer>\n          </blockquote>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card text-white bg-warning text-center\">\n        <div class=\"card-body\">\n          <blockquote class=\"card-bodyquote\">\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n            <footer>Someone famous in\n              <cite title=\"Source Title\">Source Title</cite>\n            </footer>\n          </blockquote>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card text-white bg-danger text-center\">\n        <div class=\"card-body\">\n          <blockquote class=\"card-bodyquote\">\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n            <footer>Someone famous in\n              <cite title=\"Source Title\">Source Title</cite>\n            </footer>\n          </blockquote>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card text-white bg-primary text-center\">\n        <div class=\"card-body\">\n          <blockquote class=\"card-bodyquote\">\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n            <footer>Someone famous in\n              <cite title=\"Source Title\">Source Title</cite>\n            </footer>\n          </blockquote>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card text-white bg-primary\">\n        <div class=\"card-header\">\n          Card title\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card text-white bg-success\">\n        <div class=\"card-header\">\n          Card title\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card text-white bg-info\">\n        <div class=\"card-header\">\n          Card title\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card text-white bg-warning\">\n        <div class=\"card-header\">\n          Card title\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card text-white bg-danger\">\n        <div class=\"card-header\">\n          Card title\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n</div>\n"

/***/ }),

/***/ "./src/app/views/base/cards.component.ts":
/*!***********************************************!*\
  !*** ./src/app/views/base/cards.component.ts ***!
  \***********************************************/
/*! exports provided: CardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsComponent", function() { return CardsComponent; });
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

var CardsComponent = /** @class */ (function () {
    function CardsComponent() {
    }
    CardsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./cards.component.html */ "./src/app/views/base/cards.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], CardsComponent);
    return CardsComponent;
}());



/***/ }),

/***/ "./src/app/views/base/carousels.component.html":
/*!*****************************************************!*\
  !*** ./src/app/views/base/carousels.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Bootstrap Carousel\n          <div class=\"card-header-actions\">\n            <a href=\"https://valor-software.com/ngx-bootstrap/#/carousel\" target=\"_blank\">\n              <small className=\"text-muted\">docs</small>\n            </a>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <carousel [interval]=\"3000\">\n            <slide>\n              <img src=\"https://lorempixel.com/900/500/technics/2/\" alt=\"First slide\" style=\"display: block; width: 100%;\">\n            </slide>\n            <slide>\n              <img src=\"https://lorempixel.com/900/500/technics/4/\" alt=\"Second slide\" style=\"display: block; width: 100%;\">\n            </slide>\n            <slide>\n              <img src=\"https://lorempixel.com/900/500/technics/6/\" alt=\"Third slide\" style=\"display: block; width: 100%;\">\n            </slide>\n          </carousel>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Carousel\n          <small> optional captions</small>\n        </div>\n        <div class=\"card-body\">\n          <carousel [interval]=\"4500\">\n            <slide>\n              <img src=\"https://lorempixel.com/900/500/nature/2/\" alt=\"First slide\" style=\"display: block; width: 100%;\">\n              <div class=\"carousel-caption d-none d-md-block\">\n                <h3>First slide label</h3>\n                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n              </div>\n            </slide>\n            <slide>\n              <img src=\"https://lorempixel.com/900/500/nature/4/\" alt=\"Second slide\" style=\"display: block; width: 100%;\">\n              <div class=\"carousel-caption d-none d-md-block\">\n                <h3>Second slide label</h3>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n              </div>\n            </slide>\n            <slide>\n              <img src=\"https://lorempixel.com/900/500/nature/6/\" alt=\"Third slide\" style=\"display: block; width: 100%;\">\n              <div class=\"carousel-caption d-none d-md-block\">\n                <h3>Third slide label</h3>\n                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\n              </div>\n            </slide>\n          </carousel>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Carousel\n          <small> configuring defaults</small>\n        </div>\n        <div class=\"card-body\">\n          <carousel>\n            <slide>\n              <img src=\"https://lorempixel.com/900/500/city/2/\" alt=\"First slide\" style=\"display: block; width: 100%;\">\n              <div class=\"carousel-caption d-none d-md-block\">\n                <h3>First slide label</h3>\n                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n              </div>\n            </slide>\n            <slide>\n              <img src=\"https://lorempixel.com/900/500/city/4/\" alt=\"Second slide\" style=\"display: block; width: 100%;\">\n              <div class=\"carousel-caption d-none d-md-block\">\n                <h3>Second slide label</h3>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n              </div>\n            </slide>\n            <slide>\n              <img src=\"https://lorempixel.com/900/500/city/6/\" alt=\"Third slide\" style=\"display: block; width: 100%;\">\n              <div class=\"carousel-caption d-none d-md-block\">\n                <h3>Third slide label</h3>\n                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\n              </div>\n            </slide>\n          </carousel>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Carousel\n          <small> dynamic slides</small>\n        </div>\n        <div class=\"card-body\">\n          <carousel [interval]=\"myInterval\" [noWrap]=\"noWrapSlides\" [(activeSlide)]=\"activeSlideIndex\">\n            <slide *ngFor=\"let slide of slides; let index=index\">\n              <img [src]=\"slide.image\" alt=\"image slide\" style=\"display: block; width: 100%;\">\n\n              <div class=\"carousel-caption\">\n                <h4>Slide {{index}}</h4>\n                <p>{{slide.text}}</p>\n              </div>\n            </slide>\n          </carousel>\n          <br/>\n          <div>\n            <button type=\"button\" class=\"btn btn-info\"\n                    (click)=\"addSlide()\">Add Slide\n            </button>\n            <button type=\"button\" class=\"btn btn-info\"\n                    (click)=\"removeSlide()\">Remove Current\n            </button>\n            <button type=\"button\" class=\"btn btn-info\"\n                    (click)=\"removeSlide(2)\">Remove #3\n            </button>\n          </div>\n          <div>\n            <div class=\"checkbox\">\n              <label><input type=\"checkbox\" [(ngModel)]=\"noWrapSlides\">Disable Slide Looping</label>\n            </div>\n\n            <span>Interval, in milliseconds (Enter a negative number or 0 to stop the interval.): </span>\n            <input type=\"number\" class=\"form-control\" [(ngModel)]=\"myInterval\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/base/carousels.component.ts":
/*!***************************************************!*\
  !*** ./src/app/views/base/carousels.component.ts ***!
  \***************************************************/
/*! exports provided: CarouselsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselsComponent", function() { return CarouselsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarouselsComponent = /** @class */ (function () {
    function CarouselsComponent() {
        this.myInterval = 6000;
        this.slides = [];
        this.activeSlideIndex = 0;
        this.noWrapSlides = false;
        for (var i = 0; i < 4; i++) {
            this.addSlide();
        }
    }
    CarouselsComponent.prototype.addSlide = function () {
        this.slides.push({
            image: "https://lorempixel.com/900/500/sports/" + (this.slides.length % 8 + 1) + "/"
        });
    };
    CarouselsComponent.prototype.removeSlide = function (index) {
        var toRemove = index ? index : this.activeSlideIndex;
        this.slides.splice(toRemove, 1);
    };
    CarouselsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./carousels.component.html */ "./src/app/views/base/carousels.component.html"),
            providers: [
                { provide: ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_1__["CarouselConfig"], useValue: { interval: 1500, noPause: true } }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], CarouselsComponent);
    return CarouselsComponent;
}());



/***/ }),

/***/ "./src/app/views/base/collapses.component.html":
/*!*****************************************************!*\
  !*** ./src/app/views/base/collapses.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Bootstrap Collapse\n      <div class=\"card-header-actions\">\n        <a href=\"https://valor-software.com/ngx-bootstrap/#/collapse\" target=\"_blank\">\n          <small className=\"text-muted\">docs</small>\n        </a>\n      </div>\n    </div>\n    <div class=\"card-body\"\n         (collapsed)=\"collapsed($event)\"\n         (expanded)=\"expanded($event)\"\n         [collapse]=\"isCollapsed\">\n      <p>\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo\n        consequat.\n      </p>\n    </div>\n    <div class=\"card-footer\">\n      <button type=\"button\" class=\"btn btn-primary\"\n              (click)=\"isCollapsed = !isCollapsed\">Toggle collapse\n      </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/base/collapses.component.ts":
/*!***************************************************!*\
  !*** ./src/app/views/base/collapses.component.ts ***!
  \***************************************************/
/*! exports provided: CollapsesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapsesComponent", function() { return CollapsesComponent; });
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

var CollapsesComponent = /** @class */ (function () {
    function CollapsesComponent() {
        this.isCollapsed = false;
    }
    CollapsesComponent.prototype.collapsed = function (event) {
        // console.log(event);
    };
    CollapsesComponent.prototype.expanded = function (event) {
        // console.log(event);
    };
    CollapsesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./collapses.component.html */ "./src/app/views/base/collapses.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], CollapsesComponent);
    return CollapsesComponent;
}());



/***/ }),

/***/ "./src/app/views/base/forms.component.html":
/*!*************************************************!*\
  !*** ./src/app/views/base/forms.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Credit Card</strong>\n          <small>Form</small>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label for=\"name\">Name</label>\n                <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Enter your name\">\n              </div>\n            </div>\n          </div><!--/.row-->\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label for=\"ccnumber\">Credit Card Number</label>\n                <input type=\"text\" class=\"form-control\" id=\"ccnumber\" placeholder=\"0000 0000 0000 0000\">\n              </div>\n            </div>\n          </div><!--/.row-->\n          <div class=\"row\">\n            <div class=\"form-group col-sm-4\">\n              <label for=\"ccmonth\">Month</label>\n              <select class=\"form-control\" id=\"ccmonth\">\n                <option>1</option>\n                <option>2</option>\n                <option>3</option>\n                <option>4</option>\n                <option>5</option>\n                <option>6</option>\n                <option>7</option>\n                <option>8</option>\n                <option>9</option>\n                <option>10</option>\n                <option>11</option>\n                <option>12</option>\n              </select>\n            </div>\n            <div class=\"form-group col-sm-4\">\n              <label for=\"ccyear\">Year</label>\n              <select class=\"form-control\" id=\"ccyear\">\n                <option>2014</option>\n                <option>2015</option>\n                <option>2016</option>\n                <option>2017</option>\n                <option>2018</option>\n                <option>2019</option>\n                <option>2020</option>\n                <option>2021</option>\n                <option>2022</option>\n                <option>2023</option>\n                <option>2024</option>\n                <option>2025</option>\n              </select>\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label for=\"cvv\">CVV/CVC</label>\n                <input type=\"text\" class=\"form-control\" id=\"cvv\" placeholder=\"123\">\n              </div>\n            </div>\n          </div><!--/.row-->\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Company</strong>\n          <small>Form</small>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"form-group\">\n            <label for=\"company\">Company</label>\n            <input type=\"text\" class=\"form-control\" id=\"company\" placeholder=\"Enter your company name\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"vat\">VAT</label>\n            <input type=\"text\" class=\"form-control\" id=\"vat\" placeholder=\"PL1234567890\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"street\">Street</label>\n            <input type=\"text\" class=\"form-control\" id=\"street\" placeholder=\"Enter street name\">\n          </div>\n          <div class=\"row\">\n            <div class=\"form-group col-sm-8\">\n              <label for=\"city\">City</label>\n              <input type=\"text\" class=\"form-control\" id=\"city\" placeholder=\"Enter your city\">\n            </div>\n            <div class=\"form-group col-sm-4\">\n              <label for=\"postal-code\">Postal Code</label>\n              <input type=\"text\" class=\"form-control\" id=\"postal-code\" placeholder=\"Postal Code\">\n            </div>\n          </div><!--/.row-->\n          <div class=\"form-group\">\n            <label for=\"country\">Country</label>\n            <input type=\"text\" class=\"form-control\" id=\"country\" placeholder=\"Country name\">\n          </div>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Basic Form</strong> Elements\n        </div>\n        <div class=\"card-body\">\n          <form action=\"\" method=\"post\" enctype=\"multipart/form-data\" class=\"form-horizontal\">\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\">Static</label>\n              <div class=\"col-md-9\">\n                <p class=\"form-control-static\">Username</p>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"text-input\">Text Input</label>\n              <div class=\"col-md-9\">\n                <input type=\"text\" id=\"text-input\" name=\"text-input\" class=\"form-control\" placeholder=\"Text\">\n                <span class=\"help-block\">This is a help text</span>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"email-input\">Email Input</label>\n              <div class=\"col-md-9\">\n                <input type=\"email\" id=\"email-input\" name=\"email-input\" class=\"form-control\" placeholder=\"Enter Email\">\n                <span class=\"help-block\">Please enter your email</span>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"password-input\">Password</label>\n              <div class=\"col-md-9\">\n                <input type=\"password\" id=\"password-input\" name=\"password-input\" class=\"form-control\" placeholder=\"Password\">\n                <span class=\"help-block\">Please enter a complex password</span>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"disabled-input\">Disabled Input</label>\n              <div class=\"col-md-9\">\n                <input type=\"text\" id=\"disabled-input\" name=\"disabled-input\" class=\"form-control\" placeholder=\"Disabled\" disabled>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"textarea-input\">Textarea</label>\n              <div class=\"col-md-9\">\n                <textarea id=\"textarea-input\" name=\"textarea-input\" rows=\"9\" class=\"form-control\" placeholder=\"Content..\"></textarea>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"select1\">Select</label>\n              <div class=\"col-md-9\">\n                <select id=\"select1\" name=\"select1\" class=\"form-control\">\n                  <option value=\"0\">Please select</option>\n                  <option value=\"1\">Option #1</option>\n                  <option value=\"2\">Option #2</option>\n                  <option value=\"3\">Option #3</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"select2\">Select Large</label>\n              <div class=\"col-md-9\">\n                <select id=\"select2\" name=\"select2\" class=\"form-control form-control-lg\">\n                  <option value=\"0\">Please select</option>\n                  <option value=\"1\">Option #1</option>\n                  <option value=\"2\">Option #2</option>\n                  <option value=\"3\">Option #3</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"select3\">Select Small</label>\n              <div class=\"col-md-9\">\n                <select id=\"select3\" name=\"select3\" class=\"form-control form-control-sm\">\n                  <option value=\"0\">Please select</option>\n                  <option value=\"1\">Option #1</option>\n                  <option value=\"2\">Option #2</option>\n                  <option value=\"3\">Option #3</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"disabledSelect\">Disabled Select</label>\n              <div class=\"col-md-9\">\n                <select id=\"disabledSelect\" class=\"form-control\" disabled>\n                  <option value=\"0\">Please select</option>\n                  <option value=\"1\">Option #1</option>\n                  <option value=\"2\">Option #2</option>\n                  <option value=\"3\">Option #3</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"multiple-select\">Multiple select</label>\n              <div class=\"col-md-9\">\n                <select id=\"multiple-select\" name=\"multiple-select\" class=\"form-control\" size=\"5\" multiple>\n                  <option value=\"1\">Option #1</option>\n                  <option value=\"2\">Option #2</option>\n                  <option value=\"3\">Option #3</option>\n                  <option value=\"4\">Option #4</option>\n                  <option value=\"5\">Option #5</option>\n                  <option value=\"6\">Option #6</option>\n                  <option value=\"7\">Option #7</option>\n                  <option value=\"8\">Option #8</option>\n                  <option value=\"9\">Option #9</option>\n                  <option value=\"10\">Option #10</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" >Radios</label>\n              <div class=\"col-md-9 col-form-label\">\n                <div class=\"form-check\">\n                  <input class=\"form-check-input\" type=\"radio\" name=\"radios\" id=\"radio1\" value=\"option1\" checked>\n                  <label class=\"form-check-label\" for=\"radio1\">\n                    Option 1\n                  </label>\n                </div>\n                <div class=\"form-check\">\n                  <input class=\"form-check-input\" type=\"radio\" name=\"radios\" id=\"radio2\" value=\"option2\">\n                  <label class=\"form-check-label\" for=\"radio2\">\n                    Option 2\n                  </label>\n                </div>\n                <div class=\"form-check\">\n                  <input class=\"form-check-input\" type=\"radio\" name=\"radios\" id=\"radio3\" value=\"option3\">\n                  <label class=\"form-check-label\" for=\"radio3\">\n                    Option 3\n                  </label>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"inline-radios\">Inline Radios</label>\n              <div class=\"col-md-9 col-form-label\">\n                <div class=\"form-check form-check-inline mr-1\" id=\"inline-radios\">\n                  <input class=\"form-check-input\" type=\"radio\" name=\"inline-radios\" id=\"inlineRadio1\" value=\"option1\">\n                  <label class=\"form-check-label\" for=\"inlineRadio1\">One</label>\n                </div>\n                <div class=\"form-check form-check-inline mr-1\">\n                  <input class=\"form-check-input\" type=\"radio\" name=\"inline-radios\" id=\"inlineRadio2\" value=\"option2\">\n                  <label class=\"form-check-label\" for=\"inlineRadio2\">Two</label>\n                </div>\n                <div class=\"form-check form-check-inline mr-1\">\n                  <input class=\"form-check-input\" type=\"radio\" name=\"inline-radios\" id=\"inlineRadio3\" value=\"option3\">\n                  <label class=\"form-check-label\" for=\"inlineRadio3\">Three</label>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\">Checkboxes</label>\n              <div class=\"col-md-9 col-form-label\">\n                <div class=\"form-check\">\n                  <input class=\"form-check-input\" type=\"checkbox\" value=\"option1\" id=\"checkbox1\">\n                  <label class=\"form-check-label\" for=\"checkbox1\">\n                    Option 1\n                  </label>\n                </div>\n                <div class=\"form-check\">\n                  <input class=\"form-check-input\" type=\"checkbox\" value=\"option1\" id=\"checkbox2\">\n                  <label class=\"form-check-label\" for=\"checkbox2\">\n                    Option 2\n                  </label>\n                </div>\n                <div class=\"form-check checkbox\">\n                  <input class=\"form-check-input\" type=\"checkbox\" value=\"option1\" id=\"checkbox3\">\n                  <label class=\"form-check-label\" for=\"checkbox3\">\n                    Option 3\n                  </label>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\">Inline Checkboxes</label>\n              <div class=\"col-md-9 col-form-label\">\n                <div class=\"form-check form-check-inline mr-1\">\n                  <input class=\"form-check-input\" type=\"checkbox\" id=\"inline-checkbox1\" value=\"option1\">\n                  <label class=\"form-check-label\" for=\"inline-checkbox1\">One</label>\n                </div>\n                <div class=\"form-check form-check-inline mr-1\">\n                  <input class=\"form-check-input\" type=\"checkbox\" id=\"inline-checkbox2\" value=\"option2\">\n                  <label class=\"form-check-label\" for=\"inline-checkbox2\">Two</label>\n                </div>\n                <div class=\"form-check form-check-inline mr-1\">\n                  <input class=\"form-check-input\" type=\"checkbox\" id=\"inline-checkbox3\" value=\"option3\">\n                  <label class=\"form-check-label\" for=\"inline-checkbox3\">Three</label>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"file-input\">File input</label>\n              <div class=\"col-md-9\">\n                <input type=\"file\" id=\"file-input\" name=\"file-input\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"file-multiple-input\">Multiple File input</label>\n              <div class=\"col-md-9\">\n                <input type=\"file\" id=\"file-multiple-input\" name=\"file-multiple-input\" multiple>\n              </div>\n            </div>\n          </form>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"submit\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n          <button type=\"reset\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Inline</strong> Form\n        </div>\n        <div class=\"card-body\">\n          <form action=\"\" method=\"post\" class=\"form-inline\">\n            <div class=\"form-group\">\n              <label class=\"sr-only\" for=\"if-email\">Email</label>\n              <input type=\"email\" id=\"if-email\" name=\"if-email\" class=\"form-control\" placeholder=\"Enter Email..\">\n            </div>\n            <div class=\"form-group\">\n              <label class=\"sr-only\" for=\"if-password\">Password</label>\n              <input type=\"password\" id=\"if-password\" name=\"if-password\" class=\"form-control\" placeholder=\"Enter Password..\">\n            </div>\n          </form>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"submit\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n          <button type=\"reset\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Horizontal</strong> Form\n        </div>\n        <div class=\"card-body\">\n          <form action=\"\" method=\"post\" class=\"form-horizontal\">\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"hf-email\">Email</label>\n              <div class=\"col-md-9\">\n                <input type=\"email\" id=\"hf-email\" name=\"hf-email\" class=\"form-control\" placeholder=\"Enter Email..\">\n                <span class=\"help-block\">Please enter your email</span>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"hf-password\">Password</label>\n              <div class=\"col-md-9\">\n                <input type=\"password\" id=\"hf-password\" name=\"hf-password\" class=\"form-control\" placeholder=\"Enter Password..\">\n                <span class=\"help-block\">Please enter your password</span>\n              </div>\n            </div>\n          </form>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"submit\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n          <button type=\"reset\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Normal</strong> Form\n        </div>\n        <div class=\"card-body\">\n          <form action=\"\" method=\"post\">\n            <div class=\"form-group\">\n              <label for=\"nf-email\">Email</label>\n              <input type=\"email\" id=\"nf-email\" name=\"nf-email\" class=\"form-control\" placeholder=\"Enter Email..\">\n              <span class=\"help-block\">Please enter your email</span>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"nf-password\">Password</label>\n              <input type=\"password\" id=\"nf-password\" name=\"nf-password\" class=\"form-control\" placeholder=\"Enter Password..\">\n              <span class=\"help-block\">Please enter your password</span>\n            </div>\n          </form>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"submit\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n          <button type=\"reset\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Input\n          <strong>Grid</strong>\n        </div>\n        <div class=\"card-body\">\n          <form action=\"\" method=\"post\" class=\"form-horizontal\">\n            <div class=\"form-group row\">\n              <div class=\"col-sm-3\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-sm-3\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-sm-4\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-sm-4\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-sm-5\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-sm-5\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-sm-6\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-sm-6\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-sm-7\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-sm-7\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-sm-8\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-sm-8\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-sm-9\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-sm-9\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-sm-10\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-sm-10\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-sm-11\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-sm-11\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-sm-12\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-sm-12\">\n              </div>\n            </div>\n          </form>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"submit\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-user\"></i> Login</button>\n          <button type=\"reset\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Input\n          <strong>Sizes</strong>\n        </div>\n        <div class=\"card-body\">\n          <form action=\"\" method=\"post\" class=\"form-horizontal\">\n            <div class=\"form-group row\">\n              <label class=\"col-sm-5 col-form-label\" for=\"input-small\">Small Input</label>\n              <div class=\"col-sm-6\">\n                <input type=\"text\" id=\"input-small\" name=\"input-small\" class=\"form-control form-control-sm\" placeholder=\".form-control-sm\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-sm-5 col-form-label\" for=\"input-normal\">Normal Input</label>\n              <div class=\"col-sm-6\">\n                <input type=\"text\" id=\"input-normal\" name=\"input-normal\" class=\"form-control\" placeholder=\"Normal\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-sm-5 col-form-label\" for=\"input-large\">Large Input</label>\n              <div class=\"col-sm-6\">\n                <input type=\"text\" id=\"input-large\" name=\"input-large\" class=\"form-control form-control-lg\" placeholder=\".form-control-lg\">\n              </div>\n            </div>\n          </form>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"submit\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n          <button type=\"reset\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Validation states</strong> Form\n        </div>\n        <div class=\"card-body\">\n          <div class=\"form-group has-success\">\n            <label class=\"form-col-form-label\" for=\"inputSuccess1\">Input with success</label>\n            <input type=\"text\" class=\"form-control\" id=\"inputSuccess1\">\n          </div>\n          <div class=\"form-group has-warning\">\n            <label class=\"form-col-form-label\" for=\"inputWarning1\">Input with warning</label>\n            <input type=\"text\" class=\"form-control\" id=\"inputWarning1\">\n          </div>\n          <div class=\"form-group has-danger\">\n            <label class=\"form-col-form-label\" for=\"inputError1\">Input with error</label>\n            <input type=\"text\" class=\"form-control\" id=\"inputError1\">\n          </div>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Validation states</strong> with optional icons\n        </div>\n        <div class=\"card-body\">\n          <div class=\"form-group has-success\">\n            <label class=\"form-col-form-label\" for=\"inputSuccess2\">Input with success</label>\n            <input type=\"text\" class=\"form-control form-control-success\" id=\"inputSuccess2\">\n          </div>\n          <div class=\"form-group has-warning\">\n            <label class=\"form-col-form-label\" for=\"inputWarning2\">Input with warning</label>\n            <input type=\"text\" class=\"form-control form-control-warning\" id=\"inputWarning2\">\n          </div>\n          <div class=\"form-group has-danger has-feedback\">\n            <label class=\"form-col-form-label\" for=\"inputError2\">Input with error</label>\n            <input type=\"text\" class=\"form-control form-control-danger\" id=\"inputError2\">\n          </div>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Icon/Text</strong> Groups\n        </div>\n        <div class=\"card-body\">\n          <form action=\"\" method=\"post\" class=\"form-horizontal\">\n            <div class=\"form-group row\">\n              <div class=\"col-md-12\">\n                <div class=\"input-group\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"fa fa-user\"></i></span>\n                  </div>\n                  <input type=\"text\" id=\"input1-group1\" name=\"input1-group1\" class=\"form-control\" placeholder=\"Username\">\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-md-12\">\n                <div class=\"input-group\">\n                  <input type=\"email\" id=\"input2-group1\" name=\"input2-group1\" class=\"form-control\" placeholder=\"Email\">\n                  <div class=\"input-group-append\">\n                    <span class=\"input-group-text\"><i class=\"fa fa-envelope-o\"></i></span>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-md-12\">\n                <div class=\"input-group\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"fa fa-euro\"></i></span>\n                  </div>\n                  <input type=\"text\" id=\"input3-group1\" name=\"input3-group1\" class=\"form-control\" placeholder=\"..\">\n                  <div class=\"input-group-append\">\n                    <span class=\"input-group-text\">.00</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"submit\" class=\"btn btn-sm btn-success\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n          <button type=\"reset\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-4\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Buttons</strong> Groups\n        </div>\n        <div class=\"card-body\">\n          <form action=\"\" method=\"post\" class=\"form-horizontal\">\n            <div class=\"form-group row\">\n              <div class=\"col-md-12\">\n                <div class=\"input-group\">\n                  <span class=\"input-group-prepend\">\n                    <button type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-search\"></i> Search</button>\n                  </span>\n                  <input type=\"text\" id=\"input1-group2\" name=\"input1-group2\" class=\"form-control\" placeholder=\"Username\">\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-md-12\">\n                <div class=\"input-group\">\n                  <input type=\"email\" id=\"input2-group2\" name=\"input2-group2\" class=\"form-control\" placeholder=\"Email\">\n                  <span class=\"input-group-append\">\n                    <button type=\"button\" class=\"btn btn-primary\">Submit</button>\n                  </span>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-md-12\">\n                <div class=\"input-group\">\n                  <span class=\"input-group-prepend\">\n                    <button type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-facebook\"></i></button>\n                  </span>\n                  <input type=\"text\" id=\"input3-group2\" name=\"input3-group2\" class=\"form-control\" placeholder=\"Search\">\n                  <span class=\"input-group-append\">\n                    <button type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-twitter\"></i></button>\n                  </span>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"submit\" class=\"btn btn-sm btn-success\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n          <button type=\"reset\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-4\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Dropdowns</strong> Groups\n        </div>\n        <div class=\"card-body\">\n\n          <form action=\"\" method=\"post\" class=\"form-horizontal\">\n            <div class=\"form-group row\">\n              <div class=\"col-md-12\">\n                <div class=\"input-group\">\n                  <div class=\"input-group-prepend\" dropdown>\n                    <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" dropdownToggle>Action\n                      <span class=\"caret\"></span>\n                    </button>\n                    <div class=\"dropdown-menu\" *dropdownMenu>\n                      <a class=\"dropdown-item\" href=\"#\">Action</a>\n                      <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                      <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                      <div role=\"separator\" class=\"dropdown-divider\"></div>\n                      <a class=\"dropdown-item\" href=\"#\">Separated link</a>\n                    </div>\n                  </div>\n                  <input type=\"text\" id=\"input1-group3\" name=\"input1-group3\" class=\"form-control\" placeholder=\"Username\">\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-md-12\">\n                <div class=\"input-group\">\n                  <input type=\"email\" id=\"input2-group3\" name=\"input2-group3\" class=\"form-control\" placeholder=\"Email\">\n                  <div class=\"input-group-append\" dropdown>\n                    <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" dropdownToggle>Action\n                      <span class=\"caret\"></span>\n                    </button>\n                    <div class=\"dropdown-menu\" *dropdownMenu>\n                      <a class=\"dropdown-item\" href=\"#\">Action</a>\n                      <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                      <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                      <div role=\"separator\" class=\"dropdown-divider\"></div>\n                      <a class=\"dropdown-item\" href=\"#\">Separated link</a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-md-12\">\n                <div class=\"input-group\">\n                  <div class=\"input-group-prepend\" dropdown>\n                    <button type=\"button\" class=\"btn btn-primary\">Action</button>\n                    <button type=\"button\" dropdownToggle class=\"btn btn-primary dropdown-toggle dropdown-toggle-split\">\n                      <span class=\"caret\"></span>\n                      <span class=\"sr-only\">Split button!</span>\n                    </button>\n                    <div class=\"dropdown-menu\" *dropdownMenu>\n                      <a class=\"dropdown-item\" href=\"#\">Action prepend</a>\n                      <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                      <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                      <div role=\"separator\" class=\"dropdown-divider\"></div>\n                      <a class=\"dropdown-item\" href=\"#\">Separated link</a>\n                    </div>\n                  </div>\n                  <input type=\"text\" id=\"input3-group3\" name=\"input3-group3\" class=\"form-control\" placeholder=\"..\">\n                  <div class=\"input-group-append\" dropdown>\n                    <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" dropdownToggle>Action\n                      <span class=\"caret\"></span>\n                    </button>\n                    <div class=\"dropdown-menu\" *dropdownMenu>\n                      <a class=\"dropdown-item\" href=\"#\">Action append</a>\n                      <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                      <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                      <div role=\"separator\" class=\"dropdown-divider\"></div>\n                      <a class=\"dropdown-item\" href=\"#\">Separated link</a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"submit\" class=\"btn btn-sm btn-success\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n          <button type=\"reset\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Use the grid for big devices!\n          <small>\n            <code>.col-lg-*</code>\n            <code>.col-md-*</code>\n            <code>.col-sm-*</code>\n          </small>\n        </div>\n        <div class=\"card-body\">\n          <form action=\"\" method=\"post\" class=\"form-horizontal\">\n            <div class=\"form-group row\">\n              <div class=\"col-md-8\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-md-8\">\n              </div>\n              <div class=\"col-md-4\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-md-4\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-md-7\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-md-7\">\n              </div>\n              <div class=\"col-md-5\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-md-5\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-md-6\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-md-6\">\n              </div>\n              <div class=\"col-md-6\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-md-6\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-md-5\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-md-5\">\n              </div>\n              <div class=\"col-md-7\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-md-7\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-md-4\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-md-4\">\n              </div>\n              <div class=\"col-md-8\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-md-8\">\n              </div>\n            </div>\n          </form>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"submit\" class=\"btn btn-sm btn-primary\">Action</button>\n          <button type=\"button\" class=\"btn btn-sm btn-danger\">Action</button>\n          <button type=\"button\" class=\"btn btn-sm btn-warning\">Action</button>\n          <button type=\"button\" class=\"btn btn-sm btn-info\">Action</button>\n          <button type=\"button\" class=\"btn btn-sm btn-success\">Action</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Input Grid for small devices!\n          <small>\n            <code>.col-*</code>\n          </small>\n        </div>\n        <div class=\"card-body\">\n          <form action=\"\" method=\"post\" class=\"form-horizontal\">\n            <div class=\"form-group row\">\n              <div class=\"col-4\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-4\">\n              </div>\n              <div class=\"col-8\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-8\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-5\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-5\">\n              </div>\n              <div class=\"col-7\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-7\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-6\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-6\">\n              </div>\n              <div class=\"col-6\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-6\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-7\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-5\">\n              </div>\n              <div class=\"col-5\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-5\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-8\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-8\">\n              </div>\n              <div class=\"col-4\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-4\">\n              </div>\n            </div>\n          </form>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"submit\" class=\"btn btn-sm btn-primary\">Action</button>\n          <button type=\"button\" class=\"btn btn-sm btn-danger\">Action</button>\n          <button type=\"button\" class=\"btn btn-sm btn-warning\">Action</button>\n          <button type=\"button\" class=\"btn btn-sm btn-info\">Action</button>\n          <button type=\"button\" class=\"btn btn-sm btn-success\">Action</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Example Form\n        </div>\n        <div class=\"card-body\">\n          <form action=\"\" method=\"post\">\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\">Username</span>\n                </div>\n                <input type=\"text\" id=\"username3\" name=\"username3\" class=\"form-control\">\n                <div class=\"input-group-append\">\n                  <span class=\"input-group-text\"><i class=\"fa fa-user\"></i></span>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\">Email</span>\n                </div>\n                <input type=\"email\" id=\"email3\" name=\"email3\" class=\"form-control\">\n                <div class=\"input-group-append\">\n                  <span class=\"input-group-text\"><i class=\"fa fa-envelope\"></i></span>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\">Password</span>\n                </div>\n                <input type=\"password\" id=\"password3\" name=\"password3\" class=\"form-control\">\n                <div class=\"input-group-append\">\n                  <span class=\"input-group-text\"><i class=\"fa fa-asterisk\"></i></span>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group form-actions\">\n              <button type=\"submit\" class=\"btn btn-sm btn-primary\">Submit</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-4\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Example Form <code>append</code>\n        </div>\n        <div class=\"card-body\">\n          <form action=\"\" method=\"post\">\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <input type=\"text\" id=\"username2\" name=\"username2\" class=\"form-control\" placeholder=\"Username\">\n                <div class=\"input-group-append\">\n                  <span class=\"input-group-text\"><i class=\"fa fa-user\"></i></span>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <input type=\"email\" id=\"email2\" name=\"email2\" class=\"form-control\" placeholder=\"Email\">\n                <div class=\"input-group-append\">\n                  <span class=\"input-group-text\"><i class=\"fa fa-envelope\"></i></span>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <input type=\"password\" id=\"password2\" name=\"password2\" class=\"form-control\" placeholder=\"Password\">\n                <div class=\"input-group-append\">\n                  <span class=\"input-group-text\"><i class=\"fa fa-asterisk\"></i></span>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group form-actions\">\n              <button type=\"submit\" class=\"btn btn-sm btn-secondary\">Submit</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-4\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Example Form <code>prepend</code>\n        </div>\n        <div class=\"card-body\">\n          <form action=\"\" method=\"post\">\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"fa fa-user\"></i></span>\n                </div>\n                <input type=\"text\" id=\"username\" name=\"username\" class=\"form-control\" placeholder=\"Username\">\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"fa fa-envelope\"></i></span>\n                </div>\n                <input type=\"email\" id=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Email\">\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"fa fa-asterisk\"></i></span>\n                </div>\n                <input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\">\n              </div>\n            </div>\n            <div class=\"form-group form-actions\">\n              <button type=\"submit\" class=\"btn btn-sm btn-success\">Submit</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!--/.row-->\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-edit\"></i>Form Elements\n          <div class=\"card-header-actions\">\n            <a href=\"#\" class=\"btn-setting\"><i class=\"icon-settings\"></i></a>\n            <button type=\"button\" class=\"btn btn-minimize\"\n                    (click)=\"toggleCollapse()\"><i class={{iconCollapse}}></i>\n            </button>\n            <a href=\"#\" class=\"btn-close\"><i class=\"icon-close\"></i></a>\n          </div>\n        </div>\n        <div (collapsed)=\"collapsed($event)\"\n             (expanded)=\"expanded($event)\"\n             [collapse]=\"isCollapsed\"\n             class=\"card-body\">\n          <form class=\"form-horizontal\">\n          <div class=\"form-group\">\n            <label class=\"col-form-label\" for=\"prependedInput\">Prepended text</label>\n            <div class=\"controls\">\n              <div class=\"input-prepend input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\">@</span>\n                </div>\n                <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\">\n              </div>\n              <p class=\"help-block\">Here's some help text</p>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-form-label\" for=\"appendedInput\">Appended text</label>\n            <div class=\"controls\">\n              <div class=\"input-group\">\n                <input id=\"appendedInput\" class=\"form-control\" size=\"16\" type=\"text\">\n                <div class=\"input-group-append\">\n                  <span class=\"input-group-text\">.00</span>\n                </div>\n              </div>\n              <span class=\"help-block\">Here's more help text</span>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-form-label\" for=\"appendedPrependedInput\">Append and prepend</label>\n            <div class=\"controls\">\n              <div class=\"input-prepend input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\">$</span>\n                </div>\n                <input id=\"appendedPrependedInput\" class=\"form-control\" size=\"16\" type=\"text\">\n                <div class=\"input-group-append\">\n                  <span class=\"input-group-text\">.00</span>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-form-label\" for=\"appendedInputButton\">Append with button</label>\n            <div class=\"controls\">\n              <div class=\"input-group\">\n                <input id=\"appendedInputButton\" class=\"form-control\" size=\"16\" type=\"text\">\n                <span class=\"input-group-append\">\n                  <button class=\"btn btn-secondary\" type=\"button\">Go!</button>\n                </span>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-form-label\" for=\"appendedInputButtons\">Two-button append</label>\n            <div class=\"controls\">\n              <div class=\"input-group\">\n                <input id=\"appendedInputButtons\" size=\"16\" class=\"form-control\" type=\"text\">\n                <span class=\"input-group-append\">\n                  <button class=\"btn btn-secondary\" type=\"button\">Search</button>\n                  <button class=\"btn btn-secondary\" type=\"button\">Options</button>\n                </span>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-actions\">\n            <button type=\"submit\" class=\"btn btn-primary\">Save changes</button>\n            <button class=\"btn btn-secondary\" type=\"button\">Cancel</button>\n          </div>\n        </form>\n        </div>\n      </div>\n    </div> <!--/.col-->\n  </div><!--/.row-->\n</div>\n"

/***/ }),

/***/ "./src/app/views/base/forms.component.ts":
/*!***********************************************!*\
  !*** ./src/app/views/base/forms.component.ts ***!
  \***********************************************/
/*! exports provided: FormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsComponent", function() { return FormsComponent; });
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

var FormsComponent = /** @class */ (function () {
    function FormsComponent() {
        this.isCollapsed = false;
        this.iconCollapse = "icon-arrow-up";
    }
    FormsComponent.prototype.collapsed = function (event) {
        // console.log(event);
    };
    FormsComponent.prototype.expanded = function (event) {
        // console.log(event);
    };
    FormsComponent.prototype.toggleCollapse = function () {
        this.isCollapsed = !this.isCollapsed;
        this.iconCollapse = this.isCollapsed ? "icon-arrow-down" : "icon-arrow-up";
    };
    FormsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./forms.component.html */ "./src/app/views/base/forms.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], FormsComponent);
    return FormsComponent;
}());



/***/ }),

/***/ "./src/app/views/base/paginations.component.html":
/*!*******************************************************!*\
  !*** ./src/app/views/base/paginations.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Bootstrap Pagination\n      <div class=\"card-header-actions\">\n        <a href=\"https://valor-software.com/ngx-bootstrap/#/pagination\" target=\"_blank\">\n          <small className=\"text-muted\">docs</small>\n        </a>\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-12 d-sm-down-none\">\n          <pagination [totalItems]=\"totalItems\" [(ngModel)]=\"currentPage\" (pageChanged)=\"pageChanged($event)\"></pagination>\n        </div>\n        <div class=\"col-xs-12 col-12\">\n          <pagination [boundaryLinks]=\"true\" [totalItems]=\"totalItems\" [(ngModel)]=\"currentPage\" class=\"pagination-sm\" [maxSize]=\"6\"\n                      previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\"></pagination>\n        </div>\n        <div class=\"col-xs-12 col-12 d-sm-down-none\">\n          <pagination [directionLinks]=\"false\" [boundaryLinks]=\"true\" [totalItems]=\"totalItems\"\n                      [(ngModel)]=\"currentPage\"></pagination>\n        </div>\n        <div class=\"col-xs-12 col-12\">\n          <pagination [directionLinks]=\"false\" [totalItems]=\"totalItems\" [(ngModel)]=\"currentPage\"\n                      (numPages)=\"smallnumPages = $event\"></pagination>\n        </div>\n      </div>\n      <pre class=\"card card-body card-header mb-3\">The selected page no: {{currentPage}}/{{smallnumPages}}</pre>\n    </div>\n    <div class=\"card-footer\">\n      <button type=\"button\" class=\"btn btn-info\" (click)=\"setPage(3)\">Set current page to: 3</button>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Pagination <small>states & limits</small>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-12\">\n          <pagination [totalItems]=\"bigTotalItems\" [(ngModel)]=\"bigCurrentPage\" [maxSize]=\"maxSize\" class=\"pagination-sm\"\n                      previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" [boundaryLinks]=\"true\"></pagination>\n        </div>\n\n        <div class=\"col-xs-12 col-12\">\n          <pagination [totalItems]=\"bigTotalItems\" [(ngModel)]=\"bigCurrentPage\" [maxSize]=\"maxSize\" class=\"pagination-sm\"\n                      previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\"\n                      [boundaryLinks]=\"true\" [rotate]=\"false\" (numPages)=\"numPages = $event\"></pagination>\n        </div>\n      </div>\n      <pre class=\"card card-body card-header\">Page: {{bigCurrentPage}} / {{numPages}}</pre>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Pager\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-12 col-md-6\">\n          <pagination\n            [directionLinks]=\"false\"\n            [totalItems]=\"totalItems\"\n            [(ngModel)]=\"currentPager\"\n            (numPages)=\"smallnumPages = $event\">\n          </pagination>\n        </div>\n\n        <div class=\"col-xs-12 col-12 col-md-6\">\n          <pager\n            [totalItems]=\"totalItems\"\n            [(ngModel)]=\"currentPager\"\n            (pageChanged)=\"pageChanged($event)\"\n            pageBtnClass=\"btn\"\n            [itemsPerPage]=\"10\"\n            class=\"pull-left\">\n          </pager>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/base/paginations.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/base/paginations.component.ts ***!
  \*****************************************************/
/*! exports provided: PaginationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationsComponent", function() { return PaginationsComponent; });
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

var PaginationsComponent = /** @class */ (function () {
    function PaginationsComponent() {
        this.totalItems = 64;
        this.currentPage = 4;
        this.smallnumPages = 0;
        this.maxSize = 5;
        this.bigTotalItems = 675;
        this.bigCurrentPage = 1;
        this.numPages = 0;
        this.currentPager = 4;
    }
    PaginationsComponent.prototype.setPage = function (pageNo) {
        this.currentPage = pageNo;
    };
    PaginationsComponent.prototype.pageChanged = function (event) {
        console.log('Page changed to: ' + event.page);
        console.log('Number items per page: ' + event.itemsPerPage);
    };
    PaginationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./paginations.component.html */ "./src/app/views/base/paginations.component.html"),
            styles: ['.pager li.btn:active { box-shadow: none; }'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], PaginationsComponent);
    return PaginationsComponent;
}());



/***/ }),

/***/ "./src/app/views/base/popovers.component.html":
/*!****************************************************!*\
  !*** ./src/app/views/base/popovers.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Bootstrap Popover\n      <div class=\"card-header-actions\">\n        <a href=\"https://valor-software.com/ngx-bootstrap/#/popover\" target=\"_blank\">\n          <small className=\"text-muted\">docs</small>\n        </a>\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <button type=\"button\" class=\"btn btn-primary\"\n              popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\n        Live demo\n      </button>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Popover\n      <small>positioning</small>\n    </div>\n    <div class=\"card-body\">\n      <button type=\"button\" class=\"btn btn-default btn-secondary\"\n              popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n              popoverTitle=\"Popover on top\"\n              placement=\"top\">\n        Popover on top\n      </button>\n\n      <button type=\"button\" class=\"btn btn-default btn-secondary\"\n              popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n              popoverTitle=\"Popover on right\"\n              placement=\"right\">\n        Popover on right\n      </button>\n\n      <button type=\"button\" class=\"btn btn-default btn-secondary\"\n              popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n              popoverTitle=\"Popover auto\"\n              placement=\"auto\">\n        Popover auto\n      </button>\n\n      <button type=\"button\" class=\"btn btn-default btn-secondary\"\n              popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n              popoverTitle=\"Popover on left\"\n              placement=\"left\">\n        Popover on left\n      </button>\n\n      <button type=\"button\" class=\"btn btn-default btn-secondary\"\n              popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n              popoverTitle=\"Popover on bottom\"\n              placement=\"bottom\">\n        Popover on bottom\n      </button>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Popover\n      <small><code>focus</code> trigger</small>\n    </div>\n    <div class=\"card-body\">\n      <button type=\"button\" class=\"btn btn-success\"\n              popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n              popoverTitle=\"Dismissible popover\"\n              triggers=\"focus\">\n        Dismissible popover\n      </button>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Popover\n      <small>dynamic content</small>\n    </div>\n    <div class=\"card-body\">\n      <button type=\"button\" class=\"btn btn-info\"\n              [popover]=\"content\" [popoverTitle]=\"title\">\n        Simple binding\n      </button>\n\n      <ng-template #popTemplate>Just another: {{content}}</ng-template>\n      <button type=\"button\" class=\"btn btn-warning\"\n              [popover]=\"popTemplate\" popoverTitle=\"Template ref content inside\">\n        TemplateRef binding\n      </button>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Popover\n      <small>dynamic HTML</small>\n    </div>\n    <div class=\"card-body\">\n      <ng-template #popTemplateHtml>Here we go:\n        <div [innerHtml]=\"html\"></div>\n      </ng-template>\n      <button type=\"button\" class=\"btn btn-success\"\n              [popover]=\"popTemplateHtml\" popoverTitle=\"Dynamic html inside\">\n        Show me popover with html\n      </button>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Popover\n      <small>append to <code>body</code></small>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row panel\" style=\"position: relative; overflow: hidden;\">\n        <div class=\"card-body panel-body\">\n          <button type=\"button\" class=\"btn btn-danger\"\n                  popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\n            Default popover\n          </button>\n          <button type=\"button\" class=\"btn btn-success\"\n                  popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n                  container=\"body\">\n            Popover appended to body\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Popover\n      <small>custom triggers</small>\n    </div>\n    <div class=\"card-body\">\n      <button type=\"button\" class=\"btn btn-info\"\n              popover=\"I will hide on blur\"\n              triggers=\"mouseenter:mouseleave\">\n        Hover over me!\n      </button>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Popover\n      <small>manual triggering</small>\n    </div>\n    <div class=\"card-body\">\n      <p>\n        <span popover=\"Hello there! I was triggered manually\"\n              triggers=\"\" #pop=\"bs-popover\">\n        This text has attached popover\n        </span>\n      </p>\n      <button type=\"button\" class=\"btn btn-success\" (click)=\"pop.show()\">\n        Show\n      </button>\n      <button type=\"button\" class=\"btn btn-warning\" (click)=\"pop.hide()\">\n        Hide\n      </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/base/popovers.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/base/popovers.component.ts ***!
  \**************************************************/
/*! exports provided: PopoversComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoversComponent", function() { return PopoversComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopoversComponent = /** @class */ (function () {
    function PopoversComponent(sanitizer) {
        this.title = 'Welcome word';
        this.content = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.';
        this.html = "<span class=\"btn btn-warning\">Never trust not sanitized <code>HTML</code>!!!</span>";
        this.html = sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].HTML, this.html);
    }
    PopoversComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./popovers.component.html */ "./src/app/views/base/popovers.component.html")
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], PopoversComponent);
    return PopoversComponent;
}());



/***/ }),

/***/ "./src/app/views/base/progress.component.html":
/*!****************************************************!*\
  !*** ./src/app/views/base/progress.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Bootstrap Progress\n      <div class=\"card-header-actions\">\n        <a href=\"https://valor-software.com/ngx-bootstrap/#/progressbar\" target=\"_blank\">\n          <small className=\"text-muted\">docs</small>\n        </a>\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-sm-4\">\n          <progressbar class=\"progress\" [value]=\"55\" [max]=\"100\"></progressbar>\n        </div>\n        <div class=\"col-sm-4\">\n          <progressbar class=\"progress progress-striped\" [value]=\"22\" [max]=\"100\" type=\"warning\">22%</progressbar>\n        </div>\n        <div class=\"col-sm-4\">\n          <progressbar class=\"progress progress-striped active\" [max]=\"200\" [value]=\"166\" type=\"danger\"><i>166 / 200</i></progressbar>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Progress <small>dynamic</small>\n    </div>\n    <div class=\"card-body\">\n      <progressbar class=\"progress progress-striped progress-animated\" [max]=\"max\" [value]=\"dynamic\">\n        <span style=\"color:white; white-space:nowrap;\">{{dynamic}} / {{max}}</span>\n      </progressbar>\n\n      <small><em>No animation</em></small>\n      <progressbar class=\"progress progress-success\" [value]=\"dynamic\" [max]=\"100\" type=\"success\"><b>{{dynamic}}%</b></progressbar>\n\n      <small><em>Object (changes type based on value)</em></small>\n      <progressbar class=\"progress-bar progress-bar-striped progress-bar-animated\" [value]=\"dynamic\" [max]=\"max\" [type]=\"type\">\n        {{type}} <i *ngIf=\"showWarning\">!!! Watch out !!!</i>\n      </progressbar>\n      <br>\n      <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"random()\">Randomize</button>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Progress <small>stacked</small>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row col-lg-12\">\n        <progressbar class=\"progress\" [value]=\"stacked\" [max]=\"100\"></progressbar>\n      </div>\n      <br>\n      <div class=\"row col-md-12\">\n        <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"randomize()\">{{buttonCaption}} randomize</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/base/progress.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/base/progress.component.ts ***!
  \**************************************************/
/*! exports provided: ProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressComponent", function() { return ProgressComponent; });
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

var ProgressComponent = /** @class */ (function () {
    function ProgressComponent() {
        this.max = 200;
        this.stacked = [];
        this.timer = null;
        this.buttonCaption = 'Start';
        this.random();
        this.randomStacked();
    }
    ProgressComponent.prototype.ngOnDestroy = function () {
        if (this.timer) {
            clearInterval(this.timer);
        }
        // console.log(`onDestroy`, this.timer);
    };
    ProgressComponent.prototype.random = function () {
        var value = Math.floor(Math.random() * 100 + 1);
        var type;
        if (value < 25) {
            type = 'success';
        }
        else if (value < 50) {
            type = 'info';
        }
        else if (value < 75) {
            type = 'warning';
        }
        else {
            type = 'danger';
        }
        this.showWarning = type === 'danger' || type === 'warning';
        this.dynamic = value;
        this.type = type;
    };
    ProgressComponent.prototype.randomStacked = function () {
        var types = ['success', 'info', 'warning', 'danger'];
        this.stacked = [];
        var n = Math.floor(Math.random() * 4 + 1);
        for (var i = 0; i < n; i++) {
            var index = Math.floor(Math.random() * 4);
            var value = Math.floor(Math.random() * 27 + 3);
            this.stacked.push({
                value: value,
                type: types[index],
                label: value + ' %'
            });
        }
    };
    ProgressComponent.prototype.randomize = function () {
        var _this = this;
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
        else {
            this.timer = setInterval(function () { return _this.randomStacked(); }, 2000);
        }
        this.buttonCaption = this.timer ? 'Stop' : 'Start';
    };
    ProgressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./progress.component.html */ "./src/app/views/base/progress.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], ProgressComponent);
    return ProgressComponent;
}());



/***/ }),

/***/ "./src/app/views/base/switches.component.html":
/*!****************************************************!*\
  !*** ./src/app/views/base/switches.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          3d Switch\n        </div>\n        <div class=\"card-body\">\n          <label class=\"switch switch-3d switch-primary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-3d switch-secondary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-3d switch-success\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-3d switch-warning\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-3d switch-info\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-3d switch-danger\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Switch default\n        </div>\n        <div class=\"card-body\">\n          <label class=\"switch switch-primary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-secondary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-success\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-warning\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-info\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-danger\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Switch default - pills\n        </div>\n        <div class=\"card-body\">\n          <label class=\"switch switch-pill switch-primary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-pill switch-secondary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-pill switch-success\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-pill switch-warning\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-pill switch-info\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-pill switch-danger\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n        </div>\n      </div>\n    </div><!--/.col-->\n\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Switch outline\n        </div>\n        <div class=\"card-body\">\n          <label class=\"switch switch-outline-primary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-outline-secondary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-outline-success\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-outline-warning\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-outline-info\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-outline-danger\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Switch outline - pills\n        </div>\n        <div class=\"card-body\">\n          <label class=\"switch switch-pill switch-outline-primary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-pill switch-outline-secondary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-pill switch-outline-success\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-pill switch-outline-warning\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-pill switch-outline-info\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-pill switch-outline-danger\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Switch outline alternative\n        </div>\n        <div class=\"card-body\">\n          <label class=\"switch switch-outline-primary-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-outline-secondary-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-outline-success-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-outline-warning-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-outline-info-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-outline-danger-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Switch outline alternative - pills\n        </div>\n        <div class=\"card-body\">\n          <label class=\"switch switch-pill switch-outline-primary-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-pill switch-outline-secondary-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-pill switch-outline-success-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-pill switch-outline-warning-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-pill switch-outline-info-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-pill switch-outline-danger-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Switch with text\n        </div>\n        <div class=\"card-body\">\n          <label class=\"switch switch-label switch-primary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-secondary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-success\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-warning\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-info\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-danger\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Switch with text - pills\n        </div>\n        <div class=\"card-body\">\n          <label class=\"switch switch-label switch-pill switch-primary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-secondary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-success\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-warning\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-info\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-danger\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Switch with text outline\n        </div>\n        <div class=\"card-body\">\n\n          <label class=\"switch switch-label switch-outline-primary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-outline-secondary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-outline-success\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-outline-warning\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-outline-info\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-outline-danger\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Switch with text outline - pills\n        </div>\n        <div class=\"card-body\">\n          <label class=\"switch switch-label switch-pill switch-outline-primary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-outline-secondary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-outline-success\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-outline-warning\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-outline-info\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-outline-danger\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Switch with text outline alternative\n        </div>\n        <div class=\"card-body\">\n          <label class=\"switch switch-label switch-outline-primary-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-outline-secondary-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-outline-success-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-outline-warning-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-outline-info-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-outline-danger-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Switch with text outline alternative - pills\n        </div>\n        <div class=\"card-body\">\n          <label class=\"switch switch-label switch-pill switch-outline-primary-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-outline-secondary-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-outline-success-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-outline-warning-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-outline-info-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-outline-danger-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Switch with icon\n        </div>\n        <div class=\"card-body\">\n          <label class=\"switch switch-label switch-primary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-secondary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-success\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-warning\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-info\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-danger\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Switch with icon - pills\n        </div>\n        <div class=\"card-body\">\n          <label class=\"switch switch-label switch-pill switch-primary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-secondary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-success\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-warning\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-info\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-danger\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Switch with icon outline\n        </div>\n        <div class=\"card-body\">\n          <label class=\"switch switch-label switch-outline-primary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-outline-secondary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-outline-success\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-outline-warning\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-outline-info\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-outline-danger\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Switch with icon outline - pills\n        </div>\n        <div class=\"card-body\">\n          <label class=\"switch switch-label switch-pill switch-outline-primary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-outline-secondary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-outline-success\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-outline-warning\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-outline-info\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-outline-danger\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Switch with icon outline alternative\n        </div>\n        <div class=\"card-body\">\n          <label class=\"switch switch-label switch-outline-primary-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-outline-secondary-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-outline-success-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-outline-warning-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-outline-info-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-outline-danger-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Switch with icon outline alternative - pills\n        </div>\n        <div class=\"card-body\">\n          <label class=\"switch switch-label switch-pill switch-outline-primary-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-outline-secondary-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-outline-success-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-outline-warning-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-outline-info-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-outline-danger-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Sizes\n        </div>\n        <div class=\"card-body p-0\">\n          <table class=\"table table-hover table-striped table-align-middle mb-0\">\n            <thead>\n              <th>Size</th>\n              <th>Example</th>\n              <th>CSS Class</th>\n            </thead>\n            <tbody>\n              <tr>\n                <td>\n                  Large\n                </td>\n                <td>\n                  <label class=\"switch switch-lg switch-3d switch-primary\">\n                    <input type=\"checkbox\" class=\"switch-input\" checked>\n                    <span class=\"switch-slider\"></span>\n                  </label>\n                </td>\n                <td>\n                  Add following class <code>.switch-lg</code>\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  Normal\n                </td>\n                <td>\n                  <label class=\"switch switch-3d switch-primary\">\n                    <input type=\"checkbox\" class=\"switch-input\" checked>\n                    <span class=\"switch-slider\"></span>\n                  </label>\n                </td>\n                <td>\n                  -\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  Small\n                </td>\n                <td>\n                  <label class=\"switch switch-sm switch-3d switch-primary\">\n                    <input type=\"checkbox\" class=\"switch-input\" checked>\n                    <span class=\"switch-slider\"></span>\n                  </label>\n                </td>\n                <td>\n                  Add following class <code>.switch-sm</code>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n</div>\n"

/***/ }),

/***/ "./src/app/views/base/switches.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/base/switches.component.ts ***!
  \**************************************************/
/*! exports provided: SwitchesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchesComponent", function() { return SwitchesComponent; });
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

var SwitchesComponent = /** @class */ (function () {
    function SwitchesComponent() {
    }
    SwitchesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./switches.component.html */ "./src/app/views/base/switches.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], SwitchesComponent);
    return SwitchesComponent;
}());



/***/ }),

/***/ "./src/app/views/base/tables.component.html":
/*!**************************************************!*\
  !*** ./src/app/views/base/tables.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-lg-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Simple Table\n        </div>\n        <div class=\"card-body\">\n          <table class=\"table\">\n            <thead>\n              <tr>\n                <th>Username</th>\n                <th>Date registered</th>\n                <th>Role</th>\n                <th>Status</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>Samppa Nori</td>\n                <td>2012/01/01</td>\n                <td>Member</td>\n                <td>\n                  <span class=\"badge badge-success\">Active</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Estavan Lykos</td>\n                <td>2012/02/01</td>\n                <td>Staff</td>\n                <td>\n                  <span class=\"badge badge-danger\">Banned</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Chetan Mohamed</td>\n                <td>2012/02/01</td>\n                <td>Admin</td>\n                <td>\n                  <span class=\"badge badge-secondary\">Inactive</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Derick Maximinus</td>\n                <td>2012/03/01</td>\n                <td>Member</td>\n                <td>\n                  <span class=\"badge badge-warning\">Pending</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Friderik Dávid</td>\n                <td>2012/01/21</td>\n                <td>Staff</td>\n                <td>\n                  <span class=\"badge badge-success\">Active</span>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <ul class=\"pagination\">\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a></li>\n            <li class=\"page-item active\">\n              <a class=\"page-link\" href=\"#\">1</a>\n            </li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n    <div class=\"col-lg-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Striped Table\n        </div>\n        <div class=\"card-body\">\n          <table class=\"table table-striped\">\n            <thead>\n              <tr>\n                <th>Username</th>\n                <th>Date registered</th>\n                <th>Role</th>\n                <th>Status</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>Yiorgos Avraamu</td>\n                <td>2012/01/01</td>\n                <td>Member</td>\n                <td>\n                  <span class=\"badge badge-success\">Active</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Avram Tarasios</td>\n                <td>2012/02/01</td>\n                <td>Staff</td>\n                <td>\n                  <span class=\"badge badge-danger\">Banned</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Quintin Ed</td>\n                <td>2012/02/01</td>\n                <td>Admin</td>\n                <td>\n                  <span class=\"badge badge-secondary\">Inactive</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Enéas Kwadwo</td>\n                <td>2012/03/01</td>\n                <td>Member</td>\n                <td>\n                  <span class=\"badge badge-warning\">Pending</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Agapetus Tadeáš</td>\n                <td>2012/01/21</td>\n                <td>Staff</td>\n                <td>\n                  <span class=\"badge badge-success\">Active</span>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <ul class=\"pagination\">\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a></li>\n            <li class=\"page-item active\">\n              <a class=\"page-link\" href=\"#\">1</a>\n            </li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n  </div>\n  <!--/.row-->\n  <div class=\"row\">\n    <div class=\"col-lg-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Condensed Table\n        </div>\n        <div class=\"card-body\">\n          <table class=\"table table-sm\">\n            <thead>\n              <tr>\n                <th>Username</th>\n                <th>Date registered</th>\n                <th>Role</th>\n                <th>Status</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>Carwyn Fachtna</td>\n                <td>2012/01/01</td>\n                <td>Member</td>\n                <td>\n                  <span class=\"badge badge-success\">Active</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Nehemiah Tatius</td>\n                <td>2012/02/01</td>\n                <td>Staff</td>\n                <td>\n                  <span class=\"badge badge-danger\">Banned</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Ebbe Gemariah</td>\n                <td>2012/02/01</td>\n                <td>Admin</td>\n                <td>\n                  <span class=\"badge badge-secondary\">Inactive</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Eustorgios Amulius</td>\n                <td>2012/03/01</td>\n                <td>Member</td>\n                <td>\n                  <span class=\"badge badge-warning\">Pending</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Leopold Gáspár</td>\n                <td>2012/01/21</td>\n                <td>Staff</td>\n                <td>\n                  <span class=\"badge badge-success\">Active</span>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <ul class=\"pagination\">\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a></li>\n            <li class=\"page-item active\">\n              <a class=\"page-link\" href=\"#\">1</a>\n            </li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n    <div class=\"col-lg-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Bordered Table\n        </div>\n        <div class=\"card-body\">\n          <table class=\"table table-bordered\">\n            <thead>\n              <tr>\n                <th>Username</th>\n                <th>Date registered</th>\n                <th>Role</th>\n                <th>Status</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>Pompeius René</td>\n                <td>2012/01/01</td>\n                <td>Member</td>\n                <td>\n                  <span class=\"badge badge-success\">Active</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Paĉjo Jadon</td>\n                <td>2012/02/01</td>\n                <td>Staff</td>\n                <td>\n                  <span class=\"badge badge-danger\">Banned</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Micheal Mercurius</td>\n                <td>2012/02/01</td>\n                <td>Admin</td>\n                <td>\n                  <span class=\"badge badge-secondary\">Inactive</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Ganesha Dubhghall</td>\n                <td>2012/03/01</td>\n                <td>Member</td>\n                <td>\n                  <span class=\"badge badge-warning\">Pending</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Hiroto Šimun</td>\n                <td>2012/01/21</td>\n                <td>Staff</td>\n                <td>\n                  <span class=\"badge badge-success\">Active</span>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <ul class=\"pagination\">\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a></li>\n            <li class=\"page-item active\">\n              <a class=\"page-link\" href=\"#\">1</a>\n            </li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n  </div>\n  <!--/.row-->\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Combined All Table\n        </div>\n        <div class=\"card-body\">\n          <table class=\"table table-bordered table-striped table-sm\">\n            <thead>\n              <tr>\n                <th>Username</th>\n                <th>Date registered</th>\n                <th>Role</th>\n                <th>Status</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>Vishnu Serghei</td>\n                <td>2012/01/01</td>\n                <td>Member</td>\n                <td>\n                  <span class=\"badge badge-success\">Active</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Zbyněk Phoibos</td>\n                <td>2012/02/01</td>\n                <td>Staff</td>\n                <td>\n                  <span class=\"badge badge-danger\">Banned</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Einar Randall</td>\n                <td>2012/02/01</td>\n                <td>Admin</td>\n                <td>\n                  <span class=\"badge badge-secondary\">Inactive</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Félix Troels</td>\n                <td>2012/03/01</td>\n                <td>Member</td>\n                <td>\n                  <span class=\"badge badge-warning\">Pending</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Aulus Agmundr</td>\n                <td>2012/01/21</td>\n                <td>Staff</td>\n                <td>\n                  <span class=\"badge badge-success\">Active</span>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <nav>\n            <ul class=\"pagination\">\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a></li>\n              <li class=\"page-item active\">\n                <a class=\"page-link\" href=\"#\">1</a>\n              </li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\n            </ul>\n          </nav>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n  </div>\n  <!--/.row-->\n</div>\n"

/***/ }),

/***/ "./src/app/views/base/tables.component.ts":
/*!************************************************!*\
  !*** ./src/app/views/base/tables.component.ts ***!
  \************************************************/
/*! exports provided: TablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesComponent", function() { return TablesComponent; });
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

var TablesComponent = /** @class */ (function () {
    function TablesComponent() {
    }
    TablesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./tables.component.html */ "./src/app/views/base/tables.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], TablesComponent);
    return TablesComponent;
}());



/***/ }),

/***/ "./src/app/views/base/tabs.component.html":
/*!************************************************!*\
  !*** ./src/app/views/base/tabs.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-md-6 mb-4\">\n      <!-- Nav tabs -->\n      <tabset>\n        <tab heading=\"Home\">\n          1. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </tab>\n        <tab heading=\"Profile\">\n          2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </tab>\n        <tab heading=\"Messages\">\n          3. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </tab>\n      </tabset>\n    </div><!--/.col-->\n    <div class=\"col-md-6 mb-4\">\n      <!-- Nav tabs -->\n      <tabset>\n        <tab>\n          <ng-template tabHeading><i class=\"icon-calculator\"></i></ng-template>\n          2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </tab>\n        <tab>\n          <ng-template tabHeading><i class=\"icon-basket-loaded\"></i></ng-template>\n          3. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </tab>\n        <tab>\n          <ng-template tabHeading><i class=\"icon-pie-chart\"></i></ng-template>\n          4. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </tab>\n      </tabset>\n    </div><!--/.col-->\n    <div class=\"col-md-6 mb-4\">\n      <!-- Nav tabs -->\n      <tabset>\n        <tab>\n          <ng-template tabHeading><i class=\"icon-calculator\"></i> Calculator</ng-template>\n          2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </tab>\n        <tab>\n          <ng-template tabHeading><i class=\"icon-basket-loaded\"></i> Shoping cart</ng-template>\n          3. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </tab>\n        <tab>\n          <ng-template tabHeading><i class=\"icon-pie-chart\"></i> Charts</ng-template>\n          4. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </tab>\n      </tabset>\n    </div><!--/.col-->\n    <div class=\"col-md-6 mb-4\">\n      <!-- Nav tabs -->\n      <tabset>\n        <tab>\n          <ng-template tabHeading><i class=\"icon-list\"></i> Menu &nbsp;<span class=\"badge badge-success\">New</span></ng-template>\n          1. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </tab>\n        <tab>\n          <ng-template tabHeading><i class=\"icon-calculator\"></i> Calculator &nbsp;<span class=\"badge badge-pill badge-danger\">29</span></ng-template>\n          2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </tab>\n        <tab>\n          <ng-template tabHeading><i class=\"icon-pie-chart\"></i> Charts</ng-template>\n          4. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </tab>\n      </tabset>\n    </div><!--/.col-->\n  </div><!--/.row-->\n</div>\n"

/***/ }),

/***/ "./src/app/views/base/tabs.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/base/tabs.component.ts ***!
  \**********************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
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

var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
    }
    TabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./tabs.component.html */ "./src/app/views/base/tabs.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "./src/app/views/base/tooltips.component.html":
/*!****************************************************!*\
  !*** ./src/app/views/base/tooltips.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Bootstrap Tooltips\n      <div class=\"card-header-actions\">\n        <a href=\"https://valor-software.com/ngx-bootstrap/#/tooltip\" target=\"_blank\">\n          <small className=\"text-muted\">docs</small>\n        </a>\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <button type=\"button\" class=\"btn btn-primary\"\n              tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\n        Simple demo\n      </button>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Tooltips <small>positioning</small>\n    </div>\n    <div class=\"card-body\">\n      <button type=\"button\" class=\"btn btn-default btn-secondary\"\n              tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n              placement=\"top\">\n        Tooltip on top\n      </button>\n\n      <button type=\"button\" class=\"btn btn-default btn-secondary\"\n              tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n              placement=\"right\">\n        Tooltip on right\n      </button>\n\n      <button type=\"button\" class=\"btn btn-default btn-secondary\"\n              tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n              placement=\"auto\">\n        Tooltip auto\n      </button>\n\n      <button type=\"button\" class=\"btn btn-default btn-secondary\"\n              tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n              placement=\"left\">\n        Tooltip on left\n      </button>\n\n      <button type=\"button\" class=\"btn btn-default btn-secondary\"\n              tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n              placement=\"bottom\">\n        Tooltip on bottom\n      </button>\n    </div>\n</div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Tooltips <small>dismissible</small>\n    </div>\n    <div class=\"card-body\">\n      <button type=\"button\" class=\"btn btn-success\"\n              tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n              triggers=\"focus\">\n        Dismissible tooltip\n      </button>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Tooltips <small>dynamic content</small>\n    </div>\n    <div class=\"card-body\">\n      <button type=\"button\" class=\"btn btn-info\" [tooltip]=\"content\">\n        Simple binding\n      </button>\n\n      <ng-template #tolTemplate>Just another: {{content}}</ng-template>\n      <button type=\"button\" class=\"btn btn-warning\" [tooltip]=\"tolTemplate\">\n        TemplateRef binding\n      </button>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Tooltips <small>dynamic html</small>\n    </div>\n    <div class=\"card-body\">\n      <ng-template #popTemplate>Here we go: <div [innerHtml]=\"html\"></div></ng-template>\n      <button type=\"button\" class=\"btn btn-success\"\n              [tooltip]=\"popTemplate\">\n        Show me tooltip with html\n      </button>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Tooltips <small>append to <code>body</code></small>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\" style=\"position: relative; overflow: hidden; padding-top: 10px;\">\n        <div class=\"col-xs-12 col-12\">\n          <button type=\"button\" class=\"btn btn-danger\"\n                  tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\n            Default tooltip\n          </button>\n          <button type=\"button\" class=\"btn btn-success\"\n                  tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n                  container=\"body\">\n            Tooltip appended to body\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Tooltips <small>custom triggers</small>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-xs-6 col-6\">\n          <p>Desktop</p>\n          <button type=\"button\" class=\"btn btn-info\"\n                  tooltip=\"I will hide on click\"\n                  triggers=\"mouseenter:click\">\n            Hover over me!\n          </button>\n        </div>\n\n        <div class=\"col-xs-6 col-6\">\n          <p>Mobile</p>\n          <button type=\"button\" class=\"btn btn-info\"\n                  tooltip=\"I will hide on click\"\n                  triggers=\"click\">\n            Click on me!\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Tooltips <small>manual triggers</small>\n    </div>\n    <div class=\"card-body\">\n      <p>\n  <span tooltip=\"Hello there! I was triggered manually\"\n        triggers=\"\" #pop=\"bs-tooltip\">\n  This text has attached tooltip\n  </span>\n      </p>\n\n      <button type=\"button\" class=\"btn btn-success\" (click)=\"pop.show()\">\n        Show\n      </button>\n      <button type=\"button\" class=\"btn btn-warning\" (click)=\"pop.hide()\">\n        Hide\n      </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/base/tooltips.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/base/tooltips.component.ts ***!
  \**************************************************/
/*! exports provided: TooltipsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipsComponent", function() { return TooltipsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TooltipsComponent = /** @class */ (function () {
    function TooltipsComponent(sanitizer) {
        this.content = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.';
        this.html = "<span class=\"btn btn-danger\">Never trust not sanitized HTML!!!</span>";
        this.html = sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].HTML, this.html);
    }
    TooltipsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./tooltips.component.html */ "./src/app/views/base/tooltips.component.html")
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], TooltipsComponent);
    return TooltipsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-base-base-module.js.map