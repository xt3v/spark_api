import { Component, Input, OnInit, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';
import { FiltersService } from '../filters.service';

@Component({
  selector: 'app-selected-filters',
  templateUrl: './selected-filters.component.html',
  styleUrls: ['../filters.component.scss']
})
export class SelectedFiltersComponent implements OnInit, OnChanges {

  @Input() selectedFiltersOptions: Array<any> = [];
  @Output() searchableFilterOptions: EventEmitter<any> = new EventEmitter();
  
  constructor(
    private _filterService: FiltersService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.searchableFilterOptions.emit(this.selectedFiltersOptions);
  }

  ngOnInit(): void {
    
  }

  removeFilter(key:number) {
    this.selectedFiltersOptions.splice(key, 1);
    this.searchableFilterOptions.emit(this.selectedFiltersOptions);

    if(!this.selectedFiltersOptions.length) {
      this._filterService.getJoinedFilters(this.selectedFiltersOptions);
    }
  }

  

}
