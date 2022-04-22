import React from 'react'
import './Chat.css'



function Message({content, time, isSender, type}) {

    if(type == "image"){
        return (<p className={`chat-message ${isSender ? 'chat-sender': ""}`}>
            <img src={content} className="image-message"/>
            <span className="chat-timestamp">
                {time}
            </span>
        </p>
    );
    }

    else
    return (
        <p className={`chat-message ${isSender ? 'chat-sender': ""}`}>
            {content}
            <span className="chat-timestamp">
                {time}
            </span>
        </p>
    )
}

export default Message