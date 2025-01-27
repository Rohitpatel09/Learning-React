import styles from "./Card.module.css"
import Price from "./Price";


const Card=({title,feature,extra,oldprice,newprice})=>{
return <div className={styles.container}>

<h4>{title}</h4>

<p>{feature}</p>
<p>{extra}</p>
<p>
        <s>₹{oldprice}</s> <strong>₹{newprice}</strong>
      </p>
</div>



}
export default Card;