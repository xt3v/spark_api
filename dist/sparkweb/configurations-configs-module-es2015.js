(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["configurations-configs-module"],{

/***/ "05XM":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/configurations/price-group/list/price-group-list.component.ts ***!
  \***************************************************************************************/
/*! exports provided: PriceGroupListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceGroupListComponent", function() { return PriceGroupListComponent; });
/* harmony import */ var src_app_core_mixins_table_handle_actions_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/mixins/table-handle-actions-mixin */ "ZLRj");
/* harmony import */ var src_app_shared_tables_tables_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/tables/tables.component */ "QE/Q");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../options */ "77AZ");
/* harmony import */ var _sidemenu_configs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sidemenu-configs */ "9ZV9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_tables_tables_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/tables/tables.service */ "Mm8Z");
/* harmony import */ var src_app_shared_modals_modals_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/modals/modals.service */ "22UC");
/* harmony import */ var _shared_add_button_add_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/add-button/add-button.component */ "jUvn");
/* harmony import */ var _shared_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/side-menu/side-menu.component */ "A1vf");
/* harmony import */ var _shared_modals_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/modals/confirm-dialog/confirm-dialog.component */ "BsoD");












const TableHandleActionsMixin = Object(src_app_core_mixins_table_handle_actions_mixin__WEBPACK_IMPORTED_MODULE_0__["tableHandleActionsMixin"])(src_app_shared_tables_tables_component__WEBPACK_IMPORTED_MODULE_1__["TablesComponent"]);
class PriceGroupListComponent extends TableHandleActionsMixin {
    constructor(_router, _tableService, _modalService) {
        super();
        this._router = _router;
        this._tableService = _tableService;
        this._modalService = _modalService;
        this.formItems = _options__WEBPACK_IMPORTED_MODULE_2__["PriceGroupFields"];
        this.tableFiltersDropdown = [
            ["name"],
            ["description"]
        ];
        this.tableFiltersCollapsible = [
            ["name", "description"]
        ];
        this.sideMenuTitle = _sidemenu_configs__WEBPACK_IMPORTED_MODULE_3__["sideMenuOptions"].sideMenuTitle;
        this.sideMenuLists = _sidemenu_configs__WEBPACK_IMPORTED_MODULE_3__["sideMenuOptions"].list;
        this.url = "price-group-configs";
        this.headers = [
            "Name",
            "Description",
            "Type",
            "Days of Credit",
            "Daily Rate",
            "Number of Days",
            "Min activation amount",
            "Pay Go Provider Name",
            {
                name: 'Actions',
                type: "actions",
                source: "",
                data: [
                    "edit", "delete"
                ]
            },
        ];
    }
    ngOnInit() {
    }
    handleActions(action) {
        if (action.name == "edit") {
            this._router.navigate(['/configs/price-group/'], { state: { data: action.data } });
        }
        else {
            this.handleTableActions(action, '/configs/price-group', this.url);
        }
    }
}
PriceGroupListComponent.ɵfac = function PriceGroupListComponent_Factory(t) { return new (t || PriceGroupListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_tables_tables_service__WEBPACK_IMPORTED_MODULE_6__["TablesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_modals_modals_service__WEBPACK_IMPORTED_MODULE_7__["ModalsService"])); };
PriceGroupListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: PriceGroupListComponent, selectors: [["app-price-group-list"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 9, vars: 9, consts: [[1, "row"], [1, "col-sm-12"], [3, "url"], [1, "col-sm-3"], [3, "title", "lists", "active"], [1, "col-sm-9"], [3, "listTypeUrl", "headers", "tableFilters", "filterFormItems", "hasSideMenu", "actionsEvent"]], template: function PriceGroupListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-add-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "app-side-menu", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "app-tables", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("actionsEvent", function PriceGroupListComponent_Template_app_tables_actionsEvent_7_listener($event) { return ctx.handleActions($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "app-confirm-dialog");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("url", "/configs/price-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", ctx.sideMenuTitle)("lists", ctx.sideMenuLists)("active", "Price Group Configuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("listTypeUrl", ctx.url)("headers", ctx.headers)("tableFilters", ctx.tableFiltersCollapsible)("filterFormItems", ctx.formItems)("hasSideMenu", true);
    } }, directives: [_shared_add_button_add_button_component__WEBPACK_IMPORTED_MODULE_8__["AddButtonComponent"], _shared_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_9__["SideMenuComponent"], src_app_shared_tables_tables_component__WEBPACK_IMPORTED_MODULE_1__["TablesComponent"], _shared_modals_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmDialogComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmljZS1ncm91cC1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "5BlY":
/*!******************************************************************!*\
  !*** ./src/app/modules/configurations/configs-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: ConfigRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigRoutes", function() { return ConfigRoutes; });
/* harmony import */ var _item_type_item_type_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item-type/item-type.component */ "TNWi");
/* harmony import */ var _item_config_item_config_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-config/item-config.component */ "6CZ1");
/* harmony import */ var _box_config_box_config_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./box-config/box-config.component */ "s+WV");
/* harmony import */ var _item_config_list_item_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item-config/list/item-list.component */ "LqTu");
/* harmony import */ var _item_type_list_item_type_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./item-type/list/item-type-list.component */ "OZ3M");
/* harmony import */ var _box_config_list_box_config_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./box-config/list/box-config-list.component */ "p8NQ");
/* harmony import */ var _kit_config_kit_config_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./kit-config/kit-config.component */ "oiNr");
/* harmony import */ var _kit_config_list_kit_config_list_kit_config_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./kit-config/list/kit-config-list/kit-config-list.component */ "YikQ");
/* harmony import */ var _pay_go_provider_pay_go_provider_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pay-go-provider/pay-go-provider.component */ "hBgy");
/* harmony import */ var _pay_go_provider_list_pay_go_provider_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pay-go-provider/list/pay-go-provider-list.component */ "Ozig");
/* harmony import */ var _price_group_list_price_group_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./price-group/list/price-group-list.component */ "05XM");
/* harmony import */ var _price_group_price_group_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./price-group/price-group.component */ "rqpw");
/* harmony import */ var _product_config_list_product_config_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./product-config/list/product-config-list.component */ "jOZr");
/* harmony import */ var _product_config_product_config_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./product-config/product-config.component */ "s4vi");














const ConfigRoutes = [
    { path: '', redirectTo: 'list-item-type', pathMatch: 'full' },
    { path: 'item-type', component: _item_type_item_type_component__WEBPACK_IMPORTED_MODULE_0__["ItemTypeComponent"], data: { breadcrumb: 'Add Item Types' } },
    { path: 'list-item-type', component: _item_type_list_item_type_list_component__WEBPACK_IMPORTED_MODULE_4__["ItemTypeListComponent"], data: { breadcrumb: 'List Item Types' } },
    { path: 'item-config', component: _item_config_item_config_component__WEBPACK_IMPORTED_MODULE_1__["ItemConfigComponent"], data: { breadcrumb: 'Add Item Configuration' } },
    { path: 'list-item-configs', component: _item_config_list_item_list_component__WEBPACK_IMPORTED_MODULE_3__["ItemListComponent"], data: { breadcrumb: 'List Item Configs' } },
    { path: 'kit-config', component: _kit_config_kit_config_component__WEBPACK_IMPORTED_MODULE_6__["KitConfigComponent"], data: { breadcrumb: 'Add Kit Configuration' } },
    { path: 'list-kit-config', component: _kit_config_list_kit_config_list_kit_config_list_component__WEBPACK_IMPORTED_MODULE_7__["KitConfigListComponent"], data: { breadcrumb: 'List Kit Configuration' } },
    { path: 'box-config', component: _box_config_box_config_component__WEBPACK_IMPORTED_MODULE_2__["BoxConfigComponent"], data: { breadcrumb: 'Add Box Configuration' } },
    { path: 'list-box-config', component: _box_config_list_box_config_list_component__WEBPACK_IMPORTED_MODULE_5__["BoxConfigListComponent"], data: { breadcrumb: 'List Box Configuration' } },
    { path: 'pay-go-providers', component: _pay_go_provider_pay_go_provider_component__WEBPACK_IMPORTED_MODULE_8__["PayGoProviderComponent"], data: { breadcrumb: 'Add Pay Go Provider' } },
    { path: 'list-pay-go-providers', component: _pay_go_provider_list_pay_go_provider_list_component__WEBPACK_IMPORTED_MODULE_9__["PayGoProviderListComponent"], data: { breadcrumb: 'Pay Go Providers' } },
    { path: 'list-price-groups', component: _price_group_list_price_group_list_component__WEBPACK_IMPORTED_MODULE_10__["PriceGroupListComponent"], data: { breadcrumb: 'Price Groups' } },
    { path: 'price-group', component: _price_group_price_group_component__WEBPACK_IMPORTED_MODULE_11__["PriceGroupComponent"], data: { breadcrumb: 'Add Price Group' } },
    { path: 'list-product-configs', component: _product_config_list_product_config_list_component__WEBPACK_IMPORTED_MODULE_12__["ProductConfigListComponent"], data: { breadcrumb: 'Product Configuration' } },
    { path: 'product-config', component: _product_config_product_config_component__WEBPACK_IMPORTED_MODULE_13__["ProductConfigComponent"], data: { breadcrumb: 'Add Product Configuration' } },
];


