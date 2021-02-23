import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyformComponent } from './myform.component';
import { MyinputComponent } from './myinput/myinput.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MyformComponent,
    MyinputComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    MyformComponent,
    MyinputComponent,
  ]
})
export class MyformModule { }
