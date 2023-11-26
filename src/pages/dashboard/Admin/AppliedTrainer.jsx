import { Helmet } from "react-helmet";
import useAppliedTrainer from "../../../Sheard/Hooks/useappliedTrainer";
import SectionTitle from "../../../Sheard/SectionTitle/SectionTitle";
import { FaEye } from "react-icons/fa6";
import AppliedTrainerTable from "./AppliedTrainerTable";
const AppliedTrainer = () => {
  const { tariners, isLoading, refetch } = useAppliedTrainer();
  console.log(tariners);
  return (
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
            {tariners?.map((tariner, i) => <AppliedTrainerTable key={i} refetch={refetch} tariner={tariner} i={i}/>)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppliedTrainer;
