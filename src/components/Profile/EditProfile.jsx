import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EditProfile.css';
import profile from '../../assets/images/profilePicture.png';

const EditProfile = ({setIsLoggedIn}) =>{
    let navigate = useNavigate();
    const LogOut = (e) =>{
        e.preventDefault();
        setIsLoggedIn(false)
        navigate('/')
    }
    return(
        <div className='profileScreen'>
            <div className='profileScreen-body'>
                <h1>Edit Profile</h1>
                <div className='profileScreen-info'>
                    <img src={profile} alt='' />
                    <div className='profileScreen-details'>
                        <h2>Fede</h2>
                        <div className='profileScreen-Update'>
                            <h2>Upload an image:</h2>
                            <button className='profileScreen-btn' onClick={LogOut}>Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfile;