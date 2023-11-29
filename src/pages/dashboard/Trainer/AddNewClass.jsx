import { useForm } from "react-hook-form";
import useAuth from "../../../Sheard/Hooks/useAuth";
import useAxios from "../../../Sheard/Hooks/useAxios";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const AddNewClass = () => {
    const axiosSecure = useAxios()
    const {user} = useAuth()
    const [values, setValues] = useState('');
    const [tariners, setTariners] = useState([])
    useEffect(()=>{
      axiosSecure.get('/confrimTariners')
      .then(res =>{
        setTariners(res.data)

      })
    },[axiosSecure])
    
    const tariner = tariners?.find(trainer => trainer?.email === user?.email)
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    let items = []

    if(parseInt(data.price) < 100){
       const class_items = {price:data.price, item: "Sliver"}
      items.push(class_items)
    }
    else if(parseInt(data.price) < 200){
      const class_items = {price:data.price, item: "Gold"}
      items.push(class_items)
    }
    else{
      const class_items = {price:data.price, item: "Diamond"}
      items.push(class_items)
    }
     const classInfo ={
        tranier_name: data.tranier_name,
        tranier_email: data.tranier_email,
        photo: data.photo,
        notes: data.notes,
        location: data.location,
        euipment: data.euipment,
        duration: data.duration,
        deteles: data.deteles,
        class_name: data.class_name,
        tranier_photo: tariner.trainer_photo,
        items,
        values
    }
    axiosSecure.post("/class",classInfo)
    .then(res =>{
        if (res.data.insertedId){
          reset()
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
    <div className="py-5 ">
      <div className="  w-full md:w-10/12 mx-auto md:shadow-2xl bg-base-100 ">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <h1 className="text-2xl font-semibold text-center py-5 mt-5">
            Add Now Class
          </h1>
          <div className="md:flex gap-5 justify-between items-center">
            <div className="form-control w-full md:w-[50%]">
              <label className="label">
                <span className="label-text text-xl text-black">Class Name</span>
              </label>
              <input
                {...register("class_name", { required: true })}
                placeholder="class"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full md:w-[50%]">
              <label className="label">
                <span className="label-text text-xl text-black">Class Photo</span>
              </label>
              <input
                {...register("photo", { required: true })}
                placeholder="photo"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="md:flex gap-5 justify-between items-center">
            <div className="form-control w-full md:w-[50%]">
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
            <div className="form-control w-full md:w-[50%]">
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
          <div className="md:flex gap-5 justify-between items-center">
            <div className="form-control w-full md:w-[50%]">
              <label className="label">
                <span className="label-text text-xl text-black">Price</span>
              </label>
              <input
                {...register("price", { required: true })}
                placeholder="price"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full md:w-[50%]">
            <label className="label">
                  <span className="label-text">Items</span>
                </label>
                <select
                  onChange={(e)=>setValues(e.target.value)}
                  name="item"
                  className="input input-bordered w-full"
                >
                  <option>Select Time</option>
                  <option value="04.00pm-05.00pm">04.00pm-05.00pm</option>
                  <option value="05.00pm-06.00pm">05.00pm-06.00pm</option>
                  <option value="06.00pm-07.00pm">06.00pm-07.00pm</option>
                  <option value="07.00pm-08.00pm">07.00pm-08.00pm</option>
                </select>
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
