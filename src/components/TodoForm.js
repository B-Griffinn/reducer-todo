import React, { useState } from "react";

const TodoForm = ({ dispatch }) => {
    
    const [todo, setTodo] = useState('');

    // Handler Functions

    // set the state to the users input
    const handleChange = e => {
        console.log(e.target.value)
        setTodo(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(todo)
        // send this action to my reducer fn
                  // payload is my state
        dispatch({ type: "ADD_TODO", payload: todo })
        setTodo(''); // <-- reset stat to empty string
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
          value={todo} // <-- value = state
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
