import { useContext, useState } from 'react';
import StarIcon from '../assets/star.svg?react'
import "./Stars.css"
import { RestaurantsContext } from '../Context';

interface StarRating {
  id: number
  raitingStar: number
}

export function StarRating ({id, raitingStar}:StarRating){

const [currentItem, setItem] = useState(raitingStar-1);
const [hoverItem, setHoverItem] = useState<number | undefined>(undefined);
const stars = Array(5).fill(0);
const {raiting: onStarClick } = useContext(RestaurantsContext)

const handler  = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
  event.preventDefault();
  setItem(index)
  onStarClick(id, index+1)
  }

return (
  <div className='div-stars'>
    {
  stars.map((item, index) => {
    const curreentStyle = index <= currentItem || index <= hoverItem ?  "fill" : "";
  return (
         <button className='div-star'
          key={index}
          onClick={()=>handler(event, index)}
          onMouseMove={()=>setHoverItem(index)}
          onMouseOut={ ()=>setHoverItem (index)}        
         >
          <StarIcon width={18} height={18} className= {`${curreentStyle}`} />           
      </button>
    )
  })}
  </div>
 )
}