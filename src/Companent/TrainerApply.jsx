import Swal from "sweetalert2";
import SectionTitle from "../Sheard/SectionTitle/SectionTitle";
import useAxiosPublick from "../Sheard/Hooks/useAxiosPublick";
import { useForm } from "react-hook-form";
import { useState } from "react";
import useAuth from "../Sheard/Hooks/useAuth";
//  images hostion
const VITE_IMAGES_HOSTING_KEY = import.meta.env.VITE_IMAGES_HOSTING_KEY;
const images_hosting_api = `https://api.imgbb.com/1/upload?key=${VITE_IMAGES_HOSTING_KEY}`;
//  images hostion
const TrainerApply = () => {
  const [values, setValues] = useState([]);
  const [selectedDay, setSelectedDay] = useState([]);
  const [selectedTime, setSelectedTime] = useState([]);
  const [loding, setLoding] = useState(false);
  const { user } = useAuth();
  const axiosPublick = useAxiosPublick();
  //----------------------- hendel maltipol skill secelect------------------------
  const handleChange = (event) => {
    const name = event.target.name;
    if (!values.includes(name)) {
      setValues([...values, name]);
    } else {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Alrady selected the day",
        showConfirmButton: false,
        background: "#5b1ae9",
        color: "#FDFDFD",
        timer: 1500,
      });
    }
  };
  //----------------------- hendel maltipol day secelect------------------------
  const handleSelectDay = (event) => {
    const day = event.target.value;

    if (day !== "Select Day") {
      if (!selectedDay.includes(day)) {
        setSelectedDay([...selectedDay, day]);
      } else {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Alrady selected the day",
          showConfirmButton: false,
          background: "#5b1ae9",
          color: "#FDFDFD",
          timer: 1500,
        });
      }
    }
  };
  const handleSelectTime = (event) => {
    const time = event.target.value;
    if (time !== "Select Time") {
      if (!selectedTime.includes(time)) {
        setSelectedTime([...selectedTime, time]);
      } else {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Alrady selected the day",
          showConfirmButton: false,
          background: "#5b1ae9",
          color: "#FDFDFD",
          timer: 1500,
        });
      }
    }
  };
  //----------------------- hendel form------------------------
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    setLoding(true);
    const fromImages = { image: data.image[0] };

    const res = await axiosPublick.post(images_hosting_api, fromImages, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    const photo = res.data?.data?.display_url;
    if (res.data?.data?.display_url) {
      setLoding(false);
      const tranirInfo = {
        discription: data.discription,
        age: data.age,
        email: data.email,
        name: data.name,
        available_time: selectedTime,
        available_day: selectedDay,
        skills: values,
        trainer_photo: photo,
        experience: data.experience,
        social: data.social,
        status: "pending",
      };
      axiosPublick.post("/tariners", tranirInfo).then((res) => {
        if (res.data.insertedId) {
          reset();
          //   setSelectedDay()
          Swal.fire({
            position: "center",
            icon: "success",
            title: "succesfull trainer apply apply",
            showConfirmButton: false,
            background: "#5b1ae9",
            color: "#FDFDFD",
            timer: 1500,
          });
        }
      });
    }
  };
  return (
    <div className="min-h-[90vh]">
      <SectionTitle heading="Trainer" title="Trainer Apply" />
      <div className="flex justify-center items-center">
        <div className="  w-full md:w-8/12 mx-auto shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="md:flex justify-center items-center gap-5">
              <div className="form-control w-full md:w-[50%]">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  defaultValue={user?.displayName}
                  placeholder="name"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control w-full md:w-[50%]">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  defaultValue={user?.email}
                  placeholder="email"
                  className="input input-bordered w-full"
                  readOnly
                />
              </div>
            </div>
            <div className="md:flex justify-center items-center gap-5">
              <div className="form-control w-full md:w-[50%]">
                <label className="label">
                  <span className="label-text">Age</span>
                </label>
                <input
                  {...register("age", { required: true })}
                  placeholder="age"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control w-full md:w-[50%]">
                <label className="label">
                  <span className="label-text">Available Time</span>
                </label>
                <select
                  onChange={handleSelectTime}
                  name="day"
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
            <div className="md:flex justify-center items-center gap-5">
              <div className="form-control w-full md:w-[50%]">
                <label className="label">
                  <span className="label-text">Available Day</span>
                </label>
                <select
                  onChange={handleSelectDay}
                  name="day"
                  className="input input-bordered w-full"
                >
                  <option>Select Day</option>
                  <option value="Saturday">Saturday</option>
                  <option value="Sunday">Sunday</option>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                </select>
              </div>

              <div className="form-control w-full md:w-[50%]">
                <label className="label">
                  <span className="label-text">Years of Experience</span>
                </label>
                <input
                  {...register("experience", { required: true })}
                  placeholder="age"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="md:flex justify-center items-center gap-5">
              <div className="form-control w-full md:w-[50%]">
              <label className="label">
                  <span className="label-text">Social icons</span>
                </label>
                <input
                  {...register("social", { required: true })}
                  placeholder="age"
                  type='url'
                  className="input input-bordered w-full"
                />
              </div>

              
            <div className="form-control w-full md:w-[50%]">
              <label className="label">
                <span className="label-text">Profile Image</span>
              </label>
              <input
                {...register("image")}
                type="file"
                className="file-input mt-3 file-input-bordered w-full "
              />
            </div>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Discription</span>
              </label>
              <textarea
                {...register("discription", { required: true })}
                cols="10"
                rows="5"
                placeholder="type your discription"
                className="input input-bordered h-full w-full"
              ></textarea>
            </div>
            <div>
              <label className="label">
                <span className="label-text">Select Skill</span>
              </label>
              <div className="flex flex-wrap gap-5">
                <div className="w-fit">
                  <div className="form-control">
                    <label
                      className="label cursor-pointer"
                      htmlFor="Communication"
                    >
                      <input
                        type="checkbox"
                        id="Communication"
                        name="Communication"
                        onChange={handleChange}
                        className="checkbox checkbox-primary"
                      />
                      <span className="label-text pl-2">Communication</span>
                    </label>
                  </div>
                </div>
                <div className="w-fit">
                  <div className="form-control">
                    <label
                      className="label cursor-pointer"
                      htmlFor="Motivation"
                    >
                      <input
                        type="checkbox"
                        id="Motivation"
                        name="Motivation"
                        onChange={handleChange}
                        className="checkbox checkbox-primary"
                      />
                      <span className="label-text pl-2">Motivation</span>
                    </label>
                  </div>
                </div>
                <div className="w-fit">
                  <div className="form-control">
                    <label
                      className="label cursor-pointer"
                      htmlFor="Leadership"
                    >
                      <input
                        type="checkbox"
                        id="Leadership"
                        name="Leadership"
                        onChange={handleChange}
                        className="checkbox checkbox-primary"
                      />
                      <span className="label-text pl-2">Leadership</span>
                    </label>
                  </div>
                </div>
                <div className="w-fit">
                  <div className="form-control">
                    <label
                      className="label cursor-pointer"
                      htmlFor="Organization"
                    >
                      <input
                        type="checkbox"
                        id="Organization"
                        name="Organization"
                        onChange={handleChange}
                        className="checkbox checkbox-primary"
                      />
                      <span className="label-text pl-2">Organization</span>
                    </label>
                  </div>
                </div>
                <div className="w-fit">
                  <div className="form-control">
                    <label
                      className="label cursor-pointer"
                      htmlFor="nutritional"
                    >
                      <input
                        type="checkbox"
                        id="nutritional"
                        name="Nutritional Knowledge"
                        onChange={handleChange}
                        className="checkbox checkbox-primary"
                      />
                      <span className="label-text pl-2">
                        Nutritional Knowledge
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-control">
              {loding ? (
                <button type="submit" className="btn">
                  Waiting...
                </button>
              ) : (
                <button type="submit" className="btn">
                  Make Apply
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TrainerApply;
