import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tableHandleActionsMixin } from 'src/app/core/mixins/table-handle-actions-mixin';
import { TablesComponent } from 'src/app/shared/tables/tables.component';
import { ModalsService } from "src/app/shared/modals/modals.service";
import { TablesService } from 'src/app/shared/tables/tables.service';
import { sideMenuOptions } from '../../../sidemenu-configs';
import { KitConfigFields } from '../../options';

const TableHandleActionsMixin = tableHandleActionsMixin(TablesComponent);

@Component({
  selector: 'app-kit-config-list',
  templateUrl: './kit-config-list.component.html',
  styleUrls: ['./kit-config-list.component.scss']
})
export class KitConfigListComponent extends TableHandleActionsMixin implements OnInit {

  formItems: any = KitConfigFields;
  tableFiltersDropdown = [
    ["serial"],
    ["boxes"]
  ];

  tableFiltersCollapsible = [
    ["serial","boxes"]
  ];
  
  sideMenuTitle = sideMenuOptions.sideMenuTitle;
  sideMenuLists =sideMenuOptions.list;
  constructor(
    private _router: Router,
    private _modalService: ModalsService,
    private _tableService: TablesService
  ) {
    super();
  }
  url = "kit-configs"

  headers = [
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

  ngOnInit(): void {
  }

  handleActions(action: any) {
    if (action.name == "edit") {
      this._router.navigate(['/configs/kit-config'], { state: { data: action.data } });

    } else {
      this.handleTableActions(action, '/configs/kit-config', this.url);
    }
  }

}
