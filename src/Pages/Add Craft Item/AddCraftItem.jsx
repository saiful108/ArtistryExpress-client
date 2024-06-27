import useAuth from "../../Hooks/useAuth";

const AddCraftItem = () => {
    const {user}=useAuth()
    console.log(user.displayName);
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const subcategory = form.subcategory.value;
    const price = form.price.value;
    const customization = form.customization.value;
    const image = form.image.value;
    const processing = form.processing.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const user_name=user?.displayName;
    const email=user?.email;
    const stock=form.stock.value;

    const newProduct = {
      name,
      subcategory,
      price,
      customization,
      image,
      processing,
      rating,
      description,
      user_name,
      email,
      stock
    };
    console.log(newProduct);
  };
  return (
    <div className="gadgetContainer pt-10 mx-5">
      <div className="shadow-lg p-5 border dark:bg-[#1a2641d5]">
        {/* Heading */}
        <div className="mt-5 mb-8">
          <p className="text-center text-3xl font-semibold">
            <span className="mr-3 text-[#FF497C]">
              <i className="bx bxs-alarm-add"></i>
            </span>
            <span className="dark:text-white">
              <span className="text-[#FF497C]">
                {/* {update ? "Update " : "Add "} */}
              </span>
              Your Product
            </span>
          </p>
        </div>
        {/* form */}

        <form onSubmit={handleAddProduct}>
          <div className="flex gap-8 ">
            <div className="flex-1">
              <label className="block mb-2 dark:text-white" htmlFor="name">
                Item Name
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Name"
                id="name"
                name="name"
              />

              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="subcategory"
              >
                subcategory Name
              </label>
              <select
                name="subcategory"
                id="subcategory"
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Select subcategory"
              >
                <option value="Test" selected>
                  Test1
                </option>
                <option value="Test2" selected>
                  Test2
                </option>
                <option value="Test3" selected>
                  Test3
                </option>
              </select>

              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="price"
              >
                Price
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Enter Price"
                id="Price"
                name="price"
              />


              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="customization"
              >
                Customization
              </label>
              <select
                name="customization"
                id="customization"
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Select customization"
              >
                <option value="Test" selected>
                  Yes
                </option>
                <option value="Test2" selected>
                  No
                </option>
              </select>
            </div>
            {/* Right side */}
            <div className="flex-1">
              <label className="block mb-2 dark:text-white" htmlFor="image">
                Add Product Image
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Enter Image URL"
                id="image"
                name="image"
              />
              <label
                className="block mb-2 mt-4 dark:text-white"
                htmlFor="processing"
              >
                processing_time
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Enter processing_time"
                id="processing"
                name="processing"
              />

              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="rating"
              >
                Rating
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                maxLength={5}
                max={5}
                min={0}
                type="number"
                placeholder="Enter Rating"
                id="rating"
                name="rating"
              />

            <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="stock"
              >
               Stock Status 
              </label>
              <select
                name="stock"
                id="stock"
                className="w-full p-2 border rounded-md focus:outline-[#d3446d]"
                type="text"
                placeholder="Select stock"
              >
                <option value="Test" selected>
                In stock 
                </option>
                <option value="Test2" selected>
                Made to Order
                </option>
              </select>
            </div>
            
          </div>
          <label
                className="block mb-2 mt-4 dark:text-white"
                htmlFor="description"
              >
                Description
              </label>
              <textarea className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Enter Processing Time"
                id="description"
                name="description"
              />

          <input
            className="px-4 w-full py-2 mt-4 rounded hover:bg-[#c42754]  bg-[#FF497C] duration-200 text-white cursor-pointer font-semibold"
            type="submit"
            value="Add Product"
          />
        </form>
      </div>
    </div>
  );
};

export default AddCraftItem;
