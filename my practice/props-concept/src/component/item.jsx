import styles from "./item.module.css"
function Item({item}){
return <li className={`${styles.itm} list-group-item`}>{item}</li>;
}
export default Item;