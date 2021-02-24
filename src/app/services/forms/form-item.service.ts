import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormItemService {

  constructor(
    private _http: HttpClient,
  ) { }

  postForm(isNew: boolean, data: any) {
    let request: Observable<any>;
    if (isNew) {
      request = this._http.post<any>(data.url, data.formData);
    } else {
      request = this._http.patch<any>(data.url, data.formData);
    }
    return request
  }
}
