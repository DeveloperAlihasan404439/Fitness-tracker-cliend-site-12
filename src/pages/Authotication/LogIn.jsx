import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import useAuth from "../../Sheard/Hooks/useAuth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublick from "../../Sheard/Hooks/useAxiosPublick";
import "./LogIn.css";
const LogIn = () => {
  const [open, setOpen] = useState(true);
  const [error, setError] = useState("");
  const { LoginUser, loginGoogle } = useAuth();
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublick = useAxiosPublick();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    const email = data.email;
    const password = data.password;
    setError("");
    LoginUser(email, password)
      .then((result) => {
        if (result.user) {
          reset();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfull login user",
            showConfirmButton: false,
            background: "#5b1ae9",
            color: "#FDFDFD",
            timer: 1500,
          });
          navigate(location?.state ? location?.state : "/");
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const hendelGoogle = () => {
    loginGoogle(provider)
      .then((result) => {
        if (result?.user) {
          const userInfo = {
            email: result.user?.email,
            name: result.user?.displayName,
          };
          axiosPublick.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              reset();
              Swal.fire({
                position: "center",
                icon: "success",
                title: "successfull has the google login",
                showConfirmButton: false,
                background: "#5b1ae9",
                color: "#FDFDFD",
                timer: 1500,
              });
              navigate(location?.state ? location?.state : "/");
            }
          });
          Swal.fire({
            position: "center",
            icon: "success",
            title: "successfull has the google login",
            showConfirmButton: false,
            background: "#5b1ae9",
            color: "#FDFDFD",
            timer: 1500,
          });
          navigate(location?.state ? location?.state : "/");
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const wrapper = document.querySelector(".wrapper");
  function registerLink(){
    wrapper.classList.add('active')
  }
  function loginLink(){
    wrapper.classList.remove('active')
  }
  return (
    <div className="body">
      <div className="wrapper">
        <span className="bg-animate"></span>
        <span className="bg-animate2"></span>
        <div className="form-box login">
          <h2 className="animations" style={{'--i':0, '--j':21}}>Login</h2>
          <form action="#">
            <div className="input-box animations" style={{'--i':1, '--j':22}}>
              <input type="email" required />
              <label htmlFor="">Email</label>
              <box-icon name="envelope" type="solid"></box-icon>
            </div>
            <div className="input-box animations" style={{'--i':2, '--j':23}}>
              <input type="password" required />
              <label htmlFor="">Password</label>
              <box-icon type="solid" name="lock-alt"></box-icon>
            </div>
            <button type="submit" className="button animations" style={{'--i':3, '--j':24}}>
              Login
            </button>
            <div className="logreg-link animations" style={{'--i':4, '--j':25}}>
              <p>
                Don't have an acceount?{" "}
                <a onClick={registerLink} href="#" className="register-link">
                  Sign Up
                </a>
              </p>
            </div>
          </form>
        </div>
        <div className="info-text login">
          <h2 className="animations"  style={{'--i':0,'--j':20}}>Welcome Back !</h2>
          <p className="animations"  style={{'--i':1, '--j':21}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
        </div>

        <div className="form-box register">
          <h2 className="animations" style={{'--i':17, '--j':0}}>Sign Up</h2>
          <form action="#">
            <div className="input-box animations" style={{'--i':18, '--j':1}}>
              <input type="text" required />
              <label htmlFor="">User Name</label>
              <box-icon name="envelope" type="solid"></box-icon>
            </div>
            <div className="input-box animations" style={{'--i':19, '--j':2}}>
              <input type="email" required />
              <label htmlFor="">Email</label>
              <box-icon name="envelope" type="solid"></box-icon>
            </div>

            <div className="input-box animations" style={{'--i':20, '--j':3}}>
              <input type="password" required />
              <label htmlFor="">Password</label>
              <box-icon type="solid" name="lock-alt"></box-icon>
            </div>
            <button type="submit" className="button animations" style={{'--i':21, '--j':4}}>
              Sign Up
            </button>
            <div className="logreg-link animations"  style={{'--i':22, '--j':5}}>
              <p>
                Already have an acceount?{" "}
                <a onClick={loginLink} href="#" className="login-link">
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
        <div className="info-text register">
          <h2 className="animations"  style={{'--i':17, '--j':1}}>Welcome Back !</h2>
          <p className="animations" style={{'--i':18, '--j':1}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
