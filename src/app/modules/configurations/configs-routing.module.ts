import { Routes } from '@angular/router';
import { ItemTypeComponent } from './item-type/item-type.component';

export const ConfigRoutes: Routes = [
    { path: '', redirectTo: 'item-type', pathMatch: 'full' },
    { path: 'item-type', component: ItemTypeComponent, data: { breadcrumb: 'Add Item Types'} },
]