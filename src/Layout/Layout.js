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
import cancel from "../Asset/Cancel.svg";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./Layout.css";
import { useUserAuth } from "../Context/UserAuthContext";

const Layout = ({ children }) => {
  const { user, logOut, theme, toggleTheme } = useUserAuth();
  const location = useLocation();

  const [collapsed, setCollapsed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err.message)
    }
  };

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
    <div className="layoutContainer">
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
        <div className="profile"  onClick={handleToggle} >
          <img src={sb} className="proImage" alt="sbb" />
          <div className="proDetails">
            <span className="proName">Welcome</span>
            <br />
            <span className="proEmail">{user && user.email}</span>
          </div>
          <img src={arrowDown} className="proImage" alt="ad" />
          {isOpen && (
              <div className="drop-down">
                <ul className="drop-ulist">
                  <li className="droplist" onClick={handleLogout}>Sign Out</li>
                  <hr/>
                  <li className="droplist" onClick={toggleTheme}> Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode</li>
                </ul>
              </div>
            )}
        </div>
        {!collapsed ? (
          <img
            src={setting}
            className="collapsed-Image"
            onClick={() => setCollapsed(true)}
            alt="mennn"
          />
        ) : (
          <img
            src={cancel}
            className="collapsed-Image"
            onClick={() => setCollapsed(false)}
            alt="sbb"
          />
        )}
      </div>
      {/* Dashboard */}
      <div className="dashboard">
        {/* Sidebar */}
        <div className={`sidebar ${collapsed ? "collapsed-sidebar" : ""}`}>
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
                  <li
                    onClick={() => setCollapsed(false)}
                    className={isActive && "active"}
                  >
                    <img src={menu.images} className="listImage" alt="sta" />
                    {menu.name}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
        {/* Main Grid */}
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
