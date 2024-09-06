import { useState } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard/Dashboard'
import Cart from './pages/Cart/Cart'
import CartList from './pages/CartList/CartList'
import SingleProduct from './pages/SingleProduct/SingleProduct'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Address from './pages/Address/Address'
import ThankYou from './pages/ThankYou/ThankYou'
import Notification from './pages/Notification/Notification'
import Profile from './pages/Profile/Profile'
import Scan from './pages/Scan/Scan'

function App() {

  return (
    <div className="container">
      <div className="header_bg"></div>
      <Routes>
        {/* <Route path="/" element={<Landing />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Cart />} />
        <Route path="/scan" element={<Scan />} />
        <Route path="/cart/list" element={<CartList />} />
        <Route path="/product" element={<SingleProduct />} />
        <Route path="/address" element={<Address />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Navbar />
    </div>
  )
}

export default App
