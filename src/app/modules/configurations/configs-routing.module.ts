import { Routes } from '@angular/router';
import { ItemTypeComponent } from './item-type/item-type.component';
import { ItemConfigComponent } from './item-config/item-config.component';
import { BoxConfigComponent } from './box-config/box-config.component';
import { ItemListComponent } from './item-config/list/item-list.component';
import { ItemTypeListComponent } from './item-type/list/item-type-list.component';
import { BoxConfigListComponent } from './box-config/list/box-config-list.component';
import { KitConfigComponent } from './kit-config/kit-config.component';
import { KitConfigListComponent } from './kit-config/list/kit-config-list/kit-config-list.component';
import { PayGoProviderComponent } from './pay-go-provider/pay-go-provider.component';
import { PayGoProviderListComponent } from './pay-go-provider/list/pay-go-provider-list.component';
import { PriceGroupListComponent } from './price-group/list/price-group-list.component';
import { PriceGroupComponent } from './price-group/price-group.component';
import { ProductConfigListComponent } from './product-config/list/product-config-list.component';
import { ProductConfigComponent } from './product-config/product-config.component';

export const ConfigRoutes: Routes = [
    { path: '', redirectTo: 'list-item-type', pathMatch: 'full' },
    { path: 'item-type', component: ItemTypeComponent, data: { breadcrumb: 'Add Item Types' } },
    { path: 'list-item-type', component: ItemTypeListComponent, data: {breadcrumb: 'List Item Types'}},
    { path: 'item-config', component: ItemConfigComponent, data: { breadcrumb: 'Add Item Configuration' } },
    { path: 'list-item-configs', component: ItemListComponent, data: { breadcrumb: 'List Item Configs' } },
    { path: 'kit-config', component: KitConfigComponent, data: { breadcrumb: 'Add Kit Configuration' } },
    { path: 'list-kit-config', component: KitConfigListComponent, data: { breadcrumb: 'List Kit Configuration' } },
    { path: 'box-config', component: BoxConfigComponent, data: { breadcrumb: 'Add Box Configuration' } },
    { path: 'list-box-config', component: BoxConfigListComponent, data: { breadcrumb: 'List Box Configuration' } },
    { path: 'pay-go-providers', component: PayGoProviderComponent, data: { breadcrumb: 'Add Pay Go Provider'}},
    { path: 'list-pay-go-providers', component: PayGoProviderListComponent, data: { breadcrumb: 'Pay Go Providers'}},
    { path: 'list-price-groups', component: PriceGroupListComponent, data: {breadcrumb: 'Price Groups'}},
    { path: 'price-group', component: PriceGroupComponent, data: {breadcrumb: 'Add Price Group'}},
    { path: 'list-product-configs', component: ProductConfigListComponent, data: {breadcrumb: 'Product Configuration'}},
    { path: 'product-config', component: ProductConfigComponent, data: {breadcrumb: 'Add Product Configuration'}},
]