import "./App.css";
import AddName from "./comonent/Addname";
import AddTodo from "./comonent/Addtodo";
import AddTodoItem1 from "./comonent/AddTodoItem1";

import AddTodoItem2 from "./comonent/AddTodoItem2";
function App() {
 return( <center class="todo-container">
    {/* heading */}
<AddName></AddName>
  {/* Input row with date an button */}
<AddTodo></AddTodo>
  {/* Items */}
<AddTodoItem1></AddTodoItem1>
<AddTodoItem2></AddTodoItem2>




















</center>
 );








}

export default App
