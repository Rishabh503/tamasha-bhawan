import React from 'react'

export const Navbar = () => {
  return (
    <div className=' bg-white h-16 w-full'>
        <div className=' flex justify-between items-center px-4 py-3 border-black shadow-md'>
           <div className='h-full w-12 '>
           <img src="tb2.jpg"  className='rounded-lg' alt="" />
           </div>
            <div className='flex  justify-between flex-wrap gap-8 px-2 py-3'>
                <p>Courses</p>
                <p>Notes</p>
                <p>Students</p>
                <p>Performances</p>
                <p>Testimonials</p>
                <p>Contact Us</p>
            </div>
        </div>
    </div>
  )
}
// 
// export default Header