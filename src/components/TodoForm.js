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


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="todo"
          value={todo}
          placeholder="Add Todo"
        />
        <button
        type="submit"
        >
          Add +
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
