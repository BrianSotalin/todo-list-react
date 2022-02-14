import React, { useState } from "react";
import './App.css';
import {TaskRow} from './components/TaskRow'
import {TaskBanner} from './components/TaskBanner'
import {TaskCreator} from './components/TaskCreator'
import { VisibilityControl } from "./components/VisibilityControl"; 

function App() {
  const [userName,setUserName]=useState("Sota");
  const [taskItem,setTaskItem]=useState([
    {name: 'Tarea-1',done:false},
    {name: 'Tarea-2',done:false},
    {name: 'Tarea-3',done:true},
    {name: 'Tarea-4',done:false}
  ]);

  const[ShowCompleteTask,setShowCompleteTask]=useState(true);
  
  const createNewTask = taskName =>{
    if(!taskItem.find(t => t.name === taskName)){//...""- selecciona los datos anteriores
      setTaskItem([...taskItem,{name: taskName , done: false}])
    }else{
      alert("La tarea ya existe")
    }
  }

  const toggleTask = task =>
  setTaskItem(taskItem.map( t =>( t.name === task.name ?{...t, done: !t.done} : t)))


  const taskTableRows = (doneValue) =>
  taskItem
  .filter(task => task.done === doneValue)
  .map(task =>(
    <TaskRow   task={task} key={task.name}  toggleTask={toggleTask}/>
  ))

  
  return (
    <div id="container">
       <TaskBanner userName={userName} taskItem={taskItem}></TaskBanner>
       {/* se puede poner cuallquier nombre a la variable*/}
       <TaskCreator callback={createNewTask}></TaskCreator>
      <table className="table table-striped table-bordered">
        <thead>
        <tr>
          <th >Description</th>
          <th >Done</th>
        </tr>
        </thead>
      <tbody>
        {taskTableRows(false)}
      </tbody>
      </table>
      <div>
        <VisibilityControl description="tareas completas" isChecked={ShowCompleteTask} callback={checked => setShowCompleteTask(checked)}></VisibilityControl>
      </div>
      {
        ShowCompleteTask && (
          <table className="table table-striped table-bordered">
          <thead>
          <tr>
            <th >Description</th>
            <th >Done</th>
          </tr>
          </thead>
        <tbody>
          {taskTableRows(true)}
        </tbody>
        </table>
        )
      }
    </div>
  );
}

export default App;
