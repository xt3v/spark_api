/** Angular imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

/** Custom modules */
import { ModalsModule } from './modals/modals.module';
import { MyformModule } from './myform/myform.module';
import { ToastNotificationsModule } from './toast-notifications/toast-notifications.module';

/** Components */
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { TablesModule } from './tables/tables.module';
import { AddButtonComponent } from './add-button/add-button.component';
import { FiltersModule } from './filters/filters.module';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { TextareaWithCountComponent } from './textarea-with-count/textarea-with-count.component';
import { MultiSelectModule } from './ng-multi-select/multi-select.module';
// import { CardComponent } from './card/card.component'
// import { CardDropdownComponent } from './card/card-dropdown/card-dropdown.component';

@NgModule({
  declarations: [
    BreadcrumbComponent, AddButtonComponent,
    SideMenuComponent, TextareaWithCountComponent ,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ModalsModule,
    MyformModule,
    TablesModule,
    FiltersModule,
    ToastNotificationsModule,
    MultiSelectModule
  ],
  exports: [
    FormsModule,
    MyformModule,
    ReactiveFormsModule,
    ModalsModule,
    TablesModule,
    FiltersModule,
    ToastNotificationsModule,
    BreadcrumbComponent,
    AddButtonComponent,
    SideMenuComponent,
    TextareaWithCountComponent,
    MultiSelectModule
  ],
})
export class SharedModule { }
