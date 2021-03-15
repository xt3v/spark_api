import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { take } from 'rxjs/operators';
import { TablesService } from '../../tables/tables.service';
import { FiltersService } from '../filters.service';

@Component({
  selector: 'app-submit-filters',
  templateUrl: './submit-filters.component.html',
  styleUrls: ['../filters.component.scss']
})
export class SubmitFiltersComponent implements OnInit, OnDestroy {
  @Input() filterUrl: string = '';
  private selectedFilters: any;
  private urlToGetFilterData: string = '';
  public isDisabled: boolean = true;
  public selectedFiltersSubscriber: any;

  constructor(
    private _filterService: FiltersService,
    private _tableService: TablesService
  ) { }

  ngOnInit(): void {
    this.selectedFiltersSubscriber = this._filterService.submitFilters$.subscribe(data => {

      data.data === undefined || !data.data.length ? this.isDisabled = true : this.isDisabled = false;

      if (data) {
        this.selectedFilters = data.data;
        this.urlToGetFilterData = data.url;
      } 
    })
  }

  submitFilters() {
    if(this.selectedFilters === undefined && this.urlToGetFilterData === undefined ) {
      return;
    }
    
    let filters:any = [];
    let data = this.selectedFilters;
    const url = this.urlToGetFilterData
    
    data.map((item:any) => {
      let arr = {}
      let filterItem = `${item[0]}=${item[1]}` 
      arr = filterItem;
      filters.push(arr);
    });

    data = filters.join("&");

    this._filterService.getJoinedFilters(data);
    
  }

  ngOnDestroy(): void {
    this.selectedFiltersSubscriber.unsubscribe();
  }

}
