import React from 'react'
import { FaRegQuestionCircle } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";



const Faq = () => {
  return (
    <div className='py-[60px] px-[20px] md:px-[80px] bg-[#f4f5fa]'>
    <h3 className='uppercase text-3xl text-[#36517e] font-bold text-center '>FREQUENTLY ASKED QUESTIONS</h3>
    <h1 className='font-extralight text-center pt-8 pb-10'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui   impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</h1>

    <div className="px-[20px] md:px-[80px]">
      <section>
       <div className="pb-5 bg-white mt-4 px-6 py-5 rounded-sm border-solid text-l hover:text-[#47b3e4] flex justify-between gap-1.5 w-full">
         <div className="w-[80%] flex items-center">
           <FaRegQuestionCircle className='text-[#47b3e4] w-[5%]'/>
          <h3 className='text-[#36517e] font-medium w-[80%] '>Non consectetur a erat nam at lectus urna duis?</h3>
         </div>
          <RiArrowDropDownLine className='w-[10%]'/>
       </div>

        
        <div className="pb-5 bg-white mt-4 px-6 py-5 rounded-sm border-solid text-l hover:text-[#47b3e4] flex justify-between gap-1.5 w-full">
          <div className="w-[80%] flex items-center">
          <FaRegQuestionCircle className='text-[#47b3e4] w-[5%]'/>
            <h3 className='text-[#36517e] font-medium w-[80%]'>Feugiat scelerisque varius morbi enim nunc?</h3>
          </div>
          <RiArrowDropDownLine className='w-[10%]' />
          </div>
        
        
        <div className="pb-5 bg-white mt-4 px-6 py-5 rounded-sm border-solid text-l hover:text-[#47b3e4] flex justify-between gap-1.5 w-full">
          <div className="w-[80%] flex items-center">
          <FaRegQuestionCircle className='text-[#47b3e4] w-[5%]'/>
          <h3 className='text-[#36517e] font-medium w-[80%]'>Dolor sit amet consectetur adipiscing elit?</h3>
          </div>
          <RiArrowDropDownLine className='w-[10%]'/>
          </div>


        <div className="pb-5 bg-white mt-4 px-6 py-5 rounded-sm border-solid text-l hover:text-[#47b3e4] flex justify-between gap-1.5 w-full">
          <div className="w-[80%] flex items-center">
          <FaRegQuestionCircle className='text-[#47b3e4] w-[5%]'/>
          <h3 className='text-[#36517e] font-medium w-[80%]'>Tempus quam pellentesque nec nam aliquam sem et tortor consequat?</h3>
          </div>
          <RiArrowDropDownLine className='w-[10%]'/>
          </div>


        <div className="pb-5 bg-white mt-4 px-6 py-5 rounded-sm border-solid text-l hover:text-[#47b3e4] flex justify-between gap-1.5 w-full">
          <div className="w-[80%] flex items-center">
          <FaRegQuestionCircle className='text-[#47b3e4] w-[5%]'/>
          <h3 className='text-[#36517e] font-medium w-[80%]'>Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor?</h3>
          </div>
          <RiArrowDropDownLine className='w-[10%]'/>
          </div>
      </section>
    </div>

</div>

    
  )
}

export default Faq