import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';

import { ItemTypeComponent } from './item-type/item-type.component';
import { ConfigRoutes } from './configs-routing.module';
import { ItemConfigComponent } from './item-config/item-config.component';
import { BoxConfigComponent } from './box-config/box-config.component';


@NgModule({
  declarations: [ItemTypeComponent, ItemConfigComponent, BoxConfigComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ConfigRoutes),
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CoreModule,
  ]
})
export class ConfigsModule { }
