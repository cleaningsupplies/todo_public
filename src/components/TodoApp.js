import React, {useEffect, useState} from 'react';
import TodoList from './TodoList';
import UserInput from './UserInput';
import "../css/TodoApp.css";
import { v4 as uuidv4 } from 'uuid';
//import axios from "axios";

export default function TodoApp() {

    const todo = {
        name: "",
        id: uuidv4(),
        checked: 0,
    }
    
    const[todos, setTodos] = useState([]);

    //getting todos from db
    /*
    const getTodos = () => {
        axios.get("http://localhost:3000/todos").then((res) => {
            setTodos(res.data);
        })
    }*/

    useEffect(() => {
        //getTodos();
        //Using local stroage to save todos
        const todos = JSON.parse(window.localStorage.getItem("TODOS"));
        if(todos){
            setTodos(todos);
        }
    },[]);
    // },[todos]);
    
    useEffect(() => {
        window.localStorage.setItem("TODOS", JSON.stringify(todos));
    },[todos]);


    function addTodo(newTodo){
         todo.name = newTodo;
        // axios.post("http://localhost:3000/todos", todo).then(() => {
            setTodos(item => [...item, todo]);
        // });
    }



    function checkTodo(todo){
        const items = [...todos];
        const item = items.find(item => item.id === todo.id);
        item.checked === 0 ? item.checked = -1 : item.checked = 0;  
        // axios.put("http://localhost:3000/todos", item).then((res) => {
            setTodos(items);
        // })
    }

    function deleteAll(){  
        // axios.delete("http://localhost:3000/todos_all").then((res) => {
            setTodos([]);
        // })
    }

    function deleteDone(){
        // axios.delete("http://localhost:3000/todos_done").then((res) => {
            setTodos(todos.filter(todo => !todo.checked));
        // })
    }

    function deleteItem(todo){
        const items = [...todos];
        const item = items.find(item => item.id === todo.id);

        // axios.delete(`http://localhost:3000/todos/${todo.id}`).then((res)=> {        
            const index = items.indexOf(item);
            items.splice(index,1);
            setTodos(items);
        // })
    }



    return (
        <div className='appContainer'>
            <UserInput addTodo={addTodo}/>
            <TodoList todos={todos} checkTodo={checkTodo} deleteItem={deleteItem}/>
            <div className='buttonContainer'>
                <button className="deleteDone" onClick={deleteDone}>Delete Done</button>
                <button className="deleteAll" onClick={deleteAll}>Delete All</button> 
            </div>
        </div>
    )
}
