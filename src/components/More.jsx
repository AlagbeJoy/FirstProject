import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { PiSkypeLogoFill } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa6";




const More = () => {
  return (
    <div>
        <div className="py-[60px] md:px-[80px] px-[20px]   bg-white">
            <section className='block lg:flex justify-between gap-3'>
                <div>
                    <h6 className='text-[#36517e] uppercase font-bold text-2xl pb-2'>Arsha</h6>
                    <h5 className='text-[#8d908b] text-sm'>A108 Adam Street</h5>
                    <h4 className='text-[#8d908b] text-sm'>New York, NY 535022</h4>
                    <h3 className='text-[#8d908b] text-sm'>United States</h3>
                    <br/>
                    <h2 className='text-[#8d908b] text-sm'><span className='font-bold text-[#707274] text-sm'>Phone:</span> +1 5589 55488 55</h2>
                    <h2 className='text-[#8d908b] text-sm'><span className='font-bold text-[#707274] text-sm'>Email:</span> info@example.com</h2>
                </div>

                <div className=''>
                    <h6 className='text-[#36517e] pb-2 lg:pt-0 pt-10 font-bold'>Useful Links</h6>
                    <h5 className='pb-3 flex items-center gap-1.5 text-sm text-[#8d908b]'><IoIosArrowForward className='text-[#44b2e9]'/>Home</h5>
                    <h4 className='pb-3 flex items-center gap-1.5 text-sm text-[#8d908b]'><IoIosArrowForward className='text-[#44b2e9]'/>About us</h4>
                    <h3 className='pb-3 flex items-center gap-1.5 text-sm text-[#8d908b]'><IoIosArrowForward className='text-[#44b2e9]'/>Services</h3>
                    <h2 className='pb-3 flex items-center gap-1.5 text-sm text-[#8d908b]'><IoIosArrowForward className='text-[#44b2e9]'/>Terms of service</h2>
                    <h1 className='flex items-center gap-1.5 text-sm text-[#8d908b]'><IoIosArrowForward className='text-[#44b2e9]'/>Privacy policy</h1>
                </div>

                <div>
                    <h6 className='text-[#36517e] pb-2 lg:pt-0 pt-10 font-bold'> Our Services </h6>
                    <h5 className='pb-3 flex items-center gap-1.5 text-sm text-[#8d908b]'><IoIosArrowForward className='text-[#44b2e9]'/>Web Design</h5>
                    <h4 className='pb-3 flex items-center gap-1.5 text-sm text-[#8d908b]'><IoIosArrowForward className='text-[#44b2e9]'/>Web Development</h4>
                    <h3 className='pb-3 flex items-center gap-1.5 text-sm text-[#8d908b]'><IoIosArrowForward className='text-[#44b2e9]'/>Product Management</h3>
                    <h2 className='pb-3 flex items-center gap-1.5 text-sm text-[#8d908b]'><IoIosArrowForward className='text-[#44b2e9]'/>Marketing</h2>
                    <h1 className='flex items-center gap-1.5 text-sm text-[#8d908b]'><IoIosArrowForward className='text-[#44b2e9]'/>Graphic Design</h1>
                </div>
               
                 <div>
                    <p className='text-[#36517e] pb-2 lg:pt-0 pt-10 font-bold'>Our Social Networks</p>
                    <h1 className='text-sm text-[black]'>Cras fermentum odio eu feugiat lide par naso<br/> tierra videa magna derita valies</h1>
                    <div className='flex justify gap-2 pt-5 text-[white] text-sm'>
                        <div className="rounded-full border-solid bg-[#44b2e9] font-medium px-2 py-2"><FaTwitter /></div>
                        <div className="rounded-full border-solid bg-[#44b2e9] font-medium px-2 py-2"><FaFacebookF /></div>
                        <div className="rounded-full border-solid bg-[#44b2e9] font-medium px-2 py-2"><FaInstagram /></div>
                        <div className="rounded-full border-solid bg-[#44b2e9] font-medium px-2 py-2"><PiSkypeLogoFill /></div>
                        <div className="rounded-full border-solid bg-[#44b2e9] font-medium px-2 py-2"><FaLinkedinIn />
                        </div>
                    </div>
                 </div>




            </section>
        </div>
    </div>
  )
}

export default More