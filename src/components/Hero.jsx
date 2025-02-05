import React from 'react'
import { LuMusic2 } from "react-icons/lu";
import { CgPiano } from "react-icons/cg";
import { GiMicrophone } from "react-icons/gi";
import { FaBookOpen } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { IoPlayOutline, IoVideocamOutline } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { CiMusicNote1 } from "react-icons/ci";

export const Hero = () => {


    const data=[
        {"logo":<CgPiano/>,"heading":"Piano","para":"lorem ispum dinor krta kyu bakchifu tamasha bhawan is very nice we appreciate it and want more so that it can riase the srandarda lessgogogoogo. "},
        {"logo":<GiMicrophone/>,"heading":"Vocal","para":"lorem ispum dinor krta kyu bakchifu tamasha bhawan is very nice we appreciate it and want more so that it can riase the srandarda lessgogogoogo. "},
        {"logo":<FaBookOpen/>,"heading":"UGC-NET","para":"lorem ispum dinor krta kyu bakchifu tamasha bhawan is very nice we appreciate it and want more so that it can riase the srandarda lessgogogoogo. "}
    ]

    const data2=[
        {"logo":<IoVideocamOutline/>,"heading":"Weekly Tutorials","para":"New learning content every week"},
        {"logo":<IoPlayOutline />,"heading":"Student Performances","para":"Watch our talented students shine"},
        {"logo":<RxAvatar />,"heading":"Growing Community", "para":"Join 10,000+ music enthusiasts"}
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
           <div className='p-5 pt-8  gap-8 w-full grid sm:grid-cols-3 items-center justify-between'>
            {
           data.map((item,index)=>(
            <div className='w-[320px] sm:w-[400px] h-[200px] bg-blue-100 rounded-md flex flex-col p-2 gap-4 '  key={index}>

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
  {/* second set  */}
           <div className='p-2 flex-col mt-10 border-lg'>
                <div className='flex text-9xl justify-center items-center text-red-400  ' >
                    <a href="https://www.youtube.com/@TamashaBhawanMusic">
                    <AiOutlineYoutube href='https://www.youtube.com/@TamashaBhawanMusic'/>
                    </a>
                
                </div>
               <div className='flex-col font-poppins  text-center items-center'>
                <h1 className='sm:text-[5.5vw] text-[9vw] '>
                      Join OUR  <span className='text-red-500 font-semibold'>
                        COMMUNITY 
                            </span>
                </h1>
 
                <p className='sm:text-[1.9vw] text-[3.6vw] text-red-600'>
                Subscribe to our channel for exclusive tutorials, performances, and behind-the-scenes content
                </p>
               </div>
           </div>

           {/* cards  */}
           <div className='p-5 pt-8  gap-8 w-full grid sm:grid-cols-3 items-center justify-between'>
            {
           data2.map((item,index)=>(
            <div className='w-[320px] sm:w-[400px] h-[200px] bg-blue-100 rounded-md flex flex-col items-center p-2 gap-4 '  key={index}>

            <p className='text-[15vw] sm:text-[4vw] text-orange-300 font-semibold'>
            {item.logo}
            </p>
            <h1 className='font-bold text-[6vw] sm:text-[2vw]'>
                {item.heading}
            </h1>
            <p className='font-semibold text-[4.5vw] text-orange-500 sm:text-[1vw]'>
                {item.para}
            </p>
            
            </div>
           ))
}
           </div>

            
           {/* images  */}
           <div>
                <div className='border-black border-6 text-9xl mt-8 rounded-sm p-5 font-semibold flex flex-wrap items-center justify-center gap-4'>
                    {/* <img src="tb2.jpg" className=' border-white border-[2.5px] shadow-sm rounded-md sm:width-auto sm:h-[300px]' alt="" /> */}
                    <CiMusicNote1 className='text-9xl hidden sm:block text-blue-700'/>
                    <CiMusicNote1 className='text-8xl hidden sm:block text-blue-600'/>
                    <CiMusicNote1 className='text-7xl hidden sm:block text-blue-500'/>
                    <CiMusicNote1 className='text-6xl hidden sm:block text-blue-400'/>
                    <CiMusicNote1 className='text-5xl hidden sm:block text-blue-300' />
                    <img src="tb3.png" className=' rounded-md sm:block hidden sm:width-auto sm:h-[290px]' alt="" />
                    {/* <img src="tb2.jpg" className=' border-white border-[2.5px] shadow-sm rounded-md sm:width-auto sm:h-[300px]' alt="" /> */}
                    <CiMusicNote1 className='text-5xl hidden sm:block text-blue-300'/>
                    <CiMusicNote1 className='text-6xl hidden sm:block text-blue-400'/>
                    <CiMusicNote1 className='text-7xl hidden sm:block text-blue-500'/>
                    <CiMusicNote1 className='text-8xl hidden sm:block text-blue-600'/>
                    <CiMusicNote1 className='text-9xl hidden sm:block text-blue-700'/>
                </div>
           </div>
        </div>
    </section>
  )
}

// export default Hero