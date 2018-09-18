(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-base-base-module~views-home-home-module"],{

/***/ "./node_modules/ngx-bootstrap/carousel/carousel.component.js":
/*!*******************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/carousel/carousel.component.js ***!
  \*******************************************************************/
/*! exports provided: Direction, CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Direction", function() { return Direction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/index */ "./node_modules/ngx-bootstrap/utils/index.js");
/* harmony import */ var _carousel_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carousel.config */ "./node_modules/ngx-bootstrap/carousel/carousel.config.js");
// tslint:disable:max-file-line-count
/***
 * pause (not yet supported) (?string='hover') - event group name which pauses
 * the cycling of the carousel, if hover pauses on mouseenter and resumes on
 * mouseleave keyboard (not yet supported) (?boolean=true) - if false
 * carousel will not react to keyboard events
 * note: swiping not yet supported
 */
/****
 * Problems:
 * 1) if we set an active slide via model changes, .active class remains on a
 * current slide.
 * 2) if we have only one slide, we shouldn't show prev/next nav buttons
 * 3) if first or last slide is active and noWrap is true, there should be
 * "disabled" class on the nav buttons.
 * 4) default interval should be equal 5000
 */



var Direction;
(function (Direction) {
    Direction[Direction["UNKNOWN"] = 0] = "UNKNOWN";
    Direction[Direction["NEXT"] = 1] = "NEXT";
    Direction[Direction["PREV"] = 2] = "PREV";
})(Direction || (Direction = {}));
/**
 * Base element to create carousel
 */
