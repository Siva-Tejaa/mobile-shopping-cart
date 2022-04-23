import React from "react";

const ProductsDisplay = ({ products, addHandler }) => {
  return (
    <div>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="container">
            <div className="card">
              <div className="card-image">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="card-body">
                <h4>
                  <b>{product.title}</b>
                </h4>
              </div>
              <div className="card-body-price">
                <h3>
                  <b>₹ {product.price}</b>
                </h3>
              </div>
              <div className="card-body-price">
                <button
                  className="card-btn"
                  onClick={() => addHandler(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsDisplay;
