import React from 'react'
import { motion } from "framer-motion"
import { assets } from "../assets/assets"

function ClientInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className='flex flex-col items-center ustify-center mt-10 px-6 md:px-20 text-center'
    >
      {/* Heading */}
      <h1 className='pb-4 sm:text-2xl text-4xl md:text-4xl font-bold'>
        Our Client
      </h1>

      {/* Subtext */}
      <h4 className='text-[#BFC0C1] sm:text-sm text-2xl  md:text-lg mb-8 max-w-xl'>
        We have been working with some Fortune 500+ clients
      </h4>

      {/* Logos */}
      <motion.img 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        src={assets.client}
        alt="clients"
        className='sm:w-full content-center  text-2xl text-center  object-cover'
      />
    </motion.div>
  )
}

export default ClientInfo