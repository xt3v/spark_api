import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DynamicFormsComponent } from './dynamic-forms.component';
import { DynamicFormsItemComponent } from './dynamic-forms-item/dynamic-forms-item.component';

import { CardComponent } from '../card/card.component';


@NgModule({
  declarations: [DynamicFormsComponent, DynamicFormsItemComponent, CardComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [DynamicFormsComponent, DynamicFormsItemComponent, CardComponent]
})
export class DynamicFormsModule { }
