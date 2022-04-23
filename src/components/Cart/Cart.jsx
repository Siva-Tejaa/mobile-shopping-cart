import React from "react";
import "./Cart.css";
import swal from "sweetalert";

const Cart = ({ addHandler, cartitems, removeHandler, removeallHandler }) => {
  // const itemsprice = cartitems.reduce((a, c) => a + c.price * c.qty, 0);
  const itemsprice = cartitems
    .map((item) => item.price * item.quantity)
    .reduce((prev, current) => prev + current, 0);

  // const totalprice = itemsprice;

  return (
    <div className="main-div">
      <div className="Cart-Container">
        <div className="Header">
          <h3 className="Heading">Shopping Cart</h3>
          <h5 className="Action" onClick={() => removeallHandler()}>
            Remove all
          </h5>
        </div>
        <div>
          {cartitems.length === 0 && (
            <div style={{ "padding-bottom": "20px", "font-size": "25px" }}>
              Cart is Empty
            </div>
          )}
        </div>
        {cartitems.map((item) => (
          <div className="Cart-Items" key={item.id}>
            <div className="image-box">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="about">
              <h1 className="title">{item.title}</h1>
            </div>
            <div className="counter">
              <div className="btn" onClick={() => addHandler(item)}>
                +
              </div>
              <div className="count">{item.quantity}</div>
              <div className="btn" onClick={() => removeHandler(item)}>
                -
              </div>
            </div>
            <div className="prices">
              <div className="amount">₹ {item.price.toFixed(2)}</div>
              {/* <div className="save">
                <u>Save for later</u>
              </div>
              <div className="remove">
                <u>Remove</u>
              </div> */}
            </div>
          </div>
        ))}

        {cartitems.length > 0 && (
          <>
            <hr />
            <div className="checkout">
              <br />
              <div className="total">
                <div>
                  <div className="Subtotal">Sub-Total</div>
                  <div className="items">{cartitems.length} Items</div>
                </div>
                <div className="total-amount">₹ {parseInt(itemsprice)}</div>
              </div>
              <br />
              <button
                className="button"
                onClick={() => {
                  swal(
                    "Success",
                    "Your Product Ordered Successfully",
                    "success"
                  );
                }}
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
