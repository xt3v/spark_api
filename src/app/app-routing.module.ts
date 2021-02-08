import { Routes } from '@angular/router';
// import { AuthGuard } from './core/auth-guards/auth.guard';
import { ErrorNotFoundComponent } from './core/errors/error-not-found/error-not-found.component';
import { AuthenticationComponent } from './core/authentication/authentication.component';
import { ModulesComponent } from './modules/modules.component';

export const AppRoutes: Routes = [
  // {
  //   path: '',
  //   component: ModulesComponent,
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: () =>
  //         import(`./modules/modules.module`).then((m) => m.ModulesModule),
  //       // canActivate: [AuthGuard]
  //     },
  //   ],
  // },
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(`./core/authentication/authentication.module`).then(
            (m) => m.AuthenticationModule
          ),
      },
    ],
  },
  {
    path: '404',
    component: ErrorNotFoundComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '404',
  },
];