/***/ }),

/***/ "6CZ1":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/configurations/item-config/item-config.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ItemConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemConfigComponent", function() { return ItemConfigComponent; });
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options */ "byV8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_myform_myform_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/myform/myform.component */ "l9h7");




class ItemConfigComponent {
    constructor(route) {
        this.route = route;
        this.formItems = _options__WEBPACK_IMPORTED_MODULE_0__["ItemConfigfields"];
        this.url = "item-configs/";
        this.formGroupOrder = [
            ['name'],
            ['type', 'has_serial'],
            ['description'],
        ];
        this.route.queryParams.subscribe(params => {
            if (params.hasOwnProperty("id")) {
                this.instance = params;
                console.log(this.instance);
            }
        });
    }
    ngOnInit() {
    }
    onValidatedData(data) {
    }
    onPostedData(data) {
        console.log(data);
    }
}
ItemConfigComponent.ɵfac = function ItemConfigComponent_Factory(t) { return new (t || ItemConfigComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ItemConfigComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ItemConfigComponent, selectors: [["app-item-config"]], decls: 3, vars: 8, consts: [[1, "row"], [1, "col-sm-12"], ["submitButtonText", "Create Item Config", 3, "isValidationOnly", "formItems", "url", "instance", "cardTitle", "submitButtonText", "formGroupOrder", "onValidatedData", "onPostedData"]], template: function ItemConfigComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "app-myform", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onValidatedData", function ItemConfigComponent_Template_app_myform_onValidatedData_2_listener($event) { return ctx.onValidatedData($event); })("onPostedData", function ItemConfigComponent_Template_app_myform_onPostedData_2_listener($event) { return ctx.onPostedData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isValidationOnly", false)("formItems", ctx.formItems)("url", ctx.url)("instance", ctx.instance)("cardTitle", "Add Item Configuration")("submitButtonText", "Item Configuration")("formGroupOrder", ctx.formGroupOrder)("cardTitle", "Item Configuration");
    } }, directives: [_shared_myform_myform_component__WEBPACK_IMPORTED_MODULE_3__["MyformComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpdGVtLWNvbmZpZy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "77AZ":
/*!***************************************************************!*\
  !*** ./src/app/modules/configurations/price-group/options.ts ***!
  \***************************************************************/
/*! exports provided: PriceGroupFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceGroupFields", function() { return PriceGroupFields; });
/* harmony import */ var _services_constants_form_options_configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/constants/form-options-configs */ "/In7");

const PriceGroupFields = {
    "name": "List Create Price Groups Api",
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
            "name": {
                "type": "string",
                "required": true,
                "read_only": false,
                "label": "Name"
            },
            "description": {
                "type": "string",
                "required": true,
                "read_only": false,
                "label": "Description",
                "max_length": 400
            },
            "type": {
                "type": "field",
                "required": false,
                "read_only": false,
                "label": "Type",
                "choices": [
                    {
                        "value": "I",
                        "display_name": "Installment"
                    },
                    {
                        "value": "C",
                        "display_name": "Cash"
                    }
                ]
            },
            "days_of_credit": {
                "type": "integer",
                "required": false,
                "read_only": false,
                "label": "Days of Credit"
            },
            "daily_rate": {
                "type": "integer",
                "required": false,
                "read_only": false,
                "label": "Daily Rate"
            },
            "number_of_days": {
                "type": "integer",
                "required": false,
                "read_only": false,
                "label": "Number of Days"
            },
            "min_activation_amount": {
                "type": "integer",
                "required": false,
                "read_only": false,
                "label": "Min. activation amount"
            },
            "cash_amount": {
                "type": "integer",
                "required": false,
                "read_only": false,
                "label": "Cash Amount"
            },
            "pay_go_provider": {
                "type": "field",
                "required": true,
                "read_only": false,
                "label": "Pay Go Provider",
                "display_name": "name",
                "url": `pay-go-providers/`
            },
            "created": {
                "type": "datetime",
                "required": false,
                "read_only": true,
                "label": "Created"
            },
            "modified": {
                "type": "datetime",
                "required": false,
                "read_only": true,
                "label": "Modified"
            },
            "pay_go_provider_name": {
                "type": "string",
                "required": false,
                "read_only": true,
                "label": "Pay Go Provider Name"
            }
        }
    }
};



/***/ }),

/***/ "9ZV9":
/*!************************************************************!*\
  !*** ./src/app/modules/configurations/sidemenu-configs.ts ***!
  \************************************************************/
/*! exports provided: sideMenuOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sideMenuOptions", function() { return sideMenuOptions; });
const sideMenuOptions = {
    sideMenuTitle: 'Configurations',
    list: [
        { name: 'Product Configuration', url: '/configs/list-product-configs' },
        { name: 'Box Configuration', url: '/configs/list-box-config' },
        { name: 'Kit Configuration', url: '/configs/list-kit-config' },
        { name: 'Item Configuration', url: '/configs/list-item-configs' },
        { name: 'Item Type Configuration', url: '/configs/list-item-type' },
        { name: 'Pay Go Provider Configuration', url: '/configs/list-pay-go-providers' },
        { name: 'Price Group Configuration', url: '/configs/list-price-groups' },
        { name: 'User Role Configuration', url: '#' }
    ]
};


/***/ }),

/***/ "KqZb":
/*!******************************************************************!*\
  !*** ./src/app/modules/configurations/product-config/options.ts ***!
  \******************************************************************/
/*! exports provided: ProductFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFields", function() { return ProductFields; });
/* harmony import */ var _services_constants_form_options_configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/constants/form-options-configs */ "/In7");

const ProductFields = {
    "name": "List Create Pay Go Providers Api",
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
            "name": {
                "type": "string",
                "required": true,
                "read_only": false,
                "label": "Name"
            },
            "description": {
                "type": "string",
                "required": true,
                "read_only": false,
                "label": "Description",
                "max_length": 400
            },
            "kit_config": {
                "type": "field",
                "required": true,
                "read_only": false,
                "label": "Kit Configuration",
                "url": `kit-configs/`,
                "display_name": "name"
            },
            "price_group_config": {
                "type": "field",
                "required": true,
                "read_only": false,
                "label": "Price Group Config",
                "url": `price-group-configs/`,
                "display_name": "name"
            },
            "kit_configuration_details": {
                "type": "field",
                "required": false,
                "read_only": true,
                "label": "Kit Configuration Details",
                "child": {
                    "type": "nested object",
                    "required": false,
                    "read_only": true,
                    "children": {
                        "id": {
                            "type": "integer",
                            "required": false,
                            "read_only": true,
                            "label": "ID"
                        },
                    }
                }
            },
            "created": {
                "type": "datetime",
                "required": false,
                "read_only": true,
                "label": "Created"
            },
            "modified": {
                "type": "datetime",
                "required": false,
                "read_only": true,
                "label": "Modified"
            }
        }
    }
};



/***/ }),

/***/ "LqTu":
/*!********************************************************************************!*\
  !*** ./src/app/modules/configurations/item-config/list/item-list.component.ts ***!
  \********************************************************************************/
/*! exports provided: ItemListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemListComponent", function() { return ItemListComponent; });
/* harmony import */ var src_app_core_mixins_table_handle_actions_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/mixins/table-handle-actions-mixin */ "ZLRj");
/* harmony import */ var src_app_shared_tables_tables_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/tables/tables.component */ "QE/Q");
/* harmony import */ var _sidemenu_configs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../sidemenu-configs */ "9ZV9");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../options */ "byV8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_modals_modals_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/modals/modals.service */ "22UC");
/* harmony import */ var src_app_shared_tables_tables_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/tables/tables.service */ "Mm8Z");
/* harmony import */ var _shared_add_button_add_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/add-button/add-button.component */ "jUvn");
/* harmony import */ var _shared_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/side-menu/side-menu.component */ "A1vf");
/* harmony import */ var _shared_modals_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/modals/confirm-dialog/confirm-dialog.component */ "BsoD");












