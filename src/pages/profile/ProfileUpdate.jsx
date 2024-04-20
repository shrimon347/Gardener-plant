import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../authproviders/AuthProvider";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import Title from "../../components/navbar/Title";

const ProfileUpdate = () => {
  Title('Update Profile')
  const { ProfileUpdate, user } = useContext(AuthContext);
  const [displayName, setDisplayName] = useState(user.displayName || "");
  const [photoURL, setPhotoURL] = useState(user.photoURL || "");
  const navigate = useNavigate()
  const handleToUpdateProfile = (e) => {
    e.preventDefault();
    ProfileUpdate(displayName, photoURL)
      .then((res) => {
        toast.success("'Profile updated successfully");
        navigate("/")
        console.log("Profile updated successfully", res);
      })
      .catch((error) => {
        toast.error("updating profile failed, try again", error);
        console.error("Error updating profile:", error);
      });
  };
  return (
    <div>
      <Navbar />
      <div className="md:w-3/4 lg:w-1/2 mx-auto bg-green-100  px-14 py-10 shadow-xl mt-12 mb-12">
        <p className="text-3xl text-green-900 font-bold text-center my-10">
          Update Your Profile
        </p>
        <hr className="bg-white" />
        <form
          className="mt-10 w-3/3 md:w-2/3 mx-auto"
          onSubmit={handleToUpdateProfile}
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-green-900">
                Your Email
              </span>
            </label>
            <input
              type="text"
              placeholder=""
              value={user?.email}
              onChange={(e) => (e)}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-green-900">
                Your Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Display Name"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
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
              placeholder="Photo URL"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-green-900 text-white hover:bg-green-700">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileUpdate;
