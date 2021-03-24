import { Component, OnInit } from '@angular/core';
import { tableHandleActionsMixin } from 'src/app/core/mixins/table-handle-actions-mixin';
import { TablesComponent } from 'src/app/shared/tables/tables.component';
import { ModalsService } from "src/app/shared/modals/modals.service";
import { Router } from '@angular/router';
import { TablesService } from 'src/app/shared/tables/tables.service';
import { PriceGroupFields } from '../options'
import { sideMenuOptions } from '../../sidemenu-configs';

@Component({
  selector: 'app-price-group-list',
  templateUrl: './price-group-list.component.html',
  styleUrls: ['./price-group-list.component.scss']
})
export class PriceGroupListComponent implements OnInit {
  formItems: any = PriceGroupFields;
  tableFiltersDropdown = [
    ["name"],
    ["description"]
  ];

  tableFiltersCollapsible = [
    ["name","description"]
  ];
  
  sideMenuTitle = sideMenuOptions.sideMenuTitle;
  sideMenuLists =sideMenuOptions.list;
  constructor(private _router: Router, private _tablesService: TablesService) {
    
   }

  ngOnInit(): void {
  }
  url = "price-group-configs"

  headers = [
    "Name",
    "Description",
    "Type",
    "Days of Credit",
    "Daily Rate",
    "Number of Days",
    "Min activation amount",
    "Pay Go Provider Name",
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
      this._router.navigate(['/configs/price-group/'], { state: { data: action.data } });

    } 
    // else {
    //   this.handleTableActions(action, '/configs/pay-go-providers', this.url);
    // }
  }

}