import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { TablesComponent } from './tables.component';
import { MytdComponent } from './mytd/mytd.component';
import { MycelldisplayComponent } from './mycelldisplay/mycelldisplay.component';
import { MypaginationComponent } from './mypagination/mypagination.component';
import { MytablefilterComponent } from './mytablefilter/mytablefilter.component';
import { CollapsibleFiltersComponent } from '../filters/collapsible-filters/collapsible-filters.component';
import { DropdownFiltersComponent } from '../filters/dropdown-filters/dropdown-filters.component';
import { MyformComponent } from '../myform/myform.component';
import { MyinputComponent } from '../myform/myinput/myinput.component';
import { FiltersModule } from '../filters/filters.module';
import { CardComponent } from '../card/card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    TablesComponent,
    MytdComponent,
    MypaginationComponent,
    MycelldisplayComponent,
    MytablefilterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule,
    FiltersModule,
    FontAwesomeModule
  ],
  exports: [
    TablesComponent,
    MytdComponent,
    MypaginationComponent,
    MycelldisplayComponent
  ]
})
export class TablesModule { }