const TableHandleActionsMixin = Object(src_app_core_mixins_table_handle_actions_mixin__WEBPACK_IMPORTED_MODULE_0__["tableHandleActionsMixin"])(src_app_shared_tables_tables_component__WEBPACK_IMPORTED_MODULE_1__["TablesComponent"]);
class ItemListComponent extends TableHandleActionsMixin {
    constructor(_router, 
    // private route: ActivatedRoute,
    _modalService, _tableService) {
        super();
        this._router = _router;
        this._modalService = _modalService;
        this._tableService = _tableService;
        this.url = "item-configs";
        this.headers = [
            "Name",
            {
                name: "Type",
                source: "type_name"
            },
            "Description",
            {
                name: 'Actions',
                type: "actions",
                source: "",
                data: [
                    "edit", "delete"
                ]
            },
        ];
        this.formItems = _options__WEBPACK_IMPORTED_MODULE_3__["ItemConfigfields"];
        this.tableFiltersDropdown = [
            ["type"],
            ["has_serial"]
        ];
        this.tableFiltersCollapsible = [
            ["type", "has_serial"]
        ];
        this.sideMenuTitle = _sidemenu_configs__WEBPACK_IMPORTED_MODULE_2__["sideMenuOptions"].sideMenuTitle;
        this.sideMenuLists = _sidemenu_configs__WEBPACK_IMPORTED_MODULE_2__["sideMenuOptions"].list;
    }
    ngOnInit() {
    }
    handleActions(action) {
        this.handleTableActions(action, '/configs/item-config', this.url);
    }
}
ItemListComponent.ɵfac = function ItemListComponent_Factory(t) { return new (t || ItemListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_modals_modals_service__WEBPACK_IMPORTED_MODULE_6__["ModalsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_tables_tables_service__WEBPACK_IMPORTED_MODULE_7__["TablesService"])); };
ItemListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ItemListComponent, selectors: [["app-item-list"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 9, vars: 9, consts: [[1, "row"], [1, "col-sm-11"], [3, "url"], [1, "col-sm-3"], [3, "title", "lists", "active"], [1, "col-sm-9"], [3, "listTypeUrl", "headers", "tableFilters", "filterFormItems", "hasSideMenu", "actionsEvent"]], template: function ItemListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-add-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "app-side-menu", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "app-tables", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("actionsEvent", function ItemListComponent_Template_app_tables_actionsEvent_7_listener($event) { return ctx.handleActions($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "app-confirm-dialog");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("url", "/configs/item-config");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", ctx.sideMenuTitle)("lists", ctx.sideMenuLists)("active", "Item Configuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("listTypeUrl", ctx.url)("headers", ctx.headers)("tableFilters", ctx.tableFiltersCollapsible)("filterFormItems", ctx.formItems)("hasSideMenu", true);
    } }, directives: [_shared_add_button_add_button_component__WEBPACK_IMPORTED_MODULE_8__["AddButtonComponent"], _shared_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_9__["SideMenuComponent"], src_app_shared_tables_tables_component__WEBPACK_IMPORTED_MODULE_1__["TablesComponent"], _shared_modals_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmDialogComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpdGVtLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "O2WQ":
/*!**************************************************************!*\
  !*** ./src/app/modules/configurations/box-config/options.ts ***!
  \**************************************************************/
/*! exports provided: BoxConfigfields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxConfigfields", function() { return BoxConfigfields; });
/* harmony import */ var _services_constants_form_options_configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/constants/form-options-configs */ "/In7");

const BoxConfigfields = {
    "name": "List Create Box Configs Api",
    "description": "",
    renders: _services_constants_form_options_configs__WEBPACK_IMPORTED_MODULE_0__["renders"],
    parses: _services_constants_form_options_configs__WEBPACK_IMPORTED_MODULE_0__["parses"],
    // "renders": [
    //     "application/json",
    //     "text/html"
    // ],
    // "parses": [
    //     "application/json",
    //     "application/x-www-form-urlencoded",
    //     "multipart/form-data"
    // ],
    "actions": {
        "POST": {
            "id": {
                "type": "integer",
                "required": false,
                "read_only": true,
                "label": "ID"
            },
            "items_details": {
                "type": "field",
                "required": false,
                "read_only": true,
                "label": "Items details",
                "child": {
                    "type": "nested object",
                    "required": false,
                    "read_only": true,
                    "children": {
                        "id": {
                            "type": "integer",
                            "required": false,
                            "read_only": true,
                            "label": "ID"
                        },
                        "type_name": {
                            "type": "string",
                            "required": false,
                            "read_only": true,
                            "label": "Type name"
                        },
                        "created": {
                            "type": "datetime",
                            "required": false,
                            "read_only": true,
                            "label": "Created"
                        },
                        "modified": {
                            "type": "datetime",
                            "required": false,
                            "read_only": true,
                            "label": "Modified"
                        },
                        "name": {
                            "type": "string",
                            "required": true,
                            "read_only": false,
                            "label": "Name",
                            "max_length": 50
                        },
                        "description": {
                            "type": "string",
                            "required": true,
                            "read_only": false,
                            "label": "Description",
                            "max_length": 400
                        },
                        "has_serial": {
                            "type": "boolean",
                            "required": false,
                            "read_only": false,
                            "label": "Has serial"
                        },
                        "type": {
                            "type": "field",
                            "required": true,
                            "read_only": false,
                            "label": "Type"
                        }
                    }
                }
            },
            "created": {
                "type": "datetime",
                "required": false,
                "read_only": true,
                "label": "Created"
            },
            "modified": {
                "type": "datetime",
                "required": false,
                "read_only": true,
                "label": "Modified"
            },
            "name": {
                "type": "string",
                "required": true,
                "read_only": false,
                "label": "Name",
                "max_length": 50
            },
            "description": {
                "type": "string",
                "required": true,
                "read_only": false,
                "label": "Description",
                "max_length": 400
            },
            "items": {
                "type": "multifield",
                "required": true,
                "read_only": false,
                "label": "Items",
                "display_name": "name",
                "value_field": "id",
                "edit_source_field": "items_details",
                "multiple": true,
                "url": `item-configs/`,
                "search_field": "name",
                "edit_display_name": "item_name",
                "res_value_field": "item_config"
            }
        }
    }
};



/***/ }),

/***/ "OZ3M":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/configurations/item-type/list/item-type-list.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ItemTypeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemTypeListComponent", function() { return ItemTypeListComponent; });
/* harmony import */ var src_app_core_mixins_table_handle_actions_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/mixins/table-handle-actions-mixin */ "ZLRj");
/* harmony import */ var src_app_shared_tables_tables_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/tables/tables.component */ "QE/Q");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../options */ "S6FL");
/* harmony import */ var _sidemenu_configs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sidemenu-configs */ "9ZV9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_modals_modals_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/modals/modals.service */ "22UC");
/* harmony import */ var src_app_shared_tables_tables_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/tables/tables.service */ "Mm8Z");
/* harmony import */ var _shared_add_button_add_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/add-button/add-button.component */ "jUvn");
/* harmony import */ var _shared_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/side-menu/side-menu.component */ "A1vf");
/* harmony import */ var _shared_modals_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/modals/confirm-dialog/confirm-dialog.component */ "BsoD");












