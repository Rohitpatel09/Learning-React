function AddTodoItem2(){
    let todoitem='Butter chiken';
    let tododate='12/10/2009';



    return  <div class="row">
    <div class="col-5">{todoitem}</div>
    <div class="col-5">{tododate}</div>
    <div class="col-2"><button class="btn btn-danger">Delete</button></div>
  
   </div>
   
   
}
export default AddTodoItem2;