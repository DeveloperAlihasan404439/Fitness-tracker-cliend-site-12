import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../Sheard/Hooks/useAuth";
import useTotleCarts from "./useTotleCarts";
import { useParams } from "react-router-dom";
import useAxiosPublick from "../Sheard/Hooks/useAxiosPublick";

const CheckoutForm = () => {
  const { user } = useAuth();
  const [error, setError] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const axiosPublick = useAxiosPublick()
  const { id } = useParams();
  const { booking } = useTotleCarts();
  const bookingInfo = booking?.find((bookingInfo) => bookingInfo._id === id);

  

  const [clientSecret, setClientSecret] = useState("");
  const [transictionId, setTransictionId] = useState("");

  
   
  const totalPrice = bookingInfo?.items?.reduce(
    (total, item) => total + parseInt(item.price),
    0
  );
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
 
  useEffect(() => {
    if (totalPrice)
    axiosPublick
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
  }, [axiosPublick, totalPrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements || !clientSecret) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }
    // confrim cart payment
    const { paymentIntent, error: clientError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (clientError) {
      console.log("client error");
    } else {
      if (paymentIntent.status === "succeeded") {
        console.log("success", paymentIntent);
        setTransictionId(paymentIntent.id)

        // new payment histry in the database
        const paymentInfo = {
          user_name: bookingInfo.user_name,
          user_email: bookingInfo.user_email,
          transictionId: transictionId,
          price: totalPrice,
          tranier_name: bookingInfo.tranier_name,
          tranier_email: bookingInfo.tranier_email,
          date: new Date().toLocaleDateString(undefined, options),
        };
        axiosPublick.post("/payment/data", paymentInfo).then((res) => {
          if (res.data?.insertedId) {
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Successfull payment",
              showConfirmButton: false,
              backgroundColor: 'black',
              color: 'white',
              timer: 1500,
            });
          }
        });
      }
    }
  };
  return (
    <div>
            <form onSubmit={handleSubmit}>
                <CardElement

                    options={{
                        style: {
                            base: {
                                fontSize: '20px',
                                color: '#424770',
                                '::placeholder': {

                                    backgroundColor: '#0060efb7',
                                    color: 'white',
                                },
                            },
                            invalid: {
                                color: 'black',
                            },
                        },
                    }}
                />

                <button className="btn btn-primary ms:w-[50px] text-white rounded-md w-1/2 mx-auto flex justify-center mt-5" disabled={!stripe || !clientSecret}>Confirm Payment</button>

                <p className="text-black text-center mt-3 font-semibold">{error}</p>
                {/* {
                    transactionId && <p className="text-[#488DF4] text-center mt-3 font-semibold">Your Transaction Id: <span className="text-black">{transactionId}</span> </p>
                } */}
            </form>
        </div>
  );
};

export default CheckoutForm;
