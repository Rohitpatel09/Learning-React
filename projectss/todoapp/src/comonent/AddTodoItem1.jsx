function AddTodoItem1(){
    let todoitem='Milk cake';
    let tododate='17/10/2005';




    return <div class="row">
    <div class="col-5">{todoitem}</div>
    <div class="col-5">{tododate}</div>
    <div class="col-2"><button class="btn btn-danger">Delete</button></div>
  
   </div>
    
}
export default AddTodoItem1;