import './App.css';
import React from 'react';
import MainPage from "./components/mainPage/MainPage";
import SignUp from './components/signUp/Sign-up_page.js'
import Login from './components/login/login';

function App() {
  return (
    <div className="App">
      <header className="App-header"> Dan's Commit </header>
      <Login />
      
      <MainPage></MainPage>
    </div>
  );
}

export default App;
