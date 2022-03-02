import React from 'react'
import product_css from './Product.module.css'
import { useStateValue } from './StateProvider'
import ReactStars from 'react-stars'

function Product({ id, title, price, rating, image }) {
  const [, dispatch] = useStateValue()

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    })
  }

  return (
    <div className={product_css.product}>
      <div className={product_css.product__info}>
        <p>{title}</p>
        <div className={product_css.product__price}>
          <small>$</small>
          <p>{price}</p>
        </div>
        <div className={product_css.product__rating}>
          <ReactStars count={5} value={rating} size={24} color2={'#ffd700'} />
        </div>
      </div>
      <img src={image} alt="book" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  )
}

export default Product
