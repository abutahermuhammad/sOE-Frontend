import { useEffect } from "react";
import 'aos/dist/aos.css';
import Aos from "aos";

const CourseCard = () => {
  useEffect(() => {
    // Initialize AOS when the component mounts
    Aos.init({ duration: 800 });
  }, []);

  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="1200"
      className="card w-80 bg-[#0a1049] text-white shadow-[#05092d] shadow-lg hover:border border-blue-500 transition group  ">
      <figure className="px-10 pt-10">
        <img src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" alt="Mentors" className="rounded-xl group-hover:-translate-y-4 transition" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Moudud Hasan</h2>
        <p className="text-green-600 text-lg">C E O</p>

      </div>
    </div>
  );
};

export default CourseCard;