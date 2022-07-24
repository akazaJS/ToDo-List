import React from "react";
import Items from "../item-list/item";
import './todo-list.css'




export default function TodoList ({todos,completed,deleteItem}){

    return (

            <ul className='ulS'>
                {todos.map((todoObj,idx)=>{
                     return(
                         <Items
                             deleteItem={deleteItem}
                             itemCompleted={completed}
                             index={idx}
                             key={todoObj.id}
                             items={todoObj}
                         />
                     )
                })}
            </ul>
    )
}