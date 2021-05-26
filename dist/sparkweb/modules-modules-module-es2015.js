(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-modules-module"],{

/***/ "+Qyq":
/*!****************************************************!*\
  !*** ./src/app/modules/inventory/boxes/options.ts ***!
  \****************************************************/
/*! exports provided: BoxConfigFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxConfigFields", function() { return BoxConfigFields; });
/* harmony import */ var _services_constants_form_options_configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/constants/form-options-configs */ "/In7");

const BoxConfigFields = {
    "name": "Bulk Create Boxs Api",
    "description": "",
    renders: _services_constants_form_options_configs__WEBPACK_IMPORTED_MODULE_0__["renders"],
    parses: _services_constants_form_options_configs__WEBPACK_IMPORTED_MODULE_0__["parses"],
    "actions": {
        "POST": {
            "box_config": {
                "type": "field",
                "required": true,
                "read_only": false,
                "label": "Box Configuration",
                "display_name": "name",
                "url": `${_services_constants_form_options_configs__WEBPACK_IMPORTED_MODULE_0__["endpointV1"]}box-configs/`
            },
            "store": {
                "type": "field",
                "required": true,
                "read_only": false,
                "label": "Store",
                "display_name": "name",
                "url": `${_services_constants_form_options_configs__WEBPACK_IMPORTED_MODULE_0__["endpointV1"]}stores/`
            },
            "purchase_order": {
                "type": "string",
                "required": true,
                "read_only": false,
                "label": "Purchase order",
                "max_length": 45
            },
            "serial_numbers": {
                "type": "string",
                "required": true,
                "read_only": false,
                "label": "Serial numbers",
                "max_length": 1000
            },
        }
    }
};



/***/ }),

/***/ "+dkL":
/*!*******************************************!*\
  !*** ./src/app/modules/modules.module.ts ***!
  \*******************************************/
/*! exports provided: ModulesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModulesModule", function() { return ModulesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/core.module */ "pKmL");
/* harmony import */ var _warehouse_warehouse_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./warehouse/warehouse.module */ "ihgr");
/* harmony import */ var _stockroom_stockroom_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stockroom/stockroom.module */ "zOT8");
/* harmony import */ var _modules_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules-routing.module */ "pPcP");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "M95H");
/* harmony import */ var _inventory_inventory_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./inventory/inventory.module */ "mycG");
/* harmony import */ var _suppliers_suppliers_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./suppliers/suppliers.module */ "BOM8");
/* harmony import */ var _customers_customers_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./customers/customers.module */ "CC9r");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");














//import { ToastNotificationsService } from '../shared/toast-notifications/toast-notifications.service';
class ModulesModule {
}
ModulesModule.ɵfac = function ModulesModule_Factory(t) { return new (t || ModulesModule)(); };
ModulesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: ModulesModule });
ModulesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_modules_routing_module__WEBPACK_IMPORTED_MODULE_7__["ModulesRoutes"]),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
            _warehouse_warehouse_module__WEBPACK_IMPORTED_MODULE_5__["WarehouseModule"],
            _stockroom_stockroom_module__WEBPACK_IMPORTED_MODULE_6__["StockroomModule"],
            _inventory_inventory_module__WEBPACK_IMPORTED_MODULE_9__["InventoryModule"],
            _suppliers_suppliers_module__WEBPACK_IMPORTED_MODULE_10__["SuppliersModule"],
            _customers_customers_module__WEBPACK_IMPORTED_MODULE_11__["CustomersModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](ModulesModule, { declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
        _warehouse_warehouse_module__WEBPACK_IMPORTED_MODULE_5__["WarehouseModule"],
        _stockroom_stockroom_module__WEBPACK_IMPORTED_MODULE_6__["StockroomModule"],
        _inventory_inventory_module__WEBPACK_IMPORTED_MODULE_9__["InventoryModule"],
        _suppliers_suppliers_module__WEBPACK_IMPORTED_MODULE_10__["SuppliersModule"],
        _customers_customers_module__WEBPACK_IMPORTED_MODULE_11__["CustomersModule"]] }); })();


/***/ }),

/***/ "/Eod":
/*!****************************************************************!*\
  !*** ./src/app/modules/inventory/inventory-routing.modules.ts ***!
  \****************************************************************/
/*! exports provided: InventoryRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryRoutes", function() { return InventoryRoutes; });
/* harmony import */ var _items_add_add_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items/add/add-item.component */ "oW0k");
/* harmony import */ var _items_list_list_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./items/list/list-item.component */ "c2HD");
/* harmony import */ var _items_edit_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./items/edit/edit.component */ "Ic8S");
/* harmony import */ var _items_move_stock_move_stock_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./items/move-stock/move-stock.component */ "KQTo");
/* harmony import */ var _boxes_boxes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./boxes/boxes.component */ "UeEd");
/* harmony import */ var _boxes_list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./boxes/list/list.component */ "cY7v");
/* harmony import */ var src_app_core_auth_guards_auth_guards__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/auth-guards/auth.guards */ "ZW81");







const InventoryRoutes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'add', component: _items_add_add_item_component__WEBPACK_IMPORTED_MODULE_0__["AddItemComponent"], data: { breadcrumb: 'Add Items' } },
    { path: 'list', component: _items_list_list_item_component__WEBPACK_IMPORTED_MODULE_1__["ListItemComponent"], data: { breadcrumb: 'List Items' } },
    { path: 'edit', component: _items_edit_edit_component__WEBPACK_IMPORTED_MODULE_2__["EditComponent"], data: { breadcrumb: 'Edit Item' } },
    { path: 'move', component: _items_move_stock_move_stock_component__WEBPACK_IMPORTED_MODULE_3__["MoveStockComponent"], data: { breadcrumb: 'Move Stock' } },
    { path: 'check-in', component: _boxes_boxes_component__WEBPACK_IMPORTED_MODULE_4__["BoxesComponent"], data: { breadcrumb: 'Check-in Box' } },
    { path: 'list-boxes', component: _boxes_list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListBoxesComponent"], data: { breadcrumb: 'List Boxes' } },
    {
        path: 'products',
        data: { breadcrumb: 'products' },
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./products/products.module */ "4k8T")).then((m) => m.ProductsModule),
        canActivate: [src_app_core_auth_guards_auth_guards__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
];


/***/ }),

/***/ "/In7":
/*!************************************************************!*\
  !*** ./src/app/services/constants/form-options-configs.ts ***!
  \************************************************************/
/*! exports provided: parses, renders, endpoint, endpointV1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parses", function() { return parses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renders", function() { return renders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endpoint", function() { return endpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endpointV1", function() { return endpointV1; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");

const endpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].APIEndpoint;
const endpointV1 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].APIv1Endpoint;
const parses = {
    "parses": [
        "application/json",
        "application/x-www-form-urlencoded",
        "multipart/form-data",
    ]
};
const renders = {
    "renders": [
        "application/json",
        "text/html"
    ],
};



/***/ }),

/***/ "/rH6":
/*!**********************************************************!*\
  !*** ./src/app/modules/suppliers/list/list.component.ts ***!
  \**********************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var src_app_core_mixins_table_handle_actions_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/mixins/table-handle-actions-mixin */ "ZLRj");
/* harmony import */ var src_app_shared_tables_tables_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/tables/tables.component */ "QE/Q");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../options */ "I9rL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_modals_modals_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/modals/modals.service */ "22UC");
/* harmony import */ var src_app_shared_tables_tables_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/tables/tables.service */ "Mm8Z");
/* harmony import */ var _shared_add_button_add_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/add-button/add-button.component */ "jUvn");
/* harmony import */ var _shared_filters_dropdown_filters_dropdown_filters_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/filters/dropdown-filters/dropdown-filters.component */ "xtVc");
/* harmony import */ var _shared_modals_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/modals/confirm-dialog/confirm-dialog.component */ "BsoD");











const TableHandleActionsMixin = Object(src_app_core_mixins_table_handle_actions_mixin__WEBPACK_IMPORTED_MODULE_0__["tableHandleActionsMixin"])(src_app_shared_tables_tables_component__WEBPACK_IMPORTED_MODULE_1__["TablesComponent"]);
class ListComponent extends TableHandleActionsMixin {
    constructor(_router, _modalService, _tableService) {
        super();
        this._router = _router;
        this._modalService = _modalService;
        this._tableService = _tableService;
        this.formItems = _options__WEBPACK_IMPORTED_MODULE_2__["optionsField"];
        this.tableFiltersDropdown = [
            ["name"],
        ];
        this.url = "suppliers";
        this.apiUrl = "suppliers";
        this.headers = [
            // "Name",
            {
                name: 'Supplier ID',
                source: "id",
            },
            {
                name: 'Name',
                source: "name",
            },
            {
                name: 'Email Address',
                source: "email",
            },
            {
                name: 'Phone number',
                source: "phone",
            },
            {
                name: 'Contact person',
                source: "contact_person",
            },
            {
                name: 'Contact Person (phone)',
                source: "contact_phone",
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
    // tableFilters = ["Name"]
    ngOnInit() {
    }
    handleActions(action) {
        this.handleTableActions(action, '/suppliers/add', this.apiUrl);
    }
}
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_modals_modals_service__WEBPACK_IMPORTED_MODULE_5__["ModalsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_tables_tables_service__WEBPACK_IMPORTED_MODULE_6__["TablesService"])); };
ListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ListComponent, selectors: [["app-list"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 9, vars: 9, consts: [[1, "row"], [1, "col-sm-12"], [3, "url"], [1, "col-sm-3"], [3, "url", "filterUrl", "formItems", "formGroupOrder"], [1, "col-sm-9"], [3, "listTypeUrl", "headers", "tableFilters", "filterFormItems", "actionsEvent"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("actionsEvent", function ListComponent_Template_app_tables_actionsEvent_7_listener($event) { return ctx.handleActions($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "app-confirm-dialog");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("url", "/suppliers/add");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("url", ctx.listTypeUrl)("filterUrl", ctx.listTypeUrl)("formItems", ctx.formItems)("formGroupOrder", ctx.tableFiltersDropdown);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("listTypeUrl", ctx.url)("headers", ctx.headers)("tableFilters", ctx.tableFiltersCollapsible)("filterFormItems", ctx.formItems);
    } }, directives: [_shared_add_button_add_button_component__WEBPACK_IMPORTED_MODULE_7__["AddButtonComponent"], _shared_filters_dropdown_filters_dropdown_filters_component__WEBPACK_IMPORTED_MODULE_8__["DropdownFiltersComponent"], src_app_shared_tables_tables_component__WEBPACK_IMPORTED_MODULE_1__["TablesComponent"], _shared_modals_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmDialogComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "1yTU":
/*!******************************************************************!*\
  !*** ./src/app/modules/customers/add/customers-add.component.ts ***!
  \******************************************************************/
/*! exports provided: CustomersAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersAddComponent", function() { return CustomersAddComponent; });
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../options */ "nZDg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_myform_myform_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/myform/myform.component */ "l9h7");




class CustomersAddComponent {
    constructor(route) {
        this.route = route;
        this.formItems = _options__WEBPACK_IMPORTED_MODULE_0__["CustomerConfigs"];
        this.url = "customers/";
        this.formGroupOrder = [
            ['name', 'primary_phone', 'id_number'],
            ['region', 'village', 'closest_spark_agent_shop'],
            ['occupation', 'min_salary', 'max_salary'],
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
    }
}
CustomersAddComponent.ɵfac = function CustomersAddComponent_Factory(t) { return new (t || CustomersAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
CustomersAddComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CustomersAddComponent, selectors: [["app-customers-add"]], decls: 1, vars: 6, consts: [["submitButtonText", "Customer", 3, "formItems", "url", "cardTitle", "submitButtonText", "instance", "formGroupOrder", "onPostedData"]], template: function CustomersAddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-myform", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onPostedData", function CustomersAddComponent_Template_app_myform_onPostedData_0_listener($event) { return ctx.onPostedData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formItems", ctx.formItems)("url", ctx.url)("cardTitle", "Customers")("submitButtonText", "Add Customer")("instance", ctx.instance)("formGroupOrder", ctx.formGroupOrder);
    } }, directives: [_shared_myform_myform_component__WEBPACK_IMPORTED_MODULE_3__["MyformComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21lcnMtYWRkLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "42jx":
/*!***************************************************************!*\
  !*** ./src/app/modules/warehouse/warehouse-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: WarehouseRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseRoutes", function() { return WarehouseRoutes; });
/* harmony import */ var _add_add_warehouse_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add/add-warehouse.component */ "6XNJ");
/* harmony import */ var _list_warehouse_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list/warehouse-list.component */ "X8vo");


const WarehouseRoutes = [
    { path: '', component: _list_warehouse_list_component__WEBPACK_IMPORTED_MODULE_1__["WarehouseListComponent"], data: { breadcrumb: 'List' } },
    { path: 'add', component: _add_add_warehouse_component__WEBPACK_IMPORTED_MODULE_0__["AddWarehouseComponent"], data: { breadcrumb: 'Add' } },
];


/***/ }),

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

/***/ "4l/Y":
/*!********************************************************************!*\
  !*** ./src/app/modules/stockroom/list/stockroom-list.component.ts ***!
  \********************************************************************/
/*! exports provided: StockroomListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockroomListComponent", function() { return StockroomListComponent; });
/* harmony import */ var src_app_core_mixins_table_handle_actions_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/mixins/table-handle-actions-mixin */ "ZLRj");
/* harmony import */ var src_app_shared_tables_tables_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/tables/tables.component */ "QE/Q");
/* harmony import */ var _warehouse_add_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../warehouse/add/options */ "x2Eb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_modals_modals_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/modals/modals.service */ "22UC");
/* harmony import */ var src_app_shared_tables_tables_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/tables/tables.service */ "Mm8Z");
/* harmony import */ var _shared_add_button_add_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/add-button/add-button.component */ "jUvn");
/* harmony import */ var _shared_filters_dropdown_filters_dropdown_filters_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/filters/dropdown-filters/dropdown-filters.component */ "xtVc");










const TableHandleActionsMixin = Object(src_app_core_mixins_table_handle_actions_mixin__WEBPACK_IMPORTED_MODULE_0__["tableHandleActionsMixin"])(src_app_shared_tables_tables_component__WEBPACK_IMPORTED_MODULE_1__["TablesComponent"]);
class StockroomListComponent extends TableHandleActionsMixin {
    constructor(_router, _modalService, _tableService) {
        super();
        this._router = _router;
        this._modalService = _modalService;
        this._tableService = _tableService;
        this.formItems = _warehouse_add_options__WEBPACK_IMPORTED_MODULE_2__["storeFields"];
        this.tableFiltersDropdown = [
            ["manager"],
            ["location"],
        ];
        this.url = "stores/?type=SR&";
        this.apiUrl = "stores";
        this.headers = [
            "Name",
            {
                name: 'Stockroom ID',
                source: "id",
            },
            {
                name: 'Region/ Location',
                source: "location_details.name",
            },
            {
                name: 'Stockroom Manager',
                source: "manager_details.full_name",
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
        this.handleTableActions(action, '/stockroom/add', this.apiUrl);
    }
}
StockroomListComponent.ɵfac = function StockroomListComponent_Factory(t) { return new (t || StockroomListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_modals_modals_service__WEBPACK_IMPORTED_MODULE_5__["ModalsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_tables_tables_service__WEBPACK_IMPORTED_MODULE_6__["TablesService"])); };
StockroomListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: StockroomListComponent, selectors: [["app-stockroom-list"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 9, consts: [[1, "row"], [1, "col-sm-12"], [3, "url"], [1, "col-sm-3"], [3, "url", "filterUrl", "formItems", "formGroupOrder"], [1, "col-sm-9"], [3, "listTypeUrl", "headers", "tableFilters", "filterFormItems", "actionsEvent"]], template: function StockroomListComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("actionsEvent", function StockroomListComponent_Template_app_tables_actionsEvent_7_listener($event) { return ctx.handleActions($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("url", "/stockroom/add");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("url", ctx.listTypeUrl)("filterUrl", ctx.listTypeUrl)("formItems", ctx.formItems)("formGroupOrder", ctx.tableFiltersDropdown);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("listTypeUrl", ctx.url)("headers", ctx.headers)("tableFilters", ctx.tableFiltersCollapsible)("filterFormItems", ctx.formItems);
    } }, directives: [_shared_add_button_add_button_component__WEBPACK_IMPORTED_MODULE_7__["AddButtonComponent"], _shared_filters_dropdown_filters_dropdown_filters_component__WEBPACK_IMPORTED_MODULE_8__["DropdownFiltersComponent"], src_app_shared_tables_tables_component__WEBPACK_IMPORTED_MODULE_1__["TablesComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdG9ja3Jvb20tbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "5JSG":
/*!***************************************************************!*\
  !*** ./src/app/modules/customers/customers-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: CustomerRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerRoutes", function() { return CustomerRoutes; });
/* harmony import */ var _add_customers_add_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add/customers-add.component */ "1yTU");
/* harmony import */ var _list_customers_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list/customers.component */ "Jc0c");


const CustomerRoutes = [
    { path: '', redirectTo: 'customers', pathMatch: 'full' },
    { path: 'list', component: _list_customers_component__WEBPACK_IMPORTED_MODULE_1__["CustomersComponent"], data: { breadcrumb: 'List Customers' } },
    { path: 'customers', component: _add_customers_add_component__WEBPACK_IMPORTED_MODULE_0__["CustomersAddComponent"], data: { breadcrumb: 'Add Customers' } },
];


/***/ }),

/***/ "6XNJ":
/*!******************************************************************!*\
  !*** ./src/app/modules/warehouse/add/add-warehouse.component.ts ***!
  \******************************************************************/
/*! exports provided: AddWarehouseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddWarehouseComponent", function() { return AddWarehouseComponent; });
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options */ "x2Eb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_modals_modals_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/modals/modals.service */ "22UC");
/* harmony import */ var _shared_myform_myform_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/myform/myform.component */ "l9h7");





class AddWarehouseComponent {
    constructor(_activatedRoute, _modalService) {
        this._activatedRoute = _activatedRoute;
        this._modalService = _modalService;
        this.formItems = _options__WEBPACK_IMPORTED_MODULE_0__["storeFields"];
        this.url = "stores/";
        this.formGroupOrder = [
            ['name'],
            ['location'],
            ['manager'],
        ];
        this.extraParams = {
            type: "WH"
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
        console.log(data);
    }
    onPostedData(data) {
        console.log(data);
    }
}
AddWarehouseComponent.ɵfac = function AddWarehouseComponent_Factory(t) { return new (t || AddWarehouseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_modals_modals_service__WEBPACK_IMPORTED_MODULE_3__["ModalsService"])); };
AddWarehouseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddWarehouseComponent, selectors: [["app-add-warehouse"]], decls: 1, vars: 7, consts: [["submitButtonText", "Warehouse", 3, "isValidationOnly", "formItems", "url", "extraParams", "instance", "formGroupOrder", "cardTitle", "onValidatedData", "onPostedData"]], template: function AddWarehouseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-myform", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onValidatedData", function AddWarehouseComponent_Template_app_myform_onValidatedData_0_listener($event) { return ctx.onValidatedData($event); })("onPostedData", function AddWarehouseComponent_Template_app_myform_onPostedData_0_listener($event) { return ctx.onPostedData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isValidationOnly", false)("formItems", ctx.formItems)("url", ctx.url)("extraParams", ctx.extraParams)("instance", ctx.instance)("formGroupOrder", ctx.formGroupOrder)("cardTitle", "Warehouse");
    } }, directives: [_shared_myform_myform_component__WEBPACK_IMPORTED_MODULE_4__["MyformComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtd2FyZWhvdXNlLmNvbXBvbmVudC5zY3NzIn0= */"] });


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
                "url": `${_services_constants_form_options_configs__WEBPACK_IMPORTED_MODULE_0__["endpointV1"]}customers/`
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
                "url": `${_services_constants_form_options_configs__WEBPACK_IMPORTED_MODULE_0__["endpointV1"]}product-configs/`
            },
            "items": {
                "type": "field",
                "multiple": true,
                "required": false,
                "read_only": false,
                "label": "Items",
                "display_name": "item_config_name",
                "url": `${_services_constants_form_options_configs__WEBPACK_IMPORTED_MODULE_0__["endpointV1"]}itemz/`
            },
            "boxes": {
                "type": "field",
                "multiple": true,
                "required": false,
                "read_only": false,
                "label": "Boxes",
                "display_name": "box_config",
                "url": `${_services_constants_form_options_configs__WEBPACK_IMPORTED_MODULE_0__["endpointV1"]}boxs/`
            }
        }
    }
};


/***/ }),

/***/ "BOM8":
/*!*******************************************************!*\
  !*** ./src/app/modules/suppliers/suppliers.module.ts ***!
  \*******************************************************/
/*! exports provided: SuppliersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuppliersModule", function() { return SuppliersModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list/list.component */ "/rH6");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add/add.component */ "DcOx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _suppliers_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./suppliers-routing.module */ "NOaf");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








