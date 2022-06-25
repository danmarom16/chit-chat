import React from 'react'
import Avatar from './Avatar'
import './SidebarChat.css'

const fTime = (toConvert) => {
  const formatted = new Date(toConvert)
  return (formatted.getHours() + ':' + formatted.getMinutes());
}


function SidebarChat(
  {username, displayName, cServer, lastMsg, lastMsgDate, profilePic, handleClick}) {

  const onClick = (e) => {
    handleClick({id: username, name: displayName, server: cServer})
  }

  return (
      <div className='sidebar-chat bright-brand-color' onClick={onClick}>
      <Avatar imgSrc={profilePic}/>
      <div className='sidebar-chat-info'>
            <h2 >{displayName}</h2>
            <h3> 
            <div className="text-muted">{lastMsg ? lastMsg : ""}</div>
            <small className="text-muted" > {lastMsgDate ? fTime(lastMsgDate) : ""}</small>
             </h3>
      </div>
    </div>
  )
}

export default SidebarChat