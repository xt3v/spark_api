import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

import { WarehouseRoutes } from './warehouse-routing.module';
import { AddWarehouseComponent } from './add/add-warehouse.component';
import { WarehouseListComponent } from './list/warehouse-list.component';
@NgModule({
  declarations: [AddWarehouseComponent, WarehouseListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(WarehouseRoutes),
    SharedModule
  ]
})
export class WarehouseModule { }
