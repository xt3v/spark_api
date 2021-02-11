/** Angular imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

/** Custom modules */
import { ModalModule } from './modal/modal.module';
import { IconsModule } from './icons/icons.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ModalModule,
    IconsModule,
  ],
  exports: [FormsModule, ReactiveFormsModule, ModalModule, IconsModule],
})
export class SharedModule {}
