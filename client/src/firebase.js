import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyA0Ad6sMCiZmOJn9EtIXex4lyZ17gvNeHw",
    authDomain: "mern2-28d81.firebaseapp.com",
    projectId: "mern2-28d81",
    storageBucket: "mern2-28d81.appspot.com",
    messagingSenderId: "803474110209",
    appId: "1:803474110209:web:4a550123e1ccc6afee0d00"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
