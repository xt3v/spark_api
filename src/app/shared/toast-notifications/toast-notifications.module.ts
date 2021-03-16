import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastNotificationsComponent } from './toast-notifications.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastNotificationsService } from './toast-notifications.service';



@NgModule({
  declarations: [ToastNotificationsComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    ToastNotificationsComponent
  ],
  providers: [ToastNotificationsService]
})
export class ToastNotificationsModule { }
