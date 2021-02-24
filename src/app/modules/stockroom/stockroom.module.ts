import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { AddStockroomComponent } from './add/add-stockroom.component';
import { StockroomRoutes } from './stockroom-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [AddStockroomComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(StockroomRoutes),
    SharedModule
  ]
})
export class StockroomModule { }
