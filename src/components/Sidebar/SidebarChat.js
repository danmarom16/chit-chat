import React from 'react'
import Avatar from './Avatar'
import './SidebarChat.css'
import Message from '../chat/Message'
function SidebarChat({myUsername, displayName, LastMsg, LastMsgDate, profilePicture, handleClick}) {

  const onClick = e => {
    handleClick({id: myUsername, name: displayName})
  }

  return (
      <div className='sidebar-chat bright-brand-color' onClick={onClick}>
      <Avatar imgSrc={profilePicture}/>
      <div className='sidebar-chat-info'>
            <h2 >{displayName}</h2>
            <h3> 
            <div className="text-muted">{LastMsg ? LastMsg : ""}</div>
            <small className="text-muted" > {LastMsgDate ? LastMsgDate : ""}</small>
             </h3>
      </div>
    </div>
  )
}

export default SidebarChat