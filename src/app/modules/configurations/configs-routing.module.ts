import { Routes } from '@angular/router';
import { ItemTypeComponent } from './item-type/item-type.component';
import { ItemConfigComponent } from './item-config/item-config.component';
import { BoxConfigComponent } from './box-config/box-config.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemTypeListComponent } from './item-type/list/item-type-list.component';
import { BoxConfigListComponent } from './box-config/list/box-config-list.component';

export const ConfigRoutes: Routes = [
    { path: '', redirectTo: 'item-type', pathMatch: 'full' },
    { path: 'item-type', component: ItemTypeComponent, data: { breadcrumb: 'Add Item Types' } },
    { path: 'list-item-type', component: ItemTypeListComponent, data: {breadcrumb: 'List Item Types'}},
    { path: 'item-config', component: ItemConfigComponent, data: { breadcrumb: 'Add Item Configuration' } },
    { path: 'list-item-configs', component: ItemListComponent, data: { breadcrumb: 'List Item Configs' } },
    { path: 'box-config', component: BoxConfigComponent, data: { breadcrumb: 'Add Kit / Box Configuration' } },
    { path: 'list-box-config', component: BoxConfigListComponent, data: { breadcrumb: 'List Kit / Box Configuration' } },
]