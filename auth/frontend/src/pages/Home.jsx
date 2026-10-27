import React from 'react'
import Navbar from '../component/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../component/Footer'
import { Hero } from '../component/Hero'

const Home = () => {
  return (
    <div>
      <Navbar />
     <Hero/>
      <Footer/>
    </div>
  )
}

export default Home