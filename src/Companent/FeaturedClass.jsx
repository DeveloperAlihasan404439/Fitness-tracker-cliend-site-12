import useCommunity from "../Sheard/Hooks/useCommunity";
import Loading from "../Sheard/Loading/Loading";

const FeaturedClass = () => {
  const { community, isLoading } = useCommunity();
  return (
    <div>
    <h2 className="bg-transparent text-center text-3xl font-bold mb-5">
    Featured  Class
    </h2>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {community?.map((comm) => (
            <div key={comm._id} className="bg-white rounded-xl">
              <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
                <div className="flex space-x-4">
                  <img
                    alt=""
                    src={comm?.tranier_photo}
                    className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
                  />
                  <div className="flex flex-col space-y-1">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="text-sm font-semibold"
                    >
                      {comm.tranier_name}
                    </a>
                    <span className="text-xs dark:text-gray-400">
                      {comm.tranier_email}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="bg-cover overflow-hidden rounded-md">
                    <img
                      src={comm.photo}
                      alt=""
                      className="object-cover w-full mb-4 h-52 dark:bg-gray-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-500 rounded-md"
                    />
                  </div>
                  <h1 className="mb-1 text-xl font-semibold">
                    {comm.class_name}
                  </h1>
                  <p className="text-sm dark:text-gray-400">{comm.deteles}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FeaturedClass;
