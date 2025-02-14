import styles from "./InputBox.module.css"
const InputBox=({HandleChange,HandleKeyDown})=>{



  
    return<div className={styles.con}> <input type="text" className={styles.input} placeholder="Enter Food Item Here" onChange={HandleChange} onKeyDown={HandleKeyDown}/>


    <button className={` {styles.btn} btn btn-success`}>Add</button>
    </div>
}
export default InputBox;