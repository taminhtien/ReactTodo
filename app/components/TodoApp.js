import React from 'react'
import TodoList from 'TodoList'
import AddTodo from 'AddTodo'

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

  handleAddTodo(text) {
    alert(`Add Todo: ${text}`)
  }

  render() {
    return (
      <div>
        <TodoList todos={this.todos}/>
        <AddTodo onAddTodo={(text) => this.handleAddTodo(text)}/>
      </div>
    )
  }
}

export default TodoApp
