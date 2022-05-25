import "./Sidebar.css";
import React, { useEffect, useState } from "react";
import SidebarChat from "./SidebarChat";
import Avatar from "./Avatar";
import NewContactModal from "./newContactModal";
import { getDefualtImg } from "../DataBase";

import api from '../ContactsApi'

const username =
{
  id: "peter",
  name: "Pit",
  server: "http://localhost:5241/"
};

function Sidebar({ handleSidebarClick , newMsgTracker}) {
  // contact = {id, name, server, last, lastdate}
  const [contacts, setContacts] = useState([])
  const [searchValue, setSearchValue] = useState("")

  const getContact = () => {
    try {
      api.get(`/${username.id}`).then(
        (res) => {
          console.log(res);
          setContacts(res.data);
        }
      )
    }
    catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getContact()
    console.log("use effect has been called");
  }, [newMsgTracker]
  )

  const contactList = contacts.filter((contact) => {
    let contactName = (contact.name).toLowerCase();
    let searchVal = searchValue.toLowerCase();
    return (contactName.includes(searchVal));
  })

  const contactListResult = contactList.map((contact, key) => {
    return (
      <SidebarChat
        displayName={contact.name}
        LastMsg={contact.last}
        LastMsgDate={contact.lastdate}
        profilePicture={getDefualtImg()}
        myUsername={contact.id}
        key={key}
        handleClick={handleSidebarClick}
      />
    );
  });

  return (
    <div className="sidebar">
      <div className="sidebar-header bright-2-brand-color">
        <div xl={6} md={6} sm={6}>
          <Avatar imgSrc={getDefualtImg()}></Avatar>
        </div>
        <div className="user-login-name" xl={3} md={3} sm={3} xs={3}>
          {username.name}
        </div>
        <div xl={3} md={3} sm={3} xs={3} className="sidebar-header-right">
          <NewContactModal myUsername={username.id} updateContactList={getContact}/>
        </div>
      </div>
      <div className="sidebar-search bright-3-brand-color">
        <input onChange={((e) => { setSearchValue(e.target.value) })}
          type="text"
          placeholder="Search or start a new chat"
          className="m-3 rounded-pill"
        ></input>
      </div>
      <div className="sidebar-chats">
        {contactListResult}
      </div>
    </div>
  );
}

export default Sidebar;
