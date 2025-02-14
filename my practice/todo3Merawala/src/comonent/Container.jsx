import AddTodoItem from "./AddTodoItem";

const Container=({list,Handledelete})=>{
return <>
{list.map(itm=><AddTodoItem key={itm}todoitem={itm.name} tododate={itm.date} Handledelete={Handledelete}></AddTodoItem>)}

</>

}
export default Container;