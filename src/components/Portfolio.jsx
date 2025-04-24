import React from 'react'
import portfolio1 from '../assets/Portfolio-1.jpg'
import portfolio2 from '../assets/Portfolio-2.jpg'
import portfolio3 from '../assets/Portfolio-3.jpg'
import portfolio4 from '../assets/Portfolio-4.jpg'
import portfolio5 from '../assets/Portfolio-5.jpg'
import portfolio6 from '../assets/Portfolio-6.jpg'
import portfolio7 from '../assets/Portfolio-7.jpg'
import portfolio8 from '../assets/Portfolio-8.jpg'
import portfolio9 from '../assets/Portfolio-9.jpg'

const Portfolio = () => {
  return (
    <div className='py-[60px] px-[80px] h-[200vh] bg-white'>
    <h3 className='px-[550px]   uppercase text-3xl text-[#36517e] font-bold text-center '>PORTFOLIO</h3>
    <h1 className='font-extralight text-center pt-10 '>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui<br/> impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</h1>

    <div className='flex justify-center gap-3 pt-10'>
        <div className="bg-[#47b3e4] rounded-full py-1 px-4.5 font-medium text-white border-cyan-400 text-sm">All</div>
        <div className="hover:bg-[#47b3e4] rounded-full py-1 px-4.5 font-medium text-sm border-cyan-400 hover:text-white">App</div>
        <div className="hover:bg-[#47b3e4] rounded-full py-1 px-4.5 font-medium border-cyan-400 text-sm hover:text-white">Card</div>
        <div className="hover:bg-[#47b3e4] rounded-full py-1 px-4.5 font-medium border-cyan-400 text-sm hover:text-white">Web</div>
    </div>

      {/* <div className="w-[100%] grid grid-flow-row grid-rows-4 grid-cols-3 gap-4">
          <div className=" row-span-2 col-span-1"><img src={portfolio1} alt="" width='full'/>
          </div>
          <div className="row-span-2 col-span-1"><img src={portfolio1} alt="" width='full'/>
          </div>
        <div className=" col-span-1">
        </div>

        <div className="">
          <div className=""><img src={portfolio2} alt="" width='full'/>
          </div>
          <div className=""><img src={portfolio2} alt="" width='full'/>
          </div>
          <div className=""><img src={portfolio2} alt="" width='full'/>
          </div>
          <div className=""><img src={portfolio2} alt="" width='full'/>
          </div>
        </div>

        <div className="">
          <div className=""><img src={portfolio2} alt="" width='full'/>
          </div>
          <div className=" "><img src={portfolio3} alt="" width='full'/>
          </div>
          <div className=""><img src={portfolio2} alt="" width='full'/>
          </div>
        </div>
            

            </div>      */}
</div>
  )
}

export default Portfolio