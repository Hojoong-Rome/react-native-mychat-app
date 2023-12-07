import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDnZDZoi-27mQPlJ2wxpH7MCANMEd4M7Rk",
    authDomain: "mychat-801c1.firebaseapp.com",
    projectId: "mychat-801c1",
    storageBucket: "mychat-801c1.appspot.com",
    messagingSenderId: "458418533867",
    appId: "1:458418533867:web:0f32a64566e4a34adbd5ae",
    measurementId: "G-8DCL07T2GS"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db }