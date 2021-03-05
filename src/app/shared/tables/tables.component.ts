import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, switchMap, take } from 'rxjs/operators';

import { TablesService } from './tables.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
  // providers: [TablesService]
})
export class TablesComponent implements OnInit {
  public searchForm!: FormGroup;
  public filterForm!: FormGroup;

  _headers: Array<any> = [];
  selectedFilterOptions:Array<any> = [];

  @Input()
  listTypeUrl!: string;

  @Input() tableFilters: Array<any> = []

  @Input()
  page_size: number = 10

  @Input()
  showNumbering: boolean = true

  @Output()
  actionsEvent: EventEmitter<any> = new EventEmitter()


  @Input()
  set headers(value) {
    this._headers = value;
    this.dummyData = Array.from({ length: this.page_size }, (_, x) => x).map(h => {
      return { dummy: "" }
    });
  }


  get headers() {
    return this._headers
  }
  page: number = 1;
  dummyData: any[] = []
  loading: boolean = false;
  results: any[] = []
  resultsMeta: any;
  actionsSubscription: any;
  deleteSubscription: any;
  
  liveSearchData: string = '';

  constructor(
    private _tableService: TablesService,
    private fb: FormBuilder,
  ) {
  }


  ngOnInit(): void {
    this.searchForm = this.fb.group({
      search: '',
    });
    this.getTableData();
    this.actionsSubscription = this._tableService.actionsEvent$.subscribe(event => {
      this.actionsEvent.emit(event)
    });

    this.deleteSubscription = this._tableService.deletedItem$.subscribe(item => {
      console.log('THE DELETED ITEM', item);
      if (this.resultsMeta.count > this.page_size && this.resultsMeta.count !== this.page_size) {
        this.getTableData();
      } else {
        const ind = this.results.indexOf(item);
        this.results.splice(ind, 1);
        this.resultsMeta.count = this.results.length;
      }
    });
  }

  ngOnDestroy() {
    const subscriptions = [this.actionsSubscription, this.deleteSubscription];
    subscriptions.forEach(subs => {
      if (subs) {
        subs.unsubscribe();
      }
    })
    // if (this.actionsSubscription) {
    //   this.actionsSubscription.unsubscribe();
    // }
    // if(this.deleteSubscription) {
    //   this.deleteSubscription.unsubscribe();
    // }
  }


  liveTableSearch(value:string):void {
    this.searchForm.get('search')?.valueChanges.pipe(
      debounceTime(500),
      switchMap( async (data) => {
        console.log('HERE', typeof data)
        if (typeof data === 'string') {
          this.liveSearchData = data.toLowerCase().trim();
        }
        return this.getTableData();
      })
    )
    .pipe(take(1))
    .subscribe ( () => {})
  }

  clearLiveTableSearch() {
    this.liveSearchData='';
    return this.searchForm.reset();
  }

  setLoaderStatus(status: boolean): void {
    this.loading = status;
  }
  onPageSelect(page: number) {
    this.page = page
    this.getTableData()
  }
  get tableHeaders(): any[] {
    return this.headers
  }

  tableMetaData(meta:any):void {
    if (meta.hasOwnProperty("next")) {
      this.resultsMeta = {
        next: meta.next,
        prev: meta.previous,
        count: meta.count
      }
    }
  }
 
  getTableData() {
    this.setLoaderStatus(true);

    this._tableService.getList(this.listTypeUrl, this.page_size, this.page, this.selectedFilterOptions, this.liveSearchData)
      .pipe(take(1))
      .subscribe((res) => {
        this.setLoaderStatus(false)
        this.results = res.results;
        console.log("REACHERS HERE", this.results);
        this.tableMetaData(res);
        // if (res.hasOwnProperty("next")) {
        //   this.resultsMeta = {
        //     next: res.next,
        //     prev: res.previous,
        //     count: res.count
        //   }
        // }
      }, error => {
        console.log(error)
        this.setLoaderStatus(false)
      });
  }

  getTableDataWithFilters() {
    this.getTableData();
  }

  onFilterSelected(filters:Array<any>) {
    filters.map(item => {
      item.item_prop = item.item_text.toLowerCase().split(" ").join("_");
    });
    this.selectedFilterOptions = filters;
    this.getTableDataWithFilters();
  }




}
