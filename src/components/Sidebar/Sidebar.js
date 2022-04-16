import React from "react";
import Image from "react-bootstrap/Image";
import "./Sidebar.css";
import { Row, Col, Button, FormControl } from "react-bootstrap";
import SidebarChat from "./SidebarChat";
import Avatar from "./Avatar";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div xl={6} md={6} sm={6}>
        <Avatar imgSrc='https://placeimg.com/50/50/people'></Avatar>
        </div>
        <div xl={3} md={3} sm={3} xs={3}></div>
        <div xl={3} md={3} sm={3} xs={3} className="sidebar-header-right">
          <button className="btn btn-light btn-sm">
            <i className="bi bi-chat-left-text-fill"></i>
          </button>
          <button className="btn btn-light btn-sm">
            <i className="bi bi-three-dots-vertical"></i>
          </button>
        </div>
      </div>
      <div className="sidebar-search">
      <FormControl type="text" placeholder="Search or start a new chat" className="m-3 rounded-pill">
      </FormControl>
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
    </div>
  );
}

export default Sidebar;
