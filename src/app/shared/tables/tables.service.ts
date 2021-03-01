import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const endpointV1 = 'https://api.spark.sisitech.dev/api/v1/';
const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: `Bearer micha`,
}

@Injectable({ providedIn: 'root' })
export class TablesService {

  actionsEvent$: EventEmitter<any> = new EventEmitter()

  constructor(private _http: HttpClient) {

  }

  getList(typeUrl: string, page_size: number, page: number, filters: Array<any>, searchInput:string,): Observable<any> {
    
    const filterOpt = typeof filters !== 'undefined' && filters.length ? this.getFilters(filters) : '';
    const searchName  = typeof searchInput !== undefined && searchInput !== null ? searchInput : null;

    return this._http.get<any>(endpointV1 + `${typeUrl}/?page_size=${page_size}&page=${page}&${filterOpt}=true&name=${searchName}`, { headers: headers });
  }

  // getListWithFilters(typeUrl: string, page_size: number, page: number, filters: Array<any>) : Observable<any> {
    
  //   const filterOpt = this.getFilters(filters);

  //  return this._http.get<any>(endpointV1 + `${typeUrl}/?page_size=${page_size}&page=${page}&${filterOpt}=true`, { headers: headers });
  // }

  // searchValue(typeUrl:string, page_size: number, name:string, filters:Array<any>) {
  //   if (filters.length) {
  //     const filterOpt = this.getFilters(filters);
  //     return this._http.get<any>(endpointV1 + `${typeUrl}/?page_size=${page_size}&name=${name}&${filterOpt}=true`, { headers: headers });
  //   }
  //   return this._http.get<any>(endpointV1 + `${typeUrl}/?page_size=${page_size}&name=${name}`, { headers: headers });
  // }

  emitAction(name: string, data: any) {
    console.log('THE NAME', name, 'THE DATA', data);
    // if (name === 'delete') {

    // }
    this.actionsEvent$.emit({ name: name, data: data })
  }

  getFilters(filters:any) {
    let filterOpt: Array<any> = [];
    filters.map((filter:any) => {
      filterOpt.push(filter.item_prop);
    });
    return filterOpt.join("&");
  }

  delete(item: any, typeUrl:string): Observable<any>  {
    return this._http.delete<any>(endpointV1 + `${typeUrl}/${item.id}`, { headers: headers });
  }

}