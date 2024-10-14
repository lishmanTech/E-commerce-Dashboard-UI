import React from "react";
import "./Settings.css";
import Title from "../Component/Title";

const SettingsPage = () => {
  return (
    <div className="settings-container">
      <Title title="Settings" />

      {/* Tabs Section */}
      <nav className="transaction-filter">
        <div className="filter-all">Location</div>
        <div className="filter-sale">Payments</div>
        <div className="filter-sale">Shipping</div>
        <div className="filter-sale">Best Products</div>
        <div className="filter-sale">Services</div>
      </nav>

      {/* Header Section */}
      <div className="header-section">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid #E1E1E1",
            marginBottom: "12px",
          }}
        >
          <h2
            style={{ color: "#11142D", fontFamily: "mulish", fontSize: "16px" }}
          >
            Store Header
          </h2>
          <span
            style={{
              color: "#5541D7",
              fontFamily: "mulish",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Edit
          </span>
        </div>
        <div className="header-content">
          <div className="header-placeholder"></div>
        </div>
      </div>

      {/* Grid Section */}
      <div className="settingCard-container">
        {/* Store Information Card */}
        <div className="info-card">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid #E1E1E1",
              marginBottom: "12px",
            }}
          >
            <h2
              style={{
                color: "#11142D",
                fontFamily: "mulish",
                fontSize: "16px",
              }}
            >
              Store Information
            </h2>
            <span
              style={{
                color: "#5541D7",
                fontFamily: "mulish",
                fontSize: "16px",
                cursor: "pointer",
                marginBottom: "13px",
              }}
            >
              Edit
            </span>
          </div>
          <div className="info-content">
            <p>
              <strong
                style={{
                  color: "#11142D",
                  fontFamily: "mulish",
                  fontSize: "16px",
                }}
              >
                Store Name:
              </strong>
              <br />{" "}
              <span
                style={{
                  color: "#92929D",
                  fontFamily: "mulish",
                  fontSize: "16px",
                }}
              >
                Broto Store
              </span>
            </p>
            <p style={{ marginBottom: "15px", marginTop: "15px" }}>
              <strong
                style={{
                  color: "#11142D",
                  fontFamily: "mulish",
                  fontSize: "16px",
                }}
              >
                Slogan:
              </strong>
              <br />{" "}
              <span
                style={{
                  color: "#92929D",
                  fontFamily: "mulish",
                  fontSize: "16px",
                }}
              >
                Maju Mundur Cantik
              </span>
            </p>
            <p>
              <strong
                style={{
                  color: "#11142D",
                  fontFamily: "mulish",
                  fontSize: "16px",
                }}
              >
                Description:
              </strong>
              <br />{" "}
              <span
                style={{
                  color: "#92929D",
                  fontFamily: "mulish",
                  fontSize: "16px",
                }}
              >
                Lorem ipsum dolor sit amet...
              </span>
            </p>
          </div>
        </div>

        {/* Verification Card */}
        <div className="info-card">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid #E1E1E1",
              marginBottom: "12px",
            }}
          >
            <h2
              style={{
                color: "#11142D",
                fontFamily: "mulish",
                fontSize: "16px",
              }}
            >
              Verification
            </h2>
            <span
              style={{
                color: "#5541D7",
                fontFamily: "mulish",
                fontSize: "16px",
                cursor: "pointer",
                marginBottom: "13px",
              }}
            >
              Edit
            </span>
          </div>
          <div className="info-content">
            <p style={{ marginBottom: "15px" }}>
              <strong
                style={{
                  color: "#11142D",
                  fontFamily: "mulish",
                  fontSize: "16px",
                }}
              >
                Email Address:
              </strong>
              <br />{" "}
              <span
                style={{
                  color: "#92929D",
                  fontFamily: "mulish",
                  fontSize: "16px",
                }}
              >
                shoobrotho@email.com
              </span>
            </p>
            <p>
              <strong
                style={{
                  color: "#11142D",
                  fontFamily: "mulish",
                  fontSize: "16px",
                }}
              >
                Phone:
              </strong><br/>
              <span
                style={{
                  color: "#92929D",
                  fontFamily: "mulish",
                  fontSize: "16px",
                }}
              >
                +62 7878 9090
              </span>
            </p>
          </div>
        </div>

        {/* Store Status Card */}
        <div className="info-card">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid #E1E1E1",
              marginBottom: "12px",
            }}
          >
            <h2
              style={{
                color: "#11142D",
                fontFamily: "mulish",
                fontSize: "16px",
              }}
            >
              Store Information
            </h2>
            <span
              style={{
                color: "#5541D7",
                fontFamily: "mulish",
                fontSize: "16px",
                cursor: "pointer",
                marginBottom: "13px",
              }}
            >
              Edit
            </span>
          </div>
          <div className="info-content">
            <p style={{marginBottom: "15px"}}>
              <strong
                style={{
                  color: "#11142D",
                  fontFamily: "mulish",
                  fontSize: "16px",
                }}
              >
                Store Status:
              </strong><br/>
              <span
                style={{
                  color: "#92929D",
                  fontFamily: "mulish",
                  fontSize: "16px",
                }}
              >
                Store Open
              </span>
            </p>
            <p>
              <strong
                style={{
                  color: "#11142D",
                  fontFamily: "mulish",
                  fontSize: "16px",
                }}
              >
                Open Store:
              </strong><br/>
              <span
                style={{
                  color: "#92929D",
                  fontFamily: "mulish",
                  fontSize: "16px",
                }}
              >
                Mon - Fri, 8 AM - 9 PM
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
