import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

export const ModulesRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: DashboardComponent },
]