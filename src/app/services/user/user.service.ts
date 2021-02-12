import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { StorageService } from 'src/app/services';

const clientId = environment.APIClientID;
const endpoint = environment.APIEndpoint;
const endpointV1 = environment.APIv1Endpoint;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: any;

  constructor(
    private _http: HttpClient,
    private _storageService: StorageService
  ) {}

  userProfile(): Observable<any> {
    return this._http.get<any>(endpointV1 + 'users/me').pipe(
      map(res => {
        this._storageService.setItem('userDetails', JSON.stringify(res));
        return res;
      })
    );
  }

  editUserProfile(data: any) {
    return this._http.patch(endpointV1 + 'users/me', data).pipe(
      map(res => {
        this._storageService.setItem('userDetails', JSON.stringify(res));
        return res;
      })
    );
  }

  uploadUserImage(data: any) {
    // const options = {
    //   params: new HttpParams(),
    //   reportProgress: true,
    // }
    return this._http.patch<any>(endpointV1 + 'users/me/profile', data).pipe(
      map(res => {
        // localStorage.setItem('userDetails', JSON.stringify(res));
        this._storageService.setItem('userDetails', JSON.stringify(res));
        return res;
      })
    );
  }
}
