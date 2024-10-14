import React from 'react'
import arrowdonw from "../Asset/arrowDown.svg";
import "./Transaction.css"
import statusfirst from "../Asset/status1.svg";
import statussec from "../Asset/status2.svg";
import statusthird from "../Asset/status3.svg";
import statusfour from "../Asset/status4.svg";
import Title from "../Component/Title"



const transactions = [
  {
    id: 1,
    itemName: "Headphone Joss",
    sku: "SKU: 5",
    buyerChat: "Chat Buyer",
    deliveryAddress: "Shoo Phar Mie Surabaya Timur JNE 8918291892",
    statusImages: [
      statusfirst,  
      statussec,
      statusthird,
      statusfour
    ],
  },
  {
    id: 1,
    itemName: "Headphone Joss",
    sku: "SKU: 5",
    buyerChat: "Chat Buyer",
    deliveryAddress: "Shoo Phar Mie Surabaya Timur JNE 8918291892",
    statusImages: [
      statusfirst,  
      statussec,
      statusthird,
      statusfour
    ],
  },
  {
    id: 1,
    itemName: "Headphone Joss",
    sku: "SKU: 5",
    buyerChat: "Chat Buyer",
    deliveryAddress: "Shoo Phar Mie Surabaya Timur JNE 8918291892",
    statusImages: [
      statusfirst,  
      statussec,
      statusthird,
      statusfour
    ],
  },
  {
    id: 1,
    itemName: "Headphone Joss",
    sku: "SKU: 5",
    buyerChat: "Chat Buyer",
    deliveryAddress: "Shoo Phar Mie Surabaya Timur JNE 8918291892",
    statusImages: [
      statusfirst,  
      statussec,
      statusthird,
      statusfour
    ],
  },
 
];


const Transactions = () => {
  return (
    <div className="product-list-container">
      <Title title="Transaction Details"/ >
    <header className="product-header">
      <div className="header-buttons">
        <button className="btn">Bulk Receipt Input</button>
        <button className="btn">Download Transaction</button>
      </div>
    </header>
    
    <nav className="transaction-filter">
      <div className='filter-all'>Paid (100)</div>
      <div className='filter-sale'>Proccessed (0)</div>
      <div className='filter-sale'>Delivered (0)</div>
      <div className='filter-sale'>Remitted (0)</div>
      <div className='filter-sale'>Cancellation Request (0)</div>
      <div className='filter-sale'>Refunded (0)</div>
    </nav>

    <div className="search-filters">
     <input type="text" placeholder="Search" />
      <span className='search-info'>Delivery</span>
      <img src={arrowdonw} id="proImage" style={{marginBottom: "5px", cursor: "pointer"}} alt="down" />
      <span className='search-info'>Print Status</span>
      <img src={arrowdonw} id="proImage" style={{marginBottom: "5px", cursor: "pointer"}} alt="down" />
      <span className='search-info'>Newest</span>
      <img src={arrowdonw} id="proImage" style={{marginBottom: "5px", cursor: "pointer"}} alt="down" />
      <span className='search-info'>30 per page</span>
      <img src={arrowdonw} id="proImage" style={{marginBottom: "5px", cursor: "pointer"}} alt="down" />
    </div>

    
    <div className="transaction-section">
      <div className="transaction-header">
        <div className="transaction-select"> <input type="checkbox" />Select All Transaction <img src={arrowdonw} style={{marginTop: "0px", cursor: "pointer"}} alt="down" /></div>
        <div className="transaction-select">Delivery <img src={arrowdonw} style={{marginTop: "0px", cursor: "pointer"}} alt="down" /></div>
        <div className="transaction-select">Status <img src={arrowdonw} style={{marginTop: "0px", cursor: "pointer"}} alt="down" /></div>
        <div className="transaction-select">Action <img src={arrowdonw} style={{marginTop: "0px", cursor: "pointer"}} alt="down" /></div>
      </div>

      {transactions.map((transaction) => (
        <div key={transaction.id} className="transaction-row">
            <div className="product-item">
              <input type="checkbox" />
              <div style={{display: "flex", justifyContent: "space-between"}}>
                <div className='product-rect'></div>
                <div style={{marginLeft: "5px"}}>
                <strong className='prodct-name'>{transaction.itemName}</strong>
                <br />
                <span className='product-sku'>SKU: {transaction.sku}</span>
                <br/>
                <span style={{fontFamily: "mulish", fontSize: "14px", color: "#5541D7"}}>{transaction.buyerChat}</span>
                </div>
              </div>
            </div>
        
          <div style={{fontFamily: "mulish", textAlign: "left", color: "#11142D", fontSize: "14px"}}>{transaction.deliveryAddress}</div>
          <div className="transaction-status">
            {transaction.statusImages.map((image, index) => (
              <img key={index} src={image} alt="status icon" className="status-icon" />
            ))}
          </div>
          <div className="actions-button">
            <span style={{cursor: "pointer", fontFamily: "mulish", color: "#5541D7"}}>Details</span><br/>
            <button className="process-btn">Process Decision</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);
}

export default Transactions
