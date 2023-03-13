import React from 'react'
import { Navbar } from '../Components/Navbar'
export const AboutUs = () => {
  const members =[
    {
        id: 1,
        name:"Parth",
        work:"ABC"
    },
    {
        id: 2,
        name:"Priyank",
        work:"ABC"
    },
    {
        id: 3,
        name:"Manav",
        work:"ABC"
    },
    {
        id: 4,
        name:"Pooja",
        work:"ABC"
    },
    {
        id: 5,
        name:"Akanksha",
        work:"ABC"
    },

  ]

  const memb_list = members.map((members)=>{

   return(

    <div key={members.id} className=" p-6 mt-6  rounded-lg flex flex-row">
       <div className=' bg-red-600 sm:p-6 text-centre w-1/2 text-[30px]'>{members.name} </div>
       <div className='bg-green-600 w-full sm:p-6'>{members.work}</div>

    </div>
   )
   

  })


  return (
<div className='about_us bg-[#19191c] font-Gloock'>
        <Navbar/>
    <div>
        <div className='text-white text-[40px] text-center p-10'>
            Our Team
        </div>
        {/* here i'll be putting the members */}
        <div className='members bg-[#19191c] items-center flex-row  '>{memb_list}</div>
       
    </div>
</div>
  )
}
