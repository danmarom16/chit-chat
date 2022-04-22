import './App.css';
import React, {useState} from 'react';
import Dashboard from './components/dashboard/Dashboard'
import { Routes, Route } from "react-router-dom"
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import BrandingBar from './components/branding bar/BrandingBar'

function App() {
  const [username, setUsername] = useState("Masvidal")

  return (
    <div className="app">
      <BrandingBar/>
      <div className='app-body'>
          <Routes>
          <Route path="/" element={<Login setUsername={setUsername} />}> </Route>
          <Route path="/register" element={<Register />}> </Route>
          <Route path="dashboard" element={<Dashboard name={username} />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
