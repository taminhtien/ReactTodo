import React from 'react'
import { connect } from 'react-redux'
import Todo from 'Todo'

// Export pure React class
export class TodoList extends React.Component {
  renderTodos() {
    const { todos } = this.props
    if (todos.length === 0) {
      return <p className='container__message'>Nothing To Do</p>
    } else {
      return todos.map((todo) => <Todo key={todo.id} {...todo}/>)
    }
  }
  render() {
    return (
      <div>
        {this.renderTodos()}
      </div>
    )
  }
}

// Redux version, look similiar but expect store is exist in component
export default connect(
  (state) => {
    return {
      todos: state.todos
    }
  }
)(TodoList)
