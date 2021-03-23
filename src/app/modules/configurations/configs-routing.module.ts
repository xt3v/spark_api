import { Routes } from '@angular/router';
import { ItemTypeComponent } from './item-type/item-type.component';
import { ItemConfigComponent } from './item-config/item-config.component';
import { BoxConfigComponent } from './box-config/box-config.component';
import { ItemListComponent } from './item-config/list/item-list.component';
import { ItemTypeListComponent } from './item-type/list/item-type-list.component';
import { BoxConfigListComponent } from './box-config/list/box-config-list.component';
import { PayGoProviderComponent } from './pay-go-provider/pay-go-provider.component';
import { PayGoProviderListComponent } from './pay-go-provider/list/pay-go-provider-list.component';

export const ConfigRoutes: Routes = [
    { path: '', redirectTo: 'list-item-type', pathMatch: 'full' },
    { path: 'item-type', component: ItemTypeComponent, data: { breadcrumb: 'Add Item Types' } },
    { path: 'list-item-type', component: ItemTypeListComponent, data: {breadcrumb: 'List Item Types'}},
    { path: 'item-config', component: ItemConfigComponent, data: { breadcrumb: 'Add Item Configuration' } },
    { path: 'list-item-configs', component: ItemListComponent, data: { breadcrumb: 'List Item Configs' } },
    { path: 'box-config', component: BoxConfigComponent, data: { breadcrumb: 'Add Kit / Box Configuration' } },
    { path: 'list-box-config', component: BoxConfigListComponent, data: { breadcrumb: 'List Kit / Box Configuration' } },
    { path: 'pay-go-providers', component: PayGoProviderComponent, data: { breadcrumb: 'Add Pay Go Provider'}},
    { path: 'list-pay-go-providers', component: PayGoProviderListComponent, data: { breadcrumb: 'Pay Go Providers'}}
]