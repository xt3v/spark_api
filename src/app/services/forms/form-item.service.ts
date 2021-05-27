import { Injectable } from '@angular/core';
import {  Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/internal/operators/tap';
import { ToastNotificationsService } from 'src/app/shared/toast-notifications/toast-notifications.service';
import { catchError } from 'rxjs/operators';
import { HttpService } from '../http/http-service.service';

@Injectable({
  providedIn: 'root',
})
export class FormItemService {
  selectedTab: string = '';
  selectedTabChange: Subject<string> = new Subject<string>();
  // selectedTab: BehaviorSubject<string> | undefined;

  constructor(
    private _http: HttpService,
    private _toastService: ToastNotificationsService
  ) { 
    // this.selectedTab = new BehaviorSubject(this.tab);
    // this.selectedTabChange.subscribe((value) => {
    //   this.selectedTab = value;
    // })
  }

  postForm(isNew: boolean, data: any) {
    let request: Observable<any>;
    if (isNew) {
      request = this._http.post<any>(data.url, data.formData)
        .pipe(
          tap(data => {
            this._toastService.showToast("Successfully added Record", "success");
          }),
          catchError((err, caught) => {
            this._toastService.showToast("Error Posting Record", "danger");
            return Observable.throw(err);
          })
        );
    } else {
      request = this._http.patch<any>(data.url, data.formData)
      .pipe(
        tap(data => {
          this._toastService.showToast("Successfully edited Record", "success");
        }),
        catchError((err, caught) => {
          this._toastService.showToast("Error editing Record", "danger");
          return Observable.throw(err);
        })
      );
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
