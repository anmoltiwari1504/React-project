import './App.css'
import Footer from './Component/Footer'
import Navbar from './Component/Navbar.jsx'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'


function App() {
 const [show, setShow] = useState(false);

  return (
    <>
  

      <Navbar setShow={setShow} />
      <Routes>
        <Route path='/' element={<Home show={show} setShow = {setShow} />} />
        
      </Routes>
      <Footer/>

    </>
  )
}

export default App
