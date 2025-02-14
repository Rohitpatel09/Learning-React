import styles from "./ButtonContainer.module.css"
const Container=({Handleclick})=>{
    const buttonNames=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];
    
    return<div className={`${styles.buttoncontainer} btn-container`}>
{buttonNames.map(btn=><button key={btn}className={styles.btn} onClick={(event)=>Handleclick(btn,event)}>{btn}</button>)}
</div>
}
export default Container;