import React, { useState } from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import Browse from './components/Browse/Browse';
import LoginScreen from "./components/LoginScreen/LoginScreen";
import NavBar from "./components/NavBar/NavBar";
import EditProfile from "./components/Profile/EditProfile";

function App() {
  const location = useLocation()
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
    {
      location.pathname !== '/' && <NavBar setIsLoggedIn={setIsLoggedIn} />
    }
      <Routes>
        <Route exact path='/' element={<LoginScreen setIsLoggedIn={setIsLoggedIn}/>}/>
          <Route path='/browse' element={<Browse isLoggedIn={isLoggedIn} />} />
        <Route path='/profile' element={<EditProfile setIsLoggedIn={setIsLoggedIn}/>} />
      </Routes>
    </>
  );
}

export default App;
