import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
        apiKey: "AIzaSyDVGObiRLdUQ8GkPDR9Jthe8zMOuMaNuq0",
        authDomain: "twitterfirebasepj.firebaseapp.com",
        projectId: "twitterfirebasepj",
        storageBucket: "twitterfirebasepj.appspot.com",
        messagingSenderId: "1013424378559",
        appId: "1:1013424378559:web:8bb1c779c0d723ebdc2c0a",
        measurementId: "G-44HTK4R6MP"
    }
  )
}
  
export default firebase