import styles from './Display.module.css';
const Display=({calval})=>{
    return  <input type="text" className={styles.display} value={calval} readOnly/>
    
}
export default Display;