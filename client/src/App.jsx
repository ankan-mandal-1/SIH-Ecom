import { useState } from "react";
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import Cart from "./pages/Cart/Cart";
import CartList from "./pages/CartList/CartList";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Address from "./pages/Address/Address";
import ThankYou from "./pages/ThankYou/ThankYou";
import Notification from "./pages/Notification/Notification";
import Profile from "./pages/Profile/Profile";
import Scan from "./pages/Scan/Scan";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

function App() {
  return (
    <div className="container">
      <div className="header_bg"></div>

      <div>
        <SignedOut>
          <SignInButton
            style={{
              width: 248,
              height: 60,
              background: "#34A853",
              boxShadow: "0px 10px 40px rgba(122.04, 128.85, 190.19, 0.16)",
              borderRadius: 28.5,
              textAlign: "center",
              color: "white",
              fontSize: 18,
              fontFamily: "Average Sans",
              fontWeight: "400",
              textTransform: "uppercase",
              letterSpacing: 1.44,
              wordWrap: "break-word",
            }}
          />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
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
  );
}

export default App;
