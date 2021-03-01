import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-config-list',
  templateUrl: './box-config-list.component.html',
  styleUrls: ['./box-config-list.component.scss']
})
export class BoxConfigListComponent implements OnInit {

  constructor() { }
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
    console.log(action)
    if (action.name === 'delete') {
      
    }
  }
}
