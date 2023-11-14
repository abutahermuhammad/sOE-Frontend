import React from 'react';
import { TbCurrencyTaka } from 'react-icons/tb';
import Button from './Button';
import { Link } from 'react-router-dom';

const MyCourseCard = ({mycourse}) => {
  const { batch,course,date,discount,due,fee,inWord,paid, phone,student_name,total, _id } = mycourse;
  console.log("my course", mycourse)
const startClass = "কোর্স শুরু করুন"

  return (
    <div
      // data-aos="zoom-in-up"
      // data-aos-duration="1200"
      className="card w-80 bg-[#0a1049] text-white shadow-[#05092d] shadow-lg hover:border border-blue-500 transition group  ">
     
      <div className="card-body items-center ">
    
        <h2 className="card-title text-2xl"> <span className='text-[rgb(39, 27, 206) 0%]' >কোর্স :</span> {course}</h2>
        <p className="text-2xl flex items-center "> হে ! </p>
        <p className="text-xl flex items-center "> {student_name} </p>
      <span className='text-white'>---------------- </span>
        <p className="text-lg flex items-center "> আমাদের সাথে হোক তোমার পথচলা...  </p>
       

        <div className="flex item-center justify-between gap-5">
      <Link to="/dashboard/home" >  <Button buttonText={startClass} /></Link>
        
        </div>

      </div>
    </div>
    )
};

export default MyCourseCard;