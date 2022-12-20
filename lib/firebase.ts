import axios from 'axios';
import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore, query } from 'firebase/firestore';

export const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  appId: process.env.FIREBASE_APP_ID,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getAllPosts = () => {
  const posts = [];
  getDocs(collection(db, 'posts')).then((res) => console.log(res.docs));
};
