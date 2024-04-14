import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_api_key}`,
  authDomain: `${process.env.REACT_APP_auth_domain}`,
  projectId: `${process.env.REA_project_id}`,
  storageBucket: `${process.env.REACT_APP_storage_bucket}`,
  messagingSenderId: `${process.env.REACT_APP_messagin_sender_id}`,
  appId: `${process.env.REACT_APP_app_id}`,
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export const storageImgs = getStorage(appFirebase);
