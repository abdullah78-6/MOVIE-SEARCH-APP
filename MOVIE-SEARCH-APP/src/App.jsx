import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Gives, Helper } from './store/store'
import Navbar from './components/navbar/navbar'
import Hero from './components/navbar/HERO/hero'
import Load from "./components/loader/loader"
import Footer from './components/footer/footer'
function Inner(){
  const {theme}=useContext(Helper);
return <div className={` ${theme?"bg-gray-700 text-gray-100 transition ease-in-out duration-300":"transition ease-in-out duration-300"}`}>

    <Navbar/>
    <Hero/>
    {/* <Load/> load when api data loads */ }
    <Footer/>

</div>
}
function App() {
  return <Gives>
    <Inner/>
    
    </Gives>

}

export default App
