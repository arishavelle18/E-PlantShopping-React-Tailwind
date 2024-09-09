import { useState } from "react";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="cart" element={<CartItem />} />
            <Route path="aboutUs" element={<AboutUs />} />
            <Route path="productList" element={<ProductList />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* {navigation === "Home" || navigation === "" ? (
        <Home />
      ) : navigation === "Cart" ? (
        <CartItem />
      ) : navigation === "AboutUs" ? (
        <AboutUs />
      ) : (
        <ProductList />
      )} */}
    </>
  );
}

export default App;
