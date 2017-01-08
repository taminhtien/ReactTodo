import firebase from 'firebase'

try {
  const config = {
    apiKey: "AIzaSyDgLRlz-P_ntRvq3Ag4Wc6MqjMFspuwM_I",
    authDomain: "todo-app-6eddf.firebaseapp.com",
    databaseURL: "https://todo-app-6eddf.firebaseio.com",
    storageBucket: "todo-app-6eddf.appspot.com",
    messagingSenderId: "395298617112"
  }

  firebase.initializeApp(config)
} catch(e) {
  alert(e)
}

export const firebaseRef = firebase.database().ref()
export default firebase
