import React from 'react';
import "../css/TodoList.css";
import TodoItem from './TodoItem';

export default function TodoList({todos, checkTodo, deleteItem}) {

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
