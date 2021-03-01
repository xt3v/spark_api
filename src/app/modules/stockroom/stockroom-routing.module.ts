import { Routes } from '@angular/router';
import { AddStockroomComponent } from './add/add-stockroom.component';
import { StockroomListComponent } from './list/stockroom-list.component';
export const StockroomRoutes: Routes = [
    { path: '', redirectTo: 'add', pathMatch: 'full' },
    { path: 'add', component: AddStockroomComponent, data: { breadcrumb: 'Add Stockroom' } },
    { path: 'list', component: StockroomListComponent, data: { breadcrumb: 'Stockrooms' } },
    
]