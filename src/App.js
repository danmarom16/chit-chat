import './App.css';
import React, {useState} from 'react';
import Dashboard from './components/dashboard/Dashboard'
import { Routes, Route } from "react-router-dom"
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import BrandingBar from './components/branding bar/BrandingBar'
import EmptyDashboard from './components/dashboard/EmptyDashboard';

function App() {
  const [loggedUser, setLoggedUser] = useState(null)

  return (
    <div className="app">
      <BrandingBar/>
      <div className='app-body'>
          <Routes>
          <Route path="/" element={<Login setLoggedUser={setLoggedUser} />}> </Route>
          <Route path="/register" element={<Register setLoggedUser={setLoggedUser} />}> </Route>
          <Route path="dashboard" element={(loggedUser !== null) ? <Dashboard  loggedUser={loggedUser}/> : <EmptyDashboard />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
