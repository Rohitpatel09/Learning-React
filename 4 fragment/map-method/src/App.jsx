
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Heading from './component/Heading'
import Items from './component/Items'
function App() {
  let fooditem=["Dal","Chawal","Roti","Salad","Ghee","Rice"]
  return<>
  <Heading></Heading>
  <Items list={fooditem}></Items>
  </>

}

export default App
