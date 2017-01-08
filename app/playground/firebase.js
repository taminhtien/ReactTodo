import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDgLRlz-P_ntRvq3Ag4Wc6MqjMFspuwM_I",
  authDomain: "todo-app-6eddf.firebaseapp.com",
  databaseURL: "https://todo-app-6eddf.firebaseio.com",
  storageBucket: "todo-app-6eddf.appspot.com",
  messagingSenderId: "395298617112"
}

firebase.initializeApp(config)

firebase.database().ref().set({
  appName: 'Todo App'
})
