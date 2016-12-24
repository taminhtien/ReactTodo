import React from 'react'
import TodoList from 'TodoList'
import AddTodo from 'AddTodo'
import TodoSearch from 'TodoSearch'

class TodoApp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: 1,
          text: 'Walk the dog',
          completed: true
        },
        {
          id: 2,
          text: 'Clean the yard',
          completed: false
        },
        {
          id: 3,
          text: 'Coding',
          completed: false
        }
      ]
    }
  }

  handleAddTodo(text) {
    alert(`Add Todo: ${text}`)
  }

  handleSearch(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText
    })
  }

  render() {
    const { todos, showCompleted } = this.state

    return (
      <div>
        <TodoSearch onSearch={(showCompleted, searchText) => {this.handleSearch(showCompleted, searchText) }}/>
        <TodoList todos={todos} showCompleted={showCompleted}/>
        <AddTodo onAddTodo={(text) => this.handleAddTodo(text)}/>
      </div>
    )
  }
}

export default TodoApp
