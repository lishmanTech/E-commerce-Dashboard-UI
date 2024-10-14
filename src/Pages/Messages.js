import React, { useState } from "react";
import "./Messages.css"; // Import the CSS file for styling
import setting from "../Asset/Settings 1.svg";
import Title from "../Component/Title";

const Messages = () => {
  const userOnline = [
    {
      id: 1,
      sender: "Mas Yanto",
      time: "Online 3 Hours Ago",
      unread: true,
      active: false,
    },
    {
      id: 2,
      sender: "Mas Yanto",
      time: "Online 3 Hours Ago",
      unread: true,
      active: true,
    },
    {
      id: 3,
      sender: "Love Language",
      time: "Online 3 Hours Ago",
      unread: true,
      active: false,
    },
]
  // State to manage search query
  const [searchQuery, setSearchQuery] = useState("");

  const [messages] = useState(userOnline);

  // Filter the items based on the search query
  const newItems = messages.filter((item) =>
    item.sender.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const chat = [
    {
      id: 1,
      sender: "MY",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      time: "12:14",
      fromSelf: false,
    },
    {
      id: 2,
      sender: "AS",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      time: "12:14",
      fromSelf: true,
    },
    {
      id: 3,
      sender: "MY",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      time: "12:14",
      fromSelf: false,
    },
    {
      id: 4,
      sender: "MY",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      time: "12:14",
      fromSelf: true,
    },
    {
      id: 5,
      sender: "MY",
      content: "Lorem ipsum dolor sit amet.",
      time: "12:14",
      fromSelf: false,
    },
    {
      id: 4,
      sender: "MY",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      time: "12:14",
      fromSelf: true,
    },
    {
      id: 5,
      sender: "MY",
      content: "Lorem ipsum dolor sit amet.",
      time: "12:14",
      fromSelf: false,
    },
    {
      id: 4,
      sender: "MY",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      time: "12:14",
      fromSelf: true,
    },
    {
      id: 5,
      sender: "MY",
      content: "Lorem ipsum dolor sit amet.",
      time: "12:14",
      fromSelf: false,
    },
    {
      id: 4,
      sender: "MY",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      time: "12:14",
      fromSelf: false,
    },
    {
      id: 5,
      sender: "MY",
      content: "Lorem ipsum dolor sit amet.",
      time: "12:14",
      fromSelf: false,
    },
    {
      id: 4,
      sender: "MY",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      time: "12:14",
      fromSelf: true,
    },
    {
      id: 5,
      sender: "MY",
      content: "Lorem ipsum dolor sit amet.",
      time: "12:14",
      fromSelf: false,
    },
    {
      id: 4,
      sender: "MY",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      time: "12:14",
      fromSelf: false,
    },
    {
      id: 5,
      sender: "MY",
      content: "Lorem ipsum dolor sit amet.",
      time: "12:14",
      fromSelf: false,
    },
    {
      id: 4,
      sender: "MY",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      time: "12:14",
      fromSelf: true,
    },
    {
      id: 5,
      sender: "MY",
      content: "Lorem ipsum dolor sit amet.",
      time: "12:14",
      fromSelf: false,
    },
    {
      id: 4,
      sender: "MY",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      time: "12:14",
      fromSelf: false,
    },
    {
      id: 5,
      sender: "MY",
      content: "Lorem ipsum dolor sit amet.",
      time: "12:14",
      fromSelf: true,
    },
  ];
  return (
    <div className="message-container">
      {/* Sidebar with message list */}
      <div className="message-sidebar">
        <Title title="Message" />
        <p>
          <span style={{ fontFamily: "mulish", color: "#11142D" }}>
            All (3)
          </span>{" "}
          <span
            style={{ fontFamily: "mulish", color: "#92929D", fontSize: "10px" }}
          >
            Unreads (3)
          </span>
        </p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              border: "1px solid #5541D7",
              borderRadius: "4px",
              height: "38px",
              width: "70%",
            }}
          >
            <input
              type="text"
              placeholder="Search"
              className="message-search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button
            style={{
              borderRadius: "8px",
              border: "2px solid #5541D7",
              padding: "5px 10px",
              outline: "none",
              cursor: "pointer",
              background: "#ffff",
            }}
          >
            {" "}
            <img src={setting} alt="down" />
          </button>
        </div>
        <ul className="message-list">
          {newItems.length > 0 ? (
            newItems.map((msg) => (
              <li
                key={msg.id}
                className={msg.active ? "active-item" : "message-item"}
              >
                <div style={{ display: "flex", gap: "10px" }}>
                  <div
                    style={{
                      borderRadius: "50%",
                      background: "#E2E2EA",
                      height: "30px",
                      width: "30px",
                    }}
                  ></div>
                  <div style={{ flexDirection: "column", textAlign: "left" }}>
                    <div className="message-user">{msg.sender}</div>
                    <div className="message-time">{msg.time}</div>
                  </div>
                </div>
                {msg.unread && (
                  <span className="message-unread">{chat.length}</span>
                )}
              </li>
            ))
          ) : (
            <li>No items Found</li>
          )}
        </ul>
      </div>

      {/* Chat Section */}
      <div className="chat-section">
        <div className="chat-header">
          <h3>
            Mas Yanto <span className="online-status"></span>
          </h3>
        </div>

        <div className="chat-body">
          {chat.map((message) => (
            <div
              key={message.id}
              className={`chat-message ${message.fromSelf ? "self" : ""}`}
            >
              {message.fromSelf === false && (
                <span className="sender-initials">{message.sender}</span>
              )}
              <div className="message-content">
                <p>{message.content}</p>
              </div>
              {message.fromSelf && (
                <span className="sender-initials">{message.sender}</span>
              )}
              <span className="message-time">{message.time}</span>
            </div>
          ))}
        </div>

        {/* Input section */}
        <div className="chat-input">
          <input type="text" placeholder="Write message in here..." />
          <button type="submit">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Messages;