class SuppliersModule {
}
SuppliersModule.ɵfac = function SuppliersModule_Factory(t) { return new (t || SuppliersModule)(); };
SuppliersModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: SuppliersModule });
SuppliersModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_suppliers_routing_module__WEBPACK_IMPORTED_MODULE_4__["SupplierRoutes"]),
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](SuppliersModule, { declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_1__["ListComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_2__["AddComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]] }); })();


/***/ }),

/***/ "CC9r":
/*!*******************************************************!*\
  !*** ./src/app/modules/customers/customers.module.ts ***!
  \*******************************************************/
/*! exports provided: CustomersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersModule", function() { return CustomersModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var src_app_core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/core.module */ "pKmL");
/* harmony import */ var _list_customers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/customers.component */ "Jc0c");
/* harmony import */ var _customers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customers-routing.module */ "5JSG");
/* harmony import */ var _add_customers_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add/customers-add.component */ "1yTU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");









class CustomersModule {
}
CustomersModule.ɵfac = function CustomersModule_Factory(t) { return new (t || CustomersModule)(); };
CustomersModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: CustomersModule });
CustomersModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_customers_routing_module__WEBPACK_IMPORTED_MODULE_5__["CustomerRoutes"]),
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            src_app_core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](CustomersModule, { declarations: [_list_customers_component__WEBPACK_IMPORTED_MODULE_4__["CustomersComponent"], _add_customers_add_component__WEBPACK_IMPORTED_MODULE_6__["CustomersAddComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        src_app_core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"]] }); })();


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

/***/ "DcOx":
/*!********************************************************!*\
  !*** ./src/app/modules/suppliers/add/add.component.ts ***!
  \********************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../options */ "I9rL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_modals_modals_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/modals/modals.service */ "22UC");
/* harmony import */ var _shared_myform_myform_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/myform/myform.component */ "l9h7");





class AddComponent {
    constructor(_activatedRoute, _modalService) {
        this._activatedRoute = _activatedRoute;
        this._modalService = _modalService;
        this.formItems = _options__WEBPACK_IMPORTED_MODULE_0__["optionsField"];
        this.url = 'suppliers/';
        this.formGroupOrder = [
            ['name', 'email', 'phone'],
            ['contact_person', 'contact_phone']
        ];
        this.extraParams = {
            type: 'WH'
        };
        this._activatedRoute.queryParams.subscribe(params => {
            if (params.hasOwnProperty('id')) {
                this.instance = params;
                console.log(this.instance);
            }
        });
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
AddComponent.ɵfac = function AddComponent_Factory(t) { return new (t || AddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_modals_modals_service__WEBPACK_IMPORTED_MODULE_3__["ModalsService"])); };
AddComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddComponent, selectors: [["app-add"]], decls: 1, vars: 7, consts: [["submitButtonText", "Supplier", 3, "isValidationOnly", "formItems", "url", "extraParams", "instance", "formGroupOrder", "cardTitle", "onValidatedData", "onPostedData"]], template: function AddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-myform", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onValidatedData", function AddComponent_Template_app_myform_onValidatedData_0_listener($event) { return ctx.onValidatedData($event); })("onPostedData", function AddComponent_Template_app_myform_onPostedData_0_listener($event) { return ctx.onPostedData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isValidationOnly", false)("formItems", ctx.formItems)("url", ctx.url)("extraParams", ctx.extraParams)("instance", ctx.instance)("formGroupOrder", ctx.formGroupOrder)("cardTitle", "Supplier");
    } }, directives: [_shared_myform_myform_component__WEBPACK_IMPORTED_MODULE_4__["MyformComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "I9rL":
/*!**********************************************!*\
  !*** ./src/app/modules/suppliers/options.ts ***!
  \**********************************************/
/*! exports provided: optionsField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionsField", function() { return optionsField; });
/* harmony import */ var _services_constants_form_options_configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/constants/form-options-configs */ "/In7");

const optionsField = {
    "name": "List Create Suppliers Api",
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
                "max_length": 45
            },
            "email": {
                "type": "email",
                "required": true,
                "read_only": false,
                "label": "Email",
                "max_length": 45
            },
            "phone": {
                "type": "string",
                "required": true,
                "read_only": false,
                "label": "Phone",
                "max_length": 20
            },
            "contact_person": {
                "type": "string",
                "required": true,
                "read_only": false,
                "label": "Contact person",
                "max_length": 150
            },
            "contact_phone": {
                "type": "string",
                "required": true,
                "read_only": false,
                "label": "Contact phone",
                "max_length": 150
            }
        }
    }
};


/***/ }),

/***/ "Ic8S":
/*!****************************************************************!*\
  !*** ./src/app/modules/inventory/items/edit/edit.component.ts ***!
  \****************************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options */ "mTTB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_toast_notifications_toast_notifications_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/toast-notifications/toast-notifications.service */ "hkff");
/* harmony import */ var _shared_myform_myform_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/myform/myform.component */ "l9h7");





class EditComponent {
    constructor(_activatedRoute, router, toastService) {
        this._activatedRoute = _activatedRoute;
        this.router = router;
        this.toastService = toastService;
        this.formItems = _options__WEBPACK_IMPORTED_MODULE_0__["SerializedItemfields"];
        this.url = "itemz/";
        this.formGroupOrder = [
            ['item_config', 'store', 'purchase_order', 'serial'],
        ];
        this._activatedRoute.queryParams.subscribe(params => {
            if (params.hasOwnProperty("id")) {
                this.instance = params;
                console.log(this.instance);
                if (params.hasOwnProperty("serial")) {
                }
            }
        });
    }
    ngOnInit() {
    }
    onValidatedData(data) {
    }
    onPostedData(data) {
        console.log(data);
        this.router.navigate(['/inventory/list']);
    }
}
EditComponent.ɵfac = function EditComponent_Factory(t) { return new (t || EditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_toast_notifications_toast_notifications_service__WEBPACK_IMPORTED_MODULE_3__["ToastNotificationsService"])); };
EditComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditComponent, selectors: [["app-edit"]], decls: 3, vars: 7, consts: [[1, "row"], [1, "col-sm-12"], [3, "isValidationOnly", "formItems", "url", "instance", "submitButtonText", "formGroupOrder", "cardTitle", "onValidatedData", "onPostedData"]], template: function EditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "app-myform", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onValidatedData", function EditComponent_Template_app_myform_onValidatedData_2_listener($event) { return ctx.onValidatedData($event); })("onPostedData", function EditComponent_Template_app_myform_onPostedData_2_listener($event) { return ctx.onPostedData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isValidationOnly", false)("formItems", ctx.formItems)("url", ctx.url)("instance", ctx.instance)("submitButtonText", "Item")("formGroupOrder", ctx.formGroupOrder)("cardTitle", "Item");
    } }, directives: [_shared_myform_myform_component__WEBPACK_IMPORTED_MODULE_4__["MyformComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "Jc0c":
/*!***************************************************************!*\
  !*** ./src/app/modules/customers/list/customers.component.ts ***!
  \***************************************************************/
/*! exports provided: CustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersComponent", function() { return CustomersComponent; });
/* harmony import */ var src_app_core_mixins_table_handle_actions_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/mixins/table-handle-actions-mixin */ "ZLRj");
/* harmony import */ var src_app_shared_tables_tables_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/tables/tables.component */ "QE/Q");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../options */ "nZDg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_modals_modals_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/modals/modals.service */ "22UC");
/* harmony import */ var src_app_shared_tables_tables_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/tables/tables.service */ "Mm8Z");
/* harmony import */ var _shared_add_button_add_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/add-button/add-button.component */ "jUvn");
/* harmony import */ var _shared_filters_dropdown_filters_dropdown_filters_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/filters/dropdown-filters/dropdown-filters.component */ "xtVc");
/* harmony import */ var _shared_modals_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/modals/confirm-dialog/confirm-dialog.component */ "BsoD");