var CarouselComponent = (function () {
    function CarouselComponent(config, ngZone) {
        this.ngZone = ngZone;
        /** Will be emitted when active slide has been changed. Part of two-way-bindable [(activeSlide)] property */
        this.activeSlideChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        this._slides = new _utils_index__WEBPACK_IMPORTED_MODULE_1__["LinkedList"]();
        this.destroyed = false;
        Object.assign(this, config);
    }
    Object.defineProperty(CarouselComponent.prototype, "activeSlide", {
        get: function () {
            return this._currentActiveSlide;
        },
        /** Index of currently displayed slide(started for 0) */
        set: function (index) {
            if (this._slides.length && index !== this._currentActiveSlide) {
                this._select(index);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "interval", {
        /**
         * Delay of item cycling in milliseconds. If false, carousel won't cycle
         * automatically.
         */
        get: function () {
            return this._interval;
        },
        set: function (value) {
            this._interval = value;
            this.restartTimer();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "slides", {
        get: function () {
            return this._slides.toArray();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "isBs4", {
        get: function () {
            return !Object(_utils_index__WEBPACK_IMPORTED_MODULE_1__["isBs3"])();
        },
        enumerable: true,
        configurable: true
    });
    CarouselComponent.prototype.ngOnDestroy = function () {
        this.destroyed = true;
    };
    /**
     * Adds new slide. If this slide is first in collection - set it as active
     * and starts auto changing
     * @param slide
     */
    CarouselComponent.prototype.addSlide = function (slide) {
        this._slides.add(slide);
        if (this._slides.length === 1) {
            this._currentActiveSlide = void 0;
            this.activeSlide = 0;
            this.play();
        }
    };
    /**
     * Removes specified slide. If this slide is active - will roll to another
     * slide
     * @param slide
     */
    CarouselComponent.prototype.removeSlide = function (slide) {
        var _this = this;
        var remIndex = this._slides.indexOf(slide);
        if (this._currentActiveSlide === remIndex) {
            // removing of active slide
            var nextSlideIndex_1 = void 0;
            if (this._slides.length > 1) {
                // if this slide last - will roll to first slide, if noWrap flag is
                // FALSE or to previous, if noWrap is TRUE in case, if this slide in
                // middle of collection, index of next slide is same to removed
                nextSlideIndex_1 = !this.isLast(remIndex)
                    ? remIndex
                    : this.noWrap ? remIndex - 1 : 0;
            }
            this._slides.remove(remIndex);
            // prevents exception with changing some value after checking
            setTimeout(function () {
                _this._select(nextSlideIndex_1);
            }, 0);
        }
        else {
            this._slides.remove(remIndex);
            var currentSlideIndex_1 = this.getCurrentSlideIndex();
            setTimeout(function () {
                // after removing, need to actualize index of current active slide
                _this._currentActiveSlide = currentSlideIndex_1;
                _this.activeSlideChange.emit(_this._currentActiveSlide);
            }, 0);
        }
    };
    /**
     * Rolling to next slide
     * @param force: {boolean} if true - will ignore noWrap flag
     */
    CarouselComponent.prototype.nextSlide = function (force) {
        if (force === void 0) { force = false; }
        this.activeSlide = this.findNextSlideIndex(Direction.NEXT, force);
    };
    /**
     * Rolling to previous slide
     * @param force: {boolean} if true - will ignore noWrap flag
     */
    CarouselComponent.prototype.previousSlide = function (force) {
        if (force === void 0) { force = false; }
        this.activeSlide = this.findNextSlideIndex(Direction.PREV, force);
    };
    /**
     * Rolling to specified slide
     * @param index: {number} index of slide, which must be shown
     */
    CarouselComponent.prototype.selectSlide = function (index) {
        this.activeSlide = index;
    };
    /**
     * Starts a auto changing of slides
     */
    CarouselComponent.prototype.play = function () {
        if (!this.isPlaying) {
            this.isPlaying = true;
            this.restartTimer();
        }
    };
    /**
     * Stops a auto changing of slides
     */
    CarouselComponent.prototype.pause = function () {
        if (!this.noPause) {
            this.isPlaying = false;
            this.resetTimer();
        }
    };
    /**
     * Finds and returns index of currently displayed slide
     * @returns {number}
     */
    CarouselComponent.prototype.getCurrentSlideIndex = function () {
        return this._slides.findIndex(function (slide) { return slide.active; });
    };
    /**
     * Defines, whether the specified index is last in collection
     * @param index
     * @returns {boolean}
     */
    CarouselComponent.prototype.isLast = function (index) {
        return index + 1 >= this._slides.length;
    };
    /**
     * Defines next slide index, depending of direction
     * @param direction: Direction(UNKNOWN|PREV|NEXT)
     * @param force: {boolean} if TRUE - will ignore noWrap flag, else will
     *   return undefined if next slide require wrapping
     * @returns {any}
     */
    CarouselComponent.prototype.findNextSlideIndex = function (direction, force) {
        var nextSlideIndex = 0;
        if (!force &&
            (this.isLast(this.activeSlide) &&
                direction !== Direction.PREV &&
                this.noWrap)) {
            return void 0;
        }
        switch (direction) {
            case Direction.NEXT:
                // if this is last slide, not force, looping is disabled
                // and need to going forward - select current slide, as a next
                nextSlideIndex = !this.isLast(this._currentActiveSlide)
                    ? this._currentActiveSlide + 1
                    : !force && this.noWrap ? this._currentActiveSlide : 0;
                break;
            case Direction.PREV:
                // if this is first slide, not force, looping is disabled
                // and need to going backward - select current slide, as a next
                nextSlideIndex =
                    this._currentActiveSlide > 0
                        ? this._currentActiveSlide - 1
                        : !force && this.noWrap
                            ? this._currentActiveSlide
                            : this._slides.length - 1;
                break;
            default:
                throw new Error('Unknown direction');
        }
        return nextSlideIndex;
    };
    /**
     * Sets a slide, which specified through index, as active
     * @param index
     * @private
     */
    CarouselComponent.prototype._select = function (index) {
        if (isNaN(index)) {
            this.pause();
            return;
        }
        var currentSlide = this._slides.get(this._currentActiveSlide);
        if (currentSlide) {
            currentSlide.active = false;
        }
        var nextSlide = this._slides.get(index);
        if (nextSlide) {
            this._currentActiveSlide = index;
            nextSlide.active = true;
            this.activeSlide = index;
            this.activeSlideChange.emit(index);
        }
    };
    /**
     * Starts loop of auto changing of slides
     */
    CarouselComponent.prototype.restartTimer = function () {
        var _this = this;
        this.resetTimer();
        var interval = +this.interval;
        if (!isNaN(interval) && interval > 0) {
            this.currentInterval = this.ngZone.runOutsideAngular(function () {
                return setInterval(function () {
                    var nInterval = +_this.interval;
                    _this.ngZone.run(function () {
                        if (_this.isPlaying &&
                            !isNaN(_this.interval) &&
                            nInterval > 0 &&
                            _this.slides.length) {
                            _this.nextSlide();
                        }
                        else {
                            _this.pause();
                        }
                    });
                }, interval);
            });
        }
    };
    /**
     * Stops loop of auto changing of slides
     */
    CarouselComponent.prototype.resetTimer = function () {
        if (this.currentInterval) {
            clearInterval(this.currentInterval);
            this.currentInterval = void 0;
        }
    };
    CarouselComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'carousel',
                    template: "<div (mouseenter)=\"pause()\" (mouseleave)=\"play()\" (mouseup)=\"play()\" class=\"carousel slide\"> <ol class=\"carousel-indicators\" *ngIf=\"showIndicators && slides.length > 1\"> <li *ngFor=\"let slidez of slides; let i = index;\" [class.active]=\"slidez.active === true\" (click)=\"selectSlide(i)\"></li> </ol> <div class=\"carousel-inner\"><ng-content></ng-content></div> <a class=\"left carousel-control carousel-control-prev\" [class.disabled]=\"activeSlide === 0 && noWrap\" (click)=\"previousSlide()\" *ngIf=\"slides.length > 1\"> <span class=\"icon-prev carousel-control-prev-icon\" aria-hidden=\"true\"></span> <span *ngIf=\"isBs4\" class=\"sr-only\">Previous</span> </a> <a class=\"right carousel-control carousel-control-next\" (click)=\"nextSlide()\"  [class.disabled]=\"isLast(activeSlide) && noWrap\" *ngIf=\"slides.length > 1\"> <span class=\"icon-next carousel-control-next-icon\" aria-hidden=\"true\"></span> <span class=\"sr-only\">Next</span> </a> </div> "
                },] },
    ];
    /** @nocollapse */
    CarouselComponent.ctorParameters = function () { return [
        { type: _carousel_config__WEBPACK_IMPORTED_MODULE_2__["CarouselConfig"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    CarouselComponent.propDecorators = {
        'noWrap': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'noPause': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'showIndicators': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'activeSlideChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        'activeSlide': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'interval': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return CarouselComponent;
}());

//# sourceMappingURL=carousel.component.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/carousel/carousel.config.js":
/*!****************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/carousel/carousel.config.js ***!
  \****************************************************************/
/*! exports provided: CarouselConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselConfig", function() { return CarouselConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var CarouselConfig = (function () {
    function CarouselConfig() {
        /** Default interval of auto changing of slides */
        this.interval = 5000;
        /** Is loop of auto changing of slides can be paused */
        this.noPause = false;
        /** Is slides can wrap from the last to the first slide */
        this.noWrap = false;
        /** Show carousel-indicators */
        this.showIndicators = true;
    }
    CarouselConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    CarouselConfig.ctorParameters = function () { return []; };
    return CarouselConfig;
}());

//# sourceMappingURL=carousel.config.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/carousel/carousel.module.js":
/*!****************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/carousel/carousel.module.js ***!
  \****************************************************************/
/*! exports provided: CarouselModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselModule", function() { return CarouselModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _carousel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carousel.component */ "./node_modules/ngx-bootstrap/carousel/carousel.component.js");
/* harmony import */ var _slide_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slide.component */ "./node_modules/ngx-bootstrap/carousel/slide.component.js");
/* harmony import */ var _carousel_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./carousel.config */ "./node_modules/ngx-bootstrap/carousel/carousel.config.js");





var CarouselModule = (function () {
    function CarouselModule() {
    }
    CarouselModule.forRoot = function () {
        return { ngModule: CarouselModule, providers: [] };
    };
    CarouselModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
                    declarations: [_slide_component__WEBPACK_IMPORTED_MODULE_3__["SlideComponent"], _carousel_component__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"]],
                    exports: [_slide_component__WEBPACK_IMPORTED_MODULE_3__["SlideComponent"], _carousel_component__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"]],
                    providers: [_carousel_config__WEBPACK_IMPORTED_MODULE_4__["CarouselConfig"]]
                },] },
    ];
    /** @nocollapse */
    CarouselModule.ctorParameters = function () { return []; };
    return CarouselModule;
}());

