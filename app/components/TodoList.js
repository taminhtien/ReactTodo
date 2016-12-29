import React from 'react'
import Todo from 'Todo'

class TodoList extends React.Component {
  renderTodos(todos, onToggle) {
    if (todos.length === 0) {
      return <p className='container__message'>Nothing To Do</p>
    } else {
      return todos.map((todo) => <Todo key={todo.id} {...todo} onToggle={onToggle}/>)
    }
  }
  render() {
    const { todos, onToggle } = this.props

    return (
      <div>
        {this.renderTodos(todos, onToggle)}
      </div>
    )
  }
}

export default TodoList
