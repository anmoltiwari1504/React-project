import { assets } from "../assets/assets"
import { motion } from "framer-motion"


function Hero({setShow}) {
  return (
    <div className=" min-h-125  ml-10 sm:ml-0 items-center  bg-[#F5F7FA] w-full flex flex-col md:flex-row md:px-20 px-4">
  
      <motion.div
        initial={{ opacity: 0, x: -200 }} transition={{ duration: 1.5 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
        className="md:w-[65%] w-full flex flex-col justify-center items-start py-10 px-4 md:px-0"
        >
   
    <h1 className="text-4xl sm:text-6xl font-medium mb-4 text-[#4D4D4D]">
      Lesson and insights <br className="hidden sm:block" />
      <span className="text-[#4CAf4f]">From 8 year</span>
    </h1>

    <p className="text-[#BFC0C1]">
      Where to grow your business as a photographer: site or social media?
    </p>

    <button className="mt-5 text-white ml-10 bg-[#28CB8B] p-4 rounded">
      Register
    </button>
  </motion.div>

      <motion.div
        initial={{ opacity: 0, x:200 }} transition={{ duration: 1.5 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
        className="md:w-[55%] w-full flex justify-center items-center">
    <img className="w-60 sm:w-80 h-auto" src={assets.hero} alt="" />
  </motion.div>

</div>
    
  )
}

export default Hero
