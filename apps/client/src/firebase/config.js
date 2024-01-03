import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDlmuBKuqv-H_84AbHyAjmq9icV87Cqin8",
  authDomain: "rentailmotorcycles.firebaseapp.com",
  projectId: "rentailmotorcycles",
  storageBucket: "rentailmotorcycles.appspot.com",
  messagingSenderId: "661145183416",
  appId: "1:661145183416:web:fbeb1b2dd1ac7904b5804d",
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export const storageImgs = getStorage(appFirebase);
