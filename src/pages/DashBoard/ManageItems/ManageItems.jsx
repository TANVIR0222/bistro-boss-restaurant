import { TiEdit, TiTrash } from "react-icons/ti";
import SectionTitle from "../../../component/SectionTitle";
import useMenu from "../../../useHooks/useMenu";
import Swal from "sweetalert2";
import useAxios from "../../../useHooks/useAxios";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu] = useMenu();
  const axiosSucure = useAxios();

  const handleItemDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSucure.delete(`/menu/${item._id}`);
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          console.log(res.data);
          // refetch(); now work
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item.name} has been deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };
  //   const handleItemUpdate = (Item) => {};

  return (
    <div>
      <SectionTitle
        heading={"manage all items"}
        subheading={"Hurry Up!"}
      ></SectionTitle>

      <div>
        <div className="overflow-x-auto w-full">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, index) => (
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
                  <td className="bg-[#D1A054] text-center rounded-xl my-10">
                    <Link to={`/dashboard/updateItem/${item._id}`}>
                      <button className="btn btn-ghost btn-xs">
                        <TiEdit className="text-4xl text-white"></TiEdit>
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleItemDelete(item)}
                      className="btn btn-ghost btn-xs"
                    >
                      <TiTrash className="text-4xl text-red-600"></TiTrash>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
