/** Angular imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

/** Custom modules */
import { ModalModule } from './modal/modal.module';
import { IconsModule } from './icons/icons.module';
import { CardComponent } from './card/card.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [CardComponent, BreadcrumbComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ModalModule,
    IconsModule,
  ],
  exports: [FormsModule, ReactiveFormsModule, ModalModule, IconsModule, CardComponent, BreadcrumbComponent],
})
export class SharedModule {}
