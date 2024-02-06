import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDAw90e7PpsrU7KQpE9IO2ZahjvhpB9QZE",
    authDomain: "final-a234e.firebaseapp.com",
    databaseURL: "https://final-a234e-default-rtdb.firebaseio.com",
    projectId: "final-a234e",
    storageBucket: "final-a234e.appspot.com",
    messagingSenderId: "635856998572",
    appId: "1:635856998572:web:9baca3acc1c14fd3668f09",
    measurementId: "G-EKYE9BYJPX"
};
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { app, firestore, storage };