//# sourceMappingURL=carousel.module.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/carousel/index.js":
/*!******************************************************!*\
  !*** ./node_modules/ngx-bootstrap/carousel/index.js ***!
  \******************************************************/
/*! exports provided: CarouselComponent, CarouselModule, SlideComponent, CarouselConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _carousel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carousel.component */ "./node_modules/ngx-bootstrap/carousel/carousel.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return _carousel_component__WEBPACK_IMPORTED_MODULE_0__["CarouselComponent"]; });

/* harmony import */ var _carousel_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel.module */ "./node_modules/ngx-bootstrap/carousel/carousel.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CarouselModule", function() { return _carousel_module__WEBPACK_IMPORTED_MODULE_1__["CarouselModule"]; });

/* harmony import */ var _slide_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slide.component */ "./node_modules/ngx-bootstrap/carousel/slide.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SlideComponent", function() { return _slide_component__WEBPACK_IMPORTED_MODULE_2__["SlideComponent"]; });

/* harmony import */ var _carousel_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carousel.config */ "./node_modules/ngx-bootstrap/carousel/carousel.config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CarouselConfig", function() { return _carousel_config__WEBPACK_IMPORTED_MODULE_3__["CarouselConfig"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/carousel/slide.component.js":
/*!****************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/carousel/slide.component.js ***!
  \****************************************************************/
/*! exports provided: SlideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideComponent", function() { return SlideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _carousel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel.component */ "./node_modules/ngx-bootstrap/carousel/carousel.component.js");


var SlideComponent = (function () {
    function SlideComponent(carousel) {
        /** Wraps element by appropriate CSS classes */
        this.addClass = true;
        this.carousel = carousel;
    }
    /** Fires changes in container collection after adding a new slide instance */
    SlideComponent.prototype.ngOnInit = function () {
        this.carousel.addSlide(this);
    };
    /** Fires changes in container collection after removing of this slide instance */
    SlideComponent.prototype.ngOnDestroy = function () {
        this.carousel.removeSlide(this);
    };
    SlideComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'slide',
                    template: "\n    <div [class.active]=\"active\" class=\"item\">\n      <ng-content></ng-content>\n    </div>\n  ",
                    host: {
                        '[attr.aria-hidden]': '!active'
                    }
                },] },
    ];
    /** @nocollapse */
    SlideComponent.ctorParameters = function () { return [
        { type: _carousel_component__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"], },
    ]; };
    SlideComponent.propDecorators = {
        'active': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.active',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'addClass': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.item',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.carousel-item',] },],
    };
    return SlideComponent;
}());

