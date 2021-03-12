import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, switchMap, take } from 'rxjs/operators';
import { FiltersService } from './filters.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  @Input() isInDropdown: boolean = true;
  @Input() url: string = '';
  @Input() filterUrl: string = '';
  @Input() formItems: any;
  @Input() formGroupOrder:any;
  @Output() selectedFilters: EventEmitter<any> = new EventEmitter();
  

  public searchForm!: FormGroup;
  public selectedFiltersOptions: any;
  public enableSubmitFilterButton: boolean = false;


  constructor(
    private fb: FormBuilder,
    private _filterService:FiltersService
  ) { }

  ngOnInit(): void {
  }

  onValidatedData(data:any){
    this.selectedFiltersOptions = Object.entries(data).filter( (filter:any) => {
      return filter[1] !== '' && filter[1] !== null
    });
  }

  searchFilters(data:any) {
   this._filterService.submitSelectedFilters(data, this.filterUrl)
  };
}
