import CardTitle from "./Card-Title";

const Compo=()=>{

    const title=['Simle-Card','Happy-Card','Angry-Card'];

    return <>
      <div className="card">
  <div className="card-body">
  <CardTitle list={title}></CardTitle>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
     
    </>
}
export default Compo;