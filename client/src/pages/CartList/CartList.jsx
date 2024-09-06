import React, { useState } from 'react'
import "./CartList.css"
import { product } from '../../assets/assets'
import { Link } from 'react-router-dom'

const CartList = () => {

    const [count, setCount] = useState(1)

    const decrement = () => {
        if(count === 1){
            return;
        }
        setCount(prev => prev - 1)
    }

    const removeProduct = () => {

    }

  return (
    <div className="dashboard box_over">
        <div className="center_div">
            <h1 className="heading">Cart</h1>
            <div className="cart_list">
                <div className="cart_item">
                    <div>
                        <img src={product} alt="" />
                    </div>
                    <div style={{textAlign: "left"}}>
                        <div className="name">Agri Protex</div>
                        <div className="price">Rs 2049</div>
                    </div>
                    <div>
                        <button className="remove" onClick={removeProduct}>X</button>
                        <div className="counter">
                            <button onClick={decrement}>-</button>
                                {count}
                            <button onClick={() => setCount(prev => prev + 1)}>+</button>
                        </div>
                    </div>
                </div>

                <div className="cart_item">
                    <div>
                        <img src={product} alt="" />
                    </div>
                    <div style={{textAlign: "left"}}>
                        <div className="name">Agri Protex</div>
                        <div className="price">Rs 2049</div>
                    </div>
                    <div>
                        <button className="remove" onClick={removeProduct}>X</button>
                        <div className="counter">
                            <button onClick={decrement}>-</button>
                                {count}
                            <button onClick={() => setCount(prev => prev + 1)}>+</button>
                        </div>
                    </div>
                </div>

                <div className="cart_item">
                    <div>
                        <img src={product} alt="" />
                    </div>
                    <div style={{textAlign: "left"}}>
                        <div className="name">Agri Protex</div>
                        <div className="price">Rs 2049</div>
                    </div>
                    <div>
                        <button className="remove" onClick={removeProduct}>X</button>
                        <div className="counter">
                            <button onClick={decrement}>-</button>
                                {count}
                            <button onClick={() => setCount(prev => prev + 1)}>+</button>
                        </div>
                    </div>
                </div>

                <div className="promocode">
                    <input type="text" placeholder='Promo Code'/>
                    <button>Apply</button>
                </div>

                <div className="total_price">
                    <div className="total_price_item">
                        <div>Subtotal</div>
                        <div>Rs 2404</div>
                    </div>
                    <div className="total_price_item">
                        <div>Taxes & Delivery</div>
                        <div>Rs 224</div>
                    </div>
                    <div className="total_price_item">
                        <div>Total</div>
                        <div>Rs 2628</div>
                    </div>
                </div>

                <Link to="/address">
                    <div className="buy_now">
                        <button>BUY NOW</button>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default CartList