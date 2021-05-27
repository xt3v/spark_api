import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/services';


@Injectable()
export class FiltersService {
  submitFilters$: EventEmitter<any> = new EventEmitter();
  getFilters$: EventEmitter<any> = new EventEmitter();
  
  constructor(
    private _http: HttpService,
  ) { }

  submitSelectedFilters(data:any, url:string) {
    this.submitFilters$.emit({data: data, url:url})
  }

  getFilters(data: any, url: string):Observable<any> {
    return this._http.get<any>(`${url}?${data}`);
  }

  getJoinedFilters(data: any) {
    this.getFilters$.emit(data);
  }
  
}
