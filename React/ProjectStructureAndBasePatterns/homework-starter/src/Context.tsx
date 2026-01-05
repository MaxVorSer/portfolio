import { createContext } from "react"
import { Restaurant } from "./assets/api/api";
import { UseQueryResult } from "@tanstack/react-query";


type RestaurantsContextType = {
  data: Restaurant[] | undefined;
  raiting: (id: number, raiting: number) => void | Restaurant[] ;
  status: UseQueryResult['status'];
};


export const RestaurantsContext = createContext<RestaurantsContextType>({
  data: undefined,
  raiting: () => {},
  status: 'pending'
});