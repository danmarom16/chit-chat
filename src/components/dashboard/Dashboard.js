import React, { useState, useEffect } from 'react'
import Sidebar from '../sidebar/Sidebar'
import Chat from '../chat/Chat'
import EmptyChat from '../chat/EmptyChat';
import api from '../WebApi'
import { HubConnectionBuilder} from "@microsoft/signalr"

function Dashboard({loggedUser}) {
  const [activeContact, setActiveContact] = useState(null);
  const [value, setValue] = useState(0)
  const forceUpdate = () => setValue(value => value + 1);
  const [contacts, setContacts] = useState([])
  const [connection, setConnection] = useState(null);


  useEffect(() => {getContactUpdate()},[]);

  const getContactUpdate = async () => {
    try{
      const hubConnection = new HubConnectionBuilder().withUrl("http://localhost:5241/chathub", {withCredentials: (false)}).build();
      setConnection(hubConnection);
      await hubConnection.start();
      hubConnection.on("TriggerGetContacts", (sentUser) => {
        var sentUserToString = JSON.parse(sentUser);
        if(loggedUser.id === sentUserToString){
          forceUpdate();
        }
      })
    } catch (err){
      console.log(err);
    }
  }

  const getContact = () => {
      api.get(`/contacts/${loggedUser.id}`).then(
        (res) => {
          setContacts(res.data);
        }
      ).catch((err) => {
        console.error(err);
      });
    }

  return (
    <>
        <Sidebar loggedUser={loggedUser} handleSidebarClick={setActiveContact} newMsgTracker={value} getContact={getContact} contacts={contacts}/>
        {(activeContact !== null) ?
         <Chat connection={connection} loggedUser={loggedUser} forceUpdate={forceUpdate} contact={activeContact} newMsgTracker={value} getContact={getContact}/> :
          <EmptyChat/> }
    </>
  );
}

export default Dashboard