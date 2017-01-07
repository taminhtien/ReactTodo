import React from 'react'
import TodoAPI from 'TodoAPI'
import uuid from 'node-uuid'
import TodoList from 'TodoList'
import AddTodo from 'AddTodo'
import TodoSearch from 'TodoSearch'
import moment from 'moment'

export class TodoApp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    }
  }

  componentDidUpdate() {
    TodoAPI.setTodos(this.state.todos)
  }

  handleAddTodo(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    })
  }

  handleSearch(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText
    })
  }

  render() {
    const { todos, showCompleted, searchText } = this.state
    const filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText)

    return (
      <div>
        <h1 className='page-title'>Todo App</h1>
        <div className='row'>
          <div className='column small-centered small-11 medium-6 large-5'>
            <div className='container'>
              <TodoSearch onSearch={(showCompleted, searchText) => {this.handleSearch(showCompleted, searchText) }}/>
              <TodoList/>
              <AddTodo onAddTodo={(text) => this.handleAddTodo(text)}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TodoApp
