import React, { useState } from "react";

const TodoForm = ({ dispatch }) => {
    
    const [todo, setTodo] = useState('');

    // Build a function that will dispatch an action to add a new todo
    // Handler Functions
    const handleChange = e => {
        console.log(e.target.value)
        setTodo(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(todo)
        dispatch({ type: "ADD_TODO", payload: todo })
        setTodo('');
    }

    const clickHanlder = () => {
        dispatch({type: "CLEAR_TODOS" })
    }


  return (
    <div className="todo-form">
      <form onSubmit={handleSubmit}>
        <input
        className="todo-input"
          onChange={handleChange}
          type="text"
          name="todo"
          value={todo}
          placeholder="Add Todo"
        />
        <div className="btn-wrapper">
        <button
        type="submit"
        >
          Add +
        </button>
        <button
      onClick={clickHanlder}
      >Clear Completed</button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
