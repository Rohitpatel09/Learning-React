//Component Phases
//1)initilization: component bante h
//2)Mounting(component ko use karna):jo koi component screen ke upr visible hota h
//3)Updation
//4)UnMounting(component ko Hatana)



import { useState } from 'react';
import './App.css'
import { useEffect } from 'react';
import { use } from 'react';

function App() {
  const [count, setCount] = useState(0)
  const [total, setTotal] = useState(0)
const HandleClick=()=>{
setCount(count+1);
} 

const HandleTotal=()=>{
  setTotal(total+1)
}

//first:side-effect function(jisme logic likhege)
//second: Cleanup function(unmounting)
//third: comma separated dependencies list
// useEffect(()=>{
// first

// return ()=>{
//   second
//     }

// },[third])

// variation 1:run on every render
// useEffect(()=>{
//   alert("Run every time");
// })

//variation 2: run on only first render
// useEffect(()=>{
// alert("I will run on only first render")
// },[])

//variation 3: run when count update
// useEffect(()=>{
// alert("I will run every time when count is updated")
// },[count])

//variation 4: multiple dependencies
// useEffect(()=>{
// alert("I will run when count / total is updated")
// },[count,total])

//variation 5: adding cleanup function
// useEffect(()=>{
//   alert("count is updated");

//   return()=>{
// alert("count is unmounted from UI");
//   }
// },[count])

const[timer,setTimer]=useState(1);
useEffect(()=>{
  let timer=setTimeout(() => {
    setTimer((count)=>count+1);
  },1000);
})
  return (
    <>
    <h1>{timer}</h1>
    <p>{count}</p>
   <button onClick={HandleClick}>Click Me</button>
  
    <p>{total}</p>
   <button onClick={HandleTotal}>Total count</button>
    </>
  )
}

export default App
