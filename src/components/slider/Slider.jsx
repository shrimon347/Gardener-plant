import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import back1 from "../../assets/image/background1.jpg";
import back2 from "../../assets/image/background2.jpg";
import back3 from "../../assets/image/background3.jpg";

const Slider = () => {
  return (
    <div className="mx-auto">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
            nextEl: '.button-next-slide',
            prevEl: '.button-prev-slide',
        }}
        modules={[Navigation]}
        className="relative group"
      >
        <SwiperSlide>
          <div className="relative">
            <img src={back1} alt="" className="h-[800px] w-[100%]" />
            <div className="absolute top-[28%] left-[17%]">
              <h3 className="text-5xl py-5 text-green-800 font-bold">
                Welcome to a real plant family
              </h3>
              <p className="text-xl py-5 text-black ">
                Plants are intelligent forms of life who are capable of
                intention,Guest <br /> Posting preference, and a will to
                survive, thrive and interact.Plants are intelligent <br /> forms
                of life who are capable of intention,Guest Posting preference,
                and a will to survive, thrive and interact.
              </p>
              <button className="bg-green-900 text-white w-[25%] p-3">
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative">
            <img src={back2} alt="" className="h-[800px] w-[100%]" />
            <div className="absolute top-[28%] left-[17%]">
              <h3 className="text-5xl py-5 text-green-800 font-bold">
                Welcome to a real plant family
              </h3>
              <p className="text-xl py-5 text-black ">
                Plants are intelligent forms of life who are capable of
                intention,Guest <br /> Posting preference, and a will to
                survive, thrive and interact.Plants are intelligent <br /> forms
                of life who are capable of intention,Guest Posting preference,
                and a will to survive, thrive and interact.
              </p>
              <button className="bg-green-900 text-white w-[25%] p-3">
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative">
            <img src={back3} alt="" className="h-[800px] w-[100%]" />
            <div className="absolute top-[28%] left-[17%]">
              <h3 className="text-5xl py-5 text-green-800 font-bold">
                Welcome to a real plant family
              </h3>
              <p className="text-xl py-5 text-black ">
                Plants are intelligent forms of life who are capable of
                intention,Guest <br /> Posting preference, and a will to
                survive, thrive and interact.Plants are intelligent <br /> forms
                of life who are capable of intention,Guest Posting preference,
                and a will to survive, thrive and interact.
              </p>
              <button className="bg-green-900 text-white w-[25%] p-3">
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>
        <div className="top-[50%] absolute z-10 button-next-slide group-hover:left-0 -left-[23rem] text-white w-[50px] h-[50px] bg-green-800 grid place-items-center cursor-pointer">
          <FaArrowLeftLong />
        </div>
        <div className="top-[50%] absolute z-10 button-prev-slide group-hover:right-0 -right-[23rem] text-white w-[50px] h-[50px] bg-green-800 grid place-items-center cursor-pointer">
          <FaArrowRightLong />
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
