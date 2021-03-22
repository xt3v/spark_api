import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormItemService } from 'src/app/services/forms/form-item.service';
import { endpointV1 } from "../../../../services/constants/form-options-configs";
import { Router } from '@angular/router';

@Component({
  selector: 'app-move-stock',
  templateUrl: './move-stock.component.html',
  styleUrls: ['./move-stock.component.scss']
})
export class MoveStockComponent implements OnInit {


  page_title: string = 'Move Stock';
  move_stock_form: any;
  stores: any;
  item_configs: any;
  store_loading: boolean = true;
  items_loading: boolean = true;
  check_box: boolean = false;
  newEntry: boolean = true;
  constructor(private _formService: FormItemService,
    private router: Router) {
    const from_store = new FormControl('', Validators.required);
    const to_store = new FormControl('', Validators.required);
    const serial_numbers = new FormControl('');
    const items_count = new FormControl('');
    const item_config = new FormControl('');
    this.move_stock_form = new FormGroup({
      from_store: from_store,
      to_store: to_store,
      serial_numbers: serial_numbers,
      items_count: items_count,
      item_config: item_config
    })
  }

  ngOnInit(): void {
    this.loadFields();
  }

  loadFields() {
    this._formService.getDropdownValues(`${endpointV1}stores`).subscribe(response => {
      this.store_loading = false;
      this.stores = response.results;

    }, err => {
      this.store_loading = false;
    });

    this._formService.getDropdownValues(`${endpointV1}item-configs`).subscribe(response => {
      this.items_loading = false;
      this.item_configs = response.results;

    }, err => {
      this.items_loading = false;
    });
  }

  submitItem() {
    //delete fields not needed in serialized/non-serialized
    if (this.check_box == true) {
      delete this.move_stock_form.value.items_count;
      delete this.move_stock_form.value.item_config;
    } else {
      delete this.move_stock_form.value.serial_numbers;
    }

    let data = {
      url: `${endpointV1}itemz/move`,
      formData: this.move_stock_form.value
    }
    console.log(data);
    this._formService.postForm(this.newEntry, data).subscribe(response => {
      console.log(response);
      this.move_stock_form.reset();
      this.router.navigate(['/inventory/list'])
    }, err => {
      console.log(err);
    })
  }

  clearForm() {

  }
}
