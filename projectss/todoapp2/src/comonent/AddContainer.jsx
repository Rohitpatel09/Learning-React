import AddTodoItem from "./AddTodoItem";

const AddContainer=({itemdetails})=>{
    return <div className="items-container">
        {itemdetails.map(item=><AddTodoItem itemname={item.name} itemdate={item.date}></AddTodoItem>)}
    

    </div>
}

export default AddContainer;