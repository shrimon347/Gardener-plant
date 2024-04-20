/* eslint-disable no-unused-vars */
import { useContext, useState} from "react";
import toast from "react-hot-toast";
import { Link,useLocation,useNavigate } from "react-router-dom";
import { AuthContext } from "../../authproviders/AuthProvider";
import Navbar from "../../components/navbar/Navbar";
import GoogleAuth from "./GoogleAuth";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Title from "../../components/navbar/Title";

const Register = () => {
  Title('Register')
  const { createUser } = useContext(AuthContext);
  const location =  useLocation()
  const navigate =  useNavigate() 
  const [showPassword, setShowPassword] = useState(false)
  const [showconfirmPassword, setShowConfirmPassword] = useState(false)
  const handleToregister = (e) => {
    e.preventDefault();
    
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const confirm_password = form.get("confirm_password");
    const photo_url = form.get("photo_url");
    const name = form.get("name");

    console.log(name, email, password, photo_url);

    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(
        password
      )
    ) {
      toast.error(
        "Password must be at least 6 characters,Uppercase-letter and special characters"
      );
      return;
    }
    if (password != confirm_password) {
      toast.error(
        "Password does't match"
      );
      return;
    }
    
    createUser(email, password)
      .then((res) => {
        toast.success("You have registered  successfully");
        navigate(location?.state ?location.state : "/")
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Please fil up your form correctly");
      });
  };
  return (
    <div>
      <Navbar />
      <div className="md:w-3/4 lg:w-1/2 mx-auto bg-green-100  px-14 py-10 shadow-xl mt-12 mb-12">
        <p className="text-3xl text-green-900 font-bold text-center my-10">
          Register Your Account
        </p>
        <hr className="bg-white" />
        <form
          className="mt-10 w-3/3 md:w-2/3 mx-auto"
          onSubmit={handleToregister}
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-green-900">
                Your Name
              </span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-green-900">
                Photo Url
              </span>
            </label>
            <input
              type="text"
              name="photo_url"
              placeholder="Enter the photo url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-green-900">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-green-900 font-bold">
                Password
              </span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input w-full input-bordered"
                required
              />
              <span
                className="cursor-pointer text-2xl absolute top-3 right-2 text-green-900"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </span>
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-green-900 font-bold">
               Confirm Password
              </span>
            </label>
            <div className="relative">
              <input
                type={ showconfirmPassword ? "text" : "password"}
                name="confirm_password"
                placeholder="password"
                className="input w-full input-bordered"
                required
              />
              <span
                className="cursor-pointer text-2xl absolute top-3 right-2 text-green-900"
                onClick={() => setShowConfirmPassword(!showconfirmPassword)}
              >
                {showconfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </span>
            </div>
          </div>
          <div className="flex items-start mt-3">
            <div className="flex items-start">
              <div className="form-control">
                <label className="cursor-pointer label">
                  <input
                    type="checkbox"
                    name="checked"
                    defaultChecked
                    className="checkbox checkbox-success"
                    required
                  />
                  <span className="label-text ml-4 text-green-900">
                  I accept the <a className="text-green-900 font-bold hover:!text-green-800 underline" href="">Terms and Conditions</a>
                  </span>
                </label>
              </div>
            </div>
            <a
              href="#"
              className="ml-auto text-sm text-green-700 hover:underline font-medium"
            >
              Forget Password?
            </a>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-green-900 text-white hover:bg-green-700">
              Register
            </button>
          </div>
          <div className="mt-8 text-center text-green-900">
            <span>
              Have An Account ?{" "}
              <Link to="/login" className="text-green-900 font-bold">
                Log In
              </Link>
            </span>
          </div>
          <div className="divider text-green-900">continue with</div>
          <GoogleAuth></GoogleAuth>
        </form>
      </div>
    </div>
  );
};

export default Register;
