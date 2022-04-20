import "./Sidebar.css";
import React, { useState } from "react";
import SidebarChat from "./SidebarChat";
import Avatar from "./Avatar";
import { Modal } from "react-bootstrap"
import NewContactModal from './newContactModal';

function Sidebar() {
  const [modalOpen, setModalOpen] = useState(false)

  function closeModal() {
      setModalOpen(false)
  }



  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div xl={6} md={6} sm={6}>
        <Avatar imgSrc='https://placeimg.com/50/50/people'></Avatar>
        </div>
        <div xl={3} md={3} sm={3} xs={3}>
        Masvidal
        </div>
        <div xl={3} md={3} sm={3} xs={3} className="sidebar-header-right">
          <button id="addContact" className="btn btn-light btn-sm" onClick={() => setModalOpen(true)}>
            <i className="bi bi-person-plus-fill"></i>
          </button>
        </div>
      </div>
      <div className="sidebar-search">
      <input type="text" placeholder="Search or start a new chat" className="m-3 rounded-pill">
      </input>
      </div>
      <div className="sidebar-chats"> 
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>
      </div>
      <Modal show={modalOpen} onHide={closeModal}>
      <NewContactModal closeModal={closeModal} />
  </Modal>
    </div>
  );
}

export default Sidebar;
