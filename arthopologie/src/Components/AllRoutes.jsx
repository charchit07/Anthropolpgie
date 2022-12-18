import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../Pages/Home";
import Signin from "../Pages/Signin";
import Products from "../Pages/Products";
import Cart from "../Components/Carts/Cart"
// import PaymentBox from "../Components/Carts/Payment"

import Success from "../Pages/Success"
function AllRoutes() {
  return (
    <div>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={
       
         <Cart />
      
        } />
        {/* <Route path="/payment" element={<PaymentBox />} /> */}
        <Route path="/success" element={<Success />} />
      </Routes>
    </div>
  );
}
export default AllRoutes