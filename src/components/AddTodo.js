import React from 'react'

function AddTodo(props) {
    
    return (
        <div>
            <div>
                <input type="text"
                name="task"
                value={props.initialTodo.task}
                onChange={(event)=>{
                   props. handleChange(event)
                }} />
                <button onClick={()=>{
                    props.addTodo()
                }}>Add Todo</button>
            </div>
        </div>
    )
}

export default AddTodo
