import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tableHandleActionsMixin } from 'src/app/core/mixins/table-handle-actions-mixin';
import { TablesComponent } from 'src/app/shared/tables/tables.component';
import { ModalsService } from "src/app/shared/modals/modals.service";
import { TablesService } from 'src/app/shared/tables/tables.service';
import { optionsField } from '../options';

const TableHandleActionsMixin = tableHandleActionsMixin(TablesComponent);

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent extends TableHandleActionsMixin implements OnInit {

  formItems: any = optionsField;
  tableFiltersDropdown = [
    ["customer"],
  ];
  constructor(
    private _router: Router,
    private _modalService: ModalsService,
    private _tableService: TablesService
  ) {
    super();
  }

  url = "products"

  headers = [
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

  ngOnInit(): void {
  }

  handleActions(action: any) {
    this.handleTableActions(action, '/stockroom/add', this.apiUrl)
  }

}
