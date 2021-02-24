import { Routes } from '@angular/router';
import { AddWarehouseComponent } from './add/add-warehouse.component';

export const WarehouseRoutes: Routes = [
    { path: '', redirectTo: 'add', pathMatch: 'full' },
    { path: 'add', component: AddWarehouseComponent, data: { breadcrumb: 'Add Warehouse' } },
]