//# sourceMappingURL=slide.component.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/progressbar/bar.component.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/progressbar/bar.component.js ***!
  \*****************************************************************/
/*! exports provided: BarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarComponent", function() { return BarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _progressbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./progressbar.component */ "./node_modules/ngx-bootstrap/progressbar/progressbar.component.js");
/* harmony import */ var _utils_theme_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/theme-provider */ "./node_modules/ngx-bootstrap/utils/theme-provider.js");



// todo: number pipe
// todo: use query from progress?
var BarComponent = (function () {
    function BarComponent(progress) {
        this.percent = 0;
        this.progress = progress;
    }
    Object.defineProperty(BarComponent.prototype, "value", {
        /** current value of progress bar */
        get: function () {
            return this._value;
        },
        set: function (v) {
            if (!v && v !== 0) {
                return;
            }
            this._value = v;
            this.recalculatePercentage();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarComponent.prototype, "setBarWidth", {
        get: function () {
            this.recalculatePercentage();
            return this.percent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarComponent.prototype, "isBs3", {
        get: function () {
            return Object(_utils_theme_provider__WEBPACK_IMPORTED_MODULE_2__["isBs3"])();
        },
        enumerable: true,
        configurable: true
    });
    BarComponent.prototype.ngOnInit = function () {
        this.progress.addBar(this);
    };
    BarComponent.prototype.ngOnDestroy = function () {
        this.progress.removeBar(this);
    };
    BarComponent.prototype.recalculatePercentage = function () {
        this.percent = +(this.value / this.progress.max * 100).toFixed(2);
        var totalPercentage = this.progress.bars
            .reduce(function (total, bar) {
            return total + bar.percent;
        }, 0);
        if (totalPercentage > 100) {
            this.percent -= totalPercentage - 100;
        }
    };
    BarComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'bar',
                    template: "<ng-content></ng-content> ",
                    host: {
                        role: 'progressbar',
                        'aria-valuemin': '0',
                        '[class]': '"progress-bar " + (type ? "progress-bar-" + type + " bg-" + type : "")',
                        '[class.progress-bar-animated]': '!isBs3 && animate',
                        '[class.progress-bar-striped]': 'striped',
                        '[class.active]': 'isBs3 && animate',
                        '[attr.aria-valuenow]': 'value',
                        '[attr.aria-valuetext]': 'percent ? percent.toFixed(0) + "%" : ""',
                        '[attr.aria-valuemax]': 'max',
                        '[style.height.%]': '"100"'
                    }
                },] },
    ];
    /** @nocollapse */
    BarComponent.ctorParameters = function () { return [
        { type: _progressbar_component__WEBPACK_IMPORTED_MODULE_1__["ProgressbarComponent"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] },] },
    ]; };
    BarComponent.propDecorators = {
        'type': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'value': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'setBarWidth': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.width.%',] },],
    };
    return BarComponent;
}());

