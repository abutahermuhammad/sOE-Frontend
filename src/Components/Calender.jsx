
import { useEffect } from 'react';
import { useState } from 'react';

const Calender = ({ currentDate, onPrevClick, onNextClick }) => {
  // const [currentDate, setCurrentDate] = useState(new Date());
  // const [routineData , setRoutineData] = useState([]);


  // const handlePrevClick = () => {
  //   const newDate = new Date(currentDate);
  //   newDate.setDate(currentDate.getDate() - 1);
  //   setCurrentDate(newDate);
  // };

  // const handleNextClick = () => {
  //   const newDate = new Date(currentDate);
  //   newDate.setDate(currentDate.getDate() + 1);
  //   setCurrentDate(newDate);
  // };

  // useEffect(() => {
  //   fetch(`http://localhost:5000/routine_list/${currentDate}`)
  //     .then(response => response.json())
  //     .then(data => setRoutineData(data))
  //     .catch(error => console.error(error));
  // }, [currentDate]);
  

  return (
    <div className="flex flex-col items-center bg-gradient-to-tl from-purple-500  to-[#140e4d] w-40 justify-center p-2 rounded-xl ">
        <h1 className="text-2xl font-bold mb-4 text-yellow-300">
          {currentDate?.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric' })}</h1>


      {/* Your day calendar content goes here */}

      <div className="flex justify-evenly gap-10  ">
        <button className=" text-white px-4 py-2 rounded" onClick={onPrevClick}>
          &lt;
        </button>
        <button className=" text-white px-4 py-2 rounded" onClick={onNextClick}>
           &gt;
        </button>
      </div>
    </div>
  );
};

export default Calender;