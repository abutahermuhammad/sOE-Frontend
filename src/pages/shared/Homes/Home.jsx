import Coureses from "./courese/Coureses";
import Mentors from "./mentors/Mentors";
import Slides from "./Slides";
import Success from "./Success/Success";
import ChooseUs from "./whySoE/ChooseUs";


const Home = () => {
  return (
    <div>
      <Slides/>
      <Mentors/>
      <Coureses/>
      <ChooseUs/>
      <Success/>
    </div>
  );
};

export default Home;