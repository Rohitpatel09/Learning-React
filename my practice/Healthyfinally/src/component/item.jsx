import styles from "./item.module.css"
function Item({item,bought,HandleBuyButton}){
return<> <li className={`${styles.itm} list-group-item ${bought && "active"}`}>{item}<button className={`${styles.btn} btn btn-success `} onClick={HandleBuyButton}>Buy</button></li></>
}
export default Item;