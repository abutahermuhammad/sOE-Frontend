import { useEffect } from "react";
import 'aos/dist/aos.css';
import Aos from "aos";
import Button from "../../../../Components/Button";
import { TbCurrencyTaka } from "react-icons/tb";

const CourseCard = ({course}) => {
const enroll= "Enroll Now"
const details= "Details"

  const {name, fees, photoUrls, _id, descripton } = course;

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
        <img src={photoUrls} alt="Mentors" className="rounded-xl h-[160px] w-full group-hover:-translate-y-4 transition" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl">{name}</h2>
        <p className="text-lg flex items-center ">মাত্র ‍<span className="text-green-600 text-lg flex items-center">
          <TbCurrencyTaka/>{fees}</span> </p>
          <p>{descripton}</p>

        <div className="flex item-center justify-between gap-5">
     
        <Button buttonText={enroll} />
        <Button buttonText={details} />
        </div>

      </div>
    </div>
  );
};

export default CourseCard;