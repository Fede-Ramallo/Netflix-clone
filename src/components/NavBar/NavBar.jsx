import React, { useState } from "react";
import './NavBar.css';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import profile from '../../assets/images/profilePicture.png';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom'

const NavBar = () =>{

    const [scrolled, setScrolled] = useState(false);

    window.onscroll = () => {
        setScrolled(window.pageYOffset === 0 ? false : true)
        return () => (window.onScroll = null)
    }
    return(
        <nav className={!scrolled ? 'nav' : 'scrolled'}>
            <div className="container">
                <div className="leftNav">
                    <img alt="netflix logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" className="logoNavBar"/>
                    <ul className="ulContainer">
                        <li className="navigation-tab"><Link to='/browse'>Home</Link></li>
                        <li className="navigation-tab"><Link to='/browse/tv'>TV Shows</Link></li>
                        <li className="navigation-tab"><Link to='/browse/movies'>Movies</Link></li>
                        <li className="navigation-tab"><Link to='/latest'>New & Popular</Link></li>
                        <li className="navigation-tab"><Link to='/browse/my-list'>My List</Link></li>
                    </ul>
                </div>
                <div>
                    <div className="rightNav">
                        <SearchIcon className="icon"/>
                        <div>Kid</div>
                        <NotificationsIcon className="icon"/>
                        <img alt="profile pic" src={profile} className='profileCont'/>
                        <div className="profile">
                            <ArrowDropDownIcon  className="icon"/>
                            <div className="options">
                                <div>Settings</div>
                                <div>Log out</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;  