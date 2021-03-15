import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tableHandleActionsMixin } from 'src/app/core/mixins/table-handle-actions-mixin';
import { TablesComponent } from 'src/app/shared/tables/tables.component';
import { ModalsService } from "src/app/shared/modals/modals.service";
import { TablesService } from 'src/app/shared/tables/tables.service';

const TableHandleActionsMixin = tableHandleActionsMixin(TablesComponent);
@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent extends TableHandleActionsMixin implements OnInit {

  constructor(
    private _router: Router,
    private _modalService:ModalsService,
    private _tableService:TablesService
  ) { 
    super();
  }
  url = "itemz";

  headers = [
    {
      name: 'Item Name',
      source: "item_config_details.name",
    },
    {
      name: 'Region/ Location',
      source: "location_details.name",
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

  tableFilters = ["Serial"]

  ngOnInit(): void {
  }

  handleActions(action: any) {
      this.handleTableActions(action, '/inventory/add', this.url);
  }
}
