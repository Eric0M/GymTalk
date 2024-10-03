// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvcbP-roWHhGcQF6_dhqPy45MUR5B0Zng",
  authDomain: "gymtalk-c2054.firebaseapp.com",
  projectId: "gymtalk-c2054",
  storageBucket: "gymtalk-c2054.appspot.com",
  messagingSenderId: "26089889884",
  appId: "1:26089889884:web:f100a1f4f575abb1eec699",
  measurementId: "G-72FLJMZD7T",
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
