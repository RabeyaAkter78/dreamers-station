// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSxpXp_hvSgB-rcH84ad5gHBH1QVSm5z4",
  authDomain: "dreamers-station.firebaseapp.com",
  projectId: "dreamers-station",
  storageBucket: "dreamers-station.appspot.com",
  messagingSenderId: "232357560564",
  appId: "1:232357560564:web:006b3cd9601f63435f9ea1",
  measurementId: "G-8TWV11BSFF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;