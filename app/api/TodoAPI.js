import $ from 'jquery'

const filterTodos = (todos, showCompleted, searchText) => {
  var filteredTodos = todos

  filteredTodos = filteredTodos.filter((todo) => !todo.completed || showCompleted)
  filteredTodos = filteredTodos.filter((todo) => todo.text.toLowerCase().match(searchText.toLowerCase()) || searchText.lenngth === 0)
  filteredTodos.sort((a, b) => a.completed - b.completed)

  return filteredTodos
}

export default { filterTodos }
