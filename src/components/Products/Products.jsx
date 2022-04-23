import React, { useEffect, useState } from "react";
import "./Products.css";
import ProductsDisplay from "./ProductsDisplay";
import { getdata } from "../Service/Service";
import { ToastContainer } from "react-toastify";

const Products = ({ addHandler }) => {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // axios
    //   .get("http://localhost:3000/productitems")
    //   .then((response) => setProducts(response.data))
    //   .catch((err) => console.log(err));

    getdata()
      .then((response) => {
        setProducts(response.data);
        setLoading(true);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Iam from Products Component</h2>
      <h3>Products list</h3>

      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />

      <br />

      {loading ? (
        <ProductsDisplay products={products} addHandler={addHandler} />
      ) : (
        <img
          src="https://www.linkpicture.com/q/LPic6263e044b7fe1617934741.gif"
          alt="loading gif"
        />
      )}
    </div>
  );
};

export default Products;
