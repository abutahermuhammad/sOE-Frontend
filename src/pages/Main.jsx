
// import Navbar from './shared/Homes/Home/Navbar';

import { Outlet } from "react-router-dom";
import Headers from "./shared/Homes/Headers";
import Footer from "./shared/footer/Footer";
import { FaFacebookMessenger } from "react-icons/fa6";
const Main = () => {
  return (
    <div>
      <Headers />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;