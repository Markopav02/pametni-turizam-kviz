// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyCSQN0BOgL7tz_s1IrsdZSSalGFUMm0Jzg",
  authDomain: "pametni-turizam-kviz.firebaseapp.com",
  databaseURL: "https://pametni-turizam-kviz-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pametni-turizam-kviz",
  storageBucket: "pametni-turizam-kviz.firebasestorage.app",
  messagingSenderId: "975529379794",
  appId: "1:975529379794:web:e455044a0478c6936d2a0b",
  measurementId: "G-L81H7Q6H87"
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
