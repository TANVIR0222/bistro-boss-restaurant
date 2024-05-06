import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useCard = () => {
  const axiosSucure = useAxios();

  const { data: card = [] } = useQuery({
    queryKey: ["card"],
    queryFn: async () => {
      const res = await axiosSucure.get("/cards");
      return res.data;
    },
  });

  return [card]
};

export default useCard;
