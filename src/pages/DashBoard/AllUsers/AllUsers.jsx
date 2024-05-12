import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../useHooks/useAxios";
import {  TiTrash } from "react-icons/ti";

const AllUsers = () => {
  const axiosSucure = useAxios();
  const { data: users = [] } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosSucure.get("/users");
      return res.data;
    },
  });


  

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
                  <td></td>
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
