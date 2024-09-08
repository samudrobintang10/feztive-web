import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCYCPPrXmrm_RiP0-w-QW55lWUFSXIGIdU",
  authDomain: "feztive-6016c.firebaseapp.com",
  projectId: "feztive-6016c",
  storageBucket: "feztive-6016c.appspot.com",
  messagingSenderId: "377556462212",
  appId: "1:377556462212:web:c3be469cef6a6650c4b0d1",
  measurementId: "G-7FFQC9XNST"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);