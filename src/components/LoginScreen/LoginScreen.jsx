import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import SignUpScreen from './SignUpScreen/SignUpSCreen';
import './LoginScreen.css';
import FAQ from './FAQ';

const LoginScreen = () => {
    const [signIn, setSignIn] = useState(false);
    return(
        <div className='loginScreen'>
            <div className='loginScreenBg'>
                <Link to='/'>
                <img alt='' src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' className='loginScreenLogo'/>
                </Link>
                <button className='loginScreenBtn'>Sign In</button>
                <div className='loginScreenGradiant'/>
            </div>
            <div className='loginScreen-body'>
                {signIn ? (
                    <SignUpScreen />
                ) : (
                <>
                <h1>Unlimited movies, TV shows, and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                    <div className='loginScreen-input'>
                    <form>
                        <input type='email' placeholder='Email Adress' />
                        <button 
                        className='loginScreen-inputBtn'
                        onClick={() => setSignIn(true)}
                        >
                        GET STARTED
                        </button>
                    </form>
                    </div>
                    </>)}
            </div>
            {!signIn && <div>        <div className='loginScreen-cards'>
                <div className='loginScreen-card'>
                    <div className='loginScreen-cardcontent'>
                        <div className='loginScreen-titles'>
                            <h1>Enjoy your TV.</h1>
                            <h2>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h2>
                        </div>
                        <div className='loginScreen-images'>
                            <img src='https://beat-netflix-clone.vercel.app/images/misc/home-tv.jpg' alt='' />
                        </div>
                    </div>
                </div>
                <div className='loginScreen-card'>
                    <div className='loginScreen-cardcontent'>
                    <div className='loginScreen-images'>
                            <img src='https://beat-netflix-clone.vercel.app/images/misc/home-mobile.jpg' alt='' />
                        </div>
                        <div className='loginScreen-titles'>
                            <h1>Download your programmes to watch on the go.</h1>
                            <h2>Save your data and watch all your favourites offline.</h2>
                        </div>
                    </div>
                </div>
                <div className='loginScreen-card'>
                    <div className='loginScreen-cardcontent'>
                        <div className='loginScreen-titles'>
                            <h1>Watch everywhere.</h1>
                            <h2>Stream unlimited films and TV programmes on your phone, tablet, laptop and TV without paying more.</h2>
                        </div>
                        <div className='loginScreen-images'>
                            <img src='https://beat-netflix-clone.vercel.app/images/misc/home-imac.jpg' alt='' />
                        </div>
                    </div>
                </div>
            </div>
            <FAQ /></div>}
        </div>
    )
}

export default LoginScreen;