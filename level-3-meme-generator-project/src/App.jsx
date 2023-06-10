import React, {useState, useEffect} from 'react'
import Main from './components/Main'
import Navbar from './components/Navbar'
import './App.css'

export default function App() {



  return (
    <div className='app-wrapper'>
      <Navbar />
      <Main />
    </div>
  )
}