import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalsComponent } from './basic/modals.component';
import { ModalsService } from './modals.service';
import { ConfirmComponent } from './confirm/confirm.component';

@NgModule({
  declarations: [ModalsComponent, ConfirmComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ModalsComponent,
    ConfirmComponent
  ],
  providers: [
    // ModalsService
  ]
})
export class ModalsModule { }
