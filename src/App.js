import React, { useState } from "react";
import './App.css';

function App() {
  const [userName,setUserName]=useState("Sota");
  const [taskItem,setTaskItem]=useState([
    {name: 'Tarea-1',done:false},
    {name: 'Tarea-2',done:false},
    {name: 'Tarea-3',done:true},
    {name: 'Tarea-4',done:false}
  ]);
  const taskTableRows=()=>{
   return taskItem.map(task=>(
      <tr>
        <td>{task.name}</td>
      </tr>
   ))
  }
  return (
    <div class="container">
      <h1>sota</h1>
      <table>
        <tr>
          <th class="desc">Description</th>
          <th class="action">Done</th>
        </tr>
      </table>
      <tbody>
        {taskTableRows()}
      </tbody>
    </div>
  );
}

export default App;
