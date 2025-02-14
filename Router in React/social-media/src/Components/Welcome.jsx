const Welcome=({HandlePost})=>{
return <div className="p-5 text-center bg-body-tertiary rounded-3 welcome">
<svg className="bi mt-5 mb-3 " width="48" height="48"><use xlinkHref="#check2-circle"></use></svg>
<h1 className="text-body-emphasis">💬 Welcome aboard! </h1>
<p className="col-lg-8 mx-auto fs-5 text-muted">
Drop a 👋 in the comments and let us know you're here. We love hearing from you!"
</p>
<br />
<div className="d-inline-flex gap-2 mb-5">
  <button className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill" type="button" onClick={HandlePost}>
   Click To Fetch
    <svg className="bi ms-2" width="24" height="24"><use xlinkHref="#arrow-right-short"></use></svg>
  </button>

</div>
</div>


}
export default Welcome;