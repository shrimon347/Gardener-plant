/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../authproviders/AuthProvider";
import Navbar from "../../components/navbar/Navbar";
import GoogleAuth from "./GoogleAuth";
import Title from "../../components/navbar/Title";

const Login = () => {
  Title('Login')
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    signIn(email, password)
      .then((result) => {
        toast.success("User logged in successfully");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error("your email or password is incorrect");
      });
  };

  return (
    <div>
      <Navbar />
      <div className="md:w-3/4 lg:w-1/2 mx-auto bg-green-100  px-14 py-10 shadow-xl mt-12 mb-12">
        <p className="text-3xl text-green-900 font-bold text-center my-10">
          Login Your Account
        </p>
        <hr className="bg-white" />
        <form className="mt-10 w-3/3 md:w-2/3 mx-auto" onSubmit={handleLogin}>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-green-900 font-bold">Email</span>
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
          <div className="flex items-start mt-3">
            <div className="flex items-start">
              <div className="form-control">
                <label className="cursor-pointer label">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox checkbox-success"
                  />
                  <span className="label-text ml-4 text-green-900">
                    Remember me
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
              Login
            </button>
          </div>
          <div className="mt-8 text-center">
            <span className="text-green-900">
              Dont’t Have An Account ?
              <Link to="/register" className="text-green-900 font-bold">
                Register
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

export default Login;
