import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../Pages/Home";

function AllRoutes() {
  return (
    <div>
    
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
  );
}
export default AllRoutes