import React, { useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import Chat from '../chat/Chat'

function Dashboard({name}) {

  return (
    <>
        <Sidebar name={name}/>
        <Chat/>
    </>
  );
}

export default Dashboard