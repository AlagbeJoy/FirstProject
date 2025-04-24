import React from 'react'
import { Link } from 'react-router-dom'
import belimo from "../assets/belimo.png"
import cirtrus from "../assets/citrus.png"
import lifegroups from "../assets/lifegroups.png"
import lilly from "../assets/lilly.png"
import myob from "../assets/myob.png"
import trustly from "../assets/trustly.png"


const Partner = () => {
  return (
    <section className='bg-[#f4f5fa] md:h-[16vh] h-[12vh] w-full grid grid-cols-3 lg:grid-cols-6  items-center px-[50px] lg:px-[90px] py-[30px] gap-2 space-y-3 justify-center'>
        <div className='backdrop-grayscale-50 test'>
           <img src={myob} alt='' width='45%' className='mx-auto my-auto' />
        </div>
        <div className="backdrop-grayscale-50 test">
         <img src={belimo} alt='' width='45%' className='mx-auto my-auto' />
        </div>
        <div className="backdrop-grayscale-50 test">
         <img src={lifegroups} alt='' width='45%' className='mx-auto my-auto' />
        </div>
        <div className="backdrop-grayscale-50 test">
         <img src={lilly} alt='' width='45%' className='mx-auto my-auto' />
        </div>
        <div className="backdrop-grayscale-50 test">
         <img src={cirtrus} alt='' width='45%' className='mx-auto my-auto' />
        </div>
        <div className="backdrop-grayscale-50 test">
         <img src={trustly} alt='' width='45%' className='mx-auto my-auto' />
        </div>
    </section>
  )
}

export default Partner