import React from 'react'
import Avatar from './Avatar'
import './SidebarChat.css'
import Message from '../chat/Message'
function SidebarChat({myUsername, displayName, lastMessage, profilePicture, handleClick}) {

  const onClick = e => {
    handleClick(myUsername)
  }

  return (
      <div className='sidebar-chat' onClick={onClick}>
      <Avatar imgSrc={profilePicture}/>
      <div className='sidebar-chat-info'>
            <h2>{displayName}</h2>
            <h3 className='d-flex'> 
            <div >{lastMessage.content}</div>
            <div > {lastMessage.time}</div>
             </h3>
            
      </div>
    </div>
  )
}

export default SidebarChat