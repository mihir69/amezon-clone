import React, { useState, useEffect } from 'react'
import home_css from './Home.module.css'
import amezon_poster from './img/amezon_img.jpg'
import axios from "axios";

import Product from './Product'
import img_book_1 from './img/img_book_1.jpg'


function Home() {
    const [Product_data, setProduct] = useState([]);
    const [, setErr] = useState('');
    const options = {
        method: 'GET',
        url: 'https://amazon-products1.p.rapidapi.com/product',
        params: {country: 'IN', asin: 'B08BF4CZSV'},
        headers: {
          'x-rapidapi-key': 'a166e64079msh315a9bda66d13efp1fc043jsne8ed229c9c33',
          'x-rapidapi-host': 'amazon-products1.p.rapidapi.com'
        }
      };
     const all_product = Product_data.map( 
         pro => {
             return  <Product
             id={pro.id}
             title={pro.title}
             price={pro.price}
             rating={3}
             image={pro.image}
         />
         }
     )

    useEffect(() => {
        getProduct();
    }, [])
    const getProduct = () => {
        axios.request(options)
            .then(
                res => {
                    console.log("yeshh got data" + res.data)
                    setProduct([res.data])
                }
            )
            .catch(error => {
                console.log("my error ===>" + error)
                setErr(error.message)
            })
    }
    return (
        <div className={home_css.home}>
            <div className={home_css.home__container}>
                <img
                    className={home_css.home__image}
                    src={amezon_poster}
                    alt="poster"
                />

   {
       all_product
   }
                <div className={home_css.home__row}>
                    <Product
                        id="23453245"
                        title="book1"
                        price={233.23}
                        rating={3}
                        image={img_book_1}
                    />
                    <Product
                        id="23453245"
                        title="book1"
                        price={233.23}
                        rating={3}
                        image={img_book_1}
                    />
                </div>
                <div className={home_css.home__row}>
                    <Product
                        id="23453245"
                        title="book1"
                        price={233.23}
                        rating={3}
                        image={img_book_1}
                    />
                    <Product
                        id="23453245"
                        title="book1"
                        price={233.23}
                        rating={5}
                        image={img_book_1}
                    />
                    <Product
                        id="23453245"
                        title="book1"
                        price={233.23}
                        rating={3}
                        image={img_book_1}
                    />
                </div>
                <div className={home_css.home__row}>
                    <Product
                        id="23453245"
                        title="book1"
                        price={233.23}
                        rating={3}
                        image={img_book_1}
                    />
                </div>
            </div>
        </div>


    )
}

export default Home


