import { Component, OnInit } from '@angular/core';
import { tableHandleActionsMixin } from 'src/app/core/mixins/table-handle-actions-mixin';
import { TablesComponent } from 'src/app/shared/tables/tables.component';
import { ModalsService } from "src/app/shared/modals/modals.service";
import { Router } from '@angular/router';
import { TablesService } from 'src/app/shared/tables/tables.service';
import { ProductFields } from '../options'
import { sideMenuOptions } from '../../sidemenu-configs';



const TableHandleActionsMixin = tableHandleActionsMixin(TablesComponent);
@Component({
  selector: 'app-product-config-list',
  templateUrl: './product-config-list.component.html',
  styleUrls: ['./product-config-list.component.scss']
})
export class ProductConfigListComponent extends TableHandleActionsMixin implements OnInit {
  formItems: any = ProductFields;
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
  url = "product-configs"

  headers = [
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

  handleActions(action: any) {
    if (action.name == "edit") {
      this._router.navigate(['/configs/product-config/'], { state: { data: action.data } });
    } 
    else {
      this.handleTableActions(action, '/configs/product-config', this.url);
    }
  }

}