import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "framer-motion"

function Footer() {
  return (
    <motion.div
       initial={{ opacity: 0,y: 200 }}
        transition={{ duration: 1}}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      className='min-h-100 flex  justify-evenly items-center bg-[#263238] mt-30'>
      <div className='flex flex-col text-white  '>
        <img className='pb-5' src={assets.footer} alt="" />
        <p>Copyright 2020 landify UI kit</p>
        <h3 className='pb-10 font-medium'>All right reversed </h3>
        <img src={assets.social} alt="" />
      </div>
      <div className='flex flex-col gap-3'>
        <h1 className='pb-5 text-2xl font-semibold text-white' >Company </h1>
        <ul className='px-4 text-white'>
          <li>About us</li>
          <li  className='pt-2' >Blog</li>
          <li  className='pt-2' >Contact us </li>
          <li  className='pt-2' >Pricing </li>
          <li  className='pt-2' >Testimonials</li>
        </ul>
      </div>
      <div className='flex flex-col gap-3'>
        <h1 className='pb-5 text-2xl font-semibold text-white' >Support</h1>
        <ul className='px-4 text-white'>
          <li>Help Center </li>
          <li  className='pt-2' >Terms of Services </li>
          <li  className='pt-2' >Legal  </li>
          <li  className='pt-2' >Privacy policy </li>
          <li  className='pt-2' >Status</li>
        </ul>
      </div>
      <div className='flex flex-col gap-3'>
        <h1 className='pb-5 text-2xl font-semibold text-white' >Company </h1>
       <input className='bg-gray-600  p-3 placeholder-white  ouline-none border border-white rounded'  type="email" placeholder='Your mail address' />
      </div>
     
    
    </motion.div>
  )
}

export default Footer
