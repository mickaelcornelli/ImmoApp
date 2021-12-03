import React, {useState} from 'react'
import GlobalStyle from './globalStyles.js'
import Navbar from './components/Navbar.js'
import Dropdown from './components/Dropdown.js'
import Hero from './components/Hero.js'
import { SliderData } from './data/SliderData.js'
import {Switch, Route} from 'react-router-dom';

function App() {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
    
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData}/>
    
    </>
  )
}

export default App;
