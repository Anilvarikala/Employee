import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDPdSystvonXKBTKuq9JgqK2bUZ1lA9CKo",
  authDomain: "employee-f0919.firebaseapp.com",
  projectId: "employee-f0919",
  storageBucket: "employee-f0919.firebasestorage.app",
  messagingSenderId: "1009012126160",
  appId: "1:1009012126160:web:329716a933aa99823c49d5",
  measurementId: "G-D14Z4BWHSC",
  databaseURL : "https://employee-f0919-default-rtdb.firebaseio.com/",
  };
export const app = initializeApp(firebaseConfig);