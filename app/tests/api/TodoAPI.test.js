import expect from 'expect'
import TodoAPI from 'TodoAPI'

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos')
  })

  it('should exist', () => {
    expect(TodoAPI).toExist()
  })

  describe('filterTodos', () => {
    const todos = [
      {
        id: 1,
        text: 'Code something',
        completed: true
      }, {
        id: 2,
        text: 'Eat something',
        completed: false
      }, {
        id: 3,
        text: 'Sleep a bit',
        completed: true
      }
    ]

    it('should return all items if showCompleted is true', () => {
      const filteredTodos = TodoAPI.filterTodos(todos, true, '')
      expect(filteredTodos.length).toBe(3)
    })

    it('should return non-completed items when showCompleted is false', () => {
      const filteredTodos = TodoAPI.filterTodos(todos, false, '')
      expect(filteredTodos.length).toBe(1)
    })

    it('should sort by completed status', () => {
      const filteredTodos = TodoAPI.filterTodos(todos, true, '')
      expect(filteredTodos[0].completed).toBe(false)
    })

    it('should filter todos by searchText', () => {
      const filteredTodos = TodoAPI.filterTodos(todos, true, 'code')
      expect(filteredTodos.length).toBe(1)
    })

    it('should return all items if searchText is empty', () => {
      const filteredTodos = TodoAPI.filterTodos(todos, true, '')
      expect(filteredTodos.length).toBe(3)
    })
  })
})

