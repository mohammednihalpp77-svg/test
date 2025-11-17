import Logo from "../../assets/logo.png"
import { useState } from "react";
import { CiUser } from "react-icons/ci";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion"; // 👈 Added Framer Motion
import { Link } from "react-router-dom";

export function NavBar() {
  const [mobileView,setMobileView]=useState(false)

    return (
        <nav className="w-full bg-black shadow-md flex-wrap">
            <div className=" max-w-7xl w-full mx-auto px-4 md:px-6 lg:px-10 border flex-wrap">

                <div className="flex items-center justify-between w-full flex-wrap">
                    {/* Logo Section */}
                    <div className="flex items-center w-[205px] h-[70px]">
                        <div className="flex items-center h-[66px]">
                            <img src={Logo} alt="Logo" className="w-[50px]" />
                        </div>
                        <div className="flex items-center justify-center">
                            <h2 className="font-sans font-bold text-white text-[27px]">ABCD</h2>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center justify-between w-[900px] border flex-row flex-wrap">
                        <div className="flex items-center justify-center gap-8 p-2 flex-row w-[680px] h-[49px] flex-wrap border border-gray-600 rounded-full bg-gray-500">
  
  <div className="group cursor-pointer">
    <Link to='/' className="font-sans font-normal text-white text-[16px] relative 
                   after:content-[''] after:absolute after:left-0 after:-bottom-1 
                   after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 
                   group-hover:after:w-full">
      Home
    </Link>
  </div>

  <div className="group cursor-pointer">
    <h3 className="font-sans font-normal text-white text-[16px] relative 
                   after:content-[''] after:absolute after:left-0 after:-bottom-1 
                   after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 
                   group-hover:after:w-full font-momo">
      About Us
    </h3>
  </div>

  <div className="group cursor-pointer">
    <h3 className="font-sans font-normal text-white text-[16px] relative 
                   after:content-[''] after:absolute after:left-0 after:-bottom-1 
                   after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 
                   group-hover:after:w-full">
      Events
    </h3>
  </div>

  <div className="group cursor-pointer">
    <h3 className="font-sans font-normal text-white text-[16px] relative 
                   after:content-[''] after:absolute after:left-0 after:-bottom-1 
                   after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 
                   group-hover:after:w-full">
      Gallery
    </h3>
  </div>

</div>


                        <div className="flex items-center justify-center gap-2 p-2 w-[106px] h-[40px] border text-white border-white rounded-[8px] hover:bg-white hover:text-black cursor-pointer">
                            <div className="flex items-center justify-center">
                                <h3 className="font-sans font-semibold text-[16px]">Login</h3>
                            </div>
                            <div className="flex items-center justify-center">
                                <CiUser className="text-xl" />
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu Icon */}
                    <div className="flex md:hidden items-center justify-center text-white">
                        {mobileView ? (
                            <HiX
                                className="text-3xl cursor-pointer"
                                onClick={() => setMobileView(false)}
                            />
                        ) : (
                            <HiOutlineMenu
                                className="text-3xl cursor-pointer"
                                onClick={() => setMobileView(true)}
                            />
                        )}
                    </div>
                </div>

                {/* Mobile Dropdown Menu (Animated) */}
                <AnimatePresence>
                    {mobileView && (
                        <motion.div
                            key="mobileMenu"
                            initial={{ x: "100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: "100%", opacity: 0 }}
                            transition={{ type: "spring", stiffness: 80, damping: 20 }}
                            className="fixed top-0 right-0 w-2/3 h-full bg-black shadow-lg z-50 md:hidden flex flex-col"
                        >
                            <div className="flex justify-end p-4">
                                <HiX
                                    className="text-white text-3xl cursor-pointer"
                                    onClick={() => setMobileView(false)}
                                />
                            </div>

                            <div className="flex flex-col space-y-2 text-white font-semibold text-lg px-6">
                                <h1 className="py-2 border-b border-gray-700 hover:bg-gray-800 rounded px-2 cursor-pointer transition">Home</h1>
                                <h1 className="py-2 border-b border-gray-700 hover:bg-gray-800 rounded px-2 cursor-pointer transition">About Us</h1>
                                <h1 className="py-2 border-b border-gray-700 hover:bg-gray-800 rounded px-2 cursor-pointer transition">Events</h1>
                                <h1 className="py-2 border-b border-gray-700 hover:bg-gray-800 rounded px-2 cursor-pointer transition">Gallery</h1>
                            </div>

                            <div className="mt-auto p-6">
                                <button className="w-full py-2 px-4 text-black bg-white font-semibold rounded hover:bg-gray-100 transition">
                                    Login
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
