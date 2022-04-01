import React, { useState } from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import Browse from './components/Browse/Browse';
import LoginScreen from "./components/LoginScreen/LoginScreen";
import NavBar from "./components/NavBar/NavBar";
import EditProfile from "./components/Profile/EditProfile";

function App() {
  const location = useLocation()
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchTerm, setSearchTerm] = useState('')
  const [movies, setMovies] = useState([])
  return (
    <>
    {
      location.pathname !== '/' && <NavBar setIsLoggedIn={setIsLoggedIn} searchTerm={searchTerm} setSearchTerm={setSearchTerm} movies={movies} setMovies={setMovies}/>
    }
      <Routes>
        <Route exact path='/' element={<LoginScreen setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path='/browse' element={<Browse isLoggedIn={isLoggedIn} searchTerm={searchTerm} setSearchTerm={setSearchTerm} movies={movies} setMovies={setMovies} />} />
        <Route path='/profile' element={<EditProfile setIsLoggedIn={setIsLoggedIn}/>} />
      </Routes>
    </>
  );
}

export default App;
