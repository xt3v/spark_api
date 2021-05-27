// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

//TODO -> Pull the environments from a dotenv for security purposes
export const environment = {
  production: false,
  APIEndpoint: 'http://172.105.88.80:8080/',
  APIv1Endpoint: 'http://172.105.88.80:8080/api/v1/',
  APIClientID : 'fbaPXGrD6wewVEqoOkJfvierIrYbnROPXMa8CDv5'
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
