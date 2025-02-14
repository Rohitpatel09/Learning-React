import Item from "./item";

function FoodItems({itemlist}){
    const HandleBuyButton=()=>{
        // return <button className={`${styles.btn} btn btn-danger`} >Buy</button>
        console.log("clicked")
        
    }
    
    return<ul className="list-group">
    {itemlist.map(item=><Item item={item} key={item} HandleBuyButton={HandleBuyButton} ></Item>)}
    </ul>
}
export default FoodItems;