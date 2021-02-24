import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FormItemService {

  constructor(
    private _http: HttpClient,
  ) { }

    postForm(data: any) {
      return this._http.post<any>(data.url, data.formData);
    }
}
