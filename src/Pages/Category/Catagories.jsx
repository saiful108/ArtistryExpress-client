
import { useEffect, useState } from "react";
import { Link,  } from "react-router-dom";




const Catagories = () => {
 
  const [product,setProduct]=useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/products')
    .then(res=>res.json())
    .then(data=>setProduct(data))
  },[])
  const [filter, setFilter] = useState([]);
  const [filteredData, setFilteredData] = useState(product);
  console.log("filteredData",filteredData)
    
  const handleFilterChange = (subcategory) => {
    setFilter(subcategory);
    if (subcategory === '') {
      setFilteredData(product);
    }
    else if(subcategory === 'Landscape Painting'){
      const newFilteredData = product.filter(item => item.subcategory === subcategory);
      setFilteredData(newFilteredData);
    }
     else if(subcategory === 'Portrait Drawing'){
      const newFilteredData = product.filter(item => item.subcategory === subcategory);
      setFilteredData(newFilteredData);
    }
    else if(subcategory === 'Watercolour Painting'){
      const newFilteredData = product.filter(item => item.subcategory === subcategory);
      setFilteredData(newFilteredData);
    }
    else if(subcategory === 'Oil Painting'){
      const newFilteredData = product.filter(item => item.subcategory === subcategory);
      setFilteredData(newFilteredData);
    }
    else if(subcategory === 'Charcoal Sketching'){
      const newFilteredData = product.filter(item => item.subcategory === subcategory);
      setFilteredData(newFilteredData);
    }
    else if(subcategory === 'Cartoon Drawing'){
      const newFilteredData = product.filter(item => item.subcategory === subcategory);
      setFilteredData(newFilteredData);
    }
    else {
      const newFilteredData = product.filter(item => item.subcategory === subcategory);
      setFilteredData(newFilteredData);
    }
  };
      
    
   
      

    return (                 
        <section className="text-gray-600 body-font">
          

  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-2xl font-bold text-start title-font  text-gray-700">Shop By Category</h1>
      
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/6 md:w-1/3">
        <div className="h-full flex flex-col items-center text-center   border-stone-500  shadow-2xl rounded-lg p-2">
          <img alt="team" className="flex-shrink-0 rounded-lg p-2 w-48  object-cover object-center mb-4" src="https://cdn-icons-png.freepik.com/256/5775/5775786.png?ga=GA1.1.1656189292.1719594919&semt=ais_hybrid"/>
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-900">Landscape Painting</h2>
            <h3 className="text-gray-500 mb-3">UI Developer</h3>
            <button onClick={() => handleFilterChange('Landscape Painting')}>Landscape Painting</button>
           
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/6 md:w-1/3">
        <div className="h-full flex flex-col items-center text-center  border-stone-500  shadow-2xl p-2">
          <img alt="team" className="flex-shrink-0 rounded-lg p-2 w-48  object-cover object-center mb-4" src="https://cdn-icons-png.freepik.com/256/15690/15690941.png?ga=GA1.1.1656189292.1719594919&semt=ais_hybrid"/>
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-900">Portrait Drawing</h2>
            <h3 className="text-gray-500 mb-3">UI Developer</h3>
            <button onClick={() => handleFilterChange('Portrait Drawing')}>Portrait Drawing</button>
            
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/6 md:w-1/3">
        <div className="h-full flex flex-col items-center text-center  border-stone-500  shadow-2xl p-2">
          <img alt="team" className="flex-shrink-0 rounded-lg p-2 w-48  object-cover object-center mb-4" src="https://cdn-icons-png.freepik.com/256/2513/2513290.png?ga=GA1.1.1656189292.1719594919&semt=ais_hybrid"/>
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-900">Watercolour Painting</h2>
            <h3 className="text-gray-500 mb-3">UI Developer</h3>
            
            <button onClick={() => handleFilterChange('Watercolour Painting')}>Water colour Painting</button>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/6 md:w-1/3">
        <div className="h-full flex flex-col items-center text-center  border-stone-500  shadow-2xl p-2">
          <img alt="team" className="flex-shrink-0 rounded-lg p-2 w-48  object-cover object-center mb-4" src="https://cdn-icons-png.freepik.com/256/9059/9059156.png?ga=GA1.1.1656189292.1719594919&semt=ais_hybrid"/>
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-900">Oil Painting</h2>
            <h3 className="text-gray-500 mb-3">UI Developer</h3>
            <button onClick={() => handleFilterChange('Oil Painting')}>Oil Painting</button>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/6 md:w-1/3">
        <div className="h-full flex flex-col items-center text-center  border-stone-500  shadow-2xl p-2">
          <img alt="team" className="flex-shrink-0 rounded-lg p-2 w-48  object-cover object-center mb-4" src="https://cdn-icons-png.freepik.com/256/13410/13410955.png?ga=GA1.1.1656189292.1719594919&semt=ais_hybrid"/>
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-900">Charcoal Sketching</h2>
            <h3 className="text-gray-500 mb-3">UI Developer</h3>
            <button onClick={() => handleFilterChange('Charcoal Sketching')}>Charcoal Sketching</button>
           
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/6 md:w-1/3">
        <div className="h-full flex flex-col items-center text-center  border-stone-500  shadow-2xl p-2">
          <img alt="team" className="flex-shrink-0 rounded-lg p-2 w-48   object-cover object-center mb-4" src="https://cdn-icons-png.freepik.com/256/14700/14700096.png?ga=GA1.1.1656189292.1719594919&semt=ais_hybrid"/>
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-900">Cartoon Drawing</h2>
            <h3 className="text-gray-500 mb-3">UI Developer</h3>
            <button onClick={() => handleFilterChange('Cartoon Drawing')}>Cartoon Drawing</button>
          </div>
        </div>
      </div>
      <div className="container px-5 py-5 mx-auto">
      <section className="text-gray-600 body-font">
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
                  
                  <div className="flex items-center  mt-10">
                  <Link to={`/products/${product?._id}`} className="btn bg-[#F96061] w-full font-semibold text-white">Details</Link>
                  </div>
                </div>
              </div>
            </div>)}
           
         
          
            
          </div>
        </div>
      </section>
 
  </div>
    </div>
  </div>

</section>

    );
};

export default Catagories;