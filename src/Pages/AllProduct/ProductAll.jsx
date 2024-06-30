import { Link, useLoaderData } from "react-router-dom";


const ProductAll = () => {
    const products=useLoaderData()
    console.log(products)
    return (
        <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap  items-center -m-4">
          
           {
            products?.map(product=> <div key={product._id} className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-64 md:h-36 w-full object-cover object-center" src={product?.image} alt="blog"/>
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{product?.subcategory}</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{product?.name} <div className="badge badge-secondary">{product?.stock}</div></h1> 
                  <p className="font-bold text-xl">Price: $ {product?.price}</p>
                  
                  <div className="flex items-center  mt-10">
                  <Link to={`/products/${product?._id}`} className="btn bg-[#F96061] w-full font-semibold text-white">Details</Link>
                  </div>
                </div>
              </div>
            </div>)}
           
         
          
            
          </div>
        </div>
      </section>
       
    );
};

export default ProductAll;