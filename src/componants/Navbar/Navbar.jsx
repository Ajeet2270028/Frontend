import React, { useContext, useRef } from "react";
import "./Navbar.css";
import shopping_cart from "../Assets/shopping_cart.png";
import logo from "../Assets/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import nav_dropdown from "../Assets/dropdown5.jpg";
import searchicon from "../Assets/search.jpeg";
import saveIcon from "../Assets/heart.png";
//import {style} from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();
  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo-image" />
        <p>SWIFTCART</p>
      </div>
      <img
        className="nav-dropdown"
        onClick={dropdown_toggle}
        src={nav_dropdown}
        alt=""
      />
      {/* <i className="fa-solid fa-bars" onClick={dropdown_toggle}></i> */}

      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link
            style={{
              textDecorationLine: "none",
              color: "black",
              fontWeight: "bold",
            }}
            to="/"
          >
            SHOP
          </Link>{" "}
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link
            style={{
              textDecorationLine: "none",
              color: "black",
              fontWeight: "bold",
            }}
            to="/mens"
          >
            MEN
          </Link>{" "}
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("womens");
          }}
        >
          <Link
            style={{
              textDecorationLine: "none",
              color: "black",
              fontWeight: "bold",
            }}
            to="/womens"
          >
            WOMEN
          </Link>{" "}
          {menu === "womens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link
            style={{
              textDecorationLine: "none",
              color: "black",
              fontWeight: "bold",
            }}
            to="/kids"
          >
            KIDS
          </Link>{" "}
          {menu === "kids" ? <hr /> : <></>}
        </li>
        <li>
          <div className="search">
            <input
              className="search-input"
              type="search"
              placeholder="Search for products"
            />
            <a href="">
              <i className="fas fa-search"></i>
            </a>
          </div>
        </li>
      </ul>
      {/* <div className="search">
        <input
          className="search-input"
          type="search"
          placeholder="Search for products"
        />
        <a href="">
          <i className="fas fa-search"></i>
        </a>
      </div> */}
      <div className="nav-login">
        {localStorage.getItem("auth-token") ? (
          <button
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/");
            }}
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
        <div className="saveproduct">
          {/* <i class="bi bi-heart-fill"></i> */}
          <Link to="/saveproduct">
            <img src={saveIcon} alt="" />
          </Link>
        </div>
        <div className="cart">
          <Link to="/cart">
            <img className="img" src={shopping_cart} alt="cart image" />
          </Link>
        </div>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
