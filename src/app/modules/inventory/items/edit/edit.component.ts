import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SerializedItemfields, NotSerializedItemfields } from './options';
import { ToastNotificationsService } from 'src/app/shared/toast-notifications/toast-notifications.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  formItems:any = SerializedItemfields;
  instance: any;
  url: string = "itemz/";
  formGroupOrder = [
    ['item_config',  'store', 'purchase_order', 'serial'],
  ]
  constructor(
    private _activatedRoute: ActivatedRoute,
    public toastService: ToastNotificationsService
  ) {
    this._activatedRoute.queryParams.subscribe(params => {
      if (params.hasOwnProperty("id")) {
        this.instance = params
        console.log(this.instance)
        if(params.hasOwnProperty("serial")){
        }
      }
    });
  
  }

  ngOnInit(): void {
  }
  onValidatedData(data: any) {

    console.log(this.toastService.toasts);
  }

  onPostedData(data: any) {
    console.log(data);
    
    if(data.hasOwnProperty('id')){
      let options = {}
      
      this.toastService.show("Successfull Edited", options);
    } else {
      let options = {}
      this.toastService.show("Error editing", options);
    } 

    console.log(this.toastService.toastarray);
  }
}
