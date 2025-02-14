import "bootstrap/dist/css/bootstrap.min.css"
import Heading from "./component/Heading";
import FoodItems from "./component/FoodItems";
import ErrorMessage from "./component/ErrorMessage";
import Container from "./component/Container";
import InputBox from "./component/InputBox";
import { useState } from "react";

function App() {

let itemlist=["Roti","Dal","Chawal","Ghee","Milk","Coffee"];

const [textshow,settextshow]=useState("Food item entered by user")
const HandleChange=(event)=>{
  console.log(event.target.value);
settextshow(event.target.value);
}
  return<> 
<Container >
<Heading></Heading>
<InputBox HandleChange={HandleChange}></InputBox>
<p>{textshow}</p>
<ErrorMessage itemlist={itemlist}></ErrorMessage>
<FoodItems itemlist={itemlist}></FoodItems>
</Container>


</>
}

export default App
