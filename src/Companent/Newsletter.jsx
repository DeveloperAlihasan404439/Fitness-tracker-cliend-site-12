import Swal from "sweetalert2";
import useAxiosPublick from "../Sheard/Hooks/useAxiosPublick";
import SectionTitle from "../Sheard/SectionTitle/SectionTitle";
import './Newsletter.css'
const Newsletter = () => {
    const axiosPublick = useAxiosPublick()
    const hendelSubscribe = e =>{
        e.preventDefault()
        const target = e.target;
        const name = target.name.value;
        const email = target.email.value;
        const userInfo = {
            name,
            email
        }
        axiosPublick.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
                target.reset()
              Swal.fire({
                position: "center",
                icon: "success",
                title: "success the subscribe now",
                showConfirmButton: false,
                background: "#5b1ae9",
                color: "#FDFDFD",
                timer: 2000,
              });
            }
          });
    }
  return (
    <>
      <SectionTitle heading="Subscribers" title="Subscribers Newsletter " />
      <section
        className=" bg-cover w-10/12 mx-auto mb-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col bg-black/60">
          <div className="container flex flex-col flex-1 px-6 py-12 mx-auto">
            <div className="w-full flex justify-center items-center">
              <div className="w-10/12 px-8 py-10 mx-auto overflow-hidden border border-white bg-black/70 shadow-2xl rounded-xl  lg:max-w-xl">
                {/* Contact form */}
                <h1 className="text-xl font-medium text-white text-center ">
                 Subscribers form
                </h1>
                <p className="mt-2 text-white text-center ">
                Your fit journey starts here subscribe !
                </p>
                <form onSubmit={hendelSubscribe} className="mt-6">
                    <div className="form-control">
                      <input
                        className="inputs inputs-alt"
                        placeholder="Type your name"
                        required=""
                        type="text"
                        name="name"
                      />
                      <span className="inputs-border inputs-border-alt"></span>
                    </div>
                    <div className="form-control">
                      <input
                        className="inputs inputs-alt"
                        placeholder="Type your email"
                        required=""
                        type="email"
                        name="email"
                      />
                      <span className="inputs-border inputs-border-alt"></span>
                    </div>
                  <button
                    type="submit"
                    className="w-full bg-[#854cff9c] mt-2 text-white text-xl space py-1 rounded-lg hover:bg-[#5B1AE9]" style={{letterSpacing: '5px'}}
                  >
                    Subscribe Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
