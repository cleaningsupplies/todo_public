import React from 'react';
import "../css/TodoItem.css"

export default function TodoItem({item, checkTodo, deleteItem}) {

  function handleCheck(){
    checkTodo(item);
  }

  function handleDelete(){
    deleteItem(item);
  }

  return (
    <>
    <div className="inputContainer" >
        <input className="checkbox" type="checkbox" checked={item.checked} onChange={handleCheck}></input>
        <span className="item" onClick={handleCheck}>{item.name}</span>
        <span onClick={handleDelete} className="delete"></span>
    </div>    
    <hr></hr>
    </>
  )
}
