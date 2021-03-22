import { Routes } from '@angular/router';
import { AddItemComponent } from './items/add/add-item.component';
import { ListItemComponent } from './items/list/list-item.component';
import { EditComponent } from './items/edit/edit.component';
import { MoveStockComponent } from './items/move-stock/move-stock.component';

export const InventoryRoutes: Routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'add', component: AddItemComponent, data: { breadcrumb: 'Add Items' } },
    { path: 'list', component: ListItemComponent, data: {breadcrumb: 'List Items'}},
    { path: 'edit', component: EditComponent, data: {breadcrumb: 'Edit Item'}},
    { path: 'move', component: MoveStockComponent, data: {breadcrumb: 'Move Stock'}}
]