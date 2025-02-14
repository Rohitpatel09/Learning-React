function AddTodoItem({todoitem,tododate,Handledelete}){
    return <div className="row">
    <div className="col-5">{todoitem}</div>
    <div className="col-5">{tododate}</div>
    <div className="col-2"><button className="btn btn-danger" onClick={()=>Handledelete(todoitem)}>Delete</button></div>
  
   </div>
    
}
export default AddTodoItem;