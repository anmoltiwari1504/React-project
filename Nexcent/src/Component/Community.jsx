import { assets } from '../assets/assets'
import { motion } from "framer-motion"

const data = [
  {
    id: 1,
    title: "Membership organisations",
    description: "our membership management software provides full automation of membership renewals and paymnent",
    img: assets.icon
  },
  {
    id: 2,
    title: "National Associations",
    description: "our membership management software provides full automation of membership renewals and paymnent",
    img: assets.icon2
    
  },
  {
    id: 3,
    title: "Clubs And Groups",
    description: "our membership management software provides full automation of membership renewals and paymnent",
    img: assets.icon2
  }
]

function Community() {
  return (

    <motion.div
        initial={{ opacity: 0, x: -300 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      className='flex flex-col sm:h-auto  min-h-screen w-full justify-center items-center '>
      <h1 className='pb-4 sm:text-3xl text-2xl text-center font-bold'>Manage your entire community <br /> in a single system</h1>
      <h4 className='text-xl'>Who is Nextcent suitable for?</h4>

      <div className='flex flex-wrap  items-center justify-center   md:grid md:grid-cols-3 mt-5  text-center   gap-2  w-full' >
      {
        data.map((item, index) => (
            <div className='flex flex-wrap md:flex-col   items-center justify-center w-full sm:w-75 gap-2.5 m-20' key={index}>
            <img  className='sm:w-25 w-80 ' src={item.img} alt="" />
              <h1 className='font-bold text-2xl'>{item.title}</h1>
            <p>{item.description}</p> 
            </div>
        ))
      }
      </div>
    </motion.div>
  )
}

export default Community
