import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';

import { ModulesRoutes } from './modules-routing.module';

import { WarehouseModule } from './warehouse/warehouse.module';
import { StockroomModule } from './stockroom/stockroom.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { InventoryModule } from './inventory/inventory.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ModulesRoutes),
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CoreModule,
    WarehouseModule,
    StockroomModule,
    InventoryModule,
    SuppliersModule
  ],
})
export class ModulesModule { }
