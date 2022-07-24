import React from "react";
import TodoList from "../todo-list/todo-list";
import './my-app.css'
import Header from "../Header/header";
import CreateForm from "../create-form/create-form";
import {buildTimeValue} from "@testing-library/user-event/dist/utils";


export default function App (){

    let [todoList,setTodoList]=React.useState(
        [
            {name:'Create new todo list',important:true,comleted:false, id:1},
            {name:'Play basketball',important:true,comleted:false,id:2},
            {name:'Take a walk',important:true,comleted:false,id:3},
            {name:'See a little new on React',important:true,comleted:false,id:4},
            {name:'Go to bed',important:true,comleted:false,id:5},
        ]
    )
//выделяем LI списка как выполненный
    function itemDone(id){
        setTodoList(
            todoList.map(obj=>{
                if (obj.id===id){
                    obj.comleted=!obj.comleted
                }
                return obj
            })
        )
    }
//удаляем элемент массива ,используя метод filter для массива
    function deleteItem(id){
        setTodoList(todoList.filter(obj=>obj.id!==id))
    }
//создаем новый элемент
    function createToDo(title) {
        setTodoList(
            todoList.concat([
                {
                    name:title,
                    id:Date.now(),
                    comleted: false
                }
            ]))
    }
console.log(todoList)
    return (
        <div
            className='myApp'
        >
            <div className='flex'>
                <Header/>
                {todoList.length?<TodoList
                    deleteItem={deleteItem}
                    completed={itemDone}
                    todos={todoList} />:<h3>no TODO!!!</h3>}
                <CreateForm
                    onCreate={createToDo}
                />
            </div>
        </div>

    )
}