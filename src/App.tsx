import React,{useEffect, useState} from 'react';
import * as C from './styles/styles';
import ToDoList from './components/ToDoList'
import Global from './styles/global';
import { ITask } from './interfaces/inrfaces';

function App() {

  const [task,setTask]=useState<string>("");
  const [todoList,setTodoList]=useState<ITask[]>([]);
  const [id,setId]=useState<number>(0);
  
  const addTask=():void=>{
    setId(id+1);
    const newTask={id:id,taskName:task}
    setTodoList([...todoList,newTask]);
    setTask("");
  }

  const deleteTask=(id:number)=>{
    setTodoList(todoList.filter((item)=>item.id!==id));
  }

  return (
    <>
      <Global/>
      <C.Container> 
        <h2>List</h2>
        <input type="text" placeholder='deigite a tarefa'
        name="task" className="input" value={task} 
        onChange={(event)=>setTask(event.target.value)}></input>
       
        <button  type="submit" onClick={addTask} className="btn-header">add tarefa</button>
        <ul>  
          {todoList.map((item,id)=>(<ToDoList key={id} deleteTask={deleteTask} task={item}/>))}
        </ul>
      </C.Container>
    </>
  );
}

export default App;
