import React, {useState, useEffect} from 'react'
import trollface from '../assets/trollface-transparent.png' // temporary
import MemeList from './MemeList'

export default function Main () {

    // State should be centralized here in Main()
    // Meaning state for the values of the input boxes and an array of meme element objects
    // We can track what's inside the input boxes as things are typed
    // upon submission, we can take the necessary info (top text value, bottom text value, the image) and update the array of meme element objects
    // then we can send that array into MemeList as a prop
    // we should also send in a reference to a function that can edit/delete a particular object in the state array

    // the API call should also take place here within a useEffect()

    return (
        <main className="main-wrapper">
            <div className="inputs-button-wrapper">
                <div className="inputs-wrapper">
                    <input type="text" className='text-input left-input' placeholder='Top Text' />
                    <input type="text" className='text-input right-input' placeholder='Bottom Text' />
                </div>
                <div className="button-wrapper">
                    <button className='get-new-image button'>Get New Meme Image</button>
                    <button className='submit button'>Submit</button>
                </div>
            </div>
            <div className="meme-block-wrapper">
                <img className="current-meme-image" src={trollface} />
                <h2 className='meme-text meme-text-top'>Top Text</h2>
                <h2 className='meme-text meme-text-bottom'>Bottom Text</h2>
            </div>
             
            <MemeList />
        </main>
    )
}