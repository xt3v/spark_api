import { Routes } from '@angular/router';
import { AddItemComponent } from './items/add/add-item.component';
import { ListItemComponent } from './items/list/list-item.component';
import { EditComponent } from './items/edit/edit.component';
import { MoveStockComponent } from './items/move-stock/move-stock.component';
import { BoxesComponent } from './boxes/boxes.component';
import { ListBoxesComponent } from './boxes/list/list.component';
import { AuthGuard } from 'src/app/core/auth-guards/auth.guards';
import { ItemHistoryComponent } from './items/history/history-item.component';

export const InventoryRoutes: Routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'add', component: AddItemComponent, data: { breadcrumb: 'Add Items' } },
    { path: 'list', component: ListItemComponent, data: {breadcrumb: 'List Items'}},
    { path: 'edit', component: EditComponent, data: {breadcrumb: 'Edit Item'}},
    { path: 'move', component: MoveStockComponent, data: {breadcrumb: 'Move Stock'}},
    { path: 'check-in',  component: BoxesComponent, data: {breadcrumb: 'Check-in Box'}},
    { path: 'list-boxes',  component: ListBoxesComponent, data: {breadcrumb: 'List Boxes'}},
    { path: 'item-history', component: ItemHistoryComponent, data : {breadcrump :'Item History'} },
    {
        path: 'products',
        data: { breadcrumb: 'products' },
        loadChildren: () =>
          import(`./products/products.module`).then((m) => m.ProductsModule),
        canActivate: [AuthGuard]
    },
    
]