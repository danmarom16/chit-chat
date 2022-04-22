import React, { useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import Chat from '../chat/Chat'

function Dashboard({username}) {

  return (
    <>
        <Sidebar name={username}/>
        <Chat/>
    </>
  );
}

export default Dashboard