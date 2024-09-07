import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="dashboard box_over">
      <div className="center_div">
        <h1 className="heading">Profile</h1>
        <div className="buy_now">
          <Link to="/">
            <button>Logout</button>
          </Link>
        </div>
        <p style={{ color: "gray" }}>🚧 Work in Progress!</p>
      </div>
    </div>
  );
};

export default Profile;
