import React, { useReducer } from "react";


// Components
import TodoForm from './components/TodoForm';
import TodoList from  './components/TodoList';

// Reducer(s)
import { reducer, initialState } from './reducers/todoReducer';


function App() {

// Using the `reducer` hook, set up state
  const [todoList, dispatch] = useReducer(reducer, initialState);


  return (
    <div className="App">
      <h1>Ben's To-Do List</h1>

      {/* rendering my list of todos from my reducer */}
      <TodoForm dispatch={dispatch} />
      <TodoList todos={todoList.todos} dispatch={dispatch} />
    </div>
  );
}

export default App;
