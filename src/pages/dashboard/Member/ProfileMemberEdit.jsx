import { useForm } from "react-hook-form";
import useAuth from "../../../Sheard/Hooks/useAuth";
import { useState } from "react";
import useUsers from "../../../Sheard/Hooks/useUsers";
import useAxiosPublick from "../../../Sheard/Hooks/useAxiosPublick";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
//  images hostion
const VITE_IMAGES_HOSTING_KEY = import.meta.env.VITE_IMAGES_HOSTING_KEY;
const images_hosting_api = `https://api.imgbb.com/1/upload?key=${VITE_IMAGES_HOSTING_KEY}`;
//  images hostion
const ProfileMemberEdit = () => {
  const [open, setOpen] = useState(true);
  const { user } = useAuth();
  const axiosPublick = useAxiosPublick()
  const { usersData } = useUsers();
  const navigate = useNavigate()
  const singleUser = usersData.find(
    (singleUser) => singleUser.email === user?.email
  );
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    setOpen(false)
    const fromImages = { image: data.image[0] };
    const res = await axiosPublick.post(images_hosting_api, fromImages, {
      headers: {
        "content-type": "multipart/form-data",
      }
    })
    if (res.data.success) {
        setOpen(true)
        const userInfo ={
            name: user.displayName,
            email: user.email,
            photo:res.data?.data?.display_url,
            location: data.location,
            phone: data.phone,
            age: data.age,
            gender: data.gender,
        }
        axiosPublick.put(`/users/${singleUser._id}`, userInfo).then((res) => {
            if (res.data.modifiedCount>0) {
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
              navigate("dashboard/profile");
            }
          });
    }
  };
  return (
    <div className="bg-[#321572] min-h-screen flex justify-center items-center">
      <div className="  w-full md:w-10/12 mx-auto md:shadow-2xl bg-[#6f2cff] rounded-xl ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card-body text-white"
        >
          <h1 className="text-2xl font-semibold text-center py-5 mt-5">
            Updated your Profile
          </h1>
          <div className="md:flex gap-5 justify-between items-center">
            <div className="form-control w-full md:w-[50%]">
              <label className="label">
                <span className="label-text text-xl text-white"> Name</span>
              </label>
              <input
                {...register("name", { required: true })}
                placeholder="name"
                defaultValue={user?.displayName}
                className="input input-bordered w-full text-black"
              />
            </div>
            <div className="form-control w-full md:w-[50%]">
              <label className="label">
                <span className="label-text text-xl text-white">Gender</span>
              </label>
              <input
                {...register("gender", { required: true })}
                placeholder="gender"
                defaultValue={singleUser?.gender}
                className="input input-bordered w-full text-black"
              />
            </div>
          </div>
          <div className="md:flex gap-5 justify-between items-center">
            <div className="form-control w-full md:w-[50%]">
              <label className="label">
                <span className="label-text text-xl text-white">Location</span>
              </label>
              <input
                {...register("location", { required: true })}
                placeholder="location"
                defaultValue={singleUser?.location}
                className="input input-bordered w-full text-black"
              />
            </div>
            <div className="form-control w-full md:w-[50%]">
              <label className="label">
                <span className="label-text text-xl text-white">Phone</span>
              </label>
              <input
                {...register("phone", { required: true })}
                placeholder="phone"
                defaultValue={singleUser?.phone}
                className="input input-bordered w-full text-black"
              />
            </div>
          </div>
          <div className="md:flex gap-5 justify-between items-center">
            <div className="form-control w-full md:w-[50%]">
              <label className="label">
                <span className="label-text text-xl text-white">Age</span>
              </label>
              <input
                {...register("age", { required: true })}
                placeholder="age"
                defaultValue={singleUser?.age}
                className="input input-bordered w-full text-black"
              />
            </div>
            <div className="form-control w-full md:w-[50%]">
              <label className="label">
                <span className="label-text text-xl text-white">Photo</span>
              </label>
              <input
                {...register("image")}
                type="file"
                className="file-input mt-3 file-input-bordered w-full max-w-xs text-black"
              />
            </div>
          </div>
          <div className="form-control md:w-1/2 mx-auto mt-3">
            {open ? (
              <input
                type="submit"
                className="py-2 bg-[#4b1ea7] hover:bg-[#5b1ae9] text-xl text-white uppercase w-full rounded-lg"
              />
            ) : (
              <button className="py-2 bg-[#4b1ea7] hover:bg-[#5b1ae9] text-xl text-white uppercase w-full rounded-lg">
                Wating...
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileMemberEdit;
