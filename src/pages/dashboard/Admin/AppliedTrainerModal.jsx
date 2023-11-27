const AppliedTrainerModal = ({ modalData,hendelUpdatedData }) => {
  return (
    <div>
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box w-11/12 max-w-5xl bg-black/90 text-white border-2 border-white">
          <div className="w-full flex justify-center items-center gap-8">
            <img
              src={modalData.trainer_photo}
              alt=""
              className="w-[200px] h-[200px] rounded-[50%]"
            />
            <div>
              <h1 className="text-3xl font-medium">Name : {modalData.name}</h1>
              <h1 className="text-xl font-medium py-2">
                Email : {modalData.email}
              </h1>
              <h1 className="text-xl font-medium pb-2">
                Age : {modalData.age} year
              </h1>
              <h1 className="text-xl font-medium pb-2">
              Years of Experience : {modalData.experience}
              </h1>
              <div className="flex justify-between gap-10 mt-5">
                <div>
                  <h1 className="text-2xl text-orange-600 font-semibold pb-4">
                    Available day
                  </h1>
                  {modalData?.available_day?.map((day, index) => (
                    <div key={index}>
                      <h1 className="text-xl font-medium pb-1">
                        <span>{index + 1}</span> Perday : {day}{" "}
                      </h1>
                    </div>
                  ))}
                </div>
                <div>
                  <h1 className="text-2xl text-orange-600 font-semibold pb-4">
                    Ailable Slot.
                  </h1>
                  {modalData?.available_time?.map((day, index) => (
                    <div key={index}>
                      <h1 className="text-xl font-medium pb-1">
                        <span>{index + 1}</span> Slot. : {day}{" "}
                      </h1>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-wrap gap-5 mt-5 justify-center">
              {modalData?.skills?.map((skils, index) => (
                <div key={index}>
                  <h1 className="text-xl font-medium pb-1">
                    <span>{index + 1} - </span> Skill : {skils}{" "}
                  </h1>
                </div>
              ))}
            </div>
            <p className="text-lg text-center  mt-5 w-10/12 mx-auto">
              {modalData.discription}
            </p>
          </div>
        <div className="flex  justify-center items-center">

          <button onClick={()=>hendelUpdatedData(modalData._id)} className="btn text-2xl font-medium uppercase">
          <label htmlFor="my_modal_7">
            confirmation
          </label>
          </button>
          <button className="btn  text-2xl font-medium uppercase">
            rejected
          </button>
          <label className="btn" htmlFor="my_modal_7">
            Close
          </label>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedTrainerModal;
