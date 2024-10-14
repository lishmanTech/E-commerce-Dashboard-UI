// src/App.jsx
import React, { useState } from "react";
import headlogo from "../Asset/headlogo.svg";
import sb from "../Asset/sb.svg";
import arrowDown from "../Asset/Arrow Down.svg";
import notibell from "../Asset/Badge.svg";
import statistic from "../Asset/Chart Statistics 2.svg";
import bag from "../Asset/Shopping Bag.svg";
import cart from "../Asset/Shopping Cart.svg";
import credit from "../Asset/Credit Card 1.svg";
import promotion from "../Asset/History.svg";
import message from "../Asset/message.svg";
import review from "../Asset/Comment 2.svg";
import menuuu from "../Asset/Mennuu.svg";
import setting from "../Asset/Settings 1.svg";
import search from "../Asset/search.svg";
import { Link, useLocation } from "react-router-dom";
import "./Layout.css";

const Layout = ({ children }) => {
  const location = useLocation();

  const [collapsed, setCollapsed] = useState(false);

  const dashboardmenu = [
    {
      name: "Dashboard",
      path: "/",
      images: menuuu,
    },
    {
      name: "Statistics",
      path: "/statistic",
      images: statistic,
    },
    {
      name: "My Product",
      path: "/product",
      images: bag,
    },
    {
      name: "Orders",
      path: "/order",
      images: cart,
    },
    {
      name: "Transactions",
      path: "/transaction",
      images: credit,
    },
    {
      name: "Promotions",
      path: "/promotion",
      images: promotion,
    },
    {
      name: "Message",
      path: "/message",
      images: message,
    },
    {
      name: "Review",
      path: "/review",
      images: review,
    },
    {
      name: "Settings",
      path: "/setting",
      images: setting,
    },
  ];
  const menuToRender = dashboardmenu;
  return (
    <div className="mainContainer">
      <div className="top-bar">
        <div className="headLogo">
          <img src={headlogo} className="proImage" alt="headlogo" />
          <h2>Snack</h2>
        </div>
        <div className="proInput">
          <input type="text" className="proSearch" placeholder="Search" />
          <img src={search} alt="ser" />
        </div>
        <img src={notibell} className="proImage" alt="bell" />
        <div className="profile">
          <img src={sb} className="proImage" alt="sbb" />
          <div className="proDetails">
            <span className="proName">Shoo Bro Thoo</span>
            <br />
            <span className="proEmail">shobro@email.com</span>
          </div>
          <img src={arrowDown} className="proImage" alt="ad" />
        </div>
        {!collapsed ? (
            <img src={setting} className="collapsed-Image" onClick={()=>setCollapsed(true)} alt="mennn" />
          ) : (
            <img src={sb} className="collapsed-Image" onClick={()=>setCollapsed(false)} alt="sbb" />
          )}
      </div>
      {/* Dashboard */}
      <div className="dashboard">
        {/* Sidebar */}
        <div className={`sidebar ${collapsed ? 'collapsed-sidebar': ''}`}>
          <div className="sideInfo">
            <div className="sideImg"></div>
            <div className="sideUserInfo">
              <span className="sideName">Broto Store</span>
              <br />
              <span className="sideStatus">verified</span>
            </div>
          </div>
          <ul>
            {menuToRender.map((menu) => {
              const isActive = location.pathname === menu.path;
              return (
                <Link to={menu.path} style={{ textDecoration: "none" }}>
                  <li className={isActive && "active"}>
                    <img src={menu.images} className="listImage" alt="sta" />
                    {menu.name}
                  </li>
                </Link>
              );
            })}
            {/* <li onClick={()=>{navigate("/")}} className="active"><img src={menu} className="listImage" alt="sta" />Dashboard</li>
            <li onClick={()=>{navigate("/statistic")}}><img src={statistic} className="listImage" alt="sta" />Statistics</li>
            <li onClick={()=>{navigate("/product")}}><img src={bag} className="listImage" alt="bag" />My Product</li>
            <li onClick={()=>{navigate("/order")}}><img src={cart} className="listImage" alt="ca" />Orders</li>
            <li onClick={()=>{navigate("/transaction")}}><img src={credit} className="listImage" alt="tran" />Transactions</li>
            <li onClick={()=>{navigate("/promotion")}}><img src={promotion} className="listImage" alt="pro" />Promotions</li>
            <li onClick={()=>{navigate("/message")}}><img src={message} className="listImage" alt="msg" />Messages</li>
            <li onClick={()=>{navigate("/review")}}><img src={review} className="listImage" alt="rev" />Reviews</li>
            <li onClick={()=>{navigate("/setting")}} className="lastt"><img src={setting} className="listImage" alt="rev" />Settings</li> */}
          </ul>
        </div>
        {/* Main Grid */}
        <div className="grid-container">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
