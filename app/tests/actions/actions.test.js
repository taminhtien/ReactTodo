import expect from 'expect'
import actions from 'actions'

describe('Actions', () => {
  it('should generate search text action', () => {
    const action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    }

    const res = actions.setSearchText(action.searchText)

    expect(res).toEqual(action)
  })

  it('should generate toggle show completed action', () => {
    const action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    }

    const res = actions.toggleShowCompleted()

    expect(res).toEqual(action)
  })

  it('should generate add todo action', () => {
    const action = {
      type: 'ADD_TODO',
      text: 'Some text'
    }

    const res = actions.addTodo(action.text)

    expect(res).toEqual(action)
  })

  it('should generate add todos action', () => {
    const action = {
      type: 'ADD_TODOS',
      todos: [{
        id: '111',
        text: 'anything',
        completed: false,
        completedAt: undefined,
        createdAt: 3000
      }]
    }

    const res = actions.addTodos(action.todos)

    expect(res).toEqual(action)
  })

  it('should generate toggle todo action', () => {
    const action = {
      type: 'TOGGLE_TODO',
      id: 1
    }

    const res = actions.toggleTodo(action.id)

    expect(res).toEqual(action)
  })
})
