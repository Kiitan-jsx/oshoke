import React, { useState } from 'react'
import HiddenMenu from './HiddenMenu';
import {AnimatePresence} from 'framer-motion'


export default function Navbar() {
    const [state, setState] = useState({
        initial: false,
        clicked: null,
        menuName: "MENU"
    });

    const handleClick = () => {
      if (state.initial === false) {
        setState({
            initial: null,
            clicked: true,
            menuName: "CLOSE"

        })
      }    

      if (state.clicked === true) {
        setState({
            clicked: false,
            menuName: "MENU",
        })
      }    

      if (state.clicked === false) {
        setState({
            clicked: true,
            menuName: "CLOSE",
        })
      } 
    }

    const toggleMenu = () => {
        const newClickedState = !state.clicked;
        setState(newClickedState);
    };
    

  return (
    <nav className='font-inter p-5 text-lg font-semibold'>
    <button 
        className="menu-button ml-2 mt-5" 
        onClick={handleClick}
    >
      {state.menuName}
    </button>

    <AnimatePresence mode='wait'>
        {state.clicked === true && (
        <HiddenMenu toggleMenu={toggleMenu} />
        )}  
    </AnimatePresence>
    
  </nav>
  )
}
