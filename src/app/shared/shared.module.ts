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
import { TablesModule } from './tables/tables.module';
import { AddButtonComponent } from './add-button/add-button.component';


@NgModule({
  declarations: [BreadcrumbComponent, AddButtonComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ModalModule,
    IconsModule,
    MyformModule,
    TablesModule
  ],
  exports: [
    FormsModule, 
    MyformModule, 
    ReactiveFormsModule, 
    ModalModule, 
    IconsModule,
    TablesModule,
    BreadcrumbComponent,
    AddButtonComponent
  ],
})
export class SharedModule { }