const TableHandleActionsMixin = Object(src_app_core_mixins_table_handle_actions_mixin__WEBPACK_IMPORTED_MODULE_0__["tableHandleActionsMixin"])(src_app_shared_tables_tables_component__WEBPACK_IMPORTED_MODULE_1__["TablesComponent"]);
class ItemTypeListComponent extends TableHandleActionsMixin {
    constructor(_router, _modalService, _tableService) {
        super();
        this._router = _router;
        this._modalService = _modalService;
        this._tableService = _tableService;
        this.url = "item-type-configs";
        this.headers = [
            "Name",
            "Description",
            {
                name: 'Actions',
                type: "actions",
                source: "",
                data: [
                    "edit", "delete"
                ]
            },
        ];
        this.formItems = _options__WEBPACK_IMPORTED_MODULE_2__["ItemTypeConfigfields"];
        this.tableFiltersDropdown = [
            ["name"],
        ];
        this.tableFiltersCollapsible = [
            ["name"]
        ];
        this.sideMenuTitle = _sidemenu_configs__WEBPACK_IMPORTED_MODULE_3__["sideMenuOptions"].sideMenuTitle;
        this.sideMenuLists = _sidemenu_configs__WEBPACK_IMPORTED_MODULE_3__["sideMenuOptions"].list;
    }
    ngOnInit() {
    }
    handleActions(action) {
        this.handleTableActions(action, '/configs/item-type', this.url);
    }
}
ItemTypeListComponent.ɵfac = function ItemTypeListComponent_Factory(t) { return new (t || ItemTypeListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_modals_modals_service__WEBPACK_IMPORTED_MODULE_6__["ModalsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_tables_tables_service__WEBPACK_IMPORTED_MODULE_7__["TablesService"])); };
ItemTypeListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ItemTypeListComponent, selectors: [["app-item-type-list"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 9, vars: 9, consts: [[1, "row"], [1, "col-sm-12"], [3, "url"], [1, "col-sm-3"], [3, "title", "lists", "active"], [1, "col-sm-9"], [3, "listTypeUrl", "headers", "tableFilters", "filterFormItems", "hasSideMenu", "actionsEvent"]], template: function ItemTypeListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-add-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "app-side-menu", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "app-tables", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("actionsEvent", function ItemTypeListComponent_Template_app_tables_actionsEvent_7_listener($event) { return ctx.handleActions($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "app-confirm-dialog");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("url", "/configs/item-type");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", ctx.sideMenuTitle)("lists", ctx.sideMenuLists)("active", "Item Type Configuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("listTypeUrl", ctx.url)("headers", ctx.headers)("tableFilters", ctx.tableFiltersCollapsible)("filterFormItems", ctx.formItems)("hasSideMenu", true);
    } }, directives: [_shared_add_button_add_button_component__WEBPACK_IMPORTED_MODULE_8__["AddButtonComponent"], _shared_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_9__["SideMenuComponent"], src_app_shared_tables_tables_component__WEBPACK_IMPORTED_MODULE_1__["TablesComponent"], _shared_modals_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmDialogComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpdGVtLXR5cGUtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "Ozig":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/configurations/pay-go-provider/list/pay-go-provider-list.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: PayGoProviderListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayGoProviderListComponent", function() { return PayGoProviderListComponent; });
/* harmony import */ var _sidemenu_configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../sidemenu-configs */ "9ZV9");
/* harmony import */ var src_app_core_mixins_table_handle_actions_mixin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/mixins/table-handle-actions-mixin */ "ZLRj");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../options */ "su4U");
/* harmony import */ var src_app_shared_tables_tables_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/tables/tables.component */ "QE/Q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_tables_tables_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/tables/tables.service */ "Mm8Z");
/* harmony import */ var src_app_shared_modals_modals_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/modals/modals.service */ "22UC");
/* harmony import */ var _shared_add_button_add_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/add-button/add-button.component */ "jUvn");
/* harmony import */ var _shared_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/side-menu/side-menu.component */ "A1vf");
/* harmony import */ var _shared_modals_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/modals/confirm-dialog/confirm-dialog.component */ "BsoD");












const TableHandleActionsMixin = Object(src_app_core_mixins_table_handle_actions_mixin__WEBPACK_IMPORTED_MODULE_1__["tableHandleActionsMixin"])(src_app_shared_tables_tables_component__WEBPACK_IMPORTED_MODULE_3__["TablesComponent"]);
class PayGoProviderListComponent extends TableHandleActionsMixin {
    constructor(_router, _tableService, _modalService) {
        super();
        this._router = _router;
        this._tableService = _tableService;
        this._modalService = _modalService;
        this.formItems = _options__WEBPACK_IMPORTED_MODULE_2__["PayGoProviderFields"];
        this.tableFiltersDropdown = [
            ["name"],
            ["description"]
        ];
        this.tableFiltersCollapsible = [
            ["name", "description"]
        ];
        this.sideMenuTitle = _sidemenu_configs__WEBPACK_IMPORTED_MODULE_0__["sideMenuOptions"].sideMenuTitle;
        this.sideMenuLists = _sidemenu_configs__WEBPACK_IMPORTED_MODULE_0__["sideMenuOptions"].list;
        this.url = "pay-go-providers";
        this.headers = [
            "Name",
            "Description",
            {
                name: 'Actions',
                type: "actions",
                source: "",
                data: [
                    "edit", "delete"
                ]
            },
        ];
    }
    ngOnInit() {
    }
    handleActions(action) {
        if (action.name == "edit") {
            this._router.navigate(['/configs/pay-go-providers'], { state: { data: action.data } });
        }
        else {
            console.log("Delete triggered");
            this.handleTableActions(action, '/configs/pay-go-providers', this.url);
        }
    }
}
PayGoProviderListComponent.ɵfac = function PayGoProviderListComponent_Factory(t) { return new (t || PayGoProviderListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_tables_tables_service__WEBPACK_IMPORTED_MODULE_6__["TablesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_modals_modals_service__WEBPACK_IMPORTED_MODULE_7__["ModalsService"])); };
PayGoProviderListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: PayGoProviderListComponent, selectors: [["app-pay-go-provider-list"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 9, vars: 9, consts: [[1, "row"], [1, "col-sm-12"], [3, "url"], [1, "col-sm-3"], [3, "title", "lists", "active"], [1, "col-sm-9"], [3, "listTypeUrl", "headers", "tableFilters", "filterFormItems", "hasSideMenu", "actionsEvent"]], template: function PayGoProviderListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-add-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "app-side-menu", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "app-tables", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("actionsEvent", function PayGoProviderListComponent_Template_app_tables_actionsEvent_7_listener($event) { return ctx.handleActions($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "app-confirm-dialog");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("url", "/configs/pay-go-providers");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", ctx.sideMenuTitle)("lists", ctx.sideMenuLists)("active", "Pay Go Provider Configuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("listTypeUrl", ctx.url)("headers", ctx.headers)("tableFilters", ctx.tableFiltersCollapsible)("filterFormItems", ctx.formItems)("hasSideMenu", true);
    } }, directives: [_shared_add_button_add_button_component__WEBPACK_IMPORTED_MODULE_8__["AddButtonComponent"], _shared_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_9__["SideMenuComponent"], src_app_shared_tables_tables_component__WEBPACK_IMPORTED_MODULE_3__["TablesComponent"], _shared_modals_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmDialogComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXktZ28tcHJvdmlkZXItbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "QpH0":
/*!**************************************************************!*\
  !*** ./src/app/modules/configurations/kit-config/options.ts ***!
  \**************************************************************/
/*! exports provided: KitConfigFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KitConfigFields", function() { return KitConfigFields; });
/* harmony import */ var _services_constants_form_options_configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/constants/form-options-configs */ "/In7");

const KitConfigFields = {
    "name": "List Create Kit Configs Api",
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
            "boxes_details": {
                "type": "field",
                "required": false,
                "read_only": true,
                "label": "Boxes details",
                "child": {
                    "type": "nested object",
                    "required": false,
                    "read_only": true,
                    "children": {
                        "id": {
                            "type": "integer",
                            "required": false,
                            "read_only": true,
                            "label": "ID"
                        },
                        "items_details": {
                            "type": "field",
                            "required": false,
                            "read_only": true,
                            "label": "Items details",
                            "child": {
                                "type": "nested object",
                                "required": false,
                                "read_only": true,
                                "children": {
                                    "id": {
                                        "type": "integer",
                                        "required": false,
                                        "read_only": true,
                                        "label": "ID"
                                    },
                                    "item_name": {
                                        "type": "string",
                                        "required": false,
                                        "read_only": true,
                                        "label": "Item name"
                                    },
                                    "type": {
                                        "type": "string",
                                        "required": false,
                                        "read_only": true,
                                        "label": "Type"
                                    },
                                    "type_name": {
                                        "type": "string",
                                        "required": false,
                                        "read_only": true,
                                        "label": "Type name"
                                    },
                                    "created": {
                                        "type": "datetime",
                                        "required": false,
                                        "read_only": true,
                                        "label": "Created"
                                    },
                                    "modified": {
                                        "type": "datetime",
                                        "required": false,
                                        "read_only": true,
                                        "label": "Modified"
                                    },
                                    "count": {
                                        "type": "integer",
                                        "required": false,
                                        "read_only": false,
                                        "label": "Count"
                                    },
                                    "box_config": {
                                        "type": "field",
                                        "required": false,
                                        "read_only": false,
                                        "label": "Box config"
                                    },
                                    "item_config": {
                                        "type": "field",
                                        "required": true,
                                        "read_only": false,
                                        "label": "Item config"
                                    }
                                }
                            }
                        },
                        "items": {
                            "type": "field",
                            "required": true,
                            "read_only": false,
                            "label": "Items",
                            "child": {
                                "type": "nested object",
                                "required": true,
                                "read_only": false,
                                "children": {
                                    "id": {
                                        "type": "integer",
                                        "required": false,
                                        "read_only": true,
                                        "label": "ID"
                                    },
                                    "item_name": {
                                        "type": "string",
                                        "required": false,
                                        "read_only": true,
                                        "label": "Item name"
                                    },
                                    "type": {
                                        "type": "string",
                                        "required": false,
                                        "read_only": true,
                                        "label": "Type"
                                    },
                                    "type_name": {
                                        "type": "string",
                                        "required": false,
                                        "read_only": true,
                                        "label": "Type name"
                                    },
                                    "created": {
                                        "type": "datetime",
                                        "required": false,
                                        "read_only": true,
                                        "label": "Created"
                                    },
                                    "modified": {
                                        "type": "datetime",
                                        "required": false,
                                        "read_only": true,
                                        "label": "Modified"
                                    },
                                    "count": {
                                        "type": "integer",
                                        "required": false,
                                        "read_only": false,
                                        "label": "Count"
                                    },
                                    "box_config": {
                                        "type": "field",
                                        "required": false,
                                        "read_only": false,
                                        "label": "Box config"
                                    },
                                    "item_config": {
                                        "type": "field",
                                        "required": true,
                                        "read_only": false,
                                        "label": "Item config"
                                    }
                                }
                            }
                        },
                        "created": {
                            "type": "datetime",
                            "required": false,
                            "read_only": true,
                            "label": "Created"
                        },
                        "modified": {
                            "type": "datetime",
                            "required": false,
                            "read_only": true,
                            "label": "Modified"
                        },
                        "name": {
                            "type": "string",
                            "required": true,
                            "read_only": false,
                            "label": "Name",
                            "max_length": 50
                        },
                        "description": {
                            "type": "string",
                            "required": true,
                            "read_only": false,
                            "label": "Description",
                            "max_length": 400
                        }
                    }
                }
            },
            "created": {
                "type": "datetime",
                "required": false,
                "read_only": true,
                "label": "Created"
            },
            "modified": {
                "type": "datetime",
                "required": false,
                "read_only": true,
                "label": "Modified"
            },
            "name": {
                "type": "string",
                "required": true,
                "read_only": false,
                "label": "Name",
                "max_length": 50
            },
            "description": {
                "type": "string",
                "required": true,
                "read_only": false,
                "label": "Description",
                "max_length": 400
            },
            "serial": {
                "type": "string",
                "required": false,
                "read_only": false,
                "label": "Serial",
                "max_length": 45
            },
            "boxes": {
                "type": "field",
                "multiple": true,
                "required": true,
                "read_only": false,
                "label": "Item Type",
                "display_name": "name",
                "url": `box-configs/`
            }
        }
    }
};


/***/ }),

/***/ "S6FL":
/*!*************************************************************!*\
  !*** ./src/app/modules/configurations/item-type/options.ts ***!
  \*************************************************************/
/*! exports provided: ItemTypeConfigfields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemTypeConfigfields", function() { return ItemTypeConfigfields; });
const ItemTypeConfigfields = {
    "name": "List Create Item Type Configs Api",
    "description": "",
    "renders": [
        "application/json",
        "text/html"
    ],
    "parses": [
        "application/json",
        "application/x-www-form-urlencoded",
        "multipart/form-data"
    ],
    "actions": {
        "POST": {
            "id": {
                "type": "integer",
                "required": false,
                "read_only": true,
                "label": "ID"
            },
            "created": {
                "type": "datetime",
                "required": false,
                "read_only": true,
                "label": "Created"
            },
            "modified": {
                "type": "datetime",
                "required": false,
                "read_only": true,
                "label": "Modified"
            },
            "name": {
                "type": "string",
                "required": true,
                "read_only": false,
                "label": "Name",
                "max_length": 50
            },
            "description": {
                "type": "string",
                "required": true,
                "read_only": false,
                "label": "Description",
                "max_length": 400
            }
        }
    }
};



/***/ }),

