import React, { useEffect, useRef, useState } from "react";
import "./Chat.css";
import Avatar from "../sidebar/Avatar";
import Message from "./Message";
import UploadImageModal from "./uploadFileModals/UploadImageModal"
import UploadVideoModal from "./uploadFileModals/UploadVideoModal"
import UploadRecordModal from "./uploadFileModals/UploadRecordModal"
import { Dropdown } from "react-bootstrap";
import {getDefualtImg} from '../DataBase'
import axios from "axios";

import api from '../ContactsApi'

const toto = axios.create({
  baseURL: 'http://localhost:5241/api/',
  headers: {
    'Content-Type': 'application/json'
  }
});

function Chat({loggedUser, forceUpdate, contact, newMsgTracker}) {

  const textMsgRef = useRef();
  const dummy = useRef();
  useEffect(() => { dummy.current.scrollIntoView({ behavior: 'smooth' }); });
  
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getMessages()
    console.log("use effect has been called");
  }, [newMsgTracker, contact]);

    // msg = {int id, string content, string created, bool sent}
  const getMessages = () => {
      try {
        api.get(`/${contact.id}/Messages/${loggedUser.id}`).then(
          (res) => {
            console.log(res);
            console.log("get Messages");
            setMessages(res.data);
          }
        )
      }
      catch (err) {
        console.error(err);
      }
    }
  
  const messagesList = messages.map((message, key) => {
    return (
      <Message
        content={message.content}
        time={message.created}
        isSender={message.sent}
        type="text"
        key={key}
      />
    );
  })




  const sendMessage = (msgContent) => {
    console.log("sendMessage 1");
    console.log(contact);
    console.log(loggedUser);
    if (contact.server != loggedUser.server){
      console.log("sendMessage diff servers");
      try {
        api.post(`/${contact.id}/Messages/${loggedUser.id}`, msgContent)
        .then((res) => {
            console.log(res);
          }
        )
      }
      catch (err) {
        console.log("error sendMessage diff servers");
        console.error(err);
      }
    }
    const url = "http://" + contact.server + "/api/Transfer";
    const request = JSON.stringify({
      from: loggedUser.id,
      to: contact.id,
      content: msgContent,
      });
      console.log("sendMessage 2");
      console.log(url);
      console.log(request);
    try {
      toto.post('/Transfer', request)
      .then((res) => {
          console.log(res);
          forceUpdate()
        }
      )
    }
    catch (err) {
      console.error(err);
      console.log("sendMessage 3 Error");
      return;
    }
}

  const sendTextMessage = (e) => {
    e.preventDefault();
    if (textMsgRef.current.value != "") {
      sendMessage(textMsgRef.current.value, "text");
      textMsgRef.current.value = "";
    }
  };

// --------- currently not supported -----------------------

  function sendImage (imgSrc){
    sendMessage(imgSrc, "image");
  };

  function sendVideo (videoSrc){
    sendMessage(videoSrc, "video");
  };

  function sendRecord (recordSrc){
    sendMessage(recordSrc, "record");
  };

// ---------------------------------------------------------

  return (
    <div className="chat">
      <div className="chat-header bright-2-brand-color">
        <Avatar imgSrc={getDefualtImg()}></Avatar>

        <div className="chat-header-info">
          <h3>{contact.name}</h3>
        </div>
      </div>

      <div className="chat-body">
        {messagesList}
        <div ref={dummy}></div>
      </div>

      <div className="chat-footer bright-3-brand-color">
        <Dropdown drop="up">
          <Dropdown.Toggle variant="light-gray" id="dropdown-basic">
            <i className="bi bi-paperclip"></i>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">
              <UploadImageModal sendImage={sendImage}/>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">
            <UploadRecordModal sendRecord={sendRecord}/>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3">
            <UploadVideoModal sendVideo={sendVideo}/>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <form onSubmit={sendTextMessage}>
          <input
            ref={textMsgRef}
            type="text"
            placeholder="Type a message"
          ></input>
          <button type="submit" onSubmit={sendTextMessage}>
            <i className="bi bi-send "></i>
          </button>
        </form>
      </div>
    </div>
    );
  }

export default Chat;


function getCurrentTime(){
  var today = new Date();
  var currentHour = today.getHours();
  var currentMin = today.getMinutes();
  currentMin = (currentMin < 10) ? '0'+currentMin : currentMin
  return currentHour + ":" + currentMin;
}
