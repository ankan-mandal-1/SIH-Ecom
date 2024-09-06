import React from 'react'
import "./Cart.css"
import ProductCard from '../../components/ProductCard/ProductCard'

const Cart = () => {
  return (
    <div className="dashboard box_over">
        <div className="center_div">
            <h1 className="heading">Agri Grow</h1>
            
            <div className="cart_heading">
                <h3>Best Deal</h3>
                <h2>Offer Products</h2>
            </div>
            <p className="small_gray_text">Available Products</p>
            <div className="product_content">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    </div>
  )
}

export default Cart