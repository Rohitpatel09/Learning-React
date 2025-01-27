import styles from "./ButtonContainer.module.css"
const Container=({buttonNames})=>{
    return<div className={`${styles.buttoncontainer} btn-container`}>
{buttonNames.map(btn=><button className={styles.btn}>{btn}</button>)}
    </div>
}
export default Container;