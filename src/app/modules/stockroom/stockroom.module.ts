import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { AddStockroomComponent } from './add/add-stockroom.component';
import { StockroomRoutes } from './stockroom-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { StockroomListComponent } from './list/stockroom-list.component';



@NgModule({
  declarations: [AddStockroomComponent, StockroomListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(StockroomRoutes),
    SharedModule
  ]
})
export class StockroomModule { }
