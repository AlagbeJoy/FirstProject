import React from 'react'
import { Link } from 'react-router-dom';

const Cta = () => {
  return (
    <div className=' h-auto bg-[#3a4b69] text-white py-8'>
        <section className=' w-full flex flex-col md:flex-row justify-center items-center gap-1 h-[60vh]'>
            <div className=' w-full md:w-[65%] px-[20px] md:px-[80px] text-center md:text-left'>
                <h3 className='pb-1.5 lg:text-2xl md:text-3xl text-2xl font-extrabold item-center'>Call To Action</h3>
                <h1 className='pt-3 text-xl'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h1>
            </div>

            <div className=' w-full md:w-[30%] mt-7 md:mt-0 text-center'>
                <Link to="/" className='text-white hover:bg-[#47b3e4] rounded-full border-solid border-1 font-medium px-6 py-2  border-white hover:text-white'>Call To Action</Link> 
            </div>

        </section>
    </div>
  )
}

export default Cta