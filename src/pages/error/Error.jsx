import { Link } from "react-router-dom";
import Title from "../../components/navbar/Title";

const Error = () => {
  Title('Error')
  return (
    <div className="container m-auto text-center">
      <p className="text-6xl text-center text-blue-500 ">404 Not Found</p>
      <Link to="/">
        <button className="btn mt-5">Back to home</button>
      </Link>
    </div>
  );
};

export default Error;
