import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stockroom-list',
  templateUrl: './stockroom-list.component.html',
  styleUrls: ['./stockroom-list.component.scss']
})
export class StockroomListComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  url = "stores/?type=SR&"

  headers = [
    "Name",
    {
      name: 'Stockroom ID',
      source: "id",
    },
    {
      name: 'Region/ Location',
      source: "location_details.name",
    },
    {
      name: 'Stockroom Manager',
      source: "manager_details.full_name",
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
    switch (action.name) {
      case "edit":
        this._router.navigate(['/stockroom/add'], { queryParams: action.data });
        break;
      default:
        break;
    }
  }

}
