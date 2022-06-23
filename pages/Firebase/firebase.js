// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import    { initializeApp } from "firebase/app"
import { getFirestore} from "firebase/firestore";
 

 
const firebaseConfig = {
  apiKey: "AIzaSyA8325e26GAh89og_DHxx1rZVnxdHh3-4A",
  authDomain: "education-88b2e.firebaseapp.com",
  projectId: "education-88b2e",
  storageBucket: "education-88b2e.appspot.com",
  messagingSenderId: "344944421344",
  appId: "1:344944421344:web:74f0c36300f79ffd46e385",
  measurementId: "G-N6773TNCYT"
};
  
 const app=initializeApp(firebaseConfig);
 export const db = getFirestore(app)
 