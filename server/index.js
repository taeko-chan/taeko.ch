// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBE7zQzYtLepN31_b5m-qCMZ_u2J9vFsSY",
    authDomain: "taeko-and-co.firebaseapp.com",
    projectId: "taeko-and-co",
    storageBucket: "taeko-and-co.firebasestorage.app",
    messagingSenderId: "536426736433",
    appId: "1:536426736433:web:9f3598c080e071d7d99e10",
    measurementId: "G-D69DBWB1MP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});