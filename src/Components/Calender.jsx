
import { useEffect } from 'react';
import { useState } from 'react';

const Calender = ({ currentDate, onPrevClick, onNextClick }) => {


  return (
    <div className="flex flex-col items-center bg-gradient-to-tl from-purple-500  to-[#140e4d] w-40 justify-center p-2 rounded-xl ">
      <h1 className="text-2xl font-bold mb-2 text-yellow-300">
        {currentDate?.toLocaleDateString('en-US', { month: 'short' })}</h1>

     
      {/* Your day calendar content goes here */}

      <div className="flex justify-center items-center gap-8  ">
        <button className=" text-white  py-2 rounded" onClick={onPrevClick}>
          &lt;
        </button>
        <p className='text-pink-50 text-2xl font-bold'>{currentDate?.toLocaleDateString('en-US', { day: 'numeric' })}</p>
        <button className=" text-white  py-2 rounded" onClick={onNextClick}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Calender;