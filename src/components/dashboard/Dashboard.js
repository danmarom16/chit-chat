import React, { useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import Chat from '../chat/Chat'
import EmptyChat from '../chat/EmptyChat';

function Dashboard({loggedUser}) {
  const [activeContact, setActiveContact] = useState(null);
  const [value, setValue] = useState(0)
  const forceUpdate = () => setValue(value => value + 1);

  return (
    <>
        <Sidebar loggedUser={loggedUser} handleSidebarClick={setActiveContact} newMsgTracker={value}/>
        {(activeContact !== null) ?
         <Chat loggedUser={loggedUser} forceUpdate={forceUpdate} contact={activeContact} newMsgTracker={value}/> :
          <EmptyChat/> }
    </>
  );
}

export default Dashboard