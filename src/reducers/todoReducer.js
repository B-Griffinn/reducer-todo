// ### STEP 1 - Build a simple reducer and initial state

// - In a folder called `reducers` add a reducer file and 
// - In the same file, build your initial state object that has a list of todos with the following shape:
// {
//   item: 'Learn about reducers',
//   completed: false,
//   id: 3892987589
// }
// - Export both the reducer and the initial state object

// build your initial state object that has a list of todos
// Initial State Object
export const initialState = {
  todos: [{
    item: 'Learn about reducers',
		completed: false,
		id: 3892987589
  }]
}


// Reducer
export const reducer = (state, action) => {
  switch(action.type) {
    case "ADD_TODO":
      return {todos: [...state.todos, {item: action.payload, compelted: false, id: Math.random() }] }

      case "COMPLETE":
        return {todos: state.todos.map(todo => todo.id === action.payload ? {...todo, completed: !todo.complete} : todo )}

        case "CLEAR_TODOS":
          //The filter() method creates a new array with all elements that pass the test implemented by the provided function.
          return {todos: state.todos.filter(todo => !todo.completed) }
      default: return state;
  }
}








//build out a simple reducer with just a default return for now

// export const reducer = (state, action) => {
//   return state; <--- default return
// }

//  build your initial state object that has a list of todos
// export const initialState = {
//   todos: [{
//     item: 'Learn about reducers',
//     completed: false,
//     id: 12325478545
//   }]
// }
