import React from "react";
import buttonic from "../Asset/ButtonIcon.svg";
import arrowdonw from "../Asset/arrowDown.svg";

const ItemTable = () => {
  const orders = [
    { id: 1, name: "Headphone Joss", quantity: 1, date: "Feb. 29 2021" },
    { id: 2, name: "Headphone Joss", quantity: 1, date: "Feb. 29 2021" },
    { id: 3, name: "Headphone Joss", quantity: 1, date: "Feb. 29 2021" },
  ];

  return (
    <div className="table-container">
      <div className="table-header">
        <div className="table-header-item">
          {" "}
          <input type="checkbox" />
          Items
          <img
            src={arrowdonw}
            id="proImage"
            style={{ cursor: "pointer" }}
            alt="down"
          />
        </div>
        <div className="table-header-item">
          Quantity
          <img
            src={arrowdonw}
            id="proImage"
            style={{ marginBottom: "5px", cursor: "pointer" }}
            alt="down"
          />
        </div>
        <div className="table-header-item">
          Date
          <img
            src={arrowdonw}
            id="proImage"
            style={{ marginBottom: "5px", cursor: "pointer" }}
            alt="down"
          />
        </div>
        <div className="table-header-item">
          Actions
          <img
            src={arrowdonw}
            id="proImage"
            style={{ marginBottom: "5px", cursor: "pointer" }}
            alt="down"
          />
        </div>
      </div>
      {orders.map((item) => (
        <div className="table-row" key={item.id}>
          <div
            className="table-item"
            style={{ display: "flex", alignItems: "center" }}
          >
            {" "}
            <input type="checkbox" />
            <div
              className="product-rect"
              style={{ marginRight: "10px", marginLeft: "10px" }}
            ></div>{" "}
            {item.name}
          </div>
          <div className="table-item">{item.quantity}</div>
          <div className="table-item">{item.date}</div>
          <div className="table-item">
            <button id="edit-btn">Edit</button>
            <button id="delete-btn">Delete</button>
            <button className="more-btn">
              <img src={buttonic} alt="btn" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemTable;
