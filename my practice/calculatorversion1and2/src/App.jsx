
import { useState } from 'react';
import styles from './App.module.css'
import Container from './component/ButtonContainer'
import Display from './component/Display'

function App() {

const[calval,setcalval]=useState("");

const Handleclick=(btn,event)=>{
if(btn==="C"){
  setcalval("");

}
else if(btn==="="){
  setcalval(eval(calval))

}
else{
  setcalval(calval+btn);
}

}




  return (
    <div className={styles.calculator}>
   <Display calval={calval}></Display>
    <Container Handleclick={Handleclick}></Container>
    </div>
  )
}

export default App