//# sourceMappingURL=bar.component.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/progressbar/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/ngx-bootstrap/progressbar/index.js ***!
  \*********************************************************/
/*! exports provided: BarComponent, ProgressbarComponent, ProgressbarModule, ProgressbarConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bar.component */ "./node_modules/ngx-bootstrap/progressbar/bar.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BarComponent", function() { return _bar_component__WEBPACK_IMPORTED_MODULE_0__["BarComponent"]; });

/* harmony import */ var _progressbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./progressbar.component */ "./node_modules/ngx-bootstrap/progressbar/progressbar.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressbarComponent", function() { return _progressbar_component__WEBPACK_IMPORTED_MODULE_1__["ProgressbarComponent"]; });

/* harmony import */ var _progressbar_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./progressbar.module */ "./node_modules/ngx-bootstrap/progressbar/progressbar.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressbarModule", function() { return _progressbar_module__WEBPACK_IMPORTED_MODULE_2__["ProgressbarModule"]; });

/* harmony import */ var _progressbar_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./progressbar.config */ "./node_modules/ngx-bootstrap/progressbar/progressbar.config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressbarConfig", function() { return _progressbar_config__WEBPACK_IMPORTED_MODULE_3__["ProgressbarConfig"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/progressbar/progressbar.component.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/progressbar/progressbar.component.js ***!
  \*************************************************************************/
/*! exports provided: ProgressbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressbarComponent", function() { return ProgressbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _progressbar_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./progressbar.config */ "./node_modules/ngx-bootstrap/progressbar/progressbar.config.js");
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/index */ "./node_modules/ngx-bootstrap/utils/index.js");



var ProgressbarComponent = (function () {
    function ProgressbarComponent(config) {
        this.isStacked = false;
        this.addClass = true;
        this.bars = [];
        this._max = 100;
        Object.assign(this, config);
    }
    Object.defineProperty(ProgressbarComponent.prototype, "value", {
        /** current value of progress bar. Could be a number or array of objects
         * like {"value":15,"type":"info","label":"15 %"}
         */
        set: function (value) {
            this.isStacked = Array.isArray(value);
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressbarComponent.prototype, "isBs3", {
        get: function () {
            return Object(_utils_index__WEBPACK_IMPORTED_MODULE_2__["isBs3"])();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressbarComponent.prototype, "max", {
        /** maximum total value of progress element */
        get: function () {
            return this._max;
        },
        set: function (v) {
            this._max = v;
            this.bars.forEach(function (bar) {
                bar.recalculatePercentage();
            });
        },
        enumerable: true,
        configurable: true
    });
    ProgressbarComponent.prototype.addBar = function (bar) {
        bar.animate = this.animate;
        bar.striped = this.striped;
        this.bars.push(bar);
    };
    ProgressbarComponent.prototype.removeBar = function (bar) {
        this.bars.splice(this.bars.indexOf(bar), 1);
    };
    ProgressbarComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'progressbar',
                    template: "<bar [type]=\"type\" [value]=\"_value\" *ngIf=\"!isStacked\"> <ng-content></ng-content> </bar> <ng-template [ngIf]=\"isStacked\"> <bar *ngFor=\"let item of _value\" [type]=\"item.type\" [value]=\"item.value\">{{ item.label }}</bar> </ng-template> ",
                    styles: [
                        "\n    :host {\n      width: 100%;\n      display: flex;\n    }\n  "
                    ]
                },] },
    ];
    /** @nocollapse */
    ProgressbarComponent.ctorParameters = function () { return [
        { type: _progressbar_config__WEBPACK_IMPORTED_MODULE_1__["ProgressbarConfig"], },
    ]; };
    ProgressbarComponent.propDecorators = {
        'animate': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'striped': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'type': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'value': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'max': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.max',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'addClass': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.progress',] },],
    };
    return ProgressbarComponent;
}());

