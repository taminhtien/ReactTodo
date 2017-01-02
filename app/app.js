import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Router, IndexRoute, hashHistory } from 'react-router'
import TodoApp from 'TodoApp'
import actions from 'actions'

const store = require('configureStore').configure()

console.log(actions)

store.subscribe(() => {
  console.log('New state', store.getState())
})

store.dispatch(actions.addTodo('Clean the yard'))
store.dispatch(actions.setSearchText('yard'))
store.dispatch(actions.toggleShowCompleted())

$(document).foundation()

require("style!css!sass!applicationStyles")

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
)
