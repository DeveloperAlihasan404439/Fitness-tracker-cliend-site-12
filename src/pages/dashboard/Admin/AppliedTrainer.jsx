import { Helmet } from "react-helmet";
import useAppliedTrainer from "../../../Sheard/Hooks/useappliedTrainer";
import SectionTitle from "../../../Sheard/SectionTitle/SectionTitle";
import AppliedTrainerTable from "./AppliedTrainerTable";
import { useState } from "react";
import AppliedTrainerModal from "./AppliedTrainerModal";
import useAxios from "../../../Sheard/Hooks/useAxios";
import Swal from "sweetalert2";
const AppliedTrainer = () => {
  const { tariners, refetch } = useAppliedTrainer();
  const [modalData, setModalData] = useState({});
  const axiosSecure = useAxios();
  const hendelClick = (tariner) => {
    setModalData(tariner);
  };

  const hendelUpdatedData = (id) => {
    axiosSecure.put(`/tariners/${id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        const modifiedCount = {
          discription: modalData.discription,
          trainer_photo: modalData.trainer_photo,
          skills: modalData.skills,
          available_day: modalData.available_day,
          available_time: modalData.available_time,
          name: modalData.name,
          email: modalData.email,
          age: modalData.age,
          experience: modalData.experience,
          social: modalData.social,
          status: "trainer",
        };
        axiosSecure.post(`/confrimTariners`, modifiedCount).then((res) => {
          if (res.data.insertedId) {
            axiosSecure.delete(`/confrimTariners?id=${id}`).then((res) => {
              if (res.data.deletedCount > 0) {
                refetch();
                const modalCheckbox = document.getElementById("my_modal_7");
                if (modalCheckbox) {
                  modalCheckbox.checked = false;
                }
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Successfull modal data updated post and delete",
                  showConfirmButton: false,
                  background: "#5b1ae9",
                  color: "#FDFDFD",
                  timer: 2000,
                });
                
              }
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <div>
        <Helmet>
          <title>Body Pulse | Apply All</title>
        </Helmet>
        <SectionTitle heading="Trainer" title="Apply All Trainer" />

        <div className="w-10/12 mx-auto overflow-x-auto border-x-2  rounded-t-[30px]">
          <table className="table">
            <thead>
              <tr className="w-full bg-[#5b1ae9] text-white ">
                <th></th>
                <th className="text-xl">NAME</th>
                <th className="text-xl">EMAIL</th>
                <th className="text-xl">STATUE</th>
                <th className="text-xl flex-1 text-center">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {tariners?.map((tariner, i) => (
                <AppliedTrainerTable
                  key={i}
                  refetch={refetch}
                  tariner={tariner}
                  i={i}
                  hendelClick={hendelClick}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {modalData && (
        <AppliedTrainerModal
          modalData={modalData}
          hendelUpdatedData={hendelUpdatedData}
        ></AppliedTrainerModal>
      )}
    </div>
  );
};

export default AppliedTrainer;
