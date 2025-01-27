function NavBar (props){

  return <>
  {props.head.map(itm=><nav className="navbar bg-body-tertiary " key={itm}>
    <div className="container-fluid">
      <a className="navbar-brand">{itm}</a>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
    </nav>)}
 </>
}
export default NavBar;