(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["accounts-accounts-module"], {
    /***/
    "E1DO":
    /*!*************************************************************!*\
      !*** ./src/app/modules/accounts/accounts-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: AccountsRoutes */

    /***/
    function E1DO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountsRoutes", function () {
        return AccountsRoutes;
      });
      /* harmony import */


      var _add_add_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./add/add.component */
      "tVW+");
      /* harmony import */


      var _list_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./list/list.component */
      "WaDw");

      var AccountsRoutes = [{
        path: '',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_1__["ListComponent"],
        data: {
          breadcrumb: 'Accounts'
        }
      }, {
        path: 'add',
        component: _add_add_component__WEBPACK_IMPORTED_MODULE_0__["AddComponent"],
        data: {
          breadcrumb: 'Add Accounts'
        }
      }];
      /***/
    },

    /***/
    "I89L":
    /*!*****************************************************!*\
      !*** ./src/app/modules/accounts/accounts.module.ts ***!
      \*****************************************************/

    /*! exports provided: AccountsModule */

    /***/
    function I89L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountsModule", function () {
        return AccountsModule;
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


      var _accounts_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./accounts-routing.module */
      "E1DO");
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "PCNd");
      /* harmony import */


      var _add_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./add/add.component */
      "tVW+");
      /* harmony import */


      var _list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./list/list.component */
      "WaDw");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AccountsModule = function AccountsModule() {
        _classCallCheck(this, AccountsModule);
      };

      AccountsModule.ɵfac = function AccountsModule_Factory(t) {
        return new (t || AccountsModule)();
      };

      AccountsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: AccountsModule
      });
      AccountsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_accounts_routing_module__WEBPACK_IMPORTED_MODULE_2__["AccountsRoutes"]), src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AccountsModule, {
          declarations: [_add_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
        });
      })();
      /***/

    },

    /***/
    "IWO6":
    /*!*********************************************!*\
      !*** ./src/app/modules/accounts/options.ts ***!
      \*********************************************/

    /*! exports provided: optionsField */

    /***/
    function IWO6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "optionsField", function () {
        return optionsField;
      });
      /* harmony import */


      var _services_constants_form_options_configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../services/constants/form-options-configs */
      "/In7");

      var optionsField = {
        "name": "Create List User",
        "description": "",
        renders: _services_constants_form_options_configs__WEBPACK_IMPORTED_MODULE_0__["renders"],
        parses: _services_constants_form_options_configs__WEBPACK_IMPORTED_MODULE_0__["parses"],
        "actions": {
          "POST": {
            "id": {
              "type": "integer",
              "required": false,
              "read_only": true,
              "label": "ID"
            },
            "image": {
              "type": "image upload",
              "required": false,
              "read_only": false,
              "label": "Image"
            },
            "profile_image": {
              "type": "field",
              "required": false,
              "read_only": true,
              "label": "Profile image"
            },
            "full_name": {
              "type": "string",
              "required": false,
              "read_only": true,
              "label": "Full name"
            },
            "password": {
              "type": "string",
              "required": true,
              "read_only": false,
              "label": "Password",
              "max_length": 128
            },
            "last_login": {
              "type": "datetime",
              "required": false,
              "read_only": false,
              "label": "Last login"
            },
            "username": {
              "type": "string",
              "required": false,
              "read_only": false,
              "label": "Username",
              "help_text": "Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.",
              "max_length": 150
            },
            "first_name": {
              "type": "string",
              "required": false,
              "read_only": false,
              "label": "First name",
              "max_length": 150
            },
            "last_name": {
              "type": "string",
              "required": false,
              "read_only": false,
              "label": "Last name",
              "max_length": 150
            },
            "date_joined": {
              "type": "datetime",
              "required": false,
              "read_only": false,
              "label": "Date joined"
            },
            "role": {
              "type": "choice",
              "required": false,
              "read_only": false,
              "label": "Role",
              "choices": [{
                "value": "ST",
                "display_name": "Store Keeper"
              }, {
                "value": "AD",
                "display_name": "Admin"
              }, {
                "value": "IN",
                "display_name": "Installer"
              }, {
                "value": "SR",
                "display_name": "Sales Rep"
              }, {
                "value": "TL",
                "display_name": "Team Lead"
              }, {
                "value": "CS",
                "display_name": "Call Support"
              }]
            },
            "phone": {
              "type": "string",
              "required": true,
              "read_only": false,
              "label": "Phone",
              "max_length": 50
            },
            "google_profile_image": {
              "type": "url",
              "required": false,
              "read_only": false,
              "label": "Google profile image",
              "max_length": 200
            },
            "verified": {
              "type": "boolean",
              "required": false,
              "read_only": false,
              "label": "Verified"
            },
            "dummy": {
              "type": "boolean",
              "required": false,
              "read_only": false,
              "label": "Dummy"
            },
            "available": {
              "type": "boolean",
              "required": false,
              "read_only": true,
              "label": "Available"
            },
            "email": {
              "type": "email",
              "required": true,
              "read_only": false,
              "label": "Email",
              "max_length": 254
            },
            "id_number": {
              "type": "string",
              "required": false,
              "read_only": false,
              "label": "Id number",
              "max_length": 20
            }
          }
        }
      };
      /***/
    },

    /***/
    "WaDw":
    /*!*********************************************************!*\
      !*** ./src/app/modules/accounts/list/list.component.ts ***!
      \*********************************************************/

    /*! exports provided: ListComponent */

    /***/
    function WaDw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListComponent", function () {
        return ListComponent;
      });
      /* harmony import */


      var src_app_core_mixins_table_handle_actions_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/core/mixins/table-handle-actions-mixin */
      "ZLRj");
      /* harmony import */


      var src_app_shared_tables_tables_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/tables/tables.component */
      "QE/Q");
      /* harmony import */


      var _options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../options */
      "IWO6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_shared_modals_modals_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/modals/modals.service */
      "22UC");
      /* harmony import */


      var src_app_shared_tables_tables_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/tables/tables.service */
      "Mm8Z");
      /* harmony import */


      var _shared_add_button_add_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../shared/add-button/add-button.component */
      "jUvn");
      /* harmony import */


      var _shared_filters_dropdown_filters_dropdown_filters_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../shared/filters/dropdown-filters/dropdown-filters.component */
      "xtVc");
      /* harmony import */


      var _shared_modals_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../shared/modals/confirm-dialog/confirm-dialog.component */
      "BsoD");

      var TableHandleActionsMixin = Object(src_app_core_mixins_table_handle_actions_mixin__WEBPACK_IMPORTED_MODULE_0__["tableHandleActionsMixin"])(src_app_shared_tables_tables_component__WEBPACK_IMPORTED_MODULE_1__["TablesComponent"]);

      var ListComponent = /*#__PURE__*/function (_TableHandleActionsMi) {
        _inherits(ListComponent, _TableHandleActionsMi);

        var _super = _createSuper(ListComponent);

        function ListComponent(_router, _modalService, _tableService) {
          var _this;

          _classCallCheck(this, ListComponent);

          _this = _super.call(this);
          _this._router = _router;
          _this._modalService = _modalService;
          _this._tableService = _tableService;
          _this.formItems = _options__WEBPACK_IMPORTED_MODULE_2__["optionsField"];
          _this.tableFiltersDropdown = [["first_name"]];
          _this.url = "users";
          _this.apiUrl = "users";
          _this.headers = [{
            name: 'ID',
            source: "id"
          }, {
            name: 'Username',
            source: "username"
          }, {
            name: 'Name',
            source: "full_name"
          }, {
            name: 'Role',
            source: "role.choices.display_name"
          }, {
            name: 'Phone',
            source: "phone"
          }, {
            name: 'Email Address',
            source: "email"
          }, {
            name: 'Actions',
            type: "actions",
            source: "",
            data: ["edit", "delete"]
          }];
          return _this;
        }

        _createClass(ListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "handleActions",
          value: function handleActions(action) {
            this.handleTableActions(action, '/accounts/add', this.apiUrl);
          }
        }]);

        return ListComponent;
      }(TableHandleActionsMixin);

      ListComponent.ɵfac = function ListComponent_Factory(t) {
        return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_modals_modals_service__WEBPACK_IMPORTED_MODULE_5__["ModalsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_tables_tables_service__WEBPACK_IMPORTED_MODULE_6__["TablesService"]));
      };

      ListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: ListComponent,
        selectors: [["app-list"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
        decls: 9,
        vars: 9,
        consts: [[1, "row"], [1, "col-sm-12"], [3, "url"], [1, "col-sm-3"], [3, "url", "filterUrl", "formItems", "formGroupOrder"], [1, "col-sm-9"], [3, "listTypeUrl", "headers", "tableFilters", "filterFormItems", "actionsEvent"]],
        template: function ListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-add-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "app-dropdown-filters", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "app-tables", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("actionsEvent", function ListComponent_Template_app_tables_actionsEvent_7_listener($event) {
              return ctx.handleActions($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "app-confirm-dialog");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("url", "/accounts/add");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("url", ctx.listTypeUrl)("filterUrl", ctx.listTypeUrl)("formItems", ctx.formItems)("formGroupOrder", ctx.tableFiltersDropdown);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("listTypeUrl", ctx.url)("headers", ctx.headers)("tableFilters", ctx.tableFiltersCollapsible)("filterFormItems", ctx.formItems);
          }
        },
        directives: [_shared_add_button_add_button_component__WEBPACK_IMPORTED_MODULE_7__["AddButtonComponent"], _shared_filters_dropdown_filters_dropdown_filters_component__WEBPACK_IMPORTED_MODULE_8__["DropdownFiltersComponent"], src_app_shared_tables_tables_component__WEBPACK_IMPORTED_MODULE_1__["TablesComponent"], _shared_modals_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmDialogComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "tVW+":
    /*!*******************************************************!*\
      !*** ./src/app/modules/accounts/add/add.component.ts ***!
      \*******************************************************/

    /*! exports provided: AddComponent */

    /***/
    function tVW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddComponent", function () {
        return AddComponent;
      });
      /* harmony import */


      var _accounts_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../accounts/options */
      "IWO6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_shared_modals_modals_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/modals/modals.service */
      "22UC");
      /* harmony import */


      var _shared_myform_myform_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../shared/myform/myform.component */
      "l9h7");

      var AddComponent = /*#__PURE__*/function () {
        function AddComponent(_activatedRoute, _modalService) {
          var _this2 = this;

          _classCallCheck(this, AddComponent);

          this._activatedRoute = _activatedRoute;
          this._modalService = _modalService;
          this.formItems = _accounts_options__WEBPACK_IMPORTED_MODULE_0__["optionsField"];
          this.url = 'users/';
          this.formGroupOrder = [['username'], ['first_name'], ['last_name'], ['role'], ['phone'], ['email']];
          this.extraParams = {
            type: 'WH'
          };

          this._activatedRoute.queryParamMap.subscribe(function (params) {
            if (params.hasOwnProperty('id')) {
              _this2.instance = params;
              console.log(_this2.instance);
            }
          });
        }

        _createClass(AddComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onValidatedData",
          value: function onValidatedData(data) {
            console.log(data);
          }
        }, {
          key: "onPostedData",
          value: function onPostedData(data) {
            console.log(data);
          }
        }]);

        return AddComponent;
      }();

      AddComponent.ɵfac = function AddComponent_Factory(t) {
        return new (t || AddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_modals_modals_service__WEBPACK_IMPORTED_MODULE_3__["ModalsService"]));
      };

      AddComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AddComponent,
        selectors: [["app-add"]],
        decls: 1,
        vars: 7,
        consts: [["submitButtonText", "Account", 3, "isValidationOnly", "formItems", "url", "extraParams", "instance", "formGroupOrder", "cardTitle", "onValidatedData", "onPostedData"]],
        template: function AddComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-myform", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onValidatedData", function AddComponent_Template_app_myform_onValidatedData_0_listener($event) {
              return ctx.onValidatedData($event);
            })("onPostedData", function AddComponent_Template_app_myform_onPostedData_0_listener($event) {
              return ctx.onPostedData($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isValidationOnly", false)("formItems", ctx.formItems)("url", ctx.url)("extraParams", ctx.extraParams)("instance", ctx.instance)("formGroupOrder", ctx.formGroupOrder)("cardTitle", "Accounts");
          }
        },
        directives: [_shared_myform_myform_component__WEBPACK_IMPORTED_MODULE_4__["MyformComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=accounts-accounts-module-es5.js.map