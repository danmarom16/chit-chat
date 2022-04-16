import React, { useState } from 'react'
import './Chat.css'
import Avatar from '../sidebar/Avatar'
import Message from './Message'

function Chat() {
    const [msg, setMsg] = useState("")

    const [messages, setMessages] = useState([])

    const sendMessage = (e) => {
        e.preventDefault();
        var today = new Date();
        var currentHour = today.getHours() + ":" + today.getMinutes();
        setMessages([...messages, {content: msg, time: currentHour}]);
        setMsg("");
    }

    const messagesList = messages.map((message, key) => {
        return <Message content={message.content} time={message.time} isReciever={true} key={key} />
    })

    return (
        <div className="chat">


            <div className='chat-header'>
                <Avatar imgSrc='https://placeimg.com/50/50/people'></Avatar>

                <div className='chat-header-info'>
                    <h3> Friend name</h3>
                    <p> Last seen at...</p>
                </div>

                <div className='chat-header-right'>
                    <button className="btn btn-light btn-sm">
                        <i className="bi bi-search"></i>
                    </button>
                    <button className="btn btn-light btn-sm">
                        <i className="bi bi-three-dots-vertical"></i>
                    </button>

                </div>
            </div>

            <div className='chat-body'>
                <Message content="suprise suprise mf" time="3:52"/>
                <Message content="THE KING IS BACK" time="3:53"/>
                {messagesList}
            </div>

            <div className='chat-footer'>
                <form onSubmit={sendMessage}>
                    <button className='bi bi-paperclip'></button>
                    <input value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                        type="text" placeholder='Type a message' ></input>
                    <button type='submit' onSubmit={sendMessage}> <i className="bi bi-send"></i></button>
                </form>
            </div>

        </div>
    )
}

export default Chat