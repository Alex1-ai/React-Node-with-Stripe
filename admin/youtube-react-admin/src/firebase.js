// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXX70ce3jhrVLcB0X1Ov8hbk4OfEsVKGc",
  authDomain: "ecomflutter-df9fb.firebaseapp.com",
  databaseURL: "https://ecomflutter-df9fb-default-rtdb.firebaseio.com",
  projectId: "ecomflutter-df9fb",
  storageBucket: "ecomflutter-df9fb.appspot.com",
  messagingSenderId: "334785862140",
  appId: "1:334785862140:web:b76d14d3714e02d24bba79",
  measurementId: "G-B3DLXLV3K6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app;