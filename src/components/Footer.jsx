import React from 'react'
import { BiUpArrowAlt } from "react-icons/bi";


const Footer = () => {
  return (
    <div>
        <div className="py-[30px] md:px-[80px] px-[20px] bg-[#36517e]">

            <div className='flex justify-between'>
            <p className='text-white text-sm'>© Copyright <span className='font-bold'>Arsha.</span> All Rights Reserved </p> 
            <div className='text-sm flex justify text-[white]'>Designed by <span className='text-[#44b2e9]'>BootstrapMade</span> 
            <div className=' rounded-full border-solid bg-[#44b2e9] font-medium px-1.5 py-1.5'><BiUpArrowAlt className='text-2xl'/></div>
            
            </div>
            
 
            </div>
                      
            
        </div>
    </div>
  )
}

export default Footer