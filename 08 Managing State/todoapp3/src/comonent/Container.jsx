import AddTodoItem from "./AddTodoItem";

const Container=({list})=>{
return <>
{list.map(itm=><AddTodoItem todoitem={itm.name} tododate={itm.date}></AddTodoItem>)}

</>

}
export default Container;