import { Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';

export const AccountsRoutes: Routes = [
    { path: '', component: ListComponent, data: { breadcrumb: 'Accounts' } },
    { path: 'add', component: AddComponent, data: { breadcrumb: 'Add Accounts' } },
]