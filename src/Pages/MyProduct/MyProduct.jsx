import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

import { MdDelete } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import {  useState } from "react";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";



const MyProduct = () => {
const {user}=useAuth() || {};
const products=useLoaderData();
const [product,setProduct]=useState([products])
const data=products.filter(pd=>pd.email==user?.email)
const [filter, setFilter] = useState([]);
  const [filteredData, setFilteredData] = useState(data);
  const handleFilterChange = (customization) => {
    setFilter(customization);
    if (customization === '') {
      setFilteredData(data);
    }
    else if(customization === 'yes'){
      const newFilteredData = data.filter(item => item.customization === customization);
      setFilteredData(newFilteredData);
    }
    else if(customization === 'no'){
      const newFilteredData = data.filter(item => item.customization === customization);
      setFilteredData(newFilteredData);
    }
  }
console.log(data)
const handleDelete=_id=>{
    console.log(_id)
    
        fetch(`https://artistry-express-server.vercel.app/products/${_id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.deletedCount>0){
            Swal.fire({
              title: "Are you sure?",
              text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, delete it!"
            }).then((result) => {
              if (result.isConfirmed) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                });
              }
              const reamaining=products.filter(pd=>pd._id!==_id)
              setProduct(reamaining)
            });
           
            }
           
           
        })
   
}


  


// Function to handle filter change


    return (
       
        <section className="text-gray-600 body-font">
          <Helmet>
        <title>ArtistryExpress || User Product Page</title>
        
      </Helmet>
      <div className="dropdown grid justify-center">
        <p>Filter By Customization</p>
        
        <div className="dropdown dropdown-hover">
  <div tabIndex={0} role="button" className="btn m-1">Filter</div>
  <ul tabIndex={0} className="dropdown-content dropdown-primary  w-full max-w-xs menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
   <li className="mb-2"> <button className="btn  border-green-600 text-black font-semibold " onClick={() => handleFilterChange('')}>All</button></li>
   <li className="mb-2"><button type="button" className="btn  border-green-600 text-black font-semibold " onClick={() => handleFilterChange('yes')}>Yes</button></li>
    <li className="mb-2"><button className="btn  border-green-600 text-black font-semibold " onClick={() => handleFilterChange('no')}>No</button></li>
  </ul>
</div>
  
</div>

        
        <div className="container px-5 py-24 mx-auto">
          
        
        
        
          <div className="flex flex-wrap  items-center -m-4">
         
          
           {
            filteredData?.map(product=> <div key={product._id} className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-64 md:h-36 w-full object-cover object-center" src={product?.image} alt="blog"/>
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{product?.subcategory}</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{product?.name} <div className="badge badge-secondary">{product?.stock}</div></h1> 
                  <p className="font-bold text-xl">Price: $ {product?.price}</p>
                  <div className="flex justify-between gap-5">    
                  <Link to={`/update/${product?._id}`} className="btn border-green-600 text-black font-semibold "><GrUpdate />Product</Link>
                  <button onClick={()=>handleDelete(product?._id)} className="btn  border-green-600 text-black font-semibold "><MdDelete/> Product</button>
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