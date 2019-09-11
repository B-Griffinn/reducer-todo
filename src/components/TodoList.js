import React from "react";

import Todo from "./Todo";

const TodoList = ({ todos, dispatch, handleCompleted }) => {

    // Build a function that will dispatch an action to filter out any completed todos
    const clickHanlder = () => {
        dispatch({type: "CLEAR_TODOS" })
    }

  return (
    <div>
        {todos.map(todo => {
            return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
        })}
      <button
      onClick={clickHanlder}
      >Clear Completed</button>
    </div>
  );
};

export default TodoList;
