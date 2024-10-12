import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const fireBaseConfig = {
    apiKey: "AIzaSyCiIVgGmYDT_lu8uUnsU-ZYwHII2ZN_uAU",
    authDomain: "markdown-editor-5f357.firebaseapp.com",
    projectId: "markdown-editor-5f357",
    storageBucket: "markdown-editor-5f357.appspot.com",
    messagingSenderId: "560141745219",
    appId: "1:560141745219:web:52cac1828e9ff088dee8f6"
}

const app = initializeApp(fireBaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }