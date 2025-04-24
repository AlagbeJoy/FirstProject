import React from 'react'
import skills from '../assets/skills.png'
import { RiArrowDropDownLine } from "react-icons/ri";


const Questions = () => {
  return (
    <section className='py-[100px] px-[100px] bg-[#f4f5fa] lg:h-[100vh] sm:h-[90vh] w-full lg:flex justify-between md:block sm:block gap-2'>
       <div className="text-[#36517e]">
       <h5 className='lg:text-3xl md:text-2xl sm:text-2xl'>Eum ipsam laborum deleniti <span className='font-bold'>velit pariatur architecto aut nihil</span></h5>
        <h1 className='sm:pt-[9px] text-[#8e8f91] sm:text-sm lg:text-l'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
         
        
         <ol className='text-[#0a0a0a]  font-medium pt-10'>
            <li className='bg-white px-6 py-5 rounded-sm border-solid  hover:text-[#47b3e4] flex items-center gap-2'> <span className='text-[#5cb1d1]'>01</span>    Non consectetur a erat nam at lectus urna duis? <RiArrowDropDownLine/>
            </li><br/>
            <li className='bg-white px-6 py-5 rounded-sm border-solid hover:text-[#47b3e4] flex items-center gap-2'> <span className='text-[#5cb1d1]'>02</span>  Feugiat scelerisque varius morbi enim nunc? <RiArrowDropDownLine /></li><br/>
            <li className='bg-white px-6 py-5 rounded-sm border-solid hover:text-[#47b3e4] flex items-center gap-2'> <span className='text-[#5cb1d1]'>03</span>  Dolor sit amet consectetur adipiscing elit?<RiArrowDropDownLine />
            </li>
           </ol>
         </h1>
       </div>
     <div className="lg:w-full sm:w-[full] md:w-[full] pl-[50px] md:pt-10 pt-10">
      <img src={skills} alt="" width='100% '/>
     </div>


        </section>
        
        
  )
}

export default Questions