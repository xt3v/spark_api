import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MyformComponent } from './myform.component';
import { MyinputComponent } from './myinput/myinput.component';
import { CardComponent } from '../card/card.component';

@NgModule({
  declarations: [
    MyformComponent,
    MyinputComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    MyformComponent,
    MyinputComponent,
    CardComponent
  ]
})
export class MyformModule { }
