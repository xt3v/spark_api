import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-type-list',
  templateUrl: './item-type-list.component.html',
  styleUrls: ['./item-type-list.component.scss']
})
export class ItemTypeListComponent implements OnInit {

  constructor() { }
  url = "item-type-configs"

  headers = [
    "Name",
    "Description",
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
