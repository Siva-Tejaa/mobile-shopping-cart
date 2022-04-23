import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import Signin from "./components/Signin/Signin";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer/Footer";
import Signup from "./components/Signup/Signup";

function App() {
  const notify = () =>
    toast.success("Your Item Added Successfully...", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const [cartitems, setCartItems] = useState([]);

  const addHandler = (product) => {
    const productexist = cartitems.find((prod) => prod.id === product.id);

    if (productexist) {
      setCartItems(
        cartitems.map((prod) =>
          prod.id === product.id
            ? { ...productexist, quantity: productexist.quantity + 1 }
            : prod
        )
      );
      notify();
    } else {
      setCartItems([...cartitems, { ...product, quantity: 1 }]);
      // alert("Added to Cart");
      notify();
      <Link to="/products">Products</Link>;
    }
  };

  const removeHandler = (item) => {
    const productexist = cartitems.find((prod) => prod.id === item.id);

    if (productexist.quantity === 1) {
      setCartItems(cartitems.filter((prod) => prod.id !== item.id));
    } else {
      setCartItems(
        cartitems.map((prod) =>
          prod.id === item.id
            ? { ...productexist, quantity: productexist.quantity - 1 }
            : prod
        )
      );
    }
  };

  const removeallHandler = () => {
    setCartItems([]);
  };

  return (
    <div className="App">
      <center>
        <Navbar cartitems={cartitems} />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route
            path="/products"
            exact
            element={<Products addHandler={addHandler} />}
          />
          <Route
            path="/cart"
            exact
            element={
              <Cart
                cartitems={cartitems}
                addHandler={addHandler}
                removeHandler={removeHandler}
                removeallHandler={removeallHandler}
              />
            }
          />
          <Route path="/signin" exact element={<Signin />} />
          <Route path="/signup" exact element={<Signup />} />
        </Routes>
        <Footer />
      </center>
    </div>
  );
}

export default App;
