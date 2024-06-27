import { Link } from "react-router-dom";


const Catagories = () => {
    const items=[
        {
            id:1,
            title:"Category",
            img:"https://image.freepik.com/free-photo/flat-lay-wooden-table-top-view-with-copy-space_23-2148386216.jpg"
        },
        {
            id:2,
            title:"Apple",
            img:"https://image.freepik.com/free-photo/flat-lay-wooden-table-top-view-with-copy-space_23-2148386216.jpg"
        },
        {
            id:3,
            title:"Comla",
            img:"https://image.freepik.com/free-photo/flat-lay-wooden-table-top-view-with-copy-space_23-2148386216.jpg"
        },
        {
            id:4,
            title:"Comla",
            img:"https://image.freepik.com/free-photo/flat-lay-wooden-table-top-view-with-copy-space_23-2148386216.jpg"
        },
        {
            id:5,
            title:"Comla",
            img:"https://image.freepik.com/free-photo/flat-lay-wooden-table-top-view-with-copy-space_23-2148386216.jpg"
        },
        
        {
            id:6,
            title:"Comla",
            img:"https://image.freepik.com/free-photo/flat-lay-wooden-table-top-view-with-copy-space_23-2148386216.jpg"
        },
        
        {
            id:7,
            title:"Comla",
            img:"https://image.freepik.com/free-photo/flat-lay-wooden-table-top-view-with-copy-space_23-2148386216.jpg"
        },
        
        {
            id:8,
            title:"Comla",
            img:"https://image.freepik.com/free-photo/flat-lay-wooden-table-top-view-with-copy-space_23-2148386216.jpg"
        }
        
    ]
    return (                 
        <section className="text-gray-600 body-font">
  <div className="container   mx-auto">
    <div className="flex flex-wrap -m-4">
        {
         items.map(item=> <div key={item.id} className="p-4 lg:w-auto">
            <div className="h-full bg-gray-100 bg-opacity-75 mx-4  rounded-lg overflow-hidden text-center relative">
             
            
              <img className="w-48" src={item.img} alt="" />
             
              <Link className="btn btn-secondary w-full mt-5" to=''>{item.title}</Link>
             
            </div>
          </div>) 
        }
     
      
    
      
    </div>
  </div>
</section>
    );
};

export default Catagories;