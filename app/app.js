import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Router, IndexRoute, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import * as actions from 'actions'
import firebase from 'app/firebase/'
import router from 'app/route/'

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    hashHistory.push('/todos')
  } else {
    hashHistory.push('/')
  }
})

const store = require('configureStore').configure()

store.dispatch(actions.startAddTodos())

$(document).foundation()

require("style!css!sass!applicationStyles")


ReactDOM.render(
  <Provider store={store}>
  </Provider>,
  document.getElementById('app')
)
