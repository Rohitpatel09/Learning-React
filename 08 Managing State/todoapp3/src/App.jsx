import "./App.css";

import AddName from "./comonent/Addname";
import AddTodo from "./comonent/Addtodo";
import "./App.css";
import AddTodoItem from "./comonent/AddTodoItem";
import Container from "./comonent/Container";

function App() {
    let list=[{
        name:"Milk Cake",
        date:"5/4/2000",
    },{
        name:"Icecream",
        date:"17/2/1998",
    },{
        name:"Pani Puri",
        date:"01/12/2007",
    },{
        name:"Bhel Puri",
        date:"7/9/2001",
    }];

 return( <center className="todo-container">
<AddName className="todoheading"></AddName>
<AddTodo></AddTodo>

{/* {list.map((itm)=> <AddTodoItem todoitem={itm.name} tododate={itm.date}></AddTodoItem>)} */}

<Container list={list}></Container>

 
 </center>
 );








}

export default App
