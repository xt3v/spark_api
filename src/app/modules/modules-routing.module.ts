import { Routes } from '@angular/router';
import { AuthGuard } from '../core/auth-guards/auth.guards';
import { DashboardComponent } from './dashboard/dashboard.component';

export const ModulesRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: DashboardComponent, data: { breadcrumb: 'Home' } },
  {
    path: 'accounts',
    data: { breadcrumb: 'accounts' },
    loadChildren: () =>
      import(`./accounts/accounts.module`).then((m) => m.AccountsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'suppliers',
    data: { breadcrumb: 'suppliers' },
    loadChildren: () =>
      import(`./suppliers/suppliers.module`).then((m) => m.SuppliersModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'configs',
    data: { breadcrumb: 'Configs' },
    loadChildren: () =>
      import(`./configurations/configs.module`).then((m) => m.ConfigsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'warehouse',
    data: { breadcrumb: 'Warehouse' },
    loadChildren: () =>
      import(`./warehouse/warehouse.module`).then((m) => m.WarehouseModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'stockroom',
    data: { breadcrumb: 'Stockroom' },
    loadChildren: () =>
      import(`./stockroom/stockroom.module`).then((m) => m.StockroomModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'inventory',
    data: { breadcrumb: 'Inventory' },
    loadChildren: () =>
      import(`./inventory/inventory.module`).then((m) => m.InventoryModule),
    canActivate: [AuthGuard]
  }
]