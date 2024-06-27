import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useState } from "react";


const Main = () => {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <div className={`${darkMode ? "dark" : ""} dark:bg-[#0F172A] h-screen`}>
            <Navbar setDarkMode={setDarkMode} darkMode={darkMode}  />
          <div className="w-full  dark:bg-[#0F172A]"> <Outlet/></div>
          <div> <Footer></Footer> </div>
        </div>
    );
};

export default Main;