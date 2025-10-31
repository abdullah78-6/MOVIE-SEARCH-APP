import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Gives } from './store/store'
import Navbar from './components/navbar/navbar'
import Hero from './components/navbar/HERO/hero'

function App() {
  return <Gives>
    
    <Navbar/>
    <Hero/>
  </Gives>

}

export default App
