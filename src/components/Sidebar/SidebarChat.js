import React from 'react'
import Avatar from './Avatar'
import './SidebarChat.css'

function SidebarChat({displayName, lastMessage}) {
  return (
      <div className='sidebar-chat'>
      <Avatar imgSrc='https://placeimg.com/50/50/people'/>
      <div className='sidebar-chat-info'>
            <h2>{displayName}</h2>
            <h3> {lastMessage} </h3>
      </div>
    </div>
  )
}

export default SidebarChat