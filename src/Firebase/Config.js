import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/storage';  // <----

const firebaseConfig = {
    apiKey: "AIzaSyDaozPS82X-Sj8FX113v2aJD55c1UMu3Hc",
    authDomain: "today-progress.firebaseapp.com",
    databaseURL: "https://today-progress-default-rtdb.firebaseio.com",
    projectId: "today-progress",
    storageBucket: "today-progress.appspot.com",
    messagingSenderId: "704557627785",
    appId: "1:704557627785:web:5738d6e4a411934a65c958",
    measurementId: "G-DRG0395BRL"
  };
//   const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage().ref();
const projectfirestore = firebase.firestore();
// var storage = require('@google-cloud/storage')


export {projectStorage , projectfirestore};