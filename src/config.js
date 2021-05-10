import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCtQv1lwoKjwwui7LUH3QdW_AjXKDiziXs",
  authDomain: "ack-insurance-9663b.firebaseapp.com",
  projectId: "ack-insurance-9663b",
  storageBucket: "ack-insurance-9663b.appspot.com",
  messagingSenderId: "1045171823215",
  appId: "1:1045171823215:web:98c7458dc8689ec450239a",
  measurementId: "G-PW4WBDV0P9"
})
export default app;
export const auth = app.auth();