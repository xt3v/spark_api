import { Routes } from '@angular/router';
import { AddWarehouseComponent } from './add/add-warehouse.component';
import { WarehouseListComponent } from './list/warehouse-list.component';

export const WarehouseRoutes: Routes = [
    { path: '', component: WarehouseListComponent, data: { breadcrumb: 'List' } },
    { path: 'add', component: AddWarehouseComponent, data: { breadcrumb: 'Add' } },
]