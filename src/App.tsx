import { useState } from 'react'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/Todolist'

function App() {
  const [todolist, setTodolist]=useState([])
  const [todo,setTodo]=useState('');
  function handleAddTodo(newTodo:string){
    setTodolist([...todolist,newTodo]);
    }
    function deleteTodo(delindex:number){
      const newtodos=todolist.filter((todo:string,index:number)=>{
        return index!==delindex
      })
      setTodolist(newtodos)
    }
    function editTodo(todo:string,index:number){
      const todoToedit=todolist[index];
      setTodo(todoToedit);
      deleteTodo(index)
      console.log(todo,index)
    }
  return (
    <>
      <h1>To Do List</h1>
      <TodoInput handleAddTodo={handleAddTodo} todo={todo} setTodo={setTodo}/>
      <TodoList todolist={todolist} deleteTodo={deleteTodo} editTodo={editTodo} />
      
       
    </>
  )
}

export default App
