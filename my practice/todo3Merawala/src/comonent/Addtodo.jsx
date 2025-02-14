function AddTodo({Handleclick,Handlechange,Handledate}){
    return <div className="row">
    <div className="col-5">
      <input type="text" placeholder="Enter Todo Here" onChange={Handlechange}/>
    </div>

    <div className="col-5">
      <input type="date" onChange={Handledate} />
    </div>

    <div className="col-2">
      <button className="btn btn-success" onClick={Handleclick}>Add</button>
    </div>

  </div>
}
export default AddTodo;