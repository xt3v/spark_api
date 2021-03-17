import { Component, OnInit, TemplateRef } from '@angular/core';
import { ToastNotificationsService } from './toast-notifications.service';

@Component({
  selector: 'app-toast-notifications',
  templateUrl:'./toast-notifications.component.html',
  styleUrls: ['./toast-notifications.component.scss']
})
export class ToastNotificationsComponent {

  constructor(public toastService: ToastNotificationsService) { }

  isTemplate(toast:any) { return toast.text instanceof TemplateRef }

}


