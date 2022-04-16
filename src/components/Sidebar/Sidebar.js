import React from 'react'
import Image from 'react-bootstrap/Image'

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar-header'> 
            <Image roundedCircle fluid src={'https://placeimg.com/50/50/people'}></Image>
            <span className='sidebar-header-right'>
                <i class="bi bi-three-dots-vertical"></i>
                <i class="bi bi-chat-left-text-fill"></i>
            </span>
        </div>
        <div className='sidebar-search'> </div>
        <div className='sidebar-chats'> </div>
    </div>
    
  )
}

export default Sidebar