import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormItemService } from 'src/app/services/forms/form-item.service';
import { SerializedItemfields, NotSerializedItemfields } from './options';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  serializedFormItems: any = SerializedItemfields;
  nonSerializedFormItems: any = NotSerializedItemfields;
  selectedItemSubscription: any;
  url: string = "itemz/";
  instance:any;

  serializedFormGroupOrder = [
    ['item_config', 'store', 'purchase_order'],
    ['serial'],
  ]

  nonSerializedFormGroupOrder = [
    ['item_config', 'store', 'purchase_order', 'purchase_order'],
  ]

  tabs = [
    { prop: 'serialized', label: 'Serialized', active: true, form_items: this.serializedFormItems, form_group_order: this.serializedFormGroupOrder},
    { prop: 'not_serialized', label: 'Not Serialized', active: false, form_items: this.nonSerializedFormItems, form_group_order: this.nonSerializedFormGroupOrder}
  ]
  
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _formService: FormItemService
  ) {
    this._activatedRoute.queryParams.subscribe(params => {
      if (params.hasOwnProperty("id")) {
        this.instance = params
        console.log(this.instance)
      }
    });
   }

  ngOnInit(): void {
  this.selectedItemSubscription = this._formService.selectedTabChange.subscribe(value => {
    console.log ("THE SELECTED TAB IN ADD ITEM COMPT", value);
    this.tabs.map(item => {
      if (item.prop === value) {
        item.active = true;
      } else {
        item.active = false;
      }
    })
   })
  }

  onValidatedData(data: any) {
    console.log(data)
  }
  onPostedData(data: any) {
    console.log(data)
  }

  tabSelected(data:any) {
    console.log("THE SELECTED TAB IN ADD ITEM COMPONENT", data);
    
  }

  ngOnDestroy() {
    this.selectedItemSubscription.unsubscribe();
  }

}
