import { Routes } from '@angular/router';
import { AuthGuard } from '../core/auth-guards/auth.guards';
import { ItemTypeComponent } from './configurations/item-type/item-type.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const ModulesRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: DashboardComponent },
    {
        path: 'configs',
        loadChildren: () =>
          import(`./configurations/configs.module`).then((m) => m.ConfigsModule),
          canActivate: [AuthGuard]
    }
]