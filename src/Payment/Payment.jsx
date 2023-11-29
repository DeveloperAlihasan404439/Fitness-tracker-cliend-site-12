
import SectionTitle from '../Sheard/SectionTitle/SectionTitle';

import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
} from "@stripe/react-stripe-js";
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KP);
const Payment = () => {
    const options = {
        mode: 'payment',
        amount: 1099,
        currency: 'usd',
        appearance: {
          /*...*/
        },
      };
    return (
        <div>
            <SectionTitle heading='Pay Bile' title="pleach Peamint Bill"/>
            <div className="w-11/12 mx-auto">
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm/>
        </Elements>
      </div>
        </div>
    );
};

export default Payment;