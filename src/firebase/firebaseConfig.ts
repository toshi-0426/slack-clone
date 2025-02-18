// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_C3w1tPljiJ9wTfFaEouZJrrKI8b5PV4",
  authDomain: "slack-clone-15df3.firebaseapp.com",
  projectId: "slack-clone-15df3",
  storageBucket: "slack-clone-15df3.firebasestorage.app",
  messagingSenderId: "223797076485",
  appId: "1:223797076485:web:e723c8a9cef2f4cbb2f26c"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export { firebaseApp };