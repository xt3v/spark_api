import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormItemService } from 'src/app/services/forms/form-item.service';
import { Location } from '@angular/common'
// import { SerializedItemfields, NotSerializedItemfields } from './options';
// import { FormBase, DropdownItem, TextItem } from '../../../../core/models/form-base';

// import { IntegerValidator } from '../../../../core/helpers/integer-validator';
import { ToastNotificationsService } from '../../../../shared/toast-notifications/toast-notifications.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { endpointV1 } from "../../../../services/constants/form-options-configs";
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  page_title = 'Add Items'
  newEntry: boolean = true;
  add_item_form: any;
  items: any;
  stores: any;
  boxes: any;
  check_box: boolean = false;
  item_loading: boolean = true;
  stock_loading: boolean = true;
  box_loading: boolean = true;
  instance: any = {};
  api_errors: any = [];


  constructor(
    private _activatedRoute: ActivatedRoute,
    private _formService: FormItemService,
    private toastService: ToastNotificationsService,
    private location: Location
  ) {


    const item_config = new FormControl('', Validators.required);
    const store = new FormControl('', Validators.required);
    const purchase_order = new FormControl('', Validators.required);
    const item_count = new FormControl('')
    const serial_numbers = new FormControl('');

    this.add_item_form = new FormGroup({
      item_config: item_config,
      store: store,
      purchase_order: purchase_order,
      serial_numbers: serial_numbers,
      item_count: item_count
    })

    // this._activatedRoute.queryParams.subscribe(params => {
    //   if (params.hasOwnProperty("id")) {
    //     this.instance = params
    //     this.newEntry = false;
    //     console.log(this.instance)
    //   }

    //   //Show Serial textarea if edit 
    //   if (params.hasOwnProperty("serial")) {
    //     this.check_box = true;
    //   }
    // });
  }

  ngOnInit() {

    //initially populate dropdowns
    this.getDropdownValues();
    this.showSuccess()
  }

  showSuccess() {
    console.log("toast")
    console.log(this.toastService.toastarray);
    this.toastService.show('I am a success toast', {
      classname: 'bg-success text-light',
      delay: 2000,
      autohide: true,
      headertext: 'Toast Header'
    });
  }
  getDropdownValues() {
    //Item config fetch dropdown values and set field value if an edit
    this._formService.getDropdownValues(`${endpointV1}item-configs`).subscribe(response => {
      this.item_loading = false;
      this.items = response.results;
      console.log("item-configs");
      console.log(response);

    }, err => {
      this.item_loading = false;
    });

    //Store fetch dropdown values and set field value if an edit
    this._formService.getDropdownValues(`${endpointV1}stores`).subscribe(response => {
      this.stock_loading = false;
      this.stores = response.results;

    }, err => {
      this.stock_loading = false;
    });



  }


  //POST or PUT item
  submitItem() {
    //delete fields not needed in serialized/non-serialized
    if (this.check_box == true) {
      delete this.add_item_form.value.item_count;
    } else {
      delete this.add_item_form.value.serial_numbers;
    }

    //reset API errors
    this.api_errors = [];
    let data = {
      url: this.newEntry == true ? `${endpointV1}itemz/bulk` : `${endpointV1}itemz/${this.instance.id}/`,
      formData: this.add_item_form.value
    }
    console.log(data);
    this._formService.postForm(this.newEntry, data).subscribe(response => {
      console.log(response);
      this.add_item_form.reset();
      this.location.back();


    }, (err: HttpErrorResponse) => {

      this.api_errors = err.error;

    })
  }

  //Reset Form
  clearForm() {
    this.newEntry = false;
    this.add_item_form.reset();
  }




}
