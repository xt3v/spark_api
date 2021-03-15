import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormItemService } from 'src/app/services/forms/form-item.service';
import { SerializedItemfields, NotSerializedItemfields } from './options';
import { FormBase, DropdownItem, TextItem } from '../../../../core/models/form-base';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { endpointV1 } from "../../../../services/constants/form-options-configs";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {


  newEntry: boolean = true;
  add_item_form: any;
  items: any;
  stores: any;
  boxes: any;
  check_box: boolean = false;
  item_loading: boolean = true;
  stock_loading: boolean = true;
  box_loading: boolean = true;
  instance: any;


  constructor(
    private _activatedRoute: ActivatedRoute,
    private _formService: FormItemService
  ) {


    const item_config = new FormControl('', Validators.required);
    const store = new FormControl('', Validators.required);
    const purchase_order = new FormControl('', Validators.required);
    const box = new FormControl('');
    const serial = new FormControl('');

    this.add_item_form = new FormGroup({
      item_config: item_config,
      store: store,
      purchase_order: purchase_order,
      serial: serial,
      box: box
    })

    this._activatedRoute.queryParams.subscribe(params => {
      if (params.hasOwnProperty("id")) {
        this.instance = params
        this.newEntry = false;
        console.log(this.instance)
      }

      //Show Serial textarea if edit 
      if (params.hasOwnProperty("serial")){
        this.check_box = true;
      }
    });
  }

  ngOnInit() {

    //initially populate dropdowns
    this.getDropdownValues();
  }
  getDropdownValues() {


    if(this.newEntry == false){
      this.add_item_form.get('serial').setValue(this.instance.serial);
      this.add_item_form.get('purchase_order').setValue(this.instance.purchase_order);
    
    }
    //Item config fetch dropdown values and set field value if an edit
    this._formService.getDropdownValues(`${endpointV1}item-configs`).subscribe(response => {
      this.item_loading = false;
      this.items = response.results;
      console.log(response);
      if (this.newEntry == false) {

        this.add_item_form.get('item_config').setValue(this.instance.item_config)
      }
    }, err => {
      this.item_loading = false;
    });

    //Store fetch dropdown values and set field value if an edit
    this._formService.getDropdownValues(`${endpointV1}stores`).subscribe(response => {
      this.stock_loading = false;
      this.stores = response.results;
      if (this.newEntry == false) {

        this.add_item_form.get('store').setValue(this.instance.store)
      }
    }, err => {
    });


    //Box config fetch dropdown values and set field value if an edit
    this._formService.getDropdownValues(`${endpointV1}box-configs`).subscribe(response => {
      this.box_loading = false;
      this.boxes = response.results;
      console.log(response);
      if (this.newEntry == false) {

        this.add_item_form.get('box').setValue(this.instance.box)
      }
      this.box_loading = false;
    }, err => {
      this.box_loading = false
      console.log(err);
    });

    
  }


  //POST or PATCH item
  submitItem() {
    //delete serial field if untouched
    if(this.instance.serial == this.add_item_form.value.serial){
      delete this.add_item_form.value.serial;
    }
    console.log(this.add_item_form.value);
    let data = {
      url: this.newEntry == true ? `${endpointV1}itemz/`: `${endpointV1}itemz/${this.instance.id}/`,
      formData: this.add_item_form.value
    }
    console.log(data);
    this._formService.postForm(this.newEntry, data).subscribe(response => {
      console.log(response);
      this.add_item_form.reset();
    }, err => {
      console.log(err);
    })
  }

  //Reset Form
  clearForm() {
    this.newEntry = false;
    this.add_item_form.reset();
  }


  

}
