import React from 'react'
import TodoAPI from 'TodoApi'
import uuid from 'node-uuid'
import TodoList from 'TodoList'
import AddTodo from 'AddTodo'
import TodoSearch from 'TodoSearch'

class TodoApp extends React.Component {
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
          completed: false
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

  handleToggle(id) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }

      return todo
    })

    this.setState({todos: updatedTodos})
  }

  render() {
    const { todos, showCompleted } = this.state

    return (
      <div>
        <TodoSearch onSearch={(showCompleted, searchText) => {this.handleSearch(showCompleted, searchText) }}/>
        { todos && <TodoList todos={todos} showCompleted={showCompleted} onToggle={(id) => { this.handleToggle(id) }}/> }
        <AddTodo onAddTodo={(text) => this.handleAddTodo(text)}/>
      </div>
    )
  }
}

export default TodoApp
