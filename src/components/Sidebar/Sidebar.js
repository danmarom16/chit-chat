import "./Sidebar.css";
import React, { useEffect, useState } from "react";
import SidebarChat from "./SidebarChat";
import Avatar from "./Avatar";
import { Modal } from "react-bootstrap";
import NewContactModal from "./newContactModal";
import { getChats, getDisplayName, getLastMessage, getProfileImage } from "../DataBase";

function Sidebar({ username, handleSidebarClick }) {

  console.log("render")

  // usernames of exists chats.
  const [openChats, setOpenChats] = useState(Object.keys(getChats()))

  const contactList = openChats.map((friendUsername, key) => {
    return (
      <SidebarChat
        displayName={getDisplayName(friendUsername)}
        lastMessage={getLastMessage(friendUsername)}
        profilePicture = {getProfileImage(friendUsername)}
        myUsername = {friendUsername}
        key={key}
        handleClick={handleSidebarClick}
      />
    );
  });


  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div xl={6} md={6} sm={6}>
          <Avatar imgSrc={getProfileImage(username)}></Avatar>
        </div>
        <div xl={3} md={3} sm={3} xs={3}>
          {getDisplayName(username)}
        </div>
        <div xl={3} md={3} sm={3} xs={3} className="sidebar-header-right">
        <NewContactModal myUsername={username} myChats={openChats} handleAddChat={setOpenChats} />
        </div>
      </div>
      <div className="sidebar-search">
        <input
          type="text"
          placeholder="Search or start a new chat"
          className="m-3 rounded-pill"
        ></input>
      </div>
      <div className="sidebar-chats">
      {contactList}
      </div>
    </div>
  );
}

export default Sidebar;
