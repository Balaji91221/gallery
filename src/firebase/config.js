import * as firebase from 'firebase/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

var firebaseConfig = {
    apiKey: "AIzaSyCYRpoCjfjfSGrjgqkRb-_3-J4W9mMrQC8",
    authDomain: "gallery-a40d0.firebaseapp.com",
    databaseURL: "https://gallery-a40d0-default-rtdb.firebaseio.com",
    projectId: "gallery-a40d0",
    storageBucket: "gallery-a40d0.appspot.com",
    messagingSenderId: "622063845369",
    appId: "1:622063845369:web:a60b59b806f4452dc1c728",
    measurementId: "G-WP0NRR1HEL"
  };

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export{projectFirestore,projectStorage};