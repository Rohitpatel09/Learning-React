
import styles from "./FoodInput.module.css"


const FoodInput=(props)=>{
return <div className={styles.contain}><input type="text" placeholder="Search Here" className={styles.input} onKeyDown={(event)=>props.handleonchange(event)} />

<button type="button" className={`${styles.btn} btn btn-primary`} >Add</button>
</div>
}
export default FoodInput;