import { ITask } from '../interfaces/inrfaces';

interface TaskProps{ 
    task:ITask;
    deleteTask(id:number):void;
}

const ToDoList=({task,deleteTask}:TaskProps)=>{

    return(
        <li><span></span><div> {task.taskName}</div> <div onClick={()=>deleteTask(task.id)} >x</div></li>
    );
}
export default ToDoList;