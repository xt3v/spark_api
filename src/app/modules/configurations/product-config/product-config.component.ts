import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ProductFields } from './options';

@Component({
  selector: 'app-product-config',
  templateUrl: './product-config.component.html',
  styleUrls: ['./product-config.component.scss']
})
export class ProductConfigComponent implements OnInit {

  formItems: any = ProductFields;
  url: string = "product-configs/"
  instance: any;
  formGroupOrder = [
    ['name', 'kit_config', 'price_group_config' ],
    ['description'],
  ]
  constructor(private _router: Router) {

    this.instance = history.state.data
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
