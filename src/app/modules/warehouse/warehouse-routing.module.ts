import { Routes } from '@angular/router';
import { AddWarehouseComponent } from './add/add-warehouse.component';
import { WarehouseListComponent } from './list/warehouse-list.component';

export const WarehouseRoutes: Routes = [
    { path: '', redirectTo: 'add', pathMatch: 'full' },
    { path: 'add', component: AddWarehouseComponent, data: { breadcrumb: 'Add' } },
    { path: 'list', component: WarehouseListComponent, data: { breadcrumb: 'List' } },
]