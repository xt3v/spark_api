import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from './list-products/list-products.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { InventoryProductsRoutes } from './products-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';




@NgModule({
  declarations: [ListProductsComponent, AddProductsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(InventoryProductsRoutes),
    SharedModule
  ]
})
export class ProductsModule { }
