import { useState } from "react";

function AddTodo({Handleclick}){

  const [itemName,setitemName]=useState();
  const [itemDate,setitemDate]=useState();

const Handlechange=(event)=>{
  setitemName(event.target.value);
}
const Handledate=(event)=>{
  setitemDate(event.target.value);
}

  return <div className="row">
    <div className="col-5">
      <input type="text" placeholder="Enter Todo Here" value={itemName} onChange={(event)=>Handlechange(event)}/>
    </div>

    <div className="col-5">
      <input type="date" value={itemDate} onChange={(event)=>Handledate(event)} />
    </div>

    <div className="col-2">
      <button className="btn btn-success" onClick={()=>Handleclick(itemName,itemDate)}>Add</button>
    </div>

  </div>
}
export default AddTodo;