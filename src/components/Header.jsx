import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import hero from "../assets/hero-img.png"
import { MdOutlinePlayCircleOutline } from "react-icons/md";


const Header = () => {
return (
    <header className='h-[75vh] xl:h-[80vh] md:h-[60vh] w-full'>
        <nav className='flex justify-between items-center bg-[#36517e] fixed w-full px-[60px] md:px-[100px] py-[13px]'>
            <Link to= "/" className='text-white text-[30px] uppercase font-medium tracking-[2px] '>Arsha</Link>
            <ul className=' hidden lg:flex lg:gap-3 xl:gap-6.5 text-white'>
              <li><Link to="/" className='text-[#47b3e4]'>Home</Link></li>
              <li><Link to="/about" className='px-[2px] hover:text-[#47b3e4]'>About</Link></li>
              <li><Link to="/services" className='px-[2px] hover:text-[#47b3e4]'>Services</Link></li>
              <li><Link to="/portfolio" className='px-[2px] hover:text-[#47b3e4]'>Portfolio</Link></li>
              <li><Link to="/team" className='px-[2px] hover:text-[#47b3e4]'>Team</Link></li>
              <li><Link to="/dropdown" className='px-[2px] hover:text-[#47b3e4]'>Dropdown</Link></li>
              <li><Link to="/contact" className='px-[7px] hover:text-[#47b3e4]'>Contact</Link></li>
              <li><Link to="/register"  className='px-[10px]  hover:bg-[#47b3e4] rounded-full py-2 font-medium border-2 border-cyan-400'>Get Started</Link></li>
            </ul>
            
        </nav>
       
      <section className="pt-16 md:pt-16 w-full md:h-[80%] h-[95%] xl:h-full md:flex items-center bg-[#36517e] justify-between gap-2 px-[60px] md:px-[100px] py-[13px]">
        <div className="md:w-[45%]">
        <h1 className=' text-white text-3xl xl:text-5xl font-bold font-sanserif'>Better Solutions For<br className='' /> Your Business</h1>
        <h3 className='text-xl xl:text-2xl py-[20px] text-gray-400 font-semibold'>We are team of talented designers making websites with Bootstrap</h3>
        <div className="flex pt-[40px]">
          <Link to="/register" className='bg-[#47b3e4] px-6 py-2 md:px-3 md:py-1 rounded-full text-white md:font-semibold font-medium mr-5 md:mr-7 text-nowrap'>Get Started</Link>
          <Link to="" className='flex items-center gap-1 md:gap-2 text-white text-nowrap'><MdOutlinePlayCircleOutline size={40} className='hover:text-[#47b3e4]'/>
          Watch Video</Link>
        </div>
        </div>
        <div className="md:w-[45%] pt-9 md:pt-10">
          <img src={hero} alt="" width='100%'/>
        </div>
      </section>
    
    </header>
  )
}

export default Header