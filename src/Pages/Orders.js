import React, { useRef } from "react";
import "./Oreder.css";
import search from "../Asset/search.svg";
import down from "../Asset/ProductDown.svg";
import camera from "../Asset/Camera 1.svg";
import video from "../Asset/Video.svg";
import RichTextEditor from "../Component/RicTextEditor";
import Title from "../Component/Title"


const Orders = () => {
  const imageInputRef = useRef(null);
  const videoInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      console.log("Selected images:", files);
      // Handle the uploaded image files here
    }
  };
		
	

  const handleVideoUpload = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      console.log("Selected videos:", files);
      // Handle the uploaded video files here
    }
  };

  const triggerImageInput = () => {
    imageInputRef.current.click();
  };

  const triggerVideoInput = () => {
    videoInputRef.current.click();
  };

  return (
    <div className="add-product-container">
      {/* Product Information */}
      <Title title="Add Product" />
      <div className="product-section">
        <h2
          style={{ fontFamily: "mulish", fontSize: "16px", color: "#11142D" }}
        >
          Product Information
        </h2>
        <div className="product-information">
          <div className="input-group">
            <label>Product Name</label>
            <div id="proInfo">
              <input type="text" placeholder="Input Here" />
            </div>
            <div id="proInfo" style={{ display: "flex" }}>
              <input type="text" placeholder="Input Here" />
              <img src={search} alt="down" />
            </div>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="product-section">
        <h3>Product Detail</h3>
        <div className="product-details">
          <div className="input-group">
            <label>Product Name</label>
            <div id="proDetails">
              <input type="text" placeholder="USD" />
            </div>
            <p
              style={{
                textAlign: "left",
                color: "#5541D7",
                fontFamily: "mulish",
                fontSize: "12px",
              }}
            >
              Add Wholesale Price (Optional)
            </p>
          </div>
          <div className="input-group">
            <label>Product Name</label>
            <div id="proDetCon" style={{ display: "flex" }}>
              <input type="text" placeholder="1" />
              <div className="detailsEx">Psc</div>
            </div>
            <p
              style={{
                textAlign: "left",
                color: "#5541D7",
                fontFamily: "mulish",
                fontSize: "12px",
              }}
            >
              set maximum number purchase (Optional)
            </p>
          </div>
        </div>
        <div className="product-details">
          <div className="input-group">
            <label>Product Name</label>
            <div id="proDetCon" style={{ display: "flex" }}>
              <input type="text" placeholder="Input Here" />
              <div className="detailsGram">
                Gram (gr)
                <img src={down} alt="down" />
              </div>
            </div>
            <p
              style={{
                textAlign: "left",
                color: "#92929D",
                fontFamily: "mulish",
                fontSize: "12px",
              }}
            >
              is this product comes in large packaging?
              <p style={{ color: "#5541D7" }}>Package Dimension</p>
            </p>
          </div>
          <div className="input-group product-condition">
            <label>Product Condition</label>
            <div>
              <input
                type="radio"
                name="condition"
                id="new"
                defaultChecked
                style={{ width: "24px", height: "24px" }}
              />
              <label htmlFor="new">New</label>
              <input
                type="radio"
                name="condition"
                id="secondhand"
                style={{ width: "24px", height: "24px" }}
              />
              <label htmlFor="secondhand">Secondhand</label>
            </div>
          </div>
        </div>

        <div className="product-details">
          <div className="input-group">
            <label>Product Name</label>
            <div id="proDetCon" style={{ display: "flex" }}>
              <input type="text" placeholder="Input Here" />
              <div className="detailsEx">1</div>
            </div>
            <p
              style={{
                textAlign: "left",
                fontFamily: "mulish",
                fontSize: "12px",
                color: "#92929D",
              }}
            >
              item with 0 stock will automatically set to be "Not for Sale”
            </p>
          </div>
          <div className="input-group product-condition">
            <label>Product Condition</label>
            <div>
              <input
                type="radio"
                name="boolean"
                id="yes"
                defaultChecked
                style={{ width: "24px", height: "24px" }}
              />
              <label htmlFor="new">Yes</label>
              <input
                type="radio"
                name="boolean"
                id="no"
                style={{ width: "24px", height: "24px" }}
              />
              <label htmlFor="secondhand">No</label>
            </div>
          </div>
        </div>
      </div>

      {/* Variation and Upload Section */}
      <div className=" variation-upload">
        <div className="variation-box">
          <p>
            Set your variation on your products, so it can make buyers easily
            choose the product without writing the notes.
          </p>
          <button>Set Variation</button>
        </div>

        {/* Upload Images */}
        <div className="upload-box" onClick={triggerImageInput}>
        <img src={camera} alt="down" />
           Drag Your Music to Upload <br/><span>or <span style={{color: "#5541D7"}}>Browse</span></span>
          <input
            type="file"
            ref={imageInputRef}
            style={{ display: "none" }}
            accept="image/*"
            multiple
            onChange={handleImageUpload}
          />
          
        </div>

        {/* Upload Videos */}
        <div className="upload-box" onClick={triggerVideoInput}>
        <img src={video} alt="down" />
          Drag Your Videos to Upload <br/><span>or <span style={{color: "#5541D7"}}>Browse</span></span>
          <input
            type="file"
            ref={videoInputRef}
            style={{ display: "none" }}
            accept="video/*"
            multiple
            onChange={handleVideoUpload}
          />
        </div>
      </div>

      <div className="product-form-container">
      {/* Product Description Section */}
      
         <RichTextEditor />

      {/* Good's Grouping Section */}
      <div className="goods-grouping">
        <h3>Good's Grouping</h3>
        <div className="group-inputs">
          <input type="text" placeholder="Good's Etalage" />
          <input type="text" placeholder="Tags" />
          <input type="text" placeholder="SKU" />
        </div>
      </div>

      {/* Action Buttons */}
    </div>
    <div className="action-buttons">
        <button id="draft-btn">Save to Draft</button>
        <button id="sell-add-btn">Sell and Add Another</button>
        <button className="sell-btn">Sell</button>
      </div>
    </div>
  );
};

export default Orders;
