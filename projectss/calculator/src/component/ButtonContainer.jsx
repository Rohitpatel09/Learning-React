import styles from "./ButtonContainer.module.css"
const ButtonContainer=()=>{
    const button=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];
    return  <div className={styles.buttonscontainer}>
   {button.map(item=><button className={styles.button}>{item}</button>)}
    
  </div>




}
export default ButtonContainer;