// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  LOGIN_PERSISTENCE_NAME: '_user_login',
  CONFIG_LOCATION: '../assets/data/config/config.json',
  FALLBACK_PROFILE_IMAGE_URL: 'https://cdn.browshot.com/static/images/not-found.png',
  MENU_LOCATION: '../assets/data/config/sidenav.menu.json',
  LOG_LEVEL: 0,
  LOG_LOADER_URL: '../assets/data/config/log-loader.json',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
