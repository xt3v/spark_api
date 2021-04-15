import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryRoutes } from './inventory-routing.modules';

import { AddItemComponent } from './items/add/add-item.component';
import { ListItemComponent } from './items/list/list-item.component';
import { CoreModule } from 'src/app/core/core.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditComponent } from './items/edit/edit.component';
import { MoveStockComponent } from './items/move-stock/move-stock.component';
import { BoxesComponent } from './boxes/boxes.component';
import { ListBoxesComponent } from './boxes/list/list.component';




@NgModule({
  declarations: [AddItemComponent, ListItemComponent, EditComponent, MoveStockComponent, BoxesComponent, ListBoxesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(InventoryRoutes),
    SharedModule,
    CoreModule,
  ]
})
export class InventoryModule { }
