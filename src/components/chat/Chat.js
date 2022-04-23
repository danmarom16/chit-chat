import React, { useEffect, useRef, useState } from "react";
import "./Chat.css";
import Avatar from "../sidebar/Avatar";
import Message from "./Message";
import UploadImageModal from "./uploadFileModals/UploadImageModal"
import UploadVideoModal from "./uploadFileModals/UploadVideoModal"
import { Dropdown } from "react-bootstrap";
import {getChats, getDisplayName, getProfileImage, addMessageToDatabase} from '../DataBase'

// The forceUpdate method updates the dashboard (last msg in sidebar chat)
function Chat({forceUpdate, friendUsername}) {

  const textMsgRef = useRef();
  const dummy = useRef();

  useEffect(() => { dummy.current.scrollIntoView({ behavior: 'smooth'}); });
  
  function getCurrentTime(){
    var today = new Date();
    var currentHour = today.getHours();
    var currentMin = today.getMinutes();
    currentMin = (currentMin < 10) ? '0${currentMin}' : currentMin;
    return currentHour + ":" + currentMin;
  }

  function sendImage (imgSrc){
    sendMessage(imgSrc, "image");
  };

  function sendVideo (videoSrc){
    sendMessage(videoSrc, "video");
  };

  const sendTextMessage = (e) => {
    e.preventDefault();
    console.log(textMsgRef.current.value)
    if (textMsgRef.current.value != "") {
      sendMessage(textMsgRef.current.value, "text");
      console.log(textMsgRef.current.value)
      textMsgRef.current.value="";
      console.log(textMsgRef.current.value)
    }
  };

  const sendMessage = (msgContent, msgType) => {
    console.log(textMsgRef.current.value)
    var currentMsg = { content: msgContent, time: getCurrentTime(), isSender: true, type: msgType };
    addMessageToDatabase(friendUsername, currentMsg)
    forceUpdate()
  }

  const messagesList = (getChats()[friendUsername]).map((message, key) => {
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
            <UploadVideoModal sendVideo={sendVideo}/>
            </Dropdown.Item>
            {/*<Dropdown.Item href="#/action-3">
              <i className="bi bi-geo-alt" />
  </Dropdown.Item>*/}
          </Dropdown.Menu>
        </Dropdown>

        <form onSubmit={sendTextMessage}>
          <input
            ref={textMsgRef}
            type="text"
            placeholder="Type a message"
          ></input>
          <button type="submit" onSubmit={sendTextMessage}>
            <i className="bi bi-send"></i>
          </button>
        </form>
      </div>
    </div>
    );
  }

export default Chat;
