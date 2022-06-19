import React, {useState, useEffect} from "react";
import {commerce} from "./lib/commerce";
import {Products, Navbar, Cart, Checkout} from "./components";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AboutUs from "./components/about-us/about-us.components";
import ContactUs from "./components/contact-us/contact-form.component";
import AppFooter from "./components/Footer/app-footer";
import ProductDetails from "./components/ProductDescription/product-description";
import {makeStyles} from "@material-ui/core/styles";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: "150px",
    ['@media (max-width: 1000px)']: {
      marginBottom: '200px',
    },
    padding: "12px",
  },
}));

const App = () => {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const {data} = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const {cart} = await commerce.cart.add(productId, quantity);
    setCart(cart);
  }

  const handleUpdateCartQty = async (productId, quantity) => {
    const {cart} = await commerce.cart.update(productId, {quantity});

    setCart(cart);
  }

  const handleRemoveFromCart = async (productId) => {
    const {cart} = await commerce.cart.remove(productId);

    setCart(cart);
  }
  const handleEmptyCart = async () => {
    const {cart} = await commerce.cart.empty();
    setCart(cart);
  }
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);

  return (
    <div>
      <Router>
        <Navbar totalItems={cart.total_items}/>
        <div className={classes.container}>
          <Routes>
            <Route exact path="/" element={<Products products={products} onAddToCart={handleAddToCart}/>}/>
            <Route exact path="/cart" element={<Cart
              cart={cart}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart}
            />}/>
            <Route exact path="/aboutus" element={<AboutUs/>}/>
            <Route exact path="/contactus" element={<ContactUs/>}/>
            <Route exact path="/checkout" element={<Checkout/>}/>
            <Route exact path="/details" element={<ProductDetails onAddToCart={handleAddToCart} />} />
          </Routes>
        </div>
        <AppFooter/>
      </Router>
    </div>
  );
};

export default App;
