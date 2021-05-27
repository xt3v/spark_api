import { Injectable, EventEmitter } from '@angular/core';


import { Observable, of } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { FiltersService } from '../filters/filters.service';
import { ToastNotificationsService } from '../toast-notifications/toast-notifications.service';
import { HttpService } from 'src/app/services';


@Injectable({
  providedIn: 'root'
})
export class TablesService {

  actionsEvent$: EventEmitter<any> = new EventEmitter();
  deletedItem$: EventEmitter<any> = new EventEmitter();

  constructor(
    private _httpService : HttpService,
    private _filtersService: FiltersService,
    private _toastService: ToastNotificationsService
  ) {

  }

  getList(typeUrl: string, page_size: number, page: number, filters: Array<any>, searchInput: string): Observable<any> {

    //const filterOpt = typeof filters !== 'undefined' && filters.length ? this.getFilters(filters) : '';
    const searchName = typeof searchInput !== undefined && searchInput !== null ? searchInput : null;

    return this._httpService.get<any>(`${typeUrl}/?page_size=${page_size}&page=${page}&${filters}&name=${searchName}`);
  }

  emitAction(name: string, data: any) {
    console.log('THE NAME', name, 'THE DATA', data);
    this.actionsEvent$.emit({ name: name, data: data })
  }

  //TO REMOVE
  // getFilters(filters:any) {
  //   let filterOpt: Array<any> = [];
  //   filters.map((filter:any) => {
  //     filterOpt.push(filter.item_prop);
  //   });
  //   return filterOpt.join("&");
  // }

  delete(data: any, typeUrl: string) {
    //TODO -> Send an alert if delete not possible
    return this._httpService.delete<any>(`${typeUrl}/${data.id}`).pipe(
      switchMap(async () => {
        this.deletedItem$.emit(data)
        this._toastService.showToast("Successfully deleted record", 'info')
      }
      ),
      catchError((err, caught) => {
        this._toastService.showToast("Error deleting record", 'danger')
        return Observable.throw(err)
      })
    );
  }
}
