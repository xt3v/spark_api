import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ModulesRoutes } from './modules-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { WarehouseModule } from './warehouse/warehouse.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ModulesRoutes),
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CoreModule,
    WarehouseModule
  ],
})
export class ModulesModule {}
