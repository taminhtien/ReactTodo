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
    todos = []
  }

  return todos
}

export default { setTodos, getTodos }
