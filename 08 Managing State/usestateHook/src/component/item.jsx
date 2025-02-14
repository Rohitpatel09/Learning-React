import styles from "./item.module.css"
function Item({item,HandleBuyButton}){
return<> <li className={`${styles.itm} list-group-item`}>{item}<button className={`${styles.btn} btn btn-success`} onClick={HandleBuyButton}>Buy</button></li></>
}
export default Item;