//# sourceMappingURL=progressbar.component.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/progressbar/progressbar.config.js":
/*!**********************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/progressbar/progressbar.config.js ***!
  \**********************************************************************/
/*! exports provided: ProgressbarConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressbarConfig", function() { return ProgressbarConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ProgressbarConfig = (function () {
    function ProgressbarConfig() {
        /** if `true` changing value of progress bar will be animated */
        this.animate = false;
        /** maximum total value of progress element */
        this.max = 100;
    }
    ProgressbarConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    ProgressbarConfig.ctorParameters = function () { return []; };
    return ProgressbarConfig;
}());

//# sourceMappingURL=progressbar.config.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/progressbar/progressbar.module.js":
/*!**********************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/progressbar/progressbar.module.js ***!
  \**********************************************************************/
/*! exports provided: ProgressbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressbarModule", function() { return ProgressbarModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bar.component */ "./node_modules/ngx-bootstrap/progressbar/bar.component.js");
/* harmony import */ var _progressbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./progressbar.component */ "./node_modules/ngx-bootstrap/progressbar/progressbar.component.js");
/* harmony import */ var _progressbar_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./progressbar.config */ "./node_modules/ngx-bootstrap/progressbar/progressbar.config.js");





var ProgressbarModule = (function () {
    function ProgressbarModule() {
    }
    ProgressbarModule.forRoot = function () {
        return { ngModule: ProgressbarModule, providers: [_progressbar_config__WEBPACK_IMPORTED_MODULE_4__["ProgressbarConfig"]] };
    };
    ProgressbarModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
                    declarations: [_bar_component__WEBPACK_IMPORTED_MODULE_2__["BarComponent"], _progressbar_component__WEBPACK_IMPORTED_MODULE_3__["ProgressbarComponent"]],
                    exports: [_bar_component__WEBPACK_IMPORTED_MODULE_2__["BarComponent"], _progressbar_component__WEBPACK_IMPORTED_MODULE_3__["ProgressbarComponent"]]
                },] },
    ];
    /** @nocollapse */
    ProgressbarModule.ctorParameters = function () { return []; };
    return ProgressbarModule;
}());

//# sourceMappingURL=progressbar.module.js.map

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

/***/ "./node_modules/ngx-bootstrap/utils/index.js":
/*!***************************************************!*\
  !*** ./node_modules/ngx-bootstrap/utils/index.js ***!
  \***************************************************/
/*! exports provided: OnChange, LinkedList, isBs3, Trigger, Utils, setTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decorators */ "./node_modules/ngx-bootstrap/utils/decorators.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OnChange", function() { return _decorators__WEBPACK_IMPORTED_MODULE_0__["OnChange"]; });

/* harmony import */ var _linked_list_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./linked-list.class */ "./node_modules/ngx-bootstrap/utils/linked-list.class.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkedList", function() { return _linked_list_class__WEBPACK_IMPORTED_MODULE_1__["LinkedList"]; });

/* harmony import */ var _theme_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme-provider */ "./node_modules/ngx-bootstrap/utils/theme-provider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBs3", function() { return _theme_provider__WEBPACK_IMPORTED_MODULE_2__["isBs3"]; });

/* harmony import */ var _trigger_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trigger.class */ "./node_modules/ngx-bootstrap/utils/trigger.class.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Trigger", function() { return _trigger_class__WEBPACK_IMPORTED_MODULE_3__["Trigger"]; });

/* harmony import */ var _utils_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils.class */ "./node_modules/ngx-bootstrap/utils/utils.class.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return _utils_class__WEBPACK_IMPORTED_MODULE_4__["Utils"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTheme", function() { return _theme_provider__WEBPACK_IMPORTED_MODULE_2__["setTheme"]; });







//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/utils/linked-list.class.js":
/*!***************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/utils/linked-list.class.js ***!
  \***************************************************************/
