import React from "react";

import '../App.css'

const Todo = ({ todo, dispatch }) => {

    const clickHandler = () => {

      // we can use getElementById bc the only element in todoList is a div,
      // also === todo.item
      const completedTodo = document.getElementById(`${todo.item}`)
      completedTodo.classList.toggle("completed")
      console.log(todo.id, todo.completed)
      dispatch({type: "COMPLETE", payload: todo.id })
    }

  return (
    <div className="todo">
      <ul>
        <h2 className="todo-header" onClick={clickHandler} id={todo.item}>{todo.item}</h2>
      </ul>
      
    </div>
  );
};

export default Todo;
