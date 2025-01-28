import "bootstrap/dist/css/bootstrap.min.css"
import Heading from "./component/Heading";
import FoodItems from "./component/FoodItems";
import ErrorMessage from "./component/ErrorMessage";
import Container from "./component/Container";
import InputBox from "./component/InputBox";

function App() {

let itemlist=["Roti","Dal","Chawal","Ghee","Milk","Coffee"];

let texttoshow="Food item entered by user";
const HandleChange=(event)=>{
  console.log(event.target.value);
texttoshow=event.target.value;
}
// problem : when we inside the component your component is state less.state means storing the information while component is painting 


  return<> 
<Container >
<Heading></Heading>
<InputBox HandleChange={HandleChange}></InputBox>
<p>{texttoshow}</p>
<ErrorMessage itemlist={itemlist}></ErrorMessage>
<FoodItems itemlist={itemlist}></FoodItems>
</Container>

{/*Using second container but with different component  */}
<Container>Above is the list of healthy foods that are food for your health and well being.</Container>

</>
}

export default App
