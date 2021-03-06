import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tableHandleActionsMixin } from 'src/app/core/mixins/table-handle-actions-mixin';
import { TablesComponent } from 'src/app/shared/tables/tables.component';
import { ModalsService } from "src/app/shared/modals/modals.service";
import { TablesService } from 'src/app/shared/tables/tables.service';

const TableHandleActionsMixin = tableHandleActionsMixin(TablesComponent);
@Component({
  selector: 'app-box-config-list',
  templateUrl: './box-config-list.component.html',
  styleUrls: ['./box-config-list.component.scss']
})
export class BoxConfigListComponent extends TableHandleActionsMixin implements OnInit {

  constructor(
    private _router: Router,
    private _modalService: ModalsService,
    private _tableService: TablesService
  ) {
    super();
  }
  url = "box-configs"

  headers = [
    "Name",
    "Description",
    {
      name: "Items in Kit",
      source: "items_details.length",
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
    if (action.name == "edit") {
      this._router.navigate(['/configs/box-config'], { state: { data: action.data } });

    } else {
      this.handleTableActions(action, '/configs/box-config', this.url);
    }
  }
}
