import { useForm } from "react-hook-form";
import useAuth from "../../../Sheard/Hooks/useAuth";
import useAxios from "../../../Sheard/Hooks/useAxios";
import Swal from "sweetalert2";

const AddNewClass = () => {
    const axiosSecure = useAxios()
    const {user} = useAuth()
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    const classInfo ={
        tranier_name: data.tranier_name,
        tranier_email: data.tranier_email,
        photo: data.photo,
        notes: data.notes,
        location: data.location,
        euipment: data.euipment,
        duration: data.duration,
        deteles: data.deteles,
    }
    axiosSecure.post("/class",classInfo)
    .then(res =>{
        if (res.data.insertedId){
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Successfull added the class",
              showConfirmButton: false,
              background: "#5b1ae9",
              color: "#FDFDFD",
              timer: 2000,
            });
        }
    })
  };
  return (
    <div className="h-screen flex items-center ">
      <div className="  w-full md:w-10/12 mx-auto shadow-2xl bg-base-100 ">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <h1 className="text-2xl font-semibold text-center py-5">
            Add Now Class
          </h1>
          <div className="flex gap-5 justify-between items-center">
            <div className="form-control md:w-[50%]">
              <label className="label">
                <span className="label-text text-xl text-black">Class Name</span>
              </label>
              <input
                {...register("class", { required: true })}
                placeholder="class"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control md:w-[50%]">
              <label className="label">
                <span className="label-text text-xl text-black">Duration</span>
              </label>
              <input
                {...register("duration", { required: true })}
                placeholder="duration"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="flex gap-5 justify-between items-center">
            <div className="form-control md:w-[50%]">
              <label className="label">
                <span className="label-text text-xl text-black">Class Photo</span>
              </label>
              <input
                {...register("photo", { required: true })}
                placeholder="photo"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control md:w-[50%]">
              <label className="label">
                <span className="label-text text-xl text-black">Equipment Needed</span>
              </label>
              <input
                {...register("euipment", { required: true })}
                placeholder="euipment"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="flex gap-5 justify-between items-center">
            <div className="form-control md:w-[50%]">
              <label className="label">
                <span className="label-text text-xl text-black">Instructor Name</span>
              </label>
              <input
                {...register("tranier_name", { required: true })}
                placeholder="tranier_name"
                defaultValue={user?.displayName}
                className="input input-bordered w-full"
                readOnly
              />
            </div>
            <div className="form-control md:w-[50%]">
              <label className="label">
                <span className="label-text text-xl text-black">Instrouctor Email</span>
              </label>
              <input
                {...register("tranier_email", { required: true })}
                placeholder="tranier_email"
                defaultValue={user?.email}
                className="input input-bordered w-full"
                readOnly
              />
            </div>
          </div>
          <div className="flex gap-5 justify-between items-center">
            <div className="form-control md:w-[50%]">
              <label className="label">
                <span className="label-text text-xl text-black">Location</span>
              </label>
              <input
                {...register("location", { required: true })}
                placeholder="location"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control md:w-[50%]">
              <label className="label">
                <span className="label-text text-xl text-black">Additional Notes</span>
              </label>
              <input
                {...register("notes", { required: true })}
                placeholder="notes"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl text-black">Deteles</span>
            </label>
            <textarea
              {...register("deteles", { required: true })}
              className="input input-bordered w-full h-full"
              placeholder="deteles"
              cols="15"
              rows="5"
            ></textarea>
          </div>
          <div className="form-control md:w-1/2 mx-auto mt-3">
                  <input
                    type="submit"
                    className="py-2 bg-[#4b1ea7] hover:bg-[#5b1ae9] text-xl text-white uppercase w-full rounded-lg"
                  />
                </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewClass;
