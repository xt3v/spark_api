import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { storeFields } from './configs';
import { take } from 'rxjs/operators';

import { TablesService } from './tables.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
  providers: [TablesService]
})
export class TablesComponent implements OnInit {
  _headers: Array<any> = []

  @Input()
  listTypeUrl!: string;

  @Input()
  page_size: number = 5

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

  constructor(
    private _tableService: TablesService
  ) {
  }


  ngOnInit(): void {
    this.getTableData();
    this.actionsSubscription = this._tableService.actionsEvent$.subscribe(event => {
      // console.log(event)
      this.actionsEvent.emit(event)
    })
  }

  ngOnDestroy() {
    if (this.actionsSubscription) {
      this.actionsSubscription.unsubscribe()
    }
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

  getTableData() {
    this.setLoaderStatus(true)
    this._tableService.getList(this.listTypeUrl, this.page_size, this.page)
      .pipe(take(1))
      .subscribe((res) => {
        this.setLoaderStatus(false)
        this.results = res.results;
        if (res.hasOwnProperty("next")) {
          this.resultsMeta = {
            next: res.next,
            prev: res.previous,
            count: res.count
          }
        }
      }, error => {
        console.log(error)
        this.setLoaderStatus(false)
      });
  }

  asIsOrder(a: any, b: any) {
    return 1;
  }




}
