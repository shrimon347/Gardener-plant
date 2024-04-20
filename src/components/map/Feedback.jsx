import Map from "./Map";

const Feedback = () => {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="absolute inset-0 z-10 bg-gray-300">
        <Map />
      </div>
      <div className="container px-5 py-24 mx-auto flex">
        <div className="z-50 lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative shadow-md">
          <h2 className="text-green-900 text-lg mb-1 font-medium title-font">
            Feedback
          </h2>
          <p className="leading-relaxed mb-5 text-green-900">
            Share your Feedback
          </p>
          <div className="relative mb-4">
            <label htmlFor="email" className="font-bold leading-7 text-sm text-green-900">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-green-900 font-bold"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button className="text-white bg-green-900 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded text-lg">
            Submit
          </button>
          <p className="text-xs text-gray-500 mt-3">
            Chicharrones blog helvetica normcore iceland tousled brook viral
            artisan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
