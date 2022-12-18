import React, { useState } from 'react';
import styles from './CartItem.module.css';

const CartItem = ({ele,width,index,handleChange}) => {
    let local = JSON.parse(localStorage.getItem("Cart"));
    const pri = parseFloat(ele.price) || 0
    const [tot,setTot] = useState(parseFloat(pri))
    
    const handleQty = (e)=>{
        setTot(e.target.value*pri);
        console.log(e.target.id);
        local[index].price=e.target.value*pri;
        local[index].quantity=e.target.value;
        localStorage.setItem('Cart', JSON.stringify(local));
        handleChange(local);
        console.log(local[index]);
    }
    const remove = () => {
        local.splice(index, 1);
        localStorage.setItem('Cart', JSON.stringify(local));
        handleChange(local);
    }
  return (
    <div>
       <div className="d-flex align-items-center justify-content-between py-3" style={{width:`${width}`,position:"relative"}}>
            <div className={`d-flex ${styles.items}`}>
                <div style={{width:"34%"}}>
                <img style={{width:"100%"}} src={ele.img} alt="" />
                </div>
                <div className={styles.info}>
                    <p>{ele.title}</p>
                    <p>Expected to ship on December 20, 2022</p>
                    <p>Style <span>#69606119</span></p>
                    <p>Color: <span> BLACK</span></p>
                    {/* <p>Size: <span>{ele.size}</span> </p> */}
                </div>

            </div>
            <div className={`d-flex justify-content-around ${styles.itemsPrice}`}>
                <p className="my-0">${ele.price}</p>
                <select onChange={handleQty}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <p className="my-0">${tot}</p>
            </div>
            <div className={`${styles.remove}`}> <p style={{cursor: "pointer",color:"blue",textDecoration:"underline"}} onClick={remove}>Remove</p> <a href="">Save for Later</a> </div>
        </div>
    </div>
  )
}

export default CartItem