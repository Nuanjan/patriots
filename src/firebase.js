import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyC73DcmdAavwFFl606MjCYQ-s507t8BAoE",
    authDomain: "patriot-827d1.firebaseapp.com",
    databaseURL: "https://patriot-827d1.firebaseio.com",
    projectId: "patriot-827d1",
    storageBucket: "patriot-827d1.appspot.com",
    messagingSenderId: "661454035406",
    appId: "1:661454035406:web:0f016fa1e7ceb52b49f39f",
    measurementId: "G-D0LECH2J3N"
  };

  firebase.initializeApp(firebaseConfig);

  const firebaseDB = firebase.database();
  const firebaseMatches = firebaseDB.ref('matches');
  const firebaseTeams = firebaseDB.ref('teams')
  const firebasePromotions = firebaseDB.ref('promotions')
  const firebasePlayers = firebaseDB.ref('players');

  export {
      firebase,
      firebaseMatches,
      firebasePromotions,
      firebaseTeams,
      firebasePlayers,
      firebaseDB
  }