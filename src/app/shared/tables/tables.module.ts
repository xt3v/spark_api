import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

//import { HttpClientModule } from '@angular/common/http';

import { TablesComponent } from './tables.component';
import { MytdComponent } from './mytd/mytd.component';
import { MycelldisplayComponent } from './mycelldisplay/mycelldisplay.component';
import { MypaginationComponent } from './mypagination/mypagination.component';
import { MytablefilterComponent } from './mytablefilter/mytablefilter.component';


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
    // HttpClientModule
  ],
  exports: [
    TablesComponent,
    MytdComponent,
    MypaginationComponent,
    MycelldisplayComponent
  ]
})
export class TablesModule { } 
