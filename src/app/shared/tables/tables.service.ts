import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { switchMap, catchError } from 'rxjs/operators';
import { FiltersService } from '../filters/filters.service';
import { ToastNotificationsService } from '../toast-notifications/toast-notifications.service';

const endpointV1 = environment.APIv1Endpoint;

@Injectable({
  providedIn: 'root'
})
export class TablesService {

  actionsEvent$: EventEmitter<any> = new EventEmitter();
  deletedItem$: EventEmitter<any> = new EventEmitter();

  constructor(
    private _http: HttpClient,
    private _filtersService: FiltersService,
    private _toastService: ToastNotificationsService
  ) {

  }

  getList(typeUrl: string, page_size: number, page: number, filters: Array<any>, searchInput: string): Observable<any> {

    //const filterOpt = typeof filters !== 'undefined' && filters.length ? this.getFilters(filters) : '';
    const searchName = typeof searchInput !== undefined && searchInput !== null ? searchInput : null;

    return this._http.get<any>(endpointV1 + `${typeUrl}/?page_size=${page_size}&page=${page}&${filters}&name=${searchName}`);
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
    return this._http.delete<any>(`${endpointV1}${typeUrl}/${data.id}`).pipe(
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
