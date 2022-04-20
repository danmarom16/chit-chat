import React, { useState } from "react";
import "./Chat.css";
import Avatar from "../sidebar/Avatar";
import Message from "./Message";
import { Dropdown, Modal } from "react-bootstrap";

function Chat() {
  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState([]);


  const sendMessage = (e) => {
    e.preventDefault();
    if (msg != ""){
    var today = new Date();
    var currentHour = today.getHours() + ":" + today.getMinutes();
    setMessages([...messages, { content: msg, time: currentHour }]);
    console.log(currentHour);
    setMsg("");
    }
  };


  const messagesList = messages.map((message, key) => {
    return (
      <Message
        content={message.content}
        time={message.time}
        isReciever={true}
        key={key}
      />
    );
  });

  return (
    <div className="chat">
      <div className="chat-header">
        <Avatar imgSrc="https://placeimg.com/50/50/people"></Avatar>

        <div className="chat-header-info">
          <h3> Friend name</h3>
          <p> Last seen at...</p>
        </div>

      </div>

      <div className="chat-body">
        <Message content="suprise suprise mf" time="3:52" />
        <Message content="THE KING IS BACK" time="3:53" />
        {messagesList}
      </div>
  
      <div className="chat-footer">
        <Dropdown drop="up">
          <Dropdown.Toggle variant="light-gray" id="dropdown-basic">
            <i className="bi bi-paperclip"></i>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">
                    <i class="bi bi-image-fill"></i>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">
              <i className="bi bi-mic" />
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3">
              <i className="bi bi-camera-reels" />
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3">
              <i className="bi bi-geo-alt" />
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <form onSubmit={sendMessage}>
          <input
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            type="text"
            placeholder="Type a message"
          ></input>
          <button type="submit" onSubmit={sendMessage}>
            {" "}
            <i className="bi bi-send"></i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
