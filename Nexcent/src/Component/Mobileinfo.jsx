import { assets } from "../assets/assets"
import { motion } from "framer-motion"

function Mobileinfo() {
  return (
    <motion.div
        initial={{ opacity: 0, y: 200 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      
      className="grid  grid-cols-2 w-full min-h-105 ">
      <div className="flex justify-center items-center">
        <img className=" h-[80%]" src={assets.pana} alt="" />
      </div>
      <div className="flex flex-col flex-wrap items-start justify-center">
        <h1 className="text-4xl pb-4 font-medium ">How to design your site footer like <br /> We did</h1>
        <p className="text-[#AFAFAF]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione accusamus eum neque quos est aspernatur deserunt amet soluta optio veritatis fuga reprehenderit doloribus obcaecati nulla quidem in, quo expedita exercitationem eos mollitia libero voluptatibus. Assumenda reprehenderit, quae tempore repellat quod tempora sint fuga mollitia ratione eligendi amet adipisci totam eveniet.</p>
         <button className='bg-[#28CB8B] text-white  hover:scale-110 transition-all duration-200 p-4 font-bold flex gap-2 w-35 mt-8 text-center'>Learn more</button>
      </div>

    </motion.div>
  )
}

export default Mobileinfo
