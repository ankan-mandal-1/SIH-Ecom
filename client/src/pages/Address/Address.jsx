import React from 'react'
import "./Address.css"
import { Link } from 'react-router-dom'

const Address = () => {
  return (
    <div className="dashboard box_over">
        <div className="center_div">
            <h1 className="heading">Address</h1>
            <div className='input_container'>
                <div className='input_field'>
                    <label>Full Name</label>
                    <input type="text" placeholder='Full Name' />
                </div>

                <div className="input_field">
                    <label>Mobile Number</label>
                    <input type="text" placeholder='Mobile Number' />
                </div>

                <div className="input_field">
                    <label>Full Address</label>
                    <input type="text" placeholder='Address' />
                </div>

                <div className="input_field">
                    <label>City</label>
                    <input type="text" placeholder='City' />
                </div>

                <div className="input_field">
                    <label>State</label>
                    <input type="text" placeholder='State' />
                </div>

                <div className="input_field">
                    <label>Pin Code</label>
                    <input type="text" placeholder='Pin Code' />
                </div>

                <Link to="/thank-you">
                    <div className="buy_now">
                        <button>PLACE ORDER</button>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Address