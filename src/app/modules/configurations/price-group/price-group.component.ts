import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { PriceGroupFields } from './options';
@Component({
  selector: 'app-price-group',
  templateUrl: './price-group.component.html',
  styleUrls: ['./price-group.component.scss']
})
export class PriceGroupComponent implements OnInit {

  formItems: any = PriceGroupFields;
  url: string = "price-group-configs/"
  instance: any;
  formGroupOrder = [
    ['name', 'type', 'days_of_credit', 'daily_rate' ],
    ['pay_go_provider','number_of_days','min_activation_amount', 'cash_amount'],
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
