import styles from "./item.module.css"
function Item({item}){
const HandleBuyButton=(event)=>{
    // return <button className={`${styles.btn} btn btn-danger`} >Buy</button>
    console.log(`${item} has been bought`)
    console.log(event.target);
}





return<> <li className={`${styles.itm} list-group-item`}>{item}<button className={`${styles.btn} btn btn-success`} onClick={(event)=>HandleBuyButton(event)} >Buy</button></li></>
}
export default Item;