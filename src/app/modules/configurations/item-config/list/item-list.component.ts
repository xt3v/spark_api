import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { tableHandleActionsMixin } from 'src/app/core/mixins/table-handle-actions-mixin';
import { TablesComponent } from 'src/app/shared/tables/tables.component';


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
    "type_name",
    "description",
    {
      name: 'actions Edit / Delete',
      type: "actions",
      source: "",// Field
      data: [
        "edit", "delete"
      ]
    },
  ];
  tableFilters = ["Name"];
  constructor(
    private _router: Router,
    // private route: ActivatedRoute,
  ) {
    super();
  }

  ngOnInit(): void {

  }


  handleActions(action: any) {
    this.handleTableActions(action, '/configs/item-config');
  }

}
