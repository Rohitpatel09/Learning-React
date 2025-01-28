import { useState } from "react";
import styles from "./InputBox.module.css"
import { MdLibraryAdd } from "react-icons/md";
const InputBox=({HandleClick})=>{
const [itemName,setitemName]=useState();

const HandleChange=(event)=>{
    setitemName(event.target.value);
    
}

    return<div className={styles.con}> <input type="text" className={styles.input} placeholder="Enter Food Item Here" onChange={(event)=>HandleChange(event)}/>

    <button className={` {styles.btn} btn btn-success`} onClick={()=>HandleClick(itemName)}><MdLibraryAdd /></button>
    </div>
}
export default InputBox;