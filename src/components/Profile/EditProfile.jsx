import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './EditProfile.css';

const EditProfile = ({setIsLoggedIn}) =>{
    let navigate = useNavigate();
    const LogOut = (e) =>{
        e.preventDefault();
        setIsLoggedIn(false)
        navigate('/')
    }
    const recentImageDataUrl = window.localStorage.getItem('recent-image')
    const [img, setImg] = useState(recentImageDataUrl)

    const uploadImage = (pic) => {
        const reader = new FileReader();

        reader.readAsDataURL(pic.target.files[0]);

        reader.onload = function(e) {
            var rawLog = reader.result;
            window.localStorage.setItem('recent-image', rawLog)
        };
    }

    const renderImage = () => {
        const recentImageDataUrl = window.localStorage.getItem('recent-image')

        if(recentImageDataUrl){
            setImg(recentImageDataUrl);
        }
    }

    return(
        <div className='profileScreen'>
            <div className='profileScreen-body'>
                <h1>Edit Profile</h1>
                <div className='profileScreen-info'>
                    <img src={img} alt='' id='profilePic'/>
                    <div className='profileScreen-details'>
                        <h2>Fede</h2>
                        <div className='profileScreen-Update'>
                            <div className='containerTotal'>
                            <h2>Upload an image:</h2>
                            <label for='file' className='custom-file-upload'>
                            <i class="fa fa-cloud-upload"></i>Custom Upload
                            </label>
                            <input type='file' id='file' onChange={uploadImage}/>
                            <button onClick={renderImage}>Upload</button>
                           </div>
                            <button className='profileScreen-btn' onClick={LogOut}>Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfile;