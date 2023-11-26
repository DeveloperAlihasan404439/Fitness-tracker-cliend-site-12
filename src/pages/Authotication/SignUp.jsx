import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import useAuth from "../../Sheard/Hooks/useAuth";
import { updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublick from "../../Sheard/Hooks/useAxiosPublick";
//  images hostion
const VITE_IMAGES_HOSTING_KEY = import.meta.env.VITE_IMAGES_HOSTING_KEY;
const images_hosting_api = `https://api.imgbb.com/1/upload?key=${VITE_IMAGES_HOSTING_KEY}`;
//  images hostion
const SignUp = () => {
  const [open, setOpen] = useState(true);
  const { createUser, logout } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const axiosPublick = useAxiosPublick();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    setError("");
    const fromImages = { image: data.image[0] };
    const res = await axiosPublick.post(images_hosting_api, fromImages, {
      headers: {
        "content-type": "multipart/form-data",
      }
    })
    const photo = res.data?.data?.display_url;
    if (res.data.success) {
      const name = data.name;
      const email = data.email;
      const password = data.password;
      createUser(email, password)
        .then((result) => {
          updateProfile(result.user, {
            displayName: name,
            photoURL: photo,
          }).then(() => {
            const userInfo = {
              name,
              email,
            };
            axiosPublick.post("/users", userInfo).then((res) => {
              if (res.data.insertedId) {
                logout();
                reset();
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Your work has been saved",
                  showConfirmButton: false,
                  background: "#5b1ae9",
                  color: "#FDFDFD",
                  timer: 1500,
                });
                navigate("/login");
              }
            });
          });
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  };
  return (
    <div className=" bg-base-200 min-h-[90vh] flex items-center">
      <div className="w-11/12 mx-auto flex justify-between items-center flex-row-reverse gap-5 bg-base-200">
        <div className="md:w-[50%] hidden md:block">
          <img
            src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7865.jpg?size=626&ext=jpg&uid=R116477275&ga=GA1.1.973147496.1700747084&semt=sph"
            alt=""
            className=" rounded-lg h-[520px] w-full"
          />
        </div>
        <div className="md:w-[50%] flex justify-center ">
          <div className="  w-full max-w-xl shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h1 className="text-center uppercase text-3xl">Sign Up</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    {...register("password", { required: true })}
                    type={open ? "password" : "text"}
                    placeholder="password"
                    className="input input-bordered w-full"
                  />
                  <span
                    onClick={() => setOpen(!open)}
                    className="absolute top-3 right-3"
                  >
                    {open ? (
                      <FaEye className="text-2xl text-[#5b1ae9]"></FaEye>
                    ) : (
                      <FaEyeSlash className="text-2xl text-[#5b1ae9]"></FaEyeSlash>
                    )}
                  </span>
                </div>
              </div>
              <input
                {...register("image")}
                type="file"
                className="file-input mt-3 file-input-bordered w-full max-w-xs"
              />
              <div className="form-control">
                <input
                  type="submit"
                  className="btn bg-[#7d46f5ee] hover:bg-[#5b1ae9] text-xl text-white uppercase"
                />
              </div>
              {error ? <p>{error}</p> : ""}
              <p>
                Already have an accound{" "}
                <Link to="/login" className="text-[#5b1ae9] underline">
                  Please Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
