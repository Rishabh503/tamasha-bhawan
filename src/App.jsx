import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {  Navbar } from './components/Header'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'

function App() {


  return(
    <>
      <Navbar/>
      {/* outlets here  */}
      <Hero/>
      <Footer/>

    </>
  )


}

export default App
