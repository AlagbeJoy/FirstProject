import React from 'react'
import { SlLocationPin } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";
import map from '../assets/map.jpeg'
import { IoPhonePortraitOutline } from "react-icons/io5";
import { TextBox } from 'devextreme-react/text-box';


const Contact = () => {
  return (
    <div className='py-[60px] md:px-[80px] px-[20px]  bg-white'>
    <h3 className='uppercase text-3xl text-[#36517e] font-bold text-center '>CONTACT US</h3>
    <h1 className='font-extralight text-center pt-10 pb-10'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui<br/> impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</h1>

    <div>
      <section className='block lg:flex justify-between gap-4 w-full'>
        <div className='bg-white px-8 py-5 rounded-sm border-solid shadow-xl border-y-2 border-sky-500 lg:w-[40%] w-full'>
          <div className='flex items-center gap-1.5'>
            <div className='rounded-full border-solid bg-[#e7f4fb]  text-[#47b3e4] font-medium px-2.5 py-2.5 text-l'><SlLocationPin /></div>
          <h4 className='text-[#36517e] font-bold text-xl pl-2'>Location: <br/><spam className='text-[#36517e] font-light text-sm'>A108 Adam Street, New York, NY 535022</spam></h4>
          </div>
          
          <div className='pt-5 flex items-center gap-1.5'>
            <div className='rounded-full border-solid bg-[#e7f4fb]  text-[#47b3e4] font-medium px-2.5 py-2.5 text-l'><TfiEmail /></div>
          <h4 className='text-[#36517e] font-bold text-xl pl-2'>Email: <br/><spam className='text-[#36517e] font-light text-sm'>info@example.com</spam></h4>
          </div>
          
          <div className='pt-5 flex items-center gap-1.5'>
            <div className='rounded-full border-solid bg-[#e7f4fb]  text-[#47b3e4] font-medium px-2.5 py-2.5 text-l'><IoPhonePortraitOutline /></div>
          <h4 className='text-[#36517e] font-bold text-xl pl-2'>Call: <br/><spam className='text-[#36517e] font-light text-sm'>+1 5589 55488 55s</spam></h4>
          </div>

          <div className='pt-5'>
            <img src={map} alt="" width='500%'/>
          </div>
        </div>

        <div className=''>  
               <form className="">
                <div className="grid grid-cols-2 gap-2">
                <div className=" mt-2">
                  <label htmlFor="">Your Name</label>
                  <input type="text" placeholder='' className=' w-full border-[#ccc] border-[1px] rounded-[5px] px-4 py-2 outline-none' />
                </div>
                <div className=" mt-2">
                  <label htmlFor="">Your Email</label>
                  <input type="email" placeholder='' className=' w-full border-[#ccc] border-[1px] rounded-[5px] px-4 py-2 outline-none' required />
                </div>
                </div>

                <div className=" mt-2">
                  <label htmlFor="">Subject</label>
                  <input type="email" placeholder='' className=' w-full border-[#ccc] border-[1px] rounded-[5px] px-4 py-2 outline-none' required />
                </div>

               
                  <div className=" mt-2">
                  <label htmlFor="">Message</label>
                  <textarea placeholder='' className=' w-full border-[#ccc] border-[1px] rounded-[5px] px-4 py-2 outline-none' rows={8} ></textarea>
                  </div>

              <div className=" mt-4 mx-auto text-center">
                <button className='bg-[#47b3e4] rounded-full px-4 py-2 text-white'>Send Message</button>
                
              </div>
                
               </form>
          </div>
          
      </section>
    </div>

</div>
  )
}

export default Contact