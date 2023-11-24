import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import useAuth from "../../Sheard/Hooks/useAuth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { GoogleAuthProvider } from "firebase/auth";

const LogIn = () => {
    const [open, setOpen] = useState(true);
    const [error, setError] = useState('');
    const { LoginUser,loginGoogle, } = useAuth();
    const provider = new GoogleAuthProvider()
    const navigate = useNavigate();
    const location = useLocation();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {
        const email = data.email;
        const password = data.password;
        setError('')
        LoginUser(email, password)
        .then(result =>{
            if(result.user){
                reset()
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Successfull login user",
                    showConfirmButton: false,
                    background: '#5b1ae9',
                    color: '#FDFDFD',
                    timer: 1500
                  }); 
                navigate(location?.state ? location?.state : "/"); 
            }
        })
        .catch(error =>{
            setError(error.message)
        })
    }
    const hendelGoogle = ()=>{
        loginGoogle(provider)
        .then(result =>{
            if(result.user){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Successfull login user",
                    showConfirmButton: false,
                    background: '#5b1ae9',
                    color: '#FDFDFD',
                    timer: 1500
                  }); 
                navigate(location?.state ? location?.state : "/"); 
            }
        })
        .catch(error =>{
            setError(error.message)
        })
    }
    return (
        <div className=" bg-base-200 min-h-[90vh] flex items-center">
        <div className="w-11/12 mx-auto flex justify-between items-center flex-row-reverse gap-5 bg-base-200">
          <div className="md:w-[50%] hidden md:block">
            <img
              src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7863.jpg?size=626&ext=jpg&uid=R116477275&ga=GA1.1.973147496.1700747084&semt=ais"
              alt=""
              className=" rounded-lg h-[380px] w-full"
            />
          </div>
          <div className="md:w-[50%] flex justify-center ">
            <div className="  w-full max-w-xl shadow-2xl bg-base-100">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <h1 className="text-center uppercase text-3xl">Log in</h1>
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
                <div className=" flex justify-between gap-5 items-center mt-6 w-full">
                <div className="form-control w-[50%]">
                  <input
                    type="submit"
                    className="btn bg-[#7d46f5ee] hover:bg-[#5b1ae9] text-xl text-white uppercase w-full"
                  />
                </div>
                <div className="form-control w-[50%]">
                  <button onClick={hendelGoogle}
                    className="btn bg-[#7d46f5ee] hover:bg-[#5b1ae9] text-xl text-white uppercase w-full"
                  >Google</button>
                </div>
                </div>
                {error? <p className="mt-2 text-red-500">{error}</p>:''}
                <p>Don't have an accound <Link to='/signup' className="text-[#5b1ae9] underline">Please Login</Link></p>
           </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default LogIn;