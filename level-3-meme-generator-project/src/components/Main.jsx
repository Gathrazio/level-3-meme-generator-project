import React, {useState, useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';
import MemeList from './MemeList'

export default function Main () {

    const random = (max) => Math.floor(Math.random() * max);

    // ↓ State initializations. All state is created and maintained in Main().

    const [currentTexts, setCurrentTexts] = useState({
        interfaceTopText: "",
        interfaceBottomText: ""
    });
    const [savedMemes, setSavedMemes] = useState([]);
    const [uniqueStateCounter , setUniqueStateCounter] = useState(0);
    const [memeImageLibrary, setMemeImageLibrary] = useState([]);
    const [memeImage, setMemeImage] = useState('https://i.imgflip.com/1bgw.jpg');


    // ↓ API call inside useEffect with an empty dependencies array so that it only fetches once upon app load

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(readable => setMemeImageLibrary(readable.data.memes))}, [])


    // ↓ utility functions, mostly for handling state

    function rollForNewMeme () {
        setMemeImage(memeImageLibrary[random(100)].url)
    }

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
            [`topText${stateCounter}`]: currentTexts.interfaceTopText,
            [`bottomText${stateCounter}`]: currentTexts.interfaceBottomText,
            image: memeImage
        }])
        setCurrentTexts({
            interfaceTopText: "",
            interfaceBottomText: ""
        })
    }

    function deleteMeme (id, counter) {
        savedMemes.forEach((meme, index) => {
            if (meme.id === id) {
                setSavedMemes(prev => prev.toSpliced(index, 1))
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

    function initiateEditState (topText, bottomText, stateCounter) {
        setCurrentTexts(prev => ({
            ...prev,
            [`topText${stateCounter}`]: topText,
            [`bottomText${stateCounter}`]: bottomText
        }))
    }

    function saveEdit (id, counter) {
        savedMemes.forEach((meme, index) => {
            if (meme.id === id) {
                setSavedMemes(prev => prev.toSpliced(index, 1, {
                    ...prev[index],
                    [`topText${counter}`]: currentTexts[`topText${counter}`],
                    [`bottomText${counter}`]: currentTexts[`bottomText${counter}`]
                }))
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

    // ↓ utilities object, will pass certain state values and functions used to alter state in special ways down to each MemeElement() component through MemeList()

    const utilities = {
        currentTexts: currentTexts,
        deleteMeme: deleteMeme,
        saveEdit: saveEdit,
        handleInputChange: handleInputChange,
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
                    <button className='get-new-image button' onClick={rollForNewMeme}>Get New Meme Image</button>
                    <button className='submit button' onClick={addMeme}>Submit</button>
                </div>
            </div>
            <div className="meme-block-wrapper">
                <img className="current-meme-image" src={memeImage} />
                <h2 className='meme-text meme-text-top'>{currentTexts.interfaceTopText}</h2>
                <h2 className='meme-text meme-text-bottom'>{currentTexts.interfaceBottomText}</h2>
            </div>
             
            <MemeList savedMemes={savedMemes} 
                      utilities={utilities}      
            />
        </main>
    )
}