import { Component, OnInit } from '@angular/core';
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
