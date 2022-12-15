import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../Pages/Home";
import Signin from "../Pages/Signin";
function AllRoutes() {
  return (
    <div>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
}
export default AllRoutes