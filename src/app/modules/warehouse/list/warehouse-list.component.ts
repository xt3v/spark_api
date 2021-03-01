import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warehouse-list',
  templateUrl: './warehouse-list.component.html',
  styleUrls: ['./warehouse-list.component.scss']
})
export class WarehouseListComponent implements OnInit {

  constructor() { }

  url = "stores/?type=WH&"

  headers = [
    "Name",
    {
      name: 'Warehouse ID',
      source: "id",
    },
    {
      name: 'Region/ Location',
      source: "location",
      display_name: "name",
    },
    {
      name: 'Warehouse Manager',
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
