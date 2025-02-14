import styles from "./InputBox.module.css"
const InputBox=({HandleChange})=>{
  
    return<div className={styles.con}> <input type="text" className={styles.input} placeholder="Enter Food Item Here" onChange={HandleChange}/>
    <button className={` {styles.btn} btn btn-success`}>Add</button>
    </div>
}
export default InputBox;