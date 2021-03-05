import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tableHandleActionsMixin } from 'src/app/core/mixins/table-handle-actions-mixin';
import { TablesComponent } from 'src/app/shared/tables/tables.component';
import { ModalsService } from "src/app/shared/modals/modals.service";
import { TablesService } from 'src/app/shared/tables/tables.service';

const TableHandleActionsMixin = tableHandleActionsMixin(TablesComponent);
@Component({
  selector: 'app-stockroom-list',
  templateUrl: './stockroom-list.component.html',
  styleUrls: ['./stockroom-list.component.scss']
})
export class StockroomListComponent extends TableHandleActionsMixin implements OnInit {

  constructor(
    private _router: Router,
    private _modalService:ModalsService,
    private _tableService:TablesService
  ) { 
    super();
  }

  url = "stores/?type=SR&"
  apiUrl = "stores";

  headers = [
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

  tableFilters = ["Name"]

  ngOnInit(): void {
  }

  handleActions(action: any) {
      this.handleTableActions(action, '/stockroom/add', this.apiUrl);
  }

}
