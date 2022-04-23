import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({ cartitems }) => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">SHOPPING CART</div>

        <ul className="nav-links">
          <div className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>

            <li>
              <Link to="/cart">
                <FaShoppingCart size={25} />
                {cartitems.length > 0 && (
                  <span className="cartlogo-span">{cartitems.length}</span>
                )}
              </Link>
            </li>
            <li className="signin">
              <Link to="/signin">Sign In</Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
