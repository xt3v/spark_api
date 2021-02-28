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

  getList(typeUrl: string, page_size: number, page: number): Observable<any> {
    return this._http.get<any>(endpointV1 + `${typeUrl}/?page_size=${page_size}&page=${page}`, { headers: headers });
  }

  emitAction(name: string, data: any) {
    this.actionsEvent$.emit({ name: name, data: data })
  }

}