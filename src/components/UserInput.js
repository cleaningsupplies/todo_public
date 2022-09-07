import React from 'react'
import "../css/UserInput.css";

export default function UserInput({addTodo}) {

  function handleSubmit(e){
    const todo = document.querySelector(".userInput");
    if(todo.value !== ""){
      addTodo(todo.value);
      todo.value = "";
    }
    e.preventDefault();
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
        <input className="userInput" type="text" placeholder="Have gotta do..."/>
        <input className="submit" type="submit" value=" "/>
    </form>

  )
}
