import { initializeApp, getApp } from 'firebase/app';
import { initializeFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDCq90ziqYH3goxU-KLQTEMyg0lxYZcpn4",
    authDomain: "chatapp-895a8.firebaseapp.com",
    projectId: "chatapp-895a8",
    storageBucket: "chatapp-895a8.appspot.com",
    messagingSenderId: "101760875540",
    appId: "1:101760875540:web:02b4e9440a8ab955e13b01",
    measurementId: "G-19DGTYG2V3"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = initializeFirestore(app, {experimentalForceLongPolling: true});

export { db, auth };
