import React, { useEffect } from 'react';
import "../css/TodoList.css";
import TodoItem from './TodoItem';

export default function TodoList({todos, checkTodo, deleteItem}) {

  useEffect(() => {
    const c = document.querySelector(".TodoList");
    c.scrollTop = 9000000;
  })
  

  return (
    <div className="TodoList">
      {
        todos.map((todo) => (
            <TodoItem 
              className="TodoItem" 
              key={todo.id} 
              item={todo} 
              checkTodo={checkTodo} 
              deleteItem={deleteItem}
            />
        ))
      }
    </div>
  )
}
