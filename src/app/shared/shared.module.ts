/** Angular imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

/** Custom modules */
import { ModalModule } from './modal/modal.module';
import { IconsModule } from './icons/icons.module';
import { DynamicFormsModule } from './dynamic-forms/dynamic-forms.module';

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
    DynamicFormsModule
  ],
  exports: [FormsModule, ReactiveFormsModule, ModalModule, IconsModule, BreadcrumbComponent, DynamicFormsModule],
})
export class SharedModule {}
