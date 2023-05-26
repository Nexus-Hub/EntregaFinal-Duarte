import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC2OWW6GPP_bu8mSXoBz3jIVhrSwNboYYg",
    authDomain: "comision-39665.firebaseapp.com",
    projectId: "comision-39665",
    storageBucket: "comision-39665.appspot.com",
    messagingSenderId: "661818039050",
    appId: "1:661818039050:web:6971a471162535a7b4f8f3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);