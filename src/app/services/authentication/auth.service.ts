import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { concatMap, map, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';

import { StorageService, UserService } from 'src/app/services';

const clientId = environment.APIClientID;
const endpoint = environment.APIEndpoint;
const endpointV1 = environment.APIv1Endpoint;
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: any;
  constructor(
    private _route: Router,
    private _userService: UserService,
    private _storageService: StorageService,
    private _http: HttpClient,
    private _cookieService: CookieService
  ) {}

  isLoggedIn(): boolean {
    //check if the user is logged in using an api generated token
    const tokenItems = JSON.parse(
      this._storageService.getItem('token') || '{}'
    );
    const token = tokenItems !== null ? tokenItems.token : null;

    if (token != null && token != undefined) {
      //to do if user not verified
      return true;
    }

    return false;
  }

  hasAdminAccess(): boolean {
    return this.getUserProfile().role == 'A' ? true : false;
  }

  hasWebDashboardAccess(): boolean {
    return (
      //this.getUserProfile().role == 'S' ||
      this.getUserProfile().role == 'A' && this.getUserProfile().role !== null
        ? true
        : false
    );
  }

  isVerifiedUser() {
    return this.getUserProfile().verified == 'true' ? true : false;
  }

  getUserProfile() {
    // this._storageService.watchStorage().subscribe((data:string) => {
    //this.user = JSON.parse(localStorage.getItem('userDetails'));
    this.user = JSON.parse(this._storageService.getItem('userDetails') || '{}');

    if (this.user !== {} || this !== null) {
      return this.user;
    }
    return;
  }

  //TODO -> Remove if one needs not to signup
  // signUp(data: any) {
  //   return this._http.post<any>(endpointV1 + 'users/', data).pipe(
  //     map((res) => {
  //       const token = res.token.access_token;
  //       const tokenExpiry = res.token.expires_in;
  //       const tokenRefresh = res.token.refresh_token;

  //       let tokenItems = { token, tokenExpiry, tokenRefresh };

  //       localStorage.setItem('token', JSON.stringify(tokenItems));

  //       return res;
  //     })
  //   );
  // }

  //TODO -> Remove if there's no 2-factor-authentication with SMS
  // verifyOTP(data: any) {
  //   return this._http.post<any>(endpointV1 + 'users/verify-otp/', data);
  // }

  // requestOTP(data: any) {
  //   let body = {
  //     username: data,
  //   };
  //   return this._http.post<any>(endpointV1 + 'users/request-otp/', body);
  // }

  signIn(data: any) {
    data.grant_type = 'password';
    data.client_id = clientId;

    const rememberMe = data.remember_me;

    if (rememberMe) {
      this._cookieService.set('rememberMe', rememberMe);
      this._storageService.setItem('rememberMe', rememberMe);
    }

    return this._http.post<any>(endpoint + 'auth/token/', data).pipe(
      switchMap(res => {
        const token = res.access_token;
        const tokenExpiry = res.expires_in;
        const tokenRefresh = res.refresh_token;
        let tokenItems;

        tokenItems = { token, tokenExpiry, tokenRefresh };

        if (rememberMe) {
          const loggedInTime = Date.now();
          const refreshTokenTime = Math.max(loggedInTime + 3600000, 3600000);
          tokenItems = { token, tokenExpiry, tokenRefresh, refreshTokenTime };
        }

        // localStorage.setItem('token', JSON.stringify(tokenItems));
        this._storageService.setItem('token', JSON.stringify(tokenItems));

        return this._userService.userProfile();
      }),
      concatMap(() => {
        return this._route.navigate(['/home']);
      })
    );
  }

  refreshToken(data: any) {
    data.grant_type = 'refresh_token';
    data.client_id = clientId;

    return this._http.post<any>(`${endpoint}auth/token/`, data).pipe(
      map(res => {
        const token = res.access_token;
        const tokenExpiry = res.expires_in;
        const tokenRefresh = res.refresh_token;

        let tokenItems;
        tokenItems = { token, tokenExpiry, tokenRefresh };

        const rememberMe =
          this._cookieService.get('rememberMe') ||
          // localStorage.getItem('rememberMe');
          this._storageService.getItem('rememberMe');
        if (rememberMe) {
          const refreshTokenInitialTime = Date.now();
          const refreshTokenTime = Math.max(
            refreshTokenInitialTime + 3600000,
            3600000
          );
          tokenItems = { token, tokenExpiry, tokenRefresh, refreshTokenTime };
        }

        //localStorage.setItem('token', JSON.stringify(tokenItems));
        this._storageService.setItem('token', JSON.stringify(tokenItems));
      })
    );
  }

  resetPassowrd(data: any) {
    return this._http.post<any>(endpointV1 + 'users/reset-password', data);
  }

  forgotPassword(data: any) {
    return this._http.post<any>(endpointV1 + 'users/forgot-password', data);
  }

  changePassword(data: any) {
    return this._http.put<any>(endpointV1 + 'users/me/change-password', data);
  }

  signOut() {
    localStorage.clear();
    sessionStorage.clear();
    this._cookieService.delete('rememberMe');
    this._route.navigate(['/signin']);
  }
}
