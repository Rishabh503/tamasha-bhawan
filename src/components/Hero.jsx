import React from 'react'
import { LuMusic2 } from "react-icons/lu";
import { CgPiano } from "react-icons/cg";
import { GiMicrophone } from "react-icons/gi";
import { FaBookOpen } from "react-icons/fa";

export const Hero = () => {

    const data=[
        {"logo":<CgPiano/>,"heading":"Piano","para":"lorem ispum dinor krta kyu bakchifu tamasha bhawan is very nice we appreciate it and want more so that it can riase the srandarda lessgogogoogo. "},
        {"logo":<GiMicrophone/>,"heading":"Vocal","para":"lorem ispum dinor krta kyu bakchifu tamasha bhawan is very nice we appreciate it and want more so that it can riase the srandarda lessgogogoogo. "},
        {"logo":<FaBookOpen/>,"heading":"UGC-NET","para":"lorem ispum dinor krta kyu bakchifu tamasha bhawan is very nice we appreciate it and want more so that it can riase the srandarda lessgogogoogo. "}
    ]
  return (
    <section className='w-full min-h-screen h-auto bg-white-700'>
        <div className='bg-blue-50 p-4 min-h-screen '>
            {/* music info and logo  */}
           <div className='p-2 flex-col shadow-sm'>
                <div className='flex text-9xl justify-center items-center text-blue-200  ' >
                    <p className='hidden sm:block font-extrabold'>
                    <LuMusic2 />
                    </p>
                    <img   src="tamasha.png" className='h-1/2 ' alt="" />
                    <p className=' hidden sm:block font-extrabold sm:transform scale-x-[-1]'>
                    <LuMusic2 />
                    </p>
                </div>
               <div className='flex-col font-poppins  text-center items-center'>
                <h1 className='sm:text-[5.5vw] text-[9vw] '>
                        Welcome to  <span className='text-blue-500 font-semibold'>
                        TAMASHA BHAWAN
                            </span>
                </h1>
                
                <p className='sm:text-[1.9vw] text-[3.6vw] text-blue-600'>
                    Where Music Comes to Life - Discover Your 
                    Musical Journey with Us
                </p>
               </div>
           </div>

           {/* cards  */}
           <div className='p-8 pt-8  gap-8 w-full grid sm:grid-cols-3 justify-between'>
            {
           data.map((item,index)=>(
            <div className='w-[320px] sm:w-[400px] h-[200px] bg-blue-100 rounded-md flex flex-col p-3 gap-4 '  key={index}>

            <p className='text-[12vw] sm:text-[3vw] font-bold'>
            {item.logo}
            </p>
            <h1 className='font-bold text-[7.5w]'>
                {item.heading}
            </h1>
            <p className='font-semibold text-[3vw] sm:text-[1vw]'>
                {item.para}
            </p>
            
            </div>
           ))
}
           </div>

           {/* images  */}
           <div>
                <div className='border-black border-6 rounded-sm p-5 '>
                    <img src="tb2.jpg" className=' border-white border-[2.5px] shadow-sm rounded-md sm:width-auto sm:h-[500px]' alt="" />
                </div>
           </div>
        </div>
    </section>
  )
}

// export default Hero