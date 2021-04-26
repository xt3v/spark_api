import { Component, OnInit, TemplateRef } from '@angular/core';
import { ToastNotificationsService } from './toast-notifications.service';

declare var $: any;
@Component({
  selector: 'app-toast-notifications',
  templateUrl: './toast-notifications.component.html',
  styleUrls: ['./toast-notifications.component.scss']
})
export class ToastNotificationsComponent implements OnInit {
  
  constructor(public toastService: ToastNotificationsService) { 
    
  }

  ngOnInit() {
    
  }

}


