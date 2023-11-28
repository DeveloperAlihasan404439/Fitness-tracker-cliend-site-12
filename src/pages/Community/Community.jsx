import { Helmet } from "react-helmet";
import SectionTitle from "../../Sheard/SectionTitle/SectionTitle";

const Community = () => {
    return (
        <div>
            
      <Helmet>
        <title>Body Pulse | Community</title>
      </Helmet>
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fEZpdG5lc3MlMjBUcmFja2VyJTIwY29tbXVuaXR5fGVufDB8fDB8fHww"
          alt=""
          className="w-full md:h-[600px]  object-center"
        />
        <div className="absolute top-0 w-full h-full flex justify-center items-center">
          <div className="w-full md:w-[70%] mx-auto border border-white/20 rounded-lg md:py-10 bg-black/70">
            <h1 className="text-center text-white  text-xl md:text-3xl font-semibold">
            Engage in friendly competitions and <br /> challenges to push yourself further.
            </h1>
            <p className="text-center md:w-10/12 mx-auto text-lg md:text-xl mt-3 text-white">
              {" "}
              FitConnect: Your fitness journey is social compass. Track progress, share wins, and find motivation within a supportive community. Join us and elevate your fitness game together!
            </p>
          </div>
        </div>
      </div>
      <SectionTitle heading="Commucity" title="Commucity From"/>
        </div>
    );
};

export default Community;