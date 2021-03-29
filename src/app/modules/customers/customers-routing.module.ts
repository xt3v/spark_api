import { Routes } from '@angular/router';
import { CustomersAddComponent } from './add/customers-add.component';
import { CustomersComponent } from './list/customers.component';

export const CustomerRoutes: Routes = [
    { path: '', redirectTo: 'customers', pathMatch: 'full' },
    { path: 'list', component: CustomersComponent, data: { breadcrumb: 'List Customers' } },
    { path: 'customers', component: CustomersAddComponent, data: { breadcrumb: 'Add Customers' } },
]