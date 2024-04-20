import { useLoaderData } from "react-router-dom";
import BrandUsed from "../../components/footer/BrandUsed";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider";
import Footer from "../../components/footer/Footer";
import Title from "../../components/navbar/Title";

const Gallery = () => {
  Title('Gallery')
  const gallery = useLoaderData();
  return (
    <div>
      <Navbar />
      <Slider />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 mb-10">
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={gallery[1].image[0]}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={gallery[1].image[1]}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={gallery[1].image[2]}
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={gallery[2].image[1]}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={gallery[2].image[0]}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={gallery[2].image[2]}
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={gallery[3].image[1]}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={gallery[3].image[0]}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={gallery[3].image[2]}
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={gallery[4].image[1]}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={gallery[4].image[0]}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={gallery[4].image[2]}
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={gallery[5].image[1]}
                alt=""
              />
            </div>
          </div>
          <div>
            <div className="grid gap-4">
              <img
                className="h-auto max-w-full rounded-lg"
                src={gallery[5].image[0]}
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={gallery[5].image[0]}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <BrandUsed />
      <Footer />
    </div>
  );
};

export default Gallery;
