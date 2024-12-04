import React, { useState ,useEffect } from "react";



const TodoItem = (props) => {

    const[todoItems, setTodoItems] = useState(props.data);

     useEffect(() => {
         fetch(`http://localhost:8090/api/todos/${todoItems.id}`, {
         method: 'DELETE'
         });

        },[todoItems]);



    return (
      
        <>
          
           <span>{props.data.title }</span>
           <span>:</span>
           <span> </span>
           <span>{props.data.description}</span>
           <button onClick={() => setTodoItems({todoItems}) }>Complete</button>
         
        </>
        
    );


};

export default TodoItem