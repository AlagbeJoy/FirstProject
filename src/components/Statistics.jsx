import React from 'react'
import illustration10 from '../assets/illustration-10.webp'

const Statistics = () => {
  return (
    <div className='py-[50px] px-[90px] h-[90vh] bg-white'>
        <section className='lg:flex justify md:block sm:block gap-4'>
                 <div className="lg:w-[50%] sm:w-[full] md:w-[full] md:pb-9">
                          <img src={illustration10} alt="" width='100%'/>
            </div>
            <div>
                <p className='lg:font-bold md:font-bold font-bold text-xl lg:text-3xl md:text-3xl pt-5 text-[#394e7f]'>Voluptatem dignissimos providentquasi corporis voluptates</p>
                <p className='font-sm italic md:pt-4 md:pb-4 pt-3 pb-3 lg:text-l text-medium '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                <div className="pt-3">
      <div className="flex justify-between text-[#394e7f]">
        <p>HTML</p>
        <p>100%</p>
       </div>
       <div className="bg-[#e6edf7] w-full h-2">
        <div className="bg-[#394e7f] w-[100%] h-2"></div>
       </div>
      </div>
      <div className="pt-6">
      <div className="flex justify-between text-[#394e7f]">
        <p>CSS</p>
        <p>90%</p>
       </div>
       <div className="bg-[#e6edf7] w-full h-2">
        <div className="bg-[#394e7f] w-[90%] h-2"></div>
       </div>
      </div>
      <div className="pt-6">
      <div className="flex justify-between text-[#394e7f]">
        <p>JAVASCRIPT</p>
        <p>75%</p>
       </div>
       <div className="bg-[#e6edf7] w-full h-2">
        <div className="bg-[#394e7f] w-[75%] h-2"></div>
       </div>
      </div>
      <div className="pt-6">
      <div className="flex justify-between text-[#394e7f]">
        <p>PHOTOSHOP</p>
        <p>55%</p>
       </div>
       <div className="bg-[#e6edf7] w-full h-2">
        <div className="bg-[#394e7f] w-[60%] h-2"></div>
       </div>
      </div>
            </div>

        </section>

    </div>
  )
}

export default Statistics
