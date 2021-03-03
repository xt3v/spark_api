import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Itemfields } from './options';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  formItems: any = Itemfields;
  url: string = "itemz/";
  instance:any;

  formGroupOrder = [
    ['item_config', 'store', 'purchase_order'],
    ['serial'],
  ]

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
