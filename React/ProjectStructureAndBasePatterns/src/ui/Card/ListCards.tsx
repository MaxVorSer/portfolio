
import { Card } from "./Card";
import "../Card/Card.css";
import { Loader } from "../Loader";
import { useContext, useState } from "react";
import { RestaurantsContext } from "../../Context";


interface Restaurant {
  id: string
  name: string
  description: string
  raiting: number
  url: string
}

export const CardList = () => {
  
  const {data: cardQueryData, status: cardQuerStatus } = useContext(RestaurantsContext)
    const [searchSttring, setSearchString] = useState("");
  if(cardQueryData === undefined){
    return <Loader/>
   } 
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
  setSearchString(event.target.value)
  }
  console.log(cardQueryData)
  
   const filterList:Restaurant[] = cardQueryData.filter((item:Restaurant) => item.name.toLocaleLowerCase().includes(searchSttring.toLocaleLowerCase()));

    switch (cardQuerStatus){
    case "pending":
     return <Loader/>
     case "success":
     return  <div> 
              <div className="div_input">
              <input className="input" type="text" value={searchSttring} onChange={handleSearch}  placeholder="Search for restaurants"/>
              </div>
              <div>          
              <ul className="Card-list-view">
                  {filterList.map((data: Restaurant, index:number) => (
                  <li className="card-list__item" key={index}>
                  <Card  
                        id = {data.id}
                        url={data.url} 
                        name={data.name}
                        description={data.description}
                        raiting ={data.raiting}
                  />
                  </li>
                  ))}
              </ul>
              </div>
              </div>
     case "error":
    
 }};