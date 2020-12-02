import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC6dz0t7wyLPydbmMucsFYCsUow865nP6w",
    authDomain: "robinhood-c1b9d.firebaseapp.com",
    databaseURL: "https://robinhood-c1b9d.firebaseio.com",
    projectId: "robinhood-c1b9d",
    storageBucket: "robinhood-c1b9d.appspot.com",
    messagingSenderId: "809936148677",
    appId: "1:809936148677:web:c21d4a384588a4a22ab8ac"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export { db };