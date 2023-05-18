import React from 'react'
import './index.css'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Main/>
      <Footer/>

    </div>
  )
}

export default App
