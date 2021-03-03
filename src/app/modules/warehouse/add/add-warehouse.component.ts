import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { storeFields } from './options';

@Component({
  selector: 'app-add-warehouse',
  templateUrl: './add-warehouse.component.html',
  styleUrls: ['./add-warehouse.component.scss']
})
export class AddWarehouseComponent implements OnInit {

  formItems: any = storeFields;
  url: string = "stores/";
  instance:any;

  formGroupOrder = [
    ['name'],
    ['location'],
    ['manager'],
  ]

  extraParams = {
    type: "WH"
  }
  constructor(
    private _activatedRoute: ActivatedRoute
  ) {
    this._activatedRoute.queryParams.subscribe(params => {
      if (params.hasOwnProperty("id")) {
        this.instance = params
        console.log(this.instance)
      }
    });
   }

  ngOnInit(): void {
  }
  onValidatedData(data: any) {
    console.log(data)
  }
  onPostedData(data: any) {
    console.log(data)
  }

}
