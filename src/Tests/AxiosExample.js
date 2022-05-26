import React, { useEffect, useState, useRef } from 'react'
import Avatar from "../components/sidebar/Avatar"
import { getDefualtImg } from "../components/DataBase"
import Message from "../components/chat/Message"

import api from '../components/WebApi'

const contact = 
{
  id : "joe1",
  name : "Joe"
};

const username = 
{
  id : "peter",
  name : "Pit"
};

function AxiosExample() {

  const textMsgRef = useRef();
  const dummy = useRef();
  useEffect(() => { dummy.current.scrollIntoView({ behavior: 'smooth' }); });

  const [messages, setMessages] = useState([]);
  const [val, setVal] = useState(0);
  const updateChat = () => setVal(val => val + 1);

  useEffect(() => {
    getMessages()
    console.log("use effect has been called");
  }, [val]);

  // msg = {int id, string content, string created, bool sent}
  const getMessages = () => {
    try {
      api.get(`/contacts/${contact.id}/Messages/${username.id}`).then(
        (res) => {
          console.log(res);
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
    try {
      api.post(`/contacts/${contact.id}/Messages/${username.id}`,{}
      ,{params: {"content": msgContent}})
      .then((res) => {
          console.log(res);
          updateChat()
        }
      )
    }
    catch (err) {
      console.error(err);
    }
  }

  const sendTextMessage = (e) => {
    e.preventDefault();
    if (textMsgRef.current.value != "") {
      sendMessage(textMsgRef.current.value, "text");
      textMsgRef.current.value = "";
    }
  };

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

        <form onSubmit={sendTextMessage}>
          <input
            ref={textMsgRef}
            type="text"
            placeholder="Type a message"
            autoComplete='off'
          ></input>
          <button type="submit">
            <i className="bi bi-send "></i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default AxiosExample