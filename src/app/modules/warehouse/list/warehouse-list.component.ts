import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tableHandleActionsMixin } from 'src/app/core/mixins/table-handle-actions-mixin';
import { TablesComponent } from 'src/app/shared/tables/tables.component';

import { ModalsService } from "src/app/shared/modals/modals.service";
import { TablesService } from 'src/app/shared/tables/tables.service';
import { storeFields } from '../add/options';

const TableHandleActionsMixin = tableHandleActionsMixin(TablesComponent);
@Component({
  selector: 'app-warehouse-list',
  templateUrl: './warehouse-list.component.html',
  styleUrls: ['./warehouse-list.component.scss']
})
export class WarehouseListComponent extends TableHandleActionsMixin implements OnInit {

  formItems: any = storeFields;
  tableFiltersDropdown = [
    ["manager"],
    ["location"],
  ];

  constructor(
    private _router: Router,
    private _modalService: ModalsService,
    private _tableService: TablesService
  ) {
    super();
  }

  url = "stores/?type=WH&";
  apiUrl = "stores";

  headers = [
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

  tableFilters = ["Name"]

  ngOnInit(): void {
  }

  handleActions(action: any) {
    this.handleTableActions(action, '/warehouse/add', this.apiUrl);
  }

}
