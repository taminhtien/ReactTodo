import React from 'react'
import Todo from 'Todo'

class TodoList extends React.Component {
  render() {
    const { todos, onToggle } = this.props

    return (
      <div>
        { todos.map((todo) => <Todo key={todo.id} {...todo} onToggle={onToggle}/>) }
      </div>
    )
  }
}

export default TodoList