/***/ "TNWi":
/*!*************************************************************************!*\
  !*** ./src/app/modules/configurations/item-type/item-type.component.ts ***!
  \*************************************************************************/
/*! exports provided: ItemTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemTypeComponent", function() { return ItemTypeComponent; });
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options */ "S6FL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_myform_myform_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/myform/myform.component */ "l9h7");




class ItemTypeComponent {
    constructor(route) {
        this.route = route;
        // formItems$: Observable<FormBase<any>[]>;
        this.formItems = _options__WEBPACK_IMPORTED_MODULE_0__["ItemTypeConfigfields"];
        this.url = "item-type-configs/";
        this.formGroupOrder = [
            ['name'],
            ['description']
        ];
        this.route.queryParams.subscribe(params => {
            if (params.hasOwnProperty("id")) {
                this.instance = params;
                console.log(this.instance);
            }
        });
    }
    onPostedData(data) {
        console.log(data);
    }
    ngOnInit() {
    }
}
ItemTypeComponent.ɵfac = function ItemTypeComponent_Factory(t) { return new (t || ItemTypeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ItemTypeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ItemTypeComponent, selectors: [["app-item-type"]], decls: 1, vars: 6, consts: [["submitButtonText", "Item Type", 3, "formItems", "url", "cardTitle", "submitButtonText", "instance", "formGroupOrder", "onPostedData"]], template: function ItemTypeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-myform", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onPostedData", function ItemTypeComponent_Template_app_myform_onPostedData_0_listener($event) { return ctx.onPostedData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formItems", ctx.formItems)("url", ctx.url)("cardTitle", "Item Type Configuration")("submitButtonText", "Add Item Type")("instance", ctx.instance)("formGroupOrder", ctx.formGroupOrder);
    } }, directives: [_shared_myform_myform_component__WEBPACK_IMPORTED_MODULE_3__["MyformComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpdGVtLXR5cGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "YikQ":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/configurations/kit-config/list/kit-config-list/kit-config-list.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: KitConfigListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KitConfigListComponent", function() { return KitConfigListComponent; });
/* harmony import */ var src_app_core_mixins_table_handle_actions_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/mixins/table-handle-actions-mixin */ "ZLRj");
/* harmony import */ var src_app_shared_tables_tables_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/tables/tables.component */ "QE/Q");
/* harmony import */ var _sidemenu_configs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../sidemenu-configs */ "9ZV9");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../options */ "QpH0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_modals_modals_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/modals/modals.service */ "22UC");
/* harmony import */ var src_app_shared_tables_tables_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/tables/tables.service */ "Mm8Z");
/* harmony import */ var _shared_add_button_add_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/add-button/add-button.component */ "jUvn");
/* harmony import */ var _shared_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/side-menu/side-menu.component */ "A1vf");
/* harmony import */ var _shared_modals_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../shared/modals/confirm-dialog/confirm-dialog.component */ "BsoD");












