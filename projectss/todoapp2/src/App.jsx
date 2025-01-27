import "./App.css";

import AddName from "./comonent/Addname";
import AddTodo from "./comonent/Addtodo";
import "./App.css";
import AddContainer from "./comonent/AddContainer";



function App() {
    let list=[{
        name:"Milk Cake",
        date:"17/2/2004",
    },{
        name:"Icecream",
        date:"17/2/2004",
    },{
        name:"Pani Puri",
        date:"17/2/2004",
    },{
        name:"Bhel Puri",
        date:"17/2/2004",
    }];

 return( <center className="todo-container">
<AddName className="todoheading"></AddName>
<AddTodo></AddTodo>
<AddContainer itemdetails={list}></AddContainer>

 
 
 </center>
 );








}

export default App