const TableHandleActionsMixin = Object(src_app_core_mixins_table_handle_actions_mixin__WEBPACK_IMPORTED_MODULE_0__["tableHandleActionsMixin"])(src_app_shared_tables_tables_component__WEBPACK_IMPORTED_MODULE_1__["TablesComponent"]);
class CustomersComponent extends TableHandleActionsMixin {
    constructor(_router, _modalService, _tableService) {
        super();
        this._router = _router;
        this._modalService = _modalService;
        this._tableService = _tableService;
        this.url = "customers";
        this.formItems = _options__WEBPACK_IMPORTED_MODULE_2__["CustomerConfigs"];
        this.tableFiltersDropdown = [
            ["name"],
            ["angaza_qid"]
        ];
        this.tableFiltersCollapsible = [
            ["name", "angaza_qid"]
        ];
        this.headers = [
            "Name",
            "Id number",
            "Angaza qid",
            {
                name: "Phone",
                source: "primary_phone",
            },
            "Avg monthly income",
            "Occupation",
            {
                name: 'Region',
                source: "region",
            },
            "Village",
            {
                name: 'Closest spark agent shop (Kms)',
                source: "closest_spark_agent_shop",
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
        this.handleTableActions(action, '/customers', this.url);
    }
}
CustomersComponent.ɵfac = function CustomersComponent_Factory(t) { return new (t || CustomersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_modals_modals_service__WEBPACK_IMPORTED_MODULE_5__["ModalsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_tables_tables_service__WEBPACK_IMPORTED_MODULE_6__["TablesService"])); };
CustomersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CustomersComponent, selectors: [["app-customers"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 9, vars: 9, consts: [[1, "row"], [1, "col-sm-12"], [3, "url"], [1, "col-sm-3"], [3, "url", "filterUrl", "formItems", "formGroupOrder"], [1, "col-sm-9"], [3, "listTypeUrl", "headers", "tableFilters", "filterFormItems", "actionsEvent"]], template: function CustomersComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("actionsEvent", function CustomersComponent_Template_app_tables_actionsEvent_7_listener($event) { return ctx.handleActions($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "app-confirm-dialog");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("url", "/customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("url", ctx.listTypeUrl)("filterUrl", ctx.listTypeUrl)("formItems", ctx.formItems)("formGroupOrder", ctx.tableFiltersDropdown);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("listTypeUrl", ctx.url)("headers", ctx.headers)("tableFilters", ctx.tableFiltersCollapsible)("filterFormItems", ctx.formItems);
    } }, directives: [_shared_add_button_add_button_component__WEBPACK_IMPORTED_MODULE_7__["AddButtonComponent"], _shared_filters_dropdown_filters_dropdown_filters_component__WEBPACK_IMPORTED_MODULE_8__["DropdownFiltersComponent"], src_app_shared_tables_tables_component__WEBPACK_IMPORTED_MODULE_1__["TablesComponent"], _shared_modals_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmDialogComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21lcnMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "KQTo":
/*!****************************************************************************!*\
  !*** ./src/app/modules/inventory/items/move-stock/move-stock.component.ts ***!
  \****************************************************************************/
/*! exports provided: MoveStockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveStockComponent", function() { return MoveStockComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_constants_form_options_configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/constants/form-options-configs */ "/In7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_forms_form_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/forms/form-item.service */ "L4dG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/card/card.component */ "Fe25");
/* harmony import */ var _shared_textarea_with_count_textarea_with_count_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/textarea-with-count/textarea-with-count.component */ "GPJV");









function MoveStockComponent_select_7_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const store_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", store_r12.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](store_r12.name);
} }
function MoveStockComponent_select_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MoveStockComponent_select_7_option_1_Template, 2, 2, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.stores);
} }
function MoveStockComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 25);
} }
function MoveStockComponent_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MoveStockComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MoveStockComponent_div_9_div_1_Template, 4, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.move_stock_form.controls["from_store"].errors.required);
} }
function MoveStockComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.api_errors.from_store, " ");
} }
function MoveStockComponent_select_14_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const store_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", store_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](store_r15.name);
} }
function MoveStockComponent_select_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "select", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MoveStockComponent_select_14_option_1_Template, 2, 2, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r4.stores);
} }
function MoveStockComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 25);
} }
function MoveStockComponent_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MoveStockComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MoveStockComponent_div_16_div_1_Template, 4, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.move_stock_form.controls["to_store"].errors.required);
} }
function MoveStockComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r7.api_errors.to_store, " ");
} }
function MoveStockComponent_div_23_select_3_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_config_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", item_config_r22.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_config_r22.name, "");
} }
function MoveStockComponent_div_23_select_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "select", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MoveStockComponent_div_23_select_3_option_1_Template, 2, 2, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r17.item_configs);
} }
function MoveStockComponent_div_23_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 25);
} }
function MoveStockComponent_div_23_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MoveStockComponent_div_23_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MoveStockComponent_div_23_div_5_div_1_Template, 4, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r19.move_stock_form.controls["item_config"].errors.required);
} }
function MoveStockComponent_div_23_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r20.api_errors.item_config, " ");
} }
function MoveStockComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Item Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MoveStockComponent_div_23_select_3_Template, 2, 1, "select", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MoveStockComponent_div_23_span_4_Template, 1, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, MoveStockComponent_div_23_div_5_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, MoveStockComponent_div_23_div_6_Template, 3, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r8.items_loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.items_loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.move_stock_form.controls["item_config"].invalid && (ctx_r8.move_stock_form.controls["item_config"].dirty || ctx_r8.move_stock_form.controls["item_config"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.api_errors.item_config);
} }
function MoveStockComponent_div_24_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MoveStockComponent_div_24_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Field has to be a number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MoveStockComponent_div_24_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Field should contain at least 1 item count ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MoveStockComponent_div_24_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MoveStockComponent_div_24_div_4_div_1_Template, 4, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MoveStockComponent_div_24_div_4_div_2_Template, 4, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MoveStockComponent_div_24_div_4_div_3_Template, 4, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r24.move_stock_form.controls["items_count"].errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r24.move_stock_form.controls["items_count"].errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r24.move_stock_form.controls["items_count"].errors.min);
} }
function MoveStockComponent_div_24_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r25.api_errors.items_count, " ");
} }
function MoveStockComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Item Count");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function MoveStockComponent_div_24_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r29.toggleApiErrorMessage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MoveStockComponent_div_24_div_4_Template, 4, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, MoveStockComponent_div_24_div_5_Template, 3, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r9.move_stock_form.controls["items_count"].invalid && (ctx_r9.move_stock_form.controls["items_count"].dirty || ctx_r9.move_stock_form.controls["items_count"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r9.api_errors.items_count);
} }
function MoveStockComponent_div_25_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MoveStockComponent_div_25_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r32.api_errors.serial_numbers, " ");
} }
function MoveStockComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Serial Numbers");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-textarea-with-count", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, MoveStockComponent_div_25_div_5_Template, 5, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, MoveStockComponent_div_25_div_6_Template, 3, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r10.move_stock_form.controls["serial_numbers"].dirty || ctx_r10.move_stock_form.controls["serial_numbers"].touched) && (ctx_r10.check_box == true && ctx_r10.move_stock_form.value.serial_numbers == ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r10.api_errors.serial_numbers);
} }
const _c0 = function () { return { standalone: true }; };
class MoveStockComponent {
    constructor(_formService, router, location) {
        this._formService = _formService;
        this.router = router;
        this.location = location;
        this.page_title = 'Move Stock';
        this.store_loading = true;
        this.items_loading = true;
        this.check_box = false;
        this.newEntry = true;
        this.api_errors = [];
        const from_store = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        const to_store = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        const serial_numbers = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('');
        const items_count = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(1));
        const item_config = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('');
        this.move_stock_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            from_store: from_store,
            to_store: to_store,
            serial_numbers: serial_numbers,
            items_count: items_count,
            item_config: item_config,
        });
    }
    ngOnInit() {
        this.loadFields();
    }
    loadFields() {
        this._formService.getDropdownValues(`${_services_constants_form_options_configs__WEBPACK_IMPORTED_MODULE_1__["endpointV1"]}stores`).subscribe(response => {
            this.store_loading = false;
            this.stores = response.results;
        }, err => {
            this.store_loading = false;
        });
        this._formService.getDropdownValues(`${_services_constants_form_options_configs__WEBPACK_IMPORTED_MODULE_1__["endpointV1"]}item-configs`).subscribe(response => {
            this.items_loading = false;
            this.item_configs = response.results;
        }, err => {
            this.items_loading = false;
        });
    }
    submitItem() {
        //delete fields not needed in serialized/non-serialized
        if (this.check_box == true) {
            delete this.move_stock_form.value.items_count;
            delete this.move_stock_form.value.item_config;
        }
        else {
            delete this.move_stock_form.value.serial_numbers;
        }
        //reset API Errors
        this.api_errors = [];
        let data = {
            url: `${_services_constants_form_options_configs__WEBPACK_IMPORTED_MODULE_1__["endpointV1"]}itemz/move`,
            formData: this.move_stock_form.value,
        };
        console.log(data);
        this._formService.postForm(this.newEntry, data).subscribe(response => {
            console.log(response);
            this.move_stock_form.reset();
            this.location.back();
        }, (err) => {
            console.log(err);
            this.api_errors = err.error;
        });
    }
    clearForm() {
        this.move_stock_form.reset();
        this.check_box = false;
    }
    toggleApiErrorMessage(evt) {
        if (typeof this.api_errors.items_count !== 'undefined' &&
            /Only 0 left in store$/.test(this.api_errors.items_count)) {
            this.api_errors.items_count = '';
        }
    }
}
MoveStockComponent.ɵfac = function MoveStockComponent_Factory(t) { return new (t || MoveStockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_forms_form_item_service__WEBPACK_IMPORTED_MODULE_3__["FormItemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"])); };
MoveStockComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MoveStockComponent, selectors: [["app-move-stock"]], decls: 32, vars: 17, consts: [[1, "container"], [1, "form-group", 3, "formGroup", "ngSubmit"], [3, "title"], [1, "row"], [1, "col-md-3"], ["for", "from_store", 1, "form-label"], ["class", "form-control form-control-sm opt-value", "formControlName", "from_store", 4, "ngIf"], ["class", "linear-background", 4, "ngIf"], ["class", "alert", 4, "ngIf"], [4, "ngIf"], ["for", "to_store", 1, "form-label"], ["class", "form-control form-control-sm opt-value", "formControlName", "to_store", 4, "ngIf"], [1, "col-md-2", "text-center"], ["for", "serials", 1, "form-label"], [1, "form-check"], ["type", "checkbox", 1, "form-check-input", "opt-value", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["class", "col-md-2", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "spark-dynamic-forms__button-wrapper"], ["type", "button", 1, "btn", "btn", "btn-sm", "mb-3", "lift", "spark-dynamic-forms__clear", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "mb-3", "lift", "spark-dynamic-forms__submit", 3, "disabled"], [1, "spark-text"], ["formControlName", "from_store", 1, "form-control", "form-control-sm", "opt-value"], ["required", "", 3, "value", 4, "ngFor", "ngForOf"], ["required", "", 3, "value"], [1, "linear-background"], [1, "alert"], [1, "text-danger", "opt-value"], ["formControlName", "to_store", 1, "form-control", "form-control-sm", "opt-value"], [1, "col-md-2"], ["for", "item_name", 1, "form-label"], ["class", "form-control form-control-sm opt-value", "formControlName", "item_config", 4, "ngIf"], ["formControlName", "item_config", 1, "form-control", "form-control-sm", "opt-value"], ["for", "item_count", 1, "form-label"], ["type", "number", "name", "item_count", "formControlName", "items_count", 1, "form-control", "form-control-sm", 3, "ngModelChange"], [1, "col-md-12"], ["for", "serial_numbers", 1, "form-label"], ["formControlName", "serial_numbers"]], template: function MoveStockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function MoveStockComponent_Template_form_ngSubmit_1_listener() { return ctx.submitItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "app-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "From Store");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, MoveStockComponent_select_7_Template, 2, 1, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, MoveStockComponent_span_8_Template, 1, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, MoveStockComponent_div_9_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, MoveStockComponent_div_10_Template, 3, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "To Store");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, MoveStockComponent_select_14_Template, 2, 1, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, MoveStockComponent_span_15_Template, 1, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, MoveStockComponent_div_16_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, MoveStockComponent_div_17_Template, 3, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Serialized? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function MoveStockComponent_Template_input_ngModelChange_22_listener($event) { return ctx.check_box = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, MoveStockComponent_div_23_Template, 7, 4, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, MoveStockComponent_div_24_Template, 6, 2, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, MoveStockComponent_div_25_Template, 7, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MoveStockComponent_Template_button_click_27_listener() { return ctx.clearForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Move Stock ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.move_stock_form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx.page_title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.store_loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.store_loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.move_stock_form.controls["from_store"].invalid && (ctx.move_stock_form.controls["from_store"].dirty || ctx.move_stock_form.controls["from_store"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.api_errors.from_store);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.store_loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.store_loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.move_stock_form.controls["to_store"].invalid && (ctx.move_stock_form.controls["to_store"].dirty || ctx.move_stock_form.controls["to_store"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.api_errors.to_store);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.check_box)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](16, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.check_box == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.check_box == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.check_box == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.move_stock_form.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _shared_card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _shared_textarea_with_count_textarea_with_count_component__WEBPACK_IMPORTED_MODULE_7__["TextareaWithCountComponent"]], styles: ["@font-face {\n  font-family: \"Avenir-Heavy\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(\"https://fonts.animaapp.com/Avenir-Heavy\") format(\"truetype\");\n}\n@font-face {\n  font-family: \"Museo-Sans\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(\"https://fonts.animaapp.com/MuseoSans-700\") format(\"opentype\");\n}\n.row[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.linear-background[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  display: block;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-name: placeHolderShimmer;\n          animation-name: placeHolderShimmer;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  background: #f6f7f8;\n  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);\n  background-size: 1000px 10px;\n  height: 30px;\n  border-radius: 3px;\n}\n@-webkit-keyframes placeHolderShimmer {\n  0% {\n    background-position: -46px 0;\n  }\n  100% {\n    background-position: 46px 0;\n  }\n}\n@keyframes placeHolderShimmer {\n  0% {\n    background-position: -46px 0;\n  }\n  100% {\n    background-position: 46px 0;\n  }\n}\n.spark-dynamic-forms__button-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  margin-top: 4rem;\n  margin-left: 0 !important;\n}\n.spark-dynamic-forms__clear[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: auto;\n  font-weight: bold;\n  line-height: 3.5rem;\n  text-transform: capitalize;\n  vertical-align: middle;\n  text-align: center;\n  padding: 0 1.5rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  letter-spacing: 0;\n  border: 0.2rem solid transparent;\n  border-radius: 0.5rem;\n  background-color: #036fb6;\n  color: #ffffff;\n  opacity: 1;\n  transition-property: border-color, background-color, color, opacity;\n  transition-duration: 0.25s;\n  transition-timing-function: ease-in-out;\n  font-family: sans-serif;\n  font-weight: normal;\n  font-size: 1.6rem;\n  line-height: 2.9rem;\n  cursor: pointer;\n  background-color: #797979;\n  border-radius: 0.3rem;\n  color: #f5f5f5;\n  line-height: 44px;\n  text-align: center;\n  font-size: 13px;\n  font-family: \"Avenir-Heavy\", Helvetica, Arial, serif;\n  margin-right: 3rem;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.spark-dynamic-forms__clear[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .spark-dynamic-forms__clear[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.no-touchevents[_ngcontent-%COMP%]   .spark-dynamic-forms__clear[_ngcontent-%COMP%]:not([disabled]):not(.disabled):not(.is--disabled):hover {\n  background-color: #676767;\n}\n.spark-dynamic-forms__clear[disabled][_ngcontent-%COMP%], .spark-dynamic-forms__clear.disabled[_ngcontent-%COMP%], .spark-dynamic-forms__clear.is--disabled[_ngcontent-%COMP%] {\n  opacity: 0.35;\n  cursor: default;\n}\n.spark-dynamic-forms__clear.lift[_ngcontent-%COMP%] {\n  transition: box-shadow 0.25s ease, transform 0.25s ease;\n}\n.spark-dynamic-forms__clear.lift[_ngcontent-%COMP%]:focus, .spark-dynamic-forms__clear.lift[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 1rem 2.5rem rgba(18, 38, 63, 0.1), 0 0.5rem 1rem -0.75rem rgba(18, 38, 63, 0.1) !important;\n  transform: translate3d(0, -3px, 0);\n}\n.spark-dynamic-forms__submit[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: auto;\n  font-weight: bold;\n  line-height: 3.5rem;\n  text-transform: capitalize;\n  vertical-align: middle;\n  text-align: center;\n  padding: 0 1.5rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  letter-spacing: 0;\n  border: 0.2rem solid transparent;\n  border-radius: 0.5rem;\n  background-color: #036fb6;\n  color: #ffffff;\n  opacity: 1;\n  transition-property: border-color, background-color, color, opacity;\n  transition-duration: 0.25s;\n  transition-timing-function: ease-in-out;\n  font-family: sans-serif;\n  font-weight: normal;\n  font-size: 1.6rem;\n  line-height: 2.9rem;\n  cursor: pointer;\n  background-color: #036fb6;\n  border-radius: 0.3rem;\n  color: #f5f5f5;\n  line-height: 44px;\n  text-align: center;\n  font-size: 13px;\n  font-family: \"Avenir-Heavy\", Helvetica, Arial, serif;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.spark-dynamic-forms__submit[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .spark-dynamic-forms__submit[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.no-touchevents[_ngcontent-%COMP%]   .spark-dynamic-forms__submit[_ngcontent-%COMP%]:not([disabled]):not(.disabled):not(.is--disabled):hover {\n  background-color: #676767;\n}\n.spark-dynamic-forms__submit[disabled][_ngcontent-%COMP%], .spark-dynamic-forms__submit.disabled[_ngcontent-%COMP%], .spark-dynamic-forms__submit.is--disabled[_ngcontent-%COMP%] {\n  opacity: 0.35;\n  cursor: default;\n}\n.spark-dynamic-forms__submit.lift[_ngcontent-%COMP%] {\n  transition: box-shadow 0.25s ease, transform 0.25s ease;\n}\n.spark-dynamic-forms__submit.lift[_ngcontent-%COMP%]:focus, .spark-dynamic-forms__submit.lift[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 1rem 2.5rem rgba(18, 38, 63, 0.1), 0 0.5rem 1rem -0.75rem rgba(18, 38, 63, 0.1) !important;\n  transform: translate3d(0, -3px, 0);\n}\n.spark-dynamic-forms__bulk-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 1rem;\n}\n.spark-dynamic-forms__bulk-btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: auto;\n  font-weight: bold;\n  line-height: 3.5rem;\n  text-transform: capitalize;\n  vertical-align: middle;\n  text-align: center;\n  padding: 0 1.5rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  letter-spacing: 0;\n  border: 0.2rem solid transparent;\n  border-radius: 0.5rem;\n  background-color: #036fb6;\n  color: #ffffff;\n  opacity: 1;\n  transition-property: border-color, background-color, color, opacity;\n  transition-duration: 0.25s;\n  transition-timing-function: ease-in-out;\n  font-family: sans-serif;\n  font-weight: normal;\n  font-size: 1.6rem;\n  line-height: 2.9rem;\n  cursor: pointer;\n  background-color: #797979;\n  border-radius: 0.3rem;\n  color: #f5f5f5;\n  line-height: 44px;\n  text-align: center;\n  font-size: 13px;\n  font-family: \"Avenir-Heavy\", Helvetica, Arial, serif;\n  margin-bottom: 15px !important;\n}\n.spark-dynamic-forms__bulk-btn[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .spark-dynamic-forms__bulk-btn[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.no-touchevents[_ngcontent-%COMP%]   .spark-dynamic-forms__bulk-btn[_ngcontent-%COMP%]:not([disabled]):not(.disabled):not(.is--disabled):hover {\n  background-color: #676767;\n}\n.spark-dynamic-forms__bulk-btn[disabled][_ngcontent-%COMP%], .spark-dynamic-forms__bulk-btn.disabled[_ngcontent-%COMP%], .spark-dynamic-forms__bulk-btn.is--disabled[_ngcontent-%COMP%] {\n  opacity: 0.35;\n  cursor: default;\n}\n.spark-dynamic-forms__bulk-btn.lift[_ngcontent-%COMP%] {\n  transition: box-shadow 0.25s ease, transform 0.25s ease;\n}\n.spark-dynamic-forms__bulk-btn.lift[_ngcontent-%COMP%]:focus, .spark-dynamic-forms__bulk-btn.lift[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 1rem 2.5rem rgba(18, 38, 63, 0.1), 0 0.5rem 1rem -0.75rem rgba(18, 38, 63, 0.1) !important;\n  transform: translate3d(0, -3px, 0);\n}\n.spark-dynamic-forms__bulk-btn-upload[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: auto;\n  font-weight: bold;\n  line-height: 3.5rem;\n  text-transform: capitalize;\n  vertical-align: middle;\n  text-align: center;\n  padding: 0 1.5rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  letter-spacing: 0;\n  border: 0.2rem solid transparent;\n  border-radius: 0.5rem;\n  background-color: #036fb6;\n  color: #ffffff;\n  opacity: 1;\n  transition-property: border-color, background-color, color, opacity;\n  transition-duration: 0.25s;\n  transition-timing-function: ease-in-out;\n  font-family: sans-serif;\n  font-weight: normal;\n  font-size: 1.6rem;\n  line-height: 2.9rem;\n  cursor: pointer;\n  background-color: #036fb6;\n  border-radius: 0.3rem;\n  color: #f5f5f5;\n  line-height: 44px;\n  text-align: center;\n  font-size: 13px;\n  font-family: \"Avenir-Heavy\", Helvetica, Arial, serif;\n  margin-bottom: 15px !important;\n  margin-left: 2rem;\n}\n.spark-dynamic-forms__bulk-btn-upload[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .spark-dynamic-forms__bulk-btn-upload[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.no-touchevents[_ngcontent-%COMP%]   .spark-dynamic-forms__bulk-btn-upload[_ngcontent-%COMP%]:not([disabled]):not(.disabled):not(.is--disabled):hover {\n  background-color: #676767;\n}\n.spark-dynamic-forms__bulk-btn-upload[disabled][_ngcontent-%COMP%], .spark-dynamic-forms__bulk-btn-upload.disabled[_ngcontent-%COMP%], .spark-dynamic-forms__bulk-btn-upload.is--disabled[_ngcontent-%COMP%] {\n  opacity: 0.35;\n  cursor: default;\n}\n.spark-dynamic-forms__bulk-btn-upload.lift[_ngcontent-%COMP%] {\n  transition: box-shadow 0.25s ease, transform 0.25s ease;\n}\n.spark-dynamic-forms__bulk-btn-upload.lift[_ngcontent-%COMP%]:focus, .spark-dynamic-forms__bulk-btn-upload.lift[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 1rem 2.5rem rgba(18, 38, 63, 0.1), 0 0.5rem 1rem -0.75rem rgba(18, 38, 63, 0.1) !important;\n  transform: translate3d(0, -3px, 0);\n}\n.bulk__wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 3rem auto;\n}\n.bulk__button-wrapper[_ngcontent-%COMP%], .bulk__content[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n}\n.bulk__button-wrapper[_ngcontent-%COMP%] {\n  padding-top: 2rem;\n  margin-left: -3.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fdmFycy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzL19zZXR0aW5ncy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vbW92ZS1zdG9jay5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9taXhpbnMvX2J1dHRvbi5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzL21peGlucy9fdHlwb2dyYXBoeS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhCQUFBO0FBQ0EsOEJBQUE7QUFDQSw4QkFBQTtBQTBCQSwyQkFBQTtBQUVBLHlCQUFBO0FDR0E7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzRUFBQTtBQzNCRjtBRDhCQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVFQUFBO0FDNUJGO0FBWEE7RUFDSSxnQkFBQTtBQWFKO0FBVkk7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtFQUNBLDBDQUFBO1VBQUEsa0NBQUE7RUFDQSx5Q0FBQTtVQUFBLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSwyRUFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBYVI7QUFWQTtFQUNJO0lBQ0ksNEJBQUE7RUFhTjtFQVhFO0lBQ0ksMkJBQUE7RUFhTjtBQUNGO0FBbkJBO0VBQ0k7SUFDSSw0QkFBQTtFQWFOO0VBWEU7SUFDSSwyQkFBQTtFQWFOO0FBQ0Y7QUFUSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQVdSO0FBUkk7RUMxQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJIS2tCO0VHSmxCLGNIRlU7RUdHVixVQUFBO0VBQ0EsbUVBQUE7RUFDQSwwQkFBQTtFQUNBLHVDQUFBO0VDbkJBLHVCQUFBO0VBMElJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFRHRISixlQUFBO0VBd0JFLHlCQUFBO0VBR0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RURURSxvREFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQXdDUjtBRXdEWTtFQUNJLGlCQUFBO0FGdERoQjtBQ25FSTtFQUNGLHlCQUFBO0FEcUVGO0FDbEVJO0VBR0YsYUFBQTtFQUNNLGVBQUE7QURrRVI7QUMvREk7RUFDRSx1REFBQTtBRGlFTjtBQ2hFTTtFQUVFLHdHQUFBO0VBQ0Esa0NBQUE7QURpRVI7QUF0REk7RUNsREEscUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJIS2tCO0VHSmxCLGNIRlU7RUdHVixVQUFBO0VBQ0EsbUVBQUE7RUFDQSwwQkFBQTtFQUNBLHVDQUFBO0VDbkJBLHVCQUFBO0VBMElJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFRHRISixlQUFBO0VBc0JFLHlCSHpCZ0I7RUc4QmhCLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VEREUsb0RBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBc0ZSO0FFR1k7RUFDSSxpQkFBQTtBRkRoQjtBQ3hISTtFQUNGLHlCQUFBO0FEMEhGO0FDdkhJO0VBR0YsYUFBQTtFQUNNLGVBQUE7QUR1SFI7QUNwSEk7RUFDRSx1REFBQTtBRHNITjtBQ3JITTtFQUVFLHdHQUFBO0VBQ0Esa0NBQUE7QURzSFI7QUFuR1E7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQXFHWjtBQW5HUTtFQy9ESixxQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkhLa0I7RUdKbEIsY0hGVTtFR0dWLFVBQUE7RUFDQSxtRUFBQTtFQUNBLDBCQUFBO0VBQ0EsdUNBQUE7RUNuQkEsdUJBQUE7RUEwSUksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VEdEhKLGVBQUE7RUF3QkUseUJBQUE7RUFHQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFRFlNLG9EQUFBO0VBQ0EsOEJBQUE7QUFtSVo7QUV0RFk7RUFDSSxpQkFBQTtBRndEaEI7QUNqTEk7RUFDRix5QkFBQTtBRG1MRjtBQ2hMSTtFQUdGLGFBQUE7RUFDTSxlQUFBO0FEZ0xSO0FDN0tJO0VBQ0UsdURBQUE7QUQrS047QUM5S007RUFFRSx3R0FBQTtFQUNBLGtDQUFBO0FEK0tSO0FBbEpRO0VDcEVKLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtFQUNBLHlCSEtrQjtFR0psQixjSEZVO0VHR1YsVUFBQTtFQUNBLG1FQUFBO0VBQ0EsMEJBQUE7RUFDQSx1Q0FBQTtFQ25CQSx1QkFBQTtFQTBJSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUR0SEosZUFBQTtFQXNCRSx5Qkh6QmdCO0VHOEJoQixxQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFRGlCTSxvREFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7QUFrTFo7QUUzR1k7RUFDSSxpQkFBQTtBRjZHaEI7QUN0T0k7RUFDRix5QkFBQTtBRHdPRjtBQ3JPSTtFQUdGLGFBQUE7RUFDTSxlQUFBO0FEcU9SO0FDbE9JO0VBQ0UsdURBQUE7QURvT047QUNuT007RUFFRSx3R0FBQTtFQUNBLGtDQUFBO0FEb09SO0FBN0xJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBZ01SO0FBOUxJO0VBRUksaUJBQUE7QUErTFI7QUE1TEk7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0FBOExSIiwiZmlsZSI6Im1vdmUtc3RvY2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKiBjb2xvcnMgKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiRjb2xvcl9iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuJGNvbG9yLWJhY2tncm91bmQtY2FyZDogI2ZmZmZmZjtcbiRjb2xvcl9iYWNrZ3JvdW5kLWlucHV0czogI2ZmZmZmZjtcbiRjb2xvcl90b3BiYXI6ICNmZmZmZmY7XG4kY29sb3JfYnV0dG9uczogIzRkNGQ0ZDtcbiRjb2xvcl9wcmltYXJ5OiAjMDM2RkI2O1xuJGNvbG9yX3NlY29uZGFyeTogI2U1N2MyYztcbiRjb2xvcl90ZXJ0aWFyeTogIzEyMjYzZjtcbiRjb2xvcl93YXJuaW5nOiAjZTYzNzU3O1xuJGNvbG9yX3N1Y2Nlc3M6ICMwMDc3MDA7XG4kY29sb3Jfd2hpdGU6ICNmZmZmZmY7XG4kY29sb3JfYmxhY2s6ICMwMDA7XG4kY29sb3JfbGlnaHRncmV5OiByZ2JhKCRjb2xvcl93aGl0ZSwgMC41KTtcbiRjb2xvcl9saWdodGVyZ3JleTogcmdiYSgkY29sb3Jfd2hpdGUsIDAuMjUpO1xuJGNvbG9yX2Zvcm1zX2JvcmRlcjogIzcwNzA3MDtcbiRjb2xvcl9mb3JtX3BsYWNlaG9sZGVyOiAjYjFjMmQ5O1xuJGNvbG9yX2xpbmtzX2J1dHRvbnM6ICMwMzZmYjY7XG4kY29sb3Jfc3Vic3VidGl0bGU6ICM3ZTdlN2U7XG4kY29sb3JfdGl0bGU6ICM1MzUyNTI7XG4kY29sb3Jfc3VidGl0bGU6ICNCMkIxQjE7XG4kY29sb3JfbmF2YmFyX2JhY2tncm91bmQ6ICRjb2xvcl9iYWNrZ3JvdW5kO1xuJGNvbG9yX25hdmJhcl9ib3JkZXI6ICNhOWE4YTg7XG5cbiRjb2xvcl90aXRsZV9kZWZhdWx0OiAjNTM1MjUyO1xuLyogQWRkIHJldXNhYmxlIGFuaW1hdGlvbnMqL1xuXG4vKiBBY2NvbW9kYXRlIGlwaG9uZSAxMSsqL1xuJGlwaG9uZS1zYWZlc3BhY2U6IHJlbS1jYWxjKDQ0KTtcbiRjb21tb25HdXR0ZXI6IDNyZW07XG4iLCIvLyAgRm91bmRhdGlvbiBmb3IgU2l0ZXMgU2V0dGluZ3Ncbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBUYWJsZSBvZiBDb250ZW50czpcbi8vXG4vLyAgIDEuIEdsb2JhbFxuLy8gICAyLiBCcmVha3BvaW50c1xuLy8gICAzLiBDYXJkXG4vLyAgIDQuIFByb2dyZXNzIGJhclxuLy8gICA1LiBGb290ZXJcbi8vICAgNi4gSGVhZGVyXG5cbi8vIDEuIEdsb2JhbFxuLy8gLS0tLS0tLS0tXG5cbiRnbG9iYWwtZm9udC1zaXplOiA2Mi41JTtcblxuJGdsb2JhbC1wYWdlLXdpZHRoOiByZW0tY2FsYygxODE4KTtcbiRnbG9iYWwtY29udGVudC13aWR0aDogcmVtLWNhbGMoMTQwMCk7XG4kZ2xvYmFsLWxpbmVoZWlnaHQ6IDEuNTtcbiRib2R5LWJhY2tncm91bmQ6ICRjb2xvcl93aGl0ZTtcbiRib2R5LWZvbnQtY29sb3I6ICRjb2xvcl9ibGFjaztcbiRib2R5LWZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIFJvYm90bywgQXJpYWwsIHNhbnMtc2VyaWY7XG4kYm9keS1hbnRpYWxpYXNlZDogdHJ1ZTtcbiRnbG9iYWwtbWFyZ2luOiAxcmVtO1xuJGdsb2JhbC1wYWRkaW5nOiAxcmVtO1xuJGdsb2JhbC1wb3NpdGlvbjogMXJlbTtcbiRnbG9iYWwtd2VpZ2h0LW5vcm1hbDogbm9ybWFsO1xuJGdsb2JhbC13ZWlnaHQtYm9sZDogYm9sZDtcbiRnbG9iYWwtcmFkaXVzOiAwO1xuJGdsb2JhbC10ZXh0LWRpcmVjdGlvbjogbHRyO1xuJHByaW1hcnktY29sb3I6ICRjb2xvcl9wcmltYXJ5O1xuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQXZlbmlyLUhlYXZ5XCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiB1cmwoXCJodHRwczovL2ZvbnRzLmFuaW1hYXBwLmNvbS9BdmVuaXItSGVhdnlcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJNdXNlby1TYW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiB1cmwoXCJodHRwczovL2ZvbnRzLmFuaW1hYXBwLmNvbS9NdXNlb1NhbnMtNzAwXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xufVxuXG5cbi8vIDIuIEJyZWFrcG9pbnRzXG4vLyAtLS0tLS0tLS0tLS0tLVxuXG4kYnJlYWtwb2ludHM6IChcbiAgc21hbGw6IDAsXG4gIHN1cGVybWluaTogNDAwcHgsXG4gIG1pbmk6IDQ4MHB4LFxuICBtZWRpdW06IDY0MHB4LFxuICB0YWJsZXQ6IDc2MHB4LFxuICBtZWQtbGFyZ2U6IDk2MHB4LFxuICBsYXJnZTogMTAyNHB4LFxuICB4bGFyZ2U6IDEyODBweCxcbiAgeHhsYXJnZTogMTU0MHB4LFxuICB4eHhsYXJnZTogMTkyMHB4LFxuICB4eHh4bGFyZ2U6IDI1NjBweCxcbik7XG4kcHJpbnQtYnJlYWtwb2ludDogbGFyZ2U7XG4kYnJlYWtwb2ludC1jbGFzc2VzOiAoc21hbGwgbWVkaXVtIGxhcmdlKTtcblxuLy8gMy4gQ2FyZFxuLy8gLS0tLS0tLS1cblxuJGNhcmQtYmFja2dyb3VuZDogJGNvbG9yX3doaXRlO1xuJGNhcmQtZm9udC1jb2xvcjogJGJvZHktZm9udC1jb2xvcjtcbiRjYXJkLWRpdmlkZXItYmFja2dyb3VuZDogJGNvbG9yX2xpZ2h0Z3JleTtcbiRjYXJkLWJvcmRlcjogMXB4IHNvbGlkICRjb2xvcl9saWdodGdyZXk7XG4kY2FyZC1zaGFkb3c6IG5vbmU7XG4kY2FyZC1ib3JkZXItcmFkaXVzOiAkZ2xvYmFsLXJhZGl1cztcbiRjYXJkLXBhZGRpbmc6ICRnbG9iYWwtcGFkZGluZztcbiRjYXJkLW1hcmdpbi1ib3R0b206ICRnbG9iYWwtbWFyZ2luO1xuXG4vLyA0LiBQcm9ncmVzcyBCYXJcbi8vIC0tLS0tLS0tLS0tLS0tLS1cblxuJHByb2dyZXNzLWhlaWdodDogMXJlbTtcbiRwcm9ncmVzcy1iYWNrZ3JvdW5kOiAkY29sb3JfbGlnaHRlcmdyZXk7XG4kcHJvZ3Jlc3MtbWFyZ2luLWJvdHRvbTogJGdsb2JhbC1tYXJnaW47XG4kcHJvZ3Jlc3MtbWV0ZXItYmFja2dyb3VuZDogJHByaW1hcnktY29sb3I7XG4kcHJvZ3Jlc3MtcmFkaXVzOiAkZ2xvYmFsLXJhZGl1cztcblxuLy8gNS4gRm9vdGVyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLVxuJGZvb3Rlci1oZWlnaHQ6IDVyZW07XG5cbi8vNi4gTmF2YmFyXG4kbmF2YmFyX2hlaWdodDogOC40cmVtO1xuJG5hdmJhcl9ib3hfc2hhZG93OiAwIC4zcmVtIC42cmVtIHJnYmEoJGNvbG9yX2JsYWNrLCAuMjkpO1xuXG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vc3R5bGVzL21peGlucy9idXR0b25cIjtcbkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zdHlsZXMvdmFyc1wiO1xuQGltcG9ydCBcIi4uLy4uLy4uLy4uL3N0eWxlcy9taXhpbnMvdHlwb2dyYXBoeVwiO1xuQGltcG9ydCBcIi4uLy4uLy4uLy4uL3N0eWxlcy9zZXR0aW5nc1wiO1xuXG4ucm93IHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmxpbmVhciB7XG4gICAgJi1iYWNrZ3JvdW5kIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgICAgICBhbmltYXRpb24tbmFtZTogcGxhY2VIb2xkZXJTaGltbWVyO1xuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmNmY3Zjg7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2VlZWVlZSA4JSwgI2RkZGRkZCAxOCUsICNlZWVlZWUgMzMlKTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAwcHggMTBweDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgfVxufVxuQGtleWZyYW1lcyBwbGFjZUhvbGRlclNoaW1tZXIge1xuICAgIDAlIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ2cHggMDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDQ2cHggMDtcbiAgICB9XG59XG5cbi5zcGFyay1keW5hbWljLWZvcm1zIHsgXG4gICAgJl9fYnV0dG9uLXdyYXBwZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICBtYXJnaW4tdG9wOiA0cmVtO1xuICAgICAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgICZfX2NsZWFyIHtcbiAgICAgICAgQGluY2x1ZGUgYnV0dG9uKCRzaXplOiBzbWFsbCk7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkF2ZW5pci1IZWF2eVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzZXJpZjtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgfSAgIFxuXG4gICAgJl9fc3VibWl0IHtcbiAgICAgICAgQGluY2x1ZGUgYnV0dG9uKCRjb2xvcjpwcmltYXJ5LCAkc2l6ZTogc21hbGwpO1xuICAgICAgICBmb250LWZhbWlseTogXCJBdmVuaXItSGVhdnlcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2VyaWY7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICB9XG5cbiAgICAmX19idWxrIHtcbiAgICAgICAgJi13cmFwcGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgfVxuICAgICAgICAmLWJ0biB7XG4gICAgICAgICAgICBAaW5jbHVkZSBidXR0b24oJHNpemU6IHNtYWxsKTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkF2ZW5pci1IZWF2eVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzZXJpZjtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAmLWJ0bi11cGxvYWQge1xuICAgICAgICAgICAgQGluY2x1ZGUgYnV0dG9uKCRjb2xvcjpwcmltYXJ5LCAkc2l6ZTogc21hbGwpO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiQXZlbmlyLUhlYXZ5XCIsIEhlbHZldGljYSwgQXJpYWwsIHNlcmlmO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDJyZW07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5idWxrIHtcbiAgICAmX193cmFwcGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogM3JlbSBhdXRvO1xuICAgIH1cbiAgICAmX19idXR0b24td3JhcHBlcixcbiAgICAmX19jb250ZW50IHtcbiAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgfVxuXG4gICAgJl9fYnV0dG9uLXdyYXBwZXIge1xuICAgICAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0zLjVyZW07XG4gICAgfVxufSIsIkBtaXhpbiBidXR0b24oJHNpemU6bnVsbCwgJGNvbG9yOm51bGwsICRvdXRsaW5lOm51bGwpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbGluZS1oZWlnaHQ6IDMuNXJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwIDEuNXJlbTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgYm9yZGVyOiAuMnJlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JfbGlua3NfYnV0dG9ucztcbiAgICBjb2xvcjogJGNvbG9yX3doaXRlO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm9yZGVyLWNvbG9yLCAgYmFja2dyb3VuZC1jb2xvciwgY29sb3IsIG9wYWNpdHk7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4yNXM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICAgIEBpbmNsdWRlIHR5cG9ncmFwaHk7XG5cbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLm5vLXRvdWNoZXZlbnRzICY6bm90KFtkaXNhYmxlZF0pOm5vdCguZGlzYWJsZWQpOm5vdCguaXMtLWRpc2FibGVkKTpob3ZlciAvKiwgJjpmb2N1cyAqLyB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbiggJGNvbG9yX2J1dHRvbnMsIDEwJSk7XG4gICAgfVxuXG4gICAgJltkaXNhYmxlZF0sXG4gICAgJi5kaXNhYmxlZCxcbiAgICAmLmlzLS1kaXNhYmxlZCB7XG5cdFx0b3BhY2l0eSA6IC4zNTtcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIH1cblxuICAgICYubGlmdCB7XG4gICAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMjVzIGVhc2UsIHRyYW5zZm9ybSAwLjI1cyBlYXNlO1xuICAgICAgJjpmb2N1cyxcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBib3gtc2hhZG93OiAwIDFyZW0gMi41cmVtIHJnYmEoMTgsIDM4LCA2MywgMC4xKSwgMCAwLjVyZW0gMXJlbSAtMC43NXJlbSByZ2JhKDE4LCAzOCwgNjMsIDAuMSkgIWltcG9ydGFudDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtM3B4LCAwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAaWYgJGNvbG9yID09IHByaW1hcnkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yX2xpbmtzX2J1dHRvbnM7XG4gICAgfSBAZWxzZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk3OTc5O1xuICAgIH1cbiAgICBAaWYgJHNpemUgPT0gc21hbGwge1xuICAgICAgYm9yZGVyLXJhZGl1czogLjNyZW07XG4gICAgICBjb2xvcjogI2Y1ZjVmNTtcbiAgICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgIH0gXG5cbn0iLCJAbWl4aW4gdHlwb2dyYXBoeSgkZm9ybWF0OiBib2R5LCAkd2VpZ2h0OiBudWxsLCAkY29sb3I6bnVsbCwgJGZvbnRzaXplOiBudWxsLCAkbGluZWhlaWdodDogbnVsbCwgJG1heGxpbmVzOjAgKSB7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgQGlmICRtYXhsaW5lcyA+IDAge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAkbWF4bGluZXM7XG4gICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgfVxuXG4gICAgQGlmICRmb3JtYXQgPT0gIGgxIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zaXplOiA2LjRyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA2LjZyZW07XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgICAgICBcbiAgICAgICAgQGlmICR3ZWlnaHQgIT0gYm9sZCBhbmQgJHdlaWdodCAhPSBzdHJvbmcge1xuICAgICAgICAgICAgc3Ryb25nLCBiIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBAaWYgJG1heGxpbmVzID4gMCB7XG5cdFx0XHRtYXgtaGVpZ2h0OiA4cmVtICogJG1heGxpbmVzO1xuXHRcdH1cbiAgICB9IEBlbHNlIGlmICRmb3JtYXQgPT0gaDIge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiA0LjhyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0LjhyZW07XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgICAgICAgQGlmICR3ZWlnaHQgIT0gYm9sZCBhbmQgJHdlaWdodCAhPSBzdHJvbmcge1xuICAgICAgICAgICAgc3Ryb25nLCBiIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cdFx0QGlmICRtYXhsaW5lcyA+IDAge1xuXHRcdFx0bWF4LWhlaWdodDogNC44cmVtICogJG1heGxpbmVzO1xuXHRcdH1cbiAgICB9IEBlbHNlIGlmICRmb3JtYXQgPT0gaDMge1xuICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICBmb250LXNpemU6IDQuOHJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDUuNHJlbTtcblxuICAgICAgICBAaWYgJHdlaWdodCAhPSBib2xkIGFuZCAkd2VpZ2h0ICE9IHN0cm9uZyB7XG4gICAgICAgICAgICBzdHJvbmcsIGIge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblx0XHRAaWYgJG1heGxpbmVzID4gMCB7XG5cdFx0XHRtYXgtaGVpZ2h0OiA0LjhyZW0gKiAkbWF4bGluZXM7XG5cdFx0fVxuICAgIH0gQGVsc2UgaWYgJGZvcm1hdCA9PSBoNCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQuNHJlbTtcblxuICAgICAgICBAaWYgJHdlaWdodCAhPSBib2xkIGFuZCAkd2VpZ2h0ICE9IHN0cm9uZyB7XG4gICAgICAgICAgICBzdHJvbmcsIGIge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblx0XHRAaWYgJG1heGxpbmVzID4gMCB7XG5cdFx0XHRtYXgtaGVpZ2h0OiA0LjRyZW0gKiAkbWF4bGluZXM7XG5cdFx0fVxuICAgIH0gQGVsc2UgaWYgJGZvcm1hdCA9PSBoNSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMi41cmVtO1xuXG4gICAgICAgIEBpZiAkd2VpZ2h0ICE9IGJvbGQgYW5kICR3ZWlnaHQgIT0gc3Ryb25nIHtcbiAgICAgICAgICAgIHN0cm9uZywgYiB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXHRcdEBpZiAkbWF4bGluZXMgPiAwIHtcblx0XHRcdG1heC1oZWlnaHQ6IDEuOHJlbSAqICRtYXhsaW5lcztcblx0XHR9XG4gICAgfSBAZWxzZSBpZiAkZm9ybWF0ID09IGg2IHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMS40cmVtO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICAgICAgIEBpZiAkd2VpZ2h0ICE9IGJvbGQgYW5kICR3ZWlnaHQgIT0gc3Ryb25nIHtcbiAgICAgICAgICAgIHN0cm9uZywgYiB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXHRcdEBpZiAkbWF4bGluZXMgPiAwIHtcblx0XHRcdG1heC1oZWlnaHQ6IDEuNHJlbSAqICRtYXhsaW5lcztcblx0XHR9XG4gICAgfSBAZWxzZSBpZiAkZm9ybWF0ID09IHNtYWxsIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyLjNyZW07XG5cbiAgICAgICAgQGlmICR3ZWlnaHQgIT0gYm9sZCBhbmQgJHdlaWdodCAhPSBzdHJvbmcge1xuICAgICAgICAgICAgc3Ryb25nLCBiIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cdFx0QGlmICRtYXhsaW5lcyA+IDAge1xuXHRcdFx0bWF4LWhlaWdodDogMi4zcmVtICogJG1heGxpbmVzO1xuXHRcdH1cbiAgICB9IEBlbHNlIGlmICRmb3JtYXQgPT0gdmVyeXNtYWxsIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuXG4gICAgICAgIEBpZiAkd2VpZ2h0ICE9IGJvbGQgYW5kICR3ZWlnaHQgIT0gc3Ryb25nIHtcbiAgICAgICAgICAgIHN0cm9uZywgYiB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXHRcdEBpZiAkbWF4bGluZXMgPiAwIHtcblx0XHRcdG1heC1oZWlnaHQ6IDEuMnJlbSAqICRtYXhsaW5lcztcblx0XHR9XG4gICAgfSBAZWxzZSBpZiAkZm9ybWF0ID09IHZlcnl2ZXJ5c21hbGwge1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuXG4gICAgICAgIEBpZiAkd2VpZ2h0ICE9IGJvbGQgYW5kICR3ZWlnaHQgIT0gc3Ryb25nIHtcbiAgICAgICAgICAgIHN0cm9uZywgYiB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXHRcdEBpZiAkbWF4bGluZXMgPiAwIHtcblx0XHRcdG1heC1oZWlnaHQ6IDFyZW0gKiAkbWF4bGluZXM7XG5cdFx0fVxuICAgIH0gQGVsc2UgIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyLjlyZW07XG5cbiAgICAgICAgQGlmICR3ZWlnaHQgIT0gYm9sZCBhbmQgJHdlaWdodCAhPSBzdHJvbmcge1xuICAgICAgICAgICAgc3Ryb25nLCBiIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cdFx0QGlmICRtYXhsaW5lcyA+IDAge1xuXHRcdFx0bWF4LWhlaWdodDogMi42cmVtICogJG1heGxpbmVzO1xuXHRcdH1cbiAgICB9XG5cbiAgICBAaWYgJHdlaWdodCA9PSBib2xkIG9yICR3ZWlnaHQgPT0gc3Ryb25nIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfSBAZWxzZSBpZiAkd2VpZ2h0ID09IGJvbGQge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9IEBlbHNlIGlmICR3ZWlnaHQgPT0gbm9ybWFsIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICB9XG5cbiAgICBAaWYgJGNvbG9yIHtcbiAgICAgICAgY29sb3I6ICRjb2xvcjtcbiAgICB9XG5cbiAgICBAaWYgJGZvbnRzaXplIHtcbiAgICAgICAgZm9udC1zaXplOiAkZm9udHNpemU7XG4gICAgfVxuXG4gICAgQGlmICRsaW5laGVpZ2h0IHtcbiAgICAgICAgbGluZS1oZWlnaHQ6ICRsaW5laGVpZ2h0O1xuICAgIH1cbn0iXX0= */"] });


