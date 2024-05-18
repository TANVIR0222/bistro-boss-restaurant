import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxios from "../../../useHooks/useAxios";
import useCard from "../../../useHooks/useCard";
import useAuth from "../../../useHooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckOutForm = () => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const naviget = useNavigate();
  const element = useElements();
  const { user } = useAuth();
  const [transactionId, settransactionId] = useState("");
  const axiosSucure = useAxios();
  const [cart, refetch] = useCard();
  const totalprice = cart.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    if (totalprice > 0) {
      axiosSucure
        .post("/create-payment-intent", { price: totalprice })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSucure, totalprice]);

  // ------- stripe-git->  0-Card-Minimal.js--------
  const handelSub = async (event) => {
    event.preventDefault();

    if (!stripe || !element) {
      return;
    }

    const card = element.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payment error Method -> ", error);
      setError(error.message);
    } else {
      console.log("Payment Method ok ->  ", paymentMethod);
      setError("");
    }
    // ------- stripe-git->  0-Card-Minimal.js -> end --------

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log("paymentIntent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction Id ", paymentIntent.id);
        settransactionId(paymentIntent.id);

        // now payment save in database
        const payment = {
          email: user?.email,
          price: totalprice,
          transactionId: paymentIntent.id,
          date: new Date(),
          cardIds: cart.map((item) => item._id),
          menuItemIds: cart.map((item) => item.menuId),
          status: "padning",
        };

        const res = await axiosSucure.post("/payments", payment);
        console.log("payment save ->", res);
        refetch();

        if (res.data?.paymentResult?.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Thank You ",
            showConfirmButton: false,
            timer: 1500,
          });
          naviget('/dashboard/paymentHistory')
        }
      }
    }
  };
  return (
    <div>
      <form onSubmit={handelSub}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-sm btn-primary my-4"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        <p className="text-red-600">{error}</p>
        {transactionId && (
          <p className="text-success"> Transaction Complite </p>
        )}
      </form>
    </div>
  );
};

export default CheckOutForm;
