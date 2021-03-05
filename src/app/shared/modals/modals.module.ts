import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalsComponent } from './basic/modals.component';
import { ModalsService } from './modals.service';
import { ConfirmComponent } from './confirm/confirm.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [ModalsComponent, ConfirmComponent, ConfirmDialogComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ModalsComponent,
    ConfirmComponent,
    ConfirmDialogComponent
  ],
  providers: [
    ModalsService
  ]
})
export class ModalsModule { }
