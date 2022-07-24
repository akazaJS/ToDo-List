import React, {useState} from "react";

export default function CreateForm({onCreate}){

    let [value,setValue]=useState('')

function doNotRefr(event){
        event.preventDefault()

    if (value.trim()){
        onCreate(value)
    }
    setValue(
        value=''
    )
}

    return(
        <form
            onSubmit={doNotRefr}
            className='newCr'>
            <input
                onChange={event=>{setValue(
                    event.target.value
                )}}
                value={value}
            />
            <button
                type='submit'
                className='addNew'>
                Add new ToDo
            </button>
        </form>
    )
}