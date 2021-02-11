import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRoutes } from './authentication-routing.module';

import { CoreModule } from '../core.module';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(AuthRoutes),
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
  ],
})
export class AuthenticationModule {}
