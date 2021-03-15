import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tableHandleActionsMixin } from 'src/app/core/mixins/table-handle-actions-mixin';
import { TablesComponent } from 'src/app/shared/tables/tables.component';

import { ModalsService } from "src/app/shared/modals/modals.service";
import { TablesService } from 'src/app/shared/tables/tables.service';
import { optionsField } from '../options';

const TableHandleActionsMixin = tableHandleActionsMixin(TablesComponent);
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends TableHandleActionsMixin implements OnInit {
  formItems: any = optionsField
  tableFiltersDropdown = [
    ["first_name"],
  ];

  constructor(
    private _router: Router,
    private _modalService: ModalsService,
    private _tableService: TablesService
  ) {
    super()
  }

  url = "users";
  apiUrl = "users";

  headers = [
    {
      name: 'ID',
      source: "id",
    },
    {
      name: 'Username',
      source: "username",
    },
    {
      name: 'Name',
      source: "full_name",
    },
    {
      name: 'Role',
      source: "role.choices.display_name",
    },
    {
      name: 'Phone',
      source: "phone",
    },
    {
      name: 'Email Address',
      source: "email",
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
    this.handleTableActions(action, '/accounts/add', this.apiUrl);
  }
}