import expect from 'expect'
import TodoAPI from 'TodoAPI'

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos')
  })

  it('should exist', () => {
    expect(TodoAPI).toExist()
  })

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      const todos = [{
        id: 23,
        text: 'Code something',
        completed: false
      }]

      TodoAPI.setTodos(todos)

      const actualTodos = JSON.parse(localStorage.getItem('todos'))

      expect(actualTodos).toEqual(todos)
    })

    it('should not set invalid todos array', () => {
      const todos = {
        id: 23,
        text: 'Code something',
        completed: false
      }

      TodoAPI.setTodos(todos)

      expect(localStorage.getItem('todos')).toBe(null)
    })
  })

  describe('getTodos', () => {
    it('should return empty array for bad localStorage data', () => {
      expect(TodoAPI.getTodos()).toEqual(null)
    })

    it('should return todos if valid array in localStorage', () => {
      const todos = [{
        id: 23,
        text: 'Code something',
        completed: false
      }]

      localStorage.setItem('todos', JSON.stringify(todos))

      const actualTodos = TodoAPI.getTodos()

      expect(actualTodos).toEqual(todos)
    })
  })
})

