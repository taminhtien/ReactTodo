import uuid from 'node-uuid'
import moment from 'moment'

const searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText
    default:
      return state
  }
}

const showCompletedReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state
    default:
      return state
  }
}

const todoReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: uuid(),
          text: action.text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    case 'TOGGLE_TODO':
      return state.map((todo) => {
        if (todo.id === action.id) {
          const nextCompleted = !todo.completed

          return {
            completed: nextCompleted,
            completedAt: nextCompleted ? moment().unix() : undefined
          }
        }
      })
    default:
      return state
  }
}

export default { searchTextReducer, showCompletedReducer, todoReducer }