import React from 'react'
import { RiCheckDoubleLine } from "react-icons/ri";
import { Link } from 'react-router-dom';


const About = () => {
  return (
    <div className='py-[50px] px-[80px] h-[80vh] lg:h-[60vh] md:h-[50vh] bg-white'>
        <h3 className=' uppercase text-4xl text-[#36517e] font-bold text-center'> About Us</h3>
   
      <section className='flex flex-col md:flex-row justify-start md:justify-between w-full font-normal text-[#252525]'>
        <div className='lg:pt-[50px] md:pt-[40px] pt-[30px] w-[100%] md:w-[45%]'>
           <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br />
            tempor incididunt ut labore et dolore magna aliqua.
            </p><br />

           <ul className=''>
            <li className='flex items-center gap-2 '><RiCheckDoubleLine className='text-[#62aec8]'  />Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
            <li className='flex items-center gap-2'><RiCheckDoubleLine className='text-[#62aec8]' />Duis aute irure dolor in reprehenderit in voluptate velit</li>
            <li className='flex items-center gap-2'><RiCheckDoubleLine className='text-[#62aec8]' />Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
           </ul>
           
        </div>
        
        <div className='lg:pt-[50px] md:pt-[40px] pt-[30px] w-[100%] md:w-[45%] pb-2'>
        <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
         dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
           qui officia deserunt mollit anim id est laborum.     

           <br/><br/>
           <div className="pt-2">
           <Link to="/about" className='text-[#62aec8] hover:bg-[#47b3e4] rounded-sm border-solid border-1 font-medium px-7 py-2  border-cyan-400 hover:text-white'>Learn More</Link> 
           </div>
           </p>
           
       </div>

    </section>
    </div>
  )
}

export default About