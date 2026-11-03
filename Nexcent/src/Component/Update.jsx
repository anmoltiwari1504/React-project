import React from 'react'
import { assets } from '../assets/assets'
import { MoveRight } from 'lucide-react'
import { motion } from "framer-motion"

const update = [
  {
    id: 1,
    icon: assets.update1,

  },
  {
    id: 2,
    icon: assets.update2,

  },
  {
    id: 3,
    icon: assets.update3,

  },
]

function Update() {
  return (
    <div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}

      className='flex flex-col flex-wrap min-h-100  w-full'>
      <div className='flex flex-col items-center h-50  '>
        <h1 className='text-4xl pb-2 font-medium'>Caring is the new marketing </h1>
        <p className='text-center '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore fugit rem <br /> quasi est ex ab officia optio libero, totam assumenda ducimus <br /> aspernatur, quia eius. Sed voluptate repellat enim ducimus dicta?</p>
      </div>

      {/* * <div className=' group flex h-100 gap-2 justify-center items-center  w-full relative   '>
        {
          update.map((items, index) => (
            <div key={index} className='w-125 h-auto relative flex justify-center ' >
              <img src={items.icon} alt="" />
                <div className='translate-y-50 group-hover:translate-y-0 transition-all ease-in-out duration-300 absolute -bottom-10   shadow-2xl left-30   w-70 h-50 rounded bg-yellow-300'>
          <h1 className='text-xl text-center'>Creating Streamlined safeguaring Processes with oneren</h1>
          <p className='flex h-full absolute bottom-0 left-10 justify-end items-end pr-1.5'>Read more
             <MoveRight className='pl-1.5'/>
                </p>
                </div>
            </div>

          )) */}

      <div className='grid grid-cols-3 relative overflow-hidden h-125 gap-3.5 '>
        <div className='bg-black group '>
          <img className='object-cover h-full w-full group relative' src={assets.update1} alt="first image" />
          <div className='translate-y-60 group-hover:translate-y-0 transition-all ease-in-out duration-300 absolute bottom-10 shadow-2xl left-30   w-70 h-50 rounded bg-yellow-300'>
            <h1 className='text-xl text-center'>Creating Streamlined safeguaring Processes with oneren</h1>
            <p className='flex h-full absolute bottom-0 left-10 justify-end items-end pr-1.5'>Read more
              <MoveRight className='pl-1.5' />
            </p>
          </div>
        </div>
        <div>
            <div className='bg-black h-full relative group/card '>
          <img className='object-cover h-full w-full relative' src={assets.update2} alt="first_image" />
          <div className='translate-y-60 group-hover/card:translate-y-0 transition-all ease-in-out duration-300 absolute bottom-10 shadow-2xl left-30   w-70 h-50 rounded bg-yellow-300'>
            <h1 className='text-xl text-center'>Creating Streamlined safeguaring Processes with oneren</h1>
            <p className='flex h-full absolute bottom-0 left-10 justify-end items-end pr-1.5'>Read more
              <MoveRight className='pl-1.5' />
            </p>
          </div>
        </div>
        </div>
        <div>
             <div className='bg-black h-full relative group/card '>
          <img className='object-cover h-full w-full relative' src={assets.update3} alt="first_image" />
          <div className='translate-y-60 group-hover/card:translate-y-0 transition-all ease-in-out duration-300 absolute bottom-10 shadow-2xl left-30   w-70 h-50 rounded bg-yellow-300'>
            <h1 className='text-xl text-center'>Creating Streamlined safeguaring Processes with oneren</h1>
            <p className='flex h-full absolute bottom-0 left-10 justify-end items-end pr-1.5'>Read more
              <MoveRight className='pl-1.5' />
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>

  )
}

export default Update
