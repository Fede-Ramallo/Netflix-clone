import React from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import Browse from './components/Browse/Browse';
import LoginScreen from "./components/LoginScreen/LoginScreen";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const location = useLocation()
  return (
    <>
    {
      location.pathname !== '/' && <NavBar />
    }
      <Routes>
        <Route exact path='/' element={<LoginScreen />}/>
        <Route path='/browse' element={<Browse />} />
        <Route path='/YourAccount' />
      </Routes>
    </>
  );
}

export default App;
