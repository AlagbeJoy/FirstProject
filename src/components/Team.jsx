import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import team1 from "../assets/team-1.jpg"
import team2 from "../assets/team-2.jpg"
import team3 from "../assets/team-3.jpg"
import team4 from "../assets/team-4.jpg"


const Team = () => {
  return (
    <>
    <section className="py-[60px]cccccc bg-[#f4f5fa]">
      <div className="mx-[auto]">
        <h3 className='uppercase text-3xl text-[#36517e] font-bold text-center '>TEAM</h3>
        <h1 className='font-extralight text-center pt-7 pb-6'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui<br/> impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white px-5 py-10 rounded-sm border-solid shadow-lg text-center md:text-left">
          <div className="flex flex-col md:flex-row justify">
            <img src={team1} alt="" width='' className='rounded-full w-[90px] md:w-[160px] mx-auto md:mx-0 h-[90px] md:h-[160px]'/>
            <div>
            <h3 className='text-l text-[#3e547c] font-bold md:pl-8'>Walter White</h3>
          <h2 className='font-extralight pb-3 text-sm md:pl-8'>Chief Executive Officer</h2>
          <h1 className='font-extralight pb-4 text-sm md:pl-8'>Explicabo voluptatem mollitia et repellat qui dolorum<br/> quasi</h1>
          <div className="flex justify-center md:justify-start gap-2 md:pl-8">
            <div className="hover:bg-[#47b3e4] rounded-full border-solid bg-[#edf1fd] font-medium px-2 py-2 "><FaTwitter className='text-[#3e547c] hover:text-white'/></div>
            <div className="hover:bg-[#47b3e4] rounded-full border-solid bg-[#edf1fd] font-medium px-2 py-2"><FaFacebookF className=' text-[#3e547c] hover:text-white'/></div>
            <div className="hover:bg-[#47b3e4] rounded-full border-solid bg-[#edf1fd] font-medium px-2 py-2"><AiFillInstagram className=' text-[#3e547c] hover:text-white' /></div>
            <div className="hover:bg-[#47b3e4] rounded-full border-solid bg-[#edf1fd] font-medium px-2 py-2"><FaLinkedin className=' text-[#3e547c] hover:text-white'/></div>
            </div>
            </div>
          </div>
          
        </div>

        <div className="bg-white px-5 py-10 rounded-sm border-solid shadow-lg text-center md:text-left">
        <div className="flex flex-col md:flex-row justify">
        <img src={team2} alt="" width='' className='rounded-full w-[90px] md:w-[160px] mx-auto md:mx-0 h-[90px] md:h-[160px]'/>
      <div>
      <h3 className='text-l text-[#3e547c] font-bold md:pl-8'>Sarah Jhonson</h3>
        <h2 className='font-extralight pb-3 text-sm md:pl-8'>Product Manager</h2>
        <h1 className='font-extralight pb-4 text-sm md:pl-8'>Aut maiores voluptates amet et quis praesentium qui<br/> senda para</h1>
        <div className="flex justify-center md:justify-start gap-2 md:pl-8">
          <div className="hover:bg-[#47b3e4] rounded-full border-solid bg-[#edf1fd] font-medium px-2 py-2"><FaTwitter className=' text-[#3e547c] hover:text-white'/></div>
          <div className="hover:bg-[#47b3e4] rounded-full border-solid bg-[#edf1fd] font-medium px-2 py-2"><FaFacebookF className='text-[#3e547c] hover:text-white'/></div>
          <div className="hover:bg-[#47b3e4] rounded-full border-solid bg-[#edf1fd] font-medium px-2 py-2"><AiFillInstagram className=' text-[#3e547c] hover:text-white'/></div>
          <div className="hover:bg-[#47b3e4] rounded-full border-solid bg-[#edf1fd] font-medium px-2 py-2"><FaLinkedin className=' text-[#3e547c] hover:text-white'/></div>
          </div>
      
      </div>
        </div>
      
      </div>

      <div className="bg-white px-5 py-10 rounded-sm border-solid shadow-lg text-center md:text-left">
        <div className="flex flex-col md:flex-row justify">
        <img src={team3} alt="" width='30%' className='rounded-full w-[90px] md:w-[160px] mx-auto md:mx-0 h-[90px] md:h-[160px]'/>
      <div><h3 className='text-l text-[#3e547c] font-bold md:pl-8'>William Anderson</h3>
        <h2 className='font-extralight pb-3 text-sm md:pl-8'>CTO</h2>
        <h1 className='font-extralight pb-4 text-sm md:pl-8'>Quisquam facilis cum velit laborum corrupti fuga rerum<br/> quia</h1>
        <div className="flex justify-center md:justify-start gap-2 md:pl-8">
          <div className="hover:bg-[#47b3e4] rounded-full border-solid bg-[#edf1fd] font-medium px-2 py-2"><FaTwitter className='text-[#3e547c] hover:text-white'/></div>
          <div className="hover:bg-[#47b3e4] rounded-full border-solid bg-[#edf1fd] font-medium px-2 py-2"><FaFacebookF className='text-[#3e547c] hover:text-white'/></div>
          <div className="hover:bg-[#47b3e4] rounded-full border-solid bg-[#edf1fd] font-medium px-2 py-2"><AiFillInstagram className='text-[#3e547c] hover:text-white'/></div>
          <div className="hover:bg-[#47b3e4] rounded-full border-solid bg-[#edf1fd] font-medium px-2 py-2"><FaLinkedin className='text-[#3e547c] hover:text-white'/></div>
          </div>
      </div>
      
        </div>
      </div>

      <div className="bg-white px-5 py-10 rounded-sm border-solid shadow-lg text-center md:text-left">
        <div className="flex flex-col md:flex-row justify">
        <img src={team4} alt="" width='20%' className='rounded-full w-[90px] md:w-[160px] mx-auto md:mx-0 h-[90px] md:h-[160px]'/>
      <div>
      <h3 className='text-l text-[#3e547c] font-bold md:pl-8'>Amanda Jepson</h3>
        <h2 className='font-extralight pb-3 text-sm md:pl-8'>Accountant</h2>
        <h1 className='font-extralight pb-4 text-sm md:pl-8'>Dolorum tempora officiis odit laborum officiis et et<br/> accusamus</h1>
        <div className="flex justify-center md:justify-start gap-2 md:pl-8">
          <div className="hover:bg-[#47b3e4] rounded-full border-solid bg-[#edf1fd] font-medium px-2 py-2"><FaTwitter className='text-[#3e547c] hover:text-white'/></div>
          <div className="hover:bg-[#47b3e4] rounded-full border-solid bg-[#edf1fd] font-medium px-2 py-2"><FaFacebookF className='text-[#3e547c] hover:text-white'/></div>
          <div className="hover:bg-[#47b3e4] rounded-full border-solid bg-[#edf1fd] font-medium px-2 py-2"><AiFillInstagram className='text-[#3e547c] hover:text-white'/></div>
          <div className="hover:bg-[#47b3e4] rounded-full border-solid bg-[#edf1fd] font-medium px-2 py-2"><FaLinkedin className='text-[#3e547c] hover:text-white'/></div></div>
      </div>
      
        </div>
      
          
      </div>
      </div>

    </section>

    
    </>
  )
}

export default Team