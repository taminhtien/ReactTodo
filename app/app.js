import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Router, IndexRoute, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import TodoApp from 'TodoApp'
import actions from 'actions'

const store = require('configureStore').configure()

store.subscribe(() => {
  console.log('New state', store.getState())
})

$(document).foundation()

require("style!css!sass!applicationStyles")

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
)