/*! exports provided: LinkedList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkedList", function() { return LinkedList; });
var LinkedList = (function () {
    function LinkedList() {
        this.length = 0;
        this.asArray = [];
        // Array methods overriding END
    }
    LinkedList.prototype.get = function (position) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            return void 0;
        }
        var current = this.head;
        for (var index = 0; index < position; index++) {
            current = current.next;
        }
        return current.value;
    };
    LinkedList.prototype.add = function (value, position) {
        if (position === void 0) { position = this.length; }
        if (position < 0 || position > this.length) {
            throw new Error('Position is out of the list');
        }
        var node = {
            value: value,
            next: undefined,
            previous: undefined
        };
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
            this.current = node;
        }
        else {
            if (position === 0) {
                // first node
                node.next = this.head;
                this.head.previous = node;
                this.head = node;
            }
            else if (position === this.length) {
                // last node
                this.tail.next = node;
                node.previous = this.tail;
                this.tail = node;
            }
            else {
                // node in middle
                var currentPreviousNode = this.getNode(position - 1);
                var currentNextNode = currentPreviousNode.next;
                currentPreviousNode.next = node;
                currentNextNode.previous = node;
                node.previous = currentPreviousNode;
                node.next = currentNextNode;
            }
        }
        this.length++;
        this.createInternalArrayRepresentation();
    };
    LinkedList.prototype.remove = function (position) {
        if (position === void 0) { position = 0; }
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        if (position === 0) {
            // first node
            this.head = this.head.next;
            if (this.head) {
                // there is no second node
                this.head.previous = undefined;
            }
            else {
                // there is no second node
                this.tail = undefined;
            }
        }
        else if (position === this.length - 1) {
            // last node
            this.tail = this.tail.previous;
            this.tail.next = undefined;
        }
        else {
            // middle node
            var removedNode = this.getNode(position);
            removedNode.next.previous = removedNode.previous;
            removedNode.previous.next = removedNode.next;
        }
        this.length--;
        this.createInternalArrayRepresentation();
    };
    LinkedList.prototype.set = function (position, value) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        var node = this.getNode(position);
        node.value = value;
        this.createInternalArrayRepresentation();
    };
    LinkedList.prototype.toArray = function () {
        return this.asArray;
    };
    LinkedList.prototype.findAll = function (fn) {
        var current = this.head;
        var result = [];
        for (var index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result.push({ index: index, value: current.value });
            }
            current = current.next;
        }
        return result;
    };
    // Array methods overriding start
    LinkedList.prototype.push = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        args.forEach(function (arg) {
            _this.add(arg);
        });
        return this.length;
    };
    LinkedList.prototype.pop = function () {
        if (this.length === 0) {
            return undefined;
        }
        var last = this.tail;
        this.remove(this.length - 1);
        return last.value;
    };
    LinkedList.prototype.unshift = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        args.reverse();
        args.forEach(function (arg) {
            _this.add(arg, 0);
        });
        return this.length;
    };
    LinkedList.prototype.shift = function () {
        if (this.length === 0) {
            return undefined;
        }
        var lastItem = this.head.value;
        this.remove();
        return lastItem;
    };
    LinkedList.prototype.forEach = function (fn) {
        var current = this.head;
        for (var index = 0; index < this.length; index++) {
            fn(current.value, index);
            current = current.next;
        }
    };
    LinkedList.prototype.indexOf = function (value) {
        var current = this.head;
        var position = 0;
        for (var index = 0; index < this.length; index++) {
            if (current.value === value) {
                position = index;
                break;
            }
            current = current.next;
        }
        return position;
    };
    LinkedList.prototype.some = function (fn) {
        var current = this.head;
        var result = false;
        while (current && !result) {
            if (fn(current.value)) {
                result = true;
                break;
            }
            current = current.next;
        }
        return result;
    };
    LinkedList.prototype.every = function (fn) {
        var current = this.head;
        var result = true;
        while (current && result) {
            if (!fn(current.value)) {
                result = false;
            }
            current = current.next;
        }
        return result;
    };
    LinkedList.prototype.toString = function () {
        return '[Linked List]';
    };
    LinkedList.prototype.find = function (fn) {
        var current = this.head;
        var result;
        for (var index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result = current.value;
                break;
            }
            current = current.next;
        }
        return result;
    };
    LinkedList.prototype.findIndex = function (fn) {
        var current = this.head;
        var result;
        for (var index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result = index;
                break;
            }
            current = current.next;
        }
        return result;
    };
    LinkedList.prototype.getNode = function (position) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        var current = this.head;
        for (var index = 0; index < position; index++) {
            current = current.next;
        }
        return current;
    };
    LinkedList.prototype.createInternalArrayRepresentation = function () {
        var outArray = [];
        var current = this.head;
        while (current) {
            outArray.push(current.value);
            current = current.next;
        }
        this.asArray = outArray;
    };
    return LinkedList;
}());

//# sourceMappingURL=linked-list.class.js.map

/***/ })

}]);
//# sourceMappingURL=views-base-base-module~views-home-home-module.js.map