/***/ }),

/***/ "M95H":
/*!**********************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard.component.ts ***!
  \**********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 2, vars: 0, template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "dashboard works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "NOaf":
/*!***************************************************************!*\
  !*** ./src/app/modules/suppliers/suppliers-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: SupplierRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierRoutes", function() { return SupplierRoutes; });
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add/add.component */ "DcOx");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list/list.component */ "/rH6");


const SupplierRoutes = [
    { path: '', component: _list_list_component__WEBPACK_IMPORTED_MODULE_1__["ListComponent"], data: { breadcrumb: 'List Supplier' } },
    { path: 'add', component: _add_add_component__WEBPACK_IMPORTED_MODULE_0__["AddComponent"], data: { breadcrumb: 'Add Supplier' } },
];


/***/ }),

/***/ "UeEd":
/*!************************************************************!*\
  !*** ./src/app/modules/inventory/boxes/boxes.component.ts ***!
  \************************************************************/
/*! exports provided: BoxesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxesComponent", function() { return BoxesComponent; });
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options */ "+Qyq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_toast_notifications_toast_notifications_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/toast-notifications/toast-notifications.service */ "hkff");
/* harmony import */ var _shared_myform_myform_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/myform/myform.component */ "l9h7");





class BoxesComponent {
    constructor(_activatedRoute, toastService) {
        this._activatedRoute = _activatedRoute;
        this.toastService = toastService;
        this.formItems = _options__WEBPACK_IMPORTED_MODULE_0__["BoxConfigFields"];
        this.url = "boxs/bulk/";
        this.formGroupOrder = [
            ["box_config", "store", "purchase_order"],
            ["serial_numbers"]
        ];
        this._activatedRoute.queryParams.subscribe(params => {
            if (params.hasOwnProperty('id')) {
                this.instance = params;
                console.log(this.instance);
            }
        });
    }
    ngOnInit() {
    }
    onValidatedData(data) {
        console.log(data);
    }
    onPostedData(data) {
        console.log(data);
        // this.toastService.update("Successfully added record", "success")
    }
}
BoxesComponent.ɵfac = function BoxesComponent_Factory(t) { return new (t || BoxesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_toast_notifications_toast_notifications_service__WEBPACK_IMPORTED_MODULE_3__["ToastNotificationsService"])); };
BoxesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BoxesComponent, selectors: [["app-boxes"]], decls: 1, vars: 6, consts: [["submitButtonText", "Box", 3, "isValidationOnly", "formItems", "url", "instance", "formGroupOrder", "cardTitle", "onValidatedData", "onPostedData"]], template: function BoxesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-myform", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onValidatedData", function BoxesComponent_Template_app_myform_onValidatedData_0_listener($event) { return ctx.onValidatedData($event); })("onPostedData", function BoxesComponent_Template_app_myform_onPostedData_0_listener($event) { return ctx.onPostedData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isValidationOnly", false)("formItems", ctx.formItems)("url", ctx.url)("instance", ctx.instance)("formGroupOrder", ctx.formGroupOrder)("cardTitle", "Box");
    } }, directives: [_shared_myform_myform_component__WEBPACK_IMPORTED_MODULE_4__["MyformComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib3hlcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "X8vo":
/*!********************************************************************!*\
  !*** ./src/app/modules/warehouse/list/warehouse-list.component.ts ***!
  \********************************************************************/
/*! exports provided: WarehouseListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseListComponent", function() { return WarehouseListComponent; });
/* harmony import */ var src_app_core_mixins_table_handle_actions_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/mixins/table-handle-actions-mixin */ "ZLRj");
/* harmony import */ var src_app_shared_tables_tables_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/tables/tables.component */ "QE/Q");
/* harmony import */ var _add_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../add/options */ "x2Eb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_modals_modals_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/modals/modals.service */ "22UC");
/* harmony import */ var src_app_shared_tables_tables_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/tables/tables.service */ "Mm8Z");
/* harmony import */ var _shared_add_button_add_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/add-button/add-button.component */ "jUvn");
/* harmony import */ var _shared_filters_dropdown_filters_dropdown_filters_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/filters/dropdown-filters/dropdown-filters.component */ "xtVc");
/* harmony import */ var _shared_modals_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/modals/confirm-dialog/confirm-dialog.component */ "BsoD");











