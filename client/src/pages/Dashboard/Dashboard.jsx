import React from "react";
import "./Dashboard.css";
import { banner } from "../../assets/assets";
import ProductCard from "../../components/ProductCard/ProductCard";
import Category from "../../components/Category/Category";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard box_over">
      <div className="center_div">
        <h1 className="heading">Agri Grow</h1>
        <div className="banner">
          <img src={banner} alt="banner" />
        </div>

        <Category />

        <div className="category">
          <h2>Recommended Products</h2>

          <div className="product_content">
            <Link to="/product">
              <ProductCard />
            </Link>
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
