import Coureses from "./courese/Coureses";
import FreeSection from "./FreeSection/FreeSection";
import Mentors from "./mentors/Mentors";
import Slides from "./Slides";
import Success from "./Success/Success";
import ChooseUs from "./whySoE/ChooseUs";


const Home = () => {
  return (
    <div>
    
      <Slides/>
      <Coureses/>
      <Mentors/>
      <ChooseUs/>
      <Success/>
      <FreeSection/>
    </div>
  );
};

export default Home;