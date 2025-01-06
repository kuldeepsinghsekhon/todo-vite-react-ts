

type Props = {
    todo: string,
    index:number,
    deleteTodo:(index:number)=>void,
    editTodo:(index:number)=>void
}

export default function TodoCard({todo,index,deleteTodo,editTodo}: Props) {

  return (
    <li key={index}>
       <div>  {todo}
       
            <button onClick={
                ()=>{editTodo(todo,index)
                    console.log(index)
                }}>edit</button>
            <button onClick={()=>{deleteTodo(index)
                console.log(index)
            }}>delete</button>
        </div>
    </li>
  )
}