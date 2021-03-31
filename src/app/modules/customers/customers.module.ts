import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { CustomersComponent } from './list/customers.component';
import { CustomerRoutes } from './customers-routing.module';
import { CustomersAddComponent } from './add/customers-add.component';

@NgModule({
  declarations: [CustomersComponent, CustomersAddComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(CustomerRoutes),
    SharedModule,
    CoreModule
  ]
})
export class CustomersModule { }
