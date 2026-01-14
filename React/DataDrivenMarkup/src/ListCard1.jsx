import {ItemCard} from "./ItemCard";
import { products } from "./products";
import "./style.css"

export const ListCard = () => {
    return (
    <div>
        <ul className="ul">
          {products.map((item) => (
            <li key={item.id}>
              <ItemCard
                img={item.imageUrl}
                title = {item.title}
                price = {item.price}
                discount={item.discount}
              />
            </li>
          ))}                 
        </ul>
    </div>
    );
}

// console.log({products.map((item) => (
//   <li>
//   <ItemCard
// title = {item.title}
// price = {item.price}
// />
//   </li>
// ))}  )