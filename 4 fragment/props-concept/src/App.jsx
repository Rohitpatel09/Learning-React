import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import ErrorMessage from "./component/ErrorMessage";
import FoodItem from "./component/FoodItem";
import Container from "./component/Container";
import FoodInput from "./component/FoodInput";
import { useState } from "react";
function App() {
  let TextareaShow="Food Item Entered by user";

// state

// let TextArr=useState("Food Item Entered by user");
// let TextVal=TextArr[0];
// let setTextVal=TextArr[1];

// let [TextVal,setTextVal]=useState("Food Item Entered by user");

// const handleinput=(event)=>{
// console.log(event.target.value)
// setTextVal(event.target.value);

// let [TextVal,setTextVal]=useState("Food Item Entered by user");

let [fooditem,setfooditem]=useState(["Dal","Chawal","Roti","Salad","Ghee"])




const handleinput=(event)=>{
if(event.key==="Enter"){
  let newfood=event.target.value;
  event.target.value='';
  let newitem=[...fooditem,newfood];
  setfooditem(newitem);
}
}


  


    

  
  
  return(
    <>
    <Container>
    <h1>Healthy Food </h1>
    <FoodInput handleonchange={handleinput} > </FoodInput>


  <ErrorMessage data={fooditem}></ErrorMessage>

  {/* <p>{TextVal}</p>
   */}

  <FoodItem data={fooditem}></FoodItem>
    </Container>
   
    </>
  );
}

export default App
