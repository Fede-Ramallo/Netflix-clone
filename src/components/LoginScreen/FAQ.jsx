import React, { useState } from 'react';
import './FAQ.css'

const FAQ = () => {

    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    const [isActive4, setIsActive4] = useState(false);
    const [isActive5, setIsActive5] = useState(false);

    return(
        <div className='loginScreen-faqcontainer'>
        <div className='loginScreen-faq'>
            <h1>Frequently Asked Questions</h1>
            <div className='loginScreen-faqcontent'>
                <div className='loginScreen-faqtitle' onClick={() => setIsActive1(!isActive1)}>
                    What is Netflix?
                    {isActive1 ? <img alt='' src='https://beat-netflix-clone.vercel.app/images/icons/close-slim.png'/> : <img alt='' src='https://beat-netflix-clone.vercel.app/images/icons/add.png'/> }
                </div>
                {isActive1 && 
                    <div className='loginScreen-accordioncontent'>
                        <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.</p>
                        <p>You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</p>
                    </div>}
            </div>
            <div className='loginScreen-faqcontent'>
                <div className='loginScreen-faqtitle' onClick={() => setIsActive2(!isActive2)}>
                    How much does Netflix cost?
                    {isActive2 ? <img alt='' src='https://beat-netflix-clone.vercel.app/images/icons/close-slim.png'/> : <img alt='' src='https://beat-netflix-clone.vercel.app/images/icons/add.png'/> }
                </div>
                {isActive2 && 
                    <div className='loginScreen-accordioncontent'>
                        <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ARS379 to ARS939 a month (pre-tax). No extra costs, no contracts.</p>
                    </div>}
            </div>
            <div className='loginScreen-faqcontent'>
                <div className='loginScreen-faqtitle' onClick={() => setIsActive3(!isActive3)}>
                    Where can i watch?
                    {isActive3 ? <img alt='' src='https://beat-netflix-clone.vercel.app/images/icons/close-slim.png'/> : <img alt='' src='https://beat-netflix-clone.vercel.app/images/icons/add.png'/> }
                </div>
                {isActive3 && 
                    <div className='loginScreen-accordioncontent'>
                        <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</p>
                        <p>You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
                    </div>}
            </div>
            <div className='loginScreen-faqcontent'>
                <div className='loginScreen-faqtitle' onClick={() => setIsActive4(!isActive4)}>
                    How do i cancel?
                    {isActive4 ? <img alt='' src='https://beat-netflix-clone.vercel.app/images/icons/close-slim.png'/> : <img alt='' src='https://beat-netflix-clone.vercel.app/images/icons/add.png'/> }
                </div>
                {isActive4 && 
                    <div className='loginScreen-accordioncontent'>
                        <p>Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
                    </div>}
            </div>
            <div className='loginScreen-faqcontent'>
                <div className='loginScreen-faqtitle' onClick={() => setIsActive5(!isActive5)}>
                    What can i watch on Netflix?
                    {isActive5 ? <img alt='' src='https://beat-netflix-clone.vercel.app/images/icons/close-slim.png'/> : <img alt='' src='https://beat-netflix-clone.vercel.app/images/icons/add.png'/> }
                </div>
                {isActive5 && 
                    <div className='loginScreen-accordioncontent'>
                        <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
                    </div>}
                    <form className='loginScreen-faqinput'>
                        <h3>Ready to watch? Enter your email to create or restart your membership</h3>
                        <div className='xd'>
                        <input placeholder='Email Adress'/>
                        <button className='loginScreen-faqbtn'>Get Started <img alt='' src='https://beat-netflix-clone.vercel.app/images/icons/chevron-right.png'/></button>
                        </div>
                    </form>
            </div>
        </div>
    </div>
    )
}

export default FAQ;