// v9 compat packages are API compatible with v8 code
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyDQltCpinCVUFUfEEIlK6k3u8Y8LIOMAzM",
  authDomain: "e-commerce-1-umang.firebaseapp.com",
  projectId: "e-commerce-1-umang",
  storageBucket: "e-commerce-1-umang.appspot.com",
  messagingSenderId: "405821873005",
  appId: "1:405821873005:web:a6cedc79ff0eec6c671864",
  measurementId: "G-Z8EMBJ3WVS",
};

const firebaseApp = firebase.initializeApp(config);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
