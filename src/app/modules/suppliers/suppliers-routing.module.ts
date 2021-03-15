import { Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';

export const SupplierRoutes: Routes = [
    { path: '', redirectTo: 'add', pathMatch: 'full' },
    { path: 'add', component: AddComponent, data: { breadcrumb: 'Add Supplier' } },
    { path: 'list', component: ListComponent, data: { breadcrumb: 'Suppliers' } },
]