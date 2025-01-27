import Item from "./Item";
let FoodItem=(props)=>{
    return <>
     <ul className="list-group">
     {props.data.map(item=><Item key={item} data={item} handleBuyButton={()=>console.log(`${item} Bought`)}></Item>)}
  </ul>
    
    </>
}

export default FoodItem;