const TableHandleActionsMixin = Object(src_app_core_mixins_table_handle_actions_mixin__WEBPACK_IMPORTED_MODULE_0__["tableHandleActionsMixin"])(src_app_shared_tables_tables_component__WEBPACK_IMPORTED_MODULE_1__["TablesComponent"]);
class WarehouseListComponent extends TableHandleActionsMixin {
    constructor(_router, _modalService, _tableService) {
        super();
        this._router = _router;
        this._modalService = _modalService;
        this._tableService = _tableService;
        this.formItems = _add_options__WEBPACK_IMPORTED_MODULE_2__["storeFields"];
        this.tableFiltersDropdown = [
            ["manager"],
            ["location"],
        ];
        this.url = "stores/?type=WH&";
        this.apiUrl = "stores";
        this.headers = [
            "Name",
            {
                name: 'Warehouse ID',
                source: "id",
            },
            {
                name: 'Region/ Location',
                source: "location_details.name",
            },
            {
                name: 'Warehouse Manager',
                source: "manager_details.full_name",
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
        this.handleTableActions(action, '/warehouse/add', this.apiUrl);
    }
}
WarehouseListComponent.ɵfac = function WarehouseListComponent_Factory(t) { return new (t || WarehouseListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_modals_modals_service__WEBPACK_IMPORTED_MODULE_5__["ModalsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_tables_tables_service__WEBPACK_IMPORTED_MODULE_6__["TablesService"])); };
WarehouseListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: WarehouseListComponent, selectors: [["app-warehouse-list"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 10, vars: 9, consts: [[1, "container"], [1, "row"], [1, "col-sm-12"], [3, "url"], [1, "col-sm-3"], [3, "url", "filterUrl", "formItems", "formGroupOrder"], [1, "col-sm-9"], [3, "listTypeUrl", "headers", "tableFilters", "filterFormItems", "actionsEvent"]], template: function WarehouseListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-add-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "app-dropdown-filters", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "app-tables", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("actionsEvent", function WarehouseListComponent_Template_app_tables_actionsEvent_8_listener($event) { return ctx.handleActions($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "app-confirm-dialog");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("url", "/warehouse/add");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("url", ctx.listTypeUrl)("filterUrl", ctx.listTypeUrl)("formItems", ctx.formItems)("formGroupOrder", ctx.tableFiltersDropdown);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("listTypeUrl", ctx.url)("headers", ctx.headers)("tableFilters", ctx.tableFiltersCollapsible)("filterFormItems", ctx.formItems);
    } }, directives: [_shared_add_button_add_button_component__WEBPACK_IMPORTED_MODULE_7__["AddButtonComponent"], _shared_filters_dropdown_filters_dropdown_filters_component__WEBPACK_IMPORTED_MODULE_8__["DropdownFiltersComponent"], src_app_shared_tables_tables_component__WEBPACK_IMPORTED_MODULE_1__["TablesComponent"], _shared_modals_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmDialogComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3YXJlaG91c2UtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "ZLRj":
/*!***********************************************************!*\
  !*** ./src/app/core/mixins/table-handle-actions-mixin.ts ***!
  \***********************************************************/
/*! exports provided: tableHandleActionsMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tableHandleActionsMixin", function() { return tableHandleActionsMixin; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");

function tableHandleActionsMixin(BaseClass) {
    return class extends BaseClass {
        handleTableActions(action, url, apiUrl) {
            // console.log(action)
            switch (action.name) {
                case "edit":
                    this._router.navigate([url], { queryParams: action.data });
                    break;
                case "delete":
                    const _this = this;
                    this._modalService.confirm("Are you sure you want to delete?", function () {
                        console.log('PROMPT CONFIRM', action);
                        _this._tableService.delete(action.data, apiUrl)
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1))
                            .subscribe(() => { });
                    }, function () {
                        console.info('PROMPT DELETE CANCELLED');
                    });
                    break;
                default:
                    break;
            }
        }
    };
}


/***/ }),

/***/ "ZUYP":
/*!******************************************************************!*\
  !*** ./src/app/modules/stockroom/add/add-stockroom.component.ts ***!
  \******************************************************************/
/*! exports provided: AddStockroomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddStockroomComponent", function() { return AddStockroomComponent; });
/* harmony import */ var _warehouse_add_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../warehouse/add/options */ "x2Eb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_myform_myform_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/myform/myform.component */ "l9h7");




class AddStockroomComponent {
    constructor(_activatedRoute) {
        this._activatedRoute = _activatedRoute;
        this.formItems = _warehouse_add_options__WEBPACK_IMPORTED_MODULE_0__["storeFields"];
        this.url = "stores/";
        this.formGroupOrder = [
            ['name', 'location', 'manager'],
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
        console.log(data);
    }
    onPostedData(data) {
        console.log(data);
    }
}
AddStockroomComponent.ɵfac = function AddStockroomComponent_Factory(t) { return new (t || AddStockroomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
AddStockroomComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddStockroomComponent, selectors: [["app-add-stockroom"]], decls: 1, vars: 7, consts: [["submitButtonText", "Stockroom", 3, "isValidationOnly", "formItems", "url", "extraParams", "instance", "formGroupOrder", "cardTitle", "onValidatedData", "onPostedData"]], template: function AddStockroomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-myform", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onValidatedData", function AddStockroomComponent_Template_app_myform_onValidatedData_0_listener($event) { return ctx.onValidatedData($event); })("onPostedData", function AddStockroomComponent_Template_app_myform_onPostedData_0_listener($event) { return ctx.onPostedData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isValidationOnly", false)("formItems", ctx.formItems)("url", ctx.url)("extraParams", ctx.extraParams)("instance", ctx.instance)("formGroupOrder", ctx.formGroupOrder)("cardTitle", "Stockroom");
    } }, directives: [_shared_myform_myform_component__WEBPACK_IMPORTED_MODULE_3__["MyformComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtc3RvY2tyb29tLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "c2HD":
/*!*********************************************************************!*\
  !*** ./src/app/modules/inventory/items/list/list-item.component.ts ***!
  \*********************************************************************/
/*! exports provided: ListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItemComponent", function() { return ListItemComponent; });
/* harmony import */ var src_app_core_mixins_table_handle_actions_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/mixins/table-handle-actions-mixin */ "ZLRj");
/* harmony import */ var src_app_shared_tables_tables_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/tables/tables.component */ "QE/Q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_modals_modals_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/modals/modals.service */ "22UC");
/* harmony import */ var src_app_shared_tables_tables_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/tables/tables.service */ "Mm8Z");
/* harmony import */ var _shared_add_button_add_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/add-button/add-button.component */ "jUvn");
/* harmony import */ var _shared_modals_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/modals/confirm-dialog/confirm-dialog.component */ "BsoD");









const TableHandleActionsMixin = Object(src_app_core_mixins_table_handle_actions_mixin__WEBPACK_IMPORTED_MODULE_0__["tableHandleActionsMixin"])(src_app_shared_tables_tables_component__WEBPACK_IMPORTED_MODULE_1__["TablesComponent"]);
class ListItemComponent extends TableHandleActionsMixin {
    constructor(_router, _modalService, _tableService) {
        super();
        this._router = _router;
        this._modalService = _modalService;
        this._tableService = _tableService;
        this.url = "itemz";
        this.headers = [
            {
                name: 'Item Name',
                source: "item_config_name",
            },
            {
                name: 'Warehouse / Stockroom',
                source: "store_name",
            },
            {
                name: 'Region/ Location',
                source: "location_name",
            },
            "Purchase order",
            "Serial",
            {
                name: 'Actions',
                type: "actions",
                source: "",
                data: [
                    "edit", "delete"
                ]
            },
        ];
        this.tableFilters = ["Serial"];
    }
    ngOnInit() {
    }
    handleActions(action) {
        action.name == 'edit' ? this.handleTableActions(action, '/inventory/edit', this.url) : this.handleTableActions(action, '/inventory/add', this.url);
    }
}
ListItemComponent.ɵfac = function ListItemComponent_Factory(t) { return new (t || ListItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_modals_modals_service__WEBPACK_IMPORTED_MODULE_4__["ModalsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_tables_tables_service__WEBPACK_IMPORTED_MODULE_5__["TablesService"])); };
ListItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ListItemComponent, selectors: [["app-list-item"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 5, vars: 4, consts: [[1, "row"], [1, "col-sm-12"], [3, "url"], [3, "listTypeUrl", "headers", "tableFilters", "actionsEvent"]], template: function ListItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-add-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "app-tables", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("actionsEvent", function ListItemComponent_Template_app_tables_actionsEvent_3_listener($event) { return ctx.handleActions($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-confirm-dialog");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("url", "/inventory/add");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("listTypeUrl", ctx.url)("headers", ctx.headers)("tableFilters", ctx.tableFilters);
    } }, directives: [_shared_add_button_add_button_component__WEBPACK_IMPORTED_MODULE_6__["AddButtonComponent"], src_app_shared_tables_tables_component__WEBPACK_IMPORTED_MODULE_1__["TablesComponent"], _shared_modals_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmDialogComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LWl0ZW0uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "cY7v":
/*!****************************************************************!*\
  !*** ./src/app/modules/inventory/boxes/list/list.component.ts ***!
  \****************************************************************/
/*! exports provided: ListBoxesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListBoxesComponent", function() { return ListBoxesComponent; });
/* harmony import */ var src_app_core_mixins_table_handle_actions_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/mixins/table-handle-actions-mixin */ "ZLRj");
/* harmony import */ var src_app_shared_tables_tables_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/tables/tables.component */ "QE/Q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_modals_modals_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/modals/modals.service */ "22UC");
/* harmony import */ var src_app_shared_tables_tables_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/tables/tables.service */ "Mm8Z");
/* harmony import */ var _shared_add_button_add_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/add-button/add-button.component */ "jUvn");
/* harmony import */ var _shared_modals_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/modals/confirm-dialog/confirm-dialog.component */ "BsoD");









const TableHandleActionsMixin = Object(src_app_core_mixins_table_handle_actions_mixin__WEBPACK_IMPORTED_MODULE_0__["tableHandleActionsMixin"])(src_app_shared_tables_tables_component__WEBPACK_IMPORTED_MODULE_1__["TablesComponent"]);
class ListBoxesComponent extends TableHandleActionsMixin {
    constructor(_router, _modalService, _tableService) {
        super();
        this._router = _router;
        this._modalService = _modalService;
        this._tableService = _tableService;
        this.url = "boxs";
        this.headers = [
            "box_config",
            "store",
            "purchase_order",
            {
                "name": "Serials",
                "source": "serial"
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
        this.handleTableActions(action, '/check-in', this.url);
    }
}
ListBoxesComponent.ɵfac = function ListBoxesComponent_Factory(t) { return new (t || ListBoxesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_modals_modals_service__WEBPACK_IMPORTED_MODULE_4__["ModalsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_tables_tables_service__WEBPACK_IMPORTED_MODULE_5__["TablesService"])); };
ListBoxesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ListBoxesComponent, selectors: [["app-list"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 5, vars: 4, consts: [[1, "row"], [1, "col-sm-12"], [3, "url"], [3, "listTypeUrl", "headers", "tableFilters", "actionsEvent"]], template: function ListBoxesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-add-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "app-tables", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("actionsEvent", function ListBoxesComponent_Template_app_tables_actionsEvent_3_listener($event) { return ctx.handleActions($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-confirm-dialog");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("url", "/check-in");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("listTypeUrl", ctx.url)("headers", ctx.headers)("tableFilters", ctx.tableFilters);
    } }, directives: [_shared_add_button_add_button_component__WEBPACK_IMPORTED_MODULE_6__["AddButtonComponent"], src_app_shared_tables_tables_component__WEBPACK_IMPORTED_MODULE_1__["TablesComponent"], _shared_modals_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmDialogComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "ihgr":
/*!*******************************************************!*\
  !*** ./src/app/modules/warehouse/warehouse.module.ts ***!
  \*******************************************************/
/*! exports provided: WarehouseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseModule", function() { return WarehouseModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _warehouse_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./warehouse-routing.module */ "42jx");
/* harmony import */ var _add_add_warehouse_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add/add-warehouse.component */ "6XNJ");
/* harmony import */ var _list_warehouse_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list/warehouse-list.component */ "X8vo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








class WarehouseModule {
}
WarehouseModule.ɵfac = function WarehouseModule_Factory(t) { return new (t || WarehouseModule)(); };
WarehouseModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: WarehouseModule });
WarehouseModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_warehouse_routing_module__WEBPACK_IMPORTED_MODULE_3__["WarehouseRoutes"]),
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](WarehouseModule, { declarations: [_add_add_warehouse_component__WEBPACK_IMPORTED_MODULE_4__["AddWarehouseComponent"], _list_warehouse_list_component__WEBPACK_IMPORTED_MODULE_5__["WarehouseListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]] }); })();


/***/ }),

/***/ "mTTB":
/*!*********************************************************!*\
  !*** ./src/app/modules/inventory/items/edit/options.ts ***!
  \*********************************************************/
/*! exports provided: SerializedItemfields, NotSerializedItemfields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SerializedItemfields", function() { return SerializedItemfields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotSerializedItemfields", function() { return NotSerializedItemfields; });
/* harmony import */ var _services_constants_form_options_configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/constants/form-options-configs */ "/In7");

const SerializedItemfields = {
    "name": "List Create Items Api",
    "description": "",
    parses: _services_constants_form_options_configs__WEBPACK_IMPORTED_MODULE_0__["parses"],
    renders: _services_constants_form_options_configs__WEBPACK_IMPORTED_MODULE_0__["renders"],
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
            "purchase_order": {
                "type": "string",
                "required": true,
                "read_only": false,
                "label": "Purchase order",
                "max_length": 45
            },
            "serial": {
                "type": "string",
                "required": true,
                "read_only": false,
                "label": "Serial",
                "max_length": 400
            },
            "store": {
                "type": "field",
                "required": true,
                "read_only": false,
                "label": "Warehouse / Stockroom",
                "display_name": "name",
                "url": `${_services_constants_form_options_configs__WEBPACK_IMPORTED_MODULE_0__["endpointV1"]}stores`
            },
            "item_config": {
                "type": "field",
                "required": true,
                "read_only": false,
                "label": "Item Name",
                "display_name": "name",
                "url": `${_services_constants_form_options_configs__WEBPACK_IMPORTED_MODULE_0__["endpointV1"]}item-configs`
            },
            "box": {
                "type": "field",
                "required": false,
                "read_only": false,
                "label": "Box",
                "display_name": "name",
                "url": `${_services_constants_form_options_configs__WEBPACK_IMPORTED_MODULE_0__["endpointV1"]}box-configs`
            }
        }
    }
};
const NotSerializedItemfields = {
    "name": "List Create Items Api",
    "description": "",
    parses: _services_constants_form_options_configs__WEBPACK_IMPORTED_MODULE_0__["parses"],
    renders: _services_constants_form_options_configs__WEBPACK_IMPORTED_MODULE_0__["renders"],
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
            "purchase_order": {
                "type": "string",
                "required": true,
                "read_only": false,
                "label": "Purchase order",
                "max_length": 45
            },
            "serial": {
                "type": "string",
                "required": true,
                "read_only": false,
                "label": "Serial",
                "max_length": 400
            },
            "store": {
                "type": "field",
                "required": true,
                "read_only": false,
                "label": "Warehouse / Stockroom",
                "display_name": "name",
                "url": `${_services_constants_form_options_configs__WEBPACK_IMPORTED_MODULE_0__["endpointV1"]}stores`
            },
            "item_config": {
                "type": "field",
                "required": true,
                "read_only": false,
                "label": "Item Name",
                "display_name": "name",
                "url": `${_services_constants_form_options_configs__WEBPACK_IMPORTED_MODULE_0__["endpointV1"]}item-configs`
            },
            "box": {
                "type": "field",
                "required": false,
                "read_only": false,
                "label": "Box",
                "display_name": "name",
                "url": `${_services_constants_form_options_configs__WEBPACK_IMPORTED_MODULE_0__["endpointV1"]}box-configs`
            }
        }
    }
};



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

/***/ "mycG":
/*!*******************************************************!*\
  !*** ./src/app/modules/inventory/inventory.module.ts ***!
  \*******************************************************/
/*! exports provided: InventoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryModule", function() { return InventoryModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _inventory_routing_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inventory-routing.modules */ "/Eod");
/* harmony import */ var _items_add_add_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./items/add/add-item.component */ "oW0k");
/* harmony import */ var _items_list_list_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./items/list/list-item.component */ "c2HD");
/* harmony import */ var src_app_core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/core.module */ "pKmL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _items_edit_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./items/edit/edit.component */ "Ic8S");
/* harmony import */ var _items_move_stock_move_stock_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./items/move-stock/move-stock.component */ "KQTo");
/* harmony import */ var _boxes_boxes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./boxes/boxes.component */ "UeEd");
/* harmony import */ var _boxes_list_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./boxes/list/list.component */ "cY7v");
/* harmony import */ var _products_products_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./products/products.module */ "4k8T");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");














class InventoryModule {
}
InventoryModule.ɵfac = function InventoryModule_Factory(t) { return new (t || InventoryModule)(); };
InventoryModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: InventoryModule });
InventoryModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(_inventory_routing_modules__WEBPACK_IMPORTED_MODULE_1__["InventoryRoutes"]),
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            src_app_core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
            _products_products_module__WEBPACK_IMPORTED_MODULE_11__["ProductsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](InventoryModule, { declarations: [_items_add_add_item_component__WEBPACK_IMPORTED_MODULE_2__["AddItemComponent"], _items_list_list_item_component__WEBPACK_IMPORTED_MODULE_3__["ListItemComponent"], _items_edit_edit_component__WEBPACK_IMPORTED_MODULE_7__["EditComponent"], _items_move_stock_move_stock_component__WEBPACK_IMPORTED_MODULE_8__["MoveStockComponent"], _boxes_boxes_component__WEBPACK_IMPORTED_MODULE_9__["BoxesComponent"], _boxes_list_list_component__WEBPACK_IMPORTED_MODULE_10__["ListBoxesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
        src_app_core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
        _products_products_module__WEBPACK_IMPORTED_MODULE_11__["ProductsModule"]] }); })();


