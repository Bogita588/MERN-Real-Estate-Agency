import { useState } from "react";
import "./chat.scss"; // Changed file extension to .css

function Chat() {
  const [isChatOpen, setIsChatOpen] = useState(true);

  return (
    <div className="chat-container">
      <div className="messages-container">
        <h1>My Messages</h1>
        <div className="message-container">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="avatar"
          />
          <span className="sender">Bogita Brian</span>
          <p className="message-content">Hello, how may I help you?</p>
        </div>
        {/* Additional messages */}
        <div className="message-container">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="avatar"
          />
          <span className="sender">Bogita Brian</span>
          <p className="message-content">Hello, how may I help you?</p>
        </div>
        <div className="message-container">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="avatar"
          />
          <span className="sender">Bogita Brian</span>
          <p className="message-content">Hello, how may I help you?</p>
        </div>
        <div className="message-container">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="avatar"
          />
          <span className="sender">Bogita Brian</span>
          <p className="message-content">Hello, how may I help you?</p>
        </div>
        <div className="message-container">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="avatar"
          />
          <span className="sender">Bogita Brian</span>
          <p className="message-content">Hello, how may I help you?</p>
        </div>
        <div className="message-container">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="avatar"
          />
          <span className="sender">Bogita Brian</span>
          <p className="message-content">Hello, how may I help you?</p>
        </div>
      </div>
      {isChatOpen && (
        <div className="chat-box">
          <div className="top-section">
            <div className="user-info">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
                className="avatar"
              />
              <span className="username">Bogita Brian</span>
            </div>
            <span className="close-btn" onClick={() => setIsChatOpen(false)}>X</span>
          </div>
          <div className="chat-messages">
            <div className="chatMessage">
              <p>Hello, how may I help you?</p>
              <span className="timestamp">2 hours ago</span>
            </div>
            {/* Additional messages */}
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet</p>
              <span className="timestamp">1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet</p>
              <span className="timestamp">1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet</p>
              <span className="timestamp">1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet</p>
              <span className="timestamp">1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet</p>
              <span className="timestamp">1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet</p>
              <span className="timestamp">1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Good afternoon</p>
              <span className="timestamp">1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>I am Fine Thank you</p>
              <span className="timestamp">1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Hello, how may I help you?</p>
              <span className="timestamp">1 hour ago</span>
            </div>
          </div>
          <div className="bottom-section">
            <textarea placeholder="Type your message..." className="message-input"></textarea>
            <button className="send-btn">Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
