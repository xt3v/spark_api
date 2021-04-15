import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tableHandleActionsMixin } from 'src/app/core/mixins/table-handle-actions-mixin';
import { TablesComponent } from 'src/app/shared/tables/tables.component';
import { ModalsService } from "src/app/shared/modals/modals.service";
import { TablesService } from 'src/app/shared/tables/tables.service';

const TableHandleActionsMixin = tableHandleActionsMixin(TablesComponent);

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListBoxesComponent extends TableHandleActionsMixin implements OnInit {

  constructor(
    private _router: Router,
    private _modalService: ModalsService,
    private _tableService: TablesService
  ) {
    super();
  }
  url = "boxs";

  headers = [
    "box_config",
    "store",
    "purchase_order",
    {
      "name": "Serials",
      "source": "serial"
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
    this.handleTableActions(action, '/check-in', this.url);
  }

}
