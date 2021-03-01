import { Component, OnInit } from '@angular/core';
import { endpointV1 } from "../../../services/constants/form-options-configs";

@Component({
  selector: 'app-stockroom-list',
  templateUrl: './stockroom-list.component.html',
  styleUrls: ['./stockroom-list.component.scss']
})
export class StockroomListComponent implements OnInit {

  constructor() { }

  url = "stores/?type=SR&"

  headers = [
    "Name",
    {
      name: 'Stockroom ID',
      source: "id",
    },
    {
      name: 'Region/ Location',
      source: "location",
      display_name: "name",
    },
    {
      name: 'Stockroom Manager',
      source: "users",
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
    console.log(action)
    if (action.name === 'delete') {
      
    }
  }

}
