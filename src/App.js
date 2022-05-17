import './App.css';
import React, {useState} from 'react';
import Dashboard from './components/dashboard/Dashboard'
import { Routes, Route } from "react-router-dom"
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import BrandingBar from './components/branding bar/BrandingBar'
import EmptyDashboard from './components/dashboard/EmptyDashboard';

import AxiosExample from './Tests/AxiosExample';

function App() {
  const [username, setUsername] = useState("")

  return (
    <div className="app">
      <BrandingBar/>
      <div className='app-body'>
          <Routes>
          <Route path="/" element={<Login setUsername={setUsername} />}> </Route>
          <Route path="/register" element={<Register setUsername={setUsername} />}> </Route>
          <Route path="dashboard" element={(username !== "") ? <Dashboard  username={username}/> : <EmptyDashboard />}></Route>
          <Route path="/Test" element={<AxiosExample/>}> </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
