import React from 'react'
import img from "../assets/images/disc1.png"
export const Section = () => {
  return (
    <div className='bg-[#131316] text-white font-Gloock '>
        <div className='lg:flex'>
            <div className='-z-10'>
                <img src={img} className='lg:w-3/5 '/>
            </div>
            <div className='-z-0 absolute text-[50px] md:text-[60px] text-center text-white whitespace-pre-wrap bg-[#131316] bg-opacity-80 top-1/2 left-1/2 w-2/3 h-auto rounded-lg p-10 -translate-x-1/2 -translate-y-1/2  hover:text-red-600  md:w-4/5 lg:top-1/3 lg:text-right lg:bg-non hover:duration-500'>Disc Scheduling Algorithms</div>
        </div>
        <div className='flex-col text-[18px] md:text-[28px] columns-2 p-5 lg:w-1/2 gap-5 lg:flex lg:gap-0 '>
            <div className='p-9 text-center bg-red-500 bg-opacity-10 rounded-xl lg:p-2'>Round Robin </div>
            <div className='p-9 text-center bg-red-500 bg-opacity-10 rounded-xl lg:p-2 mt-5'>SCAN/C-SCAN</div>
            <div className='p-[37px] text-center bg-red-500 bg-opacity-10 lg:mt-6 rounded-xl lg:p-2'>Banker's Algorithm</div>
            <div className='p-9 text-center bg-red-500 bg-opacity-10 rounded-xl lg:p-2 mt-5'>MRU</div>

        </div>
    </div>
  )
}
