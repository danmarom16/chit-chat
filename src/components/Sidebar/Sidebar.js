import "./Sidebar.css";
import React, { useEffect, useState } from "react";
import SidebarChat from "./SidebarChat";
import Avatar from "./Avatar";
import { Modal } from "react-bootstrap";
import NewContactModal from "./newContactModal";
import { getChats, getDisplayName, getLastMessage, getProfileImage } from "../DataBase";

function Sidebar({ username, handleSidebarClick }) {

  // newChat
  const [modalOpen, setModalOpen] = useState(false);
  function closeModal() {
    setModalOpen(false);
  }

  const contactList = Object.keys(getChats()).map((friendUsername, key) => {
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
          <button
            id="addContact"
            className="btn btn-sm"
            onClick={() => setModalOpen(true)}
          >
            <i className="bi bi-person-plus-fill"></i>
          </button>
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
      <Modal show={modalOpen} onHide={closeModal}>
        <NewContactModal myUsername={username} myChats={Object.keys(getChats())} closeModal={closeModal} />
      </Modal>
    </div>
  );
}

export default Sidebar;
