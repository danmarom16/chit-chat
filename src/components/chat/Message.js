import React from 'react'
import './Chat.css'



function Message({content, time, isReciever, type}) {

    if(type == "image"){
        return (<p className={`chat-message ${isReciever ? 'chat-reciver': ""}`}>
            <img src={content} className="image-message"/>
            <span className="chat-timestamp">
                {time}
            </span>
        </p>
    );
    }

    else
    return (
        <p className={`chat-message ${isReciever ? 'chat-reciver': ""}`}>
            {content}
            <span className="chat-timestamp">
                {time}
            </span>
        </p>
    )
}

export default Message