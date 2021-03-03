import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tableHandleActionsMixin } from 'src/app/core/mixins/table-handle-actions-mixin';
import { TablesComponent } from 'src/app/shared/tables/tables.component';


const TableHandleActionsMixin = tableHandleActionsMixin(TablesComponent);
@Component({
  selector: 'app-item-type-list',
  templateUrl: './item-type-list.component.html',
  styleUrls: ['./item-type-list.component.scss']
})
export class ItemTypeListComponent extends TableHandleActionsMixin implements OnInit {
  url = "item-type-configs"

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

  tableFilters = ["Name"]
  
  constructor(
    private _router: Router,
  ) { 
    super();
  }
  

  ngOnInit(): void {
  }

  handleActions(action: any) {
      this.handleTableActions(action, '/configs/item-type');
  }

}
