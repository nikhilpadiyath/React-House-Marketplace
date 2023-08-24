// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjg6SbvNr7RNKOUTycUqbvpzotSqj37IU",
  authDomain: "house-marketplace-app-15c27.firebaseapp.com",
  projectId: "house-marketplace-app-15c27",
  storageBucket: "house-marketplace-app-15c27.appspot.com",
  messagingSenderId: "521698475667",
  appId: "1:521698475667:web:d0670502ff9ac3c8a61766"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();