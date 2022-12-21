import React from "react";
import { useNavigate } from "react-router-dom";

const HomeDashboard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("addproduct");
  };

  return (
    <header>
      <div className="dashboard-wrapper">
        <h1>Product List</h1>
        <div className="btn-wrapper">
          <button className="btn" onClick={handleClick}>
            add
          </button>
          <button className="btn" id="delete-product-btn">
            mass delete
          </button>
        </div>
      </div>
      <hr />
    </header>
  );
};

export default HomeDashboard;
