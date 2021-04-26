import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { FooterComponent } from './structure/footer/footer.component';
import { HeaderComponent } from './structure/header/header.component';
import { NavbarComponent } from './structure/navbar/navbar.component';
import { ErrorNotFoundComponent } from './errors/error-not-found/error-not-found.component';
import { LockScreenComponent } from './authentication/lock-screen/lock-screen.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    ErrorNotFoundComponent,
    LockScreenComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [FooterComponent, NavbarComponent]
})
export class CoreModule { }
