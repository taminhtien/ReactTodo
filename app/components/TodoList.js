import React from 'react'
import Todo from 'Todo'

class TodoList extends React.Component {
  render() {
    const { todos, showCompleted, onToggle } = this.props

    return (
      <div>
        {
          todos.map((todo) => {
            return showCompleted === todo.completed && <Todo key={todo.id} {...todo} onToggle={onToggle}/>
          })
        }
      </div>
    )
  }
}

export default TodoList
