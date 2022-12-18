import React,{ useState,useEffect } from "react";
import styles from "./PaymentBox.module.css";
 

const PaymentBox = (props) => {
  const [total, settTotal] = useState(0);
  
  const handleChange =()=>{
    let t = props.data.reduce(function(acc,ele){
        return acc + parseFloat(ele.price);
    },0)
    settTotal(t)

    console.log("Inside payment",props.data);
}
useEffect(() => {
  handleChange();
},[props.data]);
let shipping= Math.ceil((total/100)*3)
let tax=Math.ceil((total/100)*15)
let totalPrice=total+shipping+tax
  return (
    <div
    className={styles.mainDiv}
      style={{top:`${props.top}`}}
      key={props.data.id}
    >
      <div className="d-flex align-items-center justify-content-between mb-2">
        <h2 className={styles.orderSummary}>Order Summary</h2>
       
      </div>
      <div className="border px-4 py-3">
        <div className={`d-flex justify-content-between ${styles.orderInfo} `}>
          <p>Subtotal</p>
          <p>${total}</p>
        </div>
        <div className={`d-flex justify-content-between ${styles.orderInfo} `}>
          <p>{`Shipping: $ ${shipping}`}</p>
        </div>
        <div className={`d-flex justify-content-between ${styles.orderInfo} `}>
          <p>{`Estimated Tax: $ ${tax}`}</p>
        </div>
        <div className={`d-flex justify-content-between ${styles.orderInfo} `}>
          <p style={{ color: "black" }}>Total</p>
          <p style={{ color: "black" }}>${totalPrice}</p>
        </div>
        <div>
          <button className={styles.button} onClick={()=>props.clickMe()} >{props.title } </button>
          
        </div>

        <hr />
      </div>
    </div>
  );
};

export default PaymentBox;