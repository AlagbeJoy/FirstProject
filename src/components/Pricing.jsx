import React from 'react'
import { Link } from 'react-router-dom'
import { FaCheck } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";



const Pricing = () => {
  return (
    <div className='py-[45px] md:px-[80px] px-[20px]  bg-white'>
    <h3 className='uppercase text-3xl text-[#36517e] font-bold text-center '>PRICING</h3>
    <h1 className='font-extralight text-center pt-10 pb-15'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui<br/> impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</h1>

    <div className="">
      <section className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        <div className="bg-white px-15 py-15 rounded-sm border-solid shadow-xl">
          <h5 className='text-[#36517e] font-medium text-l pb-2'>Free Plan</h5>
          <h4 className='text-[#36517e] font-medium text-4xl pb-3'>$0</h4>
          <h3 className='pb-10 text-[#47b3e4] font-medium'>per month</h3>
          <ol>
            <li className='flex items-center gap-2 pb-2 text-[#bfbfbf]'><FaCheck className='text-green-500'/>Quam adipiscing vitae proin</li>
            <li className='flex items-center gap-2 pb-2 text-[#bfbfbf]'><FaCheck className='text-green-500'/>Nec feugiat nisl pretium</li>
            <li className='flex items-center gap-2 pb-2 text-[#bfbfbf]'><FaCheck className='text-green-500'/>Nulla at volutpat diam uteera</li>
            <li className='flex items-center gap-2 pb-2 text-[#bfbfbf] line-through'><FaXmark className='text-gray-400'/>Pharetra massa massa ultricies</li>
            <li className='flex items-center gap-2 pb-10 text-[#bfbfbf] line-through'><FaXmark className='text-gray-400 '/>Massa ultricies mi quis hendrerit</li>
            </ol>
            <Link to="/register" className='bg-white px-6 py-3 rounded-full border-1 text-[#47b3e4] hover:bg-[#47b3e4] hover:text-white font-semibold mr-7'>Get Started</Link>
                      
        </div>

        <div className="bg-white px-15 py-15 rounded-sm border-solid shadow-xl border-t-3 border-sky-500">
        <h5 className='text-[#36517e] font-medium text-l pb-2 '>Business Plan</h5>
          <h4 className='text-[#36517e] font-medium text-4xl pb-3'>$29</h4>
          <h3 className='pb-10 text-[#47b3e4] font-medium'>per month</h3>
          <ol>
            <li className='flex items-center gap-2 pb-2 text-[#bfbfbf]'><FaCheck className='text-green-500'/>Quam adipiscing vitae proin</li>
            <li className='flex items-center gap-2 pb-2 text-[#bfbfbf]'><FaCheck className='text-green-500'/>Nec feugiat nisl pretium</li>
            <li className='flex items-center gap-2 pb-2 text-[#bfbfbf]'><FaCheck className='text-green-500'/>Nulla at volutpat diam uteera</li>
            <li className='flex items-center gap-2 pb-2 text-[#bfbfbf]'><FaCheck className='text-green-500'/>Pharetra massa massa ultricies</li>
            <li className='flex items-center gap-2 pb-10 text-[#bfbfbf]'><FaCheck className='text-green-500'/>Massa ultricies mi quis hendrerit</li>
            </ol>
            <Link to="/register" className='bg-[#47b3e4] px-6 py-3 rounded-full text-white font-semibold mr-7 hover:bg-sky-500'>Get Started</Link>
                      
        </div>

        <div className="bg-white px-15 py-15 rounded-sm border-solid shadow-xl">
          <h5 className='text-[#36517e] font-medium text-l pb-2'>Developer Plan</h5>
          <h4 className='text-[#36517e] font-medium text-4xl pb-3'>$49</h4>
          <h3 className='pb-10 text-[#47b3e4] font-medium'>per month</h3>
          <ol>
            <li className='flex items-center gap-2 pb-2 text-[#bfbfbf]'><FaCheck className='text-green-500'/>Quam adipiscing vitae proin</li>
            <li className='flex items-center gap-2 pb-2 text-[#bfbfbf]'><FaCheck className='text-green-500'/>Nec feugiat nisl pretium</li>
            <li className='flex items-center gap-2 pb-2 text-[#bfbfbf]'><FaCheck className='text-green-500'/>Nulla at volutpat diam uteera</li>
            <li className='flex items-center gap-2 pb-2 text-[#bfbfbf]'><FaCheck className='text-green-500'/>Pharetra massa massa ultricies</li>
            <li className='flex items-center gap-2 pb-10 text-[#bfbfbf]'><FaCheck className='text-green-500'/>Massa ultricies mi quis hendrerit</li>
            </ol>
            <Link to="/register" className='bg-white px-6 py-3 rounded-full  border-1 hover:bg-[#47b3e4] hover:text-white text-[#47b3e4] font-semibold mr-7'>Get Started</Link>
        </div>

      </section>
    </div>

</div>
  )
}

export default Pricing