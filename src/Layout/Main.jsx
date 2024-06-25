import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


const Main = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Navbar/>
           <Outlet/>
           <Footer></Footer> 
        </div>
    );
};

export default Main;