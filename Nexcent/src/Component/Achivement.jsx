import { assets } from "../assets/assets"
import { motion } from "framer-motion"
const data = [
  {
  id:1,
  amount: "2,245,341",
  title: "Member",
  icon : assets.user,  
},
  {
   id:2,
  amount: "46,328",
  title: "Club",
  icon : assets.club,  
},
  {
   id:3,
  amount: "828,867",
  title: "Event Bookings",
  icon : assets.vector,  
},
  {
     id:4,
  amount: "1,926,436",
  title: "Payments",
  icon : assets.payment,  
},
]

function Achivement() {
  return (
    <motion.div
        initial={{ opacity: 0, y: -200 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      className='sm:grid grid-rows-2 p-10 w-full sm:grid-cols-2 flex flex-col items-center justify-center   bg-[#F5F7FA]  sm:p-40 '>
      <div className="flex items  center sm:justify-center flex-col">
        <h1 className="text-5xl pb-2  text-[#8C8D8D]">Helping a local <br className="hidden sm:block"/> <span className="text-[#28CB8B] font-medium"> business reinvent itself</span> </h1>
        <p className="pt-5 pr-20 pb-2 text-xl">We reached here and our work and dedication</p>
      </div>
      <div className="grid gap-5 sm:gap-0 shadow-inner shadow-amber-900 sm:shadow-none p-5 grid-cols-2">
        {
          data.map((items, index) => (
            <div className="flex p-2 " key={index}>
              <img src={items.icon} alt="" />
              <div className="flex flex-col flex-wrap pl-3">
                <h1 className="pb-1 text-xl font-medium ">{items.amount}</h1>
                <p className="text-xs pl-2">{items.title }</p>
                
              </div>
            </div>
          ))
        }
        </div>

    </motion.div>
  )
}

export default Achivement
