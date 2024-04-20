/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const Plant = ({ plant }) => {
  const { id, image, plant_name, category, price, plant_details } = plant;
  return (
    <div className="text-gray-600 body-font overflow-hidden">
      {(id % 2 == 1) ? (
        <section data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="3000" className="text-gray-600 body-font overflow-hidden ">
          <div className="container px-5 py-10 mx-auto">
            <div  className="lg:w-4/5 mx-auto flex items-center flex-wrap">
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                src={image}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <p className="text-green-900 text-3xl title-font font-medium mb-1">
                  {plant_name}
                </p>
                <p className="text-md font-medium py-2">
                  Category : {category}
                </p>
                <p className="leading-relaxed text-xl font-serif">
                  {plant_details.slice(0, 200)} ............
                </p>

                <div className="flex mt-10">
                  <span className="title-font font-medium text-2xl text-green-900">
                    {price}
                  </span>
                  <button className="flex ml-auto text-white bg-green-900 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded">
                    <Link to={`/plantdetails/${id}`}>View Details </Link>
                  </button>
                  <button className="rounded-full w-10 h-10 bg-green-200 p-0 border-0 inline-flex items-center justify-center text-green-500 ml-4">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="3000" className="container px-5 py-10 mx-auto ">
          <div className="lg:w-4/5 mx-auto flex items-center flex-wrap md:flex-row flex-col-reverse">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <p className="text-green-900 text-3xl title-font font-medium mb-1">
                {plant_name}
              </p>
              <p className="text-md font-medium py-2">Category : {category}</p>
              <p className="leading-relaxed text-xl font-serif">
                {plant_details.slice(0, 200)} ............
              </p>
              <div className="flex mt-10">
                <span className="title-font font-medium text-2xl text-green-900">
                  {price}
                </span>
                <button className="flex ml-auto text-white bg-green-900 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded">
                <Link to={`/plantdetails/${id}`}>View Details </Link>
                </button>
                <button className="rounded-full w-10 h-10 bg-green-200 p-0 border-0 inline-flex items-center justify-center text-green-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={image}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Plant;
