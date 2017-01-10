import React from 'react'
import { Route, Router, IndexRoute, hashHistory } from 'react-router'
import TodoApp from 'TodoApp'
import Login from 'Login'
import firebase from 'app/firebase/'

const requireLogin = (nextState, replace, next) => {
  if (!firebase.auth().currentUser) {
    replace('/') // Work like hashHistory.push
  }

  next() // to finish async middleware
}

const redirectIfLoggedIn = (nextState, replace, next) => {
  if (firebase.auth().currentUser) {
    replace('/todos')
  }

  next()
}

export default (
  <Router history={hashHistory}>
    <Router path='/'>
      <Router path='todos' component={TodoApp} onEnter={requireLogin}/>
      <IndexRoute component={Login} onEnter={redirectIfLoggedIn}/>
    </Router>
  </Router>
)
