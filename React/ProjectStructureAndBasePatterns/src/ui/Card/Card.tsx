import { StarRating } from "../../Srars/Stars";
import "../Card/Card.css";



type TProps = {
  id: string | number;
  name: string;
  description: string, 
  raiting: number, 
  url: string
}

export const Card = ({id, name, description, raiting, url}: TProps) =>{
 
   return (
    <div className="card">
    <img src={url}/>
    <h3>  {name}</h3>
    <p>{description}</p>
    <StarRating 
    raitingStar = {raiting}
    id = {id}
    />
    </div>
  )
}



