import { Component, OnInit } from '@angular/core';
import { warehouseFields } from './options';

@Component({
  selector: 'app-add-warehouse',
  templateUrl: './add-warehouse.component.html',
  styleUrls: ['./add-warehouse.component.scss']
})
export class AddWarehouseComponent implements OnInit {

  formItems: any = warehouseFields;
  url: string = "stores/"
  formGroupOrder = [
    ['name', 'type', 'location', 'manager'],
  ]
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
