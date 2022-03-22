import React from "react";
import { Routes, Route } from 'react-router-dom';
import Browse from './components/Browse/Browse';
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
    <NavBar />
      <Routes>
        <Route path='/browse' element={<Browse />} />
      </Routes>
    </>
  );
}

export default App;
