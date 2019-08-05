import { combineReducers } from 'redux'
import { ADD_TODO } from '../actions/actions'

function todo(state, action) { // create a new item.
   switch (action.type) {
      case ADD_TODO:
         return {
            id: action.id,
            text: action.text,
         }
      default:
         return state
   }
}

function todos(state = [], action) { // Push the new item to the list.
   switch (action.type) {
      case ADD_TODO:
         return [
            ...state,
            todo(undefined, action)
         ]
      default:
         return state
   }
}
const todoApp = combineReducers({ // new reducer to the list.
   todos
})
export default todoApp
