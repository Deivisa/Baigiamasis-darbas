
import React from 'react'
import john from './images/john-doe.png'
import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img src={john} alt='john' />
                <div className='col-2'>
                    <h2>Coaches</h2>
                    <span className='line'></span>
                    <p>Roger Gracie is a 10 time Jiu-Jitsu world champion. He is the grandson of the founder of the art, Carlos Gracie. Son of Mauricio Gomes and Reila Gracie. The Gracie family has been the driving force in the growth of Jiu-Jitsu and the revolution in the martial arts around the world.</p>
                
    
                </div>
            </div>
        </div>
    )
}

export default About