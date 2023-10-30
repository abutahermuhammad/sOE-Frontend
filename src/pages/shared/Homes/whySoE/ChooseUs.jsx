import 'aos/dist/aos.css';
import Aos from "aos";
import { useEffect } from "react";

const ChooseUs = () => {
  useEffect(() => {
    // Initialize AOS when the component mounts
    Aos.init({ duration: 800 });
  }, []);
  return (
    <div className="bg-[#060b30]   md:h-72 ">
    
      <div className="md:flex justify-between items-center md:container mx-auto  bg-gradient-to-t from-[#020957]  to-[#050936]   p-10 pb-4 rounded-2xl shadow-lg">
        <section className=" ">
          <h1
          className="text-white text-center font-bold text-3xl"> কেন SoE- তে <span className='text-green-500'>আস্থা</span> রাখবে ! </h1>
          <p className="text-[#d6d4e6] text-[20px] pt-3">শিক্ষার্থীদের কল্যাণে মানসম্মত পাঠদান করানো আমাদের উদ্দেশ্য।</p>
        </section >
        {/* section 2 */}

        <section className="grid grid-cols-2 gap-5 font-semibold text-[#212529] text-[20px]">
          <div data-aos="fade-right"
      data-aos-duration="1200"
           className="flex gap-3 items-center justify-center rounded-lg
           bg-[#EBEDF5] shadow-md shadow-[#474646] p-6 text-center hover:-translate-y-2 transition delay-75 duration-300 ease-in-out ">
            <img 
             className="w-10" src="https://i.ibb.co/cCYnn50/idea-2583119.png" alt="" />
            সেরা মেন্টর</div>
            {/*  */}
          <div data-aos="fade-left"
      data-aos-duration="1200"
           className="flex gap-3 items-center justify-center rounded-lg bg-[#EBEDF5] shadow-md shadow-[#474646] p-6 text-center hover:-translate-y-2 transition delay-75 duration-300 ease-in-out ">
            <img className="w-10" src="https://i.ibb.co/0tXRGN5/reduction-6013956.png" alt="" />
            স্বল্প খরচ</div>
          <div data-aos="fade-up-right"
      data-aos-duration="1600"
            className="flex gap-3 items-center justify-center rounded-lg bg-[#EBEDF5] shadow-md shadow-[#474646] p-6 text-center hover:-translate-y-2 transition delay-75 duration-300 ease-in-out">
            <img className="w-10" src="https://i.ibb.co/PwrYKL3/customer-686379.png" alt="" />
            সেরা সার্ভিস</div>
          <div data-aos="fade-up-left"
      data-aos-duration="1600"
          className="flex gap-3 items-center justify-center rounded-lg bg-[#EBEDF5] shadow-md shadow-[#474646] p-6 text-center hover:-translate-y-2 transition delay-75 duration-300 ease-in-out">
            <img className="w-10" src="https://i.ibb.co/7436xX6/group-1357616.png" alt="" />
            দক্ষ টিম</div>
        </section>

      </div>
    </div>
  );
};

export default ChooseUs;