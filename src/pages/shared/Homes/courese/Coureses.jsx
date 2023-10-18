import CourseCard from "./CourseCard";


const Coureses = () => {
  return (
    <div className=" bg-[url('https://i.ibb.co/FHCGJw7/course-bg-01.png')] bg-no-repeat bg-cover bg-opacity-90 ">
      <section className="container mx-auto">
      <h1 className='text-[40px] font-bold text-center  text-white
       border-b-2 border-green-600 pt-10 pb-5 '>Our Courses</h1>
       {/* todo map course */}
       <div className="grid md:grid-cols-3 gap-6 py-10">
        <CourseCard/>
       </div>
      </section>
    </div>
  );
};

export default Coureses;