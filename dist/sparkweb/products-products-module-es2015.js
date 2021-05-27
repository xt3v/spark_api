(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-products-module"],{

/***/ "4k8T":
/*!***************************************************************!*\
  !*** ./src/app/modules/inventory/products/products.module.ts ***!
  \***************************************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _list_products_list_products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-products/list-products.component */ "mTt+");
/* harmony import */ var _add_products_add_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-products/add-products.component */ "D/xm");
/* harmony import */ var _products_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products-routing.module */ "sH8I");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








class ProductsModule {
}
ProductsModule.ɵfac = function ProductsModule_Factory(t) { return new (t || ProductsModule)(); };
ProductsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: ProductsModule });
ProductsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(_products_routing_module__WEBPACK_IMPORTED_MODULE_4__["InventoryProductsRoutes"]),
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ProductsModule, { declarations: [_list_products_list_products_component__WEBPACK_IMPORTED_MODULE_2__["ListProductsComponent"], _add_products_add_products_component__WEBPACK_IMPORTED_MODULE_3__["AddProductsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]] }); })();


/***/ }),

/***/ "7wXl":
/*!*******************************************************!*\
  !*** ./src/app/modules/inventory/products/options.ts ***!
  \*******************************************************/
/*! exports provided: optionsField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionsField", function() { return optionsField; });
/* harmony import */ var _services_constants_form_options_configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/constants/form-options-configs */ "/In7");

const optionsField = {
    "name": "List Create Products Api",
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
            "boxes_config_details": {
                "type": "field",
                "required": false,
                "read_only": true,
                "label": "Boxes config details",
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
            "customer": {
                "type": "field",
                "required": true,
                "read_only": false,
                "label": "Customer",
                "display_name": "name",
                "url": `customers/`
                //     "type": "multifield",
                //     "required": true,
                //     "read_only": false,
                //     "label": "Customer",
                //     "display_name": "name",
                //     "value_field": "id",
                //    // "edit_source_field": "items_details",
                //     "multiple": true,
                //     "url": `customers/`,
                //     "search_field": "name",
                //     "edit_display_name": "name",
                // "res_value_field": "item_config"
            },
            "product_config": {
                "type": "field",
                "required": true,
                "read_only": false,
                "label": "Product config",
                "display_name": "name",
                "url": `product-configs/`
            },
            "items": {
                "type": "field",
                "multiple": true,
                "required": false,
                "read_only": false,
                "label": "Items",
                "display_name": "item_config_name",
                "url": `itemz/`
            },
            "boxes": {
                "type": "field",
                "multiple": true,
                "required": false,
                "read_only": false,
                "label": "Boxes",
                "display_name": "box_config",
                "url": `boxs/`
            }
        }
    }
};


/***/ }),

/***/ "D/xm":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/inventory/products/add-products/add-products.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AddProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductsComponent", function() { return AddProductsComponent; });
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../options */ "7wXl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_myform_myform_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/myform/myform.component */ "l9h7");




class AddProductsComponent {
    constructor(_activatedRoute) {
        this._activatedRoute = _activatedRoute;
        this.formItems = _options__WEBPACK_IMPORTED_MODULE_0__["optionsField"];
        this.url = "stores/";
        this.formGroupOrder = [
            ['customer', 'product_config'],
            ['items'],
            ['boxes']
        ];
        this.extraParams = {
            type: "SR"
        };
        this._activatedRoute.queryParams.subscribe(params => {
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
    }
}
AddProductsComponent.ɵfac = function AddProductsComponent_Factory(t) { return new (t || AddProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
AddProductsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddProductsComponent, selectors: [["app-add-products"]], decls: 1, vars: 7, consts: [["submitButtonText", "Customer Product", 3, "isValidationOnly", "formItems", "url", "extraParams", "instance", "formGroupOrder", "cardTitle", "onValidatedData", "onPostedData"]], template: function AddProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-myform", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onValidatedData", function AddProductsComponent_Template_app_myform_onValidatedData_0_listener($event) { return ctx.onValidatedData($event); })("onPostedData", function AddProductsComponent_Template_app_myform_onPostedData_0_listener($event) { return ctx.onPostedData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isValidationOnly", false)("formItems", ctx.formItems)("url", ctx.url)("extraParams", ctx.extraParams)("instance", ctx.instance)("formGroupOrder", ctx.formGroupOrder)("cardTitle", "Customer Product");
    } }, directives: [_shared_myform_myform_component__WEBPACK_IMPORTED_MODULE_3__["MyformComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtcHJvZHVjdHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "mTt+":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/inventory/products/list-products/list-products.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ListProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListProductsComponent", function() { return ListProductsComponent; });
/* harmony import */ var src_app_core_mixins_table_handle_actions_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/mixins/table-handle-actions-mixin */ "ZLRj");
/* harmony import */ var src_app_shared_tables_tables_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/tables/tables.component */ "QE/Q");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../options */ "7wXl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_modals_modals_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/modals/modals.service */ "22UC");
/* harmony import */ var src_app_shared_tables_tables_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/tables/tables.service */ "Mm8Z");
/* harmony import */ var _shared_add_button_add_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/add-button/add-button.component */ "jUvn");
/* harmony import */ var _shared_filters_dropdown_filters_dropdown_filters_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/filters/dropdown-filters/dropdown-filters.component */ "xtVc");










