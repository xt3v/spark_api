import { Component, OnInit } from '@angular/core';
import { ItemConfigfields } from './options';

@Component({
  selector: 'app-item-config',
  templateUrl: './item-config.component.html',
  styleUrls: ['./item-config.component.scss']
})
export class ItemConfigComponent implements OnInit {
  formItems: any = ItemConfigfields
  url: string = "https://api.spark.sisitech.dev/api/v1/item-configs/"

  formGroupOrder = [
    ['name'],
    ['type', 'has_serial'],
    ['description'],
  ]
  constructor() { }

  ngOnInit(): void {
  }
  onValidatedData(data: any) {
  }
  onPostedData(data: any) {
    console.log(data)
  }

}
