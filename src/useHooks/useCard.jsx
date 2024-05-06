import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";

const useCard = () => {
  const axiosSucure = useAxios();

  // only  log in user  show data
  const { user } = useAuth();

  const { refetch, data: card = [] } = useQuery({
    queryKey: ["card", user?.email],
    queryFn: async () => {
      const res = await axiosSucure.get(`/cards?email=${user.email}`);
      return res.data;
    },
  });

  return [card, refetch];
};

export default useCard;
