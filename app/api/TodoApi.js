import $ from 'jquery'

const setTodos = (todos) => {
  if ($.isArray(todos)) {
    localStorage.setItem('todos', JSON.stringify(todos))
    return todos
  }
}

const getTodos = () => {
  const stringTodos = localStorage.getItem('todos')
  let todos = []

  try {
    todos = JSON.parse(stringTodos)
  } catch(e) {
  }

  return $.isArray(todos) ? todos : []
}

const filterTodos = (todos, showCompleted, searchText) => {
  var filteredTodos = todos

  filteredTodos = filteredTodos.filter((todo) => !todo.completed || showCompleted)
  filteredTodos = filteredTodos.filter((todo) => todo.text.toLowerCase().match(searchText.toLowerCase()) || searchText.lenngth === 0)
  filteredTodos.sort((a, b) => a.completed - b.completed)

  return filteredTodos
}

export default { setTodos, getTodos, filterTodos }
