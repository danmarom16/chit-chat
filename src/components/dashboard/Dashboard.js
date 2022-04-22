import React, { useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import Chat from '../chat/Chat'

function Dashboard({username}) {
  console.log("in Dashboard")
  console.log(username)
  return (
    <>
        <Sidebar username={username}/>
        <Chat/>
    </>
  );
}

export default Dashboard