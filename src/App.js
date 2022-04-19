import './App.css';
import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/chat/Chat'
import { Routes, Route } from "react-router-dom"
import Login from "./components/login/login";
import Register from "./components/register/Register";

function App() {
  return (
    <div className="app">
      <div className='app-body'>
        <Routes>
          <Route path="/" element={<Login/>}> </Route>
          <Route path="/register" element={<Register />}> </Route>
        </Routes>
      </div>
    </div>
  );
}


export default App;
