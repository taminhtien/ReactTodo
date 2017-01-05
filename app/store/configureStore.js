const redux = require('redux')
import { searchTextReducer, showCompletedReducer, todosReducer } from 'reducers'

export const configure = (state = {}) => {
  const reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer
  })

  const store = redux.createStore(reducer, state, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))

  return store
}
