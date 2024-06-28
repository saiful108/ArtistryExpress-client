
import Features from "../../Components/Features";
import AllProduct from "../AllProduct/AllProduct";
import Catagories from "../Category/Catagories";
import Baner from "./Home-components/Baner";
import Testimonial23 from "./Home-components/Testimonial23";


const Home = () => {
   
    return (
        <div>
            <h1>Home</h1>
          
            <Baner/>
            <Catagories/>
            <AllProduct/>
            <Features/>
            <Testimonial23 />
        </div>
    );
};

export default Home;