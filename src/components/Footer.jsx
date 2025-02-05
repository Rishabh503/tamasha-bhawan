import React from 'react'
import { FaFacebook, FaGooglePlay, FaInstagram, FaTelegram, FaWhatsapp, FaYoutube } from "react-icons/fa";
export const Footer = () => {
  return (
    <footer className='bg-black w-full    text-white'>
     <div className=' mt-16 p-4 '>
     <div className='flex flex-col gap-4 bottom-0  '>
        <h1>TAMASHA BHAWAN</h1>
        <p>Contact : +91 93103 95103</p>
        <p>
            Tamasha bhawan is a premier music institute dedicated to providing quality music education across all classes and domains. 
        </p>
       </div>

       <div className='flex mt-4 gap-8 justify-between text-4xl'>
       <a href="https://youtube.com/@thechanakyaguruacademy?si=OjyvtoEGpEoVKs1A ">
       <FaYoutube/>
       </a>
       <a href="https://www.instagram.com/thechanakyaguruacademy?igsh=MXhpYjVkYmt1M2kxbA==">
       <FaInstagram/>

       </a>
      <a href="https://chat.whatsapp.com/EPpbxjExqGK5DfbnlmMNKA ">
      <FaWhatsapp />
      </a>
      <a href="https://play.google.com/store/apps/details?id=co.lynde.iyxal ">
      <FaGooglePlay/>
      </a>
       <FaFacebook />
       </div>
     </div>
     </footer>
  )
}

// export default Footer