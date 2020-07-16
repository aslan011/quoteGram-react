import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCmwsWoxWc2MHYyWRvIdTHWR7tYBT_1F5A",
    authDomain: "fakegram-edd19.firebaseapp.com",
    databaseURL: "https://fakegram-edd19.firebaseio.com",
    projectId: "fakegram-edd19",
    storageBucket: "fakegram-edd19.appspot.com",
    messagingSenderId: "703505228908",
    appId: "1:703505228908:web:3d655b2203fbe9d84ce449"
});

const db = firebaseApp.firestore();

export { db };