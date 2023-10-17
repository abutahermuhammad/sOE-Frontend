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

      <div className="md:container mx-auto py-10">
      <h1 className='text-[40px] font-bold text-center my-5 text-white
       border-b-2 border-green-600 '>Our Mentors</h1>
      <div className="grid md:grid-cols-4 gap-5">
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