import React from "react";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Products from "./Components/Products";
import ProductDetails from "./Components/ProductDetails";
const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-2 sidebar">
            <Sidebar />
          </div>
          <div className="col-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:productId" element={<ProductDetails />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
