import React, { useState } from "react";
import { Fragment, useEffect } from "react";
import "./App.css";
import TodoItem from "./components/todoitem"
function App() {

    const[todoItems, setTodoItems] = useState(null);

    useEffect(()=>{
        console.log("hey");

        if (!todoItems) {
        fetch("http://localhost:8090/api/todos")
        .then((response)=>response.json())
        .then((data) => {
            console.log("To do items list:",data);
            setTodoItems(data);
        });
        }
    },[todoItems]);

    return (
        <div>
        <h2>To do Application</h2>
    {todoItems?todoItems.map((todoItem) => {
        return <TodoItem key={todoItem.id} data={todoItem} />
        })
        :"loading data..."}
    </div>
    );
}

export default App;
