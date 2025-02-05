import React from 'react'
// import data from '../data/course.json'
import { PiGuitarThin } from "react-icons/pi";
import { LuMusic2 } from "react-icons/lu";
import { CgPiano } from "react-icons/cg";
import { GiMicrophone, GiViolin } from "react-icons/gi";
import { FaBookOpen } from "react-icons/fa";
import { CourseCard } from './CourseCard'

const data=[
    {
        "name": "Beginner Guitar Course",
        "detail": "Learn the basics of guitar, including chords, strumming, and simple songs.",
        "duration": "3 months",
        "price": "7500 Rs",
        "logo": <PiGuitarThin/>
    },
    {
        "name": "Piano Essentials",
        "detail": "Fundamentals of piano playing, including scales, hand coordination, and simple melodies.",
        "duration": "4 months",
        "price": "9000 Rs",
        "logo": <CgPiano/>
    },
    {
        "name": "Vocal Training",
        "detail": "Improve your singing skills with breathing techniques, pitch training, and vocal exercises.",
        "duration": "3 months",
        "price": "8500 Rs",
        "logo": <GiMicrophone/>
    },
    {
        "name": "UGC NET Mastery",
        "detail": "Learn drumming basics, beats, rhythm techniques, and tempo control as well as quite cool.",
        "duration": "3 months",
        "price": "9500 Rs",
        "logo": <FaBookOpen/>
    },
    {
        "name": "Violin Basics",
        "detail": "Introduction to violin, including bowing techniques, finger placements, and simple tunes.",
        "duration": "4 months",
        "price": "9800 Rs",
        "logo": <GiViolin/>
    },
    {
        "name": "Music Production",
        "detail": "Learn digital music production, mixing, and basic sound editing techniques.",
        "duration": "2 months",
        "price": "8900 Rs",
        "logo": <LuMusic2/>
    }
]
export const CoursePage = () => {
  return (
    <section className='min-h-screen w-full bg-blue-50'>

       <div className='p-4'>
             {/* for top text  */}
         <div className=' flex flex-col text-center gap-4 font-poppins'>
            <h1 className='sm:text-[4vw] text-4xl text-blue-600 font-bold' >
                Our Courses
            </h1>
            <p className='sm:text-[1.5vw]  text-2xl text-blue-500'>
            Discover your musical potential with our diverse range of courses
            </p>
            </div>
            {/* for cards  */}
            <div className='items-center text-start flex flex-wrap'>
                {
                    data.map((item,index)=>(
                        <CourseCard  item={item}/>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

// export default CoursePage