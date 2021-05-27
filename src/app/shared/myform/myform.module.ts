import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';

import { MyformComponent } from './myform.component';
import { MyinputComponent } from './myinput/myinput.component';
import { CardComponent } from '../card/card.component';
import { CardDropdownComponent } from '../card/card-dropdown/card-dropdown.component';
import { ModalsModule } from '../modals/modals.module';
import { MultiSelectModule } from '../ng-multi-select/multi-select.module';

@NgModule({
  declarations: [
    MyformComponent,
    MyinputComponent,
    CardComponent,
    CardDropdownComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ModalsModule,
    MultiSelectModule,
    FormsModule
  ],
  exports: [
    MyformComponent,
    MyinputComponent,
    CardComponent,
    CardDropdownComponent
  ]
})
export class MyformModule { }
