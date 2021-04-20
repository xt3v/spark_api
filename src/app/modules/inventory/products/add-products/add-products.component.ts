import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { optionsField } from '../options';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent implements OnInit {

  formItems: any = optionsField;
  url: string = "stores/"
  formGroupOrder = [
    ['customer', 'product_config'],
    ['items'],
    ['boxes']
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
  }
  onPostedData(data: any) {
  }

}
