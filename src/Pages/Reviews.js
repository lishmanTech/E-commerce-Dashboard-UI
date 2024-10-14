import React from "react";
import "./Review.css";
import Title from "../Component/Title";
import emoji from "../Asset/Emoji.svg";
import upload from "../Asset/Upload.svg";

const reviewsData = [
  {
    id: 1,
    title: "Shoo Phar Dhie",
    name: "Muhammed Bukar",
    price: "$25",
    date: "Sunday, 23 February 2021",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  // Duplicate for more review cards
  {
    id: 2,
    title: "Shoo Phar Dhie",
    name: "Eljoe Smith",
    price: "$25",
    date: "Sunday, 23 February 2021",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    title: "Ejoe Smith",
    name: "My Geee",
    price: "$25",
    date: "Sunday, 23 February 2021",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    title: "Sylvanus Boss",
    name: "My Geee",
    price: "$25",
    date: "Sunday, 23 February 2021",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

function Reviews() {
  return (
    <div className="reviews-container">
      <Title title="Reviews" />
      <nav className="transaction-filter tranfil">
        <div className="filter-sale">All</div>
        <div className="filter-sale">Unreads</div>
        <div className="filter-all">Unreplied</div>
      </nav>

      <div className="reviews-grid">
        {reviewsData.map((review) => (
          <div key={review.id} className="review-card">
            <div className="review-header">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="product-rect"></div>
                <div style={{ marginLeft: "5px" }}>
                  <strong className="prodct-name">{review.name}</strong>
                  <br />
                  <span className="product-sku">{review.price}</span>
                  <br />
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "15px",
              }}
            >
              <h4 style={{ fontFamily: "mulish" }}>{review.title}</h4>
              <div className="review-date" style={{ fontFamily: "mulish" }}>
                {review.date}
              </div>
            </div>
            <p style={{ marginBottom: "10px", fontFamily: "mulish" }}>
              {review.description}
            </p>
            <div className="review-reply">
              <div
                style={{
                  background: "#F6F6F7",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                   marginRight: "5px"
                }}
              >
                <input
                  style={{
                    border: "none",
                    outline: "none",
                    background: "none",
                  }}
                  type="text"
                  placeholder="Write message in here..."
                />
                <img src={emoji} alt="emoo" />
                <img src={upload} alt="up" />
              </div>
              <button style={{borderRadius: "50%", background: "#5541D7"}} type="submit">
              &gt;
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
