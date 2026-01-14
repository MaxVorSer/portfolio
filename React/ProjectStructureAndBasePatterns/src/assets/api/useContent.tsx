import { useQuery } from "@tanstack/react-query";
import { queryClient } from "./queryClient";
import { getRestaurants} from "./api";


export function useCardQuery () {
  const cardListQuery = useQuery({
    queryFn:()=>getRestaurants(),
    queryKey: ["post"] 
  }, queryClient)
  return  cardListQuery;
} 