const TableHandleActionsMixin = Object(src_app_core_mixins_table_handle_actions_mixin__WEBPACK_IMPORTED_MODULE_0__["tableHandleActionsMixin"])(src_app_shared_tables_tables_component__WEBPACK_IMPORTED_MODULE_1__["TablesComponent"]);
class KitConfigListComponent extends TableHandleActionsMixin {
    constructor(_router, _modalService, _tableService) {
        super();
        this._router = _router;
        this._modalService = _modalService;
        this._tableService = _tableService;
        this.formItems = _options__WEBPACK_IMPORTED_MODULE_3__["KitConfigFields"];
        this.tableFiltersDropdown = [
            ["serial"],
            ["boxes"]
        ];
        this.tableFiltersCollapsible = [
            ["serial", "boxes"]
        ];
        this.sideMenuTitle = _sidemenu_configs__WEBPACK_IMPORTED_MODULE_2__["sideMenuOptions"].sideMenuTitle;
        this.sideMenuLists = _sidemenu_configs__WEBPACK_IMPORTED_MODULE_2__["sideMenuOptions"].list;
        this.url = "kit-configs";
        this.headers = [
            "Name",
            "Description",
            {
                name: "Box",
                source: "boxes_details",
                display_name: "name"
            },
            {
                name: 'Actions',
                type: "actions",
                source: "",
                data: [
                    "edit", "delete"
                ]
            },
        ];
    }
    ngOnInit() {
    }
    handleActions(action) {
        if (action.name == "edit") {
            this._router.navigate(['/configs/kit-config'], { state: { data: action.data } });
        }
        else {
            this.handleTableActions(action, '/configs/kit-config', this.url);
        }
    }
}
KitConfigListComponent.ɵfac = function KitConfigListComponent_Factory(t) { return new (t || KitConfigListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_modals_modals_service__WEBPACK_IMPORTED_MODULE_6__["ModalsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_tables_tables_service__WEBPACK_IMPORTED_MODULE_7__["TablesService"])); };
KitConfigListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: KitConfigListComponent, selectors: [["app-kit-config-list"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 9, vars: 9, consts: [[1, "row"], [1, "col-sm-12"], [3, "url"], [1, "col-sm-3"], [3, "title", "lists", "active"], [1, "col-sm-9"], [3, "listTypeUrl", "headers", "tableFilters", "filterFormItems", "hasSideMenu", "actionsEvent"]], template: function KitConfigListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-add-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "app-side-menu", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "app-tables", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("actionsEvent", function KitConfigListComponent_Template_app_tables_actionsEvent_7_listener($event) { return ctx.handleActions($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "app-confirm-dialog");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("url", "/configs/kit-config");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", ctx.sideMenuTitle)("lists", ctx.sideMenuLists)("active", "Kit Configuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("listTypeUrl", ctx.url)("headers", ctx.headers)("tableFilters", ctx.tableFiltersCollapsible)("filterFormItems", ctx.formItems)("hasSideMenu", true);
    } }, directives: [_shared_add_button_add_button_component__WEBPACK_IMPORTED_MODULE_8__["AddButtonComponent"], _shared_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_9__["SideMenuComponent"], src_app_shared_tables_tables_component__WEBPACK_IMPORTED_MODULE_1__["TablesComponent"], _shared_modals_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmDialogComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJraXQtY29uZmlnLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "byV8":
/*!***************************************************************!*\
  !*** ./src/app/modules/configurations/item-config/options.ts ***!
  \***************************************************************/
/*! exports provided: ItemConfigfields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemConfigfields", function() { return ItemConfigfields; });
/* harmony import */ var _services_constants_form_options_configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/constants/form-options-configs */ "/In7");

const ItemConfigfields = {
    "name": "List Create Item Configs Api",
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
            "type_name": {
                "type": "string",
                "required": false,
                "read_only": true,
                "label": "Type name"
            },
            "created": {
                "type": "datetime",
                "required": false,
                "read_only": true,
                "label": "Created"
            },
            "modified": {
                "type": "datetime",
                "required": false,
                "read_only": true,
                "label": "Modified"
            },
            "name": {
                "type": "string",
                "required": true,
                "read_only": false,
                "label": "Name",
                "max_length": 50
            },
            "description": {
                "type": "string",
                "required": true,
                "read_only": false,
                "label": "Description",
                "max_length": 400
            },
            "has_serial": {
                "type": "boolean",
                "required": false,
                "read_only": false,
                "label": "Has serial No.?"
            },
            "type": {
                "type": "field",
                "required": true,
                "read_only": false,
                "label": "Item Type",
                "display_name": "name",
                "url": `item-type-configs/`
            }
        }
    }
};



/***/ }),

/***/ "hBgy":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/configurations/pay-go-provider/pay-go-provider.component.ts ***!
  \*************************************************************************************/
/*! exports provided: PayGoProviderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayGoProviderComponent", function() { return PayGoProviderComponent; });
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options */ "su4U");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_myform_myform_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/myform/myform.component */ "l9h7");




class PayGoProviderComponent {
    constructor(_router) {
        this._router = _router;
        this.formItems = _options__WEBPACK_IMPORTED_MODULE_0__["PayGoProviderFields"];
        this.url = "pay-go-providers/";
        this.formGroupOrder = [
            ['name'],
            ['description']
        ];
        this.instance = history.state.data;
    }
    ngOnInit() {
    }
    onValidatedData(data) {
        console.log(data);
    }
    onPostedData(data) {
        console.log(data);
    }
}
PayGoProviderComponent.ɵfac = function PayGoProviderComponent_Factory(t) { return new (t || PayGoProviderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
PayGoProviderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PayGoProviderComponent, selectors: [["app-pay-go-provider"]], decls: 2, vars: 6, consts: [[1, "col-sm-12"], ["submitButtonText", "Pay Go Provider", 3, "isValidationOnly", "formItems", "url", "instance", "formGroupOrder", "cardTitle", "onValidatedData", "onPostedData"]], template: function PayGoProviderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-myform", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onValidatedData", function PayGoProviderComponent_Template_app_myform_onValidatedData_1_listener($event) { return ctx.onValidatedData($event); })("onPostedData", function PayGoProviderComponent_Template_app_myform_onPostedData_1_listener($event) { return ctx.onPostedData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isValidationOnly", false)("formItems", ctx.formItems)("url", ctx.url)("instance", ctx.instance)("formGroupOrder", ctx.formGroupOrder)("cardTitle", "Pay Go Provider Configuration");
    } }, directives: [_shared_myform_myform_component__WEBPACK_IMPORTED_MODULE_3__["MyformComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXktZ28tcHJvdmlkZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "jOZr":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/configurations/product-config/list/product-config-list.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ProductConfigListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductConfigListComponent", function() { return ProductConfigListComponent; });
/* harmony import */ var src_app_core_mixins_table_handle_actions_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/mixins/table-handle-actions-mixin */ "ZLRj");
/* harmony import */ var src_app_shared_tables_tables_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/tables/tables.component */ "QE/Q");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../options */ "KqZb");
/* harmony import */ var _sidemenu_configs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sidemenu-configs */ "9ZV9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_tables_tables_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/tables/tables.service */ "Mm8Z");
/* harmony import */ var src_app_shared_modals_modals_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/modals/modals.service */ "22UC");
/* harmony import */ var _shared_add_button_add_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/add-button/add-button.component */ "jUvn");
/* harmony import */ var _shared_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/side-menu/side-menu.component */ "A1vf");
/* harmony import */ var _shared_modals_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/modals/confirm-dialog/confirm-dialog.component */ "BsoD");












