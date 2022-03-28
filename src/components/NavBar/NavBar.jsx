import React, { useState } from "react";
import './NavBar.css';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import profile from '../../assets/images/profilePicture.png';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link, useLocation, useNavigate } from 'react-router-dom'

const NavBar = ({setIsLoggedIn}) =>{

    const [scrolled, setScrolled] = useState(false);

    window.onscroll = () => {
        setScrolled(window.pageYOffset === 0 ? false : true)
        return () => (window.onScroll = null)
    }

    let navigate = useNavigate();
    const LogOut = (e) =>{
        e.preventDefault();
        setIsLoggedIn(false)
        navigate('/')
    }

    let location = useLocation();

    return(
        <nav className={!scrolled ? 'nav' : 'scrolled'}>
            <div className="container">
                <div className="leftNav">
                    <Link to='/browse'>
                    <img alt="netflix logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" className="logoNavBar"/>
                    </Link>
                    {
                        location.pathname !== '/profile' && 
                        <ul className="ulContainer">
                        <li className="navigation-tab"><Link to='/browse'>Home</Link></li>
                        <li className="navigation-tab"><Link to='/browse/tv'>TV Shows</Link></li>
                        <li className="navigation-tab"><Link to='/browse/movies'>Movies</Link></li>
                        <li className="navigation-tab"><Link to='/latest'>New & Popular</Link></li>
                        <li className="navigation-tab"><Link to='/browse/my-list'>My List</Link></li>
                    </ul>
                    }
                </div>
                <div>
                    <div className="rightNav">
                        <SearchIcon className="icon"/>
                        <NotificationsIcon className="icon"/>                       
                        <div className="profile">
                        <img alt="profile pic" src={profile} className='profileCont'/>
                            <ArrowDropDownIcon  className="icon"/>
                            <div className="options">
                                <div><Link to='/profile'>Settings</Link></div>
                                <div onClick={LogOut}>Sign out</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;  