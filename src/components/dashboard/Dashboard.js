import React, { useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import Chat from '../chat/Chat'

function Dashboard({username}) {
  const [activeChat, setActiveChat] = useState("chamzat");

  return (
    <>
        <Sidebar username={username} handleSidebarClick={setActiveChat}/>
        <Chat friendUsername={activeChat}/>
    </>
  );
}

export default Dashboard