import React from 'react'

const newsletter = () => {
  return (
    <div className=' bg-[#f4f5fa] py-[50px] md:px-[80px] px-[20px]'>

        <div className='text-xl text-[#36517e] font-bold text-center pt-15'>Join Our Newsletter</div>
        <p className='text-center font-light pt-2'>Tamen quem nulla quae legam multos aute sint culpa legam noster magna
       
      <div className="mt-8 relative">
                  <input type="email" placeholder='Email Address' className=' w-100 rounded-full py-1 shadow-xl bg-white pl-2' required/>
                  <input type="submit" className='bg-[#47b3e4] rounded-full py-1 px-2 text-white absolute -right-[0.7rem] top-0 md:right-[6rem] lg:right-[24.7rem]' value="Subscribe"/>
                </div>
        
      
        </p>
    </div>
  )
}

export default newsletter