/***/ }),

/***/ "nZDg":
/*!**********************************************!*\
  !*** ./src/app/modules/customers/options.ts ***!
  \**********************************************/
/*! exports provided: CustomerConfigs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerConfigs", function() { return CustomerConfigs; });
/* harmony import */ var _services_constants_form_options_configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/constants/form-options-configs */ "/In7");

const CustomerConfigs = {
    name: 'List Create Customers Api',
    description: '',
    parses: _services_constants_form_options_configs__WEBPACK_IMPORTED_MODULE_0__["parses"],
    renders: _services_constants_form_options_configs__WEBPACK_IMPORTED_MODULE_0__["renders"],
    actions: {
        POST: {
            id: {
                type: 'integer',
                required: false,
                read_only: true,
                label: 'ID',
            },
            created: {
                type: 'datetime',
                required: false,
                read_only: true,
                label: 'Created',
            },
            modified: {
                type: 'datetime',
                required: false,
                read_only: true,
                label: 'Modified',
            },
            name: {
                type: 'string',
                required: false,
                read_only: false,
                label: 'Name',
                max_length: 45,
            },
            angaza_qid: {
                type: 'string',
                required: false,
                read_only: false,
                label: 'Angaza qid',
                max_length: 45,
            },
            primary_phone: {
                type: 'string',
                required: false,
                read_only: false,
                label: 'Primary phone',
                max_length: 45,
            },
            id_number: {
                type: 'string',
                required: false,
                read_only: false,
                label: 'Id number',
                max_length: 15,
            },
            region: {
                type: 'field',
                required: false,
                read_only: false,
                label: 'Region',
                max_length: 45,
                display_name: "name",
                url: `${_services_constants_form_options_configs__WEBPACK_IMPORTED_MODULE_0__["endpointV1"]}locations/`
            },
            village: {
                type: 'string',
                required: false,
                read_only: false,
                label: 'Village',
                max_length: 45,
            },
            closest_spark_agent_shop: {
                type: 'integer',
                required: false,
                read_only: false,
                label: 'Closest spark agent shop',
                help_text: 'In Kms',
                max_length: 45,
            },
            occupation: {
                type: 'string',
                required: false,
                read_only: false,
                label: 'Occupation',
                max_length: 45,
            },
            avg_monthly_income: {
                type: 'string',
                required: false,
                read_only: true,
                label: 'Avg monthly income',
                help_text: 'In Kms',
                max_length: 45,
            },
            min_salary: {
                "type": "integer",
                "required": false,
                "read_only": false,
                "label": "Min salary"
            },
            max_salary: {
                "type": "integer",
                "required": false,
                "read_only": false,
                "label": "Max salary"
            }
        },
    },
};


/***/ }),

/***/ "oW0k":
/*!*******************************************************************!*\
  !*** ./src/app/modules/inventory/items/add/add-item.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemComponent", function() { return AddItemComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_constants_form_options_configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/constants/form-options-configs */ "/In7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_forms_form_item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/forms/form-item.service */ "L4dG");
/* harmony import */ var _shared_toast_notifications_toast_notifications_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/toast-notifications/toast-notifications.service */ "hkff");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/card/card.component */ "Fe25");
/* harmony import */ var _shared_textarea_with_count_textarea_with_count_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/textarea-with-count/textarea-with-count.component */ "GPJV");










