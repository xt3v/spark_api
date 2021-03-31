import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tableHandleActionsMixin } from 'src/app/core/mixins/table-handle-actions-mixin';
import { TablesComponent } from 'src/app/shared/tables/tables.component';
import { ModalsService } from "src/app/shared/modals/modals.service";
import { TablesService } from 'src/app/shared/tables/tables.service';
import { CustomerConfigs } from '../options';

const TableHandleActionsMixin = tableHandleActionsMixin(TablesComponent);

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent extends TableHandleActionsMixin implements OnInit {
  url = "customers"
  formItems: any = CustomerConfigs;
  tableFiltersDropdown = [
    ["name"],
    ["angaza_qid"]
  ];

  tableFiltersCollapsible = [
    ["name","angaza_qid"]
  ];

  headers = [
    "Name",
    "Id number",
    "Angaza qid",
    {
      name: "Phone",
      source: "primary_phone",
    },
    "Avg monthly income",
    "Occupation",
    {
      name: 'Region',
      source: "location_details.name",
    },
    "Village",
    {
      name: 'Closest spark agent shop (Kms)',
      source: "closest_spark_agent_shop",
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

  constructor(
    private _router: Router,
    private _modalService: ModalsService,
    private _tableService: TablesService
  ) {
    super();
  }

  ngOnInit(): void {
  }

  handleActions(action: any) {
    this.handleTableActions(action, '/customers', this.url);
}

  // handleActions(action: any) {
  //   if (action.name == "edit") {
  //     this._router.navigate(['/customers'], { state: { data: action.data } });

  //   } else {
  //     this.handleTableActions(action, '/customers', this.url);
  //   }
  // }
}
