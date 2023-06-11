import React, {useState, useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';
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

    const [currentTexts, setCurrentTexts] = useState({
        interfaceTopText: "",
        interfaceBottomText: ""
    });
    const [savedMemes, setSavedMemes] = useState([]);
    const [showEditField, setShowEditField] = useState(false);
    const [editSaveButtonValue, setEditSaveButtonValue] = useState("Edit");
    const [uniqueStateCounter , setUniqueStateCounter] = useState(0);

    function handleInputChange (e) {
        const {name, value} = e.target;
        setCurrentTexts(prev => ({
            ...prev,
            [name]: value
        }))
    }

    function addMeme () {
        setUniqueStateCounter(prev => prev + 1)
        const stateCounter = uniqueStateCounter;
        setSavedMemes(prev => [...prev, {
            id: uuidv4(),
            stateCounter: stateCounter,
            [`topText${uniqueStateCounter}`]: currentTexts.interfaceTopText,
            [`bottomText${uniqueStateCounter}`]: currentTexts.interfaceBottomText
        }])
        setCurrentTexts({
            interfaceTopText: "",
            interfaceBottomText: ""
        })
    }

    function deleteMeme (id) {
        let memeIndex;
        savedMemes.forEach((meme, index) => {
            if (meme.id === id) {
                setSavedMemes(prev => [].concat(prev).splice(memeIndex, 1))
                return;
            }
        })
    }

    /*

    [].concat(prev).splice(index, 1, {
                    id: meme.id,
                    topText: currentTexts.topText,
                    bottomText: currentTexts.bottomText
                })

    */

    function saveEdit (id, counter) {
        savedMemes.forEach((meme, index) => {
            if (meme.id === id) {
                setSavedMemes(prev => prev.toSpliced(index, 1, {
                    ...prev[index],
                    [`topText${counter}`]: currentTexts[`topText${counter}`],
                    [`bottomText${counter}`]: currentTexts[`bottomText${counter}`]
                }))
                setShowEditField(prev => !prev)
                setEditSaveButtonValue("Edit")
                setCurrentTexts(prev => {
                    let shallowPrev = {...prev};
                    delete shallowPrev[`topText${counter}`];
                    delete shallowPrev[`bottomText${counter}`];
                    return shallowPrev;
                })
                return;
            }
        })
    }

    function handleEditInputChange (name, value) {
        setCurrentTexts (prev => ({
            ...prev,
            [name]: value
        }))
    }

    function initiateEditState (topText, bottomText, stateCounter) {
        setCurrentTexts(prev => ({
            ...prev,
            [`topText${stateCounter}`]: topText,
            [`bottomText${stateCounter}`]: bottomText
        }))
        setShowEditField(prev => !prev)
        setEditSaveButtonValue("Save")
        
    }



    console.log(`current texts:`)
    console.log(currentTexts)
    console.log(`saved memes:`)
    console.log(savedMemes)

    const utilities = {
        currentTexts: currentTexts,
        showEditField: showEditField,
        editSaveButtonValue: editSaveButtonValue,
        deleteMeme: deleteMeme,
        saveEdit: saveEdit,
        setCurrentTexts: setCurrentTexts,
        handleEditInputChange: handleEditInputChange,
        initiateEditState: initiateEditState
    }

    return (
        <main className="main-wrapper">
            <div className="inputs-button-wrapper">
            <div className="inputs-wrapper">
                <input type="text" className='text-input left-input' name='interfaceTopText' value={currentTexts.interfaceTopText} onChange={handleInputChange} placeholder='Top Text' />
                <input type="text" className='text-input right-input' name='interfaceBottomText' value={currentTexts.interfaceBottomText} onChange={handleInputChange} placeholder='Bottom Text' />
            </div>
                <div className="button-wrapper">
                    <button className='get-new-image button'>Get New Meme Image</button>
                    <button className='submit button' onClick={addMeme}>Submit</button>
                </div>
            </div>
            <div className="meme-block-wrapper">
                <img className="current-meme-image" src={trollface} />
                <h2 className='meme-text meme-text-top'>{currentTexts.interfaceTopText}</h2>
                <h2 className='meme-text meme-text-bottom'>{currentTexts.interfaceBottomText}</h2>
            </div>
             
            <MemeList savedMemes={savedMemes} 
                      utilities={utilities}      
            />
        </main>
    )
}