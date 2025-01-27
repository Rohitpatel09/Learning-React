import Item from "./item";

function FoodItems({itemlist}){
    return<ul className="list-group">
    {itemlist.map(item=><Item item={item} key={item}></Item>)}
    </ul>
}
export default FoodItems;