// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  URL_API: 'https:gateway.marvel.com/v1/public/',
  PUBLIC_KEY: '755a7f9bcaff2a14a6ea94afcda366b0',
  HASH: 'a0025515cbdcbf8a3694176e3bcdc57d',
  settings: {
    appErrorPrefix: '[Angular Marvel Error] ',
    appTitle: 'Angular Marvel',
    version: '1.4.0',
    charactersLimit: 20
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
