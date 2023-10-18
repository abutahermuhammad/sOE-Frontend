import SuccessSlide from "./SuccessSlide";


const Success = () => {
  return (
    <div className=" bg-[url('https://i.ibb.co/KsKgQ12/success-bg-01.png')] bg-no-repeat bg-cover ">
    
        <h1 className='text-[40px] font-bold text-center  text-white
       border-b-2 border-green-600 pt-10 pb-5 container mx-auto'>
          স্বপ্নজয়ী সেরা মুখ
        </h1>
       <div className="py-12 gird grid-cols-3 md:grid-cols-6 gap-4 ">
       {
          // todo fetch sucess and pass to successslide
        }
        <SuccessSlide />
       </div>
      
    </div>
  );
};

export default Success;