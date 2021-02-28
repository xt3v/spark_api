import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablesComponent } from './tables.component';
import { MytdComponent } from './mytd/mytd.component';
import { MycelldisplayComponent } from './mycelldisplay/mycelldisplay.component';
import { MypaginationComponent } from './mypagination/mypagination.component';



@NgModule({
  declarations: [
    TablesComponent,
    MytdComponent,
    MypaginationComponent,
    MycelldisplayComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TablesComponent,
    MytdComponent,
    MypaginationComponent,
    MycelldisplayComponent
  ]
})
export class TablesModule { } 
