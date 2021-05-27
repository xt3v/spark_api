(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+aqW":
    /*!***********************************************************!*\
      !*** ./src/app/core/structure/header/header.component.ts ***!
      \***********************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function aqW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent() {
          _classCallCheck(this, HeaderComponent);
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)();
      };

      HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 0,
        vars: 0,
        template: function HeaderComponent_Template(rf, ctx) {},
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "/9IV":
    /*!**********************************************!*\
      !*** ./src/app/modules/modules.component.ts ***!
      \**********************************************/

    /*! exports provided: ModulesComponent */

    /***/
    function IV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModulesComponent", function () {
        return ModulesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _core_structure_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../core/structure/navbar/navbar.component */
      "SsBv");
      /* harmony import */


      var _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/breadcrumb/breadcrumb.component */
      "APW9");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _core_structure_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../core/structure/footer/footer.component */
      "VNuA");
      /* harmony import */


      var _shared_toast_notifications_toast_notifications_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../shared/toast-notifications/toast-notifications.component */
      "vI4X");

      var ModulesComponent = /*#__PURE__*/function () {
        function ModulesComponent() {
          _classCallCheck(this, ModulesComponent);
        }

        _createClass(ModulesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ModulesComponent;
      }();

      ModulesComponent.ɵfac = function ModulesComponent_Factory(t) {
        return new (t || ModulesComponent)();
      };

      ModulesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ModulesComponent,
        selectors: [["app-modules"]],
        decls: 9,
        vars: 0,
        consts: [[1, "container-fluid", "main-content"], [1, "container-xl", "container-md", "container-sm"], [1, "row"]],
        template: function ModulesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-breadcrumb");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-toast-notifications");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
          }
        },
        directives: [_core_structure_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _core_structure_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _shared_toast_notifications_toast_notifications_component__WEBPACK_IMPORTED_MODULE_5__["ToastNotificationsComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2R1bGVzLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /media/sulemaez/New Volume/projes/Spark/spark_web/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "1Asn":
    /*!******************************************************!*\
      !*** ./src/app/shared/tables/mytd/mytd.component.ts ***!
      \******************************************************/

    /*! exports provided: MytdComponent */

    /***/
    function Asn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MytdComponent", function () {
        return MytdComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _mycelldisplay_mycelldisplay_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../mycelldisplay/mycelldisplay.component */
      "xLTr");

      var MytdComponent = /*#__PURE__*/function () {
        function MytdComponent() {
          _classCallCheck(this, MytdComponent);

          this.rowData = {};
          this.isHeaderCell = false;
        }

        _createClass(MytdComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "columnConfigDataType",
          get: function get() {
            return typeof this.columnConfig;
          }
        }, {
          key: "columnName",
          get: function get() {
            if (this.columnConfigDataType == "string") return this.columnConfig;
            if (this.columnConfigDataType == "object") return this.columnConfig.name;
            return "";
          }
        }, {
          key: "dataSourceName",
          get: function get() {
            if (this.columnConfigDataType == "object" && this.columnConfig.hasOwnProperty("source")) return this.columnConfig.source;
            return this.columnName.replace(/ /g, "_").toLocaleLowerCase();
          }
        }, {
          key: "cellValue",
          get: function get() {
            if (this.isHeaderCell) return "".concat(this.columnName[0].toLocaleUpperCase()).concat(this.columnName.substr(1, this.columnName.length - 1));
            var parts = this.dataSourceName.split(".");
            var value = "\u2014";
            var tempValue = this.rowData;

            if (this.columnConfigDataType == "object") {
              if (this.columnConfig.hasOwnProperty("data")) {
                return this.columnConfig.data;
              }
            }

            for (var index in parts) {
              var key = parts[index];

              if (tempValue.hasOwnProperty(key)) {
                tempValue = tempValue[key];
                value = tempValue;
              }
            }

            return value;
          }
        }, {
          key: "arrayDisplayName",
          get: function get() {
            if (this.columnConfigDataType == "object" && this.columnConfig.hasOwnProperty("display_name")) {
              return this.columnConfig.display_name;
            }

            return this.columnName;
          }
        }, {
          key: "isActions",
          get: function get() {
            if (this.isHeaderCell) return false;

            if (this.columnConfigDataType == "object") {
              return this.columnConfig.hasOwnProperty("type");
            }

            return false;
          }
        }, {
          key: "displayValue",
          get: function get() {
            var _this2 = this;

            if (this.isHeaderCell) return "".concat(this.columnName[0].toLocaleUpperCase()).concat(this.columnName.substr(1, this.columnName.length - 1));

            if (this.columnConfigDataType == "object" && this.CellValueType == "array") {
              //Check if there is type in config and pass as it is
              if (this.columnConfig.hasOwnProperty("type")) {
                return this.cellValue;
              }

              return this.cellValue.map(function (element) {
                if (element.hasOwnProperty(_this2.arrayDisplayName)) {
                  return element[_this2.arrayDisplayName];
                } else {
                  return element;
                }

                return "No field \"".concat(_this2.arrayDisplayName, "\"");
              });
            }

            return this.cellValue;
          }
        }, {
          key: "CellValueType",
          get: function get() {
            var val = this.cellValue;
            var valType = typeof val;

            if (valType == "object") {
              var isArray = Array.isArray(val);
              if (isArray) return "array";
            }

            return valType;
          }
        }]);

        return MytdComponent;
      }();

      MytdComponent.ɵfac = function MytdComponent_Factory(t) {
        return new (t || MytdComponent)();
      };

      MytdComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MytdComponent,
        selectors: [["app-mytd"]],
        inputs: {
          columnConfig: "columnConfig",
          rowData: "rowData",
          isHeaderCell: "isHeaderCell"
        },
        decls: 1,
        vars: 3,
        consts: [[3, "rowData", "isActions", "displayValue"]],
        template: function MytdComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-mycelldisplay", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rowData", ctx.rowData)("isActions", ctx.isActions)("displayValue", ctx.displayValue);
          }
        },
        directives: [_mycelldisplay_mycelldisplay_component__WEBPACK_IMPORTED_MODULE_1__["MycelldisplayComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteXRkLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "22UC":
    /*!*************************************************!*\
      !*** ./src/app/shared/modals/modals.service.ts ***!
      \*************************************************/

    /*! exports provided: ModalsService */

    /***/
    function UC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalsService", function () {
        return ModalsService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL"); // @Injectable({
      //   providedIn: 'root'
      // })


      var ModalsService = /*#__PURE__*/function () {
        function ModalsService(rendererFactory) {
          _classCallCheck(this, ModalsService);

          this.confirmModalSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
          this._renderer = rendererFactory.createRenderer(null, null);
        }

        _createClass(ModalsService, [{
          key: "createModalBackdropDiv",
          value: function createModalBackdropDiv() {
            var _this3 = this;

            this.divModalBackdrop = this._renderer.createElement('div');
            var divClasses = 'modal-backdrop fade show';
            divClasses.split(' ').forEach(function (className) {
              _this3._renderer.addClass(_this3.divModalBackdrop, className);
            });

            this._renderer.addClass(document.body, 'modal-open');

            this._renderer.appendChild(document.body, this.divModalBackdrop);

            return this.divModalBackdrop;
          }
        }, {
          key: "removeModalBackdropDiv",
          value: function removeModalBackdropDiv() {
            this._renderer.removeClass(document.body, 'modal-open');

            this._renderer.removeAttribute(document.body, 'class');

            return this._renderer.removeChild(document.body, this.divModalBackdrop);
          }
        }, {
          key: "setConfirmation",
          value: function setConfirmation(message, _ok, _cancel) {
            var _this = this;

            this.createModalBackdropDiv();
            this.confirmModalSubject.next({
              type: 'prompt',
              text: message,
              ok: function ok() {
                _this.confirmModalSubject.next();

                _this.removeModalBackdropDiv();

                _ok();
              },
              cancel: function cancel() {
                _this.confirmModalSubject.next();

                _this.removeModalBackdropDiv();

                _cancel();
              }
            });
          }
        }, {
          key: "confirm",
          value: function confirm(message, ok, cancel) {
            this.setConfirmation(message, ok, cancel);
          }
        }]);

        return ModalsService;
      }();

      ModalsService.ɵfac = function ModalsService_Factory(t) {
        return new (t || ModalsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["RendererFactory2"]));
      };

      ModalsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: ModalsService,
        factory: ModalsService.ɵfac
      });
      /***/
    },

    /***/
    "68i6":
    /*!**********************************************************************!*\
      !*** ./src/app/shared/card/card-dropdown/card-dropdown.component.ts ***!
      \**********************************************************************/

    /*! exports provided: CardDropdownComponent */

    /***/
    function i6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardDropdownComponent", function () {
        return CardDropdownComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_forms_form_item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/forms/form-item.service */
      "L4dG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = function _c0(a0) {
        return {
          "active": a0
        };
      };

      function CardDropdownComponent_li_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardDropdownComponent_li_3_Template_a_click_2_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var item_r2 = restoredCtx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.selectedTab(item_r2.prop);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, item_r2.active));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "#", item_r2.prop, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, item_r2.active));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, item_r2.label), " ");
        }
      }

      function CardDropdownComponent_div_6_ng_content_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 0, ["*ngIf", "item.active"]);
        }
      }

      function CardDropdownComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardDropdownComponent_div_6_ng_content_1_Template, 1, 0, "ng-content", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r6.prop);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, item_r6.active));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r6.active);
        }
      }

      var _c1 = ["*"];

      var CardDropdownComponent = /*#__PURE__*/function () {
        function CardDropdownComponent(_formService) {
          _classCallCheck(this, CardDropdownComponent);

          this._formService = _formService;
          this.title = '';
          this.tabbed = false;
          this.selectedTab$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(CardDropdownComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log('IN CARD COMPONENT', this.tabbed);
          }
        }, {
          key: "selectedTab",
          value: function selectedTab(value) {
            console.log('THE SELECTED TAB', value);

            this._formService.formDropdownSelectedTab(value);
          }
        }]);

        return CardDropdownComponent;
      }();

      CardDropdownComponent.ɵfac = function CardDropdownComponent_Factory(t) {
        return new (t || CardDropdownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_forms_form_item_service__WEBPACK_IMPORTED_MODULE_1__["FormItemService"]));
      };

      CardDropdownComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CardDropdownComponent,
        selectors: [["app-card-dropdown"]],
        inputs: {
          title: "title",
          tabbed: "tabbed",
          tabbedItems: "tabbedItems"
        },
        outputs: {
          selectedTab$: "selectedTab$"
        },
        ngContentSelectors: _c1,
        decls: 7,
        vars: 2,
        consts: [[1, "card"], [1, "card__header", "has--dropdown"], [1, "nav", "nav-tabs"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "card__body"], [1, "tab-content"], ["class", "tab-pane container", 3, "ngClass", "id", 4, "ngFor", "ngForOf"], [1, "nav-item"], [1, "nav-transparent", 3, "ngClass"], ["data-toggle", "tab", 1, "nav-link", 2, "color", "#535252", "font-family", "'Avenir-Heavy',Helvetica,Arial,serif", 3, "href", "ngClass", "click"], [1, "tab-pane", "container", 3, "ngClass", "id"], [4, "ngIf"]],
        template: function CardDropdownComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CardDropdownComponent_li_3_Template, 5, 10, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CardDropdownComponent_div_6_Template, 2, 5, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabbedItems);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabbedItems);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["TitleCasePipe"]],
        styles: ["@font-face {\n  font-family: \"Avenir-Heavy\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(\"https://fonts.animaapp.com/Avenir-Heavy\") format(\"truetype\");\n}\n@font-face {\n  font-family: \"Museo-Sans\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(\"https://fonts.animaapp.com/MuseoSans-700\") format(\"opentype\");\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  height: 4rem;\n  padding: 1.25rem 1.25rem;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  margin: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fdmFycy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzL19zZXR0aW5ncy5zY3NzIiwiLi4vLi4vLi4vLi4vY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4QkFBQTtBQUNBLDhCQUFBO0FBQ0EsOEJBQUE7QUEwQkEsMkJBQUE7QUFFQSx5QkFBQTtBQ0dBO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0VBQUE7QUMzQkY7QUQ4QkE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1RUFBQTtBQzVCRjtBQW1HSTtFQUNJLFlBQUE7RUFDQSx3QkFBQTtBQWpHUjtBQW1HSTtFQUNJLFlBQUE7QUFqR1IiLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqIGNvbG9ycyAqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuJGNvbG9yX2JhY2tncm91bmQ6ICNmZmZmZmY7XG4kY29sb3ItYmFja2dyb3VuZC1jYXJkOiAjZmZmZmZmO1xuJGNvbG9yX2JhY2tncm91bmQtaW5wdXRzOiAjZmZmZmZmO1xuJGNvbG9yX3RvcGJhcjogI2ZmZmZmZjtcbiRjb2xvcl9idXR0b25zOiAjNGQ0ZDRkO1xuJGNvbG9yX3ByaW1hcnk6ICMwMzZGQjY7XG4kY29sb3Jfc2Vjb25kYXJ5OiAjZTU3YzJjO1xuJGNvbG9yX3RlcnRpYXJ5OiAjMTIyNjNmO1xuJGNvbG9yX3dhcm5pbmc6ICNlNjM3NTc7XG4kY29sb3Jfc3VjY2VzczogIzAwNzcwMDtcbiRjb2xvcl93aGl0ZTogI2ZmZmZmZjtcbiRjb2xvcl9ibGFjazogIzAwMDtcbiRjb2xvcl9saWdodGdyZXk6IHJnYmEoJGNvbG9yX3doaXRlLCAwLjUpO1xuJGNvbG9yX2xpZ2h0ZXJncmV5OiByZ2JhKCRjb2xvcl93aGl0ZSwgMC4yNSk7XG4kY29sb3JfZm9ybXNfYm9yZGVyOiAjNzA3MDcwO1xuJGNvbG9yX2Zvcm1fcGxhY2Vob2xkZXI6ICNiMWMyZDk7XG4kY29sb3JfbGlua3NfYnV0dG9uczogIzAzNmZiNjtcbiRjb2xvcl9zdWJzdWJ0aXRsZTogIzdlN2U3ZTtcbiRjb2xvcl90aXRsZTogIzUzNTI1MjtcbiRjb2xvcl9zdWJ0aXRsZTogI0IyQjFCMTtcbiRjb2xvcl9uYXZiYXJfYmFja2dyb3VuZDogJGNvbG9yX2JhY2tncm91bmQ7XG4kY29sb3JfbmF2YmFyX2JvcmRlcjogI2E5YThhODtcblxuJGNvbG9yX3RpdGxlX2RlZmF1bHQ6ICM1MzUyNTI7XG4vKiBBZGQgcmV1c2FibGUgYW5pbWF0aW9ucyovXG5cbi8qIEFjY29tb2RhdGUgaXBob25lIDExKyovXG4kaXBob25lLXNhZmVzcGFjZTogcmVtLWNhbGMoNDQpO1xuJGNvbW1vbkd1dHRlcjogM3JlbTtcbiIsIi8vICBGb3VuZGF0aW9uIGZvciBTaXRlcyBTZXR0aW5nc1xuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIFRhYmxlIG9mIENvbnRlbnRzOlxuLy9cbi8vICAgMS4gR2xvYmFsXG4vLyAgIDIuIEJyZWFrcG9pbnRzXG4vLyAgIDMuIENhcmRcbi8vICAgNC4gUHJvZ3Jlc3MgYmFyXG4vLyAgIDUuIEZvb3RlclxuLy8gICA2LiBIZWFkZXJcblxuLy8gMS4gR2xvYmFsXG4vLyAtLS0tLS0tLS1cblxuJGdsb2JhbC1mb250LXNpemU6IDYyLjUlO1xuXG4kZ2xvYmFsLXBhZ2Utd2lkdGg6IHJlbS1jYWxjKDE4MTgpO1xuJGdsb2JhbC1jb250ZW50LXdpZHRoOiByZW0tY2FsYygxNDAwKTtcbiRnbG9iYWwtbGluZWhlaWdodDogMS41O1xuJGJvZHktYmFja2dyb3VuZDogJGNvbG9yX3doaXRlO1xuJGJvZHktZm9udC1jb2xvcjogJGNvbG9yX2JsYWNrO1xuJGJvZHktZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgUm9ib3RvLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiRib2R5LWFudGlhbGlhc2VkOiB0cnVlO1xuJGdsb2JhbC1tYXJnaW46IDFyZW07XG4kZ2xvYmFsLXBhZGRpbmc6IDFyZW07XG4kZ2xvYmFsLXBvc2l0aW9uOiAxcmVtO1xuJGdsb2JhbC13ZWlnaHQtbm9ybWFsOiBub3JtYWw7XG4kZ2xvYmFsLXdlaWdodC1ib2xkOiBib2xkO1xuJGdsb2JhbC1yYWRpdXM6IDA7XG4kZ2xvYmFsLXRleHQtZGlyZWN0aW9uOiBsdHI7XG4kcHJpbWFyeS1jb2xvcjogJGNvbG9yX3ByaW1hcnk7XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBdmVuaXItSGVhdnlcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybChcImh0dHBzOi8vZm9udHMuYW5pbWFhcHAuY29tL0F2ZW5pci1IZWF2eVwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk11c2VvLVNhbnNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybChcImh0dHBzOi8vZm9udHMuYW5pbWFhcHAuY29tL011c2VvU2Fucy03MDBcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XG59XG5cblxuLy8gMi4gQnJlYWtwb2ludHNcbi8vIC0tLS0tLS0tLS0tLS0tXG5cbiRicmVha3BvaW50czogKFxuICBzbWFsbDogMCxcbiAgc3VwZXJtaW5pOiA0MDBweCxcbiAgbWluaTogNDgwcHgsXG4gIG1lZGl1bTogNjQwcHgsXG4gIHRhYmxldDogNzYwcHgsXG4gIG1lZC1sYXJnZTogOTYwcHgsXG4gIGxhcmdlOiAxMDI0cHgsXG4gIHhsYXJnZTogMTI4MHB4LFxuICB4eGxhcmdlOiAxNTQwcHgsXG4gIHh4eGxhcmdlOiAxOTIwcHgsXG4gIHh4eHhsYXJnZTogMjU2MHB4LFxuKTtcbiRwcmludC1icmVha3BvaW50OiBsYXJnZTtcbiRicmVha3BvaW50LWNsYXNzZXM6IChzbWFsbCBtZWRpdW0gbGFyZ2UpO1xuXG4vLyAzLiBDYXJkXG4vLyAtLS0tLS0tLVxuXG4kY2FyZC1iYWNrZ3JvdW5kOiAkY29sb3Jfd2hpdGU7XG4kY2FyZC1mb250LWNvbG9yOiAkYm9keS1mb250LWNvbG9yO1xuJGNhcmQtZGl2aWRlci1iYWNrZ3JvdW5kOiAkY29sb3JfbGlnaHRncmV5O1xuJGNhcmQtYm9yZGVyOiAxcHggc29saWQgJGNvbG9yX2xpZ2h0Z3JleTtcbiRjYXJkLXNoYWRvdzogbm9uZTtcbiRjYXJkLWJvcmRlci1yYWRpdXM6ICRnbG9iYWwtcmFkaXVzO1xuJGNhcmQtcGFkZGluZzogJGdsb2JhbC1wYWRkaW5nO1xuJGNhcmQtbWFyZ2luLWJvdHRvbTogJGdsb2JhbC1tYXJnaW47XG5cbi8vIDQuIFByb2dyZXNzIEJhclxuLy8gLS0tLS0tLS0tLS0tLS0tLVxuXG4kcHJvZ3Jlc3MtaGVpZ2h0OiAxcmVtO1xuJHByb2dyZXNzLWJhY2tncm91bmQ6ICRjb2xvcl9saWdodGVyZ3JleTtcbiRwcm9ncmVzcy1tYXJnaW4tYm90dG9tOiAkZ2xvYmFsLW1hcmdpbjtcbiRwcm9ncmVzcy1tZXRlci1iYWNrZ3JvdW5kOiAkcHJpbWFyeS1jb2xvcjtcbiRwcm9ncmVzcy1yYWRpdXM6ICRnbG9iYWwtcmFkaXVzO1xuXG4vLyA1LiBGb290ZXJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tXG4kZm9vdGVyLWhlaWdodDogNXJlbTtcblxuLy82LiBOYXZiYXJcbiRuYXZiYXJfaGVpZ2h0OiA4LjRyZW07XG4kbmF2YmFyX2JveF9zaGFkb3c6IDAgLjNyZW0gLjZyZW0gcmdiYSgkY29sb3JfYmxhY2ssIC4yOSk7XG5cbiIsIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMvbWl4aW5zL3R5cG9ncmFwaHlcIjtcbkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMvdmFyc1wiO1xuQGltcG9ydCBcIi4uLy4uL3N0eWxlcy9zZXR0aW5nc1wiO1xuXG4kY2FyZC1oZWFkZXItY29sb3I6ICNmNWY1ZjU7XG4kY29sb3ItYm9yZGVyczogcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4vLyAuY2FyZCB7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNhcmQtaGVhZGVyLWNvbG9yO1xuLy8gICAgIGhlaWdodDogYXV0bztcbi8vICAgICB3aWR0aDogYXV0bztcbi8vICAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcblxuLy8gICAgICZfX2hlYWRlciB7XG4vLyAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICAgICAgQGluY2x1ZGUgdHlwb2dyYXBoeShoNSk7XG4vLyAgICAgICAgIGNvbG9yOiAkY29sb3JfdGl0bGU7XG4vLyAgICAgICAgIHBhZGRpbmc6IDIuNXJlbSA5LjVyZW07XG4vLyAgICAgICAgIGhlaWdodDogNy4ycmVtO1xuXG4vLyAgICAgICAgICY6YWZ0ZXIge1xuLy8gICAgICAgICAgICAgY29udGVudDogXCJcIjtcbi8vICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICAgICAgICAgIGxlZnQ6IDA7XG4vLyAgICAgICAgICAgICByaWdodDogMDtcbi8vICAgICAgICAgICAgIGJvdHRvbTogMDtcbi8vICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkY29sb3ItYm9yZGVycztcbi8vICAgICAgICAgfVxuXG4vLyAgICAgICAgICYuaGFzLS1kcm9wZG93biB7XG4vLyAgICAgICAgICAgICAmOmFmdGVyIHtcbi8vICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG5cbi8vICAgICAgICAgJi10aXRsZSB7XG4vLyAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4vLyAgICAgICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbi8vICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbi8vICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkF2ZW5pci1IZWF2eVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzZXJpZjtcbi8vICAgICAgICAgfVxuLy8gICAgIH1cblxuLy8gICAgICZfX2JvZHkge1xuLy8gICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgICAgIC8vIHBhZGRpbmc6IDFyZW0gM3JlbTtcbi8vICAgICAgICAgcGFkZGluZzogMy4ycmVtIDkuNXJlbTsgLy9jaGVjayB0aGUgZHluYW1pYyBmb3JtIHBhZGRpbmcgaWYgY2hhbmdlZFxuLy8gICAgIH1cbi8vIH1cblxuLy8gLm5hdiB7XG4vLyAgICAgJi10YWJzIHtcbiAgICAgICAgXG4vLyAgICAgICAgIGJvcmRlci1ib3R0b206IHRyYW5zcGFyZW50O1xuXG4vLyAgICAgICAgICY6YWZ0ZXIge1xuLy8gICAgICAgICAgICAgY29udGVudDogXCJcIjtcbi8vICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICAgICAgICAgIGJvdHRvbTogMDtcbi8vICAgICAgICAgICAgIGxlZnQ6IDA7XG4vLyAgICAgICAgICAgICByaWdodDogMDtcbi8vICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkY29sb3ItYm9yZGVycztcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vICAgICAmLWl0ZW0ge1xuLy8gICAgICAgICBoZWlnaHQ6IDQuN3JlbTtcbi8vICAgICAgICAgbWFyZ2luLXRvcDogLjFyZW07XG4vLyAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICB9XG4vLyAgICAgJi10cmFuc3BhcmVudCB7XG4vLyAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjYXJkLWhlYWRlci1jb2xvcjtcbi8vICAgICAgICAgaGVpZ2h0OiAuNHJlbTtcbi8vICAgICAgICAgYm90dG9tOiAtLjJyZW07XG4vLyAgICAgICAgIHotaW5kZXg6IDE7XG4vLyAgICAgICAgIG9wYWNpdHk6IDA7XG4vLyAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuLy8gICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4xOHMgZWFzZS1pbjtcblxuLy8gICAgICAgICAmLmFjdGl2ZSB7XG4vLyAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gICAgICYtbGluayB7XG4vLyAgICAgICAgIGhlaWdodDogMTAwJTtcbi8vICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4vLyAgICAgICAgIGNvbG9yOiAkY29sb3JfdGl0bGU7XG4vLyAgICAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yLWJvcmRlcnM7XG4vLyAgICAgICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xuLy8gICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbi8vICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICAgICAgICBwYWRkaW5nLXRvcDogMXJlbTtcblxuLy8gICAgICAgICBhIHtcbi8vICAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuLy8gICAgICAgICB9XG5cbi8vICAgICAgICAgJi5hY3RpdmUge1xuLy8gICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4vLyAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvci1ib3JkZXJzO1xuLy8gICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbi8vICAgICAgICAgfVxuXG4vLyAgICAgICAgICY6bm90KC5hY3RpdmUpIHtcbi8vICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbi8vICAgICAgICAgICAgICY6aG92ZXIge1xuLy8gICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbi8vICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vIH1cblxuLmNhcmQge1xuICAgIC5jYXJkLWhlYWRlciB7XG4gICAgICAgIGhlaWdodDogNHJlbTtcbiAgICAgICAgcGFkZGluZzogMS4yNXJlbSAxLjI1cmVtO1xuICAgIH1cbiAgICAuY2FyZC1ib2R5IHtcbiAgICAgICAgbWFyZ2luOiAycmVtO1xuICAgIH1cbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "98eE":
    /*!*****************************************************************!*\
      !*** ./src/app/core/authentication/authentication.component.ts ***!
      \*****************************************************************/

    /*! exports provided: AuthenticationComponent */

    /***/
    function eE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthenticationComponent", function () {
        return AuthenticationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _structure_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../structure/footer/footer.component */
      "VNuA");

      var AuthenticationComponent = /*#__PURE__*/function () {
        function AuthenticationComponent() {
          _classCallCheck(this, AuthenticationComponent);

          this.version = _angular_core__WEBPACK_IMPORTED_MODULE_0__["VERSION"];
        }

        _createClass(AuthenticationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AuthenticationComponent;
      }();

      AuthenticationComponent.ɵfac = function AuthenticationComponent_Factory(t) {
        return new (t || AuthenticationComponent)();
      };

      AuthenticationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AuthenticationComponent,
        selectors: [["app-authentication"]],
        decls: 4,
        vars: 0,
        consts: [[1, "top-padding"]],
        template: function AuthenticationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _structure_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]],
        styles: [".top-padding[_ngcontent-%COMP%] {\n  padding-top: 15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2F1dGhlbnRpY2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZ0JBQUE7QUFBSiIsImZpbGUiOiJhdXRoZW50aWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3AtcGFkZGluZyB7XG4gICAgLy8gdG9kbzogbWFrZSBtb3JlIHJlc3BvbnNpdmVcbiAgICBwYWRkaW5nLXRvcDogMTUlO1xufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "A1vf":
    /*!*********************************************************!*\
      !*** ./src/app/shared/side-menu/side-menu.component.ts ***!
      \*********************************************************/

    /*! exports provided: SideMenuComponent */

    /***/
    function A1vf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SideMenuComponent", function () {
        return SideMenuComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var _c0 = function _c0(a0) {
        return [a0];
      };

      function SideMenuComponent_li_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var list_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, list_r1.url));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-active", list_r1.active);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", list_r1.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-active", list_r1.active);
        }
      }

      var SideMenuComponent = /*#__PURE__*/function () {
        function SideMenuComponent() {
          _classCallCheck(this, SideMenuComponent);

          this.title = '';
          this.active = '';
        }

        _createClass(SideMenuComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            console.log('IN SIDE MENU', this.lists);
            this.lists.map(function (list) {
              list.active = list.name === _this4.active;
            });
          }
        }]);

        return SideMenuComponent;
      }();

      SideMenuComponent.ɵfac = function SideMenuComponent_Factory(t) {
        return new (t || SideMenuComponent)();
      };

      SideMenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SideMenuComponent,
        selectors: [["app-side-menu"]],
        inputs: {
          title: "title",
          lists: "lists",
          active: "active"
        },
        decls: 4,
        vars: 2,
        consts: [[1, "list-group"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center", "list-group-title"], ["class", "list-group-item d-flex justify-content-between align-items-center", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center", 3, "routerLink"], [1, "badge", "badge-pill"], [1, "fas", "fa-chevron-right", "right-icon-config"]],
        template: function SideMenuComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SideMenuComponent_li_3_Template, 4, 6, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lists);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
        styles: [".list-group-title[_ngcontent-%COMP%] {\n  font-size: 15px !important;\n  font-family: \"Museo-Sans\", Helvetica, Arial, serif !important;\n  height: 65px !important;\n}\n\n.list-group-item[_ngcontent-%COMP%] {\n  font-family: \"MuseoSans-500\", Helvetica, Arial, serif;\n  font-size: 12px;\n  font-weight: 500;\n  background-color: #F5F5F5;\n  text-align: left;\n  color: #535252;\n  padding-left: 40px;\n  height: 50px;\n  border-bottom: 2px solid #d2d0cc;\n  cursor: pointer;\n}\n\n.list-group-item[data-active=true][_ngcontent-%COMP%] {\n  background-color: #036fb6;\n  color: #ffffff;\n  pointer-events: none;\n}\n\n.list-group-item-last[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #d2d0cc;\n}\n\n.right-icon-config[_ngcontent-%COMP%] {\n  padding-right: 10px;\n  font-size: 10px;\n  color: #535252;\n  opacity: 0.4;\n}\n\n.right-icon-config[data-active=true][_ngcontent-%COMP%] {\n  color: #ffffff;\n  opacity: 1;\n}\n\n.list-group-item[_ngcontent-%COMP%]:hover {\n  z-index: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NpZGUtbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0VBQ0EsNkRBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0kscURBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUNJO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFDUjs7QUFHQTtFQUNJLGdDQUFBO0FBQUo7O0FBR0E7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUVJO0VBQ0ksY0FBQTtFQUNBLFVBQUE7QUFBUjs7QUFJQTtFQUNJLFVBQUE7QUFESiIsImZpbGUiOiJzaWRlLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdC1ncm91cC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1mYW1pbHk6IFwiTXVzZW8tU2Fuc1wiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzZXJpZiAhaW1wb3J0YW50OyBcbiAgICBoZWlnaHQ6IDY1cHggIWltcG9ydGFudDtcbn1cblxuLmxpc3QtZ3JvdXAtaXRlbSB7XG4gICAgZm9udC1mYW1pbHk6IFwiTXVzZW9TYW5zLTUwMFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzZXJpZjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgY29sb3I6ICM1MzUyNTI7XG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDIxMCwgMjA4LCAyMDQpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICZbZGF0YS1hY3RpdmU9dHJ1ZV17XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzLCAxMTEsIDE4Mik7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG59XG5cbi5saXN0LWdyb3VwLWl0ZW0tbGFzdCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMTAsIDIwOCwgMjA0KTs7XG59XG5cbi5yaWdodC1pY29uLWNvbmZpZyB7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgY29sb3I6ICM1MzUyNTI7XG4gICAgb3BhY2l0eTogMC40O1xuXG4gICAgJltkYXRhLWFjdGl2ZT10cnVlXXtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuXG4ubGlzdC1ncm91cC1pdGVtOmhvdmVyIHtcbiAgICB6LWluZGV4OiAwO1xufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "AGKy":
    /*!************************************************!*\
      !*** ./src/app/shared/myform/myform.module.ts ***!
      \************************************************/

    /*! exports provided: MyformModule */

    /***/
    function AGKy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyformModule", function () {
        return MyformModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _myform_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./myform.component */
      "l9h7");
      /* harmony import */


      var _myinput_myinput_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./myinput/myinput.component */
      "qNYV");
      /* harmony import */


      var _card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../card/card.component */
      "Fe25");
      /* harmony import */


      var _card_card_dropdown_card_dropdown_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../card/card-dropdown/card-dropdown.component */
      "68i6");
      /* harmony import */


      var _modals_modals_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../modals/modals.module */
      "qG2b");
      /* harmony import */


      var _ng_multi_select_multi_select_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../ng-multi-select/multi-select.module */
      "riLG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MyformModule = function MyformModule() {
        _classCallCheck(this, MyformModule);
      };

      MyformModule.ɵfac = function MyformModule_Factory(t) {
        return new (t || MyformModule)();
      };

      MyformModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
        type: MyformModule
      });
      MyformModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _modals_modals_module__WEBPACK_IMPORTED_MODULE_6__["ModalsModule"], _ng_multi_select_multi_select_module__WEBPACK_IMPORTED_MODULE_7__["MultiSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](MyformModule, {
          declarations: [_myform_component__WEBPACK_IMPORTED_MODULE_2__["MyformComponent"], _myinput_myinput_component__WEBPACK_IMPORTED_MODULE_3__["MyinputComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"], _card_card_dropdown_card_dropdown_component__WEBPACK_IMPORTED_MODULE_5__["CardDropdownComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _modals_modals_module__WEBPACK_IMPORTED_MODULE_6__["ModalsModule"], _ng_multi_select_multi_select_module__WEBPACK_IMPORTED_MODULE_7__["MultiSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]],
          exports: [_myform_component__WEBPACK_IMPORTED_MODULE_2__["MyformComponent"], _myinput_myinput_component__WEBPACK_IMPORTED_MODULE_3__["MyinputComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"], _card_card_dropdown_card_dropdown_component__WEBPACK_IMPORTED_MODULE_5__["CardDropdownComponent"]]
        });
      })();
      /***/

    },

    /***/
    "APW9":
    /*!***********************************************************!*\
      !*** ./src/app/shared/breadcrumb/breadcrumb.component.ts ***!
      \***********************************************************/

    /*! exports provided: BreadcrumbComponent */

    /***/
    function APW9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function () {
        return BreadcrumbComponent;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function BreadcrumbComponent_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var breadcrumb_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", breadcrumb_r1.url);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", breadcrumb_r1.label, " ");
        }
      }

      var BreadcrumbComponent = /*#__PURE__*/function () {
        function BreadcrumbComponent(_route, _activatedRoute) {
          _classCallCheck(this, BreadcrumbComponent);

          this._route = _route;
          this._activatedRoute = _activatedRoute;
          this.breadcrumbs = this.buildBreadCrumb(this._activatedRoute.root);
        }

        _createClass(BreadcrumbComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.breadcrumbsObserver = this._route.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (event) {
              return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])()).subscribe(function () {
              _this5.breadcrumbs = _this5.buildBreadCrumb(_this5._activatedRoute.root);
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.breadcrumbsObserver.unsubscribe();
          }
          /**
           * Recursively build breadcrumb according to the activated route.
           * @param route
           * @param url
           * @param breadcrumbs
           */

        }, {
          key: "buildBreadCrumb",
          value: function buildBreadCrumb(route) {
            var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            var breadcrumbs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
            //If no routeConfig available we're on root path
            var label = route.routeConfig && route.routeConfig.data ? route.routeConfig.data.breadcrumb : '';
            var path = route.routeConfig && route.routeConfig.data ? route.routeConfig.path : ''; //if the route is dynamic route such as ':id' or ':slug' remove it

            var lastRoutePath = path === null || path === void 0 ? void 0 : path.split('/').pop();
            var isDynamicRoute = lastRoutePath === null || lastRoutePath === void 0 ? void 0 : lastRoutePath.startsWith(':');

            if (isDynamicRoute && !!route.snapshot) {
              var paramName = lastRoutePath === null || lastRoutePath === void 0 ? void 0 : lastRoutePath.split(':')[1];
              path = path === null || path === void 0 ? void 0 : path.replace(lastRoutePath, route.snapshot.params[paramName]);
              label = route.snapshot.params[paramName];
            } //in the routeConfig the complete path is not available so we rebuild it each time


            var nextUrl = path ? "".concat(url, "/").concat(path) : url;
            var breadcrumb = {
              label: label,
              url: nextUrl
            }; //only add route with non-empty label

            var newBreadcrumbs = breadcrumb.label ? [].concat(_toConsumableArray(breadcrumbs), [breadcrumb]) : _toConsumableArray(breadcrumbs);

            if (route.firstChild) {
              // if we are not on our current path yet there will be more children to look after to build our breadcrumb
              return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
            }

            return newBreadcrumbs;
          }
        }]);

        return BreadcrumbComponent;
      }();

      BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) {
        return new (t || BreadcrumbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]));
      };

      BreadcrumbComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: BreadcrumbComponent,
        selectors: [["app-breadcrumb"]],
        decls: 2,
        vars: 1,
        consts: [[1, "breadcrumb"], [4, "ngFor", "ngForOf"], ["routerLinkActive", "router-link-active", 3, "routerLink"]],
        template: function BreadcrumbComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ol", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BreadcrumbComponent_li_1_Template, 3, 2, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.breadcrumbs);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLink"]],
        styles: ["@charset \"UTF-8\";\n\n\n\n\n\n.breadcrumb[_ngcontent-%COMP%] {\n  background: none;\n  font-family: sans-serif;\n  font-weight: normal;\n  font-size: 1.6rem;\n  line-height: 2.9rem;\n  font-weight: bold;\n  line-height: 2.5rem;\n  margin: 0;\n  padding: 0.75rem 0;\n  margin-left: 50px;\n}\n.breadcrumb[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .breadcrumb[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .breadcrumb[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #8B8888;\n  font-family: \"Avenir-Heavy\", Helvetica, Arial, serif;\n  font-size: 14px;\n}\n.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .breadcrumb[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  color: dimgrey;\n  text-decoration: none;\n}\n.breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  list-style: none;\n  margin: 0.5rem;\n  padding-right: 2rem;\n  text-transform: capitalize;\n}\n.breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\n  content: \"\u0387\";\n  position: absolute;\n  color: #535252;\n  width: 0.5rem;\n  height: 1rem;\n  left: 100%;\n  transform: translateX(-100%);\n}\n.breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:first-child) {\n  padding-left: 1rem;\n}\n.breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  color: #535252;\n}\n.breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-right: 2rem;\n}\n.breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:after {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2JyZWFkY3J1bWIuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMvX3ZhcnMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9taXhpbnMvX3R5cG9ncmFwaHkuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEIsOEJBQUE7QUFDQSw4QkFBQTtBQUNBLDhCQUFBO0FBMEJBLDJCQUFBO0FBRUEseUJBQUE7QUQzQkE7RUFHSSxnQkFBQTtFRUxBLHVCQUFBO0VBMElJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFRnJJSixpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFLSjtBRStIWTtFQUNJLGlCQUFBO0FGN0hoQjtBQU5JOztFQUVJLGNBWmdCO0VBYWhCLG9EQUFBO0VBQ0EsZUFBQTtBQVFSO0FBTlE7O0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0FBU1o7QUFMSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtBQU9SO0FBTFE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQ2RFO0VEZUYsYUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsNEJBQUE7QUFPWjtBQUpRO0VBQ0ksa0JBQUE7QUFNWjtBQUhRO0VBQ0ksY0MxQkU7QUQrQmQ7QUFGUTtFQUNJLGtCQUFBO0FBSVo7QUFIWTtFQUNJLGFBQUE7QUFLaEIiLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMvbWl4aW5zL3R5cG9ncmFwaHlcIjtcbkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMvdmFyc1wiO1xuXG4uYnJlYWRjcnVtYiB7XG4gICAgJGNvbG9yX2JyZWFkY3J1bWJzOiAjOEI4ODg4O1xuICAgICRjb2xvcl9icmVhZGNydW1iX2NoZXZyb25fcmlnaHQ6ICRjb2xvcl90aXRsZTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIEBpbmNsdWRlIHR5cG9ncmFwaHk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogLjc1cmVtIDA7XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG5cbiAgICBhLFxuICAgIHNwYW4ge1xuICAgICAgICBjb2xvcjogJGNvbG9yX2JyZWFkY3J1bWJzO1xuICAgICAgICBmb250LWZhbWlseTogXCJBdmVuaXItSGVhdnlcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2VyaWY7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiBkaW1ncmV5O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGkge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIG1hcmdpbjogLjVyZW07XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuXG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogXCJcXDAzODdcIjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3JfYnJlYWRjcnVtYl9jaGV2cm9uX3JpZ2h0O1xuICAgICAgICAgICAgd2lkdGg6IC41cmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgbGVmdDogMTAwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgICAgIH1cblxuICAgICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvcl90aXRsZTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XG4gICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59IiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKiogY29sb3JzICoqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4kY29sb3JfYmFja2dyb3VuZDogI2ZmZmZmZjtcbiRjb2xvci1iYWNrZ3JvdW5kLWNhcmQ6ICNmZmZmZmY7XG4kY29sb3JfYmFja2dyb3VuZC1pbnB1dHM6ICNmZmZmZmY7XG4kY29sb3JfdG9wYmFyOiAjZmZmZmZmO1xuJGNvbG9yX2J1dHRvbnM6ICM0ZDRkNGQ7XG4kY29sb3JfcHJpbWFyeTogIzAzNkZCNjtcbiRjb2xvcl9zZWNvbmRhcnk6ICNlNTdjMmM7XG4kY29sb3JfdGVydGlhcnk6ICMxMjI2M2Y7XG4kY29sb3Jfd2FybmluZzogI2U2Mzc1NztcbiRjb2xvcl9zdWNjZXNzOiAjMDA3NzAwO1xuJGNvbG9yX3doaXRlOiAjZmZmZmZmO1xuJGNvbG9yX2JsYWNrOiAjMDAwO1xuJGNvbG9yX2xpZ2h0Z3JleTogcmdiYSgkY29sb3Jfd2hpdGUsIDAuNSk7XG4kY29sb3JfbGlnaHRlcmdyZXk6IHJnYmEoJGNvbG9yX3doaXRlLCAwLjI1KTtcbiRjb2xvcl9mb3Jtc19ib3JkZXI6ICM3MDcwNzA7XG4kY29sb3JfZm9ybV9wbGFjZWhvbGRlcjogI2IxYzJkOTtcbiRjb2xvcl9saW5rc19idXR0b25zOiAjMDM2ZmI2O1xuJGNvbG9yX3N1YnN1YnRpdGxlOiAjN2U3ZTdlO1xuJGNvbG9yX3RpdGxlOiAjNTM1MjUyO1xuJGNvbG9yX3N1YnRpdGxlOiAjQjJCMUIxO1xuJGNvbG9yX25hdmJhcl9iYWNrZ3JvdW5kOiAkY29sb3JfYmFja2dyb3VuZDtcbiRjb2xvcl9uYXZiYXJfYm9yZGVyOiAjYTlhOGE4O1xuXG4kY29sb3JfdGl0bGVfZGVmYXVsdDogIzUzNTI1Mjtcbi8qIEFkZCByZXVzYWJsZSBhbmltYXRpb25zKi9cblxuLyogQWNjb21vZGF0ZSBpcGhvbmUgMTErKi9cbiRpcGhvbmUtc2FmZXNwYWNlOiByZW0tY2FsYyg0NCk7XG4kY29tbW9uR3V0dGVyOiAzcmVtO1xuIiwiQG1peGluIHR5cG9ncmFwaHkoJGZvcm1hdDogYm9keSwgJHdlaWdodDogbnVsbCwgJGNvbG9yOm51bGwsICRmb250c2l6ZTogbnVsbCwgJGxpbmVoZWlnaHQ6IG51bGwsICRtYXhsaW5lczowICkge1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgIEBpZiAkbWF4bGluZXMgPiAwIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogJG1heGxpbmVzO1xuICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgIH1cblxuICAgIEBpZiAkZm9ybWF0ID09ICBoMSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc2l6ZTogNi40cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogNi42cmVtO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgXG4gICAgICAgIEBpZiAkd2VpZ2h0ICE9IGJvbGQgYW5kICR3ZWlnaHQgIT0gc3Ryb25nIHtcbiAgICAgICAgICAgIHN0cm9uZywgYiB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQGlmICRtYXhsaW5lcyA+IDAge1xuXHRcdFx0bWF4LWhlaWdodDogOHJlbSAqICRtYXhsaW5lcztcblx0XHR9XG4gICAgfSBAZWxzZSBpZiAkZm9ybWF0ID09IGgyIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogNC44cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogNC44cmVtO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICAgICAgIEBpZiAkd2VpZ2h0ICE9IGJvbGQgYW5kICR3ZWlnaHQgIT0gc3Ryb25nIHtcbiAgICAgICAgICAgIHN0cm9uZywgYiB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXHRcdEBpZiAkbWF4bGluZXMgPiAwIHtcblx0XHRcdG1heC1oZWlnaHQ6IDQuOHJlbSAqICRtYXhsaW5lcztcblx0XHR9XG4gICAgfSBAZWxzZSBpZiAkZm9ybWF0ID09IGgzIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgZm9udC1zaXplOiA0LjhyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1LjRyZW07XG5cbiAgICAgICAgQGlmICR3ZWlnaHQgIT0gYm9sZCBhbmQgJHdlaWdodCAhPSBzdHJvbmcge1xuICAgICAgICAgICAgc3Ryb25nLCBiIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cdFx0QGlmICRtYXhsaW5lcyA+IDAge1xuXHRcdFx0bWF4LWhlaWdodDogNC44cmVtICogJG1heGxpbmVzO1xuXHRcdH1cbiAgICB9IEBlbHNlIGlmICRmb3JtYXQgPT0gaDQge1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LXNpemU6IDRyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0LjRyZW07XG5cbiAgICAgICAgQGlmICR3ZWlnaHQgIT0gYm9sZCBhbmQgJHdlaWdodCAhPSBzdHJvbmcge1xuICAgICAgICAgICAgc3Ryb25nLCBiIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cdFx0QGlmICRtYXhsaW5lcyA+IDAge1xuXHRcdFx0bWF4LWhlaWdodDogNC40cmVtICogJG1heGxpbmVzO1xuXHRcdH1cbiAgICB9IEBlbHNlIGlmICRmb3JtYXQgPT0gaDUge1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcblxuICAgICAgICBAaWYgJHdlaWdodCAhPSBib2xkIGFuZCAkd2VpZ2h0ICE9IHN0cm9uZyB7XG4gICAgICAgICAgICBzdHJvbmcsIGIge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblx0XHRAaWYgJG1heGxpbmVzID4gMCB7XG5cdFx0XHRtYXgtaGVpZ2h0OiAxLjhyZW0gKiAkbWF4bGluZXM7XG5cdFx0fVxuICAgIH0gQGVsc2UgaWYgJGZvcm1hdCA9PSBoNiB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNHJlbTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICAgICAgICBAaWYgJHdlaWdodCAhPSBib2xkIGFuZCAkd2VpZ2h0ICE9IHN0cm9uZyB7XG4gICAgICAgICAgICBzdHJvbmcsIGIge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblx0XHRAaWYgJG1heGxpbmVzID4gMCB7XG5cdFx0XHRtYXgtaGVpZ2h0OiAxLjRyZW0gKiAkbWF4bGluZXM7XG5cdFx0fVxuICAgIH0gQGVsc2UgaWYgJGZvcm1hdCA9PSBzbWFsbCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMi4zcmVtO1xuXG4gICAgICAgIEBpZiAkd2VpZ2h0ICE9IGJvbGQgYW5kICR3ZWlnaHQgIT0gc3Ryb25nIHtcbiAgICAgICAgICAgIHN0cm9uZywgYiB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXHRcdEBpZiAkbWF4bGluZXMgPiAwIHtcblx0XHRcdG1heC1oZWlnaHQ6IDIuM3JlbSAqICRtYXhsaW5lcztcblx0XHR9XG4gICAgfSBAZWxzZSBpZiAkZm9ybWF0ID09IHZlcnlzbWFsbCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcblxuICAgICAgICBAaWYgJHdlaWdodCAhPSBib2xkIGFuZCAkd2VpZ2h0ICE9IHN0cm9uZyB7XG4gICAgICAgICAgICBzdHJvbmcsIGIge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblx0XHRAaWYgJG1heGxpbmVzID4gMCB7XG5cdFx0XHRtYXgtaGVpZ2h0OiAxLjJyZW0gKiAkbWF4bGluZXM7XG5cdFx0fVxuICAgIH0gQGVsc2UgaWYgJGZvcm1hdCA9PSB2ZXJ5dmVyeXNtYWxsIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcblxuICAgICAgICBAaWYgJHdlaWdodCAhPSBib2xkIGFuZCAkd2VpZ2h0ICE9IHN0cm9uZyB7XG4gICAgICAgICAgICBzdHJvbmcsIGIge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblx0XHRAaWYgJG1heGxpbmVzID4gMCB7XG5cdFx0XHRtYXgtaGVpZ2h0OiAxcmVtICogJG1heGxpbmVzO1xuXHRcdH1cbiAgICB9IEBlbHNlICB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMi45cmVtO1xuXG4gICAgICAgIEBpZiAkd2VpZ2h0ICE9IGJvbGQgYW5kICR3ZWlnaHQgIT0gc3Ryb25nIHtcbiAgICAgICAgICAgIHN0cm9uZywgYiB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXHRcdEBpZiAkbWF4bGluZXMgPiAwIHtcblx0XHRcdG1heC1oZWlnaHQ6IDIuNnJlbSAqICRtYXhsaW5lcztcblx0XHR9XG4gICAgfVxuXG4gICAgQGlmICR3ZWlnaHQgPT0gYm9sZCBvciAkd2VpZ2h0ID09IHN0cm9uZyB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH0gQGVsc2UgaWYgJHdlaWdodCA9PSBib2xkIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfSBAZWxzZSBpZiAkd2VpZ2h0ID09IG5vcm1hbCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgfVxuXG4gICAgQGlmICRjb2xvciB7XG4gICAgICAgIGNvbG9yOiAkY29sb3I7XG4gICAgfVxuXG4gICAgQGlmICRmb250c2l6ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogJGZvbnRzaXplO1xuICAgIH1cblxuICAgIEBpZiAkbGluZWhlaWdodCB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAkbGluZWhlaWdodDtcbiAgICB9XG59Il19 */"]
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.
      //TODO -> Pull the environments from a dotenv for security purposes


      var environment = {
        production: false,
        APIEndpoint: 'http://172.105.88.80:8080/',
        APIv1Endpoint: 'http://172.105.88.80:8080/api/v1/',
        APIClientID: 'fbaPXGrD6wewVEqoOkJfvierIrYbnROPXMa8CDv5'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "BsoD":
    /*!**************************************************************************!*\
      !*** ./src/app/shared/modals/confirm-dialog/confirm-dialog.component.ts ***!
      \**************************************************************************/

    /*! exports provided: ConfirmDialogComponent */

    /***/
    function BsoD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function () {
        return ConfirmDialogComponent;
      });
      /* harmony import */


      var _basic_modals_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../basic/modals.component */
      "b2RV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _modals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../modals.service */
      "22UC");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ConfirmDialogComponent_div_0_span_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.confirm_message.text);
        }
      }

      function ConfirmDialogComponent_div_0_button_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmDialogComponent_div_0_button_9_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r3.confirm_message.cancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "show": a0
        };
      };

      function ConfirmDialogComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmDialogComponent_div_0_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r5.confirm_message.cancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ConfirmDialogComponent_div_0_span_7_Template, 2, 1, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ConfirmDialogComponent_div_0_button_9_Template, 2, 0, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmDialogComponent_div_0_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r7.confirm_message.ok();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, ctx_r0.confirm_message));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.confirm_message.type == "prompt");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.hasCancelButton);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.okButton);
        }
      }

      var ConfirmDialogComponent = /*#__PURE__*/function (_basic_modals_compone) {
        _inherits(ConfirmDialogComponent, _basic_modals_compone);

        var _super = _createSuper(ConfirmDialogComponent);

        function ConfirmDialogComponent(_modalService) {
          var _this6;

          _classCallCheck(this, ConfirmDialogComponent);

          _this6 = _super.call(this);
          _this6._modalService = _modalService;
          _this6.okButton = 'OK';
          _this6.hasCancelButton = true;
          return _this6;
        }

        _createClass(ConfirmDialogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            this.confirmModalSubscription = this._modalService.confirmModalSubject.subscribe(function (message) {
              console.log("SHOULD OPEN THE MODAL", message);
              _this7.confirm_message = message;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.confirmModalSubscription) {
              this.confirmModalSubscription.unsubscribe();
            }
          }
        }]);

        return ConfirmDialogComponent;
      }(_basic_modals_component__WEBPACK_IMPORTED_MODULE_0__["ModalsComponent"]);

      ConfirmDialogComponent.ɵfac = function ConfirmDialogComponent_Factory(t) {
        return new (t || ConfirmDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_modals_service__WEBPACK_IMPORTED_MODULE_2__["ModalsService"]));
      };

      ConfirmDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ConfirmDialogComponent,
        selectors: [["app-confirm-dialog"]],
        inputs: {
          okButton: "okButton",
          hasCancelButton: "hasCancelButton"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
        decls: 1,
        vars: 1,
        consts: [["class", "modal fade", "tabindex", "-1", "role", "dialog", 3, "ngClass", 4, "ngIf"], ["tabindex", "-1", "role", "dialog", 1, "modal", "fade", 3, "ngClass"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-body"], [1, "confirm__modal"], ["type", "button", 1, "close", 3, "click"], ["class", "confirm__message", 4, "ngIf"], [1, "confirm__buttons"], ["type", "button", "class", "btn btn-secondary cancel", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-secondary", "confirm", 3, "click"], [1, "confirm__message"], ["type", "button", 1, "btn", "btn-secondary", "cancel", 3, "click"]],
        template: function ConfirmDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ConfirmDialogComponent_div_0_Template, 12, 6, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.confirm_message);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
        styles: [".show[_ngcontent-%COMP%] {\n  display: block !important;\n}\n\n.modal-backdrop.show[_ngcontent-%COMP%] {\n  display: block !important;\n  opacity: 0.5;\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  border-radius: 0.8rem !important;\n}\n\n.confirm__modal[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.confirm__modal[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  align-self: flex-end;\n}\n\n.confirm__message[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  color: #727272;\n}\n\n.confirm__buttons[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  padding-top: 2rem;\n  color: #f5f5f5;\n}\n\n.confirm__buttons[_ngcontent-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  background-color: #E2E2E2;\n  border-color: #E2E2E2;\n  color: #000;\n  font-size: inherit;\n}\n\n.confirm__buttons[_ngcontent-%COMP%]   .confirm[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n  background-color: #036fb6;\n  color: inherit;\n  border-color: #036fb6;\n  font-size: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUFDSjs7QUFDQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUFBO0VBQ0ksZ0NBQUE7QUFHSjs7QUFBSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFHUjs7QUFEUTtFQUNJLGVBQUE7RUFDQSxvQkFBQTtBQUdaOztBQUNJO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FBQ1I7O0FBRUk7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUFSOztBQUNRO0VBQ0kseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUNaOztBQUNRO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBQ1oiLCJmaWxlIjoiY29uZmlybS1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hvdyB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cbi5tb2RhbC1iYWNrZHJvcC5zaG93IHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIG9wYWNpdHk6IC41O1xufVxuLm1vZGFsLWNvbnRlbnQge1xuICAgIGJvcmRlci1yYWRpdXM6IC44cmVtICFpbXBvcnRhbnQ7XG59XG4uY29uZmlybSB7XG4gICAgJl9fbW9kYWwge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAuY2xvc2Uge1xuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19tZXNzYWdlIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgICAgIGNvbG9yOiAjNzI3MjcyO1xuICAgIH1cblxuICAgICZfX2J1dHRvbnMge1xuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgcGFkZGluZy10b3A6IDJyZW07XG4gICAgICAgIGNvbG9yOiAjZjVmNWY1O1xuICAgICAgICAuY2FuY2VsIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFMkUyRTI7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICNFMkUyRTI7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgICAgfVxuICAgICAgICAuY29uZmlybSB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMzZmYjY7XG4gICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzAzNmZiNjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "CFL1":
    /*!***********************************************!*\
      !*** ./src/app/services/user/user.service.ts ***!
      \***********************************************/

    /*! exports provided: UserService */

    /***/
    function CFL1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return UserService;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _http_http_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../http/http-service.service */
      "l91v");
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services */
      "o0su");

      var UserService = /*#__PURE__*/function () {
        function UserService(_http, _storageService) {
          _classCallCheck(this, UserService);

          this._http = _http;
          this._storageService = _storageService;
        }

        _createClass(UserService, [{
          key: "userProfile",
          value: function userProfile() {
            var _this8 = this;

            return this._http.get('users/me').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
              console.log('THE USER PROFILE', res);

              _this8._storageService.setItem('userDetails', JSON.stringify(res));

              return res;
            }));
          }
        }, {
          key: "editUserProfile",
          value: function editUserProfile(data) {
            var _this9 = this;

            return this._http.patch('users/me', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
              _this9._storageService.setItem('userDetails', JSON.stringify(res));

              return res;
            }));
          }
        }, {
          key: "uploadUserImage",
          value: function uploadUserImage(data) {
            var _this10 = this;

            // const options = {
            //   params: new HttpParams(),
            //   reportProgress: true,
            // }
            return this._http.patch('users/me/profile', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
              // localStorage.setItem('userDetails', JSON.stringify(res));
              _this10._storageService.setItem('userDetails', JSON.stringify(res));

              return res;
            }));
          }
        }]);

        return UserService;
      }();

      UserService.ɵfac = function UserService_Factory(t) {
        return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_http_http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_services__WEBPACK_IMPORTED_MODULE_3__["StorageService"]));
      };

      UserService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: UserService,
        factory: UserService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "E2f4":
    /*!*****************************************************!*\
      !*** ./src/app/services/storage/storage.service.ts ***!
      \*****************************************************/

    /*! exports provided: StorageService */

    /***/
    function E2f4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StorageService", function () {
        return StorageService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var StorageService = /*#__PURE__*/function () {
        function StorageService() {
          _classCallCheck(this, StorageService);

          this.storageSub = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        }

        _createClass(StorageService, [{
          key: "watchStorage",
          value: function watchStorage() {
            return this.storageSub.asObservable();
          }
        }, {
          key: "setItem",
          value: function setItem(key, data) {
            localStorage.setItem(key, data);
            this.storageSub.next(key);
          }
        }, {
          key: "getItem",
          value: function getItem(key) {
            return localStorage.getItem(key);
          }
        }, {
          key: "removeItem",
          value: function removeItem(key) {
            localStorage.removeItem(key);
            this.storageSub.next(key);
          }
        }]);

        return StorageService;
      }();

      StorageService.ɵfac = function StorageService_Factory(t) {
        return new (t || StorageService)();
      };

      StorageService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: StorageService,
        factory: StorageService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "Fe25":
    /*!***********************************************!*\
      !*** ./src/app/shared/card/card.component.ts ***!
      \***********************************************/

    /*! exports provided: CardComponent */

    /***/
    function Fe25(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardComponent", function () {
        return CardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var _c0 = ["*"];

      var CardComponent = /*#__PURE__*/function () {
        function CardComponent() {
          _classCallCheck(this, CardComponent);

          this.title = '';
          this.tabbed = false;
        }

        _createClass(CardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CardComponent;
      }();

      CardComponent.ɵfac = function CardComponent_Factory(t) {
        return new (t || CardComponent)();
      };

      CardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CardComponent,
        selectors: [["app-card"]],
        inputs: {
          title: "title",
          tabbed: "tabbed",
          tabbedItems: "tabbedItems"
        },
        ngContentSelectors: _c0,
        decls: 6,
        vars: 1,
        consts: [[1, "card"], [1, "card-header"], [1, "card-body"]],
        template: function CardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
          }
        },
        styles: ["@font-face {\n  font-family: \"Avenir-Heavy\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(\"https://fonts.animaapp.com/Avenir-Heavy\") format(\"truetype\");\n}\n@font-face {\n  font-family: \"Museo-Sans\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(\"https://fonts.animaapp.com/MuseoSans-700\") format(\"opentype\");\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  height: 4rem;\n  padding: 1.25rem 1.25rem;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  margin: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fdmFycy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzL19zZXR0aW5ncy5zY3NzIiwiLi4vLi4vLi4vLi4vY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4QkFBQTtBQUNBLDhCQUFBO0FBQ0EsOEJBQUE7QUEwQkEsMkJBQUE7QUFFQSx5QkFBQTtBQ0dBO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0VBQUE7QUMzQkY7QUQ4QkE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1RUFBQTtBQzVCRjtBQW1HSTtFQUNJLFlBQUE7RUFDQSx3QkFBQTtBQWpHUjtBQW1HSTtFQUNJLFlBQUE7QUFqR1IiLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqIGNvbG9ycyAqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuJGNvbG9yX2JhY2tncm91bmQ6ICNmZmZmZmY7XG4kY29sb3ItYmFja2dyb3VuZC1jYXJkOiAjZmZmZmZmO1xuJGNvbG9yX2JhY2tncm91bmQtaW5wdXRzOiAjZmZmZmZmO1xuJGNvbG9yX3RvcGJhcjogI2ZmZmZmZjtcbiRjb2xvcl9idXR0b25zOiAjNGQ0ZDRkO1xuJGNvbG9yX3ByaW1hcnk6ICMwMzZGQjY7XG4kY29sb3Jfc2Vjb25kYXJ5OiAjZTU3YzJjO1xuJGNvbG9yX3RlcnRpYXJ5OiAjMTIyNjNmO1xuJGNvbG9yX3dhcm5pbmc6ICNlNjM3NTc7XG4kY29sb3Jfc3VjY2VzczogIzAwNzcwMDtcbiRjb2xvcl93aGl0ZTogI2ZmZmZmZjtcbiRjb2xvcl9ibGFjazogIzAwMDtcbiRjb2xvcl9saWdodGdyZXk6IHJnYmEoJGNvbG9yX3doaXRlLCAwLjUpO1xuJGNvbG9yX2xpZ2h0ZXJncmV5OiByZ2JhKCRjb2xvcl93aGl0ZSwgMC4yNSk7XG4kY29sb3JfZm9ybXNfYm9yZGVyOiAjNzA3MDcwO1xuJGNvbG9yX2Zvcm1fcGxhY2Vob2xkZXI6ICNiMWMyZDk7XG4kY29sb3JfbGlua3NfYnV0dG9uczogIzAzNmZiNjtcbiRjb2xvcl9zdWJzdWJ0aXRsZTogIzdlN2U3ZTtcbiRjb2xvcl90aXRsZTogIzUzNTI1MjtcbiRjb2xvcl9zdWJ0aXRsZTogI0IyQjFCMTtcbiRjb2xvcl9uYXZiYXJfYmFja2dyb3VuZDogJGNvbG9yX2JhY2tncm91bmQ7XG4kY29sb3JfbmF2YmFyX2JvcmRlcjogI2E5YThhODtcblxuJGNvbG9yX3RpdGxlX2RlZmF1bHQ6ICM1MzUyNTI7XG4vKiBBZGQgcmV1c2FibGUgYW5pbWF0aW9ucyovXG5cbi8qIEFjY29tb2RhdGUgaXBob25lIDExKyovXG4kaXBob25lLXNhZmVzcGFjZTogcmVtLWNhbGMoNDQpO1xuJGNvbW1vbkd1dHRlcjogM3JlbTtcbiIsIi8vICBGb3VuZGF0aW9uIGZvciBTaXRlcyBTZXR0aW5nc1xuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIFRhYmxlIG9mIENvbnRlbnRzOlxuLy9cbi8vICAgMS4gR2xvYmFsXG4vLyAgIDIuIEJyZWFrcG9pbnRzXG4vLyAgIDMuIENhcmRcbi8vICAgNC4gUHJvZ3Jlc3MgYmFyXG4vLyAgIDUuIEZvb3RlclxuLy8gICA2LiBIZWFkZXJcblxuLy8gMS4gR2xvYmFsXG4vLyAtLS0tLS0tLS1cblxuJGdsb2JhbC1mb250LXNpemU6IDYyLjUlO1xuXG4kZ2xvYmFsLXBhZ2Utd2lkdGg6IHJlbS1jYWxjKDE4MTgpO1xuJGdsb2JhbC1jb250ZW50LXdpZHRoOiByZW0tY2FsYygxNDAwKTtcbiRnbG9iYWwtbGluZWhlaWdodDogMS41O1xuJGJvZHktYmFja2dyb3VuZDogJGNvbG9yX3doaXRlO1xuJGJvZHktZm9udC1jb2xvcjogJGNvbG9yX2JsYWNrO1xuJGJvZHktZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgUm9ib3RvLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiRib2R5LWFudGlhbGlhc2VkOiB0cnVlO1xuJGdsb2JhbC1tYXJnaW46IDFyZW07XG4kZ2xvYmFsLXBhZGRpbmc6IDFyZW07XG4kZ2xvYmFsLXBvc2l0aW9uOiAxcmVtO1xuJGdsb2JhbC13ZWlnaHQtbm9ybWFsOiBub3JtYWw7XG4kZ2xvYmFsLXdlaWdodC1ib2xkOiBib2xkO1xuJGdsb2JhbC1yYWRpdXM6IDA7XG4kZ2xvYmFsLXRleHQtZGlyZWN0aW9uOiBsdHI7XG4kcHJpbWFyeS1jb2xvcjogJGNvbG9yX3ByaW1hcnk7XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBdmVuaXItSGVhdnlcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybChcImh0dHBzOi8vZm9udHMuYW5pbWFhcHAuY29tL0F2ZW5pci1IZWF2eVwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk11c2VvLVNhbnNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybChcImh0dHBzOi8vZm9udHMuYW5pbWFhcHAuY29tL011c2VvU2Fucy03MDBcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XG59XG5cblxuLy8gMi4gQnJlYWtwb2ludHNcbi8vIC0tLS0tLS0tLS0tLS0tXG5cbiRicmVha3BvaW50czogKFxuICBzbWFsbDogMCxcbiAgc3VwZXJtaW5pOiA0MDBweCxcbiAgbWluaTogNDgwcHgsXG4gIG1lZGl1bTogNjQwcHgsXG4gIHRhYmxldDogNzYwcHgsXG4gIG1lZC1sYXJnZTogOTYwcHgsXG4gIGxhcmdlOiAxMDI0cHgsXG4gIHhsYXJnZTogMTI4MHB4LFxuICB4eGxhcmdlOiAxNTQwcHgsXG4gIHh4eGxhcmdlOiAxOTIwcHgsXG4gIHh4eHhsYXJnZTogMjU2MHB4LFxuKTtcbiRwcmludC1icmVha3BvaW50OiBsYXJnZTtcbiRicmVha3BvaW50LWNsYXNzZXM6IChzbWFsbCBtZWRpdW0gbGFyZ2UpO1xuXG4vLyAzLiBDYXJkXG4vLyAtLS0tLS0tLVxuXG4kY2FyZC1iYWNrZ3JvdW5kOiAkY29sb3Jfd2hpdGU7XG4kY2FyZC1mb250LWNvbG9yOiAkYm9keS1mb250LWNvbG9yO1xuJGNhcmQtZGl2aWRlci1iYWNrZ3JvdW5kOiAkY29sb3JfbGlnaHRncmV5O1xuJGNhcmQtYm9yZGVyOiAxcHggc29saWQgJGNvbG9yX2xpZ2h0Z3JleTtcbiRjYXJkLXNoYWRvdzogbm9uZTtcbiRjYXJkLWJvcmRlci1yYWRpdXM6ICRnbG9iYWwtcmFkaXVzO1xuJGNhcmQtcGFkZGluZzogJGdsb2JhbC1wYWRkaW5nO1xuJGNhcmQtbWFyZ2luLWJvdHRvbTogJGdsb2JhbC1tYXJnaW47XG5cbi8vIDQuIFByb2dyZXNzIEJhclxuLy8gLS0tLS0tLS0tLS0tLS0tLVxuXG4kcHJvZ3Jlc3MtaGVpZ2h0OiAxcmVtO1xuJHByb2dyZXNzLWJhY2tncm91bmQ6ICRjb2xvcl9saWdodGVyZ3JleTtcbiRwcm9ncmVzcy1tYXJnaW4tYm90dG9tOiAkZ2xvYmFsLW1hcmdpbjtcbiRwcm9ncmVzcy1tZXRlci1iYWNrZ3JvdW5kOiAkcHJpbWFyeS1jb2xvcjtcbiRwcm9ncmVzcy1yYWRpdXM6ICRnbG9iYWwtcmFkaXVzO1xuXG4vLyA1LiBGb290ZXJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tXG4kZm9vdGVyLWhlaWdodDogNXJlbTtcblxuLy82LiBOYXZiYXJcbiRuYXZiYXJfaGVpZ2h0OiA4LjRyZW07XG4kbmF2YmFyX2JveF9zaGFkb3c6IDAgLjNyZW0gLjZyZW0gcmdiYSgkY29sb3JfYmxhY2ssIC4yOSk7XG5cbiIsIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMvbWl4aW5zL3R5cG9ncmFwaHlcIjtcbkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMvdmFyc1wiO1xuQGltcG9ydCBcIi4uLy4uL3N0eWxlcy9zZXR0aW5nc1wiO1xuXG4kY2FyZC1oZWFkZXItY29sb3I6ICNmNWY1ZjU7XG4kY29sb3ItYm9yZGVyczogcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4vLyAuY2FyZCB7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNhcmQtaGVhZGVyLWNvbG9yO1xuLy8gICAgIGhlaWdodDogYXV0bztcbi8vICAgICB3aWR0aDogYXV0bztcbi8vICAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcblxuLy8gICAgICZfX2hlYWRlciB7XG4vLyAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICAgICAgQGluY2x1ZGUgdHlwb2dyYXBoeShoNSk7XG4vLyAgICAgICAgIGNvbG9yOiAkY29sb3JfdGl0bGU7XG4vLyAgICAgICAgIHBhZGRpbmc6IDIuNXJlbSA5LjVyZW07XG4vLyAgICAgICAgIGhlaWdodDogNy4ycmVtO1xuXG4vLyAgICAgICAgICY6YWZ0ZXIge1xuLy8gICAgICAgICAgICAgY29udGVudDogXCJcIjtcbi8vICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICAgICAgICAgIGxlZnQ6IDA7XG4vLyAgICAgICAgICAgICByaWdodDogMDtcbi8vICAgICAgICAgICAgIGJvdHRvbTogMDtcbi8vICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkY29sb3ItYm9yZGVycztcbi8vICAgICAgICAgfVxuXG4vLyAgICAgICAgICYuaGFzLS1kcm9wZG93biB7XG4vLyAgICAgICAgICAgICAmOmFmdGVyIHtcbi8vICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG5cbi8vICAgICAgICAgJi10aXRsZSB7XG4vLyAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4vLyAgICAgICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbi8vICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbi8vICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkF2ZW5pci1IZWF2eVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzZXJpZjtcbi8vICAgICAgICAgfVxuLy8gICAgIH1cblxuLy8gICAgICZfX2JvZHkge1xuLy8gICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgICAgIC8vIHBhZGRpbmc6IDFyZW0gM3JlbTtcbi8vICAgICAgICAgcGFkZGluZzogMy4ycmVtIDkuNXJlbTsgLy9jaGVjayB0aGUgZHluYW1pYyBmb3JtIHBhZGRpbmcgaWYgY2hhbmdlZFxuLy8gICAgIH1cbi8vIH1cblxuLy8gLm5hdiB7XG4vLyAgICAgJi10YWJzIHtcbiAgICAgICAgXG4vLyAgICAgICAgIGJvcmRlci1ib3R0b206IHRyYW5zcGFyZW50O1xuXG4vLyAgICAgICAgICY6YWZ0ZXIge1xuLy8gICAgICAgICAgICAgY29udGVudDogXCJcIjtcbi8vICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICAgICAgICAgIGJvdHRvbTogMDtcbi8vICAgICAgICAgICAgIGxlZnQ6IDA7XG4vLyAgICAgICAgICAgICByaWdodDogMDtcbi8vICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkY29sb3ItYm9yZGVycztcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vICAgICAmLWl0ZW0ge1xuLy8gICAgICAgICBoZWlnaHQ6IDQuN3JlbTtcbi8vICAgICAgICAgbWFyZ2luLXRvcDogLjFyZW07XG4vLyAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICB9XG4vLyAgICAgJi10cmFuc3BhcmVudCB7XG4vLyAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjYXJkLWhlYWRlci1jb2xvcjtcbi8vICAgICAgICAgaGVpZ2h0OiAuNHJlbTtcbi8vICAgICAgICAgYm90dG9tOiAtLjJyZW07XG4vLyAgICAgICAgIHotaW5kZXg6IDE7XG4vLyAgICAgICAgIG9wYWNpdHk6IDA7XG4vLyAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuLy8gICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4xOHMgZWFzZS1pbjtcblxuLy8gICAgICAgICAmLmFjdGl2ZSB7XG4vLyAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gICAgICYtbGluayB7XG4vLyAgICAgICAgIGhlaWdodDogMTAwJTtcbi8vICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4vLyAgICAgICAgIGNvbG9yOiAkY29sb3JfdGl0bGU7XG4vLyAgICAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yLWJvcmRlcnM7XG4vLyAgICAgICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xuLy8gICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbi8vICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICAgICAgICBwYWRkaW5nLXRvcDogMXJlbTtcblxuLy8gICAgICAgICBhIHtcbi8vICAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuLy8gICAgICAgICB9XG5cbi8vICAgICAgICAgJi5hY3RpdmUge1xuLy8gICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4vLyAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvci1ib3JkZXJzO1xuLy8gICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbi8vICAgICAgICAgfVxuXG4vLyAgICAgICAgICY6bm90KC5hY3RpdmUpIHtcbi8vICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbi8vICAgICAgICAgICAgICY6aG92ZXIge1xuLy8gICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbi8vICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vIH1cblxuLmNhcmQge1xuICAgIC5jYXJkLWhlYWRlciB7XG4gICAgICAgIGhlaWdodDogNHJlbTtcbiAgICAgICAgcGFkZGluZzogMS4yNXJlbSAxLjI1cmVtO1xuICAgIH1cbiAgICAuY2FyZC1ib2R5IHtcbiAgICAgICAgbWFyZ2luOiAycmVtO1xuICAgIH1cbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "GPJV":
    /*!*****************************************************************************!*\
      !*** ./src/app/shared/textarea-with-count/textarea-with-count.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: TextareaWithCountComponent */

    /***/
    function GPJV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextareaWithCountComponent", function () {
        return TextareaWithCountComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var TextareaWithCountComponent = /*#__PURE__*/function () {
        function TextareaWithCountComponent() {
          _classCallCheck(this, TextareaWithCountComponent);

          this.count = 0;
          this.fistTime = true;
          this.areaCountFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            area_count: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });

          this.onChange = function () {};

          this.onTouch = function () {
            console.log("touched...");
          };
        }

        _createClass(TextareaWithCountComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.onChanges();
          }
        }, {
          key: "writeValue",
          value: function writeValue(obj) {
            this.areaCountFormGroup.patchValue({
              area_count: obj
            });
          }
        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChange = fn;
          }
        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouch = fn;
          }
        }, {
          key: "onChanges",
          value: function onChanges() {
            var _this11 = this;

            this.areaCountFormGroup.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])()).subscribe(function (elem) {
              if (!_this11.fistTime) {
                _this11.onChange(elem.area_count);

                var count = 0;

                if (elem.area_count) {
                  count = elem.area_count.split(',').filter(function (e) {
                    return e != "";
                  }).length;
                }

                _this11.count = count;
              }

              _this11.fistTime = false;
            });
          }
        }]);

        return TextareaWithCountComponent;
      }();

      TextareaWithCountComponent.ɵfac = function TextareaWithCountComponent_Factory(t) {
        return new (t || TextareaWithCountComponent)();
      };

      TextareaWithCountComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TextareaWithCountComponent,
        selectors: [["app-textarea-with-count"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
            return TextareaWithCountComponent;
          }),
          multi: true
        }])],
        decls: 8,
        vars: 2,
        consts: [[3, "formGroup"], [1, "row"], ["rows", "4", "cols", "50", "formControlName", "area_count", 1, "form-control", 3, "blur"], [1, "row", "pt-1"]],
        template: function TextareaWithCountComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "textarea", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function TextareaWithCountComponent_Template_textarea_blur_2_listener() {
              return ctx.onTouch();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " items");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.areaCountFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.count);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXh0YXJlYS13aXRoLWNvdW50LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "IZqj":
    /*!**************************************************************************!*\
      !*** ./src/app/shared/toast-notifications/toast-notifications.module.ts ***!
      \**************************************************************************/

    /*! exports provided: ToastNotificationsModule */

    /***/
    function IZqj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastNotificationsModule", function () {
        return ToastNotificationsModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _toast_notifications_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./toast-notifications.component */
      "vI4X");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ToastNotificationsModule = function ToastNotificationsModule() {
        _classCallCheck(this, ToastNotificationsModule);
      };

      ToastNotificationsModule.ɵfac = function ToastNotificationsModule_Factory(t) {
        return new (t || ToastNotificationsModule)();
      };

      ToastNotificationsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: ToastNotificationsModule
      });
      ToastNotificationsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ToastNotificationsModule, {
          declarations: [_toast_notifications_component__WEBPACK_IMPORTED_MODULE_1__["ToastNotificationsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"]],
          exports: [_toast_notifications_component__WEBPACK_IMPORTED_MODULE_1__["ToastNotificationsComponent"]]
        });
      })();
      /***/

    },

    /***/
    "KHOz":
    /*!********************************************************!*\
      !*** ./src/app/shared/filters/myform/myinput/model.ts ***!
      \********************************************************/

    /*! exports provided: InputType, MyInputModel */

    /***/
    function KHOz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InputType", function () {
        return InputType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyInputModel", function () {
        return MyInputModel;
      });

      var InputType;

      (function (InputType) {
        InputType[InputType["integer"] = 0] = "integer";
        InputType[InputType["datetime"] = 1] = "datetime";
        InputType[InputType["string"] = 2] = "string";
      })(InputType || (InputType = {}));

      var MyInputModel = /*#__PURE__*/function () {
        function MyInputModel(name, type, required, read_only, options) {
          _classCallCheck(this, MyInputModel);

          this.name = name;
          this.options = options || {};
          this.type = type || "";
          this.required = required || false;
          this.read_only = read_only || false;
        }

        _createClass(MyInputModel, null, [{
          key: "fromJson",
          value: function fromJson(name, obj) {
            return new MyInputModel(name, obj.type, obj.requied, obj.read_only, obj.choices || {});
          }
        }]);

        return MyInputModel;
      }();
      /***/

    },

    /***/
    "L4dG":
    /*!*****************************************************!*\
      !*** ./src/app/services/forms/form-item.service.ts ***!
      \*****************************************************/

    /*! exports provided: FormItemService */

    /***/
    function L4dG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormItemService", function () {
        return FormItemService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/internal/operators/tap */
      "pWCv");
      /* harmony import */


      var rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _http_http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../http/http-service.service */
      "l91v");
      /* harmony import */


      var src_app_shared_toast_notifications_toast_notifications_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/toast-notifications/toast-notifications.service */
      "hkff");

      var FormItemService = /*#__PURE__*/function () {
        // selectedTab: BehaviorSubject<string> | undefined;
        function FormItemService(_http, _toastService) {
          _classCallCheck(this, FormItemService);

          this._http = _http;
          this._toastService = _toastService;
          this.selectedTab = '';
          this.selectedTabChange = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"](); // this.selectedTab = new BehaviorSubject(this.tab);
          // this.selectedTabChange.subscribe((value) => {
          //   this.selectedTab = value;
          // })
        }

        _createClass(FormItemService, [{
          key: "postForm",
          value: function postForm(isNew, data) {
            var _this12 = this;

            var request;

            if (isNew) {
              request = this._http.post(data.url, data.formData).pipe(Object(rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (data) {
                _this12._toastService.showToast("Successfully added Record", "success");
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err, caught) {
                _this12._toastService.showToast("Error Posting Record", "danger");

                return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]["throw"](err);
              }));
            } else {
              request = this._http.patch(data.url, data.formData).pipe(Object(rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (data) {
                _this12._toastService.showToast("Successfully edited Record", "success");
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err, caught) {
                _this12._toastService.showToast("Error editing Record", "danger");

                return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]["throw"](err);
              }));
            }

            return request;
          }
        }, {
          key: "formDropdownSelectedTab",
          value: function formDropdownSelectedTab(data) {
            console.log('THE SELECTED TAB IN SERVICE', data);
            this.selectedTabChange.next(data);
          }
        }, {
          key: "getDropdownValues",
          value: function getDropdownValues(url) {
            return this._http.get(url);
          }
        }]);

        return FormItemService;
      }();

      FormItemService.ɵfac = function FormItemService_Factory(t) {
        return new (t || FormItemService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_http_http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_shared_toast_notifications_toast_notifications_service__WEBPACK_IMPORTED_MODULE_5__["ToastNotificationsService"]));
      };

      FormItemService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: FormItemService,
        factory: FormItemService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "LDu/":
    /*!***********************************************************!*\
      !*** ./src/app/shared/filters/myform/myform.component.ts ***!
      \***********************************************************/

    /*! exports provided: MyformComponent */

    /***/
    function LDu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyformComponent", function () {
        return MyformComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _myinput_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./myinput/model */
      "KHOz");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services */
      "o0su");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _myinput_myinput_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./myinput/myinput.component */
      "hVgn");

      function MyformComponent_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var error_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r2, " ");
        }
      }

      function MyformComponent_div_4_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-myinput", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var field_r6 = ctx.$implicit;

          var item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("col-sm-", 12 / item_r3.length, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControName", field_r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formErrors", ctx_r5.formErrors)("data", ctx_r5.getDescriptionObject(field_r6))("form", ctx_r5.formGroup);
        }
      }

      function MyformComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MyformComponent_div_4_div_2_Template, 2, 7, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r3);
        }
      }

      var MyformComponent = /*#__PURE__*/function () {
        function MyformComponent(fb, http) {
          _classCallCheck(this, MyformComponent);

          this.fb = fb;
          this.http = http;
          this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({});
          this.extraParams = {};
          this.onValidatedData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.onPostedData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.isLoading$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.isValidationOnly = false;
          this.url = "";
          this.loading = false;
          this.initial = false;
          this.formErrors = {};
          this.detailErrors = [];
          this.isLoading = false;
        }

        _createClass(MyformComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {
            if (this.formGroupOrder && !this.initial) {
              this.initial = false;
              var fields = this.formItems.actions.POST;
              var possibleFields = this.formGroupOrder.reduce(function (acc, val) {
                return acc.concat(val);
              }, []);

              for (var key in fields) {
                var field = fields[key];

                var myinputfield = _myinput_model__WEBPACK_IMPORTED_MODULE_1__["MyInputModel"].fromJson(key, field);

                if (field.read_only || !possibleFields.includes(key)) {
                  continue;
                }

                var defaultField = field.type == "boolean" ? false : "";
                this.formGroup.addControl(key, new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](defaultField, []));
                var fieldcontrol = this.formGroup.controls[key];
                var validators = [];

                if (field.required) {
                  validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
                }

                if (field.max_length) {
                  validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(field.max_length));
                }

                if (validators.length > 0) {
                  fieldcontrol.setValidators(validators);
                }
              }
            }
          }
        }, {
          key: "getDescriptionObject",
          value: function getDescriptionObject(formControlName) {
            return this.formItems.actions.POST[formControlName];
          }
        }, {
          key: "getFieldNameErros",
          value: function getFieldNameErros(formControlName) {
            return this.formErrors[formControlName];
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "showLoader",
          value: function showLoader(status) {
            this.isLoading = status;
            this.isLoading$.emit(status);
          }
        }, {
          key: "dataReceived",
          value: function dataReceived() {
            this.detailErrors = [];

            if (true) {
              var data = Object.assign(Object.assign({}, this.formGroup.value), this.extraParams);

              if (this.isValidationOnly) {
                this.onValidatedData.emit(data);
              } else {
                this.sendDataHttp(data);
              }
            } else {}
          }
        }, {
          key: "myFormValid",
          get: function get() {
            return this.formGroup.valid;
          }
        }, {
          key: "sendDataHttp",
          value: function sendDataHttp(data) {
            this.showLoader(true);
            this.formErrors = [];
          }
        }, {
          key: "getControl",
          value: function getControl(name) {
            return this.formGroup.get(name) || new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
          }
        }, {
          key: "resetForm",
          value: function resetForm() {
            this.formGroup.reset();
          }
        }, {
          key: "bulkOptions",
          value: function bulkOptions() {}
        }]);

        return MyformComponent;
      }();

      MyformComponent.ɵfac = function MyformComponent_Factory(t) {
        return new (t || MyformComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_3__["HttpService"]));
      };

      MyformComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MyformComponent,
        selectors: [["app-myform"]],
        inputs: {
          formGroup: "formGroup",
          formItems: "formItems",
          extraParams: "extraParams",
          isValidationOnly: "isValidationOnly",
          url: "url",
          formGroupOrder: "formGroupOrder",
          loading: "loading"
        },
        outputs: {
          onValidatedData: "onValidatedData",
          onPostedData: "onPostedData",
          isLoading$: "isLoading$"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 12,
        vars: 4,
        consts: [[1, "container"], [1, "", 3, "formGroup", "ngSubmit"], ["class", "text-danger", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "spark-dynamic-forms__button-wrapper"], ["type", "button", 1, "btn", "btn-light", "btn-sm", "mb-3", "lift", "spark-dynamic-forms__clear", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "mb-3", "lift", "spark-dynamic-forms__submit"], [1, "text-danger"], [1, "row"], [3, "class", 4, "ngFor", "ngForOf"], [3, "formErrors", "data", "form", "formControName"]],
        template: function MyformComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function MyformComponent_Template_form_ngSubmit_1_listener() {
              return ctx.dataReceived();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MyformComponent_span_2_Template, 3, 1, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MyformComponent_div_4_Template, 3, 1, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyformComponent_Template_button_click_7_listener() {
              return ctx.resetForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Clear");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.detailErrors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.formGroupOrder);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.isLoading ? "Loading..." : "Add Options", " ");
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _myinput_myinput_component__WEBPACK_IMPORTED_MODULE_5__["MyinputComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "Mm8Z":
    /*!*************************************************!*\
      !*** ./src/app/shared/tables/tables.service.ts ***!
      \*************************************************/

    /*! exports provided: TablesService */

    /***/
    function Mm8Z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TablesService", function () {
        return TablesService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services */
      "o0su");
      /* harmony import */


      var _filters_filters_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../filters/filters.service */
      "WpeU");
      /* harmony import */


      var _toast_notifications_toast_notifications_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../toast-notifications/toast-notifications.service */
      "hkff");

      var TablesService = /*#__PURE__*/function () {
        function TablesService(_httpService, _filtersService, _toastService) {
          _classCallCheck(this, TablesService);

          this._httpService = _httpService;
          this._filtersService = _filtersService;
          this._toastService = _toastService;
          this.actionsEvent$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.deletedItem$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(TablesService, [{
          key: "getList",
          value: function getList(typeUrl, page_size, page, filters, searchInput) {
            //const filterOpt = typeof filters !== 'undefined' && filters.length ? this.getFilters(filters) : '';
            var searchName = typeof searchInput !== undefined && searchInput !== null ? searchInput : null;
            return this._httpService.get("".concat(typeUrl, "/?page_size=").concat(page_size, "&page=").concat(page, "&").concat(filters, "&name=").concat(searchName));
          }
        }, {
          key: "emitAction",
          value: function emitAction(name, data) {
            console.log('THE NAME', name, 'THE DATA', data);
            this.actionsEvent$.emit({
              name: name,
              data: data
            });
          } //TO REMOVE
          // getFilters(filters:any) {
          //   let filterOpt: Array<any> = [];
          //   filters.map((filter:any) => {
          //     filterOpt.push(filter.item_prop);
          //   });
          //   return filterOpt.join("&");
          // }

        }, {
          key: "delete",
          value: function _delete(data, typeUrl) {
            var _this13 = this;

            //TODO -> Send an alert if delete not possible
            return this._httpService["delete"]("".concat(typeUrl, "/").concat(data.id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this13, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        this.deletedItem$.emit(data);

                        this._toastService.showToast("Successfully deleted record", 'info');

                      case 2:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err, caught) {
              _this13._toastService.showToast("Error deleting record", 'danger');

              return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]["throw"](err);
            }));
          }
        }]);

        return TablesService;
      }();

      TablesService.ɵfac = function TablesService_Factory(t) {
        return new (t || TablesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_services__WEBPACK_IMPORTED_MODULE_4__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_filters_filters_service__WEBPACK_IMPORTED_MODULE_5__["FiltersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_toast_notifications_toast_notifications_service__WEBPACK_IMPORTED_MODULE_6__["ToastNotificationsService"]));
      };

      TablesService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: TablesService,
        factory: TablesService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "PCNd":
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /*! exports provided: SharedModule */

    /***/
    function PCNd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _modals_modals_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./modals/modals.module */
      "qG2b");
      /* harmony import */


      var _myform_myform_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./myform/myform.module */
      "AGKy");
      /* harmony import */


      var _toast_notifications_toast_notifications_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./toast-notifications/toast-notifications.module */
      "IZqj");
      /* harmony import */


      var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./breadcrumb/breadcrumb.component */
      "APW9");
      /* harmony import */


      var _tables_tables_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./tables/tables.module */
      "d0zN");
      /* harmony import */


      var _add_button_add_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./add-button/add-button.component */
      "jUvn");
      /* harmony import */


      var _filters_filters_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./filters/filters.module */
      "lN6X");
      /* harmony import */


      var _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./side-menu/side-menu.component */
      "A1vf");
      /* harmony import */


      var _textarea_with_count_textarea_with_count_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./textarea-with-count/textarea-with-count.component */
      "GPJV");
      /* harmony import */


      var _ng_multi_select_multi_select_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./ng-multi-select/multi-select.module */
      "riLG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /** Custom modules */

      /** Components */
      // import { CardComponent } from './card/card.component'
      // import { CardDropdownComponent } from './card/card-dropdown/card-dropdown.component';


      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      SharedModule.ɵfac = function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      };

      SharedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({
        type: SharedModule
      });
      SharedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _modals_modals_module__WEBPACK_IMPORTED_MODULE_3__["ModalsModule"], _myform_myform_module__WEBPACK_IMPORTED_MODULE_4__["MyformModule"], _tables_tables_module__WEBPACK_IMPORTED_MODULE_7__["TablesModule"], _filters_filters_module__WEBPACK_IMPORTED_MODULE_9__["FiltersModule"], _toast_notifications_toast_notifications_module__WEBPACK_IMPORTED_MODULE_5__["ToastNotificationsModule"], _ng_multi_select_multi_select_module__WEBPACK_IMPORTED_MODULE_12__["MultiSelectModule"]], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _myform_myform_module__WEBPACK_IMPORTED_MODULE_4__["MyformModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _modals_modals_module__WEBPACK_IMPORTED_MODULE_3__["ModalsModule"], _tables_tables_module__WEBPACK_IMPORTED_MODULE_7__["TablesModule"], _filters_filters_module__WEBPACK_IMPORTED_MODULE_9__["FiltersModule"], _toast_notifications_toast_notifications_module__WEBPACK_IMPORTED_MODULE_5__["ToastNotificationsModule"], _ng_multi_select_multi_select_module__WEBPACK_IMPORTED_MODULE_12__["MultiSelectModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](SharedModule, {
          declarations: [_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbComponent"], _add_button_add_button_component__WEBPACK_IMPORTED_MODULE_8__["AddButtonComponent"], _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_10__["SideMenuComponent"], _textarea_with_count_textarea_with_count_component__WEBPACK_IMPORTED_MODULE_11__["TextareaWithCountComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _modals_modals_module__WEBPACK_IMPORTED_MODULE_3__["ModalsModule"], _myform_myform_module__WEBPACK_IMPORTED_MODULE_4__["MyformModule"], _tables_tables_module__WEBPACK_IMPORTED_MODULE_7__["TablesModule"], _filters_filters_module__WEBPACK_IMPORTED_MODULE_9__["FiltersModule"], _toast_notifications_toast_notifications_module__WEBPACK_IMPORTED_MODULE_5__["ToastNotificationsModule"], _ng_multi_select_multi_select_module__WEBPACK_IMPORTED_MODULE_12__["MultiSelectModule"]],
          exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _myform_myform_module__WEBPACK_IMPORTED_MODULE_4__["MyformModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _modals_modals_module__WEBPACK_IMPORTED_MODULE_3__["ModalsModule"], _tables_tables_module__WEBPACK_IMPORTED_MODULE_7__["TablesModule"], _filters_filters_module__WEBPACK_IMPORTED_MODULE_9__["FiltersModule"], _toast_notifications_toast_notifications_module__WEBPACK_IMPORTED_MODULE_5__["ToastNotificationsModule"], _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbComponent"], _add_button_add_button_component__WEBPACK_IMPORTED_MODULE_8__["AddButtonComponent"], _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_10__["SideMenuComponent"], _textarea_with_count_textarea_with_count_component__WEBPACK_IMPORTED_MODULE_11__["TextareaWithCountComponent"], _ng_multi_select_multi_select_module__WEBPACK_IMPORTED_MODULE_12__["MultiSelectModule"]]
        });
      })();
      /***/

    },

    /***/
    "QE/Q":
    /*!***************************************************!*\
      !*** ./src/app/shared/tables/tables.component.ts ***!
      \***************************************************/

    /*! exports provided: TablesComponent */

    /***/
    function QEQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TablesComponent", function () {
        return TablesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _tables_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tables.service */
      "Mm8Z");
      /* harmony import */


      var _filters_filters_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../filters/filters.service */
      "WpeU");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _mytd_mytd_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./mytd/mytd.component */
      "1Asn");
      /* harmony import */


      var _mypagination_mypagination_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./mypagination/mypagination.component */
      "r+Yu");

      function TablesComponent_th_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function TablesComponent_th_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-mytd", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var title_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columnConfig", title_r6)("isHeaderCell", true);
        }
      }

      function TablesComponent_tbody_14_tr_1_th_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var j_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](j_r10 + 1 + ctx_r11.page_size * (ctx_r11.page - 1));
        }
      }

      function TablesComponent_tbody_14_tr_1_td_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-mytd", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var header_r14 = ctx.$implicit;

          var row_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columnConfig", header_r14)("rowData", row_r9);
        }
      }

      function TablesComponent_tbody_14_tr_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TablesComponent_tbody_14_tr_1_th_1_Template, 2, 1, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TablesComponent_tbody_14_tr_1_td_2_Template, 2, 2, "td", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.showNumbering);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r8.tableHeaders);
        }
      }

      function TablesComponent_tbody_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TablesComponent_tbody_14_tr_1_Template, 3, 2, "tr", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.results);
        }
      }

      function TablesComponent_tbody_15_tr_1_th_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function TablesComponent_tbody_15_tr_1_td_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function TablesComponent_tbody_15_tr_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TablesComponent_tbody_15_tr_1_th_1_Template, 2, 0, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TablesComponent_tbody_15_tr_1_td_2_Template, 2, 0, "td", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r17.showNumbering);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r17.tableHeaders);
        }
      }

      function TablesComponent_tbody_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TablesComponent_tbody_15_tr_1_Template, 3, 2, "tr", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.tableData);
        }
      }

      function TablesComponent_tbody_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No data available");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function TablesComponent_app_mypagination_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-mypagination", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onPageSelect", function TablesComponent_app_mypagination_17_Template_app_mypagination_onPageSelect_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r22.onPageSelect($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectedPage", ctx_r5.page)("pageSize", ctx_r5.page_size)("resultsMeta", ctx_r5.resultsMeta);
        }
      }

      var TablesComponent = /*#__PURE__*/function () {
        function TablesComponent(_tableService, _filterService, fb) {
          _classCallCheck(this, TablesComponent);

          this._tableService = _tableService;
          this._filterService = _filterService;
          this.fb = fb;
          this._headers = [];
          this.selectedFilterOptions = [];
          this.hasSideMenu = false;
          this.tableFilters = [];
          this.page_size = 10;
          this.showNumbering = true;
          this.actionsEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.page = 1;
          this.tableData = [];
          this.loading = false;
          this.results = [];
          this.liveSearchData = '';
        }

        _createClass(TablesComponent, [{
          key: "headers",
          get: function get() {
            return this._headers;
          },
          set: function set(value) {
            this._headers = value;
            this.tableData = Array.from({
              length: this.page_size
            }, function (_, x) {
              return x;
            }).map(function (h) {
              return {
                data: ""
              };
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this14 = this;

            this.searchForm = this.fb.group({
              search: ''
            });
            this.getTableData();
            this.actionsSubscription = this._tableService.actionsEvent$.subscribe(function (event) {
              _this14.actionsEvent.emit(event);
            });
            this.deleteSubscription = this._tableService.deletedItem$.subscribe(function (item) {
              console.log('THE DELETED ITEM', item);

              if (_this14.resultsMeta.count > _this14.page_size && _this14.resultsMeta.count !== _this14.page_size) {
                _this14.getTableData();
              } else {
                var ind = _this14.results.indexOf(item);

                _this14.results.splice(ind, 1);

                _this14.resultsMeta.count = _this14.results.length;
              }
            });
            this.selectedFiltersSubscriber = this._filterService.getFilters$.subscribe(function (data) {
              console.log('IN TABLE SERVICE', data);
              _this14.selectedFilterOptions = data;

              _this14.getTableData();
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var subscriptions = [this.actionsSubscription, this.deleteSubscription, this.selectedFiltersSubscriber];
            subscriptions.forEach(function (subs) {
              if (subs) {
                subs.unsubscribe();
              }
            });
          }
        }, {
          key: "liveTableSearch",
          value: function liveTableSearch(value) {
            var _this15 = this;

            var _a;

            (_a = this.searchForm.get('search')) === null || _a === void 0 ? void 0 : _a.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (data) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this15, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        this.getTableData(data.toLowerCase().trim());

                      case 1:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(function () {});
          }
        }, {
          key: "clearLiveTableSearch",
          value: function clearLiveTableSearch() {
            this.liveSearchData = '';
            return this.searchForm.reset();
          }
        }, {
          key: "setLoaderStatus",
          value: function setLoaderStatus(status) {
            this.loading = status;
          }
        }, {
          key: "onPageSelect",
          value: function onPageSelect(page) {
            this.page = page;
            this.getTableData();
          }
        }, {
          key: "tableHeaders",
          get: function get() {
            return this.headers;
          }
        }, {
          key: "tableMetaData",
          value: function tableMetaData(meta) {
            if (meta.hasOwnProperty("next")) {
              this.resultsMeta = {
                next: meta.next,
                prev: meta.previous,
                count: meta.count
              };
            }
          }
        }, {
          key: "getTableData",
          value: function getTableData() {
            var _this16 = this;

            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            this.setLoaderStatus(true);

            this._tableService.getList(this.listTypeUrl, this.page_size, this.page, this.selectedFilterOptions, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(function (res) {
              console.log(data);
              console.log(res);

              _this16.setLoaderStatus(false);

              _this16.results = res.results;

              _this16.tableMetaData(res);
            }, function (error) {
              _this16.setLoaderStatus(false);
            });
          }
        }]);

        return TablesComponent;
      }();

      TablesComponent.ɵfac = function TablesComponent_Factory(t) {
        return new (t || TablesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_tables_service__WEBPACK_IMPORTED_MODULE_3__["TablesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_filters_filters_service__WEBPACK_IMPORTED_MODULE_4__["FiltersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]));
      };

      TablesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: TablesComponent,
        selectors: [["app-tables"]],
        inputs: {
          filterFormItems: "filterFormItems",
          hasSideMenu: "hasSideMenu",
          listTypeUrl: "listTypeUrl",
          tableFilters: "tableFilters",
          page_size: "page_size",
          showNumbering: "showNumbering",
          headers: "headers"
        },
        outputs: {
          actionsEvent: "actionsEvent"
        },
        decls: 18,
        vars: 8,
        consts: [[1, "container"], [1, "row"], [1, "search-section", "spark-dynamic-forms__bulk-wrapper", "mb-3"], [1, "form-inline", 3, "formGroup"], ["name", "searchTableInput", "aria-label", "Table list", "formControlName", "search", "type", "text", 1, "form-control", "mr-2", "search-input", 3, "placeholder", "ngModelChange"], ["type", "button", 1, "btn", "btn-light", "btn-sm", "mr-3", 3, "click"], [1, "glyphicon", "glyphicon-remove"], [1, "table-responsive"], [1, "table"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "selectedPage", "pageSize", "resultsMeta", "onPageSelect", 4, "ngIf"], [3, "columnConfig", "isHeaderCell"], [3, "columnConfig", "rowData"], [1, "linear-background"], [1, "pt-4"], [3, "selectedPage", "pageSize", "resultsMeta", "onPageSelect"]],
        template: function TablesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TablesComponent_Template_input_ngModelChange_4_listener($event) {
              return ctx.liveTableSearch($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TablesComponent_Template_button_click_5_listener() {
              return ctx.clearLiveTableSearch();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Clear");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "table", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, TablesComponent_th_12_Template, 2, 0, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, TablesComponent_th_13_Template, 2, 2, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, TablesComponent_tbody_14_Template, 2, 1, "tbody", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, TablesComponent_tbody_15_Template, 2, 1, "tbody", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, TablesComponent_tbody_16_Template, 3, 0, "tbody", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, TablesComponent_app_mypagination_17_Template, 1, 3, "app-mypagination", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.searchForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", !ctx.loading ? "Search item" : "Searching...");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showNumbering);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tableHeaders);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.results.length && !ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.results.length < 1 && !ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _mytd_mytd_component__WEBPACK_IMPORTED_MODULE_7__["MytdComponent"], _mypagination_mypagination_component__WEBPACK_IMPORTED_MODULE_8__["MypaginationComponent"]],
        styles: ["@font-face {\n  font-family: \"Avenir-Heavy\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(\"https://fonts.animaapp.com/Avenir-Heavy\") format(\"truetype\");\n}\n@font-face {\n  font-family: \"Museo-Sans\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(\"https://fonts.animaapp.com/MuseoSans-700\") format(\"opentype\");\n}\n.linear-background[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  display: block;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-name: placeHolderShimmer;\n          animation-name: placeHolderShimmer;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  background: #f6f7f8;\n  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);\n  background-size: 1000px 10px;\n  height: 30px;\n  border-radius: 3px;\n}\n@-webkit-keyframes placeHolderShimmer {\n  0% {\n    background-position: -46px 0;\n  }\n  100% {\n    background-position: 46px 0;\n  }\n}\n@keyframes placeHolderShimmer {\n  0% {\n    background-position: -46px 0;\n  }\n  100% {\n    background-position: 46px 0;\n  }\n}\nthead[_ngcontent-%COMP%] {\n  line-height: 40px;\n  min-height: 40px;\n  height: 40px;\n  background-color: #b2b1b1;\n  color: #535252;\n}\ntr[_ngcontent-%COMP%] {\n  line-height: 30px;\n  height: 30px;\n  background-color: rgba(245, 245, 245, 0.4);\n  font-family: \"Avenir-Heavy\", Helvetica, Arial, serif;\n  font-size: 13px;\n}\nth[_ngcontent-%COMP%] {\n  font-family: \"Avenir-Heavy\", Helvetica, Arial, serif;\n  font-size: 13px;\n  font-weight: 400;\n  letter-spacing: 0px;\n  white-space: nowrap;\n}\ntd[_ngcontent-%COMP%] {\n  font-family: \"MuseoSans-500\", Helvetica, Arial, serif;\n  font-size: 13px;\n  color: #707070;\n}\n.search-section[_ngcontent-%COMP%] {\n  background-color: rgba(112, 112, 112, 0.2);\n  height: 3.5rem;\n  width: 100%;\n}\n.search-box[_ngcontent-%COMP%] {\n  font-family: \"MuseoSans-500\", Helvetica, Arial, serif;\n  font-size: 13px;\n  font-weight: 400;\n  height: 35px;\n  border: none;\n  border-radius: 5px;\n  width: 30%;\n}\n.spark-dynamic-forms__button-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n.spark-dynamic-forms__bulk-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.spark-dynamic-forms__bulk-btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: auto;\n  font-weight: bold;\n  line-height: 3.5rem;\n  text-transform: capitalize;\n  vertical-align: middle;\n  text-align: center;\n  padding: 0 1.5rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  letter-spacing: 0;\n  border: 0.2rem solid transparent;\n  border-radius: 0.5rem;\n  background-color: #036fb6;\n  color: #ffffff;\n  opacity: 1;\n  transition-property: border-color, background-color, color, opacity;\n  transition-duration: 0.25s;\n  transition-timing-function: ease-in-out;\n  font-family: sans-serif;\n  font-weight: normal;\n  font-size: 1.6rem;\n  line-height: 2.9rem;\n  cursor: pointer;\n  background-color: #036fb6;\n  border-radius: 0.3rem;\n  color: #f5f5f5;\n  line-height: 44px;\n  text-align: center;\n  font-size: 13px;\n  font-family: \"Avenir-Heavy\", Helvetica, Arial, serif;\n}\n.spark-dynamic-forms__bulk-btn[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .spark-dynamic-forms__bulk-btn[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.no-touchevents[_ngcontent-%COMP%]   .spark-dynamic-forms__bulk-btn[_ngcontent-%COMP%]:not([disabled]):not(.disabled):not(.is--disabled):hover {\n  background-color: #676767;\n}\n.spark-dynamic-forms__bulk-btn[disabled][_ngcontent-%COMP%], .spark-dynamic-forms__bulk-btn.disabled[_ngcontent-%COMP%], .spark-dynamic-forms__bulk-btn.is--disabled[_ngcontent-%COMP%] {\n  opacity: 0.35;\n  cursor: default;\n}\n.spark-dynamic-forms__bulk-btn.lift[_ngcontent-%COMP%] {\n  transition: box-shadow 0.25s ease, transform 0.25s ease;\n}\n.spark-dynamic-forms__bulk-btn.lift[_ngcontent-%COMP%]:focus, .spark-dynamic-forms__bulk-btn.lift[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 1rem 2.5rem rgba(18, 38, 63, 0.1), 0 0.5rem 1rem -0.75rem rgba(18, 38, 63, 0.1) !important;\n  transform: translate3d(0, -3px, 0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fdmFycy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzL19zZXR0aW5ncy5zY3NzIiwiLi4vLi4vLi4vLi4vdGFibGVzLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzL21peGlucy9fYnV0dG9uLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMvbWl4aW5zL190eXBvZ3JhcGh5LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEJBQUE7QUFDQSw4QkFBQTtBQUNBLDhCQUFBO0FBMEJBLDJCQUFBO0FBRUEseUJBQUE7QUNHQTtFQUNFLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNFQUFBO0FDM0JGO0FEOEJBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUVBQUE7QUM1QkY7QUFWSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtFQUNBLHFDQUFBO1VBQUEsNkJBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0VBQ0EsMENBQUE7VUFBQSxrQ0FBQTtFQUNBLHlDQUFBO1VBQUEsaUNBQUE7RUFDQSxtQkFBQTtFQUNBLDJFQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFZUjtBQVRBO0VBQ0k7SUFDSSw0QkFBQTtFQVlOO0VBVkU7SUFDSSwyQkFBQTtFQVlOO0FBQ0Y7QUFsQkE7RUFDSTtJQUNJLDRCQUFBO0VBWU47RUFWRTtJQUNJLDJCQUFBO0VBWU47QUFDRjtBQVJBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFVSjtBQVBBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7RUFDQSxvREFBQTtFQUNBLGVBQUE7QUFVSjtBQVBDO0VBQ0csb0RBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBVUo7QUFQQztFQUNHLHFEQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFVSjtBQVBDO0VBQ0ksMENBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQVVMO0FBUEM7RUFDRyxxREFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBVUo7QUFMSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBUVI7QUFIUTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtBQUtaO0FBRlE7RUM1RkoscUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJIS2tCO0VHSmxCLGNIRlU7RUdHVixVQUFBO0VBQ0EsbUVBQUE7RUFDQSwwQkFBQTtFQUNBLHVDQUFBO0VDbkJBLHVCQUFBO0VBMElJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFRHRISixlQUFBO0VBc0JFLHlCSHpCZ0I7RUc4QmhCLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VEeUNNLG9EQUFBO0FBa0NaO0FFZVk7RUFDSSxpQkFBQTtBRmJoQjtBQzVHSTtFQUNGLHlCQUFBO0FEOEdGO0FDM0dJO0VBR0YsYUFBQTtFQUNNLGVBQUE7QUQyR1I7QUN4R0k7RUFDRSx1REFBQTtBRDBHTjtBQ3pHTTtFQUVFLHdHQUFBO0VBQ0Esa0NBQUE7QUQwR1IiLCJmaWxlIjoidGFibGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKiogY29sb3JzICoqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4kY29sb3JfYmFja2dyb3VuZDogI2ZmZmZmZjtcbiRjb2xvci1iYWNrZ3JvdW5kLWNhcmQ6ICNmZmZmZmY7XG4kY29sb3JfYmFja2dyb3VuZC1pbnB1dHM6ICNmZmZmZmY7XG4kY29sb3JfdG9wYmFyOiAjZmZmZmZmO1xuJGNvbG9yX2J1dHRvbnM6ICM0ZDRkNGQ7XG4kY29sb3JfcHJpbWFyeTogIzAzNkZCNjtcbiRjb2xvcl9zZWNvbmRhcnk6ICNlNTdjMmM7XG4kY29sb3JfdGVydGlhcnk6ICMxMjI2M2Y7XG4kY29sb3Jfd2FybmluZzogI2U2Mzc1NztcbiRjb2xvcl9zdWNjZXNzOiAjMDA3NzAwO1xuJGNvbG9yX3doaXRlOiAjZmZmZmZmO1xuJGNvbG9yX2JsYWNrOiAjMDAwO1xuJGNvbG9yX2xpZ2h0Z3JleTogcmdiYSgkY29sb3Jfd2hpdGUsIDAuNSk7XG4kY29sb3JfbGlnaHRlcmdyZXk6IHJnYmEoJGNvbG9yX3doaXRlLCAwLjI1KTtcbiRjb2xvcl9mb3Jtc19ib3JkZXI6ICM3MDcwNzA7XG4kY29sb3JfZm9ybV9wbGFjZWhvbGRlcjogI2IxYzJkOTtcbiRjb2xvcl9saW5rc19idXR0b25zOiAjMDM2ZmI2O1xuJGNvbG9yX3N1YnN1YnRpdGxlOiAjN2U3ZTdlO1xuJGNvbG9yX3RpdGxlOiAjNTM1MjUyO1xuJGNvbG9yX3N1YnRpdGxlOiAjQjJCMUIxO1xuJGNvbG9yX25hdmJhcl9iYWNrZ3JvdW5kOiAkY29sb3JfYmFja2dyb3VuZDtcbiRjb2xvcl9uYXZiYXJfYm9yZGVyOiAjYTlhOGE4O1xuXG4kY29sb3JfdGl0bGVfZGVmYXVsdDogIzUzNTI1Mjtcbi8qIEFkZCByZXVzYWJsZSBhbmltYXRpb25zKi9cblxuLyogQWNjb21vZGF0ZSBpcGhvbmUgMTErKi9cbiRpcGhvbmUtc2FmZXNwYWNlOiByZW0tY2FsYyg0NCk7XG4kY29tbW9uR3V0dGVyOiAzcmVtO1xuIiwiLy8gIEZvdW5kYXRpb24gZm9yIFNpdGVzIFNldHRpbmdzXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgVGFibGUgb2YgQ29udGVudHM6XG4vL1xuLy8gICAxLiBHbG9iYWxcbi8vICAgMi4gQnJlYWtwb2ludHNcbi8vICAgMy4gQ2FyZFxuLy8gICA0LiBQcm9ncmVzcyBiYXJcbi8vICAgNS4gRm9vdGVyXG4vLyAgIDYuIEhlYWRlclxuXG4vLyAxLiBHbG9iYWxcbi8vIC0tLS0tLS0tLVxuXG4kZ2xvYmFsLWZvbnQtc2l6ZTogNjIuNSU7XG5cbiRnbG9iYWwtcGFnZS13aWR0aDogcmVtLWNhbGMoMTgxOCk7XG4kZ2xvYmFsLWNvbnRlbnQtd2lkdGg6IHJlbS1jYWxjKDE0MDApO1xuJGdsb2JhbC1saW5laGVpZ2h0OiAxLjU7XG4kYm9keS1iYWNrZ3JvdW5kOiAkY29sb3Jfd2hpdGU7XG4kYm9keS1mb250LWNvbG9yOiAkY29sb3JfYmxhY2s7XG4kYm9keS1mb250LWZhbWlseTogJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBSb2JvdG8sIEFyaWFsLCBzYW5zLXNlcmlmO1xuJGJvZHktYW50aWFsaWFzZWQ6IHRydWU7XG4kZ2xvYmFsLW1hcmdpbjogMXJlbTtcbiRnbG9iYWwtcGFkZGluZzogMXJlbTtcbiRnbG9iYWwtcG9zaXRpb246IDFyZW07XG4kZ2xvYmFsLXdlaWdodC1ub3JtYWw6IG5vcm1hbDtcbiRnbG9iYWwtd2VpZ2h0LWJvbGQ6IGJvbGQ7XG4kZ2xvYmFsLXJhZGl1czogMDtcbiRnbG9iYWwtdGV4dC1kaXJlY3Rpb246IGx0cjtcbiRwcmltYXJ5LWNvbG9yOiAkY29sb3JfcHJpbWFyeTtcblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkF2ZW5pci1IZWF2eVwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKFwiaHR0cHM6Ly9mb250cy5hbmltYWFwcC5jb20vQXZlbmlyLUhlYXZ5XCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiTXVzZW8tU2Fuc1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKFwiaHR0cHM6Ly9mb250cy5hbmltYWFwcC5jb20vTXVzZW9TYW5zLTcwMFwiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbn1cblxuXG4vLyAyLiBCcmVha3BvaW50c1xuLy8gLS0tLS0tLS0tLS0tLS1cblxuJGJyZWFrcG9pbnRzOiAoXG4gIHNtYWxsOiAwLFxuICBzdXBlcm1pbmk6IDQwMHB4LFxuICBtaW5pOiA0ODBweCxcbiAgbWVkaXVtOiA2NDBweCxcbiAgdGFibGV0OiA3NjBweCxcbiAgbWVkLWxhcmdlOiA5NjBweCxcbiAgbGFyZ2U6IDEwMjRweCxcbiAgeGxhcmdlOiAxMjgwcHgsXG4gIHh4bGFyZ2U6IDE1NDBweCxcbiAgeHh4bGFyZ2U6IDE5MjBweCxcbiAgeHh4eGxhcmdlOiAyNTYwcHgsXG4pO1xuJHByaW50LWJyZWFrcG9pbnQ6IGxhcmdlO1xuJGJyZWFrcG9pbnQtY2xhc3NlczogKHNtYWxsIG1lZGl1bSBsYXJnZSk7XG5cbi8vIDMuIENhcmRcbi8vIC0tLS0tLS0tXG5cbiRjYXJkLWJhY2tncm91bmQ6ICRjb2xvcl93aGl0ZTtcbiRjYXJkLWZvbnQtY29sb3I6ICRib2R5LWZvbnQtY29sb3I7XG4kY2FyZC1kaXZpZGVyLWJhY2tncm91bmQ6ICRjb2xvcl9saWdodGdyZXk7XG4kY2FyZC1ib3JkZXI6IDFweCBzb2xpZCAkY29sb3JfbGlnaHRncmV5O1xuJGNhcmQtc2hhZG93OiBub25lO1xuJGNhcmQtYm9yZGVyLXJhZGl1czogJGdsb2JhbC1yYWRpdXM7XG4kY2FyZC1wYWRkaW5nOiAkZ2xvYmFsLXBhZGRpbmc7XG4kY2FyZC1tYXJnaW4tYm90dG9tOiAkZ2xvYmFsLW1hcmdpbjtcblxuLy8gNC4gUHJvZ3Jlc3MgQmFyXG4vLyAtLS0tLS0tLS0tLS0tLS0tXG5cbiRwcm9ncmVzcy1oZWlnaHQ6IDFyZW07XG4kcHJvZ3Jlc3MtYmFja2dyb3VuZDogJGNvbG9yX2xpZ2h0ZXJncmV5O1xuJHByb2dyZXNzLW1hcmdpbi1ib3R0b206ICRnbG9iYWwtbWFyZ2luO1xuJHByb2dyZXNzLW1ldGVyLWJhY2tncm91bmQ6ICRwcmltYXJ5LWNvbG9yO1xuJHByb2dyZXNzLXJhZGl1czogJGdsb2JhbC1yYWRpdXM7XG5cbi8vIDUuIEZvb3RlclxuLy8gLS0tLS0tLS0tLS0tLS0tLS1cbiRmb290ZXItaGVpZ2h0OiA1cmVtO1xuXG4vLzYuIE5hdmJhclxuJG5hdmJhcl9oZWlnaHQ6IDguNHJlbTtcbiRuYXZiYXJfYm94X3NoYWRvdzogMCAuM3JlbSAuNnJlbSByZ2JhKCRjb2xvcl9ibGFjaywgLjI5KTtcblxuIiwiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy9taXhpbnMvYnV0dG9uXCI7XG5AaW1wb3J0IFwiLi4vLi4vc3R5bGVzL3ZhcnNcIjtcbkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMvbWl4aW5zL3R5cG9ncmFwaHlcIjtcbkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMvc2V0dGluZ3NcIjtcblxuLmxpbmVhciB7XG4gICAgJi1iYWNrZ3JvdW5kIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgICAgICBhbmltYXRpb24tbmFtZTogcGxhY2VIb2xkZXJTaGltbWVyO1xuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmNmY3Zjg7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2VlZWVlZSA4JSwgI2RkZGRkZCAxOCUsICNlZWVlZWUgMzMlKTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAwcHggMTBweDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgfVxufVxuQGtleWZyYW1lcyBwbGFjZUhvbGRlclNoaW1tZXIge1xuICAgIDAlIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ2cHggMDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDQ2cHggMDtcbiAgICB9XG59XG5cblxudGhlYWQge1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc4LCAxNzcsIDE3NywgMSk7IFxuICAgIGNvbG9yOiByZ2JhKDgzLCA4MiwgODIsIDEpO1xufVxuXG50ciB7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0NSwgMjQ1LCAwLjQpO1xuICAgIGZvbnQtZmFtaWx5OiBcIkF2ZW5pci1IZWF2eVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzZXJpZjtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gfVxuXG4gdGgge1xuICAgIGZvbnQtZmFtaWx5OiBcIkF2ZW5pci1IZWF2eVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzZXJpZjtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gfVxuXG4gdGQge1xuICAgIGZvbnQtZmFtaWx5OiBcIk11c2VvU2Fucy01MDBcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2VyaWY7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiByZ2JhKDExMiwgMTEyLCAxMTIsIDEpO1xuIH1cblxuIC5zZWFyY2gtc2VjdGlvbiB7XG4gICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTEyLCAxMTIsIDExMiwgMC4yKTtcbiAgICAgaGVpZ2h0OiAzLjVyZW07XG4gICAgIHdpZHRoOiAxMDAlO1xuIH1cblxuIC5zZWFyY2gtYm94IHtcbiAgICBmb250LWZhbWlseTogXCJNdXNlb1NhbnMtNTAwXCIsIEhlbHZldGljYSwgQXJpYWwsIHNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGhlaWdodDogMzVweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHdpZHRoOiAzMCU7XG4gfVxuXG4gLnNwYXJrLWR5bmFtaWMtZm9ybXMgeyBcblxuICAgICZfX2J1dHRvbi13cmFwcGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICB9XG5cbiAgICAvLyB0b2RvOiBtb3ZlIHRvIGNlbnRyYWwgcGxhY2UgZm9yIGVhc2Ugb2YgbWFpbnRlbmFuY2VcbiAgICAmX19idWxrIHtcbiAgICAgICAgJi13cmFwcGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1idG4ge1xuICAgICAgICAgICAgQGluY2x1ZGUgYnV0dG9uKCRjb2xvcjpwcmltYXJ5LCRzaXplOiBzbWFsbCk7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJBdmVuaXItSGVhdnlcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2VyaWY7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJAbWl4aW4gYnV0dG9uKCRzaXplOm51bGwsICRjb2xvcjpudWxsLCAkb3V0bGluZTpudWxsKSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxpbmUtaGVpZ2h0OiAzLjVyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMCAxLjVyZW07XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIGJvcmRlcjogLjJyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yX2xpbmtzX2J1dHRvbnM7XG4gICAgY29sb3I6ICRjb2xvcl93aGl0ZTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJvcmRlci1jb2xvciwgIGJhY2tncm91bmQtY29sb3IsIGNvbG9yLCBvcGFjaXR5O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMjVzO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgICBAaW5jbHVkZSB0eXBvZ3JhcGh5O1xuXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC5uby10b3VjaGV2ZW50cyAmOm5vdChbZGlzYWJsZWRdKTpub3QoLmRpc2FibGVkKTpub3QoLmlzLS1kaXNhYmxlZCk6aG92ZXIgLyosICY6Zm9jdXMgKi8ge1xuXHRcdGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oICRjb2xvcl9idXR0b25zLCAxMCUpO1xuICAgIH1cblxuICAgICZbZGlzYWJsZWRdLFxuICAgICYuZGlzYWJsZWQsXG4gICAgJi5pcy0tZGlzYWJsZWQge1xuXHRcdG9wYWNpdHkgOiAuMzU7XG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICB9XG5cbiAgICAmLmxpZnQge1xuICAgICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjI1cyBlYXNlLCB0cmFuc2Zvcm0gMC4yNXMgZWFzZTtcbiAgICAgICY6Zm9jdXMsXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAxcmVtIDIuNXJlbSByZ2JhKDE4LCAzOCwgNjMsIDAuMSksIDAgMC41cmVtIDFyZW0gLTAuNzVyZW0gcmdiYSgxOCwgMzgsIDYzLCAwLjEpICFpbXBvcnRhbnQ7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTNweCwgMCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQGlmICRjb2xvciA9PSBwcmltYXJ5IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcl9saW5rc19idXR0b25zO1xuICAgIH0gQGVsc2Uge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc5Nzk3OTtcbiAgICB9XG4gICAgQGlmICRzaXplID09IHNtYWxsIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IC4zcmVtO1xuICAgICAgY29sb3I6ICNmNWY1ZjU7XG4gICAgICBsaW5lLWhlaWdodDogNDRweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB9IFxuXG59IiwiQG1peGluIHR5cG9ncmFwaHkoJGZvcm1hdDogYm9keSwgJHdlaWdodDogbnVsbCwgJGNvbG9yOm51bGwsICRmb250c2l6ZTogbnVsbCwgJGxpbmVoZWlnaHQ6IG51bGwsICRtYXhsaW5lczowICkge1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgIEBpZiAkbWF4bGluZXMgPiAwIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogJG1heGxpbmVzO1xuICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgIH1cblxuICAgIEBpZiAkZm9ybWF0ID09ICBoMSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc2l6ZTogNi40cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogNi42cmVtO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgXG4gICAgICAgIEBpZiAkd2VpZ2h0ICE9IGJvbGQgYW5kICR3ZWlnaHQgIT0gc3Ryb25nIHtcbiAgICAgICAgICAgIHN0cm9uZywgYiB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQGlmICRtYXhsaW5lcyA+IDAge1xuXHRcdFx0bWF4LWhlaWdodDogOHJlbSAqICRtYXhsaW5lcztcblx0XHR9XG4gICAgfSBAZWxzZSBpZiAkZm9ybWF0ID09IGgyIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogNC44cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogNC44cmVtO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICAgICAgIEBpZiAkd2VpZ2h0ICE9IGJvbGQgYW5kICR3ZWlnaHQgIT0gc3Ryb25nIHtcbiAgICAgICAgICAgIHN0cm9uZywgYiB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXHRcdEBpZiAkbWF4bGluZXMgPiAwIHtcblx0XHRcdG1heC1oZWlnaHQ6IDQuOHJlbSAqICRtYXhsaW5lcztcblx0XHR9XG4gICAgfSBAZWxzZSBpZiAkZm9ybWF0ID09IGgzIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgZm9udC1zaXplOiA0LjhyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1LjRyZW07XG5cbiAgICAgICAgQGlmICR3ZWlnaHQgIT0gYm9sZCBhbmQgJHdlaWdodCAhPSBzdHJvbmcge1xuICAgICAgICAgICAgc3Ryb25nLCBiIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cdFx0QGlmICRtYXhsaW5lcyA+IDAge1xuXHRcdFx0bWF4LWhlaWdodDogNC44cmVtICogJG1heGxpbmVzO1xuXHRcdH1cbiAgICB9IEBlbHNlIGlmICRmb3JtYXQgPT0gaDQge1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LXNpemU6IDRyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0LjRyZW07XG5cbiAgICAgICAgQGlmICR3ZWlnaHQgIT0gYm9sZCBhbmQgJHdlaWdodCAhPSBzdHJvbmcge1xuICAgICAgICAgICAgc3Ryb25nLCBiIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cdFx0QGlmICRtYXhsaW5lcyA+IDAge1xuXHRcdFx0bWF4LWhlaWdodDogNC40cmVtICogJG1heGxpbmVzO1xuXHRcdH1cbiAgICB9IEBlbHNlIGlmICRmb3JtYXQgPT0gaDUge1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcblxuICAgICAgICBAaWYgJHdlaWdodCAhPSBib2xkIGFuZCAkd2VpZ2h0ICE9IHN0cm9uZyB7XG4gICAgICAgICAgICBzdHJvbmcsIGIge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblx0XHRAaWYgJG1heGxpbmVzID4gMCB7XG5cdFx0XHRtYXgtaGVpZ2h0OiAxLjhyZW0gKiAkbWF4bGluZXM7XG5cdFx0fVxuICAgIH0gQGVsc2UgaWYgJGZvcm1hdCA9PSBoNiB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNHJlbTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICAgICAgICBAaWYgJHdlaWdodCAhPSBib2xkIGFuZCAkd2VpZ2h0ICE9IHN0cm9uZyB7XG4gICAgICAgICAgICBzdHJvbmcsIGIge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblx0XHRAaWYgJG1heGxpbmVzID4gMCB7XG5cdFx0XHRtYXgtaGVpZ2h0OiAxLjRyZW0gKiAkbWF4bGluZXM7XG5cdFx0fVxuICAgIH0gQGVsc2UgaWYgJGZvcm1hdCA9PSBzbWFsbCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMi4zcmVtO1xuXG4gICAgICAgIEBpZiAkd2VpZ2h0ICE9IGJvbGQgYW5kICR3ZWlnaHQgIT0gc3Ryb25nIHtcbiAgICAgICAgICAgIHN0cm9uZywgYiB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXHRcdEBpZiAkbWF4bGluZXMgPiAwIHtcblx0XHRcdG1heC1oZWlnaHQ6IDIuM3JlbSAqICRtYXhsaW5lcztcblx0XHR9XG4gICAgfSBAZWxzZSBpZiAkZm9ybWF0ID09IHZlcnlzbWFsbCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcblxuICAgICAgICBAaWYgJHdlaWdodCAhPSBib2xkIGFuZCAkd2VpZ2h0ICE9IHN0cm9uZyB7XG4gICAgICAgICAgICBzdHJvbmcsIGIge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblx0XHRAaWYgJG1heGxpbmVzID4gMCB7XG5cdFx0XHRtYXgtaGVpZ2h0OiAxLjJyZW0gKiAkbWF4bGluZXM7XG5cdFx0fVxuICAgIH0gQGVsc2UgaWYgJGZvcm1hdCA9PSB2ZXJ5dmVyeXNtYWxsIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcblxuICAgICAgICBAaWYgJHdlaWdodCAhPSBib2xkIGFuZCAkd2VpZ2h0ICE9IHN0cm9uZyB7XG4gICAgICAgICAgICBzdHJvbmcsIGIge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblx0XHRAaWYgJG1heGxpbmVzID4gMCB7XG5cdFx0XHRtYXgtaGVpZ2h0OiAxcmVtICogJG1heGxpbmVzO1xuXHRcdH1cbiAgICB9IEBlbHNlICB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMi45cmVtO1xuXG4gICAgICAgIEBpZiAkd2VpZ2h0ICE9IGJvbGQgYW5kICR3ZWlnaHQgIT0gc3Ryb25nIHtcbiAgICAgICAgICAgIHN0cm9uZywgYiB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXHRcdEBpZiAkbWF4bGluZXMgPiAwIHtcblx0XHRcdG1heC1oZWlnaHQ6IDIuNnJlbSAqICRtYXhsaW5lcztcblx0XHR9XG4gICAgfVxuXG4gICAgQGlmICR3ZWlnaHQgPT0gYm9sZCBvciAkd2VpZ2h0ID09IHN0cm9uZyB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH0gQGVsc2UgaWYgJHdlaWdodCA9PSBib2xkIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfSBAZWxzZSBpZiAkd2VpZ2h0ID09IG5vcm1hbCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgfVxuXG4gICAgQGlmICRjb2xvciB7XG4gICAgICAgIGNvbG9yOiAkY29sb3I7XG4gICAgfVxuXG4gICAgQGlmICRmb250c2l6ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogJGZvbnRzaXplO1xuICAgIH1cblxuICAgIEBpZiAkbGluZWhlaWdodCB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAkbGluZWhlaWdodDtcbiAgICB9XG59Il19 */"]
      });
      /***/
    },

    /***/
    "Rqi1":
    /*!**************************************************************************!*\
      !*** ./src/app/core/authentication/lock-screen/lock-screen.component.ts ***!
      \**************************************************************************/

    /*! exports provided: LockScreenComponent */

    /***/
    function Rqi1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LockScreenComponent", function () {
        return LockScreenComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LockScreenComponent = /*#__PURE__*/function () {
        function LockScreenComponent() {
          _classCallCheck(this, LockScreenComponent);
        }

        _createClass(LockScreenComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LockScreenComponent;
      }();

      LockScreenComponent.ɵfac = function LockScreenComponent_Factory(t) {
        return new (t || LockScreenComponent)();
      };

      LockScreenComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LockScreenComponent,
        selectors: [["app-lock-screen"]],
        decls: 2,
        vars: 0,
        template: function LockScreenComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "lock-screen works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2NrLXNjcmVlbi5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    "SsBv":
    /*!***********************************************************!*\
      !*** ./src/app/core/structure/navbar/navbar.component.ts ***!
      \***********************************************************/

    /*! exports provided: NavbarComponent */

    /***/
    function SsBv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
        return NavbarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services */
      "o0su");

      var _c0 = function _c0() {
        return ["/home"];
      };

      var _c1 = function _c1() {
        return ["/"];
      };

      var _c2 = function _c2() {
        return ["/accounts"];
      };

      var _c3 = function _c3() {
        return ["/suppliers"];
      };

      var _c4 = function _c4() {
        return ["/warehouse/list"];
      };

      var _c5 = function _c5() {
        return ["/stockroom/list"];
      };

      var _c6 = function _c6() {
        return ["/configs/list-item-type"];
      };

      var _c7 = function _c7() {
        return ["/configs/list-item-configs"];
      };

      var _c8 = function _c8() {
        return ["/configs/list-box-config"];
      };

      var _c9 = function _c9() {
        return ["/configs/list-kit-config"];
      };

      var _c10 = function _c10() {
        return ["/configs/list-pay-go-providers"];
      };

      var _c11 = function _c11() {
        return ["/configs/list-price-groups"];
      };

      var _c12 = function _c12() {
        return ["/configs/list-product-configs"];
      };

      var _c13 = function _c13() {
        return ["/list-boxes"];
      };

      var _c14 = function _c14() {
        return ["/inventory/list"];
      };

      var _c15 = function _c15() {
        return ["/products/list"];
      };

      var _c16 = function _c16() {
        return ["/inventory/move"];
      };

      var _c17 = function _c17() {
        return ["/customers/list"];
      };

      var NavbarComponent = /*#__PURE__*/function () {
        function NavbarComponent(_route, _authService) {
          _classCallCheck(this, NavbarComponent);

          this._route = _route;
          this._authService = _authService;
          this.username = 'User';
        }

        _createClass(NavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getUserDetails();
          }
        }, {
          key: "getUserDetails",
          value: function getUserDetails() {
            this.username = this._authService.getUserProfile().username;
          }
        }, {
          key: "signOut",
          value: function signOut() {
            this._authService.signOut();
          }
        }]);

        return NavbarComponent;
      }();

      NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
        return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
      };

      NavbarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavbarComponent,
        selectors: [["app-navbar"]],
        decls: 78,
        vars: 37,
        consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], [1, "container"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarTogglerMainMenu", "aria-controls", "navbarTogglerMainMenu", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], [1, "navbar-brand"], [3, "routerLink"], ["src", "../../../../assets/img/logo/spark-logo-trans-bg.png", 1, "navbar-logo"], ["id", "navbarTogglerMainMenu", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "pr-3", "active"], [1, "nav-link", 3, "routerLink"], [1, "sr-only"], [1, "nav-item", "pr-3", "dropdown"], ["id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], [1, "dropdown-item", 3, "routerLink"], [1, "dropdown-divider"], [1, "dropdown-sub-menu"], ["href", "#", 1, "dropdown-item"], [1, "dropdown-menu"], ["href", "#", "id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], [1, "nav-item", "pr-3"], ["href", "#", 1, "nav-link", "disabled"], [1, "form-inline", "my-2", "my-lg-0"], [1, "nav-item", "dropdown", "form-inline", "my-2", "my-lg-0", "user-profile-wrapper"], ["href", "#", "id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "user-profile"], ["href", "#", 1, "dropdown-item", 3, "click"]],
        template: function NavbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Dashboard ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "(current)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Administration ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Accounts");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Suppliers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Warehouses");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Stockrooms");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Configurations");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Item Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Box");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Kit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Pay Go Providers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Price Group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Product");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Inventory ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Boxes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Items");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Products");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Move Stock");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Customers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Payments");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_76_listener() {
              return ctx.signOut();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Sign out");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c3));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c4));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c5));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c6));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c7));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c8));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c9));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c10));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c11));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c12));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](32, _c13));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](33, _c14));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](34, _c15));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](35, _c16));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](36, _c17));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.username, " ");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: [".navbar-logo[_ngcontent-%COMP%] {\n  width: 5rem;\n}\n.navbar[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.161);\n  padding: 0.6rem 0.6rem;\n}\n.dropdown-divider[_ngcontent-%COMP%] {\n  margin: 0.3rem 0;\n  overflow: hidden;\n  border-top: 1px solid #e9ecef;\n}\n.dropdown-menu[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n  margin-top: 0.5rem;\n  cursor: pointer;\n  font-family: \"Avenir-Heavy\", Helvetica, Arial, serif;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  color: #535252;\n  font-size: 0.875rem;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .dropdown-sub-menu[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-top: 0.5rem;\n  position: relative;\n  font-family: \"Avenir-Heavy\", Helvetica, Arial, serif;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .dropdown-sub-menu[_ngcontent-%COMP%]:hover    > .dropdown-menu[_ngcontent-%COMP%] {\n  display: block;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .dropdown-sub-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]::after {\n  display: block;\n  content: \" \";\n  float: right;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #535252;\n  margin-top: 5px;\n  margin-right: -10px;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .dropdown-sub-menu[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  width: 12rem;\n  top: 0;\n  left: 100%;\n  top: 0;\n  left: 100%;\n  margin-top: -0.55rem;\n  margin-left: -0.8px;\n  border-radius: 0 6px 6px 6px;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .dropdown-sub-menu[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  background-color: #e9ecef;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .dropdown-sub-menu[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 0.25rem 1.5rem;\n  font-size: 0.875rem;\n  clear: both;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .dropdown-sub-menu[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #535252;\n  text-decoration: none;\n}\n.nav-link[_ngcontent-%COMP%] {\n  font-family: \"Avenir-Heavy\", Helvetica, Arial, serif;\n  font-size: 0.875rem;\n  min-height: 24px;\n  white-space: nowrap;\n}\n.user-profile[_ngcontent-%COMP%] {\n  color: #036FB6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fdmFycy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhCQUFBO0FBQ0EsOEJBQUE7QUFDQSw4QkFBQTtBQTBCQSwyQkFBQTtBQUVBLHlCQUFBO0FDbEJBO0VBQ0ksV0FBQTtBQU5KO0FBU0E7RUFDSSx5QkRiZTtFQ2NmLDRDQVIyQjtFQVMzQixzQkFBQTtBQU5KO0FBU0E7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7QUFOSjtBQVNBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxvREE1QmU7QUFzQm5CO0FBUUk7RUFDSSxjRFJjO0VDU2QsbUJBakNTO0FBMkJqQjtBQVNJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvREF2Q1c7QUFnQ25CO0FBVVk7RUFDSSxjQUFBO0FBUmhCO0FBWVk7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLDBCRGpDTTtFQ2tDTixlQUFBO0VBQ0EsbUJBQUE7QUFWaEI7QUFjUTtFQUNJLFlBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0FBWlo7QUFjWTtFQUNJLHlCQUFBO0FBWmhCO0FBZVk7RUFDSSx1QkFBQTtFQUNBLG1CQS9FQztFQWdGRCxXQUFBO0FBYmhCO0FBY2dCO0VBQ0ksY0QxREU7RUMyREYscUJBQUE7QUFacEI7QUFvQkE7RUFDSSxvREEzRmU7RUE0RmYsbUJBN0ZhO0VBOEZiLGdCQUFBO0VBQ0EsbUJBQUE7QUFqQko7QUFvQkE7RUFDSSxjRDdGWTtBQzRFaEIiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKiogY29sb3JzICoqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4kY29sb3JfYmFja2dyb3VuZDogI2ZmZmZmZjtcbiRjb2xvci1iYWNrZ3JvdW5kLWNhcmQ6ICNmZmZmZmY7XG4kY29sb3JfYmFja2dyb3VuZC1pbnB1dHM6ICNmZmZmZmY7XG4kY29sb3JfdG9wYmFyOiAjZmZmZmZmO1xuJGNvbG9yX2J1dHRvbnM6ICM0ZDRkNGQ7XG4kY29sb3JfcHJpbWFyeTogIzAzNkZCNjtcbiRjb2xvcl9zZWNvbmRhcnk6ICNlNTdjMmM7XG4kY29sb3JfdGVydGlhcnk6ICMxMjI2M2Y7XG4kY29sb3Jfd2FybmluZzogI2U2Mzc1NztcbiRjb2xvcl9zdWNjZXNzOiAjMDA3NzAwO1xuJGNvbG9yX3doaXRlOiAjZmZmZmZmO1xuJGNvbG9yX2JsYWNrOiAjMDAwO1xuJGNvbG9yX2xpZ2h0Z3JleTogcmdiYSgkY29sb3Jfd2hpdGUsIDAuNSk7XG4kY29sb3JfbGlnaHRlcmdyZXk6IHJnYmEoJGNvbG9yX3doaXRlLCAwLjI1KTtcbiRjb2xvcl9mb3Jtc19ib3JkZXI6ICM3MDcwNzA7XG4kY29sb3JfZm9ybV9wbGFjZWhvbGRlcjogI2IxYzJkOTtcbiRjb2xvcl9saW5rc19idXR0b25zOiAjMDM2ZmI2O1xuJGNvbG9yX3N1YnN1YnRpdGxlOiAjN2U3ZTdlO1xuJGNvbG9yX3RpdGxlOiAjNTM1MjUyO1xuJGNvbG9yX3N1YnRpdGxlOiAjQjJCMUIxO1xuJGNvbG9yX25hdmJhcl9iYWNrZ3JvdW5kOiAkY29sb3JfYmFja2dyb3VuZDtcbiRjb2xvcl9uYXZiYXJfYm9yZGVyOiAjYTlhOGE4O1xuXG4kY29sb3JfdGl0bGVfZGVmYXVsdDogIzUzNTI1Mjtcbi8qIEFkZCByZXVzYWJsZSBhbmltYXRpb25zKi9cblxuLyogQWNjb21vZGF0ZSBpcGhvbmUgMTErKi9cbiRpcGhvbmUtc2FmZXNwYWNlOiByZW0tY2FsYyg0NCk7XG4kY29tbW9uR3V0dGVyOiAzcmVtO1xuIiwiXG5AdXNlICcuLi8uLi8uLi9zdHlsZXMvdmFycycgYXMgdmFycztcblxuJG1lbnUtZm9udC1zaXplOiAwLjg3NXJlbTtcbiRtZW51LWZvbnQtZmFtaWx5OiBcIkF2ZW5pci1IZWF2eVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzZXJpZjtcblxuXG4kcHJpbWFyeS1tZW51LWNvbG9yOiB2YXJzLiRjb2xvcl9wcmltYXJ5O1xuJHNlY29uZGFyeS1tZW51LWNvbG9yOiB2YXJzLiRjb2xvcl90aXRsZV9kZWZhdWx0O1xuJG1lbnUtYmFja2dyb3VuZC1jb2xvcjogdmFycy4kY29sb3JfYmFja2dyb3VuZDsgXG4kbWVudS1iYWNrZ3JvdW5kLXNoYWRvdy1jb2xvcjogMHB4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2MSk7XG5cbi5uYXZiYXItbG9nbyB7XG4gICAgd2lkdGg6IDVyZW07XG59XG5cbi5uYXZiYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6JG1lbnUtYmFja2dyb3VuZC1jb2xvcjtcbiAgICBib3gtc2hhZG93OiAkbWVudS1iYWNrZ3JvdW5kLXNoYWRvdy1jb2xvcjtcbiAgICBwYWRkaW5nOiAgMC42cmVtIDAuNnJlbTtcbn1cblxuLmRyb3Bkb3duLWRpdmlkZXIge1xuICAgIG1hcmdpbjogMC4zcmVtIDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2U5ZWNlZjtcbn1cblxuLmRyb3Bkb3duLW1lbnUge1xuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LWZhbWlseTogJG1lbnUtZm9udC1mYW1pbHk7XG4gICAgXG4gICAgLmRyb3Bkb3duLWl0ZW0ge1xuICAgICAgICBjb2xvcjokc2Vjb25kYXJ5LW1lbnUtY29sb3I7XG4gICAgICAgIGZvbnQtc2l6ZTogJG1lbnUtZm9udC1zaXplO1xuICAgIH1cblxuICAgIC5kcm9wZG93bi1zdWItbWVudSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkbWVudS1mb250LWZhbWlseTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgID4gLmRyb3Bkb3duLW1lbnUge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5kcm9wZG93bi1pdGVtIHtcbiAgICAgICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDVweCAwIDVweCA1cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICRzZWNvbmRhcnktbWVudS1jb2xvcjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5kcm9wZG93bi1tZW51IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMnJlbTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDEwMCU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTAuNTVyZW07XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTAuOHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCA2cHggNnB4IDZweDtcblxuICAgICAgICAgICAgOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC4yNXJlbSAxLjVyZW07XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAgJG1lbnUtZm9udC1zaXplO1xuICAgICAgICAgICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeS1tZW51LWNvbG9yO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbi5uYXYtbGluayB7XG4gICAgZm9udC1mYW1pbHk6ICRtZW51LWZvbnQtZmFtaWx5O1xuICAgIGZvbnQtc2l6ZTogJG1lbnUtZm9udC1zaXplO1xuICAgIG1pbi1oZWlnaHQ6IDI0cHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLnVzZXItcHJvZmlsZSB7XG4gICAgY29sb3I6JHByaW1hcnktbWVudS1jb2xvcjtcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-cookie-service */
      "b6Qw");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./services */
      "o0su");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(_cookieService, _errorsService, _storageService, _authService) {
          _classCallCheck(this, AppComponent);

          this._cookieService = _cookieService;
          this._errorsService = _errorsService;
          this._storageService = _storageService;
          this._authService = _authService;
          this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
          this.title = 'sparkweb';
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
            //const currentUserId = JSON.parse(this._storageService.getItem('userDetails') || '{}');
            var itemsStored = ['token', 'userDetails'];
            window.addEventListener('storage', function () {
              Object.values(localStorage).forEach(function (item) {
                var storageItem = Object.keys(JSON.parse(item));

                for (var i = 0; i < storageItem.length; i++) {
                  if (itemsStored.indexOf(storageItem[i]) > -1) {
                    continue;
                  } else {
                    localStorage.clear();
                    window.location.href = "".concat(window.location.protocol, "//").concat(window.location.host, "/signin");
                    break;
                  }
                }
              });
            });

            if (this._cookieService.get('rememberMe') || localStorage.getItem('rememberMe')) {
              this.refreshToken();
            }
          }
        }, {
          key: "refreshToken",
          value: function refreshToken() {
            var tokenItems = JSON.parse(this._storageService.getItem('token') || '{}') || null;

            if (tokenItems !== undefined && tokenItems !== null || tokenItems !== {}) {
              if (Date.now() > tokenItems.refreshTokenTime) {
                var params = {
                  token: tokenItems.token,
                  refresh_token: tokenItems.tokenRefresh
                };

                this._authService.refreshToken(params);
              }
            }
          }
        }, {
          key: "initializeErrors",
          value: function initializeErrors() {
            this._errorsService.getErrors().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.ngUnsubscribe)).subscribe(function (errors) {
              console.log('STATUS ERRORS: Show through the modal service', errors); //TODO -> Create the modal Service
              // const modalRef = this._modalService.open(PromptComponent);
              // modalRef.componentInstance.message = errors.toString();
              // modalRef.componentInstance.button = 'Confirm';
              // modalRef.componentInstance.title = 'STATUS ERROR';
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.routerSubscription.unsubscribe();
            this.ngUnsubscribe.next();
            this.ngUnsubscribe.complete();
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_4__["ErrorsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_4__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_4__["AuthService"]));
      };

      AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "V0L8":
    /*!***************************************************************************!*\
      !*** ./src/app/shared/filters/submit-filters/submit-filters.component.ts ***!
      \***************************************************************************/

    /*! exports provided: SubmitFiltersComponent */

    /***/
    function V0L8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SubmitFiltersComponent", function () {
        return SubmitFiltersComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _filters_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../filters.service */
      "WpeU");
      /* harmony import */


      var _tables_tables_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../tables/tables.service */
      "Mm8Z");

      var SubmitFiltersComponent = /*#__PURE__*/function () {
        function SubmitFiltersComponent(_filterService, _tableService) {
          _classCallCheck(this, SubmitFiltersComponent);

          this._filterService = _filterService;
          this._tableService = _tableService;
          this.filterUrl = '';
          this.urlToGetFilterData = '';
          this.isDisabled = true;
        }

        _createClass(SubmitFiltersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this17 = this;

            this.selectedFiltersSubscriber = this._filterService.submitFilters$.subscribe(function (data) {
              data.data === undefined || !data.data.length ? _this17.isDisabled = true : _this17.isDisabled = false;

              if (data) {
                _this17.selectedFilters = data.data;
                _this17.urlToGetFilterData = data.url;
              }
            });
          }
        }, {
          key: "submitFilters",
          value: function submitFilters() {
            if (this.selectedFilters === undefined && this.urlToGetFilterData === undefined) {
              return;
            }

            var filters = [];
            var data = this.selectedFilters;
            var url = this.urlToGetFilterData;
            data.map(function (item) {
              var arr = {};
              var filterItem = "".concat(item[0], "=").concat(item[1]);
              arr = filterItem;
              filters.push(arr);
            });
            data = filters.join("&");

            this._filterService.getJoinedFilters(data);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.selectedFiltersSubscriber.unsubscribe();
          }
        }]);

        return SubmitFiltersComponent;
      }();

      SubmitFiltersComponent.ɵfac = function SubmitFiltersComponent_Factory(t) {
        return new (t || SubmitFiltersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_filters_service__WEBPACK_IMPORTED_MODULE_1__["FiltersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tables_tables_service__WEBPACK_IMPORTED_MODULE_2__["TablesService"]));
      };

      SubmitFiltersComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SubmitFiltersComponent,
        selectors: [["app-submit-filters"]],
        inputs: {
          filterUrl: "filterUrl"
        },
        decls: 3,
        vars: 1,
        consts: [[1, "row", "filters__button-wrapper"], [1, "btn", "btn-primary", "btn-sm", "spark-dynamic-forms__bulk-btn", 3, "disabled", "click"]],
        template: function SubmitFiltersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubmitFiltersComponent_Template_button_click_1_listener() {
              return ctx.submitFilters();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Filter Records ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isDisabled);
          }
        },
        styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n\n.filters__item[_ngcontent-%COMP%] {\n  position: relative;\n  text-transform: capitalize;\n  background: #007bff;\n  padding: 10px;\n  border-radius: 5px;\n  max-width: 120px;\n  text-align: center;\n  color: white;\n}\n\n.filters__item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.filters__button-wrapper[_ngcontent-%COMP%] {\n  padding-top: 15px;\n  margin-left: 0;\n}\n\n.filters__collapsible-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.filters__collapsible-wrapper[_ngcontent-%COMP%]   .filters__button-wrapper[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  position: relative !important;\n  top: -59px !important;\n  left: -25px !important;\n  width: 100%;\n}\n\n.card[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  height: auto;\n  width: auto;\n  border-radius: 0.5rem;\n  border-color: #f5f5f5;\n}\n\n.card__body[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 2.8rem 2.6rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ZpbHRlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxXQUFBO0FBREo7O0FBS0k7RUFDSSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUZSOztBQUlRO0VBQ0ksZUFBQTtBQUZaOztBQU9RO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FBTFo7O0FBVVE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFSWjs7QUFVWTtFQUNJLGlCQUFBO0FBUmhCOztBQWtCSTtFQUNJLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFmUjs7QUFtQkE7RUFDSSx5QkF0RGdCO0VBdURoQixZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EscUJBMURnQjtBQTBDcEI7O0FBa0JJO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtBQWhCUiIsImZpbGUiOiJmaWx0ZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNhcmQtaGVhZGVyLWNvbG9yOiAjZjVmNWY1O1xuXG46aG9zdCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5maWx0ZXJzIHtcbiAgICAmX19pdGVtIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgYmFja2dyb3VuZDogIzAwN2JmZjtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBtYXgtd2lkdGg6IDEyMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgICAgICBpIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2J1dHRvbiB7XG4gICAgICAgICYtd3JhcHBlciB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fY29sbGFwc2libGUge1xuICAgICAgICAmLXdyYXBwZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgICAgICAgICAgIC5maWx0ZXJzX19idXR0b24td3JhcHBlciB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5kcm9wZG93bntcbiAgICAmLXRvZ2dsZSB7XG5cbiAgICB9XG4gICAgJi1tZW51IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gICAgICAgIHRvcDogLTU5cHggIWltcG9ydGFudDtcbiAgICAgICAgbGVmdDogLTI1cHggIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG4uY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNhcmQtaGVhZGVyLWNvbG9yO1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcbiAgICBib3JkZXItY29sb3I6ICRjYXJkLWhlYWRlci1jb2xvcjtcblxuICAgICZfX2JvZHkge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHBhZGRpbmc6IDIuOHJlbSAyLjZyZW07XG4gICAgfVxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "VNuA":
    /*!***********************************************************!*\
      !*** ./src/app/core/structure/footer/footer.component.ts ***!
      \***********************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function VNuA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.date = new Date().getFullYear();
          }
        }]);

        return FooterComponent;
      }();

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 0,
        vars: 0,
        template: function FooterComponent_Template(rf, ctx) {},
        styles: [".footer[_ngcontent-%COMP%] {\n  padding-bottom: 1%;\n}\n.footer[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Museo-Sans\", Helvetica, Arial, serif;\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGtCQUFBO0FBQUo7QUFHSTtFQUNJLGtCQUFBO0VBQ0Esa0RBQUE7RUFDQSxlQUFBO0FBRFIiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XG4gICAgLy8gdG9kbzogY2hlY2sgb24gcGFkZGluZyAqIFxuICAgIHBhZGRpbmctYm90dG9tOiAxJTsgXG4gICAgXG4gICAgLy8gdG9kbzogcGljayBmb250cyBmcm9tIHZhcmlhYmxlcy5zY3NzXG4gICAgLnRpdGxlIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LWZhbWlseTogXCJNdXNlby1TYW5zXCIsIEhlbHZldGljYSwgQXJpYWwsIHNlcmlmO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgfVxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "Vtyy":
    /*!******************************************************************!*\
      !*** ./src/app/shared/ng-multi-select/multi-select.component.ts ***!
      \******************************************************************/

    /*! exports provided: MultiSelectComponent */

    /***/
    function Vtyy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MultiSelectComponent", function () {
        return MultiSelectComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _multi_select_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./multi-select.service */
      "xUvI");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function MultiSelectComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MultiSelectComponent_div_6_button_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MultiSelectComponent_div_6_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MultiSelectComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function MultiSelectComponent_div_6_Template_form_ngSubmit_3_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var se_r3 = restoredCtx.$implicit;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.chooseSelection(se_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MultiSelectComponent_div_6_button_6_Template, 2, 0, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MultiSelectComponent_div_6_ng_template_7_Template, 2, 0, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var se_r3 = ctx.$implicit;

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](se_r3.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.formGroupCount);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.pre_selection_status.includes(se_r3.id))("ngIfElse", _r5);
        }
      }

      function MultiSelectComponent_button_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiSelectComponent_button_12_Template_span_click_5_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var se_r9 = restoredCtx.$implicit;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.removeSelection(se_r9);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var se_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", se_r9.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](se_r9.count);
        }
      }

      var MultiSelectComponent = /*#__PURE__*/function () {
        function MultiSelectComponent(multiServ) {
          _classCallCheck(this, MultiSelectComponent);

          this.multiServ = multiServ;

          this.onChange = function () {};

          this.onTouch = function () {};
          /**
           * It should dissapper after some time
           * Define default args
           */


          this.focus = false;
          this.loader = false;
          this.categories = [];
          this.selection = [];
          this.selected = '';
          this.pre_selection = [];
          this.pre_selection_status = [];
          this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.pageSize = 3;
          this.formGroupSearch = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            search: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
          });
          this.formGroupCount = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            count: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
          this.parameter = {
            "type": "field",
            "required": true,
            "read_only": false,
            "label": "Items",
            "display_name": "name",
            "value_field": "id",
            "multiple": true,
            "url": "item-configs/",
            "search_field": "name",
            "args": "users",
            "edit_source_field": "items_details",
            "edit_display_name": "item_name",
            "res_value_field": "item_config"
          };
        }

        _createClass(MultiSelectComponent, [{
          key: "selectSe",
          value: function selectSe() {}
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this18 = this;

            this.subject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(500)).subscribe(function (search) {
              _this18.focus = true;

              _this18.searchingFunc(search);
            });
          }
        }, {
          key: "writeValue",
          value: function writeValue(value) {
            if (value) {
              this.parseWriteData(value);
            } else {
              this.selection = [];
            }
          }
        }, {
          key: "parseWriteData",
          value: function parseWriteData(value) {
            var _this19 = this;

            this.selection = value.map(function (ele) {
              var sel = {};
              sel.count = ele.count;
              sel.id = ele[_this19.responseValueFieldName];
              sel.name = _this19.getObjValue(ele, _this19.editSourceDisplayFieldName);
              return sel;
            });
          }
        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChange = fn;
          }
        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouch = fn;
          }
        }, {
          key: "clearSelection",
          value: function clearSelection() {
            this.pre_selection = [];
          }
        }, {
          key: "onKeyUp",
          value: function onKeyUp() {
            var search_text = this.formGroupSearch.controls['search'].value;
            this.subject.next(search_text);
          }
        }, {
          key: "chooseSelection",
          value: function chooseSelection(se) {
            var is_update = false;
            var choice = {
              id: se.id,
              name: se.name,
              count: this.formGroupCount.controls['count'].value
            };

            for (var i in this.selection) {
              if (this.selection[i].id == se.id) {
                this.selection[i].count = this.formGroupCount.controls['count'].value;
                is_update = true;
                this.hasChanged();
                break;
              }
            }

            if (!is_update) {
              this.selection.push(choice);
              this.hasChanged();
            }

            this.pre_selection_status.includes(se.id) ? true : this.pre_selection_status.push(se.id);
          }
        }, {
          key: "hasChanged",
          value: function hasChanged() {
            this.onChange(this.mapResponseValue(this.selection));
          }
        }, {
          key: "mapResponseValue",
          value: function mapResponseValue(selection) {
            var _this20 = this;

            return selection.map(function (ele) {
              var res = {};
              res[_this20.responseValueFieldName] = ele.id;
              return Object.assign(Object.assign({}, res), ele);
            });
          }
        }, {
          key: "removeSelection",
          value: function removeSelection(se) {
            var index = this.selection.indexOf(se);
            this.selection.splice(index, 1);
            var status_idx = this.pre_selection_status.indexOf(se.id);
            this.pre_selection_status.splice(status_idx, 1);
            this.hasChanged();
          }
        }, {
          key: "searchArgs",
          get: function get() {
            if (this.paramType == "object") {
              if (this.parameter.hasOwnProperty("args")) return this.parameter.args;
            }

            return "";
          }
        }, {
          key: "hideSearchResult",
          value: function hideSearchResult() {
            this.focus = false;
          }
        }, {
          key: "searchingFunc",
          value: function searchingFunc(search) {
            var _this21 = this;

            this.loader = true;

            if (!search) {
              this.pre_selection = [];
              this.loader = false;
              return;
            }

            var count = search.length;
            var searchArgs = "".concat(this.searchArgs, "&").concat(this.searchFieldName, "=").concat(search);
            console.log(this.isOfflineSearch);

            if (!this.isOfflineSearch) {
              this.multiServ.search(this.url, this.pageSize, searchArgs).subscribe(function (res) {
                _this21.loader = false;
                console.log(res);

                _this21.mapPreselectionData(res.results);
              }, function (error) {
                console.log("Failed to search http");
                _this21.loader = false;
                console.log(error);
              });
            } else {
              console.log("Offline search");
              this.mapPreselectionData(this.parameter.data);
              this.loader = false;
            }
          }
        }, {
          key: "mapPreselectionData",
          value: function mapPreselectionData(data) {
            var _this22 = this;

            // Check the data for the source and the display_name
            if (data.length < 1) return;
            this.pre_selection = data.map(function (elem) {
              var preSelect = {};
              preSelect.id = _this22.getObjValue(elem, _this22.valueFieldName);
              preSelect.name = _this22.getObjValue(elem, _this22.displayFieldName);
              return preSelect;
            });
          }
        }, {
          key: "displayFieldName",
          get: function get() {
            if (this.paramType == "object") {
              if (this.parameter.hasOwnProperty("display_name")) return this.parameter.display_name;
              return this.parameter.label;
            }

            return this.parameter;
          }
        }, {
          key: "editSourceDisplayFieldName",
          get: function get() {
            if (this.paramType == "object") {
              if (this.parameter.hasOwnProperty("edit_display_name")) {
                return this.parameter.edit_display_name;
              }

              return "name";
            }

            return "name";
          }
        }, {
          key: "editSourceFieldName",
          get: function get() {
            if (this.paramType == "object") {
              if (this.parameter.hasOwnProperty("edit_source_field")) return this.parameter.edit_source_field;
              return this.parameter.label;
            }

            return this.parameter;
          }
        }, {
          key: "valueFieldName",
          get: function get() {
            if (this.paramType == "object") {
              if (this.parameter.hasOwnProperty("value_field")) return this.parameter.value_field;
              return this.parameter.label;
            }

            return this.parameter;
          }
        }, {
          key: "responseValueFieldName",
          get: function get() {
            if (this.paramType == "object") {
              if (this.parameter.hasOwnProperty("res_value_field")) return this.parameter.res_value_field;
              return this.parameter.label;
            }

            return "id";
          }
        }, {
          key: "url",
          get: function get() {
            if (this.paramType == "object") {
              if (this.parameter.hasOwnProperty("url")) return this.parameter.url;
            }

            return "";
          }
        }, {
          key: "getObjValue",
          value: function getObjValue(rawData, source) {
            var parts = source.split(".");
            var value = "Incorrect Data Source ".concat(source, " ");
            var tempValue = rawData; // Check if data hardcoded

            for (var index in parts) {
              var key = parts[index];

              if (tempValue.hasOwnProperty(key)) {
                tempValue = tempValue[key];
                value = tempValue;
              }
            }

            return value;
          }
        }, {
          key: "searchFieldName",
          get: function get() {
            if (this.paramType == "object") {
              if (this.parameter.hasOwnProperty("search_field")) return this.parameter.search_field;
              return this.parameter.label;
            }

            return this.parameter;
          }
        }, {
          key: "paramType",
          get: function get() {
            return typeof this.parameter;
          }
          /**
           * Check if the paramer has a data object
           * If exists no api call is required
           */

        }, {
          key: "isOfflineSearch",
          get: function get() {
            if (this.paramType == "object") {
              if (this.parameter.hasOwnProperty("data")) {
                return true;
              }

              return false;
            }

            return false;
          }
        }]);

        return MultiSelectComponent;
      }();

      MultiSelectComponent.ɵfac = function MultiSelectComponent_Factory(t) {
        return new (t || MultiSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_multi_select_service__WEBPACK_IMPORTED_MODULE_4__["MultiSelectService"]));
      };

      MultiSelectComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MultiSelectComponent,
        selectors: [["app-multi-select"]],
        inputs: {
          pageSize: "pageSize",
          parameter: "parameter"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
            return MultiSelectComponent;
          }),
          multi: true
        }])],
        decls: 13,
        vars: 5,
        consts: [[3, "formGroup"], [1, "d-flex", "justify-content-between"], ["formControlName", "search", "placeholder", "Search items", 1, "form-control", "form-control-lg", "multiselect-input", 3, "keyup", "blur"], ["class", "spinner-border ml-2 p-2 text-primary", "role", "status", 4, "ngIf"], [3, "hidden"], [1, "list-group-item", "search-results"], ["class", "d-flex justify-content-between result", 4, "ngFor", "ngForOf"], [1, "d-flex", "flex-row-reverse"], [1, "btn", "btn-secondary", "btn-sm", "pull-right", "mt-3", 3, "click"], [1, "mt-3"], ["class", "btn btn-sm btn-secondary btn-tag pr-3 pl-3 m-2 multiselect-input", 4, "ngFor", "ngForOf"], ["role", "status", 1, "spinner-border", "ml-2", "p-2", "text-primary"], [1, "sr-only"], [1, "d-flex", "justify-content-between", "result"], [1, "mt-1", "multiselect-input"], [3, "formGroup", "ngSubmit"], ["type", "number", "formControlName", "count", "placeholder", "Quantity", 1, "form-control", "d-inline", "mr-2", "multiselect-input"], ["class", "btn btn-sm btn-success multiselect-input multiselect-btn", 4, "ngIf", "ngIfElse"], ["AddBlock", ""], [1, "btn", "btn-sm", "btn-success", "multiselect-input", "multiselect-btn"], [1, "btn", "btn-sm", "btn-primary", "multiselect-input", "multiselect-btn"], [1, "btn", "btn-sm", "btn-secondary", "btn-tag", "pr-3", "pl-3", "m-2", "multiselect-input"], [1, "mr-2", "pr-1", "pl-1"], [3, "click"], [1, "fas", "fa-minus-circle"]],
        template: function MultiSelectComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function MultiSelectComponent_Template_input_keyup_2_listener() {
              return ctx.onKeyUp();
            })("blur", function MultiSelectComponent_Template_input_blur_2_listener() {
              return ctx.onTouch();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MultiSelectComponent_div_3_Template, 3, 0, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MultiSelectComponent_div_6_Template, 9, 4, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiSelectComponent_Template_button_click_8_listener() {
              return ctx.hideSearchResult();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Done");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MultiSelectComponent_button_12_Template, 7, 2, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroupSearch);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loader);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.focus);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pre_selection);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selection);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]],
        styles: [".search-results[_ngcontent-%COMP%] {\n  border: 1px solid #dedede;\n  border-radius: 0.185rem;\n  box-sizing: border-box;\n  overflow-y: auto;\n}\n\n.result[_ngcontent-%COMP%] {\n  background: #ffffff;\n  padding: 0.625rem;\n}\n\n.result[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%] {\n  background-color: red;\n  color: black;\n}\n\n.result[_ngcontent-%COMP%]:nth-child(even) {\n  background: #fafafa;\n}\n\n.btn-tag[_ngcontent-%COMP%] {\n  border-radius: 1rem;\n}\n\n.count[_ngcontent-%COMP%] {\n  background-color: whitesmoke;\n  color: black;\n  padding: 0.2rem;\n  border-radius: 2rem;\n  font-size: 10px;\n  vertical-align: middle;\n}\n\n.multiselect-input[_ngcontent-%COMP%] {\n  font-family: \"Avenir-Heavy\", Helvetica, Arial, serif;\n  font-size: 13px;\n}\n\n.multiselect-btn[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL211bHRpLXNlbGVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFHQTtFQUNFLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FBQUY7O0FBSUE7RUFDRSxvREFBQTtFQUNBLGVBQUE7QUFERjs7QUFJQTtFQUNFLFdBQUE7QUFERiIsImZpbGUiOiJtdWx0aS1zZWxlY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLXJlc3VsdHMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xuICBib3JkZXItcmFkaXVzOiAwLjE4NXJlbTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLnJlc3VsdCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDAuNjI1cmVtO1xuICBcbiAgLmNvdW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG59XG5cbi5yZXN1bHQ6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbn1cblxuLmJ0bi10YWcge1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xufVxuXG4uY291bnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDAuMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXG59XG5cbi5tdWx0aXNlbGVjdC1pbnB1dCB7XG4gIGZvbnQtZmFtaWx5OiBcIkF2ZW5pci1IZWF2eVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzZXJpZjtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4ubXVsdGlzZWxlY3QtYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"]
      });
      /***/
    },

    /***/
    "WpeU":
    /*!***************************************************!*\
      !*** ./src/app/shared/filters/filters.service.ts ***!
      \***************************************************/

    /*! exports provided: FiltersService */

    /***/
    function WpeU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FiltersService", function () {
        return FiltersService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services */
      "o0su");

      var FiltersService = /*#__PURE__*/function () {
        function FiltersService(_http) {
          _classCallCheck(this, FiltersService);

          this._http = _http;
          this.submitFilters$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.getFilters$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(FiltersService, [{
          key: "submitSelectedFilters",
          value: function submitSelectedFilters(data, url) {
            this.submitFilters$.emit({
              data: data,
              url: url
            });
          }
        }, {
          key: "getFilters",
          value: function getFilters(data, url) {
            return this._http.get("".concat(url, "?").concat(data));
          }
        }, {
          key: "getJoinedFilters",
          value: function getJoinedFilters(data) {
            this.getFilters$.emit(data);
          }
        }]);

        return FiltersService;
      }();

      FiltersService.ɵfac = function FiltersService_Factory(t) {
        return new (t || FiltersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services__WEBPACK_IMPORTED_MODULE_1__["HttpService"]));
      };

      FiltersService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: FiltersService,
        factory: FiltersService.ɵfac
      });
      /***/
    },

    /***/
    "XtmD":
    /*!*************************************************************************************!*\
      !*** ./src/app/shared/filters/collapsible-filters/collapsible-filters.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: CollapsibleFiltersComponent */

    /***/
    function XtmD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CollapsibleFiltersComponent", function () {
        return CollapsibleFiltersComponent;
      });
      /* harmony import */


      var _dropdown_filters_dropdown_filters_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../dropdown-filters/dropdown-filters.component */
      "xtVc");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _submit_filters_submit_filters_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../submit-filters/submit-filters.component */
      "V0L8");

      var CollapsibleFiltersComponent = /*#__PURE__*/function (_dropdown_filters_dro) {
        _inherits(CollapsibleFiltersComponent, _dropdown_filters_dro);

        var _super2 = _createSuper(CollapsibleFiltersComponent);

        function CollapsibleFiltersComponent() {
          _classCallCheck(this, CollapsibleFiltersComponent);

          return _super2.apply(this, arguments);
        }

        return CollapsibleFiltersComponent;
      }(_dropdown_filters_dropdown_filters_component__WEBPACK_IMPORTED_MODULE_0__["DropdownFiltersComponent"]);

      CollapsibleFiltersComponent.ɵfac = /*@__PURE__*/function () {
        var ɵCollapsibleFiltersComponent_BaseFactory;
        return function CollapsibleFiltersComponent_Factory(t) {
          return (ɵCollapsibleFiltersComponent_BaseFactory || (ɵCollapsibleFiltersComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](CollapsibleFiltersComponent)))(t || CollapsibleFiltersComponent);
        };
      }();

      CollapsibleFiltersComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: CollapsibleFiltersComponent,
        selectors: [["app-collapsible-filters"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
        decls: 4,
        vars: 0,
        consts: [[1, "filters__collapsible-wrapper"], ["type", "button", "data-toggle", "collapse", "data-target", "#demo", 1, "btn", "btn-light", "dropdown-toggle", "filter-options"]],
        template: function CollapsibleFiltersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Filter Options");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-submit-filters");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        directives: [_submit_filters_submit_filters_component__WEBPACK_IMPORTED_MODULE_2__["SubmitFiltersComponent"]],
        styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n\n.filters__item[_ngcontent-%COMP%] {\n  position: relative;\n  text-transform: capitalize;\n  background: #007bff;\n  padding: 10px;\n  border-radius: 5px;\n  max-width: 120px;\n  text-align: center;\n  color: white;\n}\n\n.filters__item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.filters__button-wrapper[_ngcontent-%COMP%] {\n  padding-top: 15px;\n  margin-left: 0;\n}\n\n.filters__collapsible-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.filters__collapsible-wrapper[_ngcontent-%COMP%]   .filters__button-wrapper[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  position: relative !important;\n  top: -59px !important;\n  left: -25px !important;\n  width: 100%;\n}\n\n.card[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  height: auto;\n  width: auto;\n  border-radius: 0.5rem;\n  border-color: #f5f5f5;\n}\n\n.card__body[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 2.8rem 2.6rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ZpbHRlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxXQUFBO0FBREo7O0FBS0k7RUFDSSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUZSOztBQUlRO0VBQ0ksZUFBQTtBQUZaOztBQU9RO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FBTFo7O0FBVVE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFSWjs7QUFVWTtFQUNJLGlCQUFBO0FBUmhCOztBQWtCSTtFQUNJLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFmUjs7QUFtQkE7RUFDSSx5QkF0RGdCO0VBdURoQixZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EscUJBMURnQjtBQTBDcEI7O0FBa0JJO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtBQWhCUiIsImZpbGUiOiJmaWx0ZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNhcmQtaGVhZGVyLWNvbG9yOiAjZjVmNWY1O1xuXG46aG9zdCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5maWx0ZXJzIHtcbiAgICAmX19pdGVtIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgYmFja2dyb3VuZDogIzAwN2JmZjtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBtYXgtd2lkdGg6IDEyMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgICAgICBpIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2J1dHRvbiB7XG4gICAgICAgICYtd3JhcHBlciB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fY29sbGFwc2libGUge1xuICAgICAgICAmLXdyYXBwZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgICAgICAgICAgIC5maWx0ZXJzX19idXR0b24td3JhcHBlciB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5kcm9wZG93bntcbiAgICAmLXRvZ2dsZSB7XG5cbiAgICB9XG4gICAgJi1tZW51IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gICAgICAgIHRvcDogLTU5cHggIWltcG9ydGFudDtcbiAgICAgICAgbGVmdDogLTI1cHggIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG4uY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNhcmQtaGVhZGVyLWNvbG9yO1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcbiAgICBib3JkZXItY29sb3I6ICRjYXJkLWhlYWRlci1jb2xvcjtcblxuICAgICZfX2JvZHkge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHBhZGRpbmc6IDIuOHJlbSAyLjZyZW07XG4gICAgfVxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./core/core.module */
      "pKmL");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./shared/shared.module */
      "PCNd");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _core_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./core/authentication/authentication.component */
      "98eE");
      /* harmony import */


      var _modules_modules_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./modules/modules.component */
      "/9IV");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb");
      /* harmony import */


      var _shared_toast_notifications_toast_notifications_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./shared/toast-notifications/toast-notifications.service */
      "hkff");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /** Angular imports */

      /** Main App Routing */

      /** Reusable modules */

      /** Main App Components */


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
      });
      AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
        providers: [// {
        //   provide: HTTP_INTERCEPTORS,
        //   useClass: Interceptor,
        //   multi: true,
        // },
        _shared_toast_notifications_toast_notifications_service__WEBPACK_IMPORTED_MODULE_10__["ToastNotificationsService"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutes"]), _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _core_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_7__["AuthenticationComponent"], _modules_modules_component__WEBPACK_IMPORTED_MODULE_8__["ModulesComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeModule"]]
        });
      })();
      /***/

    },

    /***/
    "ZNdV":
    /*!************************************************************************!*\
      !*** ./src/app/shared/tables/mytablefilter/mytablefilter.component.ts ***!
      \************************************************************************/

    /*! exports provided: MytablefilterComponent */

    /***/
    function ZNdV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MytablefilterComponent", function () {
        return MytablefilterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ng-multiselect-dropdown */
      "Egam");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var MytablefilterComponent = /*#__PURE__*/function () {
        function MytablefilterComponent() {
          _classCallCheck(this, MytablefilterComponent);

          this.dropdownList = [];
          this.selectedItems = [];
          this.dropdownSettings = {};
          this.onFilterSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(MytablefilterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this23 = this;

            this.filterOptions = this.filterOptions.filter(function (filter) {
              return typeof filter === 'string';
            });
            console.log('THE TABLE FILTER OPTIONS', this.filterOptions);
            this.filterOptions.map(function (filter, ind) {
              var item = {};
              item.item_id = ind;
              item.item_text = "".concat(filter.charAt(0).toUpperCase()).concat(filter.slice(1));

              _this23.dropdownList.push(item);
            });
            this.dropdownSettings = {
              singleSelection: false,
              idField: 'item_id',
              textField: 'item_text',
              selectAllText: 'Select All',
              unSelectAllText: 'UnSelect All',
              itemsShowLimit: 3,
              allowSearchFilter: true
            };
          }
        }, {
          key: "onItemSelect",
          value: function onItemSelect(item) {//console.log(item);
          }
        }, {
          key: "onSelectAll",
          value: function onSelectAll(items) {//console.log(items);
          }
        }, {
          key: "getFilterSelections",
          value: function getFilterSelections() {
            this.onFilterSelect.emit(this.selectedItems);
          }
        }]);

        return MytablefilterComponent;
      }();

      MytablefilterComponent.ɵfac = function MytablefilterComponent_Factory(t) {
        return new (t || MytablefilterComponent)();
      };

      MytablefilterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MytablefilterComponent,
        selectors: [["app-mytablefilter"]],
        inputs: {
          filterOptions: "filterOptions"
        },
        outputs: {
          onFilterSelect: "onFilterSelect"
        },
        decls: 2,
        vars: 4,
        consts: [[1, "table-filter", 3, "placeholder", "settings", "data", "ngModel", "ngModelChange", "onSelect", "onSelectAll"]],
        template: function MytablefilterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-multiselect-dropdown", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MytablefilterComponent_Template_ng_multiselect_dropdown_ngModelChange_0_listener($event) {
              return ctx.selectedItems = $event;
            })("onSelect", function MytablefilterComponent_Template_ng_multiselect_dropdown_onSelect_0_listener($event) {
              return ctx.onItemSelect($event);
            })("onSelectAll", function MytablefilterComponent_Template_ng_multiselect_dropdown_onSelectAll_0_listener($event) {
              return ctx.onSelectAll($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "Filter Records")("settings", ctx.dropdownSettings)("data", ctx.dropdownList)("ngModel", ctx.selectedItems);
          }
        },
        directives: [ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_1__["MultiSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]],
        styles: [".table-filter[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  min-width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL215dGFibGVmaWx0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNKIiwiZmlsZSI6Im15dGFibGVmaWx0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUtZmlsdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWluLXdpZHRoOiAyMDBweDtcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "ZW81":
    /*!*************************************************!*\
      !*** ./src/app/core/auth-guards/auth.guards.ts ***!
      \*************************************************/

    /*! exports provided: AuthGuard */

    /***/
    function ZW81(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/authentication/auth.service */
      "qIOU");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(auth, _route) {
          _classCallCheck(this, AuthGuard);

          this.auth = auth;
          this._route = _route;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            if (this.auth.isLoggedIn()) {
              if (this.auth.hasWebDashboardAccess()) {
                return true;
              } else {
                this._route.navigate(['/signin'], {
                  queryParams: {
                    returnUrl: state.url
                  }
                });

                return false;
              }
            }

            this._route.navigate(['/signin'], {
              queryParams: {
                returnUrl: state.url
              }
            });

            return false;
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      AuthGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "b2RV":
    /*!*********************************************************!*\
      !*** ./src/app/shared/modals/basic/modals.component.ts ***!
      \*********************************************************/

    /*! exports provided: ModalsComponent */

    /***/
    function b2RV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalsComponent", function () {
        return ModalsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ModalsComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalsComponent_div_10_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r1.confirm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.confirmBtnName);
        }
      }

      var _c0 = ["*"];

      var ModalsComponent = /*#__PURE__*/function () {
        function ModalsComponent() {
          _classCallCheck(this, ModalsComponent);

          this.modalId = '';
          this.title = 'Title';
          this.confirmBtnName = 'Confirm';
          this.hasFooter = true;
          this.confirmBtn = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(ModalsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "confirm",
          value: function confirm() {
            console.log('CONFIRM BUTTON CLICKED', true);
            this.confirmBtn.emit(true);
          }
        }]);

        return ModalsComponent;
      }();

      ModalsComponent.ɵfac = function ModalsComponent_Factory(t) {
        return new (t || ModalsComponent)();
      };

      ModalsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ModalsComponent,
        selectors: [["app-modals"]],
        inputs: {
          modalId: "modalId",
          title: "title",
          confirmBtnName: "confirmBtnName",
          hasFooter: "hasFooter"
        },
        outputs: {
          confirmBtn: "confirmBtn"
        },
        ngContentSelectors: _c0,
        decls: 11,
        vars: 3,
        consts: [[1, "modal", "fade", 3, "id"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], ["class", "modal-footer", 4, "ngIf"], [1, "modal-footer"], [1, "confirm__buttons"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", "cancel"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", "confirm", 3, "click"]],
        template: function ModalsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ModalsComponent_div_10_Template, 6, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.modalId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasFooter);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        styles: [".modal-title[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: bold;\n  color: #535252;\n  width: 100%;\n  text-align: center;\n}\n.modal-body[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.modal[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.modal-content[_ngcontent-%COMP%] {\n  border-radius: 0.8rem;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.modal-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n}\n.confirm__buttons[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  padding-top: 2rem;\n  color: #f5f5f5;\n}\n.confirm__buttons[_ngcontent-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  background-color: #E2E2E2;\n  border-color: #E2E2E2;\n  color: #000;\n  font-size: inherit;\n}\n.confirm__buttons[_ngcontent-%COMP%]   .confirm[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n  background-color: #036fb6;\n  color: inherit;\n  border-color: #036fb6;\n  font-size: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21vZGFscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQVI7QUFFSTtFQUNJLGdCQUFBO0FBQVI7QUFFSTtFQUNJLGVBQUE7QUFBUjtBQUVJO0VBQ0kscUJBQUE7QUFBUjtBQUVJO0VBQ0ksdUJBQUE7QUFBUjtBQUNRO0VBQ0ksaUJBQUE7QUFDWjtBQUtJO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFGUjtBQUdRO0VBQ0kseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQURaO0FBR1E7RUFDSSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFEWiIsImZpbGUiOiJtb2RhbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwge1xuICAgICYtdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGNvbG9yOiAjNTM1MjUyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAmLWJvZHkge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cbiAgICAuY2xvc2Uge1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgfVxuICAgICYtY29udGVudCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IC44cmVtO1xuICAgIH1cbiAgICAmLWZvb3RlciB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jb25maXJtIHtcbiAgICAmX19idXR0b25zIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICAgIHBhZGRpbmctdG9wOiAycmVtO1xuICAgICAgICBjb2xvcjogI2Y1ZjVmNTtcbiAgICAgICAgLmNhbmNlbCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTJFMkUyO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjRTJFMkUyO1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbmZpcm0ge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDM2ZmI2O1xuICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICMwMzZmYjY7XG4gICAgICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"]
      });
      /***/
    },

    /***/
    "cuj7":
    /*!*****************************************************!*\
      !*** ./src/app/shared/filters/filters.component.ts ***!
      \*****************************************************/

    /*! exports provided: FiltersComponent */

    /***/
    function cuj7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FiltersComponent", function () {
        return FiltersComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _filters_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./filters.service */
      "WpeU");
      /* harmony import */


      var _selected_filters_selected_filters_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./selected-filters/selected-filters.component */
      "x8/3");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _myform_myform_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./myform/myform.component */
      "LDu/");

      function FiltersComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-myform", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onValidatedData", function FiltersComponent_div_1_Template_app_myform_onValidatedData_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.onValidatedData($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formItems", ctx_r0.formItems)("url", ctx_r0.url)("isValidationOnly", true)("formGroupOrder", ctx_r0.formGroupOrder);
        }
      }

      function FiltersComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-myform", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onValidatedData", function FiltersComponent_div_2_Template_app_myform_onValidatedData_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.onValidatedData($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formItems", ctx_r1.formItems)("url", ctx_r1.url)("isValidationOnly", true)("formGroupOrder", ctx_r1.formGroupOrder);
        }
      }

      var FiltersComponent = /*#__PURE__*/function () {
        function FiltersComponent(fb, _filterService) {
          _classCallCheck(this, FiltersComponent);

          this.fb = fb;
          this._filterService = _filterService;
          this.isInDropdown = true;
          this.url = '';
          this.filterUrl = '';
          this.selectedFilters = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.enableSubmitFilterButton = false;
        }

        _createClass(FiltersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onValidatedData",
          value: function onValidatedData(data) {
            this.selectedFiltersOptions = Object.entries(data).filter(function (filter) {
              return filter[1] !== '' && filter[1] !== null;
            });
          }
        }, {
          key: "searchFilters",
          value: function searchFilters(data) {
            this._filterService.submitSelectedFilters(data, this.filterUrl);
          }
        }]);

        return FiltersComponent;
      }();

      FiltersComponent.ɵfac = function FiltersComponent_Factory(t) {
        return new (t || FiltersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_filters_service__WEBPACK_IMPORTED_MODULE_2__["FiltersService"]));
      };

      FiltersComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FiltersComponent,
        selectors: [["app-filters"]],
        inputs: {
          isInDropdown: "isInDropdown",
          url: "url",
          filterUrl: "filterUrl",
          formItems: "formItems",
          formGroupOrder: "formGroupOrder"
        },
        outputs: {
          selectedFilters: "selectedFilters"
        },
        decls: 3,
        vars: 3,
        consts: [[3, "selectedFiltersOptions", "searchableFilterOptions"], ["class", "dropdown", 4, "ngIf"], ["id", "demo", "class", "collapse", 4, "ngIf"], [1, "dropdown"], [1, "dropdown-menu"], ["submitButtonText", "Item Type", 3, "formItems", "url", "isValidationOnly", "formGroupOrder", "onValidatedData"], ["id", "demo", 1, "collapse"]],
        template: function FiltersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-selected-filters", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("searchableFilterOptions", function FiltersComponent_Template_app_selected_filters_searchableFilterOptions_0_listener($event) {
              return ctx.searchFilters($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FiltersComponent_div_1_Template, 3, 4, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FiltersComponent_div_2_Template, 2, 4, "div", 2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedFiltersOptions", ctx.selectedFiltersOptions);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isInDropdown);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isInDropdown);
          }
        },
        directives: [_selected_filters_selected_filters_component__WEBPACK_IMPORTED_MODULE_3__["SelectedFiltersComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _myform_myform_component__WEBPACK_IMPORTED_MODULE_5__["MyformComponent"]],
        styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n\n.filters__item[_ngcontent-%COMP%] {\n  position: relative;\n  text-transform: capitalize;\n  background: #007bff;\n  padding: 10px;\n  border-radius: 5px;\n  max-width: 120px;\n  text-align: center;\n  color: white;\n}\n\n.filters__item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.filters__button-wrapper[_ngcontent-%COMP%] {\n  padding-top: 15px;\n  margin-left: 0;\n}\n\n.filters__collapsible-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.filters__collapsible-wrapper[_ngcontent-%COMP%]   .filters__button-wrapper[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  position: relative !important;\n  top: -59px !important;\n  left: -25px !important;\n  width: 100%;\n}\n\n.card[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  height: auto;\n  width: auto;\n  border-radius: 0.5rem;\n  border-color: #f5f5f5;\n}\n\n.card__body[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 2.8rem 2.6rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ZpbHRlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxXQUFBO0FBREo7O0FBS0k7RUFDSSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUZSOztBQUlRO0VBQ0ksZUFBQTtBQUZaOztBQU9RO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FBTFo7O0FBVVE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFSWjs7QUFVWTtFQUNJLGlCQUFBO0FBUmhCOztBQWtCSTtFQUNJLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFmUjs7QUFtQkE7RUFDSSx5QkF0RGdCO0VBdURoQixZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EscUJBMURnQjtBQTBDcEI7O0FBa0JJO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtBQWhCUiIsImZpbGUiOiJmaWx0ZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNhcmQtaGVhZGVyLWNvbG9yOiAjZjVmNWY1O1xuXG46aG9zdCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5maWx0ZXJzIHtcbiAgICAmX19pdGVtIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgYmFja2dyb3VuZDogIzAwN2JmZjtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBtYXgtd2lkdGg6IDEyMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgICAgICBpIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2J1dHRvbiB7XG4gICAgICAgICYtd3JhcHBlciB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fY29sbGFwc2libGUge1xuICAgICAgICAmLXdyYXBwZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgICAgICAgICAgIC5maWx0ZXJzX19idXR0b24td3JhcHBlciB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5kcm9wZG93bntcbiAgICAmLXRvZ2dsZSB7XG5cbiAgICB9XG4gICAgJi1tZW51IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gICAgICAgIHRvcDogLTU5cHggIWltcG9ydGFudDtcbiAgICAgICAgbGVmdDogLTI1cHggIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG4uY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNhcmQtaGVhZGVyLWNvbG9yO1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcbiAgICBib3JkZXItY29sb3I6ICRjYXJkLWhlYWRlci1jb2xvcjtcblxuICAgICZfX2JvZHkge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHBhZGRpbmc6IDIuOHJlbSAyLjZyZW07XG4gICAgfVxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "d0zN":
    /*!************************************************!*\
      !*** ./src/app/shared/tables/tables.module.ts ***!
      \************************************************/

    /*! exports provided: TablesModule */

    /***/
    function d0zN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TablesModule", function () {
        return TablesModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng-multiselect-dropdown */
      "Egam");
      /* harmony import */


      var _tables_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tables.component */
      "QE/Q");
      /* harmony import */


      var _mytd_mytd_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./mytd/mytd.component */
      "1Asn");
      /* harmony import */


      var _mycelldisplay_mycelldisplay_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./mycelldisplay/mycelldisplay.component */
      "xLTr");
      /* harmony import */


      var _mypagination_mypagination_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./mypagination/mypagination.component */
      "r+Yu");
      /* harmony import */


      var _mytablefilter_mytablefilter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./mytablefilter/mytablefilter.component */
      "ZNdV");
      /* harmony import */


      var _filters_filters_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../filters/filters.module */
      "lN6X");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TablesModule = function TablesModule() {
        _classCallCheck(this, TablesModule);
      };

      TablesModule.ɵfac = function TablesModule_Factory(t) {
        return new (t || TablesModule)();
      };

      TablesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
        type: TablesModule
      });
      TablesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_2__["NgMultiSelectDropDownModule"], _filters_filters_module__WEBPACK_IMPORTED_MODULE_8__["FiltersModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](TablesModule, {
          declarations: [_tables_component__WEBPACK_IMPORTED_MODULE_3__["TablesComponent"], _mytd_mytd_component__WEBPACK_IMPORTED_MODULE_4__["MytdComponent"], _mypagination_mypagination_component__WEBPACK_IMPORTED_MODULE_6__["MypaginationComponent"], _mycelldisplay_mycelldisplay_component__WEBPACK_IMPORTED_MODULE_5__["MycelldisplayComponent"], _mytablefilter_mytablefilter_component__WEBPACK_IMPORTED_MODULE_7__["MytablefilterComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_2__["NgMultiSelectDropDownModule"], _filters_filters_module__WEBPACK_IMPORTED_MODULE_8__["FiltersModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeModule"]],
          exports: [_tables_component__WEBPACK_IMPORTED_MODULE_3__["TablesComponent"], _mytd_mytd_component__WEBPACK_IMPORTED_MODULE_4__["MytdComponent"], _mypagination_mypagination_component__WEBPACK_IMPORTED_MODULE_6__["MypaginationComponent"], _mycelldisplay_mycelldisplay_component__WEBPACK_IMPORTED_MODULE_5__["MycelldisplayComponent"]]
        });
      })();
      /***/

    },

    /***/
    "hVgn":
    /*!********************************************************************!*\
      !*** ./src/app/shared/filters/myform/myinput/myinput.component.ts ***!
      \********************************************************************/

    /*! exports provided: MyinputComponent */

    /***/
    function hVgn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyinputComponent", function () {
        return MyinputComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services */
      "o0su");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function MyinputComponent_div_4_option_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Fetching ...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MyinputComponent_div_4_option_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Select ", ctx_r7.displayControlName, "");
        }
      }

      function MyinputComponent_div_4_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var opt_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", opt_r9.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", opt_r9.display_name, " ");
        }
      }

      function MyinputComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "select", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MyinputComponent_div_4_option_2_Template, 2, 0, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MyinputComponent_div_4_option_3_Template, 2, 1, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MyinputComponent_div_4_option_4_Template, 2, 2, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx_r0.formControName)("id", ctx_r0.formControName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r0.formControName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.choices);
        }
      }

      function MyinputComponent_div_5_option_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Fetching ...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MyinputComponent_div_5_option_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Select ", ctx_r11.displayControlName, "");
        }
      }

      function MyinputComponent_div_5_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var opt_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", opt_r13.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", opt_r13.display_name, " ");
        }
      }

      function MyinputComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "select", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MyinputComponent_div_5_option_2_Template, 2, 0, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MyinputComponent_div_5_option_3_Template, 2, 1, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MyinputComponent_div_5_option_4_Template, 2, 2, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx_r1.formControName)("id", ctx_r1.formControName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.formControName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.choices);
        }
      }

      function MyinputComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx_r2.formControName)("id", ctx_r2.formControName);
        }
      }

      function MyinputComponent_textarea_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "textarea", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx_r3.formControName)("id", ctx_r3.formControName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r3.formControName);
        }
      }

      function MyinputComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function MyinputComponent_div_8_Template_input_blur_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.sortValidationErrors();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx_r4.formControName)("type", ctx_r4.formControlType)("id", ctx_r4.formControName);
        }
      }

      function MyinputComponent_span_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var error_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r16, " ");
        }
      }

      var MyinputComponent = /*#__PURE__*/function () {
        function MyinputComponent(http) {
          _classCallCheck(this, MyinputComponent);

          this.http = http;
          this.errors = [];
          this.choices = [];
          this.intital = false;
          this.isLoading = false;
        }

        _createClass(MyinputComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {
            var _this24 = this;

            if (this.form && this.formControName && !this.intital) {
              this.intital = true;
              this.formControl.valueChanges.subscribe(function (val) {
                _this24.sortValidationErrors(true);
              }); // Check if its a field 

              if (this.data.type == "field") {
                this.getUrlBasedOptions();
              }

              if (this.data.choices) {
                this.choices = this.data.choices;
              }
            }

            if (this.formControName) {
              this.sortValidationErrors();
            }
          }
        }, {
          key: "showLoader",
          value: function showLoader(status) {
            this.isLoading = status;
          }
        }, {
          key: "getUrlBasedOptions",
          value: function getUrlBasedOptions() {
            var _this25 = this;

            if (!this.data.url) return;
            this.showLoader(true);
            this.http.get(this.data.url).subscribe(function (res) {
              _this25.showLoader(false);

              _this25.choices = res.results.map(function (value) {
                return {
                  "value": value.id,
                  "display_name": value[_this25.data.display_name]
                };
              });
            }, function (error) {
              _this25.showLoader(false);

              var status = error.status;
            });
          }
        }, {
          key: "sortValidationErrors",
          value: function sortValidationErrors() {
            var clearFormError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            this.errors = [];

            if (this.formControl.untouched) {
              return;
            } // Clear the form errors on value changes only


            if (clearFormError) {
              delete this.formErrors[this.formControName];
            } // Normal formControl errors


            if (this.formControl.errors) {
              this.errors = Object.keys(this.formControl.errors);
            } // Check other form control errors from outside(from the backend)


            if (this.formControName in this.formErrors) {
              this.errors = this.errors.concat(this.formErrors[this.formControName]);
            } // If the control is not marked as invalid force it


            if (this.errors.length > 0 && this.formControl.valid) {
              this.formControl.setErrors({
                '': true
              });
            }
          }
        }, {
          key: "formControl",
          get: function get() {
            return this.form.controls[this.formControName];
          }
        }, {
          key: "formControlType",
          get: function get() {
            if (this.data.obscure) {
              return "password";
            }

            switch (this.data.type) {
              case 'integer':
                return "number";

              case 'string':
                if (this.data.max_length && this.data.max_length > 150) {
                  return 'textArea';
                }

                return "text";

              case 'datetime':
                return "date";

              case 'datetime':
                return "date";

              case 'field':
                if (this.data.multiple) {
                  return 'multiplechoice';
                }

                return "choice";

              default:
                return this.data.type;
            }
          }
        }, {
          key: "displayControlName",
          get: function get() {
            return this.data.label;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MyinputComponent;
      }();

      MyinputComponent.ɵfac = function MyinputComponent_Factory(t) {
        return new (t || MyinputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_1__["HttpService"]));
      };

      MyinputComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MyinputComponent,
        selectors: [["app-myinput"]],
        inputs: {
          formControName: "formControName",
          form: "form",
          data: "data",
          formErrors: "formErrors"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 10,
        vars: 9,
        consts: [[1, "form-group", 3, "formGroup"], [1, "form-label", 3, "for"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "form-check form-control-lg", 4, "ngSwitchCase"], ["class", "form-control form-control-lg opt-value", "rows", "5", 3, "formControlName", "id", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["class", "text-danger opt-value", 4, "ngFor", "ngForOf"], [1, "form-control", "form-control-lg", 3, "formControlName", "id"], ["disabled", "", "value", "", "class", "opt-value", 4, "ngIf"], ["class", "opt-value", 3, "value", 4, "ngFor", "ngForOf"], ["disabled", "", "value", "", 1, "opt-value"], [1, "opt-value", 3, "value"], ["multiple", "", 1, "form-control", "form-control-lg", 3, "formControlName", "id"], [1, "form-check", "form-control-lg"], ["type", "checkbox", "value", "", 1, "form-check-input", "opt-value", 3, "formControlName", "id"], ["rows", "5", 1, "form-control", "form-control-lg", "opt-value", 3, "formControlName", "id"], [1, "form-control", "form-control-lg", "opt-value", 3, "formControlName", "type", "id", "blur"], [1, "text-danger", "opt-value"]],
        template: function MyinputComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MyinputComponent_div_4_Template, 5, 6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MyinputComponent_div_5_Template, 5, 6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MyinputComponent_div_6_Template, 2, 2, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MyinputComponent_textarea_7_Template, 2, 3, "textarea", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MyinputComponent_div_8_Template, 2, 3, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MyinputComponent_span_9_Template, 3, 1, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx.formControName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.displayControlName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.formControlType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "choice");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "multiplechoice");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "boolean");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "textArea");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.errors);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]],
        styles: [".ng-invalid[_ngcontent-%COMP%]   .ng-touched[_ngcontent-%COMP%] {\n  border: 0.1em solid red;\n}\n\n.ng-touched[_ngcontent-%COMP%]   .ng-valid[_ngcontent-%COMP%] {\n  border: 0.1em solid green;\n}\n\n.form-label[_ngcontent-%COMP%] {\n  font-family: \"Avenir-Heavy\", Helvetica, Arial, serif;\n  font-size: 14px;\n}\n\n.opt-value[_ngcontent-%COMP%] {\n  font-family: \"Museo-Sans\", Helvetica, Arial, serif;\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL215aW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7QUFDSjs7QUFFQTtFQUNJLG9EQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksa0RBQUE7RUFDQSxlQUFBO0FBQ0oiLCJmaWxlIjoibXlpbnB1dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZy1pbnZhbGlkIC5uZy10b3VjaGVke1xuICAgIGJvcmRlcjogMC4xZW0gc29saWQgcmVkO1xufVxuXG4ubmctdG91Y2hlZCAubmctdmFsaWQge1xuICAgIGJvcmRlcjogMC4xZW0gc29saWQgZ3JlZW47XG59XG5cbi5mb3JtLWxhYmVsIHtcbiAgICBmb250LWZhbWlseTogXCJBdmVuaXItSGVhdnlcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ub3B0LXZhbHVlIHtcbiAgICBmb250LWZhbWlseTogXCJNdXNlby1TYW5zXCIsIEhlbHZldGljYSwgQXJpYWwsIHNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "hkff":
    /*!***************************************************************************!*\
      !*** ./src/app/shared/toast-notifications/toast-notifications.service.ts ***!
      \***************************************************************************/

    /*! exports provided: ToastNotificationsService */

    /***/
    function hkff(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastNotificationsService", function () {
        return ToastNotificationsService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ToastNotificationsService = /*#__PURE__*/function () {
        function ToastNotificationsService() {
          _classCallCheck(this, ToastNotificationsService);

          this.toastData = [];
          this.toasts = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this.toastData);
        }

        _createClass(ToastNotificationsService, [{
          key: "showToast",
          value: function showToast(message, style) {
            var _this26 = this;

            var data = {
              message: message,
              style: style
            };
            this.toastData = [data].concat(_toConsumableArray(this.toastData));
            this.toasts.next(this.toastData);
            setTimeout(function () {
              _this26.toastData.pop();

              _this26.toasts.next(_this26.toastData);
            }, 5000);
          }
        }, {
          key: "removeToast",
          value: function removeToast(index) {
            this.toastData.splice(index, 1);
            this.toasts.next(this.toastData);
          }
        }, {
          key: "getToast",
          value: function getToast() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.toastData);
          }
        }]);

        return ToastNotificationsService;
      }();

      ToastNotificationsService.ɵfac = function ToastNotificationsService_Factory(t) {
        return new (t || ToastNotificationsService)();
      };

      ToastNotificationsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: ToastNotificationsService,
        factory: ToastNotificationsService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "jUvn":
    /*!***********************************************************!*\
      !*** ./src/app/shared/add-button/add-button.component.ts ***!
      \***********************************************************/

    /*! exports provided: AddButtonComponent */

    /***/
    function jUvn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddButtonComponent", function () {
        return AddButtonComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AddButtonComponent = /*#__PURE__*/function () {
        function AddButtonComponent() {
          _classCallCheck(this, AddButtonComponent);

          this['url'] = '';
        }

        _createClass(AddButtonComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AddButtonComponent;
      }();

      AddButtonComponent.ɵfac = function AddButtonComponent_Factory(t) {
        return new (t || AddButtonComponent)();
      };

      AddButtonComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddButtonComponent,
        selectors: [["app-add-button"]],
        inputs: {
          url: "url"
        },
        decls: 4,
        vars: 1,
        consts: [[1, "spark-dynamic-forms__bulk-wrapper"], [1, "", 3, "routerLink"], [1, "btn", "btn", "btn-sm", "lift", "spark-dynamic-forms__bulk-btn"]],
        template: function AddButtonComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Add Record ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.url);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: ["@font-face {\n  font-family: \"Avenir-Heavy\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(\"https://fonts.animaapp.com/Avenir-Heavy\") format(\"truetype\");\n}\n@font-face {\n  font-family: \"Museo-Sans\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(\"https://fonts.animaapp.com/MuseoSans-700\") format(\"opentype\");\n}\n.spark-dynamic-forms__bulk-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 1.5rem;\n}\n.spark-dynamic-forms__bulk-btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: auto;\n  font-weight: bold;\n  line-height: 3.5rem;\n  text-transform: capitalize;\n  vertical-align: middle;\n  text-align: center;\n  padding: 0 1.5rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  letter-spacing: 0;\n  border: 0.2rem solid transparent;\n  border-radius: 0.5rem;\n  background-color: #036fb6;\n  color: #ffffff;\n  opacity: 1;\n  transition-property: border-color, background-color, color, opacity;\n  transition-duration: 0.25s;\n  transition-timing-function: ease-in-out;\n  font-family: sans-serif;\n  font-weight: normal;\n  font-size: 1.6rem;\n  line-height: 2.9rem;\n  cursor: pointer;\n  background-color: #036fb6;\n  border-radius: 0.3rem;\n  color: #f5f5f5;\n  line-height: 44px;\n  text-align: center;\n  font-size: 13px;\n  line-height: 2.25rem;\n  font-family: \"Avenir-Heavy\", Helvetica, Arial, serif;\n}\n.spark-dynamic-forms__bulk-btn[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .spark-dynamic-forms__bulk-btn[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.no-touchevents[_ngcontent-%COMP%]   .spark-dynamic-forms__bulk-btn[_ngcontent-%COMP%]:not([disabled]):not(.disabled):not(.is--disabled):hover {\n  background-color: #676767;\n}\n.spark-dynamic-forms__bulk-btn[disabled][_ngcontent-%COMP%], .spark-dynamic-forms__bulk-btn.disabled[_ngcontent-%COMP%], .spark-dynamic-forms__bulk-btn.is--disabled[_ngcontent-%COMP%] {\n  opacity: 0.35;\n  cursor: default;\n}\n.spark-dynamic-forms__bulk-btn.lift[_ngcontent-%COMP%] {\n  transition: box-shadow 0.25s ease, transform 0.25s ease;\n}\n.spark-dynamic-forms__bulk-btn.lift[_ngcontent-%COMP%]:focus, .spark-dynamic-forms__bulk-btn.lift[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 1rem 2.5rem rgba(18, 38, 63, 0.1), 0 0.5rem 1rem -0.75rem rgba(18, 38, 63, 0.1) !important;\n  transform: translate3d(0, -3px, 0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fdmFycy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzL19zZXR0aW5ncy5zY3NzIiwiLi4vLi4vLi4vLi4vYWRkLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9taXhpbnMvX2J1dHRvbi5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzL21peGlucy9fdHlwb2dyYXBoeS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhCQUFBO0FBQ0EsOEJBQUE7QUFDQSw4QkFBQTtBQTBCQSwyQkFBQTtBQUVBLHlCQUFBO0FDR0E7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzRUFBQTtBQzNCRjtBRDhCQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVFQUFBO0FDNUJGO0FBVFE7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQVdaO0FBVFE7RUNYSixxQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkhLa0I7RUdKbEIsY0hGVTtFR0dWLFVBQUE7RUFDQSxtRUFBQTtFQUNBLDBCQUFBO0VBQ0EsdUNBQUE7RUNuQkEsdUJBQUE7RUEwSUksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VEdEhKLGVBQUE7RUFzQkUseUJIekJnQjtFRzhCaEIscUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUR0Q00sb0JBQUE7RUFDQSxvREFBQTtBQXVDWjtBRXdGWTtFQUNJLGlCQUFBO0FGdEZoQjtBQ25DSTtFQUNGLHlCQUFBO0FEcUNGO0FDbENJO0VBR0YsYUFBQTtFQUNNLGVBQUE7QURrQ1I7QUMvQkk7RUFDRSx1REFBQTtBRGlDTjtBQ2hDTTtFQUVFLHdHQUFBO0VBQ0Esa0NBQUE7QURpQ1IiLCJmaWxlIjoiYWRkLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqIGNvbG9ycyAqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuJGNvbG9yX2JhY2tncm91bmQ6ICNmZmZmZmY7XG4kY29sb3ItYmFja2dyb3VuZC1jYXJkOiAjZmZmZmZmO1xuJGNvbG9yX2JhY2tncm91bmQtaW5wdXRzOiAjZmZmZmZmO1xuJGNvbG9yX3RvcGJhcjogI2ZmZmZmZjtcbiRjb2xvcl9idXR0b25zOiAjNGQ0ZDRkO1xuJGNvbG9yX3ByaW1hcnk6ICMwMzZGQjY7XG4kY29sb3Jfc2Vjb25kYXJ5OiAjZTU3YzJjO1xuJGNvbG9yX3RlcnRpYXJ5OiAjMTIyNjNmO1xuJGNvbG9yX3dhcm5pbmc6ICNlNjM3NTc7XG4kY29sb3Jfc3VjY2VzczogIzAwNzcwMDtcbiRjb2xvcl93aGl0ZTogI2ZmZmZmZjtcbiRjb2xvcl9ibGFjazogIzAwMDtcbiRjb2xvcl9saWdodGdyZXk6IHJnYmEoJGNvbG9yX3doaXRlLCAwLjUpO1xuJGNvbG9yX2xpZ2h0ZXJncmV5OiByZ2JhKCRjb2xvcl93aGl0ZSwgMC4yNSk7XG4kY29sb3JfZm9ybXNfYm9yZGVyOiAjNzA3MDcwO1xuJGNvbG9yX2Zvcm1fcGxhY2Vob2xkZXI6ICNiMWMyZDk7XG4kY29sb3JfbGlua3NfYnV0dG9uczogIzAzNmZiNjtcbiRjb2xvcl9zdWJzdWJ0aXRsZTogIzdlN2U3ZTtcbiRjb2xvcl90aXRsZTogIzUzNTI1MjtcbiRjb2xvcl9zdWJ0aXRsZTogI0IyQjFCMTtcbiRjb2xvcl9uYXZiYXJfYmFja2dyb3VuZDogJGNvbG9yX2JhY2tncm91bmQ7XG4kY29sb3JfbmF2YmFyX2JvcmRlcjogI2E5YThhODtcblxuJGNvbG9yX3RpdGxlX2RlZmF1bHQ6ICM1MzUyNTI7XG4vKiBBZGQgcmV1c2FibGUgYW5pbWF0aW9ucyovXG5cbi8qIEFjY29tb2RhdGUgaXBob25lIDExKyovXG4kaXBob25lLXNhZmVzcGFjZTogcmVtLWNhbGMoNDQpO1xuJGNvbW1vbkd1dHRlcjogM3JlbTtcbiIsIi8vICBGb3VuZGF0aW9uIGZvciBTaXRlcyBTZXR0aW5nc1xuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIFRhYmxlIG9mIENvbnRlbnRzOlxuLy9cbi8vICAgMS4gR2xvYmFsXG4vLyAgIDIuIEJyZWFrcG9pbnRzXG4vLyAgIDMuIENhcmRcbi8vICAgNC4gUHJvZ3Jlc3MgYmFyXG4vLyAgIDUuIEZvb3RlclxuLy8gICA2LiBIZWFkZXJcblxuLy8gMS4gR2xvYmFsXG4vLyAtLS0tLS0tLS1cblxuJGdsb2JhbC1mb250LXNpemU6IDYyLjUlO1xuXG4kZ2xvYmFsLXBhZ2Utd2lkdGg6IHJlbS1jYWxjKDE4MTgpO1xuJGdsb2JhbC1jb250ZW50LXdpZHRoOiByZW0tY2FsYygxNDAwKTtcbiRnbG9iYWwtbGluZWhlaWdodDogMS41O1xuJGJvZHktYmFja2dyb3VuZDogJGNvbG9yX3doaXRlO1xuJGJvZHktZm9udC1jb2xvcjogJGNvbG9yX2JsYWNrO1xuJGJvZHktZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgUm9ib3RvLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiRib2R5LWFudGlhbGlhc2VkOiB0cnVlO1xuJGdsb2JhbC1tYXJnaW46IDFyZW07XG4kZ2xvYmFsLXBhZGRpbmc6IDFyZW07XG4kZ2xvYmFsLXBvc2l0aW9uOiAxcmVtO1xuJGdsb2JhbC13ZWlnaHQtbm9ybWFsOiBub3JtYWw7XG4kZ2xvYmFsLXdlaWdodC1ib2xkOiBib2xkO1xuJGdsb2JhbC1yYWRpdXM6IDA7XG4kZ2xvYmFsLXRleHQtZGlyZWN0aW9uOiBsdHI7XG4kcHJpbWFyeS1jb2xvcjogJGNvbG9yX3ByaW1hcnk7XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBdmVuaXItSGVhdnlcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybChcImh0dHBzOi8vZm9udHMuYW5pbWFhcHAuY29tL0F2ZW5pci1IZWF2eVwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk11c2VvLVNhbnNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybChcImh0dHBzOi8vZm9udHMuYW5pbWFhcHAuY29tL011c2VvU2Fucy03MDBcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XG59XG5cblxuLy8gMi4gQnJlYWtwb2ludHNcbi8vIC0tLS0tLS0tLS0tLS0tXG5cbiRicmVha3BvaW50czogKFxuICBzbWFsbDogMCxcbiAgc3VwZXJtaW5pOiA0MDBweCxcbiAgbWluaTogNDgwcHgsXG4gIG1lZGl1bTogNjQwcHgsXG4gIHRhYmxldDogNzYwcHgsXG4gIG1lZC1sYXJnZTogOTYwcHgsXG4gIGxhcmdlOiAxMDI0cHgsXG4gIHhsYXJnZTogMTI4MHB4LFxuICB4eGxhcmdlOiAxNTQwcHgsXG4gIHh4eGxhcmdlOiAxOTIwcHgsXG4gIHh4eHhsYXJnZTogMjU2MHB4LFxuKTtcbiRwcmludC1icmVha3BvaW50OiBsYXJnZTtcbiRicmVha3BvaW50LWNsYXNzZXM6IChzbWFsbCBtZWRpdW0gbGFyZ2UpO1xuXG4vLyAzLiBDYXJkXG4vLyAtLS0tLS0tLVxuXG4kY2FyZC1iYWNrZ3JvdW5kOiAkY29sb3Jfd2hpdGU7XG4kY2FyZC1mb250LWNvbG9yOiAkYm9keS1mb250LWNvbG9yO1xuJGNhcmQtZGl2aWRlci1iYWNrZ3JvdW5kOiAkY29sb3JfbGlnaHRncmV5O1xuJGNhcmQtYm9yZGVyOiAxcHggc29saWQgJGNvbG9yX2xpZ2h0Z3JleTtcbiRjYXJkLXNoYWRvdzogbm9uZTtcbiRjYXJkLWJvcmRlci1yYWRpdXM6ICRnbG9iYWwtcmFkaXVzO1xuJGNhcmQtcGFkZGluZzogJGdsb2JhbC1wYWRkaW5nO1xuJGNhcmQtbWFyZ2luLWJvdHRvbTogJGdsb2JhbC1tYXJnaW47XG5cbi8vIDQuIFByb2dyZXNzIEJhclxuLy8gLS0tLS0tLS0tLS0tLS0tLVxuXG4kcHJvZ3Jlc3MtaGVpZ2h0OiAxcmVtO1xuJHByb2dyZXNzLWJhY2tncm91bmQ6ICRjb2xvcl9saWdodGVyZ3JleTtcbiRwcm9ncmVzcy1tYXJnaW4tYm90dG9tOiAkZ2xvYmFsLW1hcmdpbjtcbiRwcm9ncmVzcy1tZXRlci1iYWNrZ3JvdW5kOiAkcHJpbWFyeS1jb2xvcjtcbiRwcm9ncmVzcy1yYWRpdXM6ICRnbG9iYWwtcmFkaXVzO1xuXG4vLyA1LiBGb290ZXJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tXG4kZm9vdGVyLWhlaWdodDogNXJlbTtcblxuLy82LiBOYXZiYXJcbiRuYXZiYXJfaGVpZ2h0OiA4LjRyZW07XG4kbmF2YmFyX2JveF9zaGFkb3c6IDAgLjNyZW0gLjZyZW0gcmdiYSgkY29sb3JfYmxhY2ssIC4yOSk7XG5cbiIsIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMvbWl4aW5zL2J1dHRvblwiO1xuQGltcG9ydCBcIi4uLy4uL3N0eWxlcy92YXJzXCI7XG5AaW1wb3J0IFwiLi4vLi4vc3R5bGVzL21peGlucy90eXBvZ3JhcGh5XCI7XG5AaW1wb3J0IFwiLi4vLi4vc3R5bGVzL3NldHRpbmdzXCI7XG5cbi5zcGFyay1keW5hbWljLWZvcm1zIHsgXG4gICAgJl9fYnVsayB7XG4gICAgICAgICYtd3JhcHBlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICAmLWJ0biB7XG4gICAgICAgICAgICAvLyB0b2RvOiBjaGFuZ2UgdGhlIGZvbnQgdG8gcmVhZCBhcyBhIHZhcmlhYmxlIGZvciBlYXNlIG9mIG1haW50ZW5hbmNlXG4gICAgICAgICAgICAvLyB0b2RvOiBjaGFuZ2UgYWxsIHByaW1hcnkgY29sb3IgYnV0dG9ucyB0byBiZSBvZiB0aGUgc2FtZSBzaXplIChlYXNlIG9mIG1haW50ZW5hbmNlKVxuICAgICAgICAgICAgQGluY2x1ZGUgYnV0dG9uKCRjb2xvcjpwcmltYXJ5LCAkc2l6ZTogc21hbGwpO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIuMjVyZW07XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJBdmVuaXItSGVhdnlcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2VyaWY7XG4gICAgICAgIH1cbiAgICB9XG59IiwiQG1peGluIGJ1dHRvbigkc2l6ZTpudWxsLCAkY29sb3I6bnVsbCwgJG91dGxpbmU6bnVsbCkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogYXV0bztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBsaW5lLWhlaWdodDogMy41cmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAgMS41cmVtO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICBib3JkZXI6IC4ycmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcl9saW5rc19idXR0b25zO1xuICAgIGNvbG9yOiAkY29sb3Jfd2hpdGU7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3JkZXItY29sb3IsICBiYWNrZ3JvdW5kLWNvbG9yLCBjb2xvciwgb3BhY2l0eTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjI1cztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgQGluY2x1ZGUgdHlwb2dyYXBoeTtcblxuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAubm8tdG91Y2hldmVudHMgJjpub3QoW2Rpc2FibGVkXSk6bm90KC5kaXNhYmxlZCk6bm90KC5pcy0tZGlzYWJsZWQpOmhvdmVyIC8qLCAmOmZvY3VzICovIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCAkY29sb3JfYnV0dG9ucywgMTAlKTtcbiAgICB9XG5cbiAgICAmW2Rpc2FibGVkXSxcbiAgICAmLmRpc2FibGVkLFxuICAgICYuaXMtLWRpc2FibGVkIHtcblx0XHRvcGFjaXR5IDogLjM1O1xuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgfVxuXG4gICAgJi5saWZ0IHtcbiAgICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4yNXMgZWFzZSwgdHJhbnNmb3JtIDAuMjVzIGVhc2U7XG4gICAgICAmOmZvY3VzLFxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMXJlbSAyLjVyZW0gcmdiYSgxOCwgMzgsIDYzLCAwLjEpLCAwIDAuNXJlbSAxcmVtIC0wLjc1cmVtIHJnYmEoMTgsIDM4LCA2MywgMC4xKSAhaW1wb3J0YW50O1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0zcHgsIDApO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBpZiAkY29sb3IgPT0gcHJpbWFyeSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JfbGlua3NfYnV0dG9ucztcbiAgICB9IEBlbHNlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3OTc5Nzk7XG4gICAgfVxuICAgIEBpZiAkc2l6ZSA9PSBzbWFsbCB7XG4gICAgICBib3JkZXItcmFkaXVzOiAuM3JlbTtcbiAgICAgIGNvbG9yOiAjZjVmNWY1O1xuICAgICAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgfSBcblxufSIsIkBtaXhpbiB0eXBvZ3JhcGh5KCRmb3JtYXQ6IGJvZHksICR3ZWlnaHQ6IG51bGwsICRjb2xvcjpudWxsLCAkZm9udHNpemU6IG51bGwsICRsaW5laGVpZ2h0OiBudWxsLCAkbWF4bGluZXM6MCApIHtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICBAaWYgJG1heGxpbmVzID4gMCB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6ICRtYXhsaW5lcztcbiAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICB9XG5cbiAgICBAaWYgJGZvcm1hdCA9PSAgaDEge1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LXNpemU6IDYuNHJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDYuNnJlbTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgICAgIFxuICAgICAgICBAaWYgJHdlaWdodCAhPSBib2xkIGFuZCAkd2VpZ2h0ICE9IHN0cm9uZyB7XG4gICAgICAgICAgICBzdHJvbmcsIGIge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBpZiAkbWF4bGluZXMgPiAwIHtcblx0XHRcdG1heC1oZWlnaHQ6IDhyZW0gKiAkbWF4bGluZXM7XG5cdFx0fVxuICAgIH0gQGVsc2UgaWYgJGZvcm1hdCA9PSBoMiB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDQuOHJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQuOHJlbTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICAgICAgICBAaWYgJHdlaWdodCAhPSBib2xkIGFuZCAkd2VpZ2h0ICE9IHN0cm9uZyB7XG4gICAgICAgICAgICBzdHJvbmcsIGIge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblx0XHRAaWYgJG1heGxpbmVzID4gMCB7XG5cdFx0XHRtYXgtaGVpZ2h0OiA0LjhyZW0gKiAkbWF4bGluZXM7XG5cdFx0fVxuICAgIH0gQGVsc2UgaWYgJGZvcm1hdCA9PSBoMyB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgIGZvbnQtc2l6ZTogNC44cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogNS40cmVtO1xuXG4gICAgICAgIEBpZiAkd2VpZ2h0ICE9IGJvbGQgYW5kICR3ZWlnaHQgIT0gc3Ryb25nIHtcbiAgICAgICAgICAgIHN0cm9uZywgYiB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXHRcdEBpZiAkbWF4bGluZXMgPiAwIHtcblx0XHRcdG1heC1oZWlnaHQ6IDQuOHJlbSAqICRtYXhsaW5lcztcblx0XHR9XG4gICAgfSBAZWxzZSBpZiAkZm9ybWF0ID09IGg0IHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogNC40cmVtO1xuXG4gICAgICAgIEBpZiAkd2VpZ2h0ICE9IGJvbGQgYW5kICR3ZWlnaHQgIT0gc3Ryb25nIHtcbiAgICAgICAgICAgIHN0cm9uZywgYiB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXHRcdEBpZiAkbWF4bGluZXMgPiAwIHtcblx0XHRcdG1heC1oZWlnaHQ6IDQuNHJlbSAqICRtYXhsaW5lcztcblx0XHR9XG4gICAgfSBAZWxzZSBpZiAkZm9ybWF0ID09IGg1IHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyLjVyZW07XG5cbiAgICAgICAgQGlmICR3ZWlnaHQgIT0gYm9sZCBhbmQgJHdlaWdodCAhPSBzdHJvbmcge1xuICAgICAgICAgICAgc3Ryb25nLCBiIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cdFx0QGlmICRtYXhsaW5lcyA+IDAge1xuXHRcdFx0bWF4LWhlaWdodDogMS44cmVtICogJG1heGxpbmVzO1xuXHRcdH1cbiAgICB9IEBlbHNlIGlmICRmb3JtYXQgPT0gaDYge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjRyZW07XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgICAgICAgQGlmICR3ZWlnaHQgIT0gYm9sZCBhbmQgJHdlaWdodCAhPSBzdHJvbmcge1xuICAgICAgICAgICAgc3Ryb25nLCBiIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cdFx0QGlmICRtYXhsaW5lcyA+IDAge1xuXHRcdFx0bWF4LWhlaWdodDogMS40cmVtICogJG1heGxpbmVzO1xuXHRcdH1cbiAgICB9IEBlbHNlIGlmICRmb3JtYXQgPT0gc21hbGwge1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIuM3JlbTtcblxuICAgICAgICBAaWYgJHdlaWdodCAhPSBib2xkIGFuZCAkd2VpZ2h0ICE9IHN0cm9uZyB7XG4gICAgICAgICAgICBzdHJvbmcsIGIge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblx0XHRAaWYgJG1heGxpbmVzID4gMCB7XG5cdFx0XHRtYXgtaGVpZ2h0OiAyLjNyZW0gKiAkbWF4bGluZXM7XG5cdFx0fVxuICAgIH0gQGVsc2UgaWYgJGZvcm1hdCA9PSB2ZXJ5c21hbGwge1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG5cbiAgICAgICAgQGlmICR3ZWlnaHQgIT0gYm9sZCBhbmQgJHdlaWdodCAhPSBzdHJvbmcge1xuICAgICAgICAgICAgc3Ryb25nLCBiIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cdFx0QGlmICRtYXhsaW5lcyA+IDAge1xuXHRcdFx0bWF4LWhlaWdodDogMS4ycmVtICogJG1heGxpbmVzO1xuXHRcdH1cbiAgICB9IEBlbHNlIGlmICRmb3JtYXQgPT0gdmVyeXZlcnlzbWFsbCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG5cbiAgICAgICAgQGlmICR3ZWlnaHQgIT0gYm9sZCBhbmQgJHdlaWdodCAhPSBzdHJvbmcge1xuICAgICAgICAgICAgc3Ryb25nLCBiIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cdFx0QGlmICRtYXhsaW5lcyA+IDAge1xuXHRcdFx0bWF4LWhlaWdodDogMXJlbSAqICRtYXhsaW5lcztcblx0XHR9XG4gICAgfSBAZWxzZSAge1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIuOXJlbTtcblxuICAgICAgICBAaWYgJHdlaWdodCAhPSBib2xkIGFuZCAkd2VpZ2h0ICE9IHN0cm9uZyB7XG4gICAgICAgICAgICBzdHJvbmcsIGIge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblx0XHRAaWYgJG1heGxpbmVzID4gMCB7XG5cdFx0XHRtYXgtaGVpZ2h0OiAyLjZyZW0gKiAkbWF4bGluZXM7XG5cdFx0fVxuICAgIH1cblxuICAgIEBpZiAkd2VpZ2h0ID09IGJvbGQgb3IgJHdlaWdodCA9PSBzdHJvbmcge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9IEBlbHNlIGlmICR3ZWlnaHQgPT0gYm9sZCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH0gQGVsc2UgaWYgJHdlaWdodCA9PSBub3JtYWwge1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIH1cblxuICAgIEBpZiAkY29sb3Ige1xuICAgICAgICBjb2xvcjogJGNvbG9yO1xuICAgIH1cblxuICAgIEBpZiAkZm9udHNpemUge1xuICAgICAgICBmb250LXNpemU6ICRmb250c2l6ZTtcbiAgICB9XG5cbiAgICBAaWYgJGxpbmVoZWlnaHQge1xuICAgICAgICBsaW5lLWhlaWdodDogJGxpbmVoZWlnaHQ7XG4gICAgfVxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "l91v":
    /*!*******************************************************!*\
      !*** ./src/app/services/http/http-service.service.ts ***!
      \*******************************************************/

    /*! exports provided: HttpService */

    /***/
    function l91v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpService", function () {
        return HttpService;
      });
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var clientId = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].APIClientID;
      var endpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].APIEndpoint;
      var endpointV1 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].APIv1Endpoint;

      var HttpService = /*#__PURE__*/function () {
        function HttpService(_httpClient) {
          _classCallCheck(this, HttpService);

          this._httpClient = _httpClient;
        }

        _createClass(HttpService, [{
          key: "get",
          value: function get(url) {
            return this._httpClient.get("".concat(endpointV1).concat(url));
          }
        }, {
          key: "delete",
          value: function _delete(url) {
            return this._httpClient["delete"]("".concat(endpointV1).concat(url));
          }
        }, {
          key: "post",
          value: function post(url, formData) {
            return this._httpClient.post("".concat(endpointV1).concat(url), formData);
          }
        }, {
          key: "patch",
          value: function patch(url, formData) {
            return this._httpClient.patch("".concat(endpointV1).concat(url), formData);
          }
        }]);

        return HttpService;
      }();

      HttpService.ɵfac = function HttpService_Factory(t) {
        return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      HttpService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: HttpService,
        factory: HttpService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "l9h7":
    /*!***************************************************!*\
      !*** ./src/app/shared/myform/myform.component.ts ***!
      \***************************************************/

    /*! exports provided: MyformComponent */

    /***/
    function l9h7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyformComponent", function () {
        return MyformComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services */
      "o0su");
      /* harmony import */


      var src_app_services_forms_form_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/forms/form-item.service */
      "L4dG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _modals_basic_modals_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../modals/basic/modals.component */
      "b2RV");
      /* harmony import */


      var _card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../card/card.component */
      "Fe25");
      /* harmony import */


      var _myinput_myinput_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./myinput/myinput.component */
      "qNYV");
      /* harmony import */


      var _card_card_dropdown_card_dropdown_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../card/card-dropdown/card-dropdown.component */
      "68i6"); // import { MY_EXAMPLE_OPTIONS_DATA } from './myfields';
      // import { MyInputModel, InputType } from './myinput/model';


      function MyformComponent_app_card_14_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var error_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r5, " ");
        }
      }

      function MyformComponent_app_card_14_div_3_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-myinput", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var field_r9 = ctx.$implicit;

          var item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("col-sm-", 12 / item_r6.length, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControName", field_r9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formErrors", ctx_r8.formErrors)("data", ctx_r8.getDescriptionObject(field_r9))("form", ctx_r8.formGroup);
        }
      }

      function MyformComponent_app_card_14_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MyformComponent_app_card_14_div_3_div_2_Template, 2, 7, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r6);
        }
      }

      function MyformComponent_app_card_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-card", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MyformComponent_app_card_14_span_1_Template, 3, 1, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MyformComponent_app_card_14_div_3_Template, 3, 1, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r0.formAction + " " + ctx_r0.cardTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.detailErrors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.formGroupOrder);
        }
      }

      function MyformComponent_app_card_dropdown_15_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var error_r14 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r14, " ");
        }
      }

      function MyformComponent_app_card_dropdown_15_div_3_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-myinput", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var field_r18 = ctx.$implicit;

          var item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("col-sm-", 12 / item_r15.length, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControName", field_r18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formErrors", ctx_r17.formErrors)("data", ctx_r17.getDescriptionObject(field_r18))("form", ctx_r17.formGroup);
        }
      }

      function MyformComponent_app_card_dropdown_15_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MyformComponent_app_card_dropdown_15_div_3_div_2_Template, 2, 7, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r15);
        }
      }

      function MyformComponent_app_card_dropdown_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-card-dropdown", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MyformComponent_app_card_dropdown_15_span_1_Template, 3, 1, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MyformComponent_app_card_dropdown_15_div_3_Template, 3, 1, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabbedItems", ctx_r1.tabbedItems)("tabbed", ctx_r1.tabbed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.detailErrors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.formGroupOrder);
        }
      }

      function MyformComponent_button_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyformComponent_button_17_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r21.resetForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Clear");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "has--loading": a0
        };
      };

      var MyformComponent = /*#__PURE__*/function () {
        function MyformComponent(fb, http, _formService, _location) {
          _classCallCheck(this, MyformComponent);

          this.fb = fb;
          this.http = http;
          this._formService = _formService;
          this._location = _location;
          this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
          this.submitButtonText = "Post";
          this.extraParams = {};
          this.onValidatedData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.onPostedData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.isLoading$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.isValidationOnly = false;
          this.tabbedItems = [];
          this.tabbed = false;
          this.url = "";
          this.instanceChanged = false;
          this.isNew = true;
          this.loading = false;
          this.cardTitle = 'Form Title';
          this.initial = false;
          this.formErrors = {};
          this.detailErrors = [];
          this.isLoading = false;
        }

        _createClass(MyformComponent, [{
          key: "instance",
          get: function get() {
            return this._instance;
          },
          set: function set(value) {
            this._instance = value;
            this.instanceChanged = true;
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            if (this.formGroupOrder && !this.initial) {
              this.initial = false;
              var fields = this.formItems.actions.POST;
              var possibleFields = this.formGroupOrder.reduce(function (acc, val) {
                return acc.concat(val);
              }, []); // console.log(possibleFields)
              // console.log(fields)

              for (var key in fields) {
                var field = fields[key];

                if (field.read_only || !possibleFields.includes(key)) {
                  continue;
                }

                var defaultField = field.type == "boolean" ? false : "";
                this.formGroup.addControl(key, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](defaultField, []));
                var fieldcontrol = this.formGroup.controls[key];
                var validators = [];

                if (field.required) {
                  validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
                }

                if (field.max_length) {
                  validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(field.max_length));
                }

                if (validators.length > 0) {
                  fieldcontrol.setValidators(validators);
                }
              }
            }

            this.checkInstanceChangesUpdateForm();
          }
        }, {
          key: "mapAllTheMultifieldEditSourceFields",
          value: function mapAllTheMultifieldEditSourceFields() {
            var instance = Object.assign({}, this.instance); // this.instance

            if ("POST" in this.formItems.actions) {
              var fields = this.formItems.actions.POST;

              for (var key in fields) {
                var field = fields[key];
                var type = field.type;

                if (type == "multifield") {
                  if ("edit_source_field" in field) {
                    var editSource = field.edit_source_field;
                    instance[key] = instance[editSource];
                  }
                }
              }
            }

            return instance;
          }
        }, {
          key: "checkInstanceChangesUpdateForm",
          value: function checkInstanceChangesUpdateForm() {
            if (this.instanceChanged) {
              this.instanceChanged = false;

              if (this.instance) {
                var inst = this.mapAllTheMultifieldEditSourceFields();
                this.formGroup.patchValue(inst);
                this.isNew = this.instance.id == null;
                this.formGroup.markAllAsTouched();
              }
            }
          }
        }, {
          key: "getDescriptionObject",
          value: function getDescriptionObject(formControlName) {
            return this.formItems.actions.POST[formControlName];
          }
        }, {
          key: "getFieldNameErros",
          value: function getFieldNameErros(formControlName) {
            return this.formErrors[formControlName];
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "showLoader",
          value: function showLoader(status) {
            this.isLoading = status;
            this.isLoading$.emit(status);
          }
        }, {
          key: "dataReceived",
          value: function dataReceived() {
            this.detailErrors = [];

            if (this.formGroup.valid) {
              var data = Object.assign(Object.assign({}, this.formGroup.value), this.extraParams);

              if (this.isValidationOnly) {
                this.onValidatedData.emit(data);
              } else {
                this.sendDataHttp(data);
              }
            } else {}
          }
        }, {
          key: "myFormValid",
          get: function get() {
            return this.formGroup.valid;
          }
        }, {
          key: "formAction",
          get: function get() {
            return this.isNew ? 'Add' : 'Update';
          }
        }, {
          key: "sendDataHttp",
          value: function sendDataHttp(data) {
            var _this27 = this;

            this.showLoader(true);
            this.formErrors = [];
            var post_data = {
              url: this.isNew ? this.url : "".concat(this.url).concat(this.instance.id),
              formData: data
            };

            this._formService.postForm(this.isNew, post_data).subscribe(function (res) {
              _this27.onPostedData.emit(res);

              _this27.showLoader(false);

              if (_this27.isNew) {
                _this27.resetForm();
              }

              setTimeout(function () {
                _this27._location.back();
              }, 1000);
            }, function (error) {
              _this27.showLoader(false);

              var status = error.status;

              if (status == 401) {
                _this27.detailErrors.push("Login required.");
              } else if (status == 400) {
                var formErrors = error.error;

                if ("detial" in formErrors) {
                  _this27.detailErrors.push(formErrors.detial);
                }

                _this27.formErrors = formErrors;
              }
            });
          }
        }, {
          key: "getControl",
          value: function getControl(name) {
            return this.formGroup.get(name) || new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
          }
        }, {
          key: "resetForm",
          value: function resetForm() {
            this.formGroup.reset();
          }
        }, {
          key: "bulkOptions",
          value: function bulkOptions() {}
        }]);

        return MyformComponent;
      }();

      MyformComponent.ɵfac = function MyformComponent_Factory(t) {
        return new (t || MyformComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_2__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_forms_form_item_service__WEBPACK_IMPORTED_MODULE_3__["FormItemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]));
      };

      MyformComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MyformComponent,
        selectors: [["app-myform"]],
        inputs: {
          formGroup: "formGroup",
          submitButtonText: "submitButtonText",
          formItems: "formItems",
          extraParams: "extraParams",
          isValidationOnly: "isValidationOnly",
          tabbedItems: "tabbedItems",
          tabbed: "tabbed",
          url: "url",
          instance: "instance",
          formGroupOrder: "formGroupOrder",
          loading: "loading",
          cardTitle: "cardTitle"
        },
        outputs: {
          onValidatedData: "onValidatedData",
          onPostedData: "onPostedData",
          isLoading$: "isLoading$"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 21,
        vars: 12,
        consts: [[1, "container"], [1, "spark-dynamic-forms__bulk-wrapper"], ["type", "button", "data-toggle", "modal", "data-target", "#bulkModal", 1, "btn", "btn", "btn-sm", "mb-3", "lift", "spark-dynamic-forms__bulk-btn"], [3, "title", "hasFooter", "modalId"], [1, "bulk__wrapper"], [1, "bulk__content"], [1, "bulk__button-wrapper"], [1, "btn", "btn", "btn-sm", "mb-3", "spark-dynamic-forms__bulk-btn"], [1, "btn", "btn", "btn-sm", "mb-3", "spark-dynamic-forms__bulk-btn-upload", 3, "click"], [1, "", 3, "formGroup", "ngSubmit"], [3, "title", 4, "ngIf"], [3, "tabbedItems", "tabbed", 4, "ngIf"], [1, "spark-dynamic-forms__button-wrapper"], ["type", "button", "class", "btn btn btn-sm mb-3 lift spark-dynamic-forms__clear", 3, "click", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", "mb-3", "lift", "spark-dynamic-forms__submit", 3, "disabled"], [1, "spark-text", "has--loading", 3, "ngClass"], [3, "title"], ["class", "text-danger", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "text-danger"], [1, "row"], [3, "class", 4, "ngFor", "ngForOf"], [3, "formErrors", "data", "form", "formControName"], [3, "tabbedItems", "tabbed"], ["type", "button", 1, "btn", "btn", "btn-sm", "mb-3", "lift", "spark-dynamic-forms__clear", 3, "click"]],
        template: function MyformComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Bulk Actions ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-modals", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Excel/ CSV are the only acceptable formats ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Download Template ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyformComponent_Template_button_click_11_listener() {
              return ctx.bulkOptions();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Upload File ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function MyformComponent_Template_form_ngSubmit_13_listener() {
              return ctx.dataReceived();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MyformComponent_app_card_14_Template, 5, 3, "app-card", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MyformComponent_app_card_dropdown_15_Template, 5, 4, "app-card-dropdown", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MyformComponent_button_17_Template, 2, 0, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.cardTitle + " Bulk Create")("hasFooter", false)("modalId", "bulkModal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.tabbed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tabbed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isNew);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.formGroup.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.loading));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.isLoading ? "Loading..." : ctx.formAction + " " + ctx.submitButtonText, " ");
          }
        },
        directives: [_modals_basic_modals_component__WEBPACK_IMPORTED_MODULE_5__["ModalsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _myinput_myinput_component__WEBPACK_IMPORTED_MODULE_7__["MyinputComponent"], _card_card_dropdown_card_dropdown_component__WEBPACK_IMPORTED_MODULE_8__["CardDropdownComponent"]],
        styles: ["@font-face {\n  font-family: \"Avenir-Heavy\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(\"https://fonts.animaapp.com/Avenir-Heavy\") format(\"truetype\");\n}\n@font-face {\n  font-family: \"Museo-Sans\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(\"https://fonts.animaapp.com/MuseoSans-700\") format(\"opentype\");\n}\n.spark-dynamic-forms__button-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  margin-top: 4rem;\n  margin-left: 0 !important;\n}\n.spark-dynamic-forms__clear[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: auto;\n  font-weight: bold;\n  line-height: 3.5rem;\n  text-transform: capitalize;\n  vertical-align: middle;\n  text-align: center;\n  padding: 0 1.5rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  letter-spacing: 0;\n  border: 0.2rem solid transparent;\n  border-radius: 0.5rem;\n  background-color: #036fb6;\n  color: #ffffff;\n  opacity: 1;\n  transition-property: border-color, background-color, color, opacity;\n  transition-duration: 0.25s;\n  transition-timing-function: ease-in-out;\n  font-family: sans-serif;\n  font-weight: normal;\n  font-size: 1.6rem;\n  line-height: 2.9rem;\n  cursor: pointer;\n  background-color: #797979;\n  border-radius: 0.3rem;\n  color: #f5f5f5;\n  line-height: 44px;\n  text-align: center;\n  font-size: 13px;\n  font-family: \"Avenir-Heavy\", Helvetica, Arial, serif;\n  margin-right: 3rem;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.spark-dynamic-forms__clear[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .spark-dynamic-forms__clear[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.no-touchevents[_ngcontent-%COMP%]   .spark-dynamic-forms__clear[_ngcontent-%COMP%]:not([disabled]):not(.disabled):not(.is--disabled):hover {\n  background-color: #676767;\n}\n.spark-dynamic-forms__clear[disabled][_ngcontent-%COMP%], .spark-dynamic-forms__clear.disabled[_ngcontent-%COMP%], .spark-dynamic-forms__clear.is--disabled[_ngcontent-%COMP%] {\n  opacity: 0.35;\n  cursor: default;\n}\n.spark-dynamic-forms__clear.lift[_ngcontent-%COMP%] {\n  transition: box-shadow 0.25s ease, transform 0.25s ease;\n}\n.spark-dynamic-forms__clear.lift[_ngcontent-%COMP%]:focus, .spark-dynamic-forms__clear.lift[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 1rem 2.5rem rgba(18, 38, 63, 0.1), 0 0.5rem 1rem -0.75rem rgba(18, 38, 63, 0.1) !important;\n  transform: translate3d(0, -3px, 0);\n}\n.spark-dynamic-forms__submit[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: auto;\n  font-weight: bold;\n  line-height: 3.5rem;\n  text-transform: capitalize;\n  vertical-align: middle;\n  text-align: center;\n  padding: 0 1.5rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  letter-spacing: 0;\n  border: 0.2rem solid transparent;\n  border-radius: 0.5rem;\n  background-color: #036fb6;\n  color: #ffffff;\n  opacity: 1;\n  transition-property: border-color, background-color, color, opacity;\n  transition-duration: 0.25s;\n  transition-timing-function: ease-in-out;\n  font-family: sans-serif;\n  font-weight: normal;\n  font-size: 1.6rem;\n  line-height: 2.9rem;\n  cursor: pointer;\n  background-color: #036fb6;\n  border-radius: 0.3rem;\n  color: #f5f5f5;\n  line-height: 44px;\n  text-align: center;\n  font-size: 13px;\n  font-family: \"Avenir-Heavy\", Helvetica, Arial, serif;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.spark-dynamic-forms__submit[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .spark-dynamic-forms__submit[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.no-touchevents[_ngcontent-%COMP%]   .spark-dynamic-forms__submit[_ngcontent-%COMP%]:not([disabled]):not(.disabled):not(.is--disabled):hover {\n  background-color: #676767;\n}\n.spark-dynamic-forms__submit[disabled][_ngcontent-%COMP%], .spark-dynamic-forms__submit.disabled[_ngcontent-%COMP%], .spark-dynamic-forms__submit.is--disabled[_ngcontent-%COMP%] {\n  opacity: 0.35;\n  cursor: default;\n}\n.spark-dynamic-forms__submit.lift[_ngcontent-%COMP%] {\n  transition: box-shadow 0.25s ease, transform 0.25s ease;\n}\n.spark-dynamic-forms__submit.lift[_ngcontent-%COMP%]:focus, .spark-dynamic-forms__submit.lift[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 1rem 2.5rem rgba(18, 38, 63, 0.1), 0 0.5rem 1rem -0.75rem rgba(18, 38, 63, 0.1) !important;\n  transform: translate3d(0, -3px, 0);\n}\n.spark-dynamic-forms__bulk-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 1rem;\n}\n.spark-dynamic-forms__bulk-btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: auto;\n  font-weight: bold;\n  line-height: 3.5rem;\n  text-transform: capitalize;\n  vertical-align: middle;\n  text-align: center;\n  padding: 0 1.5rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  letter-spacing: 0;\n  border: 0.2rem solid transparent;\n  border-radius: 0.5rem;\n  background-color: #036fb6;\n  color: #ffffff;\n  opacity: 1;\n  transition-property: border-color, background-color, color, opacity;\n  transition-duration: 0.25s;\n  transition-timing-function: ease-in-out;\n  font-family: sans-serif;\n  font-weight: normal;\n  font-size: 1.6rem;\n  line-height: 2.9rem;\n  cursor: pointer;\n  background-color: #797979;\n  border-radius: 0.3rem;\n  color: #f5f5f5;\n  line-height: 44px;\n  text-align: center;\n  font-size: 13px;\n  font-family: \"Avenir-Heavy\", Helvetica, Arial, serif;\n  margin-bottom: 15px !important;\n}\n.spark-dynamic-forms__bulk-btn[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .spark-dynamic-forms__bulk-btn[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.no-touchevents[_ngcontent-%COMP%]   .spark-dynamic-forms__bulk-btn[_ngcontent-%COMP%]:not([disabled]):not(.disabled):not(.is--disabled):hover {\n  background-color: #676767;\n}\n.spark-dynamic-forms__bulk-btn[disabled][_ngcontent-%COMP%], .spark-dynamic-forms__bulk-btn.disabled[_ngcontent-%COMP%], .spark-dynamic-forms__bulk-btn.is--disabled[_ngcontent-%COMP%] {\n  opacity: 0.35;\n  cursor: default;\n}\n.spark-dynamic-forms__bulk-btn.lift[_ngcontent-%COMP%] {\n  transition: box-shadow 0.25s ease, transform 0.25s ease;\n}\n.spark-dynamic-forms__bulk-btn.lift[_ngcontent-%COMP%]:focus, .spark-dynamic-forms__bulk-btn.lift[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 1rem 2.5rem rgba(18, 38, 63, 0.1), 0 0.5rem 1rem -0.75rem rgba(18, 38, 63, 0.1) !important;\n  transform: translate3d(0, -3px, 0);\n}\n.spark-dynamic-forms__bulk-btn-upload[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: auto;\n  font-weight: bold;\n  line-height: 3.5rem;\n  text-transform: capitalize;\n  vertical-align: middle;\n  text-align: center;\n  padding: 0 1.5rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  letter-spacing: 0;\n  border: 0.2rem solid transparent;\n  border-radius: 0.5rem;\n  background-color: #036fb6;\n  color: #ffffff;\n  opacity: 1;\n  transition-property: border-color, background-color, color, opacity;\n  transition-duration: 0.25s;\n  transition-timing-function: ease-in-out;\n  font-family: sans-serif;\n  font-weight: normal;\n  font-size: 1.6rem;\n  line-height: 2.9rem;\n  cursor: pointer;\n  background-color: #036fb6;\n  border-radius: 0.3rem;\n  color: #f5f5f5;\n  line-height: 44px;\n  text-align: center;\n  font-size: 13px;\n  font-family: \"Avenir-Heavy\", Helvetica, Arial, serif;\n  margin-bottom: 15px !important;\n  margin-left: 2rem;\n}\n.spark-dynamic-forms__bulk-btn-upload[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .spark-dynamic-forms__bulk-btn-upload[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.no-touchevents[_ngcontent-%COMP%]   .spark-dynamic-forms__bulk-btn-upload[_ngcontent-%COMP%]:not([disabled]):not(.disabled):not(.is--disabled):hover {\n  background-color: #676767;\n}\n.spark-dynamic-forms__bulk-btn-upload[disabled][_ngcontent-%COMP%], .spark-dynamic-forms__bulk-btn-upload.disabled[_ngcontent-%COMP%], .spark-dynamic-forms__bulk-btn-upload.is--disabled[_ngcontent-%COMP%] {\n  opacity: 0.35;\n  cursor: default;\n}\n.spark-dynamic-forms__bulk-btn-upload.lift[_ngcontent-%COMP%] {\n  transition: box-shadow 0.25s ease, transform 0.25s ease;\n}\n.spark-dynamic-forms__bulk-btn-upload.lift[_ngcontent-%COMP%]:focus, .spark-dynamic-forms__bulk-btn-upload.lift[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 1rem 2.5rem rgba(18, 38, 63, 0.1), 0 0.5rem 1rem -0.75rem rgba(18, 38, 63, 0.1) !important;\n  transform: translate3d(0, -3px, 0);\n}\n.bulk__wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 3rem auto;\n}\n.bulk__button-wrapper[_ngcontent-%COMP%], .bulk__content[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n}\n.bulk__button-wrapper[_ngcontent-%COMP%] {\n  padding-top: 2rem;\n  margin-left: -3.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fdmFycy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzL19zZXR0aW5ncy5zY3NzIiwiLi4vLi4vLi4vLi4vbXlmb3JtLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzL21peGlucy9fYnV0dG9uLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMvbWl4aW5zL190eXBvZ3JhcGh5LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEJBQUE7QUFDQSw4QkFBQTtBQUNBLDhCQUFBO0FBMEJBLDJCQUFBO0FBRUEseUJBQUE7QUNHQTtFQUNFLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNFQUFBO0FDM0JGO0FEOEJBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUVBQUE7QUM1QkY7QUFUSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQVdSO0FBUkk7RUNkQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkhLa0I7RUdKbEIsY0hGVTtFR0dWLFVBQUE7RUFDQSxtRUFBQTtFQUNBLDBCQUFBO0VBQ0EsdUNBQUE7RUNuQkEsdUJBQUE7RUEwSUksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VEdEhKLGVBQUE7RUF3QkUseUJBQUE7RUFHQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFRHJDRSxvREFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQXdDUjtBRW9GWTtFQUNJLGlCQUFBO0FGbEZoQjtBQ3ZDSTtFQUNGLHlCQUFBO0FEeUNGO0FDdENJO0VBR0YsYUFBQTtFQUNNLGVBQUE7QURzQ1I7QUNuQ0k7RUFDRSx1REFBQTtBRHFDTjtBQ3BDTTtFQUVFLHdHQUFBO0VBQ0Esa0NBQUE7QURxQ1I7QUF0REk7RUN0QkEscUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJIS2tCO0VHSmxCLGNIRlU7RUdHVixVQUFBO0VBQ0EsbUVBQUE7RUFDQSwwQkFBQTtFQUNBLHVDQUFBO0VDbkJBLHVCQUFBO0VBMElJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFRHRISixlQUFBO0VBc0JFLHlCSHpCZ0I7RUc4QmhCLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VEN0JFLG9EQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQXNGUjtBRStCWTtFQUNJLGlCQUFBO0FGN0JoQjtBQzVGSTtFQUNGLHlCQUFBO0FEOEZGO0FDM0ZJO0VBR0YsYUFBQTtFQUNNLGVBQUE7QUQyRlI7QUN4Rkk7RUFDRSx1REFBQTtBRDBGTjtBQ3pGTTtFQUVFLHdHQUFBO0VBQ0Esa0NBQUE7QUQwRlI7QUFuR1E7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQXFHWjtBQW5HUTtFQ25DSixxQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkhLa0I7RUdKbEIsY0hGVTtFR0dWLFVBQUE7RUFDQSxtRUFBQTtFQUNBLDBCQUFBO0VBQ0EsdUNBQUE7RUNuQkEsdUJBQUE7RUEwSUksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VEdEhKLGVBQUE7RUF3QkUseUJBQUE7RUFHQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFRGhCTSxvREFBQTtFQUNBLDhCQUFBO0FBbUlaO0FFMUJZO0VBQ0ksaUJBQUE7QUY0QmhCO0FDckpJO0VBQ0YseUJBQUE7QUR1SkY7QUNwSkk7RUFHRixhQUFBO0VBQ00sZUFBQTtBRG9KUjtBQ2pKSTtFQUNFLHVEQUFBO0FEbUpOO0FDbEpNO0VBRUUsd0dBQUE7RUFDQSxrQ0FBQTtBRG1KUjtBQWxKUTtFQ3hDSixxQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkhLa0I7RUdKbEIsY0hGVTtFR0dWLFVBQUE7RUFDQSxtRUFBQTtFQUNBLDBCQUFBO0VBQ0EsdUNBQUE7RUNuQkEsdUJBQUE7RUEwSUksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VEdEhKLGVBQUE7RUFzQkUseUJIekJnQjtFRzhCaEIscUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RURYTSxvREFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7QUFrTFo7QUUvRVk7RUFDSSxpQkFBQTtBRmlGaEI7QUMxTUk7RUFDRix5QkFBQTtBRDRNRjtBQ3pNSTtFQUdGLGFBQUE7RUFDTSxlQUFBO0FEeU1SO0FDdE1JO0VBQ0UsdURBQUE7QUR3TU47QUN2TU07RUFFRSx3R0FBQTtFQUNBLGtDQUFBO0FEd01SO0FBN0xJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBZ01SO0FBOUxJO0VBRUksaUJBQUE7QUErTFI7QUE1TEk7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0FBOExSIiwiZmlsZSI6Im15Zm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqIGNvbG9ycyAqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuJGNvbG9yX2JhY2tncm91bmQ6ICNmZmZmZmY7XG4kY29sb3ItYmFja2dyb3VuZC1jYXJkOiAjZmZmZmZmO1xuJGNvbG9yX2JhY2tncm91bmQtaW5wdXRzOiAjZmZmZmZmO1xuJGNvbG9yX3RvcGJhcjogI2ZmZmZmZjtcbiRjb2xvcl9idXR0b25zOiAjNGQ0ZDRkO1xuJGNvbG9yX3ByaW1hcnk6ICMwMzZGQjY7XG4kY29sb3Jfc2Vjb25kYXJ5OiAjZTU3YzJjO1xuJGNvbG9yX3RlcnRpYXJ5OiAjMTIyNjNmO1xuJGNvbG9yX3dhcm5pbmc6ICNlNjM3NTc7XG4kY29sb3Jfc3VjY2VzczogIzAwNzcwMDtcbiRjb2xvcl93aGl0ZTogI2ZmZmZmZjtcbiRjb2xvcl9ibGFjazogIzAwMDtcbiRjb2xvcl9saWdodGdyZXk6IHJnYmEoJGNvbG9yX3doaXRlLCAwLjUpO1xuJGNvbG9yX2xpZ2h0ZXJncmV5OiByZ2JhKCRjb2xvcl93aGl0ZSwgMC4yNSk7XG4kY29sb3JfZm9ybXNfYm9yZGVyOiAjNzA3MDcwO1xuJGNvbG9yX2Zvcm1fcGxhY2Vob2xkZXI6ICNiMWMyZDk7XG4kY29sb3JfbGlua3NfYnV0dG9uczogIzAzNmZiNjtcbiRjb2xvcl9zdWJzdWJ0aXRsZTogIzdlN2U3ZTtcbiRjb2xvcl90aXRsZTogIzUzNTI1MjtcbiRjb2xvcl9zdWJ0aXRsZTogI0IyQjFCMTtcbiRjb2xvcl9uYXZiYXJfYmFja2dyb3VuZDogJGNvbG9yX2JhY2tncm91bmQ7XG4kY29sb3JfbmF2YmFyX2JvcmRlcjogI2E5YThhODtcblxuJGNvbG9yX3RpdGxlX2RlZmF1bHQ6ICM1MzUyNTI7XG4vKiBBZGQgcmV1c2FibGUgYW5pbWF0aW9ucyovXG5cbi8qIEFjY29tb2RhdGUgaXBob25lIDExKyovXG4kaXBob25lLXNhZmVzcGFjZTogcmVtLWNhbGMoNDQpO1xuJGNvbW1vbkd1dHRlcjogM3JlbTtcbiIsIi8vICBGb3VuZGF0aW9uIGZvciBTaXRlcyBTZXR0aW5nc1xuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIFRhYmxlIG9mIENvbnRlbnRzOlxuLy9cbi8vICAgMS4gR2xvYmFsXG4vLyAgIDIuIEJyZWFrcG9pbnRzXG4vLyAgIDMuIENhcmRcbi8vICAgNC4gUHJvZ3Jlc3MgYmFyXG4vLyAgIDUuIEZvb3RlclxuLy8gICA2LiBIZWFkZXJcblxuLy8gMS4gR2xvYmFsXG4vLyAtLS0tLS0tLS1cblxuJGdsb2JhbC1mb250LXNpemU6IDYyLjUlO1xuXG4kZ2xvYmFsLXBhZ2Utd2lkdGg6IHJlbS1jYWxjKDE4MTgpO1xuJGdsb2JhbC1jb250ZW50LXdpZHRoOiByZW0tY2FsYygxNDAwKTtcbiRnbG9iYWwtbGluZWhlaWdodDogMS41O1xuJGJvZHktYmFja2dyb3VuZDogJGNvbG9yX3doaXRlO1xuJGJvZHktZm9udC1jb2xvcjogJGNvbG9yX2JsYWNrO1xuJGJvZHktZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgUm9ib3RvLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiRib2R5LWFudGlhbGlhc2VkOiB0cnVlO1xuJGdsb2JhbC1tYXJnaW46IDFyZW07XG4kZ2xvYmFsLXBhZGRpbmc6IDFyZW07XG4kZ2xvYmFsLXBvc2l0aW9uOiAxcmVtO1xuJGdsb2JhbC13ZWlnaHQtbm9ybWFsOiBub3JtYWw7XG4kZ2xvYmFsLXdlaWdodC1ib2xkOiBib2xkO1xuJGdsb2JhbC1yYWRpdXM6IDA7XG4kZ2xvYmFsLXRleHQtZGlyZWN0aW9uOiBsdHI7XG4kcHJpbWFyeS1jb2xvcjogJGNvbG9yX3ByaW1hcnk7XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBdmVuaXItSGVhdnlcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybChcImh0dHBzOi8vZm9udHMuYW5pbWFhcHAuY29tL0F2ZW5pci1IZWF2eVwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk11c2VvLVNhbnNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybChcImh0dHBzOi8vZm9udHMuYW5pbWFhcHAuY29tL011c2VvU2Fucy03MDBcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XG59XG5cblxuLy8gMi4gQnJlYWtwb2ludHNcbi8vIC0tLS0tLS0tLS0tLS0tXG5cbiRicmVha3BvaW50czogKFxuICBzbWFsbDogMCxcbiAgc3VwZXJtaW5pOiA0MDBweCxcbiAgbWluaTogNDgwcHgsXG4gIG1lZGl1bTogNjQwcHgsXG4gIHRhYmxldDogNzYwcHgsXG4gIG1lZC1sYXJnZTogOTYwcHgsXG4gIGxhcmdlOiAxMDI0cHgsXG4gIHhsYXJnZTogMTI4MHB4LFxuICB4eGxhcmdlOiAxNTQwcHgsXG4gIHh4eGxhcmdlOiAxOTIwcHgsXG4gIHh4eHhsYXJnZTogMjU2MHB4LFxuKTtcbiRwcmludC1icmVha3BvaW50OiBsYXJnZTtcbiRicmVha3BvaW50LWNsYXNzZXM6IChzbWFsbCBtZWRpdW0gbGFyZ2UpO1xuXG4vLyAzLiBDYXJkXG4vLyAtLS0tLS0tLVxuXG4kY2FyZC1iYWNrZ3JvdW5kOiAkY29sb3Jfd2hpdGU7XG4kY2FyZC1mb250LWNvbG9yOiAkYm9keS1mb250LWNvbG9yO1xuJGNhcmQtZGl2aWRlci1iYWNrZ3JvdW5kOiAkY29sb3JfbGlnaHRncmV5O1xuJGNhcmQtYm9yZGVyOiAxcHggc29saWQgJGNvbG9yX2xpZ2h0Z3JleTtcbiRjYXJkLXNoYWRvdzogbm9uZTtcbiRjYXJkLWJvcmRlci1yYWRpdXM6ICRnbG9iYWwtcmFkaXVzO1xuJGNhcmQtcGFkZGluZzogJGdsb2JhbC1wYWRkaW5nO1xuJGNhcmQtbWFyZ2luLWJvdHRvbTogJGdsb2JhbC1tYXJnaW47XG5cbi8vIDQuIFByb2dyZXNzIEJhclxuLy8gLS0tLS0tLS0tLS0tLS0tLVxuXG4kcHJvZ3Jlc3MtaGVpZ2h0OiAxcmVtO1xuJHByb2dyZXNzLWJhY2tncm91bmQ6ICRjb2xvcl9saWdodGVyZ3JleTtcbiRwcm9ncmVzcy1tYXJnaW4tYm90dG9tOiAkZ2xvYmFsLW1hcmdpbjtcbiRwcm9ncmVzcy1tZXRlci1iYWNrZ3JvdW5kOiAkcHJpbWFyeS1jb2xvcjtcbiRwcm9ncmVzcy1yYWRpdXM6ICRnbG9iYWwtcmFkaXVzO1xuXG4vLyA1LiBGb290ZXJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tXG4kZm9vdGVyLWhlaWdodDogNXJlbTtcblxuLy82LiBOYXZiYXJcbiRuYXZiYXJfaGVpZ2h0OiA4LjRyZW07XG4kbmF2YmFyX2JveF9zaGFkb3c6IDAgLjNyZW0gLjZyZW0gcmdiYSgkY29sb3JfYmxhY2ssIC4yOSk7XG5cbiIsIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMvbWl4aW5zL2J1dHRvblwiO1xuQGltcG9ydCBcIi4uLy4uL3N0eWxlcy92YXJzXCI7XG5AaW1wb3J0IFwiLi4vLi4vc3R5bGVzL21peGlucy90eXBvZ3JhcGh5XCI7XG5AaW1wb3J0IFwiLi4vLi4vc3R5bGVzL3NldHRpbmdzXCI7XG4vLyB0b2RvOiBjaGFuZ2UgZm9ybnQgdG8gdmFyaWFibGVzICoqIFxuXG4uc3BhcmstZHluYW1pYy1mb3JtcyB7IFxuICAgICZfX2J1dHRvbi13cmFwcGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgbWFyZ2luLXRvcDogNHJlbTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAmX19jbGVhciB7XG4gICAgICAgIEBpbmNsdWRlIGJ1dHRvbigkc2l6ZTogc21hbGwpO1xuICAgICAgICBmb250LWZhbWlseTogXCJBdmVuaXItSGVhdnlcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2VyaWY7XG4gICAgICAgIG1hcmdpbi1yaWdodDogM3JlbTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIH0gICBcblxuICAgICZfX3N1Ym1pdCB7XG4gICAgICAgIEBpbmNsdWRlIGJ1dHRvbigkY29sb3I6cHJpbWFyeSwgJHNpemU6IHNtYWxsKTtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiQXZlbmlyLUhlYXZ5XCIsIEhlbHZldGljYSwgQXJpYWwsIHNlcmlmO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgfVxuXG4gICAgJl9fYnVsayB7XG4gICAgICAgICYtd3JhcHBlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgIH1cbiAgICAgICAgJi1idG4ge1xuICAgICAgICAgICAgQGluY2x1ZGUgYnV0dG9uKCRzaXplOiBzbWFsbCk7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJBdmVuaXItSGVhdnlcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2VyaWY7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgJi1idG4tdXBsb2FkIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIGJ1dHRvbigkY29sb3I6cHJpbWFyeSwgJHNpemU6IHNtYWxsKTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkF2ZW5pci1IZWF2eVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzZXJpZjtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uYnVsayB7XG4gICAgJl9fd3JhcHBlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDNyZW0gYXV0bztcbiAgICB9XG4gICAgJl9fYnV0dG9uLXdyYXBwZXIsXG4gICAgJl9fY29udGVudCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIH1cblxuICAgICZfX2J1dHRvbi13cmFwcGVyIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDJyZW07XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMy41cmVtO1xuICAgIH1cbn0iLCJAbWl4aW4gYnV0dG9uKCRzaXplOm51bGwsICRjb2xvcjpudWxsLCAkb3V0bGluZTpudWxsKSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxpbmUtaGVpZ2h0OiAzLjVyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMCAxLjVyZW07XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIGJvcmRlcjogLjJyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yX2xpbmtzX2J1dHRvbnM7XG4gICAgY29sb3I6ICRjb2xvcl93aGl0ZTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJvcmRlci1jb2xvciwgIGJhY2tncm91bmQtY29sb3IsIGNvbG9yLCBvcGFjaXR5O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMjVzO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgICBAaW5jbHVkZSB0eXBvZ3JhcGh5O1xuXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC5uby10b3VjaGV2ZW50cyAmOm5vdChbZGlzYWJsZWRdKTpub3QoLmRpc2FibGVkKTpub3QoLmlzLS1kaXNhYmxlZCk6aG92ZXIgLyosICY6Zm9jdXMgKi8ge1xuXHRcdGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oICRjb2xvcl9idXR0b25zLCAxMCUpO1xuICAgIH1cblxuICAgICZbZGlzYWJsZWRdLFxuICAgICYuZGlzYWJsZWQsXG4gICAgJi5pcy0tZGlzYWJsZWQge1xuXHRcdG9wYWNpdHkgOiAuMzU7XG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICB9XG5cbiAgICAmLmxpZnQge1xuICAgICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjI1cyBlYXNlLCB0cmFuc2Zvcm0gMC4yNXMgZWFzZTtcbiAgICAgICY6Zm9jdXMsXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAxcmVtIDIuNXJlbSByZ2JhKDE4LCAzOCwgNjMsIDAuMSksIDAgMC41cmVtIDFyZW0gLTAuNzVyZW0gcmdiYSgxOCwgMzgsIDYzLCAwLjEpICFpbXBvcnRhbnQ7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTNweCwgMCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQGlmICRjb2xvciA9PSBwcmltYXJ5IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcl9saW5rc19idXR0b25zO1xuICAgIH0gQGVsc2Uge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc5Nzk3OTtcbiAgICB9XG4gICAgQGlmICRzaXplID09IHNtYWxsIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IC4zcmVtO1xuICAgICAgY29sb3I6ICNmNWY1ZjU7XG4gICAgICBsaW5lLWhlaWdodDogNDRweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB9IFxuXG59IiwiQG1peGluIHR5cG9ncmFwaHkoJGZvcm1hdDogYm9keSwgJHdlaWdodDogbnVsbCwgJGNvbG9yOm51bGwsICRmb250c2l6ZTogbnVsbCwgJGxpbmVoZWlnaHQ6IG51bGwsICRtYXhsaW5lczowICkge1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgIEBpZiAkbWF4bGluZXMgPiAwIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogJG1heGxpbmVzO1xuICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgIH1cblxuICAgIEBpZiAkZm9ybWF0ID09ICBoMSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc2l6ZTogNi40cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogNi42cmVtO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgXG4gICAgICAgIEBpZiAkd2VpZ2h0ICE9IGJvbGQgYW5kICR3ZWlnaHQgIT0gc3Ryb25nIHtcbiAgICAgICAgICAgIHN0cm9uZywgYiB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQGlmICRtYXhsaW5lcyA+IDAge1xuXHRcdFx0bWF4LWhlaWdodDogOHJlbSAqICRtYXhsaW5lcztcblx0XHR9XG4gICAgfSBAZWxzZSBpZiAkZm9ybWF0ID09IGgyIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogNC44cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogNC44cmVtO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICAgICAgIEBpZiAkd2VpZ2h0ICE9IGJvbGQgYW5kICR3ZWlnaHQgIT0gc3Ryb25nIHtcbiAgICAgICAgICAgIHN0cm9uZywgYiB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXHRcdEBpZiAkbWF4bGluZXMgPiAwIHtcblx0XHRcdG1heC1oZWlnaHQ6IDQuOHJlbSAqICRtYXhsaW5lcztcblx0XHR9XG4gICAgfSBAZWxzZSBpZiAkZm9ybWF0ID09IGgzIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgZm9udC1zaXplOiA0LjhyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1LjRyZW07XG5cbiAgICAgICAgQGlmICR3ZWlnaHQgIT0gYm9sZCBhbmQgJHdlaWdodCAhPSBzdHJvbmcge1xuICAgICAgICAgICAgc3Ryb25nLCBiIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cdFx0QGlmICRtYXhsaW5lcyA+IDAge1xuXHRcdFx0bWF4LWhlaWdodDogNC44cmVtICogJG1heGxpbmVzO1xuXHRcdH1cbiAgICB9IEBlbHNlIGlmICRmb3JtYXQgPT0gaDQge1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LXNpemU6IDRyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0LjRyZW07XG5cbiAgICAgICAgQGlmICR3ZWlnaHQgIT0gYm9sZCBhbmQgJHdlaWdodCAhPSBzdHJvbmcge1xuICAgICAgICAgICAgc3Ryb25nLCBiIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cdFx0QGlmICRtYXhsaW5lcyA+IDAge1xuXHRcdFx0bWF4LWhlaWdodDogNC40cmVtICogJG1heGxpbmVzO1xuXHRcdH1cbiAgICB9IEBlbHNlIGlmICRmb3JtYXQgPT0gaDUge1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcblxuICAgICAgICBAaWYgJHdlaWdodCAhPSBib2xkIGFuZCAkd2VpZ2h0ICE9IHN0cm9uZyB7XG4gICAgICAgICAgICBzdHJvbmcsIGIge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblx0XHRAaWYgJG1heGxpbmVzID4gMCB7XG5cdFx0XHRtYXgtaGVpZ2h0OiAxLjhyZW0gKiAkbWF4bGluZXM7XG5cdFx0fVxuICAgIH0gQGVsc2UgaWYgJGZvcm1hdCA9PSBoNiB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNHJlbTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICAgICAgICBAaWYgJHdlaWdodCAhPSBib2xkIGFuZCAkd2VpZ2h0ICE9IHN0cm9uZyB7XG4gICAgICAgICAgICBzdHJvbmcsIGIge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblx0XHRAaWYgJG1heGxpbmVzID4gMCB7XG5cdFx0XHRtYXgtaGVpZ2h0OiAxLjRyZW0gKiAkbWF4bGluZXM7XG5cdFx0fVxuICAgIH0gQGVsc2UgaWYgJGZvcm1hdCA9PSBzbWFsbCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMi4zcmVtO1xuXG4gICAgICAgIEBpZiAkd2VpZ2h0ICE9IGJvbGQgYW5kICR3ZWlnaHQgIT0gc3Ryb25nIHtcbiAgICAgICAgICAgIHN0cm9uZywgYiB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXHRcdEBpZiAkbWF4bGluZXMgPiAwIHtcblx0XHRcdG1heC1oZWlnaHQ6IDIuM3JlbSAqICRtYXhsaW5lcztcblx0XHR9XG4gICAgfSBAZWxzZSBpZiAkZm9ybWF0ID09IHZlcnlzbWFsbCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcblxuICAgICAgICBAaWYgJHdlaWdodCAhPSBib2xkIGFuZCAkd2VpZ2h0ICE9IHN0cm9uZyB7XG4gICAgICAgICAgICBzdHJvbmcsIGIge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblx0XHRAaWYgJG1heGxpbmVzID4gMCB7XG5cdFx0XHRtYXgtaGVpZ2h0OiAxLjJyZW0gKiAkbWF4bGluZXM7XG5cdFx0fVxuICAgIH0gQGVsc2UgaWYgJGZvcm1hdCA9PSB2ZXJ5dmVyeXNtYWxsIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcblxuICAgICAgICBAaWYgJHdlaWdodCAhPSBib2xkIGFuZCAkd2VpZ2h0ICE9IHN0cm9uZyB7XG4gICAgICAgICAgICBzdHJvbmcsIGIge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblx0XHRAaWYgJG1heGxpbmVzID4gMCB7XG5cdFx0XHRtYXgtaGVpZ2h0OiAxcmVtICogJG1heGxpbmVzO1xuXHRcdH1cbiAgICB9IEBlbHNlICB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMi45cmVtO1xuXG4gICAgICAgIEBpZiAkd2VpZ2h0ICE9IGJvbGQgYW5kICR3ZWlnaHQgIT0gc3Ryb25nIHtcbiAgICAgICAgICAgIHN0cm9uZywgYiB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXHRcdEBpZiAkbWF4bGluZXMgPiAwIHtcblx0XHRcdG1heC1oZWlnaHQ6IDIuNnJlbSAqICRtYXhsaW5lcztcblx0XHR9XG4gICAgfVxuXG4gICAgQGlmICR3ZWlnaHQgPT0gYm9sZCBvciAkd2VpZ2h0ID09IHN0cm9uZyB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH0gQGVsc2UgaWYgJHdlaWdodCA9PSBib2xkIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfSBAZWxzZSBpZiAkd2VpZ2h0ID09IG5vcm1hbCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgfVxuXG4gICAgQGlmICRjb2xvciB7XG4gICAgICAgIGNvbG9yOiAkY29sb3I7XG4gICAgfVxuXG4gICAgQGlmICRmb250c2l6ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogJGZvbnRzaXplO1xuICAgIH1cblxuICAgIEBpZiAkbGluZWhlaWdodCB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAkbGluZWhlaWdodDtcbiAgICB9XG59Il19 */"]
      });
      /***/
    },

    /***/
    "lN6X":
    /*!**************************************************!*\
      !*** ./src/app/shared/filters/filters.module.ts ***!
      \**************************************************/

    /*! exports provided: FiltersModule */

    /***/
    function lN6X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FiltersModule", function () {
        return FiltersModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _filters_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./filters.component */
      "cuj7");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _myform_myform_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./myform/myform.module */
      "pphz");
      /* harmony import */


      var _selected_filters_selected_filters_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./selected-filters/selected-filters.component */
      "x8/3");
      /* harmony import */


      var _submit_filters_submit_filters_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./submit-filters/submit-filters.component */
      "V0L8");
      /* harmony import */


      var _collapsible_filters_collapsible_filters_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./collapsible-filters/collapsible-filters.component */
      "XtmD");
      /* harmony import */


      var _dropdown_filters_dropdown_filters_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./dropdown-filters/dropdown-filters.component */
      "xtVc");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _filters_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./filters.service */
      "WpeU");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FiltersModule = function FiltersModule() {
        _classCallCheck(this, FiltersModule);
      };

      FiltersModule.ɵfac = function FiltersModule_Factory(t) {
        return new (t || FiltersModule)();
      };

      FiltersModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
        type: FiltersModule
      });
      FiltersModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
        providers: [_filters_service__WEBPACK_IMPORTED_MODULE_9__["FiltersService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _myform_myform_module__WEBPACK_IMPORTED_MODULE_3__["MyformModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](FiltersModule, {
          declarations: [_filters_component__WEBPACK_IMPORTED_MODULE_1__["FiltersComponent"], _selected_filters_selected_filters_component__WEBPACK_IMPORTED_MODULE_4__["SelectedFiltersComponent"], _submit_filters_submit_filters_component__WEBPACK_IMPORTED_MODULE_5__["SubmitFiltersComponent"], _collapsible_filters_collapsible_filters_component__WEBPACK_IMPORTED_MODULE_6__["CollapsibleFiltersComponent"], _dropdown_filters_dropdown_filters_component__WEBPACK_IMPORTED_MODULE_7__["DropdownFiltersComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _myform_myform_module__WEBPACK_IMPORTED_MODULE_3__["MyformModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]],
          exports: [_filters_component__WEBPACK_IMPORTED_MODULE_1__["FiltersComponent"], _selected_filters_selected_filters_component__WEBPACK_IMPORTED_MODULE_4__["SelectedFiltersComponent"], _submit_filters_submit_filters_component__WEBPACK_IMPORTED_MODULE_5__["SubmitFiltersComponent"], _collapsible_filters_collapsible_filters_component__WEBPACK_IMPORTED_MODULE_6__["CollapsibleFiltersComponent"], _dropdown_filters_dropdown_filters_component__WEBPACK_IMPORTED_MODULE_7__["DropdownFiltersComponent"]]
        });
      })();
      /***/

    },

    /***/
    "o0su":
    /*!***********************************!*\
      !*** ./src/app/services/index.ts ***!
      \***********************************/

    /*! exports provided: ErrorsService, AuthService, StorageService, UserService, HttpService */

    /***/
    function o0su(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _errors_errors_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./errors/errors.service */
      "y8tC");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ErrorsService", function () {
        return _errors_errors_service__WEBPACK_IMPORTED_MODULE_0__["ErrorsService"];
      });
      /* harmony import */


      var _authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./authentication/auth.service */
      "qIOU");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return _authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"];
      });
      /* harmony import */


      var _storage_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./storage/storage.service */
      "E2f4");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "StorageService", function () {
        return _storage_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"];
      });
      /* harmony import */


      var _user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user/user.service */
      "CFL1");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return _user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"];
      });
      /* harmony import */


      var _http_http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./http/http-service.service */
      "l91v");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "HttpService", function () {
        return _http_http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"];
      });
      /***/

    },

    /***/
    "oNr/":
    /*!************************************************************!*\
      !*** ./src/app/shared/modals/confirm/confirm.component.ts ***!
      \************************************************************/

    /*! exports provided: ConfirmComponent */

    /***/
    function oNr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmComponent", function () {
        return ConfirmComponent;
      });
      /* harmony import */


      var _basic_modals_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../basic/modals.component */
      "b2RV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ConfirmComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmComponent_div_0_Template_button_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r1.confirm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", ctx_r0.modalId);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.message);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.confirmBtnName);
        }
      }

      var ConfirmComponent = /*#__PURE__*/function (_basic_modals_compone2) {
        _inherits(ConfirmComponent, _basic_modals_compone2);

        var _super3 = _createSuper(ConfirmComponent);

        function ConfirmComponent() {
          var _this28;

          _classCallCheck(this, ConfirmComponent);

          _this28 = _super3.call(this);
          _this28.message = 'Are you sure you want to delete?';
          return _this28;
        }

        _createClass(ConfirmComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ConfirmComponent;
      }(_basic_modals_component__WEBPACK_IMPORTED_MODULE_0__["ModalsComponent"]);

      ConfirmComponent.ɵfac = function ConfirmComponent_Factory(t) {
        return new (t || ConfirmComponent)();
      };

      ConfirmComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ConfirmComponent,
        selectors: [["app-confirm"]],
        inputs: {
          message: "message"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
        decls: 1,
        vars: 1,
        consts: [["class", "modal fade", 3, "id", 4, "ngIf"], [1, "modal", "fade", 3, "id"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-body"], [1, "confirm__modal"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "confirm__message"], [1, "confirm__buttons"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", "cancel"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", "confirm", 3, "click"]],
        template: function ConfirmComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ConfirmComponent_div_0_Template, 14, 3, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.message);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        styles: [".show[_ngcontent-%COMP%] {\n  display: block !important;\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  border-radius: 0.8rem !important;\n}\n\n.confirm__modal[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.confirm__modal[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  align-self: flex-end;\n}\n\n.confirm__message[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #727272;\n}\n\n.confirm__buttons[_ngcontent-%COMP%] {\n  padding-top: 2rem;\n  color: #f5f5f5;\n  font-size: 1.4rem;\n}\n\n.confirm__buttons[_ngcontent-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  background-color: #E2E2E2;\n  border-color: #E2E2E2;\n  color: #000;\n  font-size: inherit;\n}\n\n.confirm__buttons[_ngcontent-%COMP%]   .confirm[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n  background-color: #036fb6;\n  color: inherit;\n  border-color: #036fb6;\n  font-size: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NvbmZpcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQUNKOztBQUNBO0VBQ0ksZ0NBQUE7QUFFSjs7QUFDSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFFUjs7QUFBUTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7QUFFWjs7QUFFSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBQVI7O0FBR0k7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQURSOztBQUVRO0VBQ0kseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUFaOztBQUVRO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBQVoiLCJmaWxlIjoiY29uZmlybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG93IHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuLm1vZGFsLWNvbnRlbnQge1xuICAgIGJvcmRlci1yYWRpdXM6IC44cmVtICFpbXBvcnRhbnQ7XG59XG4uY29uZmlybSB7XG4gICAgJl9fbW9kYWwge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAuY2xvc2Uge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX21lc3NhZ2Uge1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgIGNvbG9yOiAjNzI3MjcyO1xuICAgIH1cblxuICAgICZfX2J1dHRvbnMge1xuICAgICAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICAgICAgY29sb3I6ICNmNWY1ZjU7XG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgICAuY2FuY2VsIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFMkUyRTI7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICNFMkUyRTI7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgICAgfVxuICAgICAgICAuY29uZmlybSB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMzZmYjY7XG4gICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzAzNmZiNjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "pKmL":
    /*!*************************************!*\
      !*** ./src/app/core/core.module.ts ***!
      \*************************************/

    /*! exports provided: CoreModule */

    /***/
    function pKmL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
        return CoreModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _core_interceptors_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../core/interceptors/interceptor */
      "zRYz");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../shared/shared.module */
      "PCNd");
      /* harmony import */


      var _structure_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./structure/footer/footer.component */
      "VNuA");
      /* harmony import */


      var _structure_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./structure/header/header.component */
      "+aqW");
      /* harmony import */


      var _structure_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./structure/navbar/navbar.component */
      "SsBv");
      /* harmony import */


      var _errors_error_not_found_error_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./errors/error-not-found/error-not-found.component */
      "pYZh");
      /* harmony import */


      var _authentication_lock_screen_lock_screen_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./authentication/lock-screen/lock-screen.component */
      "Rqi1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /** App Interceptor */


      var CoreModule = function CoreModule() {
        _classCallCheck(this, CoreModule);
      };

      CoreModule.ɵfac = function CoreModule_Factory(t) {
        return new (t || CoreModule)();
      };

      CoreModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
        type: CoreModule
      });
      CoreModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
          useClass: _core_interceptors_interceptor__WEBPACK_IMPORTED_MODULE_3__["Interceptor"],
          multi: true
        }],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](CoreModule, {
          declarations: [_structure_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _structure_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _structure_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], _errors_error_not_found_error_not_found_component__WEBPACK_IMPORTED_MODULE_8__["ErrorNotFoundComponent"], _authentication_lock_screen_lock_screen_component__WEBPACK_IMPORTED_MODULE_9__["LockScreenComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_structure_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _structure_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"]]
        });
      })();
      /***/

    },

    /***/
    "pYZh":
    /*!**************************************************************************!*\
      !*** ./src/app/core/errors/error-not-found/error-not-found.component.ts ***!
      \**************************************************************************/

    /*! exports provided: ErrorNotFoundComponent */

    /***/
    function pYZh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorNotFoundComponent", function () {
        return ErrorNotFoundComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ErrorNotFoundComponent = /*#__PURE__*/function () {
        function ErrorNotFoundComponent() {
          _classCallCheck(this, ErrorNotFoundComponent);
        }

        _createClass(ErrorNotFoundComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ErrorNotFoundComponent;
      }();

      ErrorNotFoundComponent.ɵfac = function ErrorNotFoundComponent_Factory(t) {
        return new (t || ErrorNotFoundComponent)();
      };

      ErrorNotFoundComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ErrorNotFoundComponent,
        selectors: [["app-error-not-found"]],
        decls: 2,
        vars: 0,
        template: function ErrorNotFoundComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "error-not-found works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "pphz":
    /*!********************************************************!*\
      !*** ./src/app/shared/filters/myform/myform.module.ts ***!
      \********************************************************/

    /*! exports provided: MyformModule */

    /***/
    function pphz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyformModule", function () {
        return MyformModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _myform_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./myform.component */
      "LDu/");
      /* harmony import */


      var _myinput_myinput_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./myinput/myinput.component */
      "hVgn");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MyformModule = function MyformModule() {
        _classCallCheck(this, MyformModule);
      };

      MyformModule.ɵfac = function MyformModule_Factory(t) {
        return new (t || MyformModule)();
      };

      MyformModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: MyformModule
      });
      MyformModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](MyformModule, {
          declarations: [_myform_component__WEBPACK_IMPORTED_MODULE_3__["MyformComponent"], _myinput_myinput_component__WEBPACK_IMPORTED_MODULE_4__["MyinputComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]],
          exports: [_myform_component__WEBPACK_IMPORTED_MODULE_3__["MyformComponent"], _myinput_myinput_component__WEBPACK_IMPORTED_MODULE_4__["MyinputComponent"]]
        });
      })();
      /***/

    },

    /***/
    "qG2b":
    /*!************************************************!*\
      !*** ./src/app/shared/modals/modals.module.ts ***!
      \************************************************/

    /*! exports provided: ModalsModule */

    /***/
    function qG2b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalsModule", function () {
        return ModalsModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _basic_modals_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./basic/modals.component */
      "b2RV");
      /* harmony import */


      var _modals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./modals.service */
      "22UC");
      /* harmony import */


      var _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./confirm/confirm.component */
      "oNr/");
      /* harmony import */


      var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./confirm-dialog/confirm-dialog.component */
      "BsoD");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ModalsModule = function ModalsModule() {
        _classCallCheck(this, ModalsModule);
      };

      ModalsModule.ɵfac = function ModalsModule_Factory(t) {
        return new (t || ModalsModule)();
      };

      ModalsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: ModalsModule
      });
      ModalsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        providers: [_modals_service__WEBPACK_IMPORTED_MODULE_2__["ModalsService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ModalsModule, {
          declarations: [_basic_modals_component__WEBPACK_IMPORTED_MODULE_1__["ModalsComponent"], _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmComponent"], _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmDialogComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
          exports: [_basic_modals_component__WEBPACK_IMPORTED_MODULE_1__["ModalsComponent"], _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmComponent"], _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmDialogComponent"]]
        });
      })();
      /***/

    },

    /***/
    "qIOU":
    /*!*********************************************************!*\
      !*** ./src/app/services/authentication/auth.service.ts ***!
      \*********************************************************/

    /*! exports provided: AuthService */

    /***/
    function qIOU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services */
      "o0su");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-cookie-service */
      "b6Qw");

      var clientId = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].APIClientID;
      var endpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].APIEndpoint;
      var endpointV1 = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].APIv1Endpoint;

      var AuthService = /*#__PURE__*/function () {
        function AuthService(_route, _userService, _storageService, _http, _cookieService) {
          _classCallCheck(this, AuthService);

          this._route = _route;
          this._userService = _userService;
          this._storageService = _storageService;
          this._http = _http;
          this._cookieService = _cookieService;
        }

        _createClass(AuthService, [{
          key: "isLoggedIn",
          value: function isLoggedIn() {
            //check if the user is logged in using an api generated token
            var tokenItems = JSON.parse(this._storageService.getItem('token') || '{}');
            var token = tokenItems !== null ? tokenItems.token : null;

            if (token != null && token != undefined) {
              //to do if user not verified
              return true;
            }

            return false;
          }
        }, {
          key: "hasAdminAccess",
          value: function hasAdminAccess() {
            return this.getUserProfile().role == 'A' ? true : false;
          }
        }, {
          key: "hasWebDashboardAccess",
          value: function hasWebDashboardAccess() {
            return (//this.getUserProfile().role == 'S' ||
              this.getUserProfile().role == 'A' || this.getUserProfile().role == 'N' && this.getUserProfile().role !== null ? true : false
            );
          }
        }, {
          key: "isVerifiedUser",
          value: function isVerifiedUser() {
            return this.getUserProfile().verified == 'true' ? true : false;
          }
        }, {
          key: "getUserProfile",
          value: function getUserProfile() {
            // this._storageService.watchStorage().subscribe((data:string) => {
            //this.user = JSON.parse(localStorage.getItem('userDetails'));
            this.user = JSON.parse(this._storageService.getItem('userDetails') || '{}');

            if (this.user !== {} || this !== null) {
              return this.user;
            }

            return;
          } //TODO -> Remove if one needs not to signup
          // signUp(data: any) {
          //   return this._http.post<any>(endpointV1 + 'users/', data).pipe(
          //     map((res) => {
          //       const token = res.token.access_token;
          //       const tokenExpiry = res.token.expires_in;
          //       const tokenRefresh = res.token.refresh_token;
          //       let tokenItems = { token, tokenExpiry, tokenRefresh };
          //       localStorage.setItem('token', JSON.stringify(tokenItems));
          //       return res;
          //     })
          //   );
          // }
          //TODO -> Remove if there's no 2-factor-authentication with SMS
          // verifyOTP(data: any) {
          //   return this._http.post<any>(endpointV1 + 'users/verify-otp/', data);
          // }
          // requestOTP(data: any) {
          //   let body = {
          //     username: data,
          //   };
          //   return this._http.post<any>(endpointV1 + 'users/request-otp/', body);
          // }

        }, {
          key: "signIn",
          value: function signIn(data) {
            var _this29 = this;

            data.grant_type = 'password';
            data.client_id = clientId;
            var rememberMe = data.remember_me;

            if (rememberMe) {
              this._cookieService.set('rememberMe', rememberMe);

              this._storageService.setItem('rememberMe', rememberMe);
            }

            return this._http.post(endpoint + 'auth/token/', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(function (res) {
              var token = res.access_token;
              var tokenExpiry = res.expires_in;
              var tokenRefresh = res.refresh_token;
              var tokenItems;
              tokenItems = {
                token: token,
                tokenExpiry: tokenExpiry,
                tokenRefresh: tokenRefresh
              };

              if (rememberMe) {
                var loggedInTime = Date.now();
                var refreshTokenTime = Math.max(loggedInTime + 3600000, 3600000); // const refreshTokenTime = loggedInTime + 2000;

                tokenItems = {
                  token: token,
                  tokenExpiry: tokenExpiry,
                  tokenRefresh: tokenRefresh,
                  refreshTokenTime: refreshTokenTime
                };
              } // localStorage.setItem('token', JSON.stringify(tokenItems));


              _this29._storageService.setItem('token', JSON.stringify(tokenItems));

              return _this29._userService.userProfile();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["concatMap"])(function () {
              return _this29._route.navigate(['/home']);
            }));
          }
        }, {
          key: "refreshToken",
          value: function refreshToken(data) {
            var _this30 = this;

            data.grant_type = 'refresh_token';
            data.client_id = clientId;
            return this._http.post("".concat(endpoint, "auth/token/"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
              var token = res.access_token;
              var tokenExpiry = res.expires_in;
              var tokenRefresh = res.refresh_token;
              var tokenItems;
              tokenItems = {
                token: token,
                tokenExpiry: tokenExpiry,
                tokenRefresh: tokenRefresh
              };

              var rememberMe = _this30._cookieService.get('rememberMe') || // localStorage.getItem('rememberMe');
              _this30._storageService.getItem('rememberMe');

              if (rememberMe) {
                var refreshTokenInitialTime = Date.now();
                var refreshTokenTime = Math.max(refreshTokenInitialTime + 3600000, 3600000);
                tokenItems = {
                  token: token,
                  tokenExpiry: tokenExpiry,
                  tokenRefresh: tokenRefresh,
                  refreshTokenTime: refreshTokenTime
                };
              } //localStorage.setItem('token', JSON.stringify(tokenItems));


              _this30._storageService.setItem('token', JSON.stringify(tokenItems));
            }));
          }
        }, {
          key: "resetPassowrd",
          value: function resetPassowrd(data) {
            return this._http.post(endpointV1 + 'users/reset-password', data);
          }
        }, {
          key: "forgotPassword",
          value: function forgotPassword(data) {
            return this._http.post(endpointV1 + 'users/forgot-password', data);
          }
        }, {
          key: "changePassword",
          value: function changePassword(data) {
            return this._http.put(endpointV1 + 'users/me/change-password', data);
          }
        }, {
          key: "signOut",
          value: function signOut() {
            localStorage.clear();
            sessionStorage.clear();

            this._cookieService["delete"]('rememberMe');

            this._route.navigate(['/signin']);
          }
        }, {
          key: "toggleShowPassword",
          value: function toggleShowPassword(type) {
            type === 'password' ? type = 'text' : type = 'password';
            return type;
          }
        }]);

        return AuthService;
      }();

      AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_services__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_services__WEBPACK_IMPORTED_MODULE_4__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]));
      };

      AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: AuthService,
        factory: AuthService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "qNYV":
    /*!************************************************************!*\
      !*** ./src/app/shared/myform/myinput/myinput.component.ts ***!
      \************************************************************/

    /*! exports provided: MyinputComponent */

    /***/
    function qNYV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyinputComponent", function () {
        return MyinputComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services */
      "o0su");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ng_multi_select_multi_select_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../ng-multi-select/multi-select.component */
      "Vtyy");

      function MyinputComponent_div_4_option_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Fetching ...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MyinputComponent_div_4_option_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Select ", ctx_r8.displayControlName, "");
        }
      }

      function MyinputComponent_div_4_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var opt_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", opt_r10.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", opt_r10.display_name, " ");
        }
      }

      function MyinputComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "select", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MyinputComponent_div_4_option_2_Template, 2, 0, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MyinputComponent_div_4_option_3_Template, 2, 1, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MyinputComponent_div_4_option_4_Template, 2, 2, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx_r0.formControName)("id", ctx_r0.formControName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r0.formControName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.choices);
        }
      }

      function MyinputComponent_div_5_option_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Fetching ...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MyinputComponent_div_5_option_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Select ", ctx_r12.displayControlName, "");
        }
      }

      function MyinputComponent_div_5_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var opt_r14 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", opt_r14.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", opt_r14.display_name, " ");
        }
      }

      function MyinputComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "select", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MyinputComponent_div_5_option_2_Template, 2, 0, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MyinputComponent_div_5_option_3_Template, 2, 1, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MyinputComponent_div_5_option_4_Template, 2, 2, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx_r1.formControName)("id", ctx_r1.formControName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.formControName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.choices);
        }
      }

      function MyinputComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx_r2.formControName)("id", ctx_r2.formControName);
        }
      }

      function MyinputComponent_app_multi_select_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-multi-select", 17);
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parameter", ctx_r3.data);
        }
      }

      function MyinputComponent_textarea_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "textarea", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx_r4.formControName)("id", ctx_r4.formControName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r4.formControName);
        }
      }

      function MyinputComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function MyinputComponent_div_9_Template_input_blur_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r15.sortValidationErrors();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx_r5.formControName)("type", ctx_r5.formControlType)("id", ctx_r5.formControName);
        }
      }

      function MyinputComponent_span_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var error_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r17, " ");
        }
      }

      ;

      var MyinputComponent = /*#__PURE__*/function () {
        function MyinputComponent(http, _storageService) {
          _classCallCheck(this, MyinputComponent);

          this.http = http;
          this._storageService = _storageService;
          this.errors = [];
          this.choices = [];
          this.intital = false;
          this.isLoading = false;
        }

        _createClass(MyinputComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {
            var _this31 = this;

            if (this.form && this.formControName && !this.intital) {
              this.intital = true;
              this.formControl.valueChanges.subscribe(function (val) {
                _this31.sortValidationErrors(true);
              }); // Check if its a field 

              if (this.data.type == "field") {
                this.getUrlBasedOptions();
              }

              if (this.data.choices) {
                this.choices = this.data.choices;
              }
            }

            if (this.formControName) {
              this.sortValidationErrors();
            }
          }
        }, {
          key: "showLoader",
          value: function showLoader(status) {
            this.isLoading = status;
          }
        }, {
          key: "getUrlBasedOptions",
          value: function getUrlBasedOptions() {
            var _this32 = this;

            if (!this.data.url) return;
            this.showLoader(true);
            this.http.get(this.data.url).subscribe(function (res) {
              _this32.showLoader(false);

              _this32.choices = res.results.map(function (value) {
                return {
                  "value": value.id,
                  "display_name": value[_this32.data.display_name]
                };
              });
            }, function (error) {
              _this32.showLoader(false);

              var status = error.status;
            });
          }
        }, {
          key: "sortValidationErrors",
          value: function sortValidationErrors() {
            var clearFormError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            this.errors = [];

            if (this.formControl.untouched) {
              return;
            } // Clear the form errors on value changes only


            if (clearFormError) {
              delete this.formErrors[this.formControName];
            } // Normal formControl errors


            if (this.formControl.errors) {
              this.errors = Object.keys(this.formControl.errors);
            } // Check other form control errors from outside(from the backend)


            if (this.formControName in this.formErrors) {
              this.errors = this.errors.concat(this.formErrors[this.formControName]);
            } // If the control is not marked as invalid force it


            if (this.errors.length > 0 && this.formControl.valid) {
              this.formControl.setErrors({
                '': true
              });
            }
          }
        }, {
          key: "formControl",
          get: function get() {
            return this.form.controls[this.formControName];
          }
        }, {
          key: "formControlType",
          get: function get() {
            if (this.data.obscure) {
              return "password";
            }

            switch (this.data.type) {
              case 'integer':
                return "number";

              case 'string':
                if (this.data.max_length && this.data.max_length > 150) {
                  return 'textArea';
                }

                return "text";

              case 'datetime':
                return "date";

              case 'datetime':
                return "date";

              case 'field':
                if (this.data.multiple) {
                  return 'multiplechoice';
                }

                return "choice";

              default:
                return this.data.type;
            }
          }
        }, {
          key: "displayControlName",
          get: function get() {
            return this.data.label;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MyinputComponent;
      }();

      MyinputComponent.ɵfac = function MyinputComponent_Factory(t) {
        return new (t || MyinputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_1__["StorageService"]));
      };

      MyinputComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MyinputComponent,
        selectors: [["app-myinput"]],
        inputs: {
          formControName: "formControName",
          form: "form",
          data: "data",
          formErrors: "formErrors"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 11,
        vars: 10,
        consts: [[1, "form-group", 3, "formGroup"], [1, "form-label", 3, "for"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "form-check", 4, "ngSwitchCase"], ["formControlName", "items", 3, "parameter", 4, "ngSwitchCase"], ["class", "form-control opt-value", "rows", "5", 3, "formControlName", "id", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["class", "text-danger opt-value", 4, "ngFor", "ngForOf"], [1, "form-control", 3, "formControlName", "id"], ["disabled", "", "value", "", "class", "opt-value", 4, "ngIf"], ["class", "opt-value", 3, "value", 4, "ngFor", "ngForOf"], ["disabled", "", "value", "", 1, "opt-value"], [1, "opt-value", 3, "value"], ["multiple", "", 1, "form-control", 3, "formControlName", "id"], [1, "form-check"], ["type", "checkbox", "value", "", 1, "form-check-input", "opt-value", 3, "formControlName", "id"], ["formControlName", "items", 3, "parameter"], ["rows", "5", 1, "form-control", "opt-value", 3, "formControlName", "id"], [1, "form-control", "opt-value", 3, "formControlName", "type", "id", "blur"], [1, "text-danger", "opt-value"]],
        template: function MyinputComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MyinputComponent_div_4_Template, 5, 6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MyinputComponent_div_5_Template, 5, 6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MyinputComponent_div_6_Template, 2, 2, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MyinputComponent_app_multi_select_7_Template, 1, 1, "app-multi-select", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MyinputComponent_textarea_8_Template, 2, 3, "textarea", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MyinputComponent_div_9_Template, 2, 3, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MyinputComponent_span_10_Template, 3, 1, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx.formControName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.displayControlName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.formControlType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "choice");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "multiplechoice");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "boolean");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "multifield");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "textArea");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.errors);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _ng_multi_select_multi_select_component__WEBPACK_IMPORTED_MODULE_4__["MultiSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]],
        styles: [".ng-invalid[_ngcontent-%COMP%]   .ng-touched[_ngcontent-%COMP%] {\n  border: 0.1em solid red;\n}\n\n.ng-touched[_ngcontent-%COMP%]   .ng-valid[_ngcontent-%COMP%] {\n  border: 0.1em solid green;\n}\n\n.form-label[_ngcontent-%COMP%] {\n  font-family: \"Avenir-Heavy\", Helvetica, Arial, serif;\n  font-size: 14px;\n}\n\n.opt-value[_ngcontent-%COMP%] {\n  font-family: \"Museo-Sans\", Helvetica, Arial, serif;\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL215aW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7QUFDSjs7QUFFQTtFQUNJLG9EQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksa0RBQUE7RUFDQSxlQUFBO0FBQ0oiLCJmaWxlIjoibXlpbnB1dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZy1pbnZhbGlkIC5uZy10b3VjaGVke1xuICAgIGJvcmRlcjogMC4xZW0gc29saWQgcmVkO1xufVxuXG4ubmctdG91Y2hlZCAubmctdmFsaWQge1xuICAgIGJvcmRlcjogMC4xZW0gc29saWQgZ3JlZW47XG59XG5cbi5mb3JtLWxhYmVsIHtcbiAgICBmb250LWZhbWlseTogXCJBdmVuaXItSGVhdnlcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ub3B0LXZhbHVlIHtcbiAgICBmb250LWZhbWlseTogXCJNdXNlby1TYW5zXCIsIEhlbHZldGljYSwgQXJpYWwsIHNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "r+Yu":
    /*!**********************************************************************!*\
      !*** ./src/app/shared/tables/mypagination/mypagination.component.ts ***!
      \**********************************************************************/

    /*! exports provided: MypaginationComponent */

    /***/
    function rYu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MypaginationComponent", function () {
        return MypaginationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function MypaginationComponent_ul_1_button_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.hasPrev);
        }
      }

      function MypaginationComponent_ul_1_li_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MypaginationComponent_ul_1_li_7_Template_button_click_1_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var page_r4 = restoredCtx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r5.selectPage(page_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var page_r4 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("page-item ", ctx_r2.selectedPage == page_r4 ? "active" : "", "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r4);
        }
      }

      function MypaginationComponent_ul_1_button_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MypaginationComponent_ul_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MypaginationComponent_ul_1_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.scrollPage(-1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MypaginationComponent_ul_1_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.selectPage(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MypaginationComponent_ul_1_button_6_Template, 2, 1, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MypaginationComponent_ul_1_li_7_Template, 3, 4, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MypaginationComponent_ul_1_button_9_Template, 2, 0, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MypaginationComponent_ul_1_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.selectPage(ctx_r10.totalPages);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MypaginationComponent_ul_1_Template_button_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.scrollPage(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.hasPrev);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("page-item ", ctx_r0.selectedPage == 1 ? "active" : "", "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.moreAtStart);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.pages);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.moreAtEnd);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("page-item ", ctx_r0.selectedPage == ctx_r0.totalPages ? "active" : "", "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.totalPages);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.hasNext);
        }
      }

      var MypaginationComponent = /*#__PURE__*/function () {
        function MypaginationComponent() {
          _classCallCheck(this, MypaginationComponent);

          this.selectedPage = 5;
          this.pageSize = 10;
          this.totalDisplayedPAges = 9;
          this.onPageSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(MypaginationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "isAtEnd",
          get: function get() {
            return this.totalDisplayedPAges - this.selectedPage <= Math.round(this.totalDisplayedPAges / 2);
          }
        }, {
          key: "isAtStart",
          get: function get() {
            // 5 -2
            return this.selectedPage - 2 <= 3;
          }
        }, {
          key: "moreAtStart",
          get: function get() {
            return this.isAtEnd && this.hideSomePages;
          }
        }, {
          key: "moreAtEnd",
          get: function get() {
            return this.isAtStart && this.hideSomePages;
          }
        }, {
          key: "hideSomePages",
          get: function get() {
            // console.log((this.totalPages - 2) >= this.totalDisplayedPAges)
            return this.totalPages - 2 >= this.totalDisplayedPAges;
          }
        }, {
          key: "pages",
          get: function get() {
            if (!this.isPaginatable) return [];
            var pages = [];
            var totalPages = this.totalPages;
            var excluded = [1, this.totalPages];
            var remPages = totalPages - 2;
            var addFactor = 2; // 6 7 8 9 10 11

            if (this.hideSomePages) {
              var tempAddFactor = this.selectedPage - 1; // Less than 3 because , less than that means use 2 

              if (this.isAtStart) {
                tempAddFactor = 2;
              } else if (this.isAtEnd) {
                tempAddFactor = 6;
              }

              addFactor = tempAddFactor;
            }

            for (var i = 0; i < (this.hideSomePages ? 5 : remPages); i++) {
              var newPage = i + addFactor;

              if (!pages.includes(newPage) && !excluded.includes(newPage)) {
                pages.push(newPage);
              }
            }

            pages.sort(function (a, b) {
              return a - b;
            });
            return pages;
          }
        }, {
          key: "totalItems",
          get: function get() {
            if (!this.isPaginatable) return 1;
            return this.resultsMeta.count;
          }
        }, {
          key: "scrollPage",
          value: function scrollPage(addPage) {
            var tempvalue = addPage + this.selectedPage;

            if (tempvalue > this.totalPages) {
              tempvalue = this.totalPages;
            } else if (tempvalue < 1) {
              tempvalue = 1;
            }

            this.selectPage(tempvalue);
          }
        }, {
          key: "totalPages",
          get: function get() {
            if (!this.isPaginatable) return 1;
            return Math.ceil(this.resultsMeta.count / this.pageSize);
          }
        }, {
          key: "isPaginationActive",
          get: function get() {
            if (!this.isPaginatable) return false; // return 

            return this.hasNext || this.hasPrev;
          }
        }, {
          key: "hasNext",
          get: function get() {
            if (!this.isPaginatable) return false;
            return this.resultsMeta.next != undefined;
          }
        }, {
          key: "hasPrev",
          get: function get() {
            if (!this.isPaginatable) return false;
            return this.resultsMeta.prev != undefined;
          }
        }, {
          key: "isPaginatable",
          get: function get() {
            if (!this.resultsMeta) return false;
            return this.resultsMeta.hasOwnProperty("next") || this.resultsMeta.hasOwnProperty("prev");
          }
        }, {
          key: "selectPage",
          value: function selectPage(page) {
            if (this.selectedPage == page) return;
            this.onPageSelect.emit(page); // this.selectedPage = page
            // console.log(`Selected page ${page}`)
          }
        }, {
          key: "checkIsSelected",
          value: function checkIsSelected(page) {
            return this.selectedPage == page;
          }
        }]);

        return MypaginationComponent;
      }();

      MypaginationComponent.ɵfac = function MypaginationComponent_Factory(t) {
        return new (t || MypaginationComponent)();
      };

      MypaginationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MypaginationComponent,
        selectors: [["app-mypagination"]],
        inputs: {
          resultsMeta: "resultsMeta",
          selectedPage: "selectedPage",
          pageSize: "pageSize",
          totalDisplayedPAges: "totalDisplayedPAges"
        },
        outputs: {
          onPageSelect: "onPageSelect"
        },
        decls: 4,
        vars: 2,
        consts: [["aria-label", "Page navigation"], ["class", "pagination", 4, "ngIf"], [1, "item-count"], [1, "pagination"], [1, "btn", "page-link", 3, "disabled", "click"], [1, "btn", "page-link", 3, "click"], ["class", "btn page-link", 3, "disabled", 4, "ngIf"], [3, "class", 4, "ngFor", "ngForOf"], [1, "page-item"], ["class", "btn page-link", 4, "ngIf"], [1, "btn", "page-link", 3, "disabled"], [1, "btn", "page-link"]],
        template: function MypaginationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MypaginationComponent_ul_1_Template, 16, 12, "ul", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isPaginationActive);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.totalItems, " Items ");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
        styles: [".page-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.item-count[_ngcontent-%COMP%] {\n  font-family: \"MuseoSans-500\", Helvetica, Arial, serif;\n  font-size: 11px;\n}\n\n.page-link[_ngcontent-%COMP%] {\n  font-family: \"MuseoSans-500\", Helvetica, Arial, serif;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL215cGFnaW5hdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLHFEQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0kscURBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0oiLCJmaWxlIjoibXlwYWdpbmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtaXRlbSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaXRlbS1jb3VudCB7XG4gICAgZm9udC1mYW1pbHk6IFwiTXVzZW9TYW5zLTUwMFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzZXJpZjtcbiAgICBmb250LXNpemU6IDExcHg7XG59XG5cbi5wYWdlLWxpbmsge1xuICAgIGZvbnQtZmFtaWx5OiBcIk11c2VvU2Fucy01MDBcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2VyaWY7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59Il19 */"]
      });
      /***/
    },

    /***/
    "riLG":
    /*!***************************************************************!*\
      !*** ./src/app/shared/ng-multi-select/multi-select.module.ts ***!
      \***************************************************************/

    /*! exports provided: MultiSelectModule */

    /***/
    function riLG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MultiSelectModule", function () {
        return MultiSelectModule;
      });
      /* harmony import */


      var _multi_select_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./multi-select.component */
      "Vtyy");
      /* harmony import */


      var _multi_select_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./multi-select.service */
      "xUvI");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MultiSelectModule = function MultiSelectModule() {
        _classCallCheck(this, MultiSelectModule);
      };

      MultiSelectModule.ɵfac = function MultiSelectModule_Factory(t) {
        return new (t || MultiSelectModule)();
      };

      MultiSelectModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: MultiSelectModule
      });
      MultiSelectModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        providers: [_multi_select_service__WEBPACK_IMPORTED_MODULE_1__["MultiSelectService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](MultiSelectModule, {
          declarations: [_multi_select_component__WEBPACK_IMPORTED_MODULE_0__["MultiSelectComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]],
          exports: [_multi_select_component__WEBPACK_IMPORTED_MODULE_0__["MultiSelectComponent"]]
        });
      })();
      /***/

    },

    /***/
    "vI4X":
    /*!*****************************************************************************!*\
      !*** ./src/app/shared/toast-notifications/toast-notifications.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: ToastNotificationsComponent */

    /***/
    function vI4X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastNotificationsComponent", function () {
        return ToastNotificationsComponent;
      });
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      "wHSu");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _toast_notifications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./toast-notifications.service */
      "hkff");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = function _c0(a0, a1, a2) {
        return {
          "info": a0,
          "warning": a1,
          "success": a2
        };
      };

      function ToastNotificationsComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToastNotificationsComponent_div_1_Template_button_click_2_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var indexOfelement_r2 = restoredCtx.index;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r3.closeToast(indexOfelement_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var message_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](2, _c0, message_r1.style == "info", message_r1.style == "danger", message_r1.style == "success"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", message_r1.message, " ");
        }
      }

      var ToastNotificationsComponent = /*#__PURE__*/function () {
        function ToastNotificationsComponent(toastService) {
          _classCallCheck(this, ToastNotificationsComponent);

          this.toastService = toastService;
          this._toasts = [];
          this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faEdit"];
        }

        _createClass(ToastNotificationsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this33 = this;

            this.toastService.toasts.subscribe(function (response) {
              _this33._toasts = response;
              console.log(response);
            }); // this.toastService.update("Message1", "info")
          }
        }, {
          key: "closeToast",
          value: function closeToast(index) {
            console.log(index);
            this.toastService.removeToast(index);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._toasts = [];
            this.toastService.toasts.unsubscribe();
          }
        }]);

        return ToastNotificationsComponent;
      }();

      ToastNotificationsComponent.ɵfac = function ToastNotificationsComponent_Factory(t) {
        return new (t || ToastNotificationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_toast_notifications_service__WEBPACK_IMPORTED_MODULE_2__["ToastNotificationsService"]));
      };

      ToastNotificationsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ToastNotificationsComponent,
        selectors: [["app-toast-notifications"]],
        decls: 2,
        vars: 1,
        consts: [[1, "position-absolute", "bottom-0", "right-0", "p-3", "toast-container"], ["id", "liveToast", "class", "toast show", "role", "alert", "aria-live", "assertive", "aria-atomic", "true", 4, "ngFor", "ngForOf"], ["id", "liveToast", "role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "show"], [1, "toast-body", 3, "ngClass"], ["type", "button", "data-dismiss", "toast", "aria-label", "Close", 1, "ml-2", "mb-1", "close", 3, "click"], ["aria-hidden", "true"]],
        template: function ToastNotificationsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ToastNotificationsComponent_div_1_Template, 7, 6, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx._toasts);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
        styles: ["p[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.success[_ngcontent-%COMP%] {\n  background-color: #007700;\n}\n.info[_ngcontent-%COMP%] {\n  background-color: #036FB6;\n}\n.warning[_ngcontent-%COMP%] {\n  background-color: #e63757;\n}\n.toast-container[_ngcontent-%COMP%] {\n  z-index: 5;\n  right: 0;\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fdmFycy5zY3NzIiwiLi4vLi4vLi4vLi4vdG9hc3Qtbm90aWZpY2F0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4QkFBQTtBQUNBLDhCQUFBO0FBQ0EsOEJBQUE7QUEwQkEsMkJBQUE7QUFFQSx5QkFBQTtBQzNCQTtFQUNJLGNEVVU7QUNQZDtBQURBO0VBQ0kseUJETVk7QUNGaEI7QUFGQTtFQUNJLHlCRERZO0FDTWhCO0FBSEE7RUFDSSx5QkREWTtBQ09oQjtBQUpBO0VBQ0ksVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBT0oiLCJmaWxlIjoidG9hc3Qtbm90aWZpY2F0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqIGNvbG9ycyAqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuJGNvbG9yX2JhY2tncm91bmQ6ICNmZmZmZmY7XG4kY29sb3ItYmFja2dyb3VuZC1jYXJkOiAjZmZmZmZmO1xuJGNvbG9yX2JhY2tncm91bmQtaW5wdXRzOiAjZmZmZmZmO1xuJGNvbG9yX3RvcGJhcjogI2ZmZmZmZjtcbiRjb2xvcl9idXR0b25zOiAjNGQ0ZDRkO1xuJGNvbG9yX3ByaW1hcnk6ICMwMzZGQjY7XG4kY29sb3Jfc2Vjb25kYXJ5OiAjZTU3YzJjO1xuJGNvbG9yX3RlcnRpYXJ5OiAjMTIyNjNmO1xuJGNvbG9yX3dhcm5pbmc6ICNlNjM3NTc7XG4kY29sb3Jfc3VjY2VzczogIzAwNzcwMDtcbiRjb2xvcl93aGl0ZTogI2ZmZmZmZjtcbiRjb2xvcl9ibGFjazogIzAwMDtcbiRjb2xvcl9saWdodGdyZXk6IHJnYmEoJGNvbG9yX3doaXRlLCAwLjUpO1xuJGNvbG9yX2xpZ2h0ZXJncmV5OiByZ2JhKCRjb2xvcl93aGl0ZSwgMC4yNSk7XG4kY29sb3JfZm9ybXNfYm9yZGVyOiAjNzA3MDcwO1xuJGNvbG9yX2Zvcm1fcGxhY2Vob2xkZXI6ICNiMWMyZDk7XG4kY29sb3JfbGlua3NfYnV0dG9uczogIzAzNmZiNjtcbiRjb2xvcl9zdWJzdWJ0aXRsZTogIzdlN2U3ZTtcbiRjb2xvcl90aXRsZTogIzUzNTI1MjtcbiRjb2xvcl9zdWJ0aXRsZTogI0IyQjFCMTtcbiRjb2xvcl9uYXZiYXJfYmFja2dyb3VuZDogJGNvbG9yX2JhY2tncm91bmQ7XG4kY29sb3JfbmF2YmFyX2JvcmRlcjogI2E5YThhODtcblxuJGNvbG9yX3RpdGxlX2RlZmF1bHQ6ICM1MzUyNTI7XG4vKiBBZGQgcmV1c2FibGUgYW5pbWF0aW9ucyovXG5cbi8qIEFjY29tb2RhdGUgaXBob25lIDExKyovXG4kaXBob25lLXNhZmVzcGFjZTogcmVtLWNhbGMoNDQpO1xuJGNvbW1vbkd1dHRlcjogM3JlbTtcbiIsIlxuQGltcG9ydCBcIi4uLy4uL3N0eWxlcy92YXJzXCI7XG5cbnAge1xuICAgIGNvbG9yOiAkY29sb3Jfd2hpdGU7XG59XG4uc3VjY2VzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yX3N1Y2Nlc3M7XG59XG4uaW5mbyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yX3ByaW1hcnk7XG59XG4ud2FybmluZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yX3dhcm5pbmc7XG59XG4udG9hc3QtY29udGFpbmVyIHtcbiAgICB6LWluZGV4OiA1OyBcbiAgICByaWdodDogMDsgXG4gICAgYm90dG9tOiAwO1xufVxuXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutes */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutes", function () {
        return AppRoutes;
      });
      /* harmony import */


      var _core_errors_error_not_found_error_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./core/errors/error-not-found/error-not-found.component */
      "pYZh");
      /* harmony import */


      var _core_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./core/authentication/authentication.component */
      "98eE");
      /* harmony import */


      var _modules_modules_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./modules/modules.component */
      "/9IV");
      /* harmony import */


      var _core_auth_guards_auth_guards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./core/auth-guards/auth.guards */
      "ZW81");

      var AppRoutes = [{
        path: '',
        component: _modules_modules_component__WEBPACK_IMPORTED_MODULE_2__["ModulesComponent"],
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | modules-modules-module */
            "modules-modules-module").then(__webpack_require__.bind(null,
            /*! ./modules/modules.module */
            "+dkL")).then(function (m) {
              return m.ModulesModule;
            });
          },
          canActivate: [_core_auth_guards_auth_guards__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
        }]
      }, {
        path: '',
        component: _core_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_1__["AuthenticationComponent"],
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | core-authentication-authentication-module */
            "core-authentication-authentication-module").then(__webpack_require__.bind(null,
            /*! ./core/authentication/authentication.module */
            "Op+s")).then(function (m) {
              return m.AuthenticationModule;
            });
          }
        }]
      }, {
        path: '404',
        component: _core_errors_error_not_found_error_not_found_component__WEBPACK_IMPORTED_MODULE_0__["ErrorNotFoundComponent"]
      }, {
        path: '**',
        redirectTo: '/'
      }];
      /***/
    },

    /***/
    "x8/3":
    /*!*******************************************************************************!*\
      !*** ./src/app/shared/filters/selected-filters/selected-filters.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: SelectedFiltersComponent */

    /***/
    function x83(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectedFiltersComponent", function () {
        return SelectedFiltersComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _filters_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../filters.service */
      "WpeU");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function SelectedFiltersComponent_span_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectedFiltersComponent_span_0_Template_i_click_3_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var i_r2 = restoredCtx.index;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.removeFilter(i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1[0], " ");
        }
      }

      var SelectedFiltersComponent = /*#__PURE__*/function () {
        function SelectedFiltersComponent(_filterService) {
          _classCallCheck(this, SelectedFiltersComponent);

          this._filterService = _filterService;
          this.selectedFiltersOptions = [];
          this.searchableFilterOptions = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(SelectedFiltersComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            this.searchableFilterOptions.emit(this.selectedFiltersOptions);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "removeFilter",
          value: function removeFilter(key) {
            this.selectedFiltersOptions.splice(key, 1);
            this.searchableFilterOptions.emit(this.selectedFiltersOptions);

            if (!this.selectedFiltersOptions.length) {
              this._filterService.getJoinedFilters(this.selectedFiltersOptions);
            }
          }
        }]);

        return SelectedFiltersComponent;
      }();

      SelectedFiltersComponent.ɵfac = function SelectedFiltersComponent_Factory(t) {
        return new (t || SelectedFiltersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_filters_service__WEBPACK_IMPORTED_MODULE_1__["FiltersService"]));
      };

      SelectedFiltersComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SelectedFiltersComponent,
        selectors: [["app-selected-filters"]],
        inputs: {
          selectedFiltersOptions: "selectedFiltersOptions"
        },
        outputs: {
          searchableFilterOptions: "searchableFilterOptions"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 1,
        vars: 1,
        consts: [[4, "ngFor", "ngForOf"], [1, "filters__item"], [1, "fa", "fa-times", 3, "click"]],
        template: function SelectedFiltersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SelectedFiltersComponent_span_0_Template, 4, 1, "span", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectedFiltersOptions);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
        styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n\n.filters__item[_ngcontent-%COMP%] {\n  position: relative;\n  text-transform: capitalize;\n  background: #007bff;\n  padding: 10px;\n  border-radius: 5px;\n  max-width: 120px;\n  text-align: center;\n  color: white;\n}\n\n.filters__item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.filters__button-wrapper[_ngcontent-%COMP%] {\n  padding-top: 15px;\n  margin-left: 0;\n}\n\n.filters__collapsible-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.filters__collapsible-wrapper[_ngcontent-%COMP%]   .filters__button-wrapper[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  position: relative !important;\n  top: -59px !important;\n  left: -25px !important;\n  width: 100%;\n}\n\n.card[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  height: auto;\n  width: auto;\n  border-radius: 0.5rem;\n  border-color: #f5f5f5;\n}\n\n.card__body[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 2.8rem 2.6rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ZpbHRlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxXQUFBO0FBREo7O0FBS0k7RUFDSSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUZSOztBQUlRO0VBQ0ksZUFBQTtBQUZaOztBQU9RO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FBTFo7O0FBVVE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFSWjs7QUFVWTtFQUNJLGlCQUFBO0FBUmhCOztBQWtCSTtFQUNJLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFmUjs7QUFtQkE7RUFDSSx5QkF0RGdCO0VBdURoQixZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EscUJBMURnQjtBQTBDcEI7O0FBa0JJO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtBQWhCUiIsImZpbGUiOiJmaWx0ZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNhcmQtaGVhZGVyLWNvbG9yOiAjZjVmNWY1O1xuXG46aG9zdCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5maWx0ZXJzIHtcbiAgICAmX19pdGVtIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgYmFja2dyb3VuZDogIzAwN2JmZjtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBtYXgtd2lkdGg6IDEyMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgICAgICBpIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2J1dHRvbiB7XG4gICAgICAgICYtd3JhcHBlciB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fY29sbGFwc2libGUge1xuICAgICAgICAmLXdyYXBwZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgICAgICAgICAgIC5maWx0ZXJzX19idXR0b24td3JhcHBlciB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5kcm9wZG93bntcbiAgICAmLXRvZ2dsZSB7XG5cbiAgICB9XG4gICAgJi1tZW51IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gICAgICAgIHRvcDogLTU5cHggIWltcG9ydGFudDtcbiAgICAgICAgbGVmdDogLTI1cHggIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG4uY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNhcmQtaGVhZGVyLWNvbG9yO1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcbiAgICBib3JkZXItY29sb3I6ICRjYXJkLWhlYWRlci1jb2xvcjtcblxuICAgICZfX2JvZHkge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHBhZGRpbmc6IDIuOHJlbSAyLjZyZW07XG4gICAgfVxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "xLTr":
    /*!************************************************************************!*\
      !*** ./src/app/shared/tables/mycelldisplay/mycelldisplay.component.ts ***!
      \************************************************************************/

    /*! exports provided: MycelldisplayComponent */

    /***/
    function xLTr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MycelldisplayComponent", function () {
        return MycelldisplayComponent;
      });
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      "wHSu");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _tables_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../tables.service */
      "Mm8Z");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb");

      function MycelldisplayComponent_div_0_div_1_li_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r6);
        }
      }

      function MycelldisplayComponent_div_0_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MycelldisplayComponent_div_0_div_1_li_2_Template, 2, 1, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.displayValue);
        }
      }

      function MycelldisplayComponent_div_0_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r3.displayValue);
        }
      }

      function MycelldisplayComponent_div_0_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.displayValue);
        }
      }

      function MycelldisplayComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MycelldisplayComponent_div_0_div_1_Template, 3, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MycelldisplayComponent_div_0_div_2_Template, 2, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MycelldisplayComponent_div_0_span_3_Template, 2, 1, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx_r0.valueType);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "array");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "boolean");
        }
      }

      function MycelldisplayComponent_div_1_div_1_fa_icon_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "fa-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MycelldisplayComponent_div_1_div_1_fa_icon_1_Template_fa_icon_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);

            var val_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r11.emitAction(val_r8);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r9.faEdit);
        }
      }

      function MycelldisplayComponent_div_1_div_1_fa_icon_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "fa-icon", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MycelldisplayComponent_div_1_div_1_fa_icon_2_Template_fa_icon_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);

            var val_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r14.emitAction(val_r8);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r10.faTrashAlt);
        }
      }

      function MycelldisplayComponent_div_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MycelldisplayComponent_div_1_div_1_fa_icon_1_Template, 1, 1, "fa-icon", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MycelldisplayComponent_div_1_div_1_fa_icon_2_Template, 1, 1, "fa-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var val_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", val_r8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "delete");
        }
      }

      function MycelldisplayComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MycelldisplayComponent_div_1_div_1_Template, 3, 3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.displayValue);
        }
      }

      var MycelldisplayComponent = /*#__PURE__*/function () {
        function MycelldisplayComponent(_tableSerivce) {
          _classCallCheck(this, MycelldisplayComponent);

          this._tableSerivce = _tableSerivce;
          this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faEdit"];
          this.faTrashAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faTrashAlt"];
          this.isActions = false;
        }

        _createClass(MycelldisplayComponent, [{
          key: "displayValue",
          get: function get() {
            return this._value;
          },
          set: function set(data) {
            this._value = data;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.isActions) {
              console.log(this.valueType);
            }
          }
        }, {
          key: "valueType",
          get: function get() {
            var val = this.displayValue;
            var valType = typeof val;

            if (valType == "object") {
              var isArray = Array.isArray(val);
              if (isArray) return "array";
            }

            return valType;
          }
        }, {
          key: "emitAction",
          value: function emitAction(name) {
            this._tableSerivce.emitAction(name, this.rowData);
          }
        }]);

        return MycelldisplayComponent;
      }();

      MycelldisplayComponent.ɵfac = function MycelldisplayComponent_Factory(t) {
        return new (t || MycelldisplayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_tables_service__WEBPACK_IMPORTED_MODULE_2__["TablesService"]));
      };

      MycelldisplayComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: MycelldisplayComponent,
        selectors: [["app-mycelldisplay"]],
        inputs: {
          displayValue: "displayValue",
          columnConfig: "columnConfig",
          rowData: "rowData",
          isActions: "isActions"
        },
        decls: 2,
        vars: 2,
        consts: [[3, "ngSwitch", 4, "ngIf"], ["class", "row ml-2", 4, "ngIf"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [4, "ngFor", "ngForOf"], ["type", "checkbox", "onclick", "return false;", 3, "checked"], [1, "row", "ml-2"], [3, "ngSwitch", 4, "ngFor", "ngForOf"], ["class", "edit", 3, "icon", "click", 4, "ngSwitchCase"], ["class", "delete", 3, "icon", "click", 4, "ngSwitchCase"], [1, "edit", 3, "icon", "click"], [1, "delete", 3, "icon", "click"]],
        template: function MycelldisplayComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MycelldisplayComponent_div_0_Template, 4, 3, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MycelldisplayComponent_div_1_Template, 2, 1, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isActions);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isActions);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"]],
        styles: [".edit[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #e57c2c;\n  padding-right: 0.6rem;\n}\n.delete[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #e63757;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fdmFycy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vbXljZWxsZGlzcGxheS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4QkFBQTtBQUNBLDhCQUFBO0FBQ0EsOEJBQUE7QUEwQkEsMkJBQUE7QUFFQSx5QkFBQTtBQzVCQTtFQUNJLGVBQUE7RUFDQSxjRE1jO0VDTGQscUJBQUE7QUFJSjtBQUZBO0VBQ0ksZUFBQTtFQUNBLGNER1k7QUNFaEIiLCJmaWxlIjoibXljZWxsZGlzcGxheS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqIGNvbG9ycyAqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuJGNvbG9yX2JhY2tncm91bmQ6ICNmZmZmZmY7XG4kY29sb3ItYmFja2dyb3VuZC1jYXJkOiAjZmZmZmZmO1xuJGNvbG9yX2JhY2tncm91bmQtaW5wdXRzOiAjZmZmZmZmO1xuJGNvbG9yX3RvcGJhcjogI2ZmZmZmZjtcbiRjb2xvcl9idXR0b25zOiAjNGQ0ZDRkO1xuJGNvbG9yX3ByaW1hcnk6ICMwMzZGQjY7XG4kY29sb3Jfc2Vjb25kYXJ5OiAjZTU3YzJjO1xuJGNvbG9yX3RlcnRpYXJ5OiAjMTIyNjNmO1xuJGNvbG9yX3dhcm5pbmc6ICNlNjM3NTc7XG4kY29sb3Jfc3VjY2VzczogIzAwNzcwMDtcbiRjb2xvcl93aGl0ZTogI2ZmZmZmZjtcbiRjb2xvcl9ibGFjazogIzAwMDtcbiRjb2xvcl9saWdodGdyZXk6IHJnYmEoJGNvbG9yX3doaXRlLCAwLjUpO1xuJGNvbG9yX2xpZ2h0ZXJncmV5OiByZ2JhKCRjb2xvcl93aGl0ZSwgMC4yNSk7XG4kY29sb3JfZm9ybXNfYm9yZGVyOiAjNzA3MDcwO1xuJGNvbG9yX2Zvcm1fcGxhY2Vob2xkZXI6ICNiMWMyZDk7XG4kY29sb3JfbGlua3NfYnV0dG9uczogIzAzNmZiNjtcbiRjb2xvcl9zdWJzdWJ0aXRsZTogIzdlN2U3ZTtcbiRjb2xvcl90aXRsZTogIzUzNTI1MjtcbiRjb2xvcl9zdWJ0aXRsZTogI0IyQjFCMTtcbiRjb2xvcl9uYXZiYXJfYmFja2dyb3VuZDogJGNvbG9yX2JhY2tncm91bmQ7XG4kY29sb3JfbmF2YmFyX2JvcmRlcjogI2E5YThhODtcblxuJGNvbG9yX3RpdGxlX2RlZmF1bHQ6ICM1MzUyNTI7XG4vKiBBZGQgcmV1c2FibGUgYW5pbWF0aW9ucyovXG5cbi8qIEFjY29tb2RhdGUgaXBob25lIDExKyovXG4kaXBob25lLXNhZmVzcGFjZTogcmVtLWNhbGMoNDQpO1xuJGNvbW1vbkd1dHRlcjogM3JlbTtcbiIsIkB1c2UgJy4uLy4uLy4uL3N0eWxlcy92YXJzJyBhcyB2YXJzO1xuXG4uZWRpdCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiB2YXJzLiRjb2xvcl9zZWNvbmRhcnk7XG4gICAgcGFkZGluZy1yaWdodDogMC42cmVtO1xufVxuLmRlbGV0ZSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiB2YXJzLiRjb2xvcl93YXJuaW5nO1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    "xUvI":
    /*!****************************************************************!*\
      !*** ./src/app/shared/ng-multi-select/multi-select.service.ts ***!
      \****************************************************************/

    /*! exports provided: MultiSelectService */

    /***/
    function xUvI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MultiSelectService", function () {
        return MultiSelectService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services */
      "o0su");

      var MultiSelectService = /*#__PURE__*/function () {
        function MultiSelectService(_http) {
          _classCallCheck(this, MultiSelectService);

          this._http = _http;
          this.actionsEvent$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(MultiSelectService, [{
          key: "search",
          value: function search(url, pageSize, args) {
            console.log(args);
            return this._http.get("".concat(url, "?").concat(args, "&page_size=").concat(pageSize));
          }
        }]);

        return MultiSelectService;
      }();

      MultiSelectService.ɵfac = function MultiSelectService_Factory(t) {
        return new (t || MultiSelectService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services__WEBPACK_IMPORTED_MODULE_1__["HttpService"]));
      };

      MultiSelectService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: MultiSelectService,
        factory: MultiSelectService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "xtVc":
    /*!*******************************************************************************!*\
      !*** ./src/app/shared/filters/dropdown-filters/dropdown-filters.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: DropdownFiltersComponent */

    /***/
    function xtVc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DropdownFiltersComponent", function () {
        return DropdownFiltersComponent;
      });
      /* harmony import */


      var _filters_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../filters.component */
      "cuj7");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DropdownFiltersComponent = /*#__PURE__*/function (_filters_component__W) {
        _inherits(DropdownFiltersComponent, _filters_component__W);

        var _super4 = _createSuper(DropdownFiltersComponent);

        function DropdownFiltersComponent() {
          _classCallCheck(this, DropdownFiltersComponent);

          return _super4.apply(this, arguments);
        }

        return DropdownFiltersComponent;
      }(_filters_component__WEBPACK_IMPORTED_MODULE_0__["FiltersComponent"]);

      DropdownFiltersComponent.ɵfac = /*@__PURE__*/function () {
        var ɵDropdownFiltersComponent_BaseFactory;
        return function DropdownFiltersComponent_Factory(t) {
          return (ɵDropdownFiltersComponent_BaseFactory || (ɵDropdownFiltersComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DropdownFiltersComponent)))(t || DropdownFiltersComponent);
        };
      }();

      DropdownFiltersComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DropdownFiltersComponent,
        selectors: [["app-dropdown-filters"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
        decls: 0,
        vars: 0,
        template: function DropdownFiltersComponent_Template(rf, ctx) {},
        styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n\n.filters__item[_ngcontent-%COMP%] {\n  position: relative;\n  text-transform: capitalize;\n  background: #007bff;\n  padding: 10px;\n  border-radius: 5px;\n  max-width: 120px;\n  text-align: center;\n  color: white;\n}\n\n.filters__item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.filters__button-wrapper[_ngcontent-%COMP%] {\n  padding-top: 15px;\n  margin-left: 0;\n}\n\n.filters__collapsible-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.filters__collapsible-wrapper[_ngcontent-%COMP%]   .filters__button-wrapper[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  position: relative !important;\n  top: -59px !important;\n  left: -25px !important;\n  width: 100%;\n}\n\n.card[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  height: auto;\n  width: auto;\n  border-radius: 0.5rem;\n  border-color: #f5f5f5;\n}\n\n.card__body[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 2.8rem 2.6rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ZpbHRlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxXQUFBO0FBREo7O0FBS0k7RUFDSSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUZSOztBQUlRO0VBQ0ksZUFBQTtBQUZaOztBQU9RO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FBTFo7O0FBVVE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFSWjs7QUFVWTtFQUNJLGlCQUFBO0FBUmhCOztBQWtCSTtFQUNJLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFmUjs7QUFtQkE7RUFDSSx5QkF0RGdCO0VBdURoQixZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EscUJBMURnQjtBQTBDcEI7O0FBa0JJO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtBQWhCUiIsImZpbGUiOiJmaWx0ZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNhcmQtaGVhZGVyLWNvbG9yOiAjZjVmNWY1O1xuXG46aG9zdCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5maWx0ZXJzIHtcbiAgICAmX19pdGVtIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgYmFja2dyb3VuZDogIzAwN2JmZjtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBtYXgtd2lkdGg6IDEyMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgICAgICBpIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2J1dHRvbiB7XG4gICAgICAgICYtd3JhcHBlciB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fY29sbGFwc2libGUge1xuICAgICAgICAmLXdyYXBwZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgICAgICAgICAgIC5maWx0ZXJzX19idXR0b24td3JhcHBlciB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5kcm9wZG93bntcbiAgICAmLXRvZ2dsZSB7XG5cbiAgICB9XG4gICAgJi1tZW51IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gICAgICAgIHRvcDogLTU5cHggIWltcG9ydGFudDtcbiAgICAgICAgbGVmdDogLTI1cHggIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG4uY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNhcmQtaGVhZGVyLWNvbG9yO1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcbiAgICBib3JkZXItY29sb3I6ICRjYXJkLWhlYWRlci1jb2xvcjtcblxuICAgICZfX2JvZHkge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHBhZGRpbmc6IDIuOHJlbSAyLjZyZW07XG4gICAgfVxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "y8tC":
    /*!***************************************************!*\
      !*** ./src/app/services/errors/errors.service.ts ***!
      \***************************************************/

    /*! exports provided: ErrorsService */

    /***/
    function y8tC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorsService", function () {
        return ErrorsService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ErrorsService = function ErrorsService() {
        var _this34 = this;

        _classCallCheck(this, ErrorsService);

        this.errors = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();

        this.addErrors = function (errors) {
          return _this34.errors.next(errors);
        };

        this.getErrors = function () {
          return _this34.errors.asObservable();
        };
      };

      ErrorsService.ɵfac = function ErrorsService_Factory(t) {
        return new (t || ErrorsService)();
      };

      ErrorsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: ErrorsService,
        factory: ErrorsService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "zRYz":
    /*!**************************************************!*\
      !*** ./src/app/core/interceptors/interceptor.ts ***!
      \**************************************************/

    /*! exports provided: Interceptor */

    /***/
    function zRYz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Interceptor", function () {
        return Interceptor;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services */
      "o0su");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var endpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].APIEndpoint;

      var Interceptor = /*#__PURE__*/function () {
        function Interceptor(_authService, _route, _errorService, _storageService) {
          _classCallCheck(this, Interceptor);

          this._authService = _authService;
          this._route = _route;
          this._errorService = _errorService;
          this._storageService = _storageService;
        }

        _createClass(Interceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this35 = this;

            var tokenItems = JSON.parse(this._storageService.getItem('token') || '{}') || null;
            var token = tokenItems !== null || tokenItems !== {} ? tokenItems.token : null;
            console.log("Intercepiting...", token);

            if (token !== null && typeof token !== 'object') {
              var contentType = 'application/json';

              if (request.body instanceof FormData) {
                request = request.clone({
                  setHeaders: {
                    Authorization: "Bearer ".concat(token)
                  }
                });
              } else {
                request = request.clone({
                  setHeaders: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: "Bearer ".concat(token)
                  }
                });
              }
            } else {
              request = request.clone({
                setHeaders: {
                  'Content-Type': 'application/json',
                  Accept: 'application/json'
                }
              });
            }

            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
              var errorMessage = '';
              var errorGroup = [];

              if (error.error) {
                if (error.error.detail) {
                  errorMessage = error.error.detail;
                } else if (error.error.name) {
                  errorMessage = error.error.name[0];
                } else if (error.error.error_description) {
                  errorMessage = error.error.error_description;
                } else if (error.error.phone) {
                  errorMessage = error.error.phone[0];
                } else {
                  for (var x in error.error) {
                    errorGroup.push(error.error[x]);
                  }

                  errorMessage = errorGroup.toString();
                }
              } // else {


              var errorStatus;
              var errorStatusText;

              switch (error.status) {
                case 400:
                  return next.handle(request);

                case 401:
                  errorStatus = error.status;
                  errorStatusText = 'Oops! You are unauthorized to view this page';
                  console.log('REFRESH TOKEN ERROR:', error);

                  if (error.error.detail === 'Authentication credentials were not provided.') {
                    var params = {
                      token: tokenItems.token,
                      refresh_token: tokenItems.tokenRefresh
                    };

                    _this35._authService.refreshToken(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(function () {
                      var token = JSON.parse(_this35._storageService.getItem('token') || '{}').token;

                      if (token !== null || token !== {}) {
                        request = request.clone({
                          setHeaders: {
                            'Content-Type': 'application/json',
                            Accept: 'application/json',
                            Authorization: "Bearer ".concat(token)
                          }
                        });
                        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
                          console.error('Refresh Token Issue', err);
                          return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(err);
                        }));
                      }
                    });
                  } else {
                    //logout from account
                    _this35._route.navigate(['/signin']);
                  }

                  break;

                case 403:
                  errorStatus = error.status;
                  errorStatusText = 'Oops! You are unauthorized to view this page';

                  _this35._errorService.addErrors([errorStatusText]);

                  break;
                // case 403:
                //     errorStatus = error.status;
                //     errorStatusText = 'Oops! Media format of the requested data is unsupported';
                //     break;

                case 500:
                  if (/DoesNotExist|\/auth\/token/.test(error.error)) {
                    _this35._route.navigate(['/signin']);
                  }

                  errorStatus = error.status;
                  errorStatusText = 'Oops! You caught us doing some house keeping. Please come back in a few. Sorry for any inconvenience';

                  _this35._errorService.addErrors([errorStatusText]);

                  break;

                default:
                  errorStatus = 400;
                  errorStatusText = "Oops! Seems this page was not found";

                  _this35._errorService.addErrors([errorStatusText]);

                  break;
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(errorMessage);
            }));
          }
        }]);

        return Interceptor;
      }();

      Interceptor.ɵfac = function Interceptor_Factory(t) {
        return new (t || Interceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_services__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_services__WEBPACK_IMPORTED_MODULE_4__["ErrorsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_services__WEBPACK_IMPORTED_MODULE_4__["StorageService"]));
      };

      Interceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: Interceptor,
        factory: Interceptor.ɵfac
      });
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map