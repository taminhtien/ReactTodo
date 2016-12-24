import React from 'react'
import TodoList from 'TodoList'

class TodoApp extends React.Component {
  constructor(props) {
    super(props)

    this.todos = [
      {
        id: 1,
        text: 'Walk the dog'
      },
      {
        id: 2,
        text: 'Clean the yard'
      }
    ]
  }

  render() {
    return (
      <div>
        <TodoList todos={this.todos}/>
      </div>
    )
  }
}

export default TodoApp
