import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAl2FrZRccgdyJRlGgrD4z6C9vuWocJ5sI",
    authDomain: "lab5-7a7f7.firebaseapp.com",
    projectId: "lab5-7a7f7",
    storageBucket: "my-project-vue-c794e.appspot.com",
    messagingSenderId: "397156391821",
    appId: "1:397156391821:web:d877d6ed4b02a63ca7bbc4",
    measurementId: "G-TYLJGJ0LGW"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()