import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PayGoProviderFields } from './options';
@Component({
  selector: 'app-pay-go-provider',
  templateUrl: './pay-go-provider.component.html',
  styleUrls: ['./pay-go-provider.component.scss']
})
export class PayGoProviderComponent implements OnInit {
  formItems: any = PayGoProviderFields
  url: string = "pay-go-providers/"
  instance: any;
  formGroupOrder = [
    ['name'],
    ['description']
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
    this._router.navigate(['/configs/list-pay-go-providers'])
  }

}
