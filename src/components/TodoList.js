import React from 'react'

function TodoList(props) {
    const todos=props.todos
    return <div>
    {
        todos.length >0 ? todos.map((todo,index)=>{
        return <div key={index}>
            <span style={todo.completed ?
            {
                textDecoration : 'line-through'
            }:{

            }}>{todo.task}</span>

            <button onClick={()=>{
               props. completeTodo(index)
            }}>completed</button>

            <button onClick={()=>{
               props. deleteTodo(index)
            }}>
                Delete
            </button>
        </div>
    }) : 'No Todos..'
    } 
    
    </div>
}

export default TodoList
