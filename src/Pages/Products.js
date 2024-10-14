import React from 'react';
import './Product.css'; 
import arrowdonw from "../Asset/arrowDown.svg";
import eye from "../Asset/Eye.svg";
import bag from "../Asset/ShopBag.svg";
import Title from "../Component/Title"

const products = [
  { name: 'Headphone Joss', sku: '5', price: '100.000', stock: 5, score: 'Good' },
  { name: 'Headphone Joss', sku: '5', price: '100.000', stock: 5, score: 'Good' },
  { name: 'Headphone Joss', sku: '5', price: '100.000', stock: 5, score: 'Good' },
  { name: 'Headphone Joss', sku: '5', price: '100.000', stock: 5, score: 'Good' },
  { name: 'Headphone Joss', sku: '5', price: '100.000', stock: 5, score: 'Good' },
  { name: 'Headphone Joss', sku: '5', price: '100.000', stock: 5, score: 'Good' },
  { name: 'Headphone Joss', sku: '5', price: '100.000', stock: 5, score: 'Good' },
];

const Product = () => {
  return (
    <div className="product-list-container">
      <header className="product-header">
      <Title title="Product List"/ >
        <div className="header-buttons">
          <button className="btn">View Etalage</button>
          <button className="btn">Set at once</button>
          <button className="add-product-btn">Add Products  +</button>
        </div>
      </header>
      
      <nav className="product-filter">
        <div className='filter-all'>All Items (100)</div>
        <div className='filter-sale'>For Sale (70)</div>
        <div className='filter-sale'>Not For Sale (10)</div>
        <div className='filter-sale'>Drafts (20)</div>
      </nav>

      <div className="search-filters">
       <input type="text" placeholder="Search" />
        <span className='search-info'>Filters</span>
        <img src={arrowdonw} id="proImage" style={{marginBottom: "5px", cursor: "pointer"}} alt="down" />
        <span className='search-info'>Category</span>
        <img src={arrowdonw} id="proImage" style={{marginBottom: "5px", cursor: "pointer"}} alt="down" />
        <span className='search-info'>Newest</span>
        <img src={arrowdonw} id="proImage" style={{marginBottom: "5px", cursor: "pointer"}} alt="down" />
        <span className='search-info'>30 per page</span>
        <img src={arrowdonw} id="proImage" style={{marginBottom: "5px", cursor: "pointer"}} alt="down" />
      </div>

      <div className="product-table">
        <div className="product-table-header">
          <div className="protable-det" style={{display: "flex"}}>Items<img src={arrowdonw} style={{marginTop: "-5px", cursor: "pointer"}} alt="down" /></div>
          <div className="protable-det" style={{display: "flex"}}>Statistics<img src={arrowdonw} style={{marginTop: "-5px", cursor: "pointer"}} alt="down" /></div>
          <div className="protable-det" style={{display: "flex"}}>Prices<img src={arrowdonw} style={{marginTop: "-5px", cursor: "pointer"}} alt="down" /></div>
          <div className="protable-det" style={{display: "flex"}}>Stocks<img src={arrowdonw} style={{marginTop: "0px", cursor: "pointer"}} alt="down" /></div>
          <div className="protable-det" style={{display: "flex"}}>Status<img src={arrowdonw} style={{marginTop: "0px", cursor: "pointer"}} alt="down" /></div>
        </div>

        {products.map((product, index) => (
          <div id="product-row" key={index} style={{display: "contents"}}>
          
            <div className="product-item">
              <input type="checkbox" />
              <div style={{display: "flex", justifyContent: "space-between"}}>
                <div className='product-rect'></div>
                <div style={{marginLeft: "5px"}}>
                <strong className='prodct-name'>{product.name}</strong>
                <br />
                <span className='product-sku'>SKU: {product.sku}</span>
                </div>
              </div>
            </div>
            <div className="product-statistics">
              <span style={{color: "#11142D", fontSize: "12px", fontFamily: "Mulish"}}><span style={{color: "#92929D"}}>Score:</span>{product.score}</span>
              <div className="stat-bar"><span style={{ width: '75%' }} /></div>
              <div className="stat-icons">
                <span role="img" aria-label="views"> <img src={eye} alt="see" /></span> 0
                <span role="img" aria-label="sales"><img src={bag} alt="see" /></span> 0
                
              </div>
            </div>
            <div className="product-price">
              <span className='price-currency'>Rp</span> <span className='price-amount'>{product.price}</span>
            </div>
            <div className="product-stock">
              {product.stock}
            </div>
            <div className="product-status">
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
              <span style={{fontFamily: "mulish", fontSize: "15px", marginRight: "10px", marginLeft: "10px"}}>Edit</span>
              <img src={arrowdonw} id="proImage" style={{cursor: "pointer"}} alt="down" />
            </div>
            </div>
        
        ))}
       
      </div>
    </div>
  );
};

export default Product;

