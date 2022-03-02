import React from 'react'
import checkoutproduct_css from './CheckoutProduct.module.css'
import { useStateValue } from './StateProvider'
import ReactStars from 'react-stars'
function CheckoutProduct({id,image,title,price,rating}) {
    const [{},dispatch] = useStateValue();
    const removeFromBasket = () =>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id,
        })
    }
    return (
        <div className={checkoutproduct_css.checkoutProduct}>
          <img className={checkoutproduct_css.checkoutProduct__image}
               src={image} alt='image of items'/>  
              
           <div className={checkoutproduct_css.checkoutProduct__info}>
          <p className={checkoutproduct_css.checkoutProduct__title}>{title}</p>
           <p className={checkoutproduct_css.checkoutProduct__price}>
               <small>$</small>
               <strong>{price}</strong>
           </p>
           <div className={checkoutproduct_css.checkoutProduct__rating}>
           {
            <ReactStars
                        count={5}
                        size={24}
                        color2={'#ffd700'}
                        value={rating} />

           }

           </div>
    <button onClick={removeFromBasket}>Remove items</button>
           </div>    
        </div>
    )
}

export default CheckoutProduct
