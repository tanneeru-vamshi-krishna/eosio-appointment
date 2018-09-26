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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

(function ($, namespace) {
    'use strict';

    var app = {
        settins: {
            bp: 1024
        },
        dom: {
            $header: $('.js-header')
        },
        crnt: {
            init: function init() {
                $(window).on('resize resizecurrent', function () {
                    app.crnt.m = window.innerWidth <= app.settins.bp;
                    app.crnt.d = !app.crnt.m;
                });

                $(window).trigger('resizecurrent');
            }
        },
        methods: {
            responsiveHandlers: function responsiveHandlers(obj) {
                $(window).on('resize.responsivehandlers responsivehandlers', function () {
                    if (obj.desktopBp === app.crnt.d) return;else obj.desktopBp = app.crnt.d;

                    var $elem = $(obj.elem),
                        ns = obj.namespace ? '.' + obj.namespace : '';

                    if (obj.onDesktop === app.crnt.d) {
                        $.each(obj.events, function (event, func) {
                            $elem.on(event + ns, obj.delegate, func);
                        });
                    } else {
                        $.each(obj.events, function (key) {
                            $elem.unbind(key + ns);
                        });
                    }
                });

                $(window).trigger('responsivehandlers');
            }
        },
        searchVisibleOnMobileBtn: function searchVisibleOnMobileBtn() {
            var $header = app.dom.$header,
                $btn_open = app.dom.$header.find('.js-header-search-btn-open'),
                $btn_close = app.dom.$header.find('.js-header-search-btn-close');

            app.methods.responsiveHandlers({
                elem: $btn_open,
                namespace: 'searchopen',
                onDesktop: false,
                events: {
                    'click': function click() {
                        $header.addClass('header--search');
                    }
                }
            });

            app.methods.responsiveHandlers({
                elem: $btn_close,
                namespace: 'searchclose',
                onDesktop: false,
                events: {
                    'click': function click() {
                        $header.removeClass('header--search');
                    }
                }
            });
        },
        dropdowns: function dropdowns() {

            function toggleList($list, $btn) {
                if (!$list.hasClass('js-dropdown-process')) {
                    $list.addClass('js-dropdown-process');

                    var process = $list.hasClass('dropdown--open') ? 'slideUp' : 'slideDown';

                    $btn = $btn || $list.parents('.js-dropdown').find('[data-dropdown-btn="' + $list.data('dropdown-btn') + '"]');

                    $list.velocity(process, {
                        complete: function complete() {
                            $list[process === 'slideUp' ? 'removeClass' : 'addClass']('dropdown--open');
                            $list.removeAttr('style').removeClass('js-dropdown-process');
                        }
                    });

                    $btn[process === 'slideUp' ? 'removeClass' : 'addClass']('dropdown__btn--open');
                }
            };

            function closeOpenLists($t) {
                var $list_close = $('[data-dropdown-list].dropdown--open');

                if ($t) {
                    var $list_parent = $t.closest('[data-dropdown-list]');

                    $list_close = $list_close.not($list_parent);
                }

                toggleList($list_close);
            };

            $(document).on('click', '.js-dropdown [data-dropdown-btn]', function (e) {
                var $this = $(this),
                    namespace = $this.data('dropdown-btn'),
                    $list = $this.parents('.js-dropdown').find('[data-dropdown-list="' + namespace + '"]');

                closeOpenLists($list);

                toggleList($list, $this);

                e.preventDefault();
                return false;
            });

            $(document).on('click', function (e) {
                var $t = $(e.target);

                closeOpenLists($t);
            });
        },
        init: function init() {
            for (var key in this) {
                delete this.init;

                if (typeof this[key] === 'function') {
                    this[key]();
                } else if (this[key].init && typeof this[key].init === 'function') {
                    this[key].init();
                }
            }

            return this;
        }
    };

    window[namespace] = app.init();
})(jQuery, 'app');

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);