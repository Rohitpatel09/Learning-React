import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'

function App() {
  
 // let itemlist=[];
let itemlist=["Roti","Dal","Chawal","Ghee","Milk","Coffee"];
//  if(itemlist.length===0){
//   return <h3>I am still hungry</h3>
// }
  return<> 
 
    <h1>Healthy Food </h1>

 <ul class="list-group">
 {itemlist.length===0 && <h3>I am still hungry</h3>}
{itemlist.map(item=> <li className="list-group-item">{item}</li>)}
</ul>
</>
}

export default App
