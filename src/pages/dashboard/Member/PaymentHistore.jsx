import usePaymentHistore from "../../../Sheard/Hooks/usePaymentHistore";
import Loading from "../../../Sheard/Loading/Loading";
import SectionTitle from "../../../Sheard/SectionTitle/SectionTitle";
import moment from "moment";
moment().format();
const PaymentHistore = () => {
  const { paymentInfonmation, isLoading } = usePaymentHistore();
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <SectionTitle heading="Payment" title="Membor Payment History" />
          <div className="w-10/12 mx-auto overflow-x-auto border-x-2  rounded-t-[30px]">
            <table className="table">
              <thead>
                <tr className="w-full bg-[#5b1ae9] text-white ">
                  <th></th>
                  <th className="text-xl">NAME</th>
                  <th className="text-xl">EMAIL</th>
                  <th className="text-xl">Price</th>
                  <th className="text-xl flex-1 text-center">Day</th>
                </tr>
              </thead>
              <tbody>
                {paymentInfonmation?.map((tariner, i) => (
                  <tr key={i} className="bg-base-100 border-b-2 border-black">
                    <th className="w-[50px]">{i + 1}</th>
                    <td className="w-[200px] text-left text-lg">
                      {tariner.tranier_name}
                    </td>
                    <td className="text-lg text-black w-[300px] text-left">
                      {tariner.tranier_email}
                    </td>
                    <td className="text-lg text-black text-left">
                      {tariner.price}
                    </td>
                    <td className="text-lg text-black text-center flex-1">
                      {moment(tariner.date).format("ddd, MMM YYYY")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default PaymentHistore;
