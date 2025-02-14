import { useEffect, useState } from 'react'
import './App.css'
import './index.css'
function App() {
  const [ison, setIson] = useState(false)

  const HandleBtn=()=>{
    if(ison===true){
      setIson(false);
    }
    else{
      setIson(true)
    }
    console.log(ison)
    
  }

  useEffect(()=>{
    document.body.style.backgroundColor=ison?"#242424":"#ffffff";
  },[ison])






  return (
    <div className={`toggle-switch ${ison&&"backon"}`} onClick={()=>HandleBtn()}>
     <div className={`switch ${ison?"on":"off"}`} >
      <span  className='switch-state'>{ison===true?"On":"Off"}</span >
     </div>
    </div>
  )
}

export default App
