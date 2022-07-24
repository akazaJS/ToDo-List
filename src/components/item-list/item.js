import React from "react";
import './item.css'

export default function Items({ items,index,itemCompleted,deleteItem}){

    const classes=[];
    if (items.comleted===true){
        classes.push('completed')
    }



    return(
            <li className='li' >
                <span className='but' >
                    <div>
                        <input
                            onChange={()=>itemCompleted(items.id)}
                            type='checkbox'/>
                         <strong className='ots'>{index+1+'.'}</strong>
                         <span className={classes.join(' ')}>{items.name}</span>
                    </div>
                    <button
                        onClick={()=>deleteItem(items.id)}
                        className='button' >
                        Delete
                    </button>
                </span>
            </li>
    )
}