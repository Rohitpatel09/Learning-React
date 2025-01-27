import "bootstrap/dist/css/bootstrap.min.css"
import Heading from "./component/Heading";
import FoodItems from "./component/FoodItems";
import ErrorMessage from "./component/ErrorMessage";

function App() {

let itemlist=["Roti","Dal","Chawal","Ghee","Milk","Coffee"];
  return<> 
<Heading></Heading>
<ErrorMessage itemlist={itemlist}></ErrorMessage>
<FoodItems itemlist={itemlist}></FoodItems>
</>
}

export default App
