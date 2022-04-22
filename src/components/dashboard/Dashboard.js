import React, { useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import Chat from '../chat/Chat'
import EmptyChat from '../chat/EmptyChat';

function Dashboard({username}) {
  const [activeChat, setActiveChat] = useState("");

  return (
    <>
        <Sidebar username={username} handleSidebarClick={setActiveChat}/>
        {(activeChat !== "") ? <Chat friendUsername={activeChat}/> : <EmptyChat/> }
    </>
  );
}

export default Dashboard