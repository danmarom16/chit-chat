import React from 'react'
import './Chat.css'



function Message({content, time, isSender, type}) {
    if(type == "image"){
        return (<p className={`chat-message ${isSender ? 'chat-sender': ""}`}>
            <div>
            <img src={content} className="image-message p-2"/>
            </div>
            <div className="chat-timestamp pt-2">
                {time}
            </div>
        </p>
    );
    }

    else if(type == "video"){
        return (<p className={`chat-message ${isSender ? 'chat-sender': ""}`}>
        <div>
        <video controls src={content} className="video-message p-2"/>
        </div>
            <div className="chat-timestamp">
                {time}
            </div>
        </p>
    );
    }    
    
    else if(type == "record"){
        return (<p className={`chat-message  ${isSender ? 'chat-sender': ""}`}>
        <div>
        <audio controls src={content} className="record-message p-2"/>
        </div>
            <div className="chat-timestamp">
                {time}
            </div>
        </p>
    );
    } 
    return (
        <p className={`flex p-2 text-message chat-message ${isSender ? 'chat-sender': ""}`}>
                <div>{content}</div>
            <span className="chat-timestamp">
                {time}
            </span>
        </p>
    )
}

export default Message