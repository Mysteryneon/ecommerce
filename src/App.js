import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import { Products, Navbar, Cart } from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./components/about-us/about-us.components";
import ContactUs from "./components/contact-us/contact-form.component";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
      const item = await commerce.cart.add(productId, quantity);
      setCart(item.cart);
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);

  return (
      <Router>
      <Navbar totalItems ={cart.total_items} />
      <Routes>
          <Route exact path="/" element={<Products products={products} onAddToCart={handleAddToCart} />}/>
          <Route exact path="/cart"element={<Cart cart={cart} />}/>
          <Route exact path="/aboutus"element={<AboutUs />}/>
          <Route exact path="/contactus"element={<ContactUs />}/>
      </Routes>
    </Router>
  );
};

export default App;
