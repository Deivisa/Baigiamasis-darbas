
import React from 'react'
import './Demo.css'

const Demo = () => {
    return (
        <div className='demo' id='demo'>
            <div className='container'>
                <div className='col-1'>
                    <p>About Cobrinha Brazilian Jiu-Jitsu and fitness club</p>
                    <p></p>
                    <p>Our gym is built on respect, discipline and family values.We are a hardworking gym. With us, individuals will be pushed harder, for longer and experience true support and strength through community.</p>
                    <button className='button'>7 DAY FREE TRIAL</button>
                </div>
                <div className='col-2'>
                    <iframe width='570' height='320' src='https://www.youtube.com/embed/vr_XlkK36UM' title='Youtube video player' frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </div>
            </div>
        </div>
    )
}

export default Demo