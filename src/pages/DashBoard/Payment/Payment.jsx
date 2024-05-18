import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../component/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

const stripePromis = loadStripe(import.meta.env.VITE_PAYMENT_KEY);
const Payment = () => {
    return (
        <div>
            <SectionTitle heading={'Pament'} subheading={'Please pay to eat '} ></SectionTitle>


            <div>
                <Elements stripe={stripePromis}>
                    <CheckOutForm></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;