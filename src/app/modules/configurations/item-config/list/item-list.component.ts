import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  url = "item-configs"

  headers = [
    "Name",
    "type_name",
    "description",
    {
      name: 'actions Edit / Delete',
      type: "actions",
      source: "",// Field
      data: [
        "edit"
      ]
    },
  ];
  tableFilters = ["Name"];
  constructor(private _router: Router,
    private route: ActivatedRoute,
  ) {

  }

  ngOnInit(): void {

  }


  handleActions(action: any) {
    // console.log(action)
    switch (action.name) {
      case "edit":
        this._router.navigate(['/configs/item-config'], { queryParams: action.data });
        break;
      default:
        break;
    }
  }

}
