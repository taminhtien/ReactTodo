import expect from 'expect'
import reducers from 'reducers'
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

  describe('todoReducer', () => {
    it('should add new todo', () => {
      const action = {
        type: 'ADD_TODO',
        text: 'text'
      }

      const res = reducers.todoReducer(df([]), df(action))

      expect(res.length).toEqual(1)
      expect(res[0].text).toEqual(action.text)
    })

    it('should toggle a todo', () => {
      const todos = [{
        id: 1,
        text: 'text',
        completed: false,
        createdAt: 123,
        completedAt: undefined
      }]

      const action = {
        type: 'TOGGLE_TODO',
        id: 1
      }

      const res = reducers.todoReducer(df(todos), df(action))

      expect(res[0].completed).toEqual(true)
    })
  })
})
