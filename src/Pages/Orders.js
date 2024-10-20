import React, { useRef, useState } from "react";
import "./Oreder.css";
import search from "../Asset/search.svg";
import down from "../Asset/ProductDown.svg";
import camera from "../Asset/Camera 1.svg";
import video from "../Asset/Video.svg";
import RichTextEditor from "../Component/RicTextEditor";
import Title from "../Component/Title";
import { toast } from "react-toastify";

const Orders = () => {
  const imageInputRef = useRef(null);
  const videoInputRef = useRef(null);
  const [inputs, setInputs] = useState({
    name: "",
    price: "",
    number: "",
    quantity: "",
    known: "",
    stock: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const validateFields = () => {
    const newErrors = {};
    if (!inputs.name.trim()) {
      newErrors.name = "This cannot be empty";
    }
    if (!inputs.price.trim()) {
      newErrors.price = "This cannot be empty";
    }
    if (!inputs.number.trim()) {
      newErrors.number = "This cannot be empty";
    }
    if (inputs.quantity.trim().length < 5) {
      newErrors.quantity = "This must be at least 5 characters";
    }
    if (!inputs.known.trim()) {
      newErrors.known = "This cannot be empty";
    }
    if (!inputs.stock.trim()) {
      newErrors.stock = "This cannot be empty";
    }

    setErrors(newErrors);
    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateFields()) {
      alert('All fields are valid! Proceeding with action.');
      // Perform your submit action here
    }
  };

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
              <input
                type="text"
                placeholder="Input Here"
                name="name"
                value={inputs.name}
                onChange={handleInputChange}
              />
            </div>
            {errors.name && (
              <div style={{ color: "red", marginTop: "5px" }}>
                {errors.name}
              </div>
            )}
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
            <label>Product Price</label>
            <div id="proDetails">
              <input
                type="text"
                placeholder="USD"
                name="price"
                value={inputs.price}
                onChange={handleInputChange}
              />
            </div>
            {errors.price && (
              <div style={{ color: "red", marginTop: "5px" }}>
                {errors.price}
              </div>
            )}
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
            <label>Product Number</label>
            <div id="proDetCon" style={{ display: "flex" }}>
              <input
                type="text"
                placeholder="1"
                name="number"
                value={inputs.number}
                onChange={handleInputChange}
              />
              <div className="detailsEx">Psc</div>
            </div>
            {errors.price && (
              <div style={{ color: "red", marginTop: "5px" }}>
                {errors.price}
              </div>
            )}
            
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
            <label>Product Price</label>
            <div id="proDetCon" style={{ display: "flex" }}>
              <input
                type="text"
                placeholder="Input Here"
                name="known"
                value={inputs.known}
                onChange={handleInputChange}
              />
              <div className="detailsGram">
                Gram (gr)
                <img src={down} alt="down" />
              </div>
            </div>
            {errors.known && (
              <div style={{ color: "red", marginTop: "5px" }}>
                {errors.known}
              </div>
            )}
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
            <label>Product Quantity</label>
            <div id="proDetCon" style={{ display: "flex" }}>
              <input
                type="text"
                placeholder="Input Here"
                name="stock"
                value={inputs.stock}
                onChange={handleInputChange}
              />
              <div className="detailsEx">1</div>
            </div>
            {errors.stock && (
              <div style={{ color: "red", marginTop: "5px" }}>
                {errors.stock}
              </div>
            )}
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
          Drag Your Music to Upload <br />
          <span>
            or <span style={{ color: "#5541D7" }}>Browse</span>
          </span>
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
          Drag Your Videos to Upload <br />
          <span>
            or <span style={{ color: "#5541D7" }}>Browse</span>
          </span>
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
        <button id="draft-btn" onClick={handleSubmit}>
          Save to Draft
        </button>
        <button id="sell-add-btn">Sell and Add Another</button>
        <button className="sell-btn">Sell</button>
      </div>
    </div>
  );
};

export default Orders;
