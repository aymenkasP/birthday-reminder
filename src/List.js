import React from 'react';


export default function List({ TasksList, DeleteTask }) {

    return (
        <div>
            <ul>
                {TasksList.map((task,index) => {
                    return (
                        <li key={index} >
                            <h4>{task}</h4>
                            <button id='delete' onClick={() => DeleteTask(task)} >delete</button>
                        </li>
                    )})}
            </ul>
        </div>
    )
}