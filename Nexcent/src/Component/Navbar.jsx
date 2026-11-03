import { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { X, Menu, MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

function Navbar({ setShowProp }) {

  // console.log("setShow -", setShowProp);
  // console.log("type of setShowProp -", typeof setShowProp);


  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <div className="h-15 relative pt-4 w-full mb-5">
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="fixed top-0 w-full left-0 z-99 bg-white/30 backdrop-blur-2xl p-5 flex justify-between items-center px-6 md:px-20"
      >
        <img className="w-50" src={assets.Logo} alt="" />

        {/* Desktop */}
        <motion.div className="hidden  md:flex  gap-2 w-[40%]">
          <ul className="flex justify-evenly hover:text-green items-center gap-6">
            <li>
              {" "}
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:text-green-500  hover:scale-120 ${isActive ? "text-orange-600" : "text-green-600"}  transition-all ease-in-out duration-300`
                }
              >
                Home{" "}
              </NavLink>{" "}
            </li>
            <li>
              {" "}
              <NavLink
                to="/features"
                className={({ isActive }) =>
                  `hover:text-green-500  hover:scale-120 ${isActive ? "text-orange-600" : "text-green-600"}  transition-all ease-in-out duration-300`
                }
              >
                features{" "}
              </NavLink>{" "}
            </li>
            <li>
              {" "}
              <NavLink
                to="Community"
                className={({ isActive }) =>
                  `hover:text-green-500  hover:scale-120 ${isActive ? "text-orange-600" : "text-green-600"}  transition-all ease-in-out duration-300`
                }
              >
                Community{" "}
              </NavLink>{" "}
            </li>
            <li>
              {" "}
              <NavLink
                to="/Blog"
                className={({ isActive }) =>
                  `hover:text-green-500  hover:scale-120 ${isActive ? "text-orange-600" : "text-green-600"}  transition-all ease-in-out duration-300`
                }
              >
                Blog{" "}
              </NavLink>{" "}
            </li>
            <li>
              {" "}
              <NavLink
                to="/Pricing"
                className={({ isActive }) =>
                  `hover:text-green-500  hover:scale-120 ${isActive ? "text-orange-600" : "text-green-600"}  transition-all ease-in-out duration-300`
                }
              >
                Pricing{" "}
              </NavLink>{" "}
            </li>

            <button
              onClick={() => {
                setShowProp(true);
                setOpen(true);
              }}
              className="bg-[#28CB8B] w- flex justify-center items-center  text-white hover:shadow-2xl hover:scale-105 transition-all duration-200 p-4 font-bold gap-2"
            >
              Register Now <MoveRight />
            </button>
          </ul>
        </motion.div>

        {/* Hamburger */}
        <Menu
          className="md:hidden sm:hidden cursor-pointer"
          onClick={() => setOpen(true)}
        />
      </motion.div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed  inset-0 bg-black/40 md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed right-0 top-0 z-90 w-[60%] h-full bg-white text-black shadow-2xl 
        transition-all duration-300 ease-in-out
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <ul className="flex flex-col gap-6 p-6 z-90 mt-10">
          <X
            onClick={() => setOpen(false)}
            className="absolute  text-black right-4 z-90 top-4 cursor-pointer"
          />
          <a href="#" onClick={() => setOpen(false)}>
            Home
          </a>
          <a href="#" onClick={() => setOpen(false)}>
            Features
          </a>
          <a href="#" onClick={() => setOpen(false)}>
            Community
          </a>
          <a href="#" onClick={() => setOpen(false)}>
            Blog
          </a>
          <a href="#" onClick={() => setOpen(false)}>   
            Pricing
          </a>
          <button
            onClick={() => setShowProp(true)}
            className="bg-[#28CB8B] flex justify-center items-center text-white hover:shadow-2xl hover:scale-105 transition-all duration-200 p-4 font-bold gap-2"
          >
            Register Now <MoveRight />
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
