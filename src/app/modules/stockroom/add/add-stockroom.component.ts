import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { storeFields } from '../../warehouse/add/options';

@Component({
  selector: 'app-add-stockroom',
  templateUrl: './add-stockroom.component.html',
  styleUrls: ['./add-stockroom.component.scss']
})
export class AddStockroomComponent implements OnInit {
  formItems: any = storeFields;
  url: string = "stores/"
  formGroupOrder = [
    ['name', 'location', 'manager'],
  ]

  extraParams = {
    type: "SR"
  }

  instance: any;

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
