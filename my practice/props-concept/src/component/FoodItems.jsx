import Item from "./item";

function FoodItems({itemlist}){
    return<ul class="list-group">
    {itemlist.map(item=><Item item={item}></Item>)}
    </ul>
}
export default FoodItems;