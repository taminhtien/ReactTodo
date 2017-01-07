import React from 'react'
import uuid from 'node-uuid'
import TodoList from 'TodoList'
import AddTodo from 'AddTodo'
import TodoSearch from 'TodoSearch'
import moment from 'moment'

export class TodoApp extends React.Component {
  render() {
    return (
      <div>
        <h1 className='page-title'>Todo App</h1>
        <div className='row'>
          <div className='column small-centered small-11 medium-6 large-5'>
            <div className='container'>
              <TodoSearch/>
              <TodoList/>
              <AddTodo/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TodoApp
