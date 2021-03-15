import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const endpointV1 = "https://api.spark.sisitech.dev/api/v1/";
const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: `Bearer micha`,
}

@Injectable()
export class FiltersService {
  submitFilters$: EventEmitter<any> = new EventEmitter();
  getFilters$: EventEmitter<any> = new EventEmitter();
  
  constructor(
    private _http: HttpClient,
  ) { }

  submitSelectedFilters(data:any, url:string) {
    this.submitFilters$.emit({data: data, url:url})
  }

  getFilters(data: any, url: string):Observable<any> {
    return this._http.get<any>(endpointV1 + `${url}?${data}`, { headers: headers });
  }

  getJoinedFilters(data: any) {
    this.getFilters$.emit(data);
  }
  
}
