import { Routes } from '@angular/router';
import { AddStockroomComponent } from './add/add-stockroom.component';

export const StockroomRoutes: Routes = [
    { path: '', redirectTo: 'add', pathMatch: 'full' },
    { path: 'add', component: AddStockroomComponent, data: { breadcrumb: 'Add Stockroom' } },
]