import { useState,useEffect } from 'react'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/Todolist'

function App() {
  const [todolist, setTodolist]=useState([])
  const [todo,setTodo]=useState('');
  useEffect(()=>{
    // if(!localStorage){
    //   return true;
    // }
    // if(!localStorage.getItem('todolist')){
    //   return true;
    // }
    const data=localStorage.getItem('todolist');
    if(data){
      setTodolist(JSON.parse(data))
    }
  },[]);
  function saveToLocalStorage(todolist:string[]){
    localStorage.setItem('todolist',JSON.stringify(todolist))
  }

  function handleAddTodo(newTodo:string){
    setTodolist([...todolist,newTodo]);
    saveToLocalStorage([...todolist,newTodo]);
    }
    function deleteTodo(delindex:number){
      const newtodos=todolist.filter((todo:string,index:number)=>{
        return index!==delindex
       
      })
      setTodolist(newtodos)
      saveToLocalStorage(newtodos);
    }
    function editTodo(todo:string,index:number){
      const todoToedit=todolist[index];
      setTodo(todoToedit);
      deleteTodo(index);
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