function AddItemComponent_select_7_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", item_r13.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r13.name);
} }
function AddItemComponent_select_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "select", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AddItemComponent_select_7_option_1_Template, 2, 2, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.items);
} }
function AddItemComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 26);
} }
function AddItemComponent_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddItemComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AddItemComponent_div_9_div_1_Template, 4, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.add_item_form.controls["item_config"].errors.required);
} }
function AddItemComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.api_errors.item_config, " ");
} }
function AddItemComponent_select_14_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const store_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", store_r16.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](store_r16.name);
} }
function AddItemComponent_select_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "select", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AddItemComponent_select_14_option_1_Template, 2, 2, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r4.stores);
} }
function AddItemComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 26);
} }
function AddItemComponent_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddItemComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AddItemComponent_div_16_div_1_Template, 4, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.add_item_form.controls["store"].errors.required);
} }
function AddItemComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r7.api_errors.store, " ");
} }
function AddItemComponent_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddItemComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AddItemComponent_div_22_div_1_Template, 4, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.add_item_form.controls["purchase_order"].errors.required);
} }
function AddItemComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r9.api_errors.purchase_order, " ");
} }
function AddItemComponent_div_24_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddItemComponent_div_24_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Field has to be a number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddItemComponent_div_24_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AddItemComponent_div_24_div_4_div_1_Template, 4, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AddItemComponent_div_24_div_4_div_2_Template, 4, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r19.add_item_form.controls["item_count"].errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r19.add_item_form.controls["item_count"].errors.required);
} }
function AddItemComponent_div_24_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r20.api_errors.item_count, " ");
} }
function AddItemComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Item Count");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AddItemComponent_div_24_div_4_Template, 3, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, AddItemComponent_div_24_div_5_Template, 3, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r10.add_item_form.controls["item_count"].invalid && (ctx_r10.add_item_form.controls["item_count"].dirty || ctx_r10.add_item_form.controls["item_count"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r10.api_errors.item_count);
} }
function AddItemComponent_div_30_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddItemComponent_div_30_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r24.api_errors.serial_numbers, " ");
} }
function AddItemComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Serial");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-textarea-with-count", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, AddItemComponent_div_30_div_5_Template, 5, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, AddItemComponent_div_30_div_6_Template, 3, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r11.add_item_form.controls["serial_numbers"].dirty || ctx_r11.add_item_form.controls["serial_numbers"].touched) && (ctx_r11.check_box == true && ctx_r11.add_item_form.value.serial_numbers == ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r11.api_errors.serial_numbers);
} }
const _c0 = function () { return { standalone: true }; };
class AddItemComponent {
    constructor(_activatedRoute, _formService, toastService, location) {
        this._activatedRoute = _activatedRoute;
        this._formService = _formService;
        this.toastService = toastService;
        this.location = location;
        this.page_title = 'Add Items';
        this.newEntry = true;
        this.check_box = false;
        this.item_loading = true;
        this.stock_loading = true;
        this.box_loading = true;
        this.instance = {};
        this.api_errors = [];
        const item_config = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        const store = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        const purchase_order = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        const item_count = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('');
        const serial_numbers = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('');
        this.add_item_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            item_config: item_config,
            store: store,
            purchase_order: purchase_order,
            serial_numbers: serial_numbers,
            item_count: item_count
        });
        // this._activatedRoute.queryParams.subscribe(params => {
        //   if (params.hasOwnProperty("id")) {
        //     this.instance = params
        //     this.newEntry = false;
        //     console.log(this.instance)
        //   }
        //   //Show Serial textarea if edit 
        //   if (params.hasOwnProperty("serial")) {
        //     this.check_box = true;
        //   }
        // });
    }
    ngOnInit() {
        //initially populate dropdowns
        this.getDropdownValues();
        this.showSuccess();
    }
    showSuccess() {
        console.log("toast");
    }
    getDropdownValues() {
        //Item config fetch dropdown values and set field value if an edit
        this._formService.getDropdownValues(`${_services_constants_form_options_configs__WEBPACK_IMPORTED_MODULE_1__["endpointV1"]}item-configs`).subscribe(response => {
            this.item_loading = false;
            this.items = response.results;
            console.log("item-configs");
            console.log(response);
        }, err => {
            this.item_loading = false;
        });
        //Store fetch dropdown values and set field value if an edit
        this._formService.getDropdownValues(`${_services_constants_form_options_configs__WEBPACK_IMPORTED_MODULE_1__["endpointV1"]}stores`).subscribe(response => {
            this.stock_loading = false;
            this.stores = response.results;
        }, err => {
            this.stock_loading = false;
        });
    }
    //POST or PUT item
    submitItem() {
        //delete fields not needed in serialized/non-serialized
        if (this.check_box == true) {
            delete this.add_item_form.value.item_count;
        }
        else {
            delete this.add_item_form.value.serial_numbers;
        }
        //reset API errors
        this.api_errors = [];
        let data = {
            url: this.newEntry == true ? `${_services_constants_form_options_configs__WEBPACK_IMPORTED_MODULE_1__["endpointV1"]}itemz/bulk` : `${_services_constants_form_options_configs__WEBPACK_IMPORTED_MODULE_1__["endpointV1"]}itemz/${this.instance.id}/`,
            formData: this.add_item_form.value
        };
        console.log(data);
        this._formService.postForm(this.newEntry, data).subscribe(response => {
            console.log(response);
            this.add_item_form.reset();
            this.location.back();
        }, (err) => {
            this.api_errors = err.error;
        });
    }
    //Reset Form
    clearForm() {
        this.newEntry = false;
        this.add_item_form.reset();
    }
}
AddItemComponent.ɵfac = function AddItemComponent_Factory(t) { return new (t || AddItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_forms_form_item_service__WEBPACK_IMPORTED_MODULE_4__["FormItemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_toast_notifications_toast_notifications_service__WEBPACK_IMPORTED_MODULE_5__["ToastNotificationsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"])); };
AddItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AddItemComponent, selectors: [["app-add-item"]], decls: 37, vars: 18, consts: [[1, "container"], [1, "form-group", 3, "formGroup", "ngSubmit"], [3, "title"], [1, "row"], [1, "col-md-3"], ["for", "item_name", 1, "form-label"], ["class", "form-control form-control-lg opt-value", "formControlName", "item_config", 4, "ngIf"], ["class", "linear-background", 4, "ngIf"], ["class", "alert", 4, "ngIf"], [4, "ngIf"], ["class", "form-control form-control-lg opt-value", "formControlName", "store", 4, "ngIf"], [1, "col-md-2"], ["formControlName", "purchase_order", "required", "", 1, "form-control", "form-control-lg", "opt-value"], ["class", "col-md-2", 4, "ngIf"], [1, "col-md-2", "text-center"], ["for", "serials", 1, "form-label"], [1, "form-check"], ["type", "checkbox", 1, "form-check-input", "opt-value", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["class", "row", 4, "ngIf"], [1, "spark-dynamic-forms__button-wrapper"], ["type", "button", 1, "btn", "btn", "btn-sm", "mb-3", "lift", "spark-dynamic-forms__clear", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "mb-3", "lift", "spark-dynamic-forms__submit", 3, "disabled"], [1, "spark-text"], ["formControlName", "item_config", 1, "form-control", "form-control-lg", "opt-value"], ["required", "", 3, "value", 4, "ngFor", "ngForOf"], ["required", "", 3, "value"], [1, "linear-background"], [1, "alert"], [1, "text-danger", "opt-value"], ["formControlName", "store", 1, "form-control", "form-control-lg", "opt-value"], ["type", "number", "formControlName", "item_count", 1, "form-control", "form-control-lg"], [1, "col-md-12"], ["for", "serial_numbers", 1, "form-label"], ["formControlName", "serial_numbers"]], template: function AddItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AddItemComponent_Template_form_ngSubmit_1_listener() { return ctx.submitItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "app-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Item Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AddItemComponent_select_7_Template, 2, 1, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AddItemComponent_span_8_Template, 1, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, AddItemComponent_div_9_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, AddItemComponent_div_10_Template, 3, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Warehouse / Stockroom");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, AddItemComponent_select_14_Template, 2, 1, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, AddItemComponent_span_15_Template, 1, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, AddItemComponent_div_16_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, AddItemComponent_div_17_Template, 3, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Purchase Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, AddItemComponent_div_22_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, AddItemComponent_div_23_Template, 3, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, AddItemComponent_div_24_Template, 6, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Serialized? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AddItemComponent_Template_input_ngModelChange_29_listener($event) { return ctx.check_box = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, AddItemComponent_div_30_Template, 7, 2, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddItemComponent_Template_button_click_32_listener() { return ctx.clearForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Add Item ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.add_item_form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx.page_title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.item_loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.item_loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.add_item_form.controls["item_config"].invalid && (ctx.add_item_form.controls["item_config"].dirty || ctx.add_item_form.controls["item_config"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.api_errors.item_config);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.stock_loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.stock_loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.add_item_form.controls["store"].invalid && (ctx.add_item_form.controls["store"].dirty || ctx.add_item_form.controls["store"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.api_errors.store);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.add_item_form.controls["store"].invalid && (ctx.add_item_form.controls["purchase_order"].dirty || ctx.add_item_form.controls["purchase_order"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.api_errors.purchase_order);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.check_box == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.check_box)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](17, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.check_box == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.add_item_form.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _shared_card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _shared_textarea_with_count_textarea_with_count_component__WEBPACK_IMPORTED_MODULE_8__["TextareaWithCountComponent"]], styles: ["@font-face {\n  font-family: \"Avenir-Heavy\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(\"https://fonts.animaapp.com/Avenir-Heavy\") format(\"truetype\");\n}\n@font-face {\n  font-family: \"Museo-Sans\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(\"https://fonts.animaapp.com/MuseoSans-700\") format(\"opentype\");\n}\n.row[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.linear-background[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  display: block;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-name: placeHolderShimmer;\n          animation-name: placeHolderShimmer;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  background: #f6f7f8;\n  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);\n  background-size: 1000px 10px;\n  height: 30px;\n  border-radius: 3px;\n}\n@-webkit-keyframes placeHolderShimmer {\n  0% {\n    background-position: -46px 0;\n  }\n  100% {\n    background-position: 46px 0;\n  }\n}\n@keyframes placeHolderShimmer {\n  0% {\n    background-position: -46px 0;\n  }\n  100% {\n    background-position: 46px 0;\n  }\n}\n.spark-dynamic-forms__button-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  margin-top: 4rem;\n  margin-left: 0 !important;\n}\n.spark-dynamic-forms__clear[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: auto;\n  font-weight: bold;\n  line-height: 3.5rem;\n  text-transform: capitalize;\n  vertical-align: middle;\n  text-align: center;\n  padding: 0 1.5rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  letter-spacing: 0;\n  border: 0.2rem solid transparent;\n  border-radius: 0.5rem;\n  background-color: #036fb6;\n  color: #ffffff;\n  opacity: 1;\n  transition-property: border-color, background-color, color, opacity;\n  transition-duration: 0.25s;\n  transition-timing-function: ease-in-out;\n  font-family: sans-serif;\n  font-weight: normal;\n  font-size: 1.6rem;\n  line-height: 2.9rem;\n  cursor: pointer;\n  background-color: #797979;\n  border-radius: 0.3rem;\n  color: #f5f5f5;\n  line-height: 44px;\n  text-align: center;\n  font-size: 13px;\n  font-family: \"Avenir-Heavy\", Helvetica, Arial, serif;\n  margin-right: 3rem;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.spark-dynamic-forms__clear[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .spark-dynamic-forms__clear[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.no-touchevents[_ngcontent-%COMP%]   .spark-dynamic-forms__clear[_ngcontent-%COMP%]:not([disabled]):not(.disabled):not(.is--disabled):hover {\n  background-color: #676767;\n}\n.spark-dynamic-forms__clear[disabled][_ngcontent-%COMP%], .spark-dynamic-forms__clear.disabled[_ngcontent-%COMP%], .spark-dynamic-forms__clear.is--disabled[_ngcontent-%COMP%] {\n  opacity: 0.35;\n  cursor: default;\n}\n.spark-dynamic-forms__clear.lift[_ngcontent-%COMP%] {\n  transition: box-shadow 0.25s ease, transform 0.25s ease;\n}\n.spark-dynamic-forms__clear.lift[_ngcontent-%COMP%]:focus, .spark-dynamic-forms__clear.lift[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 1rem 2.5rem rgba(18, 38, 63, 0.1), 0 0.5rem 1rem -0.75rem rgba(18, 38, 63, 0.1) !important;\n  transform: translate3d(0, -3px, 0);\n}\n.spark-dynamic-forms__submit[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: auto;\n  font-weight: bold;\n  line-height: 3.5rem;\n  text-transform: capitalize;\n  vertical-align: middle;\n  text-align: center;\n  padding: 0 1.5rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  letter-spacing: 0;\n  border: 0.2rem solid transparent;\n  border-radius: 0.5rem;\n  background-color: #036fb6;\n  color: #ffffff;\n  opacity: 1;\n  transition-property: border-color, background-color, color, opacity;\n  transition-duration: 0.25s;\n  transition-timing-function: ease-in-out;\n  font-family: sans-serif;\n  font-weight: normal;\n  font-size: 1.6rem;\n  line-height: 2.9rem;\n  cursor: pointer;\n  background-color: #036fb6;\n  border-radius: 0.3rem;\n  color: #f5f5f5;\n  line-height: 44px;\n  text-align: center;\n  font-size: 13px;\n  font-family: \"Avenir-Heavy\", Helvetica, Arial, serif;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.spark-dynamic-forms__submit[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .spark-dynamic-forms__submit[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.no-touchevents[_ngcontent-%COMP%]   .spark-dynamic-forms__submit[_ngcontent-%COMP%]:not([disabled]):not(.disabled):not(.is--disabled):hover {\n  background-color: #676767;\n}\n.spark-dynamic-forms__submit[disabled][_ngcontent-%COMP%], .spark-dynamic-forms__submit.disabled[_ngcontent-%COMP%], .spark-dynamic-forms__submit.is--disabled[_ngcontent-%COMP%] {\n  opacity: 0.35;\n  cursor: default;\n}\n.spark-dynamic-forms__submit.lift[_ngcontent-%COMP%] {\n  transition: box-shadow 0.25s ease, transform 0.25s ease;\n}\n.spark-dynamic-forms__submit.lift[_ngcontent-%COMP%]:focus, .spark-dynamic-forms__submit.lift[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 1rem 2.5rem rgba(18, 38, 63, 0.1), 0 0.5rem 1rem -0.75rem rgba(18, 38, 63, 0.1) !important;\n  transform: translate3d(0, -3px, 0);\n}\n.spark-dynamic-forms__bulk-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 1rem;\n}\n.spark-dynamic-forms__bulk-btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: auto;\n  font-weight: bold;\n  line-height: 3.5rem;\n  text-transform: capitalize;\n  vertical-align: middle;\n  text-align: center;\n  padding: 0 1.5rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  letter-spacing: 0;\n  border: 0.2rem solid transparent;\n  border-radius: 0.5rem;\n  background-color: #036fb6;\n  color: #ffffff;\n  opacity: 1;\n  transition-property: border-color, background-color, color, opacity;\n  transition-duration: 0.25s;\n  transition-timing-function: ease-in-out;\n  font-family: sans-serif;\n  font-weight: normal;\n  font-size: 1.6rem;\n  line-height: 2.9rem;\n  cursor: pointer;\n  background-color: #797979;\n  border-radius: 0.3rem;\n  color: #f5f5f5;\n  line-height: 44px;\n  text-align: center;\n  font-size: 13px;\n  font-family: \"Avenir-Heavy\", Helvetica, Arial, serif;\n  margin-bottom: 15px !important;\n}\n.spark-dynamic-forms__bulk-btn[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .spark-dynamic-forms__bulk-btn[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.no-touchevents[_ngcontent-%COMP%]   .spark-dynamic-forms__bulk-btn[_ngcontent-%COMP%]:not([disabled]):not(.disabled):not(.is--disabled):hover {\n  background-color: #676767;\n}\n.spark-dynamic-forms__bulk-btn[disabled][_ngcontent-%COMP%], .spark-dynamic-forms__bulk-btn.disabled[_ngcontent-%COMP%], .spark-dynamic-forms__bulk-btn.is--disabled[_ngcontent-%COMP%] {\n  opacity: 0.35;\n  cursor: default;\n}\n.spark-dynamic-forms__bulk-btn.lift[_ngcontent-%COMP%] {\n  transition: box-shadow 0.25s ease, transform 0.25s ease;\n}\n.spark-dynamic-forms__bulk-btn.lift[_ngcontent-%COMP%]:focus, .spark-dynamic-forms__bulk-btn.lift[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 1rem 2.5rem rgba(18, 38, 63, 0.1), 0 0.5rem 1rem -0.75rem rgba(18, 38, 63, 0.1) !important;\n  transform: translate3d(0, -3px, 0);\n}\n.spark-dynamic-forms__bulk-btn-upload[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: auto;\n  font-weight: bold;\n  line-height: 3.5rem;\n  text-transform: capitalize;\n  vertical-align: middle;\n  text-align: center;\n  padding: 0 1.5rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  letter-spacing: 0;\n  border: 0.2rem solid transparent;\n  border-radius: 0.5rem;\n  background-color: #036fb6;\n  color: #ffffff;\n  opacity: 1;\n  transition-property: border-color, background-color, color, opacity;\n  transition-duration: 0.25s;\n  transition-timing-function: ease-in-out;\n  font-family: sans-serif;\n  font-weight: normal;\n  font-size: 1.6rem;\n  line-height: 2.9rem;\n  cursor: pointer;\n  background-color: #036fb6;\n  border-radius: 0.3rem;\n  color: #f5f5f5;\n  line-height: 44px;\n  text-align: center;\n  font-size: 13px;\n  font-family: \"Avenir-Heavy\", Helvetica, Arial, serif;\n  margin-bottom: 15px !important;\n  margin-left: 2rem;\n}\n.spark-dynamic-forms__bulk-btn-upload[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .spark-dynamic-forms__bulk-btn-upload[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.no-touchevents[_ngcontent-%COMP%]   .spark-dynamic-forms__bulk-btn-upload[_ngcontent-%COMP%]:not([disabled]):not(.disabled):not(.is--disabled):hover {\n  background-color: #676767;\n}\n.spark-dynamic-forms__bulk-btn-upload[disabled][_ngcontent-%COMP%], .spark-dynamic-forms__bulk-btn-upload.disabled[_ngcontent-%COMP%], .spark-dynamic-forms__bulk-btn-upload.is--disabled[_ngcontent-%COMP%] {\n  opacity: 0.35;\n  cursor: default;\n}\n.spark-dynamic-forms__bulk-btn-upload.lift[_ngcontent-%COMP%] {\n  transition: box-shadow 0.25s ease, transform 0.25s ease;\n}\n.spark-dynamic-forms__bulk-btn-upload.lift[_ngcontent-%COMP%]:focus, .spark-dynamic-forms__bulk-btn-upload.lift[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 1rem 2.5rem rgba(18, 38, 63, 0.1), 0 0.5rem 1rem -0.75rem rgba(18, 38, 63, 0.1) !important;\n  transform: translate3d(0, -3px, 0);\n}\n.bulk__wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 3rem auto;\n}\n.bulk__button-wrapper[_ngcontent-%COMP%], .bulk__content[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n}\n.bulk__button-wrapper[_ngcontent-%COMP%] {\n  padding-top: 2rem;\n  margin-left: -3.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fdmFycy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzL19zZXR0aW5ncy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vYWRkLWl0ZW0uY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMvbWl4aW5zL19idXR0b24uc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9taXhpbnMvX3R5cG9ncmFwaHkuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4QkFBQTtBQUNBLDhCQUFBO0FBQ0EsOEJBQUE7QUEwQkEsMkJBQUE7QUFFQSx5QkFBQTtBQ0dBO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0VBQUE7QUMzQkY7QUQ4QkE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1RUFBQTtBQzVCRjtBQVhBO0VBQ0ksZ0JBQUE7QUFhSjtBQVZJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0VBQ0EscUNBQUE7VUFBQSw2QkFBQTtFQUNBLDJDQUFBO1VBQUEsbUNBQUE7RUFDQSwwQ0FBQTtVQUFBLGtDQUFBO0VBQ0EseUNBQUE7VUFBQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsMkVBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQWFSO0FBVkE7RUFDSTtJQUNJLDRCQUFBO0VBYU47RUFYRTtJQUNJLDJCQUFBO0VBYU47QUFDRjtBQW5CQTtFQUNJO0lBQ0ksNEJBQUE7RUFhTjtFQVhFO0lBQ0ksMkJBQUE7RUFhTjtBQUNGO0FBVEk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFXUjtBQVJJO0VDMUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtFQUNBLHlCSEtrQjtFR0psQixjSEZVO0VHR1YsVUFBQTtFQUNBLG1FQUFBO0VBQ0EsMEJBQUE7RUFDQSx1Q0FBQTtFQ25CQSx1QkFBQTtFQTBJSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUR0SEosZUFBQTtFQXdCRSx5QkFBQTtFQUdBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VEVEUsb0RBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUF3Q1I7QUV3RFk7RUFDSSxpQkFBQTtBRnREaEI7QUNuRUk7RUFDRix5QkFBQTtBRHFFRjtBQ2xFSTtFQUdGLGFBQUE7RUFDTSxlQUFBO0FEa0VSO0FDL0RJO0VBQ0UsdURBQUE7QURpRU47QUNoRU07RUFFRSx3R0FBQTtFQUNBLGtDQUFBO0FEaUVSO0FBdERJO0VDbERBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtFQUNBLHlCSEtrQjtFR0psQixjSEZVO0VHR1YsVUFBQTtFQUNBLG1FQUFBO0VBQ0EsMEJBQUE7RUFDQSx1Q0FBQTtFQ25CQSx1QkFBQTtFQTBJSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUR0SEosZUFBQTtFQXNCRSx5Qkh6QmdCO0VHOEJoQixxQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFRERFLG9EQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQXNGUjtBRUdZO0VBQ0ksaUJBQUE7QUZEaEI7QUN4SEk7RUFDRix5QkFBQTtBRDBIRjtBQ3ZISTtFQUdGLGFBQUE7RUFDTSxlQUFBO0FEdUhSO0FDcEhJO0VBQ0UsdURBQUE7QURzSE47QUNySE07RUFFRSx3R0FBQTtFQUNBLGtDQUFBO0FEc0hSO0FBbkdRO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFxR1o7QUFuR1E7RUMvREoscUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJIS2tCO0VHSmxCLGNIRlU7RUdHVixVQUFBO0VBQ0EsbUVBQUE7RUFDQSwwQkFBQTtFQUNBLHVDQUFBO0VDbkJBLHVCQUFBO0VBMElJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFRHRISixlQUFBO0VBd0JFLHlCQUFBO0VBR0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RURZTSxvREFBQTtFQUNBLDhCQUFBO0FBbUlaO0FFdERZO0VBQ0ksaUJBQUE7QUZ3RGhCO0FDakxJO0VBQ0YseUJBQUE7QURtTEY7QUNoTEk7RUFHRixhQUFBO0VBQ00sZUFBQTtBRGdMUjtBQzdLSTtFQUNFLHVEQUFBO0FEK0tOO0FDOUtNO0VBRUUsd0dBQUE7RUFDQSxrQ0FBQTtBRCtLUjtBQWxKUTtFQ3BFSixxQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkhLa0I7RUdKbEIsY0hGVTtFR0dWLFVBQUE7RUFDQSxtRUFBQTtFQUNBLDBCQUFBO0VBQ0EsdUNBQUE7RUNuQkEsdUJBQUE7RUEwSUksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VEdEhKLGVBQUE7RUFzQkUseUJIekJnQjtFRzhCaEIscUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RURpQk0sb0RBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0FBa0xaO0FFM0dZO0VBQ0ksaUJBQUE7QUY2R2hCO0FDdE9JO0VBQ0YseUJBQUE7QUR3T0Y7QUNyT0k7RUFHRixhQUFBO0VBQ00sZUFBQTtBRHFPUjtBQ2xPSTtFQUNFLHVEQUFBO0FEb09OO0FDbk9NO0VBRUUsd0dBQUE7RUFDQSxrQ0FBQTtBRG9PUjtBQTdMSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQWdNUjtBQTlMSTtFQUVJLGlCQUFBO0FBK0xSO0FBNUxJO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtBQThMUiIsImZpbGUiOiJhZGQtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqIGNvbG9ycyAqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuJGNvbG9yX2JhY2tncm91bmQ6ICNmZmZmZmY7XG4kY29sb3ItYmFja2dyb3VuZC1jYXJkOiAjZmZmZmZmO1xuJGNvbG9yX2JhY2tncm91bmQtaW5wdXRzOiAjZmZmZmZmO1xuJGNvbG9yX3RvcGJhcjogI2ZmZmZmZjtcbiRjb2xvcl9idXR0b25zOiAjNGQ0ZDRkO1xuJGNvbG9yX3ByaW1hcnk6ICMwMzZGQjY7XG4kY29sb3Jfc2Vjb25kYXJ5OiAjZTU3YzJjO1xuJGNvbG9yX3RlcnRpYXJ5OiAjMTIyNjNmO1xuJGNvbG9yX3dhcm5pbmc6ICNlNjM3NTc7XG4kY29sb3Jfc3VjY2VzczogIzAwNzcwMDtcbiRjb2xvcl93aGl0ZTogI2ZmZmZmZjtcbiRjb2xvcl9ibGFjazogIzAwMDtcbiRjb2xvcl9saWdodGdyZXk6IHJnYmEoJGNvbG9yX3doaXRlLCAwLjUpO1xuJGNvbG9yX2xpZ2h0ZXJncmV5OiByZ2JhKCRjb2xvcl93aGl0ZSwgMC4yNSk7XG4kY29sb3JfZm9ybXNfYm9yZGVyOiAjNzA3MDcwO1xuJGNvbG9yX2Zvcm1fcGxhY2Vob2xkZXI6ICNiMWMyZDk7XG4kY29sb3JfbGlua3NfYnV0dG9uczogIzAzNmZiNjtcbiRjb2xvcl9zdWJzdWJ0aXRsZTogIzdlN2U3ZTtcbiRjb2xvcl90aXRsZTogIzUzNTI1MjtcbiRjb2xvcl9zdWJ0aXRsZTogI0IyQjFCMTtcbiRjb2xvcl9uYXZiYXJfYmFja2dyb3VuZDogJGNvbG9yX2JhY2tncm91bmQ7XG4kY29sb3JfbmF2YmFyX2JvcmRlcjogI2E5YThhODtcblxuJGNvbG9yX3RpdGxlX2RlZmF1bHQ6ICM1MzUyNTI7XG4vKiBBZGQgcmV1c2FibGUgYW5pbWF0aW9ucyovXG5cbi8qIEFjY29tb2RhdGUgaXBob25lIDExKyovXG4kaXBob25lLXNhZmVzcGFjZTogcmVtLWNhbGMoNDQpO1xuJGNvbW1vbkd1dHRlcjogM3JlbTtcbiIsIi8vICBGb3VuZGF0aW9uIGZvciBTaXRlcyBTZXR0aW5nc1xuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIFRhYmxlIG9mIENvbnRlbnRzOlxuLy9cbi8vICAgMS4gR2xvYmFsXG4vLyAgIDIuIEJyZWFrcG9pbnRzXG4vLyAgIDMuIENhcmRcbi8vICAgNC4gUHJvZ3Jlc3MgYmFyXG4vLyAgIDUuIEZvb3RlclxuLy8gICA2LiBIZWFkZXJcblxuLy8gMS4gR2xvYmFsXG4vLyAtLS0tLS0tLS1cblxuJGdsb2JhbC1mb250LXNpemU6IDYyLjUlO1xuXG4kZ2xvYmFsLXBhZ2Utd2lkdGg6IHJlbS1jYWxjKDE4MTgpO1xuJGdsb2JhbC1jb250ZW50LXdpZHRoOiByZW0tY2FsYygxNDAwKTtcbiRnbG9iYWwtbGluZWhlaWdodDogMS41O1xuJGJvZHktYmFja2dyb3VuZDogJGNvbG9yX3doaXRlO1xuJGJvZHktZm9udC1jb2xvcjogJGNvbG9yX2JsYWNrO1xuJGJvZHktZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgUm9ib3RvLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiRib2R5LWFudGlhbGlhc2VkOiB0cnVlO1xuJGdsb2JhbC1tYXJnaW46IDFyZW07XG4kZ2xvYmFsLXBhZGRpbmc6IDFyZW07XG4kZ2xvYmFsLXBvc2l0aW9uOiAxcmVtO1xuJGdsb2JhbC13ZWlnaHQtbm9ybWFsOiBub3JtYWw7XG4kZ2xvYmFsLXdlaWdodC1ib2xkOiBib2xkO1xuJGdsb2JhbC1yYWRpdXM6IDA7XG4kZ2xvYmFsLXRleHQtZGlyZWN0aW9uOiBsdHI7XG4kcHJpbWFyeS1jb2xvcjogJGNvbG9yX3ByaW1hcnk7XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBdmVuaXItSGVhdnlcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybChcImh0dHBzOi8vZm9udHMuYW5pbWFhcHAuY29tL0F2ZW5pci1IZWF2eVwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk11c2VvLVNhbnNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybChcImh0dHBzOi8vZm9udHMuYW5pbWFhcHAuY29tL011c2VvU2Fucy03MDBcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XG59XG5cblxuLy8gMi4gQnJlYWtwb2ludHNcbi8vIC0tLS0tLS0tLS0tLS0tXG5cbiRicmVha3BvaW50czogKFxuICBzbWFsbDogMCxcbiAgc3VwZXJtaW5pOiA0MDBweCxcbiAgbWluaTogNDgwcHgsXG4gIG1lZGl1bTogNjQwcHgsXG4gIHRhYmxldDogNzYwcHgsXG4gIG1lZC1sYXJnZTogOTYwcHgsXG4gIGxhcmdlOiAxMDI0cHgsXG4gIHhsYXJnZTogMTI4MHB4LFxuICB4eGxhcmdlOiAxNTQwcHgsXG4gIHh4eGxhcmdlOiAxOTIwcHgsXG4gIHh4eHhsYXJnZTogMjU2MHB4LFxuKTtcbiRwcmludC1icmVha3BvaW50OiBsYXJnZTtcbiRicmVha3BvaW50LWNsYXNzZXM6IChzbWFsbCBtZWRpdW0gbGFyZ2UpO1xuXG4vLyAzLiBDYXJkXG4vLyAtLS0tLS0tLVxuXG4kY2FyZC1iYWNrZ3JvdW5kOiAkY29sb3Jfd2hpdGU7XG4kY2FyZC1mb250LWNvbG9yOiAkYm9keS1mb250LWNvbG9yO1xuJGNhcmQtZGl2aWRlci1iYWNrZ3JvdW5kOiAkY29sb3JfbGlnaHRncmV5O1xuJGNhcmQtYm9yZGVyOiAxcHggc29saWQgJGNvbG9yX2xpZ2h0Z3JleTtcbiRjYXJkLXNoYWRvdzogbm9uZTtcbiRjYXJkLWJvcmRlci1yYWRpdXM6ICRnbG9iYWwtcmFkaXVzO1xuJGNhcmQtcGFkZGluZzogJGdsb2JhbC1wYWRkaW5nO1xuJGNhcmQtbWFyZ2luLWJvdHRvbTogJGdsb2JhbC1tYXJnaW47XG5cbi8vIDQuIFByb2dyZXNzIEJhclxuLy8gLS0tLS0tLS0tLS0tLS0tLVxuXG4kcHJvZ3Jlc3MtaGVpZ2h0OiAxcmVtO1xuJHByb2dyZXNzLWJhY2tncm91bmQ6ICRjb2xvcl9saWdodGVyZ3JleTtcbiRwcm9ncmVzcy1tYXJnaW4tYm90dG9tOiAkZ2xvYmFsLW1hcmdpbjtcbiRwcm9ncmVzcy1tZXRlci1iYWNrZ3JvdW5kOiAkcHJpbWFyeS1jb2xvcjtcbiRwcm9ncmVzcy1yYWRpdXM6ICRnbG9iYWwtcmFkaXVzO1xuXG4vLyA1LiBGb290ZXJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tXG4kZm9vdGVyLWhlaWdodDogNXJlbTtcblxuLy82LiBOYXZiYXJcbiRuYXZiYXJfaGVpZ2h0OiA4LjRyZW07XG4kbmF2YmFyX2JveF9zaGFkb3c6IDAgLjNyZW0gLjZyZW0gcmdiYSgkY29sb3JfYmxhY2ssIC4yOSk7XG5cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zdHlsZXMvbWl4aW5zL2J1dHRvblwiO1xuQGltcG9ydCBcIi4uLy4uLy4uLy4uL3N0eWxlcy92YXJzXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vLi4vc3R5bGVzL21peGlucy90eXBvZ3JhcGh5XCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vLi4vc3R5bGVzL3NldHRpbmdzXCI7XG5cbi5yb3cge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ubGluZWFyIHtcbiAgICAmLWJhY2tncm91bmQge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgICAgIGFuaW1hdGlvbi1uYW1lOiBwbGFjZUhvbGRlclNoaW1tZXI7XG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y2ZjdmODtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZWVlZWVlIDglLCAjZGRkZGRkIDE4JSwgI2VlZWVlZSAzMyUpO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMDBweCAxMHB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICB9XG59XG5Aa2V5ZnJhbWVzIHBsYWNlSG9sZGVyU2hpbW1lciB7XG4gICAgMCUge1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDZweCAwO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNDZweCAwO1xuICAgIH1cbn1cblxuLnNwYXJrLWR5bmFtaWMtZm9ybXMgeyBcbiAgICAmX19idXR0b24td3JhcHBlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIG1hcmdpbi10b3A6IDRyZW07XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgJl9fY2xlYXIge1xuICAgICAgICBAaW5jbHVkZSBidXR0b24oJHNpemU6IHNtYWxsKTtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiQXZlbmlyLUhlYXZ5XCIsIEhlbHZldGljYSwgQXJpYWwsIHNlcmlmO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDNyZW07XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICB9ICAgXG5cbiAgICAmX19zdWJtaXQge1xuICAgICAgICBAaW5jbHVkZSBidXR0b24oJGNvbG9yOnByaW1hcnksICRzaXplOiBzbWFsbCk7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkF2ZW5pci1IZWF2eVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzZXJpZjtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIH1cblxuICAgICZfX2J1bGsge1xuICAgICAgICAmLXdyYXBwZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICB9XG4gICAgICAgICYtYnRuIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIGJ1dHRvbigkc2l6ZTogc21hbGwpO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiQXZlbmlyLUhlYXZ5XCIsIEhlbHZldGljYSwgQXJpYWwsIHNlcmlmO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgICYtYnRuLXVwbG9hZCB7XG4gICAgICAgICAgICBAaW5jbHVkZSBidXR0b24oJGNvbG9yOnByaW1hcnksICRzaXplOiBzbWFsbCk7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJBdmVuaXItSGVhdnlcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2VyaWY7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMnJlbTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmJ1bGsge1xuICAgICZfX3dyYXBwZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAzcmVtIGF1dG87XG4gICAgfVxuICAgICZfX2J1dHRvbi13cmFwcGVyLFxuICAgICZfX2NvbnRlbnQge1xuICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICB9XG5cbiAgICAmX19idXR0b24td3JhcHBlciB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAycmVtO1xuICAgICAgICBtYXJnaW4tbGVmdDogLTMuNXJlbTtcbiAgICB9XG59IiwiQG1peGluIGJ1dHRvbigkc2l6ZTpudWxsLCAkY29sb3I6bnVsbCwgJG91dGxpbmU6bnVsbCkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogYXV0bztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBsaW5lLWhlaWdodDogMy41cmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAgMS41cmVtO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICBib3JkZXI6IC4ycmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcl9saW5rc19idXR0b25zO1xuICAgIGNvbG9yOiAkY29sb3Jfd2hpdGU7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3JkZXItY29sb3IsICBiYWNrZ3JvdW5kLWNvbG9yLCBjb2xvciwgb3BhY2l0eTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjI1cztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgQGluY2x1ZGUgdHlwb2dyYXBoeTtcblxuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAubm8tdG91Y2hldmVudHMgJjpub3QoW2Rpc2FibGVkXSk6bm90KC5kaXNhYmxlZCk6bm90KC5pcy0tZGlzYWJsZWQpOmhvdmVyIC8qLCAmOmZvY3VzICovIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCAkY29sb3JfYnV0dG9ucywgMTAlKTtcbiAgICB9XG5cbiAgICAmW2Rpc2FibGVkXSxcbiAgICAmLmRpc2FibGVkLFxuICAgICYuaXMtLWRpc2FibGVkIHtcblx0XHRvcGFjaXR5IDogLjM1O1xuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgfVxuXG4gICAgJi5saWZ0IHtcbiAgICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4yNXMgZWFzZSwgdHJhbnNmb3JtIDAuMjVzIGVhc2U7XG4gICAgICAmOmZvY3VzLFxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMXJlbSAyLjVyZW0gcmdiYSgxOCwgMzgsIDYzLCAwLjEpLCAwIDAuNXJlbSAxcmVtIC0wLjc1cmVtIHJnYmEoMTgsIDM4LCA2MywgMC4xKSAhaW1wb3J0YW50O1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0zcHgsIDApO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBpZiAkY29sb3IgPT0gcHJpbWFyeSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JfbGlua3NfYnV0dG9ucztcbiAgICB9IEBlbHNlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3OTc5Nzk7XG4gICAgfVxuICAgIEBpZiAkc2l6ZSA9PSBzbWFsbCB7XG4gICAgICBib3JkZXItcmFkaXVzOiAuM3JlbTtcbiAgICAgIGNvbG9yOiAjZjVmNWY1O1xuICAgICAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgfSBcblxufSIsIkBtaXhpbiB0eXBvZ3JhcGh5KCRmb3JtYXQ6IGJvZHksICR3ZWlnaHQ6IG51bGwsICRjb2xvcjpudWxsLCAkZm9udHNpemU6IG51bGwsICRsaW5laGVpZ2h0OiBudWxsLCAkbWF4bGluZXM6MCApIHtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICBAaWYgJG1heGxpbmVzID4gMCB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6ICRtYXhsaW5lcztcbiAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICB9XG5cbiAgICBAaWYgJGZvcm1hdCA9PSAgaDEge1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LXNpemU6IDYuNHJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDYuNnJlbTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgICAgIFxuICAgICAgICBAaWYgJHdlaWdodCAhPSBib2xkIGFuZCAkd2VpZ2h0ICE9IHN0cm9uZyB7XG4gICAgICAgICAgICBzdHJvbmcsIGIge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBpZiAkbWF4bGluZXMgPiAwIHtcblx0XHRcdG1heC1oZWlnaHQ6IDhyZW0gKiAkbWF4bGluZXM7XG5cdFx0fVxuICAgIH0gQGVsc2UgaWYgJGZvcm1hdCA9PSBoMiB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDQuOHJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQuOHJlbTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICAgICAgICBAaWYgJHdlaWdodCAhPSBib2xkIGFuZCAkd2VpZ2h0ICE9IHN0cm9uZyB7XG4gICAgICAgICAgICBzdHJvbmcsIGIge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblx0XHRAaWYgJG1heGxpbmVzID4gMCB7XG5cdFx0XHRtYXgtaGVpZ2h0OiA0LjhyZW0gKiAkbWF4bGluZXM7XG5cdFx0fVxuICAgIH0gQGVsc2UgaWYgJGZvcm1hdCA9PSBoMyB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgIGZvbnQtc2l6ZTogNC44cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogNS40cmVtO1xuXG4gICAgICAgIEBpZiAkd2VpZ2h0ICE9IGJvbGQgYW5kICR3ZWlnaHQgIT0gc3Ryb25nIHtcbiAgICAgICAgICAgIHN0cm9uZywgYiB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXHRcdEBpZiAkbWF4bGluZXMgPiAwIHtcblx0XHRcdG1heC1oZWlnaHQ6IDQuOHJlbSAqICRtYXhsaW5lcztcblx0XHR9XG4gICAgfSBAZWxzZSBpZiAkZm9ybWF0ID09IGg0IHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogNC40cmVtO1xuXG4gICAgICAgIEBpZiAkd2VpZ2h0ICE9IGJvbGQgYW5kICR3ZWlnaHQgIT0gc3Ryb25nIHtcbiAgICAgICAgICAgIHN0cm9uZywgYiB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXHRcdEBpZiAkbWF4bGluZXMgPiAwIHtcblx0XHRcdG1heC1oZWlnaHQ6IDQuNHJlbSAqICRtYXhsaW5lcztcblx0XHR9XG4gICAgfSBAZWxzZSBpZiAkZm9ybWF0ID09IGg1IHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyLjVyZW07XG5cbiAgICAgICAgQGlmICR3ZWlnaHQgIT0gYm9sZCBhbmQgJHdlaWdodCAhPSBzdHJvbmcge1xuICAgICAgICAgICAgc3Ryb25nLCBiIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cdFx0QGlmICRtYXhsaW5lcyA+IDAge1xuXHRcdFx0bWF4LWhlaWdodDogMS44cmVtICogJG1heGxpbmVzO1xuXHRcdH1cbiAgICB9IEBlbHNlIGlmICRmb3JtYXQgPT0gaDYge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjRyZW07XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgICAgICAgQGlmICR3ZWlnaHQgIT0gYm9sZCBhbmQgJHdlaWdodCAhPSBzdHJvbmcge1xuICAgICAgICAgICAgc3Ryb25nLCBiIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cdFx0QGlmICRtYXhsaW5lcyA+IDAge1xuXHRcdFx0bWF4LWhlaWdodDogMS40cmVtICogJG1heGxpbmVzO1xuXHRcdH1cbiAgICB9IEBlbHNlIGlmICRmb3JtYXQgPT0gc21hbGwge1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIuM3JlbTtcblxuICAgICAgICBAaWYgJHdlaWdodCAhPSBib2xkIGFuZCAkd2VpZ2h0ICE9IHN0cm9uZyB7XG4gICAgICAgICAgICBzdHJvbmcsIGIge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblx0XHRAaWYgJG1heGxpbmVzID4gMCB7XG5cdFx0XHRtYXgtaGVpZ2h0OiAyLjNyZW0gKiAkbWF4bGluZXM7XG5cdFx0fVxuICAgIH0gQGVsc2UgaWYgJGZvcm1hdCA9PSB2ZXJ5c21hbGwge1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG5cbiAgICAgICAgQGlmICR3ZWlnaHQgIT0gYm9sZCBhbmQgJHdlaWdodCAhPSBzdHJvbmcge1xuICAgICAgICAgICAgc3Ryb25nLCBiIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cdFx0QGlmICRtYXhsaW5lcyA+IDAge1xuXHRcdFx0bWF4LWhlaWdodDogMS4ycmVtICogJG1heGxpbmVzO1xuXHRcdH1cbiAgICB9IEBlbHNlIGlmICRmb3JtYXQgPT0gdmVyeXZlcnlzbWFsbCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG5cbiAgICAgICAgQGlmICR3ZWlnaHQgIT0gYm9sZCBhbmQgJHdlaWdodCAhPSBzdHJvbmcge1xuICAgICAgICAgICAgc3Ryb25nLCBiIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cdFx0QGlmICRtYXhsaW5lcyA+IDAge1xuXHRcdFx0bWF4LWhlaWdodDogMXJlbSAqICRtYXhsaW5lcztcblx0XHR9XG4gICAgfSBAZWxzZSAge1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIuOXJlbTtcblxuICAgICAgICBAaWYgJHdlaWdodCAhPSBib2xkIGFuZCAkd2VpZ2h0ICE9IHN0cm9uZyB7XG4gICAgICAgICAgICBzdHJvbmcsIGIge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblx0XHRAaWYgJG1heGxpbmVzID4gMCB7XG5cdFx0XHRtYXgtaGVpZ2h0OiAyLjZyZW0gKiAkbWF4bGluZXM7XG5cdFx0fVxuICAgIH1cblxuICAgIEBpZiAkd2VpZ2h0ID09IGJvbGQgb3IgJHdlaWdodCA9PSBzdHJvbmcge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9IEBlbHNlIGlmICR3ZWlnaHQgPT0gYm9sZCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH0gQGVsc2UgaWYgJHdlaWdodCA9PSBub3JtYWwge1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIH1cblxuICAgIEBpZiAkY29sb3Ige1xuICAgICAgICBjb2xvcjogJGNvbG9yO1xuICAgIH1cblxuICAgIEBpZiAkZm9udHNpemUge1xuICAgICAgICBmb250LXNpemU6ICRmb250c2l6ZTtcbiAgICB9XG5cbiAgICBAaWYgJGxpbmVoZWlnaHQge1xuICAgICAgICBsaW5lLWhlaWdodDogJGxpbmVoZWlnaHQ7XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ "pPcP":
/*!***************************************************!*\
  !*** ./src/app/modules/modules-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ModulesRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModulesRoutes", function() { return ModulesRoutes; });
/* harmony import */ var _core_auth_guards_auth_guards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/auth-guards/auth.guards */ "ZW81");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "M95H");


const ModulesRoutes = [
    { path: 'home', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"], data: { breadcrumb: 'Home' } },
    {
        path: 'accounts',
        data: { breadcrumb: 'accounts' },
        loadChildren: () => __webpack_require__.e(/*! import() | accounts-accounts-module */ "accounts-accounts-module").then(__webpack_require__.bind(null, /*! ./accounts/accounts.module */ "I89L")).then((m) => m.AccountsModule), canActivate: [_core_auth_guards_auth_guards__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]]
    },
    {
        path: 'suppliers',
        data: { breadcrumb: 'suppliers' },
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./suppliers/suppliers.module */ "BOM8")).then((m) => m.SuppliersModule), canActivate: [_core_auth_guards_auth_guards__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]]
    },
    {
        path: 'configs',
        data: { breadcrumb: 'Configs' },
        loadChildren: () => __webpack_require__.e(/*! import() | configurations-configs-module */ "configurations-configs-module").then(__webpack_require__.bind(null, /*! ./configurations/configs.module */ "rY4F")).then((m) => m.ConfigsModule), canActivate: [_core_auth_guards_auth_guards__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]]
    },
    {
        path: 'warehouse',
        data: { breadcrumb: 'Warehouse' },
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./warehouse/warehouse.module */ "ihgr")).then((m) => m.WarehouseModule), canActivate: [_core_auth_guards_auth_guards__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]]
    },
    {
        path: 'stockroom',
        data: { breadcrumb: 'Stockroom' },
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./stockroom/stockroom.module */ "zOT8")).then((m) => m.StockroomModule), canActivate: [_core_auth_guards_auth_guards__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]]
    },
    {
        path: 'inventory',
        data: { breadcrumb: 'Inventory' },
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./inventory/inventory.module */ "mycG")).then((m) => m.InventoryModule), canActivate: [_core_auth_guards_auth_guards__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]]
    },
    {
        path: 'customers',
        data: { breadcrumb: 'Customer' },
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./customers/customers.module */ "CC9r")).then((m) => m.CustomersModule), canActivate: [_core_auth_guards_auth_guards__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]]
    }
];


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