const TableHandleActionsMixin = Object(src_app_core_mixins_table_handle_actions_mixin__WEBPACK_IMPORTED_MODULE_0__["tableHandleActionsMixin"])(src_app_shared_tables_tables_component__WEBPACK_IMPORTED_MODULE_1__["TablesComponent"]);
class ProductConfigListComponent extends TableHandleActionsMixin {
    constructor(_router, _tableService, _modalService) {
        super();
        this._router = _router;
        this._tableService = _tableService;
        this._modalService = _modalService;
        this.formItems = _options__WEBPACK_IMPORTED_MODULE_2__["ProductFields"];
        this.tableFiltersDropdown = [
            ["name"],
            ["description"]
        ];
        this.tableFiltersCollapsible = [
            ["name", "description"]
        ];
        this.sideMenuTitle = _sidemenu_configs__WEBPACK_IMPORTED_MODULE_3__["sideMenuOptions"].sideMenuTitle;
        this.sideMenuLists = _sidemenu_configs__WEBPACK_IMPORTED_MODULE_3__["sideMenuOptions"].list;
        this.url = "product-configs";
        this.headers = [
            "Name",
            "Description",
            {
                "name": "Kit Configuration",
                "source": "kit_configuration_details.name"
            },
            {
                "name": "Price Group Configuration",
                "source": "price_group_config_details.name"
            },
            {
                name: 'Actions',
                type: "actions",
                source: "",
                data: [
                    "edit", "delete"
                ]
            },
        ];
    }
    ngOnInit() {
    }
    handleActions(action) {
        if (action.name == "edit") {
            this._router.navigate(['/configs/product-config/'], { state: { data: action.data } });
        }
        else {
            this.handleTableActions(action, '/configs/product-config', this.url);
        }
    }
}
ProductConfigListComponent.ɵfac = function ProductConfigListComponent_Factory(t) { return new (t || ProductConfigListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_tables_tables_service__WEBPACK_IMPORTED_MODULE_6__["TablesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_modals_modals_service__WEBPACK_IMPORTED_MODULE_7__["ModalsService"])); };
ProductConfigListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ProductConfigListComponent, selectors: [["app-product-config-list"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 9, vars: 9, consts: [[1, "row"], [1, "col-sm-12"], [3, "url"], [1, "col-sm-3"], [3, "title", "lists", "active"], [1, "col-sm-9"], [3, "listTypeUrl", "headers", "tableFilters", "filterFormItems", "hasSideMenu", "actionsEvent"]], template: function ProductConfigListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-add-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "app-side-menu", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "app-tables", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("actionsEvent", function ProductConfigListComponent_Template_app_tables_actionsEvent_7_listener($event) { return ctx.handleActions($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "app-confirm-dialog");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("url", "/configs/product-config");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", ctx.sideMenuTitle)("lists", ctx.sideMenuLists)("active", "Product Configuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("listTypeUrl", ctx.url)("headers", ctx.headers)("tableFilters", ctx.tableFiltersCollapsible)("filterFormItems", ctx.formItems)("hasSideMenu", true);
    } }, directives: [_shared_add_button_add_button_component__WEBPACK_IMPORTED_MODULE_8__["AddButtonComponent"], _shared_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_9__["SideMenuComponent"], src_app_shared_tables_tables_component__WEBPACK_IMPORTED_MODULE_1__["TablesComponent"], _shared_modals_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmDialogComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWNvbmZpZy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "oiNr":
/*!***************************************************************************!*\
  !*** ./src/app/modules/configurations/kit-config/kit-config.component.ts ***!
  \***************************************************************************/
/*! exports provided: KitConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KitConfigComponent", function() { return KitConfigComponent; });
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options */ "QpH0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_myform_myform_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/myform/myform.component */ "l9h7");



class KitConfigComponent {
    constructor() {
        this.formItems = _options__WEBPACK_IMPORTED_MODULE_0__["KitConfigFields"];
        this.url = "kit-configs/";
        this.formGroupOrder = [
            ['name'],
            ['description'],
            ['boxes']
        ];
        this.instance = history.state.data;
    }
    ngOnInit() {
    }
    onValidatedData(data) {
        console.log(data);
    }
    onPostedData(data) {
        console.log(data);
    }
}
KitConfigComponent.ɵfac = function KitConfigComponent_Factory(t) { return new (t || KitConfigComponent)(); };
KitConfigComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: KitConfigComponent, selectors: [["app-kit-config"]], decls: 2, vars: 6, consts: [[1, "col-sm-12"], ["submitButtonText", "Kit Config", 3, "isValidationOnly", "formItems", "url", "instance", "formGroupOrder", "cardTitle", "onValidatedData", "onPostedData"]], template: function KitConfigComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-myform", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onValidatedData", function KitConfigComponent_Template_app_myform_onValidatedData_1_listener($event) { return ctx.onValidatedData($event); })("onPostedData", function KitConfigComponent_Template_app_myform_onPostedData_1_listener($event) { return ctx.onPostedData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isValidationOnly", false)("formItems", ctx.formItems)("url", ctx.url)("instance", ctx.instance)("formGroupOrder", ctx.formGroupOrder)("cardTitle", "Kit Configuration");
    } }, directives: [_shared_myform_myform_component__WEBPACK_IMPORTED_MODULE_2__["MyformComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJraXQtY29uZmlnLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "p8NQ":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/configurations/box-config/list/box-config-list.component.ts ***!
  \*************************************************************************************/
/*! exports provided: BoxConfigListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxConfigListComponent", function() { return BoxConfigListComponent; });
/* harmony import */ var src_app_core_mixins_table_handle_actions_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/mixins/table-handle-actions-mixin */ "ZLRj");
/* harmony import */ var src_app_shared_tables_tables_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/tables/tables.component */ "QE/Q");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../options */ "O2WQ");
/* harmony import */ var _sidemenu_configs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sidemenu-configs */ "9ZV9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_modals_modals_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/modals/modals.service */ "22UC");
/* harmony import */ var src_app_shared_tables_tables_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/tables/tables.service */ "Mm8Z");
/* harmony import */ var _shared_add_button_add_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/add-button/add-button.component */ "jUvn");
/* harmony import */ var _shared_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/side-menu/side-menu.component */ "A1vf");
/* harmony import */ var _shared_modals_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/modals/confirm-dialog/confirm-dialog.component */ "BsoD");












const TableHandleActionsMixin = Object(src_app_core_mixins_table_handle_actions_mixin__WEBPACK_IMPORTED_MODULE_0__["tableHandleActionsMixin"])(src_app_shared_tables_tables_component__WEBPACK_IMPORTED_MODULE_1__["TablesComponent"]);
class BoxConfigListComponent extends TableHandleActionsMixin {
    constructor(_router, _modalService, _tableService) {
        super();
        this._router = _router;
        this._modalService = _modalService;
        this._tableService = _tableService;
        this.formItems = _options__WEBPACK_IMPORTED_MODULE_2__["BoxConfigfields"];
        this.tableFiltersDropdown = [
            ["name"],
            ["description"]
        ];
        this.tableFiltersCollapsible = [
            ["name", "description"]
        ];
        this.sideMenuTitle = _sidemenu_configs__WEBPACK_IMPORTED_MODULE_3__["sideMenuOptions"].sideMenuTitle;
        this.sideMenuLists = _sidemenu_configs__WEBPACK_IMPORTED_MODULE_3__["sideMenuOptions"].list;
        this.url = "box-configs";
        this.headers = [
            "Name",
            "Description",
            {
                name: "Items in Kit",
                source: "items_details.length",
            },
            {
                name: 'Actions',
                type: "actions",
                source: "",
                data: [
                    "edit", "delete"
                ]
            },
        ];
        this.tableFilters = ["Name"];
    }
    ngOnInit() {
    }
    handleActions(action) {
        if (action.name == "edit") {
            this._router.navigate(['/configs/box-config'], { state: { data: action.data } });
        }
        else {
            this.handleTableActions(action, '/configs/box-config', this.url);
        }
    }
}
BoxConfigListComponent.ɵfac = function BoxConfigListComponent_Factory(t) { return new (t || BoxConfigListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_modals_modals_service__WEBPACK_IMPORTED_MODULE_6__["ModalsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_tables_tables_service__WEBPACK_IMPORTED_MODULE_7__["TablesService"])); };
BoxConfigListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: BoxConfigListComponent, selectors: [["app-box-config-list"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 9, vars: 9, consts: [[1, "row"], [1, "col-sm-12"], [3, "url"], [1, "col-sm-3"], [3, "title", "lists", "active"], [1, "col-sm-9"], [3, "listTypeUrl", "headers", "tableFilters", "filterFormItems", "hasSideMenu", "actionsEvent"]], template: function BoxConfigListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-add-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "app-side-menu", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "app-tables", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("actionsEvent", function BoxConfigListComponent_Template_app_tables_actionsEvent_7_listener($event) { return ctx.handleActions($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "app-confirm-dialog");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("url", "/configs/box-config");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", ctx.sideMenuTitle)("lists", ctx.sideMenuLists)("active", "Box Configuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("listTypeUrl", ctx.url)("headers", ctx.headers)("tableFilters", ctx.tableFiltersCollapsible)("filterFormItems", ctx.formItems)("hasSideMenu", true);
    } }, directives: [_shared_add_button_add_button_component__WEBPACK_IMPORTED_MODULE_8__["AddButtonComponent"], _shared_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_9__["SideMenuComponent"], src_app_shared_tables_tables_component__WEBPACK_IMPORTED_MODULE_1__["TablesComponent"], _shared_modals_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmDialogComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib3gtY29uZmlnLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "rY4F":
/*!**********************************************************!*\
  !*** ./src/app/modules/configurations/configs.module.ts ***!
  \**********************************************************/
/*! exports provided: ConfigsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigsModule", function() { return ConfigsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var src_app_core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/core.module */ "pKmL");
/* harmony import */ var _item_type_item_type_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./item-type/item-type.component */ "TNWi");
/* harmony import */ var _configs_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./configs-routing.module */ "5BlY");
/* harmony import */ var _item_config_item_config_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./item-config/item-config.component */ "6CZ1");
/* harmony import */ var _box_config_box_config_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./box-config/box-config.component */ "s+WV");
/* harmony import */ var _item_config_list_item_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./item-config/list/item-list.component */ "LqTu");
/* harmony import */ var _item_type_list_item_type_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./item-type/list/item-type-list.component */ "OZ3M");
/* harmony import */ var _box_config_list_box_config_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./box-config/list/box-config-list.component */ "p8NQ");
/* harmony import */ var _kit_config_kit_config_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./kit-config/kit-config.component */ "oiNr");
/* harmony import */ var _kit_config_list_kit_config_list_kit_config_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./kit-config/list/kit-config-list/kit-config-list.component */ "YikQ");
/* harmony import */ var _pay_go_provider_pay_go_provider_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pay-go-provider/pay-go-provider.component */ "hBgy");
/* harmony import */ var _pay_go_provider_list_pay_go_provider_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pay-go-provider/list/pay-go-provider-list.component */ "Ozig");
/* harmony import */ var _price_group_price_group_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./price-group/price-group.component */ "rqpw");
/* harmony import */ var _price_group_list_price_group_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./price-group/list/price-group-list.component */ "05XM");
/* harmony import */ var _product_config_product_config_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./product-config/product-config.component */ "s4vi");
/* harmony import */ var _product_config_list_product_config_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./product-config/list/product-config-list.component */ "jOZr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ "fXoL");






















