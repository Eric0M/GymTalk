// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwbeLQDBtm9aPOzj66ABHcQ_9hDgzLrzg",
  authDomain: "gymtalk-9fe96.firebaseapp.com",
  projectId: "gymtalk-9fe96",
  storageBucket: "gymtalk-9fe96.appspot.com",
  messagingSenderId: "843094783464",
  appId: "1:843094783464:web:72949a5f8427cb5fc9205d",
  measurementId: "G-RRK0RJPNRL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
async function initializeAnalytics() {
  if (await isSupported()) {
    const analytics = getAnalytics(app);
  }
}

if (typeof window !== "undefined") {
  initializeAnalytics();
}

export const initFirebase = () => {
  return app;
};
