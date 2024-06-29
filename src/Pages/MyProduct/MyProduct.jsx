import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";


const MyProduct = () => {
const products=useLoaderData();
const {user}=useAuth() || {};
const data=products.filter(pd=>pd.email==user?.email)
console.log(data)
    return (
       
        <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap  items-center -m-4">
          
           {
            data?.map(product=> <div key={product._id} className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-64 md:h-36 w-full object-cover object-center" src={product?.image} alt="blog"/>
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{product?.subcategory}</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{product?.name} <div className="badge badge-secondary">{product?.stock}</div></h1> 
                  <p className="font-bold text-xl">Price: $ {product?.price}</p>
                  <div className="flex justify-between gap-5">    
                  <Link to={`/update/${product?._id}`} className="btn border-green-600 text-black font-semibold "><GrUpdate />Product</Link>
                  <button  className="btn  border-green-600 text-black font-semibold "><MdDelete/> Product</button>
                  </div>
                  <div className="flex items-center  mt-10">
                  
                  </div>
                </div>
              </div>
            </div>)}
           
         
          
            
          </div>
        </div>
      </section>
    );
};

export default MyProduct;