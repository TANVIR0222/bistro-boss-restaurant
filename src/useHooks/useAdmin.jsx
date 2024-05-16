import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useAdmin = () => {

    const {user} = useAuth();
    const axiosSucure = useAxios();
    const {data : isAdmin , isPending : isAdminLoading} = useQuery({
        queryKey: [user?.email , 'isAdmin'],
        queryFn: async () => {
            const res = await axiosSucure.get(`/users/admin/${user.email}`) 
            console.log(res.data , 'tanvir');
            return res.data?.admin;
        }
    })
    return [isAdmin , isAdminLoading]
};

export default useAdmin;