import { Routes } from '@angular/router';

import { ForgotComponent } from './forgot/forgot.component';
import { LockScreenComponent } from './lock-screen/lock-screen.component';
import { ResetComponent } from './reset/reset.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

export const AuthRoutes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgot-password', component: ForgotComponent },
  { path: 'reset-password', component: ResetComponent },
  { path: 'lockscreen', component: LockScreenComponent },
];
