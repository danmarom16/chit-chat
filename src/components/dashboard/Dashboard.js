import React, { useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import Chat from '../chat/Chat'
import EmptyChat from '../chat/EmptyChat';
import api from '../WebApi'

function Dashboard({loggedUser}) {
  const [activeContact, setActiveContact] = useState(null);
  const [value, setValue] = useState(0)
  const forceUpdate = () => setValue(value => value + 1);
  const [contacts, setContacts] = useState([])

  const getContact = () => {
    try {
      api.get(`/contacts/${loggedUser.id}`).then(
        (res) => {
          setContacts(res.data);
        }
      )
    }
    catch (err) {
      console.error(err);
    }
  }

  return (
    <>
        <Sidebar loggedUser={loggedUser} handleSidebarClick={setActiveContact} newMsgTracker={value} getContact={getContact} contacts={contacts}/>
        {(activeContact !== null) ?
         <Chat loggedUser={loggedUser} forceUpdate={forceUpdate} contact={activeContact} newMsgTracker={value} getContact={getContact}/> :
          <EmptyChat/> }
    </>
  );
}

export default Dashboard