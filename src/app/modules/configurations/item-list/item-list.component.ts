import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  url = "item-configs"

  headers = [
    "Name",
    "Type Name",
    "description",
    "Has Serial",
    {
      name: 'actions Edit / Delete',
      type: "actions",
      source: "",
      data: [
        "edit"
      ]
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }


  handleActions(action: any) {
    console.log(action)
  }

}
