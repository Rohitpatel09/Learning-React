import styles from "./InputBox.module.css"
const InputBox=()=>{
    const HandleChange=(event)=>{
        console.log(event.target.value);
    }
    
    return<div className={styles.con}> <input type="text" className={styles.input} placeholder="Enter Food Item Here" onChange={(event)=>HandleChange(event)}/>
    <button className={` {styles.btn} btn btn-success`}>Add</button>
    </div>
}
export default InputBox;