import React from 'react';

const UnderDevelopment = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <div className="flex justify-center mb-4">
          <img src="https://res.cloudinary.com/dhe9p6bo0/image/upload/v1745699335/WhatsApp_Image_2025-04-27_at_01.46.00_31d81b70-removebg-preview_riv0f9.png" alt="Logo" className="w-24 h-24" />
        </div>
        <h1 className="text-xl font-semibold text-center text-gray-800">This page is under development</h1>
        <p className="text-center text-gray-600 mt-2">Kindly visit us after some time.</p>
      </div>
    </div>
  );
};

export default UnderDevelopment;
