import React from 'react'
import { RxAvatar } from "react-icons/rx";

export const CourseCard = ({item}) => {

  return (
    <div className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl bg-blue-100 shadow-lg rounded-2xl overflow-hidden p-4 mx-auto mt-6">
      
      {/* Image Section */}
      <div className="p-1 text-4xl font-bold text-red-500">
      {item.logo}
      </div>

      {/* Details Section */}
      <div className="text-start flex flex-col gap-4 mt-4">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">{item.name}</h2>
        <p className="text-gray-800 font-semibold text-sm sm:text-base mt-1">
          {item.detail}
        </p>
        <p className="text-gray-700 text-sm sm:text-base ">
          Duration : {item.duration}
        </p>
        <p>
          Price:   {item.price}
        </p>

      </div>
    </div>
  )
}

