import "bootstrap/dist/css/bootstrap.min.css"
import Heading from "./component/Heading";
import FoodItems from "./component/FoodItems";
import ErrorMessage from "./component/ErrorMessage";
import Container from "./component/Container";
import InputBox from "./component/InputBox";
import { useState } from "react";

function App() {
const[itemlist,setitemlist]=useState(["Roti","Milk","Coffee"]);


const HandleClick=(itemName)=>{
setitemlist([...itemlist,itemName]);
}

  return<> 
<Container >
<Heading></Heading>
<InputBox HandleClick={HandleClick}></InputBox>
{/* <p>{textshow}</p> */}
<ErrorMessage itemlist={itemlist}></ErrorMessage>
<FoodItems itemlist={itemlist}></FoodItems>
</Container>


</>
}

export default App
