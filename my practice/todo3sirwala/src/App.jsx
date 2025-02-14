import "./App.css";

import AddName from "./comonent/Addname";
import AddTodo from "./comonent/Addtodo";
import "./App.css";
import AddTodoItem from "./comonent/AddTodoItem";
import Container from "./comonent/Container";
import { useState } from "react";
import Message from "./comonent/Message";
function App() {
    
    const [list,setlist]=useState([{
        name:"Milk Cake",
        date:"5/4/2000",
    },{
        name:"Icecream",
        date:"17/2/1998",
    },{
        name:"Pani Puri",
        date:"01/12/2007",
    }])

   
const Handleclick=(itemName,itemDate)=>{
    setlist([...list,{name:itemName,date:itemDate}]);
   
}

const Handledelete=(todoitemName)=>{
let remainlist= list.filter(itm=>itm.name!==todoitemName)
setlist(remainlist);


}




 return( <center className="todo-container">
<AddName className="todoheading"></AddName>
<AddTodo Handleclick={Handleclick} ></AddTodo>
<Message list={list}></Message>

{/* {list.map((itm)=> <AddTodoItem todoitem={itm.name} tododate={itm.date}></AddTodoItem>)} */}

<Container list={list} Handledelete={Handledelete}></Container>

 
 </center>
 );








}

export default App
