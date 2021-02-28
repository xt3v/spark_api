import { Component, OnInit } from '@angular/core';
import { storeFields } from './options';

@Component({
  selector: 'app-add-warehouse',
  templateUrl: './add-warehouse.component.html',
  styleUrls: ['./add-warehouse.component.scss']
})
export class AddWarehouseComponent implements OnInit {

  formItems: any = storeFields;
  url: string = "stores/"
  formGroupOrder = [
    ['name'],
    ['location'],
    ['manager'],
  ]

  extraParams = {
    type: "WH"
  }
  constructor() { }

  ngOnInit(): void {
  }
  onValidatedData(data: any) {
    console.log(data)
  }
  onPostedData(data: any) {
    console.log(data)
  }

}
