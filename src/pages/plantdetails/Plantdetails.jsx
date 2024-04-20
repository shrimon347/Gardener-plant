import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider";
import BrandUsed from "../../components/footer/BrandUsed";
import Footer from "../../components/footer/Footer";

const Plantdetails = () => {
  const plants = useLoaderData();

  const { id } = useParams();
  const _id = parseInt(id);
  const plant = plants.find((aplant) => aplant.id === _id);
  console.log(plant);

  return (
    <div>
      <Navbar></Navbar>
      <Slider />
      <div  className="max-w-7xl mx-auto">
        <div>
          <p className="text-3xl font-bold text-center mt-10 text-green-900 ">
            Plant Details
          </p>
        </div>
        <div className="container mx-auto mt-10 flex flex-wrap bg-green-900">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 overflow-hidden">
            <img
              alt="feature"
              className="object-cover object-center h-full w-full"
              src={plant.image}
            />
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 ">
            <div className="flex flex-col mb-10 p-10">
              <p className="text-3xl text-white font-bold">Description </p>
              <p className="text-md text-white pr-7 mt-10">
                {plant.plant_details}
              </p>
              <p className="text-white font-bold mt-8">
                Additional Resources:{" "}
              </p>
              <div className="ml-10">
                <a
                  href={plant.Additional_Resources}
                  className="list-item underline text-white"
                >
                  View Plant Care Guide
                </a>
              </div>
              <p className="text-white mt-10">Common Name(s) : {plant.plant_name}</p>
              <div className="flex items-center justify-between mt-10">
                <div>
                  <p className="title-font font-medium text-2xl text-white">
                    {plant.price}
                  </p>
                </div>
                <div className="flex">
                  <button className="flex ml-auto text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded">
                    <Link to="">Add to cart </Link>
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
        </div>
      </div>
      <BrandUsed />
      <Footer />
    </div>
  );
};

export default Plantdetails;
