import React, {useState} from 'react';
import ToDoList from './ToDoList';
export default function BasicRam() {
  const[task,setTask]=useState("");
  const[tds,setTds]=useState([])
  const changeHandler=(event)=>{
setTask(event.target.value)
  }
  
  const submitHandler=(event)=>{
    event.preventDefault();
   const newTds=[...tds,task];
   setTds(newTds);
   setTask("");
  }
  const deleteHandler=(indexValue)=>{
    const newTds=tds.filter((td,index)=>index!==indexValue);
    setTds(newTds)
  }

  return (
    <center>
    <div class="card">
    <div class="card-body"><div>
    <h5 class="card-title">Phone number</h5>
    <form onSubmit={submitHandler}>
    <input type="text" name="task" value={task}  onChange={changeHandler}/>&nbsp;&nbsp;
<input type="submit" value="Add contact"/>
</form>
<ToDoList tds={tds} deleteHandler={deleteHandler}/>
    </div>
    </div>
    </div>
    </center>
  )
}

