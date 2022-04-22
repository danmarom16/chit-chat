import React, { useEffect, useRef, useState } from "react";
import "./Chat.css";
import Avatar from "../sidebar/Avatar";
import Message from "./Message";
import UploadImageModal from "./upload image modal/UploadImageModal"
import { Dropdown } from "react-bootstrap";
import {getChats, getDisplayName, getProfileImage, addMessageToDatabase} from '../DataBase'

function Chat({friendUsername}) {

  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState([]);
  const dummy = useRef();

  useEffect(() => {
    setMessages(getChats()[friendUsername]);
    dummy.current.scrollIntoView({ behavior: 'smooth'});
  }, [friendUsername, (getChats()[friendUsername])]);

  function sendImage (imgSrc){
    var today = new Date();
    var currentHour = today.getHours() + ":" + today.getMinutes();
    setMessages([...messages, { content: imgSrc, time: currentHour, isSender: true, type: "image" }]);
  };


  const sendMessage = (e) => {
    e.preventDefault();
    if (msg != "") {
      var today = new Date();
      var currentHour = today.getHours() + ":" + today.getMinutes();
      var currentMsg = { content: msg, time: currentHour, isSender: true, type: "text" };
      addMessageToDatabase(friendUsername, currentMsg)
      setMsg("");
    }
  };

  const messagesList = messages.map((message, key) => {
    return (
      <Message
        content={message.content}
        time={message.time}
        isSender={message.isSender}
        key={key}
        type={message.type}
      />
    );
  });

  return (
    <div className="chat">
      <div className="chat-header">
        <Avatar imgSrc={getProfileImage(friendUsername)}></Avatar>

        <div className="chat-header-info">
          <h3>{getDisplayName(friendUsername)}</h3>
        </div>
      </div>

      <div className="chat-body">
        {messagesList}
        <div ref={dummy}></div>
      </div>

      <div className="chat-footer">
        <Dropdown drop="up">
          <Dropdown.Toggle variant="light-gray" id="dropdown-basic">
            <i className="bi bi-paperclip"></i>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">
              <UploadImageModal sendImage={sendImage}/>
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
            <i className="bi bi-send"></i>
          </button>
        </form>
      </div>
    </div>
    );
  }

export default Chat;
