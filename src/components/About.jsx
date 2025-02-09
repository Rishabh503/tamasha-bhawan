import React from 'react'

import data from "../data/course.json"

export const About = () => {
  return (
    <section className='min-h-screen p-10 w-full'>
      <div className='flex font-poppins flex-col gap-10  text-lg'>
        <div className=' text-center w-full text-5xl sm:text-5xl text-blue-500 font-semibold'>
          About Us And FAQ'S
        </div>
          <div className='py-4 flex flex-col gap-4'>
          {
            data.map((item,index)=>(
              <div className='flex flex-col  my-2 gap-4 shadow-md'>
                <h1 className='font-semibold text-slate-600 text-2xl'>
                  {item.heading}
                </h1>
                <p>
                {item.para}
                </p>
              </div>
            ))
          }
          </div>
          <div>
            
            

          </div>
      </div>

    </section>
  )
}

export default About