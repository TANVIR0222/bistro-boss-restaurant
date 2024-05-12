import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../useHooks/useAxios";
import { TiTrash } from "react-icons/ti";
import { FaUser } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSucure = useAxios();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosSucure.get("/users");
      return res.data;
    },
  });

  //   user update to Admin 

  const handleMakeAdmin = user =>{
    axiosSucure.patch(`/users/admin/${user._id}`)
    .then(res => {
        console.log(res.data);
        if(res.data.modifiedCount){
            refetch();
            Swal.fire({
                position: "ceter",
                icon: "success",
                title: `${user.name} is new Admin`,
                showConfirmButton: false,
                timer: 1500
            });
        }
    })
  }

  //   user delet
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
        axiosSucure.delete(`/users/${id}`).then((res) => {
          if (res.data.deletedId) {
            refetch();
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




  return (
    <div>
      <div className="flex justify-evenly my-4">
        <h2 className="text-3xl">All Users</h2>
        <h2 className="text-3xl">Total Users : {users.length} </h2>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email </th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    { user.role === 'admin' ? 'Admin' 
                        :
                     <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-lg bg-orange-400"
                    >
                      <FaUser className="text-2xl text-white"></FaUser>
                    </button>
                    
                    }
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelet(user._id)}
                      className="btn btn-ghost btn-xs"
                    >
                      <TiTrash className="text-2xl text-red-600"></TiTrash>
                    </button>{" "}
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

export default AllUsers;
