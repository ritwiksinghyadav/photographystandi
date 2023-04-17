// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDEF6hQfryRSjeRMNE3vFWXsTbPsFeLQ3Q",
    authDomain: "kartiks-standi.firebaseapp.com",
    projectId: "kartiks-standi",
    storageBucket: "kartiks-standi.appspot.com",
    messagingSenderId: "523954713733",
    appId: "1:523954713733:web:443a67daaccd76731465ec",
    measurementId: "G-GS0ZR0PT7D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const storage =getStorage(app)
