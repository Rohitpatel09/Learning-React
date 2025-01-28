import { useState } from "react";
import Item from "./item";

function FoodItems({itemlist}){
    const[activeitems,setactiveitems]=useState([]);
    const HandleBuyButton=(item,event)=>{
        
        setactiveitems([...activeitems,item]);
        
    }
    
    return<ul className="list-group">
    {itemlist.map(item=><Item item={item} key={item} bought={activeitems.includes(item)}HandleBuyButton={(event)=>HandleBuyButton(item,event)} ></Item>)}
    </ul>
}
export default FoodItems;