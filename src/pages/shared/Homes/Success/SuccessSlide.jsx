import Marquee from "react-fast-marquee";


const SuccessSlide = () => {
  return (
    <Marquee pauseOnHover={true}
     className="gird grid-cols-3 md:grid-cols-6 gap-5 " >
      <div className="card w-52 bg-black bg-opacity-40 text-white hover:bg-opacity-100 shadow-xl border-2 border-slate-500 ">
  <div className="card-body ">
  <img className="mask mask-circle w-24 h-24  border-4 border-dotted border-green-500 rounded-full mx-auto " src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.1337471339.1689480636&semt=sph" />
    <p>If a dog chews shoes whose shoes does he choose?</p>
    
  </div>
 
</div>
      <div className="card w-52 bg-base-100 shadow-xl ">
  <div className="card-body ">
  <img className="mask mask-circle w-24 h-24  border-4 border-dotted border-green-500 rounded-full " src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.1337471339.1689480636&semt=sph" />
    <p>If a dog chews shoes whose shoes does he choose?</p>
    
  </div>
 
</div>
      <div className="card w-52 bg-base-100 shadow-xl ">
  <div className="card-body ">
  <img className="mask mask-circle w-24 h-24  border-4 border-dotted border-green-500 rounded-full " src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.1337471339.1689480636&semt=sph" />
    <p>If a dog chews shoes whose shoes does he choose?</p>
    
  </div>
 
</div>
    </Marquee>
  );
};

export default SuccessSlide;