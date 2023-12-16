import Footer from "./Footer";
import Navbar from "./Navbar";

import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div className=" sticky top-0 z-50 bg-white ">
        <Navbar />
      </div>
      <div className="px-5 max-w-[1280px] mx-auto">
        <Outlet></Outlet>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
