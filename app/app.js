import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Router, IndexRoute, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import TodoApp from 'TodoApp'
import * as actions from 'actions'
import TodoAPI from 'TodoAPI'
import Login from 'Login'

const store = require('configureStore').configure()

store.dispatch(actions.startAddTodos())

$(document).foundation()

require("style!css!sass!applicationStyles")

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Router path='/'>
        <Router path='todos' component={TodoApp}/>
        <IndexRoute component={Login}/>
      </Router>
    </Router>
  </Provider>,
  document.getElementById('app')
)
