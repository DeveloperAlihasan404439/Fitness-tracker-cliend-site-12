import useBooking from "../../../Sheard/Hooks/useBooking";
import Loading from "../../../Sheard/Loading/Loading";
import SectionTitle from "../../../Sheard/SectionTitle/SectionTitle";

const RecommendedClass = () => {
  const { bookingUser, isLoading } = useBooking();
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="w-11/12 mx-auto mb-10">
          <SectionTitle heading="Class" title="Recommended Class" />
          <div className="grid grid-cols-1  md:grid-cols-2 gap-5">
            {bookingUser?.map((classList) => (
              <div key={classList._id}>
                <div className="border rounded-lg border-[#5b1ae9]/60">
                  <figure>
                    <img
                      src={classList.photo}
                      alt="Shoes"
                      className="w-full rounded-t-lg h-[400px]"
                    />
                  </figure>
                  <h1 className="text-center py-3 text-2xl font-medium">{classList.class_name}</h1>
                  <div className="px-5">
                  <h1 className="text-lg text-black"><span className="text-xl">Tranier name : </span>{classList.tranier_name}</h1>
                  <h1 className="text-lg text-black"><span className="text-xl">Tranier Email :  </span>{classList.tranier_email}</h1>
                  <h1 className="text-lg text-black pb-5"><span className="text-xl">Time :  </span>{classList.values}</h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RecommendedClass;
