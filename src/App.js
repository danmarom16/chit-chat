import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom"
import Login from "./components/loginPage/login";
import Register from "./components/register/Register";
import Chat from './components/chat/Chat'

function App() {
  return (
    <div className="app">
      <div className='app-body'>
        <Routes>
          <Route path="/" element={<Login />}> </Route>
          <Route path="/register" element={<Register />}> </Route>
          <Route path="/chat" element={<Chat />}> </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;