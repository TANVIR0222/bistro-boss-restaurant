import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../useHooks/useAuth";
import useAxios from "../../../useHooks/useAxios";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSucure = useAxios();

  const { data: payment = [] } = useQuery({
    queryKey: ["payment", user?.email],
    queryFn: async () => {
      const res = await axiosSucure.get(`/payments/${user.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <h1>Total Payment : {payment.length}</h1>

        <div className="overflow-x-auto w-full">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Transaction Id</th>
                <th>Email</th>
                <th>Payment</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {payment.map((item,index) => <tr key={item._id}>
                <th>{index+1}</th>
                <td>{item.transactionId}</td>
                <td>{item.email}</td>
                <td>${item.price}</td>
                <td>{item.date}</td>
              </tr>)}
            </tbody>
          </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