const TableHandleActionsMixin = Object(src_app_core_mixins_table_handle_actions_mixin__WEBPACK_IMPORTED_MODULE_0__["tableHandleActionsMixin"])(src_app_shared_tables_tables_component__WEBPACK_IMPORTED_MODULE_1__["TablesComponent"]);
class ListProductsComponent extends TableHandleActionsMixin {
    constructor(_router, _modalService, _tableService) {
        super();
        this._router = _router;
        this._modalService = _modalService;
        this._tableService = _tableService;
        this.formItems = _options__WEBPACK_IMPORTED_MODULE_2__["optionsField"];
        this.tableFiltersDropdown = [
            ["customer"],
        ];
        this.url = "products";
        this.headers = [
            "Customer",
            {
                name: 'Product Configuration',
                source: "product_config",
            },
            "Items",
            "Boxes",
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
        this.handleTableActions(action, '/stockroom/add', this.apiUrl);
    }
}
ListProductsComponent.ɵfac = function ListProductsComponent_Factory(t) { return new (t || ListProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_modals_modals_service__WEBPACK_IMPORTED_MODULE_5__["ModalsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_tables_tables_service__WEBPACK_IMPORTED_MODULE_6__["TablesService"])); };
ListProductsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ListProductsComponent, selectors: [["app-list-products"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 9, consts: [[1, "row"], [1, "col-sm-12"], [3, "url"], [1, "col-sm-3"], [3, "url", "filterUrl", "formItems", "formGroupOrder"], [1, "col-sm-9"], [3, "listTypeUrl", "headers", "tableFilters", "filterFormItems", "actionsEvent"]], template: function ListProductsComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("actionsEvent", function ListProductsComponent_Template_app_tables_actionsEvent_7_listener($event) { return ctx.handleActions($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("url", "/products/add");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("url", ctx.listTypeUrl)("filterUrl", ctx.listTypeUrl)("formItems", ctx.formItems)("formGroupOrder", ctx.tableFiltersDropdown);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("listTypeUrl", ctx.url)("headers", ctx.headers)("tableFilters", ctx.tableFiltersCollapsible)("filterFormItems", ctx.formItems);
    } }, directives: [_shared_add_button_add_button_component__WEBPACK_IMPORTED_MODULE_7__["AddButtonComponent"], _shared_filters_dropdown_filters_dropdown_filters_component__WEBPACK_IMPORTED_MODULE_8__["DropdownFiltersComponent"], src_app_shared_tables_tables_component__WEBPACK_IMPORTED_MODULE_1__["TablesComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LXByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "sH8I":
/*!***********************************************************************!*\
  !*** ./src/app/modules/inventory/products/products-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: InventoryProductsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryProductsRoutes", function() { return InventoryProductsRoutes; });
/* harmony import */ var _add_products_add_products_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-products/add-products.component */ "D/xm");
/* harmony import */ var _list_products_list_products_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-products/list-products.component */ "mTt+");


const InventoryProductsRoutes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'add', component: _add_products_add_products_component__WEBPACK_IMPORTED_MODULE_0__["AddProductsComponent"], data: { breadcrumb: 'Add' } },
    { path: 'list', component: _list_products_list_products_component__WEBPACK_IMPORTED_MODULE_1__["ListProductsComponent"], data: { breadcrumb: 'List' } },
];


/***/ })

}]);
//# sourceMappingURL=products-products-module-es2015.js.map