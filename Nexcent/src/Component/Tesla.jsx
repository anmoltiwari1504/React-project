import { assets } from "../assets/assets"
import { motion } from "framer-motion"
function Tesla() {
  return (
    <motion.div
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      className="grid grid-cols-2 w-full gap-5 min-h-100 p-10 ">
      <div className="flex items-center justify-center">
        <img className=" " src={assets.tesla} alt="" />
      </div>
      <div className="flex justify-center items-start flex-col ">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ipsam cupiditate perferendis at harum, architecto aspernatur esse mollitia accusamus deserunt repudiandae delectus libero! Molestiae pariatur esse aliquam iusto cum ipsam eos quos earum mollitia officiis? Perferendis consequatur nostrum eos blanditiis dicta error consectetur, sunt sapiente voluptatem iste, ratione sit non laudantium. Ducimus possimus doloribus hic totam eveniet fugiat, quia earum deleniti magnam, blanditiis delectus animi accusantium neque enim nobis fuga facilis dicta ipsa temporibus labore provident natus. Quasi, magni vel.</p>
        <h2 className="pt-5 font-medium  text-2xl text-[#28CB8B]">Tim Smith</h2>
        <p className="pt-2.5 text-[#AFAFAF]">British Dragon Boat Racing Association</p>
        <img className="pt-5"  src={assets.tesla2} alt="" />
      </div>
    </motion.div>
  )
}

export default Tesla
