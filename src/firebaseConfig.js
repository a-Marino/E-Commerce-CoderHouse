import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "amstore-ecommerce.firebaseapp.com",
  projectId: "amstore-ecommerce",
  storageBucket: "amstore-ecommerce.appspot.com",
  messagingSenderId: import.meta.env.VITE_MESSAGINSENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
