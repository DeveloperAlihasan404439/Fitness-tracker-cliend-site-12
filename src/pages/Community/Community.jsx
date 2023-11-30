import { Helmet } from "react-helmet";
import SectionTitle from "../../Sheard/SectionTitle/SectionTitle";
import useCommunity from "../../Sheard/Hooks/useCommunity";
import Loading from "../../Sheard/Loading/Loading";
const Community = () => {
  const { community, isLoading, refetch } = useCommunity();
  console.log(community);
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
              Engage in friendly competitions and <br /> challenges to push
              yourself further.
            </h1>
            <p className="text-center md:w-10/12 mx-auto text-lg md:text-xl mt-3 text-white">
              {" "}
              FitConnect: Your fitness journey is social compass. Track
              progress, share wins, and find motivation within a supportive
              community. Join us and elevate your fitness game together!
            </p>
          </div>
        </div>
      </div>
      <SectionTitle heading="Commucity" title="Commucity From" />
      {isLoading ? (
        <Loading />
      ) : (
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {community?.map((comm) => (
            <div key={comm._id} className="bg-[#1F2937] text-white rounded-xl">
              <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md">
                <div className="flex space-x-4">
                  <img
                    alt=""
                    src={comm?.tranier_photo}
                    className="object-cover w-12 h-12 rounded-full shadow"
                  />
                  <div className="flex flex-col space-y-1">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="text-lg font-semibold uppercase"
                    >
                      {comm.tranier_name}
                    </a>
                    <span className="text-xs">
                      {comm.tranier_email}
                    </span>
                  </div>
                </div>
                <div>
                  <img
                    src={comm.photo}
                    alt=""
                    className="object-cover w-full mb-4 h-52 rounded"
                  />
                  <h1 className="mb-1 text-xl font-semibold">
                    {comm.class_name}
                  </h1>
                  <p className="text-sm">{comm.deteles}</p>

                  <div className=" flex items-center justify-end gap-5 text-3xl mt-5 text-right">
                    <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      aria-label="Number of likes"
                      className="w-10 h-10 fill-current text-violet-400"
                    >
                      <path d="M126.638,202.672H51.986a24.692,24.692,0,0,0-24.242,19.434,487.088,487.088,0,0,0-1.466,206.535l1.5,7.189a24.94,24.94,0,0,0,24.318,19.78h74.547a24.866,24.866,0,0,0,24.837-24.838V227.509A24.865,24.865,0,0,0,126.638,202.672ZM119.475,423.61H57.916l-.309-1.487a455.085,455.085,0,0,1,.158-187.451h61.71Z"></path>
                      <path d="M494.459,277.284l-22.09-58.906a24.315,24.315,0,0,0-22.662-15.706H332V173.137l9.573-21.2A88.117,88.117,0,0,0,296.772,35.025a24.3,24.3,0,0,0-31.767,12.1L184.693,222.937V248h23.731L290.7,67.882a56.141,56.141,0,0,1,21.711,70.885l-10.991,24.341L300,169.692v48.98l16,16H444.3L464,287.2v9.272L396.012,415.962H271.07l-86.377-50.67v37.1L256.7,444.633a24.222,24.222,0,0,0,12.25,3.329h131.6a24.246,24.246,0,0,0,21.035-12.234L492.835,310.5A24.26,24.26,0,0,0,496,298.531V285.783A24.144,24.144,0,0,0,494.459,277.284Z"></path>
                    </svg>
                    </button>
                    <span>0</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Community;
