
import React from 'react'
import './Testimonials.css'

const Testimonials = () => {
    return (
        <div className='testimonials' id='testimonials'>
            <div className='container'>
                <h2>Membership</h2>
                <span className='line'></span>
                <div className='content'>
                    <div className='card'>
                        <h3>ALL ACCESS</h3>
                        <span className='line'></span>
                        <p><span>Adult BJJ and MMA Classes</span></p>
                        <h2>$70</h2>
                        <p>Monthly</p>
                        <span className='line'></span>


                    </div>
                    <div className='card'>
                        <h3>MORNING CLASSES</h3>
                        <span className='line'></span>
                        <p><span>BJJ Classes Only</span></p>
                        <h2>$40</h2>
                        <span className='line'></span>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Testimonials