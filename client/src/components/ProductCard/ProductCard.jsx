import React from 'react'
import "./ProductCard.css"
import { product } from '../../assets/assets'

const ProductCard = () => {
  return (
    <div className="product_item">
        <img src={product} alt="" />
        <div>Aries Agro Limited Agromin Gold</div>
        <div className="strike">Rs 2060.00</div>
        <div className="sale_price">Rs 3060</div>
    </div>
  )
}

export default ProductCard