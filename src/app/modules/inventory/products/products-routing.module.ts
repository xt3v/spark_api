import { Routes } from '@angular/router';
import { AddProductsComponent } from './add-products/add-products.component';
import { ListProductsComponent } from './list-products/list-products.component';

export const InventoryProductsRoutes: Routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'add', component: AddProductsComponent, data: { breadcrumb: 'Add' } },
    { path: 'list', component: ListProductsComponent, data: { breadcrumb: 'List' } },
]