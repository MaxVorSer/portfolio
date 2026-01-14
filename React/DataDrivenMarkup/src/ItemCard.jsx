import "./style.css"

export const ItemCard = ( {img, title, price, discount}) => {

  return (
    <div className="div_itemCard">
      <img src={img} alt="" className="img"/>
         {discount ? 
      (
        <div className="div_price">
          <p className="p1">{(price - (discount*price))}</p><p className="p2">{price}</p>          
        </div>
      ) : (<p className="p3">{price}</p>)
      }
      <p className="p_title">{title}</p>
    </div>
  ); 
};