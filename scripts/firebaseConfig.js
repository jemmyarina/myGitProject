// configuration
const firebaseConfig = {
    apiKey: "AIzaSyDSo32sy_usMCapFUZykti9482jcylSZvU",
    authDomain: "jem-project-6accf.firebaseapp.com",
    databaseURL: "https://jem-project-6accf.firebaseio.com",
    projectId: "jem-project-6accf",
    storageBucket: "jem-project-6accf.appspot.com",
    messagingSenderId: "409560097613",
    appId: "1:409560097613:web:8d593d772a3928af4f4d04"
  };

//   initialization of app
  firebase.initializeApp(firebaseConfig);

  const db=firebase.firestore();
  const auth=firebase.auth();
  