function AddTodo(){
    return <div className="row kg-row">
    <div className="col-5"><input type="text" placeholder="Enter Todo Here" /></div>
    <div className="col-5"><input type="date" /></div>
    <div className="col-2"><button className="btn btn-success kg-button">Add</button></div>

  </div>
}
export default AddTodo;