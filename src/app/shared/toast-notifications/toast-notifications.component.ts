import { Component, OnInit, TemplateRef } from '@angular/core';
import { ToastNotificationsService } from './toast-notifications.service';

@Component({
  selector: 'app-toast-notifications',
  template:
    `<ngb-toast *ngFor="let toast of toastService.toasts" [header]="toast.headertext" [class]="toast.classname"
  [autohide]="toast.autohide" [delay]="toast.delay || 5000" (hide)="toastService.remove(toast)">
  <ng-template [ngIf]="isTemplate(toast)" [ngIfElse]="text">
    <ng-template [ngTemplateOutlet]="toast.textOrTpl"></ng-template>
  </ng-template>

  <ng-template #text>{{ toast.text }}</ng-template>
</ngb-toast>
`,
  host: { '[class.ngb-toasts]': 'true' },
  styleUrls: ['./toast-notifications.component.scss']
})
export class ToastNotificationsComponent {

  constructor(public toastService: ToastNotificationsService) { }

  isTemplate(toast:any) { return toast.text instanceof TemplateRef }

}


