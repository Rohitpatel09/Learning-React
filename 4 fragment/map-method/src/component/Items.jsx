function Items({list}){
    return<ul class="list-group">
    {list.map(itm=> <li class="list-group-item">{itm}</li> )}
   </ul>
}
export default Items;