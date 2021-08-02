var firebaseConfig = {
  apiKey: "AIzaSyDtwAYrR9OerVPGcBS2vqID1ClwChHpDvM",
  authDomain: "web-shopjs.firebaseapp.com",
  projectId: "web-shopjs",
  storageBucket: "web-shopjs.appspot.com",
  messagingSenderId: "509043042170",
  appId: "1:509043042170:web:26fad8b911385a04e2d8c3",
  measurementId: "G-7BYE1ECHNR",
};
// ! Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db = firebase.firestore();
