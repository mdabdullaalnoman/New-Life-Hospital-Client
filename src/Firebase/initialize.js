import { initializeApp } from 'firebase/app';
import firebaseConfig from './fiebase.config';



const initializeFirebase = () => {
    initializeApp(firebaseConfig);
}

export default initializeFirebase;