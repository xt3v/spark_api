import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersComponent } from './filters.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyformModule } from './myform/myform.module';
import { SelectedFiltersComponent } from './selected-filters/selected-filters.component';
import { SubmitFiltersComponent } from './submit-filters/submit-filters.component';
import { CollapsibleFiltersComponent } from './collapsible-filters/collapsible-filters.component';
import { DropdownFiltersComponent } from './dropdown-filters/dropdown-filters.component';
import { HttpClientModule } from '@angular/common/http';
import { FiltersService } from './filters.service';



@NgModule({
  declarations: [FiltersComponent, SelectedFiltersComponent, SubmitFiltersComponent, CollapsibleFiltersComponent, DropdownFiltersComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MyformModule,
    HttpClientModule
  ],
  exports: [
    FiltersComponent,
    SelectedFiltersComponent,
    SubmitFiltersComponent,
    CollapsibleFiltersComponent,
    DropdownFiltersComponent
  ],
  providers: [FiltersService]
})
export class FiltersModule { }