/***/ }),

/***/ "tj5D":
/*!***************************************************************!*\
  !*** ./src/app/modules/stockroom/stockroom-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: StockroomRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockroomRoutes", function() { return StockroomRoutes; });
/* harmony import */ var _add_add_stockroom_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add/add-stockroom.component */ "ZUYP");
/* harmony import */ var _list_stockroom_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list/stockroom-list.component */ "4l/Y");


const StockroomRoutes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'add', component: _add_add_stockroom_component__WEBPACK_IMPORTED_MODULE_0__["AddStockroomComponent"], data: { breadcrumb: 'Add Stockroom' } },
    { path: 'list', component: _list_stockroom_list_component__WEBPACK_IMPORTED_MODULE_1__["StockroomListComponent"], data: { breadcrumb: 'List Stockrooms' } },
];


/***/ }),

/***/ "x2Eb":
/*!**************************************************!*\
  !*** ./src/app/modules/warehouse/add/options.ts ***!
  \**************************************************/
/*! exports provided: storeFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeFields", function() { return storeFields; });
/* harmony import */ var _services_constants_form_options_configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/constants/form-options-configs */ "/In7");

const storeFields = {
    "name": "List Create Stores Api",
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
                "max_length": 45
            },
            "type": {
                "type": "choice",
                "required": true,
                "read_only": false,
                "label": "Type",
                "choices": [
                    {
                        "value": "WH",
                        "display_name": "Warehouse"
                    },
                    {
                        "value": "SR",
                        "display_name": "Stock Room"
                    }
                ]
            },
            "location": {
                "type": "field",
                "required": true,
                "read_only": false,
                "label": "Location / Region / Province",
                "display_name": "name",
                "url": `${_services_constants_form_options_configs__WEBPACK_IMPORTED_MODULE_0__["endpointV1"]}locations/`
            },
            "manager": {
                "type": "field",
                "required": true,
                "read_only": false,
                "label": "Manager",
                "display_name": "full_name",
                "url": `${_services_constants_form_options_configs__WEBPACK_IMPORTED_MODULE_0__["endpointV1"]}users/`
            }
        }
    }
};



/***/ }),

/***/ "zOT8":
/*!*******************************************************!*\
  !*** ./src/app/modules/stockroom/stockroom.module.ts ***!
  \*******************************************************/
/*! exports provided: StockroomModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockroomModule", function() { return StockroomModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_add_stockroom_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add/add-stockroom.component */ "ZUYP");
/* harmony import */ var _stockroom_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stockroom-routing.module */ "tj5D");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _list_stockroom_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list/stockroom-list.component */ "4l/Y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








class StockroomModule {
}
StockroomModule.ɵfac = function StockroomModule_Factory(t) { return new (t || StockroomModule)(); };
StockroomModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: StockroomModule });
StockroomModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_stockroom_routing_module__WEBPACK_IMPORTED_MODULE_3__["StockroomRoutes"]),
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](StockroomModule, { declarations: [_add_add_stockroom_component__WEBPACK_IMPORTED_MODULE_2__["AddStockroomComponent"], _list_stockroom_list_component__WEBPACK_IMPORTED_MODULE_5__["StockroomListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=modules-modules-module-es2015.js.map