class ConfigsModule {
}
ConfigsModule.ɵfac = function ConfigsModule_Factory(t) { return new (t || ConfigsModule)(); };
ConfigsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({ type: ConfigsModule });
ConfigsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_configs_routing_module__WEBPACK_IMPORTED_MODULE_6__["ConfigRoutes"]),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            src_app_core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](ConfigsModule, { declarations: [_item_type_item_type_component__WEBPACK_IMPORTED_MODULE_5__["ItemTypeComponent"],
        _item_config_item_config_component__WEBPACK_IMPORTED_MODULE_7__["ItemConfigComponent"],
        _box_config_box_config_component__WEBPACK_IMPORTED_MODULE_8__["BoxConfigComponent"],
        _item_config_list_item_list_component__WEBPACK_IMPORTED_MODULE_9__["ItemListComponent"],
        _item_type_list_item_type_list_component__WEBPACK_IMPORTED_MODULE_10__["ItemTypeListComponent"],
        _box_config_list_box_config_list_component__WEBPACK_IMPORTED_MODULE_11__["BoxConfigListComponent"],
        _kit_config_kit_config_component__WEBPACK_IMPORTED_MODULE_12__["KitConfigComponent"],
        _kit_config_list_kit_config_list_kit_config_list_component__WEBPACK_IMPORTED_MODULE_13__["KitConfigListComponent"],
        _pay_go_provider_pay_go_provider_component__WEBPACK_IMPORTED_MODULE_14__["PayGoProviderComponent"],
        _pay_go_provider_list_pay_go_provider_list_component__WEBPACK_IMPORTED_MODULE_15__["PayGoProviderListComponent"],
        _price_group_price_group_component__WEBPACK_IMPORTED_MODULE_16__["PriceGroupComponent"],
        _price_group_list_price_group_list_component__WEBPACK_IMPORTED_MODULE_17__["PriceGroupListComponent"],
        _product_config_product_config_component__WEBPACK_IMPORTED_MODULE_18__["ProductConfigComponent"],
        _product_config_list_product_config_list_component__WEBPACK_IMPORTED_MODULE_19__["ProductConfigListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        src_app_core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"]] }); })();


/***/ }),

/***/ "rqpw":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/configurations/price-group/price-group.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PriceGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceGroupComponent", function() { return PriceGroupComponent; });
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options */ "77AZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_myform_myform_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/myform/myform.component */ "l9h7");




class PriceGroupComponent {
    constructor(_router) {
        this._router = _router;
        this.formItems = _options__WEBPACK_IMPORTED_MODULE_0__["PriceGroupFields"];
        this.url = "price-group-configs/";
        this.formGroupOrder = [
            ['name', 'type', 'days_of_credit', 'daily_rate'],
            ['pay_go_provider', 'number_of_days', 'min_activation_amount', 'cash_amount'],
            ['description'],
        ];
        this.instance = history.state.data;
    }
    ngOnInit() {
    }
    onValidatedData(data) {
        console.log(data);
    }
    onPostedData(data) {
        console.log(data);
    }
}
PriceGroupComponent.ɵfac = function PriceGroupComponent_Factory(t) { return new (t || PriceGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
PriceGroupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PriceGroupComponent, selectors: [["app-price-group"]], decls: 2, vars: 6, consts: [[1, "col-sm-12"], ["submitButtonText", "Price Group", 3, "isValidationOnly", "formItems", "url", "instance", "formGroupOrder", "cardTitle", "onValidatedData", "onPostedData"]], template: function PriceGroupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-myform", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onValidatedData", function PriceGroupComponent_Template_app_myform_onValidatedData_1_listener($event) { return ctx.onValidatedData($event); })("onPostedData", function PriceGroupComponent_Template_app_myform_onPostedData_1_listener($event) { return ctx.onPostedData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isValidationOnly", false)("formItems", ctx.formItems)("url", ctx.url)("instance", ctx.instance)("formGroupOrder", ctx.formGroupOrder)("cardTitle", "Price Group Configuration");
    } }, directives: [_shared_myform_myform_component__WEBPACK_IMPORTED_MODULE_3__["MyformComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmljZS1ncm91cC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "s+WV":
/*!***************************************************************************!*\
  !*** ./src/app/modules/configurations/box-config/box-config.component.ts ***!
  \***************************************************************************/
/*! exports provided: BoxConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxConfigComponent", function() { return BoxConfigComponent; });
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options */ "O2WQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_myform_myform_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/myform/myform.component */ "l9h7");



class BoxConfigComponent {
    constructor() {
        this.formItems = _options__WEBPACK_IMPORTED_MODULE_0__["BoxConfigfields"];
        this.url = "box-configs/";
        this.formGroupOrder = [
            ['name'],
            ['description'],
            ['items']
        ];
        this.instance = history.state.data;
    }
    ngOnInit() {
    }
    onValidatedData(data) {
        console.log(data);
    }
    onPostedData(data) {
        console.log(data);
    }
}
BoxConfigComponent.ɵfac = function BoxConfigComponent_Factory(t) { return new (t || BoxConfigComponent)(); };
BoxConfigComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BoxConfigComponent, selectors: [["app-box-config"]], decls: 2, vars: 6, consts: [[1, "col-sm-12"], ["submitButtonText", "Box Config", 3, "isValidationOnly", "formItems", "url", "instance", "formGroupOrder", "cardTitle", "onValidatedData", "onPostedData"]], template: function BoxConfigComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-myform", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onValidatedData", function BoxConfigComponent_Template_app_myform_onValidatedData_1_listener($event) { return ctx.onValidatedData($event); })("onPostedData", function BoxConfigComponent_Template_app_myform_onPostedData_1_listener($event) { return ctx.onPostedData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isValidationOnly", false)("formItems", ctx.formItems)("url", ctx.url)("instance", ctx.instance)("formGroupOrder", ctx.formGroupOrder)("cardTitle", "Box Configuration");
    } }, directives: [_shared_myform_myform_component__WEBPACK_IMPORTED_MODULE_2__["MyformComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib3gtY29uZmlnLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "s4vi":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/configurations/product-config/product-config.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ProductConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductConfigComponent", function() { return ProductConfigComponent; });
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options */ "KqZb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_myform_myform_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/myform/myform.component */ "l9h7");




class ProductConfigComponent {
    constructor(_router) {
        this._router = _router;
        this.formItems = _options__WEBPACK_IMPORTED_MODULE_0__["ProductFields"];
        this.url = "product-configs/";
        this.formGroupOrder = [
            ['name', 'kit_config', 'price_group_config'],
            ['description'],
        ];
        this.instance = history.state.data;
    }
    ngOnInit() {
    }
    onValidatedData(data) {
        console.log(data);
    }
    onPostedData(data) {
        console.log(data);
    }
}
ProductConfigComponent.ɵfac = function ProductConfigComponent_Factory(t) { return new (t || ProductConfigComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ProductConfigComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProductConfigComponent, selectors: [["app-product-config"]], decls: 2, vars: 6, consts: [[1, "col-sm-12"], ["submitButtonText", "Product Configuration", 3, "isValidationOnly", "formItems", "url", "instance", "formGroupOrder", "cardTitle", "onValidatedData", "onPostedData"]], template: function ProductConfigComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-myform", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onValidatedData", function ProductConfigComponent_Template_app_myform_onValidatedData_1_listener($event) { return ctx.onValidatedData($event); })("onPostedData", function ProductConfigComponent_Template_app_myform_onPostedData_1_listener($event) { return ctx.onPostedData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isValidationOnly", false)("formItems", ctx.formItems)("url", ctx.url)("instance", ctx.instance)("formGroupOrder", ctx.formGroupOrder)("cardTitle", "Product Configuration");
    } }, directives: [_shared_myform_myform_component__WEBPACK_IMPORTED_MODULE_3__["MyformComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWNvbmZpZy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "su4U":
/*!*******************************************************************!*\
  !*** ./src/app/modules/configurations/pay-go-provider/options.ts ***!
  \*******************************************************************/
/*! exports provided: PayGoProviderFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayGoProviderFields", function() { return PayGoProviderFields; });
/* harmony import */ var _services_constants_form_options_configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/constants/form-options-configs */ "/In7");

const PayGoProviderFields = {
    "name": "List Create Pay Go Providers Api",
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
            "name": {
                "type": "string",
                "required": true,
                "read_only": false,
                "label": "Name"
            },
            "description": {
                "type": "string",
                "required": true,
                "read_only": false,
                "label": "Description",
                "max_length": 400
            },
            "created": {
                "type": "datetime",
                "required": false,
                "read_only": true,
                "label": "Created"
            },
            "modified": {
                "type": "datetime",
                "required": false,
                "read_only": true,
                "label": "Modified"
            }
        }
    }
};



/***/ })

}]);
//# sourceMappingURL=configurations-configs-module-es2015.js.map