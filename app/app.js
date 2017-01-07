import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Router, IndexRoute, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import TodoApp from 'TodoApp'
import actions from 'actions'
import TodoAPI from 'TodoAPI'

const store = require('configureStore').configure()

store.subscribe(() => {
  const state = store.getState()
  console.log('New state', state)
  TodoAPI.setTodos(state.todos)
})

const initialTodos = TodoAPI.getTodos()
store.dispatch(actions.addTodos(initialTodos))

$(document).foundation()

require("style!css!sass!applicationStyles")

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
)
