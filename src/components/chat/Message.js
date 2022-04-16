import React from 'react'
import './Chat.css'

function Message({content, time, isReciever}) {
    return (
        <p className={`chat-message ${isReciever ? 'chat-reciver': ""}`} >
            {content}
            <span className="chat-timestamp">
                {time}
            </span>
        </p>
    )
}

export default Message