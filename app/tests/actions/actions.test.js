import expect from 'expect'
import * as actions from 'actions'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import firebase, { firebaseRef } from 'app/firebase'

const createMockStore = configureMockStore([thunk])

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
      todo: {
        id: '123',
        text: 'Something to do',
        completed: true,
        completedAt: 123123
      }
    }

    const res = actions.addTodo(action.todo)

    expect(res).toEqual(action)
  })

  it('should create todo and dispatch ADD_TODO', (done) => {
    const store = createMockStore({})
    const todoText = 'My todo item'

    store.dispatch(actions.startAddTodo(todoText)).then(() => {
      const actions = store.getActions()

      expect(actions[0]).toInclude({
        type: 'ADD_TODO'
      })

      expect(actions[0].todo).toInclude({
        text: todoText
      })

      done()
    }).catch(done)
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
      type: 'UPDATE_TODO',
      id: 1,
      updates: { completed: false }
    }

    const res = actions.updateTodo(action.id, action.updates)

    expect(res).toEqual(action)
  })

  describe('Tests with firebase totods', () => {
    let testTodoRef

    beforeEach((done) => {
      testTodoRef = firebaseRef.child('todos').push()

      testTodoRef.set({
        text: 'Something to do',
        completed: false,
        createdAt: 123123123
      }).then(() => done())
    })

    afterEach((done) => {
      testTodoRef.remove().then(() => done())
    })

    it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
      const store = createMockStore({})
      const action = actions.startToggleTodo(testTodoRef.key, true)

      store.dispatch(action).then(() => {
        const mockActions = store.getActions()

        expect(mockActions[0]).toInclude({
          type: 'UPDATE_TODO',
          id: testTodoRef.key
        })

        expect(mockActions[0].updates).toInclude({
          completed: true
        })

        expect(mockActions[0].updates.completedAt).toExist()

        done()
      }, (e) => {
        console.log('Failed', e)
        done()
      })
    })
  })
})
