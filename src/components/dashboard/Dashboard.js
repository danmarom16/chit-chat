import React, { useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import Chat from '../chat/Chat'
import EmptyChat from '../chat/EmptyChat';

function UseForceUpdate(){
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1); // update the state to force render
}

function Dashboard({username}) {
  const [activeChat, setActiveChat] = useState("");
  const forceUpdate = UseForceUpdate();

  return (
    <>
        <Sidebar username={username} handleSidebarClick={setActiveChat}/>
        {(activeChat !== "") ?
         <Chat forceUpdate={forceUpdate} myUsername={username} friendUsername={activeChat}/> :
          <EmptyChat/> }
    </>
  );
}

export default Dashboard