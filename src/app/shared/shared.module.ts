/** Angular imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

/** Custom modules */
import { ModalModule } from './modal/modal.module';
import { IconsModule } from './icons/icons.module';
import { MyformModule } from './myform/myform.module';

/** Components */
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';


@NgModule({
  declarations: [BreadcrumbComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ModalModule,
    IconsModule,
    MyformModule
  ],
  exports: [FormsModule, MyformModule, ReactiveFormsModule, ModalModule, IconsModule, BreadcrumbComponent],
})
export class SharedModule { }
