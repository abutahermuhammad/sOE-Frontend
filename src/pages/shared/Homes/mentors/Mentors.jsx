import { useEffect, useState } from "react";
import 'aos/dist/aos.css'; 
import Aos from "aos";
import MentorsCard from "./MentorsCard";

const Mentors = () => {
const [mentors, SetMentors] = useState([]);
useEffect(() => {
  // Initialize AOS when the component mounts
  Aos.init({ duration: 800 });
}, []);


  return (
 

<div className=" bg-[url('https://i.ibb.co/Ny7fw1v/bg-01.png')] bg-no-repeat bg-cover opacity-95">

      <div className="md:container mx-auto relative   ">
      <img className="ping-slow absolute  right-3 w-12 top-8 animate-ping ainmate-2s list-item" src="https://i.ibb.co/vdX3wZ9/ring-shape-01-removebg-preview.png" alt="" />
      <h1 className='text-[40px] font-bold text-center  text-white
       border-b-2 border-green-600 pt-10 pb-5 '>Our Mentors</h1>
      <div className="grid md:grid-cols-4 gap-5 py-10">
        {/* {
          mentors?.map(mentor=> <MentorsCard 
          key={mentor.id}
          data-aos="zoom-in-up"
        data-aos-duration="1200"
          ></MentorsCard>)
        } */}
        <MentorsCard 
        
        />
      </div>
      </div>
     
    </div>
   

    
  );
};

export default Mentors;