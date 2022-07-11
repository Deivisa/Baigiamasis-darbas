import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <ul>
                    <li className='nav-item'>
                        <a href='/'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about'>Coaches</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#testimonials'>Membership</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#demo'>About</a>
                    </li>
                </ul>
                <div className='bottom'>
                    <span className='line'></span>
                    <p>COBRINHA BRAZILIAN JIU-JITSU AND FITNESS</p>
                </div>
            </div>
        </div>
    )
}

export default Footer