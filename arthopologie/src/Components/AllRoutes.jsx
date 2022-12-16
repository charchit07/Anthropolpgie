import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../Pages/Home";
import Signin from "../Pages/Signin";
import Products from "../Pages/Products"
function AllRoutes() {
  return (
    <div>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}
export default AllRoutes