import { apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId } from './env';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: apiKey,
    authDomain: authDomain,
    projectId: projectId,
    storageBucket: storageBucket,
    messagingSenderId: messagingSenderId,
    appId: appId
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)