import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../Sheard/Hooks/useAuth";
import useAxios from "../Sheard/Hooks/useAxios";
import useTotleCarts from "./useTotleCarts";

const CheckoutForm = () => {
  const { user } = useAuth();
  const [error, setError] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const axiosSecure = useAxios();
  const { cart,refetch } = useTotleCarts();

  const [clientSecret, setClientSecret] = useState("");
  const [transictionId, setTransictionId] = useState("");

  const totalPrice = cart.reduce(
    (total, item) => total + parseInt(item.price),
    0
  );
  useEffect(() => {
    if (totalPrice)
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
  }, [axiosSecure, totalPrice]);

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
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
            transictionId: paymentIntent.id,
            price: totalPrice,
            date: new Date(),
            cartId: cart.map(items => items._id),
            categoryId: cart.map(item => item.categoryId),
            status: 'panding'
        }
        axiosSecure.post('payment', paymentInfo)
        .then(res => {
            if(res.data?.resutl?.insertedId){
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Successfull payment",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                refetch()
            }
        })
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
                fontSize: "20px",
                color: "#424770",
                "::placeholder": {
                  backgroundColor: "#5b1ae9",
                  color: "white",
                },
              },
              invalid: {
                color: "black",
              },
            },
          }}
        />
        <button
          className="bg-[#5b1ae9] px-3 py-2 ms:w-[50px] text-white rounded-md w-1/2 mx-auto flex justify-center mt-5"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Payment
        </button>

        <p>{error}</p>
        {transictionId && <p>Transiction id : ${transictionId}</p>}
      </form>
    </div>
  );
};

export default CheckoutForm;
