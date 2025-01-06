import React, { useState } from 'react'

type Props = {handleAddTodo:string[],todo:string,setTodo:()=>void}

export default function TodoInput({handleAddTodo,todo,setTodo}: Props) {

  return (
    <div><input name="newtodo" value={todo} onChange={(e)=>{
      setTodo(e.target.value)
    }} placeholder="Enter To Do ..."  />
     <button onClick={()=>{
      handleAddTodo(todo)
      setTodo('')
    }}>Add</button>
    </div>
  )
}