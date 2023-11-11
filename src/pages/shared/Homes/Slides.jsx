import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



const Slides = () => {
  return (
  
     <div className="relative " >
          <Carousel autoPlay={true} interval={2000} infiniteLoop={true} className="bg-[#121534] " >
       <div>
           <img src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />
          
       </div>
       <div>
           <img  src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />
          
       </div>
       <div>
           <img src="https://plus.unsplash.com/premium_photo-1690031000842-1ac0508f18b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"/>
           
       </div>
     
   </Carousel>
   {/* <div className="bg-blue-600 shadow-2xl md:absolute -bottom-0  container mx-auto right-0.5  ">
    <h1 className="text-4xl text-red-700 ">total</h1>
   
   </div> */}
   
     </div>
   
  );
};

export default Slides;