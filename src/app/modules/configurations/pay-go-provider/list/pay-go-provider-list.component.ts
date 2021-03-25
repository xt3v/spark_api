import { Component, OnInit } from '@angular/core';
import { sideMenuOptions } from '../../sidemenu-configs';
import { tableHandleActionsMixin } from 'src/app/core/mixins/table-handle-actions-mixin';
import { PayGoProviderFields } from '../options';
import { TablesComponent } from 'src/app/shared/tables/tables.component';
import { Router } from '@angular/router';
import { TablesService } from 'src/app/shared/tables/tables.service';
import { ModalsService } from 'src/app/shared/modals/modals.service';



const TableHandleActionsMixin = tableHandleActionsMixin(TablesComponent);

@Component({
  selector: 'app-pay-go-provider-list',
  templateUrl: './pay-go-provider-list.component.html',
  styleUrls: ['./pay-go-provider-list.component.scss']
})
export class PayGoProviderListComponent extends TableHandleActionsMixin implements OnInit {
  formItems: any = PayGoProviderFields;
  tableFiltersDropdown = [
    ["name"],
    ["description"]
  ];

  tableFiltersCollapsible = [
    ["name","description"]
  ];
  
  sideMenuTitle = sideMenuOptions.sideMenuTitle;
  sideMenuLists =sideMenuOptions.list;
  constructor(private _router: Router, private _tableService: TablesService, private _modalService: ModalsService) {
      super();
   }

  ngOnInit(): void {
  }
  url = "pay-go-providers"

  headers = [
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

  handleActions(action: any) {
    if (action.name == "edit") {
      this._router.navigate(['/configs/pay-go-providers'], { state: { data: action.data } });
    } 
    else {
      console.log("Delete triggered");
      this.handleTableActions(action, '/configs/pay-go-providers', this.url);
    }
  }

}
