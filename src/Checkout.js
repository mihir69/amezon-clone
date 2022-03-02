import React from 'react'
import checkout_css from './Checkout.module.css';
import amezon__ad from './img/amezon__adtwo.jpg'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal'
function Checkout() {
    const [{basket,user}] = useStateValue();
    const checkout_item = basket.map((item)=>
    <CheckoutProduct
    id={item.id}
    title={item.title}
    price={item.price}
    rating={item.rating}
    image={item.image}
   />
    )
    return (
        <div className={checkout_css.checkout}>
            <div className={checkout_css.checkout__left}>
                <img className={checkout_css.checkout__ad} src={amezon__ad} alt="img" />
                <h3>Hello, {user ? user.email : 'Guest'}</h3>
                <div className={checkout_css.checkout__title}>
                    <h1>items in basket</h1>
                </div>
                
               {checkout_item}
            </div>
            <div className={checkout_css.checkout__right}>
               <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
