import React from 'react'
import { connect } from 'react-redux'
import Todo from 'Todo'
import TodoAPI from 'TodoAPI'

// Export pure React class
export class TodoList extends React.Component {
  renderTodos() {
    const { todos, showCompleted, searchText } = this.props
    if (todos.length === 0) {
      return <p className='container__message'>Nothing To Do</p>
    } else {
      return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => <Todo key={todo.id} {...todo}/>)
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
    return state
  }
)(TodoList)
