import styles from "./Item.module.css"
const Item=(props)=>{
   
   return <><li className="list-group-item">{props.data}
   <button className={`${styles.button} btn btn-success`} onClick={props.handleBuyButton}>Buy</button></li>


</>


}
export default Item;