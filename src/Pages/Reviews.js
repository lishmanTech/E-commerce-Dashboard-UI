import React, { useState } from "react";
import "./Review.css";
import Title from "../Component/Title";
import emoji from "../Asset/Emoji.svg";
import upload from "../Asset/Upload.svg";

function Reviews() {
  const [reviews] = useState([
    {
      id: 1,
      title: "Shoo Phar Dhie",
      product: "Headphone Joss",
      date: "Sunday, 23 February 2021",
      price: "$25",
    },
    {
      id: 2,
      title: "Shoo Phar Dhie",
      product: "Headphone Joss",
      date: "Sunday, 23 February 2021",
      price: "$25",
    },
    {
      id: 3,
      title: "Shoo Phar Dhie",
      product: "Headphone Joss",
      date: "Sunday, 23 February 2021",
      price: "$25",
    },
    {
      id: 4,
      title: "Shoo Phar Dhie",
      product: "Headphone Joss",
      date: "Sunday, 23 February 2021",
      price: "$25",
    },
  ]);

  const [chats, setChats] = useState({});
  const [messages, setMessages] = useState({}); // To manage input values for each review

  const handleSendMessage = (id) => {
    const message = messages[id]?.trim();
    if (message) {
      setChats((prevChats) => ({
        ...prevChats,
        [id]: [...(prevChats[id] || []), message],
      }));
      setMessages((prevMessages) => ({ ...prevMessages, [id]: "" }));
    }
  };

  const handleKeyPress = (e, id) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage(id);
    }
  };

  return (
    <div className="reviews-container">
      <Title title="Reviews" />
      <nav className="transaction-filter tranfil">
        <div className="filter-sale">All</div>
        <div className="filter-sale">Unreads</div>
        <div className="filter-all">Unreplied</div>
      </nav>

      <div className="reviews-grid">
        {reviews.map((review) => (
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <br />
              {chats[review.id]?.map((msg, idx) => (
                <div key={idx} className="chat-message">
                  {msg}
                </div>
              ))}
            </p>
            <div className="review-reply">
              <div
                style={{
                  background: "#F6F6F7",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  marginRight: "5px",
                }}
              >
                <input
                  style={{
                    border: "none",
                    outline: "none",
                    background: "none",
                  }}
                  value={messages[review.id] || ""}
                  onChange={(e) =>
                    setMessages({ ...messages, [review.id]: e.target.value })
                  }
                  onKeyDown={(e) => handleKeyPress(e, review.id)}
                  placeholder="Write message in here..."
                />
                <img src={emoji} alt="emoo" />
                <img src={upload} alt="up" />
              </div>
              <button
                onClick={() => handleSendMessage(review.id)}
                style={{ borderRadius: "50%", background: "#5541D7" }}
                type="submit"
              >
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
