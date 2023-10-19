// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC399RqGSLd_GMTHOEyh3YvOZTpX1Mek4k",
  authDomain: "fir-recap-6affb.firebaseapp.com",
  projectId: "fir-recap-6affb",
  storageBucket: "fir-recap-6affb.appspot.com",
  messagingSenderId: "1020230274448",
  appId: "1:1020230274448:web:4f6bb4d330e383d83d3715"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;