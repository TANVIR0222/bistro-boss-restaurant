import { TiTrash } from "react-icons/ti";
import useCard from "../../../useHooks/useCard";
import Swal from "sweetalert2";
import useAxios from "../../../useHooks/useAxios";
import { Link } from "react-router-dom";

const Cart = () => {
  //dashbord user data and card deatils
  const [card, refetch] = useCard();
  // total cartd price
  const cartTotle = card.reduce(
    (total, currentIten) => total + currentIten.price,
    0
  );
  // Delet
  const axiosSucure = useAxios();
  const handleDelet = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSucure.delete(`/cards/${id}`).then((res) => {
          refetch();
          console.log(res);
          if (res.data.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  const rounded = cartTotle.toFixed(2);
  return (
    <div className="">
      <div className="uppercase mt-5  flex justify-evenly">
        <h2 className="text-3xl"> Total orders : {card.length} </h2>
        <h2 className="text-3xl"> total price : {rounded} </h2>

        {card.length === 0 ? (
          <button disabled className="btn btn-primary ">Pay</button>
        ) : (
          <Link to="/dashboard/payment">
            <button className="btn btn-primary ">Pay</button>
          </Link>
        )}

        <div className="overflow-x-auto"></div>
      </div>

      <div className="overflow-x-auto mt-12">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="text-xl text-white">
              <th>#</th>
              <th>IMAGE</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {/* cart index ++ */}
            {card.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <th>
                  <button
                    onClick={() => handleDelet(item._id)}
                    className="btn btn-ghost btn-xs"
                  >
                    <TiTrash className="text-2xl text-red-600"></TiTrash>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
