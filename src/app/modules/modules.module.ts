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
    StockroomModule
  ],
})
export class ModulesModule {}
