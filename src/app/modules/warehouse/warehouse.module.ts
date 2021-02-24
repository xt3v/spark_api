import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { WarehouseRoutes } from './warehouse-routing.module';

import { AddWarehouseComponent } from './add/add-warehouse.component';
import { SharedModule } from 'src/app/shared/shared.module';




@NgModule({
  declarations: [AddWarehouseComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(WarehouseRoutes),
    SharedModule
  ]
})
export class WarehouseModule { }
