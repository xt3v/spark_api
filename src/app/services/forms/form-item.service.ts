import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormItemService {
  selectedTab: string = '';
  selectedTabChange: Subject<string> = new Subject<string>();
  // selectedTab: BehaviorSubject<string> | undefined;

  constructor(
    private _http: HttpClient,
  ) { 
    // this.selectedTab = new BehaviorSubject(this.tab);
    // this.selectedTabChange.subscribe((value) => {
    //   this.selectedTab = value;
    // })
  }

  postForm(isNew: boolean, data: any) {
    let request: Observable<any>;
    if (isNew) {
      request = this._http.post<any>(data.url, data.formData);
    } else {
      request = this._http.patch<any>(data.url, data.formData);
    }
    return request
  }

  formDropdownSelectedTab(data: string) {
    console.log('THE SELECTED TAB IN SERVICE', data);
    this.selectedTabChange.next(data);
  }

  getDropdownValues(url:string){
    return this._http.get<any>(url);
  }
}
