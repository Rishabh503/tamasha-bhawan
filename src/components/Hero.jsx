import React from 'react'
import { LuMusic2 } from "react-icons/lu";
import { CgPiano } from "react-icons/cg";
import { GiMicrophone } from "react-icons/gi";
import { FaBookOpen, FaGuitar, FaMusic, FaQuestion } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { IoPlayOutline, IoVideocamOutline } from "react-icons/io5";
import { GiMusicalNotes } from "react-icons/gi";
import { MdMusicNote, MdQuestionMark } from "react-icons/md";
import { GiMusicalScore } from "react-icons/gi";
import { NavLink } from 'react-router';




import { RxAvatar } from "react-icons/rx";
import { CiMusicNote1 } from "react-icons/ci";

export const Hero = () => {


    const data=[
        {"logo":<MdQuestionMark/>,"heading":"COUNSELLING SESSION","para":"lorem ispum dinor krta kyu bakchifu tamasha bhawan is very nice we appreciate it and want more so that it can riase the srandarda lessgogogoogo. "},
        {"logo":<FaBookOpen/>,"heading":"UGC-NET MUSIC PAPER 2","para":"lorem ispum dinor krta kyu bakchifu tamasha bhawan is very nice we appreciate it and want more so that it can riase the srandarda lessgogogoogo. "},
        {"logo":<GiMicrophone/>,"heading":"Hindustani Light Music Vocal","para":"lorem ispum dinor krta kyu bakchifu tamasha bhawan is very nice we appreciate it and want more so that it can riase the srandarda lessgogogoogo. "},
        {"logo":<GiMicrophone/>,"heading":"Hindustani Classical Music VocaL","para":"lorem ispum dinor krta kyu bakchifu tamasha bhawan is very nice we appreciate it and want more so that it can riase the srandarda lessgogogoogo. "},

        {"logo":<FaBookOpen/>,"heading":"TGT-PRT MUSIC PREPRATION","para":"lorem ispum dinor krta kyu bakchifu tamasha bhawan is very nice we appreciate it and want more so that it can riase the srandarda lessgogogoogo. "},
        {"logo":<FaGuitar/>,"heading":"GUITAR","para":"lorem ispum dinor krta kyu bakchifu tamasha bhawan is very nice we appreciate it and want more so that it can riase the srandarda lessgogogoogo. "},
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
                    <div className='hidden sm:flex sm:block font-extrabold'>
                    <LuMusic2 className='text-9xl hidden sm:block text-blue-700'/>
                    {/* <LuMusic2/> */}
                    <LuMusic2 className='text-8xl hidden sm:block text-blue-600'/>
                    <LuMusic2 className='text-7xl hidden sm:block text-blue-500'/>
                    <LuMusic2 className='text-6xl hidden sm:block text-blue-400'/>
                    <LuMusic2 className='text-5xl hidden sm:block text-blue-300' />
                    </div>
                    <img   src="tamasha.png" className='h-1/2 ' alt="" />
                    <div className='hidden sm:flex sm:block font-extrabold'>
                    <LuMusic2 className='text-5xl transform scale-x-[-1] hidden sm:block text-blue-300'/>
                    <LuMusic2 className='text-6xl transform scale-x-[-1] hidden sm:block text-blue-400'/>
                    <LuMusic2 className='text-7xl  transform scale-x-[-1] hidden sm:block text-blue-500'/>
                    <LuMusic2 className='text-8xl hidden transform scale-x-[-1] sm:block text-blue-600'/>
                    <LuMusic2 className='text-9xl hidden transform scale-x-[-1] sm:block text-blue-700' />
                    </div>
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
           <div className='p-5 pt-8  gap-8 w-full grid grid-cols-2 sm:grid-cols-3 items-center justify-between'>
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
                    <a className='flex flex-col items-center' href="https://www.youtube.com/@TamashaBhawanMusic">
                        <p className='flex gap-4  justify-between items-center'>
                        {/* <GiMusicalNotes className='text-2xl'/>
                    <GiMusicalNotes className='text-2xl'/>
                    <GiMusicalNotes className='text-2xl'/>
                    <GiMusicalNotes className='text-2xl'/>
                        <GiMusicalNotes className='text-2xl'/>
                    <GiMusicalNotes className='text-2xl'/>
                    <GiMusicalNotes className='text-2xl'/>
                    <GiMusicalNotes className='text-2xl'/>
                        <GiMusicalNotes className='text-2xl'/>
                    <GiMusicalNotes className='text-2xl'/>
                    <GiMusicalNotes className='text-2xl'/>
                    <GiMusicalNotes className='text-2xl'/>
                        <GiMusicalNotes className='text-2xl'/>
                    <GiMusicalNotes className='text-2xl'/>
                    <GiMusicalNotes className='text-2xl'/>
                    <GiMusicalNotes className='text-2xl'/>
                        <GiMusicalNotes className='text-2xl'/>
                    <GiMusicalNotes className='text-2xl'/>
                    <GiMusicalNotes className='text-2xl'/>
                    <GiMusicalNotes className='text-2xl'/>
                        <GiMusicalNotes className='text-2xl'/>
                    <GiMusicalNotes className='text-2xl'/>
                    <GiMusicalNotes className='text-2xl'/>
                    <GiMusicalNotes className='text-2xl'/> */}
                        </p>
                    <AiOutlineYoutube href='https://www.youtube.com/@TamashaBhawanMusic'/>
                    </a>
                </div>
               <div className='flex-col font-poppins  text-center items-center'>
                <p>
               
                </p>
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

           <div className=' content-center w-full text-center '>
            
                <button className='bg-red-400 mt-6   font-semibold rounded-xl p-4 px-10'>
            
                    Subscribe Now
                    
                   
                </button>
               </div>

            
           {/* images  */}
           <div>
                <div className='border-black border-6 text-9xl mt-8 rounded-sm p-5 font-semibold flex flex-wrap items-center justify-center gap-4'>
                    {/* <img src="tb2.jpg" className=' border-white border-[2.5px] shadow-sm rounded-md sm:width-auto sm:h-[300px]' alt="" /> */}
                    <GiMusicalNotes className='text-9xl hidden sm:block text-blue-700'/>
                    <MdMusicNote className='text-8xl hidden sm:block text-blue-600'/>
                    <GiMusicalNotes className='text-7xl hidden sm:block text-blue-500'/>
                    <MdMusicNote className='text-6xl hidden sm:block text-blue-400'/>
                    <GiMusicalNotes className='text-5xl hidden sm:block text-blue-300' />
                    <img src="tb3.png" className=' rounded-md sm:block hidden sm:width-auto sm:h-[290px]' alt="" />
                    {/* <img src="tb2.jpg" className=' border-white border-[2.5px] shadow-sm rounded-md sm:width-auto sm:h-[300px]' alt="" /> */}
                    <MdMusicNote className='text-5xl hidden sm:block text-blue-300'/>
                    <GiMusicalNotes className='text-6xl hidden sm:block text-blue-400'/>
                    <MdMusicNote className='text-7xl hidden sm:block text-blue-500'/>
                    <GiMusicalNotes className='text-8xl hidden sm:block text-blue-600'/>
                    <MdMusicNote className='text-9xl hidden sm:block text-blue-700'/>
                </div>
           </div>

           <div className='flex font-poppins flex-col gap-10  text-lg'>
        <div className=' text-start w-full flex flex-col gap-6 p-2 text-blue-600 font-semibold '>
         <p className=' text-5xl sm:text-5xl'>
         About Us 
         </p>
            
            <p className='text-xl text-slate-600 font-semibold p-3'>
            At Tamasha Bhawan, students will have access to both practical and theoretical knowledge of Hindustani classical music. This means that in addition to learning the technical aspects of music, students will also gain an understanding of the cultural and historical context in which the music was created. By providing a comprehensive education that includes both practical and theoretical knowledge, Tamasha Bhawan ensures that students are equipped with the skills and knowledge needed to become well-rounded and accomplished musicians.
            </p>
             <NavLink className='p-2 text-end font-sm' to='/about'>
                See More
             </NavLink>
        </div>
        </div>
        </div>
    </section>
  )
}

// export default Hero