import React from 'react'
import { FaDribbble } from "react-icons/fa";
import { RiStackLine } from "react-icons/ri";
import { PiNote } from "react-icons/pi";
import { GiAmmoBox } from "react-icons/gi";



const Service = () => {
  return (
    <div className='py-[60px] px-[80px] lg:h-[70vh] md:h-[95vh] h-[105vh] bg-[#f4f5fa]'>
        <h3 className='uppercase text-3xl text-[#36517e] font-bold text-center pb-9'>Services</h3>

        <p className='font-sm text-center'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>

        <section className='block lg:flex justify-between pt-[15px] lg:gap-5 '>
            <div className="bg-white lg:px-5 lg:py-13 md:px-5 md:py-10 px-5 py-6 rounded-sm border-solid">
                <h3 className='text-2xl pb-3 text-[#36517e]'><FaDribbble className='text-[#53b3dc]'/>
                Lorem Ipsum</h3>
                <h1 className='font-extralight text-sm'>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</h1>
            </div><br/>
            <div className="bg-white lg:px-5 lg:py-13 md:px-5 md:py-10 px-5 py-6 rounded-sm border-solid">
                <h3 className='text-2xl pb-3 text-[#36517e]'><PiNote className='text-[#53b3dc]'/>
                Sed ut perspici</h3>
                <h1 className='font-extralight text-sm'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</h1>
            </div><br/>
            
            <div className="bg-white lg:px-5 lg:py-13 md:px-5 md:py-10 px-5 py-6 rounded-sm border-solid">
                <h3 className='text-2xl pb-3 text-[#36517e]'><GiAmmoBox className='text-[#53b3dc]'/> Magni Dolores</h3>
                <h1 className='font-extralight text-sm'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</h1>
            </div><br/>
            <div className="bg-white lg:px-5 lg:py-13 md:px-5 md:py-10 px-5 py-6 rounded-sm border-solid">
                <h3 className='text-2xl pb-3 text-[#36517e]'><RiStackLine className='text-[#53b3dc]'/>
                Nemo Enim</h3>
                <h1 className='font-extralight text-sm'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</h1>
            </div>
        </section>
        </div>

        
  )
}

export default Service