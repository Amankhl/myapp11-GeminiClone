import React, { useState } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'
import './global.css'

const App = () => {

      const [isMenuClicked, setMenuClicked] = useState(false)
    const handleMenu = () => {
        setMenuClicked(!isMenuClicked)
    }

  return (
    <div className='flex'>
    <Sidebar isMenuClicked={isMenuClicked} handleMenu={handleMenu} />
    <Main isMenuClicked={isMenuClicked}/>
    </div>
  ) 
}

export default App