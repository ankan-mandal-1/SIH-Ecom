import React from 'react'
import "./SingleProduct.css"
import { bag, productSingle } from '../../assets/assets'

const SingleProduct = () => {
  return (
    <div className='single_product'>
      <div className="image_container">
        <img src={productSingle} alt="" />
      </div>
      <div className="title">
        Aries Agro limited Agromin Gold
      </div>
      <div className="strike">Rs 4160.00</div>
      <div className="sale_price">Rs 3060</div>
      <div className="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente eveniet maxime illo molestias ducimus, vero quam excepturi minima praesentium. Fugit quasi necessitatibus repellat quod corrupti. Quam maxime dolore porro necessitatibus.
        </div>
        <div className="cart_btn">
          <button className="add_to_cart">
            <img src={bag} className="bag_icon"/>
            Add to Cart
          </button>
        </div>
    </div>
  )
}

export default SingleProduct