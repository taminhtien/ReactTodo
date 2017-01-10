import expect from 'expect'
import * as reducers from 'reducers'
import df from 'deep-freeze-strict'

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      const action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'Text'
      }

      const res = reducers.searchTextReducer(df(''), df(action))

      expect(res).toEqual(action.searchText)
    })
  })

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      const action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      }

      const res = reducers.showCompletedReducer(df(false), df(action))

      expect(res).toEqual(true)
    })
  })

  describe('todosReducer', () => {
    it('should add new todo', () => {
      const action = {
        type: 'ADD_TODO',
        todo: {
          id: '123asad',
          text: 'Something to do',
          completed: false,
          completedAt: 123123
        }
      }

      const res = reducers.todosReducer(df([]), df(action))

      expect(res.length).toEqual(1)
      expect(res[0]).toEqual(action.todo)
    })

    it('should update a todo', () => {
      const todos = [{
        id: 1,
        text: 'text',
        completed: false,
        createdAt: 123,
        completedAt: undefined
      }]

      const action = {
        type: 'UPDATE_TODO',
        id: 1,
        updates: { completed: true }
      }

      const res = reducers.todosReducer(df(todos), df(action))

      expect(res[0].completed).toEqual(true)
    })

    it('should add existing todos', () => {
      const todos = [{
        id: '111',
        text: 'anything',
        completed: false,
        completedAt: undefined,
        createdAt: 3000
      }]

      const action = {
        type: 'ADD_TODOS',
        todos
      }

      const res = reducers.todosReducer(df([]), df(action))

      expect(res.length).toEqual(1)
      expect(res[0]).toEqual(todos[0])
    })

    it('should wipe existing todos when LOGOUT', () => {
      const todos = [{
        id: '111',
        text: 'anything',
        completed: false,
        completedAt: undefined,
        createdAt: 3000
      }]

      const action = {
        type: 'LOGOUT'
      }

      const res = reducers.todosReducer(df(todos), df(action))

      expect(res.length).toEqual(0)
    })
  })

  describe('authReducer', () => {
    it('should store uid on LOGIN', () => {
      const action = {
        type: 'LOGIN',
        uid: '123123'
      }

      const res = reducers.authReducer(undefined, df(action))

      expect(res).toEqual({
        uid: action.uid
      })
    })

    it('should wipe auth on LOGOUT', () => {
      const authData = { uid: '123123' }
      const action = { type: 'LOGOUT' }
      const res = reducers.authReducer(df(authData), df(action))

      expect(res).toEqual({})
    })
  })
})
