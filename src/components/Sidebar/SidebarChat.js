import React from 'react'
import Avatar from './Avatar'
import './SidebarChat.css'

function SidebarChat() {
  return (
      <div className='sidebar-chat'>
      <Avatar imgSrc='https://placeimg.com/50/50/people'/>
      <div className='sidebar-chat-info'>
            <h2>Friend Name</h2>
            <h3> The king is back</h3>
      </div>
    </div>
  )
}

export default SidebarChat