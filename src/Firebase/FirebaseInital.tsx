import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAs2Rw_y7emkiG9YJzzM7oxY6N6wLjJA9o",
    authDomain: "bookstore-86772.firebaseapp.com",
    projectId: "bookstore-86772",
    storageBucket: "bookstore-86772.firebasestorage.app",
    messagingSenderId: "1042192692477",
    appId: "1:1042192692477:web:ded7370cb1c3652b8eba94"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);
export { app, auth };  
