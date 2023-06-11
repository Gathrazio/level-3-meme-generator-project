import React from 'react'
import trollface from '../assets/trollface-transparent.png'

export default function Navbar () {
    return (
        <div className='navbar-wrapper'>
            <div className='trollface-title-wrapper'>
                <img src={trollface} className='logo' onClick={() => window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ')}/>
                <h2 className='title'>Meme Generator</h2>
            </div>
            <h4 className='peripheral-text'>Level 3 Project</h4>
        </div>
    )
}