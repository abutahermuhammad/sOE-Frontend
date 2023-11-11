import CourseCard from "./CourseCard";
import './Course.css'
import { useEffect, useState } from "react";


const Coureses = () => {
const [courses, setCourses] = useState([])

useEffect( () =>{
  fetch('http://localhost:5000/course-list')
  .then(res => res.json())
  .then(data => {
    setCourses(data);
    console.log("course",data)
  })
} ,[])

  return (
    <div className="bg-gradient-to-tr from-[#000324]  to-[#101a77] relative ">
      <img className="ping-slow absolute  right-3 w-12 top-8 animate-ping ainmate-2s list-item" src="https://i.ibb.co/vdX3wZ9/ring-shape-01-removebg-preview.png" alt="" />
      <img className="ping-slow absolute left-3 w-12 top-8 animate-ping ainmate-2s list-item" src="https://i.ibb.co/vdX3wZ9/ring-shape-01-removebg-preview.png" alt="" />
      <img className="ping-slow absolute right-56  w-16 top-8 animate-ping ainmate-2s list-item" src="https://i.ibb.co/vdX3wZ9/ring-shape-01-removebg-preview.png" alt="" />
      <div id="moving-image" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img
          className="w-14 ping-slow transition delay-75"
          src="https://i.ibb.co/vdX3wZ9/ring-shape-01-removebg-preview.png"
          alt=""
        />
      </div>
      <div className="absolute top-1/2 right-5 transform -translate-x-1/2 -translate-y-1/2">
        <img 
          className="w-14 ping-slow transition delay-75"
          src="https://i.ibb.co/vdX3wZ9/ring-shape-01-removebg-preview.png"
          alt=""
        />        
      </div>
      <img className="rotate-180  absolute top-32 opacity-80 animate-pulse" src="https://i.ibb.co/2K3jYRW/bg-shape-01-removebg-preview.png" alt="" />
      <section className="container mx-auto">
      <h1 className='text-[40px] font-bold text-center  text-white
       border-b-2 border-green-600 pt-10 pb-5 '>Our Courses</h1>
       {/* todo map course */}
       <div className="grid md:grid-cols-3 gap-6 py-10">
        {
          courses?.map(course => <CourseCard
          key={course._id}
          course={course}
          />)
        }
        {/* <CourseCard/> */}
       </div>
      </section>
    </div>
  );
};

export default Coureses;