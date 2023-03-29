// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDacKFvdSm4WAJ7fpimDEYs9f14e7lloEs',
  authDomain: 'house-marketplace-app-c86f3.firebaseapp.com',
  projectId: 'house-marketplace-app-c86f3',
  storageBucket: 'house-marketplace-app-c86f3.appspot.com',
  messagingSenderId: '361172981053',
  appId: '1:361172981053:web:0eb564610f1982b0852154',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
