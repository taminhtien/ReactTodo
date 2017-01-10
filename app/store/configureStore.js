import * as redux from 'redux'
import thunk from 'redux-thunk'
import * as reducers from 'reducers'

export const configure = (state = {}) => {
  const reducer = redux.combineReducers({
    searchText: reducers.searchTextReducer,
    showCompleted: reducers.showCompletedReducer,
    todos: reducers.todosReducer,
    auth: reducers.authReducer
  })

  const store = redux.createStore(reducer, state, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))

  return store
}
