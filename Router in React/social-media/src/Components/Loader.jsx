const Loader=()=>{
return <div className="loader text-center" >
<div className="spinner-border text-success" role="status"  style={{width: "5rem", height: "5rem"}}>
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-border text-danger" role="status"  style={{width: "5rem", height: "5rem"}}>
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-border text-warning" role="status"  style={{width: "5rem", height: "5rem"}}>
  <span className="visually-hidden">Loading...</span>
</div>
</div>


}
export default Loader;