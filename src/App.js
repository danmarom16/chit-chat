import './App.css';

import MainPage from "./components/MainPage";

import DisplayContacts from './Contacts/Contacts';
import SignUp from './Sign-up_page.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src="./cumShot.jpg" alt="logo" width="800" />
      </header>
      <div>
      <MainPage />
      </div>
      <div>
        <SignUp />
        <div></div>
        <DisplayContacts />
      </div>
    </div>
  );
}

export default App;
