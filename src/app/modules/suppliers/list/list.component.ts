import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { tableHandleActionsMixin } from 'src/app/core/mixins/table-handle-actions-mixin'
import { TablesComponent } from 'src/app/shared/tables/tables.component'

import { ModalsService } from "src/app/shared/modals/modals.service"
import { TablesService } from 'src/app/shared/tables/tables.service'
import { optionsField } from '../options'

const TableHandleActionsMixin = tableHandleActionsMixin(TablesComponent)
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends TableHandleActionsMixin implements OnInit {
  formItems: any = optionsField
  tableFiltersDropdown = [
    ["name"],
  ]

  constructor(
    private _router: Router,
    private _modalService: ModalsService,
    private _tableService: TablesService
  ) {
    super()
  }

  url = "suppliers"
  apiUrl = "suppliers"

  headers = [
    // "Name",
    {
      name: 'Supplier ID',
      source: "id",
    },
    {
      name: 'Name',
      source: "name",
    },
    {
      name: 'Email Address',
      source: "email",
    },
    {
      name: 'Phone number',
      source: "phone",
    },
    {
      name: 'Contact person',
      source: "contact_person",
    },
    {
      name: 'Contact Person (phone)',
      source: "contact_phone",
    },
    {
      name: 'Actions',
      type: "actions",
      source: "",
      data: [
        "edit", "delete"
      ]
    },
  ]

  // tableFilters = ["Name"]

  ngOnInit(): void {
  }

  handleActions(action: any) {
    this.handleTableActions(action, '/suppliers/add', this.apiUrl)
  }
}