import React from 'react'
import TodoCard from './TodoCard'
type Props = {todolist:string[],deleteTodo:(index:number)=>void}

export default function TodoList(props: Props) {
  const {todolist}=props;
  return (
    <ul>
      {todolist.map((todo:string,index:number)=>{
        return <TodoCard todo={todo} index={index} {...props}/>
      })}
    </ul>
  )
}
