import { assets } from '../assets/assets'
import { motion } from "framer-motion"

function Unlock() {
  return (
    <motion.div
        initial={{ opacity: 0, x:200 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      className='sm:grid  grid-cols-2 flex flex-col justify-center  w-full h-1/2 '>
      <div className='flex justify-center items-center pl-20  ' > <img className='h-125' src={assets.mobile}  alt="mobile_img" /> </div>
      <div className='  flex flex-col justify-items-start text-center sm:pr-20' >
        <h1 className=' text-5xl pl-5 font-medium pb-10  '>The Unseen of spending three <br className='hidden sm:block'/> years at pixelgrade</h1>
        <p className='text-[#959595] pl-5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eligendi, beatae tempora numquam ullam eius, earum, ratione debitis tempore dolorum repellendus cum? Libero ipsam quia sapiente unde soluta quaerat rem.</p>
        <button className='bg-[#28CB8B] ml-5 mb-5 text-white hover:scale-110 transition-all duration-200 p-4 font-bold flex gap-2 w-35 mt-8 text-center'>Learn more</button>
      </div>
    </motion.div>
  )
}

export default Unlock
