import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Cart.module.css'
import CartItem from './CartItem';
import PaymentBox from './Payment';

const Cart = () => {
  let dat = JSON.parse(localStorage.getItem("Cart")) || [];
  const [d,setD] = useState(dat)
  const navigate = useNavigate();
  const handlClick = ()=>{
    navigate("/success")
  }
  const handleChange = (res)=>{
    setD(res);
  }
 let sum =0;
 let val=0;
  for(let i=0;i<dat.length;i++){
    //   console.log(dat[i].quantity);
    sum+= parseFloat(dat[i].price)
    if(dat[i].quantity===undefined){
        dat[i].quantity=1
    }else{
        val+=parseFloat(dat[i].quantity)
    }
 }
 
  return (
    <div>
      <div className="container border py-3" style={{maxWidth:"1325px",position:"relative"}}>
        <div className="d-flex align-items-center justify-content-between mb-2" style={{width:"65%"}}>
            <h2 className={styles.basket}>Basket</h2>
            <a href="">Delivery Options</a>
        </div>
        <div className="d-flex align-items-center justify-content-between py-3" style={{width:"65%",borderBottom:"1px solid #d3d3d3",borderTop:"1px solid #d3d3d3"}}>
            <div className={`d-flex justify-content-center align-items-center  ${styles.items}`}>
                <p className="my-0">{`Item: ${dat.length}`}</p>
            </div>
            <div className={`d-flex align-items-center justify-content-around ${styles.itemsPrice}`}>
                <p className="my-0">{`Item price:$ ${sum}`}</p>
                <p className="my-0">{`Quantity: ${val}`}</p>
                <p className="my-0">{`Total price:$ ${sum}`}</p>
            </div>
        </div>
        {d.map((item , index)=>{
          return <CartItem handleChange={handleChange} index={index} key={index} width="65%" ele={item}/>
        })}
        
        {/* <CartItem/> */}
        <PaymentBox data={d} clickMe={handlClick} title="CONFIRM PAYMENT"/>
      </div>
    </div>
  )
}

export default Cart