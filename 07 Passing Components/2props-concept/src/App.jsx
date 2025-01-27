import "bootstrap/dist/css/bootstrap.min.css"
import Heading from "./component/Heading";
import FoodItems from "./component/FoodItems";
import ErrorMessage from "./component/ErrorMessage";
import Container from "./component/Container";
import InputBox from "./component/InputBox";

function App() {

let itemlist=["Roti","Dal","Chawal","Ghee","Milk","Coffee"];
  return<> 
<Container >
<Heading></Heading>
<InputBox></InputBox>
<ErrorMessage itemlist={itemlist}></ErrorMessage>
<FoodItems itemlist={itemlist}></FoodItems>
</Container>

{/*Using second container but with different component  */}
<Container>Above is the list of healthy foods that are food for your health and well being.</Container>

</>
}

export default App
