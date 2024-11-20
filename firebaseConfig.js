import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCIcCgZn_9wx7x5ZoL8sOjpoNsWowt2M4k',
  authDomain: 'learning-firebase-1-2c4e6.firebaseapp.com',
  projectId: 'learning-firebase-1-2c4e6',
  storageBucket: 'learning-firebase-1-2c4e6.appspot.com',
  messagingSenderId: '371981219649',
  appId: '1:371981219649:web:418affa0e288ecab9ed3c0',
  measurementId: 'G-CL88KTH30X',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
