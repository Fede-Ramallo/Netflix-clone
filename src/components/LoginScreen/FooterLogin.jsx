import React from 'react'
import './FooterLogin.css'
import { linksLogin } from '../../utils/links'

const FooterLogin = () => {
    return(
        <div className='footerLogininfo'>
            <div className='socialLogin-contact'>
                <p>Questions? Contact Us</p>
            </div>
            <ul className='footerLogin-links'>
                {linksLogin.map((link, i) => {
                    return(
                        <li className='linkLogin' key={i}>{link}</li>
                    )
                })}
            </ul>
            <div>
                <p>Netflix Argentina</p>
            </div>
        </div>
    )
}

export default FooterLogin;