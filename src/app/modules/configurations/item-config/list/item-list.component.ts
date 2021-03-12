import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { tableHandleActionsMixin } from 'src/app/core/mixins/table-handle-actions-mixin';
import { TablesComponent } from 'src/app/shared/tables/tables.component';
import { ModalsService } from "src/app/shared/modals/modals.service";
import { TablesService } from 'src/app/shared/tables/tables.service';
import { sideMenuOptions } from '../../sidemenu-configs';
import { ItemConfigfields } from '../options';

const TableHandleActionsMixin = tableHandleActionsMixin(TablesComponent);
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent extends TableHandleActionsMixin implements OnInit {
  url = "item-configs"

  headers = [
    "Name",
    "Type",
    "Description",
    {
      name: 'Actions',
      type: "actions",
      source: "",// Field
      data: [
        "edit", "delete"
      ]
    },
  ];
  
  formItems: any = ItemConfigfields;
  tableFiltersDropdown = [
    ["name"],
    ["has_serial"]
  ];

  tableFiltersCollapsible = [
    ["name","has_serial"]
  ];

  sideMenuTitle = sideMenuOptions.sideMenuTitle;
  sideMenuLists =sideMenuOptions.list;

  constructor(
    private _router: Router,
    // private route: ActivatedRoute,
    private _modalService:ModalsService,
    private _tableService:TablesService
  ) {
    super();
  }

  ngOnInit(): void {

  }


  handleActions(action: any) {
    this.handleTableActions(action, '/configs/item-config', this.url);
  }

}
