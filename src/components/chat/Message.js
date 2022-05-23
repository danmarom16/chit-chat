import React from 'react'
import './Chat.css'
/**
 * isSender will hold the value true if sender = loggedInUsername
 * sender is property of msg
 * 
 */

function Message({content, time, isSender, type}) {
    if(type == "image"){
        return (<h2 className={`chat-message ${isSender ? 'chat-sender': ""}`}>
            <div>
            <img src={content} className="image-message p-2"/>
            </div>
            <div className="chat-timestamp pt-2">
                {time}
            </div>
        </h2>
    );
    }

    else if(type == "video"){
        return (<h2 className={`chat-message ${isSender ? 'chat-sender': ""}`}>
        <div>
        <video controls src={content} className="video-message p-2"/>
        </div>
            <div className="chat-timestamp">
                {time}
            </div>
        </h2>
    );
    }    
    
    else if(type == "record"){
        return (<h2 className={`chat-message  ${isSender ? 'chat-sender': ""}`}>
        <div>
        <audio controls src={content} className="record-message p-2"/>
        </div>
            <div className="chat-timestamp">
                {time}
            </div>
        </h2>
    );
    } 
    return (
        <h2 className={`flex p-2 text-message chat-message ${isSender ? 'chat-sender': ""}`}>
                <div>{content}</div>
            <span className="flex chat-timestamp">
                {time}
            </span>
        </h2>
    )